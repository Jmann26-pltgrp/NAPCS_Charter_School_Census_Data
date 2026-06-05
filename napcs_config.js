// NAPCS Config — no strict mode (cross-script var scope required)
/**
 * napcs_config.js — National Configuration & Summary Data
 * PLT Strategies Group, Inc. | NAPCS Unionization Research Project
 * Data Currency Date: June 5, 2026
 * Schema: napcsStatus / napcsSubStatus — census methodology framing
 * Working Data — Last Updated June 5, 2026
 * Source of truth: Tier 1 state data files (scanned June 5, 2026)
 * Jurisdictions not yet included: KS, NH, WV, AK, IA, AR, VA
 */

var NAPCS_CONFIG = {
  "national": {
    "universe": 5710,
    "confirmed": 365,
    "dependent": 476,
    "combined": 841,
    "density": "14.7%",
    "confirmed_density": "6.4%",
    "dependent_density": "8.3%",
    "organizing": 40,
    "decertified": 9,
    "closed": 22,
    "jurisdictions": 26,
    "dataDate": "June 5, 2026"
  },
  "state_data": {
    "AZ": {
      "name": "Arizona",
      "universe": 562,
      "conf": 4,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 0,
      "lb": "National Labor Relations Board",
      "lb_abbrev": "NLRB R28",
      "lb_full": "NLRB Region 28 (Phoenix)",
      "rtw": true,
      "note": "NLRB R28 jurisdiction. BASIS Tucson North + CITY Center (3 campuses) confirmed. Election pathway only."
    },
    "CA": {
      "name": "California",
      "universe": 1246,
      "conf": 193,
      "dep": 113,
      "org": 0,
      "dec": 3,
      "clo": 8,
      "watch": 2,
      "lb": "Public Employment Relations Board",
      "lb_abbrev": "PERB(CA)/EERA",
      "lb_full": "California PERB",
      "rtw": false,
      "note": "Card-check dominant. 193 Independently Organized + 113 Structural Coverage (LAUSD/district). Documented Organizing Activity: Journey School + COIL."
    },
    "CO": {
      "name": "Colorado",
      "universe": 260,
      "conf": 0,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 9,
      "lb": "National Labor Relations Board",
      "lb_abbrev": "NLRB R27",
      "lb_full": "NLRB Region 27 (Denver)",
      "rtw": false,
      "note": "0 organized. 9 Documented Organizing Activity — Summit Public Schools network (CMO_PRECEDENT)."
    },
    "CT": {
      "name": "Connecticut",
      "universe": 21,
      "conf": 4,
      "dep": 1,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 0,
      "lb": "CT State Board of Labor Relations",
      "lb_abbrev": "SBLR/NLRB R34",
      "lb_full": "CT SBLR / NLRB R34",
      "rtw": false,
      "note": "4 Independently Organized + 1 Structural Coverage (Elm City Montessori)."
    },
    "DC": {
      "name": "Washington DC",
      "universe": 125,
      "conf": 7,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "watch": 0,
      "lb": "National Labor Relations Board",
      "lb_abbrev": "NLRB R5",
      "lb_full": "NLRB Region 5 (Baltimore)",
      "rtw": false,
      "note": "7 Independently Organized. DC ACTS/AFT dominant. 1 Closed (Cesar Chavez PCS, 2019)."
    },
    "DE": {
      "name": "Delaware",
      "universe": 23,
      "conf": 4,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 0,
      "lb": "Delaware Public Employment Relations Board",
      "lb_abbrev": "PERB(DE)",
      "lb_full": "Delaware PERB",
      "rtw": false,
      "note": "100% NAPCS density. Card-check dominant. All 4 schools DSEA/NEA."
    },
    "FL": {
      "name": "Florida",
      "universe": 730,
      "conf": 5,
      "dep": 3,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 0,
      "lb": "Public Employees Relations Commission",
      "lb_abbrev": "PERC(FL)",
      "lb_full": "Florida PERC",
      "rtw": true,
      "note": "5 Independently Organized + 3 Structural Coverage. SB256 annual recertification requirement."
    },
    "GA": {
      "name": "Georgia",
      "universe": 94,
      "conf": 0,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 10,
      "lb": "National Labor Relations Board",
      "lb_abbrev": "NLRB R10",
      "lb_full": "NLRB Region 10 (Atlanta)",
      "rtw": true,
      "note": "0 organized. 10 Documented Organizing Activity — KIPP Metro Atlanta network (CMO_PRECEDENT)."
    },
    "HI": {
      "name": "Hawaii",
      "universe": 37,
      "conf": 0,
      "dep": 37,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "watch": 0,
      "lb": "Hawaii Labor Relations Board",
      "lb_abbrev": "HLRB",
      "lb_full": "Hawaii Labor Relations Board",
      "rtw": false,
      "note": "100% Structural Coverage — HSTA statewide statutory coverage (HRS §89-10.55)."
    },
    "IL": {
      "name": "Illinois",
      "universe": 132,
      "conf": 31,
      "dep": 1,
      "org": 0,
      "dec": 0,
      "clo": 5,
      "watch": 0,
      "lb": "NLRB R13 / IELRB",
      "lb_abbrev": "NLRB R13/IELRB",
      "lb_full": "NLRB Region 13 (Chicago) / Illinois ELRB",
      "rtw": false,
      "note": "31 Independently Organized + 1 Structural Coverage (Springfield SD 186). CTU/ChiACTS dominant. 5 closed."
    },
    "LA": {
      "name": "Louisiana",
      "universe": 139,
      "conf": 3,
      "dep": 0,
      "org": 0,
      "dec": 1,
      "clo": 1,
      "watch": 0,
      "lb": "Louisiana State Civil Service Commission",
      "lb_abbrev": "LSCSC/LERA",
      "lb_full": "Louisiana SCSC (LERA)",
      "rtw": true,
      "note": "3 Independently Organized. Act 172 stripped NLRB R15 jurisdiction over BESE-authorized schools. 1 Decertified (Lycée Français). 1 Closed."
    },
    "MA": {
      "name": "Massachusetts",
      "universe": 73,
      "conf": 8,
      "dep": 5,
      "org": 0,
      "dec": 1,
      "clo": 1,
      "watch": 0,
      "lb": "Department of Labor Relations",
      "lb_abbrev": "DLR(MA)",
      "lb_full": "Massachusetts DLR",
      "rtw": false,
      "note": "8 Independently Organized + 5 Structural Coverage (BPS Horace Mann). Card-check dominant. 1 Decertified."
    },
    "MD": {
      "name": "Maryland",
      "universe": 52,
      "conf": 0,
      "dep": 52,
      "org": 0,
      "dec": 0,
      "clo": 2,
      "watch": 0,
      "lb": "Maryland Public Employee Relations Board",
      "lb_abbrev": "PERB(MD)",
      "lb_full": "Maryland PERB",
      "rtw": false,
      "note": "100% Structural Coverage — county CBA authorization by statute."
    },
    "ME": {
      "name": "Maine",
      "universe": 11,
      "conf": 1,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 0,
      "lb": "National Labor Relations Board",
      "lb_abbrev": "NLRB R1",
      "lb_full": "NLRB Region 1 (Boston)",
      "rtw": false,
      "note": "1 Independently Organized — Baxter Academy (MEA/NEA, 30-4 vote May 2019)."
    },
    "MI": {
      "name": "Michigan",
      "universe": 373,
      "conf": 10,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 0,
      "lb": "Michigan Employment Relations Commission",
      "lb_abbrev": "MERC/NLRB R7",
      "lb_full": "MERC / NLRB Region 7 (Detroit)",
      "rtw": false,
      "note": "10 Independently Organized. Split MERC/NLRB jurisdiction. RTW repealed Feb 2024."
    },
    "MN": {
      "name": "Minnesota",
      "universe": 309,
      "conf": 7,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "watch": 0,
      "lb": "Bureau of Mediation Services",
      "lb_abbrev": "BMS",
      "lb_full": "Minnesota Bureau of Mediation Services",
      "rtw": false,
      "note": "7 Independently Organized. Card-check post-2023 PELRA amendment. 1 Closed within lookback."
    },
    "MO": {
      "name": "Missouri",
      "universe": 81,
      "conf": 0,
      "dep": 0,
      "org": 0,
      "dec": 1,
      "clo": 0,
      "watch": 11,
      "lb": "National Labor Relations Board",
      "lb_abbrev": "NLRB R14/R17",
      "lb_full": "NLRB Regions 14 & 17",
      "rtw": true,
      "note": "0 organized. 1 Decertified (KIPP STL High, May 2024). 11 Documented Organizing Activity."
    },
    "NJ": {
      "name": "New Jersey",
      "universe": 86,
      "conf": 19,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "watch": 0,
      "lb": "Public Employment Relations Commission",
      "lb_abbrev": "PERC(NJ)",
      "lb_full": "New Jersey PERC",
      "rtw": false,
      "note": "19 Independently Organized. Card-check dominant. NJEA near-monopoly. 1 Closed."
    },
    "NM": {
      "name": "New Mexico",
      "universe": 98,
      "conf": 3,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 2,
      "lb": "NM PELRB / NLRB R28",
      "lb_abbrev": "PELRB/NLRB R28",
      "lb_full": "NM PELRB / NLRB Region 28 — jurisdiction unsettled",
      "rtw": false,
      "note": "3 Independently Organized (Monte del Sol + J Paul Taylor + TTCS). TTCS: cert Oct–Nov 2021, no CBA. 2 Documented Organizing Activity (Explore ABQ + SDIS)."
    },
    "NY": {
      "name": "New York",
      "universe": 350,
      "conf": 24,
      "dep": 4,
      "org": 0,
      "dec": 1,
      "clo": 0,
      "watch": 0,
      "lb": "NLRB / PERB(NY) historical",
      "lb_abbrev": "NLRB R2/R29/R3",
      "lb_full": "NLRB Regions 2, 29 & 3",
      "rtw": false,
      "note": "24 Independently Organized + 4 Structural Coverage. UFT dominant. NRtW decert active at KIPP Academy Bronx. 1 Decertified."
    },
    "OH": {
      "name": "Ohio",
      "universe": 323,
      "conf": 13,
      "dep": 14,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 0,
      "lb": "National Labor Relations Board",
      "lb_abbrev": "NLRB R8/R9",
      "lb_full": "NLRB Regions 8 & 9",
      "rtw": false,
      "note": "13 Independently Organized + 14 Structural Coverage (ORC §3314.10 conversion). Cleveland ACTS dominant."
    },
    "OR": {
      "name": "Oregon",
      "universe": 128,
      "conf": 2,
      "dep": 120,
      "org": 0,
      "dec": 2,
      "clo": 0,
      "watch": 0,
      "lb": "Employment Relations Board",
      "lb_abbrev": "ERB/NLRB R19",
      "lb_full": "Oregon ERB / NLRB Region 19",
      "rtw": false,
      "note": "2 Independently Organized + 120 Structural Coverage (OEA statutory). 2 Decertified (Ridgeline + VICS)."
    },
    "PA": {
      "name": "Pennsylvania",
      "universe": 175,
      "conf": 21,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 0,
      "lb": "National Labor Relations Board",
      "lb_abbrev": "NLRB R4/R6/R5",
      "lb_full": "NLRB Regions 4, 6 & 5",
      "rtw": false,
      "note": "21 Independently Organized. Two ecosystems: Philadelphia (ACSE/AFT) + Pittsburgh (PSEA/NEA)."
    },
    "RI": {
      "name": "Rhode Island",
      "universe": 42,
      "conf": 5,
      "dep": 2,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "watch": 0,
      "lb": "National Labor Relations Board",
      "lb_abbrev": "NLRB R1",
      "lb_full": "NLRB Region 1 (Boston)",
      "rtw": false,
      "note": "5 Independently Organized + 2 Structural Coverage. 4 certifications in 10-month window (2024–25). First IBEW charter union in dataset."
    },
    "WA": {
      "name": "Washington",
      "universe": 15,
      "conf": 1,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 6,
      "lb": "WA Public Employment Relations Commission",
      "lb_abbrev": "PERC(WA)",
      "lb_full": "Washington PERC",
      "rtw": false,
      "note": "1 Independently Organized (WIHS — confirmed Sept 2023). 6 Documented Organizing Activity — Summit campuses + Rooted School Vancouver."
    },
    "WI": {
      "name": "Wisconsin",
      "universe": 225,
      "conf": 0,
      "dep": 124,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "watch": 0,
      "lb": "Wisconsin Employment Relations Commission",
      "lb_abbrev": "WERC",
      "lb_full": "Wisconsin Employment Relations Commission",
      "rtw": false,
      "note": "124 Structural Coverage — MPS instrumentality statute. Act 10 limits bargaining to base wages."
    }
  },
  "state_centers": {
    "AZ": [
      34,
      -111.5
    ],
    "CA": [
      36.7,
      -119.7
    ],
    "CO": [
      39,
      -105.5
    ],
    "CT": [
      41.6,
      -72.7
    ],
    "DC": [
      38.9,
      -77
    ],
    "DE": [
      39,
      -75.5
    ],
    "FL": [
      27.8,
      -81.6
    ],
    "GA": [
      32.5,
      -83.5
    ],
    "HI": [
      20.5,
      -157
    ],
    "IL": [
      40,
      -89
    ],
    "LA": [
      30.5,
      -91.8
    ],
    "MA": [
      42.2,
      -71.5
    ],
    "MD": [
      39.4,
      -76.6
    ],
    "ME": [
      44.5,
      -69
    ],
    "MI": [
      43.5,
      -84.5
    ],
    "MN": [
      46,
      -93.5
    ],
    "MO": [
      38.5,
      -92.5
    ],
    "NJ": [
      40.1,
      -74.5
    ],
    "NM": [
      34.5,
      -106
    ],
    "NY": [
      43,
      -75.5
    ],
    "OH": [
      40.4,
      -82.8
    ],
    "OR": [
      43.9,
      -120.5
    ],
    "PA": [
      40.9,
      -77.7
    ],
    "RI": [
      41.7,
      -71.5
    ],
    "WA": [
      47.4,
      -120.5
    ],
    "WI": [
      44.5,
      -89.5
    ]
  },
  "density_table": [
    {
      "st": "HI",
      "name": "Hawaii",
      "universe": 37,
      "confirmed": 0,
      "dependent": 37,
      "combined": 37,
      "density": "100.0%",
      "indepPct": "0.0%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "HLRB"
    },
    {
      "st": "MD",
      "name": "Maryland",
      "universe": 52,
      "confirmed": 0,
      "dependent": 52,
      "combined": 52,
      "density": "100.0%",
      "indepPct": "0.0%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "PERB(MD)"
    },
    {
      "st": "OR",
      "name": "Oregon",
      "universe": 128,
      "confirmed": 2,
      "dependent": 120,
      "combined": 122,
      "density": "95.3%",
      "indepPct": "1.6%",
      "watch": 0,
      "dec": 2,
      "clo": 0,
      "lb": "ERB/NLRB R19"
    },
    {
      "st": "WI",
      "name": "Wisconsin",
      "universe": 225,
      "confirmed": 0,
      "dependent": 124,
      "combined": 124,
      "density": "55.1%",
      "indepPct": "0.0%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "WERC"
    },
    {
      "st": "CA",
      "name": "California",
      "universe": 1246,
      "confirmed": 193,
      "dependent": 113,
      "combined": 306,
      "density": "24.6%",
      "indepPct": "15.5%",
      "watch": 2,
      "dec": 3,
      "clo": 8,
      "lb": "PERB(CA)/EERA"
    },
    {
      "st": "IL",
      "name": "Illinois",
      "universe": 132,
      "confirmed": 31,
      "dependent": 1,
      "combined": 32,
      "density": "24.2%",
      "indepPct": "23.5%",
      "watch": 0,
      "dec": 0,
      "clo": 5,
      "lb": "NLRB R13/IELRB"
    },
    {
      "st": "CT",
      "name": "Connecticut",
      "universe": 21,
      "confirmed": 4,
      "dependent": 1,
      "combined": 5,
      "density": "23.8%",
      "indepPct": "19.0%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "SBLR/NLRB R34"
    },
    {
      "st": "NJ",
      "name": "New Jersey",
      "universe": 86,
      "confirmed": 19,
      "dependent": 0,
      "combined": 19,
      "density": "22.1%",
      "indepPct": "22.1%",
      "watch": 0,
      "dec": 0,
      "clo": 1,
      "lb": "PERC(NJ)"
    },
    {
      "st": "MA",
      "name": "Massachusetts",
      "universe": 73,
      "confirmed": 8,
      "dependent": 5,
      "combined": 13,
      "density": "17.8%",
      "indepPct": "11.0%",
      "watch": 0,
      "dec": 1,
      "clo": 0,
      "lb": "DLR(MA)"
    },
    {
      "st": "DE",
      "name": "Delaware",
      "universe": 23,
      "confirmed": 4,
      "dependent": 0,
      "combined": 4,
      "density": "17.4%",
      "indepPct": "17.4%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "PERB(DE)"
    },
    {
      "st": "RI",
      "name": "Rhode Island",
      "universe": 42,
      "confirmed": 5,
      "dependent": 2,
      "combined": 7,
      "density": "16.7%",
      "indepPct": "11.9%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB R1"
    },
    {
      "st": "PA",
      "name": "Pennsylvania",
      "universe": 175,
      "confirmed": 21,
      "dependent": 0,
      "combined": 21,
      "density": "12.0%",
      "indepPct": "12.0%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB R4/R6/R5"
    },
    {
      "st": "ME",
      "name": "Maine",
      "universe": 11,
      "confirmed": 1,
      "dependent": 0,
      "combined": 1,
      "density": "9.1%",
      "indepPct": "9.1%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB R1"
    },
    {
      "st": "OH",
      "name": "Ohio",
      "universe": 323,
      "confirmed": 13,
      "dependent": 14,
      "combined": 27,
      "density": "8.4%",
      "indepPct": "4.0%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB R8/R9"
    },
    {
      "st": "NY",
      "name": "New York",
      "universe": 350,
      "confirmed": 24,
      "dependent": 4,
      "combined": 28,
      "density": "8.0%",
      "indepPct": "6.9%",
      "watch": 0,
      "dec": 1,
      "clo": 0,
      "lb": "NLRB R2/R29/R3"
    },
    {
      "st": "WA",
      "name": "Washington",
      "universe": 15,
      "confirmed": 1,
      "dependent": 0,
      "combined": 1,
      "density": "6.7%",
      "indepPct": "6.7%",
      "watch": 6,
      "dec": 0,
      "clo": 0,
      "lb": "PERC(WA)"
    },
    {
      "st": "DC",
      "name": "Washington DC",
      "universe": 125,
      "confirmed": 7,
      "dependent": 0,
      "combined": 7,
      "density": "5.6%",
      "indepPct": "5.6%",
      "watch": 0,
      "dec": 0,
      "clo": 1,
      "lb": "NLRB R5"
    },
    {
      "st": "NM",
      "name": "New Mexico",
      "universe": 98,
      "confirmed": 3,
      "dependent": 0,
      "combined": 3,
      "density": "3.1%",
      "indepPct": "3.1%",
      "watch": 2,
      "dec": 0,
      "clo": 0,
      "lb": "PELRB/NLRB R28"
    },
    {
      "st": "MI",
      "name": "Michigan",
      "universe": 373,
      "confirmed": 10,
      "dependent": 0,
      "combined": 10,
      "density": "2.7%",
      "indepPct": "2.7%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "MERC/NLRB R7"
    },
    {
      "st": "MN",
      "name": "Minnesota",
      "universe": 309,
      "confirmed": 7,
      "dependent": 0,
      "combined": 7,
      "density": "2.3%",
      "indepPct": "2.3%",
      "watch": 0,
      "dec": 0,
      "clo": 1,
      "lb": "BMS"
    },
    {
      "st": "LA",
      "name": "Louisiana",
      "universe": 139,
      "confirmed": 3,
      "dependent": 0,
      "combined": 3,
      "density": "2.2%",
      "indepPct": "2.2%",
      "watch": 0,
      "dec": 1,
      "clo": 1,
      "lb": "LSCSC/LERA"
    },
    {
      "st": "FL",
      "name": "Florida",
      "universe": 730,
      "confirmed": 5,
      "dependent": 3,
      "combined": 8,
      "density": "1.1%",
      "indepPct": "0.7%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "PERC(FL)"
    },
    {
      "st": "AZ",
      "name": "Arizona",
      "universe": 562,
      "confirmed": 4,
      "dependent": 0,
      "combined": 4,
      "density": "0.7%",
      "indepPct": "0.7%",
      "watch": 0,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB R28"
    },
    {
      "st": "CO",
      "name": "Colorado",
      "universe": 260,
      "confirmed": 0,
      "dependent": 0,
      "combined": 0,
      "density": "0.0%",
      "indepPct": "0.0%",
      "watch": 9,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB R27"
    },
    {
      "st": "GA",
      "name": "Georgia",
      "universe": 94,
      "confirmed": 0,
      "dependent": 0,
      "combined": 0,
      "density": "0.0%",
      "indepPct": "0.0%",
      "watch": 10,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB R10"
    },
    {
      "st": "MO",
      "name": "Missouri",
      "universe": 81,
      "confirmed": 0,
      "dependent": 0,
      "combined": 0,
      "density": "0.0%",
      "indepPct": "0.0%",
      "watch": 11,
      "dec": 1,
      "clo": 0,
      "lb": "NLRB R14/R17"
    }
  ],
  "jurisdiction_data": {
    "AZ": {
      "lb_abbrev": "NLRB R28",
      "lb_full": "NLRB Region 28 (Phoenix)",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "AACTS / AFT Local 6627",
      "note": "NLRB R28 jurisdiction. BASIS Tucson North + CITY Center (3 campuses) confirmed. Election pathway only.",
      "rtw": true
    },
    "CA": {
      "lb_abbrev": "PERB(CA)/EERA",
      "lb_full": "California PERB",
      "statute": "EERA (Gov. Code §3540)",
      "nlrb": "Limited",
      "card_check": "Yes",
      "dominant": "UTLA, AMU, HTEC, CFT",
      "note": "Card-check dominant. 193 Independently Organized + 113 Structural Coverage (LAUSD/district). Documented Organizing Activity: Journey School + COIL.",
      "rtw": false
    },
    "CO": {
      "lb_abbrev": "NLRB R27",
      "lb_full": "NLRB Region 27 (Denver)",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "None confirmed",
      "note": "0 organized. 9 Documented Organizing Activity — Summit Public Schools network (CMO_PRECEDENT).",
      "rtw": false
    },
    "CT": {
      "lb_abbrev": "SBLR/NLRB R34",
      "lb_full": "CT SBLR / NLRB R34",
      "statute": "C.G.S. §10-66dd / TNA",
      "nlrb": "Partial",
      "card_check": "No",
      "dominant": "CEA/NEA, UAW Local 2110",
      "note": "4 Independently Organized + 1 Structural Coverage (Elm City Montessori).",
      "rtw": false
    },
    "DC": {
      "lb_abbrev": "NLRB R5",
      "lb_full": "NLRB Region 5 (Baltimore)",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "DC ACTS Local 1927 / AFT",
      "note": "7 Independently Organized. DC ACTS/AFT dominant. 1 Closed (Cesar Chavez PCS, 2019).",
      "rtw": false
    },
    "DE": {
      "lb_abbrev": "PERB(DE)",
      "lb_full": "Delaware PERB",
      "statute": "14 Del.C. Ch. 40",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "DSEA/NEA",
      "note": "100% NAPCS density. Card-check dominant. All 4 schools DSEA/NEA.",
      "rtw": false
    },
    "FL": {
      "lb_abbrev": "PERC(FL)",
      "lb_full": "Florida PERC",
      "statute": "Fla. Stat. §447",
      "nlrb": "No",
      "card_check": "No",
      "dominant": "BTU Local 1975 / FEA, PEA/FEA",
      "note": "5 Independently Organized + 3 Structural Coverage. SB256 annual recertification requirement.",
      "rtw": true
    },
    "GA": {
      "lb_abbrev": "NLRB R10",
      "lb_full": "NLRB Region 10 (Atlanta)",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "None confirmed",
      "note": "0 organized. 10 Documented Organizing Activity — KIPP Metro Atlanta network (CMO_PRECEDENT).",
      "rtw": true
    },
    "HI": {
      "lb_abbrev": "HLRB",
      "lb_full": "Hawaii Labor Relations Board",
      "statute": "HRS Ch. 89 / §89-10.55",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "HSTA/NEA",
      "note": "100% Structural Coverage — HSTA statewide statutory coverage (HRS §89-10.55).",
      "rtw": false
    },
    "IL": {
      "lb_abbrev": "NLRB R13/IELRB",
      "lb_full": "NLRB Region 13 (Chicago) / Illinois ELRB",
      "statute": "NLRA / IELRA (105 ILCS 5)",
      "nlrb": "Yes",
      "card_check": "Partial",
      "dominant": "CTU/ChiACTS, UEJ/AFT",
      "note": "31 Independently Organized + 1 Structural Coverage (Springfield SD 186). CTU/ChiACTS dominant. 5 closed.",
      "rtw": false
    },
    "LA": {
      "lb_abbrev": "LSCSC/LERA",
      "lb_full": "Louisiana SCSC (LERA)",
      "statute": "LERA / Act 172 (2024)",
      "nlrb": "Partial",
      "card_check": "No",
      "dominant": "UTNO / AFT Local 527",
      "note": "3 Independently Organized. Act 172 stripped NLRB R15 jurisdiction over BESE-authorized schools. 1 Decertified (Lycée Français). 1 Closed.",
      "rtw": true
    },
    "MA": {
      "lb_abbrev": "DLR(MA)",
      "lb_full": "Massachusetts DLR",
      "statute": "M.G.L. c. 71 §89",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "BTU Local 66, AFTMA, UAW, Teamsters",
      "note": "8 Independently Organized + 5 Structural Coverage (BPS Horace Mann). Card-check dominant. 1 Decertified.",
      "rtw": false
    },
    "MD": {
      "lb_abbrev": "PERB(MD)",
      "lb_full": "Maryland PERB",
      "statute": "Ed. Article §9-108",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "District CBAs (county-level)",
      "note": "100% Structural Coverage — county CBA authorization by statute.",
      "rtw": false
    },
    "ME": {
      "lb_abbrev": "NLRB R1",
      "lb_full": "NLRB Region 1 (Boston)",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "MEA/NEA",
      "note": "1 Independently Organized — Baxter Academy (MEA/NEA, 30-4 vote May 2019).",
      "rtw": false
    },
    "MI": {
      "lb_abbrev": "MERC/NLRB R7",
      "lb_full": "MERC / NLRB Region 7 (Detroit)",
      "statute": "PERA / NLRA",
      "nlrb": "Partial",
      "card_check": "Partial",
      "dominant": "Michigan ACTS / AFT Local 6482",
      "note": "10 Independently Organized. Split MERC/NLRB jurisdiction. RTW repealed Feb 2024.",
      "rtw": false
    },
    "MN": {
      "lb_abbrev": "BMS",
      "lb_full": "Minnesota Bureau of Mediation Services",
      "statute": "PELRA (Minn. Stat. 179A)",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "Education Minnesota (NEA/AFT dual)",
      "note": "7 Independently Organized. Card-check post-2023 PELRA amendment. 1 Closed within lookback.",
      "rtw": false
    },
    "MO": {
      "lb_abbrev": "NLRB R14/R17",
      "lb_full": "NLRB Regions 14 & 17",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "None confirmed",
      "note": "0 organized. 1 Decertified (KIPP STL High, May 2024). 11 Documented Organizing Activity.",
      "rtw": true
    },
    "NJ": {
      "lb_abbrev": "PERC(NJ)",
      "lb_full": "New Jersey PERC",
      "statute": "N.J.S.A. 34:13A",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "NJEA/NEA",
      "note": "19 Independently Organized. Card-check dominant. NJEA near-monopoly. 1 Closed.",
      "rtw": false
    },
    "NM": {
      "lb_abbrev": "PELRB/NLRB R28",
      "lb_full": "NM PELRB / NLRB Region 28 — jurisdiction unsettled",
      "statute": "PEBA (NMSA 10-7E) / NLRA",
      "nlrb": "Partial",
      "card_check": "Partial",
      "dominant": "NEA-NM",
      "note": "3 Independently Organized (Monte del Sol + J Paul Taylor + TTCS). TTCS: cert Oct–Nov 2021, no CBA. 2 Documented Organizing Activity (Explore ABQ + SDIS).",
      "rtw": false
    },
    "NY": {
      "lb_abbrev": "NLRB R2/R29/R3",
      "lb_full": "NLRB Regions 2, 29 & 3",
      "statute": "NLRA / Taylor Law (NY CSL Art. 14)",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "UFT Local 2 / NYSUT / AFT",
      "note": "24 Independently Organized + 4 Structural Coverage. UFT dominant. NRtW decert active at KIPP Academy Bronx. 1 Decertified.",
      "rtw": false
    },
    "OH": {
      "lb_abbrev": "NLRB R8/R9",
      "lb_full": "NLRB Regions 8 & 9",
      "statute": "NLRA / ORC §3314.10(A)(3)",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "Cleveland ACTS / OFT Local 6570",
      "note": "13 Independently Organized + 14 Structural Coverage (ORC §3314.10 conversion). Cleveland ACTS dominant.",
      "rtw": false
    },
    "OR": {
      "lb_abbrev": "ERB/NLRB R19",
      "lb_full": "Oregon ERB / NLRB Region 19",
      "statute": "ORS Ch. 338 / NLRA",
      "nlrb": "Partial",
      "card_check": "No",
      "dominant": "OEA/NEA, AFT-Oregon",
      "note": "2 Independently Organized + 120 Structural Coverage (OEA statutory). 2 Decertified (Ridgeline + VICS).",
      "rtw": false
    },
    "PA": {
      "lb_abbrev": "NLRB R4/R6/R5",
      "lb_full": "NLRB Regions 4, 6 & 5",
      "statute": "NLRA (PA Commonwealth Court 2016)",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "ACSE/AFT Local 6056, PSEA/NEA",
      "note": "21 Independently Organized. Two ecosystems: Philadelphia (ACSE/AFT) + Pittsburgh (PSEA/NEA).",
      "rtw": false
    },
    "RI": {
      "lb_abbrev": "NLRB R1",
      "lb_full": "NLRB Region 1 (Boston)",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "RIFT&HP/AFT, IBEW Local 2323",
      "note": "5 Independently Organized + 2 Structural Coverage. 4 certifications in 10-month window (2024–25). First IBEW charter union in dataset.",
      "rtw": false
    },
    "WA": {
      "lb_abbrev": "PERC(WA)",
      "lb_full": "Washington PERC",
      "statute": "RCW 41.56 (PECBA)",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "Federated Collective of WA Charter Teachers / AFT",
      "note": "1 Independently Organized (WIHS — confirmed Sept 2023). 6 Documented Organizing Activity — Summit campuses + Rooted School Vancouver.",
      "rtw": false
    },
    "WI": {
      "lb_abbrev": "WERC",
      "lb_full": "Wisconsin Employment Relations Commission",
      "statute": "Wis. Stat. §118.40(7)",
      "nlrb": "Partial",
      "card_check": "No",
      "dominant": "MPS-affiliated district CBAs",
      "note": "124 Structural Coverage — MPS instrumentality statute. Act 10 limits bargaining to base wages.",
      "rtw": false
    }
  },
  "stateReports": {
    "AZ": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-AZ-State-Research-Report"
    },
    "CA": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-CA-State-Research-Report"
    },
    "CO": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-CO-State-Research-Report"
    },
    "CT": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-CT-State-Research-Report"
    },
    "DC": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-DC-State-Research-Report"
    },
    "DE": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-DE-State-Research-Report"
    },
    "FL": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-FL-State-Research-Report"
    },
    "GA": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-GA-State-Research-Report"
    },
    "HI": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-HI-State-Research-Report"
    },
    "IL": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-IL-State-Research-Report"
    },
    "LA": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-LA-State-Research-Report"
    },
    "MA": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-MA-State-Research-Report"
    },
    "MD": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-MD-State-Research-Report"
    },
    "ME": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-ME-State-Research-Report"
    },
    "MI": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-MI-State-Research-Report"
    },
    "MN": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-MN-State-Research-Report"
    },
    "MO": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-MO-State-Research-Report"
    },
    "NJ": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-NJ-State-Research-Report"
    },
    "NM": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-NM-State-Research-Report"
    },
    "NY": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-NY-State-Research-Report"
    },
    "OH": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-OH-State-Research-Report"
    },
    "OR": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-OR-State-Research-Report"
    },
    "PA": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-PA-State-Research-Report"
    },
    "RI": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-RI-State-Research-Report"
    },
    "WA": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-WA-State-Research-Report"
    },
    "WI": {
      "boxUrl": "https://pltstrategiesgroup.box.com/v/NAPCS-WI-State-Research-Report"
    }
  },
  "stateK12Enrollment": {
    "source": "NCES CCD ELSI 2024-25 (SY 2024-25 Universe Files, Version 1a)",
    "vintage": "2024-25",
    "AZ": 1103894,
    "CA": 5805510,
    "CO": 865077,
    "CT": 508402,
    "DE": 142156,
    "DC": 94211,
    "FL": 2859600,
    "HI": 167071,
    "IL": 1842881,
    "LA": 666840,
    "ME": 167309,
    "MD": 891525,
    "MA": 915932,
    "MI": 1423933,
    "MN": 876182,
    "NJ": 1394971,
    "NM": 307110,
    "NY": 2527258,
    "OH": 1665566,
    "OR": 545088,
    "PA": 1691456,
    "RI": 135978,
    "TX": 5545640,
    "WA": 1094502,
    "WI": 806065
  },
  "status_lists": {}
};

/**
 * NAPCS_REGISTRY_CONTENT
 * Drives the Registry tab panel in the dashboard.
 */
var NAPCS_REGISTRY_CONTENT = {
  "version": "v99",
  "lastUpdated": "June 5, 2026",
  "narrative": {
    "projectOverview": {
      "title": "Project Overview",
      "body": "The Charter School Registry is the foundational infrastructure for the NAPCS Unionization Research Project. It provides a complete, authoritative directory of charter schools across all research states — now at Registry v69, covering 5,760 schools across 24 states plus the District of Columbia. The registry is enriched with authorizer data, labor board jurisdiction assignments, geographic coordinates, school enrollment data from NCES CCD 2024–25, and union status findings from the research program. Colorado and Washington are now included in the registry; research sessions for those states have not yet been conducted."
    },
    "scope": {
      "title": "Scope",
      "body": "The Registry currently covers 24 states plus the District of Columbia, comprising 5,760 charter schools. Colorado and Washington are included in the registry but research sessions have not yet been conducted for those states. Coverage expands as new state research sessions are initiated — states are added to the registry before research begins, providing the school list that drives each state's labor board search protocol."
    },
    "methodology": {
      "title": "Methodology",
      "body": "The Registry is built on the NCES Common Core of Data (CCD) public school universe files for 2024–25 (released December 2025), filtered to charter schools. Each record is enriched through a multi-step process: authorizer identification and type classification, charter type determination (independent, CMO, dependent/instrumentality), labor board jurisdiction assignment, geographic coordinate verification, school enrollment data from the 2024–25 CCD universe, and website research conducted as part of the research program. Records are matched to NAPCS school IDs where applicable."
    },
    "dataSources": {
      "title": "Data Sources",
      "body": "Primary source: NCES CCD 2024–25 Public Elementary/Secondary School Universe Survey (released December 2025). This is the current vintage used for school enrollment figures (enrollment_2425 field) and school universe counts throughout the dashboard. Supplemental sources include state education agency charter school directories, authorizer websites, and geocoding services for coordinate verification. Union status is sourced exclusively from research staff primary research — labor board portal searches and school-level verification. CBA document links, where publicly available, are recorded in the registry and displayed in the school popup on the dashboard."
    },
    "challenges": {
      "title": "Key Data Challenges",
      "body": "Key data quality challenges include: schools that operate under a different legal entity than their common name, requiring name variant searches at labor boards; schools recently authorized that may not yet have NCES IDs assigned (flagged in the registry); the Carmen/Rocketship Wisconsin authorizer transition, where new NCES IDs are expected as schools are re-authorized under UWM; multi-campus CMO networks where labor cases are filed under the network employer name rather than individual campuses; and schools that have undergone authorizer transitions that change their jurisdiction type. A website gap-fill effort is currently underway for all completed research states. Where data gaps are identified, research staff may recommend targeted outreach to the relevant labor board or state education agency."
    },
    "architecture": {
      "title": "Dashboard Architecture",
      "body": "The Registry feeds the dashboard through seven regional JavaScript data files rebuilt from the master registry spreadsheet: napcs_schools_ca.js (California), napcs_schools_fl.js (Florida), napcs_schools_tx.js (Texas — placeholder for future research), napcs_schools_east.js, napcs_schools_midwest.js, napcs_schools_west.js, and napcs_schools_central.js. Each file covers a geographic cluster of states. Every school record includes an enrollment_2425 field sourced from the NCES CCD 2024–25 universe, enabling per-school enrollment display and state-level charter enrollment rollups. This regional architecture replaced the prior single napcs_schools.js file."
    }
  },
  "about": {
    "keyStats": [
      {
        "label": "Total census schools",
        "value": "5,710"
      },
      {
        "label": "Jurisdictions covered",
        "value": "26 states + DC"
      },
      {
        "label": "Data currency date",
        "value": "June 5, 2026"
      },
      {
        "label": "Registry version",
        "value": "v99"
      },
      {
        "label": "Data vintage",
        "value": "NCES CCD 2024–25"
      },
      {
        "label": "Jurisdictions not yet included",
        "value": "KS, NH, WV, AK, IA, AR, VA"
      }
    ]
  },
  "discovery": {
    "title": "Discovery Schools Program",
    "purpose": "The Discovery program documents charter schools outside the NAPCS research universe that are found to have organized staff during the course of registry sweeps and labor board research. These schools are tracked separately and require explicit approval before entering the dataset.",
    "approach": [
      "Schools identified during labor board sweeps that are not in the NAPCS school list are flagged as Discovery candidates.",
      "Each Discovery school is reviewed against the NAPCS universe criteria before approval.",
      "Approved Discovery schools receive a NAPCS-ADD ID assignment and are entered into the Environment Scan Findings tab — not the main dataset — pending sponsor review.",
      "Discovery schools confirmed organized through the approval gate are reported to the executive sponsor for a disposition decision."
    ],
    "keyStats": [
      {
        "label": "Discovery schools found (all states)",
        "value": "See state research reports"
      },
      {
        "label": "Approval gate",
        "value": "Sponsor sign-off required"
      },
      {
        "label": "ID scheme",
        "value": "NAPCS-ADD-[state]-[seq]"
      }
    ]
  }
};