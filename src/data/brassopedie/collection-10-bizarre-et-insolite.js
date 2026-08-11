// Données éditoriales : chaque entrée documente un objet brassicole singulier.
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
      "description": "Bottled Instinct transforme une culture lactique en manifeste de marque : ses lactobacilles sont présentés comme issus d’un prélèvement vaginal, isolés puis multipliés avant de rejoindre une sour ale. Aucun fluide corporel n’est décrit comme versé dans la cuve. L’étrangeté tient autant à l’origine revendiquée du micro-organisme qu’à l’érotisation très calculée de son récit.",
      "histoireEtOrigines": `The Order of Yoni a fait connaître Bottled Instinct au milieu des années 2010 en promettant une bière portant la « féminité » d’un modèle jusque dans sa fermentation. La communication du projet polonais attribue la culture lactique de cette version à Alexandra Brendlova. Elle décrit un prélèvement vaginal confié à un laboratoire, l’isolement de bactéries lactiques, leur contrôle puis leur propagation. Ce vocabulaire est celui du producteur : aucune publication scientifique indépendante ne permet d’identifier ici une espèce ou une souche précise, ni de vérifier l’ensemble du protocole.

Le mécanisme brassicole est pourtant beaucoup moins mystérieux que le slogan. Des lactobacilles produisent de l’acide lactique à partir de sucres et peuvent contribuer à l’acidité d’une bière. La singularité ne réside donc pas dans leur fonction, familière aux fermentations alimentaires, mais dans le site humain revendiqué comme origine de l’isolat. Une culture multipliée en laboratoire descend d’un prélèvement ; elle n’équivaut pas à ajouter le prélèvement lui-même au brassin.

Les fiches de produit conservées donnent un portrait plus concret : moût à 14 °Blg, malts Pilsner, Munich, caramel et torréfié, houblons Cascade et Iunga, levure brassicole, lactobacilles et copeaux de chêne au cognac. Ces éléments montrent qu’une recette structurée existe derrière l’affiche. Ils ne suffisent cependant pas à authentifier la revendication de « première bière vaginale au monde », qui reste une formule promotionnelle sans recherche comparative publiée.

Bottled Instinct fonctionne ainsi sur deux plans. Dans le fermenteur, elle relève de la microbiologie lactique. Dans sa publicité, elle transforme le corps d’une femme en provenance, promesse sensorielle et argument de vente. Documenter les deux évite aussi bien la fausse recette anatomique que la reprise naïve d’un discours volontairement provocateur.`,
      "chapitres": [
        {
          "titre": "Le laboratoire intime",
          "texte": "Le point techniquement intéressant est l’usage de lactobacilles comme agents d’acidification. Les bactéries lactiques transforment des sucres en acide lactique ; ce principe est banal dans de nombreuses fermentations alimentaires et brassicoles. Ce qui rend Bottled Instinct singulière n’est donc pas la fonction du micro-organisme, mais l’endroit revendiqué comme origine de l’isolat et la manière spectaculaire dont cette origine est racontée."
        },
        {
          "titre": "Le scandale n’est pas dans la pipette",
          "texte": "Les communications autour de la gamme mentionnent une sour ale, des levures brassicoles et une culture lactique ; les fiches de produit détaillent aussi quatre malts, deux houblons et des copeaux de chêne au cognac. En revanche, la souche précise, ses proportions, le protocole du laboratoire et la chronologie complète ne sont pas publiés. La composition connue s’arrête là où commencerait une fausse recette secrète."
        }
      ],
      "recette": {
        "titre": "Anatomie documentée du brassin",
        "profilUnique": true,
        "noteProfil": "La communication intime entoure une bière acide réelle ; elle ne documente ni ajout de fluide humain ni protocole ouvert à reproduire.",
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
          "organisme": "Order of Yoni",
          "edition": null,
          "reference": "Woman’s Essence — présentation du concept et des cultures lactiques",
          "type": "source_producteur",
          "url": "https://orderyoni.com/womans_essence/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BeerAdvocate",
          "edition": null,
          "reference": "Bottled Instinct — fiche de référence communautaire",
          "type": "source_secondaire",
          "url": "https://www.beeradvocate.com/beer/profile/50811/316321/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Untappd",
          "edition": null,
          "reference": "The Order of Yoni — Bottled Instinct",
          "type": "source_secondaire",
          "url": "https://untappd.com/b/the-order-of-yoni-bottled-instinct/2107354",
          "consultation": "2026-08-11"
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
      "description": "Neuf poils prélevés dans la barbe de John Maier ont fourni à Rogue Ales une culture capable de fermenter une ale. La bouteille ne contient donc ni barbe hachée ni secret de barbier : White Labs a isolé et propagé une levure trouvée sur les follicules. Le gag pileux devient une petite enquête sur le terroir microbien d’une brasserie.",
      "histoireEtOrigines": `En 2012, Rogue Ales cherchait une levure locale qui compléterait les orges et houblons cultivés par la maison en Oregon. Trois prélèvements réalisés dans sa houblonnière furent envoyés à White Labs, sans produire de souche jugée adaptée au brassage. L’équipe ajouta alors, comme plaisanterie, neuf poils de la barbe de John Maier, maître-brasseur de Rogue et porteur de cette barbe depuis 1978. Cette fois, une culture fermentaire exploitable apparut.

White Labs ne s’est pas contenté de placer les poils dans un fermenteur. Le laboratoire a cultivé les micro-organismes, évalué leur aptitude à fermenter et comparé la culture avec Pacman, la levure maison de Rogue. Les comptes rendus de l’époque indiquent qu’elle n’était pas simplement Pacman retrouvée par contamination, même si les observations de comportement évoquaient un profil intermédiaire entre levure de brasserie et levure sauvage. Sans séquençage public complet, mieux vaut parler d’une culture isolée et caractérisée que d’une espèce entièrement nouvelle.

Le projet porta d’abord le nom de travail New Crustacean, clin d’œil à l’Old Crustacean de Rogue, avant d’être commercialisé sous le nom beaucoup plus immédiat de Beard Beer. Sa célébrité repose sur une inversion efficace : ce qui semble hygiéniquement douteux est en réalité passé par une chaîne de sélection et de propagation précisément destinée à obtenir une culture utilisable.

La barbe n’apporte donc ni fibre, ni texture, ni arôme de poil. Elle a servi de support écologique à une levure qui pouvait provenir de la peau, de l’environnement ou de décennies passées au milieu d’une brasserie riche en cellules en suspension. Beard Beer pousse le mot « local » jusqu’au visage du brasseur, mais sa vraie histoire reste celle d’un laboratoire ayant transformé un prélèvement facétieux en inoculum contrôlé.`,
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
        "noteProfil": "White Labs a isolé et contrôlé la culture ; des poils de barbe bruts ne constituent jamais un inoculum sûr.",
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
          "organisme": "The Scientist",
          "edition": null,
          "reference": "Beard Beer — enquête auprès de Rogue Ales et White Labs",
          "type": "source_presse_scientifique",
          "url": "https://www.the-scientist.com/beard-beer-40384",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Appellation Beer",
          "edition": null,
          "reference": "New Crustacean? A beer made with yeast from John Maier’s beard",
          "type": "source_secondaire",
          "url": "https://appellationbeer.com/blog/new-crustacean-a-beer-made-with-yeast-from-john-maiers-beard/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Eater",
          "edition": null,
          "reference": "Beer made from a man’s beard yeast",
          "type": "source_secondaire",
          "url": "https://www.eater.com/2015/9/28/9409427/beer-made-from-mans-beard-yeast-rogue-ales-no-shave-november",
          "consultation": "2026-08-11"
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
      "description": "Dans PU:REST, l’eau usée n’est pas un arôme provocateur mais une matière première entièrement retraitée. Purifiée sur le site expérimental de Hammarby Sjöstadsverk, contrôlée en laboratoire puis livrée à Nya Carnegiebryggeriet, elle a servi à une pilsner suédoise limpide. Le verre met surtout à l’épreuve notre réflexe de confondre l’histoire d’une eau avec sa qualité présente.",
      "histoireEtOrigines": `Le 25 mai 2018, l’IVL Swedish Environmental Research Institute, Nya Carnegiebryggeriet et Carlsberg Sweden ont lancé PU:REST comme la première bière suédoise brassée avec de l’eau recyclée. L’objectif n’était pas d’ajouter un goût d’égout à une pilsner, mais de rendre visible un enjeu d’ingénierie : une eau usée peut redevenir une ressource de qualité alimentaire si elle traverse une filière de traitement et de contrôle adaptée.

L’eau provenait de Hammarby Sjöstadsverk, plateforme de recherche et de démonstration consacrée au traitement des eaux à Stockholm. Elle a franchi plusieurs étapes de purification, puis des analyses de laboratoire, avant d’être transportée à la brasserie. Nya Carnegiebryggeriet l’a associée à du malt et du houblon biologiques pour produire une pilsner claire annoncée à 4,8 %. Quatre semaines après le brassage, le démonstrateur pouvait être servi : la vitesse de la recette contrastait avec les années de recherche nécessaires pour rendre la boucle crédible.

La difficulté principale n’était pas seulement chimique. Les projets de réutilisation potable rencontrent un obstacle de perception souvent résumé par le dégoût de l’origine. Une bière est un excellent objet de médiation parce que l’eau y tient une place majeure et que le consommateur doit décider s’il juge le liquide d’après son passé ou d’après les mesures réalisées après traitement.

PU:REST ne démontre pas que n’importe quelle eau usée est buvable, ni qu’un brassage domestique peut remplacer une usine de purification. Elle prouve quelque chose de plus précis : dans cette chaîne contrôlée, une eau recyclée a satisfait les vérifications du projet et a pu devenir l’ingrédient principal d’une bière conventionnelle. Le produit est donc à la fois pilsner, prototype d’économie circulaire et expérience psychologique servie fraîche.`,
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
        "noteProfil": "La Pilsner dépend d’une installation pilote, de contrôles analytiques et d’autorisations ; aucune filtration domestique n’en offre l’équivalent.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewing4EU",
          "edition": null,
          "reference": "PU:REST — Sweden’s first beer brewed with purified wastewater",
          "type": "source_professionnelle",
          "url": "https://brewing4.eu/sustainability-initiatives/purest-swedens-first-beer-brewed-with-purified-waste-water/",
          "consultation": "2026-08-11"
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
      "description": "Pisner relie les toilettes du festival de Roskilde à un champ d’orge, puis ce champ à une brasserie. Les 54 000 litres d’urine collectés en 2015 ont servi de fertilisant ; ils n’ont jamais remplacé l’eau du brassin. Ce circuit de nutriments, baptisé « beercycling », est une histoire d’agronomie circulaire cachée derrière un calembour volontairement douteux.",
      "histoireEtOrigines": `Au festival de Roskilde 2015, le Danish Agriculture & Food Council a collecté environ 54 000 litres d’urine auprès des visiteurs. L’opération répondait à un problème très matériel : l’urine contient notamment de l’azote et du phosphore utiles aux plantes, mais ces nutriments deviennent une charge lorsqu’ils partent dans le réseau d’assainissement. Le projet proposait de les remettre dans un cycle agricole au lieu de les traiter uniquement comme un déchet.

Au printemps 2016, la matière collectée fut utilisée comme fertilisant sur une culture d’orge. La récolte annoncée atteignit onze tonnes d’orge brassicole. Après transformation de la céréale en malt, Nørrebro Bryghus produisit Pisner en 2017, avec l’ambition annoncée de remplir environ 60 000 bouteilles. Entre les urinoirs et la capsule se trouvent donc une saison culturale, une récolte, un maltage et un brassage : la distance compte autant que la provocation du nom.

La formule « bière faite avec de l’urine » est trompeuse si elle suggère un ajout direct dans le moût. L’urine a nourri le sol et la plante ; l’ingrédient arrivé à la brasserie était de l’orge. Le procédé se rapproche, dans sa logique, d’une céréale cultivée avec un fertilisant organique, même si la provenance humaine et collective rend le récit beaucoup plus mémorable.

Le mot « beercycling » donne à l’expérience sa boucle parfaite : le public boit au festival, fournit des nutriments, puis retrouve ceux-ci indirectement dans une génération ultérieure de bière. Pisner n’est pas remarquable par une saveur corporelle documentée, mais par sa chaîne d’approvisionnement. Le calembour attire l’attention ; le champ explique ce qui s’est réellement passé.`,
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
        "noteProfil": "L’urine fertilise l’orge au champ puis disparaît de la chaîne alimentaire ; elle n’est jamais un ajout de brassage.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Beer Street Journal",
          "edition": null,
          "reference": "Nørrebro Bryghus Pisner",
          "type": "source_secondaire",
          "url": "https://beerstreetjournal.com/norrebro-bryghus-pisner/",
          "consultation": "2026-08-11"
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
      "description": "Pour Hvalur 2, Steðji a salé puis fumé des testicules de rorqual commun au-dessus de bouse de mouton séchée avant de les intégrer à une bière de Þorri. L’ingrédient animal est réel ; la bouse sert de combustible, non d’assaisonnement direct. Derrière le raccourci spectaculaire se rencontrent une technique de fumage islandaise, une fête hivernale et un conflit contemporain sur la chasse à la baleine.",
      "histoireEtOrigines": `Steðji a présenté Hvalur 2 au début de 2015 pour Þorri, saison festive d’hiver durant laquelle des préparations islandaises anciennes ou fortement identitaires reviennent au premier plan. La brasserie disait travailler les testicules de rorqual commun par salage et fumage, puis en employer dans la bière. La fumée provenait de bouse de mouton séchée, combustible historiquement utile dans un pays où le bois était rare. Ce détail n’est donc pas une seconde matière animale jetée dans la cuve : il décrit la source de fumée utilisée pour traiter la première.

La curiosité culinaire ne peut toutefois être séparée de l’origine du rorqual. L’Islande pratique la chasse commerciale à la baleine en formulant une réserve au moratoire de la Commission baleinière internationale. Le gouvernement et les opérateurs l’ont présentée comme une exploitation encadrée ; des organisations de conservation et de protection animale la contestent sur les plans écologique, éthique et du bien-être lors de la mise à mort. Le statut mondial du rorqual commun est aujourd’hui « vulnérable » sur la Liste rouge de l’UICN — et non plus « en danger » comme l’indiquaient de nombreux articles de 2015 — tandis que d’autres législations nationales peuvent conserver des classements plus sévères.

Hvalur 2 fut ainsi vendue comme prolongement de pratiques alimentaires nord-atlantiques, mais elle fonctionnait aussi comme objet publicitaire calculé. La référence à Þorri et au fumage traditionnel donne un contexte réel ; elle ne transforme pas automatiquement toute décision moderne de chasse en tradition incontestable.

La bière exige donc trois distinctions. Le testicule est l’ingrédient annoncé. La bouse est le combustible du fumoir. La légitimité de la chasse reste un débat, même lorsque la matière a été acquise dans le cadre légal islandais revendiqué par le producteur. Le verre réunit ces plans sans les résoudre.`,
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
        "noteProfil": "L’emploi de produits de baleine soulève des enjeux de conservation, de droit et d’éthique ; le documenter ne vaut pas recommandation de le reproduire.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Barnivore",
          "edition": null,
          "reference": "Steðji Brewery Hvalur 2 Þorraöl — vérification produit",
          "type": "source_secondaire",
          "url": "https://www.barnivore.com/products/61118-steji-brewery-hvalur-2-orral-54-contains-sheep-shit-smoked-whale-testicles",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "International Whaling Commission",
          "edition": null,
          "reference": "Fin whale — conservation status and international context",
          "type": "source_institutionnelle",
          "url": "https://iwc.int/about-whales/whale-species/fin-whale",
          "consultation": "2026-08-11"
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
      "description": "Wynkoop annonça d’abord Rocky Mountain Oyster Stout comme un poisson d’avril, en jouant sur le nom régional des testicules de taureau cuisinés. Le public réclama la bière imaginaire ; la brasserie du Colorado répondit par un vrai stout contenant 25 livres de testicules tranchés et rôtis. La plaisanterie dut alors apprendre à tenir debout dans un verre.",
      "histoireEtOrigines": `Dans l’Ouest américain, les « Rocky Mountain oysters » ne viennent ni de la mer ni d’un mollusque : ce sont des testicules de taureau, généralement pelés, tranchés et frits ou rôtis. Wynkoop Brewing Company exploita ce double sens dans une vidéo de poisson d’avril en 2012. L’annonce devait rester une blague de brasserie. Les réactions enthousiastes convainquirent pourtant l’équipe de produire une première cuvée pour de bon à l’automne suivant.

Le brassin initial de huit barils utilisa 25 livres de testicules frais, découpés puis rôtis. La recette publiée pour la mise en canette en 2013 décrit une base de foreign-style stout avec malts du Colorado, orge torréfiée, sept malts spéciaux et houblon Styrian Goldings. Wynkoop annonçait alors 7,5 % d’alcool et inventa même l’unité « trois BPB », pour « balls per barrel ». Sous le jeu de mots, le choix de rôtir l’ingrédient l’inscrivait dans le profil chocolaté, café et grillé d’un stout plutôt que de lui demander d’exister seul.

L’histoire illustre une trajectoire fréquente dans la bière expérimentale : une idée conçue pour attirer l’attention devient un produit que des dégustateurs jugeront sur son équilibre. Le testicule fournit le titre et une composante savoureuse revendiquée, mais les malts sombres, l’amertume et la texture doivent encore produire une bière cohérente.

Les archives ne donnent pas toutes le même titre alcoométrique : la toute première présentation autour du festival de 2012 est parfois annoncée à 7 %, tandis que la version canettée documentée par CraftBeer.com l’est à 7,5 %. Il s’agit vraisemblablement d’éditions ou de mesures distinctes, non d’un chiffre universel. Ce qui reste stable est le retournement fondateur : le public a pris le canular au sérieux, et Wynkoop a fini par devoir le brasser.`,
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
        "noteProfil": "La recette de lancement documente 25 livres de testicules préparés professionnellement ; dosage, hygiène et version exacte restent indissociables du lot commercial.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Guys Drinking Beer",
          "edition": null,
          "reference": "Wynkoop Rocky Mountain Oyster Stout review",
          "type": "source_secondaire",
          "url": "https://www.guysdrinkingbeer.com/wynkoop-rocky-mountain-oyster-stout-review/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BeerAdvocate",
          "edition": null,
          "reference": "Rocky Mountain Oyster Stout — versions et données de produit",
          "type": "source_secondaire",
          "url": "https://www.beeradvocate.com/beer/profile/111/83843/",
          "consultation": "2026-08-11"
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
      "description": "Chez Dogfish Head, plus de cent personnes ont mâché du maïs violet péruvien pour amorcer la transformation de son amidon avant brassage. La salive intervient comme outil enzymatique, puis le moût est bouilli et stérilisé. Cette Chicha américaine n’invente pas un défi de brasserie : elle adapte, avec fraises, céréales maltées et levures sélectionnées, une famille de pratiques andines toujours vivantes.",
      "histoireEtOrigines": `Dogfish Head a brassé sa première Chicha en 2009 dans le cadre des Ancient Ales, une série qui transpose des boissons historiques ou traditionnelles dans une brasserie américaine contemporaine. Pour les versions documentées, plus de cent salariés ont participé à la préparation du maïs violet péruvien : grain humidifié en bouche, mastiqué puis recraché avant le jour de brassage. Le geste frappe l’imagination, mais sa fonction est biochimique. Les amylases salivaires commencent à découper l’amidon du maïs en sucres plus accessibles.

La matière ainsi préparée rejoint du maïs malté et de l’orge maltée dans la cuve. Le moût est ensuite bouilli, étape que Dogfish Head souligne pour répondre à l’inquiétude sanitaire : les micro-organismes du prélèvement humain ne constituent pas la flore de fermentation finale. Après refroidissement, certaines versions ont reçu des fraises puis un assemblage de levures. La cuvée décrite aujourd’hui est annoncée à 3,1 %, tandis qu’une version 2014, avec maïs jaune, maïs violet, poivre rose péruvien et corossol, atteignait 5,7 %. « Chicha » désigne donc ici plusieurs brassins apparentés, pas une formule immuable.

La bière américaine ne doit pas devenir le point de départ de l’histoire. Dans diverses communautés d’Amérique du Sud et d’Amérique centrale, des boissons de maïs mastiqué, fermentées dans des récipients locaux et parfois aromatisées de fruits ou d’épices, ont une histoire bien antérieure à Dogfish Head. Les pratiques, noms et techniques varient selon les lieux ; une seule recreation craft ne les résume pas.

L’intérêt de ce brassin tient précisément à la rencontre entre deux chaînes techniques. La mastication fournit une saccharification partielle héritée d’un geste humain. La brasserie moderne ajoute maltage, ébullition, refroidissement et inoculation contrôlée. Le résultat n’est ni une « bière à la salive » laissée crue, ni une reproduction ethnographique parfaite : c’est une adaptation déclarée, dont la meilleure surprise est qu’un geste perçu comme étrange possède une logique enzymatique très claire.`,
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
        "noteProfil": "La mastication collective appartient à un brassin Dogfish encadré et ensuite bouilli ; elle ne résume ni toutes les chichas andines ni une pratique domestique sûre.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Dogfish Head",
          "edition": null,
          "reference": "Chicha",
          "type": "source_producteur",
          "url": "https://www.dogfish.com/drink/beer/chicha",
          "consultation": "2026-08-11"
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
      "description": "À 55 % d’alcool, The End of History concentre une ale belge par le froid, ajoute orties et genévrier, puis place chaque bouteille dans une taxidermie. Le liquide participait à la course au record engagée par BrewDog ; l’écureuil ou l’hermine qui l’enveloppait transformait l’achat en sculpture controversée. Ici, procédé, prix et emballage rivalisent pour savoir lequel est le plus excessif.",
      "histoireEtOrigines": `The End of History apparaît en juillet 2010, au cœur de la surenchère alcoolique qui oppose alors BrewDog à la brasserie allemande Schorschbräu. Après Tactical Nuclear Penguin à 32 % et Sink the Bismarck! à 41 %, l’entreprise écossaise revendique 55 % pour une ale de type belge concentrée à très basse température. L’eau gèle avant l’alcool ; en retirant plusieurs fois la glace, le brasseur réduit le volume et augmente la proportion d’éthanol ainsi que l’intensité des composés restants.

La recette rendue publique par BrewDog part d’Extra Pale malt, de houblons Nelson Sauvin, Centennial et Amarillo, et de levure Belgian Ardennes. Orties et baies de genévrier sont ajoutées en fin de procédé. La documentation indique une température descendant jusqu’à environ −70 °C pour la concentration. Ces données décrivent une base réellement brassée, mais le titre final place le produit à la frontière entre bière, eisbock extrême et boisson assimilable à un spiritueux selon les usages réglementaires.

BrewDog ne s’est pas contenté du record. Les douze bouteilles de l’édition initiale furent installées dans des écureuils, hermines et un lièvre naturalisés, présentés comme des animaux déjà morts avant leur collecte. Ce dispositif provoqua immédiatement des critiques sur l’usage d’animaux comme emballage et donna au produit une visibilité bien supérieure à son minuscule volume. Le prix, entre 500 et 700 livres selon l’animal, complétait la performance de luxe punk.

Le nom emprunte au livre de Francis Fukuyama, tandis que la mise en scène prétendait clore la course aux bières fortes. L’histoire lui a rapidement donné tort : d’autres records suivirent. La valeur documentaire de The End of History ne réside donc pas dans une couronne éternelle, mais dans la réunion très datée de trois obsessions de la scène craft de 2010 : concentration extrême, provocation visuelle et rareté transformée en spectacle.`,
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
        "noteProfil": "La taxidermie concerne douze contenants de 2010 ; la concentration à très basse température constitue une opération distincte, spécialisée et réglementée.",
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
        "ebullitionEtHoublonnage": "Houblonnage selon la recette BrewDog ; la chronologie exacte doit être consultée dans la publication originale pour toute reproduction.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BrewDog",
          "edition": null,
          "reference": "DIY Dog — recette The End of History",
          "type": "source_producteur",
          "url": "https://brewdogrecipes.com/recipes/the-end-of-history",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Paste Magazine",
          "edition": null,
          "reference": "BrewDog plans to bottle a 55% beer in taxidermy",
          "type": "source_presse",
          "url": "https://www.pastemagazine.com/drink/brewdog-plans-to-bottle-a-55-beer-in-a-taxidermy-s",
          "consultation": "2026-08-11"
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
      "description": "Tom et Athena Seefurth ont construit Mamma Mia! autour des assaisonnements d’une pizza : tomate, ail, basilic et origan dans une ale légère pensée pour la table. Certaines archives mentionnent même une pizza entière dans un brassin de brewpub, mais la formule commerciale reposait surtout sur les ingrédients séparés. La légende est plus simple que l’histoire, qui commence comme un accident de homebrewing familial.",
      "histoireEtOrigines": `Vers 2005, Tom Seefurth expérimentait dans l’Illinois avec des ales d’inspiration belge et les herbes de son jardin : basilic, origan, romarin, sauge et menthe. Une voisine trouva qu’une saison ainsi aromatisée évoquait une « pizza beer ». Le nom resta. Lors d’un week-end pluvieux de 2006, Tom, Athena et leur voisin Warren ajoutèrent à l’idée les marqueurs les plus évidents d’une pizzeria, tomates et ail compris, avec une vieille dose de levure de saison.

Le premier brassin faillit s’arrêter sur une fermentation trop lente. Seefurth raconte avoir interrompu un soutirage prématuré, ajouté du sucre candi et une levure de champagne, puis laissé la bière terminer. Le résultat accompagna si bien une pizza que le couple l’inscrivit en concours amateur. Des récompenses ouvrirent la porte d’un brassin Pro-Am chez Walter Payton’s Roundhouse, puis d’une production sous contrat chez Sprecher à partir de 2008.

La recette changea d’échelle avec difficulté : ail à hacher, matières végétales capables d’obstruer l’installation et proportions gardées comme secret commercial. Le témoignage direct du créateur établit solidement l’usage de tomate, basilic, origan et ail. Certaines descriptions archivées d’une version de brewpub ajoutent qu’une pizza Margherita entière fut immergée comme un sachet d’infusion ; ce geste ne doit pas être présenté comme la méthode constante de toutes les bouteilles.

Mamma Mia! était vendue comme « culinary beer », conçue pour l’accord et la cuisine plus que comme imitation liquide d’une part de pizza. Sa petite entreprise connut des ruptures, des contrats précaires et une distribution irrégulière avant que la bière disparaisse du marché. Internet a retenu le titre et l’image impossible ; l’histoire humaine est celle de deux homebrewers qui ont passé des années à transformer une blague sensorielle en produit viable. Tom lui-même insistait sur la nuance : une bière faite avec des ingrédients de pizza n’est pas nécessairement une bière censée goûter la sauce tomate.`,
      "chapitres": [
        {
          "titre": "La Margherita en sachet de thé",
          "texte": "Le procédé rapporté est presque culinaire : la pizza n’est pas destinée à survivre intacte au brassage. Elle sert de matrice d’extraction dans le mash, puis elle est retirée. Tomate, ail et herbes deviennent ainsi des composés aromatiques du moût plutôt qu’une garniture finale avec mozzarella filante sur la mousse."
        },
        {
          "titre": "Une bière disparue, une recette qui survit",
          "texte": "Mamma Mia! n’est plus un produit courant. Son intérêt tient aussi à cette condition de curiosité perdue : elle existe désormais surtout par des archives, des comptes rendus de dégustation et les souvenirs d’une époque où la scène craft découvrait qu’Internet récompensait très efficacement les idées impossibles à expliquer en une phrase sobre."
        }
      ],
      "recette": {
        "titre": "Le four à pizza rencontre la cuve",
        "profilUnique": true,
        "noteProfil": "Les archives décrivent plusieurs itérations : la pizza entière appartient à certains essais, tandis que tomate, ail et aromates caractérisent la formule commercialisée.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Punch",
          "edition": null,
          "reference": "The rise and fall of Mamma Mia Pizza Beer",
          "type": "source_presse",
          "url": "https://punchdrink.com/articles/rise-and-fall-mamma-mia-pizza-beer-chicago/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Beer & Whiskey Brothers",
          "edition": null,
          "reference": "Entretien avec le créateur Tom Seefurth",
          "type": "source_entretien",
          "url": "https://beerandwhiskeybros.com/2012/10/04/an-interview-with-mamma-mia-pizza-beer-creator-tom-seefurth/",
          "consultation": "2026-08-11"
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
      "description": "Saison dell’Aragosta met le littoral du Maine dans une farmhouse ale : des homards vivants et du sel marin participent au brassage, puis la bière passe par une fermentation mixte et un élevage en inox. Le crustacé attire les gros titres, mais le projet cherche moins le défi alimentaire qu’une traduction saline, acidulée et très littérale du lieu où travaille Oxbow.",
      "histoireEtOrigines": `Oxbow Brewing Company a créé Saison dell’Aragosta avec la brasserie italienne Birrificio del Ducato au milieu des années 2010. Le titre signifie simplement « saison au homard ». Sur la ferme-brasserie de Newcastle, dans le Maine, l’idée s’inscrit dans une géographie précise : agriculture, côte atlantique et fermentation rustique se rencontrent dans une bière qui ne se contente pas d’afficher un phare sur son étiquette.

Oxbow décrit le produit comme une farmhouse ale brassée avec des homards vivants du Maine et du sel marin, puis vieillie en cuve inox. Les présentations du lancement parlent d’une saison inspirée par la gose ; la page actuelle choisit le terme plus large de farmhouse ale à fermentation mixte. Les deux formulations éclairent le résultat sans être identiques : l’une désigne l’intention saline et acidulée, l’autre la famille de production dans laquelle Oxbow classe aujourd’hui la bière.

Le homard intervient réellement, mais les sources du producteur ne publient ni quantité stable ni calendrier complet d’ajout. Il serait donc imprudent de construire une recette détaillée ou de garantir un goût de chair de crustacé. Les dégustations rapportent surtout acidité, salinité, citron et caractère fermier ; ce sont des observations de verres particuliers, pas une analyse universelle de l’effet du homard.

La présence de l’animal soulève aussi une question souvent effacée par l’humour : la bière n’est ni végétarienne ni végane, et l’emploi de homards vivants appartient à un choix culinaire qui peut être contesté. Oxbow le présente comme une extension des traditions alimentaires locales.

Saison dell’Aragosta fonctionne ainsi comme une bière de terroir poussée jusqu’au littéral. Le sel apporte une donnée gustative intelligible, le homard une matière côtière et un récit spectaculaire, la fermentation mixte une charpente acidulée. L’insolite ne tombe pas du ciel : il remonte du casier à homards voisin.`,
      "chapitres": [
        {
          "titre": "Le homard n’est pas une mascotte",
          "texte": "Oxbow présente explicitement le homard comme ingrédient de brassage. Il ne faut donc ni minimiser l’information en simple accord culinaire, ni inventer son impact sensoriel exact. La chair, les minéraux et le contexte marin peuvent participer à l’équilibre, mais la documentation publique ne transforme pas la bière en bisque pétillante."
        },
        {
          "titre": "Farmhouse ale, mais avec marée haute",
          "texte": "Le mot « saison » du nom est souvent utilisé pour la décrire, mais la page actuelle d’Oxbow parle plus largement de farmhouse ale à fermentation mixte. Cette précision est utile : la singularité de la bière n’annule pas son architecture brassicole, elle la déplace vers une lecture de terroir côtier très littérale."
        }
      ],
      "recette": {
        "titre": "Le brassin qui a pris le large",
        "profilUnique": true,
        "noteProfil": "Le homard vivant et le sel sont documentés par Oxbow ; sécurité alimentaire, éthique animale et fermentation mixte restent propres au producteur.",
        "explicationProfil": "Farmhouse ale à fermentation mixte, 4,5 % ABV, documentée par Oxbow avec homard du Maine et sel marin.",
        "maltsEtCereales": [
          "Céréales de base non détaillées dans la page publique actuelle."
        ],
        "houblons": [
          "Houblons et amertume non détaillés par Oxbow dans la page publique retenue."
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Atlas Obscura",
          "edition": null,
          "reference": "Lobster Beer",
          "type": "source_secondaire",
          "url": "https://www.atlasobscura.com/foods/lobster-beer",
          "consultation": "2026-08-11"
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
      "description": "Beer Geek Brunch Weasel associe un imperial oatmeal stout au cà phê Chồn vietnamien, café issu de fruits passés par le système digestif de civettes. Les grains sont récupérés, nettoyés et torréfiés avant d’entrer dans la bière : l’animal reste en amont. Ce luxe fermentaire apporte aussi une question moins confortable sur la captivité et la traçabilité de la filière.",
      "histoireEtOrigines": `Mikkeller lança Beer Geek Brunch Weasel en 2008 dans le prolongement de ses stouts au café et à l’avoine. La bière, annoncée autour de 10,9 % d’alcool, doit son nom et sa rareté au cà phê Chồn. Des civettes consomment les fruits mûrs du caféier ; les grains non digérés sont récupérés dans leurs excréments, lavés, séchés puis torréfiés. Ce sont ces grains transformés, non les déjections elles-mêmes, qui deviennent l’ingrédient brassicole.

Une confusion fréquente assimile automatiquement le produit au kopi luwak indonésien. En 2013, Mikkeller a précisé employer une variante vietnamienne, cà phê Chồn, et non le café indonésien. La brasserie disait rechercher son caractère peu amer pour compléter le stout et travailler depuis l’origine avec un fournisseur qu’elle présentait comme respectueux des animaux. Cette déclaration établit la position du producteur ; elle ne remplace pas un audit indépendant de chaque lot ni une garantie générale sur la filière.

Le café de civette a acquis une valeur très élevée grâce à sa rareté et au récit d’une sélection naturelle des fruits. L’augmentation de la demande a toutefois été associée à des élevages en cages et à des pratiques contestées. La provenance n’est donc pas un simple détail exotique : elle détermine si l’histoire relève de la collecte traditionnelle, de la production captive ou d’un mélange difficile à tracer.

Dans la bière, l’avoine, les malts noirs, l’alcool élevé et le café forment une architecture de brunch très lisible. Le passage par la civette ne crée pas une nouvelle fermentation dans la cuve ; il intervient durant la transformation du fruit de café avant torréfaction. Beer Geek Brunch Weasel est ainsi simultanément un stout, un produit de luxe et un cas d’école sur les limites d’un argument d’approvisionnement. Le grain peut être suivi jusqu’à l’animal dans le récit ; la responsabilité exige de continuer le trajet jusqu’aux conditions de production.`,
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
        "noteProfil": "Mikkeller identifie le cà phê Chồn vietnamien et relaie des garanties de fournisseur ; celles-ci ne remplacent pas un audit indépendant du bien-être animal.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Beer Galaxy",
          "edition": null,
          "reference": "Mikkeller Beer Geek Brunch Weasel",
          "type": "source_secondaire",
          "url": "https://beer-galaxy.com/beers/mikkeller-beer-geek-brunch-weasel/",
          "consultation": "2026-08-11"
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
      "description": "Rogue et Voodoo Doughnut ont traduit un donut bacon-érable en ale rose fluo de l’extérieur, fumée et sucrée à l’intérieur. Trois malts fumés, du bacon fumé au pommier et un arôme d’érable composent le dispositif ; aucun donut entier n’est nécessairement documenté dans la cuve. Le petit-déjeuner sert ici de cahier des charges plutôt que d’ingrédient unique.",
      "histoireEtOrigines": `À Portland, Voodoo Doughnut avait déjà fait du donut Bacon Maple Bar un emblème sucré-salé. Rogue Ales transforma cette combinaison en bière au début des années 2010, inaugurant une série de collaborations consacrées aux pâtisseries de l’enseigne. Le produit fut conditionné dans une bouteille peinte d’un rose immédiatement reconnaissable : avant même l’ouverture, l’emballage annonçait que la discrétion ne ferait pas partie de la recette.

La liste publiée compte treize ingrédients et permet de dépasser le simple slogan. La base réunit Great Western 2-Row, Munich, Crystal 15 et Crystal 75. Trois sources de fumée se superposent : malt Briess fumé au merisier, malt Weyermann fumé au hêtre et malt fumé maison au hickory. S’ajoutent du bacon fumé au bois de pommier, un « pure maple flavoring », des houblons Revolution et Independent cultivés par Rogue, de l’eau côtière et la levure Pacman. La page annonce 30 IBU ; les éditions sont généralement données autour de 5,6 %.

Deux précisions empêchent le titre de fabriquer une fausse image. D’abord, la liste ne décrit pas un donut entier dissous dans le moût : la bière recompose ses marqueurs. Ensuite, « maple flavoring » n’autorise pas à remplacer automatiquement l’ingrédient par du sirop d’érable pur dans le récit. Le bacon, en revanche, est explicitement annoncé et rend la bière incompatible avec un régime végétarien.

L’architecture sensorielle repose surtout sur la répétition du fumé. Le bacon n’a pas à porter seul l’évocation du petit-déjeuner : les malts de merisier, hêtre et hickory construisent déjà un fond de feu de bois, tandis que l’érable fournit le pôle sucré. Cette précision explique aussi pourquoi la bière divisait tant les dégustateurs : elle ne suggérait pas timidement le donut, elle en amplifiait les signaux. La curiosité n’est donc pas un dessert jeté dans une cuve, mais une opération de traduction aromatique menée avec l’insistance d’une enseigne au néon rose.`,
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
        "noteProfil": "Rogue publie treize composants, mais pas tous les dosages ; aucun doughnut entier n’est nécessaire pour expliquer le profil bacon–érable.",
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
          "Houblons Rogue Farms annoncés ; variétés et doses selon la page commerciale, pour environ 30 IBU."
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "CraftShack",
          "edition": null,
          "reference": "Rogue Voodoo Doughnut Bacon Maple Ale — fiche produit",
          "type": "source_commerciale",
          "url": "https://craftshack.com/products/rogue-voodoo-doughnut-bacon-maple-ale",
          "consultation": "2026-08-11"
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
      "description": "Un piment serrano entier attend au fond de chaque bouteille de Cave Creek Chili Beer. Crazy Ed Chilleen l’avait choisi parce qu’il passait par le goulot, puis passa un an à stabiliser l’idée avant de la vendre. La lager pâle sert presque de vitrine : l’ingrédient est visible, continue d’infuser et transforme la bouteille en souvenir d’Arizona autant qu’en boisson.",
      "histoireEtOrigines": `Ed « Crazy Ed » Chilleen ouvrit Black Mountain Brewing Company en 1989 dans le sous-sol de son restaurant Satisfied Frog, à Cave Creek. Lorsqu’un restaurateur mexicain voisin lui demanda une bière épicée, Chilleen imagina placer un piment dans la bouteille comme le ver devenu emblématique de certaines bouteilles de mezcal. Son critère de sélection fut d’abord géométrique : un jalapeño ne passait pas le goulot, un serrano oui.

Le premier essai, réalisé avec le brasseur Eric Schaltz, était difficile à boire. L’équipe travailla ensuite environ un an sur la stabilité du produit et le comportement du piment avant une présentation nationale en 1992. La formule resta spectaculairement simple : une lager pâle et légère, puis un serrano entier déposé dans chaque bouteille. Le contact prolongé permet au piquant végétal d’évoluer avec le temps, ce qui explique en partie les expériences très variables rapportées selon l’âge et la conservation.

Le succès dépassa rapidement la capacité de la petite installation. La production et l’embouteillage furent confiés à plusieurs partenaires, d’abord aux États-Unis puis au Mexique, où l’insertion manuelle des piments constituait encore une contrainte logistique. Selon le long entretien accordé par Chilleen à Punch, la marque vendit à son apogée des centaines de milliers de caisses par an avant de décliner ; elle fut cédée en 2008 et passa ensuite dans d’autres portefeuilles. Les bases communautaires la classent aujourd’hui comme retirée.

Sa réputation de « pire bière du monde » vient surtout des classements et vidéos de défi. Elle masque une intuition marketing en avance sur son époque : rendre l’ingrédient immédiatement lisible et faire de la consommation une épreuve partageable. Cave Creek Chili Beer ne dissimule ni culture rare ni recette secrète. Le serrano est dans le verre avant la bière, au sens visuel comme commercial.`,
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
        "noteProfil": "Le serrano entier demande une stabilisation et un conditionnement maîtrisés ; l’archive historique ne fournit pas un protocole domestique complet.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Untappd",
          "edition": null,
          "reference": "Crazy Ed’s Cave Creek Chili Beer",
          "type": "source_secondaire",
          "url": "https://untappd.com/b/black-mountain-brewing-company-crazy-ed-s-cave-creek-chili-beer/2095562",
          "consultation": "2026-08-11"
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
      "description": "Le 1er avril 2013, Sankt Gallen vendit pour de vrai une bière noire au Black Ivory Coffee. Les grains de café avaient été mangés par des éléphants en Thaïlande, récupérés après digestion, lavés, séchés et torréfiés ; la bouse n’entrait pas dans le brassin. Moulus puis infusés à froid pendant la maturation, ils donnaient une recette limitée bien plus précise que son jeu de mots scatologique.",
      "histoireEtOrigines": `La brasserie japonaise Sankt Gallen publie chaque 1er avril une annonce qui ressemble à un canular tout en proposant réellement le produit. En 2013, elle prépara 3 000 bouteilles de Un, Kono Kuro avec du Black Ivory Coffee, café thaïlandais très rare. Les fruits du caféier sont donnés à des éléphants ; les grains non digérés sont ensuite récupérés, soigneusement nettoyés, séchés puis torréfiés. Ce parcours crée la matière première et son prix, mais aucun excrément brut n’est ajouté à la bière.

La publication de lancement donne un cadre inhabituellement détaillé : 6,5 % d’alcool, malts Pale Ale, Munich, Crystal et Chocolate complétés d’orge torréfiée, houblons Chinook et Cascade, puis café. Sankt Gallen moulait le Black Ivory avant de le placer dans la cuve de garde, selon une extraction comparée à celle d’un café froid. Ce choix devait préserver arômes et saveurs sans soumettre le café à toute l’ébullition.

Le producteur expliquait avoir payé environ 10 000 yens pour 35 grammes et reprenait l’estimation selon laquelle 33 kilogrammes de fruits donnés aux éléphants ne fourniraient qu’un kilogramme de café utilisable. Ces chiffres appartiennent à sa présentation commerciale et décrivent surtout la logique de rareté. Ils ne disent rien, à eux seuls, des conditions d’élevage ou de collecte ; l’éthique de la filière doit donc rester distincte de la simple valeur marchande.

La recette rencontrait enfin une bizarrerie juridique japonaise. À l’époque, le café ne figurait pas parmi les ingrédients autorisés pour l’appellation fiscale stricte « beer » : malgré une forte proportion de malt, le produit était étiqueté happōshu, avec un niveau de taxation annoncé comme équivalent à celui de la bière. Un, Kono Kuro réunit ainsi trois transformations successives : le fruit traverse l’éléphant, le grain traverse la torréfaction, puis le café fait traverser à la stout une frontière réglementaire.`,
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
        "noteProfil": "Le Black Ivory Coffee est une matière rare à la traçabilité sensible ; la fiche producteur documente la bière, pas tous les paramètres d’extraction.",
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
          "url": "https://www.sanktgallenbrewery.com/about/pressrelease/20130401.html",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brookston Beer Bulletin",
          "edition": null,
          "reference": "Beer brewed with elephant dung coffee",
          "type": "source_secondaire",
          "url": "https://brookstonbeerbulletin.com/beer-brewed-with-elephant-dung/",
          "consultation": "2026-08-11"
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
      "description": "Fossil Fuels a fermenté des ales avec une culture que le microbiologiste Raul Cano attribuait à de l’ambre vieux de dizaines de millions d’années. La bière a bien existé ; l’âge de sa levure reste une revendication extraordinaire, difficile à distinguer d’une contamination moderne sans preuves reproductibles. Le verre appartient donc autant à l’histoire de la microbiologie controversée qu’au rêve très vendeur de Jurassic Park.",
      "histoireEtOrigines": `Au milieu des années 1990, Raul Cano, microbiologiste à Cal Poly, publia avec Mark Borucki la culture de spores bactériennes provenant, selon leur interprétation, d’ambre dominicain âgé de 25 à 40 millions d’années. Dans d’autres échantillons, Cano conserva une culture ressemblant à Saccharomyces. Lorsque l’entreprise biomédicale créée autour de ces isolats échoua, la levure resta congelée jusqu’à ce qu’une rencontre avec le brasseur Peter Hackett relance une application beaucoup plus conviviale : la bière.

À partir de 2006, Hackett adapta des recettes au comportement de la culture, notamment une fermentation plus longue et froide. Fossil Fuels Brewing Company commercialisa ensuite une pale ale et une wheat beer à la fin des années 2000. Le récit public parlait d’une levure vieille d’environ 45 millions d’années, extraite d’ambre birman, et les dégustations rapportées par Wired décrivaient des notes épicées, fruitées ou citronnées. Ces bières modernes et leur culture sont documentées ; leur acte de naissance éocène l’est beaucoup moins solidement.

La paléomicrobiologie impose des contrôles sévères parce que les micro-organismes contemporains sont omniprésents. Des travaux consacrés à l’ADN ancien ont échoué à reproduire plusieurs annonces spectaculaires concernant l’ambre et ont souligné le risque de contamination pendant l’extraction. Une culture viable peut donc avoir été isolée sans que son âge géologique soit démontré. La publication de Cano portait d’ailleurs sur des bactéries sporulées, pas sur une caractérisation complète et reproductible de la levure brassicole devenue produit.

Fossil Fuels occupe ainsi une position rare : ce n’est pas une bière imaginaire, mais son argument central dépasse ce que les preuves publiques permettent d’affirmer sans réserve. La formulation la plus fidèle sépare les niveaux. Une souche conservée par Cano a fermenté la bière. Cano la disait issue d’ambre ancien. L’estimation de dizaines de millions d’années demeure contestable. Le dinosaure peut rester sur l’étiquette ; l’astérisque doit rester à côté.`,
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "California Sun",
          "edition": null,
          "reference": "The beer made from 45-million-year-old yeast",
          "type": "source_secondaire",
          "url": "https://www.californiasun.co/the-beer-made-from-45-million-year-old-yeast/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "PLOS ONE",
          "edition": null,
          "reference": "Ancient DNA survival in amber and the problem of reproducibility",
          "type": "source_scientifique",
          "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0073150",
          "consultation": "2026-08-11"
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
      "description": "Pour Bone Dusters, Jasper Akerboom et Jason Osborne ont écouvillonné une vingtaine de fossiles au Calvert Marine Museum. Une levure collectée sur un os de baleine a fermenté l’ale de Lost Rhino ; elle n’était pas présentée par les chercheurs comme vieille de millions d’années. Le fossile sert de lieu de prélèvement et de passerelle vers la paléontologie, jamais de poudre aromatique.",
      "histoireEtOrigines": `Jason Osborne, cofondateur de l’association Paleo Quest, voulait réunir paléontologie, microbiologie et bière pour financer des actions d’éducation scientifique. Avec Jasper Akerboom, microbiologiste et brasseur chez Lost Rhino, il obtint l’accès à des fossiles conservés au Calvert Marine Museum, dans le Maryland. L’équipe écouvillonna environ vingt surfaces et mit les prélèvements en culture. Deux levures apparurent ; l’une d’elles pouvait fermenter un moût.

Le point le plus important se trouve dans le propre compte rendu d’Akerboom : l’objectif n’était pas de ressusciter une levure ancienne. Les contrôles indiquaient que la culture ne venait pas de la brasserie et qu’elle avait bien été prélevée dans l’environnement du musée, sur un fossile de baleine. Cela ne prouve pas qu’elle avait l’âge de l’os. Une cellule moderne peut coloniser une surface paléontologique, et Akerboom lui-même déclara à la presse qu’elle n’était probablement pas aussi ancienne que le fossile.

L’équipe surnomma la variante Saccharomyces cerevisiae var. protocetus d’après le cétacé associé au prélèvement. Ce nom décrit le projet ; il ne faut pas le traiter comme la publication formelle d’une nouvelle sous-espèce taxonomique. Les reportages divergent également sur l’âge du fossile, donné à 14 ou 35 millions d’années. Cette divergence est sans conséquence pour la bière dès lors que l’âge n’est pas transféré à la levure.

La culture avait un comportement bien concret : caractère terreux et de saison, préférence pour une fermentation chaude au-dessus d’environ 27 °C, difficulté avec les moûts de haute densité et pause d’atténuation avant reprise. Lost Rhino conçut donc une ale de force moyenne avec des malts spéciaux pour accompagner ces traits, puis produisit environ 2 300 litres en 2014.

Bone Dusters est plus intéressante lorsqu’on abandonne le faux miracle. Aucun os n’entre dans le moût et aucune levure préhistorique n’est démontrée. Une collecte environnementale inhabituelle a fourni une culture utilisable, puis la bière a servi de conversation publique sur les fossiles. Le musée n’a pas ressuscité le passé ; il a donné une adresse mémorable à un micro-organisme du présent.`,
      "chapitres": [
        {
          "titre": "Le musée passe par la boîte de Petri",
          "texte": "Le chemin documentaire est fossile → prélèvement → culture → sélection → propagation → fermenteur. Cette chaîne transforme une trouvaille de paléontologie en outil brassicole. Elle explique aussi pourquoi la bière n’a aucune raison de goûter l’os, la baleine ou la poussière de musée."
        },
        {
          "titre": "Paleo Ale, pas potion de résurrection",
          "texte": "L’intérêt du projet tient à la provenance de la levure, pas à une promesse sensorielle préhistorique. Les malts, houblons, alcool et profil final ne sont pas assez documentés pour reconstruire la bière. En revanche, l’expérience montre jusqu’où les brasseurs peuvent pousser la notion de terroir microbien : jusque dans les réserves d’un musée."
        }
      ],
      "recette": {
        "titre": "Une levure sortie du musée",
        "profilUnique": true,
        "noteProfil": "La culture vient de l’environnement d’un fossile de musée et est probablement moderne ; aucun fragment fossile ni microbe préhistorique ne constitue la recette.",
        "explicationProfil": "Le style complet et les paramètres du brassin ne sont pas publiés de manière suffisante ; la culture microbienne constitue le fait central.",
        "maltsEtCereales": [
          "Base d’ale de densité modérée, complétée de malts spéciaux ; proportions non publiées."
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
        "fermentation": "La culture préfère une fermentation chaude, au-dessus d’environ 27 °C, et peut marquer une pause d’atténuation avant de repartir ; les paramètres complets ne sont pas publiés.",
        "maturation": "Maturation non documentée avec assez de précision pour être reproduite fidèlement.",
        "profilRecherche": "Une ale servant de véhicule à une expérience paléomicrobiologique, sans inventer un goût de fossile ou un âge absolu non démontré."
      },
      "sources": [
        {
          "organisme": "Lost Rhino Brewers’ Blog",
          "edition": null,
          "reference": "Bone Dusters Brew Day",
          "type": "source_producteur",
          "url": "https://lostrhino.wordpress.com/2014/04/25/bone-dusters-brew-day/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": null,
          "reference": "Bone Dusters Paleo Ale",
          "type": "source_professionnelle",
          "url": "https://www.beerandbrewing.com/bone-dusters-paleo-ale",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Chemical & Engineering News",
          "edition": null,
          "reference": "Fossil-Infused Beer",
          "type": "source_scientifique_secondaire",
          "url": "https://cen.acs.org/articles/92/i17/Fossil-Infused-Beer-75-Million.html",
          "consultation": "2026-08-11"
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
      "description": "« Oyster stout » peut désigner une bière pensée pour accompagner les huîtres, ou une stout dans laquelle coquilles, chair et jus de mollusque ont réellement participé au brassage. L’expression a glissé de la table vers la cuve au début du XXe siècle, selon une chronologie encore discutée. Aujourd’hui, chaque producteur choisit sa marée : aucune recette unique ne fixe ce que l’huître doit apporter.",
      "histoireEtOrigines": `Avant d’être un ingrédient de bière, l’huître était un aliment populaire des tavernes britanniques. Bon marché, saline et nourrissante, elle accompagnait naturellement les porters et stouts servis dans les mêmes lieux. Des mentions d’« oyster stout » ont donc pu désigner une bière pour le repas ou pour une fête de récolte sans garantir qu’un mollusque avait approché la chaudière.

Le passage à l’ingrédient réel est moins net que les récits de « première » le laissent entendre. L’American Homebrewers Association rapporte que des brasseurs néo-zélandais auraient utilisé coquilles puis huîtres entières au début du XXe siècle. D’autres histoires citent une bière de Matsumoto en 1929. L’exemple londonien le mieux documenté est Hammerton, qui employa en 1938 un concentré d’huître néo-zélandais dans une stout présentée comme nourrissante. Ces jalons ne suffisent pas à couronner un inventeur unique.

Les techniques modernes divergent largement. Des coquilles peuvent être placées dans la cuve pour leur apport minéral ; d’autres brasseries utilisent chair entière, liquor d’huître ou bouillon. Certaines additions ont lieu à l’ébullition, d’autres durant le conditionnement. La chaleur atténue une partie des arômes et le résultat recherché est souvent une salinité ou une rondeur discrète plutôt qu’une soupe marine noire.

Cette variabilité explique pourquoi « oyster stout » n’impose ni quantité, ni sensation, ni même présence systématique de chair. Elle entraîne aussi des conséquences pratiques : une bière utilisant réellement l’animal n’est pas végétarienne ou végane et peut concerner les personnes allergiques aux mollusques, même si l’étiquette ou la réglementation locale déterminent l’information disponible.

L’histoire de la famille est donc un lent rapprochement. L’huître était d’abord à côté de la pinte ; la publicité les associa ; certains brasseurs introduisirent coquilles ou chair ; la scène contemporaine transforma l’idée en terrain d’expérimentation. Ce qui semble être une provocation récente possède une généalogie de comptoir, mais aucune recette originelle parfaitement nette.`,
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "VinePair",
          "edition": null,
          "reference": "What is Oyster Stout?",
          "type": "source_secondaire",
          "url": "https://vinepair.com/articles/what-is-oyster-stout/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Bon Appétit",
          "edition": null,
          "reference": "Seafood beer and oyster stout",
          "type": "source_presse",
          "url": "https://www.bonappetit.com/drinks/beer/article/seafood-beer",
          "consultation": "2026-08-11"
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
      "description": "Right Brain obtient le fumé de Mangalitsa Pig Porter avec de vraies têtes et de vrais os de porc fumés, sans malt fumé. Ce porter chocolaté à 7 % et 20 IBU a remporté l’or des Experimental Beers au Great American Beer Festival 2011. L’animal n’est donc ni une illustration ni un simple arôme : il porte la fumée d’une bière jugée au-delà de son effet de surprise.",
      "histoireEtOrigines": `Right Brain Brewery, à Traverse City dans le Michigan, a bâti sa réputation sur des recettes qui partent d’un aliment puis cherchent une architecture brassicole capable de l’accueillir. Mangalitsa Pig Porter emploie des têtes et des os fumés de porc Mangalitsa, race porcine d’origine hongroise reconnaissable à son pelage laineux et réputée pour sa graisse. Le producteur insiste sur une précision rare : aucun malt fumé n’est utilisé. Le caractère fumé revendiqué provient directement des matières porcines.

La base reste un porter sombre, annoncé à 7 % d’alcool et 20 IBU, avec des notes chocolatées. Les sources publiques ne donnent ni poids de têtes et d’os, ni timing exact de leur addition, ni composition complète des malts. Elles permettent toutefois d’écarter deux raccourcis. Ce n’est pas une « bacon beer » aromatisée à l’extrait, et le porc n’est pas seulement un objet placé à côté de la cuve pour la photographie.

En 2011, la bière reçut la médaille d’or du Great American Beer Festival dans la catégorie Experimental Beer. Cette distinction ne certifie pas chaque détail de recette, mais elle montre que le produit fut évalué comme bière : équilibre, exécution et dégustation devaient survivre à l’annonce de l’ingrédient. Right Brain la présente encore comme le produit qui a fait connaître la brasserie.

Le procédé pose aussi des limites claires. La bière n’est pas végétarienne ; la matière animale peut apporter fumée, graisse et composés savoureux, mais leur contribution exacte n’a pas été mesurée publiquement. Sans protocole de laboratoire ou recette complète, attribuer une note précise à l’os serait spéculatif.

Mangalitsa Pig Porter inverse finalement la logique habituelle d’une smoked beer. Au lieu de fumer le grain pour évoquer une cuisine, la brasserie introduit un produit réellement fumé de cette cuisine dans un porter non fumé par ses malts. La médaille n’efface pas l’étrangeté ; elle prouve seulement que le porter avait encore quelque chose à dire après que les têtes de porc eurent pris toute la place dans le titre.`,
      "chapitres": [
        {
          "titre": "Le fumoir a vraiment envoyé des pièces détachées",
          "texte": "Les sources consacrées à la bière insistent sur l’usage de têtes et d’os fumés, ce qui distingue Pig Porter d’une bière simplement aromatisée au bacon ou construite uniquement avec du malt fumé. La matière animale participe au procédé, mais cela ne permet pas de déduire automatiquement une saveur de bouillon ou de viande."
        },
        {
          "titre": "Le bizarre avec une médaille autour du cou",
          "texte": "La récompense du GABF 2011 donne à la bière un statut particulier. Elle montre qu’une expérience spectaculaire peut être évaluée comme bière, avec des critères d’équilibre et d’exécution. Le cochon attire la caméra ; le porter doit encore tenir debout tout seul."
        }
      ],
      "recette": {
        "titre": "Le porter passé par le fumoir",
        "profilUnique": true,
        "noteProfil": "Têtes et os de porc fumés exigent une préparation alimentaire professionnelle ; la description officielle ne publie pas une formulation complète.",
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
          "reference": "Mangalitsa Pig Porter — présentation producteur",
          "type": "source_producteur",
          "url": "https://www.rightbrainbrewery.com/43/mangalitsa-pig-porter-2016",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewbound",
          "edition": null,
          "reference": "Right Brain Brewery — Mangalitsa Pig Porter",
          "type": "source_professionnelle",
          "url": "https://www.brewbound.com/breweries/Right_Brain_Brewery/mangalitsa-pig-porter",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BeerAdvocate",
          "edition": null,
          "reference": "Mangalitsa Pig Porter",
          "type": "source_secondaire",
          "url": "https://www.beeradvocate.com/beer/profile/16503/72900/",
          "consultation": "2026-08-11"
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
      "description": "Avec 67,5 % vol. affichés, Snake Venom est vendue comme une bière record alors que les descriptions commerciales signalent une fortification. Son intérêt tient moins à une prétendue levure surpuissante qu’au problème de classement qu’elle pose : à partir de quel procédé une base brassée devient-elle un produit spiritueux ?",
      "histoireEtOrigines": `Snake Venom entre en scène avec un nombre conçu pour arrêter le regard : 67,5 % vol. Brewmeister, marque écossaise ensuite associée à Keith Brewery, la présente comme une bière d’une force exceptionnelle. Les détaillants la conditionnent et la décrivent comme un alcool à servir par très petites mesures, loin de l’usage d’une pinte. Le chiffre est réel en tant que titre revendiqué ; le récit selon lequel une fermentation héroïque l’aurait produit ne l’est pas.

Les fiches marchandes disponibles parlent d’une base brassée puis d’une fortification. Cette distinction est décisive. La levure transforme les sucres du moût jusqu’à ce que la concentration d’alcool compromette sa propre activité ; elle ne conduit pas une bière ordinaire à 67,5 % vol. Un ajout d’alcool ou une opération de concentration change donc à la fois le liquide et la nature de la prouesse. Snake Venom n’est pas la démonstration d’une souche invincible, mais la construction d’un objet hybride à partir d’une origine brassicole.

Le titre de « bière la plus forte du monde » doit, lui aussi, rester entre guillemets. Les classements mélangent parfois fermentation seule, retrait d’eau par le froid, distillation et fortification. Selon la règle choisie, des produits différents obtiennent la couronne ; celle-ci évolue en outre avec les lancements commerciaux. Les sources retenues documentent bien l’étiquette à 67,5 %, mais elles ne fournissent ni protocole intégral ni standard indépendant qui trancherait définitivement la catégorie.

Le véritable venin est ainsi taxonomique. Le produit exploite la familiarité du mot « bière », puis franchit une limite technique qui rend ce mot discutable. C’est précisément cette tension — chiffre mesurable, procédé partiellement publié et record conditionnel — qui mérite d’être conservée, sans transformer un slogan en fait universel.`,
      "chapitres": [
        {
          "titre": "Le serpent vit dans la définition",
          "texte": "Une levure de bière ne fermente pas spontanément un moût jusqu’à 67,5 % vol. Les alcools aussi élevés nécessitent une intervention après ou autour de la fermentation : concentration, distillation partielle, fortification ou combinaison. La prouesse n’est donc pas celle d’une levure invincible, mais celle d’un procédé hybride."
        },
        {
          "titre": "Record du monde, avec conditions générales",
          "texte": "Les titres de « bière la plus forte » changent avec le temps et selon ce que l’on accepte dans la catégorie. Tout record doit donc être daté et assorti de ses critères. Snake Venom reste remarquable par son chiffre revendiqué ; son statut taxonomique, lui, mérite le point d’interrogation."
        }
      ],
      "recette": {
        "titre": "Une bière qui franchit la frontière des spiritueux",
        "profilUnique": true,
        "noteProfil": "Le chiffre de l’étiquette est documenté, pas une méthode reproductible permettant de l’atteindre comme simple bière fermentée.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Hard To Find Whisky",
          "edition": null,
          "reference": "Brewmeister Snake Venom — 67.5%",
          "type": "source_commerciale",
          "url": "https://www.htfw.com/brewmeister-snake-venom-world-s-strongest-beer",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Food & Wine",
          "edition": null,
          "reference": "Strongest beers and the question of fortification",
          "type": "source_presse",
          "url": "https://www.foodandwine.com/news/worlds-strongest-beer",
          "consultation": "2026-08-11"
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
      "description": "Tactical Nuclear Penguin part d’un imperial stout, puis retire une partie de son eau par congélations successives jusqu’à 32 % vol. Le froid ne crée pas l’alcool : il concentre celui que la fermentation avait déjà produit, avec les sucres, les arômes et les défauts éventuels de la bière.",
      "histoireEtOrigines": `En 2009, la course à la bière la plus forte ressemble à une escalade menée au thermomètre. BrewDog répond aux records du moment avec Tactical Nuclear Penguin, un imperial stout porté à 32 % vol. Le nom apocalyptique et le conditionnement très limité font le travail publicitaire, mais le cœur du projet est un procédé connu : la concentration par le froid, poussée ici beaucoup plus loin qu’un Eisbock traditionnel.

La recette rétrospective publiée par BrewDog révèle d’abord une bière construite pour résister à cette épreuve. Extra Pale, Dark Crystal, malt chocolat et orge torréfiée composent la base ; Chinook, Galena et First Gold assurent le houblonnage. Muscovado, cranberry, jasmin et copeaux de chêne ajoutent d’autres couches, tandis qu’une levure WLP099 adaptée aux moûts très denses mène la fermentation. Le pingouin n’est donc pas un alcool neutre maquillé en stout : sa matrice aromatique existe avant la concentration.

Vient ensuite le froid. BrewDog décrit un traitement à très basse température, autour de −70 °C, poursuivi par étapes pendant environ trois semaines. Une partie de l’eau cristallise ; le liquide non gelé, plus riche en alcool et en composés dissous, est séparé puis de nouveau refroidi. Cette opération n’invente aucun degré alcoolique. Elle réduit le volume d’eau et amplifie tout ce que contient la base, y compris l’amertume, l’astringence ou les défauts.

À son lancement, Tactical Nuclear Penguin a momentanément occupé le devant de la scène des records. D’autres produits l’ont dépassée, parfois en changeant eux aussi les règles techniques de la compétition. Son importance n’est donc pas celle d’un champion éternel. Elle tient à la transparence relative de son architecture : une vraie recette de stout, une fermentation exigeante, puis un retrait d’eau assumé. Sous le spectacle nucléaire se trouve une leçon simple de bilan matière.`,
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
        "noteProfil": "La recette publiée éclaire la base ; la concentration cryogénique demeure une opération spécialisée, dangereuse et juridiquement encadrée selon les pays.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BeerTasting",
          "edition": null,
          "reference": "Tactical Nuclear Penguin",
          "type": "source_secondaire",
          "url": "https://www.beertasting.com/de/beers/tactical-nuclear-penguin",
          "consultation": "2026-08-11"
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
      "description": "Beithir Fire commence par une ale écossaise d’orge, mûrit deux mois, puis reçoit un alcool écossais avant trois filtrations. Les 75 % vol. annoncés viennent donc d’un assemblage explicitement fortifié, pas d’une fermentation prodigieuse. Le record commercial dépend entièrement de la définition accordée au mot « bière ».",
      "histoireEtOrigines": `Le dragon Beithir de la légende écossaise donne son nom à un liquide affichant 75 % vol. 88 Brewery le vend comme une bière extrême et met le record au premier plan. La page du producteur permet cependant de reconstituer une chaîne plus précise que le slogan : une ale forte à base d’orge écossaise est d’abord brassée, laissée environ deux mois, puis assemblée avec un alcool écossais pur avant d’être filtrée trois fois.

Cette chronologie règle immédiatement un malentendu. Les 75 % ne sont pas obtenus parce qu’une levure aurait continué à fermenter là où toutes les autres s’arrêtent. La fermentation fabrique la base ; le spiritueux ajouté détermine l’ordre de grandeur final. Beithir Fire appartient ainsi à la famille des produits fortifiés, même si son identité commerciale reste attachée à la bière dont elle provient.

La filtration répétée, mentionnée par la marque, ne crée pas davantage d’alcool. Elle peut clarifier ou stabiliser l’assemblage, mais le titre vient du rapport entre les deux composants. Sans les proportions, les densités et l’analyse finale, le procédé ne peut pas être reconstruit. Il est néanmoins assez documenté pour écarter le récit d’une fermentation directe à 75 %.

Reste alors la question du record. Comparer Beithir Fire à une bière obtenue uniquement par fermentation, ou même à un Eisbock concentré en retirant de l’eau, revient à aligner des techniques différentes sous un seul nom. La réglementation fiscale peut elle aussi traiter ce type d’objet comme un spiritueux ou un produit composé. Le chiffre de 75 % demeure une caractéristique publiée ; le titre de « plus forte bière » est une proposition de la marque, non une catégorie scientifique universelle.

L’insolite réside donc dans le passage de frontière. Beithir Fire part bien d’une cuve brassicole, mais son identité finale est négociée entre recette, étiquette et droit. Le dictionnaire chauffe plus que le fermenteur.`,
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
        "noteProfil": "La marque décrit un assemblage fortifié à 75 % ; aucune fermentation domestique ne peut reproduire ce titre ni son cadre réglementaire.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Sun",
          "edition": null,
          "reference": "Beithir Fire and the strongest-beer claim",
          "type": "source_presse",
          "url": "https://www.thesun.co.uk/fabulous/30282896/worlds-strongest-beer-alcohol-taste/",
          "consultation": "2026-08-11"
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
      "description": "Dogfish Head a transformé des fragments de météorites lunaires certifiées en infusion pour une Oktoberfest à 5 % vol. et 25 IBU. La roche ne remplace ni malt ni houblon : elle ajoute au brassin une provenance extraterrestre, prolongée au service par des manchons confectionnés en tissu de combinaison spatiale.",
      "histoireEtOrigines": `Celest-jewel-ale commence par un objet qui voyage beaucoup avant d’atteindre la cuve. Des impacts arrachent une roche à la Lune ; certains fragments traversent l’espace, tombent sur Terre, sont identifiés comme météorites lunaires puis entrent sur le marché des collectionneurs. Dogfish Head en obtient de petits morceaux certifiés et choisit de les faire passer du cabinet de curiosités à la brasserie.

La méthode décrite par le producteur est plus contrôlée qu’une pierre jetée dans le fermenteur. Les météorites sont pulvérisées, puis la poussière est mise à infuser « comme un thé » avant son incorporation. Cette formulation importe : elle distingue le matériau réellement employé du décor cosmique qui l’entoure. La brasserie ne prétend pas que la roche fermente, qu’elle remplace un minéral d’eau connu ou qu’elle apporte un goût objectivement lunaire.

Sous cette infusion se trouve une bière très terrestre. Dogfish Head annonce une base inspirée de l’Oktoberfest, 5 % vol. et 25 IBU, créée autour de l’équinoxe d’automne et de la pleine lune des récoltes. Le malt structure donc le verre ; la poussière météoritique lui donne surtout une biographie. À la pression, le spectacle continuait avec des manchons de verre cousus dans un matériau de combinaison spatiale, autre manière de rendre la provenance visible.

L’expérience ne démontre rien sur l’agriculture hors Terre et ne fait pas de la Lune un nouveau terroir au sens agronomique. Elle transforme plutôt une matière géologique rare en ingrédient de médiation. Le geste est coûteux, symbolique et probablement discret au goût, mais il est documenté par deux publications de la brasserie. Contrairement à beaucoup de « bières de l’espace », l’élément extraterrestre ne se limite donc pas au nom : une infime quantité de matière lunaire a bien suivi une procédure d’infusion.

L’insolite tient ici à l’adresse d’origine. Une Oktoberfest relativement mesurée porte le récit d’un fragment qui a parcouru environ 384 000 kilomètres avant de finir dans une théière brassicole.`,
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
        "noteProfil": "L’infusion météoritique est un geste documenté mais non transposable : la provenance certifiée, la préparation et la sécurité du matériau sont essentielles.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Dogfish Head",
          "edition": null,
          "reference": "Celest-jewel-ale brewed with moon dust",
          "type": "source_producteur",
          "url": "https://www.dogfish.com/blogfish/celest-jewel-ale-brewed-moon-dust-served-space-suit-can-coolers",
          "consultation": "2026-08-11"
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
      "description": "Space Barley n’est pas brassée avec les quelques graines sorties directement de l’ISS, mais avec leur descendance cultivée au sol. Le séjour orbital appartient à la généalogie de l’orge Haruna Nijo. Sapporo a transformé cette expérience agronomique en une lager de 5,5 % vol. vendue par tirage au sort au Japon.",
      "histoireEtOrigines": `Avant la bière, il y a un protocole de multiplication végétale. En 2006, des graines d’orge brassicole Haruna Nijo passent environ cinq mois dans le module russe Zvezda de la Station spatiale internationale. Le projet réunit Sapporo Breweries, l’université d’Okayama et des partenaires scientifiques russes afin d’observer si cette lignée conserve sa capacité à germer et à se reproduire après une exposition orbitale.

Les graines revenues sur Terre ne sont pas simplement versées dans une malterie. Elles sont semées, récoltées puis multipliées. La bière est fabriquée avec une génération descendante cultivée au sol. Cette chaîne corrige la formule séduisante « brassée avec de l’orge qui a poussé dans l’espace » : l’ancêtre a séjourné dans l’ISS, tandis que les grains effectivement maltés ont grandi sur Terre. Le lien spatial est génétique et expérimental, non géographique au sens du champ.

Sapporo présente d’abord des brassins d’essai, puis ouvre en 2009 une vente exceptionnellement limitée. Deux cent cinquante personnes, sélectionnées par tirage au sort au Japon, peuvent acheter un coffret de six bouteilles pour 10 000 yens. La presse décrit une lager à 5,5 % vol. et indique que les recettes de l’opération sont destinées à des actions liées à la recherche ou à l’éducation. La rareté du lot transforme le résultat scientifique en objet public sans en faire une gamme régulière.

Une bouteille ne permet évidemment pas de conclure que l’orge est prête pour une agriculture autonome hors Terre. Le brassage agit plutôt comme test de valorisation : la plante a survécu, sa descendance a fourni un grain utilisable et ce grain a pu rejoindre une chaîne alimentaire familière. Les comparaisons agronomiques détaillées restent du domaine du programme de recherche, pas de la dégustation.

Space Barley raconte ainsi une lignée plus qu’un ingrédient exotique. Rien n’est « cosmique » dans la fermentation elle-même. Le vertige vient de l’arbre généalogique d’une céréale, dont une branche a fait cinq mois d’orbite avant de revenir alimenter un champ, une malterie et, finalement, une loterie brassicole.`,
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
        "noteProfil": "L’élément reproductible serait une lager ; l’élément unique est la traçabilité d’une lignée végétale passée par l’ISS.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Universe Today",
          "edition": null,
          "reference": "Space Beer available to a limited number of buyers",
          "type": "source_presse_scientifique",
          "url": "https://www.universetoday.com/articles/space-beer-available-for-purchase-to-250-people",
          "consultation": "2026-08-11"
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
        "libelle": "Gerrie Berendsen / brasserie locale néerlandaise",
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
      "description": "Kwispelbier est une boisson néerlandaise sans alcool destinée aux chiens, formulée avec du malt et un extrait de bœuf. Elle emprunte à la bière son nom, sa bouteille et le rituel du verre partagé, mais son public et son profil relèvent de la friandise animale plutôt que d’un style brassicole humain.",
      "histoireEtOrigines": `L’idée naît après la chasse, lorsqu’une propriétaire d’animalerie néerlandaise souhaite offrir à ses chiens une récompense qui imite le moment où les humains ouvrent une bière. Les dépêches de 2007 identifient cette entrepreneuse comme Gerrie Berendsen — et non « Terrie Berenden », graphie parfois recopiée — et situent la mise au point avec une brasserie locale. Le produit reçoit le nom de Kwispelbier, construit autour de « kwispel », la queue qui remue.

La formulation publiée tient en deux repères : malt et extrait de bœuf. Le premier fournit une parenté céréalière avec la bière et le second vise l’appétence canine. Le résultat est annoncé sans alcool. Les sources ne détaillent ni empâtage, ni fermentation, ni stabilisation ; rien ne permet donc de reconstruire la fabrication ou d’affirmer la présence de houblon. Cette retenue compte, car certains ingrédients courants des boissons humaines ne doivent pas être supposés adaptés aux animaux.

Le mot « bière » travaille ici comme une mise en scène. La bouteille, l’étiquette et le service permettent au propriétaire de reproduire un rituel social avec son chien. Le liquide ne cherche pas à satisfaire les critères d’une lager désalcoolisée ni à passer un concours de styles. Il s’inscrit dans un marché de produits anthropomorphiques où l’on vend au maître une expérience de complicité autant qu’une boisson à l’animal.

Les articles de l’époque ont largement repris l’anecdote, parfois avec le ton léger attendu d’une « bière pour chiens ». Leur répétition n’ajoute toutefois pas de données techniques : la composition complète, le fabricant exact et la durée de commercialisation restent peu documentés. Il faut donc distinguer le produit attesté du folklore qui l’entoure.

Kwispelbier déplace finalement trois frontières en même temps : celle du consommateur, celle du rituel et celle de la catégorie. Son étrangeté ne vient pas d’un micro-organisme rare ou d’un degré record. Elle naît du choix de présenter une boisson maltée au bœuf comme la version canine d’un geste profondément humain.`,
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
        "noteProfil": "Cette boisson animale ne doit pas être extrapolée en recette domestique ; sa formulation complète et ses contrôles vétérinaires ne sont pas publics.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "KLTV / Associated Press",
          "edition": null,
          "reference": "Pet shop owner creates beer for dogs",
          "type": "source_presse",
          "url": "https://www.kltv.com/story/5977615/pet-shop-owner-creates-beer-for-dogs/",
          "consultation": "2026-08-11"
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
      "description": "Belly Button Beer est une witbier australienne à 4,5 % vol. fermentée par les descendantes d’une cellule de Saccharomyces isolée dans un prélèvement de nombril. Aucun amas corporel n’entre dans la cuve : l’anatomie fournit le lieu de collecte, puis le laboratoire sépare, contrôle et multiplie la levure retenue.",
      "histoireEtOrigines": `Le nom promet une plaisanterie de vestiaire ; le protocole ressemble plutôt à un exercice de microbiologie. Pour un projet présenté en 2016, l’équipe de 7 Cent Brewery prélève au coton-tige le nombril de plusieurs brasseurs volontaires. Chaque échantillon est déposé sur un milieu gélosé, accompagné de contrôles, afin de faire apparaître des colonies distinctes et d’écarter ce qui ne convient pas au brassage.

Parmi ces cultures, une cellule de Saccharomyces est isolée puis propagée. Toute la biomasse utilisée au fermenteur descend de ce micro-organisme sélectionné. La formule « bière à la peluche de nombril » est donc trompeuse si elle suggère l’ajout direct de matière corporelle. Le lien avec le donneur est généalogique : le nombril a servi de site de prélèvement, comme une fleur, un fruit ou une paroi de cave pourrait héberger une levure sauvage.

La recette qui reçoit cette culture est loin d’être un simple support publicitaire. La bière, classée witbier et annoncée à 4,5 % vol., associe quatre céréales — orge, blé, avoine et seigle — aux houblons Riwaka et Mosaic. Zeste d’orange et coriandre rappellent les aromates classiques de nombreuses blanches. La notice de produit conservée indique que la souche isolée assure à elle seule la fermentation, ce qui distingue l’expérience d’un brassin ensemencé en complément par une culture commerciale.

Le résultat ne prouve pas que tout nombril abrite une levure utile, encore moins qu’un prélèvement brut soit sûr. Il montre au contraire combien la sélection compte : cultiver, observer, isoler, tester, puis multiplier. Sans cette chaîne, l’expérience serait un risque microbiologique ; avec elle, elle devient une démonstration de bioprospection à très petite échelle.

Belly Button Beer tire ainsi son humour d’une adresse anatomique, mais son intérêt vient de la distance entre l’échantillon et la cuve. Une seule cellule contrôlée suffit à maintenir le récit, tandis que le laboratoire retire tout ce qui aurait rendu le gag littéralement dégoûtant.`,
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
        "noteProfil": "Le prélèvement humain exige isolement, contrôles et identification en laboratoire ; il ne constitue jamais un inoculum domestique sûr.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Beer Street Journal",
          "edition": null,
          "reference": "Belly Button Beer",
          "type": "source_secondaire",
          "url": "https://beerstreetjournal.com/belly-button-beer/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Untappd",
          "edition": null,
          "reference": "7 Cent Brewery — Belly Button Beer",
          "type": "source_secondaire",
          "url": "https://untappd.com/b/7-cent-brewery-belly-button-beer/1539122",
          "consultation": "2026-08-11"
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
      "description": "Hoihoi Tatea, dite Stag Semen Stout, est une sweet stout néo-zélandaise annoncée à 5,8 % vol. et 35 IBU avec du sperme de cerf comme ingrédient. La bière est attestée par des comptes rendus contemporains et une fiche de produit, mais aucun protocole public complet ne permet d’auditer l’ajout extraordinaire.",
      "histoireEtOrigines": `En 2015, le Green Man Pub de Wellington organise un défi consacré aux aliments sauvages et aux ingrédients capables de faire parler. Choice Bros brasse pour l’occasion Hoihoi Tatea, une sweet stout que les articles anglophones rebaptisent rapidement Stag Semen Stout. La présentation publique affirme qu’un produit reproductif de cerf, décrit comme de qualité export, entre réellement dans la bière.

La distinction avec Beard Beer ou Belly Button Beer est essentielle. Dans ces deux expériences, un prélèvement corporel sert à isoler une levure ensuite cultivée ; la matière d’origine ne devient pas un ingrédient en volume. Hoihoi Tatea est au contraire racontée comme une stout à laquelle le produit animal a été ajouté. Il ne s’agit donc pas seulement de l’adresse d’un micro-organisme, mais d’une formulation revendiquée.

Les données les plus stables viennent de la trace commerciale archivée : 5,8 % vol., 35 IBU, classement en sweet ou milk stout, collaboration Choice Bros–Green Man et statut aujourd’hui retiré. La bière obtient également une médaille d’argent aux Brewers Guild of New Zealand Awards 2015, élément qui montre qu’elle a été jugée comme boisson brassée et pas seulement exhibée comme cascade médiatique.

La documentation s’arrête toutefois au seuil de la cuve. Ni le producteur ni une analyse indépendante accessible ne publient la quantité, la préparation sanitaire, le moment d’incorporation ou l’effet sensoriel vérifié. Même l’expression « milk stout » ne permet pas d’affirmer automatiquement la présence de lactose : elle décrit une catégorie, pas une liste d’ingrédients certifiée.

La bonne méthode consiste donc à tenir ensemble deux niveaux de preuve. L’existence de la bière et l’allégation centrale sont bien contemporaines du lancement ; les détails techniques demeurent opaques et ne doivent pas être complétés par imagination. Hoihoi Tatea est une provocation attestée, mais pas une recette ouverte. L’étrangeté suffit sans lui ajouter un millilitre fictif.`,
      "chapitres": [
        {
          "titre": "Ici, ce n’est pas seulement une origine microbienne",
          "texte": "Le sperme de cerf est présenté comme ingrédient ajouté, pas comme simple lieu de prélèvement d’une levure. Cela distingue radicalement cette bière de Belly Button Beer ou Beard Beer. La précision doit rester clinique : l’humour vient de l’existence du produit, pas de détails anatomiques inventés."
        },
        {
          "titre": "Le stout fait presque tout le travail de normalité",
          "texte": "La classification en milk/sweet stout, l’alcool et l’amertume donnent un cadre brassicole familier. C’est ce contraste qui rend l’objet si étrange : une bière noire structurée, avec un seul élément qui suffit à faire dérailler toute conversation de dégustation."
        }
      ],
      "recette": {
        "titre": "La stout, puis l’ingrédient que personne n’avait demandé",
        "profilUnique": true,
        "noteProfil": "L’allégation d’ingrédient est documentée, mais l’absence de protocole sanitaire et de dosage interdit d’en déduire une formulation reproductible.",
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
          "url": "https://untappd.com/b/choice-bros-brewing-stag-semen-milked-stout-the-green-man/1183153",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Drinks Business",
          "edition": null,
          "reference": "NZ pub selling beer laced with deer semen",
          "type": "source_presse",
          "url": "https://www.thedrinksbusiness.com/2015/08/nz-pub-selling-beer-laced-with-deer-semen/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "American Craft Beer",
          "edition": null,
          "reference": "Bad ideas in brewing: Stag Semen Stout",
          "type": "source_secondaire",
          "url": "https://www.americancraftbeer.com/bad-ideas-in-brewing-stag-semen-stout/",
          "consultation": "2026-08-11"
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
      "description": "Fenrir Nr.26 est une IPA islandaise à 6 % vol. dont une partie du malt est fumée au-dessus d’un feu alimenté par de la bouse de mouton séchée. Celle-ci ne rejoint jamais le moût : elle sert de combustible, héritage matériel d’un territoire où le bois a longtemps été rare.",
      "histoireEtOrigines": `Pour comprendre Fenrir Nr.26, il faut quitter la cuve et regarder ce qui brûle dessous. L’Islande historique dispose de peu de forêts exploitables, tandis que l’élevage ovin fournit chaque année une matière combustible facile à sécher. La bouse de mouton devient ainsi une ressource domestique, notamment pour fumer des aliments. Borg Brugghús reprend cette logique territoriale afin de transformer du malt.

Le procédé ne consiste pas à verser un ingrédient fécal dans la bière. Des galettes séchées alimentent le feu ; leur fumée traverse le grain et y dépose des composés aromatiques. Après le fumage, le malt rejoint une chaîne de brassage normale. La séparation entre combustible et matière première est aussi nette qu’entre bois de hêtre et Rauchmalz dans une bière fumée allemande, même si le choix du combustible islandais provoque une réaction beaucoup plus vive.

Borg classe le résultat comme une IPA de type West Coast à 6 % vol. La page du producteur associe l’amertume et des évocations d’agrumes ou de pamplemousse à une fumée inhabituelle. Cette construction évite le monologue du feu : le houblonnage apporte une tension fraîche et résineuse face au malt marqué, au lieu de laisser la bière ressembler uniquement à un aliment passé au fumoir.

Le nom renvoie à Fenrir, loup monstrueux de la mythologie nordique, et le numéro 26 l’inscrit dans la série expérimentale de la brasserie. Le décor mythologique est efficace, mais l’histoire la plus forte reste celle d’une contrainte énergétique. Le combustible raconte un pays de landes, de pâturages et d’adaptation à la pénurie de bois.

Présenter Fenrir comme une « bière à la bouse » efface précisément ce qui la rend intelligible. Elle appartient plutôt aux bières de procédé : l’anomalie se produit avant l’empâtage, lors du traitement du malt. Le gag tient en une ligne ; la géographie du feu explique tout le reste.`,
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
        "noteProfil": "La bouse séchée est un combustible de fumage, jamais un ajout au moût ; la maîtrise sanitaire appartient au travail du maltier.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Iceland Naturally",
          "edition": null,
          "reference": "Borg Brugghús Fenrir Nr.26",
          "type": "source_secondaire",
          "url": "https://old.icelandnaturally.com/article/borg-brugghus-latest-beer-fenrir-nr-26/",
          "consultation": "2026-08-11"
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
      "description": "Pour Coolship No.6, Crux Fermentation Project a inoculé une bière de fermentation spontanée avec la flore du Rogue River Blue, puis l’a laissée évoluer près de deux ans en fût. Le fromage n’est pas un vague accord gastronomique : son écosystème microbien devient partenaire d’une bière acide déjà peuplée par l’air de l’Oregon.",
      "histoireEtOrigines": `Deux maisons de l’Oregon commencent par comparer leurs caves. Crux Fermentation Project refroidit du moût dans un coolship, large bac ouvert où l’air et l’équipement apportent une communauté de levures et de bactéries. Rogue Creamery affine Rogue River Blue, un fromage persillé saisonnier enveloppé de feuilles de vigne imbibées de poire. Chacune travaille donc avec le temps, le bois et une flore complexe ; la collaboration consiste à faire communiquer ces écosystèmes.

Le communiqué repris par la presse professionnelle décrit une inoculation de la bière avec la flore microbienne du Rogue River Blue. Cette formulation résout le flou entretenu par certains titres résumant l’expérience en « bière brassée avec du fromage bleu ». Le fromage sert bien de source biologique au projet, mais le protocole est celui d’un ensemencement, pas nécessairement celui de morceaux fondus ou de meules jetées dans la cuve.

La base « lambic-style » est refroidie à l’air libre, puis élevée en fûts de chêne pendant près de deux ans. Cette durée laisse la fermentation mixte transformer lentement les sucres et développer acidité, sécheresse et arômes de garde. Les micro-organismes associés au fromage rejoignent un milieu très différent du lait : alcool, houblon, pH et disponibilité des nutriments sélectionnent ce qui peut réellement s’y maintenir. Une origine commune ne garantit donc pas que chaque moisissure ou bactérie d’affinage domine la bière.

Le numéro 6 situe le brassin dans la série Coolship de Crux, tandis que la sortie limitée fait de la bouteille le résultat d’une recherche plus que d’un nouveau style. La documentation publique ne livre ni inventaire des espèces, ni séquençage avant et après maturation, ni calendrier complet des inoculations. Elle suffit néanmoins à établir les éléments centraux : partenaire fromager identifié, flore du bleu, fermentation ouverte et longue garde sous bois.

Coolship No.6 ne cherche pas à liquéfier un plateau de fromages. Elle met à l’épreuve une question de microbiologie alimentaire : qu’advient-il lorsqu’une communauté façonnée pour une cave d’affinage entre dans une autre cave, gouvernée par le malt ?`,
      "chapitres": [
        {
          "titre": "Deux caves, deux microbiologies",
          "texte": "Une bière de coolship collecte une microflore environnementale puis évolue lentement en fermentation mixte. Un bleu comme Rogue River Blue s’appuie notamment sur des moisissures Penicillium et des cultures d’affinage. Les réunir est spectaculaire, mais pas absurde d’un point de vue microbiologique : les deux produits sont déjà des écosystèmes comestibles."
        },
        {
          "titre": "La flore du fromage, plutôt qu’une fondue",
          "texte": "Le communiqué de lancement repris par la presse décrit une inoculation avec la flore de Rogue River Blue. Les titres simplifiés parlent parfois de bière « au fromage », mais la formulation microbiologique est la plus précise : collaboration Rogue Creamery, culture issue du bleu, base de coolship et vieillissement prolongé."
        }
      ],
      "recette": {
        "titre": "Le coolship rencontre le bleu",
        "profilUnique": true,
        "noteProfil": "Cette fermentation croisée dépend de cultures alimentaires contrôlées et d’une longue garde ; elle ne se résume pas à ajouter du fromage à une sour.",
        "explicationProfil": "Bière de coolship inoculée avec la flore du Rogue River Blue, puis élevée près de deux ans en fût de chêne.",
        "maltsEtCereales": [
          "Base de bière de coolship non détaillée avec précision."
        ],
        "houblons": [
          "Houblonnage non documenté avec assez de précision."
        ],
        "levuresEtMicroorganismes": [
          "Microflore spontanée/culture mixte de la bière.",
          "Flore microbienne issue du Rogue River Blue selon le communiqué du projet."
        ],
        "ingredientsComplementaires": [
          "Culture prélevée sur le Rogue River Blue ; aucun ajout de fromage entier n’est établi par les sources retenues."
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "InsideHook",
          "edition": null,
          "reference": "Oregon brewery makes blue cheese beer",
          "type": "source_presse",
          "url": "https://www.insidehook.com/beer/oregon-brewery-blue-cheese-beer",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Rogue Creamery",
          "edition": null,
          "reference": "Rogue River Blue — affinage et cultures",
          "type": "source_producteur",
          "url": "https://roguecreamery.com/rogue-river-blue/",
          "consultation": "2026-08-11"
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
      "description": "Présentée au GABS de Melbourne en 2018, Durian Durian Beer associe une saison de Foreigner Brewing au fruit d’Asie du Sud-Est célèbre pour son parfum clivant. Les comptes rendus évoquent douceur fruitée, registre savoureux et finale sèche épicée ; la recette, le dosage et même le titre alcoolique restent cependant peu documentés.",
      "histoireEtOrigines": `Le durian arrive rarement seul dans une conversation. En Asie du Sud-Est, sa chair riche et crémeuse lui vaut le surnom de « roi des fruits » et une place culinaire importante ; son bouquet soufré et persistant provoque aussi des interdictions dans certains hôtels ou transports. Lorsque Foreigner Brewing l’associe à une saison pour le Great Australasian Beer SpecTAPular de Melbourne en mai 2018, le fruit possède déjà toute la publicité nécessaire.

Le choix de la saison offre un contrepoint logique. Cette famille de bière peut développer une fermentation sèche, poivrée et très expressive, capable de répondre à la densité aromatique du durian sans chercher à la dissimuler. Les rares descriptions contemporaines parlent d’un équilibre entre facettes sucrées et savoureuses du fruit, puis d’une épice sèche provenant du caractère saison. Elles confirment l’intention générale, pas une analyse sensorielle universelle.

La documentation technique demeure mince. Les articles identifient Foreigner Brewing, le festival, la date et le couple saison–durian, mais ils ne publient ni masse de fruit, ni forme d’incorporation, ni souche, ni densités, ni houblonnage. Les bases de produits conservées ne suffisent pas à combler ces blancs avec assurance. Il serait donc facile, mais faux, de transformer la réputation olfactive du fruit en recette détaillée ou de prétendre connaître le goût de chaque verre.

Cette pauvreté documentaire fait elle-même partie de l’histoire. Beaucoup de créations de festival apparaissent une fois, circulent sous forme de titres spectaculaires, puis laissent peu d’archives primaires. Durian Durian est bien attestée comme saison au fruit, mais toute précision supplémentaire doit rester conditionnelle.

L’expérience mérite enfin mieux que la caricature du « fruit qui sent mauvais ». Le durian change selon la variété, la maturité et la perception du dégustateur ; ses amateurs y trouvent une complexité que les comparaisons occidentales les plus outrées effacent. La bière met face à face deux signatures fermentaires puissantes. Ce que l’on peut affirmer s’arrête là où commence le nez imaginaire.`,
      "chapitres": [
        {
          "titre": "Le fruit qui possède déjà une légende",
          "texte": "Le durian est souvent décrit par des comparaisons olfactives extrêmes, mais ces images relèvent largement de la perception culturelle et individuelle. Sa chair est aussi crémeuse, sucrée et complexe. Une bière au durian peut donc jouer sur bien davantage qu’une caricature d’odeur « horrible »."
        },
        {
          "titre": "Ce que l’on sait, sans renifler à distance",
          "texte": "Foreigner Brewing a bien associé une saison au durian. En revanche, les sources accessibles ne donnent pas une recette complète ni une analyse sensorielle stabilisée. Le fruit reste donc au centre sans se voir prêter automatiquement toutes les notes de sa réputation."
        }
      ],
      "recette": {
        "titre": "Une saison avec un fruit impossible à ignorer",
        "profilUnique": true,
        "noteProfil": "Les archives d’un brassin de festival ne donnent pas assez de paramètres pour transformer son concept en recette fidèle.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Drinks Business",
          "edition": null,
          "reference": "Aussie brewery makes beer with Asia’s smelliest fruit",
          "type": "source_presse",
          "url": "https://www.thedrinksbusiness.com/2018/05/aussie-brewery-makes-beer-with-asias-smelliest-fruit/",
          "consultation": "2026-08-11"
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
      "description": "Kimchi Sour est une kettle sour de Dokkaebier à 6 % vol., relevée de gingembre et de gochugaru. Son acidification emploie une culture entretenue dans le kimchi maison du fondateur pendant deux ans. Le bocal fournit donc surtout une communauté lactique et une mémoire familiale, pas nécessairement tous les ingrédients d’un kimchi versés dans la cuve.",
      "histoireEtOrigines": `Dokkaebier construit son identité autour d’un dialogue entre bière artisanale américaine et ingrédients coréens. Kimchi Sour en est l’expression la plus microbiologique. Le kimchi ne désigne pas une recette unique, mais une vaste famille de légumes fermentés dont l’acidification repose notamment sur des bactéries lactiques. Une sour beer peut mobiliser le même grand mécanisme biochimique, dans une matrice et avec des contraintes très différentes.

Le fondateur raconte avoir entretenu pendant environ deux ans une culture issue de son kimchi maison avant de l’utiliser pour acidifier la bière. Cette donnée est plus précise que l’image d’un bocal complet renversé dans la cuve. La culture apporte des micro-organismes sélectionnés par des cycles de fermentation domestique ; gingembre et gochugaru, le piment rouge coréen, construisent ensuite le pont aromatique explicite avec l’inspiration culinaire.

La bière est annoncée à 6 % vol. et 10,6 IBU. Dokkaebier la décrit comme une kettle sour : le moût est acidifié dans la chaudière par la culture lactique, puis le processus est repris et sécurisé avant la fermentation alcoolique. Ce schéma permet de maîtriser l’acidité et de limiter la présence des bactéries dans le reste de la brasserie. Les températures, durées et espèces exactes ne sont pas publiées, si bien que la culture familiale ne peut pas être réduite à une souche de catalogue.

Il faut également résister au réflexe d’ajouter mentalement chou, ail, sauce de poisson ou toute autre composante possible du kimchi. Les éléments documentés pour la bière sont la culture, le gingembre et le gochugaru. Le nom indique une filiation ; il ne garantit pas la transposition intégrale d’un plat, d’autant que les kimchis varient selon les régions, les saisons et les foyers.

Kimchi Sour n’est donc pas seulement une provocation gastronomique. Elle met en circulation une culture vivante entre cuisine familiale et équipement brassicole, puis traduit cette parenté lactique en bière aigre, épicée et mesurée. Deux fermentations se rencontrent sans que l’une devienne le déguisement de l’autre.`,
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
        "noteProfil": "La culture familiale et le procédé de kettle sour sont spécifiques au producteur ; les ingrédients documentés ne forment pas une recette complète de kimchi.",
        "explicationProfil": "Kettle sour à 6 % et 10,6 IBU, documentée avec gochugaru, gingembre et une culture issue d’un kimchi maison entretenu deux ans.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": null,
          "reference": "Special Ingredient: Kimchi",
          "type": "source_professionnelle",
          "url": "https://www.beerandbrewing.com/special-ingredient-kimchi",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BeerAdvocate",
          "edition": null,
          "reference": "Dokkaebier Kimchi Sour",
          "type": "source_secondaire",
          "url": "https://www.beeradvocate.com/beer/profile/59808/542566/",
          "consultation": "2026-08-11"
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
      "description": "Créée pour un dîner-spectacle inspiré des Deux Gredins, Mr. Twit’s Odious Ale utilise une culture issue d’un prélèvement sur la chaise d’écriture de Roald Dahl. Une base de bière de blé fumée au chêne, dans l’esprit du Grätzer polonais, transforme ainsi un meuble patrimonial en adresse microbienne — jamais l’auteur en ingrédient.",
      "histoireEtOrigines": `En 2016, le studio de création culinaire Bompas & Parr prépare Dinner at the Twits, un banquet théâtral inspiré des personnages répugnants de Roald Dahl. Pour fournir au dîner sa bière, il collabore avec 40FT Brewery et ne se contente pas d’une étiquette littéraire : un écouvillon est passé sur la chaise où l’écrivain travaillait, avec l’accord de la Roald Dahl Estate, afin d’y rechercher une levure cultivable.

Le prélèvement rejoint ensuite un laboratoire. Des micro-organismes présents sur le meuble sont isolés, testés et propagés jusqu’à fournir une culture apte à la fermentation. Cette chaîne est la partie souvent perdue dans les titres parlant d’une bière « faite avec Roald Dahl ». Aucun tissu de l’auteur n’est collecté et aucun fragment de chaise n’entre dans la cuve. La relation est environnementale : un meuble ayant partagé son espace de travail héberge une population microbienne, dont une descendante devient levure brassicole.

Bompas & Parr documente aussi une architecture de bière plus précise que ne le laissent entendre les reprises médiatiques. Mr. Twit’s Odious Ale s’inspire du Grätzer, bière polonaise de blé fumé, et emploie du malt de blé fumé au chêne. Le profil sec, fumé et céréalier convient au décor du repas tout en laissant la provenance de la culture porter l’essentiel du récit. Le projet n’est donc pas une ale générique à laquelle on aurait collé une anecdote après fermentation.

Cette levure n’établit pas pour autant un « goût de littérature ». Une souche trouvée sur un objet prestigieux n’est chimiquement remarquable qu’après caractérisation ; sa valeur publique vient surtout de sa traçabilité. Le même isolat découvert sur une chaise anonyme n’aurait probablement jamais obtenu son banquet.

Mr. Twit’s Odious Ale appartient ainsi aux reliques vivantes, catégorie où patrimoine et microbiologie s’entrecroisent. L’encre, le papier et le mobilier restent au musée ; seule une lignée microscopique franchit la porte de la brasserie. Le récit demeure odieux au sens de Dahl, pas au sens sanitaire.`,
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
        "noteProfil": "Le prélèvement patrimonial a été isolé et contrôlé en laboratoire ; écouvillonner un meuble ne fournit pas directement une levure sûre.",
        "explicationProfil": "Bière de blé au malt fumé au chêne, inspirée du Grätzer, fermentée avec une culture issue de la chaise d’écriture de Roald Dahl.",
        "maltsEtCereales": [
          "Malt de blé fumé au chêne, dans l’inspiration Grätzer annoncée par Bompas & Parr."
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Independent",
          "edition": null,
          "reference": "Beer made from yeast swabbed from Roald Dahl’s writing chair",
          "type": "source_presse",
          "url": "https://www.independent.co.uk/arts-entertainment/books/news/beer-to-be-made-from-yeast-swabbed-from-roald-dahl-s-writing-chair-a7195721.html",
          "consultation": "2026-08-11"
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
      "description": "Une équipe israélienne a cultivé des levures piégées dans les pores de 21 récipients archéologiques provenant de quatre sites, puis six isolats ont fermenté des moûts modernes. L’expérience démontre un potentiel biologique associé aux céramiques ; elle ne ressuscite ni une unique bière égyptienne vieille de 5 000 ans, ni sa recette complète.",
      "histoireEtOrigines": `L’expérience publiée en 2019 commence par une question inhabituelle : les pores d’une céramique ayant contenu une boisson fermentée peuvent-ils conserver des levures viables pendant des siècles ou des millénaires ? Archéologues et microbiologistes israéliens examinent 21 récipients provenant de quatre sites. Les objets ne forment pas un ensemble égyptien homogène : ils couvrent des lieux, des cultures et des périodes différents, depuis l’Antiquité ancienne jusqu’à des contextes plus récents.

Les chercheurs prélèvent l’intérieur poreux des tessons, mettent les échantillons en culture et identifient les colonies obtenues. Six souches jugées pertinentes sont ensuite testées dans des fermentations modernes, avec l’aide de brasseurs et de producteurs de miel. Certaines produisent bière ou hydromel considérés comme buvables. Ce résultat établit que des isolats associés aux récipients peuvent encore métaboliser un moût ; il ne transforme pas chaque colonie en témoin direct et incontestable du jour où le vase a été rempli.

La formule médiatique « bière à la levure vieille de 5 000 ans » rassemble donc plusieurs raccourcis. L’âge dépend du récipient concerné, l’étude comprend davantage qu’une seule tradition, et la boisson d’essai est fabriquée avec des matières premières et un équipement contemporains. Même une provenance ancienne parfaitement établie ne fournirait que la fermentation. Céréales, maltage, aromates, eau, températures et gestes de brassage resteraient à reconstruire.

Cette prudence n’affaiblit pas la découverte. Elle en précise la portée : la poterie peut fonctionner comme archive biologique, en plus de conserver des résidus chimiques ou des formes. Le passage de l’archéologie à la cuve devient alors un test expérimental du comportement des isolats, pas une séance de dégustation identique à celle d’un palais antique.

La « bière égyptienne » désigne ainsi un programme à plusieurs voix plutôt qu’un produit unique. Six cultures, 21 objets et quatre sites racontent un paysage fermentaire complexe. Ce que les chercheurs remettent en mouvement est une lignée microbienne candidate ; le reste de la recette demeure, honnêtement, dans les lacunes de l’histoire.`,
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
        "noteProfil": "Six isolats et plusieurs essais sont concernés : aucune formulation unique ne peut représenter tout le programme archéologique.",
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
          "url": "https://www.biu.ac.il/en/article/13727",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Hebrew University / CFHU",
          "edition": null,
          "reference": "Ancient yeast from pottery used to recreate fermented beverages",
          "type": "source_universitaire",
          "url": "https://www.cfhu.org/news/ancient-yeast/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Jewish Telegraphic Agency",
          "edition": null,
          "reference": "5,000-year-old yeast used to brew beer",
          "type": "source_presse",
          "url": "https://www.jta.org/2019/05/22/israel/5000-year-old-yeast-is-being-used-by-israeli-scientists-to-brew-a-pretty-good-beer",
          "consultation": "2026-08-11"
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
      "description": "Preservation Ale est un porter moderne fermenté avec une culture isolée d’une bouteille scellée retrouvée dans l’épave du Sydney Cove, perdu en 1797. Le naufrage fournit une levure liée à la cargaison historique ; Malt Shovel Brewery fournit les matières premières, l’équipement et les choix nécessaires à toute reconstruction contemporaine.",
      "histoireEtOrigines": `En février 1797, le Sydney Cove s’échoue près de Preservation Island, dans le détroit de Bass, alors qu’il transporte vers Port Jackson une cargaison de marchandises et d’alcool. Plus de deux siècles plus tard, les fouilles sous-marines mettent au jour des bouteilles encore scellées. Le Queen Victoria Museum and Art Gallery de Launceston conserve ces objets et leur contenu dans une collection où l’archéologie maritime rencontre bientôt la microbiologie.

Des chercheurs analysent le liquide demeuré à l’abri de l’air. Parmi les micro-organismes récupérés, une culture de levure associée à une bouteille de bière peut être propagée. Cette viabilité exceptionnelle fait les gros titres : une cellule a traversé environ 220 ans de stockage avant de retrouver un milieu de culture. L’image est juste à condition de ne pas confondre la lignée réveillée avec tout le contenu originel, fortement transformé par le temps.

Le musée travaille ensuite avec Malt Shovel Brewery, maison de la marque James Squire, pour produire Preservation Ale. Le brasseur choisit un porter sombre inspiré des bières que la cargaison aurait pu contenir et utilise la culture issue de l’épave pour la fermentation. Le nom rend hommage à l’île du naufrage autant qu’au geste de conservation.

Ce brassin n’est pourtant pas une bouteille de 1797 dupliquée. Les malts actuels, l’eau traitée, les équipements inox, le contrôle thermique et le protocole sanitaire appartiennent au XXIe siècle. La recette complète du navire n’a pas survécu ; même l’identité précise de chaque organisme isolé demande une interprétation scientifique. L’expérience assemble donc un élément biologique historique et une reconstruction sensorielle moderne.

Cette limite est sa force. Preservation Ale ne prétend pas effacer le naufrage ni deux cents ans de technologie. Elle donne à une collection de musée une fonction nouvelle : au lieu de rester seulement visible derrière une vitrine, une descendante microscopique de la cargaison agit à nouveau. L’épave fournit une voix authentique ; le porter contemporain écrit le reste de la partition.`,
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
        "noteProfil": "Seule la culture issue de l’épave est historique ; le porter et son environnement de production sont une reconstruction moderne.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Maritime Executive",
          "edition": null,
          "reference": "Beer brewed from 1797 shipwreck bottle",
          "type": "source_presse",
          "url": "https://maritime-executive.com/article/beer-brewed-from-1797-shipwrecks-bottle",
          "consultation": "2026-08-11"
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
      "description": "Dylan McDonnell a composé Sinai Sour autour d’une levure annoncée comme vieille d’environ trois millénaires et d’ingrédients repérés dans le papyrus Ebers. Cette bière maison à 5 % vol. est une reconstruction créative : le texte antique fournit un garde-manger documentaire, pas une recette complète portant ce nom et ces proportions.",
      "histoireEtOrigines": `Sinai Sour naît moins d’une fouille que d’un long travail de lecture. Le brasseur amateur américain Dylan McDonnell obtient une culture liée aux recherches sur des levures isolées de céramiques antiques du Proche-Orient. Il cherche ensuite un milieu de fermentation capable de donner à cet organisme un contexte historique plausible sans reproduire simplement une recette moderne de pale ale.

Son fil conducteur est le papyrus Ebers, traité médical égyptien copié au deuxième millénaire avant notre ère. Le document recense remèdes, plantes, fruits et préparations, mais ne livre pas la formule prête à brasser de Sinai Sour. McDonnell l’utilise comme inventaire d’ingrédients attestés ou compatibles avec le monde étudié, puis construit lui-même leur assemblage.

Les comptes rendus de 2024 décrivent une bière d’environ 5 % vol. avec une céréale telle que l’emmer ou une orge égyptienne, des figues de sycomore, des dattes du désert, du miel de Sidr yéménite, de la caroube et des raisins secs dorés. Cumin noir, encens et genévrier épineux complètent cette architecture sans houblon moderne mis au premier plan. La culture ancienne apporte acidité et fermentation à un moût entièrement préparé aujourd’hui.

La liste impressionne, mais elle ne prouve pas qu’un brasseur antique ait combiné exactement ces matières, encore moins sous les mêmes températures ou dosages. Chaque choix contemporain relie des indices dispersés. Le matériel, l’hygiène, la forme des ingrédients et le contrôle du processus appartiennent eux aussi au présent. Le terme « reconstruction » doit donc être accompagné de « créative » ou « expérimentale ».

Cette honnêteté ne réduit pas le projet à un simple pastiche. McDonnell teste la compatibilité entre un isolat archéologique, des céréales anciennes disponibles et un vocabulaire botanique documenté. La dégustation devient une hypothèse comestible : non pas « voici la bière des Égyptiens », mais « voici ce que ces sources nous ont permis d’imaginer sans les contredire délibérément ».

Sinai Sour est ainsi un roman archéologique annoté. La levure et le papyrus ouvrent le dossier ; le brasseur contemporain en écrit nécessairement les pages manquantes.`,
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
        "noteProfil": "Les ingrédients sont documentés comme inspiration historique, mais leur assemblage appartient au brasseur moderne et ne vaut pas recette antique certifiée.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "VinePair",
          "edition": null,
          "reference": "Beer made with ancient yeast",
          "type": "source_presse",
          "url": "https://vinepair.com/booze-news/beer-made-with-ancient-yeast/",
          "consultation": "2026-08-11"
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
      "description": "En août 2026, la « bière Ötzi » n’existe encore que comme projet. Des chercheurs ont cultivé des levures associées à la momie et démontré leur potentiel avec du pain au levain ; un essai brassicole est envisagé. Ces organismes adaptés au froid ont pu coloniser Ötzi après sa mort : leur âge n’est pas automatiquement celui de l’homme des glaces.",
      "histoireEtOrigines": `Cette histoire doit être racontée au présent, car sa bouteille n’existe pas encore. En 2026, Eurac Research publie les résultats d’une exploration du microbiome associé à Ötzi, la momie découverte dans les Alpes de l’Ötztal. L’équipe récupère et cultive plusieurs levures capables de vivre dans des conditions froides, puis teste leur comportement dans une fermentation alimentaire.

La démonstration la plus concrète concerne le pain. Des cultures participent à un levain et produisent un aliment réel, ce qui montre qu’elles peuvent métaboliser des substrats utiles. Les communications scientifiques et les articles de juin 2026 évoquent ensuite la bière comme prochaine piste, avec l’intérêt de spécialistes du brassage. Aucun nom de produit, degré, malt, houblon ou protocole achevé n’est cependant publié à la date de consultation du 11 août.

Le raccourci « levure de bière vieille de 5 300 ans trouvée sur Ötzi » cumulerait donc deux erreurs. Premièrement, le potentiel brassicole reste à expérimenter ; du levain n’est pas une bière. Deuxièmement, l’association spatiale avec une momie ne donne pas automatiquement l’âge du micro-organisme. Les chercheurs considèrent que certaines souches adaptées au froid ont pu rejoindre le corps ou son environnement glaciaire après la mort d’Ötzi et y persister.

Cette incertitude temporelle ne rend pas les isolats banals. Des levures sélectionnées par un habitat froid peuvent présenter des propriétés intéressantes pour les fermentations à basse température, la production d’arômes ou la recherche sur la conservation. Ces hypothèses demandent des essais comparatifs et une identification précise, pas une date de naissance empruntée à la momie.

Le statut de projet constitue ainsi l’information principale. Il empêche les cases vides — alcool, couleur, amertume, recette — d’être remplies par anticipation et laisse un repère clair pour une future mise à jour. Si un brassin voit le jour, il faudra alors distinguer la souche employée, le protocole moderne et le lien réellement démontré avec l’environnement d’Ötzi.

Pour l’instant, le dossier contient une étude microbiologique, un pain et une intention. C’est déjà fascinant ; inventer la bière ne le serait pas.`,
      "chapitres": [
        {
          "titre": "Le brassin est encore dans le futur",
          "texte": "Alcool, couleur, amertume, malts, houblons et style n’existent pas encore comme données de bière. Remplir ces cases aujourd’hui fabriquerait une boisson imaginaire. Le statut « projet » est une information positive : il distingue ce qui a été cultivé de ce qui pourrait un jour être brassé."
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Smithsonian Magazine",
          "edition": null,
          "reference": "Scientists made sourdough with yeast associated with Ötzi",
          "type": "source_presse_scientifique",
          "url": "https://www.smithsonianmag.com/smart-news/scientists-made-sourdough-bread-with-yeast-found-on-otzi-the-icemans-mummified-body-180988894/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Guardian",
          "edition": null,
          "reference": "Scientists explore sourdough and possible brewing with Ötzi-associated yeast",
          "type": "source_presse",
          "url": "https://www.theguardian.com/science/2026/jun/05/scientists-sourdough-bread-yeast-strains-mummy",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Drinks Business",
          "edition": null,
          "reference": "Scientists to brew beer with yeast from mummified remains — project report",
          "type": "source_presse",
          "url": "https://www.thedrinksbusiness.com/2026/06/scientists-to-brew-beer-with-yeast-from-mummified-remains/",
          "consultation": "2026-08-11"
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
      "description": "En 2020, l’Université de Calgary, Village Brewery et Xylem ont brassé une Village Blonde avec une eau municipale usée purifiée par plusieurs barrières de traitement puis analysée selon les recommandations canadiennes de potabilité. Première démonstration de ce type en Alberta, ACWA Reuse Brew transforme une question d’infrastructure en expérience publique et buvable.",
      "histoireEtOrigines": `À Calgary, la bière sert en 2020 de banc d’essai à une infrastructure de réutilisation. ACWA — Advancing Canadian Wastewater Assets — est une plateforme de recherche de l’Université de Calgary installée auprès d’une station d’épuration. Avec l’équipementier Xylem et Village Brewery, l’équipe veut montrer qu’une eau municipale déjà utilisée peut devenir une ressource alimentaire sûre après un traitement conçu et vérifié pour cet objectif.

Le parcours de l’eau compte davantage que la recette de la blonde. Un traitement biologique retire une partie des nutriments ; l’ultrafiltration constitue une barrière physique ; l’ozone et les ultraviolets participent à une oxydation avancée ; l’osmose inverse retient de nombreux contaminants dissous. Ces étapes n’ont pas la même fonction et se complètent. La sûreté repose sur leur succession, la surveillance et les analyses, pas sur un filtre miraculeux placé au bout d’un tuyau.

Avant le brassage, un laboratoire indépendant teste l’eau obtenue. L’université indique qu’elle satisfait les recommandations canadiennes applicables à la qualité de l’eau potable. Village Brewery l’utilise alors dans sa Village Blonde, une bière volontairement familière. Le projet est présenté comme la première bière d’Alberta élaborée avec des eaux usées traitées et reste un démonstrateur, non le début silencieux d’un changement généralisé de l’approvisionnement commercial.

Le choix de la bière répond au « facteur beurk », cette réaction qui associe spontanément l’eau à son origine plutôt qu’à sa composition présente. Un verre transparent et une boisson connue rendent visibles les performances abstraites d’une chaîne de traitement. Le public peut discuter du risque, des contrôles et de la pénurie sur un objet concret, tout en comprenant que l’eau circule déjà naturellement et techniquement à travers de multiples usages.

ACWA Reuse Brew ne cherche donc aucune saveur d’égout. Les constituants indésirables sont précisément ce que le système doit retirer. L’insolite se situe dans la mémoire sociale de la matière : chimiquement contrôlée comme potable, l’eau continue d’être perçue à travers son passé. La mousse devient un outil de communication sur l’avenir hydrique des villes.`,
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
        "noteProfil": "La singularité dépend d’une installation pilote, d’analyses indépendantes et d’un cadre réglementaire ; elle ne se reproduit pas avec une filtration domestique.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Global News",
          "edition": null,
          "reference": "Calgary brewery makes beer with treated wastewater",
          "type": "source_presse",
          "url": "https://globalnews.ca/news/7282032/calgary-brewery-wastewater-beer/",
          "consultation": "2026-08-11"
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
      "description": "Epic Cleantec et Devil’s Canyon brassent avec de l’eau grise de bâtiments — douches et lessive — purifiée sur place par une chaîne multibarrière. Après un premier démonstrateur OneWater Brew, le programme a donné Shower Hour IPA à 6 % vol. et Laundry Club Kölsch à 4,6 %, deux recettes distinctes plutôt qu’un hypothétique style « eau recyclée ».",
      "histoireEtOrigines": `Dans un immeuble, l’eau des douches, lavabos et machines à laver repart généralement vers l’égout alors qu’elle pourrait servir de nouveau après traitement. Epic Cleantec conçoit des installations compactes capables de récupérer cette eau grise au plus près du bâtiment. Pour rendre une tuyauterie invisible compréhensible par le public, l’entreprise choisit une preuve familière : une bière brassée avec l’eau purifiée.

Le premier OneWater Brew est développé avec Devil’s Canyon Brewing à partir d’une eau récupérée dans un immeuble de San Francisco. Le système associe plusieurs barrières, qui peuvent inclure traitement biologique, filtration membranaire, charbon actif, osmose inverse et désinfection. Elles retirent matières organiques, micro-organismes et composés dissous avant tout contact avec le malt. Les savons ou produits de lessive appartiennent donc au problème à éliminer, jamais à la liste aromatique.

Le projet évolue ensuite d’un démonstrateur distribué lors d’événements vers deux bières présentées commercialement en 2025. Shower Hour IPA titre 6 % vol. et combine notamment houblon Azacca, fonio et levure kveik. Laundry Club Kölsch affiche 4,6 %, avec malt Pilsner, houblon Hallertau et assemblage de levures. Leurs noms gardent la mémoire de la source d’eau, tandis que leurs recettes affirment des identités sensorielles séparées.

Cette chronologie évite de fusionner tous les brassins sous une formule unique. OneWater Brew désigne d’abord une démonstration puis un programme ; Shower Hour et Laundry Club sont des produits caractérisés. La constante n’est ni le style ni la levure, mais la boucle locale de traitement mise en œuvre avec la brasserie partenaire.

La bière intervient enfin comme test social. Une eau conforme peut rester difficile à accepter si son histoire évoque la salle de bains. En donnant au liquide deux expressions ordinaires et nommées, Epic déplace la discussion vers les performances du système, les analyses et la rareté de la ressource. La douche est une origine administrative ; après purification, elle ne doit plus être une saveur.`,
      "chapitres": [
        {
          "titre": "La douche est une source, pas une saveur",
          "texte": "L’eau grise provient d’usages domestiques relativement peu contaminés comparés aux eaux de toilettes, mais elle contient tout de même savons, matières organiques et micro-organismes. Le système OneWater traite cette eau jusqu’à obtenir une qualité adaptée à l’usage démontré. Dire « bière à l’eau de douche » sans le mot « purifiée » retire précisément la moitié importante de l’histoire."
        },
        {
          "titre": "Une anomalie devenue petite gamme",
          "texte": "La première OneWater Brew était surtout un démonstrateur. Shower Hour IPA et Laundry Club Kölsch montrent ensuite la maturation du concept : la source d’eau reste insolite, mais chaque bière possède une véritable identité de recette. Il s’agit d’une famille de preuves par la bière, pas d’un style unique."
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Devil's Canyon Brewing Company",
          "edition": null,
          "reference": "Epic OneWater Brew",
          "type": "source_brasserie",
          "url": "https://www.devilscanyon.com/epic-onewater-brew.html",
          "consultation": "2026-08-11"
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
      "description": "Lancée en 2019, ERKO est une lager tchèque non filtrée et non pasteurisée, produite à Čížová avec une eau usée passée par coagulation, ultrafiltration, osmose inverse, charbon actif et désinfection. Quinze hectolitres ont servi à démontrer la réutilisation face à la sécheresse ; ERKO ZERO est une déclinaison ultérieure, à ne pas confondre avec l’originale.",
      "histoireEtOrigines": `En 2019, la République tchèque traverse une succession d’années sèches qui transforme la réutilisation de l’eau en sujet public. Veolia choisit la bière comme démonstrateur dans un pays où la lager pâle possède une forte valeur culturelle. Avec la brasserie de Čížová, le groupe produit environ quinze hectolitres d’ERKO, présentée comme la première bière tchèque brassée à partir d’eaux usées recyclées.

Le raccourci « eau d’égout » masque toute la chaîne qui rend le projet possible. Une eau déjà traitée reçoit des étapes supplémentaires : coagulation, ultrafiltration, osmose inverse, adsorption sur charbon actif puis désinfection. Chaque barrière vise une famille de particules, de molécules ou de micro-organismes. Le liquide final doit répondre aux exigences prévues avant d’entrer en brasserie ; son passé n’est pas recherché comme caractère gustatif.

ERKO prend la forme exigeante d’une lager de type Pilsner, fermentée à basse température, non filtrée et non pasteurisée. Une bière claire offre peu de malts torréfiés ou d’aromates derrière lesquels cacher un défaut. Ce choix sert donc le message : l’eau purifiée doit permettre une boisson nette dans le pays qui a donné son nom à Pilsen. La fermentation et la garde restent conventionnelles ; l’innovation se situe en amont du brassage.

Le lot initial est destiné surtout aux événements, à la sensibilisation et à la discussion réglementaire, plutôt qu’à une distribution nationale permanente. Veolia prolonge ensuite la marque avec d’autres démonstrations, dont ERKO ZERO sans alcool. Cette évolution crée un piège documentaire : les communications récentes peuvent décrire une version différente de la lager de 2019. Les deux ne doivent pas être fusionnées dans une recette intemporelle.

ERKO raconte finalement une boucle industrielle autant qu’une bière. L’eau traverse une ville, une station, une unité de finition et une brasserie avant de revenir sous une forme socialement reconnaissable. La Pils ne camoufle pas l’infrastructure ; elle lui fait passer un examen public.`,
      "chapitres": [
        {
          "titre": "Tester l’eau recyclée dans le temple de la Pils",
          "texte": "Une bière pâle, nette et peu chargée en arômes de fermentation cache mal les défauts d’eau. Choisir une Pilsner comme démonstrateur est donc symboliquement fort : si l’eau purifiée posait un problème sensoriel majeur, la base claire aurait peu d’endroits où le dissimuler."
        },
        {
          "titre": "ERKO n’est pas forcément ERKO ZERO",
          "texte": "Le projet a évolué et Veolia communique désormais sur plusieurs produits. Les générations doivent rester séparées : la première ERKO illustre la réutilisation d’eau dans une lager tchèque ; une version zéro alcool appartient à une étape ultérieure. L’histoire reste lisible seulement si l’on évite de fusionner toutes les communications marketing."
        }
      ],
      "recette": {
        "titre": "Une Pilsner qui commence par l’osmose inverse",
        "profilUnique": true,
        "noteProfil": "Le lot de 2019 dépend d’une filière industrielle contrôlée ; ERKO ZERO appartient à une génération ultérieure et ne doit pas fournir sa recette rétroactivement.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Veolia",
          "edition": null,
          "reference": "Drought, recycling wastewater and reuse",
          "type": "source_entreprise",
          "url": "https://www.veolia.com/en/news/drought-recycling-wastewater-reuse-drinking-water",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Radio Prague International",
          "edition": null,
          "reference": "Czech brewery rolls out wastewater beer",
          "type": "source_presse",
          "url": "https://english.radio.cz/czech-brewery-rolls-out-first-wastewater-beer-8128614",
          "consultation": "2026-08-11"
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
      "description": "Egtvedpigens Bryg est une reconstitution danoise inspirée du récipient d’écorce placé vers 1370 av. J.-C. dans la tombe de la jeune fille d’Egtved. Les résidus indiquent une boisson fermentée au blé, au miel, aux baies et au myrte des marais ; ils ne livrent ni proportions, ni levure, ni une recette moderne de bière au sens strict.",
      "histoireEtOrigines": `Vers 1370 avant notre ère, une jeune femme est inhumée près d’Egtved, au Danemark, dans un cercueil de chêne. La conservation exceptionnelle du mobilier funéraire révèle ses vêtements, ses bijoux et un récipient en écorce placé auprès d’elle. Au fond de ce dernier subsistent les traces d’une boisson fermentée. L’objet archéologique, pas une tradition brassicole continue, constitue le point de départ.

Les analyses rapportées par le Musée national du Danemark identifient du blé, du miel, des airelles ou canneberges, du myrte des marais et une grande quantité de pollen, notamment de tilleul. Ces marqueurs dessinent un liquide composite : la céréale évoque la bière, le miel l’hydromel, les baies et la plante aromatique un paysage de collecte. Les catégories actuelles telles que braggot, gruit ou bière fruitée aident à comparer, mais aucune ne peut être imposée à l’âge du Bronze.

En 2019, le producteur danois Snoremark présente une reconstitution baptisée Egtvedpigens Bryg. Son approche reprend les familles d’ingrédients révélées par le récipient et parle volontiers de braggot ou d’hydromel à la bière. Ce brassin moderne permet d’explorer un équilibre plausible entre céréales, sucres de miel, acidité des fruits et amertume végétale.

La distance entre résidu et verre reste cependant considérable. L’analyse ne donne pas les masses initiales, l’état malté du blé, l’origine exacte de chaque pollen, la durée de chauffe ni la communauté microbienne. Une partie du pollen peut même provenir du miel plutôt que d’un ajout volontaire. Toute levure utilisée aujourd’hui, tout équipement et toute décision de dosage appartiennent à la reconstruction.

Egtvedpigens Bryg ne ressuscite donc pas une recette écrite. Elle transforme des indices funéraires en hypothèse sensorielle et rend visible une boisson qui débordait probablement nos frontières entre bière et hydromel. Le récipient fournit le vocabulaire ; le producteur contemporain compose la phrase.`,
      "chapitres": [
        {
          "titre": "Une recette écrite en résidus",
          "texte": "L’archéologie des boissons travaille souvent avec des traces : grains, pollens, composés végétaux, dépôts dans un récipient. Chaque indice renseigne une matière possible, mais la quantité initiale et le procédé peuvent rester inconnus. La reconstruction est donc un raisonnement, pas une transcription."
        },
        {
          "titre": "Quand le style n’existe pas encore",
          "texte": "Appeler la boisson « bière » est pratique parce que le blé fermenté joue un rôle, mais le miel peut rapprocher le produit d’un hydromel et les plantes d’un gruit. Cette indéfinition est instructive : le meilleur nom moderne est peut-être simplement « boisson fermentée de l’âge du Bronze »."
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Snoremark",
          "edition": null,
          "reference": "Bronze Age girl buried with braggot/mead — reconstruction",
          "type": "source_producteur_reconstitution",
          "url": "https://snoremark.dk/en/girl-from-bronze-age-was-barried-with-braggot-mead/",
          "consultation": "2026-08-11"
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
      "description": "Urban Artifact a disposé 28 pièges de moût pendant quatorze heures sur la propriété du sanctuaire St. Anthony, puis sélectionné une culture sauvage pour une quadrupel d’environ 10 % vol. élevée en fûts de vin de Napa. La bière crée un terroir microbien contemporain et finance le sanctuaire ; elle n’est ni une relique ni une tradition monastique retrouvée.",
      "histoireEtOrigines": `Sur la propriété boisée du National Shrine of St. Anthony, près de Cincinnati, l’équipe d’Urban Artifact installe 28 récipients contenant du moût non fermenté. Chaque pot est protégé par une étamine et reste exposé environ quatorze heures. Le but n’est pas de recueillir une bénédiction liquide, mais des levures et bactéries transportées par l’air, les plantes et les surfaces du lieu.

Les pièges retournent ensuite à la brasserie. Pendant plusieurs mois, les cultures sont observées, évaluées et écartées si elles présentent des caractères indésirables. Une candidate suffisamment prometteuse est propagée pour fermenter une Belgian-style quadrupel. Ce travail de sélection sépare la capture sauvage d’une simple fermentation abandonnée au hasard : le site fournit la diversité, le laboratoire et le brasseur choisissent ce qui peut devenir une boisson sûre.

La bière forte, annoncée autour de 10 % vol. selon les présentations, poursuit son évolution dans des barriques ayant contenu du vin rouge de Napa. Le bois et l’usage précédent ajoutent un second environnement au terroir du sanctuaire. La commercialisation sert une levée de fonds pour l’institution franciscaine, donnant au projet une finalité caritative aussi concrète que sa provenance microbienne.

St. Anthony’s Quad n’est pourtant pas une bière d’abbaye au sens historique. Aucun monastère ne transmet une souche séculaire et les frères ne reconstituent pas une recette ancienne. Urban Artifact apporte une pratique craft contemporaine de bioprospection ; le sanctuaire fournit un lieu, un récit et une cause. Aucune relique du saint n’est utilisée.

Cette distinction rend l’expérience plus intéressante. Une culture capturée sur place ne prouve pas qu’elle soit exclusive à quelques hectares, mais elle établit une chaîne matérielle vérifiable entre le terrain et la cuve. La sainteté reste affaire de foi ; les 28 pièges, les quatorze heures d’exposition et les mois de sélection appartiennent à la méthode.`,
      "chapitres": [
        {
          "titre": "Vingt-huit pièges pendant quatorze heures",
          "texte": "La capture sauvage n’est pas un acte mystique. On expose un milieu nutritif à l’environnement, puis on observe ce qui s’y développe et on sélectionne les cultures intéressantes. Multiplier les pièges augmente les chances de trouver un candidat viable. La grâce peut rester dans le récit ; le laboratoire garde la responsabilité technique."
        },
        {
          "titre": "Le terroir peut tenir dans un jardin",
          "texte": "Une levure capturée sur place permet de raconter un terroir microbien très local. Elle ne garantit pas que la souche soit unique au sanctuaire, mais elle crée un lien matériel entre lieu et fermentation. Le passage en barrique de vin rouge ajoute ensuite un deuxième terroir, celui du bois et de son usage précédent."
        }
      ],
      "recette": {
        "titre": "La quad qui a tendu des pièges au vent",
        "profilUnique": true,
        "noteProfil": "Une capture environnementale exige des mois de sélection microbiologique ; le lieu ne garantit ni innocuité ni exclusivité de la souche.",
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
        "maturation": "Élevage en barriques ayant contenu du vin rouge de Napa ; la durée exacte n’est pas établie de manière cohérente dans les sources retenues.",
        "profilRecherche": "Une quadrupel forte où la singularité vient d’un véritable lien microbien avec un lieu, sans confondre fermentation sauvage et miracle."
      },
      "sources": [
        {
          "organisme": "National Shrine of St. Anthony",
          "edition": null,
          "reference": "St. Anthony’s Quad Beer",
          "type": "source_institutionnelle",
          "url": "https://www.stanthony.org/st-anthonys-quad-beer/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewbound",
          "edition": null,
          "reference": "Urban Artifact collaborates with St. Anthony’s Shrine on a Quad",
          "type": "source_professionnelle",
          "url": "https://www.brewbound.com/news/urban-artifact-collaborates-st-anthonys-shrine-friary-quad/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Catholic Telegraph",
          "edition": null,
          "reference": "St. Anthony Quad beer to debut",
          "type": "source_presse",
          "url": "https://www.thecatholictelegraph.com/st-anthony-quad-beer-to-debut-fat-tuesday/38390",
          "consultation": "2026-08-11"
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
      "description": "En 2016, Carlsberg a réactivé une levure provenant d’une bouteille de 1883 découverte dans ses caves et rebrassé une lager historique. Les pages actuelles décrivent aussi une 1883 à 4,6 % vol., aux malts Munich, caramel et torréfié avec Hallertauer Tradition. Ces éditions apparentées ne doivent pas être fondues en une recette unique.",
      "histoireEtOrigines": `Quelques bouteilles fermées reposent sous l’ancienne brasserie Carlsberg lorsqu’elles sont redécouvertes plus d’un siècle après leur remplissage. L’une, datée de 1883, contient encore des cellules que le Carlsberg Research Laboratory parvient à récupérer, identifier et multiplier. En 2016, soit 133 ans plus tard, la maison annonce un rebrassage destiné à approcher la lager de cette période.

La date forme un remarquable nœud historique. En 1883, Emil Christian Hansen, chercheur du laboratoire Carlsberg, met au point la propagation d’une culture pure de levure de lager à partir d’une cellule sélectionnée. Cette maîtrise réduit les contaminations et l’irrégularité des fermentations. Carlsberg partage ensuite la souche avec d’autres brasseries, contribuant à transformer une technique de laboratoire en infrastructure mondiale de la lager moderne.

Pour le projet de 2016, l’équipe ne sert évidemment pas le liquide vieilli de la bouteille. Elle réactive la culture, consulte les archives et emploie des matières premières modernes afin de reconstruire un profil historique. La communication de lancement présente une édition spéciale dont les chiffres rapportés ne coïncident pas toujours avec ceux du produit 1883 décrit aujourd’hui. La page commerciale actuelle indique 4,6 % vol., des malts Munich, caramel et torréfié ainsi que du Hallertauer Tradition ; certaines publications liées au rebrew initial mentionnent une bière plus forte.

Il faut donc distinguer la démonstration scientifique de 2016, les brassins événementiels et la référence commerciale ultérieure portant le même millésime. Ils partagent une histoire, une esthétique sombre et la filiation de levure, mais ne constituent pas nécessairement une formulation figée. Le titre de 4,6 % et la liste d’ingrédients décrivent la version actuellement documentée, pas automatiquement chaque verre servi lors du lancement.

Rebrew 1883 est moins une résurrection parfaite qu’une expérience de continuité. La bouteille fournit une culture datée et les archives orientent les choix ; l’eau, les malts, l’équipement et les contrôles appartiennent au présent. La plus grande étrangeté tient finalement à l’ordinaire : chaque lager propre produite avec une levure sélectionnée hérite d’une révolution que Hansen a contribué à installer derrière ces mêmes murs.`,
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
        "noteProfil": "Les données à 4,6 % décrivent la référence actuelle ; le rebrew de 2016 et les éditions apparentées peuvent différer.",
        "explicationProfil": "La version actuellement documentée associe levure historique, malts sombres et Hallertauer Tradition dans une lager à 4,6 %.",
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
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Carlsberg",
          "edition": null,
          "reference": "1883 beer",
          "type": "source_producteur",
          "url": "https://www.carlsberg.com/en/our-beer/1883/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Carlsberg Group",
          "edition": null,
          "reference": "1883 Rebrew — scientific discoveries",
          "type": "source_producteur_scientifique",
          "url": "https://www.carlsberggroup.com/pursuit-of-better/scientific-discoveries/1883-rebrew/",
          "consultation": "2026-08-11"
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
      "description": "Chernobyl Iиfusioи est une collaboration de brasseurs amateurs norvégiens, enregistrée comme New England IPA à 7,8 % vol. et 60 IBU. L’unique fiche publique retrouvée ne documente ni matière de Tchernobyl ni ingrédient radioactif : l’anomalie appartient au nom, au compteur Geiger imaginaire et au récit houblonné, pas au procédé établi.",
      "histoireEtOrigines": `La trace disponible tient dans une fiche de dégustation communautaire. Elle attribue Chernobyl Iиfusioи IPA à une collaboration entre Gullkrona Eliksir-kokeri et Engelsrud Gladbryggeri, deux noms associés au brassage amateur norvégien. Le produit est classé New England ou Hazy IPA, affiche 7,8 % vol. et 60 IBU, et apparaît aujourd’hui comme retiré ou non commercialisé régulièrement.

La présentation joue avec le vocabulaire nucléaire : Tchernobyl, infusion, compteur Geiger et houblonnage capable de faire grimper l’aiguille. Ce registre décrit une mise en scène, pas une analyse. Aucune source primaire retrouvée ne mentionne d’eau, de céréale, de plante ou de matériau provenant de la zone d’exclusion. Aucun contrôle radiologique, aucune contamination et aucun isotope ne sont associés au brassin.

Le dossier ne permet pas davantage d’identifier les malts, les variétés de houblon, la levure ou le calendrier d’ajout. Déduire une recette complète de la catégorie « NEIPA » reviendrait à confondre une famille sensorielle avec une formulation. Les 60 IBU donnent une mesure déclarée d’amertume ; ils ne révèlent pas la composition du bouquet ni la manière dont la bière a été clarifiée ou conditionnée.

Cette documentation mince impose un statut inhabituel : la bière est attestée par une entrée précise et des évaluations d’utilisateurs, mais son histoire technique ne peut pas être vérifiée auprès d’un producteur actif. La prudence n’autorise ni à nier son existence, ni à promouvoir ses plaisanteries en faits matériels. Si une archive de brasseur réapparaît, elle pourra préciser ce cadre.

Chernobyl Iиfusioи illustre ainsi une fausse bizarrerie utile. Certaines bières deviennent insolites par leur ingrédient, leur microbe, leur eau ou leur méthode ; celle-ci l’est surtout par la narration. Le liquide documenté reste une IPA forte et amère. Tout rayonnement supplémentaire vient de l’étiquette — et, faute de meilleure source, doit y rester.`,
      "chapitres": [
        {
          "titre": "Le compteur Geiger peut rester au placard",
          "texte": "Les 60 IBU et le profil hazy sont des données brassicoles ; la radioactivité ne l’est pas. Les plaisanteries de la notice publique font partie du thème, mais elles ne doivent pas être traduites en fait matériel. Le vert néon appartient au décor graphique, pas à l’analyse chimique."
        },
        {
          "titre": "La dernière anomalie : une bière presque normale",
          "texte": "Les curiosités ne partagent pas toutes la même nature. Certaines bières sont singulières par un ingrédient, d’autres par une souche, une provenance, un procédé, un record ou une reconstitution. Chernobyl Iиfusioи se distingue surtout par son récit ; cette classification est elle-même l’information essentielle."
        }
      ],
      "recette": {
        "titre": "Une NEIPA, sans isotope caché",
        "profilUnique": true,
        "noteProfil": "Une seule base communautaire documente le brassin ; tout détail absent doit rester inconnu plutôt que déduit du thème nucléaire.",
        "explicationProfil": "Hazy/New England IPA documentée à 7,8 % ABV et 60 IBU ; les houblons, malts et levure exacts ne sont pas publiés dans la notice publique disponible.",
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
          "consultation": "2026-08-11"
        }
      ]
    }
  ]
};

export default collection;
