// Source canonique de la collection : taxonomie + contenu encyclopédique.
// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 5,
    "slug": "bieres-de-ble-et-de-seigle",
    "nom": "Bières de blé et de seigle"
  },
  "cartes": [
    {
      "id": "biere-de-ble-wheat-beer",
      "nom": "Bière de blé / Wheat Beer",
      "collectionId": 5,
      "nature": "F",
      "parentPrincipalId": "ale",
      "aliases": [
        "Wheat Beer",
        "Bière de blé"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Europe centrale et traditions mondiales",
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
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "La Bière de blé est une famille de mousse et de souplesse : robe claire à ambrée, texture tendre, céréale fraîche, pain blanc, parfois banane, girofle, agrume ou épices selon la tradition. Le blé n’est pas seulement un ingrédient, c’est une façon de rendre la bière plus ronde, plus trouble, plus vive.",
      "histoireEtOrigines": `La bière de blé n'est pas un style unique mais une très ancienne famille de pratiques brassicoles. Le blé possède assez d'amidon pour nourrir la fermentation, mais son absence d'enveloppe et sa richesse en protéines changent le comportement de la maische, la filtration, la mousse et la texture. Selon les régions et les époques, il a été utilisé seul ou, plus souvent, en mélange avec l'orge maltée. Les traditions qui nous sont parvenues ne forment donc pas une généalogie simple : la Weissbier bavaroise, la Witbier du Brabant et l'American Wheat moderne emploient toutes du blé, mais avec des levures, des céréales, des épices et des objectifs sensoriels très différents.

En Bavière, l'histoire du blé brassicole est étroitement liée à la politique céréalière. Les règles bavaroises du XVIe siècle réservaient largement l'orge à la bière ordinaire afin de protéger le blé destiné au pain, tout en maintenant des privilèges spécifiques de brassage du Weissbier. Le droit détenu par les Degenberger passa aux Wittelsbach au début du XVIIe siècle, ce qui transforma la bière de blé en monopole princier lucratif. La fin progressive de ces privilèges, puis la reprise commerciale portée par Schneider au XIXe siècle, préparent la Weissbier moderne.

En Belgique, d'autres bières blanches à base de froment non malté survivent dans la région de Louvain et Hoegaarden avant de disparaître presque totalement au XXe siècle, puis d'être relancées par Pierre Celis. Aux États-Unis, les brasseurs craft des années 1980 reprennent à leur tour l'idée du wheat beer mais avec des fermentations beaucoup plus neutres. Parler de « bière de blé » revient donc à parler d'un vaste ensemble où la céréale est le fil conducteur, pas la recette.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille de céréale, pas recette unique : Weissbier, Witbier, American Wheat, Weizenbock ou Wheatwine utilisent le blé selon des logiques très différentes.",
        "maltsEtCereales": [
          "Blé malté ou non malté en proportion significative selon le style ; l'orge maltée reste souvent nécessaire pour apporter enveloppes, enzymes et facilité de filtration.",
          "Les proportions vont d'environ un tiers du grain dans certaines American Wheat ou Fruit Wheat à plus de la moitié dans de nombreuses Weissbier et Wheatwine."
        ],
        "houblons": [
          "Houblonnage généralement secondaire dans les traditions européennes, mais potentiellement plus visible dans les interprétations américaines."
        ],
        "levuresEtMicroorganismes": [
          "Levure Weizen expressive, levure belge plus neutre et épicée, levure américaine propre ou autre souche selon le sous-style."
        ],
        "ingredientsComplementaires": [
          "Coriandre, écorces d'agrumes, fruits ou aucun ajout selon la tradition ; ils ne définissent pas la famille entière."
        ],
        "profilEau": "Eau généralement modérée et adaptée au style de base ; une alcalinité faible convient aux versions pâles, tandis que les versions sombres tolèrent davantage de pouvoir tampon.",
        "empatage": "La forte teneur en protéines et bêta-glucanes peut justifier paliers, repos adaptés ou gestion particulière de la filtration. Les malts modernes rendent souvent possible un empâtage plus simple, mais un lit filtrant riche en enveloppes d'orge reste précieux.",
        "ebullitionEtHoublonnage": "Ébullition et amertume sont calibrées au sous-style : très faible dans Weissbier/Witbier, plus affirmées dans American Wheat et fortes dans Wheatwine.",
        "fermentation": "La fermentation est le principal facteur de différenciation : température, souche et pression déterminent si la bière exprimera banane/girofle, épices belges ou neutralité américaine.",
        "maturation": "Souvent courte pour préserver fraîcheur, céréale et fermentation ; les versions fortes comme Weizenbock et Wheatwine gagnent en intégration avec davantage de garde.",
        "profilRecherche": "Une expression nette du blé — mousse, texture, céréale et fraîcheur — cohérente avec le sous-style plutôt qu'un profil aromatique universel."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "German Wheat Beer family",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/10/german-wheat-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wheat Beer families",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "ERDINGER Weissbräu",
          "edition": null,
          "reference": "History of wheat beer and the Bavarian wheat-beer monopoly",
          "type": "source_producteur_historique",
          "url": "https://erdinger.de/en-UK/erdinger-weissbier",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Specialty Malts",
          "edition": null,
          "reference": "Wheat Malt Pale — brewing uses and technical profile",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/?p=7428",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "biere-de-seigle-rye-beer",
      "nom": "Bière de seigle / Rye Beer",
      "collectionId": 5,
      "nature": "F",
      "parentPrincipalId": "ale",
      "aliases": [
        "Rye Beer",
        "Bière de seigle"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Europe et mouvement craft international",
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
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "La Bière de seigle change la texture du verre : pain noir, épices, grain sec, parfois pumpernickel, avec une sensation plus nerveuse que le blé. Le seigle peut donner du mordant, du velours ou une pointe rustique, mais il ne doit pas rendre la bière visqueuse ou brouillonne.",
      "histoireEtOrigines": `Le seigle est une céréale ancienne des régions froides d'Europe, longtemps intégrée à l'alimentation et vraisemblablement à de nombreux brassins locaux avant que les réglementations, la spécialisation agricole et la domination de l'orge ne réduisent son rôle dans la bière. Son histoire brassicole est toutefois beaucoup moins continue et documentée que celle du blé bavarois : il faut éviter de transformer toute bière médiévale contenant du seigle en ancêtre direct du Roggenbier moderne.

Dans la bière contemporaine, le seigle est surtout intéressant pour ce qu'il fait à la structure : saveur de pain noir et de céréale épicée, texture crémeuse, sensation légèrement poivrée et viscosité plus marquée que l'orge. La famille moderne se partage entre le Roggenbier allemand — fermentation Weizen et forte proportion de seigle — et les créations craft où quelques pourcents à plusieurs dizaines de pourcents de seigle renforcent Pale Ale, IPA, Porter ou Farmhouse Ale.

Le BJCP classe le Roggenbier parmi les styles historiques, tandis qu'une « rye beer » américaine ou internationale relève plutôt d'une bière utilisant une céréale alternative. La présente fiche est donc volontairement transversale : elle décrit l'usage brassicole du seigle, pas une recette nationale unique.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le seigle peut définir un Roggenbier ou simplement modifier la texture et le profil d'un autre style ; aucune proportion ni levure n'est universelle.",
        "maltsEtCereales": [
          "Malt de seigle de 5-15 % pour une signature discrète jusqu'à 50 % ou davantage dans certaines Roggenbier, complété par Pilsner, pale, Munich ou Vienna.",
          "Le seigle apporte peu ou pas d'enveloppes : à forte dose il peut compliquer fortement la filtration et accroître la viscosité de la maische."
        ],
        "houblons": [
          "Houblons modérés et continentaux dans Roggenbier ; liberté beaucoup plus grande dans les rye ales craft."
        ],
        "levuresEtMicroorganismes": [
          "Levure Weizen pour le Roggenbier ; levure propre ou expressive du style de base pour les autres rye beers."
        ],
        "ingredientsComplementaires": [
          "Aucun ajout requis ; le grain doit rester identifiable sans être caricaturé par des épices ajoutées."
        ],
        "profilEau": "Profil modéré, adapté au style de base. La perception sèche et épicée du seigle peut être durcie par une eau excessivement sulfatée.",
        "empatage": "À forte proportion de seigle, paliers destinés aux bêta-glucanes, enzymes ajoutées ou enveloppes de riz peuvent faciliter l'écoulement ; l'objectif est une texture crémeuse sans maische collée.",
        "ebullitionEtHoublonnage": "Le houblonnage équilibre le grain : faible à modéré dans la tradition allemande, plus libre dans les interprétations américaines.",
        "fermentation": "Fermentation choisie selon le style : expressive et phénolique pour Roggenbier, plus propre pour mettre en avant la céréale dans une Rye Pale Ale.",
        "maturation": "Courte à moyenne ; le seigle n'exige pas en lui-même une longue garde.",
        "profilRecherche": "Pain de seigle, grain épicé et texture crémeuse, sans lourdeur gommeuse ni piquant artificiel."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "27A Historical Beer: Roggenbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Rye Beer and German-Style Rye Ale categories",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Wit — technical applicability to Roggen/Rye",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/en/global/products/belgian-wit-style-ale-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-wheat-beer",
      "nom": "American Wheat Beer",
      "collectionId": 5,
      "nature": "S",
      "parentPrincipalId": "biere-de-ble-wheat-beer",
      "aliases": [],
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
        "min": 3.5,
        "max": 5.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 10,
        "max": 35,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 4,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Weizen",
          "American pint"
        ]
      },
      "description": "L’American Wheat Beer garde le blé mais retire le théâtre bavarois : pas de banane, pas de girofle, plutôt pain frais, pâte blanche, céréale douce, houblon léger et fermentation propre. Elle peut être cristalline ou trouble, mais elle doit rester facile, fraîche et nette.",
      "histoireEtOrigines": `L'American Wheat Beer naît du mouvement craft américain, non d'une ancienne tradition agricole américaine. Le BJCP situe le premier exemple moderne chez Anchor en 1984, avant une popularisation massive par Widmer. Les brasseurs reprennent la proportion importante de blé et la forte buvabilité des Weissbier allemandes, mais éliminent précisément ce qui définit la fermentation bavaroise : la banane et le girofle.

Cette inversion est fondamentale. Une American Wheat peut être trouble ou brillante, fermentée avec une levure ale propre ou parfois lager, et recevoir des houblons américains, allemands ou du Nouveau Monde. Le blé doit rester perceptible sous forme de pain frais, pâte, céréale ou douceur farineuse, mais la levure ne doit pas donner le profil phénolique d'une Hefeweizen.

Le succès du style dans les brewpubs et microbrasseries a aussi créé un terrain privilégié pour les versions fruitées. C'est l'une des raisons pour lesquelles American Wheat et Fruit Wheat Beer se croisent souvent, même si une version sans fruit reste un style complet en elle-même.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Environ 30-50 % de malt de blé est courant, complété par pale malt ou Pilsner ; la part de blé peut varier selon la texture recherchée."
        ],
        "houblons": [
          "Houblons américains, allemands ou du Nouveau Monde, généralement plus présents que dans Weissbier mais sans transformer automatiquement la bière en IPA."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine propre ou levure lager ; les souches Weizen fortement banane/girofle sont inadaptées au style."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérément minérale ; un sulfate modéré peut renforcer la finale sèche dans les versions houblonnées.",
        "empatage": "Empâtage simple autour de 64-67 °C généralement suffisant avec des malts modernes ; attention à la filtration si la part de blé est élevée.",
        "ebullitionEtHoublonnage": "Amertume faible à modérée et houblon aromatique possible ; le grain reste le caractère malté principal.",
        "fermentation": "Fermentation propre, sans phénols de girofle ni ester de banane dominant.",
        "maturation": "Courte, avec clarification optionnelle selon que la bière est vendue brillante ou trouble.",
        "profilRecherche": "Une bière de blé américaine fraîche, céréalière et nette, plus houblonnée et surtout beaucoup moins levurée qu'une Weissbier."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "1D American Wheat Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/1/1D/american-wheat-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Wheat Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Specialty Malts",
          "edition": null,
          "reference": "Wheat Malt Pale — American Wheat Beer application",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/?p=7428",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "witbier",
      "nom": "Witbier",
      "collectionId": 5,
      "nature": "S",
      "parentPrincipalId": "biere-de-ble-wheat-beer",
      "aliases": [
        "Belgian White"
      ],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Brabant, Belgique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 5.5,
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
        "min": 4,
        "max": 8,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tumbler witbier",
          "Tulipe"
        ]
      },
      "description": "La Witbier est une blanche belge trouble et citronnée : froment, coriandre, orange Curaçao, mousse blanche, corps léger et finale sèche. Elle doit sentir le frais, l’épice fine et l’agrume, pas le parfum de lessive ni la coriandre de cantine.",
      "histoireEtOrigines": `La Witbier appartient à la famille des anciennes bières blanches du Brabant et de la région de Louvain. Leur caractère clair et trouble venait notamment de l'emploi de froment non malté et d'autres céréales, tandis que l'aromatisation pouvait faire appel aux épices bien avant que le houblon ne soit le seul langage aromatique de la bière. Au début du XXe siècle, cette tradition décline rapidement face aux lagers industrielles et aux changements de consommation.

La dernière brasserie traditionnelle de Hoegaarden, Tomsin, ferme en 1957. Le style moderne ne descend donc pas d'une production ininterrompue : il s'agit d'un véritable revival. Hoegaarden situe la relance en 1965, lorsque Pierre Celis recommence à brasser dans son village ; le BJCP retient 1966 pour le démarrage de la brasserie qui deviendra Hoegaarden. Cette nuance de date illustre bien le caractère reconstruit du style moderne.

La Witbier contemporaine emploie typiquement 30 à 60 % de froment non malté, une base d'orge très pâle, parfois un peu d'avoine, une levure belge relativement douce et des épices dominées par la coriandre et l'écorce d'orange de Curaçao. Son trouble est donc à la fois une conséquence des céréales riches en protéines/amidon et, selon le produit, de la levure. Le but n'est pas une bière épicée au sens culinaire, mais une bière extrêmement fraîche où céréale, agrume, fermentation et épices se confondent.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "30-60 % de froment non malté selon le BJCP, complété par malt Pilsner très pâle ; jusqu'à environ 5-10 % d'avoine ou d'autres céréales crues dans certaines versions."
        ],
        "houblons": [
          "Houblonnage faible, épicé ou herbacé, destiné à soutenir la sécheresse sans masquer les agrumes et la coriandre."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge modérément fruitée/épicée, moins dominée par banane et girofle qu'une souche Hefeweizen."
        ],
        "ingredientsComplementaires": [
          "Coriandre fraîchement concassée et écorce d'orange amère de Curaçao sont les marqueurs classiques ; d'autres épices peuvent exister mais doivent rester secondaires."
        ],
        "profilEau": "Eau plutôt douce à modérée, faible en alcalinité pour maintenir la pâleur et la fraîcheur.",
        "empatage": "Les céréales crues peuvent nécessiter une gestion plus attentive de la conversion et de la viscosité ; le trouble ne doit pas devenir une excuse pour une mauvaise extraction.",
        "ebullitionEtHoublonnage": "Amertume basse ; les épices sont souvent ajoutées tard en ébullition pour préserver leur fraîcheur aromatique.",
        "fermentation": "Fermentation haute modérée, laissant des esters et épices de levure sans basculer dans le profil Hefeweizen.",
        "maturation": "Courte : le style est fragile et gagne à être consommé frais, avec carbonatation élevée.",
        "profilRecherche": "Une blanche belge pâle, trouble, sèche et effervescente, où froment, agrume et coriandre restent intégrés et jamais parfumés artificiellement."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "24A Witbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/24/24A/witbier/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-Style Witbier",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Hoegaarden",
          "edition": null,
          "reference": "History — closure in 1957 and revival by Pierre Celis in 1965",
          "type": "source_producteur_historique",
          "url": "https://www.hoegaarden.com/history",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Wit — Belgian wheat yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/en/global/products/belgian-wit-style-ale-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "weissbier-hefeweizen",
      "nom": "Weissbier / Hefeweizen",
      "collectionId": 5,
      "nature": "S",
      "parentPrincipalId": "biere-de-ble-wheat-beer",
      "aliases": [
        "Weissbier",
        "Hefeweizen",
        "Weizenbier"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bavière",
        "ville": null,
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.3,
        "max": 5.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 8,
        "max": 15,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 4,
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
          "Weizen"
        ]
      },
      "description": "La Weissbier est la grande mousse bavaroise : blé, trouble doré, banane, girofle, pain frais, texture crémeuse et carbonatation haute. Elle paraît douce mais doit finir assez sèche, comme une brioche qui aurait appris à pétiller.",
      "histoireEtOrigines": `La Weissbier bavaroise moderne résulte d'une histoire où le brassage du blé fut à la fois restreint et privilégié. ERDINGER rappelle qu'à partir de 1567 le brassage au blé est interdit dans le duché de Bavière, sauf privilège particulier. Les Degenberger de Basse-Bavière disposent d'un tel droit ; lorsque la lignée s'éteint en 1602, le privilège revient au duc Maximilien et devient une source importante de revenus pour la maison de Wittelsbach.

Au XIXe siècle, cette économie de monopole s'essouffle. Le BJCP fait remonter la Weissbier moderne à 1872, lorsque Georg Schneider lance commercialement sa version ambrée après avoir obtenu les droits nécessaires. La bière de blé reste pourtant longtemps moins dominante qu'aujourd'hui : la Weissbier pâle ne devient réellement populaire qu'à partir des années 1960. Cela explique pourquoi l'image internationale d'une Hefeweizen presque blanche est relativement récente.

Techniquement, le style repose sur au moins la moitié de malt de blé, complété par Pilsner, avec une levure Weizen qui produit un équilibre reconnaissable d'ester de banane et de phénol de girofle. Ces arômes sont bien issus de la fermentation : ajouter de la banane ou du clou de girofle serait contraire à la logique du style. La forte carbonatation, la mousse abondante, la faible amertume et la finale sèche rendent la bière beaucoup plus légère à boire que son aspect crémeux ne le laisse penser.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Au moins 50 % de malt de blé ; Pilsner comme base d'orge, avec faibles ajouts éventuels de Munich ou Vienna selon la couleur."
        ],
        "houblons": [
          "Houblons nobles allemands à faible intensité ; l'amertume reste basse."
        ],
        "levuresEtMicroorganismes": [
          "Souche Weizen Saccharomyces cerevisiae riche en esters et phénols. LalBrew Munich Classic, par exemple, est donnée à 76-83 % d'atténuation et 17-25 °C avec profil banane/girofle."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérément minérale, sans sulfate agressif ; les chlorures peuvent soutenir la rondeur céréalière.",
        "empatage": "Infusion multi-palier ou décoction traditionnelle ; certains brasseurs utilisent un ferulic rest autour de 43-45 °C pour favoriser les précurseurs du 4-vinyl-guaiacol, mais la levure et la fermentation restent déterminantes.",
        "ebullitionEtHoublonnage": "Houblonnage discret et ébullition classique ; l'arôme principal vient du grain et de la fermentation.",
        "fermentation": "La température, le taux d'ensemencement et la pression modulent fortement banane et girofle. Une fermentation relativement fraîche et ouverte peut aider à conserver un profil traditionnel équilibré.",
        "maturation": "Courte ; service jeune, avec levure en suspension pour Hefeweizen et carbonatation élevée.",
        "profilRecherche": "Banane et girofle équilibrés, pain de blé, mousse abondante, corps moelleux mais finale sèche et pétillante."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "10A Weissbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/10/german-wheat-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Hefeweizen",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "ERDINGER Weissbräu",
          "edition": null,
          "reference": "History of wheat beer and Bavarian wheat-beer privileges",
          "type": "source_producteur_historique",
          "url": "https://erdinger.de/en-UK/erdinger-weissbier",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schneider Weisse",
          "edition": null,
          "reference": "Brewery history — modern wheat-beer tradition",
          "type": "source_producteur_historique",
          "url": "https://prd-web.schneider-weisse.de/en/node/16",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Munich Classic — Bavarian wheat yeast",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/en/continental-europe/products/munich-classic-wheat-beer-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "kristallweizen",
      "nom": "Kristallweizen",
      "collectionId": 5,
      "nature": "SS",
      "parentPrincipalId": "weissbier-hefeweizen",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bavière",
        "ville": null,
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.3,
        "max": 5.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 8,
        "max": 15,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 4,
        "max": 12,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Weizen"
        ]
      },
      "description": "La Kristallweizen est une Weissbier passée au verre poli : même base de blé, même famille banane-girofle, mais filtrée jusqu’à devenir brillante. Elle perd le voile et une partie du moelleux levuré, gagne en netteté, en éclat, en claquant visuel.",
      "histoireEtOrigines": `Kristallweizen n'est pas une ancienne lignée séparée de la Weissbier : c'est une manière de finir et de présenter une bière de blé allemande. Le moût et la fermentation appartiennent au même univers que la Weizen, mais la levure et les particules responsables du trouble sont retirées avant conditionnement afin d'obtenir une bière brillante, d'où le terme « Kristall ».

Le BJCP traite d'ailleurs les versions Kristall comme des variantes filtrées de Weissbier plutôt que comme un style autonome. Les guides de compétition de la Brewers Association leur donnent néanmoins une catégorie dédiée, car l'absence de levure en suspension modifie nettement la perception : moins de caractère levuré, impression plus sèche et plus nette, carbonatation très vive.

ERDINGER documente un procédé représentatif : maturation en cuves fermées, forte carbonatation, puis filtration jusqu'à limpidité complète. Cette technique montre que la différence essentielle ne vient pas d'une recette secrète mais du conditionnement. Une bonne Kristallweizen doit donc rester reconnaissable comme bière de blé bavaroise tout en offrant une expression plus brillante et rafraîchissante.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base de Weissbier : au moins environ 50 % de blé malté, complété par Pilsner et éventuellement un peu de malt de caractère."
        ],
        "houblons": [
          "Faible houblonnage noble allemand."
        ],
        "levuresEtMicroorganismes": [
          "Levure Weizen traditionnelle, mais retirée au conditionnement par filtration."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérée, favorisant une finale nette.",
        "empatage": "Comme une Weissbier classique ; décoction ou paliers possibles mais non requis par la définition moderne.",
        "ebullitionEtHoublonnage": "Amertume basse, aucun houblonnage aromatique dominant.",
        "fermentation": "Fermentation Weizen produisant esters et phénols, puis maturation avant clarification.",
        "maturation": "Maturation en cuve puis filtration poussée ; carbonatation élevée conservée pour le caractère pétillant.",
        "profilRecherche": "Une Weissbier cristalline, vive et nette, où le grain et les esters restent perceptibles mais où la levure en suspension ne brouille plus le palais."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "10A Weissbier — Kristall variant",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/10/german-wheat-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Kristal Weizen",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "ERDINGER Weissbräu",
          "edition": null,
          "reference": "ERDINGER Kristall — filtration and tank maturation",
          "type": "fiche_technique_producteur",
          "url": "https://static.erdinger.de/assets/downloads/presse/int/press_release_ERDINGER_Kristall.pdf",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "leichtes-weizen",
      "nom": "Leichtes Weizen",
      "collectionId": 5,
      "nature": "SS",
      "parentPrincipalId": "weissbier-hefeweizen",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bavière",
        "ville": null,
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 2.5,
        "max": 3.5,
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
        "min": 4,
        "max": 30,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Weizen"
        ]
      },
      "description": "La Leichtes Weizen est la Weissbier en format plume : moins d’alcool, corps allégé, mais toujours mousse, blé, banane, girofle et fraîcheur. Le piège est évident : si on enlève trop de matière, il ne reste qu’un fantôme de Weizen.",
      "histoireEtOrigines": `Leichtes Weizen signifie littéralement une Weizen légère. Il ne s'agit pas d'une bière de ferme médiévale ressuscitée mais d'une déclinaison allemande de consommation courante, développée dans un marché où les versions faiblement alcoolisées et, plus récemment, sans alcool occupent une place importante. Le BJCP mentionne explicitement la popularité en Allemagne des versions légères de Weissbier ; la Brewers Association les distingue comme catégorie de compétition.

La difficulté du style est de réduire alcool, extrait et calories sans perdre les marqueurs de la bière de blé. Une Leichtes Weizen doit donc conserver mousse, carbonatation et expression modérée de banane/girofle, mais avec un corps plus léger et une complexité fermentaire moins intense qu'une Hefeweizen standard. ERDINGER, par exemple, commercialise une version Leicht à 3,1 % vol., illustrant ce positionnement.

Le style est un bon rappel qu'une réduction d'alcool n'est pas une simple dilution : le rapport entre densité initiale, fermentescibilité, levure, carbonatation et texture doit être reconstruit pour garder une vraie identité Weizen.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Forte proportion de malt de blé et Pilsner, avec densité initiale réduite ; petites quantités de Munich/Vienna possibles pour préserver la profondeur maltée."
        ],
        "houblons": [
          "Houblonnage très faible à faible, proportionné au corps réduit."
        ],
        "levuresEtMicroorganismes": [
          "Levure Weizen expressive mais conduite de façon à produire banane et girofle plus discrets qu'une Hefeweizen standard."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérée ; éviter une minéralité trop marquée que le faible corps ne pourrait absorber.",
        "empatage": "Empâtage favorisant un moût fermentescible mais pas aqueux ; paliers possibles pour construire mousse et texture malgré la faible densité.",
        "ebullitionEtHoublonnage": "Amertume minimale ; pas d'aromatique houblonnée dominante.",
        "fermentation": "Fermentation Weizen contrôlée avec attention car les mêmes taux d'esters et phénols paraîtraient plus intenses dans une bière plus légère.",
        "maturation": "Courte, carbonatation élevée et service très frais.",
        "profilRecherche": "Une vraie Weizen allégée : mousseuse, céréalière, légèrement bananée-épicée, mais plus sèche et plus légère en alcool."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "10A Weissbier — light variants",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/10/german-wheat-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Leichtes Weizen",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "ERDINGER Weissbräu",
          "edition": null,
          "reference": "ERDINGER Leicht — 3.1% ABV reference",
          "type": "source_producteur",
          "url": "https://de.erdinger.de/bundles/erdingerwebsite/images/verbraucherinformationen/Privatbrauerei-ERDINGER-Weissbraeu-Umwelterklaerung-2023.pdf",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "bernsteinfarbenes-weizen",
      "nom": "Bernsteinfarbenes Weizen",
      "collectionId": 5,
      "nature": "SS",
      "parentPrincipalId": "weissbier-hefeweizen",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bavière",
        "ville": null,
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.3,
        "max": 5.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 10,
        "max": 20,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 18,
        "max": 36,
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
          "Weizen"
        ]
      },
      "description": "La Bernsteinfarbenes Weizen est la Weizen ambrée : blé, levure bavaroise, banane et girofle, mais avec plus de pain grillé, croûte et malt rond. Elle se place entre la Weissbier pâle et la Dunkelweizen, comme un coucher de soleil dans un verre Weizen.",
      "histoireEtOrigines": `Bernsteinfarbenes Weizen — littéralement Weizen ambrée — est avant tout une catégorie descriptive moderne située entre la Weissbier pâle et le Dunkles Weissbier. Elle ne possède pas une histoire autonome comparable à celle de la Weissbier bavaroise : elle formalise plutôt un spectre de couleurs et de profils maltés qui a toujours été plus continu que ne le laissent penser les cases de concours.

Cette nuance est historiquement cohérente. La Weissbier moderne de Schneider, lancée en 1872, était elle-même ambrée, alors que la version très pâle ne devient dominante qu'au XXe siècle, particulièrement à partir des années 1960. L'ambré n'est donc pas une invention récente ; ce qui est récent, c'est son isolement comme sous-catégorie précise.

La Brewers Association reconnaît Bernsteinfarbenes Weizen comme catégorie distincte. En pratique, elle conserve la fermentation banane/girofle et la forte part de blé, tout en ajoutant davantage de pain grillé, biscuit, caramel léger ou croûte de pain par l'emploi de Vienna, Munich et malts de blé plus colorés.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Au moins environ 50 % de blé malté, complété par Pilsner, Vienna ou Munich ; petite part de caramel ou blé foncé pour atteindre l'ambre sans goût torréfié."
        ],
        "houblons": [
          "Houblons nobles très discrets."
        ],
        "levuresEtMicroorganismes": [
          "Levure Weizen traditionnelle, banane et girofle modérés à soutenus."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérée, avec chlorures suffisants pour soutenir le malt sans rendre la bière lourde.",
        "empatage": "Décoction ou paliers possibles pour accentuer pain et profondeur maltée ; infusion moderne possible avec malts bien modifiés.",
        "ebullitionEtHoublonnage": "Amertume faible ; la couleur vient des malts, pas d'une surcuisson agressive.",
        "fermentation": "Fermentation Weizen contrôlée ; le malt plus riche doit rester en équilibre avec les esters et phénols.",
        "maturation": "Courte à moyenne, service avec levure possible.",
        "profilRecherche": "Une Weizen ambrée où banane/girofle rencontrent pain, biscuit et caramel léger sans basculer dans le Dunkelweizen."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "10A/10B German Wheat Beer historical context",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/10/german-wheat-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Bernsteinfarbenes Weizen",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schneider Weisse",
          "edition": null,
          "reference": "History — 1872 amber Weissbier tradition",
          "type": "source_producteur_historique",
          "url": "https://prd-web.schneider-weisse.de/en/node/16",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "dunkelweizen",
      "nom": "Dunkelweizen",
      "collectionId": 5,
      "nature": "SS",
      "parentPrincipalId": "weissbier-hefeweizen",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bavière",
        "ville": null,
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.3,
        "max": 5.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 10,
        "max": 18,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 28,
        "max": 46,
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
          "Weizen"
        ]
      },
      "description": "La Dunkelweizen est la Weissbier en pain brun : banane, girofle, blé crémeux, mais aussi croûte, caramel léger, pain grillé et parfois une touche de cacao doux. Elle doit être sombre et moelleuse, jamais torréfiée comme une stout.",
      "histoireEtOrigines": `Le Dunkelweizen n'est pas une Weissbier claire à laquelle on aurait simplement ajouté du malt noir. Il représente la continuité d'une époque où les malts bavarois étaient naturellement plus foncés. Le BJCP rappelle que la tradition de bière de blé bavaroise est vieille de plusieurs siècles et que les anciennes bières de blé étaient souvent sombres, comme la majorité des bières de l'époque.

Lorsque les malts pâles et les lagers blondes deviennent des références industrielles, la bière de blé claire finit elle aussi par gagner le public, surtout à partir des années 1960. Le Dunkelweizen devient alors une branche plus explicitement « sombre », désormais moins courante en Allemagne mais conservant un lien très direct avec le socle historique du Weissbier.

Sensoriellement, le style combine le profil banane/girofle de la fermentation Weizen avec la richesse de Munich/Vienna, donnant pain grillé, croûte, caramel léger et parfois une touche de chocolat très douce. La torréfaction dure, le café brûlé et la cendre sont hors sujet : le résultat doit rester une bière de blé moelleuse et hautement buvable, pas un stout fermenté avec levure Weizen.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Au moins 50 % de malt de blé, souvent associé à Munich et/ou Vienna ; blé foncé, caramel wheat ou malt colorant en petite quantité."
        ],
        "houblons": [
          "Houblons nobles allemands très bas à bas."
        ],
        "levuresEtMicroorganismes": [
          "Levure Weizen banane/girofle ; l'expression peut sembler un peu plus douce car le malt sombre occupe davantage le palais."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérée, avec alcalinité suffisante pour le malt plus foncé mais sans dureté excessive.",
        "empatage": "Décoction traditionnelle possible ; paliers ou infusion moderne selon les malts.",
        "ebullitionEtHoublonnage": "Amertume faible, aucune torréfaction recherchée.",
        "fermentation": "Comme Weissbier, avec contrôle de l'équilibre ester/phénol.",
        "maturation": "Courte à moyenne ; souvent conditionnée avec levure et forte carbonatation.",
        "profilRecherche": "Pain brun, caramel léger et blé moelleux sous une fermentation banane/girofle nette, sans café ni brûlé."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "10B Dunkles Weissbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/10/german-wheat-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Dunkel Weizen",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Munich Classic — Dunkelweizen yeast profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/en/continental-europe/products/munich-classic-wheat-beer-yeast/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "ERDINGER Weissbräu",
          "edition": null,
          "reference": "ERDINGER Dunkel — wheat beer range",
          "type": "source_producteur",
          "url": "https://int.erdinger.de/beer.html",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "weizenbock",
      "nom": "Weizenbock",
      "collectionId": 5,
      "nature": "SS",
      "parentPrincipalId": "weissbier-hefeweizen",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bavière",
        "ville": null,
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6.5,
        "max": 9,
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
        "min": 12,
        "max": 60,
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
          "Weizenbock glass",
          "Tulipe"
        ]
      },
      "description": "La Weizenbock est la bock qui a mangé une Weissbier : blé, banane, girofle, malt riche, pain grillé, fruits mûrs, alcool doux et corps ample. En version sombre, elle peut tirer vers prune, raisin et caramel ; en version pâle, vers pain clair et miel.",
      "histoireEtOrigines": `Le Weizenbock réunit deux traditions bavaroises : la fermentation expressive de la Weissbier et la puissance maltée du Bock. Son histoire moderne est exceptionnellement bien documentée par Schneider Weisse. En 1907, Mathilde Schneider transforme la recette familiale en une bière de blé forte et lance Aventinus, que la brasserie présente comme le premier Weizenstarkbier de Bavière. Le nom rend hommage à l'historien bavarois Johannes Aventinus.

Le style n'est pas limité à une seule couleur. Le BJCP accepte aujourd'hui des versions pâles comme sombres et une force allant du Bock au Doppelbock. Les versions sombres combinent pain, Maillard, fruits secs et fermentation Weizen ; les versions pâles mettent davantage en avant céréale, fruit, alcool et levure.

La difficulté est l'équilibre. Une Weizenbock forte ne doit ni devenir une Doppelbock où la levure Weizen aurait disparu, ni une Hefeweizen sucrée et alcoolisée. L'atténuation, le taux d'ensemencement et la garde doivent permettre à la banane, au girofle, au blé et au malt riche de rester lisibles sans chaleur solvante.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Le style couvre des versions pâles et sombres ; la recette varie mais doit toujours unir blé/levure Weizen et richesse de Bock.",
        "maltsEtCereales": [
          "Au moins environ 50 % de blé malté ; Pilsner pour version pâle, Munich/Vienna et malts de blé plus foncés pour version sombre."
        ],
        "houblons": [
          "Houblonnage noble bas, uniquement pour équilibrer la forte densité."
        ],
        "levuresEtMicroorganismes": [
          "Souche Weizen capable de tolérer l'alcool tout en conservant banane et girofle ; LalBrew Munich Classic est annoncée jusqu'à 12 % ABV."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérée, adaptée à la couleur ; éviter une minéralité agressive qui amplifierait l'alcool.",
        "empatage": "Paliers ou décoction particulièrement pertinents pour construire fermentescibilité et profondeur de malt ; la haute densité exige une conversion complète.",
        "ebullitionEtHoublonnage": "Ébullition suffisamment longue pour concentrer et développer le malt sans caramel brûlé ; faible houblonnage d'équilibre.",
        "fermentation": "Ensemencement sain et gestion thermique stricte : la levure doit produire ses esters/phénols caractéristiques sans alcools supérieurs agressifs.",
        "maturation": "Plus longue qu'une Weissbier standard ; plusieurs semaines à plusieurs mois selon force et conditionnement.",
        "profilRecherche": "Une bière de blé forte et complexe, riche comme un Bock mais clairement Weizen par son blé, sa banane, son girofle et sa texture."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "10C Weizenbock",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/10/10C/weizenbock/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Weizenbock",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schneider Weisse",
          "edition": null,
          "reference": "History — Aventinus, first Bavarian Weizenstarkbier, 1907",
          "type": "source_producteur_historique",
          "url": "https://exchange.schneider-weisse.de/unsere-geschichte",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Munich Classic — Weizenbock yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/en/continental-europe/products/munich-classic-wheat-beer-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "fruit-wheat-beer",
      "nom": "Fruit Wheat Beer",
      "collectionId": 5,
      "nature": "S",
      "parentPrincipalId": "biere-de-ble-wheat-beer",
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
        "min": 2.5,
        "max": 12,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 10,
        "max": 35,
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
        "temperatureMin": 4,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Weizen",
          "Tulipe"
        ]
      },
      "description": "La Fruit Wheat Beer ajoute le fruit à une base de blé : framboise, agrume, pêche, cerise, fruit tropical ou autre, mais la céréale doit rester là. Le fruit doit apporter parfum, acidité ou couleur, pas transformer la bière en soda de fête foraine.",
      "histoireEtOrigines": `Fruit Wheat Beer est avant tout une catégorie moderne de brassage et de concours, pas une tradition historique unique. Elle s'est développée naturellement parce que les bières de blé offrent une base légère, mousseuse et peu amère sur laquelle le fruit peut rester très lisible. Aux États-Unis notamment, l'American Wheat est devenue l'un des supports favoris des bières à framboise, agrumes, pêche ou fruits tropicaux.

La Brewers Association définit aujourd'hui la catégorie avec au moins 30 % de blé malté et demande que le fruit ou son extrait apporte une expression réellement identifiable. La catégorie est volontairement large : la fermentation peut être ale ou lager selon le style de base, la bière peut être claire ou trouble, et la couleur peut être influencée par le fruit.

Le point essentiel est de ne pas confondre Fruit Wheat Beer avec toute bière de blé contenant un fruit. Une Witbier fruitée fermentée dans une logique belge, une Berliner Weisse acide aux fruits ou une bière de blé barriquée peuvent relever d'autres familles de concours. Pour ZythoHunt, cette fiche représente donc la version non acide et non barriquée où le fruit s'intègre à une base wheat beer sans l'effacer.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie de spécialité : la recette dépend du wheat beer de base et du fruit choisi.",
        "maltsEtCereales": [
          "Au moins 30 % de blé malté dans le cadre BA 2026 ; base pale/Pilsner adaptée au style sous-jacent."
        ],
        "houblons": [
          "Faible à modéré ; le houblon ne doit pas écraser le fruit."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale ou lager selon la base ; les fermentations acides ou fortement belges peuvent faire basculer la bière dans une autre catégorie."
        ],
        "ingredientsComplementaires": [
          "Fruit entier, purée, jus ou extrait de qualité ; ajout en brassage, fermentation ou maturation selon le fruit et le résultat recherché."
        ],
        "profilEau": "Profil souple et discret, évitant sulfate ou alcalinité qui durciraient acidité et peau du fruit.",
        "empatage": "Comme la base wheat beer ; prévoir une fermentescibilité suffisante pour éviter qu'un fruit sucré ne rende la bière lourde.",
        "ebullitionEtHoublonnage": "Houblonnage contenu. Les fruits délicats sont généralement mieux ajoutés hors ébullition pour préserver leur arôme.",
        "fermentation": "Le fruit peut refermenter et modifier alcool, acidité, couleur et densité ; suivre la fermentation jusqu'à stabilité réelle.",
        "maturation": "Courte à moyenne ; protéger de l'oxygène pour préserver couleur et fraîcheur du fruit.",
        "profilRecherche": "Une wheat beer identifiable et fraîche où le fruit paraît naturel, intégré et fermenté plutôt qu'ajouté comme un sirop."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Fruit Wheat Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": null,
          "reference": "2026 Beer Style Guidelines PDF — Fruit Wheat Beer: minimum 30% malted wheat",
          "type": "guide_de_style",
          "url": "https://cdn.brewersassociation.org/wp-content/uploads/2025/12/19140641/2026_BA_Beer_Style_Guidelines.pdf",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Specialty Malts",
          "edition": null,
          "reference": "Wheat Malt Pale — fruit wheat applications",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/?p=7428",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "wheatwine",
      "nom": "Wheatwine",
      "collectionId": 5,
      "nature": "S",
      "parentPrincipalId": "biere-de-ble-wheat-beer",
      "aliases": [
        "Wheat Wine"
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
        "min": 8,
        "max": 12,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 30,
        "max": 60,
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
        "temperatureMin": 10,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Snifter",
          "Tulipe"
        ]
      },
      "description": "Le Wheatwine est une bière de blé devenue vin de feu : forte, ample, veloutée, avec pain, miel, caramel, fruits secs, alcool chaud et parfois bois. Elle doit être massive mais élégante, plus soie lourde que sirop de céréale.",
      "histoireEtOrigines": `Wheatwine est une création craft américaine récente et bien datée. Le BJCP attribue le premier brassin à Rubicon Brewing Company en 1988. Le style s'inspire de la logique des Barleywines — forte densité, alcool élevé, bière de dégustation — mais place le blé au premier plan plutôt que de simplement substituer quelques kilos de grain dans une recette de Barleywine.

Les guides modernes demandent généralement une proportion très élevée de blé : le BJCP indique couramment 50 % ou davantage, et la Brewers Association exige au moins 50 % de malt de blé dans sa catégorie American-Style Wheat Wine Ale. Malgré le nom « wine », il s'agit bien d'une bière fermentée à partir de céréales, sans raisin obligatoire.

Le profil combine pain de blé, miel, caramel léger, fruits de fermentation et chaleur alcoolique douce. Le houblon peut être perceptible mais doit rester moins central que dans un American Barleywine. Surtout, le style descend de l'American Wheat et non de la Weissbier allemande : banane et girofle de levure Weizen sont considérés comme inappropriés. Certaines versions gagnent en complexité par l'élevage en bois, mais celui-ci n'est pas obligatoire.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "50 % ou davantage de malt de blé ; pale malt américain comme complément, petites quantités de malts caramel/toastés pour la complexité sans masquer le grain."
        ],
        "houblons": [
          "Amertume moyenne à forte pour équilibrer la densité, arôme de houblon faible à modéré ; variété libre."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine robuste et tolérante à l'alcool ; pas de levure Hefeweizen banane/girofle."
        ],
        "ingredientsComplementaires": [
          "Élevage bois possible mais non requis."
        ],
        "profilEau": "Minéralité modérée ; assez de sulfate pour l'équilibre sans sécher excessivement la texture veloutée du blé.",
        "empatage": "Empâtage visant une bonne fermentescibilité malgré une densité initiale très élevée ; attention à la viscosité et à la filtration avec plus de 50 % de blé.",
        "ebullitionEtHoublonnage": "Ébullition souvent prolongée pour concentrer le moût et développer miel/caramel ; houblonnage d'équilibre plus ferme qu'une wheat beer standard.",
        "fermentation": "Oxygénation, levure saine et gestion de température essentielles pour éviter solvants et fermentation incomplète dans un moût très dense.",
        "maturation": "Longue : plusieurs mois sont courants, avec vieillissement supplémentaire possible en bouteille ou en bois.",
        "profilRecherche": "Une bière de dégustation forte, soyeuse et céréalière, où le blé reste au premier plan malgré alcool, fruits, malt et houblon."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "22D Wheatwine",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/22D/wheatwine/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Wheat Wine Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "World Beer Cup / Brewers Association",
          "edition": null,
          "reference": "2026 American-Style Wheat Wine Ale — minimum 50% wheat malt",
          "type": "guide_de_style",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Specialty Malts",
          "edition": null,
          "reference": "Wheat Malt Pale — Wheatwine application",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/?p=7428",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "roggenbier-german-rye-ale",
      "nom": "Roggenbier / German Rye Ale",
      "collectionId": 5,
      "nature": "S",
      "parentPrincipalId": "biere-de-seigle-rye-beer",
      "aliases": [
        "Roggenbier",
        "German Rye Ale"
      ],
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
        "min": 4.5,
        "max": 6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 10,
        "max": 25,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 20,
        "max": 50,
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
          "Weizen",
          "Seidel"
        ]
      },
      "description": "La Roggenbier est une cousine sombre et épicée de la Weizen : seigle, pain noir, pumpernickel, texture dense, levure bavaroise, banane légère et girofle. Elle doit être rustique et moelleuse, pas pâteuse comme une cuve de boulanger oubliée.",
      "histoireEtOrigines": `Le Roggenbier moderne est une bière allemande au seigle construite sur une logique proche du Dunkles Weissbier : haute fermentation, levure Weizen, faible houblonnage et forte expression céréalière, mais le seigle remplace une grande partie du blé. Le BJCP le classe parmi les Historical Beer, signe qu'il s'agit aujourd'hui d'un style minoritaire plutôt que d'une catégorie courante du marché allemand.

Il faut manier avec prudence le récit selon lequel le Roggenbier actuel serait la continuation intacte d'une bière allemande dominante avant 1516. Le seigle était bien une céréale importante dans l'Europe médiévale et les politiques bavaroises réservaient blé et seigle à l'alimentation, mais les recettes modernes ne peuvent pas être projetées directement sur ces bières anciennes. Le Roggenbier d'aujourd'hui est plutôt une reconstruction brassicole inspirée de cette mémoire céréalière.

Sensoriellement, le style doit ressembler à une Weizen sombre où le seigle apporte pain noir, poivre, grain sec et une texture plus crémeuse. La levure fournit toujours banane et girofle, mais le seigle rend le profil plus rustique et plus dense. À forte proportion, ses bêta-glucanes compliquent aussi fortement la filtration, ce qui fait du procédé une part essentielle du style.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Forte proportion de malt de seigle, souvent autour de 50 % ou plus dans les interprétations classiques, complétée par Pilsner, Munich ou Vienna."
        ],
        "houblons": [
          "Houblons allemands ou continentaux, faible à modéré, parfois un peu plus perceptibles qu'en Dunkelweizen."
        ],
        "levuresEtMicroorganismes": [
          "Levure Weizen produisant banane et girofle, qui doit s'intégrer au pain/poivre du seigle."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérée ; éviter sulfate excessif et alcalinité haute qui rendraient la finale rugueuse.",
        "empatage": "La viscosité du seigle exige une gestion attentive : repos bêta-glucanase possible, empâtage multi-palier et enveloppes de riz utiles pour prévenir un lit filtrant bloqué.",
        "ebullitionEtHoublonnage": "Amertume modérée mais secondaire face au grain et à la levure.",
        "fermentation": "Fermentation haute Weizen, avec gestion de température orientée vers un équilibre banane/girofle plutôt qu'une domination fruitée.",
        "maturation": "Courte à moyenne, souvent servie trouble avec carbonatation soutenue.",
        "profilRecherche": "Une bière de seigle allemande crémeuse et sèche, poivrée et panifiée, avec fermentation Weizen nette et aucune lourdeur gommeuse."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "27A Historical Beer: Roggenbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Rye Ale / Roggenbier",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Wit — Roggen/Rye application",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/en/global/products/belgian-wit-style-ale-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    }
  ]
};

export default collection;
