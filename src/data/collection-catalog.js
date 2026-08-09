/**
 * Catalogue léger chargé au démarrage. Les contenus encyclopédiques et mappings
 * d'assets restent derrière des import() et n'entrent plus dans le chunk initial.
 */
export const collectionCatalog = [
  {
    collection: {
      id: "lagers-et-fermentations-basses",
      slug: "lagers-et-fermentations-basses",
      name: "Lagers et fermentations basses",
      subtitle: "45 cartes Brassopédie à illustrer",
      order: 10,
      expectedCardCount: 45,
      discoveryKey: "zythohunt.discovery.lagers-et-fermentations-basses.v1",
      assetsReady: true,
      backgroundPreset: { beerT: 88, bubbleDensity: 68, foamIntensity: 40 }
    },
    load: () => import("./lagers-et-fermentations-basses-collection.js").then((module) => module.lagersEtFermentationsBassesBundle)
  },
  {
    collection: {
      id: "pale-ales-bitters-et-ipa",
      slug: "pale-ales-bitters-et-ipa",
      name: "Pale Ales, Bitters et IPA",
      subtitle: "36 cartes Brassopédie à illustrer",
      order: 20,
      expectedCardCount: 36,
      discoveryKey: "zythohunt.discovery.pale-ales-bitters-et-ipa.v1",
      assetsReady: true,
      backgroundPreset: { beerT: 72, bubbleDensity: 58, foamIntensity: 48 }
    },
    load: () => import("./pale-ales-bitters-et-ipa-collection.js").then((module) => module.paleAlesBittersEtIpaBundle)
  },
  {
    collection: {
      id: "porters-stouts",
      slug: "porters-et-stouts",
      name: "Porters et Stouts",
      subtitle: "Noirs, torréfiés et profonds",
      order: 30,
      expectedCardCount: 22,
      discoveryKey: "zythohunt.discovery.porters-et-stouts.v1",
      assetsReady: true,
      backgroundPreset: { beerT: 0, bubbleDensity: 50, foamIntensity: 55 }
    },
    load: () => import("./porters-stouts-collection.js").then((module) => module.porterStoutBundle)
  },
  {
    collection: {
      id: "traditions-belges-et-francaises",
      slug: "traditions-belges-et-francaises",
      name: "Traditions belges et françaises",
      subtitle: "17 cartes Brassopédie à illustrer",
      order: 40,
      expectedCardCount: 17,
      discoveryKey: "zythohunt.discovery.traditions-belges-et-francaises.v1",
      assetsReady: true,
      backgroundPreset: { beerT: 62, bubbleDensity: 62, foamIntensity: 70 }
    },
    load: () => import("./traditions-belges-et-francaises-collection.js").then((module) => module.traditionsBelgesEtFrancaisesBundle)
  },
  {
    collection: {
      id: "bieres-de-ble-et-de-seigle",
      slug: "bieres-de-ble-et-de-seigle",
      name: "Bières de blé et de seigle",
      subtitle: "13 cartes Brassopédie à illustrer",
      order: 50,
      expectedCardCount: 13,
      discoveryKey: "zythohunt.discovery.bieres-de-ble-et-de-seigle.v1",
      assetsReady: true,
      backgroundPreset: { beerT: 92, bubbleDensity: 66, foamIntensity: 72 }
    },
    load: () => import("./bieres-de-ble-et-de-seigle-collection.js").then((module) => module.bieresDeBleEtDeSeigleBundle)
  },
  {
    collection: {
      id: "bieres-acides-sauvages-et-spontanees",
      slug: "bieres-acides-sauvages-et-spontanees",
      name: "Bières acides, sauvages et spontanées",
      subtitle: "21 cartes Brassopédie à illustrer",
      order: 60,
      expectedCardCount: 21,
      discoveryKey: "zythohunt.discovery.bieres-acides-sauvages-et-spontanees.v1",
      assetsReady: true,
      backgroundPreset: { beerT: 48, bubbleDensity: 54, foamIntensity: 50 }
    },
    load: () => import("./bieres-acides-sauvages-et-spontanees-collection.js").then((module) => module.bieresAcidesSauvagesEtSpontaneesBundle)
  },
  {
    collection: {
      id: "ales-ambrees-brunes-maltees-et-fortes",
      slug: "ales-ambrees-brunes-maltees-et-fortes",
      name: "Ales ambrées, brunes, maltées et fortes",
      subtitle: "27 cartes Brassopédie à illustrer",
      order: 70,
      expectedCardCount: 27,
      discoveryKey: "zythohunt.discovery.ales-ambrees-brunes-maltees-et-fortes.v1",
      assetsReady: true,
      backgroundPreset: { beerT: 57, bubbleDensity: 58, foamIntensity: 54 }
    },
    load: () => import("./ales-ambrees-brunes-maltees-et-fortes-collection.js").then((module) => module.alesAmbreesBrunesMalteesEtFortesBundle)
  },
  {
    collection: {
      id: "styles-singuliers-historiques-et-hybrides",
      slug: "styles-singuliers-historiques-et-hybrides",
      name: "Styles singuliers, historiques et hybrides",
      subtitle: "40 cartes Brassopédie à illustrer",
      order: 80,
      expectedCardCount: 40,
      discoveryKey: "zythohunt.discovery.styles-singuliers-historiques-et-hybrides.v1",
      assetsReady: true,
      backgroundPreset: { beerT: 50, bubbleDensity: 50, foamIntensity: 50 }
    },
    load: () => import("./styles-singuliers-historiques-et-hybrides-collection.js").then((module) => module.stylesSinguliersHistoriquesEtHybridesBundle)
  },
  {
    collection: {
      id: "appellations-commerciales",
      slug: "appellations-commerciales",
      name: "Appellations commerciales",
      subtitle: "30 cartes Brassopédie à illustrer",
      order: 90,
      expectedCardCount: 30,
      discoveryKey: "zythohunt.discovery.appellations-commerciales.v1",
      assetsReady: true,
      backgroundPreset: { beerT: 75, bubbleDensity: 66, foamIntensity: 62 }
    },
    load: () => import("./appellations-commerciales-collection.js").then((module) => module.appellationsCommercialesBundle)
  },
  {
    collection: {
      id: "bizarre-et-insolite",
      slug: "bizarre-et-insolite",
      name: "Bizarre et insolite",
      subtitle: "Collection secrète",
      order: 100,
      expectedCardCount: 42,
      discoveryKey: "zythohunt.discovery.bizarre-et-insolite.v1",
      assetsReady: true,
      searchable: false,
      secret: {
        enabled: true,
        lockedLabel: "????",
        unlockRatio: 0.5,
        unlockScope: "classic-collections",
        revealMode: "click-after-unlock"
      },
      backgroundPreset: { beerT: 18, bubbleDensity: 42, foamIntensity: 38 }
    },
    load: () => import("./bizarre-et-insolite-collection.js").then((module) => module.bizarreEtInsoliteBundle)
  }
];

export const collections = collectionCatalog.map(({ collection }) => collection);
