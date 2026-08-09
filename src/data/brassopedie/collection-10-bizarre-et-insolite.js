// Source canonique de la collection 10 : chaque entrée est un objet brassicole singulier.
// Les IDs internes c10-xxx sont volontairement conservés pour préserver la progression locale existante.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 10,
    "slug": "bizarre-et-insolite",
    "nom": "Bizarre et insolite",
    "searchable": false,
    "secret": {
      "enabled": true,
      "lockedLabel": "????",
      "unlockRatio": 0.5,
      "unlockScope": "classic-collections",
      "revealMode": "click-after-unlock"
    }
  },
  "cartes": [
    {
      "id": "c10-001",
      "code": "C10-001",
      "nom": "Bottled Instinct",
      "collectionId": 10,
      "nature": "Bière expérimentale",
      "parentPrincipalId": null,
      "aliases": [
        "The Order of Yoni Bottled Instinct"
      ],
      "paysOrigine": [
        "Pologne"
      ],
      "origine": {
        "libelle": "The Order of Yoni",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Ambrée / sour ale"
      },
      "fermentation": {
        "type": "Mixte / fermentation lactique",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une sour ale polonaise dont le véritable ingrédient-spectacle n’est pas un fruit exotique mais une culture de lactobacilles revendiquée comme issue de la flore vaginale. La provocation est anatomique ; le mécanisme, lui, relève de la microbiologie et de l’acidification lactique.",
      "histoireEtOrigines": `Bottled Instinct appartient au projet polonais The Order of Yoni, qui a choisi de placer l’intimité féminine au centre de sa narration de marque. Le discours public du projet parle de bactéries lactiques isolées, cultivées puis utilisées dans l’élaboration d’une bière acide. C’est une distinction importante : la légende facile raconterait volontiers qu’un fluide corporel est versé dans la cuve ; ce n’est pas ce que décrivent les sources.

Le projet brouille volontairement les frontières entre science, érotisme publicitaire et fermentation. Cette mise en scène explique une grande partie de sa célébrité : l’expérience n’est pas seulement dans le verre, elle est dans la réaction du lecteur avant même qu’il ait compris ce qu’est une culture microbienne.

La fiche doit donc conserver deux voix à la fois : le sourire gêné du cabinet de curiosités et la blouse blanche du microbiologiste. L’une attire l’attention ; l’autre empêche de raconter n’importe quoi.`,
      "chapitres": [
        {
          "titre": "Le laboratoire intime",
          "texte": "Le point techniquement intéressant est l’usage de lactobacilles comme agents d’acidification. Les bactéries lactiques transforment des sucres en acide lactique ; ce principe est banal dans de nombreuses fermentations alimentaires et brassicoles. Ce qui rend Bottled Instinct singulière n’est donc pas la fonction du micro-organisme, mais l’endroit revendiqué comme origine de l’isolat et la manière spectaculaire dont cette origine est racontée."
        },
        {
          "titre": "Le scandale n’est pas dans la pipette",
          "texte": "Les communications autour de la gamme mentionnent une bière de blé ou une sour ale, des levures brassicoles et une culture lactique. Certaines fiches secondaires évoquent aussi des copeaux de chêne au cognac. En revanche, la souche précise, les proportions, le protocole de laboratoire et la chronologie complète du brassage ne sont pas publiés : la Brassopédie peut documenter le principe, pas fabriquer une fausse recette secrète."
        }
      ],
      "recette": {
        "titre": "Anatomie documentée du brassin",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Base de bière acide avec fermentation brassicole et intervention de bactéries lactiques mises en avant par le projet. Les détails industriels restent propriétaires ou non publiés.",
        "maltsEtCereales": [
          "Malt d’orge documenté dans les descriptions du projet ; certaines versions de la gamme évoquent aussi une base de bière de blé."
        ],
        "houblons": [
          "Houblons présents dans la base brassicole, sans variétés ni calendrier publiés pour Bottled Instinct."
        ],
        "levuresEtMicroorganismes": [
          "Levure de bière classique pour la fermentation alcoolique.",
          "Lactobacilles cultivés à partir d’un prélèvement revendiqué comme vaginal pour la composante lactique."
        ],
        "ingredientsComplementaires": [
          "Copeaux de chêne au cognac mentionnés par certaines fiches secondaires ; à considérer comme information de version tant qu’une fiche producteur détaillée n’est pas disponible."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation alcoolique complétée par une composante lactique. Souche, inoculation, températures et séquençage exacts non publiés.",
        "maturation": "Une influence de chêne/cognac est rapportée pour certaines descriptions ; durée et protocole non documentés.",
        "profilRecherche": "Une bière acide où la singularité vient de la provenance revendiquée de la culture lactique, sans transformer cette provenance en fantasme de liquide corporel versé dans le brassin."
      },
      "sources": [
        {
          "organisme": "The Order of Yoni",
          "edition": null,
          "reference": "Présentation du concept Yoni Beer et des cultures de lactobacilles",
          "type": "source_producteur",
          "url": "https://theorderofyoni.com/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "BeerAdvocate",
          "edition": null,
          "reference": "Bottled Instinct — fiche de référence communautaire",
          "type": "source_secondaire",
          "url": "https://www.beeradvocate.com/beer/profile/50811/316321/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Untappd",
          "edition": null,
          "reference": "The Order of Yoni — Bottled Instinct",
          "type": "source_secondaire",
          "url": "https://untappd.com/b/the-order-of-yoni-bottled-instinct/2107354",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-002",
      "code": "C10-002",
      "nom": "Rogue Beard Beer",
      "collectionId": 10,
      "nature": "Bière expérimentale",
      "parentPrincipalId": null,
      "aliases": [
        "Beard Beer",
        "New Crustacean"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Rogue Ales, Oregon",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Blonde à ambrée claire / ale"
      },
      "fermentation": {
        "type": "Haute / culture sauvage isolée",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "L’ale qui a transformé la barbe du maître-brasseur John Maier en territoire microbiologique. Le poil n’est pas un ingrédient de texture : il a servi de lieu de prélèvement à une levure capable de fermenter la bière.",
      "histoireEtOrigines": `Chez Rogue Ales, l’idée est née dans un contexte de recherche de levures locales. Des follicules de la barbe de John Maier, alors maître-brasseur emblématique de la maison, ont été envoyés en laboratoire. Une culture utilisable en fermentation a été isolée, donnant à la brasserie un terroir d’une précision géographique admirable : quelques centimètres sous le nez du brasseur.

Le projet a d’abord circulé sous le nom New Crustacean avant que Beard Beer ne devienne l’évidence marketing. L’histoire fonctionne parce qu’elle paraît sale alors que le procédé est précisément l’inverse : prélèvement, isolement, culture, propagation. La barbe est le lieu de découverte ; elle n’est pas jetée dans la chaudière comme une poignée de houblon velu.

Cette nuance fait de la bière un excellent cours de microbiologie sauvage déguisé en blague de barbier.`,
      "chapitres": [
        {
          "titre": "Une barbe peut-elle avoir un terroir ?",
          "texte": "Oui, au sens microbiologique le plus littéral : peau, poils et environnement hébergent des communautés de micro-organismes. Trouver une levure fermentaire viable dans ce milieu n’implique pas que toutes les barbes brassent spontanément une pale ale, seulement qu’un isolat particulier a présenté des caractéristiques intéressantes et a pu être propagé proprement."
        },
        {
          "titre": "Pas de moustache dans le moût",
          "texte": "Le détail à retenir est la chaîne laboratoire → culture → fermentation. Les sources secondaires décrivent une base d’ale Rogue et certaines fiches donnent des malts Munich, Crystal 15 et Pilsner avec du houblon Sterling. Les paramètres complets varient selon les publications ; la véritable signature de la bière reste sa levure dite « beard yeast »."
        }
      ],
      "recette": {
        "titre": "Du follicule au fermenteur",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Une ale de brasserie conventionnelle fermentée par une culture isolée depuis la barbe de John Maier.",
        "maltsEtCereales": [
          "Malt Pilsner, Munich et Crystal 15 rapportés dans des fiches de produit secondaires."
        ],
        "houblons": [
          "Sterling est cité dans plusieurs descriptions de la bière ; les doses exactes ne sont pas publiées."
        ],
        "levuresEtMicroorganismes": [
          "Culture fermentaire isolée à partir de follicules de barbe de John Maier puis propagée en conditions de laboratoire."
        ],
        "ingredientsComplementaires": [
          "Aucun poil de barbe n’est documenté comme ingrédient ajouté au brassin final."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation haute avec la culture dite Beard Yeast ; températures et cinétique détaillées non publiées.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une ale nette et fermentée par une souche atypiquement sourcée, où l’histoire du micro-organisme compte davantage que le spectaculaire d’un faux ingrédient pileux."
      },
      "sources": [
        {
          "organisme": "Rogue Ales",
          "edition": null,
          "reference": "Histoire de la brasserie et de John Maier",
          "type": "source_producteur",
          "url": "https://www.rogue.com/about/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Appellation Beer",
          "edition": null,
          "reference": "Rogue finds brewing yeast in John Maier’s beard",
          "type": "source_secondaire",
          "url": "https://appellationbeer.com/blog/rogue-finds-brewing-yeast-in-john-maiers-beard/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Eater",
          "edition": null,
          "reference": "Beer made from a man’s beard yeast",
          "type": "source_secondaire",
          "url": "https://www.eater.com/2015/9/28/9409427/beer-made-from-mans-beard-yeast-rogue-ales-no-shave-november",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-003",
      "code": "C10-003",
      "nom": "PU:REST",
      "collectionId": 10,
      "nature": "Bière expérimentale / démonstrateur environnemental",
      "parentPrincipalId": null,
      "aliases": [
        "PU:REST recycled water beer"
      ],
      "paysOrigine": [
        "Suède"
      ],
      "origine": {
        "libelle": "Nya Carnegiebryggeriet / IVL Swedish Environmental Research Institute / Carlsberg Sweden",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Pilsner très claire"
      },
      "fermentation": {
        "type": "Basse",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une pilsner brassée avec de l’eau usée devenue eau de haute qualité après traitement avancé. Son ingrédient insolite n’a donc plus rien d’un égout au moment d’entrer en brasserie : tout le projet consiste justement à le démontrer.",
      "histoireEtOrigines": `PU:REST a été lancée en Suède en 2018 par Nya Carnegiebryggeriet avec l’IVL Swedish Environmental Research Institute et Carlsberg Sweden. Le projet devait rendre tangible une question généralement enfermée dans des schémas d’ingénieurs : une eau usée correctement purifiée peut-elle redevenir une ressource alimentaire sûre ? Une bière a l’avantage de poser la question devant un verre, donc sans possibilité de l’esquiver derrière un PowerPoint.

La communication d’IVL insiste sur le contrôle de qualité de l’eau et sur une pilsner cristalline brassée avec malt et houblon biologiques. Le contraste psychologique est le véritable moteur de la bière : l’origine de l’eau provoque un « beurk », alors que son état après traitement n’a plus les caractéristiques que ce mot suggère.

PU:REST est ainsi autant une expérience de perception qu’un produit brassicole.`,
      "chapitres": [
        {
          "titre": "L’égout qui n’en est plus un",
          "texte": "Parler de « bière aux eaux usées » sans expliquer le traitement revient à raconter qu’un pain est fait avec un champ boueux. Entre la ressource initiale et le produit alimentaire se trouvent des étapes de purification, des contrôles et des critères de potabilité. Le sujet scientifique de PU:REST est précisément cette transformation."
        },
        {
          "titre": "Le yuck factor, cet ingrédient invisible",
          "texte": "La réutilisation de l’eau rencontre souvent une barrière psychologique plus forte que la barrière technique. En choisissant la bière, les partenaires ont transformé le dégoût intuitif en objet de discussion. Le goût attendu n’est donc pas « station d’épuration » : la réussite du projet suppose au contraire que l’eau purifiée se comporte comme une eau de brassage propre."
        }
      ],
      "recette": {
        "titre": "Le brassin après la station de traitement",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Pilsner de démonstration dont la spécificité documentée est l’emploi d’eau usée purifiée et contrôlée.",
        "maltsEtCereales": [
          "Malt biologique annoncé par le projet ; variété et composition du grist non publiées."
        ],
        "houblons": [
          "Houblons biologiques annoncés ; variétés et ajouts non publiés."
        ],
        "levuresEtMicroorganismes": [
          "Levure de fermentation basse cohérente avec la pilsner annoncée ; souche non publiée."
        ],
        "ingredientsComplementaires": [
          "Aucun constituant d’eaux usées n’est recherché comme ingrédient : l’eau est purifiée avant usage alimentaire."
        ],
        "profilEau": "Eau issue d’eaux usées puis purifiée et contrôlée par le dispositif du projet ; c’est le cœur expérimental de PU:REST.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation basse de pilsner ; paramètres détaillés non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une pilsner propre et banale au palais pour rendre extraordinaire une idée de circularité de l’eau."
      },
      "sources": [
        {
          "organisme": "IVL Swedish Environmental Research Institute",
          "edition": null,
          "reference": "Sweden’s first beer brewed with recycled water",
          "type": "source_institutionnelle",
          "url": "https://www.ivl.se/english/ivl/press/press-releases/2018-05-24-swedens-first-beer-brewed-with-recycled-water.html",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Brewing4EU",
          "edition": null,
          "reference": "PU:REST — Sweden’s first beer brewed with purified wastewater",
          "type": "source_professionnelle",
          "url": "https://brewing4.eu/sustainability-initiatives/purest-swedens-first-beer-brewed-with-purified-waste-water/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-004",
      "code": "C10-004",
      "nom": "Pisner",
      "collectionId": 10,
      "nature": "Bière expérimentale / économie circulaire",
      "parentPrincipalId": null,
      "aliases": [
        "Nørrebro Bryghus Pisner"
      ],
      "paysOrigine": [
        "Danemark"
      ],
      "origine": {
        "libelle": "Nørrebro Bryghus / Roskilde Festival",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Pilsner claire"
      },
      "fermentation": {
        "type": "Basse",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "La fameuse « bière au pipi » qui n’en contient pas : l’urine de festivaliers a servi d’engrais pour l’orge. Le liquide corporel s’arrête donc au champ ; ce qui entre en brasserie est une céréale cultivée dans une boucle de recyclage des nutriments.",
      "histoireEtOrigines": `Pisner est née du programme de « beercycling » associé au Roskilde Festival. Des dizaines de milliers de litres d’urine humaine ont été collectés puis utilisés comme ressource fertilisante pour des cultures d’orge. Plus tard, cette orge a rejoint le cycle brassicole chez Nørrebro Bryghus.

Le nom fait volontairement tout ce qu’il peut pour que l’on imagine le pire. C’est efficace, mais faux si l’on conclut que l’urine a été versée dans la bière. Le procédé relève de l’agronomie : récupérer azote et nutriments au lieu de les perdre, faire pousser une céréale, maltage, puis brassage classique.

Pisner est donc une anomalie de chaîne d’approvisionnement, pas une recette de liquide corporel. Et cette correction est beaucoup plus intéressante que la blague initiale.`,
      "chapitres": [
        {
          "titre": "Le champ a bu avant vous",
          "texte": "L’étape insolite se déroule en amont de la brasserie. L’urine est une ressource riche en nutriments, notamment en azote ; utilisée de manière encadrée comme fertilisant, elle participe à la croissance de l’orge. La plante n’entre pas ensuite dans la cuve avec un petit souvenir liquide du festival : elle est récoltée et transformée comme matière agricole."
        },
        {
          "titre": "Une blague de toilettes devenue leçon d’agronomie",
          "texte": "Le dispositif a servi à rendre visible le recyclage des nutriments dans un événement accueillant un très grand public. Le gag du nom est presque un cheval de Troie pédagogique : on vient pour rire, puis on découvre qu’une partie de l’économie circulaire consiste précisément à arrêter de considérer certains flux comme des déchets définitifs."
        }
      ],
      "recette": {
        "titre": "La recette commence dans le champ",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Pilsner dont l’originalité documentée réside dans l’origine agronomique de l’orge, et non dans un ajout d’urine au brassage.",
        "maltsEtCereales": [
          "Malt produit à partir d’orge cultivée sur des champs fertilisés avec l’urine collectée au Roskilde Festival."
        ],
        "houblons": [
          "Houblons non documentés avec suffisamment de précision."
        ],
        "levuresEtMicroorganismes": [
          "Levure de fermentation basse attendue pour une pilsner ; souche non publiée."
        ],
        "ingredientsComplementaires": [
          "Urine humaine : utilisée comme ressource fertilisante au champ, pas comme ingrédient du moût ou de la bière finie."
        ],
        "profilEau": "Eau de brassage non documentée ; elle n’est pas le vecteur de l’expérience de recyclage.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Brassage et fermentation de pilsner conventionnels selon les informations publiques ; paramètres non détaillés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une pilsner racontant une boucle de nutriments agricole sans perpétuer le faux raccourci de la bière brassée à l’urine."
      },
      "sources": [
        {
          "organisme": "Pitchfork",
          "edition": null,
          "reference": "Danish brewery makes Pisner beer using music festival urine",
          "type": "source_presse",
          "url": "https://pitchfork.com/news/73397-danish-brewery-makes-pisner-beer-using-music-festival-urine/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Beer Street Journal",
          "edition": null,
          "reference": "Nørrebro Bryghus Pisner",
          "type": "source_secondaire",
          "url": "https://beerstreetjournal.com/norrebro-bryghus-pisner/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-005",
      "code": "C10-005",
      "nom": "Hvalur 2",
      "collectionId": 10,
      "nature": "Bière expérimentale / saisonnière",
      "parentPrincipalId": null,
      "aliases": [
        "Hvalur 2 Þorraöl"
      ],
      "paysOrigine": [
        "Islande"
      ],
      "origine": {
        "libelle": "Steðji Brewery",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.4,
        "max": 5.4,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Ambrée fumée"
      },
      "fermentation": {
        "type": "Non documentée",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une bière islandaise de Þorri construite autour de testicules de baleine fumés à la bouse de mouton séchée. Le résumé semble écrit par une saga qui aurait raté la sortie vers la cuisine moderne, mais le produit et son ingrédient ont bien été commercialisés.",
      "histoireEtOrigines": `Hvalur 2 est associée à Steðji Brewery et aux célébrations hivernales de Þorri, période durant laquelle des aliments islandais traditionnels très marqués reviennent sur les tables. La brasserie a choisi de pousser cette logique au maximum avec un ingrédient de baleine et une méthode de fumage faisant intervenir de la bouse de mouton séchée comme combustible.

L’histoire est inséparable de la controverse liée à l’exploitation de la baleine. Une Brassopédie sérieuse ne peut donc pas réduire la bière à « haha, des testicules » : elle doit aussi rappeler que l’ingrédient animal se situe dans un contexte culturel, réglementaire et éthique débattu.

Le bizarre, ici, est un paysage complet : mer nord-atlantique, manque historique de bois, fumage, hiver et provocation commerciale.`,
      "chapitres": [
        {
          "titre": "La fumée vient du combustible, pas d’une poignée de fumier",
          "texte": "La bouse de mouton séchée est décrite comme combustible de fumage. Elle produit la fumée qui traite l’ingrédient animal ; elle n’est pas documentée comme matière jetée dans le moût. La nuance est moins spectaculaire mais beaucoup plus fidèle à la logique des techniques de fumage islandaises."
        },
        {
          "titre": "Une curiosité qui porte une controverse",
          "texte": "L’usage de produits de baleine a suscité des réactions bien au-delà du monde brassicole. Hvalur 2 est donc un cas où l’insolite ne peut pas être séparé du débat sur la chasse à la baleine. La bière devient un objet culturel autant qu’un objet de dégustation, et le lecteur gagne davantage à comprendre ce contexte qu’à inventer des notes de goût anatomiques."
        }
      ],
      "recette": {
        "titre": "Ce que l’Islande a réellement mis dans l’histoire",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Bière saisonnière fumée à 5,4 % dont l’ingrédient emblématique est un produit de baleine fumé selon une méthode traditionnelle revendiquée.",
        "maltsEtCereales": [
          "Composition maltée non publiée dans les sources retenues."
        ],
        "houblons": [
          "Houblons et amertume non documentés avec précision."
        ],
        "levuresEtMicroorganismes": [
          "Levure et famille de fermentation non publiées de façon suffisamment fiable."
        ],
        "ingredientsComplementaires": [
          "Testicules de baleine fumés, ingrédient annoncé par la brasserie.",
          "Bouse de mouton séchée utilisée comme combustible de fumage, pas comme ingrédient direct de la bière."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Procédé de fermentation non documenté avec assez de précision pour être reproduit.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Documenter une bière de Þorri réellement produite sans transformer le folklore, l’anatomie ou la fumée en détails inventés."
      },
      "sources": [
        {
          "organisme": "Iceland Monitor",
          "edition": null,
          "reference": "Whale testicle beer anyone?",
          "type": "source_presse",
          "url": "https://icelandmonitor.mbl.is/news/culture_and_living/2015/01/12/whale_testicle_beer_anyone/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Barnivore",
          "edition": null,
          "reference": "Steðji Brewery Hvalur 2 Þorraöl — vérification produit",
          "type": "source_secondaire",
          "url": "https://www.barnivore.com/products/61118-steji-brewery-hvalur-2-orral-54-contains-sheep-shit-smoked-whale-testicles",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-006",
      "code": "C10-006",
      "nom": "Rocky Mountain Oyster Stout",
      "collectionId": 10,
      "nature": "Bière expérimentale",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Wynkoop Brewing Company, Colorado",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "7,5 % · lancement documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Noire / stout"
      },
      "fermentation": {
        "type": "Haute",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Un stout du Colorado brassé avec environ 25 livres de testicules de taureau rôtis. Tout a commencé comme un poisson d’avril ; le problème, ou le génie, est que Wynkoop a fini par réellement brasser la blague.",
      "histoireEtOrigines": `L’expression américaine « Rocky Mountain oysters » ne désigne pas des huîtres mais des testicules de taureau préparés comme spécialité culinaire. Wynkoop Brewing Company s’en est servi pour un canular de poisson d’avril. La réaction du public a été suffisamment forte pour que la brasserie commette l’acte irréversible : produire le stout pour de vrai.

Les descriptions de lancement parlent d’environ 25 livres de testicules tranchés et rôtis, associés à une base de stout comprenant malts du Colorado, orge torréfiée, plusieurs malts spéciaux et du Styrian Goldings. La bière est donc plus documentée que beaucoup de curiosités de la collection.

Certaines fiches ultérieures donnent des valeurs d’alcool différentes ; la Brassopédie rattache le 7,5 % à l’édition de lancement documentée plutôt que d’en faire une constante éternelle.`,
      "chapitres": [
        {
          "titre": "Quand le poisson d’avril demande un fermenteur",
          "texte": "La genèse est presque plus importante que l’ingrédient. Beaucoup de brasseries publient des blagues ; Wynkoop a transformé la sienne en produit. Ce passage du faux au vrai résume l’esprit d’une partie de la scène craft américaine : si le public répond « vous n’oseriez pas », quelqu’un finit toujours par chercher une marmite assez grande."
        },
        {
          "titre": "L’huître des montagnes n’a jamais vu la mer",
          "texte": "Le nom culinaire joue depuis longtemps sur l’euphémisme. Dans la bière, l’ingrédient est rôti avant emploi, ce qui l’inscrit davantage dans une logique de cuisine et de torréfaction que dans une recherche de sensation crue. Les sources n’autorisent pourtant pas à inventer un profil « carné » précis : l’existence de l’ingrédient est certaine, son impact sensoriel exact dépend du brassin."
        }
      ],
      "recette": {
        "titre": "Du rodéo au mash tun",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Stout expérimental dont la recette de lancement est partiellement documentée.",
        "maltsEtCereales": [
          "Malts du Colorado.",
          "Orge torréfiée.",
          "Ensemble de malts spéciaux rapporté par Wynkoop ; proportions non publiées."
        ],
        "houblons": [
          "Styrian Goldings documenté sur la version de lancement."
        ],
        "levuresEtMicroorganismes": [
          "Levure de fermentation haute ; souche non publiée dans les sources retenues."
        ],
        "ingredientsComplementaires": [
          "Environ 25 livres de testicules de taureau tranchés puis rôtis pour le brassin documenté."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Le calendrier précis des ajouts n’est pas publié ; l’ingrédient animal est décrit comme rôti avant intégration au brassage.",
        "fermentation": "Fermentation haute de stout ; paramètres détaillés non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Un stout torréfié devenu réel après une blague, sans extrapoler un goût anatomique que les sources ne mesurent pas."
      },
      "sources": [
        {
          "organisme": "CraftBeer.com",
          "edition": null,
          "reference": "Wynkoop Brewing releases Rocky Mountain Oyster Stout",
          "type": "source_professionnelle",
          "url": "https://www.craftbeer.com/news/wynkoop-brewing-releases-cans-of-rocky-mountain-oyster-stout",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Guys Drinking Beer",
          "edition": null,
          "reference": "Wynkoop Rocky Mountain Oyster Stout review",
          "type": "source_secondaire",
          "url": "https://www.guysdrinkingbeer.com/wynkoop-rocky-mountain-oyster-stout-review/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "BeerAdvocate",
          "edition": null,
          "reference": "Rocky Mountain Oyster Stout — versions et données de produit",
          "type": "source_secondaire",
          "url": "https://www.beeradvocate.com/beer/profile/111/83843/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-007",
      "code": "C10-007",
      "nom": "Chicha",
      "collectionId": 10,
      "nature": "Bière ancienne réinterprétée / bière expérimentale",
      "parentPrincipalId": null,
      "aliases": [
        "Dogfish Head Chicha"
      ],
      "paysOrigine": [
        "États-Unis",
        "Inspiration andine"
      ],
      "origine": {
        "libelle": "Dogfish Head — série Ancient Ales",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.1,
        "max": 3.1,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Trouble / maïs violet selon le brassin documenté"
      },
      "fermentation": {
        "type": "Haute / méthode inspirée de chichas andines",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "La version Dogfish Head d’une chicha andine remet au centre un geste ancestral : mâcher une partie du maïs afin que les enzymes salivaires commencent à transformer l’amidon. C’est une pratique culturelle réelle, pas un concours de grimaces de brasserie.",
      "histoireEtOrigines": `Dogfish Head a brassé Chicha à partir de 2009 dans sa série Ancient Ales, consacrée aux boissons inspirées de pratiques historiques et traditionnelles. Pour ce brassin, plus d’une centaine de collaborateurs ont participé à la mastication de maïs violet péruvien. L’image est spectaculaire ; la biochimie l’est aussi : l’amylase salivaire commence à découper l’amidon en molécules plus accessibles à la fermentation.

La brasserie documente également du maïs malté, de l’orge maltée, des fraises et un assemblage de levures. Le moût est ensuite bouilli, ce qui est un détail sanitaire essentiel et une bonne antidote aux caricatures de « bière à la salive ».

Présenter cette bière exige du respect : le procédé s’inspire de traditions andines bien antérieures à la mode craft américaine. L’étrangeté est celle de notre regard moderne, pas celle d’une pratique qui possédait sa propre logique technique et sociale.`,
      "chapitres": [
        {
          "titre": "La bouche comme outil enzymatique",
          "texte": "Avant l’industrie des enzymes et la maîtrise moderne du maltage, les sociétés humaines ont développé plusieurs moyens pour rendre l’amidon fermentescible. La mastication est l’un d’eux : l’amylase de la salive commence l’hydrolyse de l’amidon. Le geste peut heurter nos habitudes hygiéniques contemporaines, mais son principe biochimique est parfaitement intelligible."
        },
        {
          "titre": "Dogfish ne sert pas un crachat cru",
          "texte": "Le maïs mâché participe à la préparation, puis le moût est bouilli. La chaleur transforme le procédé en brassage contrôlé et détruit les micro-organismes sensibles présents avant l’ébullition. La fermentation finale repose sur un assemblage de levures documenté par la brasserie, pas sur l’idée folklorique que la salive ferait toute la bière à elle seule."
        }
      ],
      "recette": {
        "titre": "La chicha Dogfish, sans caricature",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Interprétation moderne documentée d’une chicha de maïs, brassée à 3,1 % ABV dans la série Ancient Ales.",
        "maltsEtCereales": [
          "Maïs violet péruvien dont une partie est mâchée.",
          "Maïs malté.",
          "Orge maltée."
        ],
        "houblons": [
          "Houblonnage non mis en avant dans la documentation publique ; ne pas lui attribuer une signature houblonnée moderne."
        ],
        "levuresEtMicroorganismes": [
          "Assemblage de levures utilisé par Dogfish Head ; composition précise non publiée."
        ],
        "ingredientsComplementaires": [
          "Fraises documentées dans la version Dogfish Head.",
          "Salive humaine comme source d’amylase lors de la mastication du maïs, suivie d’une ébullition du moût."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "La mastication d’une partie du maïs amorce la conversion enzymatique ; le reste du schéma d’empâtage n’est pas publié au niveau d’une recette reproductible.",
        "ebullitionEtHoublonnage": "Le moût est bouilli après la préparation du maïs, étape essentielle du procédé documenté.",
        "fermentation": "Fermentation avec un assemblage de levures après ébullition ; paramètres détaillés non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une réinterprétation respectueuse d’un procédé andin, où l’on comprend pourquoi le geste existe au lieu de le réduire à son potentiel de grimace."
      },
      "sources": [
        {
          "organisme": "Dogfish Head Alehouse",
          "edition": null,
          "reference": "Chicha — Ancient Ale",
          "type": "source_producteur",
          "url": "https://dogfishalehouse.com/beers/chicha/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Dogfish Head",
          "edition": null,
          "reference": "Chicha",
          "type": "source_producteur",
          "url": "https://www.dogfish.com/drink/beer/chicha",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-008",
      "code": "C10-008",
      "nom": "The End of History",
      "collectionId": 10,
      "nature": "Bière extrême / objet de collection",
      "parentPrincipalId": null,
      "aliases": [
        "BrewDog The End of History"
      ],
      "paysOrigine": [
        "Écosse"
      ],
      "origine": {
        "libelle": "BrewDog",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 55,
        "max": 55,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Blonde belge très concentrée"
      },
      "fermentation": {
        "type": "Haute puis concentration par congélation",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une Belgian-style blonde poussée à 55 % ABV par concentration à froid, aromatisée notamment avec orties et baies de genévrier, puis commercialisée dans des taxidermies. À ce niveau, la bouteille a quitté le rayon bière pour entrer dans une performance d’art punk avec bouchon.",
      "histoireEtOrigines": `The End of History apparaît en 2010 dans la période où BrewDog participe à une véritable course aux records d’alcool. La brasserie part d’une blonde belge forte, la concentre par congélation et atteint 55 % ABV. Le chiffre aurait déjà suffi à la rendre célèbre ; BrewDog ajoute une présentation devenue iconique : chaque bouteille est installée dans un petit animal taxidermisé.

Les communications de la brasserie évoquent des écureuils et des hermines/stoats issus de taxidermie, ainsi que des ingrédients plus discrets mais réellement brassicoles : orties des Highlands et baies de genévrier. La recette publiée ultérieurement par BrewDog précise aussi malt Extra Pale, plusieurs houblons et une levure belge.

Le résultat est une bière où trois histoires se superposent : technique de concentration, provocation visuelle et critique ironique du luxe. Le liquide est extrême ; le contenant s’est assuré qu’on parlerait de lui même sans l’ouvrir.`,
      "chapitres": [
        {
          "titre": "Un écureuil n’est pas un ingrédient",
          "texte": "La taxidermie appartient au conditionnement de l’édition, pas au brassage. Cette distinction paraît évidente, mais l’image a tellement dominé la couverture médiatique qu’elle finit parfois par avaler la bière elle-même. Dans la cuve, on trouve une blonde belge, du malt, des houblons, une levure, des plantes et surtout un travail de concentration par le froid."
        },
        {
          "titre": "Quand l’eisbock devient une machine à records",
          "texte": "La concentration par congélation exploite la différence de comportement entre eau et alcool à basse température : une fraction aqueuse gèle plus facilement et peut être séparée, augmentant la concentration du liquide restant. Répétée, l’opération sort très vite des proportions d’une bière de table. À 55 %, on est dans un produit de dégustation minuscule, pas dans une pinte de soif."
        }
      ],
      "recette": {
        "titre": "Sous la fourrure, une recette documentée",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "BrewDog a publié une recette rétrospective permettant d’identifier l’architecture de la bière, même si l’échelle industrielle et les détails de concentration ne se résument pas à un clone domestique.",
        "maltsEtCereales": [
          "Malt Extra Pale comme base documentée."
        ],
        "houblons": [
          "Nelson Sauvin.",
          "Centennial.",
          "Amarillo."
        ],
        "levuresEtMicroorganismes": [
          "Wyeast 3522 Belgian Ardennes dans la recette publiée par BrewDog."
        ],
        "ingredientsComplementaires": [
          "Orties fraîches des Highlands.",
          "Baies de genévrier.",
          "Taxidermie : uniquement présentation du contenant, jamais ingrédient."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "La recette BrewDog publiée indique un empâtage autour de 65 °C pendant 75 minutes.",
        "ebullitionEtHoublonnage": "Houblonnage selon la recette BrewDog ; la chronologie exacte doit être consultée dans la fiche originale pour toute reproduction.",
        "fermentation": "Fermentation haute de base belge, suivie d’un processus distinct de concentration à froid.",
        "maturation": "Concentration répétée par congélation à très basse température ; le procédé exact de l’édition commerciale n’est pas entièrement public.",
        "profilRecherche": "Une bière extrêmement concentrée où l’on sépare clairement la technique du liquide et la performance taxidermique du conditionnement."
      },
      "sources": [
        {
          "organisme": "BrewDog",
          "edition": null,
          "reference": "The End of History — article d’archive",
          "type": "source_producteur",
          "url": "https://www.brewdog.com/blog/the-end-of-history",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "BrewDog",
          "edition": null,
          "reference": "DIY Dog — recette The End of History",
          "type": "source_producteur",
          "url": "https://brewdogrecipes.com/recipes/the-end-of-history",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Paste Magazine",
          "edition": null,
          "reference": "BrewDog plans to bottle a 55% beer in taxidermy",
          "type": "source_presse",
          "url": "https://www.pastemagazine.com/drink/brewdog-plans-to-bottle-a-55-beer-in-a-taxidermy-s",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-009",
      "code": "C10-009",
      "nom": "Mamma Mia! Pizza Beer",
      "collectionId": 10,
      "nature": "Bière aromatisée / curiosité culinaire",
      "parentPrincipalId": null,
      "aliases": [
        "Pizza Beer"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Pizza Beer Company, Illinois",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.6,
        "max": 4.6,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Ambrée claire selon les descriptions disponibles"
      },
      "fermentation": {
        "type": "Non documentée avec précision",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "La bière qui a demandé à la pizza Margherita de quitter son assiette pour participer au brassage : tomate, ail, basilic, origan et pâte de blé ont été décrits dans l’ancienne recette du producteur. Une pizzeria familiale transformée en annexe du mash tun.",
      "histoireEtOrigines": `Mamma Mia! Pizza Beer est née dans l’Illinois chez Tom et Athena Seefurth, autour d’une idée aussi simple qu’indéfendable face à un puriste : faire entrer les saveurs d’une pizza dans une bière. Le produit a acquis une célébrité Internet durable avant de disparaître du marché, ce qui a laissé derrière lui plus de récits que de bouteilles fraîches.

L’ancienne description du producteur, reproduite par BeerAdvocate, est plus précise que la simple légende : une pizza Margherita composée notamment de croûte de blé, tomate, origan, basilic et ail était immergée dans le mash comme un grand sachet d’infusion, puis retirée. Le liquide filtré poursuivait son chemin vers la cuve d’ébullition avec houblons et épices.

La prudence reste nécessaire : cette documentation est archivistique et secondaire aujourd’hui, mais elle est suffisamment détaillée pour distinguer la vraie méthode rapportée de l’image simpliste d’une part de pizza flottant éternellement dans une bouteille.`,
      "chapitres": [
        {
          "titre": "La Margherita en sachet de thé",
          "texte": "Le procédé rapporté est presque culinaire : la pizza n’est pas destinée à survivre intacte au brassage. Elle sert de matrice d’extraction dans le mash, puis elle est retirée. Tomate, ail et herbes deviennent ainsi des composés aromatiques du moût plutôt qu’une garniture finale avec mozzarella filante sur la mousse."
        },
        {
          "titre": "Une bière disparue, une recette qui survit",
          "texte": "Mamma Mia! n’est plus un produit courant. Sa place dans la collection vient aussi de cette condition de curiosité perdue : elle existe désormais surtout par des archives, des fiches de dégustation et les souvenirs d’une époque où la scène craft découvrait qu’Internet récompensait très efficacement les idées impossibles à expliquer en une phrase sobre."
        }
      ],
      "recette": {
        "titre": "Le four à pizza rencontre la cuve",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "La méthode historique du producteur est connue par des archives reprises dans des fiches secondaires ; les dosages et paramètres complets ne sont pas disponibles.",
        "maltsEtCereales": [
          "Base de malt non documentée avec précision.",
          "Croûte de pizza de blé intégrée à la préparation Margherita selon l’ancienne description du producteur."
        ],
        "houblons": [
          "Houblons ajoutés après la phase d’extraction de la pizza ; variétés et doses non publiées de façon fiable."
        ],
        "levuresEtMicroorganismes": [
          "Levure et schéma de fermentation non documentés avec précision."
        ],
        "ingredientsComplementaires": [
          "Tomate.",
          "Ail.",
          "Basilic.",
          "Origan.",
          "Pizza Margherita utilisée comme support d’extraction selon l’ancienne description du producteur."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "La pizza est décrite comme immergée dans le mash à la manière d’un sachet d’infusion puis retirée avant la suite du brassage.",
        "ebullitionEtHoublonnage": "Le liquide issu de cette extraction rejoint la cuve d’ébullition avec houblons et épices ; calendrier exact inconnu.",
        "fermentation": "Conduite détaillée de fermentation non publiée ; ne pas inventer températures, densités ou durée.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une bière réellement inspirée de la pizza, documentée sans transformer chaque légende de blog en ingrédient certain."
      },
      "sources": [
        {
          "organisme": "BeerAdvocate",
          "edition": null,
          "reference": "Mamma Mia! Pizza Beer — fiche et ancienne description du producteur",
          "type": "source_archive_secondaire",
          "url": "https://www.beeradvocate.com/beer/profile/16836/41127/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Punch",
          "edition": null,
          "reference": "The rise and fall of Mamma Mia Pizza Beer",
          "type": "source_presse",
          "url": "https://punchdrink.com/articles/rise-and-fall-mamma-mia-pizza-beer-chicago/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-010",
      "code": "C10-010",
      "nom": "Saison dell'Aragosta",
      "collectionId": 10,
      "nature": "Bière expérimentale / farmhouse ale",
      "parentPrincipalId": null,
      "aliases": [
        "Lobster Beer"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Oxbow Brewing Company, Maine / collaboration Birrificio del Ducato",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 4.5,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Blonde / farmhouse ale"
      },
      "fermentation": {
        "type": "Mixte / farmhouse ale",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une farmhouse ale du Maine brassée avec des homards vivants et du sel marin. L’accord bière-fruits de mer a cessé d’être un accord : le crustacé a obtenu un badge d’accès à la brasserie.",
      "histoireEtOrigines": `Saison dell’Aragosta naît chez Oxbow dans le Maine en collaboration avec Birrificio del Ducato. La brasserie la décrit aujourd’hui comme une farmhouse ale vieillie en cuve inox, brassée avec du homard du Maine et du sel marin. L’identité côtière n’est donc pas un simple dessin de phare sur l’étiquette : elle entre effectivement dans le processus.

La bière se situe autour de 4,5 % ABV et Oxbow la classe dans son univers de fermentations mixtes. L’idée du homard vivant attire évidemment toute la lumière, mais le sel marin est tout aussi important pour comprendre la cohérence gastronomique du projet : saline, littorale et sèche plutôt que caricaturalement « goût de crustacé ».

C’est une curiosité qui ressemble moins à un défi que certaines cartes voisines : dans un port du Maine, le homard est extravagant dans la cuve mais parfaitement logique dans le paysage.`,
      "chapitres": [
        {
          "titre": "Le homard n’est pas une mascotte",
          "texte": "Oxbow présente explicitement le homard comme ingrédient de brassage. Il ne faut donc ni minimiser l’information en simple accord culinaire, ni inventer son impact sensoriel exact. La chair, les minéraux et le contexte marin peuvent participer à l’équilibre, mais la documentation publique ne transforme pas la bière en bisque pétillante."
        },
        {
          "titre": "Farmhouse ale, mais avec marée haute",
          "texte": "Le mot « saison » du nom est souvent utilisé pour la décrire, mais la fiche actuelle d’Oxbow parle plus largement de farmhouse ale à fermentation mixte. Cette précision est utile : la singularité de la bière n’annule pas son architecture brassicole, elle la déplace vers une lecture de terroir côtier très littérale."
        }
      ],
      "recette": {
        "titre": "Le brassin qui a pris le large",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Farmhouse ale à fermentation mixte, 4,5 % ABV, documentée par Oxbow avec homard du Maine et sel marin.",
        "maltsEtCereales": [
          "Céréales de base non détaillées dans la fiche publique actuelle."
        ],
        "houblons": [
          "Houblons et amertume non détaillés par Oxbow dans la fiche publique retenue."
        ],
        "levuresEtMicroorganismes": [
          "Fermentation mixte annoncée par Oxbow ; composition microbienne non publiée."
        ],
        "ingredientsComplementaires": [
          "Homard vivant du Maine utilisé pendant le brassage.",
          "Sel marin."
        ],
        "profilEau": "Eau de brassage non documentée ; la dimension saline est apportée au moins en partie par le sel marin ajouté.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation mixte de farmhouse ale ; paramètres détaillés non publiés.",
        "maturation": "Vieillissement en acier inoxydable annoncé par Oxbow.",
        "profilRecherche": "Une bière sèche et littorale dont la bizarrerie est réellement culinaire sans être transformée en soupe de homard gazeuse."
      },
      "sources": [
        {
          "organisme": "Oxbow Brewing Company",
          "edition": null,
          "reference": "Saison dell’Aragosta",
          "type": "source_producteur",
          "url": "https://oxbowbeer.com/beer/saison-dellaragosta/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Atlas Obscura",
          "edition": null,
          "reference": "Lobster Beer",
          "type": "source_secondaire",
          "url": "https://www.atlasobscura.com/foods/lobster-beer",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-011",
      "code": "C10-011",
      "nom": "Beer Geek Brunch Weasel",
      "collectionId": 10,
      "nature": "Imperial stout expérimental",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Danemark"
      ],
      "origine": {
        "libelle": "Mikkeller",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 10.9,
        "max": 10.9,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": 65,
        "max": 65,
        "unite": "IBU",
        "statut": "exact"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Noire / imperial oatmeal stout"
      },
      "fermentation": {
        "type": "Haute",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Un imperial oatmeal stout au cà phê Chồn vietnamien, café produit à partir de grains passés par le système digestif de civettes. Le brunch devient une dissertation sur le luxe, la fermentation et la trajectoire très personnelle d’un grain de café.",
      "histoireEtOrigines": `Beer Geek Brunch Weasel appartient à la famille de stouts massifs qui ont rendu Mikkeller célèbre. Sa singularité vient du cà phê Chồn, café vietnamien associé au passage des grains dans le système digestif de civettes avant collecte, nettoyage, torréfaction et infusion. La bière affiche 10,9 % ABV ; les fiches de référence la placent autour de 65 IBU.

Le procédé du café de civette est souvent vendu sous le vocabulaire du rare et du précieux, mais il soulève aussi des questions éthiques lorsque les animaux sont maintenus en captivité pour produire davantage. Mikkeller a communiqué sur la recherche d’un approvisionnement plus responsable, rappelant qu’un ingrédient spectaculaire possède parfois une histoire moins photogénique que son prix au kilo.

Dans le verre, le café est un ingrédient brassicole ; la civette, elle, reste en amont de la chaîne.`,
      "chapitres": [
        {
          "titre": "Le café a déjà fait un voyage",
          "texte": "Le grain n’est évidemment pas ajouté à la bière directement à la sortie de l’animal. Les grains sont récupérés, nettoyés, transformés puis torréfiés avant d’être employés comme café. Ce détour biologique est ce qui fonde la réputation du cà phê Chồn et donne à la bière son statut de curiosité."
        },
        {
          "titre": "Le luxe qui oblige à regarder la filière",
          "texte": "Comme pour le kopi luwak, la demande pour les cafés digérés peut encourager des systèmes d’élevage discutables. Une fiche encyclopédique gagne donc à dépasser l’effet « beurk chic » : le caractère insolite d’un ingrédient n’efface ni sa chaîne d’approvisionnement ni les questions de bien-être animal."
        }
      ],
      "recette": {
        "titre": "Un brunch noir à 10,9 %",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Imperial/oatmeal stout au café vietnamien cà phê Chồn. La base précise reste partiellement propriétaire.",
        "maltsEtCereales": [
          "Base d’imperial oatmeal stout : présence d’avoine documentée par la désignation de la bière ; composition complète des malts non publiée dans les sources retenues."
        ],
        "houblons": [
          "Amertume annoncée autour de 65 IBU ; variétés de houblons non établies ici."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale de stout ; souche et conduite détaillée non publiées."
        ],
        "ingredientsComplementaires": [
          "Café vietnamien cà phê Chồn issu de grains passés par des civettes puis nettoyés et torréfiés."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation haute d’un stout fort ; paramètres non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Un imperial stout dense au café dont la curiosité vient de la filière du grain, sans transformer l’animal en ingrédient direct."
      },
      "sources": [
        {
          "organisme": "Mikkeller",
          "edition": null,
          "reference": "Beer Geek Brunch Weasel — histoire du café",
          "type": "source_producteur",
          "url": "https://www.mikkeller.com/news/20130919beer-geek-brunch-weasel",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Beer Galaxy",
          "edition": null,
          "reference": "Mikkeller Beer Geek Brunch Weasel",
          "type": "source_secondaire",
          "url": "https://beer-galaxy.com/beers/mikkeller-beer-geek-brunch-weasel/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-012",
      "code": "C10-012",
      "nom": "Voodoo Doughnut Bacon Maple Ale",
      "collectionId": 10,
      "nature": "Ale aromatisée / bière-dessert",
      "parentPrincipalId": null,
      "aliases": [
        "Rogue Voodoo Doughnut Bacon Maple Ale"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Rogue Ales / Voodoo Doughnut",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.6,
        "max": 5.6,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": 30,
        "max": 30,
        "unite": "IBU",
        "statut": "exact"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Ambrée fumée"
      },
      "fermentation": {
        "type": "Haute",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Le donut bacon-érable de Voodoo Doughnut transposé en bière : plusieurs malts fumés, vrai bacon fumé au pommier et érable. Un petit-déjeuner de diner américain a trouvé un fermenteur et personne ne l’a arrêté à temps.",
      "histoireEtOrigines": `Rogue Ales a collaboré avec Voodoo Doughnut pour transformer plusieurs pâtisseries emblématiques de Portland en bières. Bacon Maple Ale est la plus immédiatement lisible : un donut sucré-salé devient le cahier des charges d’une ale à 5,6 % et 30 IBU.

Les fiches détaillées de la bière sont étonnamment bavardes. Elles citent plusieurs malts fumés — merisier, hêtre et fumage maison au hickory — aux côtés de malts plus conventionnels, du bacon fumé au bois de pommier, un arôme d’érable, des houblons Rogue et la levure Pacman de la brasserie.

Le résultat conceptuel n’est donc pas un simple sirop ajouté à une amber ale : le fumé est construit à plusieurs étages, comme un diner qui aurait embauché un malteur.`,
      "chapitres": [
        {
          "titre": "Trois fumées avant le bacon",
          "texte": "La recette documentée empile des malts fumés au merisier, au hêtre et au hickory. Le bacon n’arrive qu’ensuite. Cette architecture explique pourquoi la bière est plus intéressante techniquement que la caricature « bière au donut » : le brasseur reconstruit les marqueurs du petit-déjeuner par couches de matière première."
        },
        {
          "titre": "Sucré-salé, mais brassé",
          "texte": "L’érable apporte l’imaginaire pâtissier tandis que le bacon et les malts fumés portent le versant salé/fumé. À 30 IBU, le houblon n’est pas absent, mais il joue davantage le rôle de contrepoids que de vedette. C’est une bière de concept très américaine, où la recette assume le mauvais goût visuel tout en restant pensée comme un équilibre."
        }
      ],
      "recette": {
        "titre": "Le donut démonté ingrédient par ingrédient",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Rogue a publié une composition suffisamment détaillée pour comprendre la construction de la bière sans prétendre connaître tous les dosages.",
        "maltsEtCereales": [
          "Briess Cherrywood Smoked Malt.",
          "Weyermann Beechwood Smoked Malt.",
          "Malt fumé au hickory par Rogue.",
          "Great Western 2-Row.",
          "Munich.",
          "Crystal 15.",
          "Crystal 75."
        ],
        "houblons": [
          "Houblons Rogue Farms annoncés ; variétés/doses selon la fiche commerciale, pour environ 30 IBU."
        ],
        "levuresEtMicroorganismes": [
          "Rogue Pacman Yeast."
        ],
        "ingredientsComplementaires": [
          "Bacon fumé au bois de pommier.",
          "Arôme d’érable pur selon la description de produit."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation haute avec Pacman ; températures détaillées non retenues comme recette publique reproductible.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Reconstituer le donut bacon-érable en langage malt, fumée, sel et sucre plutôt qu’en versant simplement un petit-déjeuner dans une pinte."
      },
      "sources": [
        {
          "organisme": "BeerAdvocate",
          "edition": null,
          "reference": "Voodoo Doughnut Bacon Maple Ale — composition et données",
          "type": "source_secondaire",
          "url": "https://www.beeradvocate.com/beer/profile/132/72720/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "CraftShack",
          "edition": null,
          "reference": "Rogue Voodoo Doughnut Bacon Maple Ale — fiche produit",
          "type": "source_commerciale",
          "url": "https://craftshack.com/products/rogue-voodoo-doughnut-bacon-maple-ale",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-013",
      "code": "C10-013",
      "nom": "Cave Creek Chili Beer",
      "collectionId": 10,
      "nature": "Lager aromatisée / curiosité de conditionnement",
      "parentPrincipalId": null,
      "aliases": [
        "Crazy Ed's Cave Creek Chili Beer"
      ],
      "paysOrigine": [
        "États-Unis",
        "Mexique"
      ],
      "origine": {
        "libelle": "Crazy Ed's / Cave Creek",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.7,
        "max": 4.7,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Lager claire"
      },
      "fermentation": {
        "type": "Basse",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une lager claire rendue immédiatement suspecte par un piment serrano entier visible dans la bouteille. Aucun laboratoire secret : le piège est vert, long, et vous regarde avant même l’ouverture.",
      "histoireEtOrigines": `Cave Creek Chili Beer s’est taillé une réputation durable grâce à un dispositif d’une simplicité marketing presque parfaite : placer un piment serrano entier dans chaque bouteille. Là où d’autres bières insolites ont besoin de trois paragraphes de microbiologie, celle-ci tient dans une silhouette verte derrière le verre.

La base est décrite comme une lager claire d’inspiration mexicaine autour de 4,7 % ABV. Les détails de malt, de houblon et de levure sont beaucoup moins documentés que le piment, ce qui dit quelque chose de la hiérarchie du projet : le consommateur achète d’abord l’expérience du serrano.

Cette transparence visuelle est aussi son intérêt encyclopédique. Le bizarre n’est pas caché dans une souche ou un procédé ; il flotte littéralement dans le contenant.`,
      "chapitres": [
        {
          "titre": "Le piment comme avertissement intégré",
          "texte": "L’ajout d’un piment entier dans la bouteille prolonge le contact avec la bière après le brassage. Capsaïcine, arômes végétaux et perception de chaleur peuvent donc évoluer avec le temps et le lot. Sans protocole producteur détaillé, il serait hasardeux de promettre une intensité précise : le piment est visible, son effet exact reste une expérience."
        },
        {
          "titre": "Une recette presque cachée derrière un objet",
          "texte": "La célébrité de Cave Creek repose davantage sur le conditionnement que sur une architecture de lager documentée. C’est justement une leçon utile : une bière peut devenir iconique par un geste de service ou de packaging, sans inventer une nouvelle famille de fermentation."
        }
      ],
      "recette": {
        "titre": "Une lager, puis un serrano entier",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Lager claire à 4,7 % dont la spécificité la mieux documentée est le piment entier placé dans le contenant.",
        "maltsEtCereales": [
          "Base de lager claire ; céréales et proportions non publiées avec précision."
        ],
        "houblons": [
          "Houblonnage non documenté avec précision."
        ],
        "levuresEtMicroorganismes": [
          "Fermentation basse cohérente avec la lager annoncée ; souche non publiée."
        ],
        "ingredientsComplementaires": [
          "Un piment serrano entier dans chaque bouteille selon les descriptions historiques du produit."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation basse de la lager avant conditionnement avec le piment ; paramètres non publiés.",
        "maturation": "Le contact avec le serrano se poursuit dans le contenant ; durée de garde recommandée non documentée.",
        "profilRecherche": "Une lager simple dont l’expérience est volontairement dominée par un piment entier, sans inventer le reste de la recette."
      },
      "sources": [
        {
          "organisme": "Phoenix New Times",
          "edition": null,
          "reference": "Brew Review: Cave Creek’s Chili Beer",
          "type": "source_presse",
          "url": "https://www.phoenixnewtimes.com/food-drink/brew-review-cave-creeks-chili-beer-6522123/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Untappd",
          "edition": null,
          "reference": "Crazy Ed’s Cave Creek Chili Beer",
          "type": "source_secondaire",
          "url": "https://untappd.com/b/black-mountain-brewing-company-crazy-ed-s-cave-creek-chili-beer/2095562",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-014",
      "code": "C10-014",
      "nom": "Un, Kono Kuro",
      "collectionId": 10,
      "nature": "Stout au café expérimental",
      "parentPrincipalId": null,
      "aliases": [
        "うん、この黒",
        "Un Kono Kuro"
      ],
      "paysOrigine": [
        "Japon"
      ],
      "origine": {
        "libelle": "Sankt Gallen Brewery",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6.5,
        "max": 6.5,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": 28,
        "max": 28,
        "unite": "IBU",
        "statut": "exact"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Noire / stout"
      },
      "fermentation": {
        "type": "Haute",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une stout japonaise au Black Ivory Coffee, café dont les grains ont traversé le système digestif d’éléphants. La brasserie a transformé un poisson d’avril en vrai produit limité, avec une recette beaucoup plus sérieuse que son nom malicieusement scatologique.",
      "histoireEtOrigines": `Sankt Gallen a lancé Un, Kono Kuro en 2013 autour du Black Ivory Coffee, café de luxe produit en Thaïlande à partir de grains consommés puis excrétés par des éléphants. La bière a été annoncée un 1er avril, mais elle existait réellement — un détail qui résume assez bien l’esprit de cette collection.

La documentation de la brasserie est précise : 6,5 % ABV, 28 IBU, plusieurs malts allant du Pale Ale au Roasted Barley, Chinook et Cascade, puis ajout de café Black Ivory moulu pendant la maturation dans une logique d’extraction à froid.

Au Japon, l’ajout de café peut également faire basculer la classification légale du produit hors de la catégorie stricte de « beer » selon sa formulation. L’anomalie est donc à la fois digestive, brassicole et réglementaire.`,
      "chapitres": [
        {
          "titre": "L’éléphant est en amont, pas dans la cuve",
          "texte": "Comme pour le café de civette, le passage digestif intervient dans la production du café, pas dans le brassage direct. Les grains sont récupérés, nettoyés, séchés, torréfiés puis moulus. La stout reçoit le café transformé ; elle ne reçoit ni bouse d’éléphant ni ingrédient animal brut."
        },
        {
          "titre": "Un poisson d’avril qui connaissait ses malts",
          "texte": "La recette publiée par Sankt Gallen tranche avec le caractère farceur du lancement : Pale Ale, Munich, deux Crystal, Chocolate, Black et Roasted Barley forment une base noire structurée. Le café est ajouté à froid en maturation, choix logique pour extraire l’aromatique sans soumettre le grain à une longue ébullition."
        }
      ],
      "recette": {
        "titre": "La blague japonaise est étonnamment précise",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Stout au Black Ivory Coffee documenté à 6,5 % et 28 IBU par Sankt Gallen.",
        "maltsEtCereales": [
          "Pale Ale Malt.",
          "Munich Malt.",
          "Crystal 20L.",
          "Crystal 80L.",
          "Chocolate Malt.",
          "Black Malt.",
          "Roasted Barley."
        ],
        "houblons": [
          "Chinook.",
          "Cascade."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale ; souche exacte non mise en avant dans la documentation retenue."
        ],
        "ingredientsComplementaires": [
          "Black Ivory Coffee moulu, produit à partir de grains passés par des éléphants puis transformés comme café."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Brassage d’une stout classique avec Chinook et Cascade ; calendrier détaillé non nécessairement public.",
        "fermentation": "Fermentation haute puis maturation aromatique au café.",
        "maturation": "Le café moulu est ajouté au tank de maturation dans un procédé comparé par la brasserie à une extraction froide.",
        "profilRecherche": "Une vraie stout au café de luxe dont le récit digestif reste dans la filière du café plutôt que d’être transformé en fausse recette scatologique."
      },
      "sources": [
        {
          "organisme": "Sankt Gallen Brewery",
          "edition": null,
          "reference": "Un, Kono Kuro / Black Ivory Coffee beer — communiqué et recette",
          "type": "source_producteur",
          "url": "https://www.sanktgallenbrewery.com/unkonokuro/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Brookston Beer Bulletin",
          "edition": null,
          "reference": "Beer brewed with elephant dung coffee",
          "type": "source_secondaire",
          "url": "https://brookstonbeerbulletin.com/beer-brewed-with-elephant-dung/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-015",
      "code": "C10-015",
      "nom": "Fossil Fuels / Jurassic Saison",
      "collectionId": 10,
      "nature": "Bière expérimentale / levure ancienne revendiquée",
      "parentPrincipalId": null,
      "aliases": [
        "Fossil Fuels Brewing",
        "Jurassic Saison"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Fossil Fuels Brewing Company / travaux de Raul Cano",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Variable selon les brassins Fossil Fuels"
      },
      "fermentation": {
        "type": "Haute / souche ancienne revendiquée",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une bière bâtie autour d’une souche de Saccharomyces revendiquée comme réveillée depuis de l’ambre vieux de dizaines de millions d’années. La promesse est jurassique ; la bonne encyclopédie garde cependant un astérisque scientifique solidement vissé au dinosaure.",
      "histoireEtOrigines": `Fossil Fuels Brewing est liée aux travaux du microbiologiste Raul Cano, qui a publié dans les années 1990 des recherches sur des micro-organismes cultivés à partir d’inclusions d’ambre ancien. Des années plus tard, l’une de ces cultures de levure a été utilisée par le brasseur Peter Hackett pour produire des bières commercialisées sous l’imaginaire Fossil Fuels.

Le récit est irrésistible : ouvrir l’ambre, réveiller une levure préhistorique, lui donner du malt et écouter les dinosaures réclamer une tournée. Scientifiquement, l’âge et l’authenticité de micro-organismes « ressuscités » de matériaux très anciens restent un sujet discuté, notamment à cause du risque de contamination moderne et de la difficulté à démontrer une continuité biologique aussi spectaculaire.

ZythoHunt doit donc conserver la merveille sans la certitude abusive : la levure est revendiquée comme très ancienne et associée à l’ambre ; son âge exact n’est pas un fait à graver dans la roche.`,
      "chapitres": [
        {
          "titre": "Le ptérodactyle dans l’astérisque",
          "texte": "Une culture qui pousse en laboratoire ne prouve pas automatiquement l’âge que l’on attribue à son support. Les protocoles de stérilité, la génétique et la reproductibilité deviennent essentiels dès qu’une affirmation défie l’échelle habituelle de survie microbienne. C’est précisément ce qui rend le projet passionnant : il est à la frontière entre microbiologie réelle et récit extraordinaire."
        },
        {
          "titre": "Une levure fossile n’est pas un fossile dans la bière",
          "texte": "Le brassin ne contient pas de morceaux d’ambre ni d’insectes préhistoriques documentés comme ingrédients. L’élément revendiqué est une culture de levure issue d’un travail microbiologique. La bière reste composée d’un moût moderne ; c’est la généalogie supposée du micro-organisme qui constitue l’anomalie."
        }
      ],
      "recette": {
        "titre": "Brasser avec une revendication préhistorique",
        "profilUnique": false,
        "noteProfil": "Il s’agit d’un projet de fermentation fondé sur une souche revendiquée comme ancienne ; l’âge exact reste scientifiquement discuté.",
        "explicationProfil": "Les différentes bières Fossil Fuels ne constituent pas une recette unique. Le point commun documentaire est l’emploi d’une souche de Saccharomyces revendiquée comme très ancienne.",
        "maltsEtCereales": [
          "Moût moderne ; céréales et proportions variables ou non documentées selon la version."
        ],
        "houblons": [
          "Houblons non documentés comme signature commune à tous les brassins Fossil Fuels."
        ],
        "levuresEtMicroorganismes": [
          "Souche de Saccharomyces cerevisiae associée aux travaux de Raul Cano et revendiquée comme issue d’ambre ancien."
        ],
        "ingredientsComplementaires": [
          "Aucun morceau d’ambre n’est nécessairement un ingrédient du brassin ; l’ambre intervient dans l’histoire de l’isolat microbien."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation d’un moût moderne avec la culture revendiquée ancienne ; paramètres variables selon le brassin.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Raconter une fermentation archéomicrobiologique fascinante sans transformer une hypothèse d’âge en certitude de parc jurassique."
      },
      "sources": [
        {
          "organisme": "Wired",
          "edition": null,
          "reference": "Fossil Fuels — beer brewed with primordial yeast",
          "type": "source_presse_scientifique",
          "url": "https://www.wired.com/2009/07/ff-primordial-yeast/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "California Sun",
          "edition": null,
          "reference": "The beer made from 45-million-year-old yeast",
          "type": "source_secondaire",
          "url": "https://www.californiasun.co/the-beer-made-from-45-million-year-old-yeast/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-016",
      "code": "C10-016",
      "nom": "Bone Dusters Paleo Ale",
      "collectionId": 10,
      "nature": "Bière expérimentale / paléomicrobiologie",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Lost Rhino Brewing Company / Paleo Quest",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Ale ambrée selon les présentations disponibles"
      },
      "fermentation": {
        "type": "Haute / souche issue d’un fossile revendiquée",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une ale élaborée avec une levure présentée comme isolée sur un fossile de baleine. Ici, aucun os n’est réduit en poudre dans le mash : le musée fournit un micro-organisme, pas une épice paléontologique.",
      "histoireEtOrigines": `Bone Dusters Paleo Ale est née d’une collaboration entre Lost Rhino Brewing Company et Paleo Quest autour d’un fossile de cétacé. Les sources techniques secondaires décrivent une souche nommée Saccharomyces cerevisiae var. protocetus, isolée dans le contexte du fossile puis mise en culture pour le brassage.

La narration est évidemment spectaculaire : boire une bière « au fossile de baleine » semble annoncer une cuve remplie de vertèbres. La réalité est plus subtile et plus intéressante. Ce qui est utilisé est une culture microbienne, c’est-à-dire une descendance de cellules propagées, pas le fossile lui-même comme matière aromatique.

Comme pour Fossil Fuels, la datation et l’origine exacte d’une culture associée à un matériau ancien doivent être racontées avec prudence. La science gagne rarement à être servie avec un âge plus précis que ce qu’elle peut défendre.`,
      "chapitres": [
        {
          "titre": "Le musée passe par la boîte de Petri",
          "texte": "Le chemin documentaire est fossile → prélèvement → culture → sélection → propagation → fermenteur. Cette chaîne transforme une trouvaille de paléontologie en outil brassicole. Elle explique aussi pourquoi la bière n’a aucune raison de goûter l’os, la baleine ou la poussière de musée."
        },
        {
          "titre": "Paleo Ale, pas potion de résurrection",
          "texte": "L’intérêt de la carte tient à la question de la provenance de la levure, pas à une promesse sensorielle préhistorique. Les malts, houblons, alcool et profil final ne sont pas assez documentés pour reconstruire la bière. En revanche, l’expérience montre jusqu’où les brasseurs peuvent pousser la notion de terroir microbien : jusque dans une collection fossile."
        }
      ],
      "recette": {
        "titre": "Une levure sortie du musée",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Le style complet et les paramètres du brassin ne sont pas publiés de manière suffisante ; la culture microbienne constitue le fait central.",
        "maltsEtCereales": [
          "Base d’ale non documentée avec précision."
        ],
        "houblons": [
          "Houblons et amertume non documentés avec précision."
        ],
        "levuresEtMicroorganismes": [
          "Souche décrite comme Saccharomyces cerevisiae var. protocetus, liée au prélèvement sur un fossile de baleine dans les sources consacrées au projet."
        ],
        "ingredientsComplementaires": [
          "Le fossile est la source du prélèvement revendiqué, pas un ingrédient solide ajouté à la bière."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation avec la culture propagée ; températures, densités et durée non publiées.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une ale servant de véhicule à une expérience paléomicrobiologique, sans inventer un goût de fossile ou un âge absolu non démontré."
      },
      "sources": [
        {
          "organisme": "Craft Beer & Brewing",
          "edition": null,
          "reference": "Bone Dusters Paleo Ale",
          "type": "source_professionnelle",
          "url": "https://www.beerandbrewing.com/bone-dusters-paleo-ale",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Chemical & Engineering News",
          "edition": null,
          "reference": "Fossil-Infused Beer",
          "type": "source_scientifique_secondaire",
          "url": "https://cen.acs.org/articles/92/i17/Fossil-Infused-Beer-75-Million.html",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-017",
      "code": "C10-017",
      "nom": "Oyster Stout",
      "collectionId": 10,
      "nature": "Famille historique devenue curiosité brassicole",
      "parentPrincipalId": null,
      "aliases": [
        "Stout aux huîtres"
      ],
      "paysOrigine": [
        "Royaume-Uni",
        "États-Unis",
        "International"
      ],
      "origine": {
        "libelle": "Accord stout-huîtres britannique, puis interprétations brassées avec mollusques",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Noire / stout"
      },
      "fermentation": {
        "type": "Haute",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "L’étrangeté qui a fini par devenir presque respectable : certaines oyster stouts utilisent réellement coquilles, chair ou saumure d’huîtres. Au départ, stout et huîtres se fréquentaient simplement au pub ; un jour, quelqu’un a décidé que la table était trop loin de la cuve.",
      "histoireEtOrigines": `Les huîtres et le stout partagent une longue histoire de table en Grande-Bretagne. Au XIXe siècle, les mollusques étaient un aliment populaire et leur association avec les bières sombres est bien documentée. Le nom « oyster stout » a d’abord pu évoquer cet accord ou une bière destinée à accompagner les huîtres avant que des brasseurs n’intègrent réellement des coquilles, puis parfois des huîtres entières, au processus.

Aujourd’hui, la famille est extrêmement variable. Certaines recettes emploient seulement les coquilles pour leur apport minéral, d’autres la chair, la liqueur/saumure, ou une combinaison. Il n’existe donc pas une recette universelle que l’on pourrait attribuer à toutes les Oyster Stouts.

C’est la carte idéale pour montrer comment une anomalie peut se civiliser avec le temps : ce qui paraît absurde à première lecture est devenu une sous-tradition brassicole cohérente.`,
      "chapitres": [
        {
          "titre": "Avant la cuve, il y avait le comptoir",
          "texte": "L’accord gastronomique précède l’ingrédient. Stout torréfié, douceur du mollusque et salinité formaient déjà un couple de pub. L’étape suivante — mettre les huîtres dans le brassin — transforme une habitude de service en procédé. Cette chronologie évite le mythe d’un style ancestral immuable brassé aux coquillages depuis toujours."
        },
        {
          "titre": "Coquille, chair ou saumure : trois bières différentes",
          "texte": "Le mot Oyster Stout ne suffit pas à savoir ce qui a été utilisé. Les coquilles apportent surtout des minéraux et du carbonate de calcium ; la chair et la saumure introduisent d’autres composés. Chaque brasserie choisit son niveau de mollusque. Une fiche générique doit donc parler de famille, pas prétendre qu’une seule méthode serait la tradition officielle."
        }
      ],
      "recette": {
        "titre": "La famille aux coquilles multiples",
        "profilUnique": false,
        "noteProfil": "Oyster Stout est une famille d’interprétations : le type et la quantité d’huître varient fortement selon les brasseries.",
        "explicationProfil": "Base de stout sombre enrichie, selon les recettes, de coquilles, chair ou saumure d’huîtres.",
        "maltsEtCereales": [
          "Base typique de stout : malt pâle et céréales/malts torréfiés selon la recette choisie."
        ],
        "houblons": [
          "Houblonnage de stout variable ; aucune variété universelle n’est imposée par la présence d’huîtres."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale adaptée à la base stout."
        ],
        "ingredientsComplementaires": [
          "Coquilles d’huîtres possibles.",
          "Chair d’huître possible.",
          "Saumure ou liqueur d’huître possible selon la recette."
        ],
        "profilEau": "Le profil minéral peut être influencé par l’usage de coquilles ; le traitement d’eau reste propre à chaque brasserie.",
        "empatage": "Empâtage de stout classique ; certaines recettes ajoutent les coquilles plus tard plutôt qu’au mash.",
        "ebullitionEtHoublonnage": "De nombreuses recettes incorporent coquilles ou huîtres vers l’ébullition, mais le timing n’est pas universel.",
        "fermentation": "Fermentation haute de stout ; les huîtres ne définissent pas une fermentation distincte.",
        "maturation": "Maturation selon la base stout ; la fraîcheur et la stabilité de l’ingrédient marin imposent une hygiène rigoureuse.",
        "profilRecherche": "Une stout où le caractère marin complète le torréfié sans supposer qu’une méthode unique définit toutes les Oyster Stouts."
      },
      "sources": [
        {
          "organisme": "American Homebrewers Association",
          "edition": null,
          "reference": "Oyster Stout: tricks for brewing with mollusks",
          "type": "source_professionnelle",
          "url": "https://homebrewersassociation.org/how-to-brew/oyster-stout-tricks-brewing-mollusks/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "VinePair",
          "edition": null,
          "reference": "What is Oyster Stout?",
          "type": "source_secondaire",
          "url": "https://vinepair.com/articles/what-is-oyster-stout/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Bon Appétit",
          "edition": null,
          "reference": "Seafood beer and oyster stout",
          "type": "source_presse",
          "url": "https://www.bonappetit.com/drinks/beer/article/seafood-beer",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-018",
      "code": "C10-018",
      "nom": "Mangalitsa Pig Porter",
      "collectionId": 10,
      "nature": "Porter expérimental",
      "parentPrincipalId": null,
      "aliases": [
        "Pig Porter"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Right Brain Brewery, Michigan",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Noire / porter"
      },
      "fermentation": {
        "type": "Haute",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Un porter brassé avec de véritables têtes et os fumés de porc Mangalitsa. La fumée ne vient donc pas seulement d’un malt qui a vu un feu de loin : une partie de la charcuterie a obtenu son badge visiteur en brasserie.",
      "histoireEtOrigines": `Mangalitsa Pig Porter est l’une des curiosités les plus célèbres de Right Brain Brewery. La brasserie a utilisé des têtes et des os fumés de porc Mangalitsa, race connue pour son pelage laineux et sa viande riche, afin de construire une dimension fumée et carnée dans un porter sombre.

Le projet aurait pu rester une bravade de taproom ; il a au contraire reçu une médaille d’or dans la catégorie Experimental Beer au Great American Beer Festival 2011. Cette reconnaissance est intéressante parce qu’elle rappelle qu’« expérimental » n’est pas synonyme d’« aléatoire » : même avec un ingrédient qui ressemble à un inventaire de charcutier, le jury juge encore l’équilibre du produit.

Les détails complets de la base maltée et du dosage animal ne sont pas publics. L’os est documenté ; la recette au gramme près ne l’est pas.`,
      "chapitres": [
        {
          "titre": "Le fumoir a vraiment envoyé des pièces détachées",
          "texte": "Les sources consacrées à la bière insistent sur l’usage de têtes et d’os fumés, ce qui distingue Pig Porter d’une bière simplement aromatisée au bacon ou construite uniquement avec du malt fumé. La matière animale participe au procédé, mais cela ne permet pas de déduire automatiquement une saveur de bouillon ou de viande."
        },
        {
          "titre": "Le bizarre avec une médaille autour du cou",
          "texte": "La récompense du GABF 2011 donne à la bière un statut particulier dans la collection. Elle montre qu’une expérience spectaculaire peut être évaluée comme bière, avec des critères d’équilibre et d’exécution. Le cochon attire la caméra ; le porter doit encore tenir debout tout seul."
        }
      ],
      "recette": {
        "titre": "Le porter passé par le fumoir",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Porter expérimental utilisant de vraies pièces fumées de porc Mangalitsa ; la recette complète n’est pas publiée.",
        "maltsEtCereales": [
          "Base de porter sombre et maltée ; composition précise non documentée dans les sources retenues."
        ],
        "houblons": [
          "Houblons et amertume non documentés avec précision."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale de porter ; souche non publiée."
        ],
        "ingredientsComplementaires": [
          "Têtes et os de porc Mangalitsa fumés utilisés dans le brassage."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Étape exacte d’introduction des éléments fumés non suffisamment documentée pour être reproduite avec certitude.",
        "fermentation": "Fermentation haute d’un porter ; paramètres détaillés non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Un porter expérimental où l’ingrédient animal construit la signature fumée sans inventer des sensations que les sources ne décrivent pas de manière stable."
      },
      "sources": [
        {
          "organisme": "Right Brain Brewery",
          "edition": null,
          "reference": "Awards — Mangalitsa Pig Porter, GABF 2011",
          "type": "source_producteur",
          "url": "https://www.rightbrainbrewery.com/awards",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Brewbound",
          "edition": null,
          "reference": "Right Brain Brewery — Mangalitsa Pig Porter",
          "type": "source_professionnelle",
          "url": "https://www.brewbound.com/breweries/Right_Brain_Brewery/mangalitsa-pig-porter",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "BeerAdvocate",
          "edition": null,
          "reference": "Mangalitsa Pig Porter",
          "type": "source_secondaire",
          "url": "https://www.beeradvocate.com/beer/profile/16503/72900/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-019",
      "code": "C10-019",
      "nom": "Snake Venom",
      "collectionId": 10,
      "nature": "Bière extrême / produit fortifié",
      "parentPrincipalId": null,
      "aliases": [
        "Brewmeister Snake Venom"
      ],
      "paysOrigine": [
        "Écosse"
      ],
      "origine": {
        "libelle": "Brewmeister / Keith Brewery",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 67.5,
        "max": 67.5,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Non documentée de manière cohérente"
      },
      "fermentation": {
        "type": "Fermentation puis concentration / fortification revendiquée",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Un produit écossais affiché à 67,5 % ABV et régulièrement présenté comme une « bière la plus forte du monde ». À cette hauteur, la question la plus intéressante n’est plus de savoir si elle désaltère, mais où finit la bière et où commence l’alcool fortifié.",
      "histoireEtOrigines": `Snake Venom a été commercialisée par Brewmeister avec un titre alcoométrique de 67,5 %, valeur qui l’a propulsée dans les listes de records et les rayons de curiosités extrêmes. Les vendeurs avertissent généralement qu’elle doit être consommée en petites quantités et non comme une bière conventionnelle.

Le record est toutefois inséparable d’une question de définition. Des sources consacrées au produit décrivent des procédés de concentration et/ou l’ajout d’alcool, ce qui signifie que les 67,5 % ne proviennent pas d’une fermentation ordinaire. Appeler cela « la bière la plus forte » est donc une revendication commerciale qui dépend de la frontière choisie entre bière, bière concentrée et produit fortifié.

Dans ZythoHunt, cette ambiguïté n’est pas un défaut : c’est précisément la raison pour laquelle Snake Venom appartient à la collection.`,
      "chapitres": [
        {
          "titre": "Le serpent vit dans la définition",
          "texte": "Une levure de bière ne fermente pas spontanément un moût jusqu’à 67,5 % vol. Les alcools aussi élevés nécessitent une intervention après ou autour de la fermentation : concentration, distillation partielle, fortification ou combinaison. La prouesse n’est donc pas celle d’une levure invincible, mais celle d’un procédé hybride."
        },
        {
          "titre": "Record du monde, avec conditions générales",
          "texte": "Les titres de « bière la plus forte » changent avec le temps et selon ce que l’on accepte dans la catégorie. Une encyclopédie doit dater ou qualifier ces records plutôt que les transformer en couronne éternelle. Snake Venom reste remarquable par son chiffre revendiqué ; son statut taxonomique, lui, mérite le point d’interrogation."
        }
      ],
      "recette": {
        "titre": "Une bière qui franchit la frontière des spiritueux",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Le procédé complet n’est pas public et le produit est décrit comme concentré et/ou fortifié. Il ne faut pas présenter 67,5 % comme le résultat d’une fermentation classique.",
        "maltsEtCereales": [
          "Base maltée annoncée par les descriptions commerciales ; composition et densité initiale non publiées de manière fiable."
        ],
        "houblons": [
          "Houblons non documentés comme élément déterminant du produit."
        ],
        "levuresEtMicroorganismes": [
          "Levure de la base fermentée ; aucune souche ne suffit seule à expliquer 67,5 % ABV."
        ],
        "ingredientsComplementaires": [
          "Intervention de concentration et/ou fortification rapportée par les sources consacrées au produit."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Une fermentation produit la base, puis d’autres opérations sont nécessaires pour atteindre le titre revendiqué.",
        "maturation": "Procédé post-fermentation non publié avec assez de précision pour être reproduit ou catégorisé sans réserve.",
        "profilRecherche": "Documenter un objet brassicole extrême tout en rendant visible la frontière floue entre bière fermentée et produit alcoolique fortifié."
      },
      "sources": [
        {
          "organisme": "Hops & Hopes",
          "edition": null,
          "reference": "Brewmeister Snake Venom",
          "type": "source_commerciale",
          "url": "https://www.hopsandhopes.nl/en/beers/snake-venom",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Hard To Find Whisky",
          "edition": null,
          "reference": "Brewmeister Snake Venom — 67.5%",
          "type": "source_commerciale",
          "url": "https://www.htfw.com/brewmeister-snake-venom-world-s-strongest-beer",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Food & Wine",
          "edition": null,
          "reference": "Strongest beers and the question of fortification",
          "type": "source_presse",
          "url": "https://www.foodandwine.com/news/worlds-strongest-beer",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-020",
      "code": "C10-020",
      "nom": "Tactical Nuclear Penguin",
      "collectionId": 10,
      "nature": "Bière extrême / freeze-concentrated stout",
      "parentPrincipalId": null,
      "aliases": [
        "BrewDog Tactical Nuclear Penguin"
      ],
      "paysOrigine": [
        "Écosse"
      ],
      "origine": {
        "libelle": "BrewDog",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 32,
        "max": 32,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Noire / imperial stout concentré"
      },
      "fermentation": {
        "type": "Haute puis concentration par congélation",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Un imperial stout vieilli puis soumis à des cycles de congélation pour atteindre 32 % ABV. Le pingouin du nom n’est pas seulement une mascotte : le froid est littéralement l’outil qui pousse la bière au-delà de sa densité raisonnable.",
      "histoireEtOrigines": `Tactical Nuclear Penguin apparaît à la fin des années 2000 pendant la course aux bières les plus fortes. BrewDog part d’un imperial stout, le fait vieillir, puis concentre l’alcool par congélation répétée. À 32 %, le produit devient un manifeste technique et marketing : une stout qui a été passée plusieurs fois au congélateur jusqu’à perdre toute envie de se comporter comme une pinte.

BrewDog a ensuite publié une recette DIY détaillée. On y trouve Extra Pale, Dark Crystal, Chocolate et Roasted Barley, des houblons Chinook, Galena et First Gold, du sucre muscovado, cranberry, jasmin, copeaux de chêne et une levure très tolérante à l’alcool.

Le détail le plus utile reste la logique du procédé : l’alcool n’est pas produit jusqu’à 32 % par la seule levure. La congélation concentre une bière déjà fermentée.`,
      "chapitres": [
        {
          "titre": "Le congélateur comme alambic qui ne distille pas",
          "texte": "Lorsqu’une bière partiellement gèle, la phase solide est plus riche en eau tandis que le liquide restant se concentre en alcool et en composés dissous. Retirer la glace puis recommencer permet d’augmenter le titre. C’est la logique historique de l’Eisbock poussée jusqu’à une extrémité presque nucléaire."
        },
        {
          "titre": "Sous l’apocalypse, une vraie architecture de stout",
          "texte": "La recette publiée montre que BrewDog ne s’est pas contenté de congeler une bière quelconque. Malts torréfiés, houblons, sucre, fruits, jasmin et chêne construisent une base suffisamment robuste pour survivre à la concentration, car celle-ci amplifie aussi les défauts et les déséquilibres."
        }
      ],
      "recette": {
        "titre": "Le plan de vol du pingouin nucléaire",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "La recette rétrospective BrewDog documente la base et la logique de concentration, sans garantir que chaque détail industriel du lot commercial soit reproductible à domicile.",
        "maltsEtCereales": [
          "Extra Pale.",
          "Dark Crystal.",
          "Chocolate Malt.",
          "Roasted Barley."
        ],
        "houblons": [
          "Chinook.",
          "Galena.",
          "First Gold."
        ],
        "levuresEtMicroorganismes": [
          "WLP099 Super High Gravity Ale Yeast dans la recette publiée."
        ],
        "ingredientsComplementaires": [
          "Sucre muscovado.",
          "Cranberry.",
          "Jasmin.",
          "Copeaux de chêne."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Recette BrewDog : empâtage autour de 65 °C pendant 75 minutes.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation haute d’un stout très dense avant la phase de concentration.",
        "maturation": "Vieillissement puis cycles de congélation et retrait de glace afin de concentrer le liquide jusqu’au titre annoncé de 32 %.",
        "profilRecherche": "Un imperial stout conçu pour supporter la freeze concentration, et non une fermentation magique à 32 %."
      },
      "sources": [
        {
          "organisme": "BrewDog Recipes",
          "edition": null,
          "reference": "Tactical Nuclear Penguin — DIY Dog recipe",
          "type": "source_producteur",
          "url": "https://brewdogrecipes.com/recipes/tactical-nuclear-penguin",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "BeerTasting",
          "edition": null,
          "reference": "Tactical Nuclear Penguin",
          "type": "source_secondaire",
          "url": "https://www.beertasting.com/de/beers/tactical-nuclear-penguin",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-021",
      "code": "C10-021",
      "nom": "Beithir Fire",
      "collectionId": 10,
      "nature": "Bière extrême / bière fortifiée revendiquée",
      "parentPrincipalId": null,
      "aliases": [
        "Scottish Beithir Fire"
      ],
      "paysOrigine": [
        "Écosse"
      ],
      "origine": {
        "libelle": "88 Brewery",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 75,
        "max": 75,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Non documentée avec précision"
      },
      "fermentation": {
        "type": "Base fermentée puis fortification / traitement post-fermentation",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Beithir Fire revendique 75 % ABV à partir d’une base de barley ale et d’un assemblage avec un alcool écossais. Le dragon du nom est approprié : on n’est plus vraiment dans la bière de soif, et même la taxonomie commence à chercher un extincteur.",
      "histoireEtOrigines": `88 Brewery commercialise Beithir Fire comme un produit extrême à 75 % ABV et l’a présenté comme candidat au titre de bière la plus forte. La description publique évoque une base de barley ale puis une intervention d’alcool écossais, avec filtration ou traitement supplémentaire selon les versions de la communication.

Cette construction rend le produit fascinant pour une collection de frontières : la base est brassicole, mais le titre final ne vient évidemment pas d’une fermentation classique. Certaines couvertures de presse parlent également de distillation ou de statut fiscal proche d’un spiritueux, signe que la catégorie « bière » devient ici autant une question réglementaire que sensorielle.

Le bon récit n’est donc pas « une levure écossaise a atteint 75 % ». Le bon récit est celui d’un objet hybride qui utilise le mot bière comme point de départ, puis le pousse jusqu’à ce que le dictionnaire fume.`,
      "chapitres": [
        {
          "titre": "Soixante-quinze degrés ne sortent pas d’un fermenteur ordinaire",
          "texte": "Même les levures les plus tolérantes s’arrêtent bien avant ce niveau. Pour atteindre le chiffre revendiqué, il faut ajouter ou concentrer de l’alcool après la fermentation de la base. C’est cette opération qui transforme Beithir Fire en curiosité de frontière plutôt qu’en simple barley wine très musclé."
        },
        {
          "titre": "La catégorie est une partie du spectacle",
          "texte": "Les records reposent souvent sur des définitions différentes : bière concentrée, bière fortifiée, spiritueux dérivé d’une bière, produit composite. Beithir Fire mérite sa place précisément parce qu’elle oblige à poser la question. La réponse n’est pas un slogan ; elle dépend du procédé et du cadre réglementaire."
        }
      ],
      "recette": {
        "titre": "Une barley ale qui a traversé la douane des spiritueux",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Base de barley ale annoncée, ensuite fortifiée/traitée pour atteindre 75 % ABV. Les proportions et paramètres exacts ne sont pas publiés.",
        "maltsEtCereales": [
          "Base de barley ale ; malts et densités non publiés avec précision."
        ],
        "houblons": [
          "Houblons non documentés avec assez de précision."
        ],
        "levuresEtMicroorganismes": [
          "Levure fermentant la base de barley ale ; elle n’est pas responsable à elle seule du titre final."
        ],
        "ingredientsComplementaires": [
          "Spiritueux/alcool écossais ajouté ou intégré au procédé selon la description publique du producteur."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation de la base avant une phase de fortification ou de concentration distincte.",
        "maturation": "Traitement post-fermentation et filtration revendiqués ; protocole complet non public.",
        "profilRecherche": "Présenter un produit brassicole hybride à 75 % sans transformer un assemblage extrême en miracle de fermentation."
      },
      "sources": [
        {
          "organisme": "88 Brewery",
          "edition": null,
          "reference": "Beithir Fire — présentation producteur",
          "type": "source_producteur",
          "url": "https://www.88brewery.com/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "The Sun",
          "edition": null,
          "reference": "Beithir Fire and the strongest-beer claim",
          "type": "source_presse",
          "url": "https://www.thesun.co.uk/fabulous/30282896/worlds-strongest-beer-alcohol-taste/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-022",
      "code": "C10-022",
      "nom": "Celest-jewel-ale",
      "collectionId": 10,
      "nature": "Bière expérimentale / bière cosmique",
      "parentPrincipalId": null,
      "aliases": [
        "Dogfish Head Celest-jewel-ale"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Dogfish Head",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5,
        "max": 5,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": 25,
        "max": 25,
        "unite": "IBU",
        "statut": "exact"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Ambrée / inspiration Oktoberfest"
      },
      "fermentation": {
        "type": "Basse",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une Oktoberfest à 5 % et 25 IBU dans laquelle Dogfish Head a infusé de la poussière issue de météorites lunaires certifiées. La Bavière a donc reçu un caillou du ciel, soigneusement broyé avant service.",
      "histoireEtOrigines": `Dogfish Head a conçu Celest-jewel-ale autour de l’équinoxe d’automne, de la harvest moon et de son goût bien établi pour les expériences historiques ou improbables. Le point spectaculaire est documenté par la brasserie : de petites météorites lunaires certifiées ont été réduites en poussière puis utilisées dans une infusion comparable à un thé, ajoutée au brassin.

La bière reste pourtant fondamentalement une Oktoberfest maltée, annoncée à 5 % ABV et 25 IBU. La météorite n’a pas pour rôle de donner un parfum de vide intersidéral — aucune source sérieuse ne promet une note de cosmonaute — mais de transformer un objet de collection minéral en ingrédient narratif et technique.

C’est une forme rare d’insolite où l’ingrédient est extraordinaire surtout par sa provenance, pas par sa puissance aromatique.`,
      "chapitres": [
        {
          "titre": "La lune passe par une théière",
          "texte": "Dogfish Head décrit une infusion de poudre météoritique plutôt qu’une poignée de pierres abandonnées au fond de la cuve. Cette méthode permet d’extraire ce que le matériau peut céder au liquide tout en maîtrisant le procédé. Le geste rappelle une infusion minérale, avec un prix au gramme beaucoup moins sympathique qu’un sachet d’Earl Grey."
        },
        {
          "titre": "Un ingrédient qui vaut surtout par son adresse",
          "texte": "La poussière lunaire n’est pas un substitut de malt, de houblon ou de levure. Sa valeur est symbolique et géologique : il s’agit de matière identifiée comme météoritique lunaire. La bière devient ainsi un objet de médiation scientifique aussi inutile qu’irrésistible : le terroir s’étend brutalement jusqu’à la Lune."
        }
      ],
      "recette": {
        "titre": "Une Oktoberfest avec correspondance lunaire",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Base maltée de type Oktoberfest à 5 % et 25 IBU, complétée par une infusion de poussière météoritique lunaire selon Dogfish Head.",
        "maltsEtCereales": [
          "Base maltée d’Oktoberfest ; composition détaillée non publiée dans les sources retenues."
        ],
        "houblons": [
          "Houblonnage total annoncé à 25 IBU ; variétés et calendrier non détaillés ici."
        ],
        "levuresEtMicroorganismes": [
          "Fermentation basse cohérente avec la base Oktoberfest annoncée ; souche non publiée."
        ],
        "ingredientsComplementaires": [
          "Météorites lunaires certifiées, broyées puis infusées comme un thé selon Dogfish Head."
        ],
        "profilEau": "Profil d’eau non publié ; l’infusion minérale constitue l’ajout inhabituel documenté.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation basse d’une base Oktoberfest ; paramètres détaillés non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une bière maltée classique dont l’anomalie vient d’un matériau extraterrestre réellement documenté, sans lui inventer un goût de poussière d’étoile."
      },
      "sources": [
        {
          "organisme": "Dogfish Head",
          "edition": null,
          "reference": "Celest-jewel-ale",
          "type": "source_producteur",
          "url": "https://www.dogfish.com/drink/beer/celest-jewel-ale",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Dogfish Head",
          "edition": null,
          "reference": "Celest-jewel-ale brewed with moon dust",
          "type": "source_producteur",
          "url": "https://www.dogfish.com/blogfish/celest-jewel-ale-brewed-moon-dust-served-space-suit-can-coolers",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-023",
      "code": "C10-023",
      "nom": "Space Barley",
      "collectionId": 10,
      "nature": "Bière expérimentale / agriculture spatiale",
      "parentPrincipalId": null,
      "aliases": [
        "Sapporo Space Barley"
      ],
      "paysOrigine": [
        "Japon"
      ],
      "origine": {
        "libelle": "Sapporo Breweries / Okayama University / Russian Academy of Sciences",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Blonde / lager expérimentale"
      },
      "fermentation": {
        "type": "Non documentée avec précision",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une bière brassée non pas avec une poignée de grains revenus directement de l’ISS, mais avec la descendance d’orge dont une génération avait passé environ cinq mois en orbite. Le pedigree est spatial ; le grain du verre, lui, a grandi sur Terre.",
      "histoireEtOrigines": `Le projet Space Barley s’inscrit dans une recherche sur la capacité de cultures terrestres à supporter l’environnement spatial. De l’orge Haruna Nijo a séjourné environ cinq mois dans le module Zvezda de la Station spatiale internationale en 2006. Les graines revenues sur Terre ont ensuite servi à produire des générations descendantes.

Sapporo a brassé une bière expérimentale avec cette lignée, puis a organisé une vente très limitée au Japon. La formulation populaire « bière brassée avec de l’orge de l’espace » est donc vraie dans l’esprit mais mérite une précision généalogique : ce n’est pas nécessairement le grain ayant flotté en orbite qui est malté, mais sa descendance terrestre.

Cette nuance rend l’histoire plus intéressante : Space Barley parle autant de sélection, de reproduction et d’agriculture future que de marketing cosmique.`,
      "chapitres": [
        {
          "titre": "Le grain a un grand-parent astronaute",
          "texte": "La chaîne expérience spatiale → retour des semences → culture sur Terre → descendance → brassage est essentielle. Elle permet d’étudier la stabilité et la viabilité de la lignée sans sacrifier tout le matériel spatial dans une seule cuve. La bière devient le produit final visible d’un programme agronomique."
        },
        {
          "titre": "Une bière de laboratoire devenue loterie",
          "texte": "Les premiers lots ont été extrêmement limités et distribués dans un cadre promotionnel/lotterie au Japon, avec une dimension caritative ou scientifique autour de l’université partenaire. Le produit n’a jamais été une nouvelle lager standard de supermarché : son rareté fait partie de son identité."
        }
      ],
      "recette": {
        "titre": "Le malt dont l’arbre généalogique passe par l’ISS",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "La donnée certaine est l’emploi de descendants d’une orge ayant séjourné dans l’espace ; les autres paramètres du brassin sont beaucoup moins publiés.",
        "maltsEtCereales": [
          "Orge issue de la descendance d’une lignée Haruna Nijo ayant séjourné environ cinq mois à bord de l’ISS."
        ],
        "houblons": [
          "Houblons non documentés avec assez de précision pour la version expérimentale."
        ],
        "levuresEtMicroorganismes": [
          "Levure non documentée dans les sources retenues."
        ],
        "ingredientsComplementaires": [
          "Aucun ingrédient spatial supplémentaire n’est documenté : l’anomalie est la généalogie de l’orge."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Procédé de fermentation non publié avec suffisamment de précision.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une bière servant de vitrine à une expérience d’agriculture spatiale, sans prétendre que le verre possède un arôme orbital."
      },
      "sources": [
        {
          "organisme": "Wired",
          "edition": null,
          "reference": "Sapporo Space Barley beer",
          "type": "source_presse",
          "url": "https://www.wired.com/2009/12/barley-space-space-beer",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Universe Today",
          "edition": null,
          "reference": "Space Beer available to a limited number of buyers",
          "type": "source_presse_scientifique",
          "url": "https://www.universetoday.com/articles/space-beer-available-for-purchase-to-250-people",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-024",
      "code": "C10-024",
      "nom": "Kwispelbier",
      "collectionId": 10,
      "nature": "Boisson maltée sans alcool pour chiens",
      "parentPrincipalId": null,
      "aliases": [
        "Beer for dogs"
      ],
      "paysOrigine": [
        "Pays-Bas"
      ],
      "origine": {
        "libelle": "Terrie Berenden / brasserie locale néerlandaise",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 0,
        "max": 0,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Boisson maltée claire à ambrée selon les présentations"
      },
      "fermentation": {
        "type": "Sans alcool / procédé non détaillé",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une « bière » destinée aux chiens, élaborée à base de malt et d’extrait de bœuf, sans alcool. Le compagnon de promenade obtient son rituel de fin de journée ; il lui manque seulement l’application de notation et une opinion interminable sur la mousse.",
      "histoireEtOrigines": `Kwispelbier a été créée aux Pays-Bas par Terrie Berenden, propriétaire d’une animalerie, avec l’idée d’offrir une boisson spéciale à ses chiens après des sorties de chasse. Le nom vient du néerlandais « kwispel », lié au mouvement de la queue, ce qui est probablement l’une des rares étymologies brassicoles que l’on peut vérifier sans dictionnaire de vieux moines.

Les articles de l’époque décrivent une boisson à base de malt et d’extrait de bœuf, sans alcool, conçue pour les chiens. Elle emprunte donc l’imaginaire social de la bière — bouteille, moment partagé, récompense — plus qu’elle ne cherche à reproduire une vraie bière humaine avec houblon et fermentation complète.

Sa place dans la collection repose sur ce déplacement de public : l’anomalie n’est pas ce que boit le chien, mais le fait qu’on ait choisi de l’appeler bière.`,
      "chapitres": [
        {
          "titre": "Le dégustateur idéal remue la queue",
          "texte": "Kwispelbier n’est pas une bière destinée aux humains et ne doit pas être évaluée comme une lager sans alcool. Son cahier des charges est animalier : absence d’alcool, ingrédients adaptés au produit et attractivité pour le chien. La comparaison avec la bière est d’abord culturelle et marketing."
        },
        {
          "titre": "Malt + bœuf = pastiche brassicole",
          "texte": "Le malt fournit la connexion céréalière avec l’univers de la bière, tandis que l’extrait de bœuf déplace le profil vers une friandise canine. Les proportions et le procédé ne sont pas suffisamment documentés pour reconstruire la boisson. Ce manque n’a rien de dramatique : personne n’a besoin d’un BJCP pour labradors."
        }
      ],
      "recette": {
        "titre": "La gamelle, pas la pinte",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Boisson maltée canine sans alcool ; elle ne constitue ni un style de bière humaine ni une recette à transposer pour la consommation humaine.",
        "maltsEtCereales": [
          "Malt annoncé comme base de la boisson."
        ],
        "houblons": [
          "Houblonnage non documenté ; ne pas supposer l’usage de houblon dans une boisson destinée aux chiens."
        ],
        "levuresEtMicroorganismes": [
          "Fermentation éventuelle et micro-organismes non documentés ; le produit final est annoncé sans alcool."
        ],
        "ingredientsComplementaires": [
          "Extrait de bœuf."
        ],
        "profilEau": "Eau de formulation non documentée.",
        "empatage": "Procédé de production non publié avec assez de précision.",
        "ebullitionEtHoublonnage": "Procédé thermique et aromatique non publié.",
        "fermentation": "Aucune fermentation alcoolique significative n’est revendiquée ; détail de fabrication inconnu.",
        "maturation": "Conditionnement d’une boisson animale, sans garde brassicole documentée.",
        "profilRecherche": "Une boisson sans alcool pour chiens qui reprend le rituel social de la bière sans être présentée comme bière humaine."
      },
      "sources": [
        {
          "organisme": "Wikinews",
          "edition": null,
          "reference": "Amsterdam pet shop owner creates beer for dogs",
          "type": "source_presse_archive",
          "url": "https://en.wikinews.org/wiki/Amsterdam_pet_shop_owner_creates_beer_for_dogs",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "KLTV / Associated Press",
          "edition": null,
          "reference": "Pet shop owner creates beer for dogs",
          "type": "source_presse",
          "url": "https://www.kltv.com/story/5977615/pet-shop-owner-creates-beer-for-dogs/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-025",
      "code": "C10-025",
      "nom": "Belly Button Beer",
      "collectionId": 10,
      "nature": "Witbier expérimentale / levure humaine isolée",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Australie"
      ],
      "origine": {
        "libelle": "7 Cent Brewery",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 4.5,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Blanche / witbier"
      },
      "fermentation": {
        "type": "Haute / souche isolée d’un nombril",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une witbier australienne fermentée à 100 % avec une souche de Saccharomyces dérivée d’une cellule de levure isolée dans la peluche de nombril d’un brasseur. L’anatomie fournit la souche ; le fermenteur reçoit une culture propre, pas le contenu d’un nombril.",
      "histoireEtOrigines": `7 Cent Brewery a traité son idée absurde avec une méthode de laboratoire sérieuse. Des brasseurs volontaires ont été écouvillonnés au niveau du nombril, les prélèvements ont été cultivés sur milieu gélosé, puis les colonies ont été observées et sélectionnées. Une souche de Saccharomyces capable de fermenter a finalement été propagée.

La bière obtenue est décrite comme une witbier autour de 4,5 % ABV, avec orge, blé, avoine et seigle, houblons Riwaka et Mosaic, ainsi que zestes d’orange et coriandre. Autrement dit, derrière le nombril se cache une recette de blanche assez structurée.

Le point pédagogique est magnifique : le projet paraît corporel, mais la technique repose justement sur l’isolement d’une cellule et sa multiplication contrôlée. Le nombril est une adresse postale pour levure, pas un ingrédient en vrac.`,
      "chapitres": [
        {
          "titre": "Une cellule, pas une poignée de peluches",
          "texte": "La culture sur agar sert à séparer les micro-organismes présents dans un prélèvement et à sélectionner une colonie intéressante. Après propagation, la masse de levure utilisée au brassage descend de cette colonie. Le lien avec le corps est généalogique ; la matière corporelle originale ne constitue pas la recette."
        },
        {
          "titre": "La blanche la mieux habillée du laboratoire",
          "texte": "Riwaka et Mosaic apportent une dimension houblonnée moderne tandis que l’orange et la coriandre rappellent le vocabulaire du witbier. Orge, blé, avoine et seigle forment une base céréalière complexe. La bizarrerie n’a donc pas remplacé la conception brassicole : elle s’est installée dans la case « levure » d’une recette autrement cohérente."
        }
      ],
      "recette": {
        "titre": "Du coton-tige à la witbier",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Le projet a été documenté assez précisément pour identifier la logique de laboratoire et plusieurs ingrédients de la bière.",
        "maltsEtCereales": [
          "Orge.",
          "Blé.",
          "Avoine.",
          "Seigle."
        ],
        "houblons": [
          "Riwaka.",
          "Mosaic."
        ],
        "levuresEtMicroorganismes": [
          "Souche de Saccharomyces dérivée d’une cellule isolée depuis un prélèvement de nombril, cultivée sur agar puis propagée."
        ],
        "ingredientsComplementaires": [
          "Zestes d’orange.",
          "Coriandre."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage d’une base multi-céréales ; paliers détaillés non publiés dans les sources retenues.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation haute annoncée comme réalisée à 100 % avec la souche isolée du nombril ; paramètres de température non publiés ici.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une witbier crédible techniquement où l’origine insolite de la levure est expliquée comme un protocole de culture, jamais comme une soupe anatomique."
      },
      "sources": [
        {
          "organisme": "Craft Brewing Business",
          "edition": null,
          "reference": "Australian brewers culture belly-button yeast",
          "type": "source_professionnelle",
          "url": "https://www.craftbrewingbusiness.com/news/todays-weird-yeast-strain-australian-belly-button-yeast/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Beer Street Journal",
          "edition": null,
          "reference": "Belly Button Beer",
          "type": "source_secondaire",
          "url": "https://beerstreetjournal.com/belly-button-beer/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Untappd",
          "edition": null,
          "reference": "7 Cent Brewery — Belly Button Beer",
          "type": "source_secondaire",
          "url": "https://untappd.com/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-026",
      "code": "C10-026",
      "nom": "Stag Semen Stout",
      "collectionId": 10,
      "nature": "Milk stout expérimentale",
      "parentPrincipalId": null,
      "aliases": [
        "Hoihoi Tatea",
        "Stag Semen Milked Stout"
      ],
      "paysOrigine": [
        "Nouvelle-Zélande"
      ],
      "origine": {
        "libelle": "The Green Man / Choice Bros, Wellington",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.8,
        "max": 5.8,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": 35,
        "max": 35,
        "unite": "IBU",
        "statut": "exact"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Noire / milk stout"
      },
      "fermentation": {
        "type": "Haute",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une milk stout néo-zélandaise annoncée avec ajout de sperme de cerf, autour de 5,8 % et 35 IBU. Aucune métaphore ne peut vraiment améliorer la phrase ; la meilleure stratégie est donc d’être précis et de laisser le cerf faire le bruit.",
      "histoireEtOrigines": `Hoihoi Tatea, souvent appelée Stag Semen Stout, a été associée au Green Man Pub de Wellington et à Choice Bros dans le cadre d’événements culinaires volontairement provocateurs. Les fiches conservées la décrivent comme une milk/sweet stout à environ 5,8 % ABV et 35 IBU avec ajout annoncé de sperme de cerf de qualité export.

Contrairement aux bières à « levure de barbe » ou « levure de nombril », où le corps fournit seulement une souche cultivée, l’élément animal est ici présenté comme un ajout réel au produit. C’est une différence de catégorie importante : la collection ne doit pas mettre toutes les bizarreries corporelles dans le même bocal.

La recette maltée, le dosage et le moment d’ajout restent insuffisamment documentés. La donnée extraordinaire est solide ; les détails extraordinaires supplémentaires seraient de l’invention.`,
      "chapitres": [
        {
          "titre": "Ici, ce n’est pas seulement une origine microbienne",
          "texte": "Le sperme de cerf est présenté comme ingrédient ajouté, pas comme simple lieu de prélèvement d’une levure. Cela distingue radicalement cette bière de Belly Button Beer ou Beard Beer. La Brassopédie doit être clinique sur ce point : l’humour vient de l’existence du produit, pas de détails anatomiques inventés."
        },
        {
          "titre": "Le stout fait presque tout le travail de normalité",
          "texte": "La classification en milk/sweet stout, l’alcool et l’amertume donnent un cadre brassicole familier. C’est ce contraste qui rend l’objet si étrange : une bière noire structurée, avec un seul élément qui suffit à faire dérailler toute conversation de dégustation."
        }
      ],
      "recette": {
        "titre": "La stout, puis l’ingrédient que personne n’avait demandé",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Milk stout documentée à 5,8 % et 35 IBU ; l’ingrédient animal est annoncé, mais la formulation complète demeure inconnue.",
        "maltsEtCereales": [
          "Base de milk stout sombre ; malts et proportions non publiés avec précision."
        ],
        "houblons": [
          "Houblonnage total annoncé autour de 35 IBU ; variétés non établies dans les sources retenues."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale de stout ; souche non publiée."
        ],
        "ingredientsComplementaires": [
          "Sperme de cerf annoncé comme ingrédient du brassin.",
          "Lactose probable au regard de la classification Milk/Sweet Stout, mais ne doit pas être affirmé comme ingrédient sans fiche producteur complète."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation haute ; timing de l’ajout animal et paramètres détaillés non documentés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une milk stout expérimentale présentée avec exactitude, sans ajouter des détails de procédé ou des notes gustatives que les sources ne permettent pas d’établir."
      },
      "sources": [
        {
          "organisme": "Untappd",
          "edition": null,
          "reference": "Hoihoi Tatea / Stag Semen Milked Stout — données de produit",
          "type": "source_secondaire",
          "url": "https://untappd.com/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "The Drinks Business",
          "edition": null,
          "reference": "NZ pub selling beer laced with deer semen",
          "type": "source_presse",
          "url": "https://www.thedrinksbusiness.com/2015/08/nz-pub-selling-beer-laced-with-deer-semen/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "American Craft Beer",
          "edition": null,
          "reference": "Bad ideas in brewing: Stag Semen Stout",
          "type": "source_secondaire",
          "url": "https://www.americancraftbeer.com/bad-ideas-in-brewing-stag-semen-stout/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-027",
      "code": "C10-027",
      "nom": "Fenrir Nr.26",
      "collectionId": 10,
      "nature": "IPA fumée expérimentale",
      "parentPrincipalId": null,
      "aliases": [
        "Borg Nr.26 Fenrir"
      ],
      "paysOrigine": [
        "Islande"
      ],
      "origine": {
        "libelle": "Borg Brugghús",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6,
        "max": 6,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Dorée à ambrée / IPA"
      },
      "fermentation": {
        "type": "Haute",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une IPA islandaise à 6 % construite avec du malt fumé au feu de bouse de mouton. La bouse n’est pas versée dans la bière : elle joue le rôle historique du combustible qu’un pays pauvre en bois avait sous la main.",
      "histoireEtOrigines": `Borg Brugghús a créé Fenrir Nr.26 en s’inspirant de pratiques islandaises de fumage où la bouse de mouton séchée pouvait servir de combustible lorsque le bois était rare. La brasserie applique cette fumée au malt puis l’intègre dans une IPA de type West Coast autour de 6 % ABV.

La fiche producteur évoque agrumes, pamplemousse, amertume houblonnée et fumée particulière. La singularité ne vient donc pas d’un ingrédient fécal ajouté au moût, mais du combustible utilisé pour transformer le malt. Ce n’est pas une petite nuance : elle déplace le récit de la provocation vers l’histoire matérielle d’un territoire.

Fenrir est ainsi l’une des bières les plus pédagogiques de la collection. Le gag attire ; la géographie explique.`,
      "chapitres": [
        {
          "titre": "Le combustible que la lande pouvait fournir",
          "texte": "Dans un environnement où le bois de chauffage n’était pas toujours abondant, les combustibles animaux séchés ont eu des usages domestiques réels. Fumer avec de la bouse de mouton appartient donc à une logique d’adaptation, pas à une invention craft créée uniquement pour choquer un festivalier."
        },
        {
          "titre": "Une West Coast IPA passée au fumoir islandais",
          "texte": "Le contraste entre houblons agrumés/amers et malt fumé donne à Fenrir une identité hybride. La base West Coast fournit la tension aromatique ; la fumée apporte la signature locale. La bouse s’arrête au feu, ce qui est à la fois plus propre et historiquement plus intéressant."
        }
      ],
      "recette": {
        "titre": "Le feu pastoral, pas l’ingrédient pastoral",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "West Coast IPA à 6 % utilisant du malt fumé par un feu alimenté à la bouse de mouton séchée.",
        "maltsEtCereales": [
          "Malt dont une partie est fumée au feu de bouse de mouton séchée ; composition complète du grist non publiée."
        ],
        "houblons": [
          "Profil West Coast IPA avec agrumes/pamplemousse documenté par Borg ; variétés exactes non retenues comme certaines."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale ; souche non publiée."
        ],
        "ingredientsComplementaires": [
          "Bouse de mouton séchée utilisée comme combustible de fumage du malt, pas comme matière ajoutée à la bière."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Houblonnage d’IPA ; calendrier détaillé non publié.",
        "fermentation": "Fermentation haute d’IPA ; paramètres détaillés non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une IPA amère et fumée où la signature islandaise vient du traitement du malt plutôt que d’une caricature d’ingrédient sale."
      },
      "sources": [
        {
          "organisme": "Borg Brugghús",
          "edition": null,
          "reference": "Nr.26 Fenrir",
          "type": "source_producteur",
          "url": "https://www.borgbrugghus.is/thebeer/product/nr-26-fenrir",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Iceland Naturally",
          "edition": null,
          "reference": "Borg Brugghús Fenrir Nr.26",
          "type": "source_secondaire",
          "url": "https://old.icelandnaturally.com/article/borg-brugghus-latest-beer-fenrir-nr-26/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-028",
      "code": "C10-028",
      "nom": "Coolship No.6",
      "collectionId": 10,
      "nature": "Bière acide expérimentale / collaboration fromagère",
      "parentPrincipalId": null,
      "aliases": [
        "Coolship Experiment No.6",
        "Coolship Beer No.6"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Crux Fermentation Project / Rogue Creamery",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Ale acide claire à dorée"
      },
      "fermentation": {
        "type": "Spontanée / culture mixte de coolship",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une bière de coolship longuement vieillie, associée au Rogue River Blue cheese ou à des cultures liées au fromage bleu selon les récits disponibles. La cave d’affinage et la cave de fermentation se sont regardées et ont décidé de signer un bail commun.",
      "histoireEtOrigines": `Coolship No.6 est issue d’une collaboration entre Crux Fermentation Project et Rogue Creamery autour du Rogue River Blue, fromage bleu de l’Oregon affiné longuement et enveloppé de feuilles de vigne. Les articles consacrés au projet décrivent une bière de fermentation spontanée/coolship vieillie environ deux ans avant une expérimentation impliquant le fromage ou sa culture microbienne.

Les sources secondaires ne formulent pas toutes exactement de la même manière ce qui a été introduit : morceau de fromage, culture associée, ou combinaison. Cette divergence doit rester visible dans la fiche plutôt que d’être résolue artificiellement. En encyclopédie, « on ne sait pas avec certitude » est parfois la phrase la plus propre de la cave.

L’idée reste techniquement cohérente : bière acide et fromage bleu reposent tous deux sur des écosystèmes microbiens complexes. Ce n’est pas du roquefort liquide ; c’est une rencontre de fermentations.`,
      "chapitres": [
        {
          "titre": "Deux caves, deux microbiologies",
          "texte": "Une bière de coolship collecte une microflore environnementale puis évolue lentement en fermentation mixte. Un bleu comme Rogue River Blue s’appuie notamment sur des moisissures Penicillium et des cultures d’affinage. Les réunir est spectaculaire, mais pas absurde d’un point de vue microbiologique : les deux produits sont déjà des écosystèmes comestibles."
        },
        {
          "titre": "Fromage entier ou culture : l’incertitude fait partie de la fiche",
          "texte": "Les comptes rendus accessibles ne décrivent pas tous le protocole avec la même précision. La Brassopédie conserve donc l’alternative au lieu de choisir arbitrairement la version la plus théâtrale. Ce que l’on peut affirmer : collaboration Rogue Creamery, lien direct avec Rogue River Blue, bière acide/coolship et vieillissement prolongé."
        }
      ],
      "recette": {
        "titre": "Le coolship rencontre le bleu",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Bière acide de fermentation spontanée vieillie longuement puis expérimentée avec Rogue River Blue ou une culture qui lui est associée ; le protocole exact varie selon les sources accessibles.",
        "maltsEtCereales": [
          "Base de bière de coolship non détaillée avec précision."
        ],
        "houblons": [
          "Houblonnage non documenté avec assez de précision."
        ],
        "levuresEtMicroorganismes": [
          "Microflore spontanée/culture mixte de la bière.",
          "Cultures associées au fromage bleu selon les descriptions du projet."
        ],
        "ingredientsComplementaires": [
          "Rogue River Blue cheese et/ou culture liée au fromage bleu selon les sources ; ne pas trancher au-delà des documents disponibles."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation spontanée ou mixte initiée via coolship, suivie d’un vieillissement prolongé.",
        "maturation": "Environ deux ans de vieillissement sont rapportés avant ou autour de l’expérimentation fromagère.",
        "profilRecherche": "Une sour de laboratoire-cave où l’on documente honnêtement la rencontre avec le bleu sans promettre une pinte de fromage fondu."
      },
      "sources": [
        {
          "organisme": "Brewpublic",
          "edition": null,
          "reference": "Rogue Creamery and Crux release ale brewed with blue cheese",
          "type": "source_presse_professionnelle",
          "url": "https://brewpublic.com/beer-releases/rogue-creamery-and-crux-fermentation-release-limited-edition-ale-brewed-with-blue-cheese/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "InsideHook",
          "edition": null,
          "reference": "Oregon brewery makes blue cheese beer",
          "type": "source_presse",
          "url": "https://www.insidehook.com/beer/oregon-brewery-blue-cheese-beer",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Rogue Creamery",
          "edition": null,
          "reference": "Rogue River Blue — affinage et cultures",
          "type": "source_producteur",
          "url": "https://roguecreamery.com/rogue-river-blue/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-029",
      "code": "C10-029",
      "nom": "Durian Durian Beer",
      "collectionId": 10,
      "nature": "Saison au fruit expérimentale",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Australie"
      ],
      "origine": {
        "libelle": "Foreigner Brewing",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Saison claire"
      },
      "fermentation": {
        "type": "Haute / saison",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une saison australienne brassée avec du durian, le fruit tropical dont l’odeur suffit à déclencher des interdictions dans certains hôtels et transports. La bière n’ajoute pas un monstre à la cuve : elle invite un fruit qui arrive déjà avec sa propre réputation de catastrophe olfactive.",
      "histoireEtOrigines": `Foreigner Brewing a produit Durian Durian Beer comme une saison mettant en avant le durian, fruit d’Asie du Sud-Est célèbre pour une chair riche et une odeur extrêmement clivante. Dans les pays où il est consommé, le fruit est à la fois recherché, culturellement important et parfois interdit dans des espaces clos en raison de son parfum puissant.

La recette détaillée de la bière est peu documentée. On sait qu’il s’agit d’une saison au durian ; l’alcool, les quantités de fruit, les houblons et la souche ne sont pas suffisamment établis dans les sources retenues. La tentation serait d’inventer une dégustation entière à partir de la réputation du fruit. Ce serait précisément l’erreur à éviter.

La carte fonctionne donc sur un contraste : une famille de bière sèche et fermentaire rencontre un ingrédient dont la personnalité aromatique occupe déjà toute la pièce avant ouverture.`,
      "chapitres": [
        {
          "titre": "Le fruit qui possède déjà une légende",
          "texte": "Le durian est souvent décrit par des comparaisons olfactives extrêmes, mais ces images relèvent largement de la perception culturelle et individuelle. Sa chair est aussi crémeuse, sucrée et complexe. Une bière au durian peut donc jouer sur bien davantage qu’une caricature d’odeur « horrible »."
        },
        {
          "titre": "Ce que l’on sait, sans renifler à distance",
          "texte": "Foreigner Brewing a bien associé une saison au durian. En revanche, les sources accessibles ne donnent pas une recette complète ni une analyse sensorielle stabilisée. La Brassopédie garde donc le fruit au centre tout en refusant de lui prêter automatiquement des notes que personne n’a mesurées dans le brassin."
        }
      ],
      "recette": {
        "titre": "Une saison avec un fruit impossible à ignorer",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Saison brassée avec du durian ; formulation complète et paramètres non publiés.",
        "maltsEtCereales": [
          "Base de saison claire ; céréales et proportions non documentées avec précision."
        ],
        "houblons": [
          "Houblons non documentés avec suffisamment de précision."
        ],
        "levuresEtMicroorganismes": [
          "Levure de saison / fermentation haute annoncée ; souche non publiée."
        ],
        "ingredientsComplementaires": [
          "Durian utilisé dans le brassin ; quantité et moment d’ajout non documentés."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation haute de saison ; influence du fruit sur la fermentation non détaillée publiquement.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une saison expérimentale qui laisse le durian être étrange par lui-même, sans lui inventer une fiche de dégustation par réputation."
      },
      "sources": [
        {
          "organisme": "VinePair",
          "edition": null,
          "reference": "Australian brewery debuts durian beer",
          "type": "source_presse",
          "url": "https://vinepair.com/booze-news/brewery-debuted-durian-beer-rotting-flesh/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "The Drinks Business",
          "edition": null,
          "reference": "Aussie brewery makes beer with Asia’s smelliest fruit",
          "type": "source_presse",
          "url": "https://www.thedrinksbusiness.com/2018/05/aussie-brewery-makes-beer-with-asias-smelliest-fruit/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-030",
      "code": "C10-030",
      "nom": "Kimchi Sour",
      "collectionId": 10,
      "nature": "Sour expérimentale / fermentation croisée",
      "parentPrincipalId": null,
      "aliases": [
        "Dokkaebier Kimchi Sour"
      ],
      "paysOrigine": [
        "États-Unis",
        "Inspiration coréenne"
      ],
      "origine": {
        "libelle": "Dokkaebier",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Cuivrée / orangée"
      },
      "fermentation": {
        "type": "Acide / fermentation lactique",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une sour qui fait dialoguer deux mondes déjà obsédés par les microbes : bière acide et kimchi. Gochugaru, gingembre et culture lactique déplacent le bocal coréen dans le langage du brassage sans prétendre qu’une pinte est devenue un accompagnement de barbecue liquide.",
      "histoireEtOrigines": `Dokkaebier s’est fait connaître par des bières intégrant des ingrédients et références culinaires coréennes. Kimchi Sour pousse cette logique sur un terrain particulièrement cohérent : le kimchi est lui-même un produit de fermentation lactique, et la bière sour utilise également des bactéries capables de produire de l’acide lactique.

Les descriptions du produit mentionnent du gochugaru — piment coréen —, du gingembre et une culture lactique associée à l’univers du kimchi. Les informations disponibles ne permettent pas d’affirmer qu’un bocal complet de kimchi, avec chaque ingrédient traditionnel, a été vidé dans la cuve. Là encore, l’imaginaire doit rester au service des faits.

Cette bière est moins un gag qu’une conversation fermentaire : deux traditions utilisent des micro-organismes pour transformer des matières premières, puis un brasseur décide qu’elles peuvent partager la même table.`,
      "chapitres": [
        {
          "titre": "Fermentation rencontre fermentation",
          "texte": "Le pont technique principal est l’acide lactique. Dans le kimchi comme dans de nombreuses sour beers, des bactéries lactiques transforment des sucres et abaissent le pH. Les espèces, températures, salinités et matrices sont toutefois très différentes : partager un mécanisme ne signifie pas que les deux procédés sont interchangeables."
        },
        {
          "titre": "Le kimchi n’est pas une liste d’épices universelle",
          "texte": "Le mot couvre une immense variété de préparations coréennes. Pour cette bière, les éléments documentés sont plus précis que le nom générique : gochugaru, gingembre et culture lactique. Il faut donc partir de ces ingrédients plutôt que d’ajouter automatiquement chou, ail, sauce de poisson ou toute la cuisine coréenne par association d’idées."
        }
      ],
      "recette": {
        "titre": "Le bocal et le fermenteur trouvent un terrain commun",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Sour inspirée du kimchi, documentée avec gochugaru, gingembre et culture lactique ; la composition complète reste propriétaire ou non publiée.",
        "maltsEtCereales": [
          "Base maltée de sour non documentée avec précision."
        ],
        "houblons": [
          "Houblonnage non documenté avec précision ; une amertume trop forte peut être incompatible avec certaines bactéries lactiques selon le procédé."
        ],
        "levuresEtMicroorganismes": [
          "Culture lactique associée à l’inspiration kimchi.",
          "Levure de fermentation alcoolique non identifiée dans les sources retenues."
        ],
        "ingredientsComplementaires": [
          "Gochugaru.",
          "Gingembre.",
          "Autres composants éventuels du profil kimchi non affirmés sans source précise."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Acidification/fermentation lactique associée à une fermentation de bière ; protocole et ordre des inoculations non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une sour coréano-américaine où le lien avec le kimchi repose sur de vrais mécanismes et ingrédients plutôt que sur une étiquette exotique."
      },
      "sources": [
        {
          "organisme": "Dokkaebier",
          "edition": null,
          "reference": "Kimchi Sour — présentation de la bière",
          "type": "source_producteur",
          "url": "https://enjoydkb.com/blogs/from-the-blogs/dokkaebier-kimchi-sour-korean-craft-beer",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": null,
          "reference": "Special Ingredient: Kimchi",
          "type": "source_professionnelle",
          "url": "https://www.beerandbrewing.com/special-ingredient-kimchi",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "BeerAdvocate",
          "edition": null,
          "reference": "Dokkaebier Kimchi Sour",
          "type": "source_secondaire",
          "url": "https://www.beeradvocate.com/beer/profile/59808/542566/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-031",
      "code": "C10-031",
      "nom": "Mr. Twit's Odious Ale",
      "collectionId": 10,
      "nature": "Bière expérimentale / patrimoine microbien",
      "parentPrincipalId": null,
      "aliases": [
        "Roald Dahl Beer",
        "Odious Ale"
      ],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Bompas & Parr / 40FT Brewery",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Ale anglaise / couleur non documentée avec précision"
      },
      "fermentation": {
        "type": "Haute / levure prélevée sur une chaise",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une bière fermentée avec une culture de levure obtenue à partir d’un prélèvement sur la chaise d’écriture de Roald Dahl. La littérature ne finit pas dans la cuve en pages déchirées : c’est le mobilier qui fournit une trace microbienne à cultiver.",
      "histoireEtOrigines": `Mr. Twit’s Odious Ale a été créée en 2016 par Bompas & Parr avec 40FT Brewery pour Dinner at the Twits, expérience culinaire inspirée du roman de Roald Dahl. Le détail qui a assuré la célébrité du projet est la provenance de la levure : un écouvillon passé sur la chaise d’écriture personnelle de l’auteur a servi à rechercher une culture fermentaire.

Certaines reprises ont transformé l’histoire en « bière faite avec Roald Dahl », formule beaucoup plus macabre que la réalité. Aucun prélèvement sur son corps n’est documenté. Le lien est patrimonial : un objet de travail, son environnement microbien, puis un laboratoire qui tente d’en tirer une levure utilisable.

C’est une forme étonnante de relique littéraire : au lieu de conserver uniquement l’encre ou le papier, on fait fermenter la poussière biologique du décor.`,
      "chapitres": [
        {
          "titre": "La chaise devient terroir",
          "texte": "Le terroir microbien peut être envisagé à l’échelle d’une ferme, d’un chai ou d’un bâtiment. Ici, il rétrécit jusqu’à un meuble précis chargé d’histoire. La valeur de la culture vient autant de son origine narrative que de ses qualités fermentaires : une levure identique trouvée sur une table anonyme n’aurait probablement jamais eu son dîner théâtral."
        },
        {
          "titre": "Roald Dahl n’est pas dans la bière",
          "texte": "La correction est essentielle. La source primaire Bompas & Parr parle de matériau ou de micro-organismes écouvillonnés sur sa chaise d’écriture. Transformer cela en prélèvement corporel rend l’histoire plus sensationnelle mais moins vraie. La chaise suffit largement à rendre la bière odieuse au sens littéraire."
        }
      ],
      "recette": {
        "titre": "Une bière avec note de bas de chaise",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Le style, l’alcool et la formulation complète ne sont pas publiés ; l’élément documenté est la culture issue d’un prélèvement sur la chaise de Roald Dahl.",
        "maltsEtCereales": [
          "Base d’ale non documentée avec précision."
        ],
        "houblons": [
          "Houblons non documentés avec précision."
        ],
        "levuresEtMicroorganismes": [
          "Levure obtenue après prélèvement et culture de micro-organismes présents sur la chaise d’écriture de Roald Dahl."
        ],
        "ingredientsComplementaires": [
          "Aucun morceau de chaise, papier ou matière corporelle de l’auteur n’est documenté comme ingrédient."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation avec la culture sélectionnée ; protocole de laboratoire et paramètres de brasserie non publiés en détail.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une ale patrimoniale où l’histoire est littéralement portée par la provenance de la levure, sans transformer l’auteur en ingrédient."
      },
      "sources": [
        {
          "organisme": "Bompas & Parr",
          "edition": null,
          "reference": "Mr Twit’s Odious Ale",
          "type": "source_createur",
          "url": "https://bompasandparr.com/case-study/mr-twits-odious-ale/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "The Independent",
          "edition": null,
          "reference": "Beer made from yeast swabbed from Roald Dahl’s writing chair",
          "type": "source_presse",
          "url": "https://www.independent.co.uk/arts-entertainment/books/news/beer-to-be-made-from-yeast-swabbed-from-roald-dahl-s-writing-chair-a7195721.html",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-032",
      "code": "C10-032",
      "nom": "Bière égyptienne à levure ancienne",
      "collectionId": 10,
      "nature": "Archéologie expérimentale / reconstitution microbienne",
      "parentPrincipalId": null,
      "aliases": [
        "Ancient Egyptian beer",
        "5,000-year-old yeast beer"
      ],
      "paysOrigine": [
        "Israël",
        "Égypte antique et Levant ancien"
      ],
      "origine": {
        "libelle": "Hebrew University / Bar-Ilan University / Israel Antiquities Authority et partenaires",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Variable selon les brassins expérimentaux"
      },
      "fermentation": {
        "type": "Levures anciennes isolées de céramiques",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Des chercheurs ont isolé des levures dans les pores de récipients archéologiques puis les ont utilisées pour fermenter des boissons modernes. Ce n’est pas une recette égyptienne parfaitement ressuscitée : c’est une expérience où un micro-organisme ancien rencontre un moût contemporain.",
      "histoireEtOrigines": `Une équipe interdisciplinaire israélienne a travaillé sur des récipients archéologiques provenant de plusieurs sites et périodes, certains associés à la production ou à la consommation de bière et d’autres boissons fermentées. Des colonies de levures ont été isolées à partir des pores de la céramique, identifiées, puis certaines ont été utilisées pour produire de nouvelles boissons.

La couverture médiatique a résumé l’expérience par « bière brassée avec une levure vieille de 5 000 ans ». Cette formule traduit l’émerveillement mais compresse une réalité plus complexe : plusieurs récipients, plusieurs datations, plusieurs régions et un moût moderne. La levure peut éclairer des pratiques anciennes ; elle ne fournit pas à elle seule le reste d’une recette perdue.

C’est précisément ce qui rend l’expérience scientifique intéressante. On ne boit pas l’Égypte antique en bouteille ; on teste ce qu’une culture associée à des objets anciens peut encore faire dans un environnement de fermentation actuel.`,
      "chapitres": [
        {
          "titre": "Les pores de la poterie comme archive biologique",
          "texte": "Une céramique poreuse peut conserver des résidus et des micro-organismes dans ses microcavités. Les chercheurs ont exploité cette possibilité en cultivant des prélèvements puis en identifiant les souches. Le geste se situe à la frontière de l’archéologie, de la microbiologie et de la fermentation expérimentale."
        },
        {
          "titre": "Une levure ancienne ne reconstitue pas une recette entière",
          "texte": "Même si la provenance d’une souche est établie, il manque encore les céréales exactes, leur traitement, la composition de l’eau, les aromates, les proportions, les températures et la chaîne de fermentation historique. Le brassin moderne est donc une expérience avec un élément ancien, pas une machine à voyager dans le temps gastronomique."
        }
      ],
      "recette": {
        "titre": "Ce que l’archéologie a réellement remis en fermentation",
        "profilUnique": false,
        "noteProfil": "Cette entrée décrit un programme d’archéologie expérimentale : la levure ancienne ne suffit pas à définir une bière égyptienne complète.",
        "explicationProfil": "Moûts modernes fermentés avec des levures isolées de céramiques antiques ; plusieurs essais et souches sont concernés, pas une recette unique.",
        "maltsEtCereales": [
          "Moûts modernes préparés pour les expérimentations ; composition variable selon l’essai et non équivalente à une recette antique intégrale."
        ],
        "houblons": [
          "Le houblon moderne n’est pas un marqueur nécessaire des boissons antiques étudiées ; ne pas l’ajouter par défaut au récit."
        ],
        "levuresEtMicroorganismes": [
          "Souches de levures isolées de récipients archéologiques puis cultivées et identifiées en laboratoire."
        ],
        "ingredientsComplementaires": [
          "Les poteries sont des sources de prélèvement, pas des ingrédients broyés dans la boisson."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation expérimentale moderne avec les isolats anciens dans des conditions contrôlées.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Comprendre le potentiel fermentaire de levures associées à des objets antiques sans prétendre ressusciter une recette complète disparue."
      },
      "sources": [
        {
          "organisme": "Bar-Ilan University",
          "edition": null,
          "reference": "Researchers brew beer with yeast isolated from ancient vessels",
          "type": "source_universitaire",
          "url": "https://www.biu.ac.il/en/article/581409",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Hebrew University / CFHU",
          "edition": null,
          "reference": "Ancient yeast from pottery used to recreate fermented beverages",
          "type": "source_universitaire",
          "url": "https://www.cfhu.org/news/ancient-yeast/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Jewish Telegraphic Agency",
          "edition": null,
          "reference": "5,000-year-old yeast used to brew beer",
          "type": "source_presse",
          "url": "https://www.jta.org/2019/05/22/israel/5000-year-old-yeast-is-being-used-by-israeli-scientists-to-brew-a-pretty-good-beer",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-033",
      "code": "C10-033",
      "nom": "The Wreck - Preservation Ale",
      "collectionId": 10,
      "nature": "Rebrassage patrimonial / levure d’épave",
      "parentPrincipalId": null,
      "aliases": [
        "Preservation Ale",
        "Sydney Cove beer"
      ],
      "paysOrigine": [
        "Australie"
      ],
      "origine": {
        "libelle": "QVMAG / James Squire / Malt Shovel Brewery",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Porter foncé"
      },
      "fermentation": {
        "type": "Haute / levure récupérée de bouteilles d’épave",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Un porter moderne utilisant une levure récupérée à partir de bouteilles retrouvées dans l’épave du Sydney Cove, naufragé en 1797. Le trésor n’est pas le rhum, ni l’or : c’est une cellule qui a attendu deux siècles qu’on lui rende un fermenteur.",
      "histoireEtOrigines": `Le Sydney Cove a fait naufrage au large de la Tasmanie en 1797 avec une cargaison comprenant des bouteilles d’alcool. Des fouilles archéologiques ont permis de récupérer des bouteilles scellées et leur contenu, conservés ensuite par le Queen Victoria Museum and Art Gallery.

Des travaux scientifiques ont cherché des micro-organismes viables dans ces bouteilles. Une culture de levure associée aux restes de bière a ensuite participé à un projet de rebrassage avec James Squire / Malt Shovel Brewery, donnant naissance à Preservation Ale, souvent décrite comme un porter foncé inspiré de l’époque.

Il serait excessif d’appeler le résultat « la bière de 1797 ressuscitée » : la levure est historique, mais la recette et les conditions de production modernes sont des reconstructions. L’épave fournit une voix, pas toute la partition.`,
      "chapitres": [
        {
          "titre": "Une bouteille comme capsule de temps",
          "texte": "Un contenant scellé, froid et protégé peut préserver des molécules et parfois des micro-organismes bien plus longtemps qu’un environnement ouvert. La récupération de levure viable reste exceptionnelle, ce qui explique la valeur scientifique de la cargaison au-delà de l’anecdote de taverne."
        },
        {
          "titre": "Rebrasser n’est pas reproduire",
          "texte": "Même avec une levure historique, les malts actuels, l’eau, les équipements, l’oxygénation et le contrôle de température diffèrent profondément de ceux de la fin du XVIIIe siècle. Preservation Ale est donc un hommage expérimental fondé sur un élément authentique, pas une photocopie gustative du navire."
        }
      ],
      "recette": {
        "titre": "Le porter qui remonte d’une épave",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Base de porter moderne utilisant une culture obtenue à partir de bouteilles historiques du Sydney Cove.",
        "maltsEtCereales": [
          "Base de porter foncé inspirée d’un profil historique ; composition exacte non publiée dans les sources retenues."
        ],
        "houblons": [
          "Houblons non documentés avec précision."
        ],
        "levuresEtMicroorganismes": [
          "Culture de levure récupérée/isolée à partir de bouteilles associées à l’épave du Sydney Cove."
        ],
        "ingredientsComplementaires": [
          "Aucun bois d’épave ou eau de mer n’est documenté comme ingrédient de la bière moderne."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation moderne avec la culture historique ; paramètres détaillés non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Un rebrassage patrimonial où la levure sert de lien concret avec 1797 sans prétendre que toute la recette a survécu au naufrage."
      },
      "sources": [
        {
          "organisme": "Queen Victoria Museum and Art Gallery",
          "edition": null,
          "reference": "The Sydney Cove Collection",
          "type": "source_museale",
          "url": "https://www.qvmag.tas.gov.au/Whats-on/Museum-at-Inveresk/The-Sydney-Cove-Collection",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "The Maritime Executive",
          "edition": null,
          "reference": "Beer brewed from 1797 shipwreck bottle",
          "type": "source_presse",
          "url": "https://maritime-executive.com/article/beer-brewed-from-1797-shipwrecks-bottle",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-034",
      "code": "C10-034",
      "nom": "Sinai Sour",
      "collectionId": 10,
      "nature": "Reconstitution historique expérimentale",
      "parentPrincipalId": null,
      "aliases": [
        "Dylan McDonnell ancient Egyptian beer"
      ],
      "paysOrigine": [
        "États-Unis",
        "Inspiration Égypte antique / Levant ancien"
      ],
      "origine": {
        "libelle": "Dylan McDonnell, Utah",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5,
        "max": 5,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Claire à ambrée / sour"
      },
      "fermentation": {
        "type": "Haute / levure ancienne utilisée expérimentalement",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une sour maison inspirée de textes médicaux et d’ingrédients du monde antique, fermentée avec une levure annoncée comme vieille d’environ trois millénaires. Figues de sycomore, dattes, miel, raisins et encens composent moins une recette certifiée qu’un roman archéologique soigneusement annoté.",
      "histoireEtOrigines": `Le brasseur amateur Dylan McDonnell a développé Sinai Sour à partir de deux fils documentaires : une culture de levure ancienne liée à des recherches archéologiques au Proche-Orient et le papyrus Ebers, vaste texte médical de l’Égypte antique qui mentionne de nombreuses matières végétales et préparations.

Les comptes rendus de 2024 décrivent un brassin autour de 5 % ABV utilisant notamment orge égyptienne/emmer, figues de sycomore, encens, dattes du désert, cumin noir, miel de Sidr yéménite, caroube, raisins secs dorés et genévrier épineux. Cette liste donne une profondeur réelle au projet, mais elle ne prouve pas qu’une seule recette antique associait exactement tous ces ingrédients dans ces proportions.

Sinai Sour est donc une reconstruction créative informée par des sources, pas une recette retrouvée sur un papyrus avec le mode d’emploi « fermenter trois jours puis servir au pharaon ».`,
      "chapitres": [
        {
          "titre": "Le papyrus comme garde-manger, pas comme fiche de brassage",
          "texte": "Le papyrus Ebers recense des remèdes et ingrédients dans des contextes multiples. S’en inspirer permet de sélectionner des matières historiquement plausibles, mais ne transforme pas le document en recette brassicole complète. Le travail de McDonnell relève de l’interprétation expérimentale, ce qui doit rester explicite."
        },
        {
          "titre": "Une sour moderne avec vocabulaire antique",
          "texte": "La présence d’une levure ancienne et d’ingrédients historiques construit une passerelle vers le passé, tandis que le contrôle de fermentation, le matériel et les choix du brasseur restent contemporains. La bière est intéressante précisément parce qu’elle assume ce mélange plutôt que de prétendre abolir trois mille ans de technologie."
        }
      ],
      "recette": {
        "titre": "Une reconstruction avec notes de papyrus",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Brassin expérimental de Dylan McDonnell autour de 5 % ABV, inspiré de matières mentionnées dans des sources anciennes et utilisant une culture de levure ancienne.",
        "maltsEtCereales": [
          "Orge égyptienne et/ou emmer rapportés dans les descriptions du projet."
        ],
        "houblons": [
          "Le houblon moderne n’est pas au centre de la reconstruction documentée ; ne pas en inventer une variété."
        ],
        "levuresEtMicroorganismes": [
          "Levure ancienne liée à un récipient archéologique du Levant et utilisée pour la fermentation expérimentale."
        ],
        "ingredientsComplementaires": [
          "Figues de sycomore.",
          "Raisins / raisins secs dorés.",
          "Dattes du désert.",
          "Miel de Sidr.",
          "Encens/frankincense.",
          "Cumin noir.",
          "Caroube.",
          "Genévrier épineux."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Procédé moderne adapté aux céréales utilisées ; paramètres complets non publiés comme recette scientifique standardisée.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation expérimentale avec la culture ancienne dans un brassin moderne inspiré de sources historiques.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une boisson plausible et documentée dans son inspiration, mais jamais présentée comme la recette certifiée d’un brasseur égyptien antique."
      },
      "sources": [
        {
          "organisme": "Smithsonian Magazine",
          "edition": null,
          "reference": "Man brews beer using ancient yeast and Egyptian papyrus inspiration",
          "type": "source_presse_scientifique",
          "url": "https://www.smithsonianmag.com/smart-news/this-man-brewed-beer-using-3000-year-old-yeast-and-a-recipe-from-an-ancient-egyptian-papyrus-180984576/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "VinePair",
          "edition": null,
          "reference": "Beer made with ancient yeast",
          "type": "source_presse",
          "url": "https://vinepair.com/booze-news/beer-made-with-ancient-yeast/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-035",
      "code": "C10-035",
      "nom": "Bière Ötzi",
      "collectionId": 10,
      "nature": "Projet en cours / piste de recherche",
      "parentPrincipalId": null,
      "aliases": [
        "Ötzi beer project",
        "Iceman yeast beer"
      ],
      "paysOrigine": [
        "Italie",
        "Autriche",
        "Allemagne"
      ],
      "origine": {
        "libelle": "Eurac Research et partenaires scientifiques / piste de brassage annoncée",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Non applicable · bière non encore brassée"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Non applicable · projet"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Non définie · projet"
      },
      "fermentation": {
        "type": "Projetée / levures isolées dans l’étude microbiologique",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non applicable · projet non brassé"
      },
      "description": "La carte fantôme de la collection : en 2026, des chercheurs ont travaillé sur des levures associées à Ötzi et les ont utilisées pour du levain ; la bière n’est encore qu’une piste annoncée. Ici, la Brassopédie décrit une promesse, pas une bouteille qui existerait déjà.",
      "histoireEtOrigines": `Une étude publiée en 2026 sur le microbiome d’Ötzi, l’homme des glaces, a identifié des micro-organismes et notamment des levures associées à la momie et à son environnement de conservation. Des chercheurs ont réussi à cultiver certaines de ces levures et à explorer leur potentiel, avec une démonstration spectaculaire autour de pain au levain.

La couverture médiatique a ensuite évoqué une prochaine étape possible : tester ces cultures dans une bière, avec l’intérêt de partenaires spécialisés en brassage. À la date de consultation de cette fiche, il ne faut donc pas présenter une « bière Ötzi » comme un produit brassé, commercialisé ou même comme une recette stabilisée.

Autre nuance capitale : les travaux scientifiques suggèrent que certaines levures pourraient être des organismes adaptés au froid ayant colonisé ou persisté dans l’environnement glaciaire après la mort d’Ötzi. Dire « levure de 5 300 ans provenant du corps vivant d’Ötzi » irait bien au-delà de ce que les données autorisent.`,
      "chapitres": [
        {
          "titre": "Le boss final est encore dans le glacier",
          "texte": "Alcool, couleur, amertume, malts, houblons et style n’existent pas encore comme données de bière. Une fiche qui remplirait ces cases aujourd’hui fabriquerait une boisson imaginaire. Le statut « projet » est donc une information positive : il permet à ZythoHunt de suivre une expérience avant qu’elle ne devienne éventuellement un produit."
        },
        {
          "titre": "Ancienne, glaciaire ou simplement bien adaptée au froid ?",
          "texte": "La provenance temporelle d’un micro-organisme retrouvé sur une momie n’est pas automatique. Une levure peut avoir colonisé l’environnement bien après l’inhumation tout en restant scientifiquement intéressante. La bonne formulation parle de levures associées à Ötzi et de souches froid-adaptées étudiées, sans leur délivrer un acte de naissance chalcolithique imaginaire."
        }
      ],
      "recette": {
        "titre": "Recette : dossier encore vide",
        "profilUnique": false,
        "noteProfil": "Aucune bière n’est documentée comme brassée à ce stade : tout paramètre de recette serait spéculatif.",
        "explicationProfil": "Le projet envisagé consiste à tester des levures cultivées dans le cadre des recherches sur Ötzi dans une fermentation brassicole future.",
        "maltsEtCereales": [
          "Non définis : aucune recette de bière finalisée n’est publiée."
        ],
        "houblons": [
          "Non définis : aucune recette de bière finalisée n’est publiée."
        ],
        "levuresEtMicroorganismes": [
          "Levures cultivées dans le cadre de l’étude microbiologique d’Ötzi, dont certaines sont décrites comme adaptées aux environnements froids ; leur usage brassicole reste à tester."
        ],
        "ingredientsComplementaires": [
          "Aucun ingrédient « de momie » n’est destiné à être ajouté : le projet concerne des cultures microbiennes isolées et propagées."
        ],
        "profilEau": "Non définie.",
        "empatage": "Non défini.",
        "ebullitionEtHoublonnage": "Non défini.",
        "fermentation": "Projet de fermentation future ; aucun protocole brassicole final n’est publié.",
        "maturation": "Non définie.",
        "profilRecherche": "Conserver une fiche de veille honnête : une piste de recherche fascinante qui n’est pas encore une bière."
      },
      "sources": [
        {
          "organisme": "Eurac Research",
          "edition": null,
          "reference": "Study of microorganisms associated with Ötzi and cold-adapted yeasts",
          "type": "source_scientifique",
          "url": "https://www.eurac.edu/en/magazine/otzi-microbiome",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Smithsonian Magazine",
          "edition": null,
          "reference": "Scientists made sourdough with yeast associated with Ötzi",
          "type": "source_presse_scientifique",
          "url": "https://www.smithsonianmag.com/smart-news/scientists-made-sourdough-bread-with-yeast-found-on-otzi-the-icemans-mummified-body-180988894/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "The Guardian",
          "edition": null,
          "reference": "Scientists explore sourdough and possible brewing with Ötzi-associated yeast",
          "type": "source_presse",
          "url": "https://www.theguardian.com/science/2026/jun/05/scientists-sourdough-bread-yeast-strains-mummy",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "The Drinks Business",
          "edition": null,
          "reference": "Scientists to brew beer with yeast from mummified remains — project report",
          "type": "source_presse",
          "url": "https://www.thedrinksbusiness.com/2026/06/scientists-to-brew-beer-with-yeast-from-mummified-remains/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-036",
      "code": "C10-036",
      "nom": "ACWA Reuse Brew",
      "collectionId": 10,
      "nature": "Bière expérimentale / démonstrateur de réutilisation de l’eau",
      "parentPrincipalId": null,
      "aliases": [
        "Reuse Brew",
        "Village Brewery Reuse Beer"
      ],
      "paysOrigine": [
        "Canada"
      ],
      "origine": {
        "libelle": "University of Calgary / Advancing Canadian Wastewater Assets / Village Brewery / Xylem",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Blonde / Village Blonde pour le brassin documenté"
      },
      "fermentation": {
        "type": "Fermentation de bière blonde / détails non publiés",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une bière de Calgary brassée avec des eaux usées municipales transformées en eau potable par une chaîne de traitement avancé. L’expérience vise moins à parfumer la bière à l’égout qu’à démonter, filtre après filtre, la peur instinctive de la réutilisation de l’eau.",
      "histoireEtOrigines": `Le projet mené autour d’ACWA — Advancing Canadian Wastewater Assets — réunit l’University of Calgary, Village Brewery et Xylem. L’objectif est de démontrer concrètement qu’une eau municipale usée peut être traitée jusqu’à respecter des critères très exigeants puis être utilisée dans un produit alimentaire familier.

La chaîne décrite par l’université ne se résume pas à « un bon filtre ». Elle associe traitement biologique des nutriments, ultrafiltration, oxydation avancée par ozone et UV, puis osmose inverse. L’eau obtenue a été testée par un laboratoire indépendant et comparée aux lignes directrices canadiennes de qualité de l’eau potable avant d’être utilisée pour brasser une Village Blonde.

La bière devient ainsi un outil de communication scientifique. Le verre dit : si le traitement est correctement conçu et contrôlé, l’histoire de l’eau avant purification n’est pas son identité chimique après purification.`,
      "chapitres": [
        {
          "titre": "Une station d’épuration en plusieurs actes",
          "texte": "Traitement biologique, membranes, oxydation avancée et osmose inverse ne font pas tous la même chose. Ils retirent successivement matières, micro-organismes et contaminants dissous. L’intérêt du démonstrateur est précisément l’empilement de barrières : la sûreté ne repose pas sur un seul gadget miraculeux."
        },
        {
          "titre": "La bière contre le facteur beurk",
          "texte": "La réutilisation potable rencontre souvent une résistance psychologique même lorsque la qualité analytique est démontrée. Brasser une blonde rend la question concrète : le public peut comprendre que « eau recyclée » décrit une histoire de traitement, pas une saveur résiduelle. La mousse sert ici de support pédagogique."
        }
      ],
      "recette": {
        "titre": "La recette commence par une usine de traitement",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Le brassin documenté est une Village Blonde utilisant une eau municipale usée purifiée et testée ; la formulation complète de la bière n’est pas publiée.",
        "maltsEtCereales": [
          "Base maltée de Village Blonde ; composition détaillée non publiée dans la documentation du projet."
        ],
        "houblons": [
          "Houblons de la blonde non documentés dans les sources institutionnelles retenues."
        ],
        "levuresEtMicroorganismes": [
          "Levure de la bière blonde ; souche non publiée."
        ],
        "ingredientsComplementaires": [
          "Aucun constituant d’eaux usées n’est recherché comme ingrédient : le projet utilise l’eau après traitement avancé et contrôle."
        ],
        "profilEau": "Eau municipale traitée par BNR, ultrafiltration, ozone/UV, osmose inverse et contrôles analytiques avant brassage.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation conventionnelle d’une bière blonde après purification de l’eau ; paramètres non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une bière volontairement normale dont la normalité sert à démontrer la performance d’une chaîne de réutilisation de l’eau."
      },
      "sources": [
        {
          "organisme": "University of Calgary",
          "edition": null,
          "reference": "UCalgary, Village Brewery and Xylem produce Alberta’s first beer made with treated wastewater",
          "type": "source_universitaire",
          "url": "https://ucalgary.ca/news/ucalgary-village-brewery-and-xylem-produce-albertas-first-beer-made-treated-wastewater",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Global News",
          "edition": null,
          "reference": "Calgary brewery makes beer with treated wastewater",
          "type": "source_presse",
          "url": "https://globalnews.ca/news/7282032/calgary-brewery-wastewater-beer/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-037",
      "code": "C10-037",
      "nom": "Epic OneWater Brew",
      "collectionId": 10,
      "nature": "Famille de bières expérimentales à eau grise réutilisée",
      "parentPrincipalId": null,
      "aliases": [
        "Shower Hour IPA",
        "Laundry Club Kölsch",
        "Epic Cleantec Beer"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Epic Cleantec / Devil's Canyon Brewing Company, Californie",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "6 % IPA / 4,6 % Kölsch · selon déclinaison"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Variable selon déclinaison"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "IPA ou Kölsch selon déclinaison"
      },
      "fermentation": {
        "type": "Variable selon déclinaison",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Des bières brassées avec l’eau récupérée des douches, lavabos et machines à laver d’immeubles, puis purifiée par un système de réutilisation avancé. Shower Hour IPA et Laundry Club Kölsch ont au moins l’élégance d’annoncer d’où vient la blague hydraulique.",
      "histoireEtOrigines": `Epic Cleantec travaille sur le traitement local des eaux grises de bâtiments afin de les réutiliser plutôt que de les envoyer systématiquement vers le réseau d’assainissement. Pour rendre le concept visible, l’entreprise a lancé OneWater Brew avec Devil’s Canyon Brewing, utilisant une eau récupérée dans un immeuble de San Francisco puis traitée.

Le projet a ensuite donné des produits mieux caractérisés. Shower Hour IPA est annoncée autour de 6 % ABV avec houblon Azacca, fonio et levure kveik ; Laundry Club Kölsch autour de 4,6 % avec malt Pilsner, Hallertau et un assemblage de levures. Les noms jouent sur la douche et la lessive, mais aucune bière ne reçoit savon ou assouplissant : la source est de l’eau grise purifiée.

Le système de traitement décrit par Epic Cleantec combine plusieurs barrières, dont filtration, traitement biologique, membranes, charbon actif, osmose inverse et désinfection selon les installations.`,
      "chapitres": [
        {
          "titre": "La douche est une source, pas une saveur",
          "texte": "L’eau grise provient d’usages domestiques relativement peu contaminés comparés aux eaux de toilettes, mais elle contient tout de même savons, matières organiques et micro-organismes. Le système OneWater traite cette eau jusqu’à obtenir une qualité adaptée à l’usage démontré. Dire « bière à l’eau de douche » sans le mot « purifiée » retire précisément la moitié importante de l’histoire."
        },
        {
          "titre": "Une anomalie devenue petite gamme",
          "texte": "La première OneWater Brew était surtout un démonstrateur. Les déclinaisons Shower Hour IPA et Laundry Club Kölsch montrent une maturation du concept : la source d’eau reste insolite, mais chaque bière possède désormais une vraie identité de recette. La collection ne contient donc pas un style unique, mais une famille de preuves par la bière."
        }
      ],
      "recette": {
        "titre": "Deux bières, une même boucle d’eau",
        "profilUnique": false,
        "noteProfil": "Epic OneWater Brew désigne un programme ayant produit plusieurs recettes ; les paramètres varient entre Shower Hour IPA et Laundry Club Kölsch.",
        "explicationProfil": "La constante est l’usage d’eau grise de bâtiment traitée par le système OneWater avant brassage avec Devil’s Canyon.",
        "maltsEtCereales": [
          "Shower Hour IPA : fonio documenté parmi les céréales/adjuncts ; base maltée complète non résumée ici.",
          "Laundry Club Kölsch : malt Pilsner documenté."
        ],
        "houblons": [
          "Shower Hour IPA : Azacca documenté.",
          "Laundry Club Kölsch : Hallertau documenté."
        ],
        "levuresEtMicroorganismes": [
          "Shower Hour IPA : levure kveik documentée.",
          "Laundry Club Kölsch : assemblage de levures annoncé par le projet."
        ],
        "ingredientsComplementaires": [
          "Aucun savon ni produit de lessive n’est un ingrédient recherché ; l’eau est traitée avant brassage."
        ],
        "profilEau": "Eau grise récupérée dans des bâtiments puis traitée par plusieurs barrières, pouvant inclure biologique, membranes, charbon actif, osmose inverse et désinfection.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Dépend de la déclinaison : IPA à kveik ou Kölsch avec son assemblage de levures.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Montrer qu’une source d’eau inhabituelle peut alimenter plusieurs vraies recettes après un traitement rigoureux, sans confondre recyclage et aromatisation domestique."
      },
      "sources": [
        {
          "organisme": "Epic Cleantec",
          "edition": null,
          "reference": "Shower Hour IPA and Laundry Club Kölsch",
          "type": "source_producteur_technique",
          "url": "https://epiccleantec.com/blog/shower-hour-ipa-laundry-club-kolsch",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Devil's Canyon Brewing Company",
          "edition": null,
          "reference": "Epic OneWater Brew",
          "type": "source_brasserie",
          "url": "https://www.devilscanyon.com/epic-onewater-brew.html",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-038",
      "code": "C10-038",
      "nom": "ERKO",
      "collectionId": 10,
      "nature": "Pilsner expérimentale / réutilisation de l’eau",
      "parentPrincipalId": null,
      "aliases": [
        "Erko beer"
      ],
      "paysOrigine": [
        "République tchèque"
      ],
      "origine": {
        "libelle": "Veolia / brasserie de Čížová",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Pilsner claire"
      },
      "fermentation": {
        "type": "Basse",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une lager tchèque de type Pilsner brassée avec de l’eau usée recyclée puis purifiée par plusieurs étapes, dont ultrafiltration et osmose inverse. Dans le pays de la Pils, choisir une blonde nette comme démonstrateur revient à faire passer l’eau recyclée devant un jury particulièrement susceptible.",
      "histoireEtOrigines": `ERKO est un projet tchèque associé à Veolia et à une brasserie de Čížová, conçu pour sensibiliser à la sécheresse et à la réutilisation de l’eau. Contrairement aux premières descriptions très vagues qui circulent parfois, Veolia précise que la bière originale est une lager de type Pilsner, non filtrée et non pasteurisée, à fermentation basse.

L’eau provient d’eaux usées traitées puis passe par une chaîne supplémentaire comprenant coagulation, ultrafiltration, osmose inverse, adsorption sur charbon actif et désinfection. Le but est de produire une eau compatible avec le brassage, pas de laisser une trace sensorielle de son origine.

Des déclinaisons plus récentes existent, dont ERKO ZERO ; elles ne doivent pas être confondues avec la bière originale. La collection documente ici le projet initial de lager à eau recyclée.`,
      "chapitres": [
        {
          "titre": "Tester l’eau recyclée dans le temple de la Pils",
          "texte": "Une bière pâle, nette et peu chargée en arômes de fermentation cache mal les défauts d’eau. Choisir une Pilsner comme démonstrateur est donc symboliquement fort : si l’eau purifiée posait un problème sensoriel majeur, la base claire aurait peu d’endroits où le dissimuler."
        },
        {
          "titre": "ERKO n’est pas forcément ERKO ZERO",
          "texte": "Le projet a évolué et Veolia communique désormais sur plusieurs produits. La fiche conserve les générations séparées : la première ERKO illustre la réutilisation d’eau dans une lager tchèque ; une version zéro alcool appartient à une étape ultérieure. L’histoire reste lisible seulement si l’on évite de fusionner toutes les fiches marketing."
        }
      ],
      "recette": {
        "titre": "Une Pilsner qui commence par l’osmose inverse",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Lager de type Pilsner à fermentation basse, non filtrée et non pasteurisée dans la présentation du projet initial.",
        "maltsEtCereales": [
          "Base de Pilsner tchèque ; malt exact et composition non publiés dans les sources techniques retenues."
        ],
        "houblons": [
          "Houblons non documentés avec précision dans les documents de réutilisation de l’eau."
        ],
        "levuresEtMicroorganismes": [
          "Levure de fermentation basse ; souche non publiée."
        ],
        "ingredientsComplementaires": [
          "Aucun constituant d’eaux usées n’est conservé comme ingrédient intentionnel après traitement."
        ],
        "profilEau": "Eau usée traitée puis soumise notamment à coagulation, ultrafiltration, osmose inverse, charbon actif et désinfection avant brassage.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation basse d’une lager de type Pilsner ; paramètres détaillés non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une Pilsner tchèque assez propre pour faire oublier au palais l’histoire très longue de son eau."
      },
      "sources": [
        {
          "organisme": "Veolia",
          "edition": null,
          "reference": "ERKO — beer brewed from recycled wastewater",
          "type": "source_entreprise",
          "url": "https://www.veolia.cz/cs/erko",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Veolia",
          "edition": null,
          "reference": "Drought, recycling wastewater and reuse",
          "type": "source_entreprise",
          "url": "https://www.veolia.com/en/news/drought-recycling-wastewater-reuse-drinking-water",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Radio Prague International",
          "edition": null,
          "reference": "Czech brewery rolls out wastewater beer",
          "type": "source_presse",
          "url": "https://english.radio.cz/czech-brewery-rolls-out-first-wastewater-beer-8128614",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-039",
      "code": "C10-039",
      "nom": "Egtvedpigens Bryg",
      "collectionId": 10,
      "nature": "Reconstitution protohistorique / hybride bière-hydromel",
      "parentPrincipalId": null,
      "aliases": [
        "Egtved Girl's beer"
      ],
      "paysOrigine": [
        "Danemark"
      ],
      "origine": {
        "libelle": "Nationalmuseet / reconstitutions modernes dont brasserie Skands",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": null,
        "max": null,
        "unite": "%",
        "statut": "variable",
        "libelle": "Non documenté"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Ambrée / boisson de céréales et miel"
      },
      "fermentation": {
        "type": "Reconstruction moderne / fermentation historique inconnue",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une boisson inspirée du récipient trouvé dans la tombe de la jeune fille d’Egtved, morte à l’âge du Bronze : blé, miel, baies rouges, myrte des marais et pollen. Une recette funéraire qui ressemble moins à une bière moderne qu’à un carrefour entre bière, hydromel et paysage danois.",
      "histoireEtOrigines": `La jeune fille d’Egtved a été enterrée au Danemark vers 1370 av. J.-C. Dans son cercueil de chêne se trouvait un récipient en écorce contenant les restes d’une boisson fermentée. Les analyses et la présentation du Nationalmuseet mentionnent du blé, du miel, des airelles ou canneberges, du myrte des marais et une quantité importante de pollen, notamment de tilleul.

Ces indices suggèrent une boisson fermentée complexe, parfois décrite comme bière sucrée au miel, braggot ou mélange bière-hydromel. Les catégories modernes sont forcément imparfaites : l’âge du Bronze n’avait aucune raison de respecter nos menus déroulants.

Des reconstitutions danoises comme Egtvedpigens Bryg s’inspirent de ces résidus. Elles ne peuvent évidemment pas récupérer la souche de levure originelle ni chaque proportion, mais elles permettent de tester l’équilibre possible entre céréales, miel, fruits et plantes.`,
      "chapitres": [
        {
          "titre": "Une recette écrite en résidus",
          "texte": "L’archéologie des boissons travaille souvent avec des traces : grains, pollens, composés végétaux, dépôts dans un récipient. Chaque indice renseigne une matière possible, mais la quantité initiale et le procédé peuvent rester inconnus. La reconstruction est donc un raisonnement, pas une transcription."
        },
        {
          "titre": "Quand le style n’existe pas encore",
          "texte": "Appeler la boisson « bière » est pratique parce que le blé fermenté joue un rôle, mais le miel peut rapprocher le produit d’un hydromel et les plantes d’un gruit. La fiche assume cette indéfinition : le meilleur nom moderne est peut-être simplement « boisson fermentée de l’âge du Bronze »."
        }
      ],
      "recette": {
        "titre": "Reconstituer un fond de récipient vieux de 3 300 ans",
        "profilUnique": false,
        "noteProfil": "Les ingrédients sont inspirés d’analyses archéologiques ; proportions, levure et protocole historique restent inconnus.",
        "explicationProfil": "Les reconstitutions modernes combinent les éléments identifiés dans ou autour du récipient funéraire sans pouvoir reproduire exactement la boisson originale.",
        "maltsEtCereales": [
          "Blé / grains de blé documentés dans les analyses ; maltage historique exact inconnu."
        ],
        "houblons": [
          "Aucun houblon n’est nécessairement documenté ; le myrte des marais fournit une piste aromatique plus cohérente avec les résidus."
        ],
        "levuresEtMicroorganismes": [
          "Micro-organismes historiques inconnus ; les reconstitutions utilisent une fermentation moderne."
        ],
        "ingredientsComplementaires": [
          "Miel.",
          "Airelles ou canneberges / baies rouges selon l’interprétation des résidus.",
          "Myrte des marais.",
          "Pollen, notamment de tilleul, observé dans les vestiges."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Procédé historique inconnu ; toute reconstruction d’empâtage est moderne et expérimentale.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation moderne dans les reconstitutions ; la souche de l’âge du Bronze n’est pas connue.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une boisson archéologique crédible dans ses ingrédients tout en acceptant qu’elle déborde les catégories bière/hydromel contemporaines."
      },
      "sources": [
        {
          "organisme": "National Museum of Denmark",
          "edition": null,
          "reference": "The Egtved Girl — fermented drink in the burial",
          "type": "source_museale",
          "url": "https://en.natmus.dk/historical-knowledge/denmark/prehistoric-period-until-1050-ad/the-bronze-age/the-egtved-girl/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Snoremark",
          "edition": null,
          "reference": "Bronze Age girl buried with braggot/mead — reconstruction",
          "type": "source_producteur_reconstitution",
          "url": "https://snoremark.dk/en/girl-from-bronze-age-was-barried-with-braggot-mead/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-040",
      "code": "C10-040",
      "nom": "St. Anthony's Quad",
      "collectionId": 10,
      "nature": "Quadrupel sauvage / bière de terroir microbien",
      "parentPrincipalId": null,
      "aliases": [
        "The Quad"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Urban Artifact / National Shrine of St. Anthony, Cincinnati",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 10.1,
        "max": 10.1,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Brune / Belgian-style quadrupel"
      },
      "fermentation": {
        "type": "Haute / levure sauvage capturée sur le sanctuaire",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une quadrupel à 10,1 % fermentée avec une culture sauvage capturée sur la propriété du sanctuaire franciscain St. Anthony, puis vieillie en barriques de vin rouge. La sainteté n’est pas un paramètre de fermentation ; le lieu, en revanche, devient réellement source microbienne.",
      "histoireEtOrigines": `Urban Artifact et le National Shrine of St. Anthony à Cincinnati ont monté cette bière comme collaboration caritative et expérience de capture de levure sauvage. Des dizaines de récipients contenant un milieu attractif ont été disposés sur la propriété, protégés par une étamine, afin d’exposer le liquide aux micro-organismes présents dans l’air et sur le site.

Après sélection et culture, la levure sauvage a servi à fermenter une Belgian-style quadrupel riche. Les sources du projet décrivent ensuite un vieillissement prolongé en barriques de vin rouge, autour de dix mois, pour un produit final annoncé à 10,1 % ABV.

L’histoire est presque monastique sans être une bière d’abbaye au sens traditionnel : ce ne sont pas des moines qui transmettent une souche séculaire, mais une équipe qui part à la chasse aux levures sur un terrain religieux contemporain.`,
      "chapitres": [
        {
          "titre": "Vingt-huit pièges à levure dans un sanctuaire",
          "texte": "La capture sauvage n’est pas un acte mystique. On expose un milieu nutritif à l’environnement, puis on observe ce qui s’y développe et on sélectionne les cultures intéressantes. Le nombre de pièges augmente les chances de trouver un candidat fermentaire viable. La grâce divine peut rester dans le récit ; la boîte de Petri garde la responsabilité technique."
        },
        {
          "titre": "Le terroir peut tenir dans un jardin",
          "texte": "Une levure capturée sur place permet de raconter un terroir microbien très local. Elle ne garantit pas que la souche soit unique au sanctuaire, mais elle crée un lien matériel entre lieu et fermentation. Le passage en barrique de vin rouge ajoute ensuite un deuxième terroir, celui du bois et de son usage précédent."
        }
      ],
      "recette": {
        "titre": "La quad qui a tendu des pièges au vent",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Belgian-style quadrupel à 10,1 % fermentée avec une culture sauvage capturée sur la propriété puis élevée en barrique de vin rouge.",
        "maltsEtCereales": [
          "Base riche de quadrupel belge ; composition exacte des malts et sucres non publiée dans les sources retenues."
        ],
        "houblons": [
          "Houblonnage non documenté avec précision ; probablement structurel plutôt que vedette, sans en inventer les variétés."
        ],
        "levuresEtMicroorganismes": [
          "Levure sauvage capturée sur la propriété du sanctuaire à partir de pièges de culture puis sélectionnée/propagée."
        ],
        "ingredientsComplementaires": [
          "Apports issus du vieillissement en barriques ayant contenu du vin rouge."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation haute avec la culture sauvage sélectionnée ; paramètres détaillés non publiés.",
        "maturation": "Environ dix mois en barriques de vin rouge selon les descriptions du projet.",
        "profilRecherche": "Une quadrupel forte où la singularité vient d’un véritable lien microbien avec un lieu, sans confondre fermentation sauvage et miracle."
      },
      "sources": [
        {
          "organisme": "National Shrine of St. Anthony",
          "edition": null,
          "reference": "St. Anthony’s Quad Beer",
          "type": "source_institutionnelle",
          "url": "https://www.stanthony.org/st-anthonys-quad-beer/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Brewbound",
          "edition": null,
          "reference": "Urban Artifact collaborates with St. Anthony’s Shrine on a Quad",
          "type": "source_professionnelle",
          "url": "https://www.brewbound.com/news/urban-artifact-collaborates-st-anthonys-shrine-friary-quad/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "The Catholic Telegraph",
          "edition": null,
          "reference": "St. Anthony Quad beer to debut",
          "type": "source_presse",
          "url": "https://www.thecatholictelegraph.com/st-anthony-quad-beer-to-debut-fat-tuesday/38390",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-041",
      "code": "C10-041",
      "nom": "Carlsberg Rebrew 1883",
      "collectionId": 10,
      "nature": "Reconstitution historique / levure patrimoniale",
      "parentPrincipalId": null,
      "aliases": [
        "Carlsberg 1883"
      ],
      "paysOrigine": [
        "Danemark"
      ],
      "origine": {
        "libelle": "Carlsberg Research Laboratory",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.6,
        "max": 4.6,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "variable",
        "libelle": "Non documentée"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Cuivrée / lager foncée"
      },
      "fermentation": {
        "type": "Basse / levure pure Carlsberg historique",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une lager foncée rebrassée avec une culture Carlsberg issue d’une bouteille de 1883 retrouvée dans les anciennes caves. Pas besoin de momie ni de météorite : une levure de brasserie historique parfaitement datée suffit à ouvrir une porte sur la révolution scientifique de la fermentation.",
      "histoireEtOrigines": `Carlsberg a retrouvé dans ses caves des bouteilles anciennes datant de 1883. Le laboratoire de recherche a réussi à récupérer et cultiver une levure viable associée à cette période, puis a développé Rebrew 1883 afin de recréer une lager inspirée du goût et des méthodes de la fin du XIXe siècle.

L’année est particulièrement symbolique. C’est en 1883 qu’Emil Christian Hansen, au Carlsberg Laboratory, parvient à isoler et propager une culture pure de levure de lager, étape fondamentale de l’histoire brassicole moderne. La maîtrise d’une souche stable permet alors de réduire l’imprévisibilité des fermentations et Carlsberg diffuse largement cette avancée.

La bière moderne documentée titre 4,6 %, avec malts Munich, caramel et torréfié, houblon Hallertauer Tradition et la levure historique réactivée. Ici, l’insolite n’est pas grotesque : il porte une blouse, tient un microscope et a changé la bière mondiale.`,
      "chapitres": [
        {
          "titre": "1883 : quand la levure devient un individu",
          "texte": "Avant l’isolement de cultures pures, les fermentations étaient souvent menées par des populations microbiennes moins contrôlées. Les travaux de Hansen permettent de sélectionner une cellule puis de multiplier sa descendance, donnant une culture beaucoup plus reproductible. Cette idée paraît banale aujourd’hui parce qu’elle a précisément réussi."
        },
        {
          "titre": "Rebrew n’est pas une bouteille ouverte et servie 133 ans plus tard",
          "texte": "La vieille bière n’est pas versée telle quelle dans les verres modernes. Le laboratoire récupère une culture viable, la propage, puis brasse avec des matières premières contemporaines choisies pour reconstruire un profil historique. C’est une reconstitution scientifique, pas une dégustation directe du liquide de 1883."
        }
      ],
      "recette": {
        "titre": "Une machine à remonter le temps parfaitement danoise",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Carlsberg documente les grands éléments de la reconstitution : levure historique, malts sombres et houblon Hallertauer Tradition pour une lager à 4,6 %.",
        "maltsEtCereales": [
          "Malt Munich.",
          "Malt caramel.",
          "Malt torréfié."
        ],
        "houblons": [
          "Hallertauer Tradition."
        ],
        "levuresEtMicroorganismes": [
          "Culture de levure Carlsberg de 1883 réactivée et propagée par le Carlsberg Research Laboratory."
        ],
        "ingredientsComplementaires": [
          "Aucun ingrédient archéologique exotique : la singularité réside dans la levure patrimoniale et la reconstruction historique."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation basse avec la culture historique ; paramètres précis de production non intégralement publiés.",
        "maturation": "Garde de lager selon la reconstruction Carlsberg ; durée et températures détaillées non fournies comme recette ouverte complète.",
        "profilRecherche": "Une lager cuivrée qui raconte l’invention de la culture pure de levure sans prétendre que chaque molécule du brassin provient de 1883."
      },
      "sources": [
        {
          "organisme": "Carlsberg Group",
          "edition": null,
          "reference": "Carlsberg Research Lab rebrews the father of quality beers",
          "type": "source_producteur_scientifique",
          "url": "https://www.carlsberggroup.com/newsroom/carlsberg-research-lab-rebrews-the-father-of-quality-beers/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Carlsberg",
          "edition": null,
          "reference": "1883 beer",
          "type": "source_producteur",
          "url": "https://www.carlsberg.com/en/our-beer/1883/",
          "consultation": "2026-08-09"
        },
        {
          "organisme": "Carlsberg Group",
          "edition": null,
          "reference": "1883 Rebrew — scientific discoveries",
          "type": "source_producteur_scientifique",
          "url": "https://www.carlsberggroup.com/pursuit-of-better/scientific-discoveries/1883-rebrew/",
          "consultation": "2026-08-09"
        }
      ]
    },
    {
      "id": "c10-042",
      "code": "C10-042",
      "nom": "Chernobyl Iиfusioи IPA",
      "collectionId": 10,
      "nature": "Hazy IPA à anomalie thématique",
      "parentPrincipalId": null,
      "aliases": [
        "Chernobyl Infusion IPA"
      ],
      "paysOrigine": [
        "Norvège"
      ],
      "origine": {
        "libelle": "Gullkrona Eliksir-kokeri / Engelsrud Gladbryggeri",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 7.8,
        "max": 7.8,
        "unite": "%",
        "statut": "exact"
      },
      "amertume": {
        "min": 60,
        "max": 60,
        "unite": "IBU",
        "statut": "exact"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "",
        "statut": "variable",
        "libelle": "Hazy / New England IPA"
      },
      "fermentation": {
        "type": "Haute",
        "details": "Les paramètres complets de fermentation ne sont pas publiés dans les sources retenues."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [],
        "libelle": "Non documenté"
      },
      "description": "Une hazy IPA norvégienne à 7,8 % et 60 IBU dont le caractère « nucléaire » appartient au nom et à l’imagerie, pas à la liste d’ingrédients. Elle termine la collection avec une anomalie salutaire : parfois le bizarre est seulement une histoire que l’étiquette raconte très fort.",
      "histoireEtOrigines": `Chernobyl Iиfusioи IPA est documentée comme une collaboration homebrew entre Gullkrona Eliksir-kokeri et Engelsrud Gladbryggeri. La fiche publique disponible la classe comme New England / Hazy IPA, à 7,8 % ABV et 60 IBU, avec une communication volontairement chargée de références à Tchernobyl, au compteur Geiger et à l’excès de houblon.

Aucun ingrédient radioactif, aucune matière provenant de la zone de Tchernobyl et aucune contamination ne sont documentés. Le caractère insolite est donc essentiellement thématique. Ce constat pourrait sembler décevant après quarante et une cartes de microbes, animaux, épaves et eaux recyclées ; il est en réalité une excellente conclusion méthodologique.

Une encyclopédie du bizarre doit aussi savoir dire quand le bizarre s’arrête à la narration. Sinon, elle devient elle-même radioactive en informations douteuses.`,
      "chapitres": [
        {
          "titre": "Le compteur Geiger peut rester au placard",
          "texte": "Les 60 IBU et le profil hazy sont des données brassicoles ; la radioactivité ne l’est pas. Les plaisanteries de la fiche de bière font partie du thème, mais elles ne doivent pas être traduites en fait matériel. Le vert néon appartient au décor graphique, pas à l’analyse chimique."
        },
        {
          "titre": "La dernière anomalie : une bière presque normale",
          "texte": "Cette carte rappelle qu’une collection de curiosités mélange nécessairement plusieurs natures d’étrangeté. Certaines bières sont singulières par un ingrédient, d’autres par une souche, une provenance, un procédé, un record ou une reconstitution. Chernobyl Iиfusioи est singulière surtout par son récit. La classification elle-même devient alors la leçon finale."
        }
      ],
      "recette": {
        "titre": "Une NEIPA, sans isotope caché",
        "profilUnique": true,
        "noteProfil": "Cette entrée décrit un objet brassicole singulier : elle ne constitue pas une recette-type à reproduire.",
        "explicationProfil": "Hazy/New England IPA documentée à 7,8 % ABV et 60 IBU ; les houblons, malts et levure exacts ne sont pas publiés dans la fiche publique disponible.",
        "maltsEtCereales": [
          "Base de hazy IPA non documentée avec précision."
        ],
        "houblons": [
          "Houblonnage important cohérent avec la description et les 60 IBU, sans variétés identifiées dans la source retenue."
        ],
        "levuresEtMicroorganismes": [
          "Levure de fermentation haute de type IPA ; souche non documentée."
        ],
        "ingredientsComplementaires": [
          "Aucun ingrédient radioactif ou provenant de Tchernobyl n’est documenté."
        ],
        "profilEau": "Profil d’eau non documenté dans les sources retenues.",
        "empatage": "Empâtage non documenté avec assez de précision pour être reproduit fidèlement.",
        "ebullitionEtHoublonnage": "Ébullition et calendrier de houblonnage non documentés avec assez de précision pour être reproduits fidèlement.",
        "fermentation": "Fermentation haute d’une hazy IPA ; paramètres non publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une IPA houblonnée dont le thème nucléaire reste explicitement un thème, démontrant que l’insolite peut être narratif plutôt que matériel."
      },
      "sources": [
        {
          "organisme": "Untappd",
          "edition": null,
          "reference": "Chernobyl Iиfusioи IPA — fiche publique",
          "type": "source_secondaire",
          "url": "https://untappd.com/b/gullkrona-eliksir-kokeri-chernobyl-iifusioi-ipa/2517910",
          "consultation": "2026-08-09"
        }
      ]
    }
  ]
};

export default collection;
