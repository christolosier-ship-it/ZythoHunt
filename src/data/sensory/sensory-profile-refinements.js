const REFINEMENTS = Object.freeze({
  "lagers-et-fermentations-basses:west-coast-pilsner": (profile) => ({
    ...profile,
    appearance: {
      colors: ["paille", "dore"],
      clarity: ["claire"]
    },
    nose: {
      cereale: 2,
      "herbace-epice": 2,
      agrumes: 2,
      floral: 1,
      "resine-pin": 1
    },
    palate: {
      cereale: 2,
      "herbace-epice": 2,
      agrumes: 2,
      "pain-biscuit": 1,
      "resine-pin": 1
    },
    structure: {
      ...(profile.structure || {}),
      amertume: [2, 3],
      sucrosite: [0, 1],
      acidite: [0, 1],
      corps: [1, 2],
      carbonatation: [2, 3],
      alcool: [1, 2]
    },
    finish: ["seche", "vive"],
    contradictions: ["cafe-torrefie", "lactique-yaourt", "banane"],
    keyMarkers: ["herbace-epice", "cereale", "agrumes"]
  })
});

/**
 * Corrections expertes ciblées appliquées après la dérivation générique.
 * Elles servent uniquement lorsqu'une appellation partage des mots-clés avec une autre famille
 * et que la règle générique créerait une signature artificiellement proche.
 */
export function refineDerivedSensoryProfile(profile) {
  if (!profile || profile.source === "curated") return profile;
  const refine = REFINEMENTS[`${profile.collectionId}:${profile.cardId}`];
  return refine ? refine(profile) : profile;
}
