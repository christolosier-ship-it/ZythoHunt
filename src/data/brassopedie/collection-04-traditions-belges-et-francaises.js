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
        "details": "Fermentation haute le plus souvent, mais souches, températures, atténuation et conditionnement changent profondément d’une branche à l’autre."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "L’Ale belge forme un archipel : blonde d’abbaye, brune monastique, Saison wallonne, ambrée anversoise ou grande blonde sèche. Le verre peut évoquer poire, poivre, pain, raisin ou herbe fraîche selon sa branche. Son unité tient moins à un parfum national qu’à une culture du contraste, où fermentation, atténuation et service donnent du relief sans condamner la bière à la lourdeur.",
      "histoireEtOrigines": `Sur une carte, la Belgique tient dans peu d’espace ; dans un verre, elle refuse obstinément de se laisser réduire. Les villes flamandes ont entretenu des ales ambrées, des bières aigres et des cultures de cafés distinctes ; la Wallonie industrielle et rurale a porté des bières de Liège, des grisettes, des Saisons et des brasseries de ferme ; des communautés monastiques ont développé leurs propres gammes, tandis que des maisons commerciales ont créé au XXe siècle des blondes assez neuves pour paraître anciennes après deux générations. « Ale belge » est donc une famille de lecture, pas la survivance d’une recette nationale.

Cette diversité a traversé des ruptures bien réelles. Les deux guerres ont détruit des installations et réquisitionné du cuivre ; la mécanisation, le froid artificiel et le succès de la pils ont déplacé les goûts ; concentrations et fermetures ont effacé quantité de bières locales. D’autres ont été reconstruites, relancées ou inventées pour un nouveau marché. La Spéciale Belge répond à la concurrence des bières importées, la Tripel moderne naît dans l’entre-deux-guerres, la Duvel pâle prend sa forme actuelle plusieurs décennies après son premier lancement, et la catégorie « Quadrupel » n’apparaît qu’en 1991. Le calendrier est moins médiéval que les étiquettes ne le suggèrent.

En 2016, l’UNESCO a inscrit la culture de la bière en Belgique au patrimoine culturel immatériel de l’humanité. L’objet protégé dépasse largement un liquide standardisé : il englobe savoir-faire, métiers, cafés, associations, fêtes, gastronomie et manières de servir. La nuance compte. Une bière trappiste désigne aujourd’hui une origine et un cadre de production contrôlés ; une bière d’abbaye peut relever d’un accord commercial très différent ; ni l’un ni l’autre n’impose une couleur, une force ou une recette.

La parenté technique entre de nombreuses branches existe pourtant. Des souches de Saccharomyces peuvent produire des esters fruités et, lorsqu’elles possèdent le caractère POF+, transformer des précurseurs du malt en phénols épicés. Mais il n’existe pas une « levure belge » universelle : les recherches génomiques distinguent des lignées brassicoles multiples et les monastères eux-mêmes protègent des souches propres. Dans les bières fortes, un sucre très fermentescible peut augmenter l’alcool sans ajouter autant de dextrines qu’un supplément de malt ; clair, il allège surtout la structure, tandis qu’un sirop foncé peut aussi apporter couleur et arômes. Enfin, la refermentation en bouteille fabrique du gaz carbonique dans le contenant et peut faire évoluer le bouquet. Ce sont des outils récurrents, jamais un uniforme.`,
      "chapitres": [
        {
          "titre": "Une frontière linguistique qui ne découpe pas les verres",
          "texte": `Flandre et Wallonie ne forment pas deux blocs gustatifs étanches. La Spéciale Belge a circulé du Hainaut vers le Brabant et Anvers ; la Saison est aujourd’hui associée au Hainaut, mais sa plus ancienne mention connue conduit à Liège ; les brasseries, les levures et les marques ont voyagé bien au-delà de leur commune.

La géographie reste utile lorsqu’elle explique un réseau de villes, de fermes, de monastères ou de débouchés. Elle devient trompeuse dès qu’elle transforme chaque bière flamande en brune maltée et chaque bière wallonne en Saison poivrée. La Belgique est petite : ses exceptions ont toujours eu le temps de prendre le train.`
        },
        {
          "titre": "Trappiste, abbaye et style : trois questions différentes",
          "texte": `Le label Authentic Trappist Product exige une production dans l’environnement immédiat de l’abbaye, sous la supervision des moines ou moniales, avec des bénéfices destinés aux besoins de la communauté, à la solidarité de l’ordre ou à des œuvres. La licence, attribuée produit par produit ou catégorie par catégorie, est valable cinq ans et suppose audit et traçabilité.

Cette certification répond à « où, sous quelle autorité et pour quelle finalité ? », pas à « quel goût ? ». L’Association internationale trappiste le précise : Trappiste est d’abord une certification d’origine, et chaque bière possède sa recette et sa levure. Une Dubbel commerciale peut donc ressembler sensoriellement à une bière trappiste sans en acquérir le statut ; une authentique trappiste peut, à l’inverse, ne rentrer dans aucun des styles monastiques habituels. Le froc n’est pas une fiche de recette.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille culturelle et généalogique, pas recette unique : chaque enfant décrit la divergence qui donne un sens à son nom.",
        "maltsEtCereales": [
          "Les branches blondes partent souvent de malt Pilsner ; les ambrées et brunes composent avec Vienna, Munich, malts aromatiques, caramel ou céréales plus sombres. La couleur ne permet pas de deviner la force.",
          "Dans les bières fortes, saccharose, dextrose ou sirops très fermentescibles peuvent fournir de l’alcool avec moins de dextrines qu’une charge équivalente de malt. Un sucre clair et un sirop candi foncé n’ont donc pas la même fonction aromatique."
        ],
        "houblons": [
          "Saaz, Styrian Goldings, Hallertau et autres variétés européennes structurent nombre de recettes historiques ; les interprétations modernes peuvent déplacer l’accent vers des houblons américains. Le parent n’impose aucun niveau d’amertume."
        ],
        "levuresEtMicroorganismes": [
          "Les souches diffèrent fortement par leur atténuation et leur production d’esters. Les phénols poivrés ou giroflés dépendent notamment de la capacité POF+ de la souche et de précurseurs disponibles ; ils ne prouvent pas l’ajout d’épices.",
          "Température, pression, géométrie de cuve, oxygénation et taux d’ensemencement modulent le profil, mais aucun bouton ne commande isolément le « goût belge »."
        ],
        "ingredientsComplementaires": [
          "Fruits, épices et sucres colorés appartiennent à certaines branches. Leur parfum ne doit pas être attribué par défaut à la recette : poire, banane, poivre ou girofle peuvent provenir uniquement de la fermentation."
        ],
        "profilEau": "Le profil suit la couleur, la charge de malt et l’amertume de la branche. Calcium et pH doivent soutenir fermentation et clarification sans construire artificiellement une mythique « eau belge ».",
        "empatage": "La fermentescibilité est un levier majeur. Une bière forte et sèche demande un moût pauvre en dextrines ou une part de sucres simples ; une bière de table a, au contraire, besoin de préserver assez de matière pour ne pas devenir de l’eau vaguement houblonnée.",
        "ebullitionEtHoublonnage": "La recette choisit entre une amertume de soutien, un relief herbacé affirmé ou un houblon contemporain. Les épices ne servent pas à imiter maladroitement les molécules que la levure sait déjà produire.",
        "fermentation": "Le contrôle thermique vise d’abord une fermentation complète et saine. Une montée de température peut aider une souche à finir un moût dense, mais pousser trop chaud ne transforme pas automatiquement une ale quelconque en bière belge : cela peut surtout produire des alcools supérieurs.",
        "maturation": "Certaines branches sont filtrées et gazéifiées, d’autres gardées à froid, assemblées ou refermentées. En bouteille, sucre et levure produisent le CO₂ dans le contenant ; la méthode exige une fermentation primaire achevée et un dosage maîtrisé.",
        "profilRecherche": "Une ale belge expressive, hautement fermentée et équilibrée, dont le profil exact dépend du sous-style mais où la fermentation conserve une véritable signature."
      },
      "sources": [
        {
          "organisme": "UNESCO",
          "edition": "2016",
          "reference": "La culture de la bière en Belgique — Liste représentative du patrimoine culturel immatériel de l’humanité",
          "type": "patrimoine_culturel",
          "url": "https://ich.unesco.org/fr/RL/la-culture-de-la-biere-en-belgique-01062",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Belgian Brewers",
          "edition": null,
          "reference": "Over Belgisch bier — diversité, transmission et ancrage local de la culture brassicole",
          "type": "organisation_brassicole",
          "url": "https://belgianbrewers.be/over-belgisch-bier/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Association internationale trappiste",
          "edition": "2026",
          "reference": "Criteria for obtaining the Authentic Trappist Product label",
          "type": "certification_officielle",
          "url": "https://www.trappist.be/en/about-ita/atp-label/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Association internationale trappiste",
          "edition": "2026",
          "reference": "FAQ — Trappist as certification of origin, recipes and yeasts",
          "type": "certification_officielle",
          "url": "https://www.trappist.be/en/faqs/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Gallone et al. — Cell",
          "edition": "2016",
          "reference": "Domestication and Divergence of Saccharomyces cerevisiae Beer Yeasts",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5018251/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Štulíková et al. — Beverages",
          "edition": "2020",
          "reference": "Bottle Conditioning: Technology and Mechanisms Applied in Refermented Beers",
          "type": "publication_scientifique",
          "url": "https://www.mdpi.com/2306-5710/6/3/56",
          "consultation": "2026-08-11"
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
        "min": 0.5,
        "max": 2,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 5,
        "max": 15,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 10,
        "max": 100,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute généralement discrète ; à très faible densité, la propreté fermentaire compte davantage que la démonstration aromatique."
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
      "description": "La bière de table belge se glisse au repas comme le pain dans la corbeille : peu alcoolisée, légère, doucement céréalière, avec une amertume basse et parfois une nuance de caramel, de fruit ou d’épice. Blonde, brune ou presque noire, elle ne cherche pas le spectaculaire. Son tour de force est plus domestique : rester une vraie bière quand l’alcool descend parfois sous 2 %.",
      "histoireEtOrigines": `La tafelbier ou bière de table appartient d’abord à la maison, au réfectoire et à la cantine, pas au podium des concours. Vendue en bouteilles familiales, blonde ou brune, elle accompagne une culture belge où la bière peut être une boisson ordinaire de faible densité autant qu’un produit de dégustation. Les souvenirs du XXe siècle la placent auprès des repas familiaux et dans diverses collectivités. Certaines écoles belges ont bien servi des bières de table très faibles jusqu’aux années 1980 ; le fait est documenté, mais il ne transforme ni tous les écoliers ni tout le pays en banquet de Bruegel miniature.

La trajectoire de la brasserie Huyghe montre concrètement ce marché. Dans les années 1970, ses clients comprennent restaurants d’entreprise, CPAS, écoles, hôpitaux et chemins de fer, qui demandent bières de table et limonades. En 1985, la maison déplace son effort des pils et bières de table vers les ales de fermentation haute et l’exportation. Ce basculement résume un mouvement plus large : recul des grands contenants domestiques, montée des sodas et de la pils, concentration de la distribution, puis prestige croissant des bières « spéciales » plus fortes.

L’histoire peut se passer du vieux raccourci selon lequel on buvait forcément de la bière parce que toute eau était mortelle. La disponibilité de l’eau potable, les habitudes alimentaires et la politique de santé ont évolué, mais la bière de table relève surtout d’un usage social et commercial attesté. Sa renaissance actuelle change encore le contexte : les brasseries artisanales la redécouvrent comme réponse à la modération et comme exercice de précision. À faible densité, il reste peu de malt et d’alcool pour cacher une astringence, une fermentation incomplète ou un corps creux. La petite bouteille a cessé d’être banale ; elle est devenue examen pratique.`,
      "chapitres": [
        {
          "titre": "Le réfectoire sans folklore ajouté",
          "texte": `Les témoignages et l’histoire commerciale de Piedbœuf ont rendu célèbre l’image de la bière à la cantine. Il s’agissait de boissons très faiblement alcoolisées, dans un monde où la consommation d’alcool par les mineurs était jugée autrement qu’aujourd’hui. Le recul de cette pratique est aussi une histoire de santé publique et de changement des normes sociales.

Ce détail mérite d’être retenu précisément parce qu’il est dépaysant. Il ne prouve ni que la bière était universellement servie, ni qu’elle était prescrite pour assainir une eau systématiquement dangereuse. Une anecdote bien cadrée nourrit l’histoire ; laissée sans bords, elle devient très vite une kermesse imaginaire.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Le critère distinctif est le service de table à très faible alcool ; couleur, céréales et intensité aromatique restent largement variables.",
        "maltsEtCereales": [
          "Orge maltée, froment, seigle, avoine ou maïs peuvent entrer dans la composition. À cette densité, avoine, blé ou une fraction de malt plus toasté soutiennent texture et goût sans devoir charger le moût."
        ],
        "houblons": [
          "Une amertume de 5 à 15 IBU suffit généralement : son rôle est de nettoyer la finale, non de transformer le repas en concours de houblon."
        ],
        "levuresEtMicroorganismes": [
          "Une souche propre ou légèrement fruitée est conduite sans excès. Sur un corps mince, un phénol brutal ou un ester de solvant prend toute la place."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Une faible minéralité évite de durcir un corps délicat. Le pH d’empâtage doit rester maîtrisé, surtout si une extraction très diluée risque d’entraîner tanins et sécheresse rêche.",
        "empatage": "Brassage à faible extrait, parti-gyle ou moût conçu directement : plusieurs chemins existent. Il faut conserver assez de protéines et de dextrines pour la mousse et la texture sans dépasser la densité recherchée.",
        "ebullitionEtHoublonnage": "L’ébullition stabilise un moût fragile ; le houblonnage reste bas. Coriandre ou zestes peuvent apparaître à dose à peine perceptible, mais la catégorie ne les exige pas.",
        "fermentation": "Une fermentation complète, saine et sobre est essentielle. Le faible alcool n’autorise ni sous-ensemencement ni arrêt précoce : du sucre résiduel peut donner une impression de moût plutôt que de repas.",
        "maturation": "Une maturation courte protège la fraîcheur céréalière. Carbonatation plutôt basse selon les lignes directrices actuelles ; le conditionnement doit préserver la bière sans lui demander une garde héroïque.",
        "profilRecherche": "Une bière de repas légère, sèche, rafraîchissante et réellement brassicole, avec céréale, levure et amertume lisibles malgré le faible alcool."
      },
      "sources": [
        {
          "organisme": "Brasserie Huyghe",
          "edition": null,
          "reference": "Histoire — clientèle des collectivités, bières de table et virage de 1985 vers les ales d’exportation",
          "type": "archive_de_producteur",
          "url": "https://www.brouwerijhuyghe.be/fr/brasserie/histoire",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-Style Table Beer — définition sensorielle et paramètres actuels",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Ligue de l’Enseignement et de l’Éducation permanente",
          "edition": null,
          "reference": "Tout le monde à la cantine — mémoire des repas scolaires et de la bière de table",
          "type": "histoire_sociale",
          "url": "https://ligue-enseignement.be/tout-le-monde-a-la-cantine",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Oxford Companion to Beer",
          "edition": null,
          "reference": "Table Beer — usages familiaux, faible alcool et contexte de tempérance",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/OufCywjp9V",
          "consultation": "2026-08-11"
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
        "libelle": "Catégorie contemporaine d’inspiration belge",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 2.1,
        "max": 5,
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
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute d’inspiration belge, avec esters faibles à moyens et phénols absents à discrets selon l’interprétation."
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
      "description": "Belgian Session Ale est une étiquette moderne pour une ale légère à modérée qui emprunte à la Belgique une fermentation fruitée ou doucement épicée, pas un costume monastique complet. Sa couleur peut changer, son houblon aussi ; elle se reconnaît surtout à son équilibre et à sa capacité à rendre le second verre plausible. Entre 2,1 et 5 %, elle voyage léger, mais elle emporte tout de même un passeport aromatique.",
      "histoireEtOrigines": `Le nom Belgian Session Ale ne vient ni d’un village, ni d’une abbaye, ni d’un registre de brasserie retrouvé sous une couche de poussière providentielle. Il réunit deux vocabulaires internationaux contemporains : « Belgian-style », qui annonce une inspiration fermentaire, et « session », adjectif appliqué à une bière assez modérée et équilibrée pour être bue au cours d’une même séance. Chez Allagash comme dans les guides actuels, session fonctionne comme une promesse d’usage et de degré plutôt que comme un style historique nettement délimité.

La Brewers Association en fait pourtant une catégorie de concours utile. Dans son référentiel 2026, elle couvre 2,1 à 5 % d’alcool, une couleur libre et des recettes qui ne rentrent dans aucune autre case belge. Les organisateurs peuvent demander au brasseur de préciser style sous-jacent, fruits, bois ou procédé. Autrement dit, la catégorie classe une intention — alcool modeste, équilibre, inspiration belge — plus qu’une généalogie.

Sa place dans l’arbre devient alors claire. La bière de table porte une histoire domestique et descend jusqu’à 0,5 % ; la Single renvoie à des lignées monastiques précises ; la Belgian Session Ale est le terrain contemporain entre les deux, ouvert au houblon moderne et aux variations de couleur. Le défi n’est pas de rapetisser une Tripel au photocopieur. Il faut recalibrer le malt, la levure et l’amertume pour que chaque arôme reste lisible sur un corps qui n’a nulle part où cacher les maladresses.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Catégorie d’intention volontairement large : alcool modeste, équilibre de session et signature fermentaire d’inspiration belge sans correspondre à un style historique mieux défini.",
        "maltsEtCereales": [
          "Une base Pilsner ou pale, parfois complétée de blé, d’avoine ou de Vienna, construit mousse et texture. La quantité se raisonne depuis le faible degré final, pas en divisant simplement une recette forte."
        ],
        "houblons": [
          "Houblons continentaux ou américains sont possibles de 5 à 35 IBU. Leur mission est de donner une direction — herbacée, florale ou agrumée — sans épuiser le palais avant la fin de la session."
        ],
        "levuresEtMicroorganismes": [
          "La souche peut apporter esters faibles à moyens ; les phénols restent absents à discrets. La modération aromatique est une construction, pas une levure qu’on aurait priée de parler moins fort."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfates et chlorures suivent l’orientation houblonnée ou ronde de la recette. Un profil modéré laisse le peu de malt disponible conserver sa voix.",
        "empatage": "La cible est une finale nette avec assez de colloïdes et de dextrines pour éviter l’impression aqueuse. Température d’empâtage et céréales de texture sont donc choisies ensemble.",
        "ebullitionEtHoublonnage": "Le houblonnage peut être classique ou moderne ; à faible densité, une amertume calculée comme pour une IPA paraît vite disproportionnée. Les ajouts tardifs servent l’arôme plus que le record d’IBU.",
        "fermentation": "Ensemencement sain et température retenue limitent solvants et fruit excessif. Une bonne atténuation sèche la finale, mais la bière ne doit pas perdre toute sensation de matière.",
        "maturation": "Conditionnement plutôt bref pour garder levure et houblon frais. La refermentation est possible, sans constituer un passeport obligatoire pour la Belgique.",
        "profilRecherche": "Une ale belge légère à modérée, sèche, vive et hautement buvable, avec une signature de levure nette mais jamais lourde."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-style session ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "2026 Beer Style Guidelines Now Available — mise à jour des catégories belges",
          "type": "actualite_du_referentiel",
          "url": "https://www.brewersassociation.org/association-news/2026-beer-style-guidelines-now-available/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Allagash Brewing Company",
          "edition": "2019, mise à jour 2023",
          "reference": "What is a Session Beer? — adjectif de consommation et exemple Belgian-style River Trip",
          "type": "source_de_producteur",
          "url": "https://www.allagash.com/discover/about-beer/what-is-a-session-beer/",
          "consultation": "2026-08-11"
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
        "details": "Fermentation haute très atténuante, nette à modérément fruitée et épicée, au service d’une bière pâle plus houblonnée que les autres branches monastiques."
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
      "description": "La Belgian Single est la branche claire et quotidienne de l’arbre monastique moderne : malt pâle, amertume franche, herbes, agrumes, poivre fin et mousse nerveuse dans un corps sec de moins de 6 %. Elle n’est pas le premier cran d’une antique échelle Single-Dubbel-Tripel ; elle est plutôt une bière de réfectoire devenue catégorie, légère de pas mais très réveillée.",
      "histoireEtOrigines": `Le mot Single donne l’impression rassurante d’une série parfaitement numérotée. Les archives sont moins coopératives. Des communautés monastiques ont longtemps brassé des boissons plus faibles pour leur propre table, mais leur couleur, leur force et leur nom variaient. Elles ne formaient pas un style médiéval pâle attendant patiemment que les guides modernes le découvrent.

Westmalle fournit la généalogie la plus parlante. Le 10 décembre 1836, les moines goûtent leur première bière brassée sur place : elle est décrite par l’abbaye comme sombre, douce et peu alcoolisée, donc fort éloignée du portrait actuel de la Single. Au début du XXe siècle apparaît une Extra-Gersten destinée à l’usage de la communauté ; Westmalle présente aujourd’hui son Extra à 4,8 % comme l’héritière de cette tradition. Malt pâle, sécheresse, houblon et grande buvabilité en ont fait une référence, mais l’héritage est une lignée de fonction, pas une recette restée immobile depuis 1836.

Chimay raconte une autre évolution. Une blonde légère est brassée pour le réfectoire lors de la reprise d’après-guerre en 1947, puis ne rejoint le commerce qu’en 2013 sous le nom Chimay Gold. D’autres exemples ont été créés ou reformulés très tard : l’abbaye de Saint-Sixte date sa Westvleteren Blond de 1999 et précise qu’elle remplace la brune Westvleteren 6. La catégorie Belgian Single rassemble donc rétrospectivement des bières pâles, sèches et relativement amères que plusieurs monastères ont mises au point à des dates différentes.

« Trappist Single » ajoute une seconde prudence. Trappiste certifie l’origine et le cadre de production, pas le style ; une Single brassée ailleurs peut en reproduire la forme sensorielle sans devenir trappiste. Ce qui distingue cette branche des Dubbel et Tripel n’est pas une division arithmétique des ingrédients. C’est un choix de service : une bière complète mais modérée, dont le houblon et l’atténuation fournissent le relief que la densité ne peut pas payer.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La branche moderne se distingue par une robe pâle, une forte atténuation et un houblon plus affirmé, non par une force exactement divisée par rapport à la Dubbel ou la Tripel.",
        "maltsEtCereales": [
          "Malt Pilsner dominant ; un peu de blé soutient mousse et texture, tandis qu’une touche de Vienna ou de malt aromatique peut donner du pain sans assombrir la bière."
        ],
        "houblons": [
          "Houblons continentaux ou Styrian Goldings plus présents que dans les branches monastiques fortes : l’amertume et les notes herbacées/florales sont ici une charpente, pas un décor."
        ],
        "levuresEtMicroorganismes": [
          "Souche très atténuante, sèche, modérément fruitée et poivrée. Sur cette densité, elle doit finir le travail sans couvrir le houblon."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Une eau peu alcaline convient au malt pâle ; un rapport sulfates/chlorures légèrement orienté vers les sulfates peut rendre l’amertume plus nette sans la rendre râpeuse.",
        "empatage": "Une température favorisant la fermentescibilité prépare la finale sèche. La texture vient davantage du choix des céréales et de la carbonatation que de dextrines abondantes.",
        "ebullitionEtHoublonnage": "L’ébullition fixe une amertume de 25 à 45 IBU et peut conserver un ajout tardif herbacé. Les épices ajoutées sont inutiles si la souche fournit déjà le poivre attendu.",
        "fermentation": "La fermentation démarre assez fraîche pour garder les esters nets, puis peut monter afin d’achever une atténuation souvent très élevée. Le faible degré rend toute chaleur de solvant immédiatement incongrue.",
        "maturation": "Une garde brève puis une refermentation vive conviennent au profil, mais le trait décisif reste la fraîcheur : cette bière n’a pas besoin d’attendre des années pour prouver sa vocation de table.",
        "profilRecherche": "Une ale monastique pâle, sèche et effervescente, avec davantage de houblon et de fraîcheur que de richesse maltée."
      },
      "sources": [
        {
          "organisme": "Abbaye Notre-Dame du Sacré-Cœur de Westmalle",
          "edition": null,
          "reference": "Trappistenbieren — chronologie de 1836, Extra-Gersten, Dubbel et Tripel",
          "type": "archive_monastique",
          "url": "https://www.trappistwestmalle.be/trappistenbieren/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Abbaye Notre-Dame du Sacré-Cœur de Westmalle",
          "edition": null,
          "reference": "Westmalle Extra — bière légère de tradition communautaire",
          "type": "source_monastique",
          "url": "https://www.trappistwestmalle.be/trappistenbieren/westmalle-extra/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Chimay — Abbaye de Scourmont",
          "edition": null,
          "reference": "Key dates — bière de réfectoire de 1947, commercialisée comme Chimay Gold en 2013",
          "type": "archive_monastique",
          "url": "https://chimay.com/en/discover/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Abbaye Saint-Sixte de Westvleteren",
          "edition": null,
          "reference": "History of the Brewery — remplacement de la Westvleteren 6 par la Blond en 1999",
          "type": "source_primaire_monastique",
          "url": "https://www.trappistwestvleteren.be/en/history",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "26A Belgian Single",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26A/belgian-single/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Association internationale trappiste",
          "edition": "2026",
          "reference": "FAQ — la dénomination Trappiste comme certification d’origine, non comme style",
          "type": "certification_officielle",
          "url": "https://www.trappist.be/en/faqs/",
          "consultation": "2026-08-11"
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
        "details": "Fermentation haute conduite avec retenue : fruit discret, épice faible et profil assez net pour laisser parler toast et houblon."
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
      "description": "La Belgian Pale Ale est une ale de ville et de comptoir : cuivre clair, pain grillé, caramel léger, fruit rouge ou poire discrète, puis un houblon floral qui range la table. Autour de 5 %, elle préfère la conversation à la proclamation. La levure garde un accent belge, mais parle à voix basse ; le malt, lui, a eu le temps de commander un Bolleke.",
      "histoireEtOrigines": `Belgian Pale Ale est un grand parapluie moderne posé sur plusieurs ales ambrées belges de force modérée. Sa généalogie croise directement la Spéciale Belge née des concours du début du XXe siècle, puis des bières régionales ont fixé des accents différents. Les guides ont regroupé ces survivantes et descendantes selon une silhouette commune — cuivre, malt toasté, fruit contenu, houblon équilibrant — sans pouvoir leur fournir un inventeur unique.

Anvers donne à cette catégorie son objet le plus mémorable. La brasserie De Koninck, fondée au XIXe siècle, présente son actuelle Spéciale Belge comme l’icône de la ville depuis 1952. Son verre sphérique est appelé bolleke, « petite boule » ; par métonymie, commander un Bolleke signifie commander la bière. Le contenant n’est plus seulement recommandé après coup : il devient le nom d’usage du produit et une portion de culture urbaine. La version actuelle titre 5,2 %, atteint 23 IBU, affiche 28 EBC et emploie du Saaz — des chiffres précis qui montrent aussi pourquoi les frontières des guides ne recouvrent jamais parfaitement les bières vivantes.

Cette école modérée a longtemps été moins visible à l’exportation que les trappistes, les lambics ou les fortes blondes. Elle rappelle pourtant une fonction essentielle de la bière belge : alimenter un réseau de cafés locaux avec une ale reconnaissable, servie fraîche, assez complexe pour appartenir à sa ville et assez légère pour ne pas transformer chaque commande en cérémonie. Fruit calme, malt biscuité et force de comptoir composent un équilibre autonome, loin d’une Strong Ale simplement diluée — et, à Anvers, il tient dans une petite boule de verre.`,
      "chapitres": [
        {
          "titre": "Quand le verre donne son nom à la commande",
          "texte": `Le mot bolleke décrit d’abord la forme ronde du verre de De Koninck. L’usage anversois a ensuite soudé récipient, bière et geste social : au café, le nom suffit. En 2019, la brasserie a même replacé officiellement Bolleke au premier plan de la marque.

Ce détail n’établit pas une antique continuité médiévale ; il montre mieux. Une tradition de service peut se construire au XXe siècle, devenir locale, être entretenue commercialement et néanmoins être vécue comme patrimoine. La verrerie belge organise mousse, volume, arômes et reconnaissance au comptoir bien davantage qu’un musée de silhouettes capricieuses.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Catégorie moderne englobante, apparentée à la Spéciale Belge mais centrée ici sur ses interprétations urbaines ambrées et leur équilibre de comptoir.",
        "maltsEtCereales": [
          "Pale ou Pilsner majoritaire, complété de Vienna, Munich ou caramel léger : la couche supplémentaire doit évoquer croûte de pain et biscuit, pas sucre brûlé."
        ],
        "houblons": [
          "Saaz, Styrian Goldings, East Kent Goldings ou Fuggles apportent fleur, herbe et épice douce ; autour de 20 à 30 IBU, ils ferment la gorgée sans dominer le toast."
        ],
        "levuresEtMicroorganismes": [
          "Souche belge relativement sobre, choisie pour un fruité contenu et peu de phénols. La température reste plus prudente que sur une Strong Ale afin de préserver la lisibilité du malt."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Une eau équilibrée entre chlorures et sulfates peut garder le malt rond tout en donnant une sortie nette au houblon. L’alcalinité suit la robe cuivrée, sans dureté minérale.",
        "empatage": "Une infusion produit un corps moyen-léger et une atténuation régulière. Le toast doit rester lisible sans alourdir la bière comme une Amber Ale très caramélisée.",
        "ebullitionEtHoublonnage": "L’ajout d’amertume structure la base ; une petite addition tardive conserve le registre floral ou herbacé. Aucune épice n’est requise pour fabriquer l’accent local.",
        "fermentation": "Fermentation haute modérée et température contenue : quelques esters suffisent. Le diacétyle et la surenchère phénolique brouilleraient le dialogue entre biscuit et houblon.",
        "maturation": "Une garde courte à moyenne clarifie et soude le profil. Le style se boit pour sa fraîcheur de café, pas pour une promesse de métamorphose en cave.",
        "profilRecherche": "Une ale belge cuivrée, équilibrée et quotidienne : toast, fruit discret, épice légère et amertume propre sans domination."
      },
      "sources": [
        {
          "organisme": "De Koninck",
          "edition": "2026",
          "reference": "Bolleke — Spéciale Belge, verre anversois et caractéristiques du produit",
          "type": "source_de_producteur",
          "url": "https://www.dekoninck.be/en/beers/bolleke",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Oxford Companion to Beer",
          "edition": null,
          "reference": "De Koninck — brasserie urbaine, bière locale et culture du bolleke",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/nbIGEG2nUR",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "24B Belgian Pale Ale — profil et exemples historiques",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/24/24B/belgian-pale-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Vlaams Centrum voor Agro- en Visserijmarketing",
          "edition": null,
          "reference": "Speciale Belge Ale — reconnaissance patrimoniale flamande et producteurs",
          "type": "patrimoine_regional",
          "url": "https://www.streekproduct.be/producten/speciale-belge-ale",
          "consultation": "2026-08-11"
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
        "libelle": "Belgique, du Hainaut au Brabant et à Anvers",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5,
        "max": 6.2,
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
        "min": 8,
        "max": 24,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute de concours devenue tradition régionale : esters bas à moyens, phénols faibles et expression du malt soigneusement intégrée."
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
      "description": "La Spéciale Belge est une réponse de concours devenue bière de café : or soutenu à ambre, croûte de pain, biscuit, caramel léger, fruit calme et houblon noble. Autour de 5 à 6 %, elle raconte une Belgique du début du XXe siècle qui voulait résister aux bières étrangères avec une ale nationale moderne. Rien de tapageur ; même sa révolution porte une veste bien boutonnée.",
      "histoireEtOrigines": `Au tournant du XXe siècle, les brasseurs belges voient avancer deux concurrents très organisés : les lagers blondes de fermentation basse et les ales importées, notamment britanniques. La réponse ne consiste pas à exhumer une recette d’abbaye. Des concours encouragent au contraire la création d’une bière moderne de fermentation haute, stable, claire à ambrée, de force raisonnable et identifiable comme belge.

Une première compétition nationale organisée à Bruxelles en 1904 tourne court. Les reconstructions historiques fondées sur les travaux de Jef Van den Steen rapportent vingt-deux participants et aucun prix décerné, le candidat arrivé en tête ayant refusé de communiquer sa méthode. L’épisode est savoureux mais sa documentation est moins directement accessible que celle de l’année suivante ; il vaut donc comme prélude vraisemblable, non comme scène rejouée au mot près.

À l’Exposition universelle et internationale de Liège en 1905, un nouveau concours réunit 73 brasseurs, dont 57 présentent une bière de fermentation haute selon le Vlaams Centrum voor Agro- en Visserijmarketing. La Grande Brasserie de Melsbroek est distinguée pour la bière en fût ; la bière embouteillée Belge du Faleau, des frères Binard à Châtelineau, reçoit le premier prix de sa section. Les intitulés exacts du concours varient dans les récits ultérieurs, mais le résultat essentiel est solidement convergent : une ale ambrée née dans le bassin hennuyer fournit un modèle que d’autres maisons copient.

Le nom voyage avec la recette. « Belge » se diffuse autour de Charleroi ; « Speciaal » gagne la Flandre dans les années 1920 ; des exemples s’implantent dans le Brabant et à Anvers. La catégorie atteint une forte visibilité au milieu du siècle, puis recule à partir des années 1960 devant la pils et les bières spéciales plus fortes. Certaines marques deviennent pourtant des repères urbains ou régionaux. Aujourd’hui, le label flamand Streekproduct reconnaît notamment Palm, Bolleke De Koninck, Special De Ryck, Tonneke et Spéciale Belge De Poes : une invention de concours a fini par obtenir son dossier de patrimoine.

Cette trajectoire explique le chevauchement avec Belgian Pale Ale. La Spéciale Belge porte l’histoire précise du problème industriel et du concours ; le terme plus large Belgian Pale Ale classe aussi des descendantes selon leur profil. La première n’est donc ni une simple traduction de la seconde ni une catégorie médiévale. Elle est une innovation nationale devenue tradition — preuve qu’en bière, la tradition peut commencer par un règlement, un jury et un brasseur qui accepte enfin de montrer sa copie.`,
      "chapitres": [
        {
          "titre": "1904 : le concours sans couronne",
          "texte": `L’échec du premier concours dit quelque chose de l’économie du savoir brassicole. Récompenser une bière tout en exigeant la divulgation de sa méthode transforme le secret de fabrication en bien collectif ; refuser protège un avantage commercial, mais prive le projet national de son modèle.

Les sources disponibles sur cet épisode passent surtout par une monographie moderne de Jef Van den Steen et ses reprises documentées. Faute d’un procès-verbal numérisé présenté ici, le nombre de participants et le motif de l’absence de prix restent attribués à cette reconstruction. L’incertitude n’annule pas le récit : elle lui enlève simplement la fausse netteté d’une photographie.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Style historique défini par sa réponse belge aux marchés du début du XXe siècle : malt toasté clair, force de café et fermentation haute contenue.",
        "maltsEtCereales": [
          "Pilsner ou pale avec Vienna, Munich et caramel clair construit l’or soutenu ou l’ambre. Le toast doit venir du malt, sans basculer vers le chocolat ni le sucre brûlé."
        ],
        "houblons": [
          "Houblons nobles européens ou variétés britanniques, de 20 à 30 IBU. Leur présence rappelle la concurrence et les influences étrangères auxquelles la bière répondait."
        ],
        "levuresEtMicroorganismes": [
          "Souche de haute fermentation relativement propre : esters bas à moyens, phénols faibles. Le style a été conçu pour la régularité, pas pour une explosion de banane et de girofle."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Le profil minéral doit laisser cohabiter malt toasté et amertume. Une alcalinité modérée accompagne la teinte sans donner de finale crayeuse.",
        "empatage": "L’infusion vise un corps bas à moyen et une finale suffisamment sèche pour le comptoir. Trop de caramel transformerait l’équilibre historique en dessert ambré.",
        "ebullitionEtHoublonnage": "Une amertume nette est posée en début d’ébullition ; les ajouts plus tardifs restent nobles, floraux ou herbacés. Les épices ne font pas partie de la définition.",
        "fermentation": "Fermentation haute à température modérée, avec priorité à la régularité et à l’intégration. Le fruit complète le malt au lieu de le recouvrir.",
        "maturation": "Une clarification et une garde de quelques semaines arrondissent le toast. La bière est destinée à sortir stable et nette, ambition très moderne à sa naissance.",
        "profilRecherche": "Une ale ambrée belge de force modérée, toastée, fruitée avec retenue et très équilibrée."
      },
      "sources": [
        {
          "organisme": "Vlaams Centrum voor Agro- en Visserijmarketing",
          "edition": null,
          "reference": "Speciale Belge Ale — concours de Liège de 1905, diffusion et reconnaissance régionale",
          "type": "patrimoine_regional",
          "url": "https://www.streekproduct.be/producten/speciale-belge-ale",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Bere Birra / Sandro Di Pietro",
          "edition": "2023",
          "reference": "Conoscere uno stile: Speciale Belge — synthèse de la monographie de Jef Van den Steen et des concours de 1904-1905",
          "type": "publication_historique_secondaire",
          "url": "https://www.berebirra.org/2023/10/conoscere-uno-stile-speciale-belge.html",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Vlaamse Brouwers",
          "edition": null,
          "reference": "Speciale Belge — définition et ancrage brassicole flamand",
          "type": "organisation_brassicole",
          "url": "https://vlaamsebrouwers.be/bierstijlen/speciale-belge/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-Style Speciale Belge — paramètres et profil actuels",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
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
        "details": "Fermentation haute propre à modérément expressive : fruit jaune et agrume devant, phénols fins, chaleur alcoolique souple."
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
      "description": "La Belgian Blond Ale tend un pont doré entre la pils familière et l’ale d’abbaye : malt doux, mie de pain, miel léger, poire ou orange, épice fine et alcool arrondi autour de 6 à 7,5 %. Plus ronde qu’une Tripel et moins tranchante qu’une Golden Strong, elle accueille avant d’impressionner. Sa robe raconte la simplicité ; sa fermentation sait qu’il s’agit d’une aimable ruse.",
      "histoireEtOrigines": `La Belgian Blond Ale moderne appartient surtout à l’après-guerre. La pils a habitué l’Europe à la limpidité, à la couleur dorée et à une dégustation facile à lire ; les brasseurs de fermentation haute répondent avec des blondes plus fortes, plus aromatiques mais moins amères et moins sèches qu’une Tripel. Les guides décrivent cette catégorie comme un développement relativement récent destiné, entre autres, à rencontrer le goût des buveurs de lager. Cette réponse possède sa propre identité : la couleur rassure, puis levure, alcool et malt changent le registre.

Les bières d’abbaye ont fourni un puissant décor commercial à cette évolution, ce qui explique l’illusion d’ancienneté. Leffe offre un cas pédagogique. Après interruptions, destructions et Révolution française, l’abbé Nys et le brasseur Albert Lootvoet décident en 1952 de relancer une tradition brassicole liée à l’abbaye. Une gamme se développe ensuite, aujourd’hui produite par AB InBev. La date médiévale associée à l’abbaye décrit une histoire institutionnelle ; 1952 marque la reconstruction commerciale moderne. Entre les deux, la recette n’a pas traversé les siècles dans une amphore hermétique.

La catégorie dépasse évidemment Leffe et les seules marques d’abbaye. Elle occupe un espace sensoriel très utile : environ la force d’une Dubbel, mais pâle ; moins de houblon, d’atténuation et d’éclat carbonique qu’une Tripel ; moins d’alcool et de sécheresse que la Golden Strong. Cette position explique sa large adoption internationale. Elle traduit en bière la stratégie du seuil : assez familière pour être choisie sans mode d’emploi, assez belge pour que la deuxième gorgée ne ressemble plus à une pils.

La distinction entre origine et style reste décisive. Une Blond peut être trappiste, bière d’abbaye reconnue, marque séculière ou création indépendante. Ces statuts racontent des relations de production et de licence ; aucun ne garantit à lui seul la douceur maltée, le fruit jaune ou le degré du verre. La Belgian Blond Ale est une création de marché devenue famille stylistique — tradition réelle, donc, mais tradition moderne.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La singularité tient à sa fonction de passerelle : force intermédiaire, couleur de lager, rondeur maltée et fermentation belge plus douce que celle des branches pâles les plus sèches.",
        "maltsEtCereales": [
          "Malt Pilsner belge dominant, complété de malt aromatique ou de Vienna pour la mie de pain et le miel. Le sucre clair reste facultatif : la Blond conserve plus de rondeur maltée que la Tripel ou la Golden Strong."
        ],
        "houblons": [
          "Houblons continentaux de 15 à 30 IBU, généralement en retrait. Une touche florale ou herbacée ferme la gorgée sans déplacer la bière vers le tranchant d’une Tripel."
        ],
        "levuresEtMicroorganismes": [
          "Souche produisant poire, orange ou fruit jaune avec une épice basse. L’objectif est un bouquet accueillant, pas une compétition entre banane et clou de girofle."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau douce à modérée, peu alcaline pour le malt pâle. Un léger accent chlorure peut soutenir la rondeur, sans gommer la finale ni donner une sucrosité artificielle.",
        "empatage": "Une fermentescibilité moyenne à haute garde la bière digeste tout en laissant davantage de corps que dans une Strong Blonde très sèche. Malt aromatique et température se règlent comme deux leviers du même équilibre.",
        "ebullitionEtHoublonnage": "L’amertume reste de soutien ; les ajouts tardifs sont discrets. La couleur claire demande une ébullition maîtrisée pour limiter le brunissement tout en chassant les composés soufrés du malt Pilsner.",
        "fermentation": "La fermentation part modérément pour maintenir le fruit propre, puis s’achève sans sucre résiduel lourd. La chaleur alcoolique doit se fondre dans la rondeur, non remplacer la finale.",
        "maturation": "Une garde en cuve lisse alcool et levure. Certaines versions sont refermentées, d’autres filtrées et gazéifiées : le statut d’abbaye ne décide pas du conditionnement.",
        "profilRecherche": "Une ale dorée de force modérée à élevée, douce en attaque mais sèche et propre en finale, avec fermentation belge subtile."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "25A Belgian Blond Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/25/25A/belgian-blond-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-Style Blonde Ale — profil et paramètres actuels",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Abbaye de Leffe / AB InBev",
          "edition": null,
          "reference": "History — interruption, reconstruction de l’abbaye et relance brassicole de 1952 avec Albert Lootvoet",
          "type": "archive_de_marque",
          "url": "https://www.leffe.com/history",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Visit Bruges",
          "edition": null,
          "reference": "Biergeschiedenis — industrialisation, réfrigération, concentration et domination de la pils au XXe siècle",
          "type": "histoire_culturelle_locale",
          "url": "https://www.visitbruges.be/nl/eten-en-slapen/bier/biergeschiedenis",
          "consultation": "2026-08-11"
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
        "details": "Fermentation haute très atténuante, suivie d’une maturation froide et souvent d’une prise de mousse en bouteille poussée à forte carbonatation."
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
      "description": "La Belgian Golden Strong Ale dissimule une force de digestif sous une robe de pils : or pâle, mousse monumentale, poire, agrume, poivre, herbes et bulles tranchantes. Le sucre entièrement fermenté lui donne de l’alcool plutôt que du sirop ; le houblon et l’effervescence nettoient la finale. Elle a l’air de porter une chemise légère, mais ses poches sont pleines de briques.",
      "histoireEtOrigines": `Tout commence chez Moortgat par un problème de marché, pas par un manuscrit monastique. Après la Première Guerre mondiale, les ales britanniques ont du prestige en Belgique et les frères Albert et Victor Moortgat cherchent une bière capable de leur répondre. La maison raconte qu’Albert se rend en Écosse pour obtenir une levure ; une nouvelle ale est lancée sous le nom Victory Ale, puis devient Duvel en 1923, après qu’un cordonnier l’aurait qualifiée de « vrai diable ». Le sobriquet est cohérent avec les archives de marque, mais il appartient au récit familial : aucun sténographe n’attendait dans la salle avec son carnet.

Le produit de 1923 n’était toutefois pas la grande blonde pâle que le nom évoque aujourd’hui. Des enquêtes brassicoles indépendantes et l’Oxford Companion to Beer décrivent une bière originellement plus sombre, proche des Scotch ales belges alors populaires. La naissance commerciale et la naissance sensorielle du style sont donc séparées par plusieurs décennies. Dans les années 1960 et au début des années 1970, Moortgat travaille avec le professeur Jean De Clerck, figure de la science brassicole belge, sur des levures plus propres et une formulation beaucoup plus claire. Malt pâle, sucre fermentescible, forte atténuation, amertume précise et longue mise au point du conditionnement composent progressivement le paradoxe moderne : 8,5 % d’alcool qui se déplacent comme une bière bien plus légère.

L’objet de service participe à cette métamorphose. À la fin des années 1960, la brasserie développe un grand verre tulipe destiné à soutenir une mousse abondante et à libérer les arômes ; sa forme devient indissociable de la silhouette de Duvel. Au cours des années 1970, la bière pâle, son verre et une distribution plus ambitieuse forment un ensemble commercial immédiatement reconnaissable. Les concurrents belges puis étrangers imitent moins une recette qu’une prouesse : rendre simultanément visibles la force, la pâleur et l’effervescence. Une marque réinventée devient ainsi une famille stylistique.

Le procédé actuel de Duvel montre le prix de cette illusion. Une base de malt Pilsner reçoit du dextrose liquide, des houblons Saaz et Styrian Goldings, puis une fermentation qui peut monter d’environ 20 à 26 °C. La bière séjourne ensuite près de trois semaines vers −2 °C, repart en bouteille avec levure et sucre, puis mûrit encore au chaud et au froid. Ces chiffres décrivent Duvel, non une loi universelle ; ils expliquent pourquoi copier seulement sa couleur et son degré produit souvent un marteau blond là où l’original cherche une lame.`,
      "chapitres": [
        {
          "titre": "L’odyssée écossaise, avec point d’interrogation",
          "texte": `La version officielle situe l’origine de la souche chez McEwan à Édimbourg. D’autres reconstitutions citent William Younger, l’isolement de levures dans des bouteilles importées, ou l’intervention du professeur Léon Biourge à Louvain. Toutes convergent vers une influence britannique ; elles ne permettent pas d’identifier avec certitude une unique fiole remise en main propre pendant un voyage parfaitement documenté.

La prudence ne retire rien au rôle de la levure. La souche entretenue par Moortgat, puis les sélections effectuées avec Jean De Clerck, ont contribué à une bière suffisamment fruitée pour être expressive et suffisamment nette pour rester sèche à haut degré. Le voyage est vraisemblable ; son itinéraire exact demeure une histoire à plusieurs cartes.`
        },
        {
          "titre": "Le verre comme pièce de la machine",
          "texte": `La tulipe intervient dans la mécanique du service. Son volume laisse monter une mousse très carbonatée, son resserrement retient les arômes et son bord facilite une gorgée sous le col. Moortgat a fait de cette verrerie un outil de constance autant qu’une signature de marque.

Cette union du liquide, du service et de l’image explique une part de la descendance du style. La Belgian Golden Strong Ale est née d’une transformation de produit complète : recette, levure, maturation, bouteille, verre et langage visuel ont avancé ensemble. Le diable, pour une fois, se trouvait réellement dans les détails.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La force vient d’un moût dense ; la légèreté perçue vient du sucre entièrement fermenté, de l’atténuation, de l’amertume et du gaz carbonique.",
        "maltsEtCereales": [
          "Malt Pilsner très pâle dominant. Du dextrose, du saccharose ou un autre sucre neutre hautement fermentescible augmente la densité initiale sans apporter autant de dextrines qu’un supplément de malt. « Candi » n’est ni obligatoire ni synonyme de sirop sombre."
        ],
        "houblons": [
          "Saaz, Styrian Goldings ou équivalents continentaux apportent 20 à 40 IBU et une touche florale, herbacée ou épicée. L’amertume empêche la chaleur alcoolique de s’élargir en douceur lourde."
        ],
        "levuresEtMicroorganismes": [
          "Souche très atténuante et tolérante à l’alcool, choisie pour des esters de poire ou d’agrume et des phénols poivrés contenus. Un ensemencement sain et une oxygénation adaptée valent mieux qu’une fermentation volontairement malmenée au nom du caractère."
        ],
        "ingredientsComplementaires": [
          "Sucre hautement fermentescible ; eau et sucre de refermentation dosés pour une carbonatation élevée. Les épices ne sont pas nécessaires : poire et poivre peuvent venir de la levure."
        ],
        "profilEau": "Faible alcalinité pour préserver la couleur pâle, calcium suffisant pour la levure et minéralité sans dureté. Sulfates modérés possibles pour aiguiser l’amertume, sans sécheresse minérale crayeuse.",
        "empatage": "Palier bas ou programme favorisant un moût très fermentescible. Le sucre est ajouté pour alléger la part d’extrait résiduel, pas pour sucrer le verre fini.",
        "ebullitionEtHoublonnage": "Ébullition énergique pour un moût Pilsner net ; amertume ferme au départ, parfum noble plus discret ensuite. La précision compte davantage qu’un houblonnage démonstratif.",
        "fermentation": "Départ suffisamment frais pour limiter les alcools supérieurs, puis montée contrôlée afin d’achever l’atténuation. Duvel fournit un exemple documenté autour de 20 à 26 °C, pas une consigne universelle pour toutes les souches.",
        "maturation": "Garde froide prolongée, puis prise de mousse en bouteille fréquente. Chez Duvel, environ vingt jours sous zéro précèdent deux semaines chaudes en bouteille et une nouvelle garde froide ; la forte carbonatation fait partie de l’architecture sensorielle.",
        "profilRecherche": "Une bière dorée très forte mais trompeusement légère : sèche, effervescente, fruitée-épicée, avec alcool fondu et amertume nette."
      },
      "sources": [
        {
          "organisme": "Duvel Moortgat",
          "edition": null,
          "reference": "Who we are — influence des ales anglaises, récit du voyage en Écosse, Victory Ale, nom Duvel et développement du verre tulipe",
          "type": "source_primaire_historique",
          "url": "https://www.duvelmoortgat.com/en/who-we-are",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Duvel Moortgat",
          "edition": null,
          "reference": "Duvel — ingrédients, fermentation, garde froide et refermentation en bouteille",
          "type": "source_primaire_technique",
          "url": "https://www.duvel.com/nl-be/het-bier/duvel",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Belgian Smaak",
          "edition": null,
          "reference": "The Duvel’s in the Detail — enquête sur la bière sombre d’origine, les versions contradictoires de la levure écossaise et le rôle de Jean De Clerck",
          "type": "presse_brassicole_specialisee",
          "url": "https://www.belgiansmaak.com/the-duvels-in-the-detail-duvel-moortgat/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": null,
          "reference": "Giving the Devil Its Due — transformation pâle, formulation et calendrier technique documenté chez Duvel",
          "type": "presse_technique_specialisee",
          "url": "https://www.beerandbrewing.com/giving-the-devil-its-due-brewing-it-golden-and-strong-the-duvel-way",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Oxford Companion to Beer",
          "edition": null,
          "reference": "Duvel — évolution d’une bière sombre vers la référence pâle moderne et influence stylistique",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/etnmaxgjuU",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "25C Belgian Golden Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/25/25C/belgian-golden-strong-ale/",
          "consultation": "2026-08-11"
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
        "details": "Fermentation haute de moûts très denses, conduite jusqu’à une atténuation suffisante pour conserver du relief malgré 8 à 12 % d’alcool."
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
      "description": "La Belgian Dark Strong Ale réunit de grandes brunes qui existaient avant que les guides ne leur trouvent un tiroir commun. Prune, figue, raisin, croûte de pain, caramel sombre et épices entourent un alcool ample ; la torréfaction reste en coulisse. Sa richesse est surtout aromatique : au palais, une atténuation solide empêche le coffre aux fruits secs de se changer en pot de confiture.",
      "histoireEtOrigines": `Cette famille est une constellation dessinée après l’apparition de ses étoiles. Les fortes brunes de Chimay, Rochefort, Westvleteren et de brasseries séculières n’obéissent pas à une recette fondatrice commune appelée « Belgian Dark Strong Ale ». Elles portent des histoires, des noms et des numéros propres ; les guides anglophones les ont regroupées plus tard parce qu’elles partagent une force élevée, une couleur brune, des fruits noirs de fermentation et une étonnante capacité à finir moins douce que leur parfum ne le promet.

Chimay montre comment tradition monastique et science du XXe siècle s’entrecroisent. La communauté brasse depuis le XIXe siècle, mais sa gamme moderne résulte de reconstructions et de mises au point. Après avoir étudié auprès du professeur Jean De Clerck, le père Théodore isole en 1948 une souche qui structure encore l’identité de la maison. Une bière prévue pour Noël apparaît en 1954 ; commercialisée ensuite toute l’année, elle reçoit en 1956 le nom aujourd’hui traduit par Chimay Bleue. L’étiquette n’abrite donc pas une formule médiévale intacte : elle raconte l’après-guerre, un religieux formé à la microbiologie et une bière festive devenue permanente.

À Rochefort, la bière aujourd’hui numérotée 10 est créée au début des années 1950 sous le nom Merveille. Son « 10 » ne donne pas son degré alcoolique — elle titre aujourd’hui 11,3 % — mais conserve une ancienne unité de densité du moût employée par la brasserie. Le verre garde ainsi la trace d’un instrument de mesure disparu. Cette nomenclature locale suffit à défaire l’escalier trop parfait Dubbel–Tripel–Quadrupel : chaque abbaye a organisé sa gamme selon ses propres usages avant que le marché mondial ne cherche des cases faciles à traduire.

La catégorie moderne permet néanmoins une lecture sensorielle utile. À haute densité, le brasseur doit produire beaucoup d’alcool sans abandonner une masse de sucres non fermentés. Des malts de base et aromatiques apportent pain et toast ; des sucres très fermentescibles soutiennent l’atténuation ; les sirops foncés, lorsqu’ils sont employés, ajoutent couleur et notes de fruits cuits ou de caramel. La levure transforme le tout en prune, raisin ou épices. Le noir de café n’est pas la destination : une torréfaction appuyée ferait glisser la bière vers le stout.

« Quadrupel » chevauche aujourd’hui cette carte, mais n’en est ni le nom ancestral ni le synonyme obligatoire. Une Dark Strong Ale décrit un profil ; Quadrupel vient d’un produit néerlandais lancé en 1991 et devenu appellation commerciale. Confondre les deux revient à rebaptiser rétroactivement toute une famille d’après son cousin arrivé en retard au repas.`,
      "chapitres": [
        {
          "titre": "Des numéros qui ne comptent pas la même chose",
          "texte": `Les chiffres des gammes monastiques séduisent parce qu’ils semblent former un code universel. Rochefort 6, 8 et 10 renvoient pourtant à une ancienne mesure de densité ; Westvleteren 12 et St. Bernardus Abt 12 suivent d’autres histoires de produit ; Chimay utilise des couleurs. Aucun conseil monastique international n’a décrété qu’un quatre, un dix ou un bleu donnerait la place exacte d’une bière dans une progression sacrée.

Ces systèmes locaux sont plus intéressants que le folklore arithmétique : ils montrent des brasseries qui nomment leurs produits pour leur propre marché, puis voient ces noms devenir des repères mondiaux. La catégorie Dark Strong respecte cette diversité lorsqu’elle décrit le verre sans prétendre réécrire les étiquettes.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Famille rétrospective : les recettes historiques divergent, mais toutes organisent malt, sucres fermentescibles et levure pour obtenir beaucoup d’arômes avec une finale encore mobile.",
        "maltsEtCereales": [
          "Base Pilsner ou pale complétée selon la maison par Munich, malts aromatiques, caramel ou grains plus sombres. La profondeur ne suppose pas un inventaire entier de malts : fermentation et maturation peuvent produire une grande partie du fruit noir perçu."
        ],
        "houblons": [
          "Houblons continentaux généralement en soutien, autour de 20 à 35 IBU. Leur travail devient visible en finale : ils empêchent malt, alcool et fruit de rester collés au palais."
        ],
        "levuresEtMicroorganismes": [
          "Souche tolérante à l’alcool, fortement atténuante et expressive. Prune, raisin ou cerise peuvent être des esters et des produits de fermentation ; leur présence ne prouve aucun ajout de fruit."
        ],
        "ingredientsComplementaires": [
          "Saccharose, dextrose ou sirop sombre peuvent alléger l’extrait final. Un sirop candi riche en produits de Maillard ajoute aussi couleur et notes de raisin ou caramel ; cette fonction diffère de celle de simples cristaux de sucre colorés."
        ],
        "profilEau": "Alcalinité ajustée aux malts sombres sans excès bicarbonaté ; calcium suffisant pour une fermentation lourde et minéralité contenue pour ne pas durcir l’alcool.",
        "empatage": "Empâtage vers la fermentescibilité, parfois prolongé ou par paliers. À cette densité, chaque dextrine compte : le corps doit provenir de la concentration aromatique, pas d’une fermentation arrêtée trop tôt.",
        "ebullitionEtHoublonnage": "Ébullition assez longue pour concentrer et stabiliser le moût, sans rechercher un brûlé de chaudière. L’amertume est calculée contre la densité initiale plutôt que pour un parfum de houblon dominant.",
        "fermentation": "Ensemencement généreux, oxygénation adaptée et montée thermique contrôlée permettent d’achever un moût très riche. Trop chaud trop tôt, il produit des alcools agressifs ; trop froid ou sous-ensemencé, il laisse une brune sirupeuse.",
        "maturation": "Plusieurs semaines de garde fondent l’alcool ; un conditionnement sur levures en bouteille est fréquent mais non universel. Le vieillissement peut ajouter des notes de porto ou de noix, tandis qu’une oxydation excessive efface le fruit frais.",
        "profilRecherche": "Une strong ale sombre, riche en pain et fruits noirs mais jamais brûlée ni sirupeuse, avec alcool souple et finale étonnamment sèche."
      },
      "sources": [
        {
          "organisme": "Chimay",
          "edition": null,
          "reference": "Discover — chronologie brassicole, père Théodore, sélection de levure de 1948 et création de la bière de Noël devenue Chimay Bleue",
          "type": "source_primaire_historique",
          "url": "https://chimay.com/en/discover/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Oxford Companion to Beer",
          "edition": null,
          "reference": "De Clerck, Jean — formation du père Théodore et collaboration scientifique sur la gamme moderne de Chimay",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/rIrmclLNUW",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Abbaye Notre-Dame de Saint-Remy / Trappistes Rochefort",
          "edition": null,
          "reference": "Rochefort 10 — création au début des années 1950, ancien nom Merveille et signification historique du nombre 10",
          "type": "source_primaire_historique",
          "url": "https://www.trappistes-rochefort.com/en/beer/rochefort-10/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "26D Belgian Dark Strong Ale — profil comparatif et exemples historiques regroupés par la catégorie moderne",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26D/belgian-dark-strong-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Nederlandse Biercultuur",
          "edition": null,
          "reference": "Canon van de Nederlandse Biercultuur — apparition de La Trappe Quadrupel en 1991 et diffusion du terme",
          "type": "histoire_culturelle_nationale",
          "url": "https://nederlandsebiercultuur.nl/historie/canon/verscheidenheid-in-bier-1980-heden/1991-quadrupel",
          "consultation": "2026-08-11"
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
        "details": "Fermentation haute expressive et bien atténuée, souvent suivie d’une garde froide puis d’une seconde fermentation dans le contenant."
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
      "description": "La Dubbel verse un velours cuivré plutôt qu’une encre noire : croûte de pain, caramel, prune, raisin et épices de fermentation, portés par une mousse vive. Ses parfums annoncent la douceur ; sa finale, plus sèche, déjoue l’annonce. Autour de 6 à 7,5 %, elle occupe dans la famille monastique la place du grand brun de table, pas celle d’un dessert liquoreux.",
      "histoireEtOrigines": `Le nom moderne prend corps à Westmalle, derrière une porte qui finit par s’ouvrir sur le marché. La communauté brasse sa première bière le 10 décembre 1836 : selon l’abbaye, elle est sombre, douce et peu alcoolisée, destinée à la consommation des moines. Ce point de départ établit une continuité de production, non une identité de recette. Entre cette petite bière du réfectoire et la Dubbel actuelle, le matériel, la composition et la destination commerciale changent.

Après la décision prise en 1921 de vendre par l’intermédiaire de négociants, Westmalle adapte sa bière brune en 1926 pour ce marché élargi. La chronologie officielle explique que les ingrédients de la recette d’origine sont alors doublés et que la nouvelle bière reçoit le nom Dubbel. Cette date corrige une erreur souvent répétée — 1922 — et donne au terme un ancrage précis dans l’histoire de la maison. Elle ne prouve pas pour autant l’existence d’une règle monastique universelle où toutes les recettes « doubles » contiendraient exactement deux fois quelque chose. Doubler par rapport à quelle bière, quel volume et quelle mesure ? Dès que d’autres brasseries adoptent le mot, il devient surtout un repère de force et de couleur.

Après la Seconde Guerre mondiale, les bières d’abbaye et les brasseries séculières multiplient les interprétations. Le profil se stabilise autour d’une ale cuivrée à brune, plus forte qu’une bière simple mais moins massive que les grandes brunes de dégustation. Malt toasté, sucre fermentescible et levure se répartissent le travail : le grain dessine pain et caramel, un sirop sombre peut approfondir couleur et fruits cuits, la fermentation apporte prune ou raisin et transforme assez de sucre pour préserver le mouvement du verre. Une Dubbel n’a besoin ni de pruneaux dans la cuve ni de malt noir pour en évoquer le parfum.

Westmalle donne aussi un bon exemple de fabrication contemporaine sans fournir une loi pour tous. La brasserie emploie malt, houblons, eau profonde, sucre et sa levure propre ; après fermentation et garde froide, elle ajoute sucre et levure active avant deux à trois semaines de refermentation chaude en bouteille. La mousse et l’effervescence ne décorent donc pas une brune maltée : elles allègent sa texture et conduisent ses arômes jusqu’au nez. La mémoire utile de la Dubbel tient dans ce passage de 1926 : une recette monastique remaniée pour sortir de l’abbaye devient, en voyageant, le nom d’un style.`,
      "chapitres": [
        {
          "titre": "Le double n’est pas une table de multiplication",
          "texte": `Westmalle emploie bien l’idée d’ingrédients doublés pour expliquer son choix de 1926. Le piège consiste à transformer cette explication locale en système ancien applicable à chaque monastère, puis à imaginer que Tripel et Quadrupel seraient automatiquement trois et quatre fois la même recette. Les densités, les rendements et les volumes ne suivent pas cette échelle scolaire.

Dans l’usage brassicole, « dubbel » fonctionne désormais comme un nom propre devenu nom commun : il permet d’anticiper une brune d’inspiration belge, de force moyenne à élevée et riche en fruit sombre. Son étymologie éclaire Westmalle ; elle ne calcule pas le brassin du voisin.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La Dubbel cherche le fruit sombre et le malt toasté à degré encore mesuré ; son procédé doit la distinguer d’une Dark Strong ou d’une Quadrupel plus dense.",
        "maltsEtCereales": [
          "Base Pilsner ou pale avec Munich, malt aromatique ou caramel selon la maison. La robe cuivre à brune vient de grains non brûlés et, parfois, d’un sirop sombre ; le café torréfié appartient à un autre paysage."
        ],
        "houblons": [
          "Houblons continentaux discrets, généralement de 15 à 25 IBU. Ils coupent la douceur perçue sans faire concurrence au pain et au fruit."
        ],
        "levuresEtMicroorganismes": [
          "Souche expressive donnant prune, raisin ou fruit à noyau avec une épice mesurée. Sa capacité à terminer le moût compte autant que son bouquet."
        ],
        "ingredientsComplementaires": [
          "Sucre fermentescible ou sirop sombre possible. Le premier allège surtout le corps ; le second peut aussi fournir couleur et notes de fruits cuits. Des épices ou des fruits ne sont pas requis."
        ],
        "profilEau": "Alcalinité modérée adaptée à une robe brune, calcium suffisant et sulfates contenus. Une eau trop carbonatée épaissit la finale ; trop sulfatée, elle rend le fruit rugueux.",
        "empatage": "Empâtage fermentescible pour un corps moyen. La rondeur sensorielle vient des arômes de malt et d’ester davantage que d’une grande quantité de sucre résiduel.",
        "ebullitionEtHoublonnage": "Amertume de structure au début, très peu de houblon tardif. Les sirops foncés peuvent être ajoutés de façon à se dissoudre sans brûler ni produire une amertume de caramel accidentelle.",
        "fermentation": "Départ contrôlé puis légère montée pour atteindre la densité finale. La température façonne le fruit, mais une levure stressée transforme vite le raisin en solvant.",
        "maturation": "Garde froide pour clarifier et unir malt, fruit et alcool ; une seconde fermentation dans le contenant est fréquente. Chez Westmalle, elle dure deux à trois semaines autour de 21 à 23 °C avant la mise en marché.",
        "profilRecherche": "Une ale cuivrée à brune, maltée et fruitée, riche mais relativement sèche, sans torréfaction ni alcool brûlant."
      },
      "sources": [
        {
          "organisme": "Abbaye Notre-Dame du Sacré-Cœur de Westmalle",
          "edition": null,
          "reference": "Trappistenbieren — première bière de 1836, modification de 1926, origine du nom Dubbel et procédé commun de la brasserie",
          "type": "source_primaire_monastique",
          "url": "https://www.trappistwestmalle.be/trappistenbieren/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Abbaye Notre-Dame du Sacré-Cœur de Westmalle",
          "edition": null,
          "reference": "Westmalle Dubbel — profil actuel, recette remaniée en 1926 et refermentation en bouteille",
          "type": "source_primaire_produit",
          "url": "https://www.trappistwestmalle.be/en/trappist-beer/westmalle-dubbel/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "26B Belgian Dubbel — profil sensoriel et limites techniques contemporaines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26B/belgian-dubbel/",
          "consultation": "2026-08-11"
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
        "details": "Fermentation haute d’un moût pâle et très dense, menée vers une finale sèche puis fréquemment prolongée par un conditionnement actif en bouteille."
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
      "description": "La Tripel fait entrer le soleil dans une bière de neuf degrés : or clair, mousse compacte, poire mûre, orange, poivre, miel léger et houblon herbacé. Son amertume et ses bulles ont une mission structurelle, celle de déplacer une densité considérable sans laisser traîner de lourdeur. Le calice paraît cérémoniel ; le contenu, lui, travaille avec l’efficacité d’une grue.",
      "histoireEtOrigines": `Une nouvelle salle de brassage est l’acte de naissance que Westmalle choisit pour sa Tripel. Au début des années 1930, l’abbaye construit brasserie, chambre de fermentation et atelier ; leur mise en service est célébrée en 1934 par une forte bière blonde. Dans un pays où les ales d’orge ambrées ou brunes dominaient encore largement, cette pâleur constitue une innovation visible. Westmalle présente aujourd’hui la cuvée comme la première Tripel et la « mère » du style.

La généalogie possède pourtant une branche antérieure. L’Oxford Companion to Beer attribue à Hendrik Verlinden, de la brasserie séculière De Drie Linden à Brasschaat, la commercialisation en 1932 d’une forte ale dorée appelée Witkap Pater. Le même ouvrage décrit la bière de Westmalle de 1934 comme Superbier, ensuite modifiée par frère Thomas et rebaptisée Tripel en 1956. Le producteur actuel de Witkap confirme la continuité de la famille de marque, mais ne documente pas sur sa page publique tous les détails de 1932. Deux réponses peuvent donc coexister : Witkap Pater précède comme forte blonde commerciale connue ; Westmalle fixe le nom et surtout le modèle qui sera massivement imité.

Même la date de la formule actuelle demande de résister à la précision décorative. Le site de l’abbaye retient 1934 pour le lancement. L’encyclopédie brassicole cite 1956 pour la modification et le nom ; dans un entretien avec le responsable de production de Westmalle, Jeff Alworth rapporte un développement en 1936 et l’intervention de frère Thomas en 1954. Ces écarts de deux ans ne changent pas l’histoire générale : la Tripel canonique est une création évolutive des années 1930, stabilisée au milieu des années 1950, non une recette médiévale soudain débouchée.

Sa mécanique explique son influence. Une grande part de malt Pilsner garde la robe claire ; un sucre neutre entièrement fermentescible augmente l’alcool sans apporter autant de matière qu’une quantité équivalente de malt ; une souche vigoureuse crée fruits et épices puis descend bas ; des houblons européens et une forte carbonatation tendent la finale. Westmalle affiche aujourd’hui 9,5 %, 38 EBU, 11 EBC et six variétés de fleurs de houblon. Cette blonde forte est franchement houblonnée pour sa densité : fruit de levure, amertume et gaz se tiennent en équilibre.

Le mot « tripel » a finalement quitté Westmalle pour devenir une attente internationale. Il ne promet ni trois fermentations, ni trois fois le malt d’une Single, ni trois croix médiévales universelles. Il annonce aujourd’hui une grande ale belge pâle, sèche et effervescente. La réussite de Westmalle n’est pas d’avoir découvert le chiffre trois ; c’est d’avoir donné à une innovation du XXe siècle la force d’une tradition.`,
      "chapitres": [
        {
          "titre": "Une querelle d’antériorité à trois questions",
          "texte": `« Qui a inventé la Tripel ? » confond au moins trois objets : la première forte ale dorée, le premier emploi documenté du nom et la recette devenue référence mondiale. Witkap Pater a un argument solide pour la première ; Westmalle revendique aujourd’hui le titre de première Tripel pour 1934, tandis que l’Oxford Companion décrit encore cette bière comme Superbier avant son changement de nom au milieu des années 1950. Westmalle domine clairement la troisième question avec la formule devenue référence mondiale.

Les sources disponibles n’offrent pas ici un acte de naissance unique portant produit, mot et formule sur la même ligne. La lecture la plus prudente conserve donc l’antériorité de Witkap sans enlever à Westmalle son rôle de matrice. L’histoire brassicole gagne rarement à distribuer une médaille avant d’avoir défini l’épreuve.`
        },
        {
          "titre": "La modernité derrière les murs",
          "texte": `L’abbaye n’a pas simplement préservé un liquide ancien. Elle a inauguré des bâtiments modernes, ajusté la recette sur deux décennies et, beaucoup plus tard, testé pendant huit ans le passage de fermenteurs horizontaux à des cuves cylindro-coniques afin de conserver l’expression fruitée de sa levure. Pression hydrostatique, géométrie et dégazage influencent en effet la formation d’esters.

Cette patience technique est plus fidèle à l’histoire réelle que l’image d’un parchemin immuable. La Tripel est monastique parce qu’elle naît et évolue dans une institution monastique ; elle est moderne parce que cette institution mesure, expérimente et reconstruit son procédé.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La Tripel organise une densité élevée autour de trois contrepoids : atténuation, amertume et carbonatation. Sa pâleur est une décision technique, pas une promesse de légèreté alcoolique.",
        "maltsEtCereales": [
          "Malt Pilsner très majoritaire pour une robe de 8 à 14 EBC. Un sucre blanc ou un dextrose neutre fournit une part de l’extrait fermentescible sans accumuler les dextrines d’une charge tout-malt."
        ],
        "houblons": [
          "Saaz, Styrian Goldings, Hallertau ou autres houblons européens, souvent en plusieurs ajouts. Entre 20 et 40 IBU, l’amertume est plus ferme que dans une Blond ou une Dubbel et peut rester herbacée jusque dans le nez."
        ],
        "levuresEtMicroorganismes": [
          "Souche fortement atténuante capable de travailler à haute densité. Poire, agrume, banane légère et poivre dépendent de la souche et du procédé ; clou de girofle ou fruit ne signifient pas qu’une épice ou une purée a été ajoutée."
        ],
        "ingredientsComplementaires": [
          "Sucre clair fermentescible et sucre de refermentation fréquents. Coriandre ou autres épices existent dans certaines marques, mais la Tripel de référence construit sa complexité sans ouvrir tout le rayon des épices."
        ],
        "profilEau": "Eau douce à modérément minéralisée, faible en alcalinité pour la pâleur. Un peu de sulfate rend l’amertume plus nette ; trop de minéraux transforme la sécheresse en âpreté.",
        "empatage": "Palier favorisant la production de sucres simples et forte fermentescibilité. Le sucre de brassage complète ce travail : le degré monte sans faire progresser d’autant la densité finale.",
        "ebullitionEtHoublonnage": "Ébullition nette d’un moût Pilsner et plusieurs apports de houblon possibles. Westmalle emploie six variétés de fleurs en trois moments ; l’exemple illustre une construction en couches, pas une liste obligatoire.",
        "fermentation": "Ensemencement sain autour de 19 à 20 °C dans le procédé Westmalle, puis profil thermique adapté à la souche pour achever l’atténuation. La chaleur tardive aide la levure ; une chaleur excessive au départ fabrique surtout de l’alcool piquant.",
        "maturation": "Garde froide pour clarifier, puis prise de mousse naturelle très courante. Le gaz renforce mousse, fraîcheur et diffusion aromatique : à ce degré, il tient lieu de charpente invisible.",
        "profilRecherche": "Une ale blonde forte, sèche, très effervescente, épicée-fruitée, amère avec précision et dangereusement buvable."
      },
      "sources": [
        {
          "organisme": "Abbaye Notre-Dame du Sacré-Cœur de Westmalle",
          "edition": null,
          "reference": "Westmalle Tripel — revendication de 1934, profil actuel, 38 EBU, 11 EBC, six houblons et refermentation",
          "type": "source_primaire_monastique",
          "url": "https://www.trappistwestmalle.be/en/trappist-beer/westmalle-tripel/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Abbaye Notre-Dame du Sacré-Cœur de Westmalle",
          "edition": null,
          "reference": "Trappistenbieren — inauguration de la nouvelle brasserie en 1934 et procédé détaillé en néerlandais",
          "type": "source_primaire_historique_et_technique",
          "url": "https://www.trappistwestmalle.be/trappistenbieren/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Oxford Companion to Beer",
          "edition": "2012",
          "reference": "Tripel — Witkap Pater en 1932, Superbier de Westmalle en 1934 et reformulation/nom de 1956",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/JoAQxZRR15",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brouwerij Slaghmuylder / Witkap",
          "edition": null,
          "reference": "Witkap Pater — gamme actuelle, reprise de la marque et procédé de refermentation",
          "type": "source_primaire_de_marque",
          "url": "https://www.witkap.be/en/our-beers/witkap-pater",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Beervana / Jeff Alworth",
          "edition": "2020",
          "reference": "Westmalle Tripel: A Story of Evolution — entretien avec le responsable de production, chronologie divergente et essais de fermenteurs",
          "type": "presse_brassicole_specialisee",
          "url": "https://www.beervanablog.com/beervana/2020/6/22/westmalle-tripel-a-story-of-evolution",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "26C Belgian Tripel — plage et profil comparatif contemporains",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26C/belgian-tripel/",
          "consultation": "2026-08-11"
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
        "Pays-Bas"
      ],
      "origine": {
        "libelle": "Abbaye Notre-Dame de Koningshoeven",
        "ville": "Berkel-Enschot",
        "region": "Brabant-Septentrional",
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
        "details": "Fermentation haute à très forte densité, exigeant une levure saine et tolérante à l’alcool ; conditionnement sur levures courant mais non définitoire."
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
      "description": "La Quadrupel est la plus jeune des appellations monastiques célèbres : née aux Pays-Bas en 1991, elle désigne désormais une ale ambrée à brune de très grande force. Datte, figue, raisin, pain, caramel et épices entourent souvent 10 % d’alcool ou davantage. Son nom promet le sommet d’une gamme ; le verre, lui, réclame surtout une fermentation assez complète pour ne pas finir en marmelade chauffée.",
      "histoireEtOrigines": `Le premier indice tient sur une étiquette datée de 1991. À l’abbaye Notre-Dame de Koningshoeven, près de Tilburg, la brasserie La Trappe lance alors sa bière la plus forte : 10 % d’alcool, le nom Quadrupel et, d’abord, une présence limitée avant une production annuelle. La chronologie officielle de la maison et le canon de la Nederlandse Biercultuur convergent sur cette origine. Le mot qui paraît le plus ancien de la série est donc le dernier arrivé, et il est né aux Pays-Bas plutôt qu’en Belgique.

Le choix fonctionne commercialement avec une efficacité presque imparable. Après Dubbel et Tripel, « Quadrupel » suggère immédiatement une marche supplémentaire. La Trappe qualifie toujours son produit d’éponyme du style ; d’autres brasseries adoptent ensuite le terme, puis les amateurs l’abrègent en « Quad ». Une marque devient une catégorie au tournant du XXIe siècle, comme Duvel avait auparavant donné un modèle à la Golden Strong Ale. Ce processus est une vraie histoire brassicole, pas une tradition honteuse à déguiser en Moyen Âge.

Le succès du nom produit toutefois une illusion rétrospective. Rochefort 10, Chimay Bleue, Westvleteren 12 ou St. Bernardus Abt 12 existaient avec leurs propres appellations et chronologies ; les rebaptiser mentalement « Quadrupels historiques » facilite la dégustation comparative, mais ne décrit pas ce que leurs producteurs avaient inventé ou inscrit sur les bouteilles. De même, aucun système monastique commun n’a exigé qu’une Quad contienne quatre fois le malt d’une Single. Les chiffres de Rochefort renvoient notamment à une ancienne mesure de densité, et les couleurs de Chimay n’essaient même pas de jouer à l’arithmétique.

Sensoriellement, Quadrupel chevauche largement Belgian Dark Strong Ale. La différence utile réside moins dans un seuil chimique que dans l’identité revendiquée : une brasserie choisit « Quadrupel » pour inscrire sa bière très forte au sommet d’une gamme Dubbel/Tripel ou dans la descendance de La Trappe. La robe n’est d’ailleurs pas obligatoirement noire ; l’originale néerlandaise est rouge-brun. Le profil peut aller de l’ambre profond au brun, de fruits mûrs et pain aux sirops sombres, avec une amertume assez ferme pour soutenir 9 à 14 % selon les interprétations.

L’image à retenir tient donc en une année et un lieu : 1991, Koningshoeven. Avant eux se trouvent de grandes brunes fortes ; après eux, un nom capable de les rassembler parfois un peu trop vite. La Quadrupel n’est pas la quatrième page d’un grimoire médiéval, mais un produit moderne dont le titre a réussi son exportation mondiale.`,
      "chapitres": [
        {
          "titre": "Quand une étiquette voyage dans le passé",
          "texte": `Les catégories travaillent souvent à rebours. Une fois « Quadrupel » installé dans les bars et concours, il devient tentant de l’appliquer aux bières plus anciennes qui lui ressemblent. Cette opération peut être pratique pour comparer couleur, force et fruit noir ; elle devient fausse lorsqu’elle prétend restituer l’intention historique des brasseurs.

La meilleure lecture garde les deux calendriers : celui des produits belges qui ont préparé le goût, et celui du mot néerlandais qui a organisé ce goût en famille commerciale. Le style possède ainsi des ancêtres plus âgés que son acte de naissance.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Nom moderne et volontairement large : l’originale La Trappe sert de repère, tandis que les interprétations internationales chevauchent souvent la Belgian Dark Strong Ale.",
        "maltsEtCereales": [
          "Base pale ou Pilsner, Munich et malts caramel ou aromatiques selon la teinte. La Trappe originale est rouge-brun : une Quad n’a pas besoin de malts noirs pour prouver sa puissance."
        ],
        "houblons": [
          "Houblons continentaux principalement équilibrants. Leur dosage s’ajuste à une densité initiale extrême ; une valeur modérée sur le papier peut disparaître derrière l’alcool et l’extrait."
        ],
        "levuresEtMicroorganismes": [
          "Souche très tolérante à l’alcool, avec réserve de vitalité suffisante pour achever le brassin. Esters de fruits mûrs et phénols doux peuvent fournir datte, prune ou épice sans ingrédients correspondants."
        ],
        "ingredientsComplementaires": [
          "Sucres fermentescibles et sirops foncés fréquents mais non réglementaires. Un sirop sombre apporte aussi des composés aromatiques ; un sucre neutre allège surtout la structure."
        ],
        "profilEau": "Minéralité modérée, calcium utile à la levure et alcalinité calculée selon la couleur réelle. La force vient du moût, jamais d’une eau salée ou crayeuse.",
        "empatage": "Empâtage long et fermentescible. À cette échelle, un point de densité finale de trop se goûte davantage qu’un point de densité initiale de moins.",
        "ebullitionEtHoublonnage": "Ébullition conçue pour concentrer sans brûler les sucres ; amertume de fond, rarement un grand parfum tardif. L’ajout fractionné des sucres peut réduire la pression osmotique initiale sur la levure.",
        "fermentation": "Levain important, oxygénation et nutriments raisonnés, puis température montante pour terminer. Une souche héroïque n’existe pas : négliger sa santé transforme la finale en sucre et l’alcool en solvant.",
        "maturation": "Garde longue avant mise, puis refermentation possible. Le temps peut fondre l’alcool et développer porto, noix ou fruits secs ; il ne répare pas une fermentation inachevée.",
        "profilRecherche": "Une ale monastique très forte, sombre et complexe, dense en arômes mais pas en sucre résiduel, avec alcool fondu et finale structurée."
      },
      "sources": [
        {
          "organisme": "La Trappe / Abbaye Notre-Dame de Koningshoeven",
          "edition": null,
          "reference": "History — introduction de La Trappe Quadrupel en 1991, 10 % et passage rapide à une production annuelle",
          "type": "source_primaire_monastique",
          "url": "https://uk.latrappetrappist.com/gb/en/la-trappe-trappist/history.html",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "La Trappe / Abbaye Notre-Dame de Koningshoeven",
          "edition": null,
          "reference": "La Trappe Quadrupel — bière éponyme du style et profil actuel de l’originale",
          "type": "source_primaire_produit",
          "url": "https://uk.latrappetrappist.com/gb/en/products/products/beers/la-trappe-quadrupel.html",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Nederlandse Biercultuur",
          "edition": null,
          "reference": "Canon van de Nederlandse Biercultuur — Quadrupel, het derde (?) trappistenbier, 1991",
          "type": "histoire_culturelle_nationale",
          "url": "https://nederlandsebiercultuur.nl/historie/canon/verscheidenheid-in-bier-1980-heden/1991-quadrupel",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "26D Belgian Dark Strong Ale — catégorie sensorielle chevauchante et comparaison avec les Quads",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26D/belgian-dark-strong-ale/",
          "consultation": "2026-08-11"
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
        "libelle": "Wallonie, de Liège au Hainaut",
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
        "details": "Fermentation haute très atténuante ; de nombreuses souches modernes sont diastatiques, mais température, cultures et acidité varient selon la lignée."
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
      "description": "La Saison n’a jamais eu une seule saison. Son visage moderne mêle sécheresse, forte effervescence, poivre, céréales, houblon et fruits jaunes qui semblent filer dans le vent ; son passé comprend aussi des bières de Liège plus douces, des brunes de garde et des forces très variables. La ferme appartient à l’histoire, mais l’usine et la ville aussi. C’est précisément ce désordre documenté qui rend la famille passionnante.",
      "histoireEtOrigines": `Ouvrons l’enquête loin de la carte postale. La plus ancienne mention identifiée à ce jour par l’historien Roel Mulder apparaît dans un dictionnaire wallon-français publié à Liège en 1823. La saison y est une bière d’Avent ou de mars, excellente et capable de se conserver. Liège est alors une ville industrielle de mines et de métallurgie. Les manuels du XIXe siècle décrivent beaucoup d’épeautre malté, du froment non malté et peu d’orge ; relativement peu atténuée, cette bière pouvait être douce et se buvait après quatre à six mois. L’ancêtre documenté ressemble peu à la blonde sèche canonique.

Le mot circule ensuite avec plusieurs sens. À Charleroi, une auberge promet deux litres de « bière de saison » en 1858 ; une chanson de 1861 évoque une bière brassée en mars pour l’été. Les sources hennuyères restent clairsemées et accolent parfois « de saison » à une grisette ou une brune : le terme signale alors une version de garde plutôt qu’une recette autonome. À Dijon en 1866, des brasseurs présentent ainsi une grisette de saison et une brune vieille de saison. Céréales, couleur, force et même fonction grammaticale varient.

La campagne wallonne brassait réellement : brasseries banales ou communales, grandes fermes équipées et productions familiales apparaissent dans les collectes du Musée de la Vie wallonne. Ce matériau demeure anecdotique et difficile à quantifier ; les brasseries professionnelles restent nombreuses et les bières domestiques ne portent pas toutes le nom Saison. Une bière hivernale destinée aux ouvriers l’été reste plausible localement, surtout à faible degré, sans que cette pratique forme une règle générale du XIXe siècle.

À Tourpes, la Brasserie Dupont porte la continuité la plus influente. Son récit remonte à une ferme de 1759, devenue ferme-brasserie en 1844 et productrice de Saisons pour les travailleurs agricoles. En 1920, Alfred Dupont achète le site pour retenir son fils Louis, qui projetait de partir au Canada ; la maison présente la recette comme relancée. Ce verbe indique à lui seul une reconstruction plutôt qu’une production demeurée parfaitement inchangée.

Dans les années 1980 et 1990, les écrits de Michael Jackson, les importateurs et les brasseurs nord-américains font de Saison Dupont la lentille principale du style. Sa blonde sèche, amère, poivrée et refermentée inspire une famille mondiale, tout en rejetant dans l’ombre les versions anciennes légères, sombres, douces, aigres ou multicéréales.

La Saison contemporaine possède donc une grammaire plutôt qu’une recette ancestrale : grande atténuation, faible douceur finale, effervescence vive, expression épicée de la levure et houblon assez présent pour rafraîchir. De nombreuses souches utilisées pour ce résultat portent STA1 et sécrètent une glucoamylase qui rend fermentescibles des dextrines ordinaires ; cette capacité explique une sécheresse extrême et exige une séparation sanitaire attentive dans la brasserie. Toutes les souches de Saison ne se comportent pas de façon identique, et le poivre peut venir de la fermentation sans le moindre grain de poivre ajouté.

Traditions de garde, pratiques rurales, production urbaine, ruptures et reconstruction internationale appartiennent au même trajet. L’image à retenir est une route qui part de Liège en 1823, traverse le Hainaut et arrive dans le monde entier avec plusieurs tonneaux qui ne contiennent pas la même chose.`,
      "chapitres": [
        {
          "titre": "Les saisonniers : un récit possible, pas un décret",
          "texte": `Le travail agricole demandait bien des boissons disponibles, nourrissantes et généralement faibles. Des fermes wallonnes ont brassé, et Dupont conserve une tradition explicite de bière destinée aux ouvriers. En revanche, les sources historiques retrouvées à Liège, Charleroi ou dans les concours décrivent aussi des productions urbaines et professionnelles ; elles n’établissent ni ration universelle, ni recette unique, ni volume quotidien fiable.

La formulation prudente est plus intéressante que le rejet total. Certaines bières ont pu accompagner les travaux ; des versions faibles conviennent mieux à cette fonction que les 6 à 9 % modernes ; la conservation estivale fournit une logique réelle. Ce faisceau rend le récit crédible localement, pas démontré partout. Une faucille sur une étiquette ne vaut pas une archive de paie.`
        },
        {
          "titre": "Dupont, survivante puis objectif de la caméra",
          "texte": `Saison Dupont n’est pas seulement un exemple réussi. Sa survie et son exportation ont déterminé ce que les guides, importateurs et nouvelles brasseries ont appris à appeler Saison. Une bière particulière — or pâle, sèche, houblonnée, très expressive — devient l’étalon à partir duquel le passé est relu.

Ce rôle ne la rend ni artificielle ni représentative de chaque bière ancienne. Il illustre un mécanisme fréquent : une survivante occupe l’espace laissé par les disparues, puis les descendantes copient la survivante. La renaissance internationale conserve ainsi une branche véritable tout en donnant à l’arbre une silhouette plus régulière qu’il n’en avait.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Famille historiquement variable, aujourd’hui organisée autour de la fraîcheur : l’atténuation, le houblon, l’effervescence et les phénols épicés doivent produire du mouvement plutôt qu’un folklore rustique plaqué.",
        "maltsEtCereales": [
          "Pilsner ou pale domine nombre de versions modernes ; blé, épeautre, seigle, avoine ou sarrasin peuvent modifier texture et céréale. L’épeautre et le froment appartiennent à la Saison liégeoise documentée, sans imposer leur emploi à toute la famille."
        ],
        "houblons": [
          "Kent Goldings, Styrian Goldings et autres houblons européens fournissent souvent 20 à 45 IBU, avec un parfum floral, terreux ou herbacé. Le houblonnage à cru est possible, mais plus fréquent dans les descendantes internationales."
        ],
        "levuresEtMicroorganismes": [
          "Souche poivrée, fruitée et très atténuante. Beaucoup de cultures dites Saison sont diastatiques : grâce au gène STA1 fonctionnel, elles peuvent hydrolyser puis fermenter des dextrines laissées par des levures ordinaires. D’autres souches ne le sont pas ; l’étiquette commerciale mérite vérification."
        ],
        "ingredientsComplementaires": [
          "Épices historiques ou modernes possibles — Saison Pipaix en fournit un exemple — mais non obligatoires. Poivre, agrume et girofle doivent d’abord être attribués à la levure et au houblon avant d’inventer un sachet d’épices invisible."
        ],
        "profilEau": "Sulfates modérés pour découper la finale, calcium suffisant et alcalinité ajustée à la couleur. La sécheresse vient surtout de la fermentation ; une eau excessivement sulfatée n’en produit qu’une caricature rugueuse.",
        "empatage": "Empâtage favorisant la fermentescibilité, sans supposer que toutes les archives décrivent des bières sèches. Dans la version moderne, céréales crues et grains riches en bêta-glucanes peuvent demander paliers ou filtration adaptée.",
        "ebullitionEtHoublonnage": "Amertume centrale et ajouts aromatiques à l’ébullition ; houblonnage à cru selon l’interprétation. Les épices, si elles existent, sont dosées après avoir mesuré ce que levure et houblon donnent déjà.",
        "fermentation": "La température suit la souche, pas un concours de chaleur. Certaines cultures s’expriment très chaud, d’autres produisent solvant ou phénols grossiers ; les souches diastatiques poursuivent la fermentation longtemps et peuvent contaminer les bières voisines si le matériel est mal séparé.",
        "maturation": "Refermentation en bouteille fréquente pour le gaz et la garde. Une Saison à culture pure peut mûrir en quelques semaines ; Brettanomyces, bois ou acidification appartiennent aux variantes et déplacent l’échelle vers plusieurs mois.",
        "profilRecherche": "Une ale wallonne sèche, très effervescente, poivrée-fruitée et rafraîchissante, avec une rusticité nette mais jamais lourde."
      },
      "sources": [
        {
          "organisme": "Lost Beers / Roel Mulder",
          "edition": "2018",
          "reference": "What was a 19th century saison really like? — sources de 1823 à Liège, bières de Charleroi et usages hennuyers du terme",
          "type": "recherche_historique_sur_archives",
          "url": "https://lostbeers.com/what-was-a-19th-century-saison-really-like/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Lost Beers / Roel Mulder",
          "edition": "2018",
          "reference": "The real Belgian farmhouse ales — brasseries banales, communales, domestiques et limites des témoignages ruraux wallons",
          "type": "recherche_historique_et_ethnographique",
          "url": "https://lostbeers.com/the-real-belgian-farmhouse-ales/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brasserie Dupont",
          "edition": null,
          "reference": "Our history — ferme de Tourpes, ferme-brasserie de 1844, achat de 1920, relance de la Saison et développement international",
          "type": "source_primaire_de_producteur",
          "url": "https://www.brasserie-dupont.com/en/our-history/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Wine & Spirit Education Trust / Stephen Beaumont",
          "edition": "2026",
          "reference": "What is Saison beer? — rôle de Saison Dupont et Michael Jackson dans la définition moderne, diversité des forces et technique contemporaine",
          "type": "synthese_brassicole_specialisee",
          "url": "https://www.wsetglobal.com/knowledge-centre/blog/2026/what-is-saison-beer",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Krogerus & Gibson / Applied Microbiology and Biotechnology",
          "edition": "2020",
          "reference": "A re-evaluation of diastatic Saccharomyces cerevisiae strains and their role in brewing — STA1, dextrines, souches de Saison et contrôle microbiologique",
          "type": "publication_scientifique_evaluee_par_les_pairs",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32170387/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "25B Saison — plage contemporaine et sous-catégories de force/couleur",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/25/25B/saison/",
          "consultation": "2026-08-11"
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
        "type": "variable",
        "details": "Fermentation Saison pure, culture mixte, Brettanomyces ou refermentation sur fruit selon la divergence annoncée ; le mélange microbien n’est pas obligatoire."
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
      "description": "La Specialty Saison prend la ligne sèche et nerveuse de sa parente, puis change volontairement l’itinéraire : pissenlit, épeautre, agrume, houblon américain, miel, bois, Brettanomyces ou culture acide. Elle n’est pas automatiquement sure ni chargée d’épices. Sa singularité vient d’une divergence lisible, tandis que l’effervescence, l’atténuation et l’élan poivré continuent de faire reconnaître la Saison sous le costume.",
      "histoireEtOrigines": `Cette branche moderne nomme les écarts apportés au modèle devenu classique, sans annexer rétroactivement toute la diversité historique du parent. Elle explique ce qu’un brasseur transforme : grain local, fruit, plante, houblon étranger, culture mixte ou passage dans le bois.

À Soy, dans la province de Luxembourg, Dany Prignon fournit le récit le plus mémorable. À la fin des années 1980, il fonde Fantôme avec son père pour créer un produit local et assemble du matériel récupéré auprès d’autres brasseries. Son catalogue dépasse ensuite cent bières, souvent éphémères : Pissenlit emploie des fleurs cueillies près de la brasserie, Magic Ghost du thé vert, Blanche Pamplemousse du pamplemousse. Belgian Smaak rapporte qu’au milieu des années 2010 plus de 90 % de la production partait à l’exportation, donnant à la petite maison wallonne un statut culte surtout étranger.

Fantôme montre pourquoi « specialty » décrit une démarche plutôt qu’un microorganisme. Certaines cuvées révèlent acidité ou fermentations périphériques ; d’autres reposent sur plantes, fruits ou recette. La culture mixte reste une possibilité. Une Saison poivrée peut demeurer sans épices, tandis qu’une cuvée épicée gagne à nommer son placard.

Fantôme del Rey déplace cette liberté jusqu’au Texas. Brassée avec Jester King en Belgique en 2014, puis reprise aux États-Unis en 2016 et 2022, elle change de territoire autant que de brassin. La version texane de 2022 associe eau du Hill Country, orge et blé locaux, Fuggles, sucre candi, coriandre, poivre noir et miel de truffe. Une culture mixte travaille en acier, le miel relance la fermentation et quatre mois de conditionnement terminent le projet. La charpente de Saison raconte ainsi son voyage plutôt qu’une copie de Tourpes ou Soy.

Une Specialty Saison possède donc un parent reconnaissable et une divergence lisible. Si fruit, acidité ou houblon efface toute sécheresse, effervescence et fermentation de Saison, une autre famille informera mieux. La catégorie cartographie une mutation ; elle ne sert pas de grenier à chaque bouteille ficelée.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Recette à deux colonnes : une base de Saison identifiable et une divergence annoncée. L’intérêt technique vient de leur interaction, jamais de l’accumulation d’ingrédients rares.",
        "maltsEtCereales": [
          "Base pâle et fermentescible, puis céréale distinctive choisie pour un effet précis : épeautre plus noisetté, seigle épicé et visqueux, avoine plus souple, sarrasin terrien et aromatiquement puissant. Chaque grain change aussi filtration et texture."
        ],
        "houblons": [
          "Houblons européens pour prolonger l’herbe et l’épice, ou variétés américaines pour agrume et fruit tropical. Une culture Brett peut transformer certains composés du houblon pendant une longue garde ; les doses tardives se pensent donc avec le calendrier."
        ],
        "levuresEtMicroorganismes": [
          "Levure Saison seule dans les versions aux céréales, plantes ou houblons ; Brettanomyces et bactéries lactiques seulement lorsque la fermentation mixte fait partie du projet. Une culture mélangée demande une gestion sanitaire et temporelle dédiée."
        ],
        "ingredientsComplementaires": [
          "Fruits, herbes, épices, fleurs, miel ou bois avec une fonction déclarée. Leur fermentescibilité compte : fruit et miel peuvent assécher de nouveau la bière, produire du gaz et imposer un contrôle de densité avant conditionnement."
        ],
        "profilEau": "Partir du profil sec du parent, puis adapter sulfates, chlorures et alcalinité à la divergence. Fruit acide et culture lactique fournissent déjà de la vivacité ; une eau durcie risquerait de la rendre cassante.",
        "empatage": "Fermentescibilité élevée, avec paliers ou enveloppes de riz si les céréales riches en bêta-glucanes menacent la filtration. La texture apportée par l’avoine ou le seigle ne doit pas annuler la finale sèche.",
        "ebullitionEtHoublonnage": "Plantes et épices sont placées selon volatilité et extraction ; le fruit est souvent ajouté après l’ébullition. Dans une culture acidifiante, une forte amertume peut inhiber les bactéries et produire un conflit plus chimique que poétique.",
        "fermentation": "Fermentation Saison complète avant toute phase secondaire planifiée. Fruit, miel, Brett ou bactéries changent la densité et la pression : mesurer la stabilité remplace avantageusement l’intuition au moment d’embouteiller.",
        "maturation": "Quelques semaines pour une version aux grains ou houblons, plusieurs mois pour fruit, bois ou culture mixte. Le calendrier appartient au procédé distinctif et doit être écrit avant d’ajouter l’ingrédient spectaculaire.",
        "profilRecherche": "Une Saison identifiable enrichie par un ingrédient ou un procédé spécial, sans perdre sa sécheresse, son effervescence et sa logique de fermentation."
      },
      "sources": [
        {
          "organisme": "Belgian Smaak",
          "edition": "2016",
          "reference": "Brasserie Fantôme and the Enigma of Dany Prignon — fondation locale, matériel, ingrédients, catalogue, exportation et cultures",
          "type": "reportage_brassicole",
          "url": "https://www.belgiansmaak.com/brasserie-fantome-dany-prignon/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Jester King Brewery",
          "edition": "2022",
          "reference": "Fantôme del Rey — chronologie de la collaboration, ingrédients texans, culture mixte, miel et quatre mois de conditionnement",
          "type": "source_primaire_de_producteur",
          "url": "https://jesterkingbrewery.com/main-blog/fantme-del-rey",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Craft Beer & Brewing / Joe Stange",
          "edition": "2021",
          "reference": "Surveying Belgium’s Modern-Day Saison Landscape — diversité belge moderne, épices, houblons, cultures et céréales",
          "type": "presse_brassicole_specialisee",
          "url": "https://www.beerandbrewing.com/surveying-belgiums-modern-day-saison-landscape",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "25B Saison — grammaire du style parent et variations déclarées",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/25/25B/saison/",
          "consultation": "2026-08-11"
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
        "France"
      ],
      "origine": {
        "libelle": "Flandre française et Nord de la France",
        "ville": null,
        "region": "Hauts-de-France",
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
        "type": "variable",
        "details": "Fermentation haute fraîche dans de nombreuses versions, mais certaines maisons modernes emploient levure et techniques de lager ; la garde après fermentation est l’élément commun."
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
      "description": "La Bière de Garde range le temps dans une bouteille : blonde, ambrée ou brune, elle assemble biscuit, croûte de pain, caramel sec et fruit discret autour d’une fermentation calme. Le malt parle plus fort que le houblon, puis une longue maturation polit les angles. L’exemple moderne est propre et souple ; les archives, elles, se souviennent aussi de fûts vineux et aigrelets. Même la cave a changé de goût.",
      "histoireEtOrigines": `Avant d’être un style, la garde est une solution au calendrier. Sans réfrigération mécanique, brasser pendant les mois frais limite les infections ; augmenter la force et conserver la bière permet de franchir la saison chaude. Dans le Nord de la France, cette logique se rencontre à la ville, dans les villages et dans des fermes-brasseries. Elle partage avec les anciennes Saisons l’idée de provision, mais les deux noms ne désignent pas une paire sensorielle parfaitement dessinée depuis toujours.

Les textes anciens ouvrent une cave beaucoup moins nette que les guides actuels. En 1880, L’Industrie de la brasserie décrit une Bière de Garde de Lille vieillie six à huit mois dans de grands fûts de bois et appréciée pour son caractère très vineux. En 1905, le scientifique britannique R. E. Evans observe dans Lille et d’autres grandes villes des bières laissées volontairement s’aigrir tout en devenant vineuses. Ces témoignages ne prescrivent pas l’acidité aux producteurs modernes ; ils prouvent que la continuité du nom n’est pas l’immobilité du goût. Les connaissances microbiologiques, le froid, les cuves et l’attente d’une bière plus propre ont reconstruit la famille.

Le territoire qui porte cette transformation était extraordinairement dense. Les Archives départementales du Pas-de-Calais recensent plus de 2 600 brasseries dans la région au début du XXe siècle. Industrialisation et concentration en ferment déjà beaucoup ; les deux guerres mondiales détruisent ensuite de nombreux établissements et accélèrent le mouvement. Les survivantes ne préservent donc pas simplement un monde ancien intact : elles choisissent des spécialités capables de financer leur place face aux marques nationales.

La famille Duyck fournit l’objet autour duquel le style moderne se réorganise. Léon Duyck brasse à la ferme de Zegerscappel ; son fils Félix installe en 1922 sa propre ferme-brasserie à Jenlain et garde sa bière plusieurs semaines en fût afin d’obtenir un produit plus fin et moins doux que les bières vendues presque immédiatement. La brasserie qualifie cette cuvée de l’une des premières spécialités françaises de fermentation haute, formulation plus prudente que la revendication d’une invention absolue puisque les sources de 1880 emploient déjà le nom.

Après la Seconde Guerre mondiale, la pénurie de bouteilles provoque une innovation très visible. Félix et Robert Duyck récupèrent des bouteilles de champagne, les bouchent avec du liège retenu par un fil de fer, et font entrer la bière de garde dans les foyers sous une silhouette de partage. En 1968, la bière jusque-là anonyme prend le nom du village, Jenlain. Dans les années 1970, des étudiants lillois l’adoptent et l’emportent vers leurs régions d’origine ; la demande oblige la brasserie à se moderniser. La garde rurale devient spécialité nationale par le détour d’un emballage de récupération et d’un réseau étudiant — marketing viral avant que le virus ne réclame un tableau de bord.

Jenlain sert alors d’archétype ambré, tandis que Castelain, Saint-Sylvestre, La Choulette et d’autres maisons développent ou relancent blondes, ambrées et brunes. Certaines utilisent une levure d’ale à température fraîche ; d’autres ont conservé une culture ou des techniques de lager héritées de leur production régionale. La famille sensorielle privilégie désormais le malt, une fermentation retenue et une maturation propre, mais le droit français donne au nom un périmètre beaucoup plus simple.

Dans sa version en vigueur depuis le 1er janvier 2017, l’article 2 du décret français relatif aux bières réserve la mention « bière de garde » à une bière ayant subi au moins vingt et un jours de garde après sa fermentation primaire. Le texte n’impose ni couleur, ni fermentation haute, ni force, ni profil lillois. Une bière peut ainsi satisfaire la définition légale sans représenter le style historique des guides ; celui-ci doit néanmoins respecter ce sens concret du temps lorsqu’il emploie la dénomination en France. Six à huit mois dans le bois en 1880, quelques semaines chez Duyck, vingt et un jours dans le décret : le même mot a traversé trois horloges.`,
      "chapitres": [
        {
          "titre": "La champenoise née d’une pénurie",
          "texte": `La bouteille lourde, le bouchon de liège et le fil de fer paraissent aujourd’hui une mise en scène patrimoniale. Chez Duyck, leur adoption après-guerre répond d’abord au manque de bouteilles disponibles. Le contenant récupéré supporte la pression, circule jusqu’à la maison et donne à la bière une présence distincte des petits formats courants.

Ce geste transforme le produit autant que son image. Une bière servie localement au fût devient transportable, partageable et reconnaissable ; son format prépare la renommée de Jenlain. En 2024, Duyck a remplacé ses champenoises historiques par des bouteilles réemployables : même l’icône issue du réemploi finit par changer pour organiser un autre réemploi.`
        },
        {
          "titre": "Vingt et un jours ne fabriquent pas un style",
          "texte": `Le décret protège une mention commerciale par un critère vérifiable : compter la garde après fermentation primaire. C’est efficace pour le contrôle, insuffisant pour prédire le verre. Une pils gardée vingt et un jours peut satisfaire la définition réglementaire sans présenter le toast, la force ou la fermentation attendus dans une Bière de Garde de dégustation.

Le cadre encyclopédique conserve donc deux colonnes. La première relève du droit français en vigueur ; la seconde rassemble une histoire régionale et un profil construit par les produits. Les confondre ferait du chronomètre un dégustateur, métier pour lequel il manque encore cruellement de nez.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Le style existe en blond, ambré et brun, en fermentation haute ou parfois basse. Son invariant technique n’est pas une levure nationale : c’est la maturation qui arrondit un profil centré sur le malt.",
        "maltsEtCereales": [
          "Pilsner et pale pour les blondes ; Vienna et Munich construisent biscuit et toast dans les ambrées ; caramel et malts plus sombres interviennent avec retenue dans les brunes. Les trois couleurs appartiennent à la famille sans être trois degrés de la même recette."
        ],
        "houblons": [
          "Houblons continentaux ou régionaux, généralement de 18 à 28 IBU. Ils protègent l’équilibre et peuvent laisser une épice discrète, mais le parfum de houblon ne mène pas la marche."
        ],
        "levuresEtMicroorganismes": [
          "Souche d’ale fermentée frais pour peu d’esters, ou souche de lager chez certains producteurs. Ce pluralisme historique interdit de définir la bière par « haute fermentation » seule."
        ],
        "ingredientsComplementaires": [
          "Sucres possibles pour ajuster force et atténuation, jamais requis par la dénomination. Les versions modernes propres n’essaient pas de reproduire l’acidité des fûts du XIXe siècle avec un ajout arbitraire d’acide."
        ],
        "profilEau": "Eau modérément minéralisée, chlorures suffisants pour soutenir le malt et alcalinité adaptée à la variante. Une finale minérale dure contredit le poli recherché par la garde.",
        "empatage": "Infusion ou paliers donnant un corps moyen et une atténuation régulière. La version blonde privilégie la netteté ; l’ambrée extrait le toast sans empiler le caramel ; la brune évite le brûlé.",
        "ebullitionEtHoublonnage": "Amertume posée tôt, ajouts aromatiques limités. Une ébullition assez ferme développe le malt et chasse les précurseurs indésirables, sans simuler six mois de fût par une caramélisation excessive.",
        "fermentation": "Levure d’ale conduite dans le bas de sa plage ou fermentation basse selon la maison, puis fin de fermentation complète. Le but moderne est un fruit discret, non le poivre expansif d’une Saison.",
        "maturation": "Au minimum vingt et un jours après la fermentation primaire pour porter légalement la mention en France ; souvent davantage et au frais pour clarifier, réduire soufre et diacétyle, et fondre alcool et malt.",
        "profilRecherche": "Une bière du Nord forte mais souple, maltée, toastée et sèche à demi-sèche, avec fermentation propre et longue maturation."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": "Version en vigueur depuis le 1er janvier 2017",
          "reference": "Décret n° 92-307, article 2 — mention bière de garde réservée après 21 jours minimum de garde",
          "type": "source_reglementaire_primaire",
          "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000033406895",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Archives départementales du Pas-de-Calais",
          "edition": null,
          "reference": "La bière, l’or liquide du Nord-Pas-de-Calais — 2 600 brasseries, sociabilité, destructions de guerre et concentration",
          "type": "archives_publiques_regionales",
          "url": "https://www.archivespasdecalais.fr/Decouvrir/Un-document-a-l-honneur/La-biere-l-or-liquide-du-Nord-Pas-de-Calais",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brasserie Duyck",
          "edition": null,
          "reference": "Notre histoire — Zegerscappel, installation à Jenlain en 1922, garde en fût, bouteille champenoise, nom de 1968 et succès étudiant",
          "type": "source_primaire_de_producteur",
          "url": "https://brasserieduyck.com/la-brasserie/notre-histoire/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Oxford Companion to Beer",
          "edition": "2012",
          "reference": "Bière de Garde — textes de 1880 et 1905, transformation sensorielle, rôle moderne de Jenlain et diversité des fermentations",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/H4twCu8jAZ",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "24C Bière de Garde — profil contemporain blond, ambré et brun",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/24/24C/biere-de-garde/",
          "consultation": "2026-08-11"
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
        "details": "Fermentation haute expressive sur une architecture américaine ; souche, température et houblonnage sont conçus ensemble plutôt que choisis séparément."
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
      "description": "L’American-Belgo Ale traduit un accent sans faire de doublage fidèle : fermentation poivrée ou fruitée d’inspiration belge, houblons américains plus éclatants, grains locaux, barriques ou force de pale ale et de strong ale. Agrume, poire, résine et épice peuvent s’y répondre ; mal réglés, ils organisent une réunion où tout le monde parle en même temps. La catégorie raconte l’hybridation volontaire, pas le simple passeport du brasseur.",
      "histoireEtOrigines": `Le voyage commence littéralement sur un vélo. En juin 1988, Kim Jordan et Jeff Lebesch traversent la Belgique et reviennent à Fort Collins avec l’idée d’en traduire les traditions. En mars 1991, ils installent leur matériel dans le sous-sol familial ; en juin, New Belgium teste puis vend Fat Tire et Abbey, une Dubbel d’inspiration belge. Deux ans plus tard, Abbey remporte l’or au Great American Beer Festival dans la catégorie Specialty : les bières belges sont encore si rares dans la scène craft américaine que le concours ne leur a pas construit de case propre. L’American-Belgo Ale naît dans cet intervalle entre influence claire et vocabulaire absent.

Le contexte s’élargit grâce aux livres, aux importateurs et à la télévision. Le 23 août 1990, Discovery Channel diffuse aux États-Unis l’épisode « The Burgundies of Belgium » de la série Beer Hunter de Michael Jackson. Son audience donne une visibilité inhabituelle à ces bières ; son livre Great Beers of Belgium prolonge le travail. Donald Feinberg et Wendy Littlefield importent notamment Duvel, Affligem, Boon et Saison Dupont, puis ouvrent Ommegang en 1997 sur une ancienne ferme de houblon à Cooperstown avec des partenaires belges. La Belgique américaine devient un réseau de voyages, d’images, de caisses importées et de collaborations industrielles autant qu’une recette de laboratoire.

À Portland dans le Maine, Rob Tod choisit en 1995 une autre porte d’entrée. Seul employé d’Allagash, il soude en partie son système de quinze barils et lance une seule bière, Allagash White, inspirée de la witbier. Les premiers clients trouvent cette bière trouble et épicée déroutante face aux lagers claires ; elle obtient pourtant l’or à la World Beer Cup en 1998 et devient le socle de la maison. En 2004, Allagash fait vieillir sa Tripel en fûts de bourbon pour créer Curieux. Le modèle européen n’est plus seulement reproduit : il rencontre un contenant et une culture de l’expérimentation américains.

De cette génération sort une famille volontairement poreuse. Une pale ale peut recevoir une souche phénolique et des houblons d’agrumes ; une strong ale employer sucre belge, malt américain et barrique de whiskey ; une Saison intégrer des variétés du Pacifique. Toutes les bières belges brassées aux États-Unis ne deviennent pas American-Belgo : une Tripel conçue comme copie fidèle reste plus clairement une Tripel. Le nom devient utile lorsque la divergence américaine est une partie constitutive du goût.

Cette rencontre exige plus de précision qu’un simple changement de levure. Les esters d’agrume ou de fruit tropical peuvent renforcer un houblon Citra, Amarillo ou Mosaic, tandis que des phénols de girofle heurtent parfois résine et amertume. Une forte température de fermentation n’est pas automatiquement plus « belge », et une eau très sulfatée d’IPA peut rendre une levure poivrée abrasive. Le brasseur dessine donc d’abord le dialogue : quels arômes doivent s’additionner, lesquels se contraster, et lequel aura le dernier mot en finale ?

L’idée à retenir est la médaille de 1993 déposée dans une catégorie de secours. En deux décennies, des bières trop inhabituelles pour les cases américaines deviennent assez nombreuses pour former une catégorie hybride. Elles ne prolongent pas une tradition belge intacte ; elles documentent la façon dont cette tradition a voyagé, rencontré le houblon américain, le bourbon et le sous-sol d’une maison, puis appris un nouvel accent.`,
      "chapitres": [
        {
          "titre": "Une catégorie née du défaut de catégorie",
          "texte": `L’or de New Belgium Abbey en 1993 a une ironie utile : une Dubbel d’inspiration belge gagne dans « Specialty » parce que l’organisation ne possède pas encore de rubrique belge adaptée. Le classement enregistre ainsi le décalage culturel avant de décrire le liquide.

American-Belgo conserve quelque chose de cette situation. C’est une catégorie d’interface, utile lorsque les vocabulaires belge et américain sont tous deux nécessaires. Dès qu’un style parent suffit à expliquer la bière, ajouter le trait d’union ne fournit qu’un autocollant géographique.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie hybride : choisir un axe américain de base, une expression de fermentation belge et l’interaction qui justifie leur union. La largeur n’excuse pas une recette sans hiérarchie.",
        "maltsEtCereales": [
          "Pale américain ou Pilsner européen selon l’axe ; blé, avoine, Vienna ou Munich donnent ensuite texture et couleur. Le grain local peut être une divergence narrative réelle plutôt qu’un remplacement invisible.",
          "Dans une version forte, dextrose, saccharose ou sirop fermentescible augmente l’alcool avec moins de dextrines. Une American-Belgo Pale ordinaire n’en a aucune obligation."
        ],
        "houblons": [
          "Citra, Amarillo, Cascade, Mosaic ou autres houblons du Nouveau Monde peuvent mener agrume, résine ou fruit tropical. Leur sélection se fait contre le profil exact de la levure : addition aromatique recherchée, collision évitée."
        ],
        "levuresEtMicroorganismes": [
          "Souche fruitée ou POF+ sur une architecture de pale ale, IPA ou strong ale. Atténuation et tolérance à l’alcool doivent correspondre au moût ; le pays d’origine supposé de la souche ne remplace pas ces propriétés mesurables."
        ],
        "ingredientsComplementaires": [
          "Épices, sucres, bois ou whiskey selon le projet. Le fût apporte oxygène, tanins et composés du spiritueux ; il transforme la maturation, pas seulement la liste d’ingrédients."
        ],
        "profilEau": "Sulfates et chlorures réglés au rôle du houblon et au corps recherché. Une eau d’IPA très sèche peut amplifier le poivre jusqu’à l’âpreté ; une eau trop chlorurée peut épaissir une strong ale déjà riche.",
        "empatage": "Température choisie d’après le style américain de base, puis corrigée pour l’atténuation de la souche. Une levure diastatique, une souche ordinaire et une forte addition de sucre ne laissent pas la même texture à empâtage égal.",
        "ebullitionEtHoublonnage": "Amertume et ajouts tardifs construits avec le fruit fermentaire attendu. Le houblonnage à cru peut devenir central ; dans une bière forte, l’ébullition et le sucre restent orientés vers la digestibilité.",
        "fermentation": "Départ contrôlé pour éviter les alcools supérieurs, puis montée selon la souche. Des essais de fermentation et dégustations séparées de la base houblonnée évitent de découvrir trop tard que poivre, résine et pamplemousse ont formé un comité hostile.",
        "maturation": "De la garde courte d’une pale ale au vieillissement en bourbon de Curieux. Refermentation en bouteille possible, mais canette, fût ou carbonatation forcée conviennent aussi : l’hybridation ne se mesure pas au sédiment.",
        "profilRecherche": "Une bière hybride où la fermentation belge et la construction américaine sont toutes deux reconnaissables, sans que l’une rende l’autre incohérente."
      },
      "sources": [
        {
          "organisme": "New Belgium Brewing",
          "edition": null,
          "reference": "Our Story — voyage belge de 1988, brassage en sous-sol, Abbey en 1991 et médaille de 1993 sans catégorie belge dédiée",
          "type": "source_primaire_de_producteur",
          "url": "https://www.newbelgium.com/company/story/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Allagash Brewing Company",
          "edition": null,
          "reference": "Our Story — fondation par Rob Tod en 1995, Allagash White, réception initiale, médailles et Curieux en fût de bourbon",
          "type": "source_primaire_de_producteur",
          "url": "https://www.allagash.com/about/our-story/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "All About Beer / Tom Acitelli",
          "edition": null,
          "reference": "When Belgium Came to Cooperstown — Michael Jackson, importateurs, New Belgium, Ommegang et bascule américaine des années 1990",
          "type": "histoire_de_la_biere_artisanale",
          "url": "https://allaboutbeer.com/ommegangs-launch-and-belgian-beers-first-moment-in-america/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Belgo-style ale — cadre technique contemporain de la catégorie hybride",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
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
        "details": "Le fruit peut co-fermenter avec une ale, relancer une maturation ou être ajouté sans fermentation ; chaque voie change sucre, acidité, gaz et stabilité."
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
      "description": "Une Belgian Fruit Beer peut croquer comme une cerise aigre, parfumer comme une framboise fraîche ou s’arrondir en boisson douce : le nom couvre plusieurs procédés, pas un niveau de sucre. Fruit entier, jus, purée ou arôme ne produisent ni la même fermentation ni la même histoire. La bonne question n’est donc pas « est-elle rouge ? », mais « qu’est devenu le fruit entre la cuve et le verre ? »",
      "histoireEtOrigines": `Le fruit entre dans la bière belge par plusieurs portes qui ne conduisent pas à la même cave. Les Lambics aux cerises ou framboises font co-fermenter le fruit avec une bière de fermentation spontanée et possèdent leur propre généalogie. D’autres producteurs travaillent sur une ale cultivée, une Oud Bruin, une blanche ou une bière forte. Enfin, le marché moderne comprend des boissons fruitées douces auxquelles le fruit ou son arôme est ajouté sans véritable co-fermentation. Une revue scientifique de 2024 propose précisément ce continuum, des bières aigres co-fermentées jusqu’aux bières sucrées aromatisées.

À Audenarde, Liefmans donne à la branche non-lambic un lieu, des cuves et une personne. La maison rattache ses racines à 1679 et l’installation de Jacobus Liefmans aux rives de l’Escaut vers 1750. Elle situe toutefois l’ajout limité de cerises dans ses cuves de maturation seulement autour de 1900. Les agriculteurs locaux auraient apporté leur surplus de fruits et reçu de la bière en échange : récit primaire cohérent avec une économie de proximité, mais dont la page de marque ne fournit pas les registres de transaction. La prudence laisse la scène à sa juste place, entre mémoire d’entreprise et pratique vraisemblable.

Rosa Merckx transforme cette production en destin commercial. Elle entre chez Liefmans en 1946 comme secrétaire trilingue de Paul Van Gheluwe ; son palais et son sens des affaires la conduisent à intervenir sur les bières. Belgian Smaak rapporte que ses conseils les rendent moins acides, plus souples et mieux équilibrées. En 1972, après la mort de Van Gheluwe, elle prend la direction de la brasserie. Elle perfectionne les assemblages et porte la bière de cerise vers une reconnaissance internationale dans un secteur presque entièrement masculin. Sa signature figure encore sur les emballages : ici, la personne derrière le fruit n’est ni une mascotte inventée ni une religieuse médiévale, mais une dirigeante documentée du XXe siècle.

Le procédé Liefmans illustre la différence entre ajouter un parfum et faire travailler le fruit. Une base mêlant malts clairs, sombres et torréfiés fermente, mûrit avec des cerises, puis le maître brasseur assemble bières jeunes et plus âgées. L’assemblage peut relancer la fermentation et cherche une constance malgré des cuves qui évoluent différemment. La cerise apporte sucres, acides, couleur, tanins et composés aromatiques ; les levures et autres microorganismes en transforment une partie. Plus de fruit ne signifie donc pas automatiquement plus de douceur, puisqu’un sucre fermenté devient surtout alcool et gaz.

Le mot « Kriek » ajoute un piège utile : en néerlandais, il renvoie à la cerise aigre, pas exclusivement au Lambic. Une Kriek peut être fondée sur Lambic, comme dans la tradition bruxelloise, ou sur Oud Bruin, comme chez Liefmans. Pour comprendre la bouteille, le style de base et le procédé valent davantage que le fruit imprimé sur l’étiquette. Les ales fruitées non-lambic forment donc une branche distincte, même si les producteurs belges n’ont jamais été tenus de respecter les frontières des bases de données.

Au XXIe siècle, pêche, abricot, cassis, myrtille, mangue ou fruits locaux élargissent le vocabulaire. Les formes suivent l’objectif : fruit entier pour extraction lente et charge microbienne réelle, purée pour contact homogène, jus pour sucre et acidité, concentré pour intensité, arôme pour constance sans fermentation. Pasteurisation, filtration, édulcoration ou conservateurs peuvent stabiliser une version douce ; une bière refermentée exige au contraire que la densité soit réellement stable avant emballage. Le fruit n’est jamais un simple adjectif. Il modifie la microbiologie, la pression, la couleur, la matière et parfois la catégorie elle-même.`,
      "chapitres": [
        {
          "titre": "Rosa Merckx règle l’acidité et dirige la maison",
          "texte": `L’histoire publique retient parfois Rosa Merckx comme « première femme maître-brasseur » de Belgique, formulation reprise par Liefmans mais difficile à établir contre toutes les brasseries disparues. Les faits mieux documentés suffisent : embauchée en 1946, elle influence le profil des bières, prend la direction en 1972 et marque pendant plusieurs décennies les assemblages et la stratégie de la maison.

Son apport rappelle que l’innovation fruitière ne se résume pas à jeter des cerises dans une cuve. Déguster les lots, réduire une acidité trop dure, assembler jeune et vieux puis garantir un profil vendable relèvent d’un travail technique et commercial. Le fruit varie à chaque récolte ; la constance porte une signature humaine.`
        },
        {
          "titre": "Fruitée ne veut pas dire sucrée",
          "texte": `Un fruit fournit du fructose, du glucose et du saccharose que les levures peuvent consommer. Ajouté pendant une fermentation active, il peut augmenter l’alcool, le gaz et la sécheresse tout en laissant arôme, acidité et tanin. Ajouté après stabilisation, sous forme de jus ou d’arôme, il peut au contraire préserver davantage de douceur.

La couleur et le parfum ne révèlent donc pas seuls le procédé. Deux bières à la framboise peuvent occuper les extrémités opposées du spectre décrit par la recherche : l’une aigre et co-fermentée, l’autre douce et aromatisée. Les réunir sous le mot fruit est commode ; les déguster comme si elles promettaient la même chose l’est beaucoup moins.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La recette est une matrice à trois décisions : bière de base, forme du fruit et moment d’ajout. Elles déterminent ensemble fermentation, douceur, acidité et stabilité.",
        "maltsEtCereales": [
          "La base peut être blanche au froment, blonde, brune flamande ou strong ale. Son grain doit rester lisible après le fruit : blé pour une toile souple, malt sombre pour répondre à la cerise, base pâle pour exposer un fruit délicat."
        ],
        "houblons": [
          "Houblonnage souvent contenu, car amertume et acidité s’additionnent rapidement. Une base déjà amère demande un fruit doux ou très aromatique ; une culture lactique peut être freinée par un taux élevé d’iso-alpha-acides."
        ],
        "levuresEtMicroorganismes": [
          "Levure de la base, puis éventuellement cultures de maturation. Le fruit entier porte sa propre microflore : lavage, congélation, pasteurisation ou ajout aseptique changent le risque et le bouquet. Le Lambic fruité et sa fermentation spontanée constituent une autre famille."
        ],
        "ingredientsComplementaires": [
          "Fruit entier, purée, jus, concentré ou arôme avec traçabilité de la forme. Quantité, variété, maturité, noyaux, peau et traitement thermique modifient sucres, acides, tanins, pectine et volatils."
        ],
        "profilEau": "D’abord adapté à la base, puis évalué avec l’acidité du fruit. Sulfates, acidité élevée et tanins peuvent durcir la finale ; les chlorures ne doivent pas maquiller une bière mince en jus épais.",
        "empatage": "Conçu pour la base et la fermentation future du fruit. Une bière destinée à recevoir beaucoup de jus peut conserver un peu plus de structure ; une base forte et sucrée n’a pas besoin de dextrines supplémentaires.",
        "ebullitionEtHoublonnage": "Le fruit ajouté après ébullition conserve mieux ses volatils mais apporte davantage de risque microbien. Une purée chauffée est plus sûre et parfois plus cuite ; le choix technique se goûte jusque dans l’image de fruit frais ou de compote.",
        "fermentation": "Co-fermentation pour transformer les sucres du fruit, ajout tardif stabilisé pour préserver douceur, ou assemblage des deux voies. Mesures de densité répétées et calcul du sucre apporté sont indispensables avant un conditionnement sous pression.",
        "maturation": "De quelques jours de contact aromatique à plusieurs mois de macération et d’assemblage. Goûter l’extraction évite tanins excessifs et fruit fané ; filtrer, pasteuriser ou refermenter sont des choix de produit, pas de simples finitions.",
        "profilRecherche": "Une bière belge et un fruit perceptibles simultanément, intégrés plutôt qu'empilés, avec acidité, sucre et fermentation en équilibre."
      },
      "sources": [
        {
          "organisme": "Liefmans",
          "edition": null,
          "reference": "Brewery — cerises vers 1900, échange avec les agriculteurs, rôle de Rosa Merckx, fermentation, maturation et assemblage",
          "type": "source_primaire_de_producteur",
          "url": "https://www.liefmans.com/en/brewery",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Belgian Smaak / Humans of Belgian Beer",
          "edition": "2022",
          "reference": "The Sage — entrée de Rosa Merckx en 1946, influence sensorielle, direction à partir de 1972 et mémoire de Liefmans",
          "type": "portrait_historique_documente",
          "url": "https://www.belgiansmaak.com/the-sage/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Croonenberghs, Bongaerts, Bouchez, De Roos & De Vuyst",
          "edition": "2024",
          "reference": "Fruit beers, beers with or without a co-fermentation step with fruits — classification du spectre co-fermenté aigre à aromatisé doux",
          "type": "publication_scientifique_evaluee_par_les_pairs",
          "url": "https://pubmed.ncbi.nlm.nih.gov/38382326/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "29A Fruit Beer — cadre sensoriel général et exclusion de Fruit Lambic dans cette catégorie",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/29/29A/fruit-beer/",
          "consultation": "2026-08-11"
        }
      ]
    }
  ]
};

export default collection;
