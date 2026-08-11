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
      "description": "Une Bière acide se reconnaît à sa tension — citron, pomme, yaourt, fruits mûrs ou pointe vinaigrée — pas à une recette universelle. Cette grande famille réunit des traditions anciennes et des procédés récents dans lesquels les acides prennent une place que l’amertume occupe ailleurs. Le vrai repère tient en une phrase : « acide » décrit une sensation, pas une méthode.",
      "histoireEtOrigines": `Une gorgée peut être acide pour des raisons qui n'ont presque rien en commun. Dans un lambic, plusieurs populations microbiennes se succèdent durant une longue fermentation spontanée ; dans une rouge des Flandres, une culture mixte évolue pendant l'élevage et l'assemblage ; dans une Berliner Weisse, levures et bactéries lactiques construisent une acidité légère ; dans un kettle sour moderne, les bactéries travaillent sur le moût avant que celui-ci soit de nouveau chauffé puis fermenté par une levure de brasserie. « Sour Beer » rassemble donc un résultat sensoriel. Ce n'est ni une patrie, ni une levure, ni une généalogie.

Pendant des siècles, l'acidité faisait partie de nombreuses bières parce que les brasseurs ne disposaient ni de cultures pures ni d'équipements microbiologiquement isolés. Cela ne transforme pas chaque chope ancienne en ancêtre direct des catégories actuelles. À partir de la fin du XIXe siècle, la maîtrise des levures, l'hygiène industrielle et la réfrigération rendent possible une bière plus stable et plus prévisible ; les traditions acides qui survivent le font dans des bassins particuliers, avec leurs propres marchés, gestes et outils. Leur pluralité résiste mal au mot générique « sour », mais elle résiste fort bien dans le verre.

Le mouvement craft a changé l'échelle et le calendrier. Les programmes de fûts et de cultures mixtes ont remis le temps, l'assemblage et les fruits au centre ; le kettle souring a permis, lui, d'obtenir une acidité lactique en quelques jours dans un équipement plus facile à confiner. Après acidification, une ébullition arrête les bactéries avant la fermentation alcoolique. Cette méthode peut produire une excellente bière fraîche, mais elle ne reproduit pas automatiquement les transformations aromatiques d'un élevage de plusieurs mois. Le chronomètre ne fait pas tout le travail, même lorsqu'il porte une blouse de laboratoire.

Deux mesures empêchent enfin de réduire l'acidité à un chiffre magique. Le pH renseigne sur l'activité des ions hydrogène ; l'acidité titrable mesure la quantité de base nécessaire pour neutraliser les acides. Deux bières au même pH peuvent ainsi offrir des réserves acides et des perceptions différentes selon les acides présents, le sucre, l'alcool ou la carbonatation. Cette famille se comprend donc par une chaîne causale : microorganismes et procédé produisent des acides ; la matrice de la bière les transforme en sensation ; le brasseur décide si cette tension devient équilibre ou simple grimace.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille définie par une perception acide : les bases céréalières, les microorganismes et les calendriers restent volontairement pluriels.",
        "maltsEtCereales": [
          "Base claire ou sombre selon la branche ; blé cru du lambic, froment malté allemand et malts colorés flamands répondent à des histoires distinctes.",
          "Une base simple rend l'acidité lisible, tandis que les bières brunes utilisent mélanoïdines et sucres résiduels pour lui offrir un contrepoids."
        ],
        "houblons": [
          "Amertume généralement contenue, car acidité et iso-alpha-acides peuvent cumuler leur dureté ; les traditions au houblon vieilli recherchent surtout sa fonction conservatrice."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces assure souvent l'essentiel de la fermentation alcoolique ; bactéries lactiques, Brettanomyces et parfois bactéries acétiques interviennent selon la branche, jamais comme un trio obligatoire."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Le profil minéral suit la bière de base ; des sulfates élevés peuvent rendre l'association amertume-acidité plus anguleuse.",
        "empatage": "La fermentescibilité est choisie en fonction du temps et de l'écologie : une culture mixte longue peut exploiter des glucides qu'une fermentation courte laisserait intacts.",
        "ebullitionEtHoublonnage": "En kettle souring, le moût est acidifié avant la fermentation alcoolique puis réchauffé pour arrêter l'activité bactérienne ; ailleurs, l'ébullition et le houblonnage suivent la tradition concernée.",
        "fermentation": "Fermentation propre d'un moût déjà acidifié, co-inoculation, inoculations successives ou ensemencement spontané produisent des trajectoires différentes même si le pH final se ressemble.",
        "maturation": "De quelques semaines pour une bière lactique directe à plusieurs années lorsque culture mixte, fruit, bois et assemblage doivent converger.",
        "profilRecherche": "Une acidité intégrée dont l'intensité, la qualité et la finale restent cohérentes avec le malt, le fruit et la carbonatation."
      },
      "sources": [
        {
          "organisme": "Dysvik et al. — Applied and Environmental Microbiology",
          "edition": "2020",
          "reference": "Microbial Dynamics in Traditional and Modern Sour Beer Production",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7357471/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "American Society of Brewing Chemists",
          "edition": "2019",
          "reference": "Titratable Acidity & pH — laboratory workshop",
          "type": "source_scientifique_professionnelle",
          "url": "https://www.craftbrewersconference.com/wp-content/uploads/2019_presentations/ASBC-Lab-2-Titratable-Acidity-pH-2019.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "White Labs",
          "edition": null,
          "reference": "Making a Kettle Sour with Lactobacillus Cultures",
          "type": "source_laboratoire",
          "url": "https://blog.whitelabs.com/making-a-kettle-sour-with-lactobacillus-cultures",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23 — European Sour Ale et 28 — American Wild Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/",
          "consultation": "2026-08-11"
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
      "description": "L’American Wild Ale est un atelier plutôt qu’un style fermé : une bière américaine où cultures mixtes, Brettanomyces, bactéries, fruits, fûts ou flore locale redessinent la base. Elle peut être acide, sèche, vineuse ou franchement fruitée. Son américanité vient moins d’un ingrédient vedette que de cette liberté méthodique — liberté, ici, ne veut pas dire roulette microbienne.",
      "histoireEtOrigines": `À la fin du XXe siècle, les brasseurs craft américains découvrent dans les bières belges un autre rapport au temps. La fermentation ne s'arrête plus lorsque la levure principale a consommé les sucres faciles : fûts, cultures mixtes, fruits et assemblages peuvent prolonger le travail durant des mois. Ils ne reconstituent pas une tradition américaine disparue. Ils importent des idées, les installent dans des caves neuves et apprennent à composer avec des matières premières, des climats et des marchés différents.

New Belgium offre un jalon bien documenté. Inspirée par un voyage à vélo en Belgique en 1988, la brasserie de Fort Collins commence à vendre ses bières en 1991. Sa première La Folie est commercialisée au début de 2000 après un élevage en fûts de vin français ; l'arrivée, quelques mois plus tard, de grands foeders transforme ce qui devient un véritable programme de bières acides. Ce n'est pas « l'invention » de l'American Wild Ale, mais la preuve qu'une cave de fermentation mixte pouvait prendre place au cœur d'une brasserie craft américaine.

La décennie suivante multiplie les voies. Fondée par Korbel en 1997, Russian River voit ses droits et ses recettes transférés à Natalie et Vinnie Cilurzo en 2003 ; leur brewpub de Santa Rosa ouvre en avril 2004. La brasserie développe des bières acidulées élevées en fût et, avec Beatification, une bière de moût refroidi en koelschip puis fermenté dans des fûts de vin. La même année, Ron Jeffries fonde Jolly Pumpkin dans le Michigan autour de fermentations ouvertes, d'élevages en chêne, d'assemblages et de refermentations en bouteille. Les dates se croisent parce qu'il s'agit d'un mouvement, pas du brevet d'un héros solitaire.

Le vocabulaire de concours a ensuite rangé cette effervescence sous « American Wild Ale ». Le terme couvre des bières ensemencées avec des cultures commerciales, des cultures de maison ou une flore captée sur place ; il accueille Brett sans bactéries comme des fermentations réellement acides. Il dit donc surtout qu'une levure de brasserie pure n'est pas seule à écrire le profil. Les descendants de cette famille — American Sour, Brett Beer, bière fruitée, élevée en bois ou spontanée — méritent chacun leur branche, car une étiquette commune ne raccourcit ni le temps de cave ni la liste des décisions humaines.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille craft moderne définie par l'emploi intentionnel d'une écologie fermentaire non conventionnelle, non par une base de malt nationale.",
        "maltsEtCereales": [
          "Saison, blonde, brune, bière de blé ou recette conçue pour le vieillissement peuvent servir de base.",
          "Les dextrines et céréales crues peuvent nourrir une longue maturation ; une base plus fermentescible convient aux interprétations sèches et rapides."
        ],
        "houblons": [
          "Houblonnage généralement prudent quand l'acidité est forte ; une Brett Beer non acide peut accepter une expression houblonnée plus nette."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces, Brettanomyces, Lactobacillus, Pediococcus ou autres cultures, seules ou combinées selon le sous-style."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Construit autour de la bière de base et de la tension souhaitée ; le sulfate est dosé avec retenue lorsque amertume et acidité doivent cohabiter.",
        "empatage": "La recette peut réserver des substrats à Brett et aux bactéries, ou viser au contraire une base sèche immédiatement disponible.",
        "ebullitionEtHoublonnage": "Le houblon règle autant l'amertume que la sélection microbienne : certaines bactéries lactiques y sont sensibles, ce qui fait de chaque ajout une décision écologique.",
        "fermentation": "Inoculation simultanée ou séquentielle, culture de maison, fermentation ouverte ou spontanée : la méthode doit être nommée plutôt que cachée derrière « wild ».",
        "maturation": "De quelques mois à plusieurs années, avec suivi de chaque lot ; l'assemblage transforme les variations de fûts en profil voulu.",
        "profilRecherche": "Une complexité fermentaire lisible et maîtrisée, où acidité éventuelle, sécheresse, fruit et caractère phénolique servent encore la bière de base."
      },
      "sources": [
        {
          "organisme": "New Belgium Brewing",
          "edition": null,
          "reference": "Our Story — La Folie, fûts de vin et foeders au début de 2000",
          "type": "source_producteur_primaire",
          "url": "https://www.newbelgium.com/company/story/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "History and Beatification — programme belge, koelschip et fûts de vin",
          "type": "source_producteur_primaire",
          "url": "https://www.russianriverbrewing.com/about-us/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Jolly Pumpkin Artisan Ales",
          "edition": null,
          "reference": "History & Process — création en 2004, fermentation ouverte, bois et assemblage",
          "type": "source_producteur_primaire",
          "url": "https://www.brewery.jollypumpkin.com/history-process",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28 — American Wild Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/",
          "consultation": "2026-08-11"
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
        "type": "variable",
        "details": "Fermentation inoculée, mixte, ouverte ou spontanée : le mot « wild » ne désigne pas à lui seul une méthode."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "« Wild Beer » promet volontiers une forêt entière sur l’étiquette, mais le mot ne révèle ni l’origine des microbes ni le niveau d’acidité. Il signale surtout qu’une fermentation non conventionnelle façonne la bière. Brettanomyces peut apporter sécheresse et fruit sans acidité franche ; une culture de laboratoire peut être aussi « wild » commercialement qu’une flore captée dehors. Le terme est vivant, donc glissant.",
      "histoireEtOrigines": `Plaçons le mot « wild » à la barre des témoins. Affirme-t-il que les microorganismes viennent de l'air ? Non : une brasserie peut acheter une culture de Brettanomyces, l'inoculer avec précision et commercialiser une Wild Beer. Promet-il une fermentation spontanée ? Pas davantage : l'ensemencement peut être volontaire. Garantit-il une bière acide ? Encore moins : Brettanomyces produit surtout une forte atténuation et des composés fruités ou phénoliques ; l'acidité lactique vient généralement des bactéries lactiques. Trois questions, trois acquittements.

L'ambiguïté vient du passage d'un monde ancien à un vocabulaire moderne. Avant les cultures pures, les fermentations rassemblaient souvent plusieurs organismes sans que les buveurs aient besoin de les appeler « sauvages ». Le mot actuel naît surtout de la scène craft et de son désir de distinguer ces fermentations de la bière conduite par une seule souche de Saccharomyces. Il fonctionne bien comme invitation sensorielle et moins bien comme protocole de laboratoire.

Une définition utile doit donc annoncer ce que l'étiquette tait : quel organisme a été introduit, à quel moment, comment le moût a été exposé, si des bactéries acidifiantes sont présentes et combien de temps dure la maturation. « Wild » devient alors une catégorie transversale pour des bières où une écologie non conventionnelle compte vraiment. Sans ces précisions, le mot décrit surtout une veste en cuir microbiologique — élégante, mais avec peu de poches pour les faits.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Terme transversal décrivant une écologie de fermentation, pas un style à recette fixe.",
        "maltsEtCereales": [
          "Tout style de base peut devenir le support d'une fermentation dite wild ; sa composition doit rester identifiable si elle est annoncée.",
          "Des céréales crues ou des dextrines peuvent prolonger le travail de cultures mixtes, sans être obligatoires."
        ],
        "houblons": [
          "Le niveau de houblon dépend de l'acidité et de la tolérance des microorganismes choisis ; une bière à Brett seule accepte davantage d'amertume qu'une sour lactique."
        ],
        "levuresEtMicroorganismes": [
          "Microorganismes non conventionnels selon le projet : Brettanomyces, bactéries lactiques, cultures mixtes ou flore spontanée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Celui du style de base, ajusté pour ne pas transformer une éventuelle acidité en dureté minérale.",
        "empatage": "Choisi selon la durée : un moût très fermentescible donne vite une bière sèche, tandis que des glucides complexes alimentent une évolution prolongée.",
        "ebullitionEtHoublonnage": "Le houblon agit sur le goût et sur la sélection microbienne ; il ne peut pas être copié mécaniquement d'une recette propre.",
        "fermentation": "Le protocole doit préciser culture pure non conventionnelle, mélange inoculé, fermentation ouverte ou ensemencement spontané.",
        "maturation": "Assez longue pour que le profil se stabilise ; Brett peut continuer à consommer des sucres et modifier pression, sécheresse et arômes après la fermentation primaire.",
        "profilRecherche": "Une signature fermentaire volontaire et propre, sans confondre complexité avec défaut fécal, solvant ou acidité acétique agressive."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28 — American Wild Ale : usage du terme wild",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Colomer et al. — Current Opinion in Biotechnology",
          "edition": "2019",
          "reference": "Brettanomyces bruxellensis, the wild yeast par excellence and its use in beer production",
          "type": "publication_scientifique",
          "url": "https://www.sciencedirect.com/science/article/pii/S0958166918300922",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Milk The Funk",
          "edition": null,
          "reference": "Mixed Fermentation et Brettanomyces/Saccharomyces Co-fermentation",
          "type": "source_technique",
          "url": "https://www.milkthefunk.com/wiki/Mixed_Fermentation",
          "consultation": "2026-08-11"
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
      "description": "La fermentation spontanée commence par une porte ouverte avec précision : le moût refroidit dans un bac peu profond, rencontre l’écologie de la brasserie, puis fermente et mûrit longuement. L’air participe, mais les surfaces, les cuves et les fûts aussi. Le brasseur ne choisit pas une souche unique ; il choisit la saison, le lieu, le matériel et les lots qu’il gardera. Spontanée, donc, pas improvisée.",
      "histoireEtOrigines": `La scène la plus visible tient dans un bac : un moût chaud s'étale dans un coolship peu profond et refroidit pendant la nuit. Pourtant, réduire la fermentation spontanée à des microbes tombés du ciel manque l'essentiel. Les études menées sur le lambic identifient des sources multiples — air, cuves, tuyauterie, bâtiments et fûts — puis une succession de communautés au fil du temps. Les entérobactéries des débuts cèdent la place aux levures de fermentation alcoolique, aux bactéries lactiques puis à Brettanomyces. Le résultat n'est pas une levure locale héroïque, mais un écosystème relayant le témoin.

L'absence d'inoculation par une culture pure ne signifie donc pas absence d'intervention. Le brasseur prépare un moût favorable, choisit des nuits assez fraîches, entretient un environnement de production, transfère le liquide, surveille chaque fût et assemble ou écarte les lots. Dans certaines productions de lambic, le moût est même préacidifié manuellement afin de rendre les premières phases plus sûres. La nature entre dans la brasserie ; elle n'obtient pas pour autant les clés de la caisse.

Cette méthode était autrefois liée à des dispositifs de refroidissement répandus avant les échangeurs modernes. Sa survie la plus élaborée se trouve dans le lambic du Brabant et de Bruxelles, où elle s'associe au blé non malté, aux houblons vieillis et à un long élevage. Mais « spontané » et « lambic » ne sont pas interchangeables : le premier nomme un mode d'ensemencement, le second une tradition historique, technique et commerciale complète.

Depuis la fin du XXe siècle, des brasseurs d'autres régions ont installé leurs propres coolships. Allagash, dans le Maine, refroidit ainsi son moût pendant la nuit avant un élevage d'un à trois ans en fûts de vin ; Russian River procède de même pour Beatification en Californie. Leurs bières peuvent dialoguer avec la Belgique sans prétendre reproduire son environnement à l'identique. La recherche américaine sur ces coolship ales montre d'ailleurs des successions comparables dans leurs grandes fonctions, mais des communautés propres aux sites et aux lots. Une méthode voyage ; son microbiome, lui, refuse le copier-coller.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La méthode spontanée peut s’appliquer à différentes bases ; le lambic constitue une tradition spécifique et plus codifiée.",
        "maltsEtCereales": [
          "Moût conçu pour une longue succession microbienne ; le lambic utilise traditionnellement malt d'orge et proportion substantielle de blé non malté.",
          "D'autres traditions spontanées peuvent employer une base différente sans devenir pour autant des lambics."
        ],
        "houblons": [
          "Houblonnage adapté à l'écologie visée ; le lambic emploie des houblons vieillis pour limiter l'amertume tout en conservant une fonction protectrice."
        ],
        "levuresEtMicroorganismes": [
          "Flore environnementale captée pendant le refroidissement : succession de levures, bactéries lactiques et autres microorganismes plutôt qu’une culture pure unique."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil lié au site ; sa stabilité compte davantage qu'une imitation minérale d'une autre région.",
        "empatage": "Le procédé crée un moût suffisamment nutritif pour plusieurs vagues microbiennes ; les techniques historiques de lambic sont détaillées dans sa branche.",
        "ebullitionEtHoublonnage": "Après l'ébullition, le moût est refroidi ouvertement pendant une fenêtre climatique appropriée ; profondeur du bac, durée et température sélectionnent autant qu'ils refroidissent.",
        "fermentation": "Aucune culture pure n'est ajoutée au départ ; plusieurs groupes microbiens se succèdent, avec variations entre brasseries, récipients et millésimes.",
        "maturation": "Longue et suivie lot par lot. Le bois sert de récipient et de niche microbienne, mais le programme entier — pas le matériau seul — construit la continuité.",
        "profilRecherche": "Un profil stable, sec et complexe issu du lieu et du temps, sans défaut putride persistant ni acidité acétique envahissante."
      },
      "sources": [
        {
          "organisme": "De Roos & De Vuyst — Applied and Environmental Microbiology",
          "edition": "2021",
          "reference": "Technological and Environmental Features Determine the Uniqueness of Spontaneous Lambic Fermentations",
          "type": "publication_scientifique",
          "url": "https://journals.asm.org/doi/10.1128/AEM.00612-21",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Spitaels et al. — PLOS ONE",
          "edition": "2014",
          "reference": "The Microbial Diversity of Traditional Spontaneously Fermented Lambic Beer",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3991685/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Bokulich et al. — UC Davis",
          "edition": "2012",
          "reference": "Brewhouse-Resident Microbiota Are Responsible for Multi-Stage Fermentation of American Coolship Ale",
          "type": "publication_scientifique",
          "url": "https://escholarship.org/content/qt2db2669w/qt2db2669w.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Allagash Brewing Company",
          "edition": null,
          "reference": "Coolship — refroidissement nocturne et élevage de un à trois ans",
          "type": "source_producteur_primaire",
          "url": "https://www.allagash.com/coolship/",
          "consultation": "2026-08-11"
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
      "description": "La Berliner Weisse met Berlin en apesanteur : une petite bière de blé très pâle, sèche, effervescente et citronnée, avec une amertume presque effacée. Son acidité lactique doit réveiller plutôt que décaper. Sous cette silhouette légère se cache pourtant une fermentation historique bien plus peuplée qu’un simple moût acidifié à la hâte.",
      "histoireEtOrigines": `Berlin n'a pas reçu sa bière blanche sous la forme d'une recette datée et signée. Plusieurs généalogies la rattachent aux bières blanches du nord de l'Allemagne, à la famille du Broyhan ou à des influences venues de Flandre avec les huguenots. Les sources ne permettent pas de transformer l'une de ces pistes en acte de naissance incontestable. Ce qui est solide, en revanche, est son enracinement progressif à Berlin aux XVIIe et XVIIIe siècles, puis son immense succès au XIXe : une bière locale vive, peu alcoolisée et adaptée aux tavernes d'une métropole en expansion.

Le surnom « Champagne du Nord », souvent placé dans la bouche de Napoléon ou de ses soldats, résume à merveille son effervescence — et illustre tout aussi bien la fragilité d'une citation trop belle. L'attribution circule largement, mais sa formulation et son auteur ne reposent pas sur une preuve contemporaine claire. La bière n'en avait pas besoin pour briller : sa refermentation et sa carbonatation la rendaient déjà festive sans uniforme français.

La Berliner historique n'était pas un simple jus de blé acidifié. Des travaux récents de la Technische Universität Berlin sur des souches conservées provenant d'anciennes productions commerciales ont retrouvé Saccharomyces, des bactéries lactiques apparentées notamment à Lactobacillus brevis et des Brettanomyces. Leurs interactions produisent une acidité, une atténuation et des arômes qu'une seule culture ne peut résumer. Les méthodes variaient selon les brasseries, et les versions anciennes pouvaient aussi être plus fortes, gardées ou fumées : la catégorie moderne a aplati une famille autrefois moins sage.

L'industrialisation impose ensuite régularité et vitesse. Au début du XXe siècle, Otto Francke expérimente une acidification lactique séparée, plus sûre et prévisible ; selon l'histoire technique rapportée par la presse spécialisée, la méthode est abandonnée après quelques années car la bière manque du caractère attendu. L'épisode ressemble au kettle souring contemporain, mais n'établit pas une filiation continue entre tous les procédés rapides actuels et la vieille bière berlinoise.

Au XXe siècle, concentrations industrielles, guerres et concurrence des lagers réduisent drastiquement le nombre de producteurs. La tradition du service « mit Schuss », avec sirop de framboise ou d'aspérule, est attestée au moins au tournant du XXe siècle et adoucit la bière au verre ; elle ne prouve pas que la bière était historiquement brassée avec des fruits. Sa renaissance craft mondiale a gardé la faible force, le blé et l'acidité, mais souvent remplacé la fermentation mixte et la garde par une acidification courte. Même silhouette, coulisses différentes.`,
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
        "profilEau": "Eau peu alcaline favorisant une robe claire et une acidité nette ; des sulfates élevés rendraient cette petite bière inutilement tranchante.",
        "empatage": "Infusion ou décoction selon l'école ; des sources historiques décrivent aussi houblonnage de la maische et procédés sans ébullition complète du moût.",
        "ebullitionEtHoublonnage": "Très faible charge de houblon. Une version rapide acidifie le moût avant une nouvelle chauffe ; une reconstruction historique conserve davantage de continuité microbienne.",
        "fermentation": "Saccharomyces construit l'alcool, les bactéries lactiques l'acidité et, dans certaines lignées historiques, Brettanomyces prolonge atténuation et complexité.",
        "maturation": "La garde et la refermentation arrondissent la fermentation mixte ; les versions rapides privilégient fraîcheur et carbonatation immédiate.",
        "profilRecherche": "Une bière très pâle, légère et pétillante, dont l'acidité citronnée reste fine ; une nuance fruitée ou florale est bienvenue, le vinaigre ne l'est pas."
      },
      "sources": [
        {
          "organisme": "El Baaboua et al. — Fermentation",
          "edition": "2024",
          "reference": "A Glimpse into the Microbial Diversity of Traditional Berliner Weisse Beers",
          "type": "publication_scientifique",
          "url": "https://www.mdpi.com/2311-5637/10/7/363",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Technische Universität Berlin",
          "edition": "2024",
          "reference": "Repository record — microbial diversity of historical commercial Berliner Weisse strains",
          "type": "source_universitaire",
          "url": "https://depositonce.tu-berlin.de/items/d254820d-037f-4e03-9d53-8260295f2425",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": "2021",
          "reference": "Style School: Berliner Weisse Is Legion — histoire, Francke et sirops",
          "type": "presse_specialisee",
          "url": "https://www.beerandbrewing.com/style-school-berliner-weisse-is-legion",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23A Berliner Weisse",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/23A/berliner-weisse/",
          "consultation": "2026-08-11"
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
        "type": "variable",
        "details": "Base acidifiée par fermentation mixte ou méthode rapide, puis transformée par l'ingrédient spécial."
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
      "description": "La Specialty Berliner Weisse conserve le ressort léger, blé-acidité-bulles, puis lui confie un partenaire : fruit, zeste, herbe, épice ou houblon. L’ajout peut teinter et parfumer la bière, mais il devrait encore laisser reconnaître sa petite base nerveuse. Une framboise invitée dans le verre n’a pas besoin d’arriver avec le mobilier.",
      "histoireEtOrigines": `Cette branche naît moins dans les tavernes de Berlin que dans les cuves du craft contemporain. Une Berliner très légère et peu amère constitue un support accueillant : le fruit y reste lisible, l'acidité amplifie sa fraîcheur et le coût d'une maturation courte permet de multiplier les variations saisonnières. Les concours ont fini par donner un cadre à ce marché, en orientant ces bières vers les catégories fruitées, épicées ou « specialty » lorsque l'ajout devient déterminant.

Le service berlinois avec un trait de sirop a fourni une image commode, mais les deux gestes ne sont pas équivalents. Verser au comptoir du sirop de framboise ou d'aspérule permet au buveur de doser le sucre après fermentation. Ajouter des fruits en cuve apporte sucres, acides, tannins, couleur et microorganismes éventuels ; les levures peuvent les transformer et la refermentation peut sécher le résultat. La première opération habille le verre, la seconde reconstruit la bière.

La mémoire du parent reste donc son meilleur garde-fou. Une Specialty Berliner convaincante demeure légère, effervescente et désaltérante. Si le fruit, le lactose ou la purée la transforme en dessert épais, le produit peut être réussi, mais son lien avec Berlin devient une parenté lointaine plutôt qu'une carte d'identité.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base pâle de malt d'orge et de blé, gardée légère pour éviter que l'ajout ne produise une bière lourde.",
          "Des malts colorés ne sont employés que si l'ingrédient et le profil annoncé justifient l'éloignement de la silhouette berlinoise."
        ],
        "houblons": [
          "Amertume très basse dans les versions fruitées ; un houblon aromatique peut devenir l'ajout spécial s'il ne durcit pas l'acidité."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces pour l’alcool ; bactéries lactiques selon la méthode ; Brettanomyces uniquement lorsqu’il appartient réellement au profil recherché."
        ],
        "ingredientsComplementaires": [
          "Fruits, zestes, herbes ou épices clairement identifiables ; dosage conçu pour compléter une base légère."
        ],
        "profilEau": "Peu alcaline et sans excès de sulfate, afin que fruit et acidité gardent des contours fins.",
        "empatage": "Fermentescibilité élevée pour préserver la buvabilité ; la quantité de sucre apportée par le fruit est intégrée au calcul.",
        "ebullitionEtHoublonnage": "Méthode d'acidification déclarée ; zestes et épices sont ajoutés à un moment qui limite extraction végétale et pertes aromatiques.",
        "fermentation": "Le fruit fermentescible est suivi jusqu'à stabilité. Purée aseptique, fruit entier ou jus ne fournissent ni la même eau ni les mêmes tannins.",
        "maturation": "Assez courte pour conserver l'éclat de l'ajout, mais assez longue pour achever la refermentation et sécuriser le conditionnement.",
        "profilRecherche": "Une base berlinoise encore reconnaissable, sèche et vive, avec un ingrédient net plutôt qu'un empilement de parfums."
      },
      "sources": [
        {
          "organisme": "Craft Beer & Brewing",
          "edition": "2021",
          "reference": "Style School: Berliner Weisse Is Legion — service au sirop attesté vers 1900",
          "type": "presse_specialisee",
          "url": "https://www.beerandbrewing.com/style-school-berliner-weisse-is-legion",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "29A Fruit Beer et 30A Spice, Herb, or Vegetable Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/29/29A/fruit-beer/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Specialty Berliner-style sour beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
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
      "description": "La Gose tient son équilibre sur trois grains de presque rien : acidité lactique, salinité légère et coriandre citronnée autour d’une bière de blé vive et peu amère. Chacun doit être perceptible, aucun ne doit gouverner. Son histoire a voyagé de Goslar à Leipzig avant de faire le tour du craft mondial ; la cuillère de sel, elle, est restée petite.",
      "histoireEtOrigines": `La Gose porte le nom de Goslar, ancienne ville impériale du Harz traversée par le petit cours d'eau Gose. Son ancienneté est certaine ; sa « première » date l'est moins. Slow Food Deutschland cite un privilège de vente à Osterode en 1239, tandis que l'histoire publiée par Ritterguts retient un document d'Ilsenburg daté du 27 mars 1332. Le récit de l'empereur Otton III goûtant déjà cette bière vers l'an mil relève explicitement de la légende. Surtout, une mention médiévale de « Gose » n'est pas la fiche de brassage de la version actuelle : elle prouve un commerce ou un nom, pas nécessairement une continuité parfaite du sel et de la coriandre.

La bière quitte progressivement son berceau. Leipzig raconte qu'en 1738 le prince Léopold Ier d'Anhalt-Dessau, le « Vieux Dessauer », aurait favorisé son service dans la ville ; le site municipal présente lui-même cet épisode comme une légende. Le transfert le mieux documenté intervient en 1824, lorsque le brasseur Johann Philipp Ledermann, venu de Goslar, apporte son savoir à la brasserie du domaine de Döllnitz, près de Halle. Cette Ritterguts Gose approvisionne bientôt Leipzig et transforme une bière du Harz en institution saxonne.

Entre environ 1880 et 1920, des dizaines de tavernes de Leipzig servent la Gose. Puis les lagers de fermentation basse, les guerres, les pénuries et les restructurations industrielles réduisent son territoire. Après la fermeture du domaine de Döllnitz en 1945, Friedrich Wurzler maintient une petite production de 1949 à 1966. Quand sa brasserie ferme, la Gose de Leipzig disparaît pendant vingt ans.

La renaissance commence en 1986 — trois ans avant la chute du Mur — lorsque Lothar Goldhahn rouvre la Gosenschenke Ohne Bedenken et obtient une Gose brassée à Berlin-Est. Il la produit ensuite à Dahlen au début des années 1990, mais l'entreprise cesse en 1995. Tilo Jänichen et des partenaires reconstituent à leur tour Ritterguts Gose à partir de 1999. Cette série d'essais, d'arrêts et de reprises décrit mieux une reconstruction patrimoniale qu'un réveil miraculeux d'une recette demeurée intacte.

La Gose reconstruite est une bière de fermentation haute, de blé et d'orge, acidifiée par des bactéries lactiques, peu houblonnée, salée avec mesure et aromatisée à la coriandre. L'idée que tout le sel viendrait naturellement de la rivière ou de l'aquifère de Goslar est séduisante mais mal démontrée ; les recettes modernes l'ajoutent explicitement. La tradition et la scène craft partagent aujourd'hui ce triangle acide-sel-coriandre, puis divergent sur le procédé, le dosage et les fruits.`,
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
        "profilEau": "Faible dureté et sulfates contenus ; la salinité est réglée comme un assaisonnement mesurable, non attribuée par défaut à une eau mythique.",
        "empatage": "La proportion de blé soutient mousse et texture ; l'orge fournit les enveloppes qui facilitent la filtration.",
        "ebullitionEtHoublonnage": "Houblonnage très discret. Coriandre et sel sont dosés pour rester en soutien ; la méthode d'acidification détermine l'ordre des chauffes.",
        "fermentation": "Levure haute pour l'alcool et bactéries lactiques pour l'acidité, ensemble ou en étapes séparées selon la lignée de production.",
        "maturation": "Conditionnement plutôt court et vif dans les versions actuelles ; une refermentation peut apporter l'effervescence historiquement recherchée.",
        "profilRecherche": "Une bière de blé légère, sèche et pétillante où acidité, sel et coriandre se répondent sans évoquer saumure ni parfum."
      },
      "sources": [
        {
          "organisme": "Slow Food Deutschland",
          "edition": null,
          "reference": "Gose — Arche des Geschmacks : tradition, ruptures et renaissance",
          "type": "source_patrimoniale",
          "url": "https://www.slowfood.de/was-wir-tun/projekte-aktionen-und-kampagnen/arche-des-geschmacks/die_arche_passagiere/gose",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Original Ritterguts Gose",
          "edition": null,
          "reference": "Gose history — documents, Döllnitz, extinction et relances",
          "type": "source_producteur_historique",
          "url": "https://www.leipziger-gose.com/en/gose-history/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Ville de Leipzig",
          "edition": null,
          "reference": "Wie die Gose nach Leipzig kam — tradition du Vieux Dessauer présentée comme légende",
          "type": "source_municipale_historique",
          "url": "https://www.leipzig.de/rathaus/stadtgeschichte-und-gedenken/stadtgeschichte/historisches-aus-1000-jahren/wie-die-gose-nach-leipzig-kam",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23G Gose",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/23G/gose/",
          "consultation": "2026-08-11"
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
      "description": "La Leipziger Gose est la branche de taverne : blé pâle, acidité souple, sel à peine marin, coriandre citronnée et forte effervescence. Son identité vient autant du débit historique et de la bouteille à long col que de la recette. Elle appelle une seconde gorgée, pas une photographie de fruit exotique flottant dans une saumure rose.",
      "histoireEtOrigines": `À Leipzig, la Gose devient un système de distribution avant de devenir une catégorie de concours. Au XIXe siècle, la brasserie du domaine de Döllnitz expédie une bière encore en fermentation vers les Gosenschenken de Leipzig et de Halle. Le tavernier la soutire dans de hautes bouteilles à long col et la laisse finir sa maturation en cave. La levure montante forme dans le goulot un bouchon naturel ; récipient, transport et débit participent ainsi au produit final. La bouteille n'est pas un costume folklorique posé après coup : c'est un outil de fermentation.

Durant l'âge d'or situé approximativement entre 1880 et 1920, environ quatre-vingts débits de Leipzig servent la spécialité selon l'histoire de Ritterguts. Cette échelle explique pourquoi le nom de la ville supplante celui de Goslar dans la mémoire du style. La production n'était pourtant pas immobile : fournisseurs, brasseries et techniques changeaient, tandis que les lagers gagnaient du terrain.

Après la rupture de 1966, la renaissance locale s'appuie précisément sur ces lieux de service et ces souvenirs techniques. Lothar Goldhahn rouvre Ohne Bedenken en 1986 avant que la production ne retrouve plusieurs domiciles ; la relance de Ritterguts en 1999 et l'ouverture de nouvelles brasseries de Leipzig stabilisent enfin une présence commerciale. La Leipziger actuelle est donc patrimoniale au sens actif : elle recompose une pratique locale documentée, au lieu de prétendre qu'aucune bouteille n'a jamais été vide entre deux siècles.`,
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
        "profilEau": "Profil modéré ; le sel est ajouté avec précision pour une fraîcheur minérale, non une sensation de bouillon.",
        "empatage": "Blé et orge donnent un moût léger mais mousseux ; la filtrabilité impose de conserver assez d'enveloppes d'orge.",
        "ebullitionEtHoublonnage": "Houblon et coriandre restent en arrière-plan. Le sel est pesé en fonction de l'eau réelle, pas d'un nombre recopié sans analyse.",
        "fermentation": "Fermentation haute et acidification lactique ; une reconstruction patrimoniale recherche davantage qu'un pH en reproduisant effervescence et caractère de fermentation.",
        "maturation": "Refermentation et forte carbonatation prolongent la logique des anciennes bouteilles de débit, avec la sécurité d'un conditionnement moderne.",
        "profilRecherche": "Une Gose de Leipzig sèche, acidulée, légèrement saline, céréalière et épicée avec retenue."
      },
      "sources": [
        {
          "organisme": "Original Ritterguts Gose",
          "edition": null,
          "reference": "Gose history — transport, bouteilles de débit et âge d'or leipzigois",
          "type": "source_producteur_historique",
          "url": "https://www.leipziger-gose.com/en/gose-history/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Slow Food Deutschland",
          "edition": null,
          "reference": "Gose — disparition de Leipzig et reconstruction",
          "type": "source_patrimoniale",
          "url": "https://www.slowfood.de/was-wir-tun/projekte-aktionen-und-kampagnen/arche-des-geschmacks/die_arche_passagiere/gose",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Leipzig-style Gose",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
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
        "type": "variable",
        "details": "Kettle souring fréquent, mais fermentation mixte ou autre acidification contrôlée restent possibles."
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
      "description": "La Contemporary Gose emporte l’idée allemande — blé, acidité, sel — vers les vergers, les tropiques et parfois le jardin d’épices. Elle peut être fruitée, plus colorée ou plus forte, souvent grâce à une acidification rapide. Pour mériter encore son nom, la salinité doit structurer la fraîcheur ; un smoothie acide simplement saupoudré de sel joue déjà dans une autre équipe.",
      "histoireEtOrigines": `Au début des années 2010, la Gose trouve dans le craft international un second marché que Leipzig n'avait pas prévu. Westbrook commercialise en Caroline du Sud une interprétation au sel marin et à la coriandre, puis de nombreuses brasseries américaines adoptent le style ; Food & Wine situe sa version de référence en 2012. Anderson Valley développe l'année suivante une base de Gose acidifiée en cuve chaude qui devient le support de variantes fruitées. Ces jalons documentent une accélération, pas un titre de propriété sur la renaissance mondiale.

La combinaison fonctionne presque comme une plateforme sensorielle. Une faible amertume laisse les fruits parler ; l'acide lactique accentue leur éclat ; le sel réduit parfois l'impression de maigreur et rappelle les boissons salées ou les cocktails. Agrumes, pastèque, fruits de la passion, baies, piment et plantes entrent alors dans une catégorie que la Brewers Association finit par distinguer de la Leipzig-style Gose.

La différence n'est pas seulement la liste d'ingrédients. Le kettle souring acidifie souvent le moût en un ou deux jours avant une nouvelle ébullition et une fermentation propre, alors que les anciennes pratiques allemandes combinaient autrement levures, bactéries, conditionnement et service. Une Contemporary Gose peut être brillante et précise ; elle ne devient pas pour autant la reproduction miniature d'une Gosenschenke. Son histoire est celle d'une traduction craft : elle garde trois mots du vocabulaire d'origine, puis écrit une phrase neuve.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille craft très large construite sur la logique Gose.",
        "maltsEtCereales": [
          "Base pâle d'orge et de blé, assez légère pour accueillir fruit ou épices ; d'autres céréales peuvent soutenir un projet déclaré.",
          "Les sucres et l'eau apportés par les fruits sont comptés afin de préserver corps et alcool visés."
        ],
        "houblons": [
          "Houblonnage bas dans la majorité des versions ; une expression aromatique moderne doit éviter de cumuler amertume dure, acidité et sel."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces pour l’alcool ; bactéries lactiques selon la méthode ; Brettanomyces uniquement lorsqu’il appartient réellement au profil recherché."
        ],
        "ingredientsComplementaires": [
          "Sel ; coriandre facultative selon l’interprétation.",
          "Fruits, épices ou végétaux possibles, parfois au premier plan."
        ],
        "profilEau": "Analyse préalable indispensable : sodium et chlorure déjà présents dans l'eau modifient le dosage du sel ajouté.",
        "empatage": "Fermentescibilité et texture sont réglées en fonction du fruit ; un corps léger évite que sucre résiduel et salinité deviennent pâteux.",
        "ebullitionEtHoublonnage": "En kettle sour, faible houblonnage avant acidification, incubation contrôlée puis ébullition de stabilisation ; fruits et aromates sont ajoutés selon leur fragilité.",
        "fermentation": "Kettle sour très fréquent pour obtenir une acidité lactique propre, puis fermentation alcoolique avec une levure neutre ou expressive selon la recette.",
        "maturation": "Souvent courte pour garder le fruit éclatant ; toute refermentation des sucres ajoutés doit être achevée ou techniquement maîtrisée avant emballage.",
        "profilRecherche": "Une bière moderne où fruit, acidité et sel dessinent un même profil ; l'ajout spécial ne doit pas rendre la base impossible à reconnaître."
      },
      "sources": [
        {
          "organisme": "Westbrook Brewing Company",
          "edition": null,
          "reference": "Gose — interprétation américaine au sel marin et à la coriandre",
          "type": "source_producteur_primaire",
          "url": "https://westbrookbrewing.com/beer/gose/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Food & Wine",
          "edition": "2023",
          "reference": "What Is a Gose? — essor américain et divergence contemporaine",
          "type": "presse_specialisee",
          "url": "https://www.foodandwine.com/drinks/what-gose",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Contemporary Gose",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "White Labs",
          "edition": null,
          "reference": "Making a Kettle Sour with Lactobacillus Cultures",
          "type": "source_laboratoire",
          "url": "https://blog.whitelabs.com/making-a-kettle-sour-with-lactobacillus-cultures",
          "consultation": "2026-08-11"
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
      "description": "La Flanders Red Ale transforme une bière rouge-brune en cuvée de chai : cerise aigre, prune, groseille, caramel discret, tanin et acidité vineuse se rencontrent après un long séjour en foeder et, souvent, un assemblage. Le bois n’a pas à crier « chêne » ; il fournit surtout du temps, une maison microbienne et juste assez d’air pour rendre l’équilibre passionnant.",
      "histoireEtOrigines": `Les catégories « Flanders Red » et « Oud Bruin » donnent aujourd'hui l'impression de deux frontières anciennes nettement tracées entre l'ouest et l'est de la Flandre. Les archives sont moins disciplinées. L'historien de la bière Roel Mulder relève peu de preuves d'ales flamandes volontairement vieillies et acides avant le milieu du XIXe siècle ; il montre aussi que Rodenbach s'est longtemps présentée comme une bière brune. La couleur « red » devient surtout une catégorie internationale après que Michael Jackson distingue, dans ses ouvrages de 1977 puis 1991, les rouges de Flandre occidentale des brunes d'Audenarde. La séparation reste utile pour décrire des profils, mais elle ne constitue pas une muraille médiévale.

À Roulers, Rodenbach fournit le grand récit industriel de la branche. L'inventaire patrimonial flamand documente l'achat de la brasserie Norbert par Alexander Rodenbach en 1821, son changement de nom, puis la construction d'un vaste site entre 1864 et 1877. Eugène Rodenbach développe ensuite le procédé d'acidification et de maturation en grands foeders de chêne qui devient la signature de la maison. L'innovation ne consiste pas à donner un goût de planche neuve : les cuves verticales accueillent une culture installée, des échanges d'oxygène lents et une évolution de plusieurs mois à plusieurs années.

Chaque foeder produit un lot légèrement différent. Le maître de chai goûte, classe et assemble bière jeune et bière mûre afin de régler acidité, fruit et rondeur. Le jeune lot fournit fraîcheur et sucres ; l'ancien apporte profondeur, forte atténuation et composés formés pendant l'élevage. Le résultat explique l'image de « vin rouge de la bière », à condition de ne pas prendre la métaphore pour une méthode œnologique identique.

L'oxygène exige une surveillance particulière. Des bactéries acétiques peuvent transformer l'éthanol en acide acétique lorsqu'elles en disposent ; à faible niveau, une note balsamique participe au relief, mais une entrée d'air excessive mène au vinaigre. Le foeder est donc un milieu piloté, pas une permission d'oublier le couvercle.

La reconnaissance géographique elle-même reste une histoire en cours. En mai 2026, la Commission européenne a publié la demande d'IGP « Vlaams roodbruin bier / Flanders Red Ale », limitée à une zone de Flandre occidentale et à une maturation totale ou partielle en foeders verticaux. Cette publication ouvre une procédure ; elle ne doit pas être présentée comme une inscription déjà définitivement acquise. Elle montre surtout que les producteurs locaux défendent désormais un nom dont l'usage international a longtemps été plus ordonné que l'histoire.`,
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
          "Levure haute pour la fermentation primaire ; culture mixte de maison avec bactéries lactiques et autres organismes pendant l'élevage.",
          "Bactéries acétiques possibles à faible niveau : leur activité dépend fortement de l'oxygène disponible."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modéré qui soutient malts colorés et acidité sans ajouter de dureté sulfatée.",
        "empatage": "Le moût conserve assez de glucides complexes pour alimenter une longue évolution, tout en restant assez léger pour finir sec après maturation.",
        "ebullitionEtHoublonnage": "Amertume contenue ; les malts colorés construisent rubis et caramel sans torréfaction brûlée.",
        "fermentation": "Après la fermentation haute, la culture du chai acidifie et transforme progressivement le lot ; température et oxygène influencent la part lactique ou acétique.",
        "maturation": "Foeders verticaux pendant plusieurs mois à plus de deux ans selon le produit, puis assemblage de lots choisis à la dégustation.",
        "profilRecherche": "Une bière rouge-brune fruitée, sèche et vineuse, où le balsamique reste une nuance et où ni bois neuf ni vinaigre ne prennent le contrôle."
      },
      "sources": [
        {
          "organisme": "Agentschap Onroerend Erfgoed Vlaanderen",
          "edition": "2026",
          "reference": "Kasteel Rodenbach-Mergaert — histoire industrielle de la brasserie depuis 1821",
          "type": "inventaire_patrimonial",
          "url": "https://inventaris.onroerenderfgoed.be/erfgoedobjecten/23620",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brouwerij Rodenbach",
          "edition": null,
          "reference": "Rodenbach Family — Eugène Rodenbach et perfectionnement de la maturation en foeders",
          "type": "source_producteur_primaire",
          "url": "https://be.rodenbach.be/be/en/brouwerij/familie-rodenbach.html",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Union européenne",
          "edition": "2026",
          "reference": "Publication de la demande d'IGP Vlaams roodbruin bier / Flanders Red Ale",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A52026XC02612",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Roel Mulder — Lost Beers",
          "edition": "2020",
          "reference": "Flemish brown, red or red brown? — histoire critique des catégories",
          "type": "recherche_historique_specialisee",
          "url": "https://lostbeers.com/flemish-brown-red-or-red-brown/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Bouchez et al. — Frontiers in Microbiology",
          "edition": "2022",
          "reference": "Acetic Acid Bacteria in Sour Beer Production: Friend or Foe?",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9386357/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23B Flanders Red Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/23B/flanders-red-ale/",
          "consultation": "2026-08-11"
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
      "description": "L’Oud Bruin fait mûrir une brune plutôt qu’il ne peint une sour en brun : pain grillé, caramel, prune, raisin et noix enveloppent une acidité douce à vineuse. Associée à Audenarde et à la Flandre orientale, elle privilégie souvent la rondeur maltée et l’assemblage. « Oud » promet du temps et de la profondeur, pas automatiquement un vieux fût.",
      "histoireEtOrigines": `À Audenarde, la bière brune acide se raconte avec des caves et des assemblages plutôt qu'avec la forêt de foeders de Roulers. La distinction moderne décrit généralement une Oud Bruin plus sombre, plus maltée et moins acétique, mûrie en cuve puis en bouteille, face à une Flanders Red plus sèche et élevée en grands bois. Les producteurs flamands interrogés par Belgian Smaak préviennent toutefois que cette frontière s'efface dès que l'on examine les pratiques maison par maison. Certaines brunes voient le bois ; certaines rouges ont longtemps porté le nom de brune. La géographie donne un accent, pas un uniforme.

Liefmans offre à la branche son fil humain. La brasserie fait remonter son histoire à 1679 et conserve à Audenarde un bâtiment vieux de plus de trois siècles, mais cette ancienneté ne prouve pas qu'une Oud Bruin actuelle y serait brassée sans changement depuis le XVIIe siècle. La maison décrit plutôt une production saisonnière ancienne, des maturations et des coupages de bière jeune et âgée destinés à tenir jusqu'à l'été.

Au XXe siècle, Rosa Merckx transforme cette continuité en choix commercial. Entrée chez Liefmans en 1946 comme secrétaire trilingue, elle se révèle dégustatrice et conseille des bières moins acides, plus douces et mieux équilibrées. Elle propose le nom Goudenband, puis prend la direction de la brasserie en 1972. Son travail rappelle qu'un style traditionnel évolue aussi parce qu'une personne goûte le marché et déplace le curseur. L'acidité que nous appelons aujourd'hui « typique » a donc elle-même une histoire.

Le coupage reste la mémoire technique de cette branche. Une bière mûre apporte fruits sombres, acidité et profondeur ; une bière jeune redonne malt et rondeur. Selon les maisons, la fermentation mixte et la garde se déroulent en acier, en cuve revêtue, en bois ou en bouteille. L'Oud Bruin n'est pas la Flanders Red privée de chêne : c'est une tradition orientale dont la mémoire-cible demeure l'accord entre vieux fruit acidulé et jeune malt brun.`,
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
        "profilEau": "Minéralité compatible avec les malts bruns ; alcalinité suffisante pour le grain coloré sans émousser l'acidité finale.",
        "empatage": "Davantage de corps et de mélanoïdines qu'une rouge très sèche, tout en laissant assez de substrat à la maturation mixte.",
        "ebullitionEtHoublonnage": "Ébullition classique et amertume basse ; la couleur vient de malts caramel et toastés, pas d'une torréfaction brûlée.",
        "fermentation": "Fermentation haute suivie d'une acidification de maison ; l'objectif conserve plus de malt et moins d'acétique que l'archétype rouge occidental.",
        "maturation": "Cuve, bouteille ou parfois bois selon le producteur ; coupage de bière mûre et jeune fréquent, mais pas universel.",
        "profilRecherche": "Une brune acidulée où prune, pain brun et caramel restent présents jusqu'à la finale, sans sucre pâteux, brûlé ni vinaigre dominant."
      },
      "sources": [
        {
          "organisme": "Liefmans",
          "edition": null,
          "reference": "Brewery — histoire d'Audenarde, coupage et rôle de Rosa Merckx",
          "type": "source_producteur_primaire",
          "url": "https://www.liefmans.com/en/brewery",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Belgian Smaak",
          "edition": "2023",
          "reference": "Oud Bruin Roundtable — méthodes et frontières terminologiques",
          "type": "presse_specialisee_entretiens",
          "url": "https://www.belgiansmaak.com/ep043-oud-bruin-flanders-red-brown-flemish-sours/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Belgian Smaak — Humans of Belgian Beer",
          "edition": "2022",
          "reference": "The Sage — portrait de Rosa Merckx et évolution sensorielle de Liefmans",
          "type": "source_biographique",
          "url": "https://www.belgiansmaak.com/the-sage/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23C Oud Bruin",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/23C/oud-bruin/",
          "consultation": "2026-08-11"
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
      "description": "Le Lambic est une bière et une matière première : un moût de malt d’orge et de blé cru, refroidi ouvertement autour de Bruxelles, puis fermenté et élevé pendant des années. Jeune, vieux, plat ou à peine pétillant, il peut évoquer citron, pomme, foin, cave et bois. Sa spontanéité est organisée au millimètre ; seul le calendrier refuse de courir.",
      "histoireEtOrigines": `Le lambic appartient au Pajottenland, à la vallée de la Senne et à Bruxelles elle-même. Ses paysages de carte postale montrent des fermes du Brabant ; ses archives matérielles comprennent aussi des bâtiments urbains comme Cantillon à Anderlecht et l'ancienne brasserie Wielemans-Ceuppens à Forest. Ce double ancrage compte : la tradition n'est ni une pure bière paysanne ni une invention de capitale, mais le produit d'un bassin où brasseurs, marchands, cafés et assembleurs échangeaient du lambic.

Son antiquité a souvent été poussée jusqu'au Moyen Âge par une généalogie trop enthousiaste. L'historien Roel Mulder propose une chronologie plus prudente : les bières acides et les techniques de refroidissement ouvert existaient bien avant le mot, mais les sources décrivant un produit reconnaissable comme lambic se concentrent à la fin du XVIIIe et au XIXe siècle. Le dossier européen de la spécialité traditionnelle garantie situe lambic et gueuze au début du XIXe siècle, tandis que faro apparaît plus tôt. Une vieille technique de refroidissement ne suffit donc pas à fabriquer mille ans de continuité stylistique.

La journée de brassage prépare un relais microbien. La spécification traditionnelle emploie au moins 30 % de blé non malté avec de l'orge maltée. Un empâtage trouble peut conserver amidons et dextrines ; une longue ébullition avec des houblons vieillis apporte protection et tannins sans forte amertume. Le moût chaud gagne ensuite le coolship, large bac peu profond où il refroidit pendant une nuit fraîche de la saison de brassage. Avant les échangeurs modernes, ce type d'outil servait d'abord à refroidir ; ici, il est devenu la première scène d'un système entier.

Les études microbiologiques distinguent plusieurs phases. Des bactéries présentes au début modifient rapidement le milieu ; Saccharomyces assure ensuite l'essentiel de la fermentation alcoolique ; les bactéries lactiques augmentent l'acidité ; Brettanomyces poursuit l'atténuation et transforme lentement les arômes. L'air du coolship participe à l'ensemencement, mais les canalisations, les surfaces de la brasserie et les fûts hébergent également des populations. Le « terroir microbien » est donc un réseau entretenu, non un nuage magique suspendu au-dessus de la Senne.

Le brasseur organise cette ouverture : il choisit la nuit, entretient le matériel, transfère le moût en fûts, surveille les lots et décide lesquels deviendront lambic de dégustation, gueuze ou bière aux fruits. Certains producteurs préacidifient même le moût pour sécuriser la première phase. L'absence de sachet de levure n'est décidément pas l'absence de décisions.

Après un à plusieurs ans, le lambic non assemblé reste souvent calme, car le dioxyde de carbone s'est échappé du bois. Jeune, il apporte sucres et vigueur fermentaire ; vieux, sécheresse et complexité. Cette dualité explique pourquoi il sert à la fois de boisson et de matériau pour l'assembleur. Depuis 2017, l'Union européenne protège comme STG certaines dénominations traditionnelles telles qu'Oude Lambiek, Oude Geuze et Oude Kriek. Une STG protège une composition ou une méthode traditionnelle, pas un territoire à la manière d'une AOP : elle ne transforme pas tout emploi du mot lambic en appellation géographique simple.`,
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
        "profilEau": "L'eau appartient au système de la maison sans constituer à elle seule le terroir ; sa composition doit rester compatible avec longue ébullition et acidification.",
        "empatage": "L'empâtage trouble traditionnel retire puis réintroduit des fractions de moût afin de préserver amidon et dextrines pour les phases tardives ; toutes les maisons n'appliquent pas exactement la même séquence.",
        "ebullitionEtHoublonnage": "Longue ébullition avec houblons vieillis, puis refroidissement ouvert pendant la saison fraîche. Le houblon âgé conserve des propriétés protectrices avec peu d'arôme frais.",
        "fermentation": "Inoculation environnementale suivie d'une succession de bactéries, Saccharomyces, bactéries lactiques et Brettanomyces ; l'ordre et la durée varient entre lots.",
        "maturation": "Un à plusieurs ans dans des fûts ou foudres généralement neutres. Le bois fournit récipient, échanges et niche microbienne plus qu'un arôme obligatoire de chêne neuf.",
        "profilRecherche": "Un lambic sec et évolutif, calme lorsqu'il est non assemblé, dont citron, pomme, céréale et notes de cave restent propres malgré la complexité."
      },
      "sources": [
        {
          "organisme": "Roel Mulder — Brewery History Society",
          "edition": "2017",
          "reference": "Lambic: a need for a new historical narrative",
          "type": "recherche_historique",
          "url": "https://www.breweryhistory.com/journal/archive/175/Lambic.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "De Roos & De Vuyst — Applied and Environmental Microbiology",
          "edition": "2021",
          "reference": "Technological and Environmental Features Determine the Uniqueness of Spontaneous Lambic Fermentations",
          "type": "publication_scientifique",
          "url": "https://journals.asm.org/doi/10.1128/AEM.00612-21",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Spitaels et al. — PLOS ONE",
          "edition": "2014",
          "reference": "The Microbial Diversity of Traditional Spontaneously Fermented Lambic Beer",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3991685/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Union européenne",
          "edition": "2017",
          "reference": "Règlement d'exécution (UE) 2017/2216 — STG des dénominations Oude Lambiek/Oude Geuze/Oude Kriek",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32017R2216",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "HORAL",
          "edition": null,
          "reference": "Traditional Lambic Beers — méthode et dénominations traditionnelles",
          "type": "source_traditionnelle_institutionnelle",
          "url": "https://horal.be/en/traditional-lambic-beers/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Patrimoine Bruxelles",
          "edition": null,
          "reference": "Brasserie Cantillon — inventaire du patrimoine architectural",
          "type": "inventaire_patrimonial",
          "url": "https://monument.heritage.brussels/fr/buildings/37051",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23D Lambic",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/23D/lambic/",
          "consultation": "2026-08-11"
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
      "description": "La Gueuze est le travail de l’assembleur rendu pétillant : des lambics de plusieurs âges sont goûtés, mariés puis refermentés en bouteille. Le jeune apporte les sucres et l’élan ; le vieux, la sécheresse et la profondeur. Citron, pomme, foin et cave se tendent sur une bulle vive. Ce n’est pas un lambic plus âgé, mais une nouvelle bière construite avec plusieurs temps.",
      "histoireEtOrigines": `Devant une rangée de fûts, le gueuzesteker ne cherche pas le meilleur lambic isolé. Il cherche ce que chaque lot peut apporter au mélange. Un jeune lambic possède encore des sucres fermentescibles et une énergie microbienne ; un vieux lot offre acidité, atténuation et arômes mûrs ; un troisième corrige fruit, amertume ou structure. Le goût se décide à la pipette et au verre avant que la bouteille ne produise sa bulle.

Ce métier explique pourquoi une gueuzerie peut exister sans salle de brassage. L'assembleur achète des lambics à différents brasseurs, les élève, les sélectionne et les met en bouteille. La séparation historique entre brouwer et geuzesteker a créé un réseau commercial autant qu'une technique : la gueuze raconte qui sait choisir et assembler, pas seulement qui a chauffé le moût.

La forme effervescente que nous reconnaissons aujourd'hui est plus récente que le lambic plat. Les recherches de Roel Mulder invitent à la situer surtout aux XIXe et XXe siècles, avec un essor des versions embouteillées après la Première Guerre mondiale, plutôt qu'à la faire remonter intacte au Moyen Âge. L'étymologie de « gueuze/geuze » et plusieurs récits sur l'adoption de bouteilles de Champagne restent discutés ; aucune jolie bouteille ne mérite à elle seule le titre d'inventeur.

La STG Oude Geuze fournit aujourd'hui des repères contrôlables : uniquement des lambics de fermentation spontanée, un âge moyen pondéré d'au moins un an, un composant le plus âgé ayant mûri au moins trois ans en bois, puis une refermentation en bouteille. Ces seuils ne dictent pas la recette sensorielle de chaque maison. Ils protègent le geste essentiel : transformer des différences d'âge et de fût en une bière cohérente, sèche et naturellement carbonatée.`,
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
        "profilEau": "Hérité des lambics de base ; l'assemblage corrige le profil par les lots, pas par une minéralisation ajoutée après coup.",
        "empatage": "Chaque lambic est brassé séparément ; la gueuze commence véritablement au banc d'assemblage.",
        "ebullitionEtHoublonnage": "Les houblons vieillis appartiennent aux lambics constitutifs. Aucun houblonnage final ne doit masquer leur évolution.",
        "fermentation": "Les microflores des lots se rencontrent lors de l'assemblage ; les sucres du lambic jeune permettent la prise de mousse en bouteille.",
        "maturation": "Sélection de plusieurs âges, refermentation puis garde sur lies. Pour Oude Geuze, moyenne pondérée d'au moins un an et plus vieux lambic âgé d'au moins trois ans en bois.",
        "profilRecherche": "Une effervescence fine portant une finale très sèche, avec acidité, agrumes, pomme et notes de cave ordonnés par l'assemblage."
      },
      "sources": [
        {
          "organisme": "Union européenne",
          "edition": "2016–2017",
          "reference": "Cahier des charges et enregistrement STG Oude Geuze",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32017R2216",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Roel Mulder — Brewery History Society",
          "edition": "2017",
          "reference": "Lambic: a need for a new historical narrative — essor de la gueuze embouteillée",
          "type": "recherche_historique",
          "url": "https://www.breweryhistory.com/journal/archive/175/Lambic.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "HORAL",
          "edition": null,
          "reference": "Traditional Lambic Beers — rôle du geuzesteker et Oude Geuze",
          "type": "source_traditionnelle_institutionnelle",
          "url": "https://horal.be/en/traditional-lambic-beers/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brouwerij Boon",
          "edition": null,
          "reference": "History — Frank Boon, geuzesteker puis brasseur",
          "type": "source_producteur_primaire",
          "url": "https://boon.be/en/the-brewery/history",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23E Gueuze",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/23E/gueuze/",
          "consultation": "2026-08-11"
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
      "description": "Dans un Fruit Lambic, la récolte entre en fermentation : cerise, framboise ou autre fruit apporte sucre, eau, peau, acides, tanins et couleur, puis perd une part de sa douceur. La Kriek traditionnelle peut sentir le noyau, la griotte et la cave plutôt que le bonbon. Le fruit n’est pas posé sur le lambic ; il y déménage, avec ses cartons microbiologiques.",
      "histoireEtOrigines": `La Kriek raconte d'abord un calendrier. Des cerises acides mûrissent, le producteur choisit un lambic capable de les recevoir, puis le fruit macère et relance la fermentation. Ses sucres deviennent alcool et dioxyde de carbone ; pigments et arômes passent dans la bière ; peau et noyau peuvent apporter tannin, amande et épices. La couleur gagne en intensité pendant que le goût s'éloigne du jus frais. Le fruit ne parfume pas seulement le lambic : il change son équilibre chimique et sa trajectoire microbienne.

La cerise de Schaerbeek, petite griotte sombre traditionnellement associée au Brabant, est devenue l'emblème de cette pratique. Sa culture avait reculé sous la pression de l'urbanisation et d'une récolte peu rentable. HORAL documente les efforts de replantation ; 3 Fonteinen a lancé en 2003 un projet avec des familles locales, puis développé son propre verger. Cette renaissance agricole évite un raccourci fréquent : « Schaarbeekse » ne désigne pas un arôme abstrait, mais une variété, un territoire de culture et une récolte limitée.

Framboises et autres fruits ont élargi la famille, sans que chaque combinaison puisse revendiquer la même profondeur historique. La recherche scientifique récente souligne même que la cofermentation fruit-lambic reste moins étudiée que le processus du lambic nature. Pour les créations nouvelles, l'honnêteté commence donc par nommer le fruit et la méthode plutôt que d'inventer un ancêtre au verger.

Une autre bifurcation se produit après fermentation. Les Oude Kriek et autres dénominations traditionnelles enregistrées en STG reposent sur un lambic spontanément fermenté, une proportion réglementée de fruit ou d'équivalent en jus ou concentré, et une refermentation en bouteille. Le marché comprend aussi des bières filtrées, pasteurisées ou resucrées, parfois volontairement douces. Elles ne sont pas nécessairement médiocres ; elles répondent simplement à une autre logique. La différence mémorable tient dans le devenir du sucre : dans une fruitation traditionnelle sèche, les microorganismes en mangent une grande partie avant le buveur.`,
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
          "Fruits entiers traditionnellement privilégiés pour certaines Oude versions ; purées ou jus existent dans d'autres productions.",
          "Cerise acide et framboise sont historiques ; l'usage d'autres fruits doit être décrit sans leur prêter la même ancienneté."
        ],
        "profilEau": "Hérité du lambic ; le fruit ajoute lui-même beaucoup d'eau et d'acides, ce qui interdit de raisonner comme pour un simple extrait aromatique.",
        "empatage": "Celui du lambic de base ; l'âge et le profil de ce lambic sont choisis en fonction du fruit et de la refermentation attendue.",
        "ebullitionEtHoublonnage": "Le fruit intervient après le brassage du lambic. Une cuisson inutile effacerait les arômes frais et fixerait un profil de compote.",
        "fermentation": "Les sucres du fruit réveillent levures et bactéries ; densité, pH et dégustation suivent la transformation plutôt qu'une durée standard.",
        "maturation": "Macération, séparation des matières, assemblage éventuel puis bouteille. Les Oude versions développent leur effervescence par refermentation naturelle.",
        "profilRecherche": "Un fruit identifiable mais fermenté, dont acidité, peau et noyau s'intègrent au lambic sans sirop dominant ni oxydation confiturée."
      },
      "sources": [
        {
          "organisme": "HORAL",
          "edition": null,
          "reference": "Schaarbeekse Krieken — variété, récolte et replantation",
          "type": "source_patrimoniale_agricole",
          "url": "https://horal.be/en/schaarbeekse-krieken/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brouwerij 3 Fonteinen",
          "edition": null,
          "reference": "Schaarbeekse Kriek — projet de replantation commencé en 2003",
          "type": "source_producteur_primaire",
          "url": "https://www.3fonteinen.be/our-beers/kriek/schaarbeekse-kriek",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Croonenberghs et al. — Current Opinion in Biotechnology",
          "edition": "2024",
          "reference": "Fruit beers, beers with or without a co-fermentation step with fruits",
          "type": "publication_scientifique",
          "url": "https://pubmed.ncbi.nlm.nih.gov/38382326/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Union européenne",
          "edition": "2017",
          "reference": "STG Oude Kriek et autres lambics aux fruits traditionnels",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32017R2216",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "23F Fruit Lambic",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/23F/fruit-lambic/",
          "consultation": "2026-08-11"
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
      "description": "L’American Sour Ale choisit d’abord son horloge : quelques jours pour une acidité lactique nette, plusieurs mois pour une culture mixte, parfois des années pour le bois et l’assemblage. Blonde, rouge ou brune, elle n’a pas de recette nationale unique. Son identité tient au projet annoncé et à une acidité intégrée ; « longtemps en barrique » n’est pas encore une saveur.",
      "histoireEtOrigines": `Dans une brasserie américaine, la même enseigne « sour » peut cacher trois ateliers. Le premier acidifie le moût chaud avec des bactéries lactiques, le fait bouillir de nouveau puis confie la fermentation alcoolique à une levure propre. Le deuxième inocule levures et bactéries ensemble ou successivement et attend leur évolution en cuve. Le troisième remplit des fûts, suit chaque lot, assemble et conditionne lorsque plusieurs saisons ont trouvé un accord. Le choix du calendrier détermine les microorganismes encore vivants, les arômes possibles, le capital immobilisé et même l'organisation physique de la brasserie.

Les pionniers craft ont montré ces chemins sans fabriquer un standard unique. New Belgium a développé autour de La Folie un programme de foeders capable de reproduire un profil par l'assemblage. Russian River a associé cultures, fûts de vin et refermentation en bouteille à des bières comme Supplication et Consecration. Jolly Pumpkin a choisi dès 2004 l'élevage en chêne et l'assemblage comme mode de production ordinaire. À côté de ces caves patientes, le kettle souring a ouvert la catégorie à des brasseries ne pouvant ni immobiliser des centaines de fûts ni laisser des bactéries circuler dans toute l'installation.

La science confirme que ces routes ne convergent pas mécaniquement. Dans une fermentation mixte, Saccharomyces produit rapidement l'essentiel de l'alcool ; bactéries lactiques et Brettanomyces transforment ensuite acides, sucres complexes et composés aromatiques. Une acidification rapide arrêtée par chauffage offre davantage de contrôle et un profil plus direct, mais supprime cette longue succession. Aucune méthode n'est supérieure par décret : elles répondent à des bières et à des contraintes différentes.

La catégorie américaine se définit donc mieux par une question que par une souche : quel mécanisme a produit l'acidité et que devait-il accomplir ? Une recette claire, une sour brune de culture mixte et une bière de barrique peuvent toutes y entrer, à condition que le procédé explique le résultat plutôt que de disparaître derrière un mot-valise.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie américaine moderne couvrant kettle sour, fermentation mixte et élevage en bois.",
        "maltsEtCereales": [
          "Base blonde simple pour une sour lactique directe, ou recette ambrée/brune plus structurée pour une longue maturation.",
          "Blé, avoine et dextrines peuvent soutenir texture et écologie ; ils ne définissent pas la catégorie."
        ],
        "houblons": [
          "Houblon limité lorsque les bactéries doivent acidifier ; souche, taux d'iso-alpha-acides et moment d'ajout sont pensés ensemble."
        ],
        "levuresEtMicroorganismes": [
          "Bactéries lactiques et levures selon le procédé ; Brett/Pedio présents dans les versions longues de culture mixte mais absents de nombreuses sours rapides."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Construit autour de la base et du type d'acide ; sulfate et alcalinité excessifs peuvent raidir une finale déjà tendue.",
        "empatage": "Moût très fermentescible pour une sour rapide et sèche, ou davantage de glucides complexes lorsqu'une culture longue doit encore travailler.",
        "ebullitionEtHoublonnage": "Le kettle sour comporte une acidification avant la fermentation alcoolique et une chauffe de stabilisation ; la fermentation mixte reçoit son houblon en fonction de la tolérance des LAB.",
        "fermentation": "Procédé rapide séquentiel, co-inoculation ou inoculations successives : la chronologie décide qui consomme quoi et à quel moment.",
        "maturation": "Quelques semaines, plusieurs mois ou plusieurs années. Le calendrier annoncé doit correspondre aux transformations réellement recherchées.",
        "profilRecherche": "Une acidité dont la qualité et l'intensité servent une base identifiable, avec un procédé assez maîtrisé pour rendre le résultat reproductible."
      },
      "sources": [
        {
          "organisme": "Dysvik et al. — Applied and Environmental Microbiology",
          "edition": "2020",
          "reference": "Microbial Dynamics in Traditional and Modern Sour Beer Production",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7357471/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "New Belgium Brewing",
          "edition": null,
          "reference": "Our Story — La Folie et développement du programme de foeders",
          "type": "source_producteur_primaire",
          "url": "https://www.newbelgium.com/company/story/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "About Us et gamme Belgian-Inspired / Barrel-Aged",
          "type": "source_producteur_primaire",
          "url": "https://www.russianriverbrewing.com/about-us/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28B Mixed-Fermentation Sour Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/28B/mixed-fermentation-sour-beer/",
          "consultation": "2026-08-11"
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
        "type": "variable",
        "details": "Sour rapide ou fermentation mixte, avec refermentation des sucres du fruit lorsque celui-ci est ajouté avant stabilisation."
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
      "description": "La Fruited American Sour Ale traite le fruit comme une matière de fermentation : framboise, pêche, mangue, raisin ou agrume apporte ses sucres, ses acides, sa peau et parfois ses noyaux à une base déjà acidulée. Elle peut être éclatante ou sèche, rapide ou longuement mûrie. Sa seule obligation narrative : expliquer si le fruit a fermenté, car une purée encore sucrée sait aussi fabriquer des surprises sous pression.",
      "histoireEtOrigines": `Le fruit a offert aux sours américaines une carte qui ne dépendait plus des vergers du Brabant. Dans le Colorado, la Californie, le Michigan ou le Maine, les brasseurs ont associé cultures acides et récoltes locales : cerise dans une bière brune, pêche dans une blonde, cassis avec des malts sombres, agrume dans une sour courte. La catégorie ne descend pas d'un seul modèle. Elle emprunte au lambic fruité l'idée de refermentation, au vin l'attention aux variétés et au craft la liberté de changer de récolte à chaque brassin.

Le moment d'ajout décide du portrait. Pendant une fermentation active, une part des arômes les plus volatils s'échappe avec le dioxyde de carbone et les sucres sont largement consommés. Sur une bière mûre, le fruit garde souvent davantage d'éclat, puis déclenche une nouvelle fermentation plus ciblée. Après filtration ou en cuve de garde, une purée tardive peut au contraire conserver douceur et pulpe, mais exige pasteurisation, filtration stérile ou autre stabilisation vérifiée. Le bouchon, lui, ne lit pas l'intention marketing.

Chaque fruit change aussi la mesure de l'acidité. Citrique, malique et autres acides se combinent à l'acide lactique de la base ; certaines cultures réalisent une fermentation malolactique et déplacent encore la perception. Peaux, pépins et noyaux ajoutent tannins ou notes d'amande. La couleur et le parfum ne sont donc que la partie visible d'une opération qui modifie pH, acidité titrable, alcool et stabilité.

La branche va aujourd'hui de bières sèches et refermentées à des sours très pulpeuses et sucrées. Ces produits peuvent partager un rayon sans partager un procédé. Une fiche honnête ne les départage pas par le prestige, mais par quatre informations : fruit réel ou arôme, moment d'ajout, fermentation achevée ou stabilisée, et relation avec la bière de base.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le style de base, la méthode d’acidification et le fruit peuvent varier largement.",
        "maltsEtCereales": [
          "Base claire pour les fruits délicats ; malts ambrés ou bruns possibles avec cerise, cassis, prune et autres fruits assez puissants.",
          "Le volume d'eau et de sucre du fruit est intégré à la densité, à l'alcool et au corps final."
        ],
        "houblons": [
          "Houblonnage généralement bas pour éviter la collision entre amertume, acides du fruit et tanins."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces pour l’alcool ; bactéries lactiques selon la méthode ; Brettanomyces uniquement lorsqu’il appartient réellement au profil recherché."
        ],
        "ingredientsComplementaires": [
          "Fruits frais, surgelés, purées ou jus ; dosage et moment d’ajout déterminent arôme, couleur, tannin et refermentation."
        ],
        "profilEau": "Minéralité discrète afin que les acides du fruit et de la bière restent lisibles sans finale crayeuse ou dure.",
        "empatage": "Corps dimensionné après estimation de la dilution et des sucres du fruit ; une base trop maigre peut disparaître après refermentation.",
        "ebullitionEtHoublonnage": "Le fruit est généralement ajouté côté froid pour conserver son identité ; une chauffe peut sécuriser mais transforme fraîcheur, pectines et couleur.",
        "fermentation": "Suivi de densité après ajout du fruit. Cultures mixtes et microorganismes présents sur les peaux peuvent prolonger l'évolution bien après la reprise visible.",
        "maturation": "La bière attend une stabilité réelle ou reçoit une stabilisation validée avant emballage ; pulpe, pépins et noyaux sont séparés au moment sensoriellement juste.",
        "profilRecherche": "Un fruit reconnaissable et transformé, intégré à une acidité cohérente, sans masquer la base ni laisser une refermentation accidentelle en emballage."
      },
      "sources": [
        {
          "organisme": "Croonenberghs et al. — Current Opinion in Biotechnology",
          "edition": "2024",
          "reference": "Fruit beers, beers with or without a co-fermentation step",
          "type": "publication_scientifique",
          "url": "https://www.sciencedirect.com/science/article/pii/S095816692400017X",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "Supplication — bière brune, cerises acides, fûts de Pinot Noir et refermentation",
          "type": "source_producteur_primaire",
          "url": "https://www.russianriverbrewing.com/brew/supplication/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28C Wild Specialty Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/28C/wild-specialty-beer/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Fruited sour beer categories",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
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
        "type": "variable",
        "details": "Brettanomyces en fermentation principale, en co-fermentation ou en maturation secondaire, sans bactéries obligatoires."
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
      "description": "La Brett Beer confie le premier rôle à Brettanomyces, une levure capable de pousser la fermentation vers le sec et de faire apparaître ananas, poire, foin, poivre, cuir ou fumée légère. Elle peut être blonde, brune, houblonnée — et parfaitement non acide. Brett n’est ni une bactérie ni un bouton « sour » ; c’est une troupe entière dont chaque souche apprend un texte différent.",
      "histoireEtOrigines": `Le dossier commence à Copenhague avec une bière anglaise. En 1903, Niels Hjelte Claussen, directeur du laboratoire de la brasserie New Carlsberg, cultive une levure responsable de la lente fermentation secondaire des stock ales britanniques. Il la présente à l'Institute of Brewing le 18 avril 1904 et la nomme Brettanomyces — le « champignon britannique ». Son brevet décrit même l'ajout d'une culture pure après fermentation et pasteurisation. À l'origine, Brett n'est donc pas le microbe romantique d'une ferme belge : c'est l'objet d'une tentative très moderne pour rendre reproductible le goût d'une bière anglaise de garde.

En 1921, Kufferath et Van Laer décrivent à leur tour des levures apparentées dans les lambics belges et introduisent Brettanomyces bruxellensis. La taxonomie changera encore, regroupant plusieurs anciens noms, mais l'aptitude demeure : ces levures survivent dans des milieux pauvres, utilisent des substrats laissés par Saccharomyces et poursuivent lentement la fermentation.

Le mouvement craft des années 2000 transforme cette capacité en catégorie. Certains brasseurs ajoutent Brett après une fermentation classique ; d'autres inoculent Saccharomyces et Brett ensemble ; d'autres encore conduisent une fermentation principale avec Brett seule. La chronologie change fortement le résultat. En primaire, certaines souches produisent un fruit éclatant ; pendant une longue garde, la forte atténuation et la transformation des phénols peuvent pousser vers foin, cuir, épices ou notes animales.

Brett ne fabrique pas à elle seule l'acidité lactique caractéristique d'une sour. Celle-ci provient généralement de bactéries lactiques. En présence d'oxygène, Brett peut toutefois produire davantage d'acide acétique, ce qui explique pourquoi gestion de l'air et stabilité comptent. Ses composés aromatiques — notamment esters et phénols volatils — dépendent de la souche, du moût, de la température et des précurseurs disponibles.

Réduire tout cela à « couverture de cheval » revient à décrire un orchestre par le bruit d'une chaise. Une Brett Beer réussie peut être tropicale, rustique ou subtile ; elle reste définie par une levure volontairement employée et par une évolution contrôlée, non par l'obligation de sentir l'étable.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Brett Beer peut partir de presque n’importe quel style de base ; la fermentation définit davantage la catégorie que le grain.",
        "maltsEtCereales": [
          "Grist du style de base ; prévoir que Brett peut atténuer davantage et alléger la perception maltée."
        ],
        "houblons": [
          "Houblonnage hérité de la bière de départ ; une forte expression aromatique peut évoluer avec le temps."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces + une ou plusieurs souches de Brettanomyces, ou fermentation Brett seule selon le projet ; pas de bactéries lactiques nécessaires à la définition."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Celui du style de base, avec une minéralité qui ne rende pas la forte atténuation austère.",
        "empatage": "Une fermentation primaire à Brett peut recevoir un moût classique ; une longue secondaire bénéficie de substrats complexes que la levure pourra exploiter lentement.",
        "ebullitionEtHoublonnage": "Le houblon suit la base. Les arômes de houblon évoluent pendant une garde longue et peuvent être transformés par l'activité enzymatique de Brett.",
        "fermentation": "Souche, moment d'inoculation, oxygène et température déterminent le rapport fruit/phénols. Brett seule ne garantit ni acidité ni profil rustique.",
        "maturation": "Jusqu'à densité stable et profil sensoriel voulu ; une mise en bouteille prématurée expose à surcarbonatation car Brett continue d'exploiter certains sucres.",
        "profilRecherche": "Une transformation nette et propre du style de base : sécheresse, fruit et rusticité proportionnés, sans acétique agressif ni phénol médicinal envahissant."
      },
      "sources": [
        {
          "organisme": "Colomer et al. — mBio",
          "edition": "2020",
          "reference": "Assessing Population Diversity of Brettanomyces Yeast Species and Identification of Strains for Brewing Applications",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7177047/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Niels Hjelte Claussen — US Patent Office",
          "edition": "1904–1906",
          "reference": "Manufacture of English beers or malt liquors — culture de Brettanomyces",
          "type": "source_historique_primaire",
          "url": "https://patents.google.com/patent/US813199A/en",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Menoncin et al. — Journal of the Institute of Brewing",
          "edition": "2019",
          "reference": "Molecular and biochemical aspects of Brettanomyces in beer",
          "type": "publication_scientifique",
          "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/jib.580",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28A Brett Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/28A/brett-beer/",
          "consultation": "2026-08-11"
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
      "description": "La Mixed-Culture Brett Beer organise une succession plutôt qu’un solo : Saccharomyces lance souvent la fermentation, les bactéries lactiques construisent l’acidité et Brettanomyces poursuit l’atténuation tout en remodelant les arômes. Pediococcus peut même rendre un lot temporairement filant avant que l’écosystème n’évolue. Plusieurs microbes jouent dans la même cave ; le plan de scène compte autant que la distribution.",
      "histoireEtOrigines": `Une culture mixte n'est pas un sachet où quatre noms attendent sagement leur tour. Après inoculation, les populations se multiplient, s'inhibent et changent avec le pH, l'alcool, le houblon, l'oxygène et les nutriments. Saccharomyces accomplit souvent rapidement la fermentation principale. Des bactéries lactiques produisent de l'acide lactique. Brettanomyces consomme ensuite certains glucides résiduels et transforme des composés en esters et phénols. Le calendrier est un milieu de culture à lui seul.

Pediococcus illustre cette dynamique. Certaines souches acidifient lentement et produisent du diacétyle ou des exopolysaccharides capables de rendre la bière visqueuse, dite « ropy ». Dans des systèmes adaptés, Brettanomyces peut dégrader une partie de ces polymères et réduire le diacétyle au cours de la maturation. Une phase inquiétante n'est donc pas toujours la fin du lot — mais la patience n'excuse pas l'absence d'analyses, et toutes les cultures ne se réparent pas par magie.

Le mot Lactobacillus demande lui aussi une note de laboratoire. Une révision taxonomique publiée en 2020 a scindé l'ancien genre en de nombreux genres, dont Lactiplantibacillus et Levilactobacillus. Le monde brassicole continue d'utiliser « lacto » comme raccourci pratique pour plusieurs bactéries lactiques ; ce vocabulaire d'atelier ne doit pas être confondu avec une identification d'espèce. La tolérance au houblon, la vitesse et les produits métaboliques varient largement.

Les brasseurs craft composent ces écosystèmes à partir de mélanges du commerce, de lignées de maison entretenues de brassin en brassin ou de dépôts récupérés en bouteille. Les analyses métagénomiques montrent que la composition réelle peut dépasser ce que l'étiquette du fournisseur promet. D'où une règle simple : inoculer est un geste, piloter une culture est un programme fait de mesures, dégustations, temps et séparation des équipements.

Cette branche se distingue de la Brett Beer parentale lorsque les partenaires modifient véritablement le profil, notamment par l'acidité. Brett ne devient pas « plus sauvage » parce qu'elle a de la compagnie ; la bière devient un écosystème dont la qualité dépend des relations entre les organismes.`,
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
        "profilEau": "Modéré et cohérent avec le style de base ; aucun profil minéral ne remplace la gestion des populations.",
        "empatage": "Des dextrines peuvent nourrir l'évolution tardive, mais un excès transforme la maturation en attente interminable.",
        "ebullitionEtHoublonnage": "Dose de houblon choisie selon la tolérance réelle des bactéries lactiques ; une culture lente peut être entièrement bloquée par un copier-coller d'IBU.",
        "fermentation": "Co-inoculation ou ajouts séquentiels. pH, densité et dégustation suivent la trajectoire ; le nom d'une culture ne prédit pas seul son comportement.",
        "maturation": "Plusieurs mois à plus d'un an, jusqu'à disparition des phases transitoires et stabilité. Bois et assemblage sont des options, pas des remèdes automatiques.",
        "profilRecherche": "Fruit, sécheresse, rusticité et acidité intégrés, sans diacétyle massif, viscosité persistante, acétique dominant ni pression résiduelle imprévisible."
      },
      "sources": [
        {
          "organisme": "Dysvik et al. — Applied and Environmental Microbiology",
          "edition": "2020",
          "reference": "Microbial Dynamics in Traditional and Modern Sour Beer Production",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7357471/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Piraine et al. — Fermentation",
          "edition": "2021",
          "reference": "Mixed-Culture Metagenomics of the Microbes Making Sour Beer",
          "type": "publication_scientifique",
          "url": "https://www.mdpi.com/2311-5637/7/3/174",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Snauwaert et al. — Genome Announcements",
          "edition": "2015",
          "reference": "Pediococcus damnosus in Flemish acidic beer maturation and exopolysaccharides",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4394401/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Health Canada",
          "edition": "2021",
          "reference": "Nomenclature changes of the genus Lactobacillus",
          "type": "source_scientifique_publique",
          "url": "https://www.canada.ca/en/health-canada/services/food-nutrition/food-labelling/health-claims/microorganisms-term-probiotic/nomenclature-changes-lactobacillus.html",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "28B Mixed-Fermentation Sour Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/28/28B/mixed-fermentation-sour-beer/",
          "consultation": "2026-08-11"
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
      "description": "Un bac peu profond passe la nuit sous l’air du Maine, de Californie ou d’ailleurs : au matin commence une fermentation inspirée des gestes belges, mais écrite par un autre lieu. Cette ale contemporaine peut mêler acidité, agrumes, foin, terre et bois. Son intérêt tient précisément à la distance : même méthode de départ, écosystème et histoire propres.",
      "histoireEtOrigines": `La méthode a voyagé sans emporter Bruxelles dans ses bagages. Des brasseries contemporaines installées hors du berceau du lambic ont adopté le refroidissement nocturne en bac ouvert, la fermentation sans ajout initial de culture, l'élevage long en bois et parfois l'assemblage. La catégorie « Belgian-Style Spontaneously Fermented Ale » reconnaît cette filiation technique tout en laissant au lambic son contexte historique, ses dénominations traditionnelles et sa continuité de production.

À Portland, dans le Maine, Allagash refroidit son moût une nuit dans un coolship, puis le transfère en barriques de vin en chêne français pour une fermentation et une garde d'un à trois ans. La brasserie emploie un empâtage trouble et des houblons vieillis, deux emprunts assumés à la pratique lambic, mais décrit les microorganismes de son air et de son bâtiment comme ceux du Maine. En Californie, Russian River élabore de même son moût Sonambic dans un koelschip, l'élève en barriques de vin usagées et l'assemble notamment pour Beatification. Ces noms de maison disent quelque chose d'essentiel : l'inspiration belge n'autorise pas à rebaptiser le paysage.

Une étude publiée en 2012 sur des American coolship ales a confirmé que l'absence d'inoculation commerciale n'engendre pas le chaos absolu. Les fermentations observées suivaient une succession reproductible : premières bactéries et levures oxydatives, puis Saccharomyces et bactéries lactiques, enfin domination tardive de Brettanomyces. Les auteurs ont surtout mis en évidence le rôle d'un microbiote résident de la brasserie. Le coolship ouvre une porte ; le bâtiment, les barriques, les pratiques et les brassins précédents aménagent la maison.

Cette branche contemporaine existe donc par translation plutôt que par reproduction. Les saisons de brassage, les céréales locales, la géométrie du chai et les communautés microbiennes changent d'un site à l'autre. Deux ateliers peuvent suivre une partition comparable et obtenir des trajectoires différentes — ce qui constitue moins un défaut de copie qu'une raison de brasser ainsi.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Interprétation contemporaine d’une fermentation spontanée d’inspiration belge ; le site, la saison, les contenants et les assemblages donnent une signature locale.",
        "maltsEtCereales": [
          "Orge maltée pâle et souvent blé cru ou non malté ; la proportion peut rappeler le lambic sans constituer une recette imposée."
        ],
        "houblons": [
          "Houblons vieillis ou peu aromatiques possibles pour préserver le moût avec peu d’amertume ; Allagash emploie par exemple des cônes âgés environ quatre ans."
        ],
        "levuresEtMicroorganismes": [
          "Communautés résidentes captées pendant le refroidissement, puis sélectionnées par le moût, le chai et les barriques ; aucune culture n’est ajoutée pour lancer une démarche réellement spontanée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil local suffisamment doux pour que l’acidité, le grain et la maturation restent lisibles.",
        "empatage": "L’empâtage trouble fournit amidon, dextrines et polyphénols aux populations tardives ; d’autres schémas sont possibles si le moût conserve cette réserve de long terme.",
        "ebullitionEtHoublonnage": "Refroidissement ouvert pendant une nuit assez fraîche pour atteindre la température d’inoculation sans installer un milieu incontrôlable ; la fenêtre saisonnière appartient au site.",
        "fermentation": "La succession n’est pas dirigée souche par souche, mais suivie par densité, pH, analyses et dégustation. Spontané ne signifie jamais abandonné.",
        "maturation": "Souvent un à trois ans en barriques, puis sélection et assemblage de lots ; la refermentation en bouteille peut apporter la carbonatation finale.",
        "profilRecherche": "Une ale sèche et évolutive où agrumes, fruit mûr, foin, terre et acidité racontent le lieu de production plutôt qu’une imitation nominale du lambic."
      },
      "sources": [
        {
          "organisme": "Allagash Brewing Company",
          "edition": null,
          "reference": "Brewing with a Coolship — spontaneous fermentation in Maine",
          "type": "source_producteur_primaire",
          "url": "https://www.allagash.com/coolship/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "Beatification — Sonambic, koelschip and used wine barrels",
          "type": "source_producteur_primaire",
          "url": "https://www.russianriverbrewing.com/brew/beatification/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Bokulich, Bamforth & Mills — PLOS ONE",
          "edition": "2012",
          "reference": "Brewhouse-Resident Microbiota Are Responsible for Multi-Stage Fermentation of American Coolship Ale",
          "type": "publication_scientifique",
          "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0035507",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Carriglio et al. — Fermentation",
          "edition": "2022",
          "reference": "Comparison Review of Spontaneously Fermented Beers: Lambic and American Coolship Ale",
          "type": "publication_scientifique",
          "url": "https://www.mdpi.com/2311-5637/8/11/646",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style spontaneously fermented ale and contemporary interpretations",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
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
      "description": "Chaque barrique arrive avec quatre variables dans ses douelles : essence et chauffe du bois, contenu précédent, habitants microbiens et passage de l’oxygène. Une sour élevée sous bois peut ainsi évoquer vin, vanille, épices, fruits mûrs ou cave autour d’une acidité patinée. Le fût n’est ni un simple arôme ni un druide : c’est un milieu à piloter.",
      "histoireEtOrigines": `Une barrique possède une biographie avant même de recevoir la bière. Son chêne a une origine, un séchage et une chauffe ; elle peut avoir contenu du vin ou un spiritueux ; ses pores retiennent ou non des microorganismes selon les usages et l'assainissement. La Wood- and Barrel-Aged Sour Beer réunit ces variables dans une catégorie craft moderne. Elle emprunte des outils à plusieurs traditions anciennes, mais ne constitue pas elle-même une lignée historique unique.

Le premier levier est chimique. Une barrique neuve libère davantage de lactones, vanilline, eugénol, tanins et autres composés du bois ; les espèces, la chauffe et le temps de contact changent leur dosage. Un fût usagé peut avoir perdu une grande partie de cette force et transmettre plutôt des traces de son occupant précédent. L'alcool de la bière, sa composition initiale et le rapport entre surface et volume modulent encore l'extraction. « Passé en chêne » renseigne à peu près autant que « cuit dans une casserole » : il manque la casserole et la recette.

Le deuxième levier est biologique. Les douelles et leurs interstices peuvent abriter Brettanomyces, bactéries lactiques ou acétiques, mais leur présence n'est ni automatique ni toujours souhaitée. Une barrique correctement nettoyée peut recevoir une bière déjà inoculée ; une autre entretient une culture de maison. La revue de KU Leuven consacrée à l'assainissement rappelle précisément combien vapeur, eau chaude, dioxyde de soufre ou autres traitements répondent à des objectifs différents sans garantir une stérilité facile. Le bois est un habitat possible, pas un certificat de fermentation mixte.

Le troisième levier est l'oxygène. La porosité, les joints, le remplissage et les manipulations règlent de faibles échanges gazeux qui influencent l'évolution aromatique. Un apport mesuré peut participer à la maturation ; un excès favorise notamment les bactéries acétiques et pousse la bière vers le vinaigre. Le quatrième levier est enfin le temps : dans une étude de 38 semaines, les communautés microbiennes, la chimie et le profil sensoriel ont changé avec la bière de départ et la maturation, tandis que le type de bois n'expliquait pas à lui seul la composition microbienne.

Aucune barrique ne promet donc le résultat de sa voisine. Les producteurs suivent chaque lot, comblent si nécessaire, mesurent, dégustent puis assemblent. Le bois devient intéressant lorsqu'il transforme l'acidité en profondeur ; livré à lui-même, il transforme surtout la cave en loterie coûteuse.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La bière de base, l’essence et la chauffe du bois, le contenu précédent, l’oxygène et l’écosystème du fût composent ensemble le profil.",
        "maltsEtCereales": [
          "Base assez structurée pour supporter acidité et extraction, avec alcool, couleur et dextrines choisis en fonction du fût plutôt que par réflexe."
        ],
        "houblons": [
          "Dose souvent modérée : les iso-alpha-acides peuvent freiner certaines bactéries lactiques et l’amertume durcit facilement l’ensemble acidité–tanins."
        ],
        "levuresEtMicroorganismes": [
          "Culture acidifiante ou mixte inoculée dans la bière, population entretenue par le fût, ou combinaison documentée des deux."
        ],
        "ingredientsComplementaires": [
          "Barrique neuve ou usagée, foudre, inserts ou autres surfaces de bois ; vin, spiritueux ou cidre antérieur seulement lorsque leur empreinte sert le projet."
        ],
        "profilEau": "Minéralité contenue : beaucoup de sulfate peut aiguiser amertume et sécheresse, tandis qu’un excès alcalin complique la trajectoire acide.",
        "empatage": "Le corps initial anticipe la consommation tardive des glucides et l’apport tannique ; la bière ne doit être ni épuisée avant le fût ni encore sirupeuse après un an.",
        "ebullitionEtHoublonnage": "Amertume et charge microbienne sont pensées ensemble avant le remplissage, car le bois corrige rarement une culture bloquée par le houblon.",
        "fermentation": "Primaire en cuve puis transfert, ou fermentation complète en fût. L’inoculation est explicitement maîtrisée au lieu d’être déduite de la seule présence de douelles.",
        "maturation": "De quelques mois à plusieurs années, avec contrôle du niveau, de l’oxygène, du pH, de la densité et du profil sensoriel barrique par barrique ; l’assemblage absorbe les écarts utiles.",
        "profilRecherche": "Acidité intégrée, évolution fermentaire lisible et bois proportionné : ni acétique mordant, ni tanin desséchant, ni alcool du contenu précédent couvrant la bière."
      },
      "sources": [
        {
          "organisme": "Bossaert et al. — International Journal of Food Microbiology",
          "edition": "2021",
          "reference": "Temporal dynamics in sour beer production via barrel ageing of finished beers",
          "type": "publication_scientifique",
          "url": "https://pubmed.ncbi.nlm.nih.gov/33387813/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Kocijan et al. — BrewingScience",
          "edition": "2021",
          "reference": "Sanitation of wooden barrels for ageing beer — a review",
          "type": "publication_scientifique",
          "url": "https://lirias.kuleuven.be/retrieve/621624",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Bouchez et al. — Foods",
          "edition": "2022",
          "reference": "Acetic Acid Bacteria in Sour Beer Production",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9386357/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wood- and Barrel-Aged Sour Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
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
      "description": "Quatre voix se partagent le verre : bière de base, acidité, fruit et barrique. Cerise, cassis, framboise, pêche ou raisin peuvent relancer la fermentation, apporter couleur, tanins et parfum, tandis que le bois prolonge l’accord. La réussite n’est pas une salade de fruits dans une menuiserie, mais une composition où chaque choix explique le suivant.",
      "histoireEtOrigines": `Deux barriques de vin californiennes montrent pourquoi le nom du fruit ne suffit pas. Chez Russian River, Supplication part d'une brown ale, reçoit des cerises acides et mûrit dans des fûts de pinot noir avec Brettanomyces et bactéries. Consecration associe au contraire malts sombres, cassis et fûts de cabernet sauvignon. L'une construit un axe cerise–vin rouge–chêne ; l'autre fait dialoguer fruit noir, chocolat, tabac et acidité. Le fruit n'est pas une décoration posée sur une sour terminée : il entre dans une architecture.

La catégorie s'est développée avec les programmes craft de fermentation mixte et de barriques, nourris par les bières fruitées belges mais libres de changer la base, la culture, le bois et le fruit. Elle ne transforme donc pas toute sour aux cerises en kriek, pas plus qu'un fût de vin ne lui confère une géographie belge. Fruit Lambic raconte une branche traditionnelle précise ; Fruited Wood- and Barrel-Aged Sour Beer décrit une combinaison de procédés.

Le moment d'ajout redessine cette combinaison. Après une première maturation, le transfert sur fruits conserve souvent davantage de leur identité tout en offrant de nouveaux sucres aux levures et bactéries. Une cofermentation plus précoce intègre davantage le fruit au métabolisme du brassin et peut chasser ses arômes les plus volatils. Jus, purée ou fruits entiers n'apportent pas la même surface, les mêmes peaux, noyaux, fibres, acides et polyphénols. La recherche sur les bières fruitées souligne justement la différence entre fruit cofermenté et simple aromatisation sucrée.

La refermentation déclenchée par le fruit modifie densité, alcool, acidité, gaz et population microbienne. Après le retrait des solides, le lot doit retrouver une stabilité mesurable avant l'embouteillage ; sinon, la bouteille poursuit le travail avec un enthousiasme potentiellement explosif. L'oxygène introduit pendant les transferts et les microorganismes associés au fruit demandent la même vigilance.

Vient enfin l'assemblage. Un fruit très acide appelle parfois une base plus ronde ; un fût tannique supporte mal une peau déjà astringente ; une barrique marquée par son vin précédent peut prolonger un raisin ou brouiller une pêche délicate. La mémoire-cible tient dans ce quatuor : chaque voix doit rester reconnaissable, aucune ne gagne en criant.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le profil dépend d’un accord à quatre termes — base, acidité, fruit et fût — ainsi que du moment où les fruits relancent la fermentation.",
        "maltsEtCereales": [
          "Base choisie pour le fruit : blonde discrète pour les fruits pâles, rouge ou brune possible avec cerise et baies, malts sombres lorsque cacao et cassis peuvent dialoguer."
        ],
        "houblons": [
          "Faibles à modérés ; amertume, acidité fruitée et tanins du bois s’additionnent plus facilement qu’ils ne s’annulent."
        ],
        "levuresEtMicroorganismes": [
          "Cultures mixtes ou autre fermentation acide stable ; la nouvelle charge de sucres exige des organismes capables d’achever proprement la refermentation."
        ],
        "ingredientsComplementaires": [
          "Fruits entiers, purées ou jus documentés ; barrique neutre ou ancien fût de vin ou de spiritueux dont l’empreinte complète réellement le fruit."
        ],
        "profilEau": "Profil modéré qui ne durcit ni les acides du fruit ni l’astringence combinée des peaux, noyaux et douelles.",
        "empatage": "Le corps final est anticipé avant deux consommations possibles — maturation acide puis sucres du fruit — afin de préserver du relief sans douceur résiduelle instable.",
        "ebullitionEtHoublonnage": "Houblonnage retenu ; les traitements thermiques éventuels du fruit sont choisis en connaissance de leurs effets sur les arômes et la charge microbienne.",
        "fermentation": "Souvent base mûre transférée sur fruit, mais cofermentation possible. Densité, pH, température et dégagement gazeux suivent la reprise au lieu d’obéir à un délai fixe.",
        "maturation": "Le lot reste au contact du fruit jusqu’à l’extraction voulue, puis poursuit sa stabilisation. Les barriques sont goûtées séparément avant un assemblage qui règle fruit, bois et acidité.",
        "profilRecherche": "Fruit fermenté identifiable, base encore présente, acidité vive et bois utile ; aucune douceur aromatisée, astringence massive ou pression résiduelle imprévisible."
      },
      "sources": [
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "Supplication — brown ale, sour cherries and Pinot Noir barrels",
          "type": "source_producteur_primaire",
          "url": "https://www.russianriverbrewing.com/brew/supplication/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "Consecration — dark malts, currants and Cabernet Sauvignon barrels",
          "type": "source_producteur_primaire",
          "url": "https://www.russianriverbrewing.com/brew/consecration/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Croonenberghs et al. — Current Opinion in Biotechnology",
          "edition": "2024",
          "reference": "Fruit beers, beers with or without a co-fermentation step with fruits",
          "type": "publication_scientifique",
          "url": "https://pubmed.ncbi.nlm.nih.gov/38382326/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "American Homebrewers Association",
          "edition": null,
          "reference": "How to Add Fruit to Beer — préparation, moment d'ajout et reprise fermentaire",
          "type": "source_technique_associative",
          "url": "https://www.homebrewersassociation.org/how-to-brew/how-to-add-fruit-to-beer/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Fruited Wood- and Barrel-Aged Sour Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        }
      ]
    }
  ]
};

export default collection;
