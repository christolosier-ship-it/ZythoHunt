export const CONSULTED = "2026-08-09";

export const exactMetric = (value, unite) => ({ min: value, max: value, unite, statut: "exact" });
export const textMetric = (libelle, unite = "") => ({ min: null, max: null, unite, statut: "variable", libelle });
export const unknownMetric = (label = "Non documenté dans les sources retenues", unite = "") => textMetric(label, unite);

export const source = (organisme, reference, url, type = "source_documentaire", edition = null) => ({
  organisme,
  edition,
  reference,
  type,
  url,
  consultation: CONSULTED
});

export const chapter = (titre, texte) => ({ titre, texte });

export function makeRecipe({
  titre = "Ce qu’on sait du brassin",
  noteProfil = "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
  explicationProfil,
  profilUnique = true,
  malts = ["Non documentés avec assez de précision pour reconstituer la recette."],
  hops = ["Non documentés avec assez de précision pour reconstituer la recette."],
  yeast = ["La fermentation est décrite dans la fiche ; la souche exacte n’est pas toujours publiée."],
  extras = ["Aucun ingrédient complémentaire supplémentaire n’est affirmé au-delà de ce que documentent les sources."],
  water = "Profil d’eau non documenté dans les sources retenues.",
  mash = "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
  boil = "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
  fermentation = "Conduite détaillée de fermentation non publiée ; ne pas inventer températures, densités ou durée.",
  maturation = "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
  target
}) {
  return {
    titre,
    profilUnique,
    noteProfil,
    explicationProfil,
    maltsEtCereales: Array.isArray(malts) ? malts : [malts],
    houblons: Array.isArray(hops) ? hops : [hops],
    levuresEtMicroorganismes: Array.isArray(yeast) ? yeast : [yeast],
    ingredientsComplementaires: Array.isArray(extras) ? extras : [extras],
    profilEau: water,
    empatage: mash,
    ebullitionEtHoublonnage: boil,
    fermentation,
    maturation,
    profilRecherche: target
  };
}

export function makeCard({
  code,
  nom,
  nature,
  aliases = [],
  pays,
  origine,
  alcohol = unknownMetric("Non documenté", "%"),
  bitterness = unknownMetric("Non documentée", "IBU"),
  color = unknownMetric("Non documentée", "EBC"),
  fermentation = "Non documentée",
  fermentationDetails = "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues.",
  service = "Non documenté",
  glasses = [],
  description,
  histoire,
  chapitres,
  recette,
  sources
}) {
  return {
    id: code.toLowerCase(),
    code,
    nom,
    collectionId: 10,
    nature,
    parentPrincipalId: null,
    aliases,
    paysOrigine: Array.isArray(pays) ? pays : [pays],
    origine: { libelle: origine, ville: null, region: null, bassinBrassicole: null },
    alcool: alcohol,
    amertume: bitterness,
    couleur: color,
    fermentation: { type: fermentation, details: fermentationDetails },
    service: { temperatureMin: null, temperatureMax: null, uniteTemperature: "°C", verresRecommandes: glasses, libelle: service },
    description,
    histoireEtOrigines: histoire,
    chapitres,
    recette,
    sources
  };
}
