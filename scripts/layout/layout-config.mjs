export const LAYOUT_ENGINE = 'd3-hybrid';
export const LAYOUT_ENGINE_VERSION = '1.0.0';
export const PRESENTATION_VERSION = '2.3.0';
export const RANDOM_SEED = 4501;
export const FORCE_PHASES = [
  { name: 'structure', ticks: 220, linkStrength: 0.08, radialStrength: 0.10, sectorStrength: 0.16, compactionStrength: 0.010 },
  { name: 'compaction', ticks: 280, linkStrength: 0.12, radialStrength: 0.06, sectorStrength: 0.12, compactionStrength: 0.020 },
  { name: 'finish', ticks: 120, linkStrength: 0.10, radialStrength: 0.03, sectorStrength: 0.20, compactionStrength: 0.006 }
];
export const TOTAL_FORCE_TICKS = FORCE_PHASES.reduce((s, p) => s + p.ticks, 0);
export const SECTOR_GAP = 0.05;
export const WORLD_MARGIN = 720;
export const ROUTE_SAMPLE_STEPS = 18;
export const ROUTING_CANDIDATES_PER_LINK = 8;
export const MAX_EXACT_PASSES = 80;
