const CONSULTED = "2026-08-08";

export function source(organisme, reference, url, type = "source_institutionnelle", edition = null) {
  return {
    organisme,
    edition,
    reference,
    type,
    url,
    consultation: CONSULTED
  };
}

export const LEGIFRANCE_BEER = source(
  "Légifrance",
  "Décret n° 92-307 du 31 mars 1992 relatif aux bières — version en vigueur",
  "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
  "source_reglementaire",
  "version en vigueur"
);

export const DGCCRF_BEER = source(
  "DGCCRF",
  "Tout savoir sur l’étiquetage des bières",
  "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
  "source_reglementaire"
);

export const EU_ORGANIC = source(
  "Union européenne — EUR-Lex",
  "Règlement (UE) 2018/848 relatif à la production biologique et à l’étiquetage des produits biologiques",
  "https://eur-lex.europa.eu/eli/reg/2018/848/oj?locale=fr",
  "source_reglementaire",
  "2018/848"
);

export const EU_GLUTEN = source(
  "Union européenne — EUR-Lex",
  "Règlement d’exécution (UE) n° 828/2014 — mentions sans gluten et très faible teneur en gluten",
  "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32014R0828",
  "source_reglementaire",
  "828/2014"
);

export const TRAPPIST = source(
  "Association Internationale Trappiste",
  "Le label Authentic Trappist Product — critères",
  "https://www.trappist.be/fr/l-association/le-label-atp/",
  "source_certification"
);

export const TRAPPIST_FAQ = source(
  "Association Internationale Trappiste",
  "FAQ — protection du nom Trappist® et différence avec le label ATP",
  "https://www.trappist.be/en/faqs/",
  "source_certification"
);

export const WESTMALLE = source(
  "Trappist Westmalle",
  "Histoire des bières trappistes — Dubbel et Tripel",
  "https://www.trappistwestmalle.be/fr/bieres-trappistes/",
  "source_producteur_historique"
);

export const BRASSEURS_FRANCE = source(
  "Brasseurs de France",
  "Glossaire — bière de Mars / bière de Printemps et vocabulaire brassicole",
  "https://brasseurs-de-france.com/tout-savoir-sur-la-biere/glossaire/",
  "source_professionnelle"
);

export const BRASSEURS_FRANCE_NOEL = source(
  "Brasseurs de France",
  "Bière de Noël — tradition saisonnière",
  "https://brasseurs-de-france.com/tout-savoir-sur-la-biere/accords-bieres-mets/",
  "source_professionnelle"
);

export const BA = (reference) => source(
  "Brewers Association",
  reference,
  "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
  "guide_de_style",
  "2026"
);

export const BJCP = (reference, path) => source(
  "BJCP",
  reference,
  `https://www.bjcp.org/style/2021/${path}/`,
  "guide_de_style",
  "2021"
);

export const RADLER = source(
  "Oxford Companion to Beer / Craft Beer & Brewing",
  "Radlermass — histoire et usage",
  "https://www.beerandbrewing.com/dictionary/Z4jAApWYk0",
  "source_historique_secondaire"
);

export const CRAFT_FRANCE = source(
  "DGCCRF",
  "Tout savoir sur l’étiquetage des bières — usage de bière artisanale",
  "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
  "source_reglementaire"
);

export function entry({
  histoire,
  unique = false,
  explication = "Cette appellation ne définit pas à elle seule une recette brassicole unique.",
  malts = ["Selon le style ou le produit de base ; l’appellation seule ne fixe pas de céréales obligatoires."],
  hops = ["Selon le style ou le produit de base ; l’appellation seule ne fixe pas le niveau d’amertume ou les variétés de houblon."],
  yeast = ["Selon le style ou le procédé de base ; fermentation haute, basse, mixte ou désalcoolisation peuvent coexister selon l’appellation."],
  extras = [],
  water = "Selon le style ou le procédé de base ; aucun profil d’eau universel n’est déductible de l’appellation seule.",
  mash = "Selon la bière de base et les matières premières réellement employées.",
  boil = "Selon le style de base ; l’appellation commerciale ne fixe pas à elle seule la conduite du houblonnage.",
  fermentation = "Selon le produit réel ; l’appellation doit être interprétée avec le style, la liste d’ingrédients et les mentions réglementaires.",
  maturation = "Selon le style de base ou la contrainte réglementaire éventuellement associée à la mention.",
  target,
  sources
}) {
  return {
    histoireEtOrigines: histoire,
    recette: {
      profilUnique: unique,
      explicationProfil: unique ? "" : explication,
      maltsEtCereales: malts,
      houblons: hops,
      levuresEtMicroorganismes: yeast,
      ingredientsComplementaires: extras,
      profilEau: water,
      empatage: mash,
      ebullitionEtHoublonnage: boil,
      fermentation,
      maturation,
      profilRecherche: target
    },
    sources
  };
}
