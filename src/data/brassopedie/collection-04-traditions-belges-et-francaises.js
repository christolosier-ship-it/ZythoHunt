// Source canonique de la collection : taxonomie + contenu encyclopédique.
// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 4,
    "slug": "traditions-belges-et-francaises",
    "nom": "Traditions belges et françaises"
  },
  "cartes": [
    {
      "id": "belgian-ale-ale-belge",
      "nom": "Belgian Ale / Ale belge",
      "collectionId": 4,
      "nature": "F",
      "parentPrincipalId": "ale",
      "aliases": [
        "Belgian Ale",
        "Ale belge"
      ],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Belgique",
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
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "L’Ale belge n’est pas un style unique, mais une famille de fermentation expressive : fruit de levure, épices, malt clair ou ambré, sucres bien atténués et effervescence vive. Elle peut être simple ou puissante, blonde ou brune, mais elle garde cette signature belge où la levure écrit presque autant que le malt.",
      "histoireEtOrigines": `« Ale belge » ne désigne pas une recette unique mais une culture brassicole exceptionnellement ramifiée. La Belgique a conservé côte à côte des fermentations hautes expressives, des bières monastiques, des saisons rurales, des ales ambrées de type Spéciale Belge, des blondes modernes, des bières fortes très atténuées et de nombreuses créations locales. Cette pluralité explique pourquoi il est trompeur de réduire la bière belge à une seule combinaison de malt, sucre et levure.

La culture brassicole belge a été inscrite en 2016 par l'UNESCO sur la Liste représentative du patrimoine culturel immatériel de l'humanité. Cette reconnaissance porte moins sur un style particulier que sur l'ensemble des pratiques : diversité des fermentations, transmission des savoir-faire, rôle social des cafés et des fêtes, liens avec la gastronomie et permanence d'un tissu de brasseries monastiques, familiales et artisanales.

Dans une lecture technique moderne, le fil conducteur de nombreuses ales belges est la recherche d'une bière très expressive mais digeste : fermentation haute aromatique, forte atténuation, carbonatation vive et usage fréquent de sucres simples dans les versions puissantes. La levure n'est pas un simple outil de production ; elle est souvent un ingrédient aromatique central, au même titre que le malt et le houblon.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille culturelle et technique, pas recette unique.",
        "maltsEtCereales": [
          "Malt Pilsner ou pale belge comme base ; Vienna, Munich, aromatic ou malts caramel selon la couleur et le style.",
          "Sucres très fermentescibles possibles dans les bières fortes afin d'augmenter le degré alcoolique sans alourdir le corps."
        ],
        "houblons": [
          "Houblons continentaux, anglais ou slovènes en soutien : Saaz, Styrian Goldings, Hallertau et variétés apparentées ; le houblon structure souvent davantage la finale qu'il ne domine l'arôme."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge expressive, capable de produire esters fruités et phénols poivrés/épicés ; la gestion de température détermine une grande partie du profil final."
        ],
        "ingredientsComplementaires": [
          "Sucres clairs ou foncés, épices ou fruits selon les sous-styles ; aucun n'est obligatoire à l'échelle de la famille."
        ],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage orienté vers une bonne fermentescibilité. Les bières fortes recherchent souvent un moût relativement léger en dextrines afin que l'alcool ne se traduise pas par une texture sirupeuse.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation haute avec contrôle thermique, souvent démarrée modérément puis laissée monter pour achever l'atténuation sans accumuler d'alcools supérieurs agressifs.",
        "maturation": "Conditionnement pouvant inclure une garde en cuve puis une refermentation en bouteille ou en fût. La carbonatation élevée et la maturation sur levure sont des signatures fréquentes mais non universelles.",
        "profilRecherche": "Une ale belge expressive, hautement fermentée et équilibrée, dont le profil exact dépend du sous-style mais où la fermentation conserve une véritable signature."
      },
      "sources": [
        {
          "organisme": "UNESCO",
          "edition": null,
          "reference": "Beer culture in Belgium — Representative List of the Intangible Cultural Heritage of Humanity, inscription 2016",
          "type": "source_institutionnelle",
          "url": "https://ich.unesco.org/en/RL/beer-culture-in-belgium-01062",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style ale families",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Belgian Ale families",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/24/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "belgian-table-beer",
      "nom": "Belgian Table Beer",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Belgique, tradition domestique et monastique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 1.5,
        "max": 3.5,
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
        "max": 24,
        "unite": "EBC",
        "statut": "large"
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
          "Tulipe belge",
          "Gobelet"
        ]
      },
      "description": "La Belgian Table Beer est une bière du quotidien, légère mais pas muette : faible alcool, corps discret, fermentation belge douce, céréale, fruit léger, parfois une pointe épicée. Elle doit accompagner le repas, pas l’écraser ; une petite bière avec des manières de grande maison.",
      "histoireEtOrigines": `La bière de table belge, ou tafelbier/bière de table, appartient à une tradition de consommation quotidienne à faible degré plutôt qu'à un style de concours figé. Pendant une grande partie du XXe siècle, ces bières légères ont accompagné les repas familiaux, les réfectoires et certaines institutions. Leur rôle doit être décrit avec prudence : elles ne sont pas la preuve que « l'eau était dangereuse partout », cliché souvent répété, mais l'expression d'une culture où la bière faible faisait partie de l'alimentation ordinaire.

Le recul de la consommation quotidienne de bière, l'amélioration de l'accès à l'eau potable et la domination des pils ont marginalisé cette catégorie. Le regain actuel des bières légères et de la sobriété choisie lui redonne toutefois une pertinence : les brasseurs cherchent à conserver un vrai caractère de fermentation à des degrés très faibles, ce qui est techniquement plus exigeant qu'une simple dilution.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt Pilsner ou pale comme base, parfois blé, avoine ou malt légèrement toasté pour redonner du corps à une densité faible."
        ],
        "houblons": [
          "Houblonnage modéré mais suffisamment net pour empêcher la petite bière de paraître sucrée ou aqueuse."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge expressive conduite de façon contenue afin d'obtenir du caractère sans saturer un corps très léger."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage conçu pour conserver un minimum de texture tout en limitant la densité initiale ; les techniques de brassage à faible extrait doivent éviter l'astringence.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation complète avec attention particulière à la santé de la levure : sur un moût léger, les défauts ressortent immédiatement.",
        "maturation": "Maturation courte et service frais ; refermentation possible selon la tradition.",
        "profilRecherche": "Une bière de repas légère, sèche, rafraîchissante et réellement brassicole, avec céréale, levure et amertume lisibles malgré le faible alcool."
      },
      "sources": [
        {
          "organisme": "UNESCO",
          "edition": null,
          "reference": "Beer culture in Belgium — Representative List of the Intangible Cultural Heritage of Humanity, inscription 2016",
          "type": "source_institutionnelle",
          "url": "https://ich.unesco.org/en/RL/beer-culture-in-belgium-01062",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style session and table beer context",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "belgian-session-ale",
      "nom": "Belgian Session Ale",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Belgique contemporain",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3,
        "max": 5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 15,
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
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe belge",
          "Calice"
        ]
      },
      "description": "La Belgian Session Ale reprend le parfum belge en format buvable : fruits clairs, poivre, céréale, mousse vive, alcool modéré et finale sèche. Elle doit garder le caractère de levure sans tomber dans la mini-tripel, ni dans la blonde sans relief.",
      "histoireEtOrigines": `La Belgian Session Ale est surtout une catégorie contemporaine : elle applique à une bière de degré modéré le vocabulaire aromatique des fermentations belges. Elle dialogue avec les anciennes bières de table, les Singles monastiques et les blondes légères, mais son nom appartient davantage au langage craft international du XXIe siècle qu'à une appellation historique belge.

Son intérêt est technique. Une levure belge produit vite beaucoup d'arômes ; sur une bière légère, le défi consiste à conserver poivre, agrumes ou fruit blanc sans créer une miniature déséquilibrée de Tripel. La meilleure lecture est donc celle d'une bière de fermentation expressive construite pour la répétition du verre.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base Pilsner/pale très simple, avec faible proportion de blé ou Vienna possible pour la tenue de mousse et la texture."
        ],
        "houblons": [
          "Houblons continentaux ou modernes à intensité faible à moyenne ; l'amertume maintient une finale sèche."
        ],
        "levuresEtMicroorganismes": [
          "Souche belge modérément expressive ; privilégier poivre, agrumes et fruits clairs plutôt que solvants ou banane massive."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage orienté vers une bonne fermentescibilité. Les bières fortes recherchent souvent un moût relativement léger en dextrines afin que l'alcool ne se traduise pas par une texture sirupeuse.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation haute avec contrôle thermique, souvent démarrée modérément puis laissée monter pour achever l'atténuation sans accumuler d'alcools supérieurs agressifs.",
        "maturation": "Conditionnement pouvant inclure une garde en cuve puis une refermentation en bouteille ou en fût. La carbonatation élevée et la maturation sur levure sont des signatures fréquentes mais non universelles.",
        "profilRecherche": "Une ale belge légère à modérée, sèche, vive et hautement buvable, avec une signature de levure nette mais jamais lourde."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style session ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "UNESCO",
          "edition": null,
          "reference": "Beer culture in Belgium — Representative List of the Intangible Cultural Heritage of Humanity, inscription 2016",
          "type": "source_institutionnelle",
          "url": "https://ich.unesco.org/en/RL/beer-culture-in-belgium-01062",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "belgian-single",
      "nom": "Belgian Single",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [
        "Trappist Single"
      ],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Abbayes belges",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.8,
        "max": 6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 25,
        "max": 45,
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
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Calice",
          "Tulipe belge"
        ]
      },
      "description": "La Belgian Single est la bière de moine qui a appris à être vive : blonde, sèche, bien houblonnée, très carbonatée, avec levure belge fruitée-épicée et malt grainé discret. Elle a la silhouette d’une petite Tripel, mais sans le poids ni la chaleur.",
      "histoireEtOrigines": `Le terme Belgian Single, souvent rapproché de Trappist Single, est une catégorie moderne utilisée pour décrire les bières blondes relativement légères brassées dans ou autour de certaines traditions monastiques. Historiquement, les monastères ont produit des bières de consommation interne de forces variables ; il n'existe donc pas une « recette médiévale du Single ».

Le modèle contemporain est une ale pâle, sèche, assez houblonnée et fortement carbonatée, moins alcoolisée qu'une Dubbel ou une Tripel. Westmalle Extra est aujourd'hui une référence majeure de cette idée, et l'Association internationale trappiste confirme qu'Extra fait partie des bières commercialisées par Westmalle aux côtés de Dubbel et Tripel. Le style moderne retient surtout la logique d'une bière monastique de table devenue suffisamment structurée pour être appréciée comme style à part entière.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt Pilsner dominant ; petites touches de blé, Vienna ou aromatic possibles mais la couleur doit rester pâle."
        ],
        "houblons": [
          "Houblons continentaux ou Styrian Goldings plus présents que dans de nombreuses ales d'abbaye, avec amertume ferme et arôme herbacé/floral possible."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge sèche et poivrée, modérément fruitée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage orienté vers une bonne fermentescibilité. Les bières fortes recherchent souvent un moût relativement léger en dextrines afin que l'alcool ne se traduise pas par une texture sirupeuse.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation haute avec contrôle thermique, souvent démarrée modérément puis laissée monter pour achever l'atténuation sans accumuler d'alcools supérieurs agressifs.",
        "maturation": "Conditionnement pouvant inclure une garde en cuve puis une refermentation en bouteille ou en fût. La carbonatation élevée et la maturation sur levure sont des signatures fréquentes mais non universelles.",
        "profilRecherche": "Une ale monastique pâle, sèche et effervescente, avec davantage de houblon et de fraîcheur que de richesse maltée."
      },
      "sources": [
        {
          "organisme": "International Trappist Association",
          "edition": null,
          "reference": "Trappist beers and Authentic Trappist Product framework",
          "type": "source_institutionnelle",
          "url": "https://www.trappist.be/en/products/beers/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "26A Belgian Single",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26A/belgian-single/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style single",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "belgian-pale-ale",
      "nom": "Belgian Pale Ale",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Belgique, notamment Anvers et Brabant",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.8,
        "max": 5.5,
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
        "min": 16,
        "max": 30,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe belge",
          "Calice"
        ]
      },
      "description": "La Belgian Pale Ale est l’ale belge de comptoir : cuivrée, maltée, fruitée, avec pain toasté, biscuit, poire, orange, houblon floral ou herbacé, et peu de phénols agressifs. Elle est belge, oui, mais sans la fanfare épicée des grandes blondes fortes.",
      "histoireEtOrigines": `La Belgian Pale Ale est une bière de compromis historique : une ale ambrée à cuivrée, modérée, née dans un pays confronté au succès croissant des pils et à l'influence britannique. Plusieurs brasseries belges possèdent des racines anciennes, mais les exemples qui ont défini le style moderne ont surtout été stabilisés au XXe siècle, avec des emprunts aux malts, houblons et parfois levures britanniques.

Le BJCP la décrit comme une bière du quotidien, particulièrement associée aux provinces flamandes d'Anvers et du Brabant. Son identité repose sur l'équilibre : malt toasté/caramélisé mesuré, fruit de fermentation discret, épices légères et houblon de soutien. Elle se distingue ainsi des bières belges fortes par sa retenue et de la Bitter britannique par une fermentation plus typiquement belge.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pale/Pilsner majoritaire avec Vienna, Munich ou caramel léger pour obtenir la teinte cuivrée et des notes de pain/toast."
        ],
        "houblons": [
          "Houblons nobles, Styrian Goldings, East Kent Goldings ou Fuggles à niveau modéré."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge relativement sobre, fermentée plus frais que sur une strong ale afin de contenir phénols et esters."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage d'infusion visant un corps moyen-léger et une bonne buvabilité.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation haute modérée ; la retenue aromatique est une qualité essentielle du style.",
        "maturation": "Garde courte à moyenne pour fondre malt, levure et houblon.",
        "profilRecherche": "Une ale belge cuivrée, équilibrée et quotidienne : toast, fruit discret, épice légère et amertume propre sans domination."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "24B Belgian Pale Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/24/24B/belgian-pale-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style pale ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "UNESCO",
          "edition": null,
          "reference": "Beer culture in Belgium — Representative List of the Intangible Cultural Heritage of Humanity, inscription 2016",
          "type": "source_institutionnelle",
          "url": "https://ich.unesco.org/en/RL/beer-culture-in-belgium-01062",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "speciale-belge",
      "nom": "Spéciale Belge",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Belgique, notamment Anvers et Brabant",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.8,
        "max": 5.5,
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
        "min": 16,
        "max": 30,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe belge",
          "Calice"
        ]
      },
      "description": "La Spéciale Belge est la cousine patrimoniale de la Belgian Pale Ale : ambrée, douce de malt, légèrement fruitée, avec biscuit, miel, toast et houblon en arrière-plan. Elle ne cherche pas l’exubérance ; elle cherche l’équilibre belge civilisé.",
      "histoireEtOrigines": `La Spéciale Belge est liée au tournant brassicole belge du début du XXe siècle. Face à la progression des pils continentales et des ales importées, les brasseurs belges cherchèrent à proposer une bière nationale de fermentation haute, claire à ambrée, stable et accessible. Un concours organisé au début des années 1900 dans le contexte de l'Exposition de Liège de 1905 contribua à cristalliser cette idée de « bière belge spéciale ».

Le style ne correspond pas exactement à toutes les Belgian Pale Ales modernes, mais les deux univers se chevauchent fortement : couleur ambrée, force modérée, malt toasté ou biscuité, fermentation fruitée contenue et houblonnage équilibrant. Son intérêt encyclopédique est précisément de montrer que la Belgique n'a pas seulement construit des bières fortes et monastiques ; elle a aussi cherché des réponses nationales, plus sobres, à la modernisation du marché européen.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pale/Pilsner avec Vienna, Munich et caramel léger ; la couleur ambrée vient du malt, pas d'une torréfaction poussée."
        ],
        "houblons": [
          "Houblons européens ou britanniques modérés, souvent plus structurants que démonstratifs."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge relativement propre, légèrement fruitée et épicée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Infusion produisant un corps moyen et une finale suffisamment sèche.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation haute modérée pour préserver l'équilibre malt/levure.",
        "maturation": "Garde de clarification courte à moyenne.",
        "profilRecherche": "Une ale ambrée belge de force modérée, toastée, fruitée avec retenue et très équilibrée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Belgian Pale Ale / historical Spéciale Belge context",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/beer-styles/16b-belgian-pale-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "UNESCO",
          "edition": null,
          "reference": "Beer culture in Belgium — Representative List of the Intangible Cultural Heritage of Humanity, inscription 2016",
          "type": "source_institutionnelle",
          "url": "https://ich.unesco.org/en/RL/beer-culture-in-belgium-01062",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "belgian-blonde-ale",
      "nom": "Belgian Blonde Ale",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Belgique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6,
        "max": 7.5,
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
        "min": 8,
        "max": 16,
        "unite": "EBC",
        "statut": "defini"
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
          "Calice",
          "Tulipe belge"
        ]
      },
      "description": "La Belgian Blonde Ale est une blonde forte mais polie : or profond, malt doux, miel léger, orange ou citron de levure, poivre fin, alcool lisse et finale sèche. Elle doit séduire sans montrer ses muscles, comme une abbaye qui aurait appris le marketing.",
      "histoireEtOrigines": `La Belgian Blond Ale est beaucoup plus récente que l'image médiévale parfois attachée aux bières d'abbaye. Le BJCP la présente comme un développement d'après-guerre, popularisé notamment pour séduire des consommateurs habitués aux pils européennes. Elle offre une couleur dorée rassurante mais conserve une fermentation haute belge, une force supérieure à une pils et une carbonatation importante.

Elle occupe aujourd'hui une zone intermédiaire entre bière blonde d'abbaye, Dubbel claire en force et Belgian Golden Strong Ale. Son caractère est généralement plus doux et malté qu'une Tripel, moins amer et moins alcoolisé qu'une Golden Strong, avec une fermentation citronnée-poivrée plus subtile que démonstrative.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt Pilsner belge dominant, petite proportion d'aromatic/Vienna possible ; sucre clair facultatif pour alléger le corps."
        ],
        "houblons": [
          "Houblons continentaux peu à modérément aromatiques, amertume moyenne."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge produisant agrumes, fruit clair et poivre avec intensité modérée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage orienté vers une bonne fermentescibilité. Les bières fortes recherchent souvent un moût relativement léger en dextrines afin que l'alcool ne se traduise pas par une texture sirupeuse.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation haute avec contrôle thermique, souvent démarrée modérément puis laissée monter pour achever l'atténuation sans accumuler d'alcools supérieurs agressifs.",
        "maturation": "Conditionnement pouvant inclure une garde en cuve puis une refermentation en bouteille ou en fût. La carbonatation élevée et la maturation sur levure sont des signatures fréquentes mais non universelles.",
        "profilRecherche": "Une ale dorée de force modérée à élevée, douce en attaque mais sèche et propre en finale, avec fermentation belge subtile."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "25A Belgian Blond Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/25/25A/belgian-blond-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style blond ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "belgian-golden-strong-ale-belgian-strong-blonde-ale",
      "nom": "Belgian Golden Strong Ale / Belgian Strong Blonde Ale",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [
        "Belgian Golden Strong Ale",
        "Belgian Strong Blonde Ale"
      ],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Belgique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 7.5,
        "max": 10.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 20,
        "max": 40,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 6,
        "max": 14,
        "unite": "EBC",
        "statut": "defini"
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
          "Tulipe belge",
          "Calice"
        ]
      },
      "description": "La Belgian Golden Strong Ale est une illusion dangereuse : très pâle, très sèche, très pétillante, avec poire, pomme, herbes, poivre, alcool parfumé et mousse spectaculaire. Elle paraît légère jusqu’au moment où elle se lève de table avant toi.",
      "histoireEtOrigines": `La Belgian Golden Strong Ale moderne est indissociable de Duvel. Après la Première Guerre mondiale, Albert Moortgat s'inspire des ales britanniques et rapporte une souche de levure issue d'une brasserie écossaise. La bière est d'abord commercialisée comme Victory Ale puis prend le nom Duvel en 1923. Au fil du XXe siècle, sa couleur très pâle, sa force élevée, sa mousse massive et sa sécheresse deviennent le prototype d'une nouvelle famille belge.

Le paradoxe du style est central : une bière autour de 8–9 % doit paraître beaucoup plus légère qu'elle ne l'est. Cela suppose un moût pâle, l'usage de sucres fermentescibles, une fermentation très atténuante, une carbonatation forte et une maturation soigneuse. Duvel documente encore aujourd'hui une fermentation primaire chaude, une maturation à froid et une refermentation en bouteille.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt Pilsner très pâle dominant ; sucre blanc/candi clair important pour augmenter l'alcool sans épaissir la bière."
        ],
        "houblons": [
          "Houblons aromatiques tchèques/slovènes ou équivalents, avec amertume ferme et parfum floral-épicé mesuré."
        ],
        "levuresEtMicroorganismes": [
          "Souche belge fortement atténuante, fruitée-poivrée, capable de fermenter un moût riche sans produire de chaleur agressive."
        ],
        "ingredientsComplementaires": [
          "Sucre hautement fermentescible fréquent et stylistiquement important."
        ],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage très fermentescible ; la légèreté finale est prioritaire.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation haute pouvant monter dans les basses/moyennes vingtaines °C selon la souche, avec contrôle strict des alcools supérieurs.",
        "maturation": "Maturation froide puis refermentation en bouteille fréquente, destinée à la finesse des bulles et à l'intégration de l'alcool.",
        "profilRecherche": "Une bière dorée très forte mais trompeusement légère : sèche, effervescente, fruitée-épicée, avec alcool fondu et amertume nette."
      },
      "sources": [
        {
          "organisme": "Duvel Moortgat",
          "edition": null,
          "reference": "History: British influence, Scottish yeast, Victory Ale and Duvel from 1923",
          "type": "source_primaire_historique",
          "url": "https://www.duvel.com/en-us/history",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Duvel Moortgat",
          "edition": null,
          "reference": "Duvel brewing process: pale malt, Czech/Slovenian hops, warm primary fermentation, cold maturation and bottle refermentation",
          "type": "source_primaire_technique",
          "url": "https://www.duvel.com/en/the-beer/duvel",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "25C Belgian Golden Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/25/25C/belgian-golden-strong-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style strong blond ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "belgian-dark-strong-ale",
      "nom": "Belgian Dark Strong Ale",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Belgique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 8,
        "max": 12,
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
        "min": 24,
        "max": 70,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 10,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Calice",
          "Tulipe belge"
        ]
      },
      "description": "La Belgian Dark Strong Ale est un coffre sombre : fruits secs, prune, figue, caramel profond, pain grillé, épices de levure et alcool chaud mais soyeux. Elle doit être riche sans devenir sirupeuse, puissante sans tourner au vin chaud.",
      "histoireEtOrigines": `La Belgian Dark Strong Ale rassemble des bières fortes, sombres et complexes qui ne descendent pas toutes d'une seule recette monastique. Le BJCP situe plusieurs modèles modernes au XXe siècle : Westvleteren avant la Seconde Guerre mondiale, puis Chimay et Rochefort dans l'après-guerre, avant une diffusion plus large chez les brasseries d'abbaye et séculières.

Le cœur du style n'est pas la torréfaction mais la combinaison de malt riche, sucre caramélisé ou sirop sombre, fermentation belge et fruits secs. Les meilleures versions terminent plus sèches qu'elles n'en donnent l'impression ; la force alcoolique doit allonger la bière plutôt que la transformer en sirop. Le terme « Quad » est souvent employé commercialement, mais n'est pas historiquement synonyme de toutes les Dark Strong Ales.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pilsner/pale avec Munich, aromatic ou malts foncés non torréfiés ; la complexité peut rester étonnamment simple si le sucre et la levure font le travail."
        ],
        "houblons": [
          "Houblons continentaux discrets ; amertume suffisante pour éviter la lourdeur."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge produisant prune, raisin, figue, cerise noire et poivre selon la souche."
        ],
        "ingredientsComplementaires": [
          "Sirop de sucre candi foncé ou sucres caramélisés fréquents ; épices non nécessaires."
        ],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage suffisamment fermentescible pour conserver un corps moyen malgré la densité élevée.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation chaude mais contrôlée, souvent avec montée progressive pour obtenir une forte atténuation.",
        "maturation": "Garde plus longue que sur les ales légères ; refermentation en bouteille fréquente et vieillissement possible.",
        "profilRecherche": "Une strong ale sombre, riche en pain et fruits noirs mais jamais brûlée ni sirupeuse, avec alcool souple et finale étonnamment sèche."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "26D Belgian Dark Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26D/belgian-dark-strong-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style dark strong ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "International Trappist Association",
          "edition": null,
          "reference": "Trappist beers and Authentic Trappist Product framework",
          "type": "source_institutionnelle",
          "url": "https://www.trappist.be/en/products/beers/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "dubbel",
      "nom": "Dubbel",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Abbayes belges",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6,
        "max": 7.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 15,
        "max": 25,
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
        "temperatureMin": 9,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Calice",
          "Tulipe belge"
        ]
      },
      "description": "La Dubbel est la brune d’abbaye en velours : cuivre profond, caramel, pain grillé, raisin, prune, sucre brun, levure épicée et chaleur discrète. Elle semble douce, mais sa finale doit rester assez sèche pour ne pas s’écrouler sous son propre malt.",
      "histoireEtOrigines": `Le Dubbel moderne s'enracine dans la reconstruction de la tradition brassicole de Westmalle après la Première Guerre mondiale. Le BJCP rattache directement le style à la bière brune forte brassée par Westmalle en 1922 ; d'autres abbayes et brasseries développent ensuite leurs propres versions, surtout après la Seconde Guerre mondiale. Le mot « dubbel » ne signifie donc pas qu'une quantité d'ingrédients aurait été littéralement doublée : c'est une appellation de force devenue nom de style.

Le style associe malt sombre sans torréfaction, fruits secs de fermentation, sucre caramélisé et forte carbonatation. Sa douceur perçue vient autant des arômes de malt et de fruits que d'un sucre résiduel réel : une bonne Dubbel finit relativement sèche.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pilsner/pale avec Munich, aromatic et éventuellement caramel ; éviter les malts brûlés."
        ],
        "houblons": [
          "Houblons continentaux discrets, amertume modérée."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge produisant prune, raisin, fruits à noyau et épices poivrées."
        ],
        "ingredientsComplementaires": [
          "Sucre candi ou sirop caramélisé foncé fréquent pour couleur, fruit noir et atténuation."
        ],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage orienté vers une bonne fermentescibilité. Les bières fortes recherchent souvent un moût relativement léger en dextrines afin que l'alcool ne se traduise pas par une texture sirupeuse.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation haute avec contrôle thermique, souvent démarrée modérément puis laissée monter pour achever l'atténuation sans accumuler d'alcools supérieurs agressifs.",
        "maturation": "Conditionnement pouvant inclure une garde en cuve puis une refermentation en bouteille ou en fût. La carbonatation élevée et la maturation sur levure sont des signatures fréquentes mais non universelles.",
        "profilRecherche": "Une ale cuivrée à brune, maltée et fruitée, riche mais relativement sèche, sans torréfaction ni alcool brûlant."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "26B Belgian Dubbel",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26B/belgian-dubbel/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "International Trappist Association",
          "edition": null,
          "reference": "Trappist beers and Authentic Trappist Product framework",
          "type": "source_institutionnelle",
          "url": "https://www.trappist.be/en/products/beers/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style dubbel",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "tripel",
      "nom": "Tripel",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Belgique, tradition monastique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 7.5,
        "max": 9.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 20,
        "max": 40,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 8,
        "max": 14,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Calice",
          "Tulipe belge"
        ]
      },
      "description": "La Tripel cache une grande force derrière une robe claire : malt pâle, miel, poivre, orange, citron, houblon noble, mousse dense et finale sèche. Elle doit être traîtresse dans le bon sens : puissante, mais plus aérienne qu’elle n’a le droit de l’être.",
      "histoireEtOrigines": `La Tripel moderne est l'une des grandes inventions brassicoles belges du XXe siècle. Westmalle met au point une bière blonde forte dans les années 1930 ; la formulation révisée après la Seconde Guerre mondiale devient le modèle copié par de nombreuses brasseries. Là encore, « tripel » n'est pas une formule arithmétique médiévale mais un nom de force devenu catégorie.

La réussite technique tient à une contradiction maîtrisée : densité initiale élevée mais couleur pâle, mousse abondante, amertume ferme et finale très sèche. Une Tripel n'est pas une blonde sucrée et lourde ; elle doit cacher sa puissance derrière l'effervescence, la fermentation épicée et une structure de houblon suffisante.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt Pilsner très majoritaire ; sucre clair souvent significatif pour alléger le corps."
        ],
        "houblons": [
          "Houblons continentaux avec amertume plus ferme que dans Dubbel ou Blond ; arôme floral-épicé possible."
        ],
        "levuresEtMicroorganismes": [
          "Souche belge fortement atténuante donnant agrumes, poire, banane légère et poivre/clou de girofle selon la souche."
        ],
        "ingredientsComplementaires": [
          "Sucre blanc ou candi clair fréquent ; épices non nécessaires dans les versions classiques."
        ],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage bas à moyen favorisant la fermentescibilité.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation haute avec montée contrôlée ; laisser la levure terminer très bas tout en évitant les alcools fusel.",
        "maturation": "Maturation suffisante pour intégrer alcool et soufre ; refermentation en bouteille très courante.",
        "profilRecherche": "Une ale blonde forte, sèche, très effervescente, épicée-fruitée, amère avec précision et dangereusement buvable."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "26C Belgian Tripel",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26C/belgian-tripel/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "International Trappist Association",
          "edition": null,
          "reference": "Trappist beers and Authentic Trappist Product framework",
          "type": "source_institutionnelle",
          "url": "https://www.trappist.be/en/products/beers/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style tripel",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "quadrupel",
      "nom": "Quadrupel",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [
        "Quadrupel Ale"
      ],
      "paysOrigine": [
        "Belgique",
        "Pays-Bas"
      ],
      "origine": {
        "libelle": "Tradition monastique belgo-néerlandaise",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 9,
        "max": 14,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 20,
        "max": 50,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 30,
        "max": 80,
        "unite": "EBC",
        "statut": "large"
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
          "Calice",
          "Snifter"
        ]
      },
      "description": "La Quadrupel pousse la logique monastique vers le grand soir : brun profond, fruits noirs, datte, figue, caramel brûlé léger, sucre candi, épices, alcool large et texture ample. Elle doit impressionner sans devenir confiture alcoolisée.",
      "histoireEtOrigines": `« Quadrupel » est un terme plus récent et plus commercial que Dubbel ou Tripel. Il s'est diffusé à partir de la fin du XXe siècle pour désigner des bières monastiques ou d'inspiration monastique très fortes et sombres. Les guides modernes rapprochent généralement ces bières de la Belgian Dark Strong Ale plutôt que d'en faire une lignée historique autonome.

Cette nuance est importante : toutes les bières sombres belges fortes ne se nomment pas Quad, et les grandes références historiques telles que Westvleteren 12, Rochefort 10 ou Chimay Bleue ont leurs propres nomenclatures. Dans ZythoHunt, la fiche Quadrupel décrit donc une convention moderne de force et de profil, pas une quatrième étape médiévale d'un système monastique universel.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base Pilsner/pale et Munich/Aromatic ; malts caramel possibles mais la profondeur peut surtout venir des sucres foncés et de la fermentation."
        ],
        "houblons": [
          "Houblonnage continental modéré, principalement équilibrant."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge très tolérante à l'alcool, produisant fruits noirs, fruits secs et épices."
        ],
        "ingredientsComplementaires": [
          "Sirop candi foncé ou sucres caramélisés très fréquents ; éviter qu'ils ne laissent une sucrosité lourde."
        ],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage fermentescible malgré une densité très élevée.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation vigoureuse, oxygénation et ensemencement généreux ; montée progressive de température pour achever l'atténuation.",
        "maturation": "Garde longue ; refermentation et vieillissement peuvent développer prune, raisin, figue, porto léger et notes oxydatives nobles avec le temps.",
        "profilRecherche": "Une bière belge très forte, sombre et complexe, dense en arômes mais pas en sucre résiduel, avec alcool fondu et finale structurée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "26D Belgian Dark Strong Ale / Quad context",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26D/belgian-dark-strong-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "International Trappist Association",
          "edition": null,
          "reference": "Trappist beers and Authentic Trappist Product framework",
          "type": "source_institutionnelle",
          "url": "https://www.trappist.be/en/products/beers/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style quadrupel / dark strong ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "saison",
      "nom": "Saison",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Wallonie, fermes du Hainaut",
        "ville": null,
        "region": "Wallonie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 9.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 20,
        "max": 45,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 5,
        "max": 30,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe belge",
          "Verre saison"
        ]
      },
      "description": "La Saison est une bière sèche comme un chemin de ferme en été : poivre, fruits jaunes, céréales, houblon floral ou terreux, forte effervescence et finale ultra-nette. Elle peut être blonde, ambrée, faible ou forte, mais jamais lourde.",
      "histoireEtOrigines": `La Saison est associée à la Wallonie rurale et aux fermes-brasseries qui produisaient des bières destinées à être conservées puis consommées pendant les travaux agricoles. Le récit populaire des « saisonniers » est plausible et largement transmis, mais il faut éviter d'imaginer une recette unique : les bières de ferme variaient selon les céréales disponibles, la force, le matériel et les pratiques locales.

La Brasserie Dupont documente une ferme à Tourpes dès 1759, devenue ferme-brasserie en 1844, produisant notamment des bières de saison destinées aux ouvriers agricoles. Au XXe siècle, Saison Dupont devient l'un des principaux modèles du style moderne. Celui-ci se caractérise aujourd'hui par une forte atténuation, une carbonatation vive, une fermentation poivrée-fruitée et une amertume généralement plus présente que dans les ales d'abbaye.

Les versions historiques pouvaient être plus faibles en alcool que nombre de Saisons craft actuelles. Le style contemporain doit donc être compris comme une tradition reconstruite autour de quelques survivantes, et non comme la reproduction exacte d'une bière paysanne immuable.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pilsner/pale comme base ; blé, épeautre, seigle ou autres céréales possibles selon l'interprétation rustique."
        ],
        "houblons": [
          "Houblonnage continental de moyen à assez ferme ; floral, herbacé et épicé, parfois renforcé par des variétés modernes."
        ],
        "levuresEtMicroorganismes": [
          "Souche Saison très atténuante, poivrée et fruitée ; certaines souches sont diastatiques et fermentent extrêmement bas."
        ],
        "ingredientsComplementaires": [
          "Épices possibles mais non obligatoires ; dans une Saison classique, une grande partie du poivre et des agrumes doit venir de la fermentation et du houblon."
        ],
        "profilEau": "Profil modéré à légèrement sulfaté possible pour renforcer la sécheresse et l'amertume.",
        "empatage": "Empâtage très fermentescible afin d'obtenir une finale sèche.",
        "ebullitionEtHoublonnage": "Amertume clairement perceptible et houblonnage aromatique variable ; éviter de masquer la fermentation sous les épices.",
        "fermentation": "Fermentation souvent plus chaude que pour les ales belges d'abbaye, avec température pouvant monter fortement selon la souche.",
        "maturation": "Maturation relativement courte ; refermentation en bouteille fréquente. Les variantes mixtes ou Brett demandent beaucoup plus de temps.",
        "profilRecherche": "Une ale wallonne sèche, très effervescente, poivrée-fruitée et rafraîchissante, avec une rusticité nette mais jamais lourde."
      },
      "sources": [
        {
          "organisme": "Brasserie Dupont",
          "edition": null,
          "reference": "History of the Tourpes farm-brewery and Saison production from the 19th century",
          "type": "source_primaire_historique",
          "url": "https://www.brasserie-dupont.com/en/our-history/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "25B Saison",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/25/25B/saison/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style saison",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "specialty-saison",
      "nom": "Specialty Saison",
      "collectionId": 4,
      "nature": "SS",
      "parentPrincipalId": "saison",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Interprétation contemporaine de la saison",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 12,
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
        "min": 4,
        "max": 60,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Fermentation mixte associant levures et micro-organismes acidifiants selon le profil recherché."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe belge",
          "Teku"
        ]
      },
      "description": "La Specialty Saison garde le squelette de la saison — sécheresse, effervescence, levure poivrée — puis y greffe fruits, céréales, houblons modernes, acidité, bois ou fermentation mixte. Le supplément doit enrichir la ferme, pas construire un parc d’attractions.",
      "histoireEtOrigines": `Specialty Saison n'est pas une tradition historique séparée mais une extension moderne de la Saison. La plasticité du style — céréales variées, houblons différents, épices, fruits, fermentation mixte, Brettanomyces, vieillissement en bois — a naturellement conduit les brasseurs artisanaux à utiliser la Saison comme châssis de création.

Pour rester lisible, une Specialty Saison doit néanmoins conserver la grammaire du style : sécheresse, forte carbonatation, fermentation expressive et sensation de fraîcheur. Si l'ingrédient spécial transforme complètement la bière, il est plus honnête de la classer comme fruit beer, sour, Brett beer ou autre spécialité selon le résultat.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base de Saison pâle ; céréales rustiques comme blé, seigle, épeautre, avoine ou sarrasin possibles selon le projet."
        ],
        "houblons": [
          "Du houblonnage continental classique aux variétés modernes ; le niveau doit rester cohérent avec l'ingrédient ou la fermentation spéciale."
        ],
        "levuresEtMicroorganismes": [
          "Levure Saison seule ou associée à Brettanomyces et/ou bactéries dans les versions mixtes."
        ],
        "ingredientsComplementaires": [
          "Fruits, herbes, épices, fleurs, bois ou autres ingrédients peuvent être utilisés, avec une logique de complément plutôt que de masquage."
        ],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage généralement très fermentescible ; ajuster la texture aux céréales spéciales.",
        "ebullitionEtHoublonnage": "Houblonnage et épices sont adaptés au projet ; attention aux interactions entre fortes doses de houblon et cultures mixtes.",
        "fermentation": "Fermentation primaire Saison, éventuellement suivie d'une phase Brett/mixte ou d'une refermentation sur fruit.",
        "maturation": "De quelques semaines à plusieurs mois selon les microorganismes, fruits et bois utilisés.",
        "profilRecherche": "Une Saison identifiable enrichie par un ingrédient ou un procédé spécial, sans perdre sa sécheresse, son effervescence et sa logique fermière."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "25B Saison — base style",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/25/25B/saison/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Specialty Saison / Belgian-style specialty",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "biere-de-garde-style-franco-belge",
      "nom": "Bière de Garde — style franco-belge",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [
        "Bière de Garde"
      ],
      "paysOrigine": [
        "France",
        "Belgique"
      ],
      "origine": {
        "libelle": "Nord de la France et zones frontalières",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6,
        "max": 8.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 18,
        "max": 28,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 12,
        "max": 40,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Calice"
        ]
      },
      "description": "La Bière de Garde est la garde maltée du Nord : blonde, ambrée ou brune, mais toujours lisse, toastée, biscuitée, sèche et plus propre qu’une saison. Elle parle cave fraîche, pain, caramel sec et patience, sans chercher l’acidité ni la rusticité forcée.",
      "histoireEtOrigines": `La Bière de Garde appartient au Nord de la France et particulièrement à la région autour de Lille. Son nom signifie littéralement bière « de garde » : une bière brassée pour être conservée. Le BJCP décrit une tradition de ferme documentée au XIXe siècle, brassée au début du printemps puis stockée au frais pour la consommation pendant les mois plus chauds.

Le style moderne ne doit cependant pas être confondu avec une Saison belge. La Bière de Garde est plus ronde, plus maltée et plus lisse, avec une fermentation généralement plus propre et une maturation froide marquée. Jenlain devient au XXe siècle le prototype de la version ambrée moderne embouteillée, tandis que d'autres brasseries du Nord maintiennent des variantes blondes et brunes.

La frontière franco-belge reste culturellement poreuse, mais l'équilibre sensoriel distingue bien les deux familles : Saison = sécheresse, épices de fermentation et amertume ; Bière de Garde = malt toasté, douceur relative et garde froide.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Le style existe en blond, ambré et brun ; la recette varie avec la couleur mais conserve un axe malté et une longue garde.",
        "maltsEtCereales": [
          "Pale/Pilsner, Vienna et Munich selon la couleur ; malts caramel pour les versions ambrées/brunes."
        ],
        "houblons": [
          "Houblons continentaux/nobles bas à modérés, principalement équilibrants."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale fermentée relativement frais ou parfois souche lager selon l'interprétation moderne ; profil propre recherché."
        ],
        "ingredientsComplementaires": [
          "Sucres possibles mais non obligatoires."
        ],
        "profilEau": "Profil modéré, suffisamment minéral pour soutenir le malt sans dureté.",
        "empatage": "Infusion ou paliers visant un corps moyen et une bonne atténuation sans assécher excessivement le malt.",
        "ebullitionEtHoublonnage": "Houblonnage bas à moyen ; le malt doit rester au premier plan.",
        "fermentation": "Fermentation relativement fraîche et propre comparée à la Saison.",
        "maturation": "Longue garde froide caractéristique, destinée à lisser la fermentation et fondre le malt.",
        "profilRecherche": "Une bière du Nord forte mais souple, maltée, toastée et sèche à demi-sèche, avec fermentation propre et longue maturation."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "24C Bière de Garde",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/24/24C/biere-de-garde/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "French-style Bière de Garde",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-belgo-ale",
      "nom": "American-Belgo Ale",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "États-Unis, influence belge",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5,
        "max": 10,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 25,
        "max": 70,
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
        "temperatureMin": 7,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe belge",
          "Teku"
        ]
      },
      "description": "L’American-Belgo Ale met une levure belge dans une machine américaine : houblons plus francs, agrumes, fruits tropicaux, poivre, esters, alcool possible et finale sèche. Le danger est simple : si le houblon et la levure crient ensemble, personne ne chante juste.",
      "histoireEtOrigines": `American Belgo Ale décrit une rencontre plutôt qu'une tradition nationale : celle des brasseurs artisanaux nord-américains avec les levures, sucres, céréales et méthodes belges. À partir de la renaissance craft des années 1980–2000, de nombreuses brasseries américaines ont interprété Saison, Tripel, Strong Ale ou pale ale avec des houblons du Nouveau Monde et une liberté de recette beaucoup plus grande.

Cette famille est donc volontairement transversale. Elle peut aller d'une pale ale houblonnée fermentée avec une souche belge à une strong ale épicée. Ce qui la distingue d'une simple « bière belge brassée aux États-Unis » est l'hybridation assumée : fermentation belge expressive et construction aromatique américaine coexistent au lieu d'essayer de copier exactement un modèle européen.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie hybride très large : la recette dépend du style américain de base et du degré d'expression belge recherché.",
        "maltsEtCereales": [
          "Malt Pilsner ou pale belge comme base ; Vienna, Munich, aromatic ou malts caramel selon la couleur et le style.",
          "Sucres très fermentescibles possibles dans les bières fortes afin d'augmenter le degré alcoolique sans alourdir le corps."
        ],
        "houblons": [
          "Houblons américains ou du Nouveau Monde souvent plus présents que dans les styles belges classiques : agrumes, résine, fruits tropicaux ou fruits blancs."
        ],
        "levuresEtMicroorganismes": [
          "Souche belge fruitée/poivrée utilisée sur une architecture de pale ale, IPA ou strong ale américaine."
        ],
        "ingredientsComplementaires": [
          "Épices ou sucres possibles selon le projet, mais non nécessaires."
        ],
        "profilEau": "Profil généralement modéré : suffisamment de calcium pour la fermentation et la clarification, alcalinité adaptée à la couleur, sans minéralité dure qui masquerait la levure.",
        "empatage": "Empâtage orienté vers une bonne fermentescibilité. Les bières fortes recherchent souvent un moût relativement léger en dextrines afin que l'alcool ne se traduise pas par une texture sirupeuse.",
        "ebullitionEtHoublonnage": "Ébullition franche ; amertume de soutien et ajouts aromatiques mesurés. Les épices, lorsqu'elles existent historiquement ou dans une spécialité, doivent compléter la fermentation plutôt que la remplacer.",
        "fermentation": "Fermentation haute avec contrôle thermique, souvent démarrée modérément puis laissée monter pour achever l'atténuation sans accumuler d'alcools supérieurs agressifs.",
        "maturation": "Conditionnement pouvant inclure une garde en cuve puis une refermentation en bouteille ou en fût. La carbonatation élevée et la maturation sur levure sont des signatures fréquentes mais non universelles.",
        "profilRecherche": "Une bière hybride où la fermentation belge et la construction américaine sont toutes deux reconnaissables, sans que l'une rende l'autre incohérente."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Belgo-style ale / Belgian-style specialty",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "UNESCO",
          "edition": null,
          "reference": "Beer culture in Belgium — Representative List of the Intangible Cultural Heritage of Humanity, inscription 2016",
          "type": "source_institutionnelle",
          "url": "https://ich.unesco.org/en/RL/beer-culture-in-belgium-01062",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "belgian-fruit-beer",
      "nom": "Belgian Fruit Beer",
      "collectionId": 4,
      "nature": "S",
      "parentPrincipalId": "belgian-ale-ale-belge",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Belgique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 12,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 5,
        "max": 40,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 4,
        "max": 80,
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
          "Tulipe belge",
          "Flûte"
        ]
      },
      "description": "La Belgian Fruit Beer n’est pas une bière au sirop : le fruit doit dialoguer avec la base, pas la repeindre en rouge fluo. Cerise, framboise, pêche, abricot ou autres fruits peuvent apporter parfum, acidité, tanin, couleur et sécheresse, mais la bière doit rester reconnaissable.",
      "histoireEtOrigines": `La Belgique possède plusieurs traditions de bière aux fruits, mais elles ne doivent pas être confondues. Les Kriek et Framboise de Lambic appartiennent à la fermentation spontanée et sont traitées ailleurs ; une Belgian Fruit Beer peut au contraire reposer sur une ale belge cultivée, une brune, une blanche, une strong ale ou une autre base non lambic.

Le fruit peut être ajouté sous forme entière, purée, jus ou concentré, pendant ou après la fermentation. Les traditions anciennes privilégient souvent cerise et framboise, mais la scène moderne utilise une palette beaucoup plus large. Le critère encyclopédique important est l'équilibre : la bière de base doit rester perceptible et le fruit ne doit pas donner l'impression d'un arôme artificiel posé sur une bière neutre.

Les bières fruitées spontanées sont volontairement exclues de cette fiche afin de préserver la distinction entre fermentation belge contrôlée et Lambic fruité.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La recette dépend entièrement de la bière de base et du fruit choisi.",
        "maltsEtCereales": [
          "Grain bill de la bière belge de base : Pilsner/pale, blé, malts ambrés ou sombres selon le projet."
        ],
        "houblons": [
          "Houblonnage souvent contenu pour laisser le fruit lisible ; le niveau suit la bière de base."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge de la bière de base ; éviter de confondre avec les fermentations spontanées de Lambic."
        ],
        "ingredientsComplementaires": [
          "Fruits entiers, purées, jus ou zestes ; privilégier des fruits dont l'acidité et l'aromatique restent harmonieux avec la base."
        ],
        "profilEau": "Adapté à la bière de base.",
        "empatage": "Adapté à la bière de base ; conserver suffisamment de structure pour que le fruit ne rende pas la bière aqueuse.",
        "ebullitionEtHoublonnage": "Houblonnage généralement réduit si le fruit apporte déjà acidité ou amertume ; le fruit est souvent ajouté après l'ébullition.",
        "fermentation": "Fermentation de la bière de base puis fermentation secondaire ou refermentation avec le fruit selon le procédé.",
        "maturation": "Assez longue pour intégrer fruit et bière ; certaines versions bénéficient de plusieurs semaines ou mois de contact/maturation.",
        "profilRecherche": "Une bière belge et un fruit perceptibles simultanément, intégrés plutôt qu'empilés, avec acidité, sucre et fermentation en équilibre."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "29A Fruit Beer — excluding Fruit Lambic",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/29/29A/fruit-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "UNESCO",
          "edition": null,
          "reference": "Beer culture in Belgium — Representative List of the Intangible Cultural Heritage of Humanity, inscription 2016",
          "type": "source_institutionnelle",
          "url": "https://ich.unesco.org/en/RL/beer-culture-in-belgium-01062",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style fruit beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    }
  ]
};

export default collection;
