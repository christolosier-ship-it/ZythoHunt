export const ICON_SCHEMA_VERSION = '2.0.0';
export const ICON_THEME_VERSION = 'zytho-blue-cyan-gold-0.4.1';
export const VESSELS = new Set(['teku','inao','tulip','nonic','stange','pint','weizen','snifter','pilsner','beer-mug','chalice','stout-glass']);
export const LIQUIDS = {
  'pale-straw': {top:'#f8e98d', bottom:'#e7bd36', clarity:'clear', opacity:1},
  'pale-gold': {top:'#ffe071', bottom:'#e6a52f', clarity:'clear', opacity:1},
  'clear-gold': {top:'#ffc94b', bottom:'#e08724', clarity:'clear', opacity:1},
  'hazy-straw': {top:'#f7e7a8', bottom:'#e1bb59', clarity:'hazy', opacity:1},
  'hazy-yellow': {top:'#ffe68a', bottom:'#dca949', clarity:'hazy', opacity:1},
  'hazy-orange': {top:'#f8a643', bottom:'#dc6d2b', clarity:'hazy', opacity:1},
  'clear-amber': {top:'#d88532', bottom:'#9f4c24', clarity:'clear', opacity:1},
  'deep-amber': {top:'#c66e2a', bottom:'#74361d', clarity:'clear', opacity:1},
  copper: {top:'#b85c2f', bottom:'#6f311f', clarity:'clear', opacity:1},
  ruby: {top:'#a8393f', bottom:'#521b25', clarity:'clear', opacity:1},
  brown: {top:'#6b3b27', bottom:'#2e1c17', clarity:'opaque', opacity:1},
  'dark-brown': {top:'#4b2a1f', bottom:'#15100d', clarity:'opaque', opacity:1},
  'near-black': {top:'#231915', bottom:'#050607', clarity:'opaque', opacity:1},
  'fruit-red': {top:'#d94a58', bottom:'#7a1e31', clarity:'hazy', opacity:1},
  'fruit-pink': {top:'#ee7d93', bottom:'#b83e66', clarity:'hazy', opacity:1}
};
export const FOAMS = new Set(['none','thin-white','regular-white','generous-white','cream','beige']);
export const MOTIFS = new Set(['none','hop-cone','hop-leaf','wheat-ear','barley-grain','citrus-slice','cherry','raspberry','coffee-beans','cacao-pod','pine-branch','yeast-cells','barrel','sparkle','wild-bottle']);
export const COMPOSITIONS = new Set(['single-left','single-right','left-right','back-left','back-right','behind-vessel','low-crown','symmetric']);
export const ACCENTS = new Set(['hop-green','citrus-gold','wheat-gold','roasted-brown','malt-gold','gold','cyan','ruby','wild-green']);
export const SOURCE_RESOLUTIONS = [64,128,256];
export const MAX_ICON_CACHE_ENTRIES = 128;
