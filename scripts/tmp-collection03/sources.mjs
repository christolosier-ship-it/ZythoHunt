const CONSULTED = "2026-08-08";

export const source = ({ organisme, edition = null, reference, type, url }) => ({
  organisme,
  edition,
  reference,
  type,
  url,
  consultation: CONSULTED
});

export const ba2026 = (reference) => source({
  organisme: "Brewers Association",
  edition: "2026",
  reference: `${reference} — Beer Style Guidelines`,
  type: "guide_de_style",
  url: "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/"
});

export const bjcp2021 = (reference, url) => source({
  organisme: "BJCP",
  edition: "2021",
  reference: `${reference} — Beer Style Guidelines`,
  type: "guide_de_style",
  url
});

export const REF = Object.freeze({
  camraPorter: source({
    organisme: "CAMRA / Martyn Cornell",
    reference: "300th anniversary of Porter — rise, decline and revival of London porter",
    type: "histoire_brassicole",
    url: "https://members.camra.org.uk/learn-discover/discover/300th-anniversary-of-porter/"
  }),
  fullersPorter: source({
    organisme: "Fuller’s Brewery",
    reference: "London Porter — brown, crystal and chocolate malts with Fuggles",
    type: "source_primaire_technique",
    url: "https://www.fullersbrewery.co.uk/products/london-porter"
  }),
  guinnessStory: source({
    organisme: "Guinness",
    reference: "The Story of Guinness — St. James’s Gate and brewing heritage since 1759",
    type: "source_primaire_historique",
    url: "https://www.guinness.com/en/our-craft/guinness-story"
  }),
  guinnessOriginal: source({
    organisme: "Guinness",
    reference: "Guinness Original / Extra Stout — descendant of the 1821 Superior Porter recipe",
    type: "source_primaire_historique_et_technique",
    url: "https://www.guinness.com/en/beers/guinness-original"
  }),
  guinnessDraught: source({
    organisme: "Guinness",
    reference: "Guinness Draught — first brewed in 1959; nitrogen dispense and current ingredients",
    type: "source_primaire_historique_et_technique",
    url: "https://www.guinness.com/en-us/beers/guinness-draught"
  }),
  guinnessForeign: source({
    organisme: "Guinness",
    reference: "Foreign Extra Stout — West India Porter lineage and export hopping",
    type: "source_primaire_historique",
    url: "https://www.guinness.com/en/beers/guinness-foreign-extra-stout"
  }),
  guinnessWestIndies: source({
    organisme: "Guinness",
    reference: "West Indies Porter — 1801 export concept and extra hopping",
    type: "source_primaire_historique",
    url: "https://www.guinness.com/en/beers/guinness-west-indies-porter"
  }),
  zywiecPorter: source({
    organisme: "Grupa Żywiec",
    reference: "Żywiec Porter — Baltic Porter brewed since 1881; composition and service",
    type: "source_primaire_historique_et_technique",
    url: "https://strona.zywiec.com.pl/produkty/zywiec-porter/"
  }),
  alaskanSmoked: source({
    organisme: "Alaskan Brewing Co.",
    reference: "Smoked Porter — introduced in 1988; alder-smoked malt and American smoked-beer revival",
    type: "source_primaire_historique_et_technique",
    url: "https://www.alaskanbeer.com/our-beers/smoked-porter/"
  }),
  foundersBreakfast: source({
    organisme: "Founders Brewing Co.",
    reference: "Breakfast Stout — oats, chocolate and two types of coffee",
    type: "source_primaire_technique",
    url: "https://foundersbrewing.com/our-beer/breakfast-stout/"
  })
});

export const BJCP = Object.freeze({
  englishPorter: (label = "English Porter") => bjcp2021(label, "https://www.bjcp.org/style/2021/13/13C/english-porter/"),
  americanPorter: (label = "American Porter") => bjcp2021(label, "https://www.bjcp.org/style/2021/20/"),
  preProhibitionPorter: (label = "Pre-Prohibition Porter") => bjcp2021(label, "https://www.bjcp.org/style/2021/27/"),
  balticPorter: (label = "Baltic Porter") => bjcp2021(label, "https://www.bjcp.org/style/2021/9/9C/"),
  irishStout: (label = "Irish Stout") => bjcp2021(label, "https://www.bjcp.org/style/2021/15/"),
  irishExtra: (label = "Irish Extra Stout") => bjcp2021(label, "https://www.bjcp.org/style/2021/15/15C/irish-extra-stout/"),
  sweetStout: (label = "Sweet Stout") => bjcp2021(label, "https://www.bjcp.org/style/2021/16/"),
  oatmealStout: (label = "Oatmeal Stout") => bjcp2021(label, "https://www.bjcp.org/style/2021/16/16B/oatmeal-stout/"),
  tropicalStout: (label = "Tropical Stout") => bjcp2021(label, "https://www.bjcp.org/style/2021/16/16C/tropical-stout/"),
  foreignExtra: (label = "Foreign Extra Stout") => bjcp2021(label, "https://www.bjcp.org/style/2021/16/16D/foreign-extra-stout/"),
  americanStout: (label = "American Stout") => bjcp2021(label, "https://www.bjcp.org/style/2021/20/american-porter-and-stout/"),
  imperialStout: (label = "Imperial Stout") => bjcp2021(label, "https://www.bjcp.org/style/2021/20/american-porter-and-stout/")
});
