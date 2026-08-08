export const CONSULTED = "2026-08-08";

export function source(organisme, reference, url, type = "source_documentaire", edition = null) {
  return { organisme, edition, reference, type, url, consultation: CONSULTED };
}

export const BA = (reference) => source(
  "Brewers Association",
  reference,
  "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
  "guide_de_style",
  "2026"
);

export const BJCP = (reference, path = "27/historical-beer") => source(
  "BJCP",
  reference,
  `https://www.bjcp.org/style/2021/${path}/`,
  "guide_de_style",
  "2021"
);

export function entry({
  histoire,
  unique = true,
  explication = "",
  malts = ["Malt de base adapté au style sous-jacent."],
  hops = ["Houblonnage adapté au style sous-jacent et à l'équilibre recherché."],
  yeast = ["Levure adaptée au style ou au procédé."],
  extras = [],
  water = "Profil d'eau ajusté au style de base et aux ingrédients caractéristiques.",
  mash = "Empâtage adapté aux céréales utilisées et à la fermentescibilité recherchée.",
  boil = "Ébullition et houblonnage adaptés au style de base ; les ingrédients particuliers sont ajoutés au moment qui préserve leur expression sans déséquilibrer la bière.",
  fermentation = "Fermentation conduite selon le style de base, avec maîtrise de la température et de l'atténuation.",
  maturation = "Maturation suffisante pour intégrer les ingrédients et stabiliser le profil avant conditionnement.",
  target,
  sources
}) {
  return {
    histoireEtOrigines: histoire,
    recette: {
      profilUnique: unique,
      explicationProfil: unique ? explication : (explication || "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré."),
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
