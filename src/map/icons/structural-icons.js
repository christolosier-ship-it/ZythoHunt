import { renderIconRecipe } from './icon-renderer.js';
export const STRUCTURAL_RECIPES={
 beer:{vessel:'mug',liquid:'golden',foam:'overflow-white',primaryMotif:'sparkle',secondaryMotif:'none',accent:'gold'},
 'fermentation-high':{vessel:'mug',liquid:'amber',foam:'generous-cream',primaryMotif:'grain',accent:'malt-gold'},
 'fermentation-low':{vessel:'pilsner',liquid:'pale-gold',foam:'regular-white',primaryMotif:'sparkle',accent:'gold'},
 'fermentation-spontaneous':{vessel:'bottle',liquid:'wild',foam:'thin-white',primaryMotif:'barrel',secondaryMotif:'hop-leaf',accent:'wild-green'},
 'fermentation-mixed-wild':{vessel:'bottle',liquid:'rose',foam:'pink',primaryMotif:'yeast-cell',secondaryMotif:'wild-bottle',accent:'ruby'},
 'family-pale-ale-ipa':{vessel:'american-pint',liquid:'deep-amber',foam:'regular-white',primaryMotif:'hop-cone',accent:'hop-green'},
 'family-wheat-beer':{vessel:'weizen',liquid:'hazy-straw',foam:'generous-white',primaryMotif:'wheat',accent:'wheat-gold'},
 'family-pale-lager':{vessel:'pilsner',liquid:'pale-gold',foam:'thin-white',primaryMotif:'grain',accent:'gold'}
};
export function renderStructuralIcon(ctx,id,bounds,detail,theme){ renderIconRecipe(ctx, STRUCTURAL_RECIPES[id]||STRUCTURAL_RECIPES.beer, bounds, detail, theme); }
