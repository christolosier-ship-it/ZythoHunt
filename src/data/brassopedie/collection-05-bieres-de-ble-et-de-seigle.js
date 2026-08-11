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
      "description": "Un même grain, trois langues brassicoles : mousse et fermentation expressive en Bavière, froment cru et agrumes dans le Brabant, levure nette et houblons plus libres aux États-Unis. Le blé apporte amidon, protéines et une texture particulière ; il ne fournit tout seul ni banane, ni girofle, ni coriandre. « Bière de blé » désigne donc une famille, pas une recette en uniforme.",
      "histoireEtOrigines": `Tout commence avec une céréale qui se comporte mal en figurante. Le blé fournit de l'amidon comme l'orge, mais il possède peu d'enveloppes pour former un lit filtrant et livre au moût un assemblage différent de protéines et de polysaccharides. Selon qu'il est malté ou cru, minoritaire ou majoritaire, il modifie conversion, viscosité, mousse, trouble et sensation en bouche. Ces propriétés expliquent une parenté technique ; elles ne composent pas un style universel.

Des bières européennes ont intégré blé, avoine, seigle et orge bien avant la classification moderne. Il serait pourtant hasardeux de tracer une ligne droite depuis chaque brassin médiéval jusqu'à la Hefeweizen ou la Witbier actuelle. Les recettes, les noms, les levures et même le sens de « bière blanche » ont changé. Le blanc a longtemps pu opposer des malts séchés plus pâles aux bières brunes, tandis que le mot contemporain évoque surtout certaines traditions au froment.

En Bavière, la céréale entre dans une histoire de pouvoir. L'ordonnance de 1516 mentionne l'orge comme grain brassicole ; des privilèges permettent néanmoins aux Degenberger puis aux Schwarzenberger de produire du Weißbier. Après l'extinction des Degenberger en 1602, Maximilien Ier récupère leurs droits et construit progressivement un monopole ducal profitable. Le même blé que l'autorité disait vouloir préserver pour le pain devient ainsi une excellente source de recettes fiscales : le grain avait manifestement trouvé le chemin du Trésor. Le déclin de ce système, puis l'entreprise privée de Georg Schneider à partir de 1872, ouvrent la branche de la Weissbier moderne.

Dans le Brabant, Hoegaarden et Louvain développent d'autres bières blanches, souvent avec froment non malté et parfois avoine. Leur monde n'est pas celui de la levure bavaroise : les pratiques anciennes ont varié, jusque dans leur fermentation, avant que la version relancée par Pierre Celis dans les années 1960 ne fixe l'association moderne entre froment cru, coriandre et écorce d'orange. Aux États-Unis, Anchor puis Widmer participent dans les années 1980 à une troisième bifurcation : garder la céréale et la fraîcheur, mais employer une fermentation plus propre.

La famille se lit donc comme un atlas. Weissbier, Witbier, American Wheat, Wheatwine et Fruit Wheat partagent un ingrédient capable de transformer la cuve et le verre ; chacune raconte ensuite ce que sa région, sa levure et son époque ont fait de ce grain.`,
      "chapitres": [
        {
          "titre": "Le blé ne contient pas de banane",
          "texte": `L'isoamyl-acétate associé à la banane et le 4-vinylguaiacol rappelant le girofle sont produits pendant la fermentation par certaines souches de levure. Le second dérive notamment de l'acide férulique rendu disponible dans le moût puis transformé par une levure possédant l'équipement enzymatique nécessaire. Une American Wheat fermentée avec une souche neutre peut donc contenir beaucoup de blé sans sentir le compotier ; une Weissbier obtient son duo aromatique sans recevoir une seule épice.

La Witbier ajoute réellement coriandre et écorces d'agrumes dans de nombreuses recettes. Même céréale, trois mécanismes : caractère du grain, métabolisme de la levure et aromates ajoutés. Les confondre reviendrait à créditer la farine pour le travail du parfumeur.`
        },
        {
          "titre": "Trouble et mousse : le grain ne travaille jamais seul",
          "texte": `Les protéines du blé participent à la mousse et au trouble, mais la relation n'est pas automatique. Des travaux comparant malts et variétés montrent que qualité de l'orge, degré de modification, polyphénols, taille des protéines et procédé changent fortement le résultat. Une Kristallweizen prouve d'ailleurs qu'une bière riche en blé peut devenir brillante après clarification et filtration.

Les arabinoxylanes et, selon les céréales et procédés, les bêta-glucanes augmentent aussi la viscosité et peuvent ralentir filtration ou clarification. Le trouble d'une bière de blé est donc un équilibre construit — ou conservé —, pas une brume magique libérée dès qu'un sac de froment franchit la porte de la brasserie.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille de céréale, pas recette unique : Weissbier, Witbier, American Wheat, Weizenbock ou Wheatwine utilisent le blé selon des logiques très différentes.",
        "maltsEtCereales": [
          "Blé malté ou non malté en proportion significative selon le style ; l'orge maltée apporte notamment enveloppes, enzymes et facilité de filtration.",
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
        "empatage": "Protéines et polysaccharides non amylacés, notamment arabinoxylanes, peuvent accroître viscosité et difficulté de filtration. Les malts modernes permettent souvent un empâtage simple, mais paliers ciblés, mouture adaptée et enveloppes d'orge restent des leviers lorsque le blé domine.",
        "ebullitionEtHoublonnage": "Ébullition et amertume sont calibrées au sous-style : très faible dans Weissbier/Witbier, plus affirmées dans American Wheat et fortes dans Wheatwine.",
        "fermentation": "La fermentation est le grand aiguillage : souche, température, pression, géométrie de cuve et ensemencement modulent esters et phénols. Banane et girofle sont des produits fermentaires, pas la saveur automatique du blé.",
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
        },
        {
          "organisme": "Historisches Lexikon Bayerns",
          "edition": "2020",
          "reference": "Reinheitsgebot, 1516 — privilèges Degenberger et Schwarzenberger, monopole du Weißbier",
          "type": "encyclopedie_historique_universitaire",
          "url": "https://www.historisches-lexikon-bayerns.de/Lexikon/Reinheitsgebot%2C_1516",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Li et al. — Foods",
          "edition": "2020",
          "reference": "Non-Starch Polysaccharides in Wheat Beers and Barley Malt Beers",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7073560/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Li et al. — Foods",
          "edition": "2024",
          "reference": "Comparative Study on Protein Composition and Foam Stability in Wheat and Barley Beers",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11545182/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Langos et al. — Journal of Agricultural and Food Chemistry",
          "edition": "2016",
          "reference": "Formation of aroma-active vinyl aromatics during wheat beer brewing",
          "type": "publication_scientifique",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26800353/",
          "consultation": "2026-08-11"
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
      "description": "Le seigle déplace une bière autant par la texture que par le goût : mie sombre, céréale sèche, impression poivrée, crémeux parfois presque huileux. À petite dose il tend la charpente d’une Pale Ale ; à forte dose il peut définir un Roggenbier et transformer la filtration en négociation syndicale. Cette famille relie ces usages modernes sans leur inventer un ancêtre médiéval unique.",
      "histoireEtOrigines": `Pour comprendre les bières de seigle, mieux vaut commencer dans un champ peu accueillant. Secale cereale supporte le froid et des sols plus pauvres que nombre d'autres céréales ; cette robustesse l'a installé durablement dans l'alimentation de l'Europe centrale, orientale et septentrionale. Des sources médiévales et modernes attestent que les brasseurs utilisaient plusieurs grains, mais elles ne décrivent pas une « rye beer » homogène transmise intacte jusqu'à nos verres.

Les règles bavaroises réservant le brassage ordinaire à l'orge ont contribué à séparer le pain de seigle de la bière. L'explication agricole compte, mais elle ne suffit pas à écrire cinq siècles de continuité disparue. Les recettes, les fermentations et les noms des anciennes boissons sont trop divers ou trop mal documentés pour faire du Roggenbier contemporain leur héritier direct.

Le retour moderne suit deux chemins. En Allemagne, la Spezialbrauerei Schierling lance dans les années 1980 le Schierlinger Roggen, à forte proportion de malt de seigle et levure de Weizen ; les guides datent généralement ce produit de 1988. Dans le craft international, le grain devient plutôt un ingrédient transversal : quelques pourcents peuvent raffermir une Pale Ale, une IPA, une Saison ou une bière sombre, tandis qu'une dose beaucoup plus forte impose sa texture et sa signature céréalière.

Cette amplitude empêche toute recette unique. Le seigle peut accompagner une fermentation neutre, houblonnée ou expressive. Son point commun se trouve dans la cuve : peu d'enveloppes, beaucoup de polysaccharides capables d'augmenter la viscosité, un lit filtrant moins coopératif et une sensation de bouche reconnaissable. Ici, la céréale ne donne pas seulement une saveur ; elle impose un procédé.`,
      "chapitres": [
        {
          "titre": "Une céréale arrivée par les marges",
          "texte": `L'histoire agricole du seigle est elle-même prudente. Les données archéobotaniques le montrent d'abord mêlé à d'autres cultures avant qu'il devienne une plante cultivée à part entière dans plusieurs régions européennes. Sa tolérance au froid et aux terres modestes explique son importance alimentaire bien mieux qu'une supposée vocation naturelle à finir en pinte.

Ce détour agricole protège d'un raccourci séduisant : céréale ancienne ne signifie pas style continu. Le seigle a pu entrer dans d'innombrables brassins sans que ceux-ci ressemblent au Roggenbier codifié au XXe siècle.`
        },
        {
          "titre": "Quand la maische réclame une cuillère plus solide",
          "texte": `Le seigle contient peu d'enveloppes et ses arabinoxylanes ainsi que d'autres polysaccharides non amylacés augmentent la viscosité. Les études sur les malts dits non conventionnels observent des moûts plus difficiles à filtrer ; à forte proportion, mouture, paliers enzymatiques, épaisseur de maische et matériau filtrant deviennent décisifs.

Cette contrainte produit aussi une partie de l'intérêt sensoriel : davantage de plénitude et de crémeux. Le défi consiste à conserver ce velours sans servir une boisson qui hésite entre bière et colle à papier peint.`
        }
      ],
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
        "empatage": "À forte proportion, la richesse en arabinoxylanes et autres polysaccharides, jointe à l'absence d'enveloppes, ralentit l'écoulement. Paliers enzymatiques adaptés, mouture, maische moins compacte ou enveloppes de riz peuvent faciliter la filtration.",
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
          "organisme": "Zadeike et al. — Foods",
          "edition": "2025",
          "reference": "Rye (Secale cereale L.) revisited — agronomy, composition and food uses",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12597743/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Behre — Vegetation History and Archaeobotany",
          "edition": "1992",
          "reference": "The history of rye cultivation in Europe",
          "type": "publication_archeobotanique",
          "url": "https://ui.adsabs.harvard.edu/abs/1992VegHA...1..141B/abstract",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Blšáková et al. — Foods",
          "edition": "2021",
          "reference": "The Use of Unconventional Malts in Beer Production and Their Effect on Wort Viscosity",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8750047/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Spezialbrauerei Schierling",
          "edition": null,
          "reference": "Die Brauerei — naissance du Schierlinger Roggen dans les années 1980",
          "type": "source_producteur_historique",
          "url": "https://spezialbrauerei-schierling.de/die-brauerei/",
          "consultation": "2026-08-11"
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
      "description": "Pain frais, zeste, grain souple et houblon discret : l’American Wheat conserve le blé des cousines européennes, puis change de levure et d’époque. Claire ou voilée, ale ou parfois lager, elle privilégie une fermentation nette plutôt que le duo banane-girofle bavarois. Sa simplicité apparente fut l’une des inventions les plus efficaces des premiers brasseurs craft américains.",
      "histoireEtOrigines": `Le 17 juillet 1984, Anchor Brewing note avoir commencé un brassin de wheat beer à 7 h 30. La brasserie revendiquera cette journée comme celle de la première bière de blé craft américaine ; les sources secondaires préfèrent parfois « l'une des premières » ou « peut-être la première depuis la Prohibition ». La nuance est saine, car Schell et d'autres brasseries expérimentent aussi avec le blé au même moment. L'archive Anchor conservée au Smithsonian matérialise en tout cas cette vague pionnière.

Deux ans plus tard, l'histoire prend un tour décisif à Portland. Kurt et Rob Widmer avaient commencé par des styles allemands. Le 15 mai 1986, ils livrent au Dublin Pub le premier fût de leur Hefeweizen non filtrée. Le nom évoque la Bavière, mais la bière fermente proprement et emploie des houblons américains ; sa robe trouble devient une signature visuelle plutôt qu'un passeport aromatique pour banane et girofle. Les archives de l'Oregon State University conservent aujourd'hui dossiers de brassage, étiquettes et campagnes qui documentent cette construction commerciale.

Cette divergence crée une bière authentiquement américaine. Au lieu de copier la Weissbier, les brasseurs partent du grain : blé pour la texture, la mousse et une céréale douce ; levure ale neutre ou parfois lager ; houblons continentaux ou américains selon la maison. Le style accepte limpidité comme trouble, mais refuse que les phénols d'une souche Weizen deviennent dominants.

Dans les brewpubs des années 1980 et 1990, cette combinaison se révèle accessible aux consommateurs habitués aux lagers tout en affichant clairement son origine artisanale. Elle devient aussi une toile commode pour framboise, agrumes et autres fruits. L'American Wheat n'est donc pas une Weissbier à laquelle il manquerait quelque chose : c'est la branche qui a choisi de raconter le blé avec l'accent propre du craft américain.`,
      "chapitres": [
        {
          "titre": "Un trouble devenu manifeste",
          "texte": `Chez Widmer, l'absence de filtration a transformé une décision de procédé en signal culturel. En 1986, présenter une bière franchement voilée au comptoir tranchait avec la limpidité standardisée des lagers nationales. Le nuage disait presque tout seul qu'une petite brasserie avait laissé le produit suivre une autre route.

Cette apparence n'est cependant pas obligatoire pour toute American Wheat. La catégorie accepte les versions brillantes ; ce sont la céréale, la buvabilité et la fermentation propre qui constituent le cœur du style. Un verre trouble peut raconter une histoire, mais il ne remplace toujours pas la recette.`
        }
      ],
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
        },
        {
          "organisme": "Smithsonian Institution — Archives Center",
          "edition": "2026",
          "reference": "Anchor Brewing Company Records, NMAH.AC.1591",
          "type": "fonds_archivistique",
          "url": "https://sirismm.si.edu/EADpdfs/NMAH.AC.1591.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Oregon State University Special Collections and Archives",
          "edition": null,
          "reference": "Widmer Brothers Brewing Company Records, 1984-2013",
          "type": "fonds_archivistique",
          "url": "https://scarc.library.oregonstate.edu/findingaids/?id=3226&p=collections%2Ffindingaid",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "PDX Monthly",
          "edition": "2016",
          "reference": "Oral history with Kurt and Rob Widmer — first Hefe keg delivered May 15, 1986",
          "type": "entretien_historique",
          "url": "https://www.pdxmonthly.com/podcast/2016/07/podcast-the-widmer-brothers-talk-20-years-of-brewing-and-correct-your-pronunciation-of-hefe",
          "consultation": "2026-08-11"
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
      "description": "Sous sa brume pâle, la Witbier assemble froment non malté, orge, fermentation belge, coriandre et écorce d’orange. Elle évoque pâte fraîche, citron, poivre doux et herbes, portée par une mousse vive et une finale sèche. Cette blanche du Brabant n’est ni une Weissbier assaisonnée ni l’invention solitaire de Pierre Celis : c’est une tradition interrompue, étudiée puis remise en mouvement.",
      "histoireEtOrigines": `En 1957, la brasserie Tomsin ferme à Hoegaarden. L'événement aurait pu n'être qu'une disparition locale parmi celles provoquées par la concentration brassicole et le succès des lagers. Il coupe pourtant le dernier fil de production d'une famille de bières blanches qui avait façonné la réputation du village brabançon. Une partie du matériel de Tomsin sera sauvegardée à Bokrijk : cuves, outils et gestes quittent la production pour entrer au musée.

Ces anciennes blanches n'étaient pas une recette immobile. Les recherches sur les archives et manuels brassicoles de Hoegaarden montrent des proportions variables de froment, d'orge et parfois d'avoine, des aromates changeants et, pour certains procédés documentés, une fermentation spontanée. Elles appartenaient au vaste monde des Leuvense witte, les blanches de Louvain et de ses environs. Les présenter comme la Witbier moderne déjà achevée plusieurs siècles à l'avance effacerait précisément ce que l'histoire a de plus intéressant : les pratiques ont bougé.

Pierre Celis grandit dans ce paysage et connaît Tomsin. Dans les années 1960, devenu laitier, il entreprend de refaire une blanche à Hoegaarden. La marque situe le début de l'aventure en 1965 ; la production de la brasserie De Kluis démarre en 1966. Celis ne crée donc pas le principe d'une blanche brabançonne. Il rassemble des souvenirs, consulte d'anciens brasseurs, expérimente, puis donne une forme commercialement viable à une tradition qui venait de s'éteindre. Cette reconstruction est une invention au sens actif du terme, mais pas un acte de naissance ex nihilo.

La formule qui s'impose associe une base très pâle à une forte part de froment cru, parfois de l'avoine, une fermentation haute et des ajouts de coriandre et d'écorce d'orange. Le succès de Hoegaarden transforme ensuite cette recette relancée en modèle international. Ironie du patrimoine : une bière sauvée de l'oubli devient si reconnaissable que ses choix des années 1960 finissent souvent par passer pour une loi médiévale.

La Witbier contemporaine conserve de cette histoire une identité d'équilibre. Le froment apporte céréale et texture ; la levure produit ses propres notes fruitées ou épicées ; coriandre et agrumes sont réellement ajoutés. Aucun de ces acteurs ne doit déclamer seul. La bière paraît légère parce que carbonatation, acidité discrète et finale sèche font circuler les arômes, non parce que sa recette serait sommaire.`,
      "chapitres": [
        {
          "titre": "Celis, passeur plutôt que père fondateur",
          "texte": `Le mot « renaissance » convient mieux que celui d'invention. Entre l'arrêt de Tomsin et les premiers brassins de De Kluis, la rupture de production ne dure qu'une dizaine d'années, mais elle suffit à rendre nécessaire un travail de reconstitution. Celis choisit, ajuste et stabilise : il transforme une mémoire locale diverse en une bière reproductible, puis en succès industriel.

La distinction n'enlève rien à son rôle. Ressusciter une pratique menacée demande parfois davantage de décisions que d'hériter d'une chaîne intacte. Elle empêche seulement la biographie d'un entrepreneur d'avaler plusieurs siècles de culture brabançonne.`
        },
        {
          "titre": "Deux ateliers d'arômes dans la même cuve",
          "texte": `La coriandre et l'écorce d'orange sont des ingrédients ; les esters fruités et certains phénols viennent de la fermentation. Le brasseur règle donc deux ateliers à la fois. Une coriandre fraîche peut évoquer citron, poivre ou fleur ; surdosée ou oxydée, elle devient savonneuse. L'écorce amère soutient la fraîcheur sans devoir donner le goût d'une orange pressée.

Cette distinction sépare nettement la Witbier de la Weissbier. Toutes deux peuvent sembler fruitées et épicées, mais l'une combine levure et aromates tandis que l'autre demande surtout à sa levure de fabriquer le spectacle.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Environ 30-60 % de froment non malté dans la formulation moderne, complété par malt d'orge très pâle ; avoine ou autres grains peuvent intervenir à dose moindre."
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
        "empatage": "Le froment cru n'apporte pas ses propres enzymes et épaissit la maische : conversion, mouture et écoulement reposent sur le malt d'orge et la conduite du palier. Un trouble recherché ne dispense pas d'une filtration maîtrisée.",
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
        },
        {
          "organisme": "Bokrijk",
          "edition": null,
          "reference": "Paenhuys Diepenbeek — sauvegarde du matériel de la brasserie Tomsin",
          "type": "musee_du_patrimoine",
          "url": "https://bokrijk.be/nl/collectie/onroerend-erfgoed/gebouwen/20-paenhuys-diepenbeek/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Roel Mulder — Lost Beers",
          "edition": "2020",
          "reference": "When Hoegaarden was still spontaneously fermented",
          "type": "recherche_historique",
          "url": "https://lostbeers.com/when-hoegaarden-was-still-spontaneously-fermented/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Celis Brewery",
          "edition": null,
          "reference": "Pierre Celis — transmission et relance de la blanche de Hoegaarden",
          "type": "source_producteur_historique",
          "url": "https://www.celisbeers.com/pierre-celis",
          "consultation": "2026-08-11"
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
      "description": "La Weissbier bavaroise fait tenir un champ de blé sous une mousse presque architecturale. Sa levure transforme le moût en banane mûre, girofle, poire et pâte à pain ; sa carbonatation allège une texture crémeuse. Derrière ce verre joyeux se cache une histoire beaucoup moins innocente : privilèges nobiliaires, monopole des Wittelsbach, recettes ducales et renaissance privée menée par Georg Schneider.",
      "histoireEtOrigines": `En Bavière, la bière de blé fut longtemps une affaire de permission avant d'être une affaire de goût. L'ordonnance ducale de 1516, souvent réduite aujourd'hui à un slogan de « pureté », réserve à la bière ordinaire l'orge, le houblon et l'eau. Elle ne crée pourtant ni une interdiction allemande éternelle ni un monde sans exception. Les ducs distribuent des privilèges, et le blé circule là où le droit l'autorise.

La famille Degenberger, installée en Basse-Bavière, reçoit en 1548 le privilège de brasser et vendre du Weißbier au nord du Danube. Les pratiques et le nom viennent alors en partie du monde bohémien voisin. Quand Hans Sigmund von Degenberg meurt sans héritier masculin en 1602, le droit revient au duc Maximilien Ier. Celui-ci comprend vite la valeur du verre pâle : il reprend les installations, fonde ou développe des brasseries ducales et réserve la production à son pouvoir. Le grain que la règle protégeait pour le pain finance désormais la maison de Wittelsbach — l'exception avait trouvé un excellent comptable.

Ce monopole prospère au XVIIe siècle, mais les goûts basculent ensuite vers les bières brunes de basse fermentation. Au tournant du XIXe siècle, le Weissbier rapporte moins ; les restrictions se desserrent et l'État royal bavarois finit par abandonner une production devenue moins avantageuse. C'est dans ce creux, non au sommet du privilège, qu'apparaît l'entreprise qui reliera l'ancien système au style contemporain.

Georg Schneider Ier, brasseur du Königlich Weisses Hofbräuhaus, obtient en 1872 avec son fils Georg II le droit de produire une bière de blé pour son propre compte. Ils fondent Schneider Weisse et brassent une bière ambrée à Munich. Le geste ne ressuscite pas une recette exactement figée depuis les Degenberger : il convertit un ancien domaine princier en tradition commerciale privée. Après les guerres, déplacements et reconstructions, la Weissbier retrouve un large public au cours de la seconde moitié du XXe siècle ; sa version pâle et trouble devient alors l'image mondiale de la famille.

Le style moderne tient autant à la levure qu'au blé. Le grain construit mousse, texture et saveur céréalière. Une souche Weizen phénolique transforme l'acide férulique en 4-vinylguaiacol, perçu comme girofle, et produit notamment de l'acétate d'isoamyle, associé à la banane. Température, ensemencement, pression et forme de cuve déplacent leur équilibre. La Weissbier n'est donc pas un jus de blé aromatisé par le destin : c'est un procédé fermentaire réglé avec une précision qui se cache très bien sous sa mousse.`,
      "chapitres": [
        {
          "titre": "Le Reinheitsgebot, avec portes et clés",
          "texte": `Parler d'une interdiction absolue du blé depuis 1516 inverse la leçon historique. L'ordonnance est d'abord bavaroise, évolue dans le temps et coexiste avec des droits spéciaux. Les Degenberger, d'autres maisons privilégiées puis le duc lui-même brassent du Weißbier pendant que la règle ordinaire protège l'orge comme grain de brasserie.

La contrainte et l'exception fonctionnent ensemble : limiter l'accès au blé rend le privilège plus précieux. La Weissbier n'a pas survécu malgré le pouvoir ; pendant deux siècles, une partie de son économie a prospéré parce que le pouvoir en contrôlait les robinets.`
        },
        {
          "titre": "Banane et girofle : une affaire de métabolisme",
          "texte": `Le 4-vinylguaiacol naît lorsque la levure décarboxyle l'acide férulique rendu disponible pendant l'empâtage. L'acétate d'isoamyle résulte d'une voie fermentaire différente et rappelle la banane. Les deux molécules n'obéissent donc pas à un unique bouton « arôme Weizen ».

Un palier autour de 43-45 °C peut augmenter le précurseur du phénol, mais la souche reste indispensable. Fermenter plus chaud ne garantit pas non plus une meilleure bière : pression, géométrie, vitalité cellulaire et taux d'ensemencement interviennent. Le brasseur dirige un orchestre de variables ; le thermomètre n'est qu'un musicien.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Une majorité de malt de blé est usuelle et attendue dans la tradition allemande, complétée par Pilsner ; Munich ou Vienna modulent couleur et profondeur."
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
        "fermentation": "Souche POF+, taux d'ensemencement, oxygénation, température, pression et géométrie de cuve modulent esters et phénols. Une conduite ouverte ou faiblement pressurisée favorise souvent l'expression aromatique, mais chaque souche demande son réglage.",
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
        },
        {
          "organisme": "Historisches Lexikon Bayerns",
          "edition": "2020",
          "reference": "Reinheitsgebot, 1516 — règles céréalières et privilèges de Weißbier",
          "type": "encyclopedie_historique_universitaire",
          "url": "https://www.historisches-lexikon-bayerns.de/Lexikon/Reinheitsgebot%2C_1516",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Bayerischer Brauerbund",
          "edition": null,
          "reference": "Geschichte des Weißbieres — Degenberger, Maximilien Ier et monopole ducal",
          "type": "organisme_brassicole_regional",
          "url": "https://www.bayerisches-bier.de/bier-wissen/geschichte-des-weissbieres/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Langos et al. — Journal of Agricultural and Food Chemistry",
          "edition": "2016",
          "reference": "Formation of aroma-active vinyl aromatics during wheat beer brewing",
          "type": "publication_scientifique",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26800353/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "MEBAK",
          "edition": null,
          "reference": "4-Vinylguaiacol and 4-vinylphenol — méthode analytique",
          "type": "organisme_technique_brassicole",
          "url": "https://www.mebak.org/en/methode/b-420-20-131/4-vinylguaiacol-and-4-vinylphenol-hplc/3146",
          "consultation": "2026-08-11"
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
      "description": "La Kristallweizen laisse la fermentation bavaroise intacte puis fait disparaître son nuage. Filtration et clarification retirent levure et particules jusqu’à obtenir une robe brillante, une bouche plus nette et une effervescence qui paraît encore plus vive. Banane, girofle et blé demeurent en filigrane : le cristal n’est pas une autre famille, mais une Weissbier dont la transparence est devenue le sujet.",
      "histoireEtOrigines": `Une lettre datée du 11 juillet 1924 raconte une petite révolution visuelle. Oskar Farny écrit à son épouse Elisabeth que 115 caisses de Weizen ont été embouteillées « brillantes » de la première à la dernière. Dans les archives de la brasserie de Dürren, en Haute-Souabe, aucun témoignage plus ancien n'a été retrouvé. Farny attribue le brassin à son maître brasseur Wilhelm Zeitler et revendique depuis l'invention du Kristallweizen.

Cette antériorité demeure une revendication de producteur fondée sur son propre fonds documentaire ; elle constitue la plus ancienne preuve actuellement mise en avant, pas un recensement définitif de toutes les brasseries allemandes. En 1926, des spécialistes de Weihenstephan comparent néanmoins cette bière claire et finement pétillante au champagne. La formule « Champagner-Weizen » s'installe avant d'être abandonnée dans les années 1960, lorsque la dénomination Champagne devient juridiquement protégée.

La nouveauté ne se situe pas dans une fermentation distincte. Une Kristall suit l'univers de la Weissbier, puis clarification et filtration retirent la levure et les colloïdes qui entretiennent son trouble. Le verre gagne en éclat ; la bouche perd une partie de son épaisseur levurée et paraît plus sèche, tandis qu'une carbonatation élevée souligne la netteté. Le style est donc un enfant de la maîtrise du conditionnement : même langue fermentaire, ponctuation technologique différente.`,
      "chapitres": [
        {
          "titre": "Le filtre comme auteur",
          "texte": `Filtrer ne supprime pas les esters et phénols déjà dissous, mais retire les cellules et une partie des matières en suspension. La perception change alors plus que la liste des molécules : moins de dépôt, moins de texture levurée, davantage d'éclat et une effervescence plus incisive.

La Kristallweizen rend visible une vérité de brasserie souvent négligée : le conditionnement peut définir une sous-catégorie autant que la recette. Ici, le dernier geste ne corrige pas la bière ; il écrit sa différence.`
        }
      ],
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
        "maturation": "Maturation en cuve, clarification puis filtration jusqu'à brillance ; la carbonatation élevée conserve le caractère finement pétillant malgré le retrait de la levure.",
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
        },
        {
          "organisme": "Edelweissbrauerei Farny",
          "edition": "2024",
          "reference": "Kristall-Weizen — Wilhelm Zeitler, brassin de 1924 et attestation de Weihenstephan en 1926",
          "type": "archive_de_producteur",
          "url": "https://www.farny.de/brauerei/kristall-weizen/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Edelweissbrauerei Farny",
          "edition": "2024",
          "reference": "100 Jahre Kristall-Weizen — lettre du 11 juillet 1924",
          "type": "archive_de_producteur",
          "url": "https://www.farny.de/brauereifest/",
          "consultation": "2026-08-11"
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
      "description": "La Leichtes Weizen réduit la force sans mettre la Weissbier en sourdine : blé, mousse haute, levure bavaroise et carbonatation demeurent, avec 2,5 à 3,5 % d’alcool et une silhouette plus sèche. Son défi tient dans ce vide à combler. Retirer densité et éthanol retire aussi texture et support aromatique ; la recette doit reconstruire une présence, pas simplement servir moins de tout.",
      "histoireEtOrigines": `« Leicht » signifie léger. Le nom décrit ici une force réduite, non une filiation ancienne : la Leichtes Weizen appartient au marché allemand moderne des bières de consommation modérée, à côté des versions standard et, désormais, sans alcool. Les guides la reconnaissent parce que cette réduction transforme suffisamment l'équilibre pour mériter sa propre mesure.

Le point de départ est une densité plus basse et une formulation qui conserve une forte part de blé. À 2,5-3,5 % vol., l'éthanol porte moins les arômes et contribue moins au volume en bouche ; malt et produits fermentaires sont également moins abondants. Les recherches sur les bières à alcool réduit montrent combien cette soustraction peut exposer saveur de moût, aldéhydes ou impression aqueuse. Une Leichtes Weizen traditionnelle n'est pas nécessairement désalcoolisée — elle peut être brassée directement à faible densité —, mais elle affronte le même problème sensoriel de structure amputée.

Le brasseur dispose de plusieurs appuis : protéines et texture du blé, fermentation complète pour éviter le goût de moût, dosage retenu des esters et phénols, mousse et carbonatation élevée. Les marqueurs banane-girofle doivent rester reconnaissables sans paraître énormes dans un corps mince. La bière réussie ne donne pas l'impression d'une Hefeweizen étendue à l'eau ; elle utilise la légèreté comme architecture.`,
      "chapitres": [
        {
          "titre": "L'alcool occupait plus de place qu'on ne croyait",
          "texte": `L'éthanol ne fournit pas seulement une valeur sur l'étiquette. Il modifie volatilité des arômes, chaleur, douceur perçue et corps. Le réduire change donc les proportions de tout ce qui reste, même si la liste d'ingrédients ne bouge pas.

Dans une Weizen légère, une fermentation expressive à dose normale pourrait saturer la bouche, tandis qu'une fermentation trop neutre laisserait une eau céréalière. Le dosage est un exercice de réduction musicale : moins d'instruments, toujours une mélodie.`
        }
      ],
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
        "empatage": "La faible densité impose de préserver dextrines utiles et protéines moussantes sans laisser un moût sucré. Température de saccharification et composition du grain compensent en partie le volume perdu avec l'alcool.",
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
        },
        {
          "organisme": "Piornos et al. — Comprehensive Reviews in Food Science and Food Safety",
          "edition": "2023",
          "reference": "Alcohol-free and low-alcohol beers: aroma chemistry and sensory characteristics",
          "type": "revue_scientifique",
          "url": "https://pubmed.ncbi.nlm.nih.gov/36398756/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Blanco et al. — Critical Reviews in Food Science and Nutrition",
          "edition": "2016",
          "reference": "Low-alcohol beers: flavor compounds, defects, and improvement strategies",
          "type": "revue_scientifique",
          "url": "https://pubmed.ncbi.nlm.nih.gov/25118090/",
          "consultation": "2026-08-11"
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
      "description": "Ambrée comme son nom l’annonce, la Bernsteinfarbenes Weizen place croûte de pain, biscuit et malt toasté entre le blé et la levure bavaroise. Banane et girofle restent lisibles, mais avancent avec une lumière plus chaude. Cette catégorie moderne occupe le passage entre Weissbier pâle et Dunkelweizen ; sa couleur n’est pourtant pas une fantaisie récente, puisque la Schneider de 1872 était déjà ambrée.",
      "histoireEtOrigines": `Une couleur peut être ancienne et sa case récente. Lorsque Georg Schneider commercialise sa Weissbier en 1872, la bière est ambrée. Les malts disponibles, le goût bavarois et la continuité des bières plus foncées rendent cette teinte naturelle ; la Hefeweizen dorée qui domine aujourd'hui l'imaginaire international ne s'impose largement qu'au XXe siècle.

« Bernsteinfarbenes » signifie couleur d'ambre. Le terme de style isole désormais une zone du spectre entre la Weissbier pâle et la Dunkelweizen, mais les brasseries n'ont jamais rencontré une frontière chromatique au fond de leur cuve. La catégorie aide à juger un équilibre précis : davantage de Vienna, Munich ou blé coloré donne pain grillé, croûte et caramel léger, tandis que la fermentation conserve banane et girofle.

Sa raison d'être est donc sensorielle plutôt que généalogique. Trop pâle et peu maltée, elle retourne vers la Weissbier ; chargée de malts sombres, elle rejoint la Dunkelweizen. À l'intérieur de cet intervalle, l'ambre sert de pont et rappelle discrètement que l'original historique de Schneider n'était pas blond.`,
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
          "url": "https://schneider-weisse.de/en/node/16",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Deutscher Brauer-Bund",
          "edition": null,
          "reference": "Weizenbier — variantes claires, sombres et filtrées",
          "type": "organisme_brassicole_national",
          "url": "https://brauer-bund.de/bier/weizenbier/",
          "consultation": "2026-08-11"
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
      "description": "La Dunkelweizen superpose deux pains : mie de blé souple et croûte bavaroise plus sombre. Munich, Vienna et malts de blé colorés apportent toast, caramel léger ou cacao doux ; la levure conserve fruit et girofle sous une mousse généreuse. Sa robe brune regarde vers le passé des malts foncés, mais son palais reste celui d’une Weizen vive — café brûlé et cendre sont priés de rester dehors.",
      "histoireEtOrigines": `Avant que la bière blonde devienne une évidence industrielle, produire des malts très pâles demandait une maîtrise du touraillage qui n'allait pas de soi. Les bières bavaroises, y compris celles au blé, occupaient volontiers des teintes plus brunes. La Dunkelweizen ne naît donc pas d'une Hefeweizen moderne soudain repeinte : elle conserve la mémoire d'un monde où sombre était la couleur ordinaire.

Le progrès des malteries au XIXe siècle puis l'essor des lagers claires changent la référence visuelle. La Weissbier pâle gagne à son tour une large popularité au XXe siècle, et le mot Dunkel devient nécessaire pour distinguer la branche qui garde davantage de malt foncé. La classification moderne transforme ainsi un ancien état commun en variante nommée.

Ce déplacement historique explique sa recette. Munich, Vienna, malt de blé foncé et petites touches de malt caramel construisent croûte de pain, toast et douceur de Maillard ; ils ne cherchent pas la torréfaction d'un Porter. Sous cette couche maltée, la levure Weizen doit rester audible. Banane, fruits mûrs et girofle se fondent au pain brun, tandis qu'une forte carbonatation empêche la bouche de s'alourdir.

La Dunkelweizen mérite son nom lorsque la couleur change la conversation sans changer de famille. Si le café brûlé domine, le malt a pris le micro à la levure ; si la bière devient sucrée et lente, elle a oublié que la Weizen est aussi une boisson de soif.`,
      "chapitres": [
        {
          "titre": "Sombre ne veut pas dire torréfiée",
          "texte": `La profondeur vient surtout de malts touraillés comme Munich et Vienna, complétés au besoin par du blé foncé ou un malt colorant discret. Ces ingrédients développent pain, noix douce et mélanoïdines sans apporter le brûlé franc d'un malt noir.

Cette frontière technique est la mémoire sensorielle du style : une couleur ancienne produite avec des saveurs de fournil, non une Weissbier déguisée en Stout.`
        }
      ],
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
        "ebullitionEtHoublonnage": "Amertume faible ; la cuisson peut approfondir le malt, mais sans concentrer jusqu'au caramel brûlé.",
        "fermentation": "La souche Weizen reste centrale. Les esters et phénols peuvent paraître plus fondus sous le malt sombre, sans être absents.",
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
        },
        {
          "organisme": "Deutscher Brauer-Bund",
          "edition": null,
          "reference": "Weizenbier — Dunkles Weizen et diversité contemporaine",
          "type": "organisme_brassicole_national",
          "url": "https://brauer-bund.de/bier/weizenbier/",
          "consultation": "2026-08-11"
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
      "description": "La Weizenbock pousse la fermentation de blé jusqu’au registre de la bière forte : pain, fruits mûrs, girofle, alcool enveloppé et malt profond. Sombre, elle glisse vers prune, raisin et croûte ; pâle, vers miel et pain clair. Son acte fondateur moderne porte un nom, Aventinus, une date, 1907, et surtout une décision de Mathilde Schneider, alors à la tête de la brasserie familiale.",
      "histoireEtOrigines": `En 1905, Georg Schneider III meurt à 35 ans. Son épouse Mathilde prend la direction de la brasserie familiale dans un milieu où cette fonction appartient presque toujours aux hommes. Deux ans plus tard, elle fait élaborer une bière de blé forte destinée à rivaliser avec les Doppelbock de basse fermentation : Aventinus. Schneider la présente comme la première Weizen-Doppelbock bavaroise ; la presse régionale et les histoires brassicoles reprennent cette antériorité, mais la formulation la plus rigoureuse reste celle d'un premier exemple moderne documenté et durablement commercialisé.

Le nom honore Johannes Turmair, dit Aventinus, humaniste et chroniqueur de la Bavière. Le contenu, lui, réalise un croisement technique. La forte proportion de blé et la levure de Weissbier apportent mousse, fruit et phénols ; la densité, les malts riches et la garde viennent du monde du Bock. Mathilde Schneider ne se contente donc pas de renforcer la bière familiale : elle ouvre un espace entre deux traditions que les classifications traiteront ensuite comme un style.

L'Aventinus historique est sombre, avec pain, prune, raisin et épices fermentaires. Le Weizenbock moderne s'est élargi. Les versions pâles utilisent davantage de Pilsner et de blé clair, les sombres s'appuient sur Munich, Vienna et malts colorés ; la force peut aller du Bock au Doppelbock. La filiation ne tient plus à une couleur unique, mais à la double lecture de chaque gorgée : ampleur maltée d'une bière de garde, signature fermentaire d'une Weizen.

Cette alliance complique le brassage. Un moût dense sollicite la levure et favorise chaleur alcoolique ou sucres résiduels ; une fermentation trop sage efface banane et girofle, trop démonstrative elle transforme les fruits mûrs en confiserie. Oxygène au départ, masse de levure saine, température et temps de maturation font tenir l'édifice. Une Weizenbock réussie paraît riche par accumulation de couches, pas lourde par abandon.`,
      "chapitres": [
        {
          "titre": "Mathilde Schneider change l'échelle",
          "texte": `L'histoire d'Aventinus est souvent réduite à une marque et à une date. Elle est aussi celle d'une dirigeante qui, dans une période de deuil et de succession fragile, choisit l'innovation plutôt que la simple conservation. La bière forte élargit la gamme Schneider et donnera à la famille une référence capable de traverser guerres, déplacements et changements de goût.

Cette origine explique mieux le style qu'une formule abstraite. Le Weizenbock existe parce qu'une brasserie de blé a voulu parler avec la puissance d'un Doppelbock sans abandonner sa levure.`
        }
      ],
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
          "Souche Weizen vigoureuse et tolérante à l'alcool, capable de conserver fruit et phénols dans un moût de forte densité."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérée, adaptée à la couleur ; éviter une minéralité agressive qui amplifierait l'alcool.",
        "empatage": "Paliers ou décoction particulièrement pertinents pour construire fermentescibilité et profondeur de malt ; la haute densité exige une conversion complète.",
        "ebullitionEtHoublonnage": "Ébullition suffisamment longue pour concentrer et développer le malt sans caramel brûlé ; faible houblonnage d'équilibre.",
        "fermentation": "Levain abondant, oxygénation et gestion thermique stricte évitent fermentation incomplète et alcools supérieurs agressifs ; la pression aromatique doit rester clairement Weizen.",
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
          "url": "https://schneider-weisse.de/en/node/50",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Munich Classic — Weizenbock yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/en/continental-europe/products/munich-classic-wheat-beer-yeast/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schneider Weisse",
          "edition": null,
          "reference": "Brewery history — Mathilde Schneider and the 1907 Aventinus",
          "type": "source_producteur_historique",
          "url": "https://schneider-weisse.de/en/node/16",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Münchner Merkur",
          "edition": "2024",
          "reference": "Mathilde Schneider und die Erfindung des Aventinus",
          "type": "presse_regionale_historique",
          "url": "https://www.merkur.de/bayern/schneider-weisse-weissbier-doppelbock-aventinus-mathilde-muenchen-erfindung-92821491.html",
          "consultation": "2026-08-11"
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
      "description": "La Fruit Wheat Beer offre au fruit une scène claire, mousseuse et peu amère : framboise, pêche, agrume ou mangue peuvent colorer le verre, acidifier la finale et relancer la fermentation. Le blé doit pourtant rester perceptible dans la texture et la céréale. L’équilibre se joue après l’ajout : le fruit n’est pas un sirop posé sur la bière, mais une matière vivante qui change sucre, acide, alcool et couleur.",
      "histoireEtOrigines": `La Fruit Wheat Beer ne possède ni village fondateur ni recette ancestrale. C'est une catégorie moderne née d'une affinité pratique : les wheat beers américaines offrent une base pâle, douce, mousseuse et peu amère sur laquelle le fruit s'exprime sans lutter contre une torréfaction ou un houblonnage massif. Dans les microbrasseries des années 1980 et 1990, cette toile devient un passage accessible entre bière craft et saveurs familières.

Les archives Widmer donnent un exemple concret de cette évolution. Elles conservent les dossiers de Widberry, une bière de blé à la framboise produite dans les années 1990. Ce n'est pas la première bière de blé fruitée du monde — les traditions de fruitation sont beaucoup plus anciennes dans d'autres familles —, mais elle montre comment l'American Wheat a servi de matrice commerciale au mouvement craft.

La catégorie de concours formalise ensuite cette pratique. La Brewers Association demande en 2026 au moins 30 % de malt de blé et une présence identifiable du fruit. Elle reste volontairement large : ale ou lager, limpide ou voilée, pâle ou teintée par la pulpe. Cette souplesse n'en fait pas un tiroir pour toute bière fruitée. Une Berliner Weisse acide, un Lambic fruité, une Witbier épicée ou une bière élevée sous bois raconte d'abord une autre fermentation.

Le fruit transforme réellement le milieu. Ses sucres peuvent refermenter, ses acides déplacer le pH et la perception, ses anthocyanes ou autres polyphénols modifier couleur, astringence et stabilité aromatique. Ajouté pendant la fermentation, il subit davantage le métabolisme de la levure ; après celle-ci, il conserve souvent un parfum plus frais mais augmente le risque de reprise fermentaire. La réussite ne consiste donc pas à faire reconnaître le dessin sur l'étiquette. Elle fait tenir ensemble céréale, fruit et fermentation dans une bière complète.`,
      "chapitres": [
        {
          "titre": "Le fruit entre, la recette recommence",
          "texte": `Purée, jus et fruit entier n'apportent ni la même eau, ni les mêmes sucres, ni la même peau. Une framboise peut acidifier, colorer et ajouter des pépins astringents ; une pêche fournit un parfum délicat facilement perdu ; les agrumes répartissent leur caractère entre jus, zeste et huiles.

Le moment d'ajout décide ensuite de ce que la levure conservera ou transformera. Mesurer la densité jusqu'à stabilité et protéger le conditionnement de l'oxygène ne sont pas des détails : une bouteille qui refermente sans invitation possède un sens de la fête assez destructeur.`
        }
      ],
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
        "fermentation": "Les sucres du fruit relancent souvent Saccharomyces et peuvent augmenter l'alcool tout en asséchant la bouche. Ajout, température et durée déterminent la part d'arôme frais qui survit à cette seconde activité.",
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
        },
        {
          "organisme": "Oregon State University Special Collections and Archives",
          "edition": null,
          "reference": "Widmer Brothers Brewing Company Records — Widberry, 1995-2000",
          "type": "fonds_archivistique",
          "url": "https://scarc.library.oregonstate.edu/findingaids/?id=3226&p=collections%2Ffindingaid",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Croonenberghs et al. — Current Opinion in Food Science",
          "edition": "2024",
          "reference": "Fruit beers, beers with or without a co-fermentation step",
          "type": "revue_scientifique",
          "url": "https://www.sciencedirect.com/science/article/pii/S095816692400017X",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Moreno et al. — Fermentation",
          "edition": "2022",
          "reference": "Considerations When Brewing with Fruit Juices: A Review",
          "type": "revue_scientifique",
          "url": "https://www.mdpi.com/2311-5637/8/10/567",
          "consultation": "2026-08-11"
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
      "description": "Le Wheatwine concentre le blé jusqu’à la bière de garde : pain, miel, fruits mûrs, caramel léger et chaleur alcoolique dans une texture presque satinée. Malgré son nom, aucun raisin n’est requis. Cette invention craft américaine, généralement attribuée au Rubicon de Sacramento en 1988, reprend l’ambition d’un Barleywine mais demande au blé — et non à la levure bavaroise — d’en écrire la personnalité.",
      "histoireEtOrigines": `En 1988, le brewpub Rubicon de Sacramento brasse un Winter Wheat Wine. Les guides et récits spécialisés lui attribuent largement le premier exemple commercial du style moderne. L'histoire accessible est inhabituellement précise sur la brasserie et l'année, moins sur les pièces primaires : les archives de production publiques permettant de prouver une priorité absolue sont rares. « Généralement attribué à Rubicon » dit donc davantage vrai que « inventé sans discussion ».

L'idée répond à une question typique du jeune mouvement craft : que se passe-t-il si la bière de blé cesse d'être légère ? Les brasseurs empruntent au Barleywine sa densité élevée, sa fermentation exigeante et son aptitude à la garde, puis font du malt de blé au moins la moitié du grain. Le résultat n'est pas une Weizenbock américaine. Une levure ale relativement neutre laisse parler pain, miel et fruits d'une fermentation forte sans produire le duo bavarois banane-girofle.

Rubicon ferme en 2017, mais sa création lui survit dans les guides, festivals et productions saisonnières. La Brewers Association exige aujourd'hui au moins 50 % de malt de blé pour l'American-Style Wheat Wine Ale ; le BJCP décrit le Wheatwine comme apparenté au Barleywine, plus moelleux et moins centré sur le houblon. Cette codification transforme un produit de brewpub en langage partagé.

La fabrication explique pourquoi le style demeure rare. Une très forte proportion de blé sans enveloppes ralentit l'écoulement ; une densité élevée réclame levure abondante, oxygène initial et maîtrise thermique. Au vieillissement, alcool et malt s'intègrent, le houblon recule et des notes oxydatives peuvent devenir agréables — fruit sec ou miel — avant de tourner au papier et à la fatigue. Le temps n'est pas un certificat automatique d'élégance. Un bon Wheatwine conserve assez de fermentation et d'amertume pour porter sa masse sans devenir un sirop commémoratif.`,
      "chapitres": [
        {
          "titre": "Une antériorité créditée, pas gravée dans le marbre",
          "texte": `BJCP, ouvrages brassicoles et presse spécialisée convergent vers Rubicon et 1988. Cette convergence rend l'attribution solide à l'échelle d'un style craft, mais elle ne remplace pas un registre exhaustif de tous les brassins expérimentaux américains.

La prudence est particulièrement utile pour les catégories récentes : une recette peut précéder son nom, et un brassin domestique peut précéder le premier produit vendu. Rubicon reste le jalon commercial documenté autour duquel le Wheatwine s'est reconnu.`
        }
      ],
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
        "ebullitionEtHoublonnage": "Ébullition prolongée possible pour concentrer le moût et développer des réactions de Maillard ; le houblonnage doit équilibrer la densité sans déplacer le style vers l'American Barleywine.",
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
        },
        {
          "organisme": "The Oxford Companion to Beer — Craft Beer & Brewing",
          "edition": null,
          "reference": "Wheat wine — émergence du style dans les années 1980",
          "type": "ouvrage_brassicole_de_reference",
          "url": "https://www.beerandbrewing.com/dictionary/cL7QOAvxt3",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brew Your Own",
          "edition": null,
          "reference": "Wheatwine — attribution du premier exemple commercial moderne à Rubicon en 1988",
          "type": "presse_technique_brassicole",
          "url": "https://byo.com/articles/wheatwine/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Alcohol Professor",
          "edition": "2023",
          "reference": "Get to Know Wheatwine — Rubicon, Sacramento, 1988",
          "type": "presse_specialisee",
          "url": "https://www.alcoholprofessor.com/blog-posts/wheatwine",
          "consultation": "2026-08-11"
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
        "libelle": "Schierling, Haut-Palatinat bavarois",
        "ville": "Schierling",
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
      "description": "La Roggenbier moderne naît près de Ratisbonne en 1988, quand Schierling remplace une grande part du blé d’une Weizen sombre par du seigle. Le verre mêle pumpernickel, céréale poivrée, fruit et girofle dans une texture crémeuse. Son allure paraît rustique ; sa fabrication l’est beaucoup moins. Sans enveloppes et riche en polysaccharides visqueux, le seigle transforme la filtration en épreuve de patience très contemporaine.",
      "histoireEtOrigines": `Le Roggenbier possède deux passés, et un seul conduit directement au verre actuel. Le premier est vaste : le seigle nourrit l'Europe centrale depuis des siècles et a pu entrer dans de nombreux brassins avant que réglementations et spécialisation de l'orge ne le marginalisent. Les documents disponibles ne décrivent toutefois pas une recette continue réunissant forte proportion de seigle, levure Weizen et profil sombre jusqu'au XXe siècle.

Le second passé commence à Schierling, près de Ratisbonne. La brasserie locale situe la naissance du Schierlinger Roggen dans les années 1980 ; le BJCP et plusieurs ouvrages donnent 1988 comme lancement. La recette transpose la logique d'un Dunkles Weissbier : seigle malté à la place d'une grande part du blé, malts pâles et colorés, houblons allemands, fermentation haute avec une souche Weizen. C'est ce produit moderne, ensuite passé par Thurn und Taxis puis l'univers Paulaner, qui fournit le modèle de la catégorie actuelle.

Le classement parmi les « Historical Beer » décrit donc sa rareté et son inspiration céréalière, pas une chaîne de garde ininterrompue depuis 1516. Le Schierlinger Roggen est mieux compris comme une renaissance inventive : il prend au sérieux un grain ancien sans prétendre reproduire un brassin dont la recette aurait miraculeusement attendu dans une grange.

Dans le verre, le seigle apporte pain noir, impression poivrée et une plénitude presque huileuse ; la levure produit fruit et girofle. Dans la cuve, il manque d'enveloppes et libère des arabinoxylanes et autres polysaccharides qui épaississent le moût. À 50 % du grain ou davantage, mouture, paliers, épaisseur de maische et support filtrant deviennent décisifs. Le caractère du style résulte ainsi de la même matière qui menace son écoulement : le velours sensoriel et la mauvaise humeur de la cuve sont deux faces du même seigle.`,
      "chapitres": [
        {
          "titre": "Une renaissance sans recette fossile",
          "texte": `Qualifier la Roggenbier de médiévale est tentant parce que le seigle lui-même est ancien. Or une céréale ne transmet ni proportion, ni levure, ni empâtage. Les sources sûres décrivent le produit de Schierling en 1988 ; elles sont beaucoup moins capables de relier sa recette précise aux boissons bavaroises d'avant la réglementation moderne.

Cette absence de filiation littérale ne rend pas la bière moins historique. Elle raconte plutôt la manière dont la fin du XXe siècle a reconstruit une identité régionale à partir d'une matière délaissée.`
        },
        {
          "titre": "Le vrai embouteillage commence avant la bouteille",
          "texte": `À forte dose, le seigle peut bloquer le lit de filtration. Un palier enzymatique adapté, une mouture qui évite de réduire tout le grain en farine, une maische moins compacte et l'ajout d'enveloppes de riz offrent des voies de sortie. Les malts modernes et le procédé exact déterminent l'utilité de chaque levier ; appliquer mécaniquement un « repos bêta-glucanes » n'est pas une garantie.

La cible n'est pas d'éliminer toute viscosité. Celle-ci fait partie du plaisir de la Roggenbier. Il s'agit d'en conduire assez jusqu'au verre sans devoir d'abord extraire la maische à la truelle.`
        }
      ],
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
        "empatage": "Arabinoxylanes, autres polysaccharides et absence d'enveloppes exigent une gestion attentive. Paliers ciblés selon l'analyse du malt, mouture adaptée, maische moins compacte ou enveloppes de riz limitent les blocages sans supprimer toute texture.",
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
          "organisme": "Spezialbrauerei Schierling",
          "edition": null,
          "reference": "Die Brauerei — naissance du Schierlinger Roggen dans les années 1980",
          "type": "source_producteur_historique",
          "url": "https://spezialbrauerei-schierling.de/die-brauerei/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Oxford Companion to Beer — Craft Beer & Brewing",
          "edition": null,
          "reference": "Roggenbier — relance allemande par Spezialbrauerei Schierling",
          "type": "ouvrage_brassicole_de_reference",
          "url": "https://www.beerandbrewing.com/dictionary/vfRlzoBhRy",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Klose et al. — Fermentation",
          "edition": "2018",
          "reference": "Rye Malt for Brewing — processability and wort properties",
          "type": "publication_scientifique",
          "url": "https://www.mdpi.com/2311-5637/4/3/50",
          "consultation": "2026-08-11"
        }
      ]
    }
  ]
};

export default collection;
