import { renderIconRecipe } from './icon-renderer.js';
export const STRUCTURAL_RECIPES={
 default:{vessel:'beer-mug',liquid:'clear-gold',foam:'regular-white',primaryMotif:'barley-grain',secondaryMotif:'sparkle',composition:'symmetric',accent:'gold',fillLevel:'normal'},
 beer:{vessel:'beer-mug',liquid:'clear-gold',foam:'generous-white',primaryMotif:'sparkle',secondaryMotif:'barley-grain',composition:'behind-vessel',accent:'gold',fillLevel:'high'},
 high:{vessel:'beer-mug',liquid:'clear-amber',foam:'generous-white',primaryMotif:'barley-grain',secondaryMotif:'hop-leaf',composition:'symmetric',accent:'malt-gold'},
 low:{vessel:'pilsner',liquid:'pale-gold',foam:'regular-white',primaryMotif:'sparkle',secondaryMotif:'barley-grain',composition:'low-crown',accent:'gold'},
 spontaneous:{vessel:'tulip',liquid:'fruit-pink',foam:'regular-white',primaryMotif:'barrel',secondaryMotif:'wild-bottle',composition:'left-right',accent:'wild-green',fillLevel:'high'},
 'mixed-wild':{vessel:'tulip',liquid:'fruit-red',foam:'cream',primaryMotif:'yeast-cells',secondaryMotif:'wild-bottle',composition:'left-right',accent:'ruby',fillLevel:'high'},
 hybrid:{vessel:'inao',liquid:'clear-gold',foam:'cream',primaryMotif:'sparkle',secondaryMotif:'barley-grain',composition:'left-right',accent:'cyan',fillLevel:'normal'},
 specialty:{vessel:'snifter',liquid:'fruit-pink',foam:'cream',primaryMotif:'barrel',secondaryMotif:'cherry',composition:'left-right',accent:'ruby',fillLevel:'normal'}
};
export function renderStructuralIcon(ctx,id,bounds,detail,theme){ const recipe=STRUCTURAL_RECIPES[id] || STRUCTURAL_RECIPES.default; renderIconRecipe(ctx, recipe, bounds, detail, theme); }
