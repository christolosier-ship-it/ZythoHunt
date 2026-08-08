const CONSULTED = "2026-08-08";

const source = ({ organisme, edition = null, reference, type, url }) => ({
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

export const bjcp2021 = (style, path = "beer") => source({
  organisme: "BJCP",
  edition: "2021",
  reference: `${style} — Beer Style Guidelines`,
  type: "guide_de_style",
  url: `https://www.bjcp.org/style/2021/${path}`
});

export const officialSource = (organisme, reference, url, type = "source_primaire") => source({
  organisme,
  reference,
  type,
  url
});

export const TECH = Object.freeze({
  diamond: officialSource(
    "Lallemand Brewing",
    "LalBrew Diamond — lager yeast technical profile",
    "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
    "fiche_technique"
  ),
  w3470: officialSource(
    "Fermentis",
    "SafLager W-34/70 — lager yeast technical profile",
    "https://fermentis.com/fr/produit/saflager-w-34-70/",
    "fiche_technique"
  ),
  pilsnerMalt: officialSource(
    "Weyermann Spezialmalze",
    "Weyermann Pilsner Malt — product specification and typical uses",
    "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
    "fiche_technique"
  ),
  munichMalt: officialSource(
    "Weyermann Spezialmalze",
    "Weyermann Munich Malt Type 1 — product specification and typical uses",
    "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
    "fiche_technique"
  )
});

export const HISTORY = Object.freeze({
  lagerYeast: officialSource(
    "Carlsberg Research Laboratory",
    "Emil C. Hansen and the first production-scale pure bottom-fermenting yeast culture, 1883",
    "https://carlsberggroup.com/pursuit-of-better/scientific-discoveries/purifying-yeast/",
    "histoire_des_techniques"
  ),
  pilsnerUrquell: officialSource(
    "Pilsner Urquell",
    "Plzeň 1842, Josef Groll, Czech ingredients and traditional triple decoction",
    "https://live.pilsnerurquell.com/",
    "source_primaire_historique"
  ),
  pilsnerProcess: officialSource(
    "Pilsner Urquell",
    "Traditional brewing process: triple decoction, Saaz hopping, fermentation and maturation",
    "https://www.pilsnerurquell.com/at/stories/der-brauprozess/",
    "source_primaire_technique"
  ),
  tipopils: officialSource(
    "Birrificio Italiano",
    "Tipopils — born in 1996, reference point for Italian-style dry-hopped Pilsner",
    "https://www.birrificio.it/en/tipopils",
    "source_primaire_historique"
  ),
  einbecker: officialSource(
    "Einbecker Brauerei",
    "Bock Story — Einbeck brewing trade and documented strong beer from 1378",
    "https://www.einbecker.de/echt-einbecker/bock-story",
    "source_primaire_historique"
  ),
  salvator: officialSource(
    "Paulaner Brauerei München",
    "Salvator — historical Doppelbock tradition and current ingredients",
    "https://www.paulaner.com/our-products/salvator/",
    "source_primaire_historique"
  ),
  oktoberfest: officialSource(
    "Oktoberfest.de / Stadt München",
    "History of Oktoberfest and the development of festival beer",
    "https://www.oktoberfest.de/en/magazine/tradition/the-history-of-oktoberfest",
    "source_institutionnelle_historique"
  ),
  oktoberfestMarzen: officialSource(
    "Oktoberfest.de / Stadt München",
    "Schottenhamel history — Märzen introduced to Oktoberfest in 1872",
    "https://www.oktoberfest.de/en/tents/big-tents/festhalle-schottenhamel",
    "source_institutionnelle_historique"
  ),
  munichHelles: officialSource(
    "München Tourismus",
    "Munich beer history — Spaten and the emergence of Münchner Hell in the late 19th century",
    "https://www.munich.travel/en/topics/convention-bureau/news-highlights-2022/munich-and-it-s-beer-a-success-story",
    "source_institutionnelle_historique"
  ),
  munichBeer: officialSource(
    "München Tourismus",
    "Munich beer typology — Helles and Dunkel in local beer culture",
    "https://www.munich.travel/en/topics/eat-drink/munich-beers-typology",
    "source_institutionnelle"
  ),
  dortmund: officialSource(
    "Brauerei-Museum Dortmund / Stadt Dortmund",
    "Dortmund brewing history, industrial brewing and Fritz Brinkhoff's Export beer",
    "https://www.dortmund.de/themen/freizeit-und-kultur/museen-und-kunst/brauerei-museum/",
    "source_museale_historique"
  ),
  dortmundExport: officialSource(
    "Stadt Dortmund",
    "Fritz Brinkhoff, founding brewer of Dortmunder Union-Brauerei, and the development of Export",
    "https://www.dortmund.de/newsroom/presse-mitteilungen/fuehrung-im-brauerei-museum-erzaehlt-die-geschichte-von-fritz-brinkhoff-2.html",
    "source_museale_historique"
  ),
  rotbier: officialSource(
    "Tourismus Nürnberg",
    "Nuremberg — Home of Rotbier, medieval brewing regulations and local bottom-fermented red beer",
    "https://tourismus.nuernberg.de/en/food-drink/nurembergs-specialties/beer/nuremberg-home-of-rotbier-1/",
    "source_institutionnelle_historique"
  ),
  schwarzbier: officialSource(
    "Köstritzer Schwarzbierbrauerei",
    "Brewery history — documented Schwarzbier tradition since 1543",
    "https://www.koestritzer.de/brauerei/historie/",
    "source_primaire_historique"
  ),
  americanLight: officialSource(
    "Smithsonian National Museum of American History",
    "Miller Lite beer can and the 1975 growth of the American light-beer category",
    "https://americanhistory.si.edu/collections/object/nmah_1297773",
    "source_museale_historique"
  ),
  millerLite: officialSource(
    "Molson Coors",
    "Origins and national rollout of Miller Lite, 1973–1975",
    "https://www.molsoncoorsblog.com/features/born-chicago-raised-milwaukee-new-look-origins-miller-lite",
    "source_primaire_historique"
  ),
  mexicoHeineken: officialSource(
    "HEINEKEN México",
    "History of Cervecería Cuauhtémoc and Mexican industrial brewing since 1890",
    "https://www.heinekenmexico.com/heineken-mexico",
    "source_primaire_historique"
  ),
  mexicoModelo: officialSource(
    "Grupo Modelo",
    "History of Grupo Modelo since 1925",
    "https://www.grupomodelo.com/quienes-somos/nuestra-historia",
    "source_primaire_historique"
  ),
  victoria: officialSource(
    "Cerveza Victoria",
    "Victoria — Vienna Lager and brand history dating to 1865",
    "https://www.cervezavictoria.com.mx/preguntas-frecuentes",
    "source_primaire_historique"
  ),
  modeloNegra: officialSource(
    "Modelo",
    "Modelo Negra — Mexican dark lager, brewed in Mexico since 1925 and presented as Munich Dunkel-style",
    "https://www.modelousa.com/products/negra",
    "source_primaire_historique"
  ),
  bohemiaMexico: officialSource(
    "HEINEKEN México",
    "Bohemia — Mexican Pilsner tradition since 1905",
    "https://heinekenmexico.com/noticia/bohemia-celebra-120-anos-de-estar-en-las-mesas-mexicanas",
    "source_primaire_historique"
  ),
  viennaDreher: officialSource(
    "Dreher",
    "Anton Dreher and the 1841 Lagerbier associated with the Vienna brewing tradition",
    "https://www.dreher.it/storia/",
    "source_primaire_historique"
  )
});
