/**
 * Référentiel sensoriel canonique de la Brassopédie.
 *
 * 251 profils statiques vérifiés. Les relations taxonomiques `type` et
 * `parentPrincipalId` sont synchronisées avec les cartes canoniques.
 * Ce fichier ne contient ni dérivation runtime ni rôle algorithmique historique.
 */

function freezeRecord(value) {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
  Object.values(value).forEach((entry) => freezeRecord(entry));
  return Object.freeze(value);
}

export const sensoryProfiles = freezeRecord([
  // Lagers et fermentations basses
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "lager",
    "type": "F",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1
    },
    "palate": {
      "cereale": 1
    },
    "structure": {
      "amertume": [
        0,
        4
      ],
      "sucrosite": [
        0,
        4
      ],
      "corps": [
        0,
        4
      ],
      "carbonatation": [
        1,
        4
      ],
      "alcool": [
        0,
        4
      ]
    },
    "finish": [],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        },
        {
          "label": "BJCP 2021 — Alternate categorization by style family",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/a/3-styles-sorted-using-style-family"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "pilsner",
    "type": "F",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        4
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        4
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "herbace-epice"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Pilsner",
    "aliases": [
      "Pils"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        },
        {
          "label": "BJCP 2021 — Alternate categorization by style family",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/a/3-styles-sorted-using-style-family"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "hoppy-lager",
    "type": "F",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "agrumes": 2,
      "floral": 2,
      "herbace-epice": 2,
      "resine-pin": 2,
      "fruits-tropicaux": 1
    },
    "palate": {
      "cereale": 1,
      "agrumes": 2,
      "floral": 2,
      "herbace-epice": 2,
      "resine-pin": 2,
      "fruits-tropicaux": 1
    },
    "structure": {
      "amertume": [
        2,
        4
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "herbace-epice",
      "resine-pin"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Hoppy Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "bock",
    "type": "F",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "toaste": 2,
      "noix-fruits-secs": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "toaste": 2,
      "noix-fruits-secs": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        4
      ],
      "corps": [
        2,
        4
      ],
      "alcool": [
        2,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "toaste"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Bock",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        },
        {
          "label": "BJCP 2021 — Alternate categorization by style family",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/a/3-styles-sorted-using-style-family"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "international-light-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        0
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "International Light Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "german-leichtbier",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        2,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        0,
        1
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "caramel-toffee"
    ],
    "keyMarkers": [
      "herbace-epice",
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "German Leichtbier",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "american-light-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1
    },
    "palate": {
      "cereale": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        0
      ],
      "corps": [
        0,
        1
      ],
      "carbonatation": [
        3,
        4
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "American Light Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "contemporary-american-light-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        0,
        1
      ],
      "carbonatation": [
        3,
        4
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Contemporary American Light Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "mexican-light-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        0,
        1
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Mexican Light Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "international-pale-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        3,
        4
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "International Pale Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 2A International Pale Lager",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/2/2a-international-pale-lager"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "international-pilsner",
    "type": "S",
    "parentPrincipalId": "pilsner",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "herbace-epice"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "International Pilsner",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "german-pilsner",
    "type": "S",
    "parentPrincipalId": "pilsner",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "floral": 2,
      "herbace-epice": 2
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "floral": 1,
      "herbace-epice": 2
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "caramel-toffee",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "herbace-epice",
      "floral"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "German Pilsner",
    "aliases": [
      "German Pils"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "italian-pilsner",
    "type": "S",
    "parentPrincipalId": "pilsner",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "floral": 3,
      "herbace-epice": 3
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "floral": 2,
      "herbace-epice": 3
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "floral",
      "herbace-epice"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Italian Pilsner",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "czech-pale-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "cereale": 2,
      "herbace-epice": 2
    },
    "palate": {
      "pain-biscuit": 2,
      "cereale": 2,
      "herbace-epice": 2
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        2
      ]
    },
    "finish": [
      "vive",
      "ronde",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "herbace-epice"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Czech Pale Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "czech-premium-pale-lager",
    "type": "S",
    "parentPrincipalId": "pilsner",
    "appearance": {
      "colors": [
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 3,
      "cereale": 2,
      "floral": 2,
      "herbace-epice": 2
    },
    "palate": {
      "pain-biscuit": 3,
      "cereale": 2,
      "floral": 2,
      "herbace-epice": 2
    },
    "structure": {
      "amertume": [
        3,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        2
      ]
    },
    "finish": [
      "ronde",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "herbace-epice"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Czech Premium Pale Lager",
    "aliases": [
      "Bohemian Pilsner",
      "Czech Pilsner"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 3B Czech Premium Pale Lager",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/3/3b-czech-premium-pale-lager"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "american-pilsner",
    "type": "S",
    "parentPrincipalId": "pilsner",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "floral": 2,
      "herbace-epice": 2
    },
    "palate": {
      "cereale": 2,
      "floral": 2,
      "herbace-epice": 2
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "herbace-epice"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "American Pilsner",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "contemporary-american-pilsner",
    "type": "S",
    "parentPrincipalId": "pilsner",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "agrumes": 2,
      "floral": 2,
      "herbace-epice": 2,
      "resine-pin": 1
    },
    "palate": {
      "cereale": 2,
      "agrumes": 2,
      "floral": 1,
      "herbace-epice": 2,
      "resine-pin": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "herbace-epice"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Contemporary American Pilsner",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "west-coast-pilsner",
    "type": "SS",
    "parentPrincipalId": "pilsner",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "agrumes": 3,
      "floral": 2,
      "herbace-epice": 2,
      "resine-pin": 3,
      "fruits-tropicaux": 2
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "agrumes": 3,
      "floral": 1,
      "herbace-epice": 2,
      "resine-pin": 3,
      "fruits-tropicaux": 2
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "resine-pin"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "West Coast Pilsner",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "rice-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "noix-fruits-secs": 1
    },
    "palate": {
      "cereale": 1,
      "noix-fruits-secs": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Rice Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "india-pale-lager",
    "type": "S",
    "parentPrincipalId": "hoppy-lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "agrumes": 3,
      "floral": 2,
      "herbace-epice": 2,
      "resine-pin": 3,
      "fruits-tropicaux": 2
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "agrumes": 3,
      "floral": 1,
      "herbace-epice": 2,
      "resine-pin": 3,
      "fruits-tropicaux": 2
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "resine-pin"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "India Pale Lager",
    "aliases": [
      "IPL"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "munich-helles",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        1
      ],
      "sucrosite": [
        1,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        2
      ]
    },
    "finish": [
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "caramel-toffee",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "pain-biscuit"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Munich Helles",
    "aliases": [
      "Helles"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — Munich-Style Helles",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        },
        {
          "label": "BJCP 2021 — 4A Munich Helles",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/4/4a-munich-helles"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "dortmunder-european-export",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        2,
        2
      ],
      "sucrosite": [
        1,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "caramel-toffee",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Dortmunder / European Export",
    "aliases": [
      "Dortmunder Export",
      "Helles Exportbier"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — Dortmunder/European-Style Export",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "festbier-german-oktoberfest",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        1
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "pain-biscuit"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Festbier / German Oktoberfest",
    "aliases": [
      "Festbier"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — German-Style Oktoberfest/Festbier",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        },
        {
          "label": "BJCP 2021 — 4B Festbier",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/4/4b-festbier"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "vienna-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "toaste": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 1
    },
    "palate": {
      "toaste": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "toaste",
      "pain-biscuit"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Vienna Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — Vienna-Style Lager",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "marzen",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "toaste"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Märzen",
    "aliases": [
      "Maerzen"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — German-Style Maerzen",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "franconian-rotbier",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "toaste": 2,
      "caramel-toffee": 2,
      "pain-biscuit": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "toaste": 2,
      "caramel-toffee": 2,
      "pain-biscuit": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "toaste",
      "caramel-toffee"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Franconian Rotbier",
    "aliases": [
      "Rotbier"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — Franconian-Style Rotbier",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "international-amber-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "caramel-toffee": 2,
      "toaste": 2,
      "pain-biscuit": 1
    },
    "palate": {
      "cereale": 1,
      "caramel-toffee": 2,
      "toaste": 2,
      "pain-biscuit": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "toaste"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "International Amber Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 2B International Amber Lager",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/2/2b-international-amber-lager"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "czech-amber-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 2,
      "herbace-epice": 1,
      "floral": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 2,
      "herbace-epice": 1,
      "floral": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        1,
        3
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        1,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "caramel-toffee"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Czech Amber Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 3C Czech Amber Lager",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/3/3c-czech-amber-lager"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "american-amber-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "caramel-toffee": 2,
      "toaste": 2,
      "agrumes": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "caramel-toffee": 2,
      "toaste": 2,
      "agrumes": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "vive",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "toaste"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "American Amber Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — American-Style Amber Lager",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "american-marzen-oktoberfest",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 1,
      "herbace-epice": 1,
      "floral": 1,
      "agrumes": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 1,
      "herbace-epice": 1,
      "floral": 1,
      "agrumes": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "toaste"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "American Märzen / Oktoberfest",
    "aliases": [
      "American Oktoberfest"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — American-Style Maerzen/Oktoberfest",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "mexican-amber-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "caramel-toffee"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Mexican Amber Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — Mexican-Style Amber Lager",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "munich-dunkel",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 3,
      "toaste": 2,
      "chocolat-cacao": 1,
      "noix-fruits-secs": 1,
      "caramel-toffee": 1
    },
    "palate": {
      "pain-biscuit": 3,
      "toaste": 2,
      "chocolat-cacao": 1,
      "noix-fruits-secs": 1,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "toaste"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Munich Dunkel",
    "aliases": [
      "Dunkel"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 8A Munich Dunkel",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/8/8a-munich-dunkel"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "schwarzbier",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 1,
      "chocolat-cacao": 2,
      "cafe-torrefie": 1,
      "caramel-toffee": 1,
      "herbace-epice": 1
    },
    "palate": {
      "pain-biscuit": 1,
      "chocolat-cacao": 2,
      "cafe-torrefie": 1,
      "caramel-toffee": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "chocolat-cacao",
      "cafe-torrefie"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Schwarzbier",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 8B Schwarzbier",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/8/8b-schwarzbier"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "international-dark-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "caramel-toffee": 1,
      "toaste": 1,
      "chocolat-cacao": 1
    },
    "palate": {
      "cereale": 1,
      "caramel-toffee": 1,
      "toaste": 1,
      "chocolat-cacao": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "chocolat-cacao"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "International Dark Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 2C International Dark Lager",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/2/2c-international-dark-lager"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "european-dark-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "chocolat-cacao": 2,
      "cafe-torrefie": 1,
      "toaste": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "chocolat-cacao": 2,
      "cafe-torrefie": 1,
      "toaste": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "chocolat-cacao",
      "pain-biscuit"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "European Dark Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — European-Style Dark Lager",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "czech-dark-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 2,
      "toaste": 2,
      "herbace-epice": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 2,
      "toaste": 2,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        1,
        3
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        1,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "chocolat-cacao"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Czech Dark Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — Bohemian-Style Dark Lager",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "american-dark-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "caramel-toffee": 1,
      "chocolat-cacao": 1,
      "cafe-torrefie": 1,
      "toaste": 1
    },
    "palate": {
      "caramel-toffee": 1,
      "chocolat-cacao": 1,
      "cafe-torrefie": 1,
      "toaste": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "vive",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "chocolat-cacao",
      "toaste"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "American Dark Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — American-Style Dark Lager",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "mexican-dark-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "toaste": 2,
      "noix-fruits-secs": 1,
      "caramel-toffee": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "toaste": 2,
      "noix-fruits-secs": 1,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "toaste"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Mexican Dark Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — Mexican-Style Dark Lager",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "traditional-bock-dunkles-bock",
    "type": "S",
    "parentPrincipalId": "bock",
    "appearance": {
      "colors": [
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "toaste": 3,
      "noix-fruits-secs": 2,
      "fruits-noirs-murs": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "toaste": 3,
      "noix-fruits-secs": 2,
      "fruits-noirs-murs": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "toaste",
      "pain-biscuit",
      "noix-fruits-secs"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Traditional Bock / Dunkles Bock",
    "aliases": [
      "Traditional Bock",
      "Dunkles Bock"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 6C Dunkles Bock",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/6/6c-dunkles-bock"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "helles-bock-maibock",
    "type": "S",
    "parentPrincipalId": "bock",
    "appearance": {
      "colors": [
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 2,
      "toaste": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 2,
      "toaste": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "cereale",
      "toaste"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Helles Bock / Maibock",
    "aliases": [
      "Helles Bock",
      "Maibock"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — German-Style Heller Bock/Maibock",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "doppelbock",
    "type": "S",
    "parentPrincipalId": "bock",
    "appearance": {
      "colors": [
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "toaste": 3,
      "caramel-toffee": 1,
      "fruits-noirs-murs": 2
    },
    "palate": {
      "pain-biscuit": 2,
      "toaste": 3,
      "caramel-toffee": 1,
      "fruits-noirs-murs": 2
    },
    "structure": {
      "amertume": [
        1,
        1
      ],
      "sucrosite": [
        3,
        3
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "toaste",
      "fruits-noirs-murs"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Doppelbock",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — German-Style Doppelbock",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "eisbock",
    "type": "S",
    "parentPrincipalId": "bock",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 2,
      "fruits-noirs-murs": 3,
      "chocolat-cacao": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 2,
      "fruits-noirs-murs": 3,
      "chocolat-cacao": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        4,
        4
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        0,
        1
      ],
      "alcool": [
        4,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fruits-noirs-murs",
      "toaste",
      "caramel-toffee"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Eisbock",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 9B Eisbock",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/9/9b-eisbock"
        },
        {
          "label": "Brewers Association 2026 — German-Style Eisbock",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "american-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1
    },
    "palate": {
      "cereale": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        3,
        4
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "caramel-toffee",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "American Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — American-Style Lager",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "contemporary-american-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        3,
        4
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "caramel-toffee",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Contemporary American Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — Contemporary American-Style Lager",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "lagers-et-fermentations-basses",
    "cardId": "mexican-pale-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "caramel-toffee",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Lagers et fermentations basses",
    "name": "Mexican Pale Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 — Mexican-Style Pale Lager",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },

  // Pale Ales, Bitters et IPA
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "pale-ale",
    "type": "F",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 1,
      "floral": 1,
      "agrumes": 2,
      "resine-pin": 1,
      "fruits-tropicaux": 1
    },
    "palate": {
      "pain-biscuit": 1,
      "floral": 1,
      "agrumes": 2,
      "resine-pin": 1,
      "fruits-tropicaux": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        1,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Pale Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "bitter",
    "type": "F",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1,
      "resine-pin": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1,
      "resine-pin": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        0,
        2
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "fruits-legers"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Bitter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        },
        {
          "label": "BJCP 2021 — 11A Ordinary Bitter",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/11/11a-ordinary-bitter"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "ipa-india-pale-ale",
    "type": "F",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 1,
      "floral": 1,
      "agrumes": 2,
      "resine-pin": 2,
      "fruits-tropicaux": 2
    },
    "palate": {
      "pain-biscuit": 1,
      "floral": 1,
      "agrumes": 2,
      "resine-pin": 2,
      "fruits-tropicaux": 2
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        4
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "resine-pin"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "IPA / India Pale Ale",
    "aliases": [
      "IPA",
      "India Pale Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "ordinary-bitter",
    "type": "S",
    "parentPrincipalId": "bitter",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1,
      "resine-pin": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1,
      "resine-pin": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        0,
        1
      ],
      "alcool": [
        1,
        1
      ]
    },
    "finish": [
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "fruits-legers"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Ordinary Bitter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 11A Ordinary Bitter",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/11/11a-ordinary-bitter"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "special-best-bitter",
    "type": "S",
    "parentPrincipalId": "bitter",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        0,
        2
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "fruits-legers"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Special / Best Bitter",
    "aliases": [
      "Special Bitter",
      "Best Bitter"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "extra-special-bitter-esb",
    "type": "S",
    "parentPrincipalId": "bitter",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "fruits-legers"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Extra Special Bitter / ESB",
    "aliases": [
      "ESB"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "english-summer-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 1,
      "caramel-toffee": 1,
      "floral": 2,
      "herbace-epice": 2,
      "agrumes": 2,
      "fruits-legers": 1
    },
    "palate": {
      "pain-biscuit": 1,
      "caramel-toffee": 1,
      "floral": 2,
      "herbace-epice": 2,
      "agrumes": 2,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        2,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "floral",
      "agrumes"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "English Summer Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "classic-english-pale-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "floral": 2,
      "herbace-epice": 2,
      "fruits-legers": 2
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "floral": 2,
      "herbace-epice": 2,
      "fruits-legers": 2
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        2,
        2
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "fruits-legers"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Classic English Pale Ale",
    "aliases": [
      "English Pale Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "british-golden-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 1,
      "floral": 2,
      "herbace-epice": 2,
      "agrumes": 2
    },
    "palate": {
      "pain-biscuit": 1,
      "floral": 2,
      "herbace-epice": 2,
      "agrumes": 2
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "caramel-toffee",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "floral"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "British Golden Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 12A British Golden Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/12/12a-british-golden-ale"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "golden-blonde-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "floral": 1,
      "agrumes": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "floral": 1,
      "agrumes": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "pain-biscuit"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Golden / Blonde Ale",
    "aliases": [
      "Golden Ale",
      "Blonde Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "australian-sparkling-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fruits-legers",
      "cereale"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Australian Sparkling Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 12B Australian Sparkling Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/12/12b-australian-sparkling-ale"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "classic-australian-pale-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fruits-legers",
      "cereale"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Classic Australian Pale Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "australian-pale-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "agrumes": 2,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "agrumes": 2,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fruits-tropicaux",
      "fruits-a-noyau"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Australian Pale Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "international-pale-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "caramel-toffee": 1,
      "floral": 1,
      "herbace-epice": 1,
      "agrumes": 2,
      "resine-pin": 1,
      "fruits-tropicaux": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "caramel-toffee": 1,
      "floral": 1,
      "herbace-epice": 1,
      "agrumes": 2,
      "resine-pin": 1,
      "fruits-tropicaux": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "International Pale Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "new-zealand-pale-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "agrumes": 2,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "baies-raisin": 2,
      "herbe-fraiche": 1
    },
    "palate": {
      "cereale": 1,
      "agrumes": 2,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "baies-raisin": 2,
      "herbe-fraiche": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fruits-tropicaux",
      "baies-raisin"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "New Zealand Pale Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "american-pale-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 1,
      "floral": 1,
      "caramel-toffee": 1
    },
    "palate": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 1,
      "floral": 1,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        2
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie",
      "banane"
    ],
    "keyMarkers": [
      "agrumes",
      "resine-pin"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "American Pale Ale",
    "aliases": [
      "APA"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        },
        {
          "label": "BJCP 2021 — 18B American Pale Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/18/18b-american-pale-ale"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "american-extra-special-bitter",
    "type": "S",
    "parentPrincipalId": "bitter",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "fruits-legers": 1,
      "agrumes": 2,
      "floral": 1,
      "resine-pin": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "fruits-legers": 1,
      "agrumes": 2,
      "floral": 1,
      "resine-pin": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        2
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie",
      "banane"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "agrumes"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "American Extra Special Bitter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "juicy-hazy-pale-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "agrumes": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "fruits-legers": 2
    },
    "palate": {
      "agrumes": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "fruits-legers": 2
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "cremeuse",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "fruits-a-noyau",
      "fruits-tropicaux"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Juicy / Hazy Pale Ale",
    "aliases": [
      "Hazy Pale Ale",
      "Juicy Pale Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "american-strong-pale-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "floral": 1,
      "caramel-toffee": 1
    },
    "palate": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "floral": 1,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        3,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "resine-pin"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "American Strong Pale Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "juicy-hazy-strong-pale-ale",
    "type": "S",
    "parentPrincipalId": "pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "agrumes": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "fruits-legers": 2
    },
    "palate": {
      "agrumes": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "fruits-legers": 2
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "cremeuse",
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "fruits-a-noyau",
      "fruits-tropicaux"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Juicy / Hazy Strong Pale Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "kolsch",
    "type": "S",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie",
      "caramel-toffee"
    ],
    "keyMarkers": [
      "cereale",
      "fruits-legers"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Kölsch",
    "aliases": [
      "Koelsch"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 5B Kölsch",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/5/5b-kolsch"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "session-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "agrumes": 2,
      "resine-pin": 2,
      "fruits-tropicaux": 2,
      "floral": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "agrumes": 2,
      "resine-pin": 2,
      "fruits-tropicaux": 2,
      "floral": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        1,
        1
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "resine-pin"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Session IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "english-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "floral": 2,
      "herbace-epice": 2,
      "agrumes": 2,
      "fruits-legers": 2
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "floral": 2,
      "herbace-epice": 2,
      "agrumes": 2,
      "fruits-legers": 2
    },
    "structure": {
      "amertume": [
        3,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "floral",
      "herbace-epice"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "English IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 12C English IPA",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/12/12c-english-ipa"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "american-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "floral": 2
    },
    "palate": {
      "cereale": 1,
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "floral": 2
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie",
      "banane"
    ],
    "keyMarkers": [
      "agrumes",
      "fruits-tropicaux",
      "resine-pin"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "American IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 21A American IPA",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/21/21a-american-ipa"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "new-zealand-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "agrumes": 2,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "baies-raisin": 2,
      "floral": 2,
      "herbe-fraiche": 1
    },
    "palate": {
      "cereale": 1,
      "agrumes": 2,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "baies-raisin": 2,
      "floral": 2,
      "herbe-fraiche": 1
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fruits-tropicaux",
      "baies-raisin",
      "fruits-a-noyau"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "New Zealand IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "west-coast-ipa",
    "type": "SS",
    "parentPrincipalId": "american-ipa",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "floral": 1
    },
    "palate": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "floral": 1
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        0,
        0
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "caramel-toffee",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie",
      "banane"
    ],
    "keyMarkers": [
      "resine-pin",
      "agrumes"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "West Coast IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "neipa-juicy-hazy-ipa",
    "type": "SS",
    "parentPrincipalId": "american-ipa",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "fruits-tropicaux": 3,
      "agrumes": 3,
      "fruits-a-noyau": 3,
      "fruits-legers": 2
    },
    "palate": {
      "fruits-tropicaux": 3,
      "agrumes": 3,
      "fruits-a-noyau": 3,
      "fruits-legers": 2
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "cremeuse",
      "ronde"
    ],
    "contradictions": [
      "cafe-torrefie",
      "vinaigre-acetique",
      "fume"
    ],
    "keyMarkers": [
      "fruits-tropicaux",
      "fruits-a-noyau",
      "agrumes"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "NEIPA / Juicy-Hazy IPA",
    "aliases": [
      "NEIPA",
      "New England IPA",
      "Juicy IPA",
      "Hazy IPA"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 21C Hazy IPA",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/21/21c-hazy-ipa"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "double-imperial-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "floral": 2,
      "caramel-toffee": 1
    },
    "palate": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "floral": 2,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        4,
        4
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "chaleureuse",
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie",
      "banane"
    ],
    "keyMarkers": [
      "resine-pin",
      "agrumes",
      "fruits-tropicaux"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Double / Imperial IPA",
    "aliases": [
      "Double IPA",
      "DIPA",
      "Imperial IPA"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 22A Double IPA",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/22/22a-double-ipa"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "juicy-hazy-double-imperial-ipa",
    "type": "SS",
    "parentPrincipalId": "double-imperial-ipa",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "agrumes": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "fruits-legers": 3
    },
    "palate": {
      "agrumes": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "fruits-legers": 3
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "cremeuse",
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie",
      "fume"
    ],
    "keyMarkers": [
      "agrumes",
      "fruits-a-noyau",
      "fruits-tropicaux"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Juicy-Hazy Double / Imperial IPA",
    "aliases": [
      "Hazy Double IPA",
      "Juicy Double IPA"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "belgian-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "agrumes": 2,
      "floral": 2,
      "poivre-epices-levure": 2,
      "fruits-legers": 2,
      "epices": 2
    },
    "palate": {
      "agrumes": 2,
      "floral": 1,
      "poivre-epices-levure": 2,
      "fruits-legers": 2,
      "epices": 2
    },
    "structure": {
      "amertume": [
        3,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "chaleureuse"
    ],
    "contradictions": [
      "cafe-torrefie",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "agrumes",
      "poivre-epices-levure"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Belgian IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "black-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "floral": 1,
      "caramel-toffee": 1,
      "chocolat-cacao": 1,
      "cafe-torrefie": 1
    },
    "palate": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "floral": 1,
      "caramel-toffee": 1,
      "chocolat-cacao": 1,
      "cafe-torrefie": 1
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "resine-pin",
      "agrumes"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Black IPA",
    "aliases": [
      "Cascadian Dark Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        },
        {
          "label": "BJCP 2021 — 21B Specialty IPA",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/21/21b-specialty-ipa"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "brown-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "agrumes": 3,
      "resine-pin": 2,
      "fruits-tropicaux": 1,
      "pain-biscuit": 1,
      "caramel-toffee": 2,
      "noix-fruits-secs": 2,
      "chocolat-cacao": 1
    },
    "palate": {
      "agrumes": 3,
      "resine-pin": 2,
      "fruits-tropicaux": 1,
      "pain-biscuit": 1,
      "caramel-toffee": 2,
      "noix-fruits-secs": 2,
      "chocolat-cacao": 1
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "ronde",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "caramel-toffee",
      "noix-fruits-secs"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Brown IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 21B Specialty IPA",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/21/21b-specialty-ipa"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "red-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "agrumes": 3,
      "resine-pin": 2,
      "fruits-tropicaux": 1,
      "pain-biscuit": 1,
      "toaste": 1,
      "caramel-toffee": 2
    },
    "palate": {
      "agrumes": 3,
      "resine-pin": 2,
      "fruits-tropicaux": 1,
      "pain-biscuit": 1,
      "toaste": 1,
      "caramel-toffee": 2
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "caramel-toffee"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Red IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 21B Specialty IPA",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/21/21b-specialty-ipa"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "rye-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "agrumes": 3,
      "resine-pin": 2,
      "fruits-tropicaux": 1,
      "cereale": 2,
      "pain-biscuit": 1,
      "epices": 2
    },
    "palate": {
      "agrumes": 3,
      "resine-pin": 2,
      "fruits-tropicaux": 1,
      "cereale": 2,
      "pain-biscuit": 1,
      "epices": 2
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "epices",
      "cereale"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Rye IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 21B Specialty IPA",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/21/21b-specialty-ipa"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "white-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "agrumes": 3,
      "fruits-tropicaux": 2,
      "poivre-epices-levure": 2,
      "epices": 2,
      "coriandre": 2,
      "floral": 1
    },
    "palate": {
      "agrumes": 3,
      "fruits-tropicaux": 2,
      "poivre-epices-levure": 2,
      "epices": 2,
      "coriandre": 2,
      "floral": 1
    },
    "structure": {
      "amertume": [
        3,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "coriandre",
      "poivre-epices-levure"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "White IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 21B Specialty IPA",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/21/21b-specialty-ipa"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "pale-ales-bitters-et-ipa",
    "cardId": "brut-ipa",
    "type": "S",
    "parentPrincipalId": "ipa-india-pale-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "agrumes": 3,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 2,
      "floral": 2,
      "baies-raisin": 1
    },
    "palate": {
      "agrumes": 3,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 2,
      "floral": 2,
      "baies-raisin": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        0
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        4,
        4
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "caramel-toffee",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "floral",
      "baies-raisin"
    ],
    "collectionName": "Pale Ales, Bitters et IPA",
    "name": "Brut IPA",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 21B Specialty IPA",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/21/21b-specialty-ipa"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },

  // Porters et Stouts
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "porter",
    "type": "F",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 2,
      "toaste": 1,
      "cafe-torrefie": 1,
      "noix-fruits-secs": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 2,
      "toaste": 1,
      "cafe-torrefie": 1,
      "noix-fruits-secs": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        1,
        3
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        1,
        3
      ],
      "alcool": [
        1,
        4
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "chocolat-cacao",
      "caramel-toffee"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Porter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 13C English Porter",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/13/13c-english-porter"
        },
        {
          "label": "BJCP 2021 — 20A American Porter",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/20/20a-american-porter"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "stout",
    "type": "F",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "cafe-torrefie": 2,
      "chocolat-cacao": 2,
      "toaste": 2,
      "caramel-toffee": 1,
      "fruits-noirs-murs": 1
    },
    "palate": {
      "cafe-torrefie": 2,
      "chocolat-cacao": 2,
      "toaste": 2,
      "caramel-toffee": 1,
      "fruits-noirs-murs": 1
    },
    "structure": {
      "amertume": [
        1,
        4
      ],
      "sucrosite": [
        0,
        4
      ],
      "corps": [
        1,
        4
      ],
      "carbonatation": [
        1,
        3
      ],
      "alcool": [
        1,
        4
      ]
    },
    "finish": [
      "seche",
      "ronde",
      "cremeuse",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "cafe-torrefie",
      "chocolat-cacao"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Stout",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 15B Irish Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/15/15b-irish-stout"
        },
        {
          "label": "BJCP 2021 — 16D Foreign Extra Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/16/16d-foreign-extra-stout"
        },
        {
          "label": "BJCP 2021 — 20B American Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/20/20b-american-stout"
        },
        {
          "label": "BJCP 2021 — 20C Imperial Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/20/20c-imperial-stout"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "english-porter",
    "type": "S",
    "parentPrincipalId": "porter",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 2,
      "toaste": 1,
      "noix-fruits-secs": 1,
      "fruits-legers": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 2,
      "toaste": 1,
      "noix-fruits-secs": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "resine-pin",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "chocolat-cacao",
      "caramel-toffee"
    ],
    "collectionName": "Porters et Stouts",
    "name": "English Porter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 13C English Porter",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/13/13c-english-porter"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "brown-porter",
    "type": "S",
    "parentPrincipalId": "porter",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 2,
      "toaste": 1,
      "noix-fruits-secs": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 2,
      "toaste": 1,
      "noix-fruits-secs": 1
    },
    "structure": {
      "amertume": [
        2,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        1,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "chocolat-cacao"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Brown Porter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "robust-porter",
    "type": "S",
    "parentPrincipalId": "porter",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "opaque",
        "claire"
      ]
    },
    "nose": {
      "chocolat-cacao": 2,
      "cafe-torrefie": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "fruits-legers": 1,
      "resine-pin": 1
    },
    "palate": {
      "chocolat-cacao": 2,
      "cafe-torrefie": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "fruits-legers": 1,
      "resine-pin": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        2,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "cafe-torrefie",
      "chocolat-cacao",
      "caramel-toffee"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Robust Porter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        },
        {
          "label": "BJCP 2021 — 20A American Porter",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/20/20a-american-porter"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "american-porter",
    "type": "S",
    "parentPrincipalId": "porter",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "chocolat-cacao": 3,
      "cafe-torrefie": 2,
      "toaste": 2,
      "caramel-toffee": 1,
      "resine-pin": 2,
      "floral": 1,
      "fruits-legers": 1
    },
    "palate": {
      "chocolat-cacao": 3,
      "cafe-torrefie": 2,
      "toaste": 2,
      "caramel-toffee": 1,
      "resine-pin": 2,
      "floral": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "chocolat-cacao",
      "cafe-torrefie",
      "resine-pin"
    ],
    "collectionName": "Porters et Stouts",
    "name": "American Porter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 20A American Porter",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/20/20a-american-porter"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "pre-prohibition-porter",
    "type": "S",
    "parentPrincipalId": "porter",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 1,
      "toaste": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 1,
      "toaste": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "cereale",
      "pain-biscuit",
      "caramel-toffee"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Pre-Prohibition Porter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — Historical Beer: Pre-Prohibition Porter",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/27/27g-pre-prohibition-porter"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "baltic-porter",
    "type": "S",
    "parentPrincipalId": "porter",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 1,
      "toaste": 1
    },
    "palate": {
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 1,
      "toaste": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "resine-pin",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fruits-noirs-murs",
      "baies-raisin",
      "caramel-toffee"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Baltic Porter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 9C Baltic Porter",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/9/9c-baltic-porter"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "american-imperial-porter",
    "type": "S",
    "parentPrincipalId": "porter",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "opaque"
      ]
    },
    "nose": {
      "chocolat-cacao": 3,
      "caramel-toffee": 3,
      "cafe-torrefie": 1,
      "fruits-legers": 2,
      "agrumes": 2,
      "resine-pin": 2,
      "floral": 1
    },
    "palate": {
      "chocolat-cacao": 3,
      "caramel-toffee": 3,
      "cafe-torrefie": 1,
      "fruits-legers": 2,
      "agrumes": 2,
      "resine-pin": 2,
      "floral": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "chocolat-cacao",
      "caramel-toffee"
    ],
    "collectionName": "Porters et Stouts",
    "name": "American Imperial Porter",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "smoke-porter",
    "type": "S",
    "parentPrincipalId": "porter",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "opaque",
        "claire"
      ]
    },
    "nose": {
      "fume": 3,
      "chocolat-cacao": 2,
      "caramel-toffee": 2,
      "pain-biscuit": 1,
      "cafe-torrefie": 1
    },
    "palate": {
      "fume": 3,
      "chocolat-cacao": 2,
      "caramel-toffee": 2,
      "pain-biscuit": 1,
      "cafe-torrefie": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        1,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "fume",
      "chocolat-cacao"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Smoke Porter",
    "aliases": [
      "Smoked Porter"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        },
        {
          "label": "BJCP 2021 — 32A Classic Style Smoked Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/32/32a-classic-style-smoked-beer"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "dry-stout-irish-dry-stout",
    "type": "S",
    "parentPrincipalId": "stout",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "opaque"
      ]
    },
    "nose": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 2,
      "toaste": 2,
      "caramel-toffee": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 2,
      "toaste": 2,
      "caramel-toffee": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "cremeuse",
      "amere-persistante",
      "astringente"
    ],
    "contradictions": [
      "resine-pin",
      "fruits-tropicaux",
      "banane",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cafe-torrefie",
      "toaste",
      "chocolat-cacao"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Dry Stout / Irish Dry Stout",
    "aliases": [
      "Dry Stout",
      "Irish Dry Stout"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 15B Irish Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/15/15b-irish-stout"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "irish-extra-stout",
    "type": "S",
    "parentPrincipalId": "stout",
    "appearance": {
      "colors": [
        "noir"
      ],
      "clarity": [
        "opaque"
      ]
    },
    "nose": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 2,
      "toaste": 2,
      "pain-biscuit": 1,
      "fruits-legers": 1,
      "caramel-toffee": 1
    },
    "palate": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 2,
      "toaste": 2,
      "pain-biscuit": 1,
      "fruits-legers": 1,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        2,
        2
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "cremeuse",
      "amere-persistante",
      "astringente"
    ],
    "contradictions": [
      "resine-pin",
      "fruits-tropicaux",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "cafe-torrefie",
      "chocolat-cacao",
      "toaste"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Irish Extra Stout",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 15C Irish Extra Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/15/15c-irish-extra-stout"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "export-stout-foreign-extra-stout",
    "type": "S",
    "parentPrincipalId": "stout",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 3,
      "toaste": 2,
      "fruits-noirs-murs": 2,
      "fruits-legers": 1,
      "caramel-toffee": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 3,
      "toaste": 2,
      "fruits-noirs-murs": 2,
      "fruits-legers": 1,
      "caramel-toffee": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        3,
        3
      ]
    },
    "finish": [
      "seche",
      "amere-persistante",
      "chaleureuse"
    ],
    "contradictions": [
      "resine-pin",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "cafe-torrefie",
      "chocolat-cacao",
      "fruits-noirs-murs"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Export Stout / Foreign Extra Stout",
    "aliases": [
      "Export Stout",
      "Foreign Extra Stout"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 16D Foreign Extra Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/16/16d-foreign-extra-stout"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "tropical-stout",
    "type": "S",
    "parentPrincipalId": "stout",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "chocolat-cacao": 3,
      "cafe-torrefie": 2,
      "caramel-toffee": 2,
      "fruits-legers": 3,
      "fruits-noirs-murs": 2
    },
    "palate": {
      "chocolat-cacao": 3,
      "cafe-torrefie": 2,
      "caramel-toffee": 2,
      "fruits-legers": 3,
      "fruits-noirs-murs": 2
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        3,
        4
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "cremeuse",
      "chaleureuse"
    ],
    "contradictions": [
      "resine-pin",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "fruits-legers",
      "chocolat-cacao",
      "caramel-toffee"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Tropical Stout",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 16C Tropical Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/16/16c-tropical-stout"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "sweet-milk-cream-stout",
    "type": "S",
    "parentPrincipalId": "stout",
    "appearance": {
      "colors": [
        "noir"
      ],
      "clarity": [
        "opaque"
      ]
    },
    "nose": {
      "chocolat-cacao": 3,
      "caramel-toffee": 3,
      "cafe-torrefie": 2,
      "fruits-legers": 1
    },
    "palate": {
      "chocolat-cacao": 3,
      "caramel-toffee": 3,
      "cafe-torrefie": 2,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        3,
        4
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "cremeuse",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "vinaigre-acetique",
      "resine-pin",
      "funky-cuir-ferme"
    ],
    "keyMarkers": [
      "chocolat-cacao",
      "caramel-toffee"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Sweet / Milk / Cream Stout",
    "aliases": [
      "Sweet Stout",
      "Milk Stout",
      "Cream Stout"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 16A Sweet Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/16/16a-sweet-stout"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "oatmeal-stout",
    "type": "S",
    "parentPrincipalId": "stout",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "chocolat-cacao": 2,
      "cafe-torrefie": 2,
      "cereale": 2,
      "noix-fruits-secs": 2,
      "toaste": 1,
      "fruits-legers": 1
    },
    "palate": {
      "chocolat-cacao": 2,
      "cafe-torrefie": 2,
      "cereale": 2,
      "noix-fruits-secs": 2,
      "toaste": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        2,
        2
      ],
      "sucrosite": [
        1,
        3
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "cremeuse",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "resine-pin",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cereale",
      "noix-fruits-secs",
      "chocolat-cacao"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Oatmeal Stout",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 16B Oatmeal Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/16/16b-oatmeal-stout"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "american-stout",
    "type": "S",
    "parentPrincipalId": "stout",
    "appearance": {
      "colors": [
        "noir"
      ],
      "clarity": [
        "opaque"
      ]
    },
    "nose": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 2,
      "caramel-toffee": 1,
      "resine-pin": 3,
      "agrumes": 2,
      "floral": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 2,
      "caramel-toffee": 1,
      "resine-pin": 3,
      "agrumes": 2,
      "floral": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        2,
        4
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "astringente",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "cafe-torrefie",
      "resine-pin",
      "agrumes"
    ],
    "collectionName": "Porters et Stouts",
    "name": "American Stout",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 20B American Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/20/20b-american-stout"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "imperial-stout",
    "type": "S",
    "parentPrincipalId": "stout",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "opaque"
      ]
    },
    "nose": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 3,
      "fruits-noirs-murs": 3,
      "caramel-toffee": 2,
      "toaste": 2,
      "fruits-legers": 2
    },
    "palate": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 3,
      "fruits-noirs-murs": 3,
      "caramel-toffee": 2,
      "toaste": 2,
      "fruits-legers": 2
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "chaleureuse",
      "ronde",
      "astringente"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "cafe-torrefie",
      "chocolat-cacao",
      "fruits-noirs-murs"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Imperial Stout",
    "aliases": [
      "Russian Imperial Stout"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 20C Imperial Stout",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/20/20c-imperial-stout"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "british-imperial-stout",
    "type": "SS",
    "parentPrincipalId": "imperial-stout",
    "appearance": {
      "colors": [
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "opaque",
        "claire"
      ]
    },
    "nose": {
      "caramel-toffee": 3,
      "fruits-noirs-murs": 3,
      "pain-biscuit": 2,
      "toaste": 2,
      "chocolat-cacao": 2,
      "cafe-torrefie": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "caramel-toffee": 3,
      "fruits-noirs-murs": 3,
      "pain-biscuit": 2,
      "toaste": 2,
      "chocolat-cacao": 2,
      "cafe-torrefie": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "chaleureuse",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "fruits-noirs-murs",
      "pain-biscuit"
    ],
    "collectionName": "Porters et Stouts",
    "name": "British Imperial Stout",
    "aliases": [
      "British-Style Imperial Stout"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "american-imperial-stout",
    "type": "SS",
    "parentPrincipalId": "imperial-stout",
    "appearance": {
      "colors": [
        "noir"
      ],
      "clarity": [
        "opaque"
      ]
    },
    "nose": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 3,
      "caramel-toffee": 3,
      "fruits-noirs-murs": 3,
      "resine-pin": 3,
      "agrumes": 2,
      "floral": 2,
      "fruits-legers": 2
    },
    "palate": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 3,
      "caramel-toffee": 3,
      "fruits-noirs-murs": 3,
      "resine-pin": 3,
      "agrumes": 2,
      "floral": 2,
      "fruits-legers": 2
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        2,
        4
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        4,
        4
      ]
    },
    "finish": [
      "chaleureuse",
      "ronde",
      "astringente",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "cafe-torrefie",
      "resine-pin",
      "agrumes",
      "fruits-noirs-murs"
    ],
    "collectionName": "Porters et Stouts",
    "name": "American Imperial Stout",
    "aliases": [
      "American-Style Imperial Stout"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "dessert-pastry-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "chocolat-cacao": 3,
      "caramel-toffee": 3,
      "cafe-torrefie": 2,
      "boise-vanille": 2,
      "noix-fruits-secs": 2,
      "epices": 2
    },
    "palate": {
      "chocolat-cacao": 3,
      "caramel-toffee": 3,
      "cafe-torrefie": 2,
      "boise-vanille": 2,
      "noix-fruits-secs": 2,
      "epices": 2
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        3,
        4
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "cremeuse",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "boise-vanille",
      "chocolat-cacao",
      "caramel-toffee"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Dessert / Pastry Beer",
    "aliases": [
      "Dessert Beer",
      "Pastry Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "porters-stouts",
    "cardId": "coffee-stout-or-porter",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 2
    },
    "palate": {
      "cafe-torrefie": 3,
      "chocolat-cacao": 2
    },
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [
      "cafe-torrefie"
    ],
    "collectionName": "Porters et Stouts",
    "name": "Coffee Stout or Porter",
    "aliases": [
      "Coffee Stout",
      "Coffee Porter"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },

  // Traditions belges et françaises
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "belgian-ale-ale-belge",
    "type": "F",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "fruits-legers": 2,
      "poivre-epices-levure": 2,
      "cereale": 1,
      "pain-biscuit": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "fruits-legers": 2,
      "poivre-epices-levure": 2,
      "cereale": 1,
      "pain-biscuit": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        0,
        3
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        2,
        4
      ],
      "alcool": [
        1,
        4
      ]
    },
    "finish": [
      "seche",
      "vive",
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "cafe-torrefie",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "fruits-legers",
      "poivre-epices-levure"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Belgian Ale / Ale belge",
    "aliases": [
      "Belgian Ale",
      "Ale belge"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "belgian-table-beer",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "fruits-legers": 1,
      "poivre-epices-levure": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "fruits-legers": 1,
      "poivre-epices-levure": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        0,
        1
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        0,
        0
      ]
    },
    "finish": [
      "vive"
    ],
    "contradictions": [
      "cafe-torrefie",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cereale",
      "fruits-legers"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Belgian Table Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "belgian-session-ale",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "fruits-legers": 2,
      "poivre-epices-levure": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "fruits-legers": 2,
      "poivre-epices-levure": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        0,
        1
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        1,
        1
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "cafe-torrefie",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "fruits-legers",
      "poivre-epices-levure"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Belgian Session Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "belgian-single",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 2,
      "fruits-legers": 2,
      "poivre-epices-levure": 2,
      "floral": 2,
      "herbace-epice": 2,
      "agrumes": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 2,
      "fruits-legers": 2,
      "poivre-epices-levure": 2,
      "floral": 2,
      "herbace-epice": 2,
      "agrumes": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "caramel-toffee",
      "fruits-noirs-murs",
      "cafe-torrefie",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "herbace-epice",
      "poivre-epices-levure",
      "pain-biscuit"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Belgian Single",
    "aliases": [
      "Trappist Single"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 26A Trappist Single",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/26/26a-trappist-single"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "belgian-pale-ale",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "toaste": 2,
      "noix-fruits-secs": 1,
      "caramel-toffee": 1,
      "fruits-legers": 3,
      "agrumes": 2,
      "floral": 1,
      "herbace-epice": 1,
      "poivre-epices-levure": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "toaste": 2,
      "noix-fruits-secs": 1,
      "caramel-toffee": 1,
      "fruits-legers": 3,
      "agrumes": 2,
      "floral": 1,
      "herbace-epice": 1,
      "poivre-epices-levure": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "lactique-yaourt",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "fruits-legers",
      "toaste"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Belgian Pale Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 24B Belgian Pale Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/24/24b-belgian-pale-ale"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "speciale-belge",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "caramel-toffee": 2,
      "toaste": 2,
      "pain-biscuit": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1,
      "poivre-epices-levure": 1
    },
    "palate": {
      "caramel-toffee": 2,
      "toaste": 2,
      "pain-biscuit": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1,
      "poivre-epices-levure": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "lactique-yaourt",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "toaste",
      "fruits-legers"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Spéciale Belge",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        },
        {
          "label": "BJCP 2021 — 24B Belgian Pale Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/24/24b-belgian-pale-ale"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "belgian-blonde-ale",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "miel": 1,
      "fruits-legers": 2,
      "agrumes": 2,
      "poivre-epices-levure": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "miel": 1,
      "fruits-legers": 2,
      "agrumes": 2,
      "poivre-epices-levure": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "cafe-torrefie",
      "lactique-yaourt",
      "vinaigre-acetique",
      "resine-pin"
    ],
    "keyMarkers": [
      "fruits-legers",
      "agrumes",
      "poivre-epices-levure"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Belgian Blonde Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 25A Belgian Blond Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/25/25a-belgian-blond-ale"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "belgian-golden-strong-ale-belgian-strong-blonde-ale",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "fruits-legers": 3,
      "agrumes": 2,
      "floral": 2,
      "herbace-epice": 2,
      "poivre-epices-levure": 2,
      "cereale": 1
    },
    "palate": {
      "fruits-legers": 3,
      "agrumes": 2,
      "floral": 2,
      "herbace-epice": 2,
      "poivre-epices-levure": 2,
      "cereale": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        4,
        4
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "chaleureuse"
    ],
    "contradictions": [
      "caramel-toffee",
      "fruits-noirs-murs",
      "cafe-torrefie",
      "lactique-yaourt",
      "vinaigre-acetique",
      "resine-pin"
    ],
    "keyMarkers": [
      "fruits-legers",
      "poivre-epices-levure",
      "herbace-epice"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Belgian Golden Strong Ale / Belgian Strong Blonde Ale",
    "aliases": [
      "Belgian Golden Strong Ale",
      "Belgian Strong Blonde Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 25C Belgian Golden Strong Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/25/25c-belgian-golden-strong-ale"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "belgian-dark-strong-ale",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "fruits-legers": 2,
      "caramel-toffee": 2,
      "pain-biscuit": 2,
      "toaste": 1,
      "poivre-epices-levure": 1
    },
    "palate": {
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "fruits-legers": 2,
      "caramel-toffee": 2,
      "pain-biscuit": 2,
      "toaste": 1,
      "poivre-epices-levure": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "vinaigre-acetique",
      "resine-pin"
    ],
    "keyMarkers": [
      "fruits-noirs-murs",
      "baies-raisin",
      "caramel-toffee"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Belgian Dark Strong Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 26D Belgian Dark Strong Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/26/26d-belgian-dark-strong-ale"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "dubbel",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 1,
      "pain-biscuit": 2,
      "poivre-epices-levure": 1
    },
    "palate": {
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 1,
      "pain-biscuit": 2,
      "poivre-epices-levure": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "resine-pin",
      "cafe-torrefie",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "fruits-noirs-murs",
      "caramel-toffee",
      "baies-raisin"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Dubbel",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 26B Belgian Dubbel",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/26/26b-belgian-dubbel"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "tripel",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "miel": 1,
      "fruits-legers": 2,
      "agrumes": 2,
      "poivre-epices-levure": 3,
      "clou-girofle": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "miel": 1,
      "fruits-legers": 2,
      "agrumes": 2,
      "poivre-epices-levure": 3,
      "clou-girofle": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        4,
        4
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "vive",
      "seche",
      "chaleureuse"
    ],
    "contradictions": [
      "cafe-torrefie",
      "caramel-toffee",
      "fruits-noirs-murs",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "poivre-epices-levure",
      "fruits-legers",
      "agrumes"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Tripel",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 26C Belgian Tripel",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/26/26c-belgian-tripel"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "quadrupel",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "caramel-toffee": 3,
      "fruits-noirs-murs": 3,
      "baies-raisin": 3,
      "pain-biscuit": 2,
      "poivre-epices-levure": 1
    },
    "palate": {
      "caramel-toffee": 3,
      "fruits-noirs-murs": 3,
      "baies-raisin": 3,
      "pain-biscuit": 2,
      "poivre-epices-levure": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        4,
        4
      ]
    },
    "finish": [
      "ronde",
      "cremeuse",
      "chaleureuse"
    ],
    "contradictions": [
      "cafe-torrefie",
      "lactique-yaourt",
      "vinaigre-acetique",
      "resine-pin"
    ],
    "keyMarkers": [
      "fruits-noirs-murs",
      "baies-raisin",
      "caramel-toffee"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Quadrupel",
    "aliases": [
      "Quadrupel Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "saison",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "poivre-epices-levure": 2,
      "fruits-legers": 3,
      "agrumes": 2,
      "herbace-epice": 3,
      "floral": 2,
      "funky-cuir-ferme": 1
    },
    "palate": {
      "poivre-epices-levure": 2,
      "fruits-legers": 3,
      "agrumes": 2,
      "herbace-epice": 3,
      "floral": 2,
      "funky-cuir-ferme": 1
    },
    "structure": {
      "amertume": [
        2,
        4
      ],
      "sucrosite": [
        0,
        0
      ],
      "acidite": [
        0,
        1
      ],
      "corps": [
        0,
        1
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        1,
        3
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "cafe-torrefie",
      "caramel-toffee",
      "vinaigre-acetique",
      "banane"
    ],
    "keyMarkers": [
      "poivre-epices-levure",
      "herbace-epice",
      "fruits-legers"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Saison",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 25B Saison",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/25/25b-saison"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "specialty-saison",
    "type": "SS",
    "parentPrincipalId": "saison",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "poivre-epices-levure": 2,
      "herbace-epice": 2,
      "fruits-legers": 3,
      "agrumes": 2,
      "epices": 2,
      "funky-cuir-ferme": 2,
      "boise-vanille": 1
    },
    "palate": {
      "poivre-epices-levure": 2,
      "herbace-epice": 2,
      "fruits-legers": 3,
      "agrumes": 2,
      "epices": 2,
      "funky-cuir-ferme": 2,
      "boise-vanille": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "acidite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        2,
        4
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "poivre-epices-levure",
      "fruits-legers",
      "epices",
      "funky-cuir-ferme"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Specialty Saison",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "biere-de-garde-style-franco-belge",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "toaste": 3,
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "fruits-legers": 3,
      "floral": 1,
      "herbace-epice": 1,
      "funky-cuir-ferme": 1
    },
    "palate": {
      "toaste": 3,
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1,
      "funky-cuir-ferme": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "acidite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "seche",
      "chaleureuse"
    ],
    "contradictions": [
      "cafe-torrefie",
      "vinaigre-acetique",
      "resine-pin"
    ],
    "keyMarkers": [
      "toaste",
      "fruits-legers",
      "pain-biscuit"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Bière de Garde — style franco-belge",
    "aliases": [
      "Bière de Garde"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 24C Bière de Garde",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/24/24c-biere-de-garde"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "american-belgo-ale",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "fruits-legers": 3,
      "poivre-epices-levure": 2,
      "epices": 2
    },
    "palate": {
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 2,
      "fruits-legers": 3,
      "poivre-epices-levure": 2,
      "epices": 2
    },
    "structure": {
      "amertume": [
        2,
        4
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        4
      ],
      "alcool": [
        2,
        4
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "resine-pin",
      "fruits-tropicaux",
      "poivre-epices-levure"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "American-Belgo Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "traditions-belges-et-francaises",
    "cardId": "belgian-fruit-beer",
    "type": "S",
    "parentPrincipalId": "belgian-ale-ale-belge",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "fruits-rouges": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "agrumes": 3,
      "baies-raisin": 3,
      "fruits-legers": 2,
      "poivre-epices-levure": 1,
      "funky-cuir-ferme": 1,
      "boise-vanille": 1
    },
    "palate": {
      "fruits-rouges": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "agrumes": 3,
      "baies-raisin": 3,
      "fruits-legers": 2,
      "poivre-epices-levure": 1,
      "funky-cuir-ferme": 1,
      "boise-vanille": 1
    },
    "structure": {
      "amertume": [
        0,
        3
      ],
      "sucrosite": [
        0,
        3
      ],
      "acidite": [
        0,
        3
      ],
      "corps": [
        1,
        4
      ],
      "carbonatation": [
        1,
        4
      ],
      "alcool": [
        1,
        4
      ]
    },
    "finish": [
      "vive",
      "seche",
      "ronde",
      "acide-persistante"
    ],
    "contradictions": [
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "fruits-rouges",
      "fruits-tropicaux",
      "fruits-a-noyau",
      "agrumes",
      "baies-raisin"
    ],
    "collectionName": "Traditions belges et françaises",
    "name": "Belgian Fruit Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },

  // Bières de blé et de seigle
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "biere-de-ble-wheat-beer",
    "type": "F",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 3,
      "pain-biscuit": 1
    },
    "palate": {
      "cereale": 3,
      "pain-biscuit": 1
    },
    "structure": {
      "amertume": [
        0,
        2
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        2,
        4
      ],
      "alcool": [
        1,
        4
      ]
    },
    "finish": [
      "cremeuse",
      "vive"
    ],
    "contradictions": [
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Bière de blé / Wheat Beer",
    "aliases": [
      "Wheat Beer",
      "Bière de blé"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "biere-de-seigle-rye-beer",
    "type": "F",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 3,
      "pain-biscuit": 2,
      "epices": 2
    },
    "palate": {
      "cereale": 3,
      "pain-biscuit": 2,
      "epices": 2
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        2,
        4
      ],
      "alcool": [
        1,
        4
      ]
    },
    "finish": [
      "cremeuse",
      "seche"
    ],
    "contradictions": [
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "epices",
      "pain-biscuit"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Bière de seigle / Rye Beer",
    "aliases": [
      "Rye Beer",
      "Bière de seigle"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        },
        {
          "label": "BJCP 2021 — Historical Beer: Roggenbier",
          "url": "https://www.bjcp.org/style/2021/27/27A/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "american-wheat-beer",
    "type": "S",
    "parentPrincipalId": "biere-de-ble-wheat-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 3,
      "pain-biscuit": 2,
      "agrumes": 1,
      "floral": 1,
      "herbace-epice": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 3,
      "pain-biscuit": 2,
      "agrumes": 1,
      "floral": 1,
      "herbace-epice": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "vive",
      "seche",
      "cremeuse"
    ],
    "contradictions": [
      "banane",
      "clou-girofle",
      "poivre-epices-levure",
      "funky-cuir-ferme",
      "coriandre",
      "lactique-yaourt",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "pain-biscuit"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "American Wheat Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 1D American Wheat Beer",
          "url": "https://www.bjcp.org/style/2021/1/1D/american-wheat-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "witbier",
    "type": "S",
    "parentPrincipalId": "biere-de-ble-wheat-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 2,
      "agrumes": 3,
      "coriandre": 3,
      "poivre-epices-levure": 1,
      "floral": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 2,
      "agrumes": 3,
      "coriandre": 3,
      "poivre-epices-levure": 1,
      "floral": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "acidite": [
        0,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "vive",
      "cremeuse",
      "seche"
    ],
    "contradictions": [
      "banane",
      "clou-girofle",
      "cafe-torrefie",
      "resine-pin",
      "fruits-noirs-murs",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "coriandre",
      "agrumes"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Witbier",
    "aliases": [
      "Belgian White"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 24A Witbier",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/24/24a-witbier"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "weissbier-hefeweizen",
    "type": "S",
    "parentPrincipalId": "biere-de-ble-wheat-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 2,
      "banane": 3,
      "clou-girofle": 3,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 2,
      "banane": 3,
      "clou-girofle": 3,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        4,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "cremeuse",
      "vive"
    ],
    "contradictions": [
      "cafe-torrefie",
      "resine-pin",
      "coriandre",
      "lactique-yaourt",
      "fume"
    ],
    "keyMarkers": [
      "banane",
      "clou-girofle"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Weissbier / Hefeweizen",
    "aliases": [
      "Weissbier",
      "Hefeweizen",
      "Weizenbier"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 10A Weissbier",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/10/10a-weissbier"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "kristallweizen",
    "type": "SS",
    "parentPrincipalId": "weissbier-hefeweizen",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "banane": 2,
      "clou-girofle": 2,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 2,
      "banane": 2,
      "clou-girofle": 2,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        4,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "vive",
      "seche"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "lactique-yaourt",
      "cafe-torrefie",
      "resine-pin",
      "coriandre"
    ],
    "keyMarkers": [
      "banane",
      "clou-girofle",
      "cereale"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Kristallweizen",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "leichtes-weizen",
    "type": "SS",
    "parentPrincipalId": "weissbier-hefeweizen",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 2,
      "banane": 2,
      "clou-girofle": 2
    },
    "palate": {
      "cereale": 2,
      "banane": 2,
      "clou-girofle": 2
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        0,
        1
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        0,
        1
      ]
    },
    "finish": [
      "vive",
      "seche"
    ],
    "contradictions": [
      "cafe-torrefie",
      "resine-pin",
      "caramel-toffee",
      "lactique-yaourt",
      "fume"
    ],
    "keyMarkers": [
      "banane",
      "clou-girofle",
      "cereale"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Leichtes Weizen",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "bernsteinfarbenes-weizen",
    "type": "SS",
    "parentPrincipalId": "weissbier-hefeweizen",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 2,
      "banane": 2,
      "clou-girofle": 2,
      "pain-biscuit": 2,
      "toaste": 1,
      "caramel-toffee": 1
    },
    "palate": {
      "cereale": 2,
      "banane": 2,
      "clou-girofle": 2,
      "pain-biscuit": 2,
      "toaste": 1,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "cremeuse",
      "vive",
      "ronde"
    ],
    "contradictions": [
      "cafe-torrefie",
      "resine-pin",
      "lactique-yaourt",
      "fume"
    ],
    "keyMarkers": [
      "banane",
      "clou-girofle",
      "pain-biscuit"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Bernsteinfarbenes Weizen",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "dunkelweizen",
    "type": "SS",
    "parentPrincipalId": "weissbier-hefeweizen",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 2,
      "banane": 2,
      "clou-girofle": 2,
      "pain-biscuit": 3,
      "toaste": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 1
    },
    "palate": {
      "cereale": 2,
      "banane": 2,
      "clou-girofle": 2,
      "pain-biscuit": 3,
      "toaste": 2,
      "caramel-toffee": 2,
      "chocolat-cacao": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "ronde",
      "cremeuse",
      "vive"
    ],
    "contradictions": [
      "cafe-torrefie",
      "resine-pin",
      "lactique-yaourt",
      "fume"
    ],
    "keyMarkers": [
      "banane",
      "clou-girofle",
      "pain-biscuit"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Dunkelweizen",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 10B Dunkles Weissbier",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/10/10b-dunkles-weissbier"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "weizenbock",
    "type": "SS",
    "parentPrincipalId": "weissbier-hefeweizen",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 3,
      "pain-biscuit": 3,
      "toaste": 2,
      "banane": 2,
      "clou-girofle": 2,
      "caramel-toffee": 1,
      "fruits-noirs-murs": 2,
      "baies-raisin": 2
    },
    "palate": {
      "cereale": 3,
      "pain-biscuit": 3,
      "toaste": 2,
      "banane": 2,
      "clou-girofle": 2,
      "caramel-toffee": 1,
      "fruits-noirs-murs": 2,
      "baies-raisin": 2
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        3,
        3
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse",
      "cremeuse"
    ],
    "contradictions": [
      "resine-pin",
      "lactique-yaourt",
      "fume",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "banane",
      "clou-girofle"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Weizenbock",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 10C Weizenbock",
          "url": "https://www.bjcp.org/style/2021/10/10C/weizenbock/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "fruit-wheat-beer",
    "type": "S",
    "parentPrincipalId": "biere-de-ble-wheat-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 2,
      "fruits-rouges": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "agrumes": 3,
      "baies-raisin": 3
    },
    "palate": {
      "cereale": 2,
      "fruits-rouges": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "agrumes": 3,
      "baies-raisin": 3
    },
    "structure": {
      "amertume": [
        0,
        2
      ],
      "sucrosite": [
        0,
        3
      ],
      "acidite": [
        0,
        2
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        2,
        4
      ],
      "alcool": [
        1,
        4
      ]
    },
    "finish": [
      "cremeuse",
      "vive",
      "ronde",
      "acide-persistante"
    ],
    "contradictions": [
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fruits-rouges",
      "fruits-tropicaux",
      "fruits-a-noyau",
      "agrumes",
      "baies-raisin"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Fruit Wheat Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "wheatwine",
    "type": "S",
    "parentPrincipalId": "biere-de-ble-wheat-beer",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 3,
      "pain-biscuit": 3,
      "miel": 2,
      "caramel-toffee": 2,
      "fruits-legers": 2,
      "agrumes": 1,
      "floral": 1
    },
    "palate": {
      "cereale": 3,
      "pain-biscuit": 3,
      "miel": 2,
      "caramel-toffee": 2,
      "fruits-legers": 2,
      "agrumes": 1,
      "floral": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        3,
        4
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse",
      "cremeuse"
    ],
    "contradictions": [
      "banane",
      "clou-girofle",
      "poivre-epices-levure",
      "funky-cuir-ferme",
      "lactique-yaourt",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "pain-biscuit",
      "miel"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Wheatwine",
    "aliases": [
      "Wheat Wine"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 22D Wheatwine",
          "url": "https://www.bjcp.org/style/2021/22/22D/wheatwine/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-de-ble-et-de-seigle",
    "cardId": "roggenbier-german-rye-ale",
    "type": "S",
    "parentPrincipalId": "biere-de-seigle-rye-beer",
    "appearance": {
      "colors": [
        "cuivre",
        "brun"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 3,
      "pain-biscuit": 3,
      "epices": 3,
      "banane": 2,
      "clou-girofle": 2,
      "floral": 1,
      "herbace-epice": 1,
      "caramel-toffee": 1
    },
    "palate": {
      "cereale": 3,
      "pain-biscuit": 3,
      "epices": 3,
      "banane": 2,
      "clou-girofle": 2,
      "floral": 1,
      "herbace-epice": 1,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "cremeuse",
      "seche",
      "vive"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "lactique-yaourt",
      "cafe-torrefie",
      "resine-pin"
    ],
    "keyMarkers": [
      "cereale",
      "epices",
      "banane",
      "clou-girofle"
    ],
    "collectionName": "Bières de blé et de seigle",
    "name": "Roggenbier / German Rye Ale",
    "aliases": [
      "Roggenbier",
      "German Rye Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — Historical Beer: Roggenbier",
          "url": "https://www.bjcp.org/style/2021/27/27A/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },

  // Bières acides, sauvages et spontanées
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "biere-acide-sour-beer",
    "type": "F",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "lactique-yaourt": 2,
      "agrumes": 1,
      "fruits-legers": 2,
      "pain-biscuit": 1
    },
    "palate": {
      "lactique-yaourt": 2,
      "agrumes": 1,
      "fruits-legers": 2,
      "pain-biscuit": 1
    },
    "structure": {
      "acidite": [
        2,
        4
      ],
      "amertume": [
        0,
        2
      ],
      "sucrosite": [
        0,
        3
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        1,
        4
      ],
      "alcool": [
        0,
        4
      ]
    },
    "finish": [
      "acide-persistante",
      "seche",
      "vive"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "lactique-yaourt"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Bière acide / Sour Beer",
    "aliases": [
      "Sour",
      "Sour Beer",
      "Bière acide"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 28D Straight Sour Beer",
          "url": "https://www.bjcp.org/style/2021/28/28D/straight-sour-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "american-wild-ale",
    "type": "F",
    "parentPrincipalId": "biere-acide-sour-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "funky-cuir-ferme": 2,
      "fruits-legers": 2,
      "agrumes": 2,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 2,
      "boise-vanille": 1
    },
    "palate": {
      "funky-cuir-ferme": 2,
      "fruits-legers": 2,
      "agrumes": 2,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 2,
      "boise-vanille": 1
    },
    "structure": {
      "acidite": [
        0,
        4
      ],
      "amertume": [
        0,
        3
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        2,
        4
      ],
      "alcool": [
        1,
        4
      ]
    },
    "finish": [
      "seche",
      "acide-persistante"
    ],
    "contradictions": [
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "funky-cuir-ferme"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "American Wild Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 28A Brett Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28a-brett-beer"
        },
        {
          "label": "BJCP 2021 — 28B Mixed-Fermentation Sour Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28b-mixed-fermentation-sour-beer"
        },
        {
          "label": "BJCP 2021 — 28C Wild Specialty Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28c-wild-specialty-beer"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "wild-beer",
    "type": "F",
    "parentPrincipalId": "biere-acide-sour-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "funky-cuir-ferme": 2,
      "fruits-legers": 2,
      "agrumes": 2,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 2
    },
    "palate": {
      "funky-cuir-ferme": 2,
      "fruits-legers": 2,
      "agrumes": 2,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 2
    },
    "structure": {
      "acidite": [
        0,
        4
      ],
      "amertume": [
        0,
        3
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        2,
        4
      ],
      "alcool": [
        1,
        4
      ]
    },
    "finish": [
      "seche",
      "acide-persistante"
    ],
    "contradictions": [
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "funky-cuir-ferme"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Wild Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 28A Brett Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28a-brett-beer"
        },
        {
          "label": "BJCP 2021 — 28B Mixed-Fermentation Sour Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28b-mixed-fermentation-sour-beer"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "biere-de-fermentation-spontanee-spontaneous-sour-ale",
    "type": "F",
    "parentPrincipalId": "biere-acide-sour-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "funky-cuir-ferme": 3,
      "lactique-yaourt": 2,
      "fruits-legers": 2,
      "agrumes": 2,
      "cereale": 1,
      "pain-biscuit": 1,
      "boise-vanille": 1
    },
    "palate": {
      "funky-cuir-ferme": 3,
      "lactique-yaourt": 2,
      "fruits-legers": 2,
      "agrumes": 2,
      "cereale": 1,
      "pain-biscuit": 1,
      "boise-vanille": 1
    },
    "structure": {
      "acidite": [
        2,
        4
      ],
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        0,
        4
      ],
      "alcool": [
        1,
        3
      ]
    },
    "finish": [
      "acide-persistante",
      "seche"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "funky-cuir-ferme",
      "lactique-yaourt"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Bière de fermentation spontanée / Spontaneous Sour Ale",
    "aliases": [
      "Spontaneous Sour Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23D Lambic",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/23/23d-lambic"
        },
        {
          "label": "BJCP 2021 — 23E Gueuze",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/23/23e-gueuze"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "berliner-weisse",
    "type": "S",
    "parentPrincipalId": "biere-acide-sour-beer",
    "appearance": {
      "colors": [
        "paille"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "lactique-yaourt": 3,
      "agrumes": 2,
      "fruits-legers": 2,
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1
    },
    "palate": {
      "lactique-yaourt": 3,
      "agrumes": 2,
      "fruits-legers": 2,
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1
    },
    "structure": {
      "amertume": [
        0,
        0
      ],
      "sucrosite": [
        0,
        0
      ],
      "acidite": [
        3,
        3
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        4,
        4
      ],
      "alcool": [
        0,
        0
      ]
    },
    "finish": [
      "seche",
      "vive",
      "acide-persistante"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "cafe-torrefie",
      "caramel-toffee",
      "resine-pin"
    ],
    "keyMarkers": [
      "lactique-yaourt",
      "agrumes"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Berliner Weisse",
    "aliases": [
      "Berliner-style Weisse"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23A Berliner Weisse",
          "url": "https://www.bjcp.org/style/2021/23/23A/berliner-weisse/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "specialty-berliner-weisse",
    "type": "SS",
    "parentPrincipalId": "berliner-weisse",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "lactique-yaourt": 3,
      "agrumes": 2,
      "fruits-legers": 2,
      "cereale": 2,
      "pain-biscuit": 1,
      "fruits-rouges": 2,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 2,
      "epices": 2
    },
    "palate": {
      "lactique-yaourt": 3,
      "agrumes": 2,
      "fruits-legers": 2,
      "cereale": 2,
      "pain-biscuit": 1,
      "fruits-rouges": 2,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 2,
      "epices": 2
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        2
      ],
      "acidite": [
        2,
        4
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        0,
        3
      ]
    },
    "finish": [
      "seche",
      "vive",
      "acide-persistante"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "cafe-torrefie",
      "resine-pin"
    ],
    "keyMarkers": [
      "lactique-yaourt"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Specialty Berliner Weisse",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23A Berliner Weisse",
          "url": "https://www.bjcp.org/style/2021/23/23A/berliner-weisse/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "gose",
    "type": "S",
    "parentPrincipalId": "biere-acide-sour-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "lactique-yaourt": 2,
      "agrumes": 2,
      "fruits-legers": 2,
      "coriandre": 2,
      "salin-mineral": 1,
      "cereale": 2,
      "pain-biscuit": 2
    },
    "palate": {
      "lactique-yaourt": 2,
      "agrumes": 2,
      "fruits-legers": 2,
      "coriandre": 2,
      "salin-mineral": 1,
      "cereale": 2,
      "pain-biscuit": 2
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "acidite": [
        2,
        3
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        4,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "vive",
      "seche",
      "acide-persistante"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "cafe-torrefie",
      "resine-pin",
      "caramel-toffee"
    ],
    "keyMarkers": [
      "salin-mineral",
      "coriandre",
      "lactique-yaourt"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Gose",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23G Gose",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/23/23g-gose"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "leipzig-gose",
    "type": "S",
    "parentPrincipalId": "gose",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "lactique-yaourt": 2,
      "agrumes": 2,
      "fruits-legers": 2,
      "coriandre": 2,
      "salin-mineral": 1,
      "cereale": 2,
      "pain-biscuit": 2
    },
    "palate": {
      "lactique-yaourt": 2,
      "agrumes": 2,
      "fruits-legers": 2,
      "coriandre": 2,
      "salin-mineral": 1,
      "cereale": 2,
      "pain-biscuit": 2
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "acidite": [
        2,
        3
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        4,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "vive",
      "seche",
      "acide-persistante"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "cafe-torrefie",
      "resine-pin"
    ],
    "keyMarkers": [
      "salin-mineral",
      "coriandre",
      "lactique-yaourt"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Leipzig Gose",
    "aliases": [
      "Leipziger Gose"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23G Gose",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/23/23g-gose"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "contemporary-gose",
    "type": "S",
    "parentPrincipalId": "gose",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "lactique-yaourt": 2,
      "agrumes": 2,
      "fruits-legers": 2,
      "coriandre": 1,
      "salin-mineral": 2,
      "cereale": 1,
      "epices": 1
    },
    "palate": {
      "lactique-yaourt": 2,
      "agrumes": 2,
      "fruits-legers": 2,
      "coriandre": 1,
      "salin-mineral": 2,
      "cereale": 1,
      "epices": 1
    },
    "structure": {
      "amertume": [
        0,
        2
      ],
      "sucrosite": [
        0,
        2
      ],
      "acidite": [
        2,
        3
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        1,
        3
      ]
    },
    "finish": [
      "vive",
      "seche",
      "acide-persistante"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "salin-mineral",
      "lactique-yaourt"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Contemporary Gose",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23G Gose",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/23/23g-gose"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "flanders-red-ale",
    "type": "S",
    "parentPrincipalId": "biere-acide-sour-beer",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "fruits-rouges": 3,
      "fruits-noirs-murs": 3,
      "agrumes": 2,
      "vinaigre-acetique": 1,
      "toaste": 2,
      "caramel-toffee": 1,
      "boise-vanille": 1,
      "chocolat-cacao": 1
    },
    "palate": {
      "fruits-rouges": 3,
      "fruits-noirs-murs": 3,
      "agrumes": 2,
      "vinaigre-acetique": 1,
      "toaste": 2,
      "caramel-toffee": 1,
      "boise-vanille": 1,
      "chocolat-cacao": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        3
      ],
      "acidite": [
        3,
        4
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "acide-persistante",
      "astringente",
      "seche"
    ],
    "contradictions": [
      "resine-pin",
      "cafe-torrefie",
      "banane"
    ],
    "keyMarkers": [
      "fruits-rouges",
      "fruits-noirs-murs",
      "vinaigre-acetique"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Flanders Red Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23B Flanders Red Ale",
          "url": "https://www.bjcp.org/style/2021/23/23B/flanders-red-ale/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "oud-bruin",
    "type": "S",
    "parentPrincipalId": "biere-acide-sour-beer",
    "appearance": {
      "colors": [
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "fruits-noirs-murs": 3,
      "baies-raisin": 3,
      "fruits-legers": 2,
      "caramel-toffee": 3,
      "chocolat-cacao": 2,
      "pain-biscuit": 2,
      "toaste": 1,
      "noix-fruits-secs": 1,
      "poivre-epices-levure": 1,
      "lactique-yaourt": 1
    },
    "palate": {
      "fruits-noirs-murs": 3,
      "baies-raisin": 3,
      "fruits-legers": 2,
      "caramel-toffee": 3,
      "chocolat-cacao": 2,
      "pain-biscuit": 2,
      "toaste": 1,
      "noix-fruits-secs": 1,
      "poivre-epices-levure": 1,
      "lactique-yaourt": 1
    },
    "structure": {
      "acidite": [
        1,
        2
      ],
      "amertume": [
        1,
        2
      ],
      "alcool": [
        1,
        3
      ],
      "corps": [
        2,
        3
      ],
      "sucrosite": [
        1,
        3
      ],
      "carbonatation": [
        1,
        2
      ]
    },
    "finish": [
      "acide-persistante",
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "resine-pin",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "fruits-noirs-murs",
      "baies-raisin"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Oud Bruin",
    "aliases": [
      "Flanders Brown Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23C Oud Bruin",
          "url": "https://www.bjcp.org/style/2021/23/23C/oud-bruin/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "lambic",
    "type": "S",
    "parentPrincipalId": "biere-de-fermentation-spontanee-spontaneous-sour-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "funky-cuir-ferme": 3,
      "lactique-yaourt": 2,
      "agrumes": 2,
      "fruits-legers": 2,
      "cereale": 1,
      "pain-biscuit": 1,
      "miel": 1,
      "boise-vanille": 1
    },
    "palate": {
      "funky-cuir-ferme": 3,
      "lactique-yaourt": 2,
      "agrumes": 2,
      "fruits-legers": 2,
      "cereale": 1,
      "pain-biscuit": 1,
      "miel": 1,
      "boise-vanille": 1
    },
    "structure": {
      "amertume": [
        0,
        0
      ],
      "sucrosite": [
        0,
        0
      ],
      "acidite": [
        3,
        4
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        0,
        1
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "acide-persistante"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "resine-pin",
      "cafe-torrefie",
      "banane",
      "fume"
    ],
    "keyMarkers": [
      "funky-cuir-ferme",
      "lactique-yaourt"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Lambic",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23D Lambic",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/23/23d-lambic"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "gueuze",
    "type": "S",
    "parentPrincipalId": "lambic",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "funky-cuir-ferme": 3,
      "lactique-yaourt": 2,
      "agrumes": 2,
      "fruits-legers": 2,
      "cereale": 1,
      "pain-biscuit": 1,
      "miel": 1,
      "boise-vanille": 1
    },
    "palate": {
      "funky-cuir-ferme": 3,
      "lactique-yaourt": 2,
      "agrumes": 2,
      "fruits-legers": 2,
      "cereale": 1,
      "pain-biscuit": 1,
      "miel": 1,
      "boise-vanille": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        0
      ],
      "acidite": [
        3,
        4
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        4,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "vive",
      "acide-persistante"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "resine-pin",
      "cafe-torrefie",
      "banane",
      "fume"
    ],
    "keyMarkers": [
      "funky-cuir-ferme",
      "agrumes"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Gueuze",
    "aliases": [
      "Geuze"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23E Gueuze",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/23/23e-gueuze"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "fruit-lambic",
    "type": "S",
    "parentPrincipalId": "lambic",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "fruits-rouges": 3,
      "fruits-a-noyau": 3,
      "baies-raisin": 3,
      "agrumes": 2,
      "funky-cuir-ferme": 2,
      "lactique-yaourt": 2
    },
    "palate": {
      "fruits-rouges": 3,
      "fruits-a-noyau": 3,
      "baies-raisin": 3,
      "agrumes": 2,
      "funky-cuir-ferme": 2,
      "lactique-yaourt": 2
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        3
      ],
      "acidite": [
        3,
        4
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        0,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "acide-persistante",
      "vive"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "resine-pin",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fruits-rouges",
      "fruits-a-noyau",
      "baies-raisin",
      "funky-cuir-ferme"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Fruit Lambic",
    "aliases": [
      "Kriek",
      "Framboise",
      "Cassis",
      "Pêche"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23F Fruit Lambic",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/23/23f-fruit-lambic"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "american-sour-ale",
    "type": "S",
    "parentPrincipalId": "american-wild-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "lactique-yaourt": 3,
      "fruits-legers": 2,
      "agrumes": 2,
      "pain-biscuit": 2,
      "cereale": 1
    },
    "palate": {
      "lactique-yaourt": 3,
      "fruits-legers": 2,
      "agrumes": 2,
      "pain-biscuit": 2,
      "cereale": 1
    },
    "structure": {
      "acidite": [
        3,
        4
      ],
      "amertume": [
        0,
        0
      ],
      "alcool": [
        1,
        3
      ],
      "corps": [
        1,
        1
      ],
      "sucrosite": [
        0,
        1
      ],
      "carbonatation": [
        2,
        4
      ]
    },
    "finish": [
      "acide-persistante",
      "seche",
      "vive"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "resine-pin",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "lactique-yaourt"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "American Sour Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 28D Straight Sour Beer",
          "url": "https://www.bjcp.org/style/2021/28/28D/straight-sour-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "fruited-american-sour-ale",
    "type": "SS",
    "parentPrincipalId": "american-sour-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "lactique-yaourt": 2,
      "fruits-rouges": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "agrumes": 3,
      "baies-raisin": 3
    },
    "palate": {
      "lactique-yaourt": 2,
      "fruits-rouges": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "agrumes": 3,
      "baies-raisin": 3
    },
    "structure": {
      "acidite": [
        2,
        4
      ],
      "amertume": [
        0,
        2
      ],
      "alcool": [
        1,
        4
      ],
      "corps": [
        1,
        2
      ],
      "sucrosite": [
        0,
        3
      ],
      "carbonatation": [
        2,
        4
      ]
    },
    "finish": [
      "acide-persistante",
      "seche",
      "vive"
    ],
    "contradictions": [
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "fruits-rouges",
      "fruits-tropicaux",
      "fruits-a-noyau",
      "agrumes",
      "baies-raisin"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Fruited American Sour Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 28C Wild Specialty Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28c-wild-specialty-beer"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "brett-beer",
    "type": "S",
    "parentPrincipalId": "wild-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "funky-cuir-ferme": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "agrumes": 2,
      "fruits-legers": 2,
      "fume": 1
    },
    "palate": {
      "funky-cuir-ferme": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "agrumes": 2,
      "fruits-legers": 2,
      "fume": 1
    },
    "structure": {
      "acidite": [
        0,
        1
      ],
      "amertume": [
        0,
        3
      ],
      "alcool": [
        1,
        4
      ],
      "corps": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "carbonatation": [
        2,
        4
      ]
    },
    "finish": [
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "funky-cuir-ferme"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Brett Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 28A Brett Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28a-brett-beer"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "mixed-culture-brett-beer",
    "type": "SS",
    "parentPrincipalId": "brett-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "funky-cuir-ferme": 3,
      "lactique-yaourt": 2,
      "fruits-legers": 2,
      "agrumes": 2,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 2,
      "boise-vanille": 1
    },
    "palate": {
      "funky-cuir-ferme": 3,
      "lactique-yaourt": 2,
      "fruits-legers": 2,
      "agrumes": 2,
      "fruits-tropicaux": 2,
      "fruits-a-noyau": 2,
      "boise-vanille": 1
    },
    "structure": {
      "acidite": [
        2,
        4
      ],
      "amertume": [
        0,
        2
      ],
      "alcool": [
        1,
        4
      ],
      "corps": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "carbonatation": [
        2,
        4
      ]
    },
    "finish": [
      "acide-persistante",
      "seche"
    ],
    "contradictions": [
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "funky-cuir-ferme",
      "lactique-yaourt"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Mixed-Culture Brett Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 28B Mixed-Fermentation Sour Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28b-mixed-fermentation-sour-beer"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "contemporary-belgian-style-spontaneously-fermented-ale",
    "type": "S",
    "parentPrincipalId": "biere-de-fermentation-spontanee-spontaneous-sour-ale",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "funky-cuir-ferme": 3,
      "lactique-yaourt": 2,
      "fruits-legers": 2,
      "agrumes": 2,
      "cereale": 1,
      "pain-biscuit": 1,
      "boise-vanille": 1
    },
    "palate": {
      "funky-cuir-ferme": 3,
      "lactique-yaourt": 2,
      "fruits-legers": 2,
      "agrumes": 2,
      "cereale": 1,
      "pain-biscuit": 1,
      "boise-vanille": 1
    },
    "structure": {
      "acidite": [
        2,
        4
      ],
      "amertume": [
        0,
        2
      ],
      "alcool": [
        1,
        4
      ],
      "corps": [
        1,
        2
      ],
      "sucrosite": [
        0,
        2
      ],
      "carbonatation": [
        1,
        4
      ]
    },
    "finish": [
      "acide-persistante",
      "seche"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "funky-cuir-ferme",
      "lactique-yaourt"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Contemporary Belgian-Style Spontaneously Fermented Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 23D Lambic",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/23/23d-lambic"
        },
        {
          "label": "BJCP 2021 — 23E Gueuze",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/23/23e-gueuze"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "wood-and-barrel-aged-sour-beer",
    "type": "S",
    "parentPrincipalId": "biere-acide-sour-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "boise-vanille": 3,
      "funky-cuir-ferme": 2,
      "lactique-yaourt": 2,
      "fruits-legers": 1,
      "epices": 1
    },
    "palate": {
      "boise-vanille": 3,
      "funky-cuir-ferme": 2,
      "lactique-yaourt": 2,
      "fruits-legers": 1,
      "epices": 1
    },
    "structure": {
      "acidite": [
        1,
        4
      ],
      "amertume": [
        0,
        3
      ],
      "alcool": [
        1,
        4
      ],
      "corps": [
        1,
        3
      ],
      "sucrosite": [
        0,
        2
      ],
      "carbonatation": [
        1,
        4
      ]
    },
    "finish": [
      "acide-persistante",
      "astringente"
    ],
    "contradictions": [
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "boise-vanille"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Wood- and Barrel-Aged Sour Beer",
    "aliases": [
      "Barrel-Aged Sour Beer",
      "Wood-Aged Sour Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 28C Wild Specialty Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28c-wild-specialty-beer"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "bieres-acides-sauvages-et-spontanees",
    "cardId": "fruited-wood-and-barrel-aged-sour-beer",
    "type": "SS",
    "parentPrincipalId": "wood-and-barrel-aged-sour-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "boise-vanille": 3,
      "fruits-rouges": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "agrumes": 3,
      "baies-raisin": 3,
      "funky-cuir-ferme": 2,
      "lactique-yaourt": 2
    },
    "palate": {
      "boise-vanille": 3,
      "fruits-rouges": 3,
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "agrumes": 3,
      "baies-raisin": 3,
      "funky-cuir-ferme": 2,
      "lactique-yaourt": 2
    },
    "structure": {
      "acidite": [
        1,
        4
      ],
      "amertume": [
        0,
        3
      ],
      "alcool": [
        1,
        4
      ],
      "corps": [
        1,
        3
      ],
      "sucrosite": [
        0,
        3
      ],
      "carbonatation": [
        1,
        4
      ]
    },
    "finish": [
      "acide-persistante",
      "astringente",
      "vive"
    ],
    "contradictions": [
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "boise-vanille",
      "fruits-rouges",
      "fruits-tropicaux",
      "fruits-a-noyau",
      "agrumes",
      "baies-raisin"
    ],
    "collectionName": "Bières acides, sauvages et spontanées",
    "name": "Fruited Wood- and Barrel-Aged Sour Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 28C Wild Specialty Beer",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28c-wild-specialty-beer"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },

  // Ales ambrées, brunes, maltées et fortes
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "ale",
    "type": "F",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 1,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 1,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        0,
        4
      ],
      "sucrosite": [
        0,
        4
      ],
      "corps": [
        1,
        4
      ],
      "carbonatation": [
        1,
        4
      ],
      "alcool": [
        0,
        4
      ]
    },
    "finish": [
      "seche",
      "ronde",
      "vive",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cereale",
      "fruits-legers"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "mild-ale",
    "type": "F",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 1,
      "noix-fruits-secs": 1,
      "chocolat-cacao": 1,
      "fruits-legers": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 1,
      "noix-fruits-secs": 1,
      "chocolat-cacao": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        0,
        2
      ],
      "sucrosite": [
        1,
        3
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        0,
        2
      ],
      "alcool": [
        0,
        1
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "resine-pin",
      "fruits-tropicaux",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "caramel-toffee"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Mild Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 13A Dark Mild",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/13/13a-dark-mild"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "brown-ale",
    "type": "F",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 1,
      "noix-fruits-secs": 2,
      "chocolat-cacao": 1,
      "fruits-legers": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 1,
      "noix-fruits-secs": 2,
      "chocolat-cacao": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        1,
        3
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        1,
        3
      ],
      "alcool": [
        1,
        3
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "noix-fruits-secs",
      "pain-biscuit"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Brown Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 13B British Brown Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/13/13b-british-brown-ale"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "amber-ale",
    "type": "F",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "agrumes": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "agrumes": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        1,
        3
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        1,
        3
      ],
      "alcool": [
        1,
        3
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "toaste"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Amber Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 19A American Amber Ale",
          "url": "https://www.bjcp.org/style/2021/19/19A/american-amber-ale/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "red-ale",
    "type": "F",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "cafe-torrefie": 1,
      "fruits-legers": 1,
      "agrumes": 1,
      "floral": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "cafe-torrefie": 1,
      "fruits-legers": 1,
      "agrumes": 1,
      "floral": 1
    },
    "structure": {
      "amertume": [
        1,
        3
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        3
      ],
      "carbonatation": [
        1,
        3
      ],
      "alcool": [
        1,
        3
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "toaste"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Red Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "strong-ale",
    "type": "F",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "fruits-legers": 2,
      "fruits-noirs-murs": 2,
      "noix-fruits-secs": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "fruits-legers": 2,
      "fruits-noirs-murs": 2,
      "noix-fruits-secs": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        4
      ],
      "sucrosite": [
        1,
        3
      ],
      "corps": [
        2,
        4
      ],
      "carbonatation": [
        1,
        3
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "fruits-legers",
      "fruits-noirs-murs"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Strong Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 17A British Strong Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/17/17a-british-strong-ale"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "barley-wine",
    "type": "F",
    "parentPrincipalId": "strong-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 3,
      "caramel-toffee": 3,
      "toaste": 2,
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 3,
      "caramel-toffee": 3,
      "toaste": 2,
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "fruits-legers": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        2,
        4
      ],
      "sucrosite": [
        2,
        4
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        4,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse",
      "cremeuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "fruits-noirs-murs",
      "caramel-toffee"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Barley Wine",
    "aliases": [
      "Barleywine"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 17D English Barleywine",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/17/17d-english-barleywine"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "english-pale-mild-ale",
    "type": "S",
    "parentPrincipalId": "mild-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "miel": 1,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 1,
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "miel": 1,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        0,
        2
      ],
      "alcool": [
        0,
        1
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "cafe-torrefie",
      "resine-pin",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "cereale"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "English Pale Mild Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "english-dark-mild-ale",
    "type": "S",
    "parentPrincipalId": "mild-ale",
    "appearance": {
      "colors": [
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "noix-fruits-secs": 2,
      "chocolat-cacao": 2,
      "cafe-torrefie": 1,
      "fruits-noirs-murs": 2,
      "fruits-legers": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "noix-fruits-secs": 2,
      "chocolat-cacao": 2,
      "cafe-torrefie": 1,
      "fruits-noirs-murs": 2,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        3
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        0,
        2
      ],
      "alcool": [
        0,
        1
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "resine-pin",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "noix-fruits-secs",
      "pain-biscuit"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "English Dark Mild Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 13A Dark Mild",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/13/13a-dark-mild"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "english-brown-ale",
    "type": "S",
    "parentPrincipalId": "brown-ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 3,
      "noix-fruits-secs": 2,
      "chocolat-cacao": 1,
      "toaste": 1,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 3,
      "noix-fruits-secs": 2,
      "chocolat-cacao": 1,
      "toaste": 1,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "resine-pin",
      "fruits-tropicaux",
      "lactique-yaourt",
      "banane",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "noix-fruits-secs",
      "caramel-toffee",
      "pain-biscuit"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "English Brown Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 13B British Brown Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/13/13b-british-brown-ale"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "london-brown-ale",
    "type": "S",
    "parentPrincipalId": "brown-ale",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "caramel-toffee": 3,
      "pain-biscuit": 2,
      "chocolat-cacao": 1,
      "cafe-torrefie": 1,
      "fruits-noirs-murs": 2,
      "baies-raisin": 1
    },
    "palate": {
      "caramel-toffee": 3,
      "pain-biscuit": 2,
      "chocolat-cacao": 1,
      "cafe-torrefie": 1,
      "fruits-noirs-murs": 2,
      "baies-raisin": 1
    },
    "structure": {
      "amertume": [
        1,
        1
      ],
      "sucrosite": [
        4,
        4
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        0,
        1
      ]
    },
    "finish": [
      "ronde",
      "cremeuse"
    ],
    "contradictions": [
      "resine-pin",
      "fruits-tropicaux",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "fruits-noirs-murs"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "London Brown Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — Historical Beer: London Brown Ale",
          "url": "https://www.bjcp.org/style/2021/27/27A/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "irish-red-ale",
    "type": "S",
    "parentPrincipalId": "red-ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 1,
      "cafe-torrefie": 1,
      "floral": 1,
      "herbace-epice": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 1,
      "cafe-torrefie": 1,
      "floral": 1,
      "herbace-epice": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        2
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "ronde"
    ],
    "contradictions": [
      "resine-pin",
      "fruits-tropicaux",
      "funky-cuir-ferme",
      "salin-mineral",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "cereale",
      "caramel-toffee",
      "toaste"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Irish Red Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 15A Irish Red Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/15/15a-irish-red-ale"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "old-ale",
    "type": "S",
    "parentPrincipalId": "strong-ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "opaque"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 3,
      "noix-fruits-secs": 2,
      "fruits-legers": 2,
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "toaste": 1,
      "chocolat-cacao": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 3,
      "noix-fruits-secs": 2,
      "fruits-legers": 2,
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "toaste": 1,
      "chocolat-cacao": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        3,
        3
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        3,
        3
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "resine-pin",
      "fruits-tropicaux",
      "salin-mineral",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "fruits-noirs-murs",
      "caramel-toffee",
      "noix-fruits-secs"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Old Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 17B Old Ale",
          "url": "https://www.bjcp.org/style/2021/17/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "british-barley-wine",
    "type": "S",
    "parentPrincipalId": "barley-wine",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 3,
      "caramel-toffee": 3,
      "toaste": 2,
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "fruits-legers": 2,
      "floral": 2,
      "herbace-epice": 2
    },
    "palate": {
      "pain-biscuit": 3,
      "caramel-toffee": 3,
      "toaste": 2,
      "fruits-noirs-murs": 3,
      "baies-raisin": 2,
      "fruits-legers": 2,
      "floral": 2,
      "herbace-epice": 2
    },
    "structure": {
      "amertume": [
        2,
        4
      ],
      "sucrosite": [
        3,
        4
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        4,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse",
      "cremeuse"
    ],
    "contradictions": [
      "resine-pin",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "fruits-noirs-murs",
      "caramel-toffee"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "British Barley Wine",
    "aliases": [
      "English Barleywine"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 17D English Barleywine",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/17/17d-english-barleywine"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "scottish-light-ale",
    "type": "S",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        1
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        1
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        0,
        1
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "fume",
      "funky-cuir-ferme",
      "salin-mineral",
      "resine-pin",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "caramel-toffee",
      "toaste"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Scottish Light Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 14 Scottish Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/14"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "scottish-heavy-ale",
    "type": "S",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 2,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        1
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        1,
        1
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "fume",
      "funky-cuir-ferme",
      "salin-mineral",
      "resine-pin",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "caramel-toffee",
      "toaste"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Scottish Heavy Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 14 Scottish Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/14"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "scottish-export-ale",
    "type": "S",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 3,
      "caramel-toffee": 2,
      "toaste": 2,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 3,
      "caramel-toffee": 2,
      "toaste": 2,
      "fruits-legers": 1,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "fume",
      "funky-cuir-ferme",
      "salin-mineral",
      "resine-pin",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "caramel-toffee",
      "toaste"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Scottish Export Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 14 Scottish Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/14"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "scotch-ale-wee-heavy",
    "type": "S",
    "parentPrincipalId": "strong-ale",
    "appearance": {
      "colors": [
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "caramel-toffee": 3,
      "pain-biscuit": 3,
      "toaste": 3,
      "fruits-noirs-murs": 2,
      "baies-raisin": 2,
      "noix-fruits-secs": 1,
      "fruits-legers": 1
    },
    "palate": {
      "caramel-toffee": 3,
      "pain-biscuit": 3,
      "toaste": 3,
      "fruits-noirs-murs": 2,
      "baies-raisin": 2,
      "noix-fruits-secs": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        3,
        3
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        2,
        2
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse",
      "cremeuse"
    ],
    "contradictions": [
      "fume",
      "resine-pin",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "pain-biscuit",
      "toaste"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Scotch Ale / Wee Heavy",
    "aliases": [
      "Scotch Ale",
      "Wee Heavy"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 17C Wee Heavy",
          "url": "https://www.bjcp.org/style/2021/17/17C/wee-heavy/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "peated-scotch-ale",
    "type": "SS",
    "parentPrincipalId": "scotch-ale-wee-heavy",
    "appearance": {
      "colors": [
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "fume": 3,
      "caramel-toffee": 3,
      "pain-biscuit": 3,
      "toaste": 2,
      "fruits-noirs-murs": 2,
      "noix-fruits-secs": 1
    },
    "palate": {
      "fume": 3,
      "caramel-toffee": 3,
      "pain-biscuit": 3,
      "toaste": 2,
      "fruits-noirs-murs": 2,
      "noix-fruits-secs": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse",
      "seche"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "poivre-epices-levure",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "fume",
      "caramel-toffee",
      "pain-biscuit"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Peated Scotch Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 17C Wee Heavy",
          "url": "https://www.bjcp.org/style/2021/17/17C/wee-heavy/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "american-amber-red-ale",
    "type": "S",
    "parentPrincipalId": "amber-ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 3,
      "toaste": 1,
      "agrumes": 2,
      "resine-pin": 2,
      "floral": 1,
      "fruits-tropicaux": 1,
      "fruits-legers": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 3,
      "toaste": 1,
      "agrumes": 2,
      "resine-pin": 2,
      "floral": 1,
      "fruits-tropicaux": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "cafe-torrefie",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "agrumes",
      "resine-pin"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "American Amber / Red Ale",
    "aliases": [
      "American Amber Ale",
      "American Red Ale"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 19A American Amber Ale",
          "url": "https://www.bjcp.org/style/2021/19/19A/american-amber-ale/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "american-brown-ale",
    "type": "S",
    "parentPrincipalId": "brown-ale",
    "appearance": {
      "colors": [
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "caramel-toffee": 2,
      "chocolat-cacao": 2,
      "noix-fruits-secs": 2,
      "toaste": 2,
      "pain-biscuit": 1,
      "agrumes": 2,
      "resine-pin": 1,
      "fruits-tropicaux": 1,
      "fruits-legers": 1
    },
    "palate": {
      "caramel-toffee": 2,
      "chocolat-cacao": 2,
      "noix-fruits-secs": 2,
      "toaste": 2,
      "pain-biscuit": 1,
      "agrumes": 2,
      "resine-pin": 1,
      "fruits-tropicaux": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "lactique-yaourt",
      "banane",
      "funky-cuir-ferme",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "noix-fruits-secs",
      "chocolat-cacao"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "American Brown Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 19C American Brown Ale",
          "url": "https://www.bjcp.org/style/2021/19/19C/american-brown-ale/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "american-black-ale",
    "type": "S",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "agrumes": 2,
      "resine-pin": 2,
      "floral": 1,
      "fruits-tropicaux": 1,
      "chocolat-cacao": 2,
      "cafe-torrefie": 1,
      "toaste": 1,
      "caramel-toffee": 1
    },
    "palate": {
      "agrumes": 2,
      "resine-pin": 2,
      "floral": 1,
      "fruits-tropicaux": 1,
      "chocolat-cacao": 2,
      "cafe-torrefie": 1,
      "toaste": 1,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "resine-pin",
      "agrumes",
      "chocolat-cacao"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "American Black Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "double-hoppy-red-ale",
    "type": "SS",
    "parentPrincipalId": "red-ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "caramel-toffee": 2,
      "pain-biscuit": 2,
      "toaste": 1,
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "floral": 1
    },
    "palate": {
      "caramel-toffee": 2,
      "pain-biscuit": 2,
      "toaste": 1,
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "floral": 1
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        3,
        3
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        3,
        3
      ]
    },
    "finish": [
      "seche",
      "amere-persistante",
      "chaleureuse"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "lactique-yaourt",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "agrumes",
      "resine-pin",
      "caramel-toffee"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Double Hoppy Red Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "imperial-red-ale",
    "type": "S",
    "parentPrincipalId": "red-ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "caramel-toffee": 3,
      "pain-biscuit": 2,
      "toaste": 2,
      "fruits-noirs-murs": 2,
      "agrumes": 2,
      "resine-pin": 2,
      "fruits-tropicaux": 1
    },
    "palate": {
      "caramel-toffee": 3,
      "pain-biscuit": 2,
      "toaste": 2,
      "fruits-noirs-murs": 2,
      "agrumes": 2,
      "resine-pin": 2,
      "fruits-tropicaux": 1
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse",
      "amere-persistante"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "lactique-yaourt",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "agrumes",
      "resine-pin"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Imperial Red Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "american-strong-ale",
    "type": "S",
    "parentPrincipalId": "strong-ale",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 1,
      "fruits-legers": 2,
      "agrumes": 2,
      "resine-pin": 2,
      "fruits-tropicaux": 1,
      "floral": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "caramel-toffee": 2,
      "toaste": 1,
      "fruits-legers": 2,
      "agrumes": 2,
      "resine-pin": 2,
      "fruits-tropicaux": 1,
      "floral": 1
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        1,
        3
      ],
      "corps": [
        3,
        3
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse",
      "amere-persistante"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "lactique-yaourt",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "caramel-toffee",
      "agrumes",
      "resine-pin"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "American Strong Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 22B American Strong Ale",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/22/22b-american-strong-ale"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "american-barley-wine",
    "type": "S",
    "parentPrincipalId": "barley-wine",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 3,
      "toaste": 2,
      "caramel-toffee": 2,
      "fruits-legers": 2,
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "floral": 2
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 3,
      "toaste": 2,
      "caramel-toffee": 2,
      "fruits-legers": 2,
      "agrumes": 3,
      "resine-pin": 3,
      "fruits-tropicaux": 2,
      "floral": 2
    },
    "structure": {
      "amertume": [
        3,
        4
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        4,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        4,
        4
      ]
    },
    "finish": [
      "chaleureuse",
      "ronde",
      "amere-persistante"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "lactique-yaourt",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "agrumes",
      "resine-pin"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "American Barley Wine",
    "aliases": [
      "American Barleywine"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 22C American Barleywine",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/22/22c-american-barleywine"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "ales-ambrees-brunes-maltees-et-fortes",
    "cardId": "altbier",
    "type": "S",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 3,
      "toaste": 2,
      "noix-fruits-secs": 2,
      "floral": 2,
      "herbace-epice": 2,
      "fruits-noirs-murs": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 3,
      "toaste": 2,
      "noix-fruits-secs": 2,
      "floral": 2,
      "herbace-epice": 2,
      "fruits-noirs-murs": 1
    },
    "structure": {
      "amertume": [
        3,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "cafe-torrefie",
      "chocolat-cacao",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "pain-biscuit",
      "herbace-epice",
      "noix-fruits-secs"
    ],
    "collectionName": "Ales ambrées, brunes, maltées et fortes",
    "name": "Altbier",
    "aliases": [
      "Alt"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 7B Altbier",
          "url": "https://www.bjcp.org/style/2021/7/7B/altbier/"
        }
      ]
    }
  },

  // Styles singuliers, historiques et hybrides
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "cream-ale",
    "type": "S",
    "parentPrincipalId": "ale",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "fruits-legers": 1,
      "floral": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "vive",
      "seche"
    ],
    "contradictions": [
      "resine-pin",
      "cafe-torrefie",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Cream Ale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "california-common-steam-beer",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "toaste": 2,
      "caramel-toffee": 1,
      "herbace-epice": 2,
      "floral": 1
    },
    "palate": {
      "cereale": 2,
      "toaste": 2,
      "caramel-toffee": 1,
      "herbace-epice": 2,
      "floral": 1
    },
    "structure": {
      "amertume": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ],
      "corps": [
        2,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        2
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "boise-vanille",
      "lactique-yaourt",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "herbace-epice",
      "toaste",
      "cereale"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "California Common / Steam Beer",
    "aliases": [
      "California Common",
      "Steam Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 19B California Common",
          "url": "https://www.bjcp.org/style/2021/19/19B/california-common/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "kentucky-common",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 3,
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "toaste": 1,
      "floral": 1,
      "herbace-epice": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 3,
      "pain-biscuit": 2,
      "caramel-toffee": 1,
      "toaste": 1,
      "floral": 1,
      "herbace-epice": 1,
      "fruits-legers": 1
    },
    "structure": {
      "acidite": [
        0,
        0
      ],
      "carbonatation": [
        3,
        4
      ],
      "amertume": [
        1,
        2
      ],
      "alcool": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "boise-vanille",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "pain-biscuit",
      "caramel-toffee"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Kentucky Common",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 27 Historical Beer",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "american-malt-liquor",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 1,
      "fruits-legers": 1
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        1,
        2
      ],
      "alcool": [
        3,
        4
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "boise-vanille",
      "lactique-yaourt",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "American Malt Liquor",
    "aliases": [
      "Malt Liquor"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "pre-prohibition-lager",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 3,
      "floral": 2,
      "herbace-epice": 2
    },
    "palate": {
      "cereale": 3,
      "floral": 2,
      "herbace-epice": 2
    },
    "structure": {
      "carbonatation": [
        2,
        4
      ],
      "amertume": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ],
      "corps": [
        2,
        3
      ],
      "sucrosite": [
        0,
        1
      ]
    },
    "finish": [
      "seche",
      "amere-persistante"
    ],
    "contradictions": [
      "agrumes",
      "fruits-tropicaux",
      "resine-pin",
      "funky-cuir-ferme",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "cereale",
      "herbace-epice",
      "floral"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Pre-Prohibition Lager",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 27 Historical Beer",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "kellerbier-zwickelbier",
    "type": "S",
    "parentPrincipalId": "lager",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "carbonatation": [
        1,
        3
      ],
      "amertume": [
        1,
        3
      ],
      "alcool": [
        1,
        3
      ],
      "corps": [
        2,
        3
      ],
      "sucrosite": [
        0,
        2
      ]
    },
    "finish": [
      "cremeuse",
      "vive"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "lactique-yaourt",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "pain-biscuit"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Kellerbier / Zwickelbier",
    "aliases": [
      "Kellerbier",
      "Zwickelbier"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 27 Historical Beer",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "grodziskie-piwo-grodziskie",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "cereale": 2,
      "pain-biscuit": 1,
      "fume": 3,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "cereale": 2,
      "pain-biscuit": 1,
      "fume": 3,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "acidite": [
        0,
        0
      ],
      "carbonatation": [
        4,
        4
      ],
      "amertume": [
        2,
        3
      ],
      "alcool": [
        0,
        1
      ],
      "corps": [
        0,
        1
      ],
      "sucrosite": [
        0,
        0
      ]
    },
    "finish": [
      "seche",
      "vive",
      "amere-persistante"
    ],
    "contradictions": [
      "boise-vanille",
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fume",
      "cereale"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Grodziskie / Piwo Grodziskie",
    "aliases": [
      "Grodziskie",
      "Piwo Grodziskie"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 27 Historical Beer",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "lichtenhainer",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "agrumes": 2,
      "fruits-legers": 2,
      "cereale": 2,
      "pain-biscuit": 2,
      "lactique-yaourt": 2,
      "fume": 3
    },
    "palate": {
      "agrumes": 2,
      "fruits-legers": 2,
      "cereale": 2,
      "pain-biscuit": 2,
      "lactique-yaourt": 2,
      "fume": 3
    },
    "structure": {
      "acidite": [
        2,
        3
      ],
      "carbonatation": [
        3,
        4
      ],
      "amertume": [
        0,
        1
      ],
      "alcool": [
        1,
        2
      ],
      "corps": [
        1,
        2
      ],
      "sucrosite": [
        0,
        0
      ]
    },
    "finish": [
      "seche",
      "acide-persistante",
      "vive"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "vinaigre-acetique",
      "boise-vanille",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fume",
      "lactique-yaourt",
      "agrumes"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Lichtenhainer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 27 Historical Beer",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "adambier",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 2,
      "fruits-noirs-murs": 2,
      "fume": 1,
      "funky-cuir-ferme": 1,
      "lactique-yaourt": 1,
      "boise-vanille": 1,
      "herbace-epice": 1
    },
    "palate": {
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 2,
      "fruits-noirs-murs": 2,
      "fume": 1,
      "funky-cuir-ferme": 1,
      "lactique-yaourt": 1,
      "boise-vanille": 1,
      "herbace-epice": 1
    },
    "structure": {
      "acidite": [
        0,
        2
      ],
      "carbonatation": [
        1,
        2
      ],
      "amertume": [
        2,
        3
      ],
      "alcool": [
        4,
        4
      ],
      "corps": [
        3,
        4
      ],
      "sucrosite": [
        1,
        2
      ]
    },
    "finish": [
      "chaleureuse",
      "ronde"
    ],
    "contradictions": [
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "toaste",
      "caramel-toffee",
      "fruits-noirs-murs"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Adambier",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "dutch-kuyt-kuit",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 3,
      "pain-biscuit": 3,
      "noix-fruits-secs": 1,
      "floral": 1,
      "herbace-epice": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 3,
      "pain-biscuit": 3,
      "noix-fruits-secs": 1,
      "floral": 1,
      "herbace-epice": 1,
      "fruits-legers": 1
    },
    "structure": {
      "acidite": [
        0,
        0
      ],
      "carbonatation": [
        2,
        3
      ],
      "amertume": [
        2,
        2
      ],
      "alcool": [
        2,
        3
      ],
      "corps": [
        1,
        2
      ],
      "sucrosite": [
        0,
        1
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "banane",
      "clou-girofle",
      "poivre-epices-levure",
      "lactique-yaourt",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "cereale",
      "pain-biscuit"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Dutch Kuyt / Kuit",
    "aliases": [
      "Kuyt",
      "Kuit"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "sahti",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "resine-pin": 3,
      "cereale": 2,
      "banane": 2,
      "clou-girofle": 1,
      "epices": 2
    },
    "palate": {
      "resine-pin": 3,
      "cereale": 2,
      "banane": 2,
      "clou-girofle": 1,
      "epices": 2
    },
    "structure": {
      "carbonatation": [
        0,
        1
      ],
      "amertume": [
        0,
        1
      ],
      "alcool": [
        3,
        4
      ],
      "corps": [
        3,
        4
      ],
      "sucrosite": [
        2,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "lactique-yaourt",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "resine-pin",
      "banane",
      "epices"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Sahti",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 27 Historical Beer",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "gotlandsdricke",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "resine-pin": 3,
      "cereale": 2,
      "pain-biscuit": 1,
      "fume": 3,
      "fruits-legers": 2,
      "epices": 1
    },
    "palate": {
      "resine-pin": 3,
      "cereale": 2,
      "pain-biscuit": 1,
      "fume": 3,
      "fruits-legers": 2,
      "epices": 1
    },
    "structure": {
      "carbonatation": [
        1,
        2
      ],
      "amertume": [
        1,
        2
      ],
      "alcool": [
        2,
        3
      ],
      "corps": [
        2,
        3
      ],
      "sucrosite": [
        1,
        2
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "boise-vanille",
      "lactique-yaourt",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fume",
      "resine-pin",
      "cereale"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Gotlandsdricke",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "breslau-schoeps",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "cereale": 3,
      "pain-biscuit": 3,
      "toaste": 1,
      "noix-fruits-secs": 1,
      "fruits-legers": 1
    },
    "palate": {
      "cereale": 3,
      "pain-biscuit": 3,
      "toaste": 1,
      "noix-fruits-secs": 1,
      "fruits-legers": 1
    },
    "structure": {
      "acidite": [
        0,
        0
      ],
      "carbonatation": [
        2,
        3
      ],
      "amertume": [
        1,
        2
      ],
      "alcool": [
        2,
        3
      ],
      "corps": [
        4,
        4
      ],
      "sucrosite": [
        2,
        3
      ]
    },
    "finish": [
      "ronde"
    ],
    "contradictions": [
      "poivre-epices-levure",
      "banane",
      "clou-girofle",
      "funky-cuir-ferme",
      "boise-vanille",
      "salin-mineral",
      "caramel-toffee",
      "lactique-yaourt"
    ],
    "keyMarkers": [
      "cereale",
      "pain-biscuit"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Breslau Schoeps",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "grape-ale-italian-grape-ale",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "baies-raisin": 3,
      "cereale": 1,
      "floral": 1,
      "fruits-legers": 2,
      "funky-cuir-ferme": 1
    },
    "palate": {
      "baies-raisin": 3,
      "cereale": 1,
      "floral": 1,
      "fruits-legers": 2,
      "funky-cuir-ferme": 1
    },
    "structure": {
      "acidite": [
        0,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "amertume": [
        0,
        2
      ],
      "alcool": [
        2,
        4
      ],
      "corps": [
        1,
        3
      ],
      "sucrosite": [
        0,
        2
      ]
    },
    "finish": [
      "seche",
      "vive"
    ],
    "contradictions": [
      "cafe-torrefie",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "baies-raisin"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Grape Ale / Italian Grape Ale",
    "aliases": [
      "Grape Ale",
      "Italian Grape Ale",
      "IGA"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP — X3 Italian Grape Ale",
          "url": "https://www.bjcp.org/beer-styles/x3-italian-grape-ale/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "fruit-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "fruits-rouges": 3,
      "agrumes": 3,
      "baies-raisin": 3
    },
    "palate": {
      "fruits-tropicaux": 3,
      "fruits-a-noyau": 3,
      "fruits-rouges": 3,
      "agrumes": 3,
      "baies-raisin": 3
    },
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [
      "fruits-tropicaux",
      "fruits-a-noyau",
      "fruits-rouges",
      "agrumes",
      "baies-raisin"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Fruit Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 29A Fruit Beer",
          "url": "https://www.bjcp.org/style/2021/29/29A/fruit-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "field-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "herbace-epice": 3,
      "epices": 2
    },
    "palate": {
      "herbace-epice": 3,
      "epices": 2
    },
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [
      "herbace-epice"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Field Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        },
        {
          "label": "BJCP 2021 — 30A Spice, Herb, or Vegetable Beer",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "pumpkin-squash-pumpkin-spice-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "epices": 3,
      "clou-girofle": 2,
      "caramel-toffee": 1
    },
    "palate": {
      "epices": 3,
      "clou-girofle": 2,
      "caramel-toffee": 1
    },
    "structure": {},
    "finish": [
      "ronde"
    ],
    "contradictions": [],
    "keyMarkers": [
      "epices",
      "clou-girofle"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Pumpkin / Squash / Pumpkin Spice Beer",
    "aliases": [
      "Pumpkin Beer",
      "Squash Beer",
      "Pumpkin Spice Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 30A Spice, Herb, or Vegetable Beer",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "chili-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "epices": 3,
      "herbace-epice": 2,
      "fume": 1
    },
    "palate": {
      "epices": 3,
      "herbace-epice": 2,
      "fume": 1
    },
    "structure": {},
    "finish": [
      "chaleureuse"
    ],
    "contradictions": [],
    "keyMarkers": [
      "epices"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Chili Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 30A Spice, Herb, or Vegetable Beer",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "herb-and-spice-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "floral": 2,
      "herbace-epice": 3,
      "coriandre": 2,
      "epices": 3
    },
    "palate": {
      "floral": 2,
      "herbace-epice": 3,
      "coriandre": 2,
      "epices": 3
    },
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [
      "epices",
      "herbace-epice"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Herb and Spice Beer",
    "aliases": [
      "Herb Beer",
      "Spice Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 30A Spice, Herb, or Vegetable Beer",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "tea-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "herbace-epice": 3,
      "floral": 2,
      "epices": 2
    },
    "palate": {
      "herbace-epice": 3,
      "floral": 2,
      "epices": 2
    },
    "structure": {},
    "finish": [
      "astringente"
    ],
    "contradictions": [
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "herbace-epice"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Tea Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 30A Spice, Herb, or Vegetable Beer",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "green-tea-beer",
    "type": "SS",
    "parentPrincipalId": "tea-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "herbace-epice": 3,
      "floral": 2
    },
    "palate": {
      "herbace-epice": 3,
      "floral": 2
    },
    "structure": {},
    "finish": [
      "astringente"
    ],
    "contradictions": [
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "herbace-epice"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Green Tea Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 30 Spiced Beer",
          "url": "https://www.bjcp.org/style/2021/30/spiced-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "chocolate-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "chocolat-cacao": 3
    },
    "palate": {
      "chocolat-cacao": 3
    },
    "structure": {},
    "finish": [
      "ronde"
    ],
    "contradictions": [],
    "keyMarkers": [
      "chocolat-cacao"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Chocolate Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 30 Spiced Beer",
          "url": "https://www.bjcp.org/style/2021/30/spiced-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "coffee-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "cafe-torrefie": 3
    },
    "palate": {
      "cafe-torrefie": 3
    },
    "structure": {},
    "finish": [
      "astringente"
    ],
    "contradictions": [],
    "keyMarkers": [
      "cafe-torrefie"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Coffee Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 30 Spiced Beer",
          "url": "https://www.bjcp.org/style/2021/30/spiced-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "honey-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "miel": 3,
      "floral": 2
    },
    "palate": {
      "miel": 3,
      "floral": 1
    },
    "structure": {},
    "finish": [
      "ronde"
    ],
    "contradictions": [
      "funky-cuir-ferme"
    ],
    "keyMarkers": [
      "miel"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Honey Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 31 Alternative Fermentables Beer",
          "url": "https://www.bjcp.org/style/2021/31/alternative-fermentables-beer/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "alternative-grain-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "cereale": 3,
      "noix-fruits-secs": 1,
      "epices": 1
    },
    "palate": {
      "cereale": 3,
      "noix-fruits-secs": 1,
      "epices": 1
    },
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [
      "cereale"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Alternative Grain Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 31 Alternative Fermentables Beer",
          "url": "https://www.bjcp.org/style/2021/31/alternative-fermentables-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "alternative-sugar-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "miel": 2,
      "caramel-toffee": 2,
      "noix-fruits-secs": 1
    },
    "palate": {
      "miel": 2,
      "caramel-toffee": 2,
      "noix-fruits-secs": 1
    },
    "structure": {},
    "finish": [
      "ronde"
    ],
    "contradictions": [
      "funky-cuir-ferme"
    ],
    "keyMarkers": [
      "miel",
      "caramel-toffee"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Alternative Sugar Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 31 Alternative Fermentables Beer",
          "url": "https://www.bjcp.org/style/2021/31/alternative-fermentables-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "autumn-seasonal-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "epices": 3,
      "clou-girofle": 2,
      "caramel-toffee": 2,
      "miel": 1,
      "noix-fruits-secs": 1
    },
    "palate": {
      "epices": 3,
      "clou-girofle": 2,
      "caramel-toffee": 2,
      "miel": 1,
      "noix-fruits-secs": 1
    },
    "structure": {},
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [],
    "keyMarkers": [
      "epices",
      "clou-girofle"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Autumn Seasonal Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 30B Autumn Seasonal Beer",
          "url": "https://www.bjcp.org/style/2021/30/30B/autumn-seasonal-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "winter-seasonal-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "epices": 3,
      "clou-girofle": 2,
      "fruits-noirs-murs": 2,
      "noix-fruits-secs": 2,
      "caramel-toffee": 2,
      "miel": 1
    },
    "palate": {
      "epices": 3,
      "clou-girofle": 2,
      "fruits-noirs-murs": 2,
      "noix-fruits-secs": 2,
      "caramel-toffee": 2,
      "miel": 1
    },
    "structure": {},
    "finish": [
      "chaleureuse",
      "ronde"
    ],
    "contradictions": [
      "salin-mineral"
    ],
    "keyMarkers": [
      "epices",
      "clou-girofle"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Winter Seasonal Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 30C Winter Seasonal Beer",
          "url": "https://www.bjcp.org/style/2021/30/30C/winter-seasonal-beer/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "ginjo-beer-sake-yeast-beer",
    "type": "S",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire",
        "voilee"
      ]
    },
    "nose": {
      "cereale": 1,
      "fruits-legers": 3,
      "fruits-a-noyau": 2,
      "floral": 2,
      "baies-raisin": 1
    },
    "palate": {
      "cereale": 1,
      "fruits-legers": 3,
      "fruits-a-noyau": 2,
      "floral": 2,
      "baies-raisin": 1
    },
    "structure": {
      "amertume": [
        0,
        2
      ],
      "alcool": [
        2,
        4
      ],
      "corps": [
        1,
        3
      ],
      "sucrosite": [
        0,
        2
      ],
      "carbonatation": [
        2,
        3
      ]
    },
    "finish": [
      "seche",
      "chaleureuse"
    ],
    "contradictions": [
      "funky-cuir-ferme",
      "salin-mineral",
      "lactique-yaourt",
      "vinaigre-acetique",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fruits-legers",
      "floral"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Ginjo Beer / Sake-Yeast Beer",
    "aliases": [
      "Ginjo Beer",
      "Sake-Yeast Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "fresh-hop-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "herbe-fraiche": 3,
      "agrumes": 2,
      "floral": 2,
      "resine-pin": 2,
      "herbace-epice": 2
    },
    "palate": {
      "herbe-fraiche": 3,
      "agrumes": 2,
      "floral": 2,
      "resine-pin": 2,
      "herbace-epice": 2
    },
    "structure": {},
    "finish": [
      "seche"
    ],
    "contradictions": [],
    "keyMarkers": [
      "herbe-fraiche"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Fresh Hop Beer",
    "aliases": [
      "Wet Hop Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "wood-and-barrel-aged-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "boise-vanille": 3,
      "epices": 1,
      "caramel-toffee": 1,
      "toaste": 1
    },
    "palate": {
      "boise-vanille": 3,
      "epices": 1,
      "caramel-toffee": 1,
      "toaste": 1
    },
    "structure": {},
    "finish": [
      "astringente"
    ],
    "contradictions": [],
    "keyMarkers": [
      "boise-vanille"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Wood- and Barrel-Aged Beer",
    "aliases": [
      "Wood-Aged Beer",
      "Barrel-Aged Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 33 Wood Beer",
          "url": "https://www.bjcp.org/style/2021/33/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "wood-and-barrel-aged-strong-beer",
    "type": "SS",
    "parentPrincipalId": "wood-and-barrel-aged-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "boise-vanille": 3,
      "epices": 1,
      "caramel-toffee": 1,
      "toaste": 1,
      "fruits-noirs-murs": 1
    },
    "palate": {
      "boise-vanille": 3,
      "epices": 1,
      "caramel-toffee": 1,
      "toaste": 1,
      "fruits-noirs-murs": 1
    },
    "structure": {
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "astringente",
      "chaleureuse"
    ],
    "contradictions": [],
    "keyMarkers": [
      "boise-vanille"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Wood- and Barrel-Aged Strong Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 33 Wood Beer",
          "url": "https://www.bjcp.org/style/2021/33/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "wood-and-barrel-aged-strong-stout",
    "type": "SS",
    "parentPrincipalId": "wood-and-barrel-aged-beer",
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": [
        "opaque"
      ]
    },
    "nose": {
      "boise-vanille": 3,
      "chocolat-cacao": 3,
      "cafe-torrefie": 2,
      "caramel-toffee": 2,
      "fruits-noirs-murs": 2
    },
    "palate": {
      "boise-vanille": 3,
      "chocolat-cacao": 3,
      "cafe-torrefie": 2,
      "caramel-toffee": 2,
      "fruits-noirs-murs": 2
    },
    "structure": {
      "alcool": [
        3,
        4
      ],
      "corps": [
        3,
        4
      ],
      "sucrosite": [
        2,
        4
      ]
    },
    "finish": [
      "astringente",
      "chaleureuse",
      "ronde"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "boise-vanille",
      "cafe-torrefie",
      "chocolat-cacao"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Wood- and Barrel-Aged Strong Stout",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 33 Wood Beer",
          "url": "https://www.bjcp.org/style/2021/33/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "wood-and-barrel-aged-dessert-pastry-beer",
    "type": "SS",
    "parentPrincipalId": "wood-and-barrel-aged-beer",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "boise-vanille": 3,
      "chocolat-cacao": 2,
      "cafe-torrefie": 2,
      "caramel-toffee": 3,
      "noix-fruits-secs": 2,
      "epices": 2
    },
    "palate": {
      "boise-vanille": 3,
      "chocolat-cacao": 2,
      "cafe-torrefie": 2,
      "caramel-toffee": 3,
      "noix-fruits-secs": 2,
      "epices": 2
    },
    "structure": {
      "alcool": [
        3,
        4
      ],
      "corps": [
        4,
        4
      ],
      "sucrosite": [
        3,
        4
      ]
    },
    "finish": [
      "astringente",
      "chaleureuse",
      "ronde",
      "cremeuse"
    ],
    "contradictions": [
      "lactique-yaourt",
      "funky-cuir-ferme",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "boise-vanille",
      "caramel-toffee",
      "chocolat-cacao"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Wood- and Barrel-Aged Dessert / Pastry Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 33 Wood Beer",
          "url": "https://www.bjcp.org/style/2021/33/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "aged-beer",
    "type": "T",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "opaque"
      ]
    },
    "nose": {
      "baies-raisin": 2,
      "fruits-noirs-murs": 2,
      "noix-fruits-secs": 2,
      "caramel-toffee": 1
    },
    "palate": {
      "baies-raisin": 2,
      "fruits-noirs-murs": 2,
      "noix-fruits-secs": 2,
      "caramel-toffee": 1
    },
    "structure": {},
    "finish": [
      "ronde"
    ],
    "contradictions": [
      "boise-vanille",
      "funky-cuir-ferme",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "baies-raisin",
      "noix-fruits-secs"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Aged Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "rauchbier-smoke-beer",
    "type": "F",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun",
        "noir"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble",
        "opaque"
      ]
    },
    "nose": {
      "fume": 3
    },
    "palate": {
      "fume": 3
    },
    "structure": {},
    "finish": [],
    "contradictions": [
      "boise-vanille",
      "funky-cuir-ferme",
      "lactique-yaourt",
      "vinaigre-acetique"
    ],
    "keyMarkers": [
      "fume"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Rauchbier / Smoke Beer",
    "aliases": [
      "Rauchbier",
      "Smoke Beer",
      "Smoked Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 32 Smoked Beer",
          "url": "https://www.bjcp.org/style/2021/32/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "weiss-rauchbier",
    "type": "SS",
    "parentPrincipalId": "rauchbier-smoke-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "voilee",
        "trouble"
      ]
    },
    "nose": {
      "fume": 3,
      "cereale": 2,
      "banane": 3,
      "clou-girofle": 3
    },
    "palate": {
      "fume": 3,
      "cereale": 2,
      "banane": 3,
      "clou-girofle": 3
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        0,
        2
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        1,
        3
      ]
    },
    "finish": [
      "cremeuse",
      "vive"
    ],
    "contradictions": [
      "boise-vanille",
      "funky-cuir-ferme",
      "lactique-yaourt",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fume",
      "banane",
      "clou-girofle"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Weiss Rauchbier",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 32 Smoked Beer",
          "url": "https://www.bjcp.org/style/2021/32/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "helles-rauchbier",
    "type": "SS",
    "parentPrincipalId": "rauchbier-smoke-beer",
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "fume": 3,
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "palate": {
      "fume": 3,
      "cereale": 2,
      "pain-biscuit": 2,
      "floral": 1,
      "herbace-epice": 1
    },
    "structure": {
      "amertume": [
        1,
        1
      ],
      "sucrosite": [
        1,
        1
      ],
      "corps": [
        1,
        2
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        1,
        2
      ]
    },
    "finish": [
      "ronde"
    ],
    "contradictions": [
      "boise-vanille",
      "funky-cuir-ferme",
      "lactique-yaourt",
      "caramel-toffee",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fume",
      "cereale",
      "pain-biscuit"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Helles Rauchbier",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 32 Smoked Beer",
          "url": "https://www.bjcp.org/style/2021/32/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "marzen-rauchbier",
    "type": "SS",
    "parentPrincipalId": "rauchbier-smoke-beer",
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "fume": 3,
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 1
    },
    "palate": {
      "fume": 3,
      "pain-biscuit": 2,
      "toaste": 2,
      "caramel-toffee": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        1,
        2
      ],
      "corps": [
        2,
        3
      ],
      "carbonatation": [
        2,
        3
      ],
      "alcool": [
        2,
        3
      ]
    },
    "finish": [
      "ronde",
      "seche"
    ],
    "contradictions": [
      "boise-vanille",
      "funky-cuir-ferme",
      "lactique-yaourt",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fume",
      "pain-biscuit",
      "toaste"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Märzen Rauchbier",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 32 Smoked Beer",
          "url": "https://www.bjcp.org/style/2021/32/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "styles-singuliers-historiques-et-hybrides",
    "cardId": "bock-rauchbier",
    "type": "SS",
    "parentPrincipalId": "rauchbier-smoke-beer",
    "appearance": {
      "colors": [
        "dore",
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "fume": 3,
      "pain-biscuit": 3,
      "toaste": 2,
      "noix-fruits-secs": 1
    },
    "palate": {
      "fume": 3,
      "pain-biscuit": 3,
      "toaste": 2,
      "noix-fruits-secs": 1
    },
    "structure": {
      "amertume": [
        1,
        2
      ],
      "sucrosite": [
        2,
        3
      ],
      "corps": [
        3,
        4
      ],
      "carbonatation": [
        1,
        2
      ],
      "alcool": [
        3,
        4
      ]
    },
    "finish": [
      "ronde",
      "chaleureuse"
    ],
    "contradictions": [
      "boise-vanille",
      "funky-cuir-ferme",
      "lactique-yaourt",
      "cafe-torrefie"
    ],
    "keyMarkers": [
      "fume",
      "pain-biscuit",
      "toaste"
    ],
    "collectionName": "Styles singuliers, historiques et hybrides",
    "name": "Bock Rauchbier",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "BJCP 2021 — 32 Smoked Beer",
          "url": "https://www.bjcp.org/style/2021/32/"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },

  // Appellations commerciales
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "blonde",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Blonde",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Belgian Brewers — Belgian beer culture and diversity",
          "url": "https://belgianbrewers.be/a-propos-de-nous/?lang=fr"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "blanche",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Blanche",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Belgian Brewers — Belgian beer culture and diversity",
          "url": "https://belgianbrewers.be/a-propos-de-nous/?lang=fr"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "ambree",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Ambrée",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Belgian Brewers — Belgian beer culture and diversity",
          "url": "https://belgianbrewers.be/a-propos-de-nous/?lang=fr"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "rousse",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "ambre",
        "cuivre"
      ],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Rousse",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Belgian Brewers — Belgian beer culture and diversity",
          "url": "https://belgianbrewers.be/a-propos-de-nous/?lang=fr"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "brune",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "brun",
        "noir"
      ],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Brune",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Belgian Brewers — Belgian beer culture and diversity",
          "url": "https://belgianbrewers.be/a-propos-de-nous/?lang=fr"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "noire",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "noir"
      ],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Noire",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "rouge",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "ambre",
        "cuivre",
        "brun"
      ],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Rouge",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Belgian Brewers — Belgian beer culture and diversity",
          "url": "https://belgianbrewers.be/a-propos-de-nous/?lang=fr"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-dabbaye",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière d’abbaye",
    "aliases": [
      "Abbey Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Belgian Brewers — Belgian beer culture and diversity",
          "url": "https://belgianbrewers.be/a-propos-de-nous/?lang=fr"
        },
        {
          "label": "International Trappist Association — Authentic Trappist Product label",
          "url": "https://www.trappist.be/en/about-ita/atp-label/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "trappiste",
    "type": "R",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Trappiste",
    "aliases": [
      "Trappist"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "International Trappist Association — Authentic Trappist Product label",
          "url": "https://www.trappist.be/en/about-ita/atp-label/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-artisanale-craft-beer",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière artisanale / Craft Beer",
    "aliases": [
      "Bière artisanale",
      "Craft Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association — Craft Brewer Definition",
          "url": "https://www.brewersassociation.org/statistics-and-data/craft-brewer-definition/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-biologique-bio",
    "type": "R",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière biologique / Bio",
    "aliases": [
      "Bière bio",
      "Organic Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Regulation (EU) 2018/848 on organic production and labelling",
          "url": "https://eur-lex.europa.eu/eli/reg/2018/848/oj"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-speciale",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière spéciale",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Décret n°92-307 du 31 mars 1992 relatif à la bière — version en vigueur",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-de-noel",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière de Noël",
    "aliases": [
      "Christmas Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-de-printemps-biere-de-mars",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière de printemps / Bière de mars",
    "aliases": [
      "Bière de printemps",
      "Bière de mars",
      "Spring Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-forte-strong-beer",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière forte / Strong Beer",
    "aliases": [
      "Bière forte",
      "Strong Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-legere-light-beer",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière légère / Light Beer",
    "aliases": [
      "Bière légère",
      "Light Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "session-beer",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Session Beer",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "double",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Double",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Belgian Brewers — Belgian beer culture and diversity",
          "url": "https://belgianbrewers.be/a-propos-de-nous/?lang=fr"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "triple",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Triple",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Belgian Brewers — Belgian beer culture and diversity",
          "url": "https://belgianbrewers.be/a-propos-de-nous/?lang=fr"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "quadruple",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Quadruple",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Belgian Brewers — Belgian beer culture and diversity",
          "url": "https://belgianbrewers.be/a-propos-de-nous/?lang=fr"
        },
        {
          "label": "Brewers Association 2026 Beer Style Guidelines",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-de-fermentation-lactique",
    "type": "R",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière de fermentation lactique",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Décret n°92-307 du 31 mars 1992 relatif à la bière — version en vigueur",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-de-garde-mention-legale-francaise",
    "type": "R",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière de garde — mention légale française",
    "aliases": [
      "Bière de garde"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Décret n°92-307 du 31 mars 1992 relatif à la bière — version en vigueur",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "pur-malt",
    "type": "R",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Pur malt",
    "aliases": [
      "All Malt"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Décret n°92-307 du 31 mars 1992 relatif à la bière — version en vigueur",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-sans-alcool",
    "type": "R",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {
      "alcool": [
        0,
        0
      ]
    },
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière sans alcool",
    "aliases": [
      "Alcohol-Free Beer",
      "Non-Alcoholic Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Décret n°92-307 du 31 mars 1992 relatif à la bière — version en vigueur",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "0-0-pourcent",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {
      "alcool": [
        0,
        0
      ]
    },
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "0,0 %",
    "aliases": [
      "0.0%"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Décret n°92-307 du 31 mars 1992 relatif à la bière — version en vigueur",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-sans-gluten",
    "type": "R",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière sans gluten",
    "aliases": [
      "Gluten-Free Beer"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Commission Implementing Regulation (EU) No 828/2014 on gluten information",
          "url": "https://eur-lex.europa.eu/eli/reg_impl/2014/828/oj"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-aromatisee-a",
    "type": "R",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière aromatisée à…",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Décret n°92-307 du 31 mars 1992 relatif à la bière — version en vigueur",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "biere-a",
    "type": "R",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [],
      "clarity": []
    },
    "nose": {},
    "palate": {},
    "structure": {},
    "finish": [],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Bière à…",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Décret n°92-307 du 31 mars 1992 relatif à la bière — version en vigueur",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "panache",
    "type": "R",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore",
        "ambre"
      ],
      "clarity": [
        "claire",
        "voilee",
        "trouble"
      ]
    },
    "nose": {},
    "palate": {},
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        1,
        4
      ],
      "corps": [
        0,
        1
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        0,
        1
      ]
    },
    "finish": [
      "vive"
    ],
    "contradictions": [],
    "keyMarkers": [],
    "collectionName": "Appellations commerciales",
    "name": "Panaché",
    "aliases": [],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Décret n°92-307 du 31 mars 1992 relatif à la bière — version en vigueur",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138"
        }
      ]
    }
  },
  {
    "schemaVersion": 3,
    "collectionId": "appellations-commerciales",
    "cardId": "radler-shandy",
    "type": "A",
    "parentPrincipalId": null,
    "appearance": {
      "colors": [
        "paille",
        "dore"
      ],
      "clarity": [
        "claire"
      ]
    },
    "nose": {
      "agrumes": 3
    },
    "palate": {
      "agrumes": 3
    },
    "structure": {
      "amertume": [
        0,
        1
      ],
      "sucrosite": [
        2,
        3
      ],
      "acidite": [
        1,
        2
      ],
      "corps": [
        0,
        1
      ],
      "carbonatation": [
        3,
        4
      ],
      "alcool": [
        0,
        1
      ]
    },
    "finish": [
      "vive"
    ],
    "contradictions": [
      "cafe-torrefie",
      "funky-cuir-ferme"
    ],
    "keyMarkers": [
      "agrumes"
    ],
    "collectionName": "Appellations commerciales",
    "name": "Radler / Shandy",
    "aliases": [
      "Radler",
      "Shandy"
    ],
    "verification": {
      "status": "verified",
      "reviewedAt": "2026-08-14",
      "sources": [
        {
          "label": "Deutscher Brauer-Bund — Biercocktails / Radler",
          "url": "https://brauer-bund.de/genuss/biercocktails/"
        },
        {
          "label": "Décret n°92-307 du 31 mars 1992 relatif à la bière — version en vigueur",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138"
        }
      ]
    }
  }
]);

export const sensoryProfileByKey = new Map(
  sensoryProfiles.map((profile) => [`${profile.collectionId}:${profile.cardId}`, profile])
);

export function getSensoryProfile(collectionId, cardId) {
  return sensoryProfileByKey.get(`${collectionId}:${cardId}`) || null;
}
