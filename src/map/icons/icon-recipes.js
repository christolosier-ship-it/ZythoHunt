export const ICON_SCHEMA_VERSION = '1.2.0';
export const ICON_THEME_VERSION = 'zytho-blue-cyan-gold-0.3.2';
export const VESSELS = new Set(['american-pint','british-nonic','pilsner-glass','weizen-glass','tulip-glass','belgian-chalice','snifter','beer-mug','bottle']);
export const LIQUIDS = {
  'pale-straw':['#f8e98d','#e7bd36'], 'pale-gold':['#ffe071','#e6a52f'], golden:['#ffc94b','#e08724'], 'hazy-straw':['#f7e7a8','#e1bb59'], 'hazy-orange':['#f8a643','#dc6d2b'], orange:['#f0a035','#c96124'], amber:['#d88532','#9f4c24'], 'deep-amber':['#c66e2a','#74361d'], copper:['#b85c2f','#6f311f'], brown:['#6b3b27','#2e1c17'], black:['#231915','#050607'], ruby:['#a8393f','#521b25'], rose:['#ee7d93','#b83e66'], wild:['#d6d66e','#7aa864']
};
export const FOAMS = new Set(['none','thin-white','regular-white','generous-white','cream','beige']);
export const MOTIFS = new Set(['none','hop-cone','hop-leaf','wheat-ear','barley-grain','citrus-slice','coffee-beans','cacao-pod','pine-branch','yeast-cells','sparkle','barrel','wild-bottle']);
export const COMPOSITIONS = new Set(['left-right','back-left','back-right','low-crown','single-left','single-right','symmetric','behind-vessel']);
export const ACCENTS = new Set(['hop-green','citrus-gold','wheat-gold','roasted-brown','malt-gold','gold','cyan','ruby','wild-green']);
export const CLARITIES = new Set(['clear','hazy','opaque']);
export const FILL_LEVELS = new Set(['low','normal','high']);
export const SOURCE_RESOLUTIONS = [64,128,256];
export const MAX_ICON_CACHE_ENTRIES = 128;
