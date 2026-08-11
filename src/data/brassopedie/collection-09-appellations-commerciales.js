// Source canonique de la collection : taxonomie + contenu encyclopédique.
// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 9,
    "slug": "appellations-commerciales",
    "nom": "Appellations commerciales"
  },
  "cartes": [
    {
      "id": "blonde",
      "nom": "Blonde",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "La couleur blonde ne renseigne pas sur la fermentation : lagers, ales et fermentations mixtes peuvent toutes la revendiquer."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Blonde » place d’abord la bière dans une famille de couleurs claires, du jaune paille à l’or soutenu. Le mot aide à choisir avec les yeux, mais il ne garantit ni fermentation basse, ni faible degré, ni douceur. Une lager industrielle, une ale belge forte et une pale ale houblonnée peuvent partager cette même enseigne lumineuse.",
      "histoireEtOrigines": `Dans un rayon français ou belge, « blonde » agit comme un panneau de signalisation avant d’être une catégorie brassicole. Le mot annonce une robe claire et mobilise tout un imaginaire de fraîcheur, de netteté et d’accessibilité. Cette association est assez puissante pour orienter les attentes : une étude sensorielle a montré que la couleur d’une bière modifie les saveurs anticipées et le prix jugé acceptable, même lorsque le liquide servi reste par ailleurs identique. L’étiquette commence donc à travailler avant la première gorgée.

    Le droit français ne transforme pourtant pas cette impression en recette. Le décret qui définit la bière encadre les matières premières et certaines dénominations réservées, mais ne crée aucune « bière blonde » légale. La couleur se mesure bien selon des méthodes conventionnelles, notamment celles de l’European Brewery Convention, sans que ces valeurs imposent une levure, une densité ou une amertume. Deux blondes voisines peuvent ainsi sortir de mondes techniques opposés : fermentation basse très propre, fermentation haute fruitée, bière désalcoolisée, bière forte sucrée ou pale ale sèche.

    Pourquoi le mot s’est-il imposé ? Parce qu’il traduit instantanément une apparence dans un langage ordinaire, là où « helles », « golden ale » ou « Belgian blond » demandent déjà un peu de vocabulaire. Aujourd’hui, le lecteur avisé traite « blonde » comme la première ligne d’une adresse, jamais comme l’adresse entière : il complète avec le degré alcoolique, la liste des ingrédients lorsqu’elle figure, le pays, le style revendiqué et les indications de fermentation. Le mot promet de la lumière ; il laisse le reste de la pièce à découvrir.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le seul signal commun est visuel. Les choix de céréales et de procédé ci-dessous expliquent comment une robe claire peut être obtenue, pas une formule obligatoire.",
        "maltsEtCereales": [
          "Malts pâles et céréales peu colorées facilitent la robe blonde ; leur proportion, leur statut malté et leur intensité aromatique restent libres dans le cadre de la dénomination générale bière."
        ],
        "houblons": [
          "Une blonde peut être presque neutre, amère ou intensément aromatique : la couleur ne fixe ni variété ni dose de houblon."
        ],
        "levuresEtMicroorganismes": [
          "Souches de lager, levures d’ale et cultures plus complexes sont compatibles avec le mot ; leur signature se lit dans le style ou la description, pas dans la teinte."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Une eau peu alcaline aide souvent à brasser très pâle, mais aucune composition minérale n’accompagne juridiquement l’appellation.",
        "empatage": "Le brasseur règle surtout la fermentescibilité et la limpidité voulues ; « blonde » ne désigne ni palier ni méthode.",
        "ebullitionEtHoublonnage": "Limiter les réactions qui foncent le moût préserve une robe claire ; le programme de houblon reste une décision de produit.",
        "fermentation": "Haute, basse, spontanée ou suivie d’une désalcoolisation : la fermentation doit être cherchée ailleurs sur l’étiquette ou dans la fiche technique.",
        "maturation": "Une garde froide clarifie certaines blondes ; d’autres restent troubles, refermentées ou servies jeunes.",
        "profilRecherche": "Une robe jaune à dorée cohérente avec le produit annoncé, sans déduire automatiquement légèreté, douceur ou fermentation basse."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "European Brewery Convention",
          "edition": null,
          "reference": "Analytica-EBC — méthodes d’analyse de la couleur de la bière",
          "type": "source_technique",
          "url": "https://europeanbreweryconvention.eu/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Frontiers in Psychology",
          "edition": "2017 — doi:10.3389/fpsyg.2017.02205",
          "reference": "The Influence of Color on Consumer’s Experience of Beer",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5742240/",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "La couleur goûte avant nous",
          "texte": "La teinte ne crée pas mécaniquement une saveur, mais elle prépare le cerveau à en attendre certaines. Voilà pourquoi une blonde paraît souvent spontanément plus légère qu’une brune, même lorsque le degré, le sucre résiduel ou l’amertume racontent une autre histoire."
        }
      ]
    },
    {
      "id": "blanche",
      "nom": "Blanche",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "Le nom français peut couvrir une Witbier, une Weissbier ou une création claire et trouble ; les fermentations et les souches diffèrent donc fortement."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Blanche » est un mot français trompeusement simple. Il évoque souvent une bière pâle, trouble et brassée avec du blé, mais il peut traduire des traditions distinctes : Witbier belge épicée, Weissbier allemande fruitée, recette aromatisée ou création simplement très claire. Il faut lire le style et les ingrédients avant de commander des clous de girofle imaginaires.",
      "histoireEtOrigines": `Une bière dite « blanche » n’est presque jamais blanche. Elle est jaune très pâle, opalescente ou coiffée d’une mousse qui a probablement beaucoup aidé le mot à voyager. En français, l’appellation réunit surtout deux familles dont les noms locaux partagent une idée de blancheur : la Witbier belge et la Weissbier allemande. Elles utilisent volontiers du blé, mais ne racontent pas la même production. La première associe traditionnellement blé non malté, fermentation haute et parfois épices ; la seconde repose sur une forte part de malt de blé et sur une levure dont les esters et phénols rappellent banane et clou de girofle.

    Le commerce a ensuite élargi le parapluie. Une blanche peut être filtrée ou trouble, citronnée par la fermentation ou aromatisée, peu alcoolisée ou forte, pasteurisée ou refermentée. Le décret français sur la bière ne réserve pas le mot « blanche » et n’impose aucune proportion de froment. L’idée selon laquelle toute blanche serait nécessairement une bière de blé conforme à une recette belge est donc une habitude de marché, pas une règle juridique.

    Au-delà de « contient-elle du blé ? », il faut demander quel monde le producteur invoque. Un nom allemand comme Hefeweizen signale une autre généalogie qu’une Wit belge ; la présence de coriandre ou d’écorce d’agrume relève encore d’un autre indice ; une mention « aromatisée » change la nature de la promesse. Ici, la couleur ouvre le dossier, tandis que la céréale, la levure et l’étiquetage le résolvent.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le mot suggère pâleur et souvent trouble ou blé ; il faut ensuite identifier la tradition réellement revendiquée.",
        "maltsEtCereales": [
          "Blé non malté fréquent en Witbier, malt de blé dominant en Weissbier, base plus libre dans les usages commerciaux : aucune proportion n’est attachée au seul mot français."
        ],
        "houblons": [
          "Le houblon reste généralement discret dans les archétypes belge et allemand, mais une blanche moderne peut en faire un premier rôle."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge épicée et levure de Weizen aux marqueurs banane-girofle ne sont pas interchangeables ; certaines versions industrielles recherchent au contraire une expression très neutre."
        ],
        "ingredientsComplementaires": [
          "Coriandre et écorces d’agrumes sont classiques dans certaines Witbiers, jamais obligatoires pour toute bière vendue comme blanche."
        ],
        "profilEau": "Une faible alcalinité convient à la pâleur ; les minéraux sont ensuite ajustés à l’acidité, au houblon et à la texture visés.",
        "empatage": "Le blé, surtout non malté, peut imposer paliers, enzymes ou précautions de filtration ; une simple couleur claire ne les exige pas.",
        "ebullitionEtHoublonnage": "L’ébullition gère protéines et épices éventuelles ; l’amertume ne doit pas être extrapolée du mot.",
        "fermentation": "La signature de levure distingue mieux les traditions que la robe : fruitée-épicée, banane-girofle, neutre ou même acidulée selon le produit.",
        "maturation": "Le trouble peut être conservé volontairement, remis en suspension par la levure ou retiré par filtration.",
        "profilRecherche": "Identifier derrière « blanche » la céréale, la souche et l’éventuel aromatisant, plutôt que supposer une Witbier universelle."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Journal of Food Science and Technology",
          "edition": null,
          "reference": "How to objectively determine the color of beer?",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7026378/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Witbier et Weissbier — deux familles de bière de blé distinctes",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/24/24A/witbier/",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Deux blancheurs, deux accents",
          "texte": "Wit signifie blanc en néerlandais, Weiss en allemand. Leur parenté linguistique a facilité le rangement sous un même mot français, mais elle n’abolit ni les différences de céréales ni celles de levure. Une traduction commode n’est pas une recette commune."
        }
      ]
    },
    {
      "id": "ambree",
      "nom": "Ambrée",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "L’ambré décrit une teinte obtenue par les malts ou d’autres choix de formulation ; il ne départage pas fermentation haute et basse."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Ambrée » promet une robe allant de l’or profond au cuivre, souvent accompagnée d’attentes de biscuit, de pain grillé ou de caramel. Ces saveurs sont fréquentes, pas contractuelles : lager viennoise, ale belge, amber ale houblonnée et bière de Noël peuvent porter le même adjectif. La couleur donne une ambiance ; la recette garde les clés.",
      "histoireEtOrigines": `L’ambre est d’abord une comparaison de matière : une résine fossile, translucide, entre miel et cuivre. Appliqué à la bière, le mot évite le vocabulaire technique et transforme une plage de couleur en image immédiatement familière. Dans les rayons, il occupe aussi une position stratégique entre la blonde jugée légère et la brune supposée intense. Cette place intermédiaire lui a permis d’accueillir des produits qui n’ont en commun ni pays, ni fermentation, ni force.

    La couleur provient souvent de malts plus touraillés, de malts de type Vienna ou Munich, de petites quantités de malts caramel ou de réactions survenues pendant la fabrication. Ces choix peuvent effectivement apporter croûte de pain, biscuit et caramel. Ils ne le font cependant ni avec la même intensité ni de façon exclusive : une recette très sèche et houblonnée peut être ambrée, tandis qu’une bière pâle peut développer des notes maltées profondes. Les méthodes EBC mesurent la teinte du liquide ; elles ne convertissent pas le nombre obtenu en arôme.

    En France, « ambrée » n’est pas une dénomination réservée par le décret bière. C’est une information descriptive soumise aux règles générales de loyauté, pas un cahier des charges. Pour savoir ce que l’étiquette promet réellement, il faut donc regarder le degré, le style, la fermentation, les ingrédients mis en avant et parfois la date saisonnière. L’ambre cadre la photographie, mais il ne dit pas encore qui se tient dedans.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La teinte cuivre est le fil commun ; les techniques qui la produisent peuvent aussi modeler le goût, sans être imposées.",
        "maltsEtCereales": [
          "Malts Vienna, Munich, biscuit ou caramel sont des chemins fréquents vers l’ambré ; leur dosage va d’un accent discret à une charpente maltée."
        ],
        "houblons": [
          "L’étiquette n’arbitre pas entre équilibre malté et profil très houblonné : les deux existent."
        ],
        "levuresEtMicroorganismes": [
          "Lagers nettes, ales fruitées et fermentations belges expressives peuvent présenter la même couleur cuivre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "L’alcalinité est adaptée à la charge de malts colorés ; chlorures et sulfates suivent l’équilibre sensoriel recherché.",
        "empatage": "Le régime d’empâtage détermine corps et fermentescibilité indépendamment de la qualification ambrée.",
        "ebullitionEtHoublonnage": "Une ébullition soutenue peut approfondir la couleur ; le houblonnage varie du soutien discret à l’aromatique moderne.",
        "fermentation": "Le terme ne fixe aucune famille de levure et ne permet pas de prédire la finale sèche ou ronde.",
        "maturation": "La garde peut polir les notes maltées, mais n’est pas constitutive du mot.",
        "profilRecherche": "Une robe ambrée lisible, puis un équilibre à découvrir : biscuit, caramel, fruit, amertume ou combinaison de ces axes."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "European Brewery Convention",
          "edition": null,
          "reference": "Analytica-EBC — méthodes d’analyse de la couleur de la bière",
          "type": "source_technique",
          "url": "https://europeanbreweryconvention.eu/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Frontiers in Psychology",
          "edition": "2017 — doi:10.3389/fpsyg.2017.02205",
          "reference": "The Influence of Color on Consumer’s Experience of Beer",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5742240/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Beer Style Guidelines — amber beer families",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": []
    },
    {
      "id": "rousse",
      "nom": "Rousse",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "Le terme rassemble des ales et des lagers cuivrées ; sa nuance chromatique ne constitue pas une famille de fermentation."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Rousse » personnifie une teinte cuivrée aux reflets rouges, souvent associée au biscuit, au caramel léger ou à une pointe grillée. Elle peut toutefois désigner une Irish Red Ale, une ale belge, une lager rousse ou une invention locale. Plus narrative qu’une valeur EBC, la rousse sait présenter sa couleur sans montrer son passeport.",
      "histoireEtOrigines": `« Rousse » fait partie de ces appellations qui décrivent moins un échantillon de laboratoire qu’un personnage. Le mot convoque des reflets de cuivre et d’acajou clair, et le commerce francophone l’utilise volontiers pour donner à une bière intermédiaire une identité plus vive que « ambrée ». Aucune frontière instrumentale universelle ne sépare pourtant les deux termes. Une même teinte pourrait être qualifiée d’amber, red, rousse ou cuivrée selon le pays et la stratégie de marque.

    L’association gustative avec le caramel et le toast n’est pas sortie de nulle part. Les malts qui font apparaître ces tons peuvent également produire des arômes de biscuit, de croûte ou de sucre cuit. Mais la causalité n’est pas automatique : la quantité de malt coloré, son procédé de fabrication, la fermentation et le houblonnage changent le résultat. L’Irish Red Ale est devenue un repère international utile, sans détenir le monopole du mot français. Une « rousse » n’est donc pas juridiquement irlandaise et ne suit pas nécessairement son équilibre malté discret.

    Le décret français n’en fait pas une dénomination réglementée. Le consommateur peut retenir deux informations raisonnables : le producteur annonce une robe dans la zone cuivre-rouge et souhaite probablement la distinguer de ses blondes et brunes. Pour le reste, le degré, l’amertume, la fermentation et l’origine reprennent la parole. Dans la grande famille des couleurs d’étiquette, la rousse est une nuance culturelle davantage qu’une case graduée.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "L’appellation vise des reflets roux ou rouges ; elle n’impose pas la construction d’une Irish Red Ale.",
        "maltsEtCereales": [
          "Malts de base toastés, caramel clair et très petites touches de malt torréfié peuvent construire le cuivre et ses reflets rubis."
        ],
        "houblons": [
          "Le houblon peut rester en retrait dans une rousse maltée ou devenir central dans une interprétation moderne."
        ],
        "levuresEtMicroorganismes": [
          "Les versions irlandaises privilégient souvent une ale assez propre ; les usages belge, lager ou créatif élargissent fortement ce choix."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Une minéralité modérée soutient le malt ; le réglage dépend surtout de la sécheresse et de l’amertume voulues.",
        "empatage": "Le corps peut rester léger malgré la couleur : une température élevée n’est pas la contrepartie obligatoire d’une robe rousse.",
        "ebullitionEtHoublonnage": "La couleur se construit avec précision pour éviter qu’un accent rouge ne devienne brûlé ; le houblonnage suit ensuite le produit.",
        "fermentation": "Haute ou basse, elle peut être neutre ou expressive ; la teinte n’en fournit pas l’empreinte.",
        "maturation": "Une courte garde fond parfois le toast et le caramel, mais aucune durée n’est attachée au nom.",
        "profilRecherche": "Des reflets cuivre à rubis et un équilibre annoncé honnêtement, sans réduire toutes les rousses au modèle irlandais."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Journal of Food Science and Technology",
          "edition": null,
          "reference": "How to objectively determine the color of beer?",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7026378/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Frontiers in Psychology",
          "edition": "2017 — doi:10.3389/fpsyg.2017.02205",
          "reference": "The Influence of Color on Consumer’s Experience of Beer",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5742240/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Irish Red Ale — un style possible derrière l’appellation rousse",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/15/15A/irish-red-ale/",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": []
    },
    {
      "id": "brune",
      "nom": "Brune",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "La robe brune traverse ales, lagers et bières mixtes ; le terme ne choisit ni levure ni profil fermentaire."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Brune » couvre un continent de bières sombres : douce ou sèche, légère ou massive, nette ou acidulée. Dubbel, brown ale, dunkel, porter et certaines bières d’abbaye peuvent toutes entrer dans le cadre visuel. L’étiquette garantit surtout que le verre ne sera pas blond ; café, caramel et force restent à vérifier séparément.",
      "histoireEtOrigines": `Avant que les classifications de styles ne circulent largement, opposer blonde et brune suffisait souvent à organiser une gamme. Ce partage élémentaire reste très efficace : il parle à tous les publics et supporte les traditions les plus diverses. Le problème apparaît lorsque la couleur est prise pour un goût. « Brune » peut annoncer le caramel doux d’une bière belge, le pain noir d’une dunkel, la noisette d’une brown ale, l’acidité d’une vieille brune flamande ou la torréfaction d’un porter.

    Ces divergences viennent de techniques réellement différentes. Les malts touraillés et caramel développent couleur et arômes sans nécessairement brûler ; les malts torréfiés apportent café ou cacao ; certaines recettes utilisent des sucres foncés ; la fermentation peut ajouter fruit, propreté lager ou acidité. La mesure EBC décrit l’absorption de lumière par l’échantillon, pas l’origine de cette couleur. Deux bières de valeur voisine peuvent ainsi sentir l’une la croûte de pain et l’autre le café froid.

    La législation française ne fixe pas de recette « brune ». Le mot constitue une description commerciale, à compléter par des éléments plus discriminants : style précis, degré, présence de fruit, qualification d’abbaye, fermentation ou ingrédients. Il faut surtout résister à deux raccourcis : sombre ne veut pas dire forte, et brune ne veut pas dire sucrée. L’étiquette a éteint la lumière ; elle n’a pas encore raconté ce qui se passe dans la cave.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La robe foncée est commune ; le chemin malté, torréfié, sucré ou fermentaire qui y mène doit être identifié produit par produit.",
        "maltsEtCereales": [
          "Munich, caramel, malts bruns, grains torréfiés ou combinaisons de ces familles peuvent construire la couleur et des arômes très différents."
        ],
        "houblons": [
          "L’amertume va du simple contrepoids au rôle dominant ; une brune n’est pas nécessairement douce."
        ],
        "levuresEtMicroorganismes": [
          "Levure belge fruitée, ale britannique, souche de lager ou culture acidifiante : la robe accepte plusieurs mondes microbiologiques."
        ],
        "ingredientsComplementaires": [
          "Sucres foncés, fruits ou épices existent dans certaines recettes, sans appartenir à la définition du mot."
        ],
        "profilEau": "L’alcalinité peut tamponner l’acidité des grains très torréfiés ; elle doit rester proportionnée à leur quantité réelle.",
        "empatage": "Le corps est réglé indépendamment de la teinte : une brune peut viser une forte atténuation et une finale sèche.",
        "ebullitionEtHoublonnage": "Ébullition, sucres et malts participent différemment aux notes de cuisson ; le houblon suit l’équilibre annoncé.",
        "fermentation": "Le profil peut être net, fruité, sauvage ou acide. Aucun de ces caractères ne découle du seul adjectif.",
        "maturation": "Certaines brunes gagnent à vieillir, d’autres sont conçues pour la fraîcheur ; la couleur ne fixe pas leur calendrier.",
        "profilRecherche": "Lire la brune comme une teinte, puis chercher le vrai moteur sensoriel : malt, torréfaction, fermentation, fruit ou vieillissement."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "European Brewery Convention",
          "edition": null,
          "reference": "Analytica-EBC — méthodes d’analyse de la couleur de la bière",
          "type": "source_technique",
          "url": "https://europeanbreweryconvention.eu/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Frontiers in Psychology",
          "edition": "2017 — doi:10.3389/fpsyg.2017.02205",
          "reference": "The Influence of Color on Consumer’s Experience of Beer",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5742240/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "British Brown Ale — un exemple parmi plusieurs familles brunes",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/13B/british-brown-ale/",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Sombre n’est pas lourd",
          "texte": "Une faible quantité de malt très colorant suffit à noircir un moût sans lui donner beaucoup de sucre ni d’alcool. À l’inverse, une grande bière forte peut rester dorée. La couleur et la masse du produit évoluent sur deux axes distincts."
        }
      ]
    },
    {
      "id": "noire",
      "nom": "Noire",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "Stout, porter, schwarzbier et black IPA démontrent qu’une robe noire peut accompagner des fermentations et des équilibres opposés."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Noire » pousse la promesse visuelle jusqu’à l’opacité, sans imposer la torréfaction massive que l’œil imagine. Une stout peut être crémeuse, une schwarzbier nette et légère, une black IPA sèche et houblonnée. Le mot décrit la lumière qui ne traverse presque plus le verre ; il reste beaucoup moins bavard sur le goût.",
      "histoireEtOrigines": `Noire semble être la plus catégorique des couleurs : au-delà, il n’y aurait plus rien à préciser. Pourtant, les brasseurs obtiennent cette apparence par des voies très différentes. Des malts fortement torréfiés donnent café, cacao et amertume brûlée ; des grains décortiqués ou des malts colorants peuvent assombrir avec moins d’âpreté ; une petite fraction très sombre suffit parfois à transformer une base autrement légère. L’œil additionne la couleur, pas les kilogrammes de matière.

    Cette plasticité explique la cohabitation de produits presque antagonistes. Porter et stout mettent souvent la torréfaction au centre. Schwarzbier conserve la netteté, la buvabilité et la fermentation basse d’une lager. Black IPA cherche le contraste entre robe sombre et houblon aromatique. Aucune méthode EBC, si précise soit-elle pour quantifier la couleur, ne permet de choisir entre ces scénarios. Une bière peut même paraître noire dans un grand verre et révéler des bords rubis face à une lampe.

    « Noire » ne figure pas parmi les dénominations réservées du décret français. Elle vaut comme description honnête d’apparence, non comme garantie de style, de force ou de café. Le consommateur qui redoute les bières lourdes ou qui recherche une stout doit donc lire au-delà du pigment. Dans cette appellation, la surprise la plus utile tient à une séparation simple : l’obscurité est une propriété optique, la lourdeur une propriété de composition et de fermentation. Elles se fréquentent, mais n’ont signé aucun contrat.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La couleur très sombre peut être un goût central ou un effet soigneusement isolé de la torréfaction.",
        "maltsEtCereales": [
          "Orge torréfiée, malts noirs, chocolat ou variétés décortiquées apportent des intensités différentes de café, cacao, sécheresse et couleur."
        ],
        "houblons": [
          "Discret dans certaines lagers noires, structurant dans un stout, explosif dans une black IPA : aucun niveau n’est inhérent au mot."
        ],
        "levuresEtMicroorganismes": [
          "Ales, lagers et fermentations mixtes peuvent devenir noires sans perdre leur identité fermentaire."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Le pH et l’alcalinité sont réglés selon la quantité et le moment d’ajout des grains torréfiés pour éviter acidité dure ou extraction cendreuse.",
        "empatage": "L’ajout tardif de grains noirs ou l’emploi d’extraits froids peut dissocier davantage couleur et âpreté ; ce sont des options, pas une règle d’appellation.",
        "ebullitionEtHoublonnage": "Le programme décide si la torréfaction dialogue avec une amertume de houblon ou si elle reste en arrière-plan.",
        "fermentation": "Le choix de souche construit fruit, netteté ou sécheresse sans être visible dans la robe.",
        "maturation": "La garde peut adoucir des angles torréfiés, tandis qu’une lager noire demande surtout une maturation propre et froide.",
        "profilRecherche": "Une apparence noire cohérente avec le produit, sans supposer automatiquement alcool élevé, sucre ou goût de café."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Journal of Food Science and Technology",
          "edition": null,
          "reference": "How to objectively determine the color of beer?",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7026378/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Frontiers in Psychology",
          "edition": "2017 — doi:10.3389/fpsyg.2017.02205",
          "reference": "The Influence of Color on Consumer’s Experience of Beer",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5742240/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Schwarzbier — lager noire sèche et légère",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/8/8B/schwarzbier/",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": []
    },
    {
      "id": "rouge",
      "nom": "Rouge",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "Le rouge peut venir du malt, du fruit ou de la formulation ; les fermentations vont de l’ale nette aux cultures mixtes acidifiantes."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Rouge » peut annoncer des reflets rubis de malt, une bière aux fruits, une ale flamande acide ou une simple couleur de gamme. Ces chemins ne sont pas équivalents : l’un relève du grain, l’autre d’un ingrédient, un troisième de la fermentation. Sur l’étiquette, le rouge est un signal puissant ; dans la cuve, il faut encore trouver sa source.",
      "histoireEtOrigines": `Le rouge est la couleur commerciale la plus susceptible de raconter plusieurs histoires en même temps. Dans une red ale, il naît souvent d’un réglage minutieux des malts. Dans une bière à la cerise ou à la framboise, pigments et arômes viennent du fruit. Dans une Flanders Red Ale, le nom renvoie aussi à une tradition de fermentation mixte, d’acidité et de maturation. Ailleurs, l’adjectif peut seulement harmoniser une bouteille avec une identité de marque.

    Cette diversité rend le raccourci particulièrement risqué. Une bière rouge n’est pas forcément fruitée ; une bière fruitée n’a pas forcément reçu le fruit qu’elle représente, car elle peut relever de l’aromatisation ; une bière acide n’est pas forcément une rouge flamande. Le droit français ne réserve pas la couleur, mais il distingue précisément « bière à… » et « bière aromatisée à… ». Cette seconde ligne de l’étiquette est souvent plus informative que la première.

    La mesure colorimétrique peut établir que le liquide se situe dans une zone rousse ou rubis, sans expliquer la matière responsable. Pour lire le produit, il faut croiser la couleur avec la dénomination complète, les ingrédients, le style et la mention d’un éventuel fruit. Une mousse rosée ou un dessin de cerise ne remplace pas cette lecture. Le mot « rouge » attire l’œil avec une efficacité redoutable ; son véritable mérite encyclopédique est de forcer une question : rouge de quoi ?`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La singularité technique consiste à identifier l’origine réelle du rouge : malts, fruit, autre ingrédient ou combinaison.",
        "maltsEtCereales": [
          "Des malts caramel et de très faibles doses de grains torréfiés peuvent créer des reflets rubis sans apporter de fruit."
        ],
        "houblons": [
          "L’amertume est faible dans certaines rouges acides, équilibrée dans les red ales ou moderne et aromatique dans des créations houblonnées."
        ],
        "levuresEtMicroorganismes": [
          "Levure d’ale propre, cultures mixtes et bactéries acidifiantes correspondent à des produits très différents sous la même couleur."
        ],
        "ingredientsComplementaires": [
          "Cerise, framboise, hibiscus ou autres matières colorantes peuvent intervenir ; leur présence et leur forme doivent être vérifiées dans la dénomination et l’information produit."
        ],
        "profilEau": "Le profil minéral suit l’acidité et l’amertume réelles, non le pigment.",
        "empatage": "Un fruit ajouté plus tard n’impose pas le même moût qu’une red ale tout malt ; la fermentescibilité anticipe ses sucres éventuels.",
        "ebullitionEtHoublonnage": "Les fruits délicats passent volontiers après la phase la plus chaude pour préserver leurs arômes ; une base maltée rouge se traite autrement.",
        "fermentation": "Le producteur doit gérer les sucres du fruit, l’acidification éventuelle et la stabilité microbiologique selon le chemin choisi.",
        "maturation": "Bois et vieillissement sont centraux dans certaines rouges flamandes, inutiles dans beaucoup de rouges commerciales.",
        "profilRecherche": "Comprendre ce qui colore et ce qui aromatise, plutôt que confondre rubis, fruit et acidité."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Frontiers in Psychology",
          "edition": "2017 — doi:10.3389/fpsyg.2017.02205",
          "reference": "The Influence of Color on Consumer’s Experience of Beer",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5742240/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Flanders Red Ale — tradition rouge à fermentation mixte",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/23/23B/flanders-red-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Trois chemins vers le rubis",
          "texte": "Le malt colore sans fruit, le fruit colore tout en ajoutant sucres et acides, la fermentation mixte construit surtout un profil aromatique et acide. Une étiquette précise peut combiner ces chemins ; elle ne devrait pas les rendre interchangeables."
        }
      ]
    },
    {
      "id": "biere-dabbaye",
      "nom": "Bière d’abbaye",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [
        "Abbey Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "L’image monastique ne prescrit aucune fermentation ; les produits peuvent être brassés sous licence par des entreprises aux procédés variés."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Bière d’abbaye » met une histoire monastique sur l’étiquette, mais la force du lien varie considérablement. Certaines marques sont associées à une abbaye existante ou disparue et versent des redevances ; d’autres empruntent surtout un décor de cloître. Contrairement à « trappiste », le terme seul n’équivaut pas au label Authentic Trappist Product et ne promet aucune recette.",
      "histoireEtOrigines": `Le succès des bières trappistes a donné à l’imaginaire monastique une valeur commerciale qui dépasse largement les murs des monastères. Noms latins, silhouettes d’abbaye, vitraux et moines calligraphiés installent immédiatement ancienneté, patience et désintéressement. L’ethnologue Isabelle Jonveaux a décrit ce transfert de prestige comme une économie charismatique : plus l’image monastique circule, plus il devient nécessaire de demander quel lien concret subsiste derrière elle.

    En Belgique, le label collectif « Bière belge d’Abbaye reconnue » a cherché à distinguer certaines marques possédant un rapport historique et contractuel avec une abbaye. Ce dispositif privé n’est toutefois ni une appellation européenne d’origine ni l’équivalent du logo Authentic Trappist Product. Hors de ce cadre, « bière d’abbaye » demeure une désignation commerciale largement utilisée. L’abbaye peut encore exister, avoir disparu, autoriser la marque, recevoir des redevances ou n’être qu’une référence graphique ; le mot seul ne permet pas de choisir entre ces situations.

    Il ne fixe pas davantage le liquide. Blonde forte, dubbel, tripel, brune douce et bière de table peuvent partager cette mise en scène. Pour lire l’étiquette, il faut donc séparer trois étages : l’identité de la brasserie qui fabrique, la nature documentée du lien avec l’institution religieuse, puis le style réel de la bière. Une date ancienne peut appartenir à l’abbaye sans être celle de la recette ni de la marque. Le clocher peut raconter une histoire légitime ; il n’est pas, à lui seul, un certificat de brassage.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "L’appellation décrit un lien institutionnel ou un positionnement de marque, non une recette commune.",
        "maltsEtCereales": [
          "La composition suit le produit précis : blonde, dubbel, tripel, brune ou autre. Aucun malt n’est consacré par le mot."
        ],
        "houblons": [
          "L’amertume et les variétés relèvent de chaque bière sous la marque d’abbaye."
        ],
        "levuresEtMicroorganismes": [
          "Des souches expressives belges sont fréquentes, mais l’étiquette monastique ne les rend ni obligatoires ni exclusives."
        ],
        "ingredientsComplementaires": [
          "Sucres, épices et refermentation éventuelle doivent être attribués à la recette documentée, pas à l’iconographie."
        ],
        "profilEau": "Le lieu représenté sur l’étiquette ne prouve pas que son eau alimente la brasserie sous licence.",
        "empatage": "La méthode suit la bière produite et le site industriel réel.",
        "ebullitionEtHoublonnage": "Aucune conduite de houblonnage n’est définie par le lien d’abbaye.",
        "fermentation": "Le producteur, son équipement et sa souche déterminent le procédé ; ils doivent être recherchés séparément du propriétaire de la marque.",
        "maturation": "Cave figurée et longue garde ne sont pas synonymes. Seule la documentation du produit permet de les relier.",
        "profilRecherche": "Identifier qui brasse, quel accord relie la marque à l’abbaye et quel style se trouve réellement dans la bouteille."
      },
      "sources": [
        {
          "organisme": "Isabelle Jonveaux — Ethnologie française",
          "edition": "2011 — doi:10.3917/ethn.111.0117",
          "reference": "Bière belge et image monastique. Un exemple d’économie charismatique",
          "type": "publication_scientifique",
          "url": "https://shs.cairn.info/revue-ethnologie-francaise-2011-1-page-117",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Zythos",
          "edition": null,
          "reference": "Trappist or abbey beer? — distinctions entre usages belges",
          "type": "source_professionnelle",
          "url": "https://www.zythos.be/trappist-of-abdijbier/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Association Internationale Trappiste",
          "edition": null,
          "reference": "Questions fréquentes — marque Trappist et label ATP",
          "type": "organisme_certificateur",
          "url": "https://www.trappist.be/en/faqs/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Le monastère, la licence et l’image",
          "texte": "Une abbaye peut contrôler une marque sans posséder la brasserie, concéder une recette ou seulement autoriser un nom. Ces montages économiques ne sont pas nécessairement trompeurs, mais ils doivent être distingués de la production sous contrôle d’une communauté trappiste."
        },
        {
          "titre": "Ce que le mot ne bénit pas",
          "texte": "Ni fermentation haute, ni sucre candi, ni bouteille lourde, ni longue garde ne sont garantis. Ces caractères appartiennent à certains produits et à certaines traditions, pas à la simple présence du mot « abbaye »."
        }
      ]
    },
    {
      "id": "trappiste",
      "nom": "Trappiste",
      "collectionId": 9,
      "nature": "R",
      "parentPrincipalId": null,
      "aliases": [
        "Trappist"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Monastères trappistes reconnus",
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
        "details": "La marque Trappist et le label ATP encadrent le lieu, la supervision et l’économie du produit, pas une souche ou une méthode de fermentation unique."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Calice",
          "Tulipe belge"
        ]
      },
      "description": "« Trappiste » ne désigne ni une couleur ni un style : c’est une marque protégée liée à des communautés de l’ordre trappiste. Le logo Authentic Trappist Product ajoute des critères contrôlés de proximité, de supervision monastique et d’affectation des revenus. Une trappiste peut donc être blonde, brune, légère ou très forte ; son point commun est institutionnel.",
      "histoireEtOrigines": `Le mot « trappiste » vient d’une branche de l’ordre cistercien, pas d’une famille de levures. Sa valeur brassicole moderne s’est construite parce que des monastères ont produit ou fait produire des bières destinées à faire vivre leur communauté. Le prestige de quelques maisons a ensuite attiré les imitations. Pour défendre le nom et rendre le lien vérifiable, des abbayes ont fondé en 1998 l’Association Internationale Trappiste et développé la marque collective ainsi que le logo Authentic Trappist Product.

    Selon l’association, le produit portant ce logo est fabriqué dans l’environnement immédiat de l’abbaye, sous le contrôle des moines ou des moniales. La production doit rester subordonnée à la communauté ; les revenus servent à son entretien, à la solidarité de l’ordre et à des œuvres. Un audit précède l’autorisation, accordée pour cinq ans. Ce dispositif est une certification privée et une marque protégée : le présenter comme une AOP européenne confondrait deux familles juridiques différentes.

    Le logo ATP et le mot Trappist ne décrivent pas le goût. Les abbayes conservent leurs propres recettes, souches, degrés et gammes. Certaines bières sont produites sur des équipements exploités avec du personnel laïc, dès lors que la supervision et les autres critères sont respectés. Face à l’étiquette, il faut donc vérifier le logo, le producteur et le produit exact. « Trappiste » garantit une relation de production et une économie monastique contrôlées ; il ne garantit ni triple, ni brune, ni supériorité sensorielle automatique.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Les invariants sont le cadre de production et de gouvernance. La diversité des bières trappistes interdit une recette moyenne crédible.",
        "maltsEtCereales": [
          "Chaque abbaye détermine sa gamme : bières de table, blondes, dubbel, tripel, brunes fortes et autres recettes utilisent des grists distincts."
        ],
        "houblons": [
          "Variétés, dose et expression appartiennent à chaque produit certifié, non au label lui-même."
        ],
        "levuresEtMicroorganismes": [
          "Des souches de maison jouent souvent un rôle identitaire, mais aucune levure trappiste universelle n’est imposée par l’Association."
        ],
        "ingredientsComplementaires": [
          "Sucres de brassage, épices ou refermentation existent selon les maisons ; le logo ne les prescrit pas."
        ],
        "profilEau": "La proximité de l’abbaye n’établit pas un profil minéral commun à l’ordre.",
        "empatage": "Équipement et programme restent propres à chaque brasserie placée sous contrôle monastique.",
        "ebullitionEtHoublonnage": "Le cahier des charges public du label porte sur les conditions de fabrication et l’affectation des revenus, pas sur une courbe de houblonnage.",
        "fermentation": "La production doit être supervisée par la communauté ; le type de fermentation et la souche restent des choix de la maison.",
        "maturation": "Refermentation en bouteille et garde sont fréquentes dans plusieurs gammes, sans constituer un critère ATP général.",
        "profilRecherche": "Lire Trappist/ATP comme une garantie institutionnelle contrôlée, puis découvrir séparément le style et la personnalité de chaque abbaye."
      },
      "sources": [
        {
          "organisme": "Association Internationale Trappiste",
          "edition": null,
          "reference": "Critères du label Authentic Trappist Product",
          "type": "organisme_certificateur",
          "url": "https://www.trappist.be/en/about-ita/atp-label/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Association Internationale Trappiste",
          "edition": null,
          "reference": "Questions fréquentes — marque Trappist, association et diversité des produits",
          "type": "organisme_certificateur",
          "url": "https://www.trappist.be/en/faqs/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Association Internationale Trappiste",
          "edition": null,
          "reference": "Bières trappistes actuellement présentées par l’association",
          "type": "registre_certificateur",
          "url": "https://www.trappist.be/en/products/beers/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Trappist Westmalle",
          "edition": null,
          "reference": "Bières et histoire de la brasserie monastique",
          "type": "source_primaire_producteur",
          "url": "https://www.trappistwestmalle.be/fr/bieres-trappistes/",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Une marque, pas une AOP",
          "texte": "Le système ATP repose sur l’Association Internationale Trappiste, ses critères et ses audits. Il ne doit pas être traduit dans le vocabulaire des indications géographiques de l’Union européenne, même si son contrôle de provenance est exigeant."
        },
        {
          "titre": "Le logo a une date de péremption",
          "texte": "L’autorisation d’utiliser Authentic Trappist Product est accordée pour cinq ans. Ce détail rappelle qu’une certification est un contrôle renouvelé, pas une décoration acquise une fois pour toutes."
        }
      ]
    },
    {
      "id": "biere-artisanale-craft-beer",
      "nom": "Bière artisanale / Craft Beer",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [
        "Bière artisanale",
        "Craft Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "Craft ne sélectionne aucun procédé fermentaire ; selon la juridiction, le mot décrit une entreprise, un statut ou une identité revendiquée."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Craft Beer » est une bannière de marché plus qu’une formule mondiale. Aux États-Unis, la Brewers Association publie des critères de taille et d’indépendance ; en France, l’usage d’« artisan » renvoie au droit de l’artisanat. Ni l’un ni l’autre ne garantit houblon massif, petites cuves, absence de pasteurisation ou goût supérieur.",
      "histoireEtOrigines": `Craft beer s’est imposé avec la renaissance des petites brasseries américaines, puis a voyagé comme synonyme de créativité, d’indépendance et d’opposition aux grands groupes. Le mot a gagné en désirabilité à mesure que les rachats et les prises de participation brouillaient la frontière entre petit producteur et marque à l’esthétique indépendante. Cette histoire explique pourquoi la définition la plus citée aux États-Unis vient d’une organisation professionnelle : la Brewers Association qualifie actuellement de craft un brasseur petit et indépendant, avec un plafond de six millions de barils et moins de 25 % de contrôle par un acteur de l’alcool qui ne serait pas lui-même craft.

    Cette définition n’est ni une loi universelle ni un passeport exportable. L’Union européenne connaît une catégorie fiscale de petite brasserie indépendante, pouvant aller jusqu’à 200 000 hectolitres pour l’application de taux d’accise réduits ; ce seuil ne définit pas la craft beer. En France, les termes artisan et artisanal sont liés à l’immatriculation et aux conditions prévues par le Code de l’artisanat. Une entreprise peut donc relever d’un cadre artisanal français sans correspondre au seuil américain, et inversement.

    Surtout, aucune de ces catégories ne décrit le liquide. Craft n’impose ni fermentation haute, ni absence de filtration, ni ingrédients locaux, ni propriété intégralement familiale. Une lager parfaitement classique peut être craft ; une IPA exubérante peut appartenir à un groupe mondial. La lecture utile consiste à demander qui possède la brasserie, où le produit est fabriqué, quelle définition le logo invoque et ce que la fiche technique affirme réellement. Le mot porte une histoire d’entreprise ; le verre mérite encore sa propre enquête.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La mention renseigne d’abord sur le positionnement ou le statut du producteur ; elle ne définit aucune technique commune.",
        "maltsEtCereales": [
          "Toutes les familles de céréales et de malts peuvent entrer dans une bière craft."
        ],
        "houblons": [
          "L’association fréquente entre craft et houblonnage généreux vient de l’histoire du mouvement, pas d’une condition juridique."
        ],
        "levuresEtMicroorganismes": [
          "Lager, ale, fermentation mixte, levures non conventionnelles et désalcoolisation figurent toutes dans le secteur."
        ],
        "ingredientsComplementaires": [
          "Local, biologique, fruité ou expérimental sont des choix supplémentaires qui doivent être prouvés séparément."
        ],
        "profilEau": "Petite taille et indépendance ne déterminent pas l’origine ni le traitement de l’eau.",
        "empatage": "Une microbrasserie peut employer infusion simple, décoction, céréales crues ou procédés très automatisés.",
        "ebullitionEtHoublonnage": "Le mot craft n’établit ni quantité de houblon ni mode d’extraction.",
        "fermentation": "La taille de l’entreprise n’est pas un type de fermentation ; le contrôle des souches et des températures reste un critère de produit.",
        "maturation": "Filtration, pasteurisation, garde et conditionnement varient librement selon le brasseur.",
        "profilRecherche": "Identifier la définition de craft invoquée et le propriétaire réel, puis juger séparément le produit et son procédé."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Craft brewer definition — small and independent",
          "type": "source_professionnelle",
          "url": "https://www.brewersassociation.org/statistics-and-data/craft-brewer-definition/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Code de l’artisanat, articles L. 241-1 et L. 241-2 — usage du mot artisan et de ses dérivés",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006075116/LEGISCTA000047362458/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Union européenne — EUR-Lex",
          "edition": null,
          "reference": "Directive 92/83/CEE — taux réduits pour petites brasseries indépendantes",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A01992L0083-20220101",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Trois seuils, trois questions",
          "texte": "Le plafond américain de six millions de barils sert une définition professionnelle ; le seuil européen de 200 000 hectolitres sert une faculté fiscale ; le droit français de l’artisanat qualifie une entreprise et ses conditions d’exercice. Les aligner comme s’ils mesuraient la même chose produit une précision très décorative et très fausse."
        },
        {
          "titre": "L’indépendance n’a pas de goût unique",
          "texte": "La propriété d’une entreprise influence son histoire, ses moyens et parfois sa distribution. Elle ne permet pas de prédire à l’aveugle la fraîcheur, la qualité ou l’intensité d’une bière particulière."
        }
      ]
    },
    {
      "id": "biere-biologique-bio",
      "nom": "Bière biologique / Bio",
      "collectionId": 9,
      "nature": "R",
      "parentPrincipalId": null,
      "aliases": [
        "Bière bio",
        "Organic Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Certification selon la réglementation applicable",
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
        "details": "La certification porte sur la production et les ingrédients agricoles ; elle ne prescrit aucune famille de levure, méthode fermentaire ou filtration."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au style de base"
        ]
      },
      "description": "« Bio » est une allégation réglementée, pas une impression de campagne. Dans l’Union européenne, elle renvoie au règlement sur la production biologique, à un contrôle et, pour une bière préemballée produite dans l’UE, au logo européen accompagné du code de l’organisme et de l’origine agricole. Elle ne promet ni goût rustique, ni petite brasserie, ni bouteille non pasteurisée.",
      "histoireEtOrigines": `Le mot « naturel » peut flotter librement dans une publicité ; « biologique » voyage avec des papiers. Dans l’Union européenne, le règlement 2018/848 organise la production, la certification et l’étiquetage bio. Pour qu’un aliment transformé porte la référence biologique dans sa dénomination de vente, au moins 95 % en poids de ses ingrédients agricoles doivent être biologiques. L’eau et le sel ne participent pas à ce calcul ; la levure, elle, est comptée comme ingrédient agricole. Cette arithmétique discrète explique mieux le label qu’une photo de champ au coucher du soleil.

    Sur une bière préemballée produite dans l’Union, le logo biologique de l’UE est obligatoire lorsque le produit est présenté comme bio. Le numéro de code de l’autorité ou de l’organisme de contrôle doit aussi figurer sur l’étiquetage ; l’indication sur l’origine des matières premières agricoles partage, elle, le champ visuel du logo. Le dispositif porte sur toute une chaîne documentée : fournisseurs, transformation, séparation des flux, contrôles et traçabilité. Une brasserie peut être artisanale sans être certifiée bio ; une grande brasserie peut produire une référence biologique conforme.

    Le label ne fixe ni couleur, ni degré, ni amertume. Il ne signifie pas automatiquement local, sans gluten, végétalien, non filtré ou sans intrants de transformation autorisés. Pour lire correctement la bouteille, il faut regarder le logo, le code de contrôle et l’origine agricole, puis revenir au style pour comprendre le goût. Bio répond à la question « selon quelles règles les ingrédients agricoles et la production ont-ils été certifiés ? » ; il laisse la levure et le brasseur répondre à la question suivante.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La contrainte distinctive est la conformité biologique vérifiée de la chaîne et des ingrédients agricoles, pas une architecture gustative.",
        "maltsEtCereales": [
          "Les céréales et malts agricoles comptabilisés doivent respecter les règles bio ; le seuil de 95 % s’applique aux ingrédients agricoles du produit transformé."
        ],
        "houblons": [
          "Le houblon agricole doit entrer dans la chaîne certifiée lorsque la bière revendique le bio dans sa dénomination."
        ],
        "levuresEtMicroorganismes": [
          "La levure est traitée comme un ingrédient agricole dans le calcul réglementaire ; aucune souche sensorielle particulière n’est imposée."
        ],
        "ingredientsComplementaires": [
          "Fruits, épices et autres ingrédients agricoles sont intégrés au calcul et aux règles applicables, avec les exceptions limitativement prévues par le règlement."
        ],
        "profilEau": "L’eau n’entre pas dans le calcul des 95 %, sans cesser pour autant d’être une matière déterminante pour le brassage.",
        "empatage": "Le procédé peut être classique ou moderne ; l’enjeu spécifique est la séparation et la traçabilité des matières certifiées.",
        "ebullitionEtHoublonnage": "Aucune intensité de houblonnage n’est imposée, mais les lots utilisés doivent rester identifiables dans le système de contrôle.",
        "fermentation": "La certification suit les flux et les enregistrements de production ; elle ne prescrit pas haute ou basse fermentation.",
        "maturation": "Filtration, pasteurisation et garde ne sont pas exclues par le seul mot bio, sous réserve des règles de production applicables.",
        "profilRecherche": "Vérifier la certification et sa traçabilité, puis évaluer séparément style, fraîcheur et qualité sensorielle."
      },
      "sources": [
        {
          "organisme": "Union européenne — EUR-Lex",
          "edition": null,
          "reference": "Règlement (UE) 2018/848 relatif à la production biologique et à l’étiquetage des produits biologiques",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02018R0848-20250325",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Commission européenne",
          "edition": null,
          "reference": "The organic logo — conditions d’emploi et mentions associées",
          "type": "source_institutionnelle",
          "url": "https://agriculture.ec.europa.eu/farming/organic-farming/organic-logo_en",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Le seuil des 95 %",
          "texte": "Le pourcentage vise les ingrédients agricoles du produit transformé, pas 95 % du volume de la bouteille. Comme la bière contient beaucoup d’eau, confondre les deux calculs donnerait un label étonnamment facile à obtenir."
        },
        {
        "titre": "Trois indices à repérer",
        "texte": "Logo européen, code de l’organisme de contrôle et mention d’origine agricole forment le petit dossier visible du produit. L’origine partage le champ visuel du logo ; l’ensemble dit davantage que la couleur verte choisie par le graphiste."
        }
      ]
    },
    {
      "id": "biere-speciale",
      "nom": "Bière spéciale",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "« Spéciale » n’impose aucun procédé : son sens dépend de la gamme, du marché et de l’explication fournie par la marque."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Bière spéciale » annonce une différence sans toujours la nommer. Le mot a servi de segment commercial français, entre bières courantes, de luxe et de spécialité, mais le décret actuel ne lui attribue ni degré minimal, ni fermentation, ni recette. Une spéciale peut être plus forte, plus maltée ou seulement mieux habillée : l’adjectif demande une preuve après lui.",
      "histoireEtOrigines": `Dans le commerce, « spécial » est un adjectif extrêmement rentable : il crée une marche au-dessus sans préciser la hauteur de la marche. L’histoire récente du marché français lui donne toutefois un contenu économique réel. Une décision publiée en 2005 par les autorités de concurrence décrivait un secteur organisé en catégories telles que bières de luxe, bières spéciales et bières de spécialité ; les spéciales représentaient alors une part importante des volumes. Il s’agissait d’une segmentation de marché, non d’une recette opposable à toutes les brasseries.

    Le décret français définissant la bière ne réserve pas aujourd’hui la dénomination « bière spéciale ». Aucun seuil général d’alcool, de malt ou de garde ne transforme automatiquement une bière ordinaire en spéciale. Selon les marques et les époques, le mot a pu signaler une densité plus élevée, un caractère plus malté, une fermentation différente, un produit de fête ou un positionnement premium. Cette élasticité fait sa longévité et sa faiblesse documentaire.

    L’étiquette doit donc être lue comme une phrase inachevée : spéciale par quoi ? Un degré indiqué, une matière première, une durée de maturation ou un style précis peuvent fournir la suite. À défaut, l’adjectif reste une promesse comparative sans terme de comparaison très visible. Cela ne rend pas la bière médiocre ni la mention illicite ; cela signifie seulement que la singularité doit être cherchée dans des informations plus concrètes que la typographie dorée.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le mot ne constitue pas une spécification technique ; seule l’explication particulière du producteur peut lui donner un contenu vérifiable.",
        "maltsEtCereales": [
          "Une charge maltée supérieure ou des malts plus expressifs ont souvent justifié la mention, sans seuil commun."
        ],
        "houblons": [
          "Une spéciale peut rester maltée ou miser sur le houblon ; l’adjectif ne tranche pas."
        ],
        "levuresEtMicroorganismes": [
          "Aucune souche ni famille de fermentation n’est attachée à la catégorie commerciale."
        ],
        "ingredientsComplementaires": [
          "Épices, sucres ou ingrédients distinctifs peuvent expliquer le mot lorsqu’ils sont réellement annoncés."
        ],
        "profilEau": "Aucun profil minéral ne peut être déduit d’un rang de gamme.",
        "empatage": "Si la marque revendique plus de corps ou de force, densité et fermentescibilité deviennent pertinentes ; sinon, aucune méthode n’est sous-entendue.",
        "ebullitionEtHoublonnage": "Le traitement du houblon doit être lu dans la description du produit, pas dans « spéciale ».",
        "fermentation": "Le procédé n’est informatif que s’il est nommé séparément : haute fermentation, refermentation ou autre particularité.",
        "maturation": "Une garde prolongée peut constituer la singularité, mais le terme n’en promet aucune durée.",
        "profilRecherche": "Trouver la différence mesurable ou documentée derrière l’adjectif ; accepter qu’elle soit parfois purement positionnelle."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Conseil de la concurrence — BOCCRF",
          "edition": "Décision publiée en 2005",
          "reference": "Secteur de la distribution de bières — segmentation historique du marché français",
          "type": "archive_institutionnelle",
          "url": "https://www.economie.gouv.fr/files/files/directions_services/dgccrf/boccrf/05_07/a0070004.htm",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Une ancienne case de rayon",
          "texte": "Les catégories commerciales relevées dans les études de marché racontent comment les industriels et distributeurs vendaient la bière à une époque donnée. Elles ne deviennent pas pour autant des styles ni des dénominations légales permanentes."
        }
      ]
    },
    {
      "id": "biere-de-noel",
      "nom": "Bière de Noël",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [
        "Christmas Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "La saison de vente n’impose ni type de fermentation ni épices ; chaque brasseur compose son produit d’hiver."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Bière de Noël » est un rendez-vous commercial et culturel, pas une recette mondiale. Beaucoup sont plus maltées, fortes ou épicées pour accompagner l’hiver ; d’autres restent blondes, sèches ou simplement vêtues pour décembre. La mention garantit surtout une intention saisonnière. Cannelle, fruits secs et cheminée sont des personnages fréquents, jamais une distribution obligatoire.",
      "histoireEtOrigines": `Le calendrier a longtemps été une contrainte de production avant de devenir un calendrier de lancement. Les récoltes, le froid disponible pour maîtriser les fermentations et les besoins de conservation rythmaient les brassins. Dans plusieurs cultures européennes, la bière des fêtes s’est chargée d’obligations domestiques, religieuses ou communautaires. En Norvège, les recherches historiques recensées par l’Université norvégienne de sciences et de technologie montrent une tradition ancienne de brassage de Noël et des publicités pour juleøl dès le XIXe siècle.

    Le marché moderne a transformé ce moment en catégorie saisonnière internationale. Les brasseries y placent volontiers des recettes plus riches, des malts foncés, des épices et des degrés supérieurs, parce que ces signaux correspondent aux attentes hivernales. Mais la circulation du modèle n’a pas créé de cahier des charges. Aux États-Unis, Anchor a lancé en 1975 une Christmas Ale annuelle dont la recette et l’étiquette changeaient, exemple influent d’un produit de fête défini par le retour et la variation plutôt que par une formule fixe.

    En France, le décret bière ne réserve pas « bière de Noël ». Les récits professionnels qui font remonter une recette précise au Moyen Âge doivent donc être distingués de la documentation disponible pour chaque région. Le lecteur peut raisonnablement attendre une édition saisonnière et chercher ensuite son degré, ses épices, sa couleur et sa date de conditionnement. Parfois la bière a été conçue pour le repas de fête ; parfois Noël se trouve surtout sur la capsule. Les deux cas sont commerciaux, mais ils ne racontent pas la même profondeur de projet.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le produit est d’abord saisonnier ; richesse maltée, épices et force sont des conventions fréquentes, non des conditions.",
        "maltsEtCereales": [
          "Malts caramel, Munich et grains plus foncés soutiennent souvent les profils hivernaux, mais des versions blondes existent."
        ],
        "houblons": [
          "Le houblon peut équilibrer une forte charge maltée ou devenir aromatique dans une interprétation contemporaine."
        ],
        "levuresEtMicroorganismes": [
          "Ales fruitées, lagers d’hiver et fermentations belges sont toutes compatibles avec la saison."
        ],
        "ingredientsComplementaires": [
          "Cannelle, coriandre, agrumes, miel ou aucun ajout : la liste réelle prime sur l’imagerie festive."
        ],
        "profilEau": "Le profil suit la couleur et l’équilibre de la recette, pas le mois du calendrier.",
        "empatage": "Le corps est souvent renforcé pour l’hiver, mais une finale digeste peut demander au contraire une bonne fermentescibilité.",
        "ebullitionEtHoublonnage": "Épices et sucres éventuels sont dosés selon leur volatilité ; aucune séquence n’est commune à toutes les éditions.",
        "fermentation": "Une forte densité exige une levure saine et une température maîtrisée ; les bières plus légères n’ont pas cette contrainte particulière.",
        "maturation": "Une sortie en fin d’année peut nécessiter d’anticiper la garde de plusieurs semaines ou mois, selon la force réelle.",
        "profilRecherche": "Une édition saisonnière dont le contenu est décrit honnêtement, sans supposer épices ou force d’après un sapin sur l’étiquette."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brasseurs de France",
          "edition": null,
          "reference": "Bière de Noël — usages professionnels et accords",
          "type": "source_professionnelle",
          "url": "https://brasseurs-de-france.com/tout-savoir-sur-la-biere/accords-bieres-mets/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Norwegian University of Science and Technology",
          "edition": "2018",
          "reference": "Norway’s long tradition of brewing Christmas beer",
          "type": "source_universitaire",
          "url": "https://norwegianscitechnews.com/2018/12/norways-long-tradition-of-brewing-christmas-beer/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "All About Beer",
          "edition": null,
          "reference": "American Christmas Beer History — Anchor Christmas Ale depuis 1975",
          "type": "presse_specialisee",
          "url": "https://allaboutbeer.com/american-christmas-beer-history/",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Le calendrier comme ingrédient",
          "texte": "La répétition annuelle peut donner une identité solide même lorsque la recette change. Le caractère de Noël tient alors au rendez-vous, au conditionnement et à l’usage autant qu’à une liste d’épices."
        },
        {
          "titre": "L’épice facultative",
          "texte": "Une bière peut évoquer pain d’épices et fruits secs par ses malts, sa levure et son vieillissement, sans cannelle ni girofle ajoutés. Inversement, une blonde légère peut être épicée et vendue pour les fêtes."
        }
      ]
    },
    {
      "id": "biere-de-printemps-biere-de-mars",
      "nom": "Bière de printemps / Bière de mars",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [
        "Bière de printemps",
        "Bière de mars",
        "Spring Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "Le lancement printanier rassemble des ales et des lagers ; le calendrier ne sélectionne pas une levure."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Bière de mars » ou « de printemps » désigne aujourd’hui une édition saisonnière lancée au retour des beaux jours. Les professionnels français lui associent souvent un brassage hivernal, une robe claire à ambrée et une expression florale, mais aucune recette légale ne s’impose. Elle ne doit pas être confondue automatiquement avec la Märzen bavaroise, sa cousine de calendrier au destin différent.",
      "histoireEtOrigines": `Avant le froid artificiel, l’hiver donnait aux brasseurs des conditions plus sûres pour fermenter et conserver. Un brassin préparé pendant la saison froide pouvait arriver à maturité au début du printemps et célébrer les nouvelles matières premières. C’est le noyau causal de la bière de mars française : récolte, froid, brassage, attente, puis mise en vente. Les récits professionnels situent des mentions anciennes à Arras, mais les dates publiées ne concordent pas toujours — 1394 dans certaines communications, 1420 dans une présentation patrimoniale locale. Faute de pièce d’archive directement consultée ici, la primauté précise reste donc une tradition rapportée.

    La catégorie moderne doit aussi beaucoup à sa relance commerciale à la fin du XXe siècle. « Bière de printemps » a élargi une fenêtre que « bière de mars » semblait enfermer dans un seul mois et a ajouté l’imaginaire des beaux jours. Cette appellation française n’est pas la traduction technique automatique de la Märzen allemande : en Bavière, la bière brassée en mars était historiquement destinée à traverser l’été, ce qui a produit une autre trajectoire de lager et de fête automnale.

    Le décret français n’accorde ni seuil ni recette à ces mots. Les versions contemporaines peuvent être blondes, ambrées, florales, maltées, de fermentation haute ou basse. L’information garantie est surtout temporelle et éditoriale : le producteur a choisi de présenter ce brassin comme sa sortie de printemps. Pour comprendre le liquide, l’étiquette doit encore préciser le style, le degré et les ingrédients. Le calendrier indique l’heure du rendez-vous ; il ne choisit pas la boisson à votre place.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La contrainte commune est un lancement saisonnier ; les profils floraux, maltés et modérés relèvent de conventions professionnelles.",
        "maltsEtCereales": [
          "Malts pâles à légèrement toastés sont fréquents ; aucune récolte ou céréale n’est aujourd’hui imposée par la mention."
        ],
        "houblons": [
          "Une touche florale ou herbacée accompagne souvent l’image printanière, sans seuil d’amertume."
        ],
        "levuresEtMicroorganismes": [
          "Ales et lagers coexistent, contrairement à l’assimilation rapide avec une famille unique."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Le profil se règle au style réellement choisi et à la robe, non à la date de sortie.",
        "empatage": "Le brassage hivernal peut être un choix de calendrier ; l’empâtage n’en reçoit pas de programme spécifique.",
        "ebullitionEtHoublonnage": "Les houblons aromatiques peuvent mettre en scène la fraîcheur, mais une version maltée reste tout aussi possible.",
        "fermentation": "Le planning doit permettre une bière prête au printemps ; la température et la souche relèvent du produit précis.",
        "maturation": "La garde entre brassage hivernal et sortie de mars est historiquement intelligible, sans durée légale contemporaine.",
        "profilRecherche": "Une saisonnière clairement datée et décrite, sans confondre appellation française, Märzen et Saison belge."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brasseurs de France",
          "edition": null,
          "reference": "Bière de printemps — récit professionnel de la saisonnière française",
          "type": "source_professionnelle",
          "url": "https://actualites-agricoles.lacooperationagricole.coop/images/files/2019/AA-2019-03-22/Biere%20de%20Printemps_Brasseurs%20de%20France-Recettes.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Arras Pays d’Artois",
          "edition": null,
          "reference": "Voyage en Terre de bière — patrimoine brassicole et mention de 1420",
          "type": "source_patrimoniale",
          "url": "https://www.arraspaysdartois.com/voyage-en-terre-de-biere/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Revue d’Alsace",
          "edition": "2011",
          "reference": "La bière en Alsace — renaissance des bières saisonnières",
          "type": "publication_historique",
          "url": "https://journals.openedition.org/alsace/1212",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "1394 ou 1420 ?",
          "texte": "Les deux dates circulent dans des sources touristiques et professionnelles à propos d’archives d’Arras. Sans publication de la pièce et de sa transcription, il est plus honnête de retenir l’existence d’une tradition ancienne que de transformer une date flottante en acte de naissance."
        },
        {
          "titre": "Mars n’est pas toujours Märzen",
          "texte": "Même mois, contraintes de froid apparentées, mais marchés et évolutions différents : la saisonnière française moderne et la lager bavaroise ne deviennent pas un seul style par traduction."
        }
      ]
    },
    {
      "id": "biere-forte-strong-beer",
      "nom": "Bière forte / Strong Beer",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [
        "Bière forte",
        "Strong Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "La force alcoolique peut provenir d’un moût dense, de sucres fermentescibles ou d’une concentration ; aucune fermentation unique n’est attachée au terme."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Bière forte » parle d’alcool avant de parler de style, mais le seuil change avec les pays. La France ne crée pas de catégorie générale Strong Beer dans son décret ; le Canada, par exemple, réserve officiellement le nom aux bières de 5,6 à 8,5 % vol., puis « extra strong » au-delà. Le chiffre imprimé reste plus fiable que l’adjectif voyageur.",
      "histoireEtOrigines": `Fort est un mot relatif : une bière à 6 % vol. paraît puissante dans une gamme de lagers légères et presque sage entre une tripel et un barley wine. Les producteurs l’utilisent pour avertir, valoriser ou segmenter, mais le point de bascule dépend du marché. Cette variabilité devient évidente en comparant les juridictions. Aucun seuil général ne définit « bière forte » dans le décret français. Au Canada, les normes de composition organisent au contraire les noms communs par degré : light, beer, strong beer entre 5,6 et 8,5 %, puis extra strong à partir de 8,6 %.

    Dans l’Union européenne, le titre alcoométrique volumique acquis doit être indiqué pour les boissons dépassant 1,2 % vol. selon le règlement d’information des consommateurs. Ce nombre offre donc une base de comparaison beaucoup plus robuste que Strong imprimé en grand. L’adjectif ne précise ni la densité finale, ni la chaleur alcoolique, ni la quantité de sucre résiduel. Une bière très atténuée peut être forte et sèche ; une autre, moins alcoolisée, paraître plus lourde.

    Techniquement, la force vient le plus souvent d’un moût riche en sucres fermentescibles et d’une levure capable d’achever le travail. Des procédés de concentration créent d’autres cas, mais doivent être documentés séparément. À la lecture, trois informations comptent : le pourcentage, le volume du contenant et le style. « Forte » prévient que la boisson monte l’escalier ; le chiffre indique enfin combien de marches.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La seule idée stable est un degré perçu comme élevé dans son marché ; le chiffre et la juridiction donnent la mesure réelle.",
        "maltsEtCereales": [
          "Un moût dense demande davantage de matières fermentescibles ; malts, céréales et sucres peuvent répartir cette charge de façons différentes."
        ],
        "houblons": [
          "L’amertume compense parfois la densité, tandis que certains produits privilégient douceur ou neutralité."
        ],
        "levuresEtMicroorganismes": [
          "Tolérance à l’alcool, vitalité et atténuation deviennent critiques ; aucune souche universelle de bière forte n’existe."
        ],
        "ingredientsComplementaires": [
          "Des sucres simples peuvent relever le degré tout en limitant le corps, notamment dans certaines traditions belges."
        ],
        "profilEau": "Calcium, pH et nutriments soutiennent la fermentation ; la force ne réclame pas une minéralité gustative élevée.",
        "empatage": "La fermentescibilité doit être pensée avec la densité pour éviter une finale involontairement sirupeuse.",
        "ebullitionEtHoublonnage": "Ébullition prolongée et charge de houblon peuvent concentrer ou équilibrer le moût, selon le style.",
        "fermentation": "Ensemencement suffisant, oxygénation adaptée et contrôle thermique limitent arrêts et alcools agressifs dans les hauts degrés.",
        "maturation": "Une garde peut fondre l’alcool et les arômes, mais ne corrige pas une fermentation défaillante.",
        "profilRecherche": "Comparer le degré chiffré et la taille de service, puis juger l’intégration de l’alcool plutôt que le seul mot Strong."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Union européenne — EUR-Lex",
          "edition": null,
          "reference": "Règlement (UE) n° 1169/2011 — indication du titre alcoométrique",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02011R1169-20250401",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Agence canadienne d’inspection des aliments",
          "edition": "Mise à jour 2026",
          "reference": "Labelling requirements for alcoholic beverages — common names by alcohol content",
          "type": "source_reglementaire_etrangere",
          "url": "https://inspection.canada.ca/en/food-labels/labelling/industry/alcoholic-beverages",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Une frontière qui traverse l’Atlantique",
          "texte": "À 6 % vol., une bière peut porter légalement le nom Strong Beer au Canada sans constituer une catégorie réglementée équivalente en France. Les mots circulent plus vite que leurs seuils."
        }
      ]
    },
    {
      "id": "biere-legere-light-beer",
      "nom": "Bière légère / Light Beer",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [
        "Bière légère",
        "Light Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "La légèreté peut résulter d’une faible densité, d’une forte atténuation, d’un degré réduit ou d’une désalcoolisation ; le contexte de l’allégation est décisif."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Légère » peut viser le degré, l’énergie, le corps ou simplement l’impression en bouche. Dans l’Union européenne, l’allégation nutritionnelle light/lite suit les conditions de « réduit » et doit nommer la caractéristique allégée ; au-delà de 1,2 % vol., seules les réductions d’alcool ou d’énergie peuvent être revendiquées. Les règles nationales peuvent préciser l’alcool. Il faut donc chercher : légère en quoi ?",
      "histoireEtOrigines": `Light a prospéré parce qu’il permet de condenser plusieurs désirs contemporains : moins d’alcool, moins de calories, moins de lourdeur et plus de buvabilité. Ces dimensions se recoupent parfois, jamais parfaitement. Une bière très sèche peut sembler légère tout en affichant un degré ordinaire ; une bière à faible alcool peut conserver des dextrines et du corps ; une réduction calorique doit être démontrée par comparaison. L’ambiguïté n’est donc pas qu’une coquetterie de traduction, elle correspond à des propriétés techniquement distinctes.

    Dans l’Union européenne, le règlement 1924/2006 encadre les allégations nutritionnelles. Light ou lite est soumis aux mêmes conditions que « réduit » et doit indiquer la caractéristique qui rend le produit léger. La réduction atteint au moins 30 % pour l’énergie et, en règle générale, pour les nutriments couverts, par rapport à un produit similaire. Pour les boissons contenant plus de 1,2 % vol., seules les allégations de réduction d’alcool ou d’énergie sont admises ; faute de règle européenne spécifique sur la réduction ou l’absence d’alcool, des règles nationales peuvent s’appliquer. Le mot sensoriel n’efface jamais les principes contre les présentations trompeuses.

    Ailleurs, le terme peut devenir un nom réglementé par degré : au Canada, Light Beer correspond actuellement à 4,1–5,5 % vol., tandis que 2,6–4,0 % relève d’Extra Light Beer. Cette comparaison suffit à déconseiller tout seuil universel mémorisé. Sur une étiquette européenne, il faut repérer le comparatif, la propriété réduite, la déclaration nutritionnelle éventuelle et le degré. Une bière légère sans complément est comme une valise marquée « moins lourde » : le lecteur aimerait encore savoir ce qui a été retiré.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le procédé pertinent dépend de la propriété réduite : densité et atténuation pour l’alcool ou le corps, formulation pour l’énergie, désalcoolisation dans certains cas.",
        "maltsEtCereales": [
          "Une quantité moindre de matières fermentescibles réduit naturellement alcool et énergie, mais peut aussi amincir mousse et texture."
        ],
        "houblons": [
          "À faible corps, une amertume inchangée paraît plus forte ; le houblonnage est souvent recalibré plutôt que simplement réduit."
        ],
        "levuresEtMicroorganismes": [
          "Levures à faible atténuation, fermentation interrompue ou forte atténuation répondent à des objectifs opposés ; le mot light ne permet pas de choisir."
        ],
        "ingredientsComplementaires": [
          "Fibres, dextrines ou autres leviers de texture peuvent compenser une baisse de matière, sous réserve de l’étiquetage applicable."
        ],
        "profilEau": "Une minéralité dure se remarque davantage dans un corps aminci ; l’équilibre doit être ajusté à la nouvelle matrice.",
        "empatage": "La température et la charge de grain règlent la quantité de sucres fermentescibles et la texture restante.",
        "ebullitionEtHoublonnage": "Le brasseur évite de concentrer excessivement un moût conçu pour rester léger et adapte l’amertume à la densité finale.",
        "fermentation": "Fermentation limitée, recette peu dense ou désalcoolisation ne donnent ni les mêmes arômes ni les mêmes risques microbiologiques.",
        "maturation": "La stabilité est particulièrement importante lorsque sucre résiduel et faible alcool coexistent.",
        "profilRecherche": "Identifier la propriété réellement réduite, le comparateur et le degré, puis vérifier que le goût n’a pas été réduit par mégarde."
      },
      "sources": [
        {
          "organisme": "Union européenne — EUR-Lex",
          "edition": null,
          "reference": "Règlement (CE) n° 1924/2006 concernant les allégations nutritionnelles et de santé — annexe Light/Lite",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02006R1924-20141213",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Agence canadienne d’inspection des aliments",
          "edition": "Mise à jour 2026",
          "reference": "Labelling requirements for alcoholic beverages — Light Beer et seuils de degré",
          "type": "source_reglementaire_etrangere",
          "url": "https://inspection.canada.ca/en/food-labels/labelling/industry/alcoholic-beverages",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Quatre légèretés différentes",
          "texte": "Alcool, énergie, corps et intensité aromatique peuvent baisser séparément. Une formulation sérieuse dit laquelle est visée et par rapport à quel produit la réduction est calculée."
        },
        {
          "titre": "Le cas des boissons alcoolisées",
        "texte": "Au-dessus de 1,2 % vol., le droit européen limite fortement les allégations nutritionnelles aux réductions d’alcool ou d’énergie. La réduction d’énergie suit le seuil européen ; l’alcool peut relever de précisions nationales en l’absence de règle harmonisée."
        }
      ]
    },
    {
      "id": "session-beer",
      "nom": "Session Beer",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "Session décrit un objectif de buvabilité sur la durée ; ales, lagers et fermentations mixtes peuvent être conçues dans ce but."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Session Beer » désigne une bière pensée pour plusieurs verres : degré contenu, finale nette, intensité suffisante pour rester intéressante. Aucun seuil mondial ne clôt la catégorie, et le mot n’est pas un style autonome. Session IPA, stout, lager ou sour peuvent partager cette intention ; le vrai test n’est pas le nom, mais l’équilibre entre présence et fatigue.",
      "histoireEtOrigines": `L’histoire populaire rattache volontiers session beer aux pauses réglementées des ouvriers britanniques ou aux périodes de service dans les pubs. Le problème est documentaire : le Royaume-Uni possède une longue tradition de bières faibles et de consommation prolongée, mais l’expression elle-même semble beaucoup plus récente. L’historien de la bière Martyn Cornell, en recherchant ses occurrences imprimées, n’a pas trouvé la formule comme vieille catégorie industrielle et situe sa diffusion moderne dans le vocabulaire de la fin du XXe siècle.

    Ce décalage est instructif. Le produit — une bière assez peu alcoolisée pour accompagner une longue présence au comptoir — peut précéder de plusieurs décennies le nom qui le reconditionne. Avec l’essor de la craft beer, « session » a offert un contrepoint aux doubles IPA et aux impériales : conserver un caractère aromatique moderne tout en abaissant la force. Session IPA est devenue la combinaison la plus visible, sans épuiser le principe.

    Les guides professionnels proposent parfois des fourchettes, mais aucune frontière juridique internationale ne s’impose. Le mot promet une architecture d’usage : alcool modéré, absence de lourdeur excessive, finale qui appelle une autre gorgée. Il ne garantit ni faibles calories ni innocuité, et plusieurs verres additionnent toujours leur alcool. La taille du contenant compte donc avec le pourcentage. Sur l’étiquette, le degré permet de vérifier si la promesse tient ; au palais, l’équilibre détermine si la session reste une conversation ou devient un concours d’endurance.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "L’objectif technique est de préserver goût, mousse et texture avec moins d’alcool et une fatigue sensorielle limitée.",
        "maltsEtCereales": [
          "Une charge réduite demande des malts expressifs ou des céréales de texture pour éviter l’impression aqueuse."
        ],
        "houblons": [
          "L’amertume doit être proportionnée au corps ; l’aromatique peut rester intense dans une Session IPA sans rendre la finale râpeuse."
        ],
        "levuresEtMicroorganismes": [
          "La souche construit du caractère à faible densité et doit achever proprement la fermentation."
        ],
        "ingredientsComplementaires": [
          "Aucun ajout n’est constitutif ; sels, céréales de texture ou acidité peuvent servir l’équilibre selon la famille."
        ],
        "profilEau": "Sulfates et chlorures sont réglés avec prudence, car une faible matière amplifie dureté et sécheresse.",
        "empatage": "Le brasseur conserve assez de dextrines et de protéines pour le corps sans pousser le degré final.",
        "ebullitionEtHoublonnage": "L’arôme peut être chargé tardivement ; l’amertume calculée seule décrit mal sa perception dans un petit moût.",
        "fermentation": "Une atténuation complète évite le sucre lourd, mais un produit trop sec et mince manquerait la cible de buvabilité.",
        "maturation": "La fraîcheur est souvent déterminante, notamment pour les versions très houblonnées.",
        "profilRecherche": "Un degré réellement modéré, une finale propre et assez de caractère pour que le deuxième verre ne ressemble pas à une punition."
      },
      "sources": [
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": "2011",
          "reference": "How old is the term ‘session beer’?",
          "type": "recherche_historique",
          "url": "https://zythophile.wordpress.com/2011/05/20/how-old-is-the-term-session-beer/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Beer Style Guidelines — Session Beer",
          "type": "guide_professionnel",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Union européenne — EUR-Lex",
          "edition": null,
          "reference": "Règlement (UE) n° 1169/2011 — indication du titre alcoométrique",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02011R1169-20250401",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Une pratique plus vieille que son nom",
          "texte": "Les milds, bitters et autres bières britanniques modestes ont longtemps rempli la fonction aujourd’hui appelée session. Leur existence ne prouve pas que l’expression moderne était déjà une catégorie d’époque."
        }
      ]
    },
    {
      "id": "double",
      "nom": "Double",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "Double peut renvoyer à une Dubbel belge, à une force accrue ou à une étape revendiquée ; le mot seul ne fixe pas la fermentation."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Double » ressemble à une équation, mais l’étiquette fournit rarement les deux termes. Dans la tradition de Westmalle, Dubbel nomme une bière brune renforcée mise au point au XXe siècle ; ailleurs, double peut signaler davantage de houblon, d’alcool ou une « double fermentation ». Il ne signifie pas automatiquement deux fois le malt, le degré ou le goût.",
      "histoireEtOrigines": `Les nombres donnent au commerce une précision séduisante. Double paraît mesurable, ascendant et facile à placer dans une gamme. Dans la tradition monastique belge, le repère historique le plus influent vient de Westmalle : la brasserie, commencée en 1836, présente sa recette brune remaniée en 1926 comme plus riche en ingrédients, origine de la Westmalle Dubbel moderne. Le nom a ensuite servi de modèle à une famille de bières brunes d’abbaye ou trappistes, fruitées, maltées et relativement fortes.

    Cette généalogie ne transforme pas tous les « double » en Dubbel. Une Double IPA parle surtout d’intensification du houblon et du degré. Une mention « double fermentation » prétend décrire un procédé, parfois une fermentation principale suivie d’une refermentation en bouteille, mais sa formulation doit être expliquée par le producteur. Dans d’autres gammes, le mot fonctionne comme simple échelon avant Triple et Quadruple.

    Aucune règle française générale n’exige un facteur deux. Le degré chiffré, le nom complet et la description technique sont donc indispensables. Écrit seul sur une bière belge brune, Double peut raisonnablement évoquer la famille Dubbel ; accolé à IPA, il change de grammaire ; associé à fermentation, il demande où et comment a lieu la seconde étape. Même au sein d’une gamme, le rapport entre deux échelons n’est pas forcément constant. Le chiffre est un excellent titre de chapitre, mais il ne dispense jamais de lire le chapitre.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Il faut d’abord développer le nom complet : Dubbel, Double IPA, double fermentation ou simple rang de gamme.",
        "maltsEtCereales": [
          "Dans une Dubbel, malts foncés et sucres peuvent construire fruit sombre et toast ; dans une Double IPA, la base cherche souvent à soutenir le houblon sans lourdeur."
        ],
        "houblons": [
          "Discret à équilibré pour une Dubbel, massif pour une Double IPA : le complément du mot change tout."
        ],
        "levuresEtMicroorganismes": [
          "Une levure belge expressive appartient à la Dubbel ; elle n’est pas exigée par « Double » employé seul."
        ],
        "ingredientsComplementaires": [
          "Sucres de brassage possibles dans la tradition belge ; aucune quantité doublée n’est imposée."
        ],
        "profilEau": "Le profil suit la famille développée, maltée ou houblonnée.",
        "empatage": "La densité et la fermentescibilité sont ajustées à la force réelle, pas à une multiplication nominale.",
        "ebullitionEtHoublonnage": "La signification technique va d’un équilibre malté à une forte charge houblonnée selon le nom complet.",
        "fermentation": "Une prétendue double fermentation doit identifier les deux phases ; Dubbel, elle, reste un nom de famille historique plutôt qu’un comptage d’ensemencements.",
        "maturation": "Refermentation en bouteille fréquente dans certaines bières belges, mais non garantie par le mot Double.",
        "profilRecherche": "Refuser l’arithmétique automatique et identifier la tradition ou le procédé réellement revendiqué."
      },
      "sources": [
        {
          "organisme": "Trappist Westmalle",
          "edition": null,
          "reference": "Histoire des bières — Dubbel de 1926",
          "type": "source_primaire_producteur",
          "url": "https://www.trappistwestmalle.be/fr/bieres-trappistes/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Belgian Dubbel",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26B/belgian-dubbel/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "1926, pas deux multiplié par tout",
          "texte": "Westmalle relie sa Dubbel actuelle à une reformulation plus riche de 1926. Ce récit historique éclaire le nom sans fournir une règle arithmétique à appliquer aux ingrédients de toutes les marques."
        }
      ]
    },
    {
      "id": "triple",
      "nom": "Triple",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "La Tripel belge est généralement une ale très atténuée et expressive ; « Triple » employé commercialement peut viser d’autres produits."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Triple » évoque aujourd’hui une forte ale belge, pâle, sèche et très effervescente, dont Westmalle a fixé un modèle majeur en 1934. Mais le mot commercial n’impose aucun triplement : ni trois fermentations, ni trois céréales, ni trois fois plus d’alcool. Sans référence claire au style Tripel, il reste surtout le troisième barreau d’une échelle de puissance.",
      "histoireEtOrigines": `La puissance de « Triple » vient d’un paradoxe bien belge : un mot lourd pour une bière souvent dorée et sèche. Westmalle situe en 1934 la création de la recette qui deviendra sa Tripel, lors de la mise en service d’une nouvelle brasserie. Son influence a fait du nom un repère stylistique international : moût dense mais très fermentescible, levure expressive, carbonatation élevée et amertume suffisante pour éviter la masse sirupeuse.

    Le nombre n’est pourtant pas un mode d’emploi. Les explications populaires évoquent volontiers trois fois le malt, trois fermentations ou une ancienne série de croix inscrites sur les fûts. Ces récits peuvent aider à mémoriser une montée en force, mais ils ne forment pas une règle commune démontrée pour toutes les Tripel. Une bière refermentée en bouteille a bien deux étapes fermentaires visibles ; elle ne devient pas « triple fermentation » par la seule magie du nom.

    La Collection 9 traite donc Triple comme une appellation commerciale, distincte de la fiche stylistique Tripel. Si le producteur revendique clairement la tradition belge, le lecteur peut attendre une forte blonde d’ale, sèche et épicée. Si le mot figure seul dans une gamme Double–Triple–Quadruple, il indique surtout une hiérarchie maison. Le degré, la couleur et le style complètent alors ce que le chiffre suggère. Triple est devenu plus grand que son calcul ; c’est précisément pourquoi il faut vérifier l’unité.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Lorsque Triple signifie Tripel belge, le défi est de rendre une forte densité pâle et digeste ; hors de ce contexte, le procédé doit être documenté séparément.",
        "maltsEtCereales": [
          "Base de malt pâle et part éventuelle de sucre très fermentescible dans la Tripel ; aucune règle de triplement."
        ],
        "houblons": [
          "Une amertume nette équilibre la force du modèle belge, avec un aromatique généralement moins démonstratif qu’une IPA."
        ],
        "levuresEtMicroorganismes": [
          "Levure d’ale belge fruitée et phénolique dans le style historique ; d’autres usages du mot n’en héritent pas automatiquement."
        ],
        "ingredientsComplementaires": [
          "Le sucre peut alléger le corps en fermentant presque entièrement ; il ne sert pas nécessairement à sucrer le verre."
        ],
        "profilEau": "Faible alcalinité pour la pâleur, minéralité mesurée pour préserver une sécheresse élégante.",
        "empatage": "Une forte fermentescibilité empêche la densité initiale de se transformer en finale collante.",
        "ebullitionEtHoublonnage": "L’amertume soutient la structure et l’ébullition doit préserver la robe claire visée.",
        "fermentation": "Ensemencement, oxygénation et température maîtrisent une fermentation très active et limitent les alcools agressifs.",
        "maturation": "Refermentation et garde peuvent fondre l’ensemble, sans constituer la définition numérique du nom.",
        "profilRecherche": "Dans la tradition belge : force cachée par la sécheresse, l’effervescence et l’équilibre ; ailleurs : demander ce que Triple mesure."
      },
      "sources": [
        {
          "organisme": "Trappist Westmalle",
          "edition": null,
          "reference": "Histoire des bières — Tripel créée en 1934",
          "type": "source_primaire_producteur",
          "url": "https://www.trappistwestmalle.be/fr/bieres-trappistes/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Belgian Tripel",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26C/belgian-tripel/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "1934, la grande blonde prend son nom",
          "texte": "Westmalle associe sa Tripel à la nouvelle brasserie de 1934 et à une recette restée structurante. Cette source primaire donne un jalon solide sans prétendre que personne n’avait jamais utilisé le mot auparavant."
        },
        {
          "titre": "Trois de quoi ?",
          "texte": "Sans unité, le chiffre exprime surtout une montée de gamme. Les ingrédients, le degré et les étapes de fermentation ne sont pas multipliés uniformément par trois."
        }
      ]
    },
    {
      "id": "quadruple",
      "nom": "Quadruple",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Usage commercial international",
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
        "details": "Quadrupel désigne souvent une ale très forte d’inspiration belge ; le mot moderne ne prouve ni quatre fermentations ni un facteur quatre."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint",
          "Tulipe"
        ]
      },
      "description": "« Quadruple » paraît médiévale, mais son repère commercial majeur est récent : La Trappe indique avoir lancé sa Quadrupel en 1991. Depuis, le mot couvre des ales très fortes, souvent ambrées ou brunes, proches des Belgian Dark Strong Ales. Il n’exige ni quatre fermentations ni quatre fois le malt ; il couronne surtout une gamme numérique.",
      "histoireEtOrigines": `Quadruple possède l’air ancien des chiffres monastiques, alors que sa carrière moderne est remarquablement bien datée. La brasserie trappiste La Trappe situe en 1991 l’introduction de sa Quadrupel, bière à 10 % vol. devenue permanente. Le nom a offert une suite naturelle à Dubbel et Tripel, puis s’est diffusé dans les brasseries internationales comme sommet d’une hiérarchie belge.

    La diffusion a élargi le contenu. Beaucoup de Quadrupels sont fortes, ambrées à brunes, riches en fruits secs, caramel et chaleur alcoolique. Elles chevauchent largement la catégorie Belgian Dark Strong Ale des guides de styles. Mais ce profil est un usage brassicole, pas une définition juridique française ni un cahier des charges uniforme. Certaines maisons écrivent Quad, d’autres Quadrupel ou Quadruple ; les degrés et les couleurs varient.

    Le chiffre n’organise aucune multiplication vérifiable. Une Quadrupel n’a pas nécessairement quatre fermentations, quatre malts ou quatre fois la force d’une bière simple. Sa production demande réellement un moût dense, une fermentation robuste et un équilibre capable de porter l’alcool ; ce sont ces contraintes, et non l’arithmétique de l’étiquette, qui façonnent le verre. Les formats de service réduits rappellent d’ailleurs mieux sa puissance que son numéro, surtout à table. Pour le consommateur, le nom annonce généralement le haut de gamme alcoolique d’inspiration belge. Le pourcentage et la description confirment ensuite si la couronne tient sur la tête.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "L’usage dominant décrit une forte ale belge sombre ou ambrée ; la recette doit gérer densité, atténuation et alcool sans règle du facteur quatre.",
        "maltsEtCereales": [
          "Malts pâles et foncés, malts caramel et sucres peuvent construire profondeur et couleur sans multiplier un grist de référence."
        ],
        "houblons": [
          "Le houblon équilibre la richesse mais laisse généralement malt, fruit fermentaire et alcool au premier plan."
        ],
        "levuresEtMicroorganismes": [
          "Une souche belge tolérante à l’alcool crée esters et phénols ; sa santé est plus importante que son folklore."
        ],
        "ingredientsComplementaires": [
          "Sucres très fermentescibles peuvent relever le degré et alléger la texture ; épices ou bois restent optionnels."
        ],
        "profilEau": "Alcalinité ajustée à la couleur réelle, calcium utile à la fermentation et minéralité sans dureté.",
        "empatage": "Un moût fermentescible évite d’empiler sucre résiduel sur un degré déjà élevé.",
        "ebullitionEtHoublonnage": "Concentration et amertume sont calculées pour conserver une finale mobile malgré la densité.",
        "fermentation": "Levain suffisant, oxygène et température progressive permettent d’achever une fermentation éprouvante sans solvants excessifs.",
        "maturation": "Une garde mesurée intègre fruit, malt et alcool ; l’oxydation peut apporter des notes agréables puis rapidement dépasser ce bénéfice.",
        "profilRecherche": "Une grande force intégrée et complexe, lue comme un usage moderne d’inspiration belge plutôt qu’une multiplication littérale."
      },
      "sources": [
        {
          "organisme": "La Trappe Trappist",
          "edition": null,
          "reference": "History — introduction of La Trappe Quadrupel in 1991",
          "type": "source_primaire_producteur",
          "url": "https://uk.latrappetrappist.com/gb/en/la-trappe-trappist/history.html",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Belgian Dark Strong Ale — recouvrement avec l’usage Quadrupel",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/26/26D/belgian-dark-strong-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "1991, un faux air d’éternité",
          "texte": "La Trappe documente l’apparition de sa Quadrupel en 1991. Le produit s’appuie sur une longue tradition monastique, mais son nom de gamme moderne n’a pas besoin d’être vieilli artificiellement pour être intéressant."
        },
        {
          "titre": "Quad et Dark Strong",
          "texte": "Les deux ensembles se recouvrent souvent dans le verre. L’un vient d’un nom commercial devenu catégorie ; l’autre sert de classement descriptif dans certains guides. Leur frontière reste poreuse."
        }
      ]
    },
    {
      "id": "biere-sans-alcool",
      "nom": "Bière sans alcool",
      "collectionId": 9,
      "nature": "R",
      "parentPrincipalId": null,
      "aliases": [
        "Alcohol-Free Beer",
        "Non-Alcoholic Beer"
      ],
      "paysOrigine": [
        "France",
        "International"
      ],
      "origine": {
        "libelle": "Cadres réglementaires nationaux",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 0,
        "max": 1.2,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "En France, le produit doit résulter d’une désalcoolisation ou d’une fermentation commencée puis limitée, avec un titre acquis au plus égal à 1,2 % vol."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Pint"
        ]
      },
      "description": "En France, « bière sans alcool » ne signifie pas nécessairement zéro : le décret réserve la dénomination aux bières ne dépassant pas 1,2 % vol., obtenues par désalcoolisation ou par début de fermentation. Le cadre change selon les pays, car l’Union européenne n’a pas harmonisé un seuil unique. Le chiffre précis et la juridiction comptent donc autant que les grands caractères.",
      "histoireEtOrigines": `La contradiction est inscrite dans la langue : une bière « sans alcool » peut légalement en contenir un peu. En France, le décret de 1992 fixe une définition précise et actuellement applicable. Le produit doit présenter un titre alcoométrique acquis inférieur ou égal à 1,2 % vol. et être obtenu soit par désalcoolisation d’une bière, soit par un début de fermentation. Cette seconde condition est importante : la dénomination n’est pas un simple synonyme de soda au goût de malt.

    Deux grandes familles techniques répondent à cette définition. La fermentation peut être limitée par la recette, la souche, la température ou l’arrêt du procédé afin de produire peu d’éthanol ; il reste alors à maîtriser douceur, arômes de moût et stabilité microbiologique. La bière peut aussi être fermentée plus classiquement puis désalcoolisée. Distillation sous vide, évaporation et procédés membranaires cherchent à retirer l’éthanol en préservant des composés aromatiques qui ne se laissent pas toujours convaincre de rester. Le marché progresse précisément parce que ces technologies deviennent plus fines.

    Le seuil français n’est pas une règle européenne uniforme. Une étude commandée par la Commission a relevé la fragmentation des définitions nationales pour les boissons no/low alcohol. Il faut donc éviter de transporter le 1,2 % d’un pays à l’autre comme une vérité universelle. Pour le consommateur, « sans alcool » garantit en France une catégorie et un plafond, pas l’absence absolue d’éthanol. Le degré indiqué, la mention 0,0 éventuelle et les informations du fabricant permettent d’aller plus loin ; pour certaines contraintes médicales ou personnelles strictes, cette nuance n’est pas une virgule décorative.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le procédé constitutif est une fermentation limitée ou une désalcoolisation, avec contrôle analytique du titre final et protection renforcée du produit.",
        "maltsEtCereales": [
          "Une faible densité ou un moût conçu avec peu de sucres fermentescibles peut limiter l’alcool ; une bière destinée à être désalcoolisée peut partir d’une recette plus classique."
        ],
        "houblons": [
          "La perte d’arômes pendant la désalcoolisation et la faible matrice gustative demandent un houblonnage soigneusement recalibré."
        ],
        "levuresEtMicroorganismes": [
          "Souches produisant peu d’alcool, fermentation interrompue ou levure ordinaire avant retrait de l’éthanol correspondent à des stratégies distinctes."
        ],
        "ingredientsComplementaires": [
          "Arômes récupérés ou ajustements de texture peuvent compenser les pertes, dans le respect de la dénomination et de l’étiquetage."
        ],
        "profilEau": "Une faible masse aromatique rend les déséquilibres minéraux plus visibles ; pH et sels participent aussi à la stabilité.",
        "empatage": "Des températures favorisant les dextrines limitent parfois les sucres fermentescibles, au risque de laisser une douceur de moût.",
        "ebullitionEtHoublonnage": "Le programme anticipe les pertes du procédé aval et évite une amertume dure dans un corps aminci.",
        "fermentation": "Elle est volontairement limitée ou précède la désalcoolisation ; en France, le produit fini ne dépasse pas le plafond légal de 1,2 % vol.",
        "maturation": "Faible alcool et sucres résiduels augmentent l’importance de l’hygiène, de la pasteurisation éventuelle, de la filtration et de la chaîne froide.",
        "profilRecherche": "Une bière stable et aromatiquement complète malgré un procédé qui limite ou retire l’éthanol, avec un degré final clairement compris."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Commission européenne",
          "edition": "2023",
          "reference": "Study on low/no alcohol beverages — marché et fragmentation des cadres nationaux",
          "type": "rapport_institutionnel",
          "url": "https://agriculture.ec.europa.eu/common-agricultural-policy/cap-overview/pmef/products-and-markets/study-lowno-alcohol-beverages_en",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Foods",
          "edition": "2023",
          "reference": "Dealcoholization of Unfiltered and Filtered Lager Beer by Hollow Fiber Nanofiltration Membranes",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10058455/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Deux portes d’entrée",
          "texte": "Limiter la création d’alcool et retirer l’alcool après fermentation ne laissent pas les mêmes sucres, arômes ni risques de stabilité. Le droit français admet les deux chemins ; la qualité dépend de la façon dont le brasseur compense leurs défauts."
        },
        {
          "titre": "Sans ne veut pas dire zéro",
          "texte": "Le plafond français est de 1,2 % vol. Cette règle donne une définition claire à la dénomination, mais elle oblige à distinguer le langage courant — absence — du langage juridique — très faible teneur encadrée."
        }
      ]
    },
    {
      "id": "0-0-pourcent",
      "nom": "0,0 %",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [
        "0.0%"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Allégation commerciale",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 0,
        "max": 0.05,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": null,
        "max": null,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": null,
        "max": null,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "0,0 % est une déclaration numérique volontaire à vérifier analytiquement ; le décret français ne la définit pas comme une troisième méthode de fermentation."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Pint"
        ]
      },
      "description": "« 0,0 % » n’est pas, en France, une dénomination de bière distincte définie par le décret de 1992. C’est une affirmation chiffrée, soumise aux règles générales d’information loyale, qui suggère une cible plus stricte que le plafond de 1,2 % de « sans alcool ». Elle ne permet pourtant pas, à elle seule, d’inventer une tolérance analytique universelle ni de promettre un zéro absolu.",
      "histoireEtOrigines": `Lorsque le marché des bières sans alcool s’est diversifié, « 0,0 % » a résolu un problème de langage commercial : comment distinguer visuellement un produit visant presque aucune trace d’un autre qui respecte simplement le plafond national ? Le nombre est devenu une sous-catégorie de rayon, immédiatement lisible. En France, il ne figure pourtant pas parmi les dénominations définies par le décret bière. La catégorie juridique reste « bière sans alcool » jusqu’à 1,2 % vol. selon les conditions prévues ; 0,0 est une information supplémentaire.

    Cette information est encadrée par le principe général du règlement européen 1169/2011 : la présentation d’un aliment ne doit pas induire en erreur, notamment sur ses caractéristiques et sa composition. Mais ce principe ne fournit pas dans le décret français une définition autonome de 0,0, ni un seuil harmonisé pour toutes les bières de l’Union. Mesure, arrondi, méthode analytique et spécification interne doivent être attribués au produit ou à la juridiction réellement documentés. Écrire que toute 0,0 contient exactement zéro molécule d’éthanol serait transformer un affichage décimal en expérience de physique parfaite.

    La distinction utile tient donc en deux phrases. « Sans alcool » est une dénomination française avec procédé et plafond ; « 0,0 % » est une allégation numérique qui vise à être plus explicite, sans effacer les règles de loyauté ni les variations nationales. Le consommateur peut consulter le titre déclaré, les questions fréquentes du fabricant et, lorsque l’enjeu est strict, les spécifications analytiques. Le zéro attire l’œil ; sa signification exacte doit rester attachée au produit qui l’imprime.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Les mêmes technologies que pour le sans-alcool peuvent être mobilisées, avec une cible analytique plus basse revendiquée par le produit.",
        "maltsEtCereales": [
          "La formulation doit créer suffisamment de goût malgré une production d’éthanol minimale ou son retrait poussé."
        ],
        "houblons": [
          "Arômes et amertume sont ajustés à une matrice très légère et aux pertes éventuelles de désalcoolisation."
        ],
        "levuresEtMicroorganismes": [
          "Fermentation très limitée, souches adaptées ou fermentation complète suivie d’un retrait renforcé sont possibles."
        ],
        "ingredientsComplementaires": [
          "Les ajustements aromatiques ou de texture ne se déduisent pas du chiffre et doivent être lus dans l’information produit."
        ],
        "profilEau": "Le contrôle du pH soutient goût et stabilité dans une boisson presque dépourvue de l’effet protecteur de l’alcool.",
        "empatage": "La création de sucres peu fermentescibles peut maintenir le corps, mais exige une gestion rigoureuse de la douceur et des microbes.",
        "ebullitionEtHoublonnage": "Le procédé est calibré pour ne pas surcharger une base délicate et pour compenser les pertes en aval.",
        "fermentation": "La cible 0,0 est vérifiée sur le produit fini selon la méthode et les spécifications applicables ; le mot ne prescrit pas le chemin technique.",
        "maturation": "Stabilisation et conditionnement sont critiques, particulièrement si des sucres fermentescibles subsistent.",
        "profilRecherche": "Une allégation chiffrée loyale, une méthode de production maîtrisée et un produit stable dont la cible exacte est documentée."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Union européenne — EUR-Lex",
          "edition": null,
          "reference": "Règlement (UE) n° 1169/2011 — pratiques loyales d’information, article 7",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02011R1169-20250401",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Commission européenne",
          "edition": "2023",
          "reference": "Study on low/no alcohol beverages — executive summary",
          "type": "rapport_institutionnel",
          "url": "https://op.europa.eu/en/publication-detail/-/publication/f45aaea7-b7e9-11ed-8912-01aa75ed71a1/language-fr",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Foods",
          "edition": "2023",
          "reference": "Dealcoholization of Unfiltered and Filtered Lager Beer by Hollow Fiber Nanofiltration Membranes",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10058455/",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Un chiffre hors du décret bière",
          "texte": "Le texte français définit « bière sans alcool », pas une dénomination séparée « bière 0,0 ». La seconde mention peut compléter la première, mais elle ne possède pas dans ce décret son propre procédé ni sa propre définition."
        },
        {
          "titre": "Le zéro et la mesure",
          "texte": "Une analyse possède une limite de quantification et un étiquetage obéit à des règles de présentation. Sans source propre au produit, il faut résister à la tentation de transformer 0,0 en seuil analytique universel."
        }
      ]
    },
    {
      "id": "biere-sans-gluten",
      "nom": "Bière sans gluten",
      "collectionId": 9,
      "nature": "R",
      "parentPrincipalId": null,
      "aliases": [
        "Gluten-Free Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Allégation réglementée",
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
        "details": "Le seuil concerne le produit fini ; fermentation et hydrolyse peuvent fragmenter le gluten, ce qui rend la méthode analytique particulièrement importante."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au style de base"
        ]
      },
      "description": "Dans l’Union européenne, « sans gluten » signifie au plus 20 mg/kg de gluten dans le produit vendu. Une bière peut partir de céréales naturellement sans gluten ou d’orge dont le gluten est réduit par traitement. La seconde voie reste une bière fermentée hydrolysée, plus délicate à mesurer : la mention est un seuil réglementaire, pas une déclaration d’absence moléculaire ni un style.",
      "histoireEtOrigines": `Le défi paraît simple tant qu’on imagine le gluten comme un objet entier que l’on pourrait filtrer. Dans la bière, fermentation et traitements enzymatiques fragmentent les protéines en peptides de tailles diverses. Deux familles de produits se sont donc développées. Les bières brassées avec sorgho, riz, millet, sarrasin ou autres matières naturellement sans gluten évitent les céréales concernées, sous réserve des contaminations croisées. Les bières dites gluten-removed ou déglutinisées partent souvent d’orge et cherchent à hydrolyser suffisamment ses protéines.

    Le règlement européen 828/2014 fixe des mots précis. « Sans gluten » exige une teneur ne dépassant pas 20 mg/kg dans l’aliment vendu. « Très faible teneur en gluten » autorise jusqu’à 100 mg/kg, mais vise des produits contenant du blé, du seigle, de l’orge, de l’avoine ou leurs variétés croisées spécialement traités pour réduire le gluten. Ces seuils décrivent le produit fini ; ils ne transforment pas l’orge en céréale naturellement exempte de gluten.

    L’analyse des boissons fermentées ajoute une vraie incertitude technique. Pour les matrices hydrolysées comme la bière, l’AOECS indique l’usage d’un test R5 compétitif plutôt que du format sandwich destiné aux protéines intactes. Des études comparant les méthodes ont trouvé des classements divergents autour du seuil, rappelant que le chiffre dépend aussi de la capacité à détecter les fragments pertinents. La mention légale reste opérante, mais le consommateur cœliaque peut préférer un produit certifié et documenté. Il faut alors examiner deux indices : la céréale employée et la méthode qui a mesuré ce qu’il en reste.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La contrainte constitutive est d’atteindre et de vérifier le seuil final, soit en évitant les céréales à gluten, soit en réduisant leurs protéines.",
        "maltsEtCereales": [
          "Sorgho, millet, riz, maïs ou pseudo-céréales offrent une voie naturellement sans gluten ; l’orge traitée offre une autre voie réglementaire mais non la même matière première."
        ],
        "houblons": [
          "Le houblon ne définit pas la catégorie et peut suivre n’importe quel profil compatible avec la base."
        ],
        "levuresEtMicroorganismes": [
          "La fermentation fragmente déjà certaines protéines ; elle ne suffit pas à garantir le seuil sans contrôle du produit fini."
        ],
        "ingredientsComplementaires": [
          "Des enzymes protéolytiques peuvent réduire le gluten ; leur efficacité et l’analyse des fragments doivent être validées."
        ],
        "profilEau": "Les céréales alternatives changent pH, minéraux et comportement de l’empâtage ; l’eau est adaptée à leur chimie réelle.",
        "empatage": "Gélatinisation, enzymes et filtration diffèrent fortement avec sorgho, riz ou sarrasin ; une base d’orge traitée suit un autre schéma.",
        "ebullitionEtHoublonnage": "Le programme de houblon reste stylistique ; la maîtrise des contaminations croisées continue pendant tout le procédé.",
        "fermentation": "Le contrôle analytique doit porter sur la bière finie et employer une méthode adaptée à la matrice hydrolysée.",
        "maturation": "Transferts, cuves et conditionnement font partie du plan de prévention des contaminations.",
        "profilRecherche": "Un produit sous le seuil applicable, mesuré par une méthode appropriée, avec une chaîne de production documentée."
      },
      "sources": [
        {
          "organisme": "Union européenne — EUR-Lex",
          "edition": null,
          "reference": "Règlement d’exécution (UE) n° 828/2014 — mentions relatives à l’absence ou à la présence réduite de gluten",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32014R0828",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Association of European Coeliac Societies",
          "edition": null,
          "reference": "Statement on gluten-free beer and analysis of hydrolysed products",
          "type": "organisme_certificateur",
          "url": "https://www.aoecs.org/advocacy/position-papers/statement-on-gluten-free-beer/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Foods",
          "edition": "2021",
          "reference": "Gluten Assessment in Beers: Comparison by Different Analytical Methods",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8224778/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "20 et 100 mg/kg",
          "texte": "L’Union européenne distingue « sans gluten » à 20 mg/kg au plus et « très faible teneur en gluten » à 100 mg/kg au plus sous conditions. Les deux formulations ne sont ni synonymes ni appréciations libres."
        },
        {
          "titre": "Le problème des fragments",
          "texte": "Dans une bière hydrolysée, les protéines ne sont plus intactes. Un test conçu pour saisir deux sites sur une grande molécule peut sous-réagir lorsque celle-ci a été découpée ; d’où l’importance d’une méthode compétitive adaptée."
        }
      ]
    },
    {
      "id": "pur-malt",
      "nom": "Pur malt",
      "collectionId": 9,
      "nature": "R",
      "parentPrincipalId": null,
      "aliases": [
        "All Malt"
      ],
      "paysOrigine": [
        "France",
        "International"
      ],
      "origine": {
        "libelle": "Mention de composition",
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
        "details": "La mention porte sur la préparation du moût à partir de seuls malts de céréales ; elle ne prescrit aucune levure ni famille de fermentation."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au style de base"
        ]
      },
      "description": "En France, « pur malt » est une dénomination réservée aux bières dont le moût a été préparé uniquement à partir de malt de céréales. Elle exclut donc les céréales non maltées et sucres comme matières de préparation du moût, mais ne signifie pas « pur orge », ne fixe aucun degré et ne garantit ni tradition, ni intensité maltée, ni absence de tout ingrédient aromatique autorisé.",
      "histoireEtOrigines": `Pur malt ressemble à une promesse qualitative avant même que l’on sache ce qu’elle mesure. Dans le droit français, sa fonction est plus étroite et plus utile : l’article 2 du décret bière réserve la mention aux produits dont le moût a été préparé uniquement à partir de malt de céréales. Le mot « céréales » compte autant que « pur ». Une recette peut donc réunir malt d’orge, malt de blé ou malt de seigle et rester dans cette logique ; la mention n’est pas synonyme de 100 % orge.

    Le contraste se comprend avec la définition générale de la bière, qui permet que le malt de céréales représente au moins la moitié du poids des matières amylacées ou sucrées mises en œuvre, le reste pouvant inclure notamment céréales crues et sucres alimentaires dans les limites du cadre. Pur malt resserre cette composition du moût. Il ne dit toutefois rien du touraillage, de la couleur, du houblon, de la levure, du degré ou de la taille du producteur.

    Il faut aussi éviter d’étendre le mot au-delà de sa phrase juridique. La mention concerne la préparation du moût ; elle n’est pas une certification biologique et ne promet pas un produit sans épice, fruit ou autre caractère déclaré selon les dénominations applicables. Sur l’étiquette, elle répond proprement à une question de matière fermentescible. Si le buveur veut savoir si cette matière donnera biscuit, pain, sécheresse ou caramel, il lui reste à lire le style. « Pur » a ici un objet précis ; il ne distribue pas des médailles de vertu à la bouteille.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La règle distinctive concerne l’origine maltée de toutes les matières utilisées pour préparer le moût, sans cahier des charges sensoriel.",
        "maltsEtCereales": [
          "Uniquement des malts de céréales pour la préparation du moût ; mélanges d’orge, blé ou seigle maltés possibles."
        ],
        "houblons": [
          "La mention n’impose ni variété ni intensité de houblon."
        ],
        "levuresEtMicroorganismes": [
          "Toute fermentation compatible avec la bière peut suivre ce moût ; le mot ne qualifie pas la souche."
        ],
        "ingredientsComplementaires": [
          "La portée exacte reste celle de la préparation du moût ; d’éventuels caractères ajoutés doivent respecter leur propre dénomination et leur étiquetage."
        ],
        "profilEau": "Aucune composition minérale n’est associée à la pureté maltée.",
        "empatage": "Tous les sucres du moût doivent provenir des malts de céréales mis en œuvre, ce qui rend l’activité enzymatique et le choix des malts centraux.",
        "ebullitionEtHoublonnage": "Le houblonnage intervient librement après la production du moût pur malt.",
        "fermentation": "Haute, basse ou autre conduite : la qualification demeure une question de matières du moût.",
        "maturation": "Aucune durée ni méthode de garde n’est exigée.",
        "profilRecherche": "Vérifier la composition maltée du moût sans extrapoler qualité, origine, couleur ou force."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Pur malt n’est pas pur orge",
          "texte": "La formule légale parle de malt de céréales au pluriel générique. Les malts de blé, de seigle ou d’autres céréales ne sont donc pas exclus par le principe de la mention."
        }
      ]
    },
    {
      "id": "biere-a",
      "nom": "Bière à…",
      "collectionId": 9,
      "nature": "R",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "France"
      ],
      "origine": {
        "libelle": "Dénomination réglementaire française",
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
        "details": "L’ingrédient annoncé peut apporter sucres et micro-organismes ; son ajout ou sa macération doit être intégré à la fermentation et à la stabilité du produit."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au style de base"
        ]
      },
      "description": "En France, « bière à… » désigne une bière élaborée par ajout ou macération de matières végétales, de produits d’origine végétale, de boissons alcoolisées ou de miel. Ces apports ne doivent pas dépasser 10 % du volume fini ; une boisson alcoolisée ne peut relever le titre de plus de 0,5 point. Le mot indique donc une matière réellement employée, pas seulement son arôme.",
      "histoireEtOrigines": `Une préposition suffit à changer la preuve attendue. « Bière à la cerise » fait comprendre qu’une matière associée à la cerise est entrée dans le produit ; « bière aromatisée à la cerise » indique l’emploi d’un arôme. Le décret français organise cette différence. La dénomination « bière à… » couvre l’ajout ou la macération de matières végétales, de produits d’origine végétale, de boissons alcoolisées ou de miel. La quantité totale concernée est plafonnée à 10 % du volume du produit fini.

    Le texte ajoute une règle particulière pour les boissons alcoolisées : leur introduction ne peut augmenter le titre alcoométrique acquis final de plus de 0,5 % en volume. Une bière passée dans un fût ayant contenu du whisky n’est pas nécessairement une « bière au whisky » au sens d’un ajout ; une bière recevant effectivement la boisson doit respecter le cadre. La distinction entre contact, macération et incorporation évite que le contenant ne se transforme verbalement en ingrédient.

    Le nom ne donne toutefois ni la forme ni la quantité précise sous le plafond. Fruit entier, jus, purée, plante, infusion, miel ou boisson peuvent intervenir à des étapes différentes, avec des effets distincts sur les sucres, l’acidité et la stabilité. Le lecteur doit chercher la dénomination complète et les informations du fabricant pour savoir ce qui est réellement entré, quand et sous quelle forme. « À… » garantit une relation matérielle encadrée ; il ne garantit pas que l’ingrédient dominera le goût, encore moins qu’il poussera en grand sur l’illustration.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le point constitutif est l’ajout ou la macération réelle de la matière annoncée, dans les limites françaises de volume et, pour l’alcool, d’augmentation du titre.",
        "maltsEtCereales": [
          "La base doit laisser de la place à l’ingrédient sans supposer une céréale particulière."
        ],
        "houblons": [
          "Amertume et aromatique sont réglés pour ne pas écraser ou durcir fruit, plante, miel ou boisson ajoutée."
        ],
        "levuresEtMicroorganismes": [
          "La souche doit gérer les sucres apportés ; fruit cru et miel augmentent aussi les exigences microbiologiques."
        ],
        "ingredientsComplementaires": [
          "Matière végétale, produit végétal, boisson alcoolisée ou miel réellement ajouté ou macéré ; total au plus égal à 10 % du volume fini en France."
        ],
        "profilEau": "L’acidité et les tanins de l’ajout peuvent modifier le réglage minéral pertinent.",
        "empatage": "La fermentescibilité de la base anticipe la quantité de sucres que l’ingrédient apportera plus tard.",
        "ebullitionEtHoublonnage": "Le moment d’ajout dépend de la volatilité, de l’extraction recherchée et du besoin d’assainissement.",
        "fermentation": "Sucres ajoutés, acidité et éventuelle flore de l’ingrédient sont suivis jusqu’à stabilisation.",
        "maturation": "Macération et contact sont chronométrés pour extraire l’arôme sans excès végétal, tannique ou oxydatif.",
        "profilRecherche": "Savoir quelle matière a réellement été employée, sous quelle forme et à quelle étape, plutôt que juger par le dessin."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "La limite des 10 %",
          "texte": "Le plafond est exprimé en volume du produit fini pour les matières et boissons visées par la dénomination. Il ne dit pas que toute bière à un ingrédient en contient exactement 10 %, ni que ce chiffre mesure son intensité aromatique."
        },
        {
          "titre": "Le fût n’est pas la bouteille qu’il contenait",
          "texte": "Une maturation dans un ancien fût produit un contact et des extractions. L’ajout direct d’une boisson alcoolisée est un autre acte, auquel le décret associe une limite d’augmentation du degré."
        }
      ]
    },
    {
      "id": "biere-aromatisee-a",
      "nom": "Bière aromatisée à…",
      "collectionId": 9,
      "nature": "R",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "France"
      ],
      "origine": {
        "libelle": "Dénomination réglementaire française",
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
        "details": "L’arôme peut être ajouté avant ou après fermentation selon sa stabilité ; il ne constitue pas nécessairement un substrat fermenté."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au style de base"
        ]
      },
      "description": "En France, « bière aromatisée à… » signifie qu’un ou plusieurs arômes relevant du règlement européen 1334/2008 ont été ajoutés. Le fruit, la plante ou le dessert nommé n’a donc pas nécessairement été incorporé sous sa forme ordinaire, même si une recette peut cumuler ingrédient et arôme. La formulation décrit la source de la note annoncée, pas une récolte imaginaire dans la cuve.",
      "histoireEtOrigines": `L’industrialisation des arômes a permis de produire des profils stables, disponibles toute l’année et reproductibles sans transporter des tonnes de fruit. Il fallait alors que le langage distingue la présence d’une matière de l’emploi d’une préparation aromatisante. Le décret français réserve « bière aromatisée à… » aux produits auxquels ont été ajoutés un ou plusieurs arômes tels que définis par le règlement européen 1334/2008.

    Cette définition ne signifie pas automatiquement artificiel. Le règlement distingue plusieurs catégories et encadre notamment l’usage du terme « naturel ». Elle ne signifie pas non plus que le fruit ou la plante est forcément absent : une recette peut combiner purée et arôme pour renforcer ou standardiser un profil. Ce que la mention garantit, c’est que l’aromatisation intervient dans la construction du caractère nommé. Elle doit être lue différemment de « bière à… », qui exige une relation matérielle d’ajout ou de macération avec les catégories prévues par le décret.

    Techniquement, un arôme concentré peut être dosé très bas tout en dominant le nez ; sa quantité ne se compare donc pas au plafond volumique de la dénomination « bière à… ». Le moment d’incorporation protège les composés volatils et la reproductibilité du lot. Pour le consommateur, la préposition longue est ici la plus honnête : elle évite de faire passer un profil aromatique pour un panier de matières premières. La petite différence de mots tient parfois sur une ligne ; dans la cuve, elle change la nature de la preuve.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "L’acte distinctif est l’ajout d’un arôme réglementé ; la recette doit gérer son dosage, sa volatilité et sa cohérence avec la base.",
        "maltsEtCereales": [
          "La base est choisie pour porter l’arôme sans le brouiller ; aucune céréale n’est imposée."
        ],
        "houblons": [
          "Le houblon peut compléter ou concurrencer les composés aromatiques, ce qui demande un équilibre intentionnel."
        ],
        "levuresEtMicroorganismes": [
          "Une fermentation neutre laisse l’arôme au premier plan ; une souche expressive peut créer des accords plus complexes."
        ],
        "ingredientsComplementaires": [
          "Un ou plusieurs arômes conformes au règlement 1334/2008 ; un ingrédient réel peut aussi être présent s’il est déclaré et documenté."
        ],
        "profilEau": "Le pH et la minéralité modifient la perception de fraîcheur, de fruit et de douceur.",
        "empatage": "Corps et sucre résiduel sont calibrés pour éviter qu’un arôme gourmand ne devienne écœurant ou qu’un agrume ne paraisse maigre.",
        "ebullitionEtHoublonnage": "Les arômes volatils sont souvent protégés d’une longue ébullition ; le point d’ajout dépend de leur formulation.",
        "fermentation": "L’arôme peut être incorporé après la phase la plus active pour limiter les pertes, avec contrôle d’homogénéité et de stabilité.",
        "maturation": "Le temps permet de vérifier intégration et évolution du profil, mais certains arômes demandent surtout de la fraîcheur.",
        "profilRecherche": "Une aromatisation identifiable, équilibrée et décrite sans laisser croire automatiquement à l’incorporation de la matière représentée."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Union européenne — EUR-Lex",
          "edition": null,
          "reference": "Règlement (CE) n° 1334/2008 relatif aux arômes et ingrédients alimentaires possédant des propriétés aromatisantes — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02008R1334-20241203",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Aromatisé ne veut pas dire artificiel",
          "texte": "Le règlement européen définit les catégories d’arômes et réserve l’emploi du qualificatif « naturel » à des conditions précises. La distinction pertinente est d’abord entre arôme et ingrédient incorporé, pas entre une caricature de laboratoire et une caricature de verger."
        },
        {
          "titre": "Les deux peuvent coexister",
          "texte": "Une bière peut recevoir du fruit et un arôme. La dénomination et l’information produit doivent alors permettre de comprendre la contribution de chacun sans présenter l’arôme comme le fruit lui-même."
        }
      ]
    },
    {
      "id": "biere-de-fermentation-lactique",
      "nom": "Bière de fermentation lactique",
      "collectionId": 9,
      "nature": "R",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "France"
      ],
      "origine": {
        "libelle": "Dénomination réglementaire française",
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
        "details": "La dénomination française exige qu’une fermentation lactique intervienne pendant l’élaboration ; acidification par simple ajout d’acide et fermentation ne sont pas synonymes."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Teku"
        ]
      },
      "description": "En France, « bière de fermentation lactique » — comme « Gueuze » dans le décret bière — est réservée aux produits ayant subi une fermentation lactique au cours de leur élaboration. Cela prouve un rôle microbien dans l’acidification, pas un style unique. Berliner Weisse, Gose ou productions spontanées diffèrent encore ; les mentions européennes « Oude Geuze/Vieille Gueuze » ajoutent leur propre tradition protégée.",
      "histoireEtOrigines": `L’acidité peut entrer dans une bière par plusieurs portes : acides produits par des bactéries, fermentation spontanée complexe, fruit, malt acidifié ou ajout direct d’un correcteur. Le décret français choisit une porte précise pour la dénomination « bière de fermentation lactique » : une fermentation lactique doit se produire pendant l’élaboration. Le texte associe également à cette condition l’emploi de « Gueuze ». Il ne suffit donc pas qu’un produit fini soit acide au goût.

    Cette définition nationale reste plus large qu’un style. Lactobacillaceae et autres bactéries lactiques peuvent intervenir dans une acidification rapide du moût, une cofermentation ou une maturation longue avec levures sauvages. Berliner Weisse, Gose et plusieurs sour ales modernes organisent ces organismes différemment. Le lambic et la gueuze traditionnelle suivent encore une trajectoire spécifique de fermentation spontanée, de vieillissement et d’assemblage.

    L’Union européenne protège en outre comme spécialités traditionnelles garanties les noms « Oude Geuze/Oude Gueuze, Oude Geuze-Lambiek/Oude Gueuze-Lambic, Oude Lambiek/Vieux Lambic ». Cette STG et son cahier des charges ne doivent pas être confondus avec la seule condition française de fermentation lactique pour le mot Gueuze. La présence du mot « vieille » n’est donc pas une simple flatterie de cave. Face à l’étiquette, il faut séparer trois questions : l’acide a-t-il été produit par fermentation, quel procédé et quels organismes ont travaillé, et une mention traditionnelle protégée est-elle revendiquée ? Une acidité a un pH ; une appellation possède aussi une histoire et un droit.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le critère constitutif est une production d’acide lactique par fermentation pendant l’élaboration ; organismes, durée et assemblage déterminent ensuite le style.",
        "maltsEtCereales": [
          "Orge, froment et autres céréales suivent les traditions ou les recettes modernes ; aucune composition unique n’est imposée par la mention française."
        ],
        "houblons": [
          "Une forte activité antibactérienne du houblon peut contrarier les bactéries lactiques ; dose et âge des houblons sont adaptés au procédé."
        ],
        "levuresEtMicroorganismes": [
          "Bactéries lactiques nécessaires au caractère de la dénomination, parfois avec Saccharomyces, Brettanomyces et flore spontanée."
        ],
        "ingredientsComplementaires": [
          "Sel, épices ou fruits appartiennent à certaines familles, jamais à la définition générale de fermentation lactique."
        ],
        "profilEau": "Alcalinité et pouvoir tampon influencent la vitesse et la perception de l’acidification.",
        "empatage": "La composition du moût et ses nutriments doivent convenir à la succession microbienne choisie.",
        "ebullitionEtHoublonnage": "Kettle sour, cofermentation et fermentation spontanée placent l’acidification de part et d’autre de l’ébullition ; ce choix change tout le contrôle microbiologique.",
        "fermentation": "Une fermentation lactique réelle doit intervenir ; température, oxygène et cultures déterminent sa cinétique et ses sous-produits.",
        "maturation": "De quelques jours à plusieurs années selon la méthode, avec assemblage indispensable dans certaines gueuzes traditionnelles.",
        "profilRecherche": "Une acidité produite et expliquée par le procédé, puis attribuée au bon style ou à la bonne protection sans raccourci."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Union européenne — EUR-Lex",
          "edition": null,
          "reference": "Règlement d’exécution (UE) 2017/2216 — STG Oude Geuze/Vieille Gueuze et autres bières traditionnelles",
          "type": "source_reglementaire",
          "url": "https://eur-lex.europa.eu/eli/reg_impl/2017/2216/oj?locale=fr",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "HORAL",
          "edition": null,
          "reference": "Traditional lambic beers — fermentation, vieillissement et assemblage",
          "type": "organisme_professionnel",
          "url": "https://horal.be/en/traditional-lambic-beers/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Acidifiée ou fermentée ?",
          "texte": "Ajouter de l’acide peut rapprocher une valeur de pH, mais ne remplace pas l’activité de bactéries lactiques exigée par la dénomination française. Les deux routes laissent aussi des signatures aromatiques différentes."
        },
        {
          "titre": "Gueuze et Oude Gueuze",
          "texte": "Le décret français associe Gueuze à une fermentation lactique. La STG européenne portant sur Oude/Vieille Gueuze ajoute un ensemble traditionnel plus spécifique. Un mot supplémentaire peut donc porter beaucoup plus qu’une nuance d’âge."
        }
      ]
    },
    {
      "id": "biere-de-garde-mention-legale-francaise",
      "nom": "Bière de garde — mention légale française",
      "collectionId": 9,
      "nature": "R",
      "parentPrincipalId": null,
      "aliases": [
        "Bière de garde"
      ],
      "paysOrigine": [
        "France"
      ],
      "origine": {
        "libelle": "France",
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
        "details": "La règle porte sur la durée après fermentation primaire : au moins vingt et un jours de garde, quelle que soit la famille de levure."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Calice"
        ]
      },
      "description": "En France, « bière de garde » est une mention réservée à une bière ayant subi au moins vingt et un jours de garde après la fermentation primaire. Cette règle ne lui impose ni origine nordiste, ni couleur ambrée, ni fermentation haute. Le style historique Bière de Garde possède un profil culturel plus étroit ; la dénomination légale, elle, chronomètre une étape.",
      "histoireEtOrigines": `Bière de garde porte deux histoires superposées. Dans le Nord de la France, le nom évoque des ales brassées pour mûrir, souvent maltées, blondes, ambrées ou brunes, liées à une culture régionale de conservation. Dans le droit français contemporain, l’article 2 du décret de 1992 emploie un critère beaucoup plus simple : la dénomination est réservée à une bière ayant subi une période de garde d’au moins vingt et un jours après la fermentation primaire.

    Le chronomètre juridique ne demande pas que la bière provienne du Nord, qu’elle soit de fermentation haute, qu’elle titre un certain degré ou qu’elle reproduise un profil historique. Une lager gardée assez longtemps peut satisfaire le critère ; une ale nordiste présentée comme style doit également respecter la règle si elle emploie la dénomination en France, mais son identité sensorielle ne se résume pas à vingt et un jours. La température, le contenant et la transformation réellement obtenue pendant cette période ne sont pas détaillés par le seuil.

    Cette distinction évite une fausse généalogie. La fiche stylistique raconte une tradition de brassage et de goût ; la présente fiche explique ce que les mots garantissent légalement sur une étiquette française. Ils garantissent une durée minimale après fermentation primaire, pas une ferme, une cave voûtée ou une levure régionale. Vingt et un jours constituent un fait contrôlable. Tout ce que l’imaginaire ajoute autour doit être soutenu par la provenance et la description du produit.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le seul invariant légal est une garde d’au moins vingt et un jours après fermentation primaire ; le reste dépend du produit.",
        "maltsEtCereales": [
          "Aucune composition n’est fixée ; les profils nordistes traditionnels privilégient souvent le malt, sans monopoliser la mention."
        ],
        "houblons": [
          "La garde peut fondre l’amertume et les arômes, mais aucun seuil n’est prescrit."
        ],
        "levuresEtMicroorganismes": [
          "Levures d’ale ou de lager sont compatibles avec la condition temporelle."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Le profil suit la recette et la région réelle, non le simple droit d’utiliser la mention.",
        "empatage": "Corps et fermentescibilité sont réglés selon le style ; ils ne participent pas au seuil de vingt et un jours.",
        "ebullitionEtHoublonnage": "Le programme anticipe l’évolution pendant la garde sans être défini par le décret.",
        "fermentation": "La fermentation primaire marque le point de départ de la période réglementaire.",
        "maturation": "Au moins vingt et un jours de garde après la fermentation primaire en France ; température et contenant ne sont pas imposés par cette phrase du décret.",
        "profilRecherche": "Vérifier la durée garantie, puis distinguer cette conformité du style régional et de ses qualités sensorielles."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Bière de Garde — profil stylistique à distinguer de la mention légale française",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/24/24C/biere-de-garde/",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Le vingt-deuxième jour",
          "texte": "À vingt jours, le produit ne remplit pas le seuil de la dénomination française ; à vingt et un, il le remplit. Cette netteté juridique ne dit toujours pas si la maturation a eu lieu à froid, en cuve, en bouteille ou avec quelle évolution sensorielle."
        },
        {
          "titre": "Une durée, pas un terroir",
          "texte": "Le texte ne réserve aucune région. Une origine nordiste peut donner au mot sa profondeur historique, mais elle constitue une information supplémentaire et non une conséquence du seul délai légal."
        }
      ]
    },
    {
      "id": "panache",
      "nom": "Panaché",
      "collectionId": 9,
      "nature": "R",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "France",
        "Europe"
      ],
      "origine": {
        "libelle": "France et Europe",
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
        "min": 0,
        "max": 10,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 3,
        "max": 20,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "La fermentation concerne la bière incorporée ; après assemblage, le panaché ne peut dépasser le plafond français de 1,2 % vol."
      },
      "service": {
        "temperatureMin": 2,
        "temperatureMax": 5,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Chope",
          "Pilsner"
        ]
      },
      "description": "En France, le panaché est défini comme le mélange exclusif de bière et de boisson gazeuse aromatisée sans alcool, avec au plus 1,2 % vol. d’alcool acquis. La loi n’impose pas une proportion moitié-moitié ni le seul citron. C’est donc une boisson de mélange réglementée : la bière apporte la fermentation, le soda apporte sa propre voix.",
      "histoireEtOrigines": `Panaché signifie d’abord mélangé, bigarré. Dans le verre français, le mot a fini par désigner l’alliance populaire de bière et de limonade, servie au comptoir puis conditionnée industriellement. Le décret lui donne aujourd’hui des contours plus précis que le geste du serveur : le produit doit être constitué exclusivement d’un mélange de bière et de boisson gazeuse aromatisée sans alcool, et son titre alcoométrique acquis ne doit pas dépasser 1,2 % vol.

    Deux idées répandues ne figurent pas dans cette définition. Le mélange n’est pas légalement fixé à cinquante-cinquante, et la boisson gazeuse n’est pas nécessairement limitée à une limonade citronnée par le texte. Les proportions sont en pratique déterminées par le degré de la bière, la cible sensorielle et le plafond final. Le mot ne qualifie pas une bière fermentée avec du citron : la boisson gazeuse est mélangée à une bière déjà constituée.

    Cette architecture explique pourquoi Panaché n’est ni un style ni exactement un synonyme universel de Radler ou Shandy. Ces termes étrangers ont des usages, ratios et cadres nationaux variables ; un produit vendu comme panaché en France doit, lui, respecter la définition française. L’étiquette doit permettre de voir le degré final et les composants du mélange. Ici, la législation a fait quelque chose de rare : elle a pris une commande de terrasse très simple et lui a donné une frontière que le serveur peut mesurer.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le procédé constitutif est le mélange exclusif d’une bière et d’une boisson gazeuse aromatisée sans alcool, avec contrôle du degré final.",
        "maltsEtCereales": [
          "Ils appartiennent à la bière de départ ; la dénomination panaché n’en choisit aucun."
        ],
        "houblons": [
          "Une base très amère peut rester perceptible après dilution ; le choix dépend de l’équilibre avec la boisson gazeuse."
        ],
        "levuresEtMicroorganismes": [
          "La bière est fermentée avant le mélange ; le produit fini doit être stabilisé pour éviter une reprise inattendue."
        ],
        "ingredientsComplementaires": [
          "Boisson gazeuse aromatisée sans alcool, unique autre composante prévue par la définition française."
        ],
        "profilEau": "L’eau intervient dans la bière et dans la boisson gazeuse ; leurs acidités et minéralités se combinent.",
        "empatage": "Il concerne uniquement la bière de base et n’est pas défini par le mélange final.",
        "ebullitionEtHoublonnage": "La base est conçue pour conserver assez de caractère après assemblage sans heurter l’acidité ou le sucre du soda.",
        "fermentation": "Achevée et maîtrisée sur la bière avant assemblage ; le titre acquis du panaché fini reste à 1,2 % vol. ou moins.",
        "maturation": "L’enjeu final est l’homogénéité, la carbonatation et la stabilité du mélange plutôt qu’une garde de style.",
        "profilRecherche": "Un mélange rafraîchissant dont proportions, degré et composition respectent la définition au lieu d’être supposés."
      },
      "sources": [
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "DGCCRF",
          "edition": null,
          "reference": "Tout savoir sur l’étiquetage des bières",
          "type": "source_reglementaire",
          "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/tout-savoir-sur-letiquetage-des-bieres",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "Exclusivement deux familles",
          "texte": "La formule française associe bière et boisson gazeuse aromatisée sans alcool. Elle ne décrit pas un cocktail ouvert où sirops, spiritueux et jus pourraient s’ajouter librement tout en conservant la même dénomination."
        },
        {
          "titre": "Pas de moitié obligatoire",
          "texte": "Le plafond de 1,2 % vol. contraint les proportions en fonction de la bière choisie, mais le décret ne grave pas un ratio 50/50 dans le marbre du comptoir."
        }
      ]
    },
    {
      "id": "radler-shandy",
      "nom": "Radler / Shandy",
      "collectionId": 9,
      "nature": "A",
      "parentPrincipalId": null,
      "aliases": [
        "Radler",
        "Shandy"
      ],
      "paysOrigine": [
        "Allemagne",
        "Royaume-Uni",
        "International"
      ],
      "origine": {
        "libelle": "Europe, diffusion internationale",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 0.5,
        "max": 3.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 0,
        "max": 15,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 3,
        "max": 24,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "La bière est brassée puis mélangée à une boisson non alcoolisée ; proportions, base et stabilisation varient selon pays et producteurs."
      },
      "service": {
        "temperatureMin": 2,
        "temperatureMax": 5,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Chope",
          "Pilsner"
        ]
      },
      "description": "Radler et Shandy sont des noms culturels de mélanges à base de bière et de boisson non alcoolisée, souvent citronnée. Shandygaff est attesté dans l’anglais du XIXe siècle ; Radler signifie « cycliste » en allemand. La célèbre invention bavaroise de 1922 est une excellente histoire publicitaire, mais une attestation écrite antérieure oblige à la raconter comme légende, pas comme acte de naissance.",
      "histoireEtOrigines": `Le Shandy arrive avec des preuves écrites avant le Radler légendaire. Merriam-Webster rattache le mot à shandygaff, mélange de bière et de ginger beer attesté dans un roman anglais de 1853, puis raccourci à la fin du XIXe siècle. Le mélange évolue vers la limonade et d’autres boissons gazeuses. Son nom garde une origine obscure, mais sa chronologie est plus solide que beaucoup de récits de comptoir.

    Radler signifie cycliste en allemand, et l’histoire la plus célèbre place Franz Xaver Kugler à la Kugler-Alm en 1922 : face à une foule de cyclistes et à un stock de bière insuffisant, il aurait allongé ses chopes de limonade. Le récit est si parfait qu’il mérite précisément d’être vérifié. La Bayerische Akademie der Wissenschaften relève déjà Radlermaß dans l’ouvrage de Lena Christ publié en 1912, qui évoque ses souvenirs de cuisinière autour de 1900. Kugler a pu populariser le nom ; l’invention absolue ne tient plus comme certitude.

    Aujourd’hui, Radler, Alster, Shandy et variantes régionales ne possèdent pas un ratio mondial ni un cadre juridique commun. Citron, ginger beer, orange, soda clair ou herbes peuvent changer selon le lieu. En France, un produit répondant à la définition de Panaché doit respecter son mélange exclusif et son plafond de 1,2 % vol., alors qu’un Radler importé peut suivre la réglementation de son marché d’origine et les règles de reconnaissance mutuelle. Le cycliste sur l’étiquette raconte une étymologie ; le degré et la composition racontent la boisson.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le socle commun assemble une bière et un rafraîchissement sans alcool ; la base, le mixer, le ratio et le degré appartiennent aux usages locaux.",
        "maltsEtCereales": [
          "Lager claire, ale amère ou bière sombre peuvent servir de base selon la tradition régionale."
        ],
        "houblons": [
          "Une amertume modérée résiste à la dilution ; des houblons d’agrumes peuvent prolonger le mixer sans être obligatoires."
        ],
        "levuresEtMicroorganismes": [
          "La fermentation appartient à la bière de départ. Le produit assemblé doit rester stable malgré les sucres du mixer."
        ],
        "ingredientsComplementaires": [
          "Limonade, ginger beer, soda d’agrumes, orange ou boisson aux herbes selon la région et l’étiquette."
        ],
        "profilEau": "L’acidité, le sucre et la carbonatation du mixer modifient plus directement l’équilibre que le seul profil de l’eau de brassage.",
        "empatage": "Conçu pour une bière assez expressive après dilution, sans méthode propre au nom Radler ou Shandy.",
        "ebullitionEtHoublonnage": "L’amertume et les arômes sont anticipés avec le mixer choisi plutôt qu’avec une formule universelle.",
        "fermentation": "La bière est fermentée avant l’assemblage ; une stabilisation évite que les sucres ajoutés ne relancent la production d’alcool.",
        "maturation": "Le mélange privilégie généralement fraîcheur et carbonatation ; une longue garde est rarement son moteur.",
        "profilRecherche": "Identifier le nom local, le mixer, le ratio et le degré sans transformer la légende de 1922 en règle de production."
      },
      "sources": [
        {
          "organisme": "Merriam-Webster",
          "edition": null,
          "reference": "An Undiluted History of Shandy — shandygaff attesté au XIXe siècle",
          "type": "source_linguistique",
          "url": "https://www.merriam-webster.com/wordplay/word-history-of-shandygaff-or-shandy",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Bayerische Akademie der Wissenschaften",
          "edition": null,
          "reference": "Bayerisches Wörterbuch — Radlermaß et discussion de la légende de 1922",
          "type": "source_linguistique",
          "url": "https://bwb.badw.de/fileadmin/user_upload/Files/BWB/Goggolori/Goggolori_9.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Bayerischer Brauerbund",
          "edition": null,
          "reference": "Radler — récit professionnel bavarois autour de Franz Xaver Kugler",
          "type": "source_professionnelle",
          "url": "https://www.bayerisches-bier.de/bier-wissen/radler/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Légifrance",
          "edition": null,
          "reference": "Décret n° 92-307 du 31 mars 1992 relatif aux bières et boissons à base de bière — texte consolidé",
          "type": "source_reglementaire",
          "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000357138",
          "consultation": "2026-08-11"
        }
      ],
      "chapitres": [
        {
          "titre": "La panne de bière trop parfaite",
          "texte": "Kugler, treize mille cyclistes, une réserve de limonade et un nom instantané : la scène possède toutes les qualités d’une légende de marque. L’attestation antérieure ne la rend pas inutile ; elle la déplace de l’invention vers la popularisation."
        },
        {
          "titre": "1853, le shandygaff écrit",
          "texte": "Le mot apparaît dans The Adventures of Mr. Verdant Green avec d’autres boissons à la mode. Le premier mixer documenté est la ginger beer ; la limonade ne monopolise donc pas l’histoire britannique."
        }
      ]
    }

  ]
};

export default collection;
