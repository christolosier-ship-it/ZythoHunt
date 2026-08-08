// Source canonique de la collection : taxonomie + contenu encyclopédique.
// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 6,
    "slug": "bieres-acides-sauvages-et-spontanees",
    "nom": "Bières acides, sauvages et spontanées"
  },
  "cartes": [
    {
      "id": "biere-acide-sour-beer",
      "nom": "Bière acide / Sour Beer",
      "collectionId": 6,
      "nature": "F",
      "parentPrincipalId": null,
      "aliases": [
        "Sour",
        "Sour Beer",
        "Bière acide"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Traditions européennes et mouvement craft mondial",
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
      "description": "La Bière acide n’est pas juste une bière qui grimace : c’est une famille où l’acidité remplace souvent l’amertume comme colonne vertébrale. Citron, pomme verte, yaourt, vinaigre doux, fruit mûr, bois, funk ou cave peuvent apparaître selon la méthode, mais l’équilibre doit rester buvable.",
      "histoireEtOrigines": `« Sour beer » est d’abord une catégorie sensorielle et technique, pas une lignée historique unique. L’acidité peut provenir de traditions très différentes : Berliner Weisse allemande, Gose, rouges et brunes des Flandres, lambic du Pajottenland et de la vallée de la Senne, ou créations craft utilisant des bactéries lactiques en cuve. Les réunir sous un même nom est utile pour le lecteur, mais ne doit pas effacer leurs histoires propres.

Le renouveau craft des bières acides a aussi multiplié les procédés. Le kettle souring acidifie rapidement le moût avec des bactéries lactiques avant de les éliminer par chauffage ; une fermentation mixte longue laisse au contraire levures et bactéries évoluer ensemble pendant des mois ; la fermentation spontanée repose sur l’ensemencement naturel lors du refroidissement. Ces méthodes peuvent produire une acidité comparable au premier abord mais des profondeurs aromatiques, des risques microbiologiques et des temporalités radicalement différentes.

Une dernière distinction est essentielle : Brettanomyces n’est pas synonyme d’acidité. Une Brett Beer bien conduite peut être très sèche, fruitée et « funky » sans acidité lactique marquée. L’appellation Sour doit donc décrire le résultat acide, tandis que Wild, Mixed et Spontaneous décrivent plutôt des familles de fermentation.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille sensorielle et technique couvrant des procédés incompatibles avec une recette unique.",
        "maltsEtCereales": [
          "Base Pilsner ou pale claire ; blé fréquent selon le style.",
          "Recette volontairement simple afin de laisser l’acidité et la fermentation rester lisibles."
        ],
        "houblons": [
          "Houblonnage faible à modéré : une forte amertume se marie difficilement avec une acidité franche."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces pour l’alcool ; bactéries lactiques selon la méthode ; Brettanomyces uniquement lorsqu’il appartient réellement au profil recherché."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage adapté au degré de fermentescibilité et à la méthode d’acidification ; éviter de confondre acidification du moût et fermentation mixte longue.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage mesurés. En kettle sour, l’acidification lactique intervient avant une seconde chauffe qui stabilise microbiologiquement le moût.",
        "fermentation": "Conduite dépendante du procédé : fermentation propre après kettle sour, co-fermentation levure/LAB, ou fermentation mixte longue.",
        "maturation": "Courte pour les sours propres et fraîches ; plusieurs mois à années lorsque Brett, Pediococcus, bois ou assemblage font partie du projet.",
        "profilRecherche": "Une acidité nette mais buvable, intégrée à la céréale et à la fermentation, jamais réduite à une simple sensation de vinaigre."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23 — European Sour Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28 — American Wild Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Sour and Wild Beer categories",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Brewing Methods — mixed fermentation, wort souring and kettle souring",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Brewing_Methods",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-wild-ale",
      "nom": "American Wild Ale",
      "collectionId": 6,
      "nature": "F",
      "parentPrincipalId": "biere-acide-sour-beer",
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
        "type": "mixte",
        "details": "Fermentation mixte associant levures et micro-organismes acidifiants selon le profil recherché."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "L’American Wild Ale est la cave belge branchée sur courant américain : acidité variable, Brett, bactéries lactiques, fruits, bois, houblon discret ou parfois plus moderne. Elle peut être vive, funky, vineuse ou fruitée, mais doit éviter le chaos de laboratoire oublié.",
      "histoireEtOrigines": `American Wild Ale est un terme de la scène craft et des concours, non une tradition régionale comparable au lambic ou à la Gose. Le BJCP précise que « wild » ne signifie pas nécessairement fermentation spontanée : la catégorie rassemble surtout des bières influencées par Brettanomyces, Lactobacillus, Pediococcus ou d’autres microorganismes au-delà de la levure de brasserie conventionnelle.

À partir des années 1990 puis surtout des années 2000, des brasseries américaines ont transposé et hybridé les pratiques belges : élevage en fûts, cultures mixtes, assemblages, fruits, Brett en secondaire et programmes de fermentation maison. Elles ont créé un paysage très libre où le style de base peut disparaître derrière la fermentation. La catégorie BJCP 28 formalise cette diversité en distinguant notamment Brett Beer, Mixed-Fermentation Sour Beer et Wild Specialty Beer.

Cette fiche doit donc être lue comme une famille contemporaine de méthodes et de profils, pas comme une recette nationale américaine figée.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie moderne définie par la fermentation et le résultat plus que par une base de malt fixe.",
        "maltsEtCereales": [
          "Base Pilsner ou pale claire ; blé fréquent selon le style.",
          "Recette volontairement simple afin de laisser l’acidité et la fermentation rester lisibles."
        ],
        "houblons": [
          "Houblonnage faible à modéré : une forte amertume se marie difficilement avec une acidité franche."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces, Brettanomyces, Lactobacillus, Pediococcus ou autres cultures, seules ou combinées selon le sous-style."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage adapté au degré de fermentescibilité et à la méthode d’acidification ; éviter de confondre acidification du moût et fermentation mixte longue.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage mesurés. En kettle sour, l’acidification lactique intervient avant une seconde chauffe qui stabilise microbiologiquement le moût.",
        "fermentation": "Conduite dépendante du procédé : fermentation propre après kettle sour, co-fermentation levure/LAB, ou fermentation mixte longue.",
        "maturation": "De quelques semaines à plusieurs années ; bois et assemblage sont fréquents mais ne sont pas obligatoires.",
        "profilRecherche": "Une acidité nette mais buvable, intégrée à la céréale et à la fermentation, jamais réduite à une simple sensation de vinaigre."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28 — American Wild Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28B Mixed-Fermentation Sour Beer",
          "type": "guide_de_style",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28b-mixed-fermentation-sour-beer",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28A Brett Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/28A/brett-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Mixed Fermentation — microorganisms and long/short methods",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Mixed_Fermentation",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "wild-beer",
      "nom": "Wild Beer",
      "collectionId": 6,
      "nature": "F",
      "parentPrincipalId": "biere-acide-sour-beer",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Traditions spontanées et craft",
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
        "type": "spontanee",
        "details": "Fermentation spontanée assurée par une microflore environnementale complexe."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "La Wild Beer met la fermentation au centre : Brettanomyces, bactéries, levures non conventionnelles, bois ou environnement deviennent les véritables auteurs du goût. Elle n’est pas forcément très acide ; elle peut être sèche, fruitée, fermière, cuirée, florale ou légèrement animale.",
      "histoireEtOrigines": `Le mot « wild » est séduisant mais ambigu. Historiquement, de nombreuses fermentations étaient moins contrôlées qu’aujourd’hui, mais cela ne signifie pas que toute bière ancienne était volontairement « sauvage ». Dans le vocabulaire craft moderne, wild beer désigne plutôt une bière dont le profil est façonné par des microorganismes non conventionnels ou une écologie de fermentation complexe.

Il faut surtout éviter l’équation wild = spontaneous. Une bière peut être ensemencée avec une culture de laboratoire de Brettanomyces et être qualifiée de wild dans le langage brassicole, tandis qu’un lambic traditionnel est réellement inoculé spontanément lors du refroidissement du moût. De même, wild n’implique pas nécessairement sour : Brett peut produire sécheresse, fruit et phénols sans forte acidité lactique.

Cette carte joue donc le rôle d’une catégorie transversale, utile pour comprendre les fermentations non conventionnelles sans leur inventer une origine unique.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Terme transversal décrivant une écologie de fermentation, pas un style à recette fixe.",
        "maltsEtCereales": [
          "Base Pilsner ou pale claire ; blé fréquent selon le style.",
          "Recette volontairement simple afin de laisser l’acidité et la fermentation rester lisibles."
        ],
        "houblons": [
          "Houblonnage faible à modéré : une forte amertume se marie difficilement avec une acidité franche."
        ],
        "levuresEtMicroorganismes": [
          "Microorganismes non conventionnels selon le projet : Brettanomyces, bactéries lactiques, cultures mixtes ou flore spontanée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage adapté au degré de fermentescibilité et à la méthode d’acidification ; éviter de confondre acidification du moût et fermentation mixte longue.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage mesurés. En kettle sour, l’acidification lactique intervient avant une seconde chauffe qui stabilise microbiologiquement le moût.",
        "fermentation": "Conduite dépendante du procédé : fermentation propre après kettle sour, co-fermentation levure/LAB, ou fermentation mixte longue.",
        "maturation": "Courte pour les sours propres et fraîches ; plusieurs mois à années lorsque Brett, Pediococcus, bois ou assemblage font partie du projet.",
        "profilRecherche": "Un profil complexe où le caractère fermentaire reste maîtrisé : fruit, funk, acidité éventuelle et sécheresse doivent rester agréables, jamais putrides ou solvantés."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28 — American Wild Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Mixed Fermentation — microorganisms and long/short methods",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Mixed_Fermentation",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Brettanomyces and Saccharomyces Co-fermentation",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Brettanomyces_and_Saccharomyces_Co-fermentation",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "biere-de-fermentation-spontanee-spontaneous-sour-ale",
      "nom": "Bière de fermentation spontanée / Spontaneous Sour Ale",
      "collectionId": 6,
      "nature": "F",
      "parentPrincipalId": "biere-acide-sour-beer",
      "aliases": [
        "Spontaneous Sour Ale"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Belgique et traditions spontanées",
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
        "type": "spontanee",
        "details": "Ensemencement naturel par les micro-organismes de l’environnement, sans culture unique imposée."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "La fermentation spontanée laisse le moût rencontrer son environnement : levures et bactéries locales construisent acidité, fruit, foin, cave, cuir, bois et sécheresse. Ce n’est pas une bière “abandonnée à la nature”, mais un chaos lentement domestiqué.",
      "histoireEtOrigines": `La fermentation spontanée est un procédé précis : le moût n’est pas volontairement ensemencé avec une culture pure au moment où débute sa fermentation. Il est exposé, souvent dans un bac refroidisseur peu profond, à l’air et à l’environnement de la brasserie ; une succession de microorganismes colonise ensuite le moût et conduit une fermentation longue et évolutive.

Le lambic brabançon est la tradition la mieux documentée de cette méthode et ne doit pas être confondu avec toute bière « spontanée ». Les producteurs de lambic associent cette inoculation à un ensemble cohérent de pratiques — blé cru, houblons vieillis, refroidissement nocturne, élevage prolongé en bois et souvent assemblage. Des brasseurs contemporains ont adopté la fermentation spontanée ailleurs dans le monde, avec leurs propres microflores et matières premières ; ils peuvent s’inspirer du lambic sans pour autant produire juridiquement ou culturellement du lambic traditionnel.

La catégorie « Spontaneous Sour Ale » de ZythoHunt doit donc décrire la méthode, puis renvoyer Lambic et Gueuze à leurs traditions régionales propres.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La méthode spontanée peut s’appliquer à différentes bases ; le lambic constitue une tradition spécifique et plus codifiée.",
        "maltsEtCereales": [
          "Base Pilsner ou pale claire ; blé fréquent selon le style.",
          "Recette volontairement simple afin de laisser l’acidité et la fermentation rester lisibles."
        ],
        "houblons": [
          "Houblonnage faible à modéré : une forte amertume se marie difficilement avec une acidité franche."
        ],
        "levuresEtMicroorganismes": [
          "Flore environnementale captée pendant le refroidissement : succession de levures, bactéries lactiques et autres microorganismes plutôt qu’une culture pure unique."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage adapté au degré de fermentescibilité et à la méthode d’acidification ; éviter de confondre acidification du moût et fermentation mixte longue.",
        "ebullitionEtHoublonnage": "Ébullition généralement longue dans les traditions lambic ; refroidissement nocturne en coolship ou dispositif ouvert afin de permettre l’ensemencement environnemental.",
        "fermentation": "Départ et succession microbienne non pilotés comme une fermentation de levure pure ; la fermentation primaire puis l’évolution lente se poursuivent en cuve ou en bois.",
        "maturation": "Souvent longue, typiquement plusieurs mois à plusieurs années, avec dégustation et assemblage lorsque le projet le demande.",
        "profilRecherche": "Une acidité nette mais buvable, intégrée à la céréale et à la fermentation, jamais réduite à une simple sensation de vinaigre."
      },
      "sources": [
        {
          "organisme": "HORAL",
          "edition": null,
          "reference": "Traditional Lambic Beers — production, Oude Geuze et Oude fruit lambic",
          "type": "source_traditionnelle_institutionnelle",
          "url": "https://horal.be/en/traditional-lambic-beers/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brouwerij 3 Fonteinen",
          "edition": null,
          "reference": "Lambic in short — spontaneous fermentation, coolship and oak ageing",
          "type": "source_producteur_primaire",
          "url": "https://www.3fonteinen.be/blog/lambic-in-short",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Mixed Fermentation — microorganisms and long/short methods",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Mixed_Fermentation",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "berliner-weisse",
      "nom": "Berliner Weisse",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "biere-acide-sour-beer",
      "aliases": [
        "Berliner-style Weisse"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Berlin",
        "ville": "Berlin",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 2.8,
        "max": 3.8,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 3,
        "max": 8,
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
        "type": "mixte",
        "details": "Fermentation associant levure et bactéries lactiques, selon une méthode traditionnelle ou contrôlée."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Berliner Weisse bowl",
          "Flûte"
        ]
      },
      "description": "La Berliner Weisse est une lame de citron dans un verre de blé : très pâle, légère, sèche, très pétillante, dominée par une acidité lactique propre. Elle doit claquer, pas mordre ; aucune lourdeur, presque pas de houblon, juste une fraîcheur nerveuse.",
      "histoireEtOrigines": `La Berliner Weisse est une bière de blé acide et très légère associée à Berlin. Elle fut suffisamment renommée au début du XIXe siècle pour que la tradition attribue aux troupes napoléoniennes le surnom de « Champagne du Nord », image qui souligne sa carbonatation et son caractère vif plutôt qu’une quelconque parenté avec le vin de Champagne.

Le style historique n’était pas nécessairement identique aux Berliner Weisse rapides produites aujourd’hui. Le BJCP rappelle l’existence de versions plus fortes et même fumées, ainsi que l’importance historique d’une co-fermentation de levure haute et de bactéries lactiques. Des travaux allemands ont également attribué à Brettanomyces un rôle dans certains profils fruités-floraux traditionnels. Avec l’industrialisation, les méthodes d’acidification ont été rationalisées ; le procédé de Francke a contribué à rendre l’acidification plus rapide et reproductible, ancêtre conceptuel des pratiques modernes de souring accéléré.

Aujourd’hui, le nom recouvre à la fois des interprétations traditionnelles complexes et des versions craft très propres obtenues par kettle sour. Le point commun reste une bière très pâle, peu alcoolisée, fortement carbonatée et dominée par une acidité lactique nette plutôt que par l’amertume.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pilsner et malt de blé, le blé représentant souvent environ la moitié ou davantage du grain dans les interprétations traditionnelles."
        ],
        "houblons": [
          "Houblonnage très faible ; mash hopping ou houblonnage discret dans les méthodes historiques."
        ],
        "levuresEtMicroorganismes": [
          "Levure de fermentation haute et bactéries lactiques ; Brettanomyces peut intervenir dans les interprétations historiques mais ne doit pas produire un funk lourd."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage par infusion ou décoction ; les références historiques incluent décoction et houblonnage de la maische.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage mesurés. En kettle sour, l’acidification lactique intervient avant une seconde chauffe qui stabilise microbiologiquement le moût.",
        "fermentation": "Co-fermentation traditionnelle levure/LAB, acidification séparée ou kettle sour selon l’école.",
        "maturation": "Garde fraîche, parfois assemblage de lots d’âges différents ; carbonatation très élevée.",
        "profilRecherche": "Une bière très pâle, légère, sèche et effervescente, à acidité lactique franche avec une nuance fruitée-citronnée, jamais vinaigrée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23A Berliner Weisse",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/23A/berliner-weisse/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Brewing Methods — mixed fermentation, wort souring and kettle souring",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Brewing_Methods",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Berliner-Style Weisse",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "specialty-berliner-weisse",
      "nom": "Specialty Berliner Weisse",
      "collectionId": 6,
      "nature": "SS",
      "parentPrincipalId": "berliner-weisse",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Interprétation contemporaine",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 2.5,
        "max": 6,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 3,
        "max": 15,
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
        "type": "mixte",
        "details": "Fermentation mixte associant levures et micro-organismes acidifiants selon le profil recherché."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Flûte",
          "Teku"
        ]
      },
      "description": "La Specialty Berliner Weisse garde la base citronnée et légère de Berlin, puis ajoute fruit, herbe, épice, houblon ou autre variation. Le supplément doit danser sur l’acidité sans l’écraser : une Berliner déguisée, pas une limonade craft maquillée.",
      "histoireEtOrigines": `Specialty Berliner Weisse est une construction moderne autour de la silhouette Berliner : faible alcool, couleur pâle, forte carbonatation et acidité lactique. Les ajouts de fruits, plantes, épices ou autres ingrédients ne constituent pas historiquement un sous-style autonome ; ils répondent surtout au développement contemporain des sours aromatisées.

La tradition berlinoise connaît bien le service avec sirops, mais ajouter du fruit ou des épices pendant la fabrication transforme davantage la bière qu’un simple accompagnement au verre. Les guides de concours classent donc souvent ces variantes dans les catégories fruitées ou épicées plutôt que dans Berliner Weisse pure.

Le défi brassicole est de préserver l’identité légère et tranchante de la base : le fruit ne doit pas convertir une petite bière acide en smoothie sucré, sauf si le produit revendique explicitement une autre catégorie.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base Pilsner ou pale claire ; blé fréquent selon le style.",
          "Recette volontairement simple afin de laisser l’acidité et la fermentation rester lisibles."
        ],
        "houblons": [
          "Houblonnage faible à modéré : une forte amertume se marie difficilement avec une acidité franche."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces pour l’alcool ; bactéries lactiques selon la méthode ; Brettanomyces uniquement lorsqu’il appartient réellement au profil recherché."
        ],
        "ingredientsComplementaires": [
          "Fruits, zestes, herbes ou épices clairement identifiables ; dosage conçu pour compléter une base légère."
        ],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage adapté au degré de fermentescibilité et à la méthode d’acidification ; éviter de confondre acidification du moût et fermentation mixte longue.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage mesurés. En kettle sour, l’acidification lactique intervient avant une seconde chauffe qui stabilise microbiologiquement le moût.",
        "fermentation": "Conduite dépendante du procédé : fermentation propre après kettle sour, co-fermentation levure/LAB, ou fermentation mixte longue.",
        "maturation": "Courte dans les versions propres ; fruit ajouté en fermentation ou maturation selon le résultat recherché, avec maîtrise de la refermentation.",
        "profilRecherche": "Une Berliner légère et sèche dont l’ingrédient spécial reste net sans masquer la céréale, la carbonatation et l’acidité."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23A Berliner Weisse",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/23A/berliner-weisse/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28C Wild Specialty Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/28C/wild-specialty-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Specialty Berliner-style sour beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "gose",
      "nom": "Gose",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "biere-acide-sour-beer",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Goslar et Leipzig",
        "ville": "Leipzig",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.2,
        "max": 4.8,
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
        "max": 12,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Fermentation haute avec acidification lactique, complétée par sel et coriandre selon la tradition."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Gose glass",
          "Tulipe"
        ]
      },
      "description": "La Gose est une acidité salée : blé, citron, coriandre, légère salinité, corps souple et amertume presque absente. Elle doit évoquer une eau minérale vivante, pas une soupe de sel ; la coriandre chuchote, elle ne parfume pas tout le village.",
      "histoireEtOrigines": `La Gose doit son nom à Goslar, dans le Harz, et non au mot « gosier » ni à une invention récente de la scène craft. La documentation réunie par Ritterguts Gose cite un acte conservé de 1332 à Ilsenburg et décrit une diffusion progressive de la bière de Goslar dans la région. Au XVIIIe siècle, la Gose gagne Leipzig, où elle devient si populaire qu’elle finit par être associée durablement à la ville.

La tradition connaît son apogée entre la fin du XIXe et le début du XXe siècle. Les guerres, les fermetures et les transformations économiques l’amènent ensuite au bord de l’extinction : la production de la dernière petite brasserie de Leipzig cesse en 1966. Plusieurs tentatives de renaissance suivent à partir des années 1980, et Ritterguts relance sa marque et sa production autour de 1999.

La Gose traditionnelle est une bière de fermentation haute, acidulée et légèrement saline. Le sel et la coriandre appartiennent à son image moderne, mais il faut éviter d’expliquer naïvement toute sa salinité par l’eau de la rivière Gose. Le style a aujourd’hui deux vies : une tradition Leipzig/Halle reconstruite à partir de sources historiques et une immense famille craft internationale de goses fruitées ou fortement aromatisées.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base d’orge pâle avec proportion significative de blé dans la plupart des interprétations modernes."
        ],
        "houblons": [
          "Houblonnage bas : le houblon ne doit ni dominer l’arôme ni combattre l’acidité."
        ],
        "levuresEtMicroorganismes": [
          "Levure haute et bactéries lactiques, par co-fermentation ou souring séparé selon la méthode."
        ],
        "ingredientsComplementaires": [
          "Sel en dosage mesuré.",
          "Coriandre traditionnelle dans de nombreuses recettes contemporaines ; autres épices ou fruits seulement dans les variantes."
        ],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage adapté au degré de fermentescibilité et à la méthode d’acidification ; éviter de confondre acidification du moût et fermentation mixte longue.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage mesurés. En kettle sour, l’acidification lactique intervient avant une seconde chauffe qui stabilise microbiologiquement le moût.",
        "fermentation": "Conduite dépendante du procédé : fermentation propre après kettle sour, co-fermentation levure/LAB, ou fermentation mixte longue.",
        "maturation": "Courte pour les sours propres et fraîches ; plusieurs mois à années lorsque Brett, Pediococcus, bois ou assemblage font partie du projet.",
        "profilRecherche": "Une bière légère à modérée, acidulée, céréalière, discrètement saline et épicée, extrêmement rafraîchissante."
      },
      "sources": [
        {
          "organisme": "Original Ritterguts Gose",
          "edition": null,
          "reference": "Gose history — Goslar, Leipzig, extinction and revival",
          "type": "source_producteur_historique",
          "url": "https://www.leipziger-gose.com/en/gose-history/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Original Ritterguts Gose",
          "edition": null,
          "reference": "What is Gose?",
          "type": "source_producteur_historique",
          "url": "https://www.leipziger-gose.com/en/what-is-gose/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23 — European Sour Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Contemporary Gose and traditional sour categories",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "leipzig-gose",
      "nom": "Leipzig Gose",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "gose",
      "aliases": [
        "Leipziger Gose"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Leipzig, Saxe",
        "ville": "Leipzig",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.2,
        "max": 4.8,
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
        "max": 12,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Fermentation haute et lactique suivant la tradition de Leipzig."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Gose glass",
          "Tulipe"
        ]
      },
      "description": "La Leipzig Gose est la version patrimoniale : blé pâle, acidité lactique modérée, sel fin, coriandre, mousse vive et finale sèche. Elle doit rester mince et élégante, plus vieille taverne saxonne que cocktail tropical au sel rose.",
      "histoireEtOrigines": `La Leipzig Gose représente la branche historique devenue emblématique du style. Introduite à Leipzig au XVIIIe siècle, la bière importée des régions voisines devient rapidement une boisson locale majeure. Au XIXe siècle, Ritterguts Gose de Döllnitz fournit de nombreux établissements de Leipzig et Halle ; la période 1880–1920 est décrite comme l’âge d’or, avec des dizaines de « Gosenkneipen » dans la ville.

La logistique historique était particulière : la bière encore en fermentation arrivait aux débits en grands récipients, puis finissait sa maturation dans les bouteilles caractéristiques à long col. Après les destructions et expropriations de l’après-guerre, le style survit difficilement avant de disparaître localement en 1966. Sa renaissance moderne passe par plusieurs initiatives dans les années 1980 et 1990, jusqu’au retour de Ritterguts et de nouvelles brasseries à Leipzig.

Cette fiche privilégie donc l’identité de Leipzig : acidité rafraîchissante, salinité modérée, épices intégrées et caractère de fermentation, plutôt que les goses craft modernes très fruitées.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Orge pâle et blé ; recette de densité modérée favorisant fraîcheur et mousse."
        ],
        "houblons": [
          "Faible amertume, houblon traditionnel discret."
        ],
        "levuresEtMicroorganismes": [
          "Fermentation haute avec acidification lactique ; les méthodes historiques et modernes peuvent différer."
        ],
        "ingredientsComplementaires": [
          "Sel modéré.",
          "Coriandre mesurée, sans profil de cuisine ou de parfum."
        ],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage adapté au degré de fermentescibilité et à la méthode d’acidification ; éviter de confondre acidification du moût et fermentation mixte longue.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage mesurés. En kettle sour, l’acidification lactique intervient avant une seconde chauffe qui stabilise microbiologiquement le moût.",
        "fermentation": "Conduite dépendante du procédé : fermentation propre après kettle sour, co-fermentation levure/LAB, ou fermentation mixte longue.",
        "maturation": "Conditionnement vif et carbonaté ; les reconstitutions historiques peuvent rechercher une évolution plus fermentaire qu’une kettle sour totalement neutre.",
        "profilRecherche": "Une Gose de Leipzig sèche, acidulée, légèrement saline, céréalière et épicée avec retenue."
      },
      "sources": [
        {
          "organisme": "Original Ritterguts Gose",
          "edition": null,
          "reference": "Gose history — Goslar, Leipzig, extinction and revival",
          "type": "source_producteur_historique",
          "url": "https://www.leipziger-gose.com/en/gose-history/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Original Ritterguts Gose",
          "edition": null,
          "reference": "What is Gose?",
          "type": "source_producteur_historique",
          "url": "https://www.leipziger-gose.com/en/what-is-gose/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Leipzig-style Gose",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "contemporary-gose",
      "nom": "Contemporary Gose",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "gose",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Mouvement craft international",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 7,
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
        "max": 40,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Fermentation mixte associant levures et micro-organismes acidifiants selon le profil recherché."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Teku"
        ]
      },
      "description": "La Contemporary Gose reprend le triangle blé-acidité-sel et l’ouvre aux fruits, houblons, épices ou dosages plus modernes. Elle peut être plus colorée, plus aromatique, plus généreuse, mais elle doit garder la nervosité saline de la Gose plutôt que sombrer dans le smoothie acide.",
      "histoireEtOrigines": `Contemporary Gose décrit l’explosion internationale du nom Gose dans la scène craft du XXIe siècle. Des brasseurs ont retenu l’architecture très séduisante du style — bière pâle, acidité lactique, sel, faible amertume — puis l’ont combinée avec fruits tropicaux, agrumes, baies, épices, piments ou autres ingrédients.

Cette catégorie ne doit pas être projetée dans l’histoire de Leipzig. Une passionfruit gose moderne peut être excellente tout en ayant peu de points communs avec une Gose de débit du XIXe siècle au-delà d’une base conceptuelle. La méthode moderne est souvent le kettle souring, apprécié pour sa rapidité et son contrôle microbiologique, mais une fermentation mixte reste possible.

L’enjeu encyclopédique est donc de distinguer héritage et réinterprétation : Contemporary Gose est une famille craft inspirée par une tradition allemande ressuscitée.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille craft très large construite sur la logique Gose.",
        "maltsEtCereales": [
          "Base Pilsner ou pale claire ; blé fréquent selon le style.",
          "Recette volontairement simple afin de laisser l’acidité et la fermentation rester lisibles."
        ],
        "houblons": [
          "Houblonnage faible à modéré : une forte amertume se marie difficilement avec une acidité franche."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces pour l’alcool ; bactéries lactiques selon la méthode ; Brettanomyces uniquement lorsqu’il appartient réellement au profil recherché."
        ],
        "ingredientsComplementaires": [
          "Sel ; coriandre facultative selon l’interprétation.",
          "Fruits, épices ou végétaux possibles, parfois au premier plan."
        ],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage adapté au degré de fermentescibilité et à la méthode d’acidification ; éviter de confondre acidification du moût et fermentation mixte longue.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage mesurés. En kettle sour, l’acidification lactique intervient avant une seconde chauffe qui stabilise microbiologiquement le moût.",
        "fermentation": "Kettle sour très fréquent pour obtenir une acidité lactique propre, puis fermentation alcoolique avec une levure neutre ou expressive selon la recette.",
        "maturation": "Courte pour les sours propres et fraîches ; plusieurs mois à années lorsque Brett, Pediococcus, bois ou assemblage font partie du projet.",
        "profilRecherche": "Une sour moderne rafraîchissante où sel, acidité et ingrédients spéciaux forment un ensemble cohérent plutôt qu’une accumulation d’arômes."
      },
      "sources": [
        {
          "organisme": "Original Ritterguts Gose",
          "edition": null,
          "reference": "What is Gose?",
          "type": "source_producteur_historique",
          "url": "https://www.leipziger-gose.com/en/what-is-gose/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Contemporary Gose",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Brewing Methods — mixed fermentation, wort souring and kettle souring",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Brewing_Methods",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "flanders-red-ale",
      "nom": "Flanders Red Ale",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "biere-acide-sour-beer",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Flandre-Occidentale",
        "ville": null,
        "region": "Flandre",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.6,
        "max": 6.5,
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
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Fermentation mixte associant levures et micro-organismes acidifiants selon le profil recherché."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Flûte"
        ]
      },
      "description": "La Flanders Red Ale est le vin rouge des bières acides : robe rubis, acidité vive, cerise, prune, raisin, bois, tanins, parfois balsamique léger. Elle doit être élégante et vineuse, pas vinaigre de salade ni jus de fruits oublié.",
      "histoireEtOrigines": `La Flanders Red Ale appartient à la tradition rouge-brune de Flandre occidentale. Son identité moderne est indissociable de la fermentation mixte, d’une maturation prolongée et du rôle des grands foudres de bois. La documentation européenne récente sur « Vlaams roodbruin bier / Flanders Red Ale » insiste sur cette expertise locale et sur une maturation-acidification pouvant durer de plusieurs mois à plus de deux ans.

Rodenbach, fondée au XIXe siècle à Roulers, est devenue l’archétype international du style. L’élevage en grands foeders ne vise pas simplement un goût de chêne neuf : le bois constitue surtout un environnement de maturation, de micro-oxygénation et de microbiologie. Les maîtres de chai dégustent les lots et assemblent souvent bière jeune et bière vieillie afin d’obtenir l’équilibre final.

Sensoriellement, la famille évoque cerise aigre, prune, fruits rouges, caramel léger et parfois une impression vineuse. Une pointe acétique peut contribuer à la complexité, mais une agressivité de vinaigre n’est pas la cible.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale ou Pilsner, malts Vienna/Munich et céréales caramel ou légèrement torréfiées pour une robe rouge-brune sans brûlé."
        ],
        "houblons": [
          "Houblonnage faible à modéré, volontairement secondaire face à l’acidité."
        ],
        "levuresEtMicroorganismes": [
          "Levure de fermentation haute et culture mixte incluant bactéries lactiques ; microflore de chai et du bois selon la maison."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modéré, sans sulfate agressif.",
        "empatage": "Empâtage maintenant assez de matière pour une longue évolution fermentaire sans produire une bière lourde.",
        "ebullitionEtHoublonnage": "Ébullition classique et houblonnage d’équilibre ; forte amertume évitée.",
        "fermentation": "Fermentation primaire puis acidification et maturation sous l’action de la culture mixte.",
        "maturation": "Élevage prolongé en foeders ou bois neutre, suivi fréquemment d’assemblage entre lots plus jeunes et plus âgés.",
        "profilRecherche": "Une bière rouge-brune complexe, fruitée, aigre-douce et vineuse, sèche à modérément ronde, sans vinaigre brutal ni caractère boisé neuf dominant."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23B Flanders Red Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Union européenne",
          "edition": null,
          "reference": "Vlaams roodbruin bier / Flanders Red Ale — product specification and local expertise",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026XC02612",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Flanders-style Red Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "oud-bruin",
      "nom": "Oud Bruin",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "biere-acide-sour-beer",
      "aliases": [
        "Flanders Brown Ale"
      ],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Flandre-Orientale",
        "ville": null,
        "region": "Flandre",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 8,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 20,
        "max": 25,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 30,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Fermentation mixte associant levures et micro-organismes acidifiants selon le profil recherché."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Calice"
        ]
      },
      "description": "L’Oud Bruin est la brune acide plus maltée et ronde : caramel, raisin sec, prune, noix, pain brun, acidité douce et finale plus souple qu’une Flanders Red. Elle vieillit dans l’ombre, avec moins de tanin rouge et plus de profondeur brune.",
      "histoireEtOrigines": `L’Oud Bruin, ou « vieille brune », est associé à la Flandre orientale et notamment à Audenarde. Il partage avec la Flanders Red une acidité issue d’une maturation biologique complexe, mais son expression est généralement plus maltée, brune, ronde et moins franchement acétique ou vineuse.

Liefmans illustre cette tradition : la brasserie revendique plus de trois siècles d’histoire à Audenarde et décrit pour son Oud Bruin une maturation de plusieurs mois, suivie d’un assemblage de bière plus âgée et de bière jeune. Cette logique de coupage permet de combiner profondeur acidulée et fraîcheur maltée.

Il serait toutefois trompeur de réduire toutes les Oud Bruins à un clone de Liefmans. Les maisons, fermentations et durées d’élevage varient. Le fil conducteur est un équilibre entre malt brun, fruits noirs ou rouges, caramel discret et acidité lactique intégrée.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base pale avec Munich/Vienna, malts caramel et éventuellement une touche de malt torréfié doux pour brunir sans brûlé."
        ],
        "houblons": [
          "Faible amertume, houblon continental ou britannique discret."
        ],
        "levuresEtMicroorganismes": [
          "Levure haute et culture acidifiante ; microbiologie et méthode varient selon les brasseries."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau modérément minérale adaptée à une bière brune et à une acidité souple.",
        "empatage": "Empâtage préservant davantage de rondeur maltée qu’une Flanders Red très sèche.",
        "ebullitionEtHoublonnage": "Ébullition classique ; houblonnage bas à modéré.",
        "fermentation": "Fermentation haute suivie d’une maturation acidifiante lente ou d’un procédé de culture mixte maison.",
        "maturation": "Plusieurs mois ; assemblage de bière plus âgée et plus jeune fréquent dans la tradition d’Audenarde.",
        "profilRecherche": "Une brune acidulée maltée : caramel, fruits noirs, pain brun et acidité douce à moyenne, sans torréfaction brûlée ni vinaigre agressif."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23C Oud Bruin",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Liefmans",
          "edition": null,
          "reference": "Oud Bruin — maturation and blending",
          "type": "source_producteur_primaire",
          "url": "https://www.liefmans.com/en/craft-blends/oud-bruin",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Liefmans",
          "edition": null,
          "reference": "Brewery history — Oudenaarde tradition since the 17th century",
          "type": "source_producteur_primaire",
          "url": "https://www.liefmans.com/en/brewery",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "lambic",
      "nom": "Lambic",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "biere-de-fermentation-spontanee-spontaneous-sour-ale",
      "aliases": [],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Pajottenland et vallée de la Senne",
        "ville": null,
        "region": null,
        "bassinBrassicole": "Pajottenland et vallée de la Senne"
      },
      "alcool": {
        "min": 5,
        "max": 6.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 0,
        "max": 10,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 6,
        "max": 26,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "spontanee",
        "details": "Ensemencement spontané en refroidissoir, suivi d’une fermentation lente et d’un élevage prolongé."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tumbler lambic",
          "Flûte"
        ]
      },
      "description": "Le Lambic est la cave du Pajottenland en bouteille ou en fût : sec, souvent peu ou pas pétillant, acide, citronné, cidré, boisé, avec foin, cuir, cave, pomme mûre et funk délicat. Sa beauté vient du temps long, pas de l’impact immédiat.",
      "histoireEtOrigines": `Le lambic est une tradition de fermentation spontanée ancrée dans le Pajottenland et la vallée de la Senne autour de Bruxelles. Contrairement à l’image romantique d’une bière simplement « laissée dehors », son identité repose sur une chaîne technique exigeante : moût contenant une proportion importante de blé, houblons âgés à faible pouvoir aromatique, longue journée de brassage, refroidissement nocturne dans un coolship, inoculation par l’environnement puis élevage prolongé en bois.

HORAL rappelle que les dénominations traditionnelles protégées reposent sur des critères précis. Pour l’Oude Lambiek, la fermentation doit être intégralement spontanée et le produit s’inscrit dans une tradition où le blé représente au moins 30 % dans les spécifications citées. Les archives écrites décrivant lambic et gueuze remontent au moins au début du XIXe siècle, tandis que faro apparaît plus tôt dans les sources.

Le lambic non assemblé est souvent peu ou pas pétillant. Il sert de matière première à la gueuze, aux krieks et autres fruit lambics. Son profil évolue avec l’âge : céréale, citron, pomme, foin, cuir fin, cave, fruits et acidité complexe. L’objectif n’est ni la saleté ni le vinaigre, mais une fermentation longue dont la complexité vient de la succession microbienne et du temps.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Orge maltée pâle.",
          "Blé cru ou non malté en proportion importante ; 30 % constitue un repère traditionnel protégé pour certaines dénominations Oude."
        ],
        "houblons": [
          "Houblons vieillis, choisis davantage pour leur fonction de conservation que pour une amertume ou un arôme frais."
        ],
        "levuresEtMicroorganismes": [
          "Flore spontanée captée lors du refroidissement : succession complexe de microorganismes, sans inoculation initiale par une souche pure dans la tradition."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau locale ou modérée ; l’équilibre final dépend davantage du procédé et de la fermentation que d’un profil minéral caricatural.",
        "empatage": "Turbid mash traditionnel possible : méthode complexe maintenant des dextrines et amidons pour la fermentation longue ; d’autres producteurs peuvent employer des variantes.",
        "ebullitionEtHoublonnage": "Ébullition prolongée avec houblons âgés, puis refroidissement nocturne en coolship ouvert.",
        "fermentation": "Fermentation spontanée puis succession microbienne au cours de l’élevage.",
        "maturation": "Un à plusieurs ans en fûts ou foudres de bois ; dégustation régulière. Lambic jeune et vieux deviennent ensuite matières d’assemblage pour la gueuze.",
        "profilRecherche": "Un lambic sec, complexe, acidulé et évolutif, peu pétillant lorsqu’il est servi non assemblé, avec fruit, céréale et funk noble sans défaut putride ou acétique dominant."
      },
      "sources": [
        {
          "organisme": "HORAL",
          "edition": null,
          "reference": "Traditional Lambic Beers — production, Oude Geuze et Oude fruit lambic",
          "type": "source_traditionnelle_institutionnelle",
          "url": "https://horal.be/en/traditional-lambic-beers/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brouwerij 3 Fonteinen",
          "edition": null,
          "reference": "Lambic in short — spontaneous fermentation, coolship and oak ageing",
          "type": "source_producteur_primaire",
          "url": "https://www.3fonteinen.be/blog/lambic-in-short",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23D Lambic",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "gueuze",
      "nom": "Gueuze",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "lambic",
      "aliases": [
        "Geuze"
      ],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Pajottenland et vallée de la Senne",
        "ville": null,
        "region": null,
        "bassinBrassicole": "Pajottenland et vallée de la Senne"
      },
      "alcool": {
        "min": 5,
        "max": 8,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 0,
        "max": 10,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 6,
        "max": 26,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "spontanee",
        "details": "Assemblage de lambics d’âges différents puis refermentation en bouteille."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Flûte",
          "Tumbler lambic"
        ]
      },
      "description": "La Gueuze est le lambic devenu effervescence : assemblage de jeunes et vieux lambics, refermentation en bouteille, acidité vive, cidre sec, citron, cave, foin, bois et bulle nerveuse. Elle doit être tranchante mais profonde, pas seulement acide.",
      "histoireEtOrigines": `La gueuze n’est pas simplement un lambic plus vieux : c’est un art d’assemblage et de refermentation. Le geuzesteker ou brasseur assemble des lambics d’âges et de profils différents afin d’obtenir à la fois complexité aromatique, sucres fermentescibles résiduels suffisants et capacité de refermentation en bouteille.

Pour l’appellation traditionnelle Oude Geuze, HORAL décrit un assemblage composé uniquement de lambics de fermentation spontanée, avec un âge moyen pondéré d’au moins un an et un composant le plus vieux ayant mûri au moins trois ans en bois. L’assemblage doit ensuite refermenter en bouteille et respecter des exigences après plusieurs mois de conditionnement.

La comparaison avec le Champagne vient parfois naturellement à cause de la bouteille, de la pression et de l’assemblage, mais la technique et la microbiologie sont propres au lambic. Une grande gueuze combine acidité, agrumes, pomme, foin, cave, minéralité perçue et carbonatation vive dans une finale très sèche.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "La recette est celle des lambics constitutifs : orge maltée et blé cru ou non malté."
        ],
        "houblons": [
          "Houblons vieillis dans les lambics de base."
        ],
        "levuresEtMicroorganismes": [
          "Microflores spontanées des différents lambics ; refermentation naturelle après assemblage."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Même logique que les lambics de base.",
        "empatage": "Production séparée de lambics selon les méthodes de la maison, souvent avec turbid mash traditionnel.",
        "ebullitionEtHoublonnage": "Ébullition longue puis coolship pour chaque brassin de lambic.",
        "fermentation": "Fermentation spontanée des lambics avant sélection et assemblage.",
        "maturation": "Assemblage de lambics d’âges différents ; pour Oude Geuze, le plus vieux atteint au moins trois ans et la bouteille subit une seconde fermentation puis une garde prolongée.",
        "profilRecherche": "Une gueuze très sèche, vive et pétillante, complexe, équilibrant acidité, fruit, notes de foin/cave et profondeur d’assemblage."
      },
      "sources": [
        {
          "organisme": "HORAL",
          "edition": null,
          "reference": "Traditional Lambic Beers — production, Oude Geuze et Oude fruit lambic",
          "type": "source_traditionnelle_institutionnelle",
          "url": "https://horal.be/en/traditional-lambic-beers/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brouwerij 3 Fonteinen",
          "edition": null,
          "reference": "Lambic in short — spontaneous fermentation, coolship and oak ageing",
          "type": "source_producteur_primaire",
          "url": "https://www.3fonteinen.be/blog/lambic-in-short",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23E Gueuze",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "fruit-lambic",
      "nom": "Fruit Lambic",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "lambic",
      "aliases": [
        "Kriek",
        "Framboise",
        "Cassis",
        "Pêche"
      ],
      "paysOrigine": [
        "Belgique"
      ],
      "origine": {
        "libelle": "Pajottenland et vallée de la Senne",
        "ville": null,
        "region": null,
        "bassinBrassicole": "Pajottenland et vallée de la Senne"
      },
      "alcool": {
        "min": 5,
        "max": 7,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 0,
        "max": 10,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 4,
        "max": 50,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "spontanee",
        "details": "Fermentation spontanée de lambic, complétée par une macération ou refermentation sur fruits."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Flûte",
          "Tumbler lambic"
        ]
      },
      "description": "Le Fruit Lambic n’est pas une bière au sirop : cerise, framboise, pêche, abricot, raisin ou cassis fermentent avec le lambic et changent sa couleur, son acidité, ses tanins et son parfum. Le fruit doit devenir cave et fermentation, pas bonbon.",
      "histoireEtOrigines": `Les lambics aux fruits prolongent une pratique ancienne d’ajout de fruits locaux à une bière spontanée en maturation. La kriek aux cerises est devenue la forme emblématique, mais framboise et autres fruits ont également une longue présence dans la famille. Le fruit ne sert pas seulement d’arôme : ses sucres relancent la fermentation, ses acides et tanins modifient l’équilibre et sa chair nourrit l’évolution microbienne.

Il faut distinguer les versions traditionnelles refermentées et sèches des produits plus doux, filtrés ou pasteurisés. HORAL souligne que les dénominations « Oude Kriek » et autres Oude fruit lambics imposent une fermentation spontanée et une refermentation en bouteille, alors que des versions non « Oude » peuvent être filtrées, sucrées ou pasteurisées.

Une Fruit Lambic traditionnelle n’est donc pas une bière aromatisée au sirop : le fruit est fermenté dans le système lambic et le résultat tend vers le sec, l’acidulé et le complexe.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Lambic de base à orge maltée et blé cru/non malté."
        ],
        "houblons": [
          "Houblons vieillis du lambic de base."
        ],
        "levuresEtMicroorganismes": [
          "Microflore spontanée du lambic ; nouvelle activité fermentaire après ajout du fruit."
        ],
        "ingredientsComplementaires": [
          "Fruits entiers, purées ou jus selon la maison ; cerise et framboise sont classiques, sans exclure d’autres fruits."
        ],
        "profilEau": "Même base que le lambic.",
        "empatage": "Comme le lambic de base.",
        "ebullitionEtHoublonnage": "Comme le lambic de base : longue ébullition, houblons âgés, refroidissement ouvert dans la tradition.",
        "fermentation": "Fermentation spontanée initiale puis refermentation des sucres du fruit.",
        "maturation": "Macération/fermentation sur fruit, soutirage, assemblage éventuel et conditionnement ; les Oude versions refermentent en bouteille.",
        "profilRecherche": "Un fruit net mais fermenté, sec et intégré à l’acidité et au funk du lambic, sans impression de soda ou de confiture ajoutée après coup."
      },
      "sources": [
        {
          "organisme": "HORAL",
          "edition": null,
          "reference": "Traditional Lambic Beers — production, Oude Geuze et Oude fruit lambic",
          "type": "source_traditionnelle_institutionnelle",
          "url": "https://horal.be/en/traditional-lambic-beers/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23F Fruit Lambic",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brouwerij 3 Fonteinen",
          "edition": null,
          "reference": "Lambic in short — spontaneous fermentation, coolship and oak ageing",
          "type": "source_producteur_primaire",
          "url": "https://www.3fonteinen.be/blog/lambic-in-short",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-sour-ale",
      "nom": "American Sour Ale",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "american-wild-ale",
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
        "min": 4,
        "max": 10,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 5,
        "max": 30,
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
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "L’American Sour Ale est l’acidité craft à géométrie variable : base blonde, ambrée, brune ou forte, fermentation mixte, bois possible, fruits possibles, acidité de légère à franche. Elle doit avoir un centre de gravité clair, sinon elle devient juste “un truc acide en barrique”.",
      "histoireEtOrigines": `American Sour Ale est une catégorie craft moderne construite par appropriation, adaptation et hybridation des méthodes européennes. Elle ne suppose ni un style de base unique ni une méthode unique : certaines versions sont acidifiées rapidement en cuve, d’autres fermentent pendant des mois avec cultures mixtes, d’autres encore passent en fûts et sont assemblées.

Le BJCP décrit les Mixed-Fermentation Sour Beer comme des bières où Saccharomyces, Lactobacillus, Pediococcus et Brettanomyces peuvent être combinés, tandis que la scène commerciale emploie souvent « American Sour » de manière plus large encore. L’acidité peut donc être propre et lactique ou accompagnée de funk et d’évolution boisée.

L’intérêt de la catégorie est sa liberté, mais cette liberté impose de documenter le procédé : une kettle sour fruitée de trois semaines et une ale de culture mixte élevée deux ans en barrique ne racontent pas la même histoire microbiologique.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie américaine moderne couvrant kettle sour, fermentation mixte et élevage en bois.",
        "maltsEtCereales": [
          "Base Pilsner ou pale claire ; blé fréquent selon le style.",
          "Recette volontairement simple afin de laisser l’acidité et la fermentation rester lisibles."
        ],
        "houblons": [
          "Houblonnage faible à modéré : une forte amertume se marie difficilement avec une acidité franche."
        ],
        "levuresEtMicroorganismes": [
          "Bactéries lactiques et levures selon le procédé ; Brett/Pedio présents dans les versions longues de culture mixte mais absents de nombreuses sours rapides."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage adapté au degré de fermentescibilité et à la méthode d’acidification ; éviter de confondre acidification du moût et fermentation mixte longue.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage mesurés. En kettle sour, l’acidification lactique intervient avant une seconde chauffe qui stabilise microbiologiquement le moût.",
        "fermentation": "Conduite dépendante du procédé : fermentation propre après kettle sour, co-fermentation levure/LAB, ou fermentation mixte longue.",
        "maturation": "De quelques semaines à plusieurs années selon le procédé ; assemblage et bois fréquents dans les programmes de longue garde.",
        "profilRecherche": "Une acidité nette mais buvable, intégrée à la céréale et à la fermentation, jamais réduite à une simple sensation de vinaigre."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28B Mixed-Fermentation Sour Beer",
          "type": "guide_de_style",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28b-mixed-fermentation-sour-beer",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28 — American Wild Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Mixed Fermentation — microorganisms and long/short methods",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Mixed_Fermentation",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-style sour and wild beer categories",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "fruited-american-sour-ale",
      "nom": "Fruited American Sour Ale",
      "collectionId": 6,
      "nature": "SS",
      "parentPrincipalId": "american-sour-ale",
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
        "min": 4,
        "max": 10,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 5,
        "max": 30,
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
        "type": "mixte",
        "details": "Fermentation mixte associant levures et micro-organismes acidifiants selon le profil recherché."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Fruited American Sour Ale ajoute le fruit au langage sour américain : framboise, cerise, pêche, mangue, agrume ou assemblages plus sauvages. Le fruit peut être intense, mais il doit rester fermenté, tendu, vivant, pas transformer la bière en purée sucrée sous pression.",
      "histoireEtOrigines": `La Fruited American Sour Ale est l’une des expressions les plus visibles du renouveau acide américain. Fruits rouges, pêches, abricots, agrumes, fruits tropicaux ou raisins peuvent être intégrés à une sour rapide comme à une bière de culture mixte vieillie longuement.

Dans une fermentation réellement complète, le fruit n’apporte pas seulement du sucre résiduel et un parfum immédiat : ses sucres sont consommés, son acidité se combine à celle de la bière et ses tanins peuvent accroître la sensation de sécheresse. C’est pourquoi les guides BJCP attendent souvent un fruit reconnaissable mais fermenté, sans sucrosité artificielle obligatoire.

La catégorie moderne couvre néanmoins un spectre très large, depuis les sours sèches de barrique jusqu’aux produits très pulpeux. ZythoHunt privilégie ici l’architecture brassicole : bière acide + fruit intégré par fermentation ou maturation.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le style de base, la méthode d’acidification et le fruit peuvent varier largement.",
        "maltsEtCereales": [
          "Base Pilsner ou pale claire ; blé fréquent selon le style.",
          "Recette volontairement simple afin de laisser l’acidité et la fermentation rester lisibles."
        ],
        "houblons": [
          "Houblonnage faible à modéré : une forte amertume se marie difficilement avec une acidité franche."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces pour l’alcool ; bactéries lactiques selon la méthode ; Brettanomyces uniquement lorsqu’il appartient réellement au profil recherché."
        ],
        "ingredientsComplementaires": [
          "Fruits frais, surgelés, purées ou jus ; dosage et moment d’ajout déterminent arôme, couleur, tannin et refermentation."
        ],
        "profilEau": "Eau douce à modérément minérale, sans sulfate excessif qui durcirait la perception acide.",
        "empatage": "Empâtage adapté au degré de fermentescibilité et à la méthode d’acidification ; éviter de confondre acidification du moût et fermentation mixte longue.",
        "ebullitionEtHoublonnage": "Ébullition et houblonnage mesurés. En kettle sour, l’acidification lactique intervient avant une seconde chauffe qui stabilise microbiologiquement le moût.",
        "fermentation": "Conduite dépendante du procédé : fermentation propre après kettle sour, co-fermentation levure/LAB, ou fermentation mixte longue.",
        "maturation": "Fruit ajouté après fermentation primaire ou pendant la garde ; contrôler densité et stabilité avant conditionnement, particulièrement avec Brett ou cultures mixtes.",
        "profilRecherche": "Une sour où le fruit reste identifiable mais fermenté et intégré à l’acidité, sans masquer totalement la base ni produire une douceur non maîtrisée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28C Wild Specialty Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/28C/wild-specialty-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28B Mixed-Fermentation Sour Beer",
          "type": "guide_de_style",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28b-mixed-fermentation-sour-beer",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Mixed Fermentation — microorganisms and long/short methods",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Mixed_Fermentation",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Fruited sour beer categories",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "brett-beer",
      "nom": "Brett Beer",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "wild-beer",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Mouvement craft international",
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
        "max": 50,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 4,
        "max": 70,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Fermentation ou maturation faisant intervenir Brettanomyces comme caractère principal."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Brett Beer met Brettanomyces au premier plan : ananas mûr, citron, foin, cuir, poivre, cave propre, parfois écurie légère. Elle n’est pas obligatoirement acide ; son sujet principal est le funk sec, l’évolution aromatique et la tension sauvage.",
      "histoireEtOrigines": `Brett Beer est une catégorie moderne bâtie autour de Brettanomyces. Le point fondamental est qu’elle n’est pas nécessairement acide. Le BJCP définit la catégorie par une fermentation avec Saccharomyces et Brett, ou parfois Brett seul, sans bactéries lactiques obligatoires. Brett peut augmenter l’atténuation, transformer des précurseurs aromatiques et produire des profils allant du fruit tropical et de la poire à des notes de foin, cuir, terre ou fumée légère avec l’âge.

La fascination craft pour les fermentations « 100 % Brett » s’est fortement développée après 2000. Une partie de cette histoire est brouillée par l’ancienne identification erronée de certaines souches commerciales, ce que le BJCP 2021 signale explicitement. L’usage de Brett en secondaire ou en co-fermentation avec Saccharomyces est aujourd’hui beaucoup mieux compris.

Le cliché « cheval = Brett » est donc réducteur. Une Brett Beer réussie doit être sèche, complexe et propre dans son registre ; pansement, solvant, putréfaction ou acidité acétique agressive sont des défauts, pas une preuve d’authenticité.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Brett Beer peut partir de presque n’importe quel style de base ; la fermentation définit davantage la catégorie que le grain.",
        "maltsEtCereales": [
          "Grist du style de base ; prévoir que Brett peut atténuer davantage et alléger la perception maltée."
        ],
        "houblons": [
          "Selon le style de base ; une forte expression houblonnée peut évoluer avec le temps."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces + une ou plusieurs souches de Brettanomyces, ou fermentation Brett seule selon le projet ; pas de bactéries lactiques nécessaires à la définition."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Selon le style de base, en évitant les profils qui durcissent inutilement la sécheresse.",
        "empatage": "Selon le style de base ; possibilité de laisser davantage de substrats si une longue évolution Brett est recherchée.",
        "ebullitionEtHoublonnage": "Selon le style de base.",
        "fermentation": "Co-fermentation, inoculation secondaire ou Brett seule ; la température et la souche influencent fortement le profil fruité/phénolique.",
        "maturation": "Semaines à mois ; le profil se déplace souvent du fruit vers davantage de funk avec l’âge. Vérifier la stabilité avant mise en bouteille.",
        "profilRecherche": "Une bière plus sèche et souvent plus fruitée/funky que sa base, sans acidité lactique obligatoire ni défauts phénoliques agressifs."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28A Brett Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/28A/brett-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Brettanomyces and Saccharomyces Co-fermentation",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Brettanomyces_and_Saccharomyces_Co-fermentation",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Brett Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "mixed-culture-brett-beer",
      "nom": "Mixed-Culture Brett Beer",
      "collectionId": 6,
      "nature": "SS",
      "parentPrincipalId": "brett-beer",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Mouvement craft international",
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
        "max": 50,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 4,
        "max": 70,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Culture mixte associant Brettanomyces à d’autres levures et bactéries."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Mixed-Culture Brett Beer élargit le territoire : Brett, levures classiques, Lactobacillus, Pediococcus ou flore de barrique construisent acidité, funk, fruit, cuir, bois et sécheresse. Ici, plusieurs microbes jouent dans la même cave ; il faut un chef d’orchestre.",
      "histoireEtOrigines": `Mixed-Culture Brett Beer met l’accent sur une culture contenant plusieurs microorganismes où Brettanomyces joue un rôle majeur. Selon la présence ou non de bactéries lactiques, le résultat peut rester surtout sec et funky ou devenir franchement acide. Cette ambiguïté explique pourquoi les classifications modernes séparent Brett Beer et Mixed-Fermentation Sour Beer.

Les programmes de cultures mixtes modernes s’inspirent de fermentations belges et historiques, mais utilisent souvent des mélanges de laboratoire, des cultures maison et des lies de bouteilles. Une culture n’est pas une recette : ses proportions évoluent, chaque souche a son comportement et la conduite du brasseur — température, oxygène, bois, densité résiduelle, temps — détermine une grande partie du résultat.

La fiche doit donc présenter la microbiologie comme un écosystème piloté plutôt qu’une « infection volontaire ».`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La composition de culture et le style de base varient ; l’important est l’interaction entre plusieurs microorganismes avec Brett significatif.",
        "maltsEtCereales": [
          "Base adaptée au style ; céréales simples ou plus dextrinées selon la durée de garde souhaitée."
        ],
        "houblons": [
          "Souvent modérés ; un IBU élevé peut inhiber certaines bactéries lactiques et rendre l’acidité moins harmonieuse."
        ],
        "levuresEtMicroorganismes": [
          "Brettanomyces avec Saccharomyces ; Lactobacillus et/ou Pediococcus possibles selon que l’on recherche aussi une acidité lactique."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modéré et cohérent avec la base.",
        "empatage": "Fermentescibilité ajustée à la durée ; plus de substrats complexes possibles pour une évolution longue de culture mixte.",
        "ebullitionEtHoublonnage": "Houblonnage prudent lorsque des LAB doivent acidifier la bière.",
        "fermentation": "Co-pitch ou inoculations séquentielles ; la chronologie modifie fortement l’équilibre Sacch/Brett/LAB.",
        "maturation": "Plusieurs mois à plus d’un an fréquents ; bois et assemblage possibles. Contrôle de stabilité indispensable avant conditionnement.",
        "profilRecherche": "Une fermentation complexe où fruit, sécheresse, funk et éventuelle acidité sont intégrés, sans diacétyle massif, texture filante persistante ou vinaigre dominant."
      },
      "sources": [
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Mixed Fermentation — microorganisms and long/short methods",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Mixed_Fermentation",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Brettanomyces and Saccharomyces Co-fermentation",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Brettanomyces_and_Saccharomyces_Co-fermentation",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28B Mixed-Fermentation Sour Beer",
          "type": "guide_de_style",
          "url": "https://styles.bjcp.org/bjcp-2021-beer/28/28b-mixed-fermentation-sour-beer",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28A Brett Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/28A/brett-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "contemporary-belgian-style-spontaneously-fermented-ale",
      "nom": "Contemporary Belgian-Style Spontaneously Fermented Ale",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "biere-de-fermentation-spontanee-spontaneous-sour-ale",
      "aliases": [],
      "paysOrigine": [
        "Belgique",
        "International"
      ],
      "origine": {
        "libelle": "Belgique contemporaine et interprétations internationales",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 10,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 0,
        "max": 20,
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
        "type": "spontanee",
        "details": "Fermentation spontanée assurée par une microflore environnementale complexe."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Flûte",
          "Teku"
        ]
      },
      "description": "Cette bière reprend la grammaire du lambic sans forcément porter son ancrage traditionnel : moût exposé, microflore locale, bois, temps long, acidité, foin, fruit mûr, cave et assemblage possible. Elle doit assumer son terroir propre, pas imiter Bruxelles avec un masque.",
      "histoireEtOrigines": `Cette appellation moderne cherche à décrire des bières contemporaines inspirées du lambic belge et produites par fermentation spontanée, sans les présenter abusivement comme du lambic traditionnel. C’est une distinction importante : reproduire un coolship, un turbid mash et un élevage en barriques dans un autre pays ne reproduit ni la microflore, ni la géographie, ni le patrimoine culturel du Pajottenland et de la vallée de la Senne.

Depuis les années 2000, de nombreuses brasseries ont développé des programmes de fermentation spontanée locale, parfois appelés « coolship ales ». Leur intérêt est précisément de laisser l’environnement de la brasserie écrire une partie de l’identité du produit. Elles peuvent assembler plusieurs millésimes et utiliser des fruits, mais leurs meilleures expressions assument leur terroir microbiologique propre.

La catégorie honore donc l’influence belge tout en respectant la différence entre inspiration technique et appellation traditionnelle.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Interprétation contemporaine de fermentation spontanée inspirée du lambic, avec matières premières et microflore locales variables.",
        "maltsEtCereales": [
          "Orge maltée pâle et souvent blé cru/non malté en référence aux méthodes lambic, sans obligation d’imiter exactement une recette belge."
        ],
        "houblons": [
          "Houblons âgés ou faibles en arôme fréquents lorsque l’objectif est une longue fermentation spontanée."
        ],
        "levuresEtMicroorganismes": [
          "Flore environnementale locale captée au refroidissement ; pas de culture pure comme inoculum principal dans une démarche réellement spontanée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil local adapté au procédé.",
        "empatage": "Turbid mash possible mais non obligatoire ; l’important est de fournir un moût compatible avec une succession fermentaire longue.",
        "ebullitionEtHoublonnage": "Ébullition longue possible puis coolship/refroidissement ouvert durant les périodes climatiques adaptées.",
        "fermentation": "Spontanée, avec sélection naturelle et succession microbienne propres au site de production.",
        "maturation": "Un à plusieurs ans en bois fréquents, puis assemblage de lots et refermentation en bouteille selon la méthode de la maison.",
        "profilRecherche": "Une ale spontanée complexe et sèche qui exprime son site de production sans se faire passer pour un lambic traditionnel belge."
      },
      "sources": [
        {
          "organisme": "HORAL",
          "edition": null,
          "reference": "Traditional Lambic Beers — production, Oude Geuze et Oude fruit lambic",
          "type": "source_traditionnelle_institutionnelle",
          "url": "https://horal.be/en/traditional-lambic-beers/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brouwerij 3 Fonteinen",
          "edition": null,
          "reference": "Lambic in short — spontaneous fermentation, coolship and oak ageing",
          "type": "source_producteur_primaire",
          "url": "https://www.3fonteinen.be/blog/lambic-in-short",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style spontaneously fermented ale and contemporary interpretations",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Mixed Fermentation — microorganisms and long/short methods",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Mixed_Fermentation",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "wood-and-barrel-aged-sour-beer",
      "nom": "Wood- and Barrel-Aged Sour Beer",
      "collectionId": 6,
      "nature": "S",
      "parentPrincipalId": "biere-acide-sour-beer",
      "aliases": [
        "Barrel-Aged Sour Beer",
        "Wood-Aged Sour Beer"
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
        "min": 4,
        "max": 14,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 0,
        "max": 40,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 4,
        "max": 100,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Fermentation mixte associant levures et micro-organismes acidifiants selon le profil recherché."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Wood- and Barrel-Aged Sour Beer ajoute le bois à l’acidité : tanins, vanille légère, vin, chêne, oxydation douce, profondeur et arrondi. La barrique doit étirer la bière, pas lui coller une planche mouillée sur la langue.",
      "histoireEtOrigines": `L’élevage acide en bois traverse plusieurs traditions anciennes, mais Wood and Barrel Aged Sour Beer est une catégorie moderne transversale. Le bois peut être un foudre neutre peu aromatique, une barrique de vin ou de spiritueux, ou simplement un milieu où une microflore de maison s’est installée. Son rôle n’est donc pas forcément de donner un goût de chêne neuf.

Dans les fermentations longues, le bois permet une micro-oxygénation lente et héberge des microorganismes. Le rapport surface/volume, l’âge du contenant, son historique, son étanchéité et le liquide qu’il contenait auparavant modifient radicalement l’évolution. La Brewers Association insiste sur le fait qu’une bière sour aged in wood doit trouver un équilibre entre bière de base, acidité, bois et éventuel caractère du contenu précédent.

Le risque est double : trop de bois transforme la bière en infusion de tanin ; trop d’oxygène favorise une acidité acétique agressive. Le vieillissement n’est donc pas une garantie de qualité : il demande dégustation, patience et assemblage.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La bière de base, la microflore, le bois et le contenant précédent peuvent tous changer.",
        "maltsEtCereales": [
          "Grist du style de base, généralement avec une amertume modérée et assez de matière fermentescible pour une longue garde."
        ],
        "houblons": [
          "Modérés ; tenir compte de la sensibilité des bactéries lactiques aux iso-alpha-acides."
        ],
        "levuresEtMicroorganismes": [
          "Culture acidifiante, souvent mixte ; microorganismes inoculés ou déjà établis dans le bois."
        ],
        "ingredientsComplementaires": [
          "Bois neutre ou aromatique ; fûts ayant contenu vin, spiritueux, cidre ou autre liquide selon la catégorie et le profil recherché."
        ],
        "profilEau": "Selon la base, en évitant une minéralité dure qui amplifie tannin et acidité.",
        "empatage": "Adapter le corps et les dextrines à la durée de garde et aux microorganismes.",
        "ebullitionEtHoublonnage": "Houblonnage d’équilibre, généralement limité.",
        "fermentation": "Fermentation primaire puis transfert en bois, ou fermentation directement en fût selon le programme.",
        "maturation": "Mois à années. Dégustation régulière, gestion de l’oxygène et assemblage de plusieurs barriques fortement recommandés pour la constance.",
        "profilRecherche": "Une sour complexe où acidité, fermentation et bois sont mariés ; le contenant soutient la bière sans la transformer en vinaigre ou en planche de chêne."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wood- and Barrel-Aged Sour Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Mixed Fermentation — microorganisms and long/short methods",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Mixed_Fermentation",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Union européenne",
          "edition": null,
          "reference": "Vlaams roodbruin bier / Flanders Red Ale — product specification and local expertise",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026XC02612",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "fruited-wood-and-barrel-aged-sour-beer",
      "nom": "Fruited Wood- and Barrel-Aged Sour Beer",
      "collectionId": 6,
      "nature": "SS",
      "parentPrincipalId": "wood-and-barrel-aged-sour-beer",
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
        "min": 4,
        "max": 14,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 0,
        "max": 40,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 4,
        "max": 100,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "mixte",
        "details": "Fermentation mixte associant levures et micro-organismes acidifiants selon le profil recherché."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Fruited Wood- and Barrel-Aged Sour Beer empile les trois étages dangereux : acidité, fruit et bois. Cerise, framboise, pêche, raisin ou fruits sauvages rencontrent tanins, barrique, fermentation et temps. Le but n’est pas une confiture acide, mais un vin de fruit brassicole.",
      "histoireEtOrigines": `Cette catégorie ajoute le fruit à la logique déjà complexe de l’élevage acide en bois. Elle hérite à la fois des traditions de bières fruitées fermentées — kriek, framboise et autres — et des programmes craft modernes de barriques. Elle n’est cependant pas synonyme de Fruit Lambic : une sour américaine vieillie en fût avec pêche ou mûre peut utiliser une culture, un bois et un style de base totalement différents.

Le fruit peut être ajouté dans la barrique, dans une cuve de maturation séparée ou au moment de l’assemblage. Plus il intervient tôt et plus ses sucres participent à une nouvelle fermentation ; plus il intervient tard, plus le brasseur doit surveiller stabilité microbiologique et pression en bouteille. Peaux et noyaux peuvent également apporter tannins et composés aromatiques.

Une grande Fruited Barrel Sour est donc un travail d’équilibre entre quatre voix : bière de base, acidité, fruit et élevage. Aucune ne doit rendre les trois autres illisibles.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie très variable combinant bière acide, fruit et élevage en bois.",
        "maltsEtCereales": [
          "Grist adapté à la bière de base et à la longue garde."
        ],
        "houblons": [
          "Généralement faibles à modérés pour préserver la fermentation acide."
        ],
        "levuresEtMicroorganismes": [
          "Cultures mixtes ou autres systèmes acidifiants compatibles avec le programme de barriques."
        ],
        "ingredientsComplementaires": [
          "Fruits entiers, purées ou jus ; bois/fûts neutres ou ayant contenu un autre produit selon le projet."
        ],
        "profilEau": "Profil modéré adapté à la base et aux tannins.",
        "empatage": "Préserver suffisamment de matière pour l’évolution longue sans finir lourd.",
        "ebullitionEtHoublonnage": "Houblonnage prudent ; éviter une amertume qui se heurte à l’acidité et aux tannins du fruit.",
        "fermentation": "Fermentation primaire puis élevage acide ; le fruit peut relancer une fermentation secondaire importante.",
        "maturation": "Mois à années, avec dégustation et assemblage. Attendre la stabilité réelle après fruit avant conditionnement.",
        "profilRecherche": "Une sour de barrique où le fruit paraît fermenté et intégré, le bois apporte profondeur et tannin mesuré, et l’acidité reste vive mais buvable."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Fruited Wood- and Barrel-Aged Sour Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28C Wild Specialty Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/28C/wild-specialty-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Mixed Fermentation — microorganisms and long/short methods",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Mixed_Fermentation",
          "consultation": "2026-08-08"
        }
      ]
    }
  ]
};

export default collection;
