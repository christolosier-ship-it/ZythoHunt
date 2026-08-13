function expert(profile, definition) {
  return {
    ...profile,
    expert: true,
    appearance: definition.appearance,
    nose: definition.nose,
    palate: definition.palate,
    structure: definition.structure,
    finish: definition.finish,
    contradictions: definition.contradictions || [],
    keyMarkers: definition.keyMarkers || []
  };
}

const REFINEMENTS = Object.freeze({
  "lagers-et-fermentations-basses:west-coast-pilsner": (profile) => expert(profile, {
    appearance: { colors: ["paille", "dore"], clarity: ["claire"] },
    nose: { cereale: 2, "herbace-epice": 2, agrumes: 2, floral: 1, "resine-pin": 1 },
    palate: { cereale: 2, "herbace-epice": 2, agrumes: 2, "pain-biscuit": 1, "resine-pin": 1 },
    structure: { amertume: [2, 3], sucrosite: [0, 1], acidite: [0, 1], corps: [1, 2], carbonatation: [2, 3], alcool: [1, 2] },
    finish: ["seche", "vive"],
    contradictions: ["cafe-torrefie", "lactique-yaourt", "banane"],
    keyMarkers: ["herbace-epice", "cereale", "agrumes"]
  }),

  "lagers-et-fermentations-basses:helles-bock-maibock": (profile) => expert(profile, {
    appearance: { colors: ["dore", "ambre"], clarity: ["claire"] },
    nose: { cereale: 2, "pain-biscuit": 3, toaste: 2, "herbace-epice": 1, floral: 1 },
    palate: { cereale: 2, "pain-biscuit": 3, toaste: 2, "herbace-epice": 1 },
    structure: { amertume: [2, 3], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 3], carbonatation: [2, 3], alcool: [3, 3] },
    finish: ["seche", "ronde", "chaleureuse"],
    contradictions: ["resine-pin", "fruits-tropicaux", "cafe-torrefie", "lactique-yaourt"],
    keyMarkers: ["pain-biscuit", "cereale", "toaste"]
  }),

  "pale-ales-bitters-et-ipa:american-pale-ale": (profile) => expert(profile, {
    appearance: { colors: ["dore", "ambre"], clarity: ["claire", "voilee"] },
    nose: { agrumes: 3, "resine-pin": 3, "fruits-tropicaux": 2, floral: 1, "caramel-toffee": 1, "pain-biscuit": 1 },
    palate: { agrumes: 3, "resine-pin": 2, "fruits-tropicaux": 1, "caramel-toffee": 1, "pain-biscuit": 1 },
    structure: { amertume: [2, 3], sucrosite: [0, 1], acidite: [0, 1], corps: [1, 2], carbonatation: [2, 3], alcool: [2, 2] },
    finish: ["seche", "amere-persistante"],
    contradictions: ["cafe-torrefie", "lactique-yaourt", "banane", "funky-cuir-ferme"],
    keyMarkers: ["agrumes", "resine-pin"]
  }),

  "pale-ales-bitters-et-ipa:american-extra-special-bitter": (profile) => expert(profile, {
    appearance: { colors: ["dore", "ambre"], clarity: ["claire", "voilee"] },
    nose: { "pain-biscuit": 2, "caramel-toffee": 1, "fruits-legers": 1, agrumes: 2, floral: 1, "resine-pin": 1 },
    palate: { "pain-biscuit": 2, "caramel-toffee": 1, agrumes: 2, "resine-pin": 1 },
    structure: { amertume: [1, 2], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 2], carbonatation: [2, 3], alcool: [2, 2] },
    finish: ["seche", "ronde"],
    contradictions: ["cafe-torrefie", "lactique-yaourt", "banane"],
    keyMarkers: ["pain-biscuit", "agrumes"]
  }),

  "traditions-belges-et-francaises:saison": (profile) => expert(profile, {
    appearance: { colors: ["paille", "dore", "ambre"], clarity: ["claire", "voilee"] },
    nose: { "poivre-epices-levure": 3, "fruits-legers": 2, agrumes: 2, "herbace-epice": 2, "clou-girofle": 1, floral: 1 },
    palate: { "poivre-epices-levure": 3, "fruits-legers": 1, agrumes: 2, "herbace-epice": 1, "clou-girofle": 1 },
    structure: { amertume: [2, 3], sucrosite: [0, 0], acidite: [0, 1], corps: [1, 2], carbonatation: [3, 4], alcool: [2, 3] },
    finish: ["seche", "vive"],
    contradictions: ["cafe-torrefie", "caramel-toffee", "banane", "lactique-yaourt"],
    keyMarkers: ["poivre-epices-levure", "agrumes", "herbace-epice"]
  }),

  "traditions-belges-et-francaises:american-belgo-ale": (profile) => expert(profile, {
    appearance: { colors: ["dore", "ambre", "cuivre", "brun", "noir"], clarity: ["claire", "voilee"] },
    nose: { agrumes: 2, "resine-pin": 2, "fruits-tropicaux": 2, "fruits-legers": 2, "poivre-epices-levure": 2, epices: 1 },
    palate: { agrumes: 2, "resine-pin": 2, "fruits-tropicaux": 2, "fruits-legers": 2, "poivre-epices-levure": 2 },
    structure: { amertume: [2, 4], sucrosite: [0, 2], acidite: [0, 1], corps: [1, 3], carbonatation: [2, 4], alcool: [2, 4] },
    finish: ["seche", "vive"],
    contradictions: ["lactique-yaourt", "funky-cuir-ferme"],
    keyMarkers: ["resine-pin", "fruits-tropicaux", "poivre-epices-levure"]
  }),

  "porters-stouts:dry-stout-irish-dry-stout": (profile) => expert(profile, {
    appearance: { colors: ["brun", "noir"], clarity: ["opaque"] },
    nose: { "cafe-torrefie": 3, "chocolat-cacao": 2, toaste: 2, "caramel-toffee": 1, "fruits-legers": 1 },
    palate: { "cafe-torrefie": 3, "chocolat-cacao": 2, toaste: 2, "caramel-toffee": 1 },
    structure: { amertume: [2, 3], sucrosite: [0, 1], acidite: [0, 1], corps: [1, 2], carbonatation: [1, 2], alcool: [1, 2] },
    finish: ["seche", "cremeuse", "amere-persistante", "astringente"],
    contradictions: ["resine-pin", "fruits-tropicaux", "banane", "lactique-yaourt"],
    keyMarkers: ["cafe-torrefie", "toaste", "chocolat-cacao"]
  }),

  "ales-ambrees-brunes-maltees-et-fortes:american-brown-ale": (profile) => expert(profile, {
    appearance: { colors: ["cuivre", "brun"], clarity: ["claire", "voilee"] },
    nose: { "caramel-toffee": 2, "chocolat-cacao": 2, "noix-fruits-secs": 2, toaste: 2, "pain-biscuit": 1, agrumes: 1, "resine-pin": 1 },
    palate: { "caramel-toffee": 2, "chocolat-cacao": 2, "noix-fruits-secs": 2, toaste: 2, "pain-biscuit": 1, agrumes: 1 },
    structure: { amertume: [2, 3], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 3], carbonatation: [2, 3], alcool: [2, 2] },
    finish: ["ronde", "seche"],
    contradictions: ["lactique-yaourt", "banane", "funky-cuir-ferme"],
    keyMarkers: ["caramel-toffee", "noix-fruits-secs", "chocolat-cacao"]
  }),

  "ales-ambrees-brunes-maltees-et-fortes:english-brown-ale": (profile) => expert(profile, {
    appearance: { colors: ["cuivre", "brun"], clarity: ["claire"] },
    nose: { "pain-biscuit": 2, "caramel-toffee": 2, "noix-fruits-secs": 2, "chocolat-cacao": 1, "fruits-legers": 1 },
    palate: { "pain-biscuit": 2, "caramel-toffee": 2, "noix-fruits-secs": 2, "chocolat-cacao": 1 },
    structure: { amertume: [1, 2], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 2], carbonatation: [1, 2], alcool: [1, 2] },
    finish: ["ronde"],
    contradictions: ["resine-pin", "fruits-tropicaux", "lactique-yaourt", "banane"],
    keyMarkers: ["noix-fruits-secs", "pain-biscuit", "caramel-toffee"]
  }),

  "bieres-de-ble-et-de-seigle:leichtes-weizen": (profile) => expert(profile, {
    appearance: { colors: ["paille", "dore"], clarity: ["voilee", "trouble"] },
    nose: { banane: 2, "clou-girofle": 2, cereale: 2, "pain-biscuit": 1 },
    palate: { banane: 2, "clou-girofle": 2, cereale: 2 },
    structure: { amertume: [0, 1], sucrosite: [0, 1], acidite: [0, 1], corps: [0, 1], carbonatation: [3, 4], alcool: [0, 1] },
    finish: ["vive", "seche"],
    contradictions: ["cafe-torrefie", "resine-pin", "caramel-toffee"],
    keyMarkers: ["banane", "clou-girofle", "cereale"]
  }),

  "bieres-de-ble-et-de-seigle:bernsteinfarbenes-weizen": (profile) => expert(profile, {
    appearance: { colors: ["ambre", "cuivre"], clarity: ["voilee", "trouble"] },
    nose: { banane: 2, "clou-girofle": 2, cereale: 2, "pain-biscuit": 2, toaste: 1, "caramel-toffee": 1 },
    palate: { banane: 2, "clou-girofle": 2, cereale: 2, "pain-biscuit": 2, toaste: 1 },
    structure: { amertume: [0, 1], sucrosite: [1, 2], acidite: [0, 1], corps: [2, 3], carbonatation: [3, 4], alcool: [2, 2] },
    finish: ["cremeuse", "vive", "ronde"],
    contradictions: ["cafe-torrefie", "resine-pin", "lactique-yaourt"],
    keyMarkers: ["banane", "clou-girofle", "pain-biscuit"]
  })
});

/**
 * Couche experte appliquée après la résolution canonique et avant le scoring.
 * Elle corrige les profils dont l'héritage ou les mots-clés créent des collisions connues,
 * sans dupliquer les 251 fiches ni modifier leur rôle sensoriel.
 */
export function refineDerivedSensoryProfile(profile) {
  if (!profile) return profile;
  const refine = REFINEMENTS[`${profile.collectionId}:${profile.cardId}`];
  return refine ? refine(profile) : profile;
}

export const EXPERT_SENSORY_PROFILE_COUNT = Object.keys(REFINEMENTS).length;
