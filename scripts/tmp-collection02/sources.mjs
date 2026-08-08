const CONSULTED = "2026-08-08";

export const source = ({ organisme, edition = null, reference, type, url }) => ({
  organisme,
  edition,
  reference,
  type,
  url,
  consultation: CONSULTED
});

export const ba2026 = (style) => source({
  organisme: "Brewers Association",
  edition: "2026",
  reference: `${style} — Beer Style Guidelines`,
  type: "guide_de_style",
  url: "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
});

export const bjcp2021 = (style, path) => source({
  organisme: "BJCP",
  edition: "2021",
  reference: `${style} — Beer Style Guidelines`,
  type: "guide_de_style",
  url: `https://www.bjcp.org/style/2021/${path}`
});

export const official = (organisme, reference, url, type = "source_primaire") => source({
  organisme,
  reference,
  type,
  url
});

export const REFERENCES = Object.freeze({
  camraIpa: official(
    "CAMRA / Pete Brown",
    "India Pale Ale: A History — mythes, commerce vers l’Inde et réinvention américaine",
    "https://learn.camra.org.uk/courses/india-pale-ale-a-history",
    "histoire_brassicole"
  ),
  hopBack: official(
    "Hop Back Brewery",
    "Our Story — Summer Lightning, brassée depuis 1988, et essor de la golden ale britannique moderne",
    "https://www.hopback.co.uk/our-story/",
    "source_primaire_historique"
  ),
  fullers: official(
    "Fuller’s",
    "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
    "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
    "source_primaire_historique"
  ),
  coopersSparkling: official(
    "Coopers Brewery",
    "Sparkling Ale — première production en 1862, refermentation naturelle et profil actuel",
    "https://coopers.com.au/products/sparkling-ale",
    "source_primaire_historique_technique"
  ),
  coopersPale: official(
    "Coopers Brewery",
    "Original Pale Ale — conditionnement naturel et référence de la pale ale australienne",
    "https://coopers.com.au/products/original-pale-ale",
    "source_primaire_technique"
  ),
  coopersPacific: official(
    "Coopers Brewery",
    "Pacific Pale Ale — interprétation australienne moderne, dry-hop Galaxy, Vic Secret et Melba",
    "https://coopers.com.au/products/pacific-pale-ale",
    "source_primaire_technique"
  ),
  sierraStory: official(
    "Sierra Nevada Brewing Co.",
    "Our Story — fondation en 1980 et rôle de Pale Ale dans l’essor du craft américain",
    "https://sierranevada.com/about-us",
    "source_primaire_historique"
  ),
  sierraPale: official(
    "Sierra Nevada Brewing Co.",
    "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
    "https://sierranevada.com/brews/pale-ale",
    "source_primaire_technique"
  ),
  sierraRecipe: official(
    "Sierra Nevada Brewing Co.",
    "Pale Ale Homebrew Recipe — logique de malt et de houblonnage du modèle américain",
    "https://sierranevada.com/blog/our-beer/pale-ale-homebrew-recipe",
    "source_primaire_technique"
  ),
  smithsonianPale: official(
    "Smithsonian National Museum of American History",
    "Sierra Nevada Pale Ale — objet et contexte historique du craft américain",
    "https://americanhistory.si.edu/collections/object/nmah_1854865",
    "source_museale_historique"
  ),
  smithsonianLiberty: official(
    "Smithsonian National Museum of American History",
    "Anchor Liberty Ale — Cascade, 1975 et préfiguration de l’IPA américaine",
    "https://americanhistory.si.edu/collections/object/nmah_2033255",
    "source_museale_historique"
  ),
  alchemist: official(
    "The Alchemist Brewery",
    "Our Story — Heady Topper, Waterbury et diffusion de l’école houblonnée du Vermont",
    "https://alchemistbeer.com/story/",
    "source_primaire_historique"
  ),
  russianRiverPliny: official(
    "Russian River Brewing Company",
    "Pliny the Elder — Double IPA, festival de Hayward 2000 et antécédent de Blind Pig en 1994",
    "https://www.russianriverbrewing.com/brew/pliny-the-elder/",
    "source_primaire_historique"
  ),
  germanBrewersKolsch: official(
    "German Brewers’ Association",
    "Kölsch — fermentation haute, tradition colonaise, service et protection géographique",
    "https://germanbrewers.com/en/german-beer-variety/koelsch/",
    "source_institutionnelle"
  ),
  nzMotueka: official(
    "New Zealand Hops",
    "Motueka™ — origine génétique, profil citron vert et usage brassicole",
    "https://nzhops.co.nz/products/motueka",
    "source_technique_houblon"
  ),
  fermentisS04: official(
    "Fermentis",
    "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
    "https://fermentis.com/fr/produit/safale-s-04/",
    "fiche_technique"
  ),
  lallemandVerdant: official(
    "Lallemand Brewing",
    "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
    "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
    "fiche_technique"
  ),
  ahaBrut: official(
    "American Homebrewers Association",
    "Brut IPA Style Description 1.0 — glucoamylase, très forte atténuation et attribution à Kim Sturdavant",
    "https://www.homebrewersassociation.org/how-to-brew/brut-ipa-style-description-1-0/",
    "histoire_et_technique"
  )
});
