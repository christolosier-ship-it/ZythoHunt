import { renderIconRecipe } from './icon-renderer.js';
export const STRUCTURAL_RECIPES={
 beer:{vessel:'beer-mug',liquid:'golden',foam:'generous-white',primaryMotif:'sparkle',secondaryMotif:'barley-grain',composition:'behind-vessel',accent:'gold',clarity:'clear',fillLevel:'high'},
 'fermentation-high':{vessel:'beer-mug',liquid:'amber',foam:'generous-white',primaryMotif:'barley-grain',secondaryMotif:'hop-leaf',composition:'symmetric',accent:'malt-gold'},
 'fermentation-low':{vessel:'pilsner-glass',liquid:'pale-gold',foam:'regular-white',primaryMotif:'sparkle',secondaryMotif:'barley-grain',composition:'low-crown',accent:'gold'},
 'fermentation-spontaneous':{vessel:'bottle',liquid:'wild',foam:'thin-white',primaryMotif:'barrel',secondaryMotif:'wild-bottle',composition:'left-right',accent:'wild-green'},
 'fermentation-mixed-wild':{vessel:'bottle',liquid:'rose',foam:'thin-white',primaryMotif:'yeast-cells',secondaryMotif:'wild-bottle',composition:'left-right',accent:'ruby'},
 'family-pale-ale-ipa':{vessel:'american-pint',liquid:'deep-amber',foam:'regular-white',primaryMotif:'hop-cone',secondaryMotif:'citrus-slice',composition:'symmetric',accent:'hop-green'},
 'family-wheat-beer':{vessel:'weizen-glass',liquid:'hazy-straw',foam:'generous-white',primaryMotif:'wheat-ear',secondaryMotif:'citrus-slice',composition:'symmetric',accent:'wheat-gold'},
 'family-pale-lager':{vessel:'pilsner-glass',liquid:'pale-gold',foam:'regular-white',primaryMotif:'barley-grain',secondaryMotif:'sparkle',composition:'symmetric',accent:'gold'}
};
export function renderStructuralIcon(ctx,id,bounds,detail,theme){ const recipe=STRUCTURAL_RECIPES[id]; if(!recipe) throw new Error(`Missing structural icon ${id}`); renderIconRecipe(ctx, recipe, bounds, detail, theme); }
