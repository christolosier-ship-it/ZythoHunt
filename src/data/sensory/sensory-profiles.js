export const SENSORY_PROFILE_SCHEMA_VERSION = 1;

function profile(collectionId, cardId, role, definition) {
  return Object.freeze({
    schemaVersion: SENSORY_PROFILE_SCHEMA_VERSION,
    collectionId,
    cardId,
    role,
    appearance: definition.appearance || { colors: [], clarity: [] },
    nose: definition.nose || {},
    palate: definition.palate || {},
    structure: definition.structure || {},
    finish: definition.finish || [],
    contradictions: definition.contradictions || [],
    keyMarkers: definition.keyMarkers || []
  });
}

const LAGER = "lagers-et-fermentations-basses";
const PALE = "pale-ales-bitters-et-ipa";
const DARK = "porters-stouts";
const BELGIAN = "traditions-belges-et-francaises";
const WHEAT = "bieres-de-ble-et-de-seigle";
const SOUR = "bieres-acides-sauvages-et-spontanees";
const ALE = "ales-ambrees-brunes-maltees-et-fortes";
const SPECIAL = "styles-singuliers-historiques-et-hybrides";
const COMMERCIAL = "appellations-commerciales";

export const sensoryProfiles = Object.freeze([
  profile(LAGER, "german-pilsner", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["claire"] },
    nose: { "floral": 2, "herbace-epice": 2, "cereale": 1 },
    palate: { "floral": 1, "herbace-epice": 2, "cereale": 1, "pain-biscuit": 1 },
    structure: { amertume: [3, 4], sucrosite: [0, 1], acidite: [0, 1], corps: [1, 2], carbonatation: [2, 3], alcool: [1, 2] },
    finish: ["seche", "vive", "amere-persistante"],
    contradictions: ["caramel-toffee", "banane", "cafe-torrefie", "lactique-yaourt"],
    keyMarkers: ["herbace-epice", "floral"]
  }),
  profile(LAGER, "czech-premium-pale-lager", "primary", {
    appearance: { colors: ["dore"], clarity: ["claire"] },
    nose: { "pain-biscuit": 2, "cereale": 2, "floral": 2, "herbace-epice": 2, "miel": 1 },
    palate: { "pain-biscuit": 2, "cereale": 2, "herbace-epice": 2, "miel": 1 },
    structure: { amertume: [2, 3], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 3], carbonatation: [2, 3], alcool: [2, 2] },
    finish: ["ronde", "vive"],
    contradictions: ["banane", "cafe-torrefie", "lactique-yaourt"],
    keyMarkers: ["pain-biscuit", "herbace-epice"]
  }),
  profile(LAGER, "munich-helles", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["claire"] },
    nose: { "pain-biscuit": 2, "cereale": 2, "miel": 1, "floral": 1 },
    palate: { "pain-biscuit": 2, "cereale": 2, "miel": 1 },
    structure: { amertume: [1, 2], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 2], carbonatation: [2, 3], alcool: [1, 2] },
    finish: ["ronde", "vive"],
    contradictions: ["resine-pin", "cafe-torrefie", "lactique-yaourt", "vinaigre-acetique"],
    keyMarkers: ["pain-biscuit", "cereale"]
  }),
  profile(LAGER, "vienna-lager", "primary", {
    appearance: { colors: ["ambre", "cuivre"], clarity: ["claire"] },
    nose: { "toaste": 2, "pain-biscuit": 2, "noix-fruits-secs": 1, "caramel-toffee": 1 },
    palate: { "toaste": 2, "pain-biscuit": 2, "cereale": 1, "caramel-toffee": 1 },
    structure: { amertume: [1, 2], sucrosite: [1, 1], acidite: [0, 1], corps: [2, 2], carbonatation: [2, 3], alcool: [2, 2] },
    finish: ["seche", "vive"],
    contradictions: ["cafe-torrefie", "banane", "lactique-yaourt"],
    keyMarkers: ["toaste", "pain-biscuit"]
  }),
  profile(LAGER, "marzen", "primary", {
    appearance: { colors: ["ambre", "cuivre"], clarity: ["claire"] },
    nose: { "toaste": 3, "pain-biscuit": 2, "cereale": 1, "caramel-toffee": 1 },
    palate: { "toaste": 3, "pain-biscuit": 2, "caramel-toffee": 1 },
    structure: { amertume: [1, 2], sucrosite: [1, 2], acidite: [0, 1], corps: [3, 3], carbonatation: [2, 2], alcool: [2, 3] },
    finish: ["seche", "ronde"],
    contradictions: ["cafe-torrefie", "lactique-yaourt", "resine-pin"],
    keyMarkers: ["toaste", "pain-biscuit"]
  }),
  profile(LAGER, "munich-dunkel", "primary", {
    appearance: { colors: ["cuivre", "brun"], clarity: ["claire"] },
    nose: { "pain-biscuit": 3, "toaste": 2, "caramel-toffee": 1, "noix-fruits-secs": 1, "chocolat-cacao": 1 },
    palate: { "pain-biscuit": 3, "toaste": 2, "caramel-toffee": 1, "chocolat-cacao": 1 },
    structure: { amertume: [1, 1], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 3], carbonatation: [2, 2], alcool: [2, 2] },
    finish: ["ronde", "seche"],
    contradictions: ["cafe-torrefie", "resine-pin", "lactique-yaourt"],
    keyMarkers: ["pain-biscuit", "toaste"]
  }),

  profile(PALE, "american-pale-ale", "primary", {
    appearance: { colors: ["dore", "ambre"], clarity: ["claire", "voilee"] },
    nose: { "agrumes": 3, "resine-pin": 2, "fruits-tropicaux": 1, "fruits-legers": 1 },
    palate: { "agrumes": 3, "resine-pin": 2, "pain-biscuit": 1 },
    structure: { amertume: [2, 3], sucrosite: [0, 1], acidite: [0, 1], corps: [2, 2], carbonatation: [2, 3], alcool: [2, 2] },
    finish: ["seche", "amere-persistante"],
    contradictions: ["cafe-torrefie", "lactique-yaourt", "banane"],
    keyMarkers: ["agrumes", "resine-pin"]
  }),
  profile(PALE, "extra-special-bitter-esb", "primary", {
    appearance: { colors: ["ambre", "cuivre"], clarity: ["claire"] },
    nose: { "pain-biscuit": 2, "caramel-toffee": 2, "fruits-legers": 2, "floral": 1, "herbace-epice": 1 },
    palate: { "pain-biscuit": 2, "caramel-toffee": 2, "fruits-legers": 1, "herbace-epice": 1 },
    structure: { amertume: [2, 3], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 3], carbonatation: [1, 2], alcool: [2, 3] },
    finish: ["ronde", "seche"],
    contradictions: ["resine-pin", "lactique-yaourt", "cafe-torrefie"],
    keyMarkers: ["pain-biscuit", "fruits-legers"]
  }),
  profile(PALE, "american-ipa", "primary", {
    appearance: { colors: ["dore", "ambre"], clarity: ["claire", "voilee"] },
    nose: { "agrumes": 3, "fruits-tropicaux": 2, "resine-pin": 2, "fruits-legers": 1 },
    palate: { "agrumes": 3, "fruits-tropicaux": 2, "resine-pin": 2 },
    structure: { amertume: [3, 4], sucrosite: [0, 1], acidite: [0, 1], corps: [2, 2], carbonatation: [2, 3], alcool: [2, 3] },
    finish: ["seche", "amere-persistante"],
    contradictions: ["lactique-yaourt", "cafe-torrefie", "banane"],
    keyMarkers: ["agrumes", "fruits-tropicaux", "resine-pin"]
  }),
  profile(PALE, "west-coast-ipa", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["claire"] },
    nose: { "agrumes": 3, "resine-pin": 3, "fruits-tropicaux": 1, "herbace-epice": 1 },
    palate: { "agrumes": 3, "resine-pin": 3, "herbace-epice": 1 },
    structure: { amertume: [4, 4], sucrosite: [0, 1], acidite: [0, 1], corps: [1, 2], carbonatation: [2, 3], alcool: [2, 3] },
    finish: ["seche", "amere-persistante"],
    contradictions: ["caramel-toffee", "lactique-yaourt", "banane", "cafe-torrefie"],
    keyMarkers: ["resine-pin", "agrumes"]
  }),
  profile(PALE, "neipa-juicy-hazy-ipa", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["voilee", "trouble"] },
    nose: { "fruits-tropicaux": 3, "agrumes": 3, "fruits-a-noyau": 3, "fruits-legers": 2 },
    palate: { "fruits-tropicaux": 3, "agrumes": 3, "fruits-a-noyau": 3 },
    structure: { amertume: [1, 2], sucrosite: [1, 2], acidite: [0, 1], corps: [3, 3], carbonatation: [2, 3], alcool: [2, 3] },
    finish: ["cremeuse", "ronde"],
    contradictions: ["cafe-torrefie", "vinaigre-acetique", "fume"],
    keyMarkers: ["fruits-tropicaux", "fruits-a-noyau", "agrumes"]
  }),
  profile(PALE, "double-imperial-ipa", "primary", {
    appearance: { colors: ["dore", "ambre"], clarity: ["claire", "voilee"] },
    nose: { "agrumes": 3, "resine-pin": 3, "fruits-tropicaux": 2 },
    palate: { "agrumes": 3, "resine-pin": 3, "fruits-tropicaux": 2, "caramel-toffee": 1 },
    structure: { amertume: [4, 4], sucrosite: [1, 2], acidite: [0, 1], corps: [3, 3], carbonatation: [2, 2], alcool: [4, 4] },
    finish: ["chaleureuse", "seche", "amere-persistante"],
    contradictions: ["lactique-yaourt", "banane", "cafe-torrefie"],
    keyMarkers: ["resine-pin", "agrumes"]
  }),
  profile(PALE, "belgian-ipa", "primary", {
    appearance: { colors: ["dore", "ambre"], clarity: ["claire", "voilee"] },
    nose: { "agrumes": 2, "floral": 2, "poivre-epices-levure": 2, "fruits-legers": 2, "epices": 1 },
    palate: { "agrumes": 2, "poivre-epices-levure": 2, "fruits-legers": 2 },
    structure: { amertume: [3, 4], sucrosite: [0, 1], acidite: [0, 1], corps: [2, 2], carbonatation: [3, 4], alcool: [3, 3] },
    finish: ["seche", "vive", "chaleureuse"],
    contradictions: ["cafe-torrefie", "lactique-yaourt"],
    keyMarkers: ["agrumes", "poivre-epices-levure"]
  }),
  profile(PALE, "black-ipa", "primary", {
    appearance: { colors: ["brun", "noir"], clarity: ["claire", "opaque"] },
    nose: { "agrumes": 3, "resine-pin": 3, "cafe-torrefie": 1, "chocolat-cacao": 1, "toaste": 1 },
    palate: { "agrumes": 2, "resine-pin": 3, "cafe-torrefie": 1, "toaste": 1 },
    structure: { amertume: [4, 4], sucrosite: [0, 1], acidite: [0, 1], corps: [2, 2], carbonatation: [2, 3], alcool: [3, 3] },
    finish: ["seche", "amere-persistante"],
    contradictions: ["lactique-yaourt", "banane"],
    keyMarkers: ["resine-pin", "agrumes", "cafe-torrefie"]
  }),
  profile(PALE, "brut-ipa", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["claire"] },
    nose: { "agrumes": 2, "fruits-tropicaux": 2, "floral": 2 },
    palate: { "agrumes": 2, "fruits-tropicaux": 2, "floral": 1 },
    structure: { amertume: [2, 3], sucrosite: [0, 0], acidite: [0, 1], corps: [1, 1], carbonatation: [4, 4], alcool: [3, 3] },
    finish: ["seche", "vive"],
    contradictions: ["caramel-toffee", "cafe-torrefie", "lactique-yaourt"],
    keyMarkers: ["agrumes", "floral"]
  }),

  profile(DARK, "english-porter", "primary", {
    appearance: { colors: ["brun", "noir"], clarity: ["claire", "opaque"] },
    nose: { "pain-biscuit": 2, "toaste": 2, "chocolat-cacao": 2, "caramel-toffee": 2, "noix-fruits-secs": 1, "fruits-noirs-murs": 1 },
    palate: { "pain-biscuit": 2, "toaste": 2, "chocolat-cacao": 2, "caramel-toffee": 2 },
    structure: { amertume: [1, 2], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 3], carbonatation: [1, 2], alcool: [2, 2] },
    finish: ["ronde", "seche"],
    contradictions: ["resine-pin", "lactique-yaourt", "banane"],
    keyMarkers: ["pain-biscuit", "chocolat-cacao"]
  }),
  profile(DARK, "american-porter", "primary", {
    appearance: { colors: ["brun", "noir"], clarity: ["claire", "opaque"] },
    nose: { "chocolat-cacao": 3, "cafe-torrefie": 2, "toaste": 2, "resine-pin": 1, "agrumes": 1 },
    palate: { "chocolat-cacao": 3, "cafe-torrefie": 2, "toaste": 2, "resine-pin": 1 },
    structure: { amertume: [2, 3], sucrosite: [1, 2], acidite: [0, 1], corps: [3, 3], carbonatation: [2, 2], alcool: [2, 3] },
    finish: ["seche", "ronde"],
    contradictions: ["lactique-yaourt", "banane"],
    keyMarkers: ["chocolat-cacao", "cafe-torrefie"]
  }),
  profile(DARK, "baltic-porter", "primary", {
    appearance: { colors: ["brun", "noir"], clarity: ["claire", "opaque"] },
    nose: { "fruits-noirs-murs": 3, "pain-biscuit": 2, "caramel-toffee": 2, "chocolat-cacao": 2, "noix-fruits-secs": 2 },
    palate: { "fruits-noirs-murs": 3, "pain-biscuit": 2, "caramel-toffee": 2, "chocolat-cacao": 2 },
    structure: { amertume: [1, 2], sucrosite: [2, 2], acidite: [0, 1], corps: [4, 4], carbonatation: [2, 2], alcool: [4, 4] },
    finish: ["ronde", "chaleureuse"],
    contradictions: ["resine-pin", "lactique-yaourt"],
    keyMarkers: ["fruits-noirs-murs", "caramel-toffee"]
  }),
  profile(DARK, "sweet-milk-cream-stout", "primary", {
    appearance: { colors: ["noir"], clarity: ["opaque"] },
    nose: { "chocolat-cacao": 3, "cafe-torrefie": 2, "caramel-toffee": 2 },
    palate: { "chocolat-cacao": 3, "cafe-torrefie": 2, "caramel-toffee": 2 },
    structure: { amertume: [1, 2], sucrosite: [4, 4], acidite: [0, 0], corps: [4, 4], carbonatation: [1, 2], alcool: [2, 2] },
    finish: ["cremeuse", "ronde"],
    contradictions: ["lactique-yaourt", "vinaigre-acetique", "resine-pin"],
    keyMarkers: ["chocolat-cacao", "caramel-toffee"]
  }),
  profile(DARK, "oatmeal-stout", "primary", {
    appearance: { colors: ["noir"], clarity: ["opaque"] },
    nose: { "chocolat-cacao": 2, "cafe-torrefie": 2, "cereale": 2, "noix-fruits-secs": 1 },
    palate: { "chocolat-cacao": 2, "cafe-torrefie": 2, "cereale": 2 },
    structure: { amertume: [2, 2], sucrosite: [2, 2], acidite: [0, 1], corps: [4, 4], carbonatation: [1, 2], alcool: [2, 2] },
    finish: ["cremeuse", "ronde"],
    contradictions: ["lactique-yaourt", "resine-pin"],
    keyMarkers: ["cereale", "chocolat-cacao"]
  }),
  profile(DARK, "american-stout", "primary", {
    appearance: { colors: ["noir"], clarity: ["opaque"] },
    nose: { "cafe-torrefie": 3, "chocolat-cacao": 2, "resine-pin": 2, "agrumes": 1 },
    palate: { "cafe-torrefie": 3, "chocolat-cacao": 2, "resine-pin": 2 },
    structure: { amertume: [4, 4], sucrosite: [1, 1], acidite: [0, 1], corps: [3, 4], carbonatation: [2, 2], alcool: [3, 3] },
    finish: ["seche", "astringente", "amere-persistante"],
    contradictions: ["lactique-yaourt", "banane"],
    keyMarkers: ["cafe-torrefie", "resine-pin"]
  }),
  profile(DARK, "imperial-stout", "primary", {
    appearance: { colors: ["noir"], clarity: ["opaque"] },
    nose: { "cafe-torrefie": 3, "chocolat-cacao": 3, "fruits-noirs-murs": 2, "caramel-toffee": 2 },
    palate: { "cafe-torrefie": 3, "chocolat-cacao": 3, "fruits-noirs-murs": 2, "caramel-toffee": 2 },
    structure: { amertume: [3, 4], sucrosite: [2, 3], acidite: [0, 1], corps: [4, 4], carbonatation: [1, 2], alcool: [4, 4] },
    finish: ["chaleureuse", "ronde", "astringente"],
    contradictions: ["lactique-yaourt", "banane"],
    keyMarkers: ["cafe-torrefie", "chocolat-cacao", "fruits-noirs-murs"]
  }),

  profile(BELGIAN, "belgian-blonde-ale", "primary", {
    appearance: { colors: ["dore"], clarity: ["claire"] },
    nose: { "fruits-legers": 2, "poivre-epices-levure": 1, "pain-biscuit": 1, "floral": 1 },
    palate: { "fruits-legers": 2, "poivre-epices-levure": 1, "pain-biscuit": 1 },
    structure: { amertume: [1, 2], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 2], carbonatation: [3, 3], alcool: [3, 3] },
    finish: ["seche", "vive"],
    contradictions: ["cafe-torrefie", "lactique-yaourt", "resine-pin"],
    keyMarkers: ["fruits-legers", "poivre-epices-levure"]
  }),
  profile(BELGIAN, "belgian-golden-strong-ale-belgian-strong-blonde-ale", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["claire"] },
    nose: { "fruits-legers": 3, "poivre-epices-levure": 2, "floral": 1 },
    palate: { "fruits-legers": 3, "poivre-epices-levure": 2 },
    structure: { amertume: [2, 2], sucrosite: [0, 1], acidite: [0, 1], corps: [1, 2], carbonatation: [4, 4], alcool: [4, 4] },
    finish: ["seche", "vive", "chaleureuse"],
    contradictions: ["cafe-torrefie", "caramel-toffee", "lactique-yaourt"],
    keyMarkers: ["fruits-legers", "poivre-epices-levure"]
  }),
  profile(BELGIAN, "dubbel", "primary", {
    appearance: { colors: ["ambre", "brun"], clarity: ["claire"] },
    nose: { "fruits-noirs-murs": 3, "caramel-toffee": 2, "pain-biscuit": 2, "noix-fruits-secs": 1, "epices": 1 },
    palate: { "fruits-noirs-murs": 3, "caramel-toffee": 2, "pain-biscuit": 2, "epices": 1 },
    structure: { amertume: [1, 1], sucrosite: [2, 2], acidite: [0, 1], corps: [3, 3], carbonatation: [3, 4], alcool: [3, 3] },
    finish: ["ronde", "chaleureuse"],
    contradictions: ["resine-pin", "cafe-torrefie", "lactique-yaourt"],
    keyMarkers: ["fruits-noirs-murs", "caramel-toffee"]
  }),
  profile(BELGIAN, "saison", "primary", {
    appearance: { colors: ["paille", "dore", "ambre"], clarity: ["claire", "voilee"] },
    nose: { "poivre-epices-levure": 3, "herbace-epice": 2, "fruits-legers": 2, "agrumes": 1 },
    palate: { "poivre-epices-levure": 3, "herbace-epice": 2, "fruits-legers": 1 },
    structure: { amertume: [2, 2], sucrosite: [0, 1], acidite: [1, 1], corps: [1, 2], carbonatation: [4, 4], alcool: [2, 3] },
    finish: ["seche", "vive"],
    contradictions: ["cafe-torrefie", "caramel-toffee"],
    keyMarkers: ["poivre-epices-levure", "herbace-epice"]
  }),

  profile(ALE, "scotch-ale-wee-heavy", "primary", {
    appearance: { colors: ["cuivre", "brun"], clarity: ["claire"] },
    nose: { "caramel-toffee": 3, "pain-biscuit": 3, "toaste": 2, "fruits-noirs-murs": 2, "noix-fruits-secs": 1 },
    palate: { "caramel-toffee": 3, "pain-biscuit": 3, "toaste": 2, "fruits-noirs-murs": 2 },
    structure: { amertume: [1, 1], sucrosite: [3, 4], acidite: [0, 1], corps: [4, 4], carbonatation: [1, 2], alcool: [4, 4] },
    finish: ["ronde", "chaleureuse"],
    contradictions: ["resine-pin", "lactique-yaourt"],
    keyMarkers: ["caramel-toffee", "pain-biscuit"]
  }),

  profile(WHEAT, "witbier", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["voilee", "trouble"] },
    nose: { "agrumes": 3, "coriandre": 3, "poivre-epices-levure": 1, "fruits-legers": 1, "cereale": 1 },
    palate: { "agrumes": 3, "coriandre": 3, "cereale": 1 },
    structure: { amertume: [0, 1], sucrosite: [1, 1], acidite: [1, 2], corps: [2, 2], carbonatation: [3, 4], alcool: [2, 2] },
    finish: ["vive", "cremeuse"],
    contradictions: ["cafe-torrefie", "resine-pin", "fruits-noirs-murs"],
    keyMarkers: ["coriandre", "agrumes"]
  }),
  profile(WHEAT, "weissbier-hefeweizen", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["voilee", "trouble"] },
    nose: { "banane": 3, "clou-girofle": 3, "cereale": 1, "fruits-legers": 1 },
    palate: { "banane": 3, "clou-girofle": 3, "cereale": 1 },
    structure: { amertume: [0, 1], sucrosite: [1, 1], acidite: [1, 1], corps: [2, 3], carbonatation: [4, 4], alcool: [2, 2] },
    finish: ["cremeuse", "vive"],
    contradictions: ["cafe-torrefie", "resine-pin", "coriandre"],
    keyMarkers: ["banane", "clou-girofle"]
  }),
  profile(WHEAT, "dunkelweizen", "primary", {
    appearance: { colors: ["ambre", "brun"], clarity: ["voilee", "trouble"] },
    nose: { "banane": 2, "clou-girofle": 2, "pain-biscuit": 3, "caramel-toffee": 2, "fruits-noirs-murs": 1 },
    palate: { "banane": 2, "clou-girofle": 2, "pain-biscuit": 3, "caramel-toffee": 2 },
    structure: { amertume: [0, 1], sucrosite: [2, 2], acidite: [0, 1], corps: [3, 3], carbonatation: [3, 4], alcool: [2, 2] },
    finish: ["ronde", "cremeuse"],
    contradictions: ["cafe-torrefie", "resine-pin"],
    keyMarkers: ["banane", "clou-girofle", "pain-biscuit"]
  }),
  profile(WHEAT, "weizenbock", "primary", {
    appearance: { colors: ["ambre", "brun"], clarity: ["voilee", "trouble"] },
    nose: { "banane": 2, "clou-girofle": 2, "fruits-noirs-murs": 3, "pain-biscuit": 2, "caramel-toffee": 2 },
    palate: { "banane": 2, "clou-girofle": 2, "fruits-noirs-murs": 3, "pain-biscuit": 2, "caramel-toffee": 2 },
    structure: { amertume: [1, 1], sucrosite: [2, 3], acidite: [0, 1], corps: [4, 4], carbonatation: [3, 3], alcool: [4, 4] },
    finish: ["ronde", "chaleureuse"],
    contradictions: ["resine-pin", "lactique-yaourt"],
    keyMarkers: ["fruits-noirs-murs", "banane", "clou-girofle"]
  }),

  profile(SOUR, "berliner-weisse", "primary", {
    appearance: { colors: ["paille"], clarity: ["claire", "voilee"] },
    nose: { "lactique-yaourt": 3, "agrumes": 3, "cereale": 1 },
    palate: { "lactique-yaourt": 3, "agrumes": 3, "cereale": 1 },
    structure: { amertume: [0, 0], sucrosite: [0, 1], acidite: [4, 4], corps: [1, 1], carbonatation: [4, 4], alcool: [0, 1] },
    finish: ["seche", "vive", "acide-persistante"],
    contradictions: ["cafe-torrefie", "caramel-toffee", "resine-pin"],
    keyMarkers: ["lactique-yaourt", "agrumes"]
  }),
  profile(SOUR, "gose", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["voilee", "trouble"] },
    nose: { "lactique-yaourt": 3, "agrumes": 2, "coriandre": 2, "salin-mineral": 3, "cereale": 1 },
    palate: { "lactique-yaourt": 3, "agrumes": 2, "coriandre": 2, "salin-mineral": 3 },
    structure: { amertume: [0, 1], sucrosite: [1, 1], acidite: [3, 4], corps: [1, 2], carbonatation: [3, 4], alcool: [1, 2] },
    finish: ["vive", "acide-persistante"],
    contradictions: ["cafe-torrefie", "resine-pin", "caramel-toffee"],
    keyMarkers: ["salin-mineral", "lactique-yaourt", "coriandre"]
  }),
  profile(SOUR, "flanders-red-ale", "primary", {
    appearance: { colors: ["ambre", "cuivre"], clarity: ["claire"] },
    nose: { "fruits-rouges": 3, "vinaigre-acetique": 2, "fruits-noirs-murs": 2, "boise-vanille": 1, "caramel-toffee": 1 },
    palate: { "fruits-rouges": 3, "vinaigre-acetique": 2, "fruits-noirs-murs": 2, "boise-vanille": 1 },
    structure: { amertume: [0, 1], sucrosite: [1, 2], acidite: [4, 4], corps: [2, 2], carbonatation: [2, 3], alcool: [2, 3] },
    finish: ["acide-persistante", "astringente"],
    contradictions: ["resine-pin", "cafe-torrefie", "banane"],
    keyMarkers: ["fruits-rouges", "vinaigre-acetique"]
  }),
  profile(SOUR, "lambic", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["claire", "voilee"] },
    nose: { "funky-cuir-ferme": 3, "lactique-yaourt": 2, "agrumes": 1, "boise-vanille": 1, "vinaigre-acetique": 1 },
    palate: { "funky-cuir-ferme": 3, "lactique-yaourt": 2, "agrumes": 1, "boise-vanille": 1 },
    structure: { amertume: [0, 0], sucrosite: [0, 0], acidite: [3, 4], corps: [1, 2], carbonatation: [0, 1], alcool: [2, 2] },
    finish: ["seche", "acide-persistante"],
    contradictions: ["resine-pin", "cafe-torrefie", "banane"],
    keyMarkers: ["funky-cuir-ferme", "lactique-yaourt"]
  }),
  profile(SOUR, "gueuze", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["claire", "voilee"] },
    nose: { "funky-cuir-ferme": 3, "lactique-yaourt": 2, "agrumes": 2, "boise-vanille": 1 },
    palate: { "funky-cuir-ferme": 3, "lactique-yaourt": 2, "agrumes": 2, "boise-vanille": 1 },
    structure: { amertume: [0, 1], sucrosite: [0, 0], acidite: [3, 4], corps: [1, 1], carbonatation: [4, 4], alcool: [2, 2] },
    finish: ["seche", "vive", "acide-persistante"],
    contradictions: ["resine-pin", "cafe-torrefie", "banane"],
    keyMarkers: ["funky-cuir-ferme", "agrumes"]
  }),

  profile(SPECIAL, "cream-ale", "primary", {
    appearance: { colors: ["paille", "dore"], clarity: ["claire"] },
    nose: { "cereale": 2, "fruits-legers": 1, "floral": 1 },
    palate: { "cereale": 2, "pain-biscuit": 1 },
    structure: { amertume: [1, 2], sucrosite: [0, 1], acidite: [0, 1], corps: [1, 2], carbonatation: [3, 3], alcool: [2, 2] },
    finish: ["vive", "seche"],
    contradictions: ["resine-pin", "cafe-torrefie", "lactique-yaourt"],
    keyMarkers: ["cereale"]
  }),

  profile(COMMERCIAL, "radler-shandy", "fallback", {
    appearance: { colors: ["paille", "dore"], clarity: ["claire", "voilee"] },
    nose: { "agrumes": 3, "fruits-legers": 1 },
    palate: { "agrumes": 3, "fruits-legers": 1 },
    structure: { amertume: [0, 0], sucrosite: [3, 4], acidite: [2, 3], corps: [1, 1], carbonatation: [4, 4], alcool: [0, 1] },
    finish: ["vive"],
    contradictions: ["cafe-torrefie", "resine-pin", "fruits-noirs-murs"],
    keyMarkers: ["agrumes"]
  }),

  profile(SPECIAL, "coffee-beer", "overlay", {
    nose: { "cafe-torrefie": 3, "chocolat-cacao": 1 },
    palate: { "cafe-torrefie": 3, "chocolat-cacao": 1 },
    finish: ["astringente"],
    keyMarkers: ["cafe-torrefie"]
  }),
  profile(SPECIAL, "wood-and-barrel-aged-beer", "overlay", {
    nose: { "boise-vanille": 3, "epices": 1, "fruits-noirs-murs": 1 },
    palate: { "boise-vanille": 3, "epices": 1 },
    structure: { alcool: [2, 4] },
    finish: ["astringente", "chaleureuse"],
    keyMarkers: ["boise-vanille"]
  })
]);

export const sensoryProfilesByKey = Object.freeze(Object.fromEntries(
  sensoryProfiles.map((entry) => [`${entry.collectionId}:${entry.cardId}`, entry])
));
