// Source canonique de la collection : taxonomie + contenu encyclopédique.
// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 8,
    "slug": "styles-singuliers-historiques-et-hybrides",
    "nom": "Styles singuliers, historiques et hybrides"
  },
  "cartes": [
    {
      "id": "cream-ale",
      "nom": "Cream Ale",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": "ale",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Nord-Est des États-Unis",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.2,
        "max": 5.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 8,
        "max": 20,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 5,
        "max": 10,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "hybride",
        "details": "Procédé hybride combinant une fermentation atypique pour la famille et une maturation destinée à nettoyer le profil."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 6,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "American pint",
          "Pilsner"
        ]
      },
      "description": "La Cream Ale est une bière américaine de tondeuse, mais avec un peu de malice : très pâle, propre, pétillante, légère, parfois grainée ou légèrement maïs, avec une finale sèche à douce. Elle se boit comme une lager, mais garde une petite âme d’ale.",
      "histoireEtOrigines": `Cream Ale est une réponse américaine au succès croissant des lagers au XIXe siècle. Les brasseurs d'ales, notamment dans le Nord-Est et le Midwest, ont cherché à produire des bières plus pâles, plus nettes et plus désaltérantes que les ales britanniques traditionnelles, tout en conservant une fermentation haute ou hybride. Le terme n'a jamais impliqué l'usage de crème : il évoque surtout une texture douce et une impression de facilité.

La catégorie moderne est plus étroite que l'ensemble des « present-use ales » historiques. Elle admet souvent maïs ou riz, fermentation ale assez propre, parfois levure lager à température plus chaude, puis garde froide. Genesee, qui lance sa Cream Ale en 1960, devient l'un des grands repères commerciaux du style au XXe siècle.

Il faut donc la comprendre comme une famille américaine de transition technologique entre ale et lager, et non comme une recette unique inventée en 1960.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale ou six-rangs ; maïs ou riz possibles pour alléger le corps et la couleur."
        ],
        "houblons": [
          "Houblonnage américain ou continental discret, généralement 10-22 IBU dans le cadre BA."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre ; certaines versions utilisent une levure lager fermentée relativement chaud ou une fermentation hybride."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau plutôt douce à modérément minérale pour préserver la netteté.",
        "empatage": "Empâtage favorisant une bonne fermentescibilité et un corps léger.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage adaptés au style de base ; les ingrédients particuliers sont ajoutés au moment qui préserve leur expression sans déséquilibrer la bière.",
        "fermentation": "Fermentation propre, puis garde froide fréquente afin de lisser le profil.",
        "maturation": "Conditionnement froid court à modéré ; carbonatation moyenne à vive.",
        "profilRecherche": "Une bière américaine pâle, douce et très nette, à mi-chemin culturel entre ale et lager, sans lourdeur ni caractère fruité marqué."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Cream Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Genesee Brewing Company",
          "edition": null,
          "reference": "Genesee Cream Ale — style standard since 1960",
          "type": "source_producteur_historique",
          "url": "https://www.geneseebeer.com/beer/genesee-cream-ale/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "california-common-steam-beer",
      "nom": "California Common / Steam Beer",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "California Common",
        "Steam Beer"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "San Francisco, Californie",
        "ville": "San Francisco",
        "region": "Californie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 5.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 30,
        "max": 45,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 20,
        "max": 28,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "hybride",
        "details": "Levure lager fermentée à une température relativement chaude, sans long lagering classique."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "American pint",
          "Pokal"
        ]
      },
      "description": "La California Common est une lager qui fermente comme si elle avait raté le train du froid : robe ambrée, malt toasté, caramel sec, houblon boisé ou mentholé, fermentation nette malgré la température plus haute. Elle a le goût d’un compromis devenu identité.",
      "histoireEtOrigines": `La California Common est l'héritière moderne des « steam beers » de la côte Ouest américaine. À l'époque où la réfrigération mécanique était rare et coûteuse, des brasseurs de Californie ont utilisé des levures de fermentation basse à des températures plus élevées que celles des lagers européennes. Les récits historiques sur l'origine exacte du mot « steam » sont nombreux et parfois contradictoires ; il vaut mieux le traiter comme un terme commercial et régional ancien plutôt que comme la description certaine d'un procédé unique.

Le style moderne a été largement défini par Anchor Steam Beer à San Francisco : lager yeast fermentée chaud, malt ambré/toasté et houblon Northern Brewer. « Steam Beer » est devenu associé à Anchor, tandis que les guides de concours utilisent généralement California Common comme nom générique.

Ce n'est donc ni une lager chaude quelconque ni une amber ale : son identité vient précisément du croisement entre fermentation basse conduite à température d'ale et profil malt/houblon californien devenu classique.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale et/ou lager ; crystal ou malts toastés pour la robe ambrée et le caractère pain/caramel."
        ],
        "houblons": [
          "Northern Brewer historiquement emblématique dans la version Anchor ; amertume moyenne à soutenue."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager capable de fermenter proprement à température relativement élevée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modérément minéral, permettant une amertume ferme sans dureté.",
        "empatage": "Empâtage simple visant un corps moyen et une bonne atténuation.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage adaptés au style de base ; les ingrédients particuliers sont ajoutés au moment qui préserve leur expression sans déséquilibrer la bière.",
        "fermentation": "Fermentation avec levure lager à température d'ale ou proche, puis conditionnement frais.",
        "maturation": "Garde fraîche suffisante pour nettoyer le profil sans effacer le malt et le houblon.",
        "profilRecherche": "Une bière ambrée nette, toastée et fermement houblonnée, avec fermentation lager chaude mais sans esters envahissants."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "California Common Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Anchor Brewing",
          "edition": null,
          "reference": "Steam Beer / California Common brewing tradition",
          "type": "source_producteur_historique",
          "url": "https://www.anchorbrewing.com/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "kentucky-common",
      "nom": "Kentucky Common",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Louisville, Kentucky",
        "ville": "Louisville",
        "region": "Kentucky",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 5.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 15,
        "max": 30,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 20,
        "max": 40,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "American pint",
          "Dimple mug"
        ]
      },
      "description": "La Kentucky Common est une bière de saloon rapide, sombre mais légère : maïs, caramel, pain grillé, légère minéralité, haute carbonatation et finale sèche. Elle n’est pas censée être franchement acide ; si elle pique comme une sour, le cheval est parti sans la selle.",
      "histoireEtOrigines": `Kentucky Common est un style américain régional authentique, presque entièrement associé à Louisville entre l'après-guerre de Sécession et la Prohibition. Il s'agissait d'une bière de consommation immédiate : peu coûteuse, rapidement produite, souvent expédiée vers les saloons quelques jours seulement après le brassage et carbonatée en fût pendant la fin de fermentation.

Le BJCP insiste sur un point important : les histoires modernes de sour mash emprunté au bourbon ne sont pas soutenues par les registres de brassage connus. Les grandes brasseries de Louisville autour de 1900 ne montrent pas de longue acidification ni de profil volontairement aigre. La bière était plutôt propre, sèche, légèrement maltée, avec maïs, six-rangs et une petite quantité de malt sombre. Avant la Prohibition, elle aurait représenté environ les trois quarts des ventes locales.

La reconstruction moderne doit donc éviter de transformer Kentucky Common en sour ale historique.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt d'orge six-rangs ; maïs en proportion notable ; petites quantités de caramel et de malt noir pour couleur et ajustement du moût."
        ],
        "houblons": [
          "Houblons américains rustiques pour l'amertume ; houblons continentaux possibles en finition."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale rapide et propre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau historiquement carbonatée de Louisville, souvent corrigée par précipitation des carbonates et ajout de gypse.",
        "empatage": "Empâtage efficace avec céréales adjunctes ; aucune acidification longue n'est requise historiquement.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage adaptés au style de base ; les ingrédients particuliers sont ajoutés au moment qui préserve leur expression sans déséquilibrer la bière.",
        "fermentation": "Fermentation haute rapide ; historiquement mise en fût avant fin complète pour carbonatation en cave de saloon.",
        "maturation": "Très courte : c'est une bière de service frais, pas une bière de garde.",
        "profilRecherche": "Une ale ambrée à brune, sèche, légèrement caramélisée et céréalière, très buvable, sans acidité volontaire."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Kentucky Common",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Kentucky Common historical notes — no evidence for sour mash",
          "type": "source_historique",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-malt-liquor",
      "nom": "American Malt Liquor",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "Malt Liquor"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "États-Unis",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6,
        "max": 9,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 5,
        "max": 25,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 4,
        "max": 14,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 6,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Shaker",
          "Chope"
        ]
      },
      "description": "L’American Malt Liquor ressemble à une lager claire passée en mode turbo : pâle, très fermentée, alcool plus élevé, corps léger, amertume faible et profil volontairement direct. Elle cherche l’impact sans la complexité, le moteur plus que la dentelle.",
      "histoireEtOrigines": `American Malt Liquor est avant tout une catégorie industrielle américaine de bière forte et claire, développée au XXe siècle. Le mot « liquor » ne signifie pas distillation : le produit reste une bière fermentée. La catégorie s'est construite autour d'une densité et d'un degré alcoolique supérieurs à ceux des lagers de masse, souvent obtenus avec une forte proportion d'adjuncts et d'enzymes afin de conserver un corps relativement léger malgré la force.

Son histoire est étroitement liée au marché américain d'après-guerre, aux grands formats et à une communication commerciale spécifique. Il serait trompeur de la présenter comme une tradition européenne ancienne ou comme une simple « lager plus forte » : sa logique est industrielle, économique et réglementaire autant que sensorielle.

Les versions de concours contemporaines cherchent une bière pâle, très atténuée et alcoolisée, sans la richesse maltée d'un Bock ni le houblonnage d'une forte Pils.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt lager ou pale ; maïs, riz ou sucres fermentescibles fréquents afin d'augmenter l'alcool sans alourdir le corps."
        ],
        "houblons": [
          "Houblonnage très faible à faible, essentiellement structurel."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager neutre et fortement atténuative ; certaines interprétations hybrides existent."
        ],
        "ingredientsComplementaires": [
          "Adjuncts céréaliers et/ou sucres très fermentescibles ; enzymes exogènes possibles dans la production industrielle."
        ],
        "profilEau": "Eau plutôt douce afin d'éviter toute dureté dans une bière fortement atténuée.",
        "empatage": "Empâtage orienté vers une forte fermentescibilité et un corps léger.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage adaptés au style de base ; les ingrédients particuliers sont ajoutés au moment qui préserve leur expression sans déséquilibrer la bière.",
        "fermentation": "Fermentation propre, avec gestion rigoureuse du degré alcoolique et des composés soufrés.",
        "maturation": "Garde froide destinée à lisser alcool et fermentation.",
        "profilRecherche": "Une bière américaine pâle et forte, neutre, sèche à légèrement douce, dont l'alcool est perceptible mais sans richesse maltée massive."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Malt Liquor",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "pre-prohibition-lager",
      "nom": "Pre-Prohibition Lager",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "États-Unis avant 1920",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 25,
        "max": 40,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 5,
        "max": 14,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "American pint"
        ]
      },
      "description": "La Pre-Prohibition Lager est une lager américaine avant amnésie : dorée, sèche, plus maltée, plus amère et plus houblonnée que les lagers industrielles modernes. Le maïs ou le riz peuvent l’alléger, mais elle garde du nerf.",
      "histoireEtOrigines": `Pre-Prohibition Lager, parfois appelée Classic American Pilsner dans des nomenclatures plus anciennes, représente la lager américaine robuste d'avant 1920. Les immigrants germanophones ont adapté les méthodes de lager à l'orge six-rangs américaine, plus riche en protéines, en utilisant souvent du maïs ou du riz pour équilibrer le moût. Contrairement aux lagers américaines légères d'après-guerre, ces bières pouvaient être franchement houblonnées et céréalières.

Le BJCP décrit une lager jaune à dorée, nette, avec malt grainé, parfois une rondeur de maïs, et une amertume nettement plus affirmée que celle d'une American Lager moderne. Les versions au riz sont généralement plus sèches et neutres que celles au maïs.

La Prohibition a interrompu cette continuité ; le style actuel est donc une reconstruction historique basée sur documents et recettes anciennes, pas une chaîne commerciale restée intacte.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt six-rangs ou deux-rangs ; maïs ou riz en adjunct traditionnel selon la variante."
        ],
        "houblons": [
          "Cluster et autres houblons américains historiques ; Saaz ou houblons continentaux possibles en finition."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager propre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil variable selon les villes américaines ; sulfates modérés utiles aux versions plus amères.",
        "empatage": "Empâtage adapté aux adjuncts, historiquement souvent avec cereal mash pour maïs ou riz non précuits.",
        "ebullitionEtHoublonnage": "Ébullition longue et houblonnage plus ferme que dans la lager américaine moderne.",
        "fermentation": "Fermentation basse puis lagering complet.",
        "maturation": "Garde froide de plusieurs semaines pour netteté et stabilité.",
        "profilRecherche": "Une lager américaine pré-Prohibition robuste, céréalière, sèche à ronde et nettement houblonnée, sans dilution aromatique moderne."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Pre-Prohibition Lager",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "kellerbier-zwickelbier",
      "nom": "Kellerbier / Zwickelbier",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [
        "Kellerbier",
        "Zwickelbier"
      ],
      "paysOrigine": [
        "Allemagne",
        "Europe"
      ],
      "origine": {
        "libelle": "Franconie et régions brassicoles européennes",
        "ville": null,
        "region": "Franconie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 7,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 15,
        "max": 50,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 5,
        "max": 60,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Willi Becher"
        ]
      },
      "description": "La Kellerbier est une lager de cave encore vivante : non filtrée, fraîche, parfois trouble, plus ronde, plus pain, plus levure et plus rustique que sa base. Elle doit sentir la cuve ouverte et la Franconie, pas le fond de seau.",
      "histoireEtOrigines": `Kellerbier signifie littéralement « bière de cave ». Historiquement, le terme désignait une lager servie directement depuis son récipient de maturation, fraîche, non filtrée et non pasteurisée. Le modèle le plus ancien est franconien et proche d'une Märzen ambrée, mais la pratique s'est étendue à Helles, Dunkel et, plus récemment, Pils.

Le BJCP souligne qu'il s'agit presque davantage d'un mode de service et de manipulation que d'un style unique. Zwickelbier, terme lié au robinet d'échantillonnage du tank, est aujourd'hui souvent utilisé commercialement pour des bières non filtrées du même esprit. Une Kellerbier réussie n'est pas une « bière verte » défectueuse : elle doit être pleinement fermentée, propre, simplement plus fraîche, rustique et parfois légèrement levurée que sa base.

La fiche doit donc conserver un profil non unique : une Kellerbier de Märzen n'a pas la même recette qu'une Zwickel-Pils.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Mode traditionnel de service et de conditionnement appliqué à plusieurs lagers allemandes ; la recette dépend du style de base.",
        "maltsEtCereales": [
          "Même grist que le style de base : Pilsner, Helles, Märzen ou Dunkel ; aucune céréale spéciale obligatoire."
        ],
        "houblons": [
          "Houblons allemands ou tchèques correspondant au style de base ; certaines versions pâles modernes sont un peu plus aromatiques."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager propre ; levure résiduelle naturellement présente puisque la bière n'est pas filtrée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Identique au style de base, souvent profil franconien modéré.",
        "empatage": "Selon le style de base ; décoction possible dans les interprétations traditionnelles.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage adaptés au style de base ; les ingrédients particuliers sont ajoutés au moment qui préserve leur expression sans déséquilibrer la bière.",
        "fermentation": "Fermentation basse complète ; absence de défauts de bière jeune.",
        "maturation": "Lagering en cave puis service relativement frais, traditionnellement sans filtration ni pasteurisation.",
        "profilRecherche": "Une lager allemande fraîche, pleinement fermentée, légèrement plus rustique et crémeuse que sa base, jamais verte ou sulfureuse."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Kellerbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "grodziskie-piwo-grodziskie",
      "nom": "Grodziskie / Piwo Grodziskie",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "Grodziskie",
        "Piwo Grodziskie"
      ],
      "paysOrigine": [
        "Pologne"
      ],
      "origine": {
        "libelle": "Grodzisk Wielkopolski",
        "ville": "Grodzisk Wielkopolski",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 2.5,
        "max": 3.3,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 20,
        "max": 35,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 5,
        "max": 12,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Flûte",
          "Pokal"
        ]
      },
      "description": "La Grodziskie est une flûte de fumée polonaise : très claire, faible en alcool, très pétillante, sèche, amère, brassée avec blé fumé au chêne. Elle doit être nerveuse et élégante, pas bacon liquide ni bière de barbecue.",
      "histoireEtOrigines": `Piwo Grodziskie, appelé Grätzer dans les sources germanophones, est une bière historique de Grodzisk Wielkopolski en Pologne. Sa combinaison est singulière : faible degré alcoolique, malt de blé fumé au bois de chêne, forte carbonatation, amertume marquée et fermentation haute propre. Contrairement à une confusion moderne récurrente, le style traditionnel n'est pas acide.

Sa réputation dépasse largement Grodzisk à la fin du XIXe et au début du XXe siècle. La production commerciale régulière décline après la Seconde Guerre mondiale et cesse dans les années 1990, avant le mouvement de reconstruction du XXIe siècle. Les sources techniques historiques décrivent jusqu'à 100 % de malt de blé fumé, une longue ébullition et plusieurs souches de levure.

Le profil moderne de référence conserve cette légèreté spectaculaire : fumée sèche, amertume ferme, mousse très abondante et finale nette.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt de blé fumé au chêne, traditionnellement très majoritaire voire exclusif."
        ],
        "houblons": [
          "Houblons polonais, tchèques ou allemands épicés/herbacés ; amertume soutenue pour la faible densité."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre et très atténuative ; levure Weizen phénolique inadaptée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau modérément dure et sulfatée, favorable à la finale sèche et amère.",
        "empatage": "Empâtage multi-palier traditionnel pour le blé ; attention à la filtration d'un grist très riche en blé.",
        "ebullitionEtHoublonnage": "Ébullition historiquement longue ; houblonnage ferme, sans fruit moderne dominant.",
        "fermentation": "Fermentation haute propre et complète.",
        "maturation": "Clarification puis forte carbonatation, traditionnellement en bouteille ; service jeune.",
        "profilRecherche": "Une bière de blé très pâle, légère, sèche, amère et fortement mousseuse, avec fumée de chêne élégante et aucune acidité volontaire."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Piwo Grodziskie",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Ron Pattinson",
          "edition": null,
          "reference": "Grätzer/Grodziskie historical brewing records",
          "type": "source_historique_secondaire",
          "url": "https://barclayperkins.blogspot.com/2007/12/grodziskiegratzer.html",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "lichtenhainer",
      "nom": "Lichtenhainer",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Thuringe, autour de Lichtenhain",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 4.7,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 5,
        "max": 12,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 6,
        "max": 20,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Fermentation mixte associant levures et micro-organismes acidifiants selon le profil recherché."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Tulipe"
        ]
      },
      "description": "La Lichtenhainer est un drôle de duel : acidité lactique propre, fumée sèche, blé discret, citron, pomme verte et finale très vive. Elle marie deux mondes rarement copains, la sour et la fumée, sans tomber dans la saucisse au vinaigre.",
      "histoireEtOrigines": `Lichtenhainer vient de la région de Lichtenhain et Jena, en Thuringe. À la fin du XIXe siècle, cette bière de blé légère, fumée et acidulée était connue bien au-delà de son petit bassin d'origine. Elle appartient à une ancienne constellation de bières de fermentation haute d'Allemagne centrale aujourd'hui presque disparues.

Son identité tient à une combinaison que peu d'autres styles possèdent simultanément : fumée sèche, acidité lactique propre, faible alcool et haute carbonatation. Le BJCP la rapproche d'une Berliner Weisse ancienne, mais avec fumée ; contrairement au Grodziskie, elle est acide et nettement moins amère.

Les reconstructions modernes doivent éviter deux excès : une acidité de kettle sour agressive et une fumée lourde de charcuterie. Le style historique est fin, vif et très buvable.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt d'orge fumé et malt de blé ; le blé représente souvent environ 30 à 50 %, mais les grists historiques varient."
        ],
        "houblons": [
          "Houblonnage très faible ; l'acidité assure l'essentiel de l'équilibre."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre et bactéries lactiques ; pas de funk Brett requis."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau plutôt douce à modérée pour laisser acidité et fumée lisibles.",
        "empatage": "Empâtage favorisant une bière légère et fortement atténuée.",
        "ebullitionEtHoublonnage": "Houblonnage bas afin de ne pas inhiber inutilement les bactéries lactiques.",
        "fermentation": "Fermentation haute et acidification lactique propre, simultanée ou séquentielle selon la reconstruction.",
        "maturation": "Courte ; le style se sert jeune et vif.",
        "profilRecherche": "Une wheat ale légère, sèche, acidulée et fumée, où citron et feu de bois sec se répondent sans lourdeur ni funk."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Lichtenhainer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Ron Pattinson",
          "edition": null,
          "reference": "Lichtenhainer — History by the Glass",
          "type": "source_historique_secondaire",
          "url": "https://www.beeradvocate.com/articles/11624/lichtenainer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "adambier",
      "nom": "Adambier",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Dortmund, Westphalie",
        "ville": "Dortmund",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 8,
        "max": 14,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 30,
        "max": 50,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 30,
        "max": 70,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 11,
        "temperatureMax": 15,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Snifter",
          "Tulipe"
        ]
      },
      "description": "L’Adambier est une vieille ombre de Dortmund : forte, sombre, maltée, parfois fumée, boisée, acide ou Brettée selon les reconstructions. Elle doit sentir la bière de garde oubliée dans une cave noble, pas le bricolage historique en costume.",
      "histoireEtOrigines": `Adambier était une forte bière de fermentation haute de Dortmund, brassée avant que la ville ne devienne mondialement associée aux lagers Export. Des analyses de la fin du XIXe siècle montrent un moût très dense, un degré voisin de 9 % vol. et une acidité lactique réelle. Les textes la décrivent comme fortement houblonnée et longuement vieillie, parfois plus d'un an.

Cette acidité n'était pas celle d'une sour ale rapide : elle apparaissait pendant une longue maturation, de façon comparable à certaines stock ales ou porters anciens. Le profil moderne reconstruit peut donc associer malt sombre, alcool, amertume, fruits oxydatifs contrôlés et acidité développée avec le temps.

Le style a disparu face à la lager industrielle de Dortmund. Les recréations contemporaines restent interprétatives ; il faut distinguer les données historiques documentées des choix de brasseurs modernes.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malts d'orge riches et sombres ; les sources historiques divergent sur l'usage du blé, donc aucune proportion universelle ne doit être imposée."
        ],
        "houblons": [
          "Houblonnage historiquement très élevé pour une bière forte de garde ; variétés allemandes ou équivalentes."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale ; microflore de garde susceptible de développer une acidité lactique lente."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil minéral modéré, compatible avec une forte amertume et une longue garde.",
        "empatage": "Empâtage riche produisant un moût dense mais suffisamment fermentescible pour supporter une longue maturation.",
        "ebullitionEtHoublonnage": "Ébullition soutenue et houblonnage protecteur important.",
        "fermentation": "Fermentation haute primaire, puis évolution secondaire lente.",
        "maturation": "Historiquement au moins un an pour les versions documentées ; bois ou grands récipients possibles selon reconstruction.",
        "profilRecherche": "Une forte ale sombre de Dortmund, très maltée et houblonnée, avec acidité de garde intégrée et complexité ancienne sans devenir vinaigrée."
      },
      "sources": [
        {
          "organisme": "Ron Pattinson",
          "edition": null,
          "reference": "Adambier — analyses historiques de Dortmund",
          "type": "source_historique_secondaire",
          "url": "https://barclayperkins.blogspot.com/2010/04/adambier.html",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Ron Pattinson",
          "edition": null,
          "reference": "That 1869 Adambier again",
          "type": "source_historique_secondaire",
          "url": "https://barclayperkins.blogspot.com/2018/07/that-1869-adambier-again.html",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "dutch-kuyt-kuit",
      "nom": "Dutch Kuyt / Kuit",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "Kuyt",
        "Kuit"
      ],
      "paysOrigine": [
        "Pays-Bas"
      ],
      "origine": {
        "libelle": "Hollande médiévale",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 8,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 25,
        "max": 35,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 10,
        "max": 40,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Gobelet"
        ]
      },
      "description": "Le Dutch Kuyt est une bière de céréales ancienne : avoine, orge, blé, douceur grainée, corps soyeux, houblon modéré et fermentation haute. L’avoine doit donner une texture ronde, pas transformer le verre en porridge médiéval.",
      "histoireEtOrigines": `Kuyt, Kuit, Koyt ou Keut est un nom ancien des Pays-Bas et des régions voisines, documenté depuis le bas Moyen Âge. Les formes historiques ont beaucoup varié selon les villes, les époques et les règles fiscales. Il serait donc faux d'imaginer une recette médiévale unique restée stable pendant des siècles.

Les reconstructions modernes se concentrent sur une version houblonnée à forte proportion d'avoine, avec orge et blé, inspirée des règlements urbains hollandais. Le style a connu une renaissance récente via des brasseurs néerlandais et des catégories de concours. Ron Pattinson rappelle que le terme s'est appliqué à des bières de force et de composition diverses et que les toutes premières formes pouvaient encore appartenir au monde du gruit avant la généralisation du houblon.

La fiche doit donc présenter le Kuit moderne comme une reconstruction documentée d'une famille historique, pas comme une photographie exacte du XIVe siècle.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Orge maltée, avoine et blé dans des proportions significatives ; les reconstructions modernes mettent souvent l'avoine au premier plan."
        ],
        "houblons": [
          "Houblons européens épicés ou herbacés ; amertume moyenne, sans aromatique moderne envahissante."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre à légèrement fruitée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modéré, laissant céréales et texture s'exprimer.",
        "empatage": "Empâtage multi-palier utile pour gérer avoine et blé et préserver une filtration correcte.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage adaptés au style de base ; les ingrédients particuliers sont ajoutés au moment qui préserve leur expression sans déséquilibrer la bière.",
        "fermentation": "Fermentation haute avec atténuation moyenne à élevée.",
        "maturation": "Courte à modérée ; conditionnement visant une texture céréalière mais non pâteuse.",
        "profilRecherche": "Une ale hollandaise historique/reconstruite, céréalière et souple, où avoine, orge et blé forment le cœur du profil."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Dutch-Style Kuit, Kuyt or Koyt",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Ron Pattinson",
          "edition": null,
          "reference": "Kuit — History by the Glass",
          "type": "source_historique_secondaire",
          "url": "https://www.beeradvocate.com/articles/10251/kuit/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "sahti",
      "nom": "Sahti",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Finlande"
      ],
      "origine": {
        "libelle": "Finlande",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 7,
        "max": 11,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 0,
        "max": 15,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 8,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Sahti haarikka",
          "Gobelet"
        ]
      },
      "description": "La Sahti est une bière-ferme finlandaise massive : seigle possible, genièvre, banane, girofle, malt doux, corps épais, peu de bulles et chaleur alcoolique. Elle est rustique, fraîche, presque primitive, comme si une Weizenbock avait dormi dans une forêt.",
      "histoireEtOrigines": `Sahti est une tradition finlandaise de bière domestique et festive qui a survécu à l'industrialisation beaucoup mieux que de nombreux autres farmhouse beers européens. Elle reste liée aux mariages, fêtes familiales et communautés rurales, avec des recettes transmises localement plutôt qu'un standard national unique.

Le BJCP décrit une bière souvent forte, trouble, peu ou pas houblonnée, filtrée à travers du genévrier ou brassée avec des branches/baies de genévrier, et fréquemment fermentée avec de la levure de boulanger finlandaise. Le moût peut ne pas être bouilli, ce qui change profondément microbiologie, stabilité et expression céréalière. Banane, épices de levure, pain de seigle et genévrier peuvent coexister, mais le résultat ne doit pas être assimilé à une Weizen allemande.

La production commerciale moderne existe, notamment chez Lammin Sahti depuis 1985, mais le cœur culturel du style reste domestique et régional.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt d'orge majoritaire ; seigle fréquent ; avoine ou autres céréales possibles selon tradition familiale."
        ],
        "houblons": [
          "Houblon faible ou absent ; le genévrier assure souvent une partie de l'aromatique et de la structure."
        ],
        "levuresEtMicroorganismes": [
          "Levure de boulanger finlandaise traditionnellement fréquente ; souches ale ou kveik-like possibles dans les interprétations modernes."
        ],
        "ingredientsComplementaires": [
          "Branches et/ou baies de genévrier ; parfois pain ou autres ingrédients domestiques selon tradition."
        ],
        "profilEau": "Eau locale douce à modérément minérale ; le genévrier peut intervenir aussi dans l'eau de rinçage.",
        "empatage": "Empâtage par paliers, souvent avec montée progressive de température et filtration rustique à travers un kuurna garni de genévrier.",
        "ebullitionEtHoublonnage": "Le moût traditionnel peut ne pas être bouilli ou seulement chauffé ; houblonnage absent ou très faible.",
        "fermentation": "Fermentation chaude et rapide, souvent avec levure de boulanger, recherchant un profil fruité-épicé distinctif.",
        "maturation": "Très courte et au froid ; le Sahti se consomme jeune car sa stabilité microbiologique et oxydative est limitée.",
        "profilRecherche": "Une bière finlandaise dense mais vivante, céréalière, fruitée et résineuse, où genévrier et fermentation dominent sans amertume moderne."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Sahti",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lammin Sahti",
          "edition": null,
          "reference": "History and continuous commercial production since 1985",
          "type": "source_producteur_historique",
          "url": "https://www.sahti.fi/en/historiaa",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "gotlandsdricke",
      "nom": "Gotlandsdricke",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Suède"
      ],
      "origine": {
        "libelle": "Île de Gotland",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6,
        "max": 11,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 0,
        "max": 20,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 12,
        "max": 50,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Gobelet",
          "Chope"
        ]
      },
      "description": "La Gotlandsdricke est la cousine suédoise plus sauvage de la Sahti : malt fumé possible, genièvre, douceur amère, corps plein, rusticité, sucre ou miel selon les maisons. Elle se boit jeune, vivante, parfois trouble, avec un accent d’île baltique.",
      "histoireEtOrigines": `Gotlandsdricke — littéralement « boisson de Gotland » — appartient aux traditions de bière domestique nordique de l'île suédoise de Gotland. Comme le Sahti finlandais ou certains kornøl norvégiens, il ne possède pas une recette réglementée unique : chaque ferme ou famille peut avoir son assemblage de céréales, son niveau de fumée, sa quantité de genévrier et sa méthode de filtration.

Le fil conducteur historique est une boisson maltée rustique, souvent brassée avec du malt fumé, du genévrier et parfois du miel ou du sucre. Les branches de genévrier peuvent servir à aromatiser l'eau, constituer un lit filtrant ou être intégrées directement au procédé. La fermentation est traditionnellement chaude et la bière consommée relativement jeune.

Les versions craft contemporaines qui portent ce nom sont donc des interprétations d'une culture de brassage domestique, pas les représentants d'un profil sensoriel fixé au dixième d'IBU.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Tradition domestique de Gotland très variable ; le profil dépend de la ferme, du maltage, de la fumée, du genévrier et de la fermentation.",
        "maltsEtCereales": [
          "Orge maltée ; seigle ou autres céréales possibles ; malt fumé fréquent mais intensité très variable."
        ],
        "houblons": [
          "Houblon historiquement secondaire et variable, parfois combiné au genévrier."
        ],
        "levuresEtMicroorganismes": [
          "Levures domestiques, de boulanger ou ales adaptées à une fermentation chaude."
        ],
        "ingredientsComplementaires": [
          "Genévrier, parfois miel ou sucre ; recettes familiales très diverses."
        ],
        "profilEau": "Eau locale, souvent infusée avec branches de genévrier.",
        "empatage": "Empâtage rustique ou multi-palier ; filtration possible à travers branches de genévrier.",
        "ebullitionEtHoublonnage": "Ébullition variable selon tradition familiale ; certains procédés sont moins standardisés que le brassage industriel.",
        "fermentation": "Fermentation haute et relativement chaude.",
        "maturation": "Courte ; consommation jeune, parfois après quelques semaines de repos.",
        "profilRecherche": "Une farmhouse ale gotlandaise expressive, céréalière, résineuse et éventuellement fumée, sans prétendre à une formule universelle."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Gotlandsdricke / Historical or Indigenous Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lars Marius Garshol",
          "edition": null,
          "reference": "Nordic farmhouse brewing traditions",
          "type": "source_historique_secondaire",
          "url": "https://www.garshol.priv.no/blog/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "breslau-schoeps",
      "nom": "Breslau Schoeps",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Pologne"
      ],
      "origine": {
        "libelle": "Breslau/Wrocław, Silésie",
        "ville": "Wrocław",
        "region": "Silésie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 6.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 15,
        "max": 30,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 8,
        "max": 30,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Tulipe"
        ]
      },
      "description": "Le Breslau Schoeps est une relique silésienne de blé fort : malt de blé, corps ample, douceur céréalière, chaleur, parfois couleur claire à ambrée selon les reconstructions. C’est moins une bière moderne qu’un fantôme de taverne de Wrocław.",
      "histoireEtOrigines": `Schöps ou Schoeps désigne une forte bière de blé historiquement associée à Breslau, aujourd'hui Wrocław en Pologne. Sa réputation est attestée dès l'époque moderne et, aux XVIe-XVIIIe siècles, le nom de Breslauer Schöps devient suffisamment célèbre pour circuler bien au-delà de la Silésie.

Les descriptions historiques ne correspondent pas à une Weissbier bavaroise moderne : la proportion de blé pouvait être très élevée, le malt dominait, et la fermentation n'était pas censée produire la signature banane-girofle d'une levure Weizen. Des versions pâles et sombres ont existé ; les reconstructions modernes peuvent donc différer fortement en couleur tout en partageant une texture pleine et un profil de blé malté.

Comme pour de nombreux styles disparus, les chiffres précis proviennent de sources de différentes périodes. La fiche doit donc présenter Schöps comme une famille historique reconstruite, non comme une recette figée.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Style historique disparu avec versions pâles et sombres ; les reconstructions varient fortement selon la période et la source choisies.",
        "maltsEtCereales": [
          "Très forte proportion de malt de blé, parfois autour de 70-80 % dans les reconstructions ; Pilsner/pale et malts toastés ou sombres selon version."
        ],
        "houblons": [
          "Houblonnage faible à modéré, européen, restant derrière le malt."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale neutre à légèrement fruitée ; profil Weizen banane/girofle non recherché."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau modérément minérale, adaptée à une forte charge de blé.",
        "empatage": "Empâtage multi-palier conseillé pour gérer une proportion élevée de blé et une texture pleine.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage adaptés au style de base ; les ingrédients particuliers sont ajoutés au moment qui préserve leur expression sans déséquilibrer la bière.",
        "fermentation": "Fermentation haute propre.",
        "maturation": "Modérée, afin de fondre la forte richesse céréalière.",
        "profilRecherche": "Une forte wheat ale silésienne riche et maltée, sans phénols de Weissbier, dont la couleur peut aller du pâle au très sombre selon reconstruction."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Breslau-Style Schoeps",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Catalog.beer",
          "edition": null,
          "reference": "Breslau-Style Schoeps — historical synthesis",
          "type": "source_historique_secondaire",
          "url": "https://www.catalog.beer/style/schoeps",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "grape-ale-italian-grape-ale",
      "nom": "Grape Ale / Italian Grape Ale",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "Grape Ale",
        "Italian Grape Ale",
        "IGA"
      ],
      "paysOrigine": [
        "Italie"
      ],
      "origine": {
        "libelle": "Italie",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.8,
        "max": 10,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 10,
        "max": 30,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 4,
        "max": 40,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Calice"
        ]
      },
      "description": "L’Italian Grape Ale ouvre une porte entre brasserie et chai : moût, raisin ou marc rencontrent malt, levure et parfois bois. Elle peut évoquer pêche, raisin, vin blanc, cerise, tanin ou acidité, mais la bière doit rester visible derrière la vigne.",
      "histoireEtOrigines": `L'Italian Grape Ale (IGA) est une création brassicole contemporaine italienne née du dialogue entre deux cultures agricoles majeures du pays : bière et vin. Elle ne correspond pas à une antique tradition de fermentation mixte italienne ; son identité moderne se structure dans le mouvement craft des années 2000-2010, puis gagne une reconnaissance internationale dans les concours.

Le principe est volontairement ouvert : moût, jus, raisins entiers, peaux ou marc peuvent intervenir à différents moments. Le cépage doit rester identifiable sans transformer la bière en vin aromatisé. Certaines versions sont nettes et fermentées uniquement avec Saccharomyces ; d'autres utilisent levures du raisin, Brettanomyces ou élevage sous bois.

Le BJCP conserve une catégorie spécifique Italian Grape Ale pour le contexte italien et une catégorie Grape Ale plus générale ailleurs. L'histoire du style est donc celle d'une innovation craft devenue langage international.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La recette dépend du style de bière, du cépage et de la forme d'incorporation du raisin ; l'identité vient du dialogue bière-raisin.",
        "maltsEtCereales": [
          "Base souvent Pilsner/pale, parfois blé ou malts plus foncés selon le cépage et le projet."
        ],
        "houblons": [
          "Houblonnage bas à modéré pour ne pas masquer le raisin ; profils européens fréquents."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces ; levures œnologiques, levures indigènes, Brettanomyces ou cultures mixtes possibles selon interprétation."
        ],
        "ingredientsComplementaires": [
          "Raisin frais, moût, jus, marc ou peaux ; cépages blancs ou rouges selon projet."
        ],
        "profilEau": "Eau modérée, laissant acidité et minéralité du raisin s'exprimer.",
        "empatage": "Selon style de base ; rechercher un corps assez léger pour que le raisin reste lisible.",
        "ebullitionEtHoublonnage": "Le raisin est souvent ajouté après l'ébullition, en fermentation ou maturation afin de préserver arômes et microbiote éventuel.",
        "fermentation": "Co-fermentation ou fermentations successives bière/raisin ; gestion de l'acidité et des phénols selon microorganismes.",
        "maturation": "Cuve, bouteille ou bois ; certaines IGA gagnent en complexité sur plusieurs mois.",
        "profilRecherche": "Une bière où le cépage est clairement perceptible mais intégré, avec équilibre entre céréale, fermentation, acidité et fruit vinique."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Italian Grape Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/beer-styles/x3-italian-grape-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Italian-Style Grape Ale / Grape Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "fruit-beer",
      "nom": "Fruit Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Fruit Beer n’est pas une bière au sirop : le fruit doit dialoguer avec une base, lui donner parfum, couleur, acidité, tanins ou sécheresse. Framboise, cerise, agrume, pêche ou fruits tropicaux peuvent parler fort, mais pas transformer la bière en jus gazeux.",
      "histoireEtOrigines": `Fruit Beer n'est pas une tradition unique mais une catégorie transversale : des fruits ont été employés dans des boissons fermentées depuis des siècles, mais les techniques et intentions vont du lambic aux framboises jusqu'aux wheat ales américaines modernes. Les guides contemporains utilisent donc « Fruit Beer » comme cadre permettant de juger l'intégration d'un fruit dans un style de base.

L'enjeu n'est pas la quantité de fruit mais la cohérence. Le fruit peut apporter sucre fermentescible, acidité, tanins, couleur, arômes frais, confiturés ou vineux. Selon le moment d'ajout, une grande partie du sucre est fermentée tandis que les composés aromatiques les plus fragiles peuvent être perdus.

Cette fiche ne doit jamais proposer une recette universelle : une cherry stout, une peach saison et une raspberry wheat sont trois architectures entièrement différentes.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Grain bill du style de base ; parfois simplifié pour laisser le fruit dominer."
        ],
        "houblons": [
          "Houblonnage cohérent avec la base mais souvent réduit si le fruit apporte acidité ou amertume tannique."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base ; cultures mixtes possibles si elles font partie du projet déclaré."
        ],
        "ingredientsComplementaires": [
          "Fruits entiers, purée, jus, concentré, zestes ou autres formes déclarées ; qualité sanitaire essentielle."
        ],
        "profilEau": "Selon style de base, avec attention au pH et à l'acidité naturelle du fruit.",
        "empatage": "Selon style de base.",
        "ebullitionEtHoublonnage": "Fruit en fin d'ébullition pour pasteurisation, en whirlpool, fermentation ou maturation selon le compromis arôme/microbiologie recherché.",
        "fermentation": "Prévoir la refermentation des sucres du fruit et l'évolution du pH.",
        "maturation": "Temps de contact suffisant pour extraction puis séparation du fruit ; protection renforcée contre l'oxydation.",
        "profilRecherche": "Une bière dont le fruit est identifiable et intégré au style de base, sans impression de sirop artificiel ni disparition totale de la bière."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Fruit Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/29/29A/fruit-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Fruit Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "field-beer",
      "nom": "Field Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Field Beer fait entrer le potager ou le champ dans la brasserie : légumes, plantes cultivées, racines ou ingrédients agricoles non classiques. Le défi est simple : faire une bière avec un ingrédient de champ, pas une soupe gazeuse en costume houblonné.",
      "histoireEtOrigines": `Field Beer est une catégorie de concours moderne destinée aux bières utilisant des végétaux comestibles qui ne sont pas classés comme fruits au sens brassicole courant : légumes, racines, courges, piments non dominants, fleurs ou autres produits du champ selon les règles du guide employé. Elle ne désigne donc pas une lignée historique précise.

Le terme reflète surtout la diversification du craft brewing et le besoin de juger équitablement des bières à la tomate, betterave, concombre, patate douce ou autres ingrédients végétaux. L'ingrédient doit être reconnaissable et harmonieux avec le style de base.

Il faut éviter de transformer cette catégorie administrative en pseudo-style : couleur, alcool, fermentation et amertume restent ceux de la bière support.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Recette du style de base, éventuellement simplifiée pour mettre en valeur l'ingrédient végétal."
        ],
        "houblons": [
          "Houblonnage ajusté pour ne pas entrer en conflit avec le végétal."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base."
        ],
        "ingredientsComplementaires": [
          "Légume, racine, courge, fleur ou autre produit du champ déclaré ; forme fraîche, rôtie, purée, jus ou infusion selon l'ingrédient."
        ],
        "profilEau": "Selon base ; tenir compte des minéraux, acides et sucres apportés par l'ingrédient.",
        "empatage": "Selon base ; certains végétaux riches en amidon nécessitent cuisson ou conversion enzymatique.",
        "ebullitionEtHoublonnage": "Moment d'ajout choisi selon risque microbiologique, volatilité aromatique et extraction recherchée.",
        "fermentation": "Prévoir la fermentescibilité éventuelle des sucres ajoutés.",
        "maturation": "Courte à modérée, avec protection contre oxydation et végétal cuit indésirable.",
        "profilRecherche": "Une bière où l'ingrédient du champ est clairement identifiable tout en restant intégré à une base brassicole cohérente."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Field Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "pumpkin-squash-pumpkin-spice-beer",
      "nom": "Pumpkin / Squash / Pumpkin Spice Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [
        "Pumpkin Beer",
        "Squash Beer",
        "Pumpkin Spice Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 2.5,
        "max": 12,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": 5,
        "max": 35,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": 10,
        "max": 100,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Pumpkin Beer peut jouer deux partitions : vraie courge douce et terreuse, ou épices d’automne façon cannelle, muscade, gingembre et clou de girofle. Le meilleur verre sent la tarte maîtrisée ; le pire ressemble à une bougie parfumée tombée dans une amber ale.",
      "histoireEtOrigines": `Les bières à la courge possèdent deux histoires souvent confondues. Dans l'Amérique coloniale, la citrouille pouvait servir de source de sucres fermentescibles lorsque le malt était rare ou coûteux. La Pumpkin Beer craft moderne, elle, est surtout une saisonnière d'automne inspirée de la pumpkin pie, utilisant cannelle, muscade, gingembre, clou de girofle ou quatre-épices, parfois avec très peu de caractère réel de courge.

Les guides modernes distinguent utilement la présence de courge de celle d'un simple mélange « pumpkin spice ». Une bière authentiquement centrée sur la courge peut employer chair rôtie ou purée au mash/boil ; une Autumn Seasonal peut surtout évoquer le dessert par les épices.

La fiche couvre ces branches sans prétendre qu'elles partagent une recette historique continue.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base ambrée, brune, porter, wheat ou autre ; malts biscuit/caramel fréquents dans les versions dessert."
        ],
        "houblons": [
          "Houblonnage généralement bas à modéré pour laisser courge et épices lisibles."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base, souvent relativement propre."
        ],
        "ingredientsComplementaires": [
          "Citrouille ou autre courge ; cannelle, muscade, gingembre, girofle, quatre-épices ou vanille selon version."
        ],
        "profilEau": "Plutôt équilibrée, évitant une minéralité agressive avec les épices.",
        "empatage": "Courge rôtie/purée possible au mash ; vérifier la conversion si amidon non gélatinisé.",
        "ebullitionEtHoublonnage": "Épices en fin d'ébullition ou maturation ; dosage prudent car girofle et cannelle deviennent vite dominants.",
        "fermentation": "Selon style de base ; sucres de la courge fermentent largement.",
        "maturation": "Courte à modérée pour intégrer épices et malt ; servir assez frais pour préserver aromatique.",
        "profilRecherche": "Une bière automnale où courge et/ou épices de tarte sont nettes mais intégrées, sans devenir une infusion sucrée masquant la bière."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Pumpkin/Squash Beer and Pumpkin Spice Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Autumn Seasonal Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30B/autumn-seasonal-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "chili-beer",
      "nom": "Chili Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Chili Beer ajoute le piment comme une lame chaude : arôme végétal, fruité, fumé ou terreux, puis chaleur en finale. Elle doit piquer avec précision, pas brûler la table ; le piment est un ingrédient, pas une punition.",
      "histoireEtOrigines": `Chili Beer est une catégorie moderne de bière épicée au piment. L'usage de Capsicum dans la bière n'a pas une origine unique : il existe des boissons fermentées pimentées dans différentes cultures, mais la catégorie craft contemporaine est surtout née de l'expérimentation avec jalapeño, habanero, chipotle, ancho et autres variétés.

Le piment apporte plusieurs dimensions distinctes : arôme végétal ou fruité, fumée éventuelle, saveurs de poivron, et chaleur de capsaïcine. Cette dernière ne se comporte pas comme l'amertume du houblon et peut s'accumuler au fil des gorgées. La réussite dépend donc davantage du dosage et de l'intégration que d'une valeur de Scoville spectaculaire.

La base peut aller d'une lager légère à un stout chocolaté ; il n'existe aucune recette canonique.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Style de base au choix ; bases légères pour piment frais, ambrées ou sombres pour chipotle, ancho ou molé."
        ],
        "houblons": [
          "Houblonnage généralement contenu afin d'éviter la superposition d'amertume et de chaleur."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base."
        ],
        "ingredientsComplementaires": [
          "Piments frais, séchés, fumés, torréfiés ou en teinture ; variété et traitement doivent être déclarés."
        ],
        "profilEau": "Équilibrée ; chlorures peuvent adoucir la perception, sulfates élevés peuvent accentuer une finale agressive.",
        "empatage": "Selon style de base.",
        "ebullitionEtHoublonnage": "Ajout en fin d'ébullition, whirlpool, fermentation ou teinture ; extraction de capsaïcine à surveiller continuellement.",
        "fermentation": "Selon base ; attention aux contaminants apportés par fruits frais.",
        "maturation": "Dégustations fréquentes pendant contact ; retrait du piment dès que l'intensité cible est atteinte.",
        "profilRecherche": "Une bière où le piment apporte arôme et chaleur contrôlée, sans brûlure punitive ni disparition du style de base."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Chili Pepper Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Spice, Herb, or Vegetable Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "herb-and-spice-beer",
      "nom": "Herb and Spice Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [
        "Herb Beer",
        "Spice Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Herb and Spice Beer ouvre l’armoire à aromates : gingembre, cannelle, romarin, cardamome, poivre, fleur, racine ou mélange d’épices. Tout est possible, donc tout est dangereux : l’épice doit compléter la bière, pas la prendre en otage.",
      "histoireEtOrigines": `Herb and Spice Beer est une catégorie transversale moderne, mais l'idée d'aromatiser la bière avec des plantes est bien plus ancienne que le houblon dominant. Avant sa généralisation en Europe, de nombreuses bières étaient assaisonnées par des mélanges de plantes souvent regroupés sous le mot gruit. Les bières modernes épicées ne sont toutefois pas automatiquement des reconstitutions de gruit historique.

Le cadre actuel englobe coriandre, poivre, gingembre, cannelle, genièvre, romarin, basilic, fleurs, graines et une multitude d'autres ingrédients. Le style de base peut être explicite ou volontairement neutre. La règle éditoriale importante est de distinguer histoire générale des plantes brassicoles et recette particulière de la bière présentée.

L'épice doit contribuer à un ensemble cohérent, pas fournir une excuse à un profil médicinal ou parfumé.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base libre selon l'épice : bière pâle pour fraîcheur, ambrée/brune pour épices chaudes, etc."
        ],
        "houblons": [
          "Houblonnage adapté afin de ne pas concurrencer les herbes et épices."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base ; phénols de levure à considérer si l'épice est elle-même poivrée ou giroflée."
        ],
        "ingredientsComplementaires": [
          "Herbes, épices, fleurs, graines, racines ou écorces déclarées."
        ],
        "profilEau": "Selon base ; éviter des ions qui durcissent inutilement amertume ou astringence végétale.",
        "empatage": "Selon style de base.",
        "ebullitionEtHoublonnage": "Ajout précoce pour extraction robuste, tardif pour arôme, ou teinture à froid pour contrôle fin ; chaque plante réagit différemment.",
        "fermentation": "Selon style de base.",
        "maturation": "Repos suffisant pour intégrer les composés aromatiques ; certaines épices se renforcent ou s'atténuent avec le temps.",
        "profilRecherche": "Une bière où l'assaisonnement est identifiable, propre et proportionné, en dialogue avec malt, houblon et fermentation."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Spice, Herb, or Vegetable Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Herb and Spice Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "tea-beer",
      "nom": "Tea Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Tea Beer infuse le malt avec la feuille : thé noir, vert, fumé, floral, oxydé ou tannique. Elle peut apporter bergamote, jasmin, foin, agrume, bois ou astringence fine, mais l’infusion doit rester élégante, pas donner l’impression d’un sachet oublié.",
      "histoireEtOrigines": `Tea Beer est une catégorie craft contemporaine fondée sur l'incorporation de thé ou d'infusions de Camellia sinensis dans une bière. Elle ne désigne pas une tradition brassicole unique : thé noir, oolong, thé blanc, pu-erh et thés fumés produisent des profils entièrement différents.

Le thé apporte tanins, amertume, floralité, notes oxydatives, fumées ou fruitées. Son extraction ressemble davantage à celle d'un ingrédient de cuisine qu'à celle d'un houblon : température, durée et qualité de l'eau changent fortement le résultat. Une infusion trop chaude ou trop longue peut produire une astringence sèche que la bière amplifie encore.

Les brasseurs modernes utilisent infusion à chaud séparée, whirlpool, thé à froid ou teinture, souvent après fermentation pour conserver les arômes les plus délicats.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base pâle, blonde, saison, wheat, porter ou autre selon le thé ; malt simplifié lorsque l'aromatique du thé doit rester central."
        ],
        "houblons": [
          "Houblonnage bas à modéré ; éviter d'empiler tanins du thé et amertume agressive."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base, souvent assez neutre pour les thés fins."
        ],
        "ingredientsComplementaires": [
          "Thé noir, vert, blanc, oolong, pu-erh, thé fumé ou assemblage déclaré."
        ],
        "profilEau": "Eau peu alcaline et modérément minérale, adaptée à l'infusion du thé et au pH de la bière.",
        "empatage": "Selon style de base.",
        "ebullitionEtHoublonnage": "Préférer infusion contrôlée au whirlpool ou à froid pour limiter extraction tannique ; certains thés supportent une infusion séparée puis dosage.",
        "fermentation": "Selon style de base ; ajout post-fermentation fréquent pour préserver aromatique.",
        "maturation": "Courte, à l'abri de l'oxygène ; les arômes floraux du thé peuvent être fragiles.",
        "profilRecherche": "Une bière où le thé est reconnaissable par son parfum et sa structure tannique sans devenir âpre, poussiéreux ou dominant."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Tea Beer / Herb and Spice Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "green-tea-beer",
      "nom": "Green Tea Beer",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "tea-beer",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Green Tea Beer pousse le registre végétal : thé vert, herbe coupée, riz soufflé, algue légère, jasmin ou matcha selon l’approche. Elle doit être fraîche et précise, pas poudreuse, amère ou crayeuse comme un mauvais fond de bol.",
      "histoireEtOrigines": `Green Tea Beer est une branche plus précise de Tea Beer, née de l'expérimentation moderne autour des thés verts japonais, chinois et coréens. Sencha, gyokuro, matcha ou jasmin n'apportent pas les mêmes composés : végétal frais, umami, algue, herbe coupée, agrume, fleurs ou amertume tannique.

La difficulté technique vient de la sensibilité du thé vert à la température et à l'oxydation. Une extraction trop chaude tire rapidement astringence et amertume ; le matcha ajoute en plus matière et couleur. Les meilleures versions utilisent donc infusion séparée, ajout au whirlpool très modéré ou cold steep après fermentation.

Ce n'est pas un style historique japonais traditionnel mais une catégorie craft construite autour d'un ingrédient culturellement fort.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base généralement pâle : Pilsner, wheat, blonde ale ou lager légère pour préserver la délicatesse du thé."
        ],
        "houblons": [
          "Houblons faibles à modérés, souvent floraux ou agrumés, sans amertume agressive."
        ],
        "levuresEtMicroorganismes": [
          "Levure propre ou légèrement fruitée selon base."
        ],
        "ingredientsComplementaires": [
          "Sencha, gyokuro, matcha, thé au jasmin ou autre thé vert clairement déclaré."
        ],
        "profilEau": "Eau douce, faible en alcalinité, adaptée à l'infusion du thé vert.",
        "empatage": "Selon style de base.",
        "ebullitionEtHoublonnage": "Éviter une longue ébullition du thé ; privilégier whirlpool frais, infusion séparée ou ajout à froid.",
        "fermentation": "Selon base ; ajout du thé souvent après fermentation pour protéger les arômes.",
        "maturation": "Courte et sans oxygène, le thé vert s'oxyde vite.",
        "profilRecherche": "Une bière fraîche où thé vert, végétal et umami sont nets mais jamais râpeux ni soupe d'algues."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Green Tea Beer / Tea Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "chocolate-beer",
      "nom": "Chocolate Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Chocolate Beer doit sentir le cacao, pas la barre chocolatée fondue : poudre de cacao, fèves, chocolat noir, vanille possible, malt torréfié ou caramel selon la base. Elle fonctionne très bien avec stouts, porters et brunes, mais doit éviter le sucre collant.",
      "histoireEtOrigines": `Chocolate Beer est une catégorie transversale moderne qui peut utiliser cacao réel ou simplement rechercher une expression chocolatée renforcée. Le chocolat et le cacao entrent dans le brassage craft sous de nombreuses formes : poudre, nibs torréfiés, cacao maigre, chocolat, extrait ou teinture. Les porters et stouts constituent des bases naturelles parce que leurs malts torréfiés possèdent déjà des notes de cacao, mais des bières pâles existent aussi.

La principale difficulté est technique : matière grasse, amertume du cacao, alcalinité, extraction et microbiologie. Les nibs ajoutés en maturation donnent souvent un profil plus aromatique et sec qu'une grande quantité de chocolat sucré.

La catégorie ne doit pas être confondue avec Dessert/Pastry Beer : une Chocolate Beer peut être sèche et amère ; le chocolat est l'ingrédient central, pas nécessairement la sucrosité.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Style de base libre ; chocolate malt, pale chocolate ou malts torréfiés peuvent soutenir le cacao sans être obligatoires."
        ],
        "houblons": [
          "Houblonnage ajusté à l'amertume naturelle du cacao."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base."
        ],
        "ingredientsComplementaires": [
          "Nibs de cacao, poudre, chocolat ou extrait ; vanille possible seulement si déclarée comme complément."
        ],
        "profilEau": "Alcalinité adaptée aux malts sombres et au cacao ; éviter astringence minérale.",
        "empatage": "Selon base ; cacao rarement nécessaire au mash.",
        "ebullitionEtHoublonnage": "Cacao possible en fin de boil, mais ajout en maturation fréquent pour préserver l'arôme et limiter les matières grasses.",
        "fermentation": "Selon style de base.",
        "maturation": "Contact avec nibs contrôlé par dégustation ; protection contre oxydation.",
        "profilRecherche": "Une bière où cacao et chocolat sont authentiques et intégrés, du cacao sec au chocolat riche selon la base, sans gras ni arôme artificiel."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Chocolate or Cocoa Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Spice, Herb, or Vegetable Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "coffee-beer",
      "nom": "Coffee Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Coffee Beer ajoute café, moka, torréfaction, noisette, cacao, fruit noir ou acidité de grain selon la méthode. Elle peut être stout, porter, blonde ou barrel-aged, mais le café doit être frais et intégré, pas vieux marc froid.",
      "histoireEtOrigines": `Coffee Beer est devenue une grande famille du craft brewing parce que café et malts torréfiés partagent naturellement des familles aromatiques : cacao, toast, noisette, caramel et torréfaction. Mais la catégorie ne se limite pas aux stouts : cold brew blondes, cream ales et lagers au café ont démontré que la couleur de la bière n'impose pas celle de l'arôme.

Le choix du café est aussi important que celui du houblon : origine, variété, torréfaction, date de torréfaction et méthode d'extraction changent radicalement la bière. Espresso ajouté chaud peut extraire amertume et huile ; cold brew ou grains entiers en maturation donnent souvent un profil plus doux et aromatique.

La Brewers Association traite Coffee Beer comme catégorie d'ingrédient. Elle peut être sèche, forte, légère ou sucrée ; le café doit être perceptible et intégré au style de base.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base libre ; stouts/porters fréquents mais lagers et ales pâles également possibles."
        ],
        "houblons": [
          "Houblonnage ajusté pour éviter de cumuler amertume du café et du houblon."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base."
        ],
        "ingredientsComplementaires": [
          "Café en grains, moulu, cold brew, espresso ou extrait ; origine et torréfaction idéalement documentées."
        ],
        "profilEau": "Eau équilibrée, avec attention à l'alcalinité et à l'extraction du café.",
        "empatage": "Selon base.",
        "ebullitionEtHoublonnage": "Le café est généralement mieux ajouté hors ébullition afin de limiter amertume et perte d'arômes volatils.",
        "fermentation": "Selon style de base.",
        "maturation": "Cold brew ou grains entiers peuvent être dosés après fermentation ; contact court et dégusté régulièrement.",
        "profilRecherche": "Une bière au café nette, aromatique et intégrée, où torréfaction, fruit du café et base brassicole restent lisibles."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Coffee Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "honey-beer",
      "nom": "Honey Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Honey Beer utilise le miel comme parfum, fermentescible ou signature florale : acacia, châtaignier, fleurs, cire, douceur ou finale plus sèche selon la fermentation. Le miel doit se sentir, mais la bière ne doit pas devenir une hydromel déguisée.",
      "histoireEtOrigines": `Honey Beer est une catégorie transversale qui couvre l'usage du miel dans une bière, mais elle doit être distinguée de l'hydromel : la bière reste structurée par le malt et le brassage. Le miel a longtemps été disponible comme sucre fermentescible et aromatique, mais son emploi moderne va de quelques pourcents pour assécher une bière à des dosages importants destinés à conserver un caractère floral ou variétal.

Le paradoxe du miel est que ses sucres fermentent très bien : ajouté tôt, il peut augmenter l'alcool tout en laissant moins d'arôme de miel que prévu. Les miels délicats sont donc souvent ajoutés tard ou après fermentation primaire, avec gestion sanitaire soigneuse.

La variété compte : acacia, châtaignier, sarrasin, bruyère ou fleurs sauvages produisent des profils extrêmement différents.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base du style choisi ; souvent volontairement simple pour mettre en valeur le miel."
        ],
        "houblons": [
          "Houblonnage cohérent avec le style, généralement modéré si le miel est subtil."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base, avec capacité d'atténuation suffisante pour la charge en sucres simples."
        ],
        "ingredientsComplementaires": [
          "Miel monofloral ou toutes fleurs ; type et moment d'ajout déterminants."
        ],
        "profilEau": "Selon base, sans minéralité excessive qui écraserait les notes florales.",
        "empatage": "Selon base ; le miel ne nécessite pas de conversion enzymatique.",
        "ebullitionEtHoublonnage": "Ajout en ébullition pour fermentescibilité maximale mais moins d'arôme ; ajout tardif ou post-fermentation pour préserver les volatils.",
        "fermentation": "Prévoir une attenuation accrue et une remontée d'activité lors d'un ajout tardif de miel.",
        "maturation": "Repos suffisant pour fondre alcool et notes florales.",
        "profilRecherche": "Une bière dont le miel est identifiable par ses notes florales, herbacées ou gourmandes sans basculer dans l'hydromel ni le sucre brut."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Honey Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Alternative Sugar Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/31/31B/alternative-sugar-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "alternative-grain-beer",
      "nom": "Alternative Grain Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "L’Alternative Grain Beer donne la parole aux céréales secondaires : seigle, avoine, épeautre, sarrasin, millet, sorgho, riz ou autres grains. Selon le choix, elle devient plus sèche, plus noisettée, plus soyeuse, plus rustique ou plus nerveuse.",
      "histoireEtOrigines": `Alternative Grain Beer est une catégorie moderne conçue pour les bières où une céréale inhabituelle apporte un caractère sensoriel significatif. Le BJCP cite notamment seigle, avoine, sarrasin, épeautre, millet, sorgho ou riz, employés en complément ou parfois comme base complète dans des bières sans gluten.

Cette catégorie ne signifie pas que ces céréales sont nouvelles dans l'histoire brassicole — beaucoup sont au contraire très anciennes. Ce qui est moderne est le cadre de classification transversal, indépendant d'une tradition géographique particulière.

La recette doit donc être expliquée à partir de la céréale choisie : protéines, bêta-glucanes, absence de gluten, pouvoir diastasique, gélatinisation et texture peuvent imposer des procédés très différents.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Céréale alternative déclarée : seigle, avoine, sarrasin, épeautre, millet, sorgho, riz ou autre ; malt d'orge possible selon concept."
        ],
        "houblons": [
          "Selon style de base."
        ],
        "levuresEtMicroorganismes": [
          "Selon style de base ; enzymes ou nutriments supplémentaires possibles pour grists non conventionnels."
        ],
        "ingredientsComplementaires": [
          "Enzymes de brassage possibles lorsque la céréale apporte peu ou pas de pouvoir diastasique."
        ],
        "profilEau": "Adaptée à la céréale et au style ; pH de mash à surveiller particulièrement avec matières premières atypiques.",
        "empatage": "Paliers, cereal mash, enzymes ou repos bêta-glucanes selon la céréale ; filtration parfois difficile.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage adaptés au style de base ; les ingrédients particuliers sont ajoutés au moment qui préserve leur expression sans déséquilibrer la bière.",
        "fermentation": "Selon base, avec attention aux nutriments du moût.",
        "maturation": "Selon style de base.",
        "profilRecherche": "Une bière clairement marquée par la céréale alternative, mais techniquement propre et toujours lisible comme bière."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Alternative Grain Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/31/31A/alternative-grain-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Alternative Grain Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "alternative-sugar-beer",
      "nom": "Alternative Sugar Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "L’Alternative Sugar Beer utilise miel, mélasse, sirop d’érable, sucre brun, lactose ou autre sucrant comme moteur aromatique. Le sucre peut alléger, enrichir, parfumer ou arrondir ; s’il sent cru ou artificiel, la magie devient colle.",
      "histoireEtOrigines": `Alternative Sugar Beer est un cadre de concours contemporain pour les bières dont un sucre ou édulcorant distinctif contribue réellement au goût. Le BJCP englobe miel, cassonade, sucre inverti, mélasse, treacle, sirop d'érable, sorgho, lactose, polyols et autres édulcorants.

Le terme « sucre » ne signifie pas nécessairement bière sucrée. Un sucre très fermentescible peut au contraire assécher le corps, tandis que lactose ou certains édulcorants laissent une douceur résiduelle. Mélasse, érable et sucres bruns apportent également couleur et arômes propres.

La catégorie est donc une architecture de recette et non un style historique. Le sucre déclaré doit laisser une empreinte identifiable et équilibrée dans la bière finale.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Grist du style de base."
        ],
        "houblons": [
          "Selon style de base, ajusté à la douceur ou aux arômes du sucre utilisé."
        ],
        "levuresEtMicroorganismes": [
          "Levure adaptée à la base et à la charge fermentescible supplémentaire."
        ],
        "ingredientsComplementaires": [
          "Mélasse, érable, sucre inverti, cassonade, lactose, sorgho ou autre sucre/édulcorant déclaré."
        ],
        "profilEau": "Selon base.",
        "empatage": "Selon base ; les sucres simples sont généralement ajoutés hors mash.",
        "ebullitionEtHoublonnage": "Ajout au boil, whirlpool ou fermentation selon volatilité et risque de caramélisation.",
        "fermentation": "Calculer l'effet réel du sucre sur densité finale, alcool et osmolarité.",
        "maturation": "Selon base ; les fortes bières au sucre peuvent nécessiter une garde plus longue.",
        "profilRecherche": "Une bière où le sucre choisi apporte un caractère reconnaissable et harmonieux, qu'il augmente la sécheresse ou la douceur."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Alternative Sugar Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/31/31B/alternative-sugar-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Alternative Sugar Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "autumn-seasonal-beer",
      "nom": "Autumn Seasonal Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "L’Autumn Seasonal Beer condense l’automne : malt ambré, caramel, courge, épices chaudes, noix, fruits mûrs, feuillage humide ou dessert selon la base. Elle doit être réconfortante, pas saturée de cannelle comme une boutique de bougies en octobre.",
      "histoireEtOrigines": `Autumn Seasonal Beer est une catégorie moderne d'ambiance plutôt qu'une tradition unique. Elle rassemble les bières qui évoquent récolte, temps frais et saison automnale par la couleur, le malt, les courges, les sucres bruns et les épices. Aux États-Unis, la popularité des pumpkin ales a fortement modelé cette catégorie, mais toutes les Autumn Seasonal ne contiennent pas de citrouille.

Le BJCP décrit surtout une bière maltée, épicée et cohérente, souvent ambrée à brune, avec houblon discret. L'objectif est de créer une impression de saison sans laisser une seule épice dominer.

La recette reste entièrement dépendante du concept déclaré : bière à la courge, harvest ale, brown ale épicée ou autre.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base souvent ambrée à brune : pale, Munich, Vienna, crystal, biscuit ou malts toastés."
        ],
        "houblons": [
          "Houblonnage généralement discret."
        ],
        "levuresEtMicroorganismes": [
          "Levure propre à légèrement fruitée selon base."
        ],
        "ingredientsComplementaires": [
          "Courge, cannelle, muscade, gingembre, sucre brun, érable ou autres ingrédients évoquant l'automne."
        ],
        "profilEau": "Équilibrée, soutenant malt et épices sans dureté.",
        "empatage": "Empâtage moyen à chaud pour une texture légèrement riche si le concept le demande.",
        "ebullitionEtHoublonnage": "Épices tardives et dosage prudent ; courges cuites possibles au mash ou au boil.",
        "fermentation": "Selon base, avec fermentation suffisamment complète pour éviter une lourdeur collante.",
        "maturation": "Quelques semaines pour fondre malt et épices.",
        "profilRecherche": "Une bière automnale maltée et harmonieuse évoquant la récolte et les épices chaudes sans devenir une bougie parfumée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Autumn Seasonal Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30B/autumn-seasonal-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Autumn Seasonal Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "winter-seasonal-beer",
      "nom": "Winter Seasonal Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Winter Seasonal Beer sort le manteau : malt riche, alcool possible, fruits secs, épices, caramel, chocolat, pain d’épices ou agrumes confits. Elle doit réchauffer sans devenir lourde, comme un feu de cheminée qui connaît ses limites.",
      "histoireEtOrigines": `Winter Seasonal Beer, Christmas Ale ou Holiday Beer est une catégorie moderne mais nourrie de traditions commerciales plus anciennes de bières fortes brassées pour l'hiver. Les versions actuelles associent souvent base ambrée ou sombre, degré élevé, fruits secs, sucres foncés et épices rappelant pâtisseries et fêtes de fin d'année.

Le BJCP ne prescrit pas un mélange d'épices : il demande surtout que la bière évoque clairement la saison froide et que malt, alcool, fruits et épices soient intégrés. Certaines grandes winter warmers britanniques ne sont presque pas épicées ; d'autres bières de Noël belges ou américaines le sont fortement.

La fiche doit donc rester transversale et ne pas réduire toute Winter Seasonal à cannelle-girofle.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base souvent ambrée à noire, maltée et relativement forte ; Munich, crystal, malts toastés ou torréfiés selon concept."
        ],
        "houblons": [
          "Houblonnage faible à modéré, généralement secondaire."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base, parfois fruitée dans les versions fortes."
        ],
        "ingredientsComplementaires": [
          "Épices, fruits secs, mélasse, miel, sucre brun ou écorces selon concept ; aucun ingrédient universel."
        ],
        "profilEau": "Selon base, généralement ronde plutôt que fortement sulfatée.",
        "empatage": "Empâtage donnant assez de corps pour la chaleur hivernale sans sucrosité excessive.",
        "ebullitionEtHoublonnage": "Épices et sucres ajoutés de façon contrôlée ; ébullition soutenue pour les strong ales.",
        "fermentation": "Pitch et oxygénation adaptés aux densités élevées ; température maîtrisée.",
        "maturation": "Plusieurs semaines à plusieurs mois selon force, afin d'intégrer alcool et épices.",
        "profilRecherche": "Une bière d'hiver riche, chaleureuse et cohérente, festive sans excès d'épices ni alcool brûlant."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Winter Seasonal Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30C/winter-seasonal-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Winter Seasonal Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "ginjo-beer-sake-yeast-beer",
      "nom": "Ginjo Beer / Sake-Yeast Beer",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "Ginjo Beer",
        "Sake-Yeast Beer"
      ],
      "paysOrigine": [
        "Japon"
      ],
      "origine": {
        "libelle": "Japon",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5,
        "max": 12,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 5,
        "max": 35,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 4,
        "max": 30,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Verre à saké"
        ]
      },
      "description": "La Ginjo Beer emprunte au saké son parfum de fruit clair : poire, melon, pomme, raisin, fleurs, riz ou alcool délicat selon la levure. Elle doit rester bière, mais avec cette élégance fermentaire japonaise qui remplace le houblon par une brume aromatique.",
      "histoireEtOrigines": `Ginjo Beer / Sake-Yeast Beer est une catégorie hybride contemporaine reconnue par la Brewers Association. Elle ne prétend pas être du saké : la boisson reste une bière, mais utilise une levure de saké et/ou des enzymes issues du koji afin de produire des caractères inspirés de la fermentation japonaise.

Les souches de saké peuvent donner des esters fruités rappelant pomme, poire ou melon et une fermentation très atténuée. Le koji, grâce à ses enzymes amylolytiques, peut modifier profondément la disponibilité des sucres lorsqu'il est utilisé sur du riz ou d'autres céréales. Certaines versions recherchent aussi une légère impression umami ou terreuse.

La catégorie est expérimentale et très ouverte : base lager, ale, rice beer ou strong beer. Elle doit être décrite par son procédé réel, pas uniquement par un marketing « Japanese-style ».`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Malt d'orge selon base ; riz fréquent mais non obligatoire."
        ],
        "houblons": [
          "Houblonnage bas à modéré, en harmonie avec le caractère sake-like."
        ],
        "levuresEtMicroorganismes": [
          "Levure de saké et/ou levure de bière selon co-fermentation ; tolérance alcool et nutrition à surveiller."
        ],
        "ingredientsComplementaires": [
          "Koji ou enzymes de koji possibles ; riz poli ou autres substrats selon projet."
        ],
        "profilEau": "Plutôt douce à modérée pour préserver finesse et fermentation.",
        "empatage": "Selon base ; si koji utilisé, tenir compte de son activité enzymatique et des températures de saccharification.",
        "ebullitionEtHoublonnage": "Houblonnage retenu ; gestion du riz adaptée à sa gélatinisation.",
        "fermentation": "Fermentation parfois plus lente ou plus froide, selon souche de saké ; gestion attentive de l'alcool et des nutriments.",
        "maturation": "Conditionnement propre, souvent avec carbonatation élevée dans le cadre BA.",
        "profilRecherche": "Une bière clairement marquée par des caractères de levure/koji rappelant le saké, fruités et parfois umami, mais restant structurée comme une bière."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Ginjo Beer or Sake-Yeast Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "World Beer Cup",
          "edition": "2026",
          "reference": "2026 Experimental Beer — Ginjo Beer or Sake-Yeast Beer",
          "type": "guide_de_style",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "fresh-hop-beer",
      "nom": "Fresh Hop Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [
        "Wet Hop Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 10,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": 20,
        "max": 100,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": 4,
        "max": 80,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Fresh Hop Beer capture le houblon encore vert : herbe fraîche, résine humide, agrume vif, fleurs, chlorophylle, fruits verts et intensité saisonnière. Elle doit sentir la récolte, pas le gazon tondu dans une IPA trop pressée.",
      "histoireEtOrigines": `Fresh Hop Beer est une bière saisonnière du moment de la récolte. Contrairement aux bières utilisant des pellets stockés, elle met en avant des cônes fraîchement récoltés ou des houblons séchés très récemment. Le mouvement est particulièrement visible dans le Nord-Ouest américain, près des houblonnières, où la distance entre champ et cuve peut se compter en heures.

La Brewers Association définit les fresh hop beers autour de houblons récoltés très récemment, tandis que Sierra Nevada distingue « wet hops » non séchés utilisés presque immédiatement et « fresh hops » séchés mais employés très vite. La brasserie lance Celebration en 1981 et son Northern Hemisphere Harvest Wet Hop IPA en 1996, deux repères importants de la culture moderne du houblon de récolte.

Le caractère végétal, chlorophyllien ou herbe fraîche est acceptable s'il reste harmonieux. Ces bières perdent rapidement leur singularité : la fraîcheur fait partie du style.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base pale ale, IPA, lager ou autre, souvent simple pour mettre en avant le houblon."
        ],
        "houblons": [
          "Cônes fraîchement récoltés, non séchés ou très récemment séchés ; variété et délai récolte-brassage déterminants."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base, généralement propre ou modérément fruitée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Souvent sulfates modérés à élevés pour les bases houblonnées, mais adaptée à la variété et au style.",
        "empatage": "Selon style de base.",
        "ebullitionEtHoublonnage": "Ajouts massifs possibles en kettle et whirlpool ; le volume d'eau contenu dans les wet hops et leur absorption doivent être anticipés.",
        "fermentation": "Selon base ; dry hopping frais possible mais gestion de l'oxygène essentielle.",
        "maturation": "Très courte : conditionner et consommer rapidement pour préserver les composés de récolte.",
        "profilRecherche": "Une bière intensément fraîche, verte et aromatique, exprimant le houblon de récolte sans végétal cru excessif."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Fresh Hop Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Wet hops and fresh hops — harvest guide",
          "type": "source_producteur_technique",
          "url": "https://sierranevada.com/blog/our-beer/your-harvest-guide-wet-hops-and-fresh-hops",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "wood-and-barrel-aged-beer",
      "nom": "Wood- and Barrel-Aged Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [
        "Wood-Aged Beer",
        "Barrel-Aged Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Wood- and Barrel-Aged Beer laisse le bois écrire dans la bière : vanille, chêne, toast, coco, tanins, vin, bourbon, rhum ou oxydation douce selon le fût. Le bois doit apporter profondeur et structure, pas coller une planche aromatisée sur le style.",
      "histoireEtOrigines": `Wood and Barrel Aged Beer est une catégorie de procédé : la bière acquiert une partie significative de son profil au contact du bois ou d'un fût ayant contenu un autre liquide. Le bois a longtemps été un simple matériau de stockage et de transport, mais le craft brewing moderne en a fait un outil aromatique volontaire.

Chêne neuf, fût de bourbon, whisky, rhum, vin, porto, sherry ou tequila produisent des résultats très différents. Le bois peut apporter vanille, noix de coco, épices, tanins et oxygénation lente ; l'ancien contenu apporte alcool, fruits, caramel ou notes oxydatives. La Brewers Association insiste sur l'équilibre entre bière de base et contribution du contenant.

Cette fiche exclut les sour beers lorsque l'acidité bactérienne devient constitutive : elles sont classées ailleurs.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Recette du style de base ; les styles maltés ou forts supportent souvent mieux un bois intense, mais aucune base n'est obligatoire."
        ],
        "houblons": [
          "Selon style de base ; houblon très aromatique peut se dégrader pendant de longues gardes."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base ; microflore non souhaitée à contrôler si le projet n'est pas sour/wild."
        ],
        "ingredientsComplementaires": [
          "Bois, copeaux, spirales ou fûts ; nature du bois, chauffe et liquide précédemment contenu doivent être documentés."
        ],
        "profilEau": "Selon style de base.",
        "empatage": "Selon style de base.",
        "ebullitionEtHoublonnage": "Selon style de base.",
        "fermentation": "Fermentation primaire complète avant élevage dans la majorité des projets.",
        "maturation": "De quelques semaines à plusieurs années selon force, fût et surface de contact ; dégustations régulières indispensables.",
        "profilRecherche": "Une bière où le bois et/ou l'ancien contenu du fût enrichissent la base sans la transformer en simple extrait de barrique."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wood- and Barrel-Aged Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Wood-Aged Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/33/33B/specialty-wood-aged-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "wood-and-barrel-aged-strong-beer",
      "nom": "Wood- and Barrel-Aged Strong Beer",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "wood-and-barrel-aged-beer",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 7,
        "max": 16,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": 10,
        "max": 100,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": 8,
        "max": 120,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Wood- and Barrel-Aged Strong Beer met une bière forte en fût : alcool, malt riche, vanille, chêne, caramel, fruits secs, spiritueux et chaleur arrondie. Le fût doit civiliser la force, pas transformer la bière en whisky dilué.",
      "histoireEtOrigines": `Wood and Barrel Aged Strong Beer applique l'élevage sous bois à des bières déjà puissantes. Le couple alcool + bois est historiquement plausible — de nombreuses bières fortes ont voyagé ou vieilli en tonneaux — mais la catégorie moderne de concours est surtout issue du craft brewing et de la disponibilité de fûts de spiritueux.

L'alcool extrait efficacement vanilline, lactones, tanins et composés de l'ancien contenu. Une Imperial Stout, Barley Wine, Strong Ale ou Doppelbock peut donc gagner énormément de complexité, mais aussi devenir brûlante, boisée ou sucrée si le vieillissement est mal maîtrisé.

La réussite repose sur l'intégration : le style de base doit rester identifiable, même après plusieurs mois ou années de garde.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base forte au choix : barley wine, imperial porter/stout, strong ale, bock ou autre."
        ],
        "houblons": [
          "Houblonnage adapté à la base ; prévoir son atténuation aromatique pendant la garde."
        ],
        "levuresEtMicroorganismes": [
          "Levure robuste et tolérante à l'alcool pour fermentation primaire complète."
        ],
        "ingredientsComplementaires": [
          "Fûts de whisky, bourbon, rhum, vin ou autres ; bois neuf ou alternatif possible."
        ],
        "profilEau": "Selon style de base, avec minéralité évitant d'accentuer chaleur et tanins.",
        "empatage": "Empâtage équilibrant richesse et fermentescibilité ; éviter une densité finale excessive avant vieillissement.",
        "ebullitionEtHoublonnage": "Ébullition souvent longue pour concentration dans les strong beers ; houblonnage calibré sur la garde.",
        "fermentation": "Pitch massif, oxygénation et nutriments adaptés aux fortes densités.",
        "maturation": "Élevage long en bois, puis éventuel assemblage entre fûts pour ajuster alcool, tanins et douceur.",
        "profilRecherche": "Une bière forte profondément intégrée au bois, chaleureuse mais non brûlante, complexe sans être dominée par vanille ou spiritueux."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wood- and Barrel-Aged Strong Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Specialty Wood-Aged Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/33/33B/specialty-wood-aged-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "wood-and-barrel-aged-strong-stout",
      "nom": "Wood- and Barrel-Aged Strong Stout",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "wood-and-barrel-aged-beer",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 8,
        "max": 18,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": 30,
        "max": 100,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": 70,
        "max": 160,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Wood- and Barrel-Aged Strong Stout est le grand puits noir du fût : café, cacao, mélasse, vanille, bourbon, chêne, fruits noirs, chaleur et torréfaction. Elle peut être immense, mais elle doit rester intégrée, pas juste un tonneau de pétrole sucré.",
      "histoireEtOrigines": `Barrel-Aged Strong Stout est devenue l'une des signatures du craft américain : une Imperial Stout riche et torréfiée élevée dans des fûts, souvent de bourbon. Ce n'est pas un style ancien indépendant, mais la rencontre moderne entre stout fort et culture américaine du whiskey barrel.

Les composés du chêne et du bourbon — vanille, noix de coco, caramel, alcool, épices — se marient naturellement avec cacao, café et fruits noirs d'une forte stout. Le risque est de perdre l'équilibre sous la sucrosité, le bois ou l'alcool. Les versions les plus abouties utilisent assemblage de plusieurs fûts et longues périodes de repos.

La fiche doit donc être lue comme une sous-catégorie de procédé appliquée à une strong stout, pas comme une recette universelle d'Imperial Stout.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base Imperial/Strong Stout : pale malt, roasted barley, chocolate, black malt et malts caramel selon profil."
        ],
        "houblons": [
          "Amertume suffisante pour équilibrer densité et vieillissement ; aromatique secondaire."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale tolérante à l'alcool et fortement atténuative."
        ],
        "ingredientsComplementaires": [
          "Fûts de bourbon, whiskey, rhum ou vin ; adjuncts éventuels seulement s'ils sont déclarés."
        ],
        "profilEau": "Alcalinité adaptée aux malts torréfiés ; chlorures et sulfates équilibrés pour ne pas durcir le bois.",
        "empatage": "Empâtage riche mais avec assez de fermentescibilité pour éviter le sirop après barrique.",
        "ebullitionEtHoublonnage": "Ébullition soutenue ; houblonnage structurel robuste.",
        "fermentation": "Fermentation complète avant transfert, avec gestion de la chaleur alcoolique.",
        "maturation": "Plusieurs mois à plus d'un an en fût selon intensité ; assemblage fréquent pour harmoniser les lots.",
        "profilRecherche": "Une strong stout profonde où torréfaction, chocolat, alcool et fût se fondent en un ensemble ample, jamais boisé ou sucré à l'excès."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wood- and Barrel-Aged Strong Stout",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Wood-Aged Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/33/33B/specialty-wood-aged-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "wood-and-barrel-aged-dessert-pastry-beer",
      "nom": "Wood- and Barrel-Aged Dessert / Pastry Beer",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "wood-and-barrel-aged-beer",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 7,
        "max": 16,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": 10,
        "max": 70,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": 25,
        "max": 140,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Wood- and Barrel-Aged Dessert Beer pousse le fût vers la pâtisserie : vanille, cacao, noix de coco, érable, café, caramel, biscuit, bourbon ou fruits confits. Le plaisir doit rester brassicole ; sinon, on sert un gâteau liquide avec une mousse de regret.",
      "histoireEtOrigines": `Wood and Barrel Aged Dessert/Pastry Beer est une catégorie très récente, née de la rencontre de deux tendances craft : bières fortes imitant desserts/confiseries et élevage en fûts de spiritueux. Elle ne possède aucune généalogie historique autonome et doit être présentée franchement comme une construction contemporaine.

Les bases sont souvent des stouts très denses enrichies de cacao, café, vanille, coco, noix, érable, fruits ou lactose, puis élevées en bourbon/whiskey barrels. Le défi est considérable : chaque couche — malt, sucre, alcool, dessert, bois — ajoute intensité et peut faire basculer la bière dans la saturation.

La Brewers Association sépare les versions barrel-aged des Dessert/Pastry Beers non élevées sous bois, ce qui confirme que le fût constitue ici un procédé distinctif majeur.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Base forte sombre, souvent stout ou porter, avec malts caramel et torréfiés."
        ],
        "houblons": [
          "Houblonnage faible à modéré, principalement pour contenir la sucrosité."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale tolérante à l'alcool."
        ],
        "ingredientsComplementaires": [
          "Cacao, café, vanille, coco, fruits, noix, érable, lactose ou autres ingrédients dessert ; fût de spiritueux ou de vin."
        ],
        "profilEau": "Ronde et adaptée aux malts sombres, sans excès minéral.",
        "empatage": "Empâtage souvent riche, mais la fermentescibilité doit empêcher une finale totalement sirupeuse.",
        "ebullitionEtHoublonnage": "Sucres et ingrédients stables peuvent être ajoutés au boil ; aromatiques fragiles plutôt après fermentation.",
        "fermentation": "Fermentation très robuste et complète avant barrique.",
        "maturation": "Élevage en fût puis ajout/ajustement éventuel des ingrédients dessert ; assemblage fortement recommandé.",
        "profilRecherche": "Une bière dessert barrel-aged opulente mais structurée, où base, ingrédients gourmands et fût restent chacun identifiables sans saturation."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wood- and Barrel-Aged Dessert or Pastry Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Dessert or Pastry Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "aged-beer",
      "nom": "Aged Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "L’Aged Beer met le temps au premier plan : oxydation noble, sherry, cuir, noix, fruits secs, miel sombre, madérisation ou fondu alcoolique. Le vieillissement doit complexifier la bière, pas la fatiguer ; vieux ne veut pas dire poussiéreux.",
      "histoireEtOrigines": `Aged Beer est une catégorie de maturation prolongée, non un style de base. La Brewers Association l'utilise pour des bières vieillies plus d'un an dans des contenants non boisés, afin que le temps lui-même devienne une composante sensorielle mesurable.

Le vieillissement transforme la bière : l'aromatique de houblon décline, les composés de malt et d'alcool évoluent, des notes de fruits secs, sherry, miel, cuir ou porto peuvent apparaître, tandis qu'une oxydation excessive donne carton, sauce soja ou lourdeur. Toutes les bières ne vieillissent donc pas positivement.

Les fortes bières, profils maltés, torréfiés, fumés ou complexes sont généralement de meilleurs candidats que les lagers légères ou IPA très aromatiques. Le stockage — température, oxygène, contenant — compte autant que la recette.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale : la recette dépend du style de base, l'élément distinctif étant l'ingrédient ou le procédé déclaré.",
        "maltsEtCereales": [
          "Style de base au choix ; les bières fortes et maltées supportent généralement mieux une longue garde."
        ],
        "houblons": [
          "Houblons selon base, en anticipant la perte progressive d'arôme et l'évolution de l'amertume."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base ; levure résiduelle peut contribuer à l'évolution en bouteille."
        ],
        "ingredientsComplementaires": [
          "Aucun ingrédient obligatoire ; le temps et les conditions de stockage sont le facteur distinctif."
        ],
        "profilEau": "Selon style de base.",
        "empatage": "Selon style de base.",
        "ebullitionEtHoublonnage": "Selon style de base.",
        "fermentation": "Fermentation complète et saine avant vieillissement ; éviter d'enfermer des défauts sous prétexte de garde.",
        "maturation": "Plus d'un an dans le cadre BA, en bouteille, canette, keg ou autre récipient non boisé ; température stable et oxygène limité.",
        "profilRecherche": "Une bière dont l'âge apporte profondeur et intégration sans oxydation papery, sauce soja ou disparition complète du style initial."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Aged Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "rauchbier-smoke-beer",
      "nom": "Rauchbier / Smoke Beer",
      "collectionId": 8,
      "nature": "F",
      "parentPrincipalId": null,
      "aliases": [
        "Rauchbier",
        "Smoke Beer",
        "Smoked Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Tradition de Bamberg et interprétations internationales",
        "ville": "Bamberg",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 10,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 10,
        "max": 50,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 6,
        "max": 80,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Tulipe"
        ]
      },
      "description": "La Smoke Beer parle en fumée : hêtre, chêne, aulne, érable, bois fruitier, bacon léger, feu de bois ou toast sec selon le malt. Le principe est simple et cruel : la fumée doit épouser la bière, pas camper dessus avec ses bottes sales.",
      "histoireEtOrigines": `Rauchbier signifie bière fumée, mais son importance historique dépasse le seul Bamberg : avant l'invention et la diffusion des séchoirs à malt chauffés indirectement, le malt séché au-dessus d'un feu pouvait naturellement prendre un caractère fumé. La généralisation des malts non fumés à l'époque moderne a transformé cette ancienne réalité technique en spécialité.

Bamberg est le grand lieu de continuité. Schlenkerla rappelle qu'une installation de séchage sans fumée est brevetée en 1635 et que la plupart des régions abandonnent progressivement le goût de fumée, tandis que certaines brasseries bambergiennes conservent la chauffe au feu direct. Le récit populaire d'une brasserie incendiée dont le malt fumé aurait été apprécié est explicitement présenté par Schlenkerla comme une légende.

Aujourd'hui, « Smoke Beer » est une famille : Märzen Rauchbier, Helles fumée, Weizen fumée, Bock fumée ou autres styles. La fumée doit venir du malt ou du procédé, pas d'un défaut phénolique de fermentation.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille transversale : toute base peut être fumée. La recette dépend du style de base et du bois/malt fumé utilisé.",
        "maltsEtCereales": [
          "Malt fumé au hêtre, chêne ou autre bois adapté, associé aux malts du style de base."
        ],
        "houblons": [
          "Selon style de base ; généralement secondaires lorsque la fumée est importante."
        ],
        "levuresEtMicroorganismes": [
          "Levure du style de base ; éviter phénols de levure qui seraient confondus avec la fumée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Selon base.",
        "empatage": "Selon style de base ; proportion de malt fumé déterminée par son intensité réelle.",
        "ebullitionEtHoublonnage": "Selon base ; la fumée provient surtout du malt, non d'un ajout d'arôme artificiel.",
        "fermentation": "Propre, afin que la fumée reste lisible et non médicinale.",
        "maturation": "Selon base ; lagering fréquent pour les Rauchbiers bambergiennes.",
        "profilRecherche": "Une bière fumée harmonieuse où feu de bois et style de base restent équilibrés, sans cendre, plastique ni bacon agressif."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Smoke Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Smoked Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/32/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schlenkerla",
          "edition": null,
          "reference": "History of Rauchbier and Bamberg smoke-malt tradition",
          "type": "source_producteur_historique",
          "url": "https://www.schlenkerla.de/rauchbier/geschichte.html",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "weiss-rauchbier",
      "nom": "Weiss Rauchbier",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "rauchbier-smoke-beer",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bavière et Franconie",
        "ville": null,
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.3,
        "max": 6,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 10,
        "max": 25,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 6,
        "max": 40,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Weizen",
          "Seidel"
        ]
      },
      "description": "La Weiss Rauchbier croise blé bavarois et fumée : banane, girofle, pain frais, mousse, blé souple et fumée de bois. Elle doit rester une Weizen avant tout, avec fumée en manteau, pas en incendie de grange.",
      "histoireEtOrigines": `Weiss Rauchbier combine le profil fermentaire d'une Weissbier bavaroise avec du malt fumé. Ce n'est pas une grande lignée historique autonome comparable à la Märzen Rauchbier de Bamberg ; c'est plutôt une hybridation moderne et logique entre deux traditions allemandes bien établies.

La difficulté est sensorielle : banane, girofle, blé et fumée occupent tous beaucoup d'espace aromatique. Une fumée trop phénolique peut se confondre avec le girofle de la levure ou donner une impression médicinale. Les meilleures versions laissent la texture de blé et la fermentation Weizen guider la bière, la fumée jouant un rôle complémentaire.

La catégorie doit donc être traitée comme une Weissbier fumée et non comme une smoke beer générique à laquelle on ajouterait artificiellement des esters.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt de blé important ; Pilsner et/ou Munich ; fraction de malt fumé au hêtre ou autre bois propre."
        ],
        "houblons": [
          "Houblons allemands faibles, comme dans une Weissbier classique."
        ],
        "levuresEtMicroorganismes": [
          "Levure Weizen produisant esters banane et phénols girofle de façon contrôlée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérément minérale.",
        "empatage": "Paliers de blé et éventuellement ferulic rest selon profil de levure ; proportion de fumé ajustée avec prudence.",
        "ebullitionEtHoublonnage": "Houblonnage faible ; aucune épice nécessaire.",
        "fermentation": "Fermentation haute typique Weizen, contrôlant le ratio banane/girofle afin que la fumée reste intégrée.",
        "maturation": "Courte, avec forte carbonatation et consommation relativement fraîche.",
        "profilRecherche": "Une Weissbier mousseuse et expressive où blé, banane/girofle et fumée douce se superposent sans caractère médicinal."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Smoke Beer — Weissbier base",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Specialty Smoked Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/32/32B/specialty-smoked-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schlenkerla",
          "edition": null,
          "reference": "History of Rauchbier and Bamberg smoke-malt tradition",
          "type": "source_producteur_historique",
          "url": "https://www.schlenkerla.de/rauchbier/geschichte.html",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "helles-rauchbier",
      "nom": "Helles Rauchbier",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "rauchbier-smoke-beer",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bamberg, Franconie",
        "ville": "Bamberg",
        "region": "Franconie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.3,
        "max": 5.8,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 15,
        "max": 30,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 6,
        "max": 16,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Pokal"
        ]
      },
      "description": "La Helles Rauchbier est la fumée en mode clair : lager blonde, malt doux, pain, miel léger, houblon discret et fumée fine. Elle doit rester limpide et buvable, pas devenir une cheminée blonde.",
      "histoireEtOrigines": `Helles Rauchbier applique la fumée à une lager pâle de type Helles. Elle illustre bien la différence entre tradition et catégorie : Bamberg possède une longue culture de malt fumé, mais la Helles fumée est une déclinaison plus récente que la Märzen Rauchbier classique.

Sur une base très pâle, la fumée est davantage exposée : elle ne peut pas se cacher derrière caramel ou Munich malt profond. Le brasseur doit donc choisir un malt fumé propre et doser précisément sa contribution. Le résultat doit rester une Helles — douce, céréalière, peu amère et nette — avec un voile de feu de bois.

Une coloration trop sombre ou un goût de charcuterie intense signale que la base ou la fumée ont pris le dessus sur le concept.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pilsner majoritaire ; petite à moyenne proportion de malt fumé clair, selon intensité."
        ],
        "houblons": [
          "Houblons nobles allemands bas à modérés."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager propre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérément minérale, proche d'une Helles.",
        "empatage": "Empâtage favorisant une douceur de malt légère et une bonne atténuation.",
        "ebullitionEtHoublonnage": "Houblonnage discret ; fumée issue du malt.",
        "fermentation": "Fermentation basse propre suivie d'un lagering complet.",
        "maturation": "Garde froide de plusieurs semaines.",
        "profilRecherche": "Une Helles pâle, douce et nette, traversée par une fumée élégante sans lourdeur, goudron ni caramel excessif."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Smoke Beer — Helles base",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Specialty Smoked Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/32/32B/specialty-smoked-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schlenkerla",
          "edition": null,
          "reference": "History of Rauchbier and Bamberg smoke-malt tradition",
          "type": "source_producteur_historique",
          "url": "https://www.schlenkerla.de/rauchbier/geschichte.html",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "marzen-rauchbier",
      "nom": "Märzen Rauchbier",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "rauchbier-smoke-beer",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bamberg, Franconie",
        "ville": "Bamberg",
        "region": "Franconie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.1,
        "max": 6.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 20,
        "max": 30,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 20,
        "max": 40,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Mass"
        ]
      },
      "description": "La Märzen Rauchbier est la forme bambergienne iconique : robe ambrée, malt de pain, toast, légère douceur, fumée de hêtre, finale sèche et équilibre lager. Elle peut rappeler le jambon fumé, mais elle doit surtout rester une Märzen.",
      "histoireEtOrigines": `Märzen Rauchbier est le cœur classique de la tradition fumée de Bamberg. Sa base de Märzen ambrée — malt Munich, pain grillé, corps moyen — absorbe naturellement le caractère du malt fumé au hêtre. C'est cette combinaison, incarnée notamment par Aecht Schlenkerla Rauchbier Märzen, qui a façonné l'image internationale du Rauchbier moderne.

La fumée n'est pas un ajout aromatique : elle vient du malt séché sur feu, procédé que certaines malteries/brasseries de Bamberg ont conservé après la diffusion des séchoirs sans fumée. Schlenkerla insiste sur cette continuité technique et réfute la légende d'un incendie accidentel à l'origine du style.

Le bon équilibre reste crucial. Le malt Munich doit encore parler : croûte de pain, toast et douceur céréalière soutiennent la fumée au lieu d'être recouverts par elle.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt Munich et Vienna ; proportion importante de Rauchmalz fumé au hêtre, parfois avec Pilsner."
        ],
        "houblons": [
          "Houblons nobles allemands faibles à modérés, essentiellement pour l'équilibre."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager propre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément minérale, compatible avec Märzen et fermentation lager.",
        "empatage": "Décoction ou empâtage multi-palier possible pour renforcer profondeur maltée.",
        "ebullitionEtHoublonnage": "Ébullition complète, houblonnage discret à modéré.",
        "fermentation": "Fermentation basse propre.",
        "maturation": "Lagering de plusieurs semaines pour fondre malt et fumée.",
        "profilRecherche": "Une Märzen ambrée, pain grillé et malt Munich, avec fumée de hêtre franche mais intégrée, jamais cendrée ou artificielle."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Rauchbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/6/6B/rauchbier/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Bamberg-Style Märzen Rauchbier",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schlenkerla",
          "edition": null,
          "reference": "History of Rauchbier and Bamberg smoke-malt tradition",
          "type": "source_producteur_historique",
          "url": "https://www.schlenkerla.de/rauchbier/geschichte.html",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "bock-rauchbier",
      "nom": "Bock Rauchbier",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "rauchbier-smoke-beer",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bamberg, Franconie",
        "ville": "Bamberg",
        "region": "Franconie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6.3,
        "max": 9,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 20,
        "max": 40,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 24,
        "max": 70,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Snifter"
        ]
      },
      "description": "La Bock Rauchbier donne du muscle à la fumée : malt riche, pain brun, caramel, fruits secs, alcool doux, corps plus ample et fumée boisée. Elle doit être profonde et chaleureuse, pas lourde comme une bûche trempée dans du sirop.",
      "histoireEtOrigines": `Bock Rauchbier associe la puissance maltée d'une Bock à la tradition du malt fumé. Cette combinaison existe dans la culture bambergienne moderne mais ne doit pas être présentée comme une catégorie aussi ancienne et autonome que Bock ou Rauchbier pris séparément.

La base apporte Munich malt, pain brun, fruits secs et alcool ; la fumée ajoute bois, cheminée et parfois une impression de viande fumée lorsqu'elle est trop poussée. Plus la bière est forte, plus la maturation devient importante pour éviter que chaleur alcoolique et phénols fumés s'additionnent de manière agressive.

La logique de recette est donc celle d'une Bock authentique enrichie par Rauchmalz, pas celle d'une bière fumée arbitrairement renforcée en alcool.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Munich et Vienna majoritaires ; Rauchmalz fumé au hêtre en proportion adaptée ; caramel éventuel avec retenue."
        ],
        "houblons": [
          "Houblons allemands faibles à modérés, balance vers le malt."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager propre et tolérante à une densité élevée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément minérale, favorisant profondeur maltée sans dureté.",
        "empatage": "Empâtage riche, décoction possible ; maintenir assez de fermentescibilité pour éviter lourdeur.",
        "ebullitionEtHoublonnage": "Ébullition soutenue, houblonnage discret.",
        "fermentation": "Fermentation basse avec pitch important et température maîtrisée.",
        "maturation": "Long lagering pour intégrer alcool, malt et fumée.",
        "profilRecherche": "Une Bock fumée profonde et chaleureuse, riche en pain brun et malt Munich, avec fumée fondue plutôt que dominante."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Bock Rauchbier / Smoke Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Specialty Smoked Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/32/32B/specialty-smoked-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schlenkerla",
          "edition": null,
          "reference": "History of Rauchbier and Bamberg smoke-malt tradition",
          "type": "source_producteur_historique",
          "url": "https://www.schlenkerla.de/rauchbier/geschichte.html",
          "consultation": "2026-08-08"
        }
      ]
    }
  ]
};

export default collection;
