'use strict';
/**
 * NAPCS_Dashboard_School_Builder_v1.js
 * PLT Strategies Group, Inc. | NAPCS Unionization Research Project
 *
 * Builds 6 regional napcs_schools_*.js files for the dashboard map.
 * Reads directly from project schema (napcsStatus / napcsSubStatus) — no conversion layer.
 * Merges Tier 1 (active research, project files) + Tier 2 (non-union, offline files).
 * Tier 1 always wins: if a school appears in both, Tier 1 record is used.
 * Coordinates sourced from registry geo_lookup.js.
 *
 * Regional output files (match Tier 2 architecture per Data Architecture v2):
 *   napcs_schools_ca.js          — CA only
 *   napcs_schools_fl_south.js    — FL, GA, LA
 *   napcs_schools_az_west.js     — AZ, CO, NM, WA
 *   napcs_schools_northeast.js   — NY, NJ, PA, CT, DE, ME, MA, RI, DC
 *   napcs_schools_great_lakes.js — MI, OH, WI
 *   napcs_schools_midwest.js     — IL, MO, MN
 *
 * Usage: node NAPCS_Dashboard_School_Builder_v1.js
 */

const fs   = require('fs');
const path = require('path');

const LOCAL   = '/home/claude';
const PROJECT = '/mnt/project';
const OUTPUT  = '/mnt/user-data/outputs';

// ─── Geo lookup ──────────────────────────────────────────────────────────────
const GEO_LOOKUP = require(LOCAL + '/geo_lookup.js');
const byNapcs = GEO_LOOKUP.byNapcs || {};
const byNces  = GEO_LOOKUP.byNces  || {};

function getGeo(record) {
  // Try napcsId first (most reliable for Tier 1)
  if (record.napcsId && byNapcs[record.napcsId]) return byNapcs[record.napcsId];
  // Try ncesId variants
  const nces = record.ncesId || record.nces || record.nces_id || record.ncesID || '';
  if (nces && byNces[String(nces).trim()]) return byNces[String(nces).trim()];
  // Try napcsId prefix match for NAPCS-ADD IDs (no registry entry)
  return null;
}

// ─── Regional definitions ────────────────────────────────────────────────────
const REGIONS = {
  ca:          { states: ['CA'],                          varName: 'NAPCS_SCHOOLS_CA' },
  fl_south:    { states: ['FL','GA','LA'],                varName: 'NAPCS_SCHOOLS_FL_SOUTH' },
  az_west:     { states: ['AZ','CO','NM','WA'],           varName: 'NAPCS_SCHOOLS_AZ_WEST' },
  northeast:   { states: ['NY','NJ','PA','CT','DE','ME','MA','RI','DC'], varName: 'NAPCS_SCHOOLS_NORTHEAST' },
  great_lakes: { states: ['MI','OH','WI'],                varName: 'NAPCS_SCHOOLS_GREAT_LAKES' },
  midwest:     { states: ['IL','MO','MN'],                varName: 'NAPCS_SCHOOLS_MIDWEST' },
};

// HI and MD: all schools are STRUCTURAL — no Tier 2, all in Tier 1
// OR: all dependent — included in state file
// These states don't map to a Tier 2 region file but DO have Tier 1 records
// Add them to an appropriate region for dashboard display:
// HI → az_west (closest geographic bucket, or we can add a pacific region later)
// MD → northeast
// OR → az_west
const EXTRA_STATE_REGION = { HI: 'az_west', MD: 'northeast', OR: 'az_west' };

// ─── Tier 1 state file map ───────────────────────────────────────────────────
// CA uses composite file; all others use [st]_state_data.js
const TIER1_STATE_FILES = {
  AZ: LOCAL+'/az_state_data.js',
  CO: LOCAL+'/co_state_data.js',
  CT: LOCAL+'/ct_state_data.js',
  DC: LOCAL+'/dc_state_data.js',
  DE: LOCAL+'/de_state_data.js',
  FL: LOCAL+'/fl_state_data.js',
  GA: LOCAL+'/ga_state_data.js',
  HI: LOCAL+'/hi_state_data.js',
  IL: LOCAL+'/il_state_data.js',
  LA: LOCAL+'/la_state_data.js',
  MA: LOCAL+'/ma_state_data.js',
  MD: LOCAL+'/md_state_data.js',
  ME: LOCAL+'/me_state_data.js',
  MI: LOCAL+'/mi_state_data.js',
  MN: LOCAL+'/mn_state_data.js',
  MO: LOCAL+'/mo_state_data.js',
  NJ: LOCAL+'/nj_state_data.js',
  NM: LOCAL+'/nm_state_data.js',
  NY: LOCAL+'/ny_state_data.js',
  OH: LOCAL+'/oh_state_data.js',
  OR: LOCAL+'/or_state_data.js',
  PA: LOCAL+'/pa_state_data.js',
  RI: LOCAL+'/ri_state_data.js',
  WA: LOCAL+'/wa_state_data.js',
  WI: LOCAL+'/wi_state_data.js',
};

// ─── Tier 2 file map ─────────────────────────────────────────────────────────
const TIER2_FILES = [
  LOCAL+'/nonunion_ca.js',
  LOCAL+'/nonunion_fl_south.js',
  LOCAL+'/nonunion_az_west.js',
  LOCAL+'/nonunion_northeast.js',
  LOCAL+'/nonunion_great_lakes.js',
  LOCAL+'/nonunion_midwest.js',
];

// ─── Status helpers ──────────────────────────────────────────────────────────
// Map napcsStatus/napcsSubStatus to dashboard display bucket.
// These buckets drive dot color and filter visibility.
// Kept in project schema terms — index.html reads napcsStatus directly.
function getDashboardStatus(s) {
  const status = s.napcsStatus || '';
  const sub    = s.napcsSubStatus || '';

  if (status === 'UNIONIZED') {
    if (sub === 'INDEPENDENT' || sub === 'CONFIRMED' || sub === 'CERTIFIED_NO_CBA') return 'CONFIRMED';
    if (sub.startsWith('STRUCTURAL') || sub === 'DEPENDENT') return 'DEPENDENT';
    return 'CONFIRMED'; // fallback
  }
  if (status === 'DEPENDENT') return 'DEPENDENT';
  if (status === 'NOT_UNIONIZED') {
    if (sub === 'ORGANIZING' || sub === 'ORGANIZING_STALLED' || sub === 'VOTE_WITHDRAWN') return 'ORGANIZING';
    if (sub === 'WATCH') return 'ORGANIZING'; // WATCH shows as Organizing dot (amber)
    if (sub === 'DECERTIFIED') return 'DECERTIFIED';
    return 'UNVERIFIED'; // NON_UNION, NOT_RESEARCHED, UNVERIFIED
  }
  if (status === 'CLOSED') {
    if (sub === 'HISTORICALLY_ORGANIZED' || sub === 'INDEPENDENT') return 'CLOSED';
    return null; // Non-unionized closed schools not shown per sponsor directive
  }
  if (status === 'UNVERIFIED' || status === 'NON_UNION') return 'UNVERIFIED';
  if (status === 'ORGANIZING') return 'ORGANIZING';
  if (status === 'DECERTIFIED') return 'DECERTIFIED';
  return 'UNVERIFIED';
}

function shouldShow(s) {
  // Don't show non-unionized closed schools, FUTURE, or intentionally excluded
  const status = s.napcsStatus || '';
  const sub    = s.napcsSubStatus || '';
  const opStatus = (s.operatingStatus || '').toLowerCase();
  if (opStatus === 'future') return false;
  if (status === 'CLOSED' && sub !== 'HISTORICALLY_ORGANIZED' && sub !== 'INDEPENDENT') return false;
  // CLOSED/TRANSITIONED from Tier 2 — don't show
  if (status === 'CLOSED/TRANSITIONED') return false;
  const dashStatus = getDashboardStatus(s);
  return dashStatus !== null;
}

// ─── Record builder ──────────────────────────────────────────────────────────
function buildRecord(s, state) {
  const geo = getGeo(s);
  const dashStatus = getDashboardStatus(s);

  return {
    napcsId:       s.napcsId || null,
    name:          s.name || s.nameDisplay || '',
    city:          s.city || '',
    state:         state,
    lat:           geo ? geo.lat : null,
    lng:           geo ? geo.lng : null,
    // Full project schema fields — index.html reads these directly
    napcsStatus:    s.napcsStatus || 'NOT_UNIONIZED',
    napcsSubStatus: s.napcsSubStatus || 'NON_UNION',
    napcsOrgMethod: s.napcsOrgMethod || null,
    certStatus:     s.certStatus || null,
    // Dashboard display bucket (drives dot color + filter)
    status:         dashStatus,
    // Research fields
    union:          s.union || '',
    dateUnionized:  s.dateUnionized || s.date || '',
    cbaStatus:      s.cbaStatus || '',
    lb:             s.nlrbRegion || s.lb || '',
    lb_abbrev:      s.nlrbRegionCode || s.lb_abbrev || '',
    website:        s.website || null,
    // Tier 2 flag — for dashed-circle rendering
    tier2:          s._tier2 || false,
  };
}

// ─── Load Tier 1 schools ─────────────────────────────────────────────────────
console.log('\n── Loading Tier 1 state files ──');
const tier1Records = {}; // napcsId → record (for dedup)
const tier1ByState = {}; // state → [records]
const tier1Errors = [];

// CA — composite file
try {
  const ca = require(LOCAL + '/ca_state_report_data.js');
  const schools = ca.SCHOOLS || [];
  tier1ByState['CA'] = [];
  schools.forEach(s => {
    if (!shouldShow(s)) return;
    const rec = buildRecord(s, 'CA');
    if (s.napcsId) tier1Records[s.napcsId] = true;
    tier1ByState['CA'].push(rec);
  });
  console.log('CA: ' + tier1ByState['CA'].length + ' records from composite file');
} catch(e) {
  tier1Errors.push('CA: ' + e.message.slice(0,100));
  console.log('CA ERROR: ' + e.message.slice(0,100));
}

// All other states
Object.entries(TIER1_STATE_FILES).forEach(([st, filePath]) => {
  try {
    const m = require(filePath);
    const schools = m.SCHOOLS || [];
    const region = Object.entries(REGIONS).find(([,r]) => r.states.includes(st))?.[0]
                || EXTRA_STATE_REGION[st];

    tier1ByState[st] = [];
    schools.forEach(s => {
      if (!shouldShow(s)) return;
      const rec = buildRecord(s, st);
      if (s.napcsId) tier1Records[s.napcsId] = true;
      tier1ByState[st].push(rec);
    });

    // Also check MONITORING_QUEUE for WATCH entries not in SCHOOLS
    const mq = m.MONITORING_QUEUE;
    if (Array.isArray(mq)) {
      mq.forEach(item => {
        if (!item.watchBasis) return; // only entries with explicit watchBasis signal
        // Skip if already handled via SCHOOLS array
        if (item.napcsId && tier1Records[item.napcsId]) return;
        // Build a virtual school record from MQ entry
        const nces = item.nces || item.ncesId || null;
        const rec = buildRecord({
          napcsId:       item.napcsId || null,
          ncesId:        nces,
          name:          item.schoolName || item.target || 'Monitoring Queue Entry',
          city:          item.city || '',
          napcsStatus:   'NOT_UNIONIZED',
          napcsSubStatus:'WATCH',
          napcsOrgMethod: typeof item.watchBasis === 'string' && item.watchBasis.length < 10 ? item.watchBasis : 'MEDIUM',
        }, st);
        if (item.napcsId) tier1Records[item.napcsId] = true;
        if (rec.lat && rec.lng) { // only add if geo-locatable (skip pure network entries)
          tier1ByState[st].push(rec);
        }
      });
    }

    console.log(st + ': ' + tier1ByState[st].length + ' records');
  } catch(e) {
    tier1Errors.push(st + ': ' + e.message.slice(0,100));
    console.log(st + ' ERROR: ' + e.message.slice(0,80));
  }
});

if (tier1Errors.length) {
  console.log('\nTier 1 errors:', tier1Errors);
}

// ─── Load Tier 2 schools ─────────────────────────────────────────────────────
console.log('\n── Loading Tier 2 files ──');
const tier2ByState = {};
const tier2Errors = [];

TIER2_FILES.forEach(filePath => {
  try {
    const m = require(filePath);
    const schools = m.SCHOOLS || [];

    let count = 0;
    schools.forEach(s => {
      // Determine state
      const st = s.stateCode || s.state || s.st || '';
      if (!st) return;

      // Skip if this napcsId is already in Tier 1
      if (s.napcsId && tier1Records[s.napcsId]) return;

      // Skip non-displayable records
      const opStatus = (s.operatingStatus || '').toLowerCase();
      if (opStatus === 'future') return;
      const ns = s.napcsStatus || 'UNVERIFIED';
      if (ns === 'CLOSED/TRANSITIONED' || ns === 'FUTURE') return;
      if (ns === 'CLOSED' && (s.napcsSubStatus !== 'HISTORICALLY_ORGANIZED')) return;

      // Mark as Tier 2 for dashed-circle rendering
      s._tier2 = true;

      const rec = buildRecord(s, st);
      if (!tier2ByState[st]) tier2ByState[st] = [];
      tier2ByState[st].push(rec);
      count++;
    });
    console.log(path.basename(filePath) + ': ' + count + ' usable records');
  } catch(e) {
    tier2Errors.push(path.basename(filePath) + ': ' + e.message.slice(0,100));
    console.log(path.basename(filePath) + ' ERROR: ' + e.message.slice(0,80));
  }
});

if (tier2Errors.length) console.log('\nTier 2 errors:', tier2Errors);

// ─── Assemble regional files ──────────────────────────────────────────────────
console.log('\n── Building regional output files ──');

const header = [
  '// NAPCS Unionization Research Project | PLT Strategies Group, Inc.',
  '// Auto-generated by NAPCS_Dashboard_School_Builder_v1.js',
  '// Data currency date: June 5, 2026',
  '// Source: Tier 1 project state data files + Tier 2 offline nonunion files',
  '// Schema: napcsStatus / napcsSubStatus — no conversion layer',
  '// DO NOT EDIT MANUALLY — rebuild from source files',
  '//',
].join('\n');

const outputFiles = [];

Object.entries(REGIONS).forEach(([regionKey, cfg]) => {
  const allStates = [...cfg.states];

  // Add extra states that belong here (HI, MD, OR)
  Object.entries(EXTRA_STATE_REGION).forEach(([st, reg]) => {
    if (reg === regionKey && !allStates.includes(st)) allStates.push(st);
  });

  const records = [];
  const stateCounts = {};

  allStates.forEach(st => {
    const t1 = tier1ByState[st] || [];
    const t2 = tier2ByState[st] || [];
    const combined = [...t1, ...t2];
    stateCounts[st] = { tier1: t1.length, tier2: t2.length, total: combined.length };
    records.push(...combined);
  });

  // Status breakdown
  const statusBreakdown = {};
  records.forEach(r => { statusBreakdown[r.status] = (statusBreakdown[r.status]||0)+1; });

  // Geo coverage
  const withGeo = records.filter(r => r.lat && r.lng).length;

  const filename = 'napcs_schools_' + regionKey + '.js';
  const outPath  = OUTPUT + '/' + filename;

  const stateNote = Object.entries(stateCounts)
    .map(([st,c]) => `${st}: ${c.tier1}T1+${c.tier2}T2`)
    .join(', ');

  const content = [
    header,
    '// Region: ' + regionKey.toUpperCase() + ' | States: ' + allStates.join(', '),
    '// Records: ' + records.length + ' | Geo: ' + withGeo + '/' + records.length,
    '// Breakdown: ' + JSON.stringify(statusBreakdown),
    '// State detail: ' + stateNote,
    '',
    'var ' + cfg.varName + ' = ' + JSON.stringify(records, null, 0) + ';',
    '',
  ].join('\n');

  fs.writeFileSync(outPath, content);
  const kb = Math.round(content.length / 1024);
  console.log(filename + ': ' + records.length + ' records (' + kb + 'KB) geo=' + withGeo + ' ' + JSON.stringify(statusBreakdown));
  outputFiles.push(outPath);
});

// ─── Summary ─────────────────────────────────────────────────────────────────
const totalT1 = Object.values(tier1ByState).reduce((s,a) => s+a.length, 0);
const totalT2 = Object.values(tier2ByState).reduce((s,a) => s+a.length, 0);
console.log('\n── Summary ──────────────────────────────────────────────────────────');
console.log('Tier 1 records:', totalT1);
console.log('Tier 2 records:', totalT2);
console.log('Total output records:', totalT1 + totalT2);
console.log('Output files:', outputFiles.map(f => path.basename(f)).join(', '));
if (tier1Errors.length || tier2Errors.length) {
  console.log('ERRORS — review above before deploying');
}
