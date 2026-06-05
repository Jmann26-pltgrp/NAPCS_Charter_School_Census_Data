/**
 * napcs_label_config.js
 * ─────────────────────────────────────────────────────────────────────────────
 * NAPCS Unionization Research Project | PLT Strategies Group, Inc.
 *
 * SINGLE SOURCE OF TRUTH for all public-facing labels used in the dashboard
 * and in all document builders. Never hardcode labels in any builder script.
 *
 * Executive Sponsor approved: May 31, 2026
 * Schema version: 6.2
 * Last updated: May 31, 2026 — schema update pass; labels confirmed per
 *   NAPCS_Data_Architecture_v2.docx Section 4 and NAPCS_Status_Taxonomy_v4.docx
 *
 * HOW TO CHANGE A LABEL:
 *   1. Change one line in this file
 *   2. Run node --check napcs_label_config.js
 *   3. Upload to project (replaces prior version)
 *   4. Run builders — label is picked up automatically
 *   5. If change is material, update NAPCS_Status_Taxonomy_v[n].docx
 *
 * STRUCTURE:
 *   statusLabels — maps napcsStatus / napcsSubStatus / napcsOrgMethod codes → public label
 *   metricCardLabels — stat card header labels for dashboard
 *   filterLabels — filter button labels for dashboard
 *   closedLabels — labels for closed-while-unionized schools by type
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ═══════════════════════════════════════════════════════════════════════════
// STATUS LABELS
// Key format: 'LEVEL1/LEVEL2/LEVEL3' → public label string
// For codes with no Level 3 (e.g. STRUCTURAL_STATE), use 'LEVEL1/LEVEL2'
// ═══════════════════════════════════════════════════════════════════════════

const STATUS_LABELS = {

  // ── UNIONIZED / INDEPENDENT ───────────────────────────────────────────────
  'UNIONIZED/INDEPENDENT/ELECTION':    'Voluntarily — Election',
  'UNIONIZED/INDEPENDENT/CARD_CHECK':  'Voluntarily — Card Check',
  'UNIONIZED/INDEPENDENT/VOLUNTARY':   'Voluntarily — Direct Recognition',   // Executive Sponsor approved May 31, 2026 (replaced "Voluntarily — Voluntary")

  // ── UNIONIZED / STRUCTURAL_DISTRICT ──────────────────────────────────────
  'UNIONIZED/STRUCTURAL_DISTRICT/STATE_LAW':       'Required — State Law / School District',
  'UNIONIZED/STRUCTURAL_DISTRICT/DISTRICT_OPERATED': 'Required — District Operated',
  'UNIONIZED/STRUCTURAL_DISTRICT/CONVERSION':      'Required — Conversion',

  // ── UNIONIZED / STRUCTURAL_STATE ─────────────────────────────────────────
  'UNIONIZED/STRUCTURAL_STATE':        'Required by State',

  // ── UNIONIZED / STRUCTURAL_MUNICIPAL ─────────────────────────────────────
  'UNIONIZED/STRUCTURAL_MUNICIPAL':    'Required by Local Gov\'t',

  // ── UNIONIZED / CERTIFIED_NO_CBA ─────────────────────────────────────────
  'UNIONIZED/CERTIFIED_NO_CBA':        'Unionized — No Contract',

  // ── NOT_UNIONIZED / ORGANIZING ───────────────────────────────────────────
  'NOT_UNIONIZED/ORGANIZING':          'Organizing',
  'NOT_UNIONIZED/ORGANIZING_STALLED':  'Organizing Stalled',
  'NOT_UNIONIZED/VOTE_WITHDRAWN':      'Vote Withdrawn',

  // ── NOT_UNIONIZED / WATCH ────────────────────────────────────────────────
  'NOT_UNIONIZED/WATCH/HIGH':          'Unionization Risk — External High',
  'NOT_UNIONIZED/WATCH/MEDIUM':        'Unionization Risk — External Medium',
  'NOT_UNIONIZED/WATCH/LOW':           'Unionization Risk — External Low',
  'NOT_UNIONIZED/WATCH/INTERNAL':      'Unionization Risk — Internal',   // Internal view only — not shown on public dashboard

  // ── NOT_UNIONIZED / DECERTIFIED ──────────────────────────────────────────
  'NOT_UNIONIZED/DECERTIFIED/RD_ELECTION':     'No Longer Unionized — By Vote',
  'NOT_UNIONIZED/DECERTIFIED/NRTW_STRATEGY':   'No Longer Unionized — By NRtW Foundation',
  'NOT_UNIONIZED/DECERTIFIED/RESTRUCTURING':   'No Longer Unionized — Org / Authorizer Change',
  'NOT_UNIONIZED/DECERTIFIED/LEGISLATIVE_STRIP': 'No Longer Unionized — Legislative Action',

  // ── NOT_UNIONIZED / NON_UNION ────────────────────────────────────────────
  'NOT_UNIONIZED/NON_UNION':           'No Union',

  // ── NOT_UNIONIZED / NOT_RESEARCHED ───────────────────────────────────────
  'NOT_UNIONIZED/NOT_RESEARCHED':      'Not Researched',   // Internal view only

  // ── CLOSED schools (was UNIONIZED) ───────────────────────────────────────
  'CLOSED/UNIONIZED/INDEPENDENT':      'Closed — Unionized Voluntarily',
  'CLOSED/UNIONIZED/STRUCTURAL':       'Closed — Unionized Required',
  // Non-unionized closed schools: not shown anywhere per sponsor directive

};

// ═══════════════════════════════════════════════════════════════════════════
// METRIC CARD LABELS (dashboard stat bar)
// ═══════════════════════════════════════════════════════════════════════════

const METRIC_CARD_LABELS = {
  totalOrganized:       'Total Unionized',
  independentOrganized: 'Unionized — Voluntarily',
  dependentSchools:     'Unionized — Required',
  activeOrganizing:     'Active Organizing',
  decertified:          'No Longer Unionized',     // Includes closed-while-unionized per sponsor decision
  // 'Closed' metric card DELETED — rolled into No Longer Unionized
};

// ═══════════════════════════════════════════════════════════════════════════
// FILTER LABELS (dashboard filter buttons)
// ═══════════════════════════════════════════════════════════════════════════

const FILTER_LABELS = {
  confirmed:    'Unionized',
  dependent:    'Unionized — Required',
  organizing:   'Organizing',
  decertified:  'No Longer Unionized',
  // 'Closed' filter DELETED — rolled into No Longer Unionized
  // 'Historical' filter DELETED — rolled into No Longer Unionized
  unverified:   'No Union',
};

// ═══════════════════════════════════════════════════════════════════════════
// HELPER: Get public label from napcsStatus codes
// Usage: getLabel(napcsStatus, napcsSubStatus, napcsOrgMethod)
// Falls back gracefully if Level 3 not provided
// ═══════════════════════════════════════════════════════════════════════════

function getLabel(level1, level2, level3) {
  const key3 = level3 ? `${level1}/${level2}/${level3}` : null;
  const key2 = level2 ? `${level1}/${level2}` : null;
  const key1 = level1 || null;

  if (key3 && STATUS_LABELS[key3]) return STATUS_LABELS[key3];
  if (key2 && STATUS_LABELS[key2]) return STATUS_LABELS[key2];
  if (key1 && STATUS_LABELS[key1]) return STATUS_LABELS[key1];
  return level1 || 'Unknown';
}

// ═══════════════════════════════════════════════════════════════════════════
// LEGACY MAPPING: pltStatus (old field) → nearest public label
// Used only during transition period while some documents still reference
// old CONFIRMED/DEPENDENT/ORGANIZING/DECERTIFIED/UNVERIFIED codes.
// Remove after all documents rebuilt under napcsStatus taxonomy.
// ═══════════════════════════════════════════════════════════════════════════

const LEGACY_STATUS_LABELS = {
  'CONFIRMED':           'Unionized — Voluntarily',
  'CONFIRMED (CLOSED)':  'Closed — Unionized Voluntarily',
  'DEPENDENT':           'Unionized — Required',
  'ORGANIZING':          'Organizing',
  'DECERTIFIED':         'No Longer Unionized',
  'UNVERIFIED':          'No Union',
  'WATCH':               'Unionization Risk — External',
  'CERTIFIED/DISPUTED':  'Unionized — No Contract',
  'CERTIFIED/DORMANT':   'Unionized — No Contract',
};

// ═══════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════

module.exports = {
  STATUS_LABELS,
  METRIC_CARD_LABELS,
  FILTER_LABELS,
  LEGACY_STATUS_LABELS,
  getLabel,
};
