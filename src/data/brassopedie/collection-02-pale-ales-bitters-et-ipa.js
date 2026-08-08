// Source canonique de la collection : taxonomie + contenu encyclopédique.
// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 2,
    "slug": "pale-ales-bitters-et-ipa",
    "nom": "Pale Ales, Bitters et IPA"
  },
  "cartes": [
    {
      "id": "pale-ale",
      "nom": "Pale Ale",
      "collectionId": 2,
      "nature": "F",
      "parentPrincipalId": "ale",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni",
        "International"
      ],
      "origine": {
        "libelle": "Royaume-Uni puis diffusion mondiale",
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
      "description": "La Pale Ale est une famille de clarté et de houblon : dorée à ambrée, fermentée en ale, assez sèche pour rester vive, assez maltée pour ne pas flotter dans le vide. Selon l’école, elle peut parler biscuit anglais, agrumes américains ou fruits du Nouveau Monde.",
      "histoireEtOrigines": `« Pale Ale » est d’abord un terme relatif : il désigne une ale plus claire que les bières brunes et noires qui dominaient longtemps la production britannique. À mesure que les techniques de touraillage permettent de sécher le malt avec davantage de contrôle et moins de fumée, les brasseurs obtiennent des malts plus pâles et plus réguliers. Aux XVIIe et XVIIIe siècles, ces malts restent coûteux et leurs bières ne constituent pas encore une famille homogène au sens moderne, mais ils ouvrent progressivement la voie aux pale ales de stock, aux bitters et aux futures India Pale Ales.

Au XIXe siècle, Burton upon Trent devient l’un des centres majeurs de la pale ale britannique. Son eau naturellement riche en sulfates favorise une perception sèche et tranchante du houblon, et le développement du chemin de fer facilite la diffusion nationale des bières de Burton. Dans le même temps, les mots « pale ale », « bitter » et « India pale ale » se chevauchent selon les brasseries, les marchés et le conditionnement. La taxonomie actuelle est donc plus nette que le vocabulaire historique : une Pale Ale victorienne ne se superpose pas automatiquement à une catégorie de concours moderne.

Au XXe siècle, les versions britanniques perdent souvent en densité et en alcool tandis que la culture du cask et du pub maintient les bitters. À partir des années 1970 et surtout 1980, les brasseurs américains reprennent le principe d’une ale claire et houblonnée mais remplacent une partie du vocabulaire aromatique anglais par Cascade puis par une multitude de houblons américains et du Nouveau Monde. La Pale Ale devient alors une famille mondiale : English Pale Ale, American Pale Ale, Australian Pale Ale, New Zealand Pale Ale, versions golden ou hazy n’ont pas une recette commune, mais partagent l’idée d’une ale relativement claire où le houblon est lisible sans nécessairement atteindre l’intensité d’une IPA moderne.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Pale Ale désigne une famille historique et contemporaine. La recette dépend fortement de l’école britannique, américaine, australienne, néo-zélandaise ou moderne ; les principes ci-dessous décrivent un socle plutôt qu’un canon.",
        "maltsEtCereales": [
          "Un malt pale ale constitue généralement la base : pale britannique plus biscuité, two-row américain plus neutre, ou malts locaux selon l’école.",
          "Les malts crystal/caramel peuvent apporter couleur, corps et notes de biscuit ou de caramel, mais leur proportion est faible dans les versions modernes les plus sèches et peut être nulle dans les golden ou hazy pale ales.",
          "Blé, avoine ou autres céréales peuvent être employés dans les interprétations modernes pour agir sur mousse, texture ou trouble, sans être constitutifs de la famille."
        ],
        "houblons": [
          "Houblons britanniques floraux, terreux ou épicés dans les écoles historiques ; Cascade et autres variétés américaines dans l’American Pale Ale ; variétés tropicales, agrumées ou thiolées dans les écoles du Nouveau Monde.",
          "L’amertume doit rester suffisamment présente pour donner de l’élan à la bière, mais la frontière avec l’IPA dépend de l’intensité globale, de la force alcoolique et de l’équilibre plutôt que d’un seul chiffre d’IBU."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces cerevisiae de fermentation haute ; souche expressive et floculante dans de nombreuses versions britanniques, plus neutre dans de nombreuses versions américaines.",
          "Les variantes hazy peuvent rechercher une souche fruitée capable de compléter les arômes de houblon."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Très variable. Les profils britanniques peuvent être franchement sulfatés pour renforcer la sécheresse et l’amertume ; les pale ales modernes peuvent employer davantage de chlorures pour arrondir la bouche. Le pH et l’alcalinité doivent rester adaptés à une bière claire.",
        "empatage": "Infusion simple très fréquente. Une température favorisant une atténuation moyenne à élevée permet de conserver la buvabilité ; les versions plus rondes peuvent viser davantage de dextrines.",
        "ebullitionEtHoublonnage": "Amertume en chaudière puis ajouts tardifs selon le style. Le dry-hopping est historique dans certaines pale ales de stock et omniprésent dans de nombreuses interprétations craft, mais son intensité va de discrète à massive.",
        "fermentation": "Fermentation haute propre à modérément fruitée. Le caractère de levure doit soutenir le style choisi sans produire de solvants ni de phénols non recherchés.",
        "maturation": "Courte pour les pale ales modernes orientées fraîcheur ; historiquement, certaines pale ales fortes et de stock pouvaient être gardées bien plus longtemps. Les versions houblonnées sont aujourd’hui protégées de l’oxygène et servies fraîches.",
        "profilRecherche": "Une ale claire à ambrée dont le malt fournit une charpente lisible et dont le houblon apporte fraîcheur, amertume et identité sans lourdeur."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Pale Ale families — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Pale American Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/18/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "CAMRA / Pete Brown",
          "edition": null,
          "reference": "India Pale Ale: A History — mythes, commerce vers l’Inde et réinvention américaine",
          "type": "histoire_brassicole",
          "url": "https://learn.camra.org.uk/courses/india-pale-ale-a-history",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "bitter",
      "nom": "Bitter",
      "collectionId": 2,
      "nature": "F",
      "parentPrincipalId": "pale-ale",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Angleterre",
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
      "description": "La Bitter est la pinte anglaise par excellence : moins spectaculaire qu’une IPA, plus nerveuse qu’une simple ale maltée. Biscuit, caramel léger, esters fruités, houblon floral ou terreux, finale sèche : son génie tient dans la nuance et la répétition du verre.",
      "histoireEtOrigines": `La Bitter n’est pas née un jour précis derrière la porte d’une seule brasserie. Le mot s’enracine dans le langage des pubs britanniques du XIXe siècle, lorsque les consommateurs et débitants distinguent les pale ales plus houblonnées et plus sèches des mild ales, généralement plus jeunes et moins amères. « Bitter » devient ainsi un nom d’usage avant d’être une famille de styles codifiée. Les brasseries pouvaient employer « Pale Ale » sur leurs registres ou leurs bouteilles tandis que le même univers de bière était demandé comme « bitter » au comptoir.

La révolution industrielle, le chemin de fer, les malts pâles plus réguliers et l’influence de Burton favorisent la diffusion des ales claires et houblonnées. Mais la Bitter évolue surtout comme bière de pub : gravité modérée, fermentation haute, faible carbonatation en cask, service rapide et capacité à donner beaucoup de goût dans une pinte relativement légère. Les guerres, la fiscalité sur la densité et les changements de consommation du XXe siècle contribuent à abaisser la force moyenne de nombreuses ales britanniques, ce qui renforce le caractère « session » des Bitters.

Les catégories Ordinary, Best/Special et Strong Bitter utilisées aujourd’hui servent surtout à ordonner cette famille par force et intensité. Elles se chevauchent davantage dans la réalité commerciale qu’un tableau de concours ne le suggère. La qualité d’une Bitter tient rarement à la puissance brute : elle repose sur la combinaison d’un malt pale ale biscuité, d’une amertume ferme, d’un fruité de fermentation mesuré, d’un houblon anglais ou apparenté et, lorsqu’elle est servie en cask, d’une carbonatation basse qui fait ressortir la texture et la buvabilité.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Bitter couvre plusieurs niveaux de force. Une Ordinary ne doit pas être simplement une Best diluée : le rapport entre densité, amertume, malt, esters et conditionnement doit rester cohérent à chaque niveau.",
        "maltsEtCereales": [
          "Malt pale ale britannique comme base traditionnelle, souvent de caractère biscuité ou légèrement toasté.",
          "Crystal malt en proportion modérée selon la brasserie ; certains exemples restent presque entièrement pale malt.",
          "Sucres de brasserie, maïs ou autres adjuncts ont existé historiquement dans l’industrie britannique et peuvent alléger ou ajuster le profil sans être indispensables."
        ],
        "houblons": [
          "East Kent Goldings, Fuggles, Challenger, Target, Northdown et autres variétés britanniques sont classiques ; les guides modernes acceptent aussi des expressions fruitées plus contemporaines selon le sous-style.",
          "L’amertume est structurante mais ne doit pas devenir âpre ; un houblonnage tardif ou un dry-hop léger peut apporter floral, terreux, résineux ou fruité."
        ],
        "levuresEtMicroorganismes": [
          "Souche d’ale britannique floculante, avec esters fruités faibles à modérés et bonne aptitude au cask.",
          "Une très légère expression de diacétyle peut exister dans certains exemples traditionnels, mais elle n’est ni obligatoire ni un objectif général."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Un profil riche en calcium et souvent en sulfate est classique dans de nombreuses traditions britanniques ; il accentue la finale sèche et la netteté de l’amertume. Il faut toutefois éviter une minéralité dure ou crayeuse.",
        "empatage": "Infusion simple, souvent orientée vers une bonne fermentescibilité. Le corps doit rester assez léger pour permettre plusieurs pintes tout en conservant un centre malté.",
        "ebullitionEtHoublonnage": "Amertume principale en début d’ébullition, complétée par des ajouts plus tardifs selon la brasserie. Le houblonnage n’a pas vocation à produire la saturation aromatique d’une IPA moderne.",
        "fermentation": "Fermentation haute avec gestion attentive des esters, du diacétyle et de la floculation. Les souches britanniques peuvent fermenter rapidement et clarifier efficacement.",
        "maturation": "Maturation courte. En cask, une seconde fermentation légère, la clarification et le conditionnement au pub font partie de l’expérience traditionnelle ; les versions bouteille ou keg sont généralement plus carbonatées.",
        "profilRecherche": "Une pinte sèche, expressive et immédiatement buvable, où biscuit, fruit discret et amertume se répondent sans qu’aucun élément ne domine lourdement."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Bitter family — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "British Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/11/british-bitter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fuller’s",
          "edition": null,
          "reference": "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
          "type": "source_primaire_historique",
          "url": "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "ipa-india-pale-ale",
      "nom": "IPA / India Pale Ale",
      "collectionId": 2,
      "nature": "F",
      "parentPrincipalId": "pale-ale",
      "aliases": [
        "IPA",
        "India Pale Ale"
      ],
      "paysOrigine": [
        "Royaume-Uni",
        "International"
      ],
      "origine": {
        "libelle": "Royaume-Uni puis évolution mondiale",
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
      "description": "L’IPA est devenue la grande bête houblonnée de la bière moderne : amertume, arômes floraux, résineux, agrumés, tropicaux ou épicés selon les écoles. Sa vraie colonne vertébrale n’est pas seulement “plus de houblon”, mais une finale assez sèche pour que ce houblon ne patauge pas.",
      "histoireEtOrigines": `L’histoire de l’India Pale Ale est célèbre parce qu’elle a longtemps été racontée sous forme de légende simple : un brasseur londonien aurait inventé une bière extraordinairement forte et houblonnée afin qu’elle survive au voyage vers l’Inde. Les travaux historiques modernes montrent une réalité plus progressive. Des bières pâles et bien houblonnées existaient déjà, le porter voyageait lui aussi vers l’Inde, et George Hodgson n’a pas « inventé » à lui seul une recette de conservation. Sa Bow Brewery bénéficie surtout de sa proximité avec les quais de l’East India Company et devient un fournisseur important du marché indien à la fin du XVIIIe et au début du XIXe siècle.

L’expression « East India Pale Ale » puis « India Pale Ale » se fixe progressivement au XIXe siècle. Lorsque les relations commerciales avec Hodgson se dégradent, des négociants se tournent vers Burton upon Trent. Des brasseries comme Allsopp et Bass disposent d’une eau sulfatée particulièrement favorable aux pale ales sèches et houblonnées. Le modèle de Burton devient alors central : bière pâle de stock, fortement atténuée, amertume nette, houblonnage généreux et parfois garde prolongée. Le voyage maritime a pu modifier favorablement certaines bières, mais l’IPA n’est pas simplement un produit inventé pour résister à la chaleur des cales.

Au Royaume-Uni, le nom IPA finit par couvrir au XXe siècle des bières parfois beaucoup plus faibles que leurs ancêtres victoriens. La grande rupture suivante vient des États-Unis. Anchor Liberty Ale en 1975, puis la Pale Ale de Sierra Nevada et la scène craft des années 1980-1990 remettent au premier plan les houblons américains. L’IPA devient progressivement la grande plateforme d’innovation du brassage craft : American IPA, Double IPA, Black IPA, Belgian IPA, NEIPA/Hazy IPA, Session IPA, Brut IPA et de nombreuses variantes utilisent le sigle « IPA » davantage comme promesse d’un équilibre centré sur le houblon que comme reconstruction de la bière exportée vers l’Inde.

Cette évolution explique pourquoi « IPA » est aujourd’hui à la fois un héritage britannique et une famille mondiale en mouvement. Une English IPA, une West Coast IPA et une Hazy IPA peuvent sembler presque opposées en bouche ; elles appartiennent pourtant à une même généalogie où le houblon, la sécheresse et la volonté de dépasser la pale ale ordinaire restent des fils conducteurs.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "IPA est devenue une vaste famille. Les ingrédients, le trouble, l’amertume, la levure et même la couleur changent selon l’école ; il faut donc raisonner en équilibre houblonné plutôt qu’en recette universelle.",
        "maltsEtCereales": [
          "Base de malt pale ou Pilsner selon l’école ; pale ale britannique pour les versions anglaises, two-row ou malt très clair pour de nombreuses versions américaines.",
          "Crystal/caramel historiquement fréquent dans certaines IPA américaines classiques mais nettement moins présent dans de nombreuses interprétations contemporaines sèches.",
          "Avoine et blé sont courants dans les Hazy IPA ; seigle, malts sombres ou céréales de blé définissent certaines Specialty IPA."
        ],
        "houblons": [
          "Houblons britanniques classiques pour l’English IPA ; Cascade, Centennial, Chinook, Simcoe et autres variétés américaines dans l’école historique craft ; Citra, Mosaic, Galaxy, Nelson Sauvin, Motueka et nombreuses variétés modernes dans les versions contemporaines.",
          "L’architecture de houblonnage peut aller d’une forte amertume en chaudière à une construction presque entièrement tardive et à cru dans les styles hazy."
        ],
        "levuresEtMicroorganismes": [
          "Souche anglaise fruitée dans l’English IPA, souche américaine neutre dans de nombreuses American/West Coast IPA, souches fruitées dans les Hazy IPA, levures belges pour la Belgian IPA.",
          "Le profil de levure doit être choisi en fonction du sous-style : une IPA n’est pas nécessairement neutre, mais le houblon doit rester central."
        ],
        "ingredientsComplementaires": [
          "Certains sous-styles emploient enzymes, épices ou céréales particulières ; aucun ingrédient complémentaire n’est commun à toute la famille."
        ],
        "profilEau": "Souvent orienté vers une eau pauvre en alcalinité. Les IPA sèches et amères utilisent fréquemment davantage de sulfate ; les Hazy IPA privilégient souvent un rapport plus riche en chlorures pour adoucir la bouche. Ce sont des tendances, pas des obligations.",
        "empatage": "Généralement orienté vers une bonne atténuation. Les versions hazy ou très souples peuvent conserver davantage de corps ; les Brut IPA poussent au contraire la fermentescibilité à l’extrême.",
        "ebullitionEtHoublonnage": "Le houblonnage définit le sous-style : forte charge amérisante et aromatique dans l’école classique, whirlpool et dry-hop massifs dans les IPA modernes, amertume plus douce dans les hazy, limitation de l’amertume dans la Brut IPA.",
        "fermentation": "Fermentation haute soigneusement contrôlée. La gestion de l’oxygène après fermentation est cruciale pour éviter le brunissement, la perte d’arômes de houblon et l’apparition de notes de carton ou de fruits trop mûrs.",
        "maturation": "Garde généralement courte dans les IPA modernes. La fraîcheur est un ingrédient de fait : les composés aromatiques du houblon évoluent vite et l’oxygène accélère fortement leur dégradation.",
        "profilRecherche": "Une bière où le houblon structure l’arôme, la saveur et/ou l’amertume, soutenu par une base suffisamment sèche et nette pour rester buvable malgré l’intensité."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "India Pale Ale families — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "CAMRA / Pete Brown",
          "edition": null,
          "reference": "India Pale Ale: A History — mythes, commerce vers l’Inde et réinvention américaine",
          "type": "histoire_brassicole",
          "url": "https://learn.camra.org.uk/courses/india-pale-ale-a-history",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Anchor Liberty Ale — Cascade, 1975 et préfiguration de l’IPA américaine",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_2033255",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "ordinary-bitter",
      "nom": "Ordinary Bitter",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "bitter",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Angleterre",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3,
        "max": 4,
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
        "min": 16,
        "max": 28,
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
          "Nonic pint",
          "Tulipe"
        ]
      },
      "description": "L’Ordinary Bitter est petite en alcool mais pas en caractère : cuivre clair, biscuit, fruit léger, houblon anglais et amertume franche. Elle doit se boire à grandes gorgées sans devenir aqueuse, comme une conversation de pub qui sait rester vive.",
      "histoireEtOrigines": `L’Ordinary Bitter représente l’extrémité légère de la famille des Bitters. Elle s’inscrit dans la culture britannique de la bière de session : une pinte conçue pour être bue fraîche, souvent en cask, avec beaucoup plus de relief que sa faible teneur en alcool ne le laisserait penser. Cette faiblesse n’est pas un héritage d’une « bière pauvre » immuable ; elle résulte aussi des effets combinés de la fiscalité sur la densité, des restrictions de guerre et de l’évolution du marché britannique au XXe siècle.

Le mot « Ordinary » est surtout un outil de classification moderne. Dans les pubs et chez les brasseurs, les noms commerciaux ne suivent pas toujours les catégories BJCP. Une bière à 3,5 % peut être vendue comme Bitter, Best Bitter ou sous un nom de marque sans mention de niveau. Ce qui définit l’Ordinary dans les guides actuels est davantage sa combinaison de faible densité, de faible carbonatation possible, d’amertume franche et de très forte buvabilité.

Le défi brassicole est précisément de ne pas la rendre aqueuse. Une base de malt britannique expressive, une levure apportant quelques esters, une eau souvent sulfatée et une amertume nette permettent d’obtenir une bière complète avec peu d’alcool. Servie au handpump autour de la température de cave, elle illustre une philosophie très britannique : la complexité vient de l’équilibre et du conditionnement, pas de la puissance.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La faible densité impose de construire du goût sans ajouter de lourdeur. Chaque composant doit être précis car il y a peu d’alcool ou de sucre résiduel pour masquer les défauts.",
        "maltsEtCereales": [
          "Malt pale ale britannique dominant, choisi pour son caractère de pain, biscuit ou noisette légère.",
          "Petite proportion de crystal possible pour apporter couleur et profondeur, mais un excès rendrait la bière douce et fatigante.",
          "Des sucres de brasserie ou adjuncts peuvent être historiquement plausibles pour ajuster atténuation et couleur."
        ],
        "houblons": [
          "Houblons britanniques classiques, avec une amertume relativement élevée par rapport à la densité initiale.",
          "Ajout tardif modéré pour floral, terreux, résineux ou fruité léger ; le parfum ne doit pas transformer la bière en pale ale moderne."
        ],
        "levuresEtMicroorganismes": [
          "Souche anglaise floculante et modérément fruitée, adaptée au cask et capable de laisser une impression maltée malgré la faible densité."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Calcium suffisant pour la fermentation et la clarification ; sulfate souvent notable afin de tendre la finale et de donner de la précision à l’amertume.",
        "empatage": "Infusion simple. Une température modérée évite à la fois une finale pâteuse et une atténuation si forte que la bière deviendrait maigre.",
        "ebullitionEtHoublonnage": "Amertume principale en chaudière, avec une petite charge aromatique tardive. Le ratio amertume/densité compte davantage que la quantité absolue de houblon.",
        "fermentation": "Fermentation haute autour de la plage propre à la souche, en conservant des esters discrets. Gestion du diacétyle avant conditionnement.",
        "maturation": "Très courte ; conditionnement en cask ou maturation brève en cuve. Une carbonatation basse à modérée renforce la buvabilité.",
        "profilRecherche": "Une bière légère mais jamais vide : biscuit, fruit discret, houblon britannique et finale amère propre dans une pinte de grande buvabilité."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "11A Ordinary Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/11/british-bitter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Ordinary Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "special-best-bitter",
      "nom": "Special / Best Bitter",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "bitter",
      "aliases": [
        "Special Bitter",
        "Best Bitter"
      ],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Angleterre",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.8,
        "max": 4.7,
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
        "min": 16,
        "max": 32,
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
          "Nonic pint",
          "Tulipe"
        ]
      },
      "description": "La Best Bitter gagne un peu d’épaule sans quitter le comptoir : malt plus présent, biscuit, caramel léger, esters fruités et amertume toujours nette. Elle reste une bière de session, mais avec la sensation d’avoir choisi la pinte du patron.",
      "histoireEtOrigines": `Best Bitter ou Special Bitter désigne historiquement moins une recette unique qu’un rang supérieur dans la gamme d’une brasserie. Par rapport à une Bitter plus légère, la bière reçoit généralement davantage de malt et parfois davantage de houblon, tout en restant une bière de pub et non une ale forte de dégustation. Les mots « Best », « Special », « Premium » ou simplement le nom de marque se sont chevauchés selon les maisons, ce qui explique pourquoi les guides modernes parlent d’une plage de style plutôt que d’une identité légale.

Le développement des Best Bitters accompagne la consolidation de la culture du cask au XXe siècle. Des bières comme London Pride, Timothy Taylor Landlord ou de nombreuses ales régionales montrent à quel point le style peut varier : plus malté ou plus houblonné, plus fruité ou plus net, avec des profils d’eau et des levures propres à chaque brasserie. Le point commun est la capacité à offrir davantage de structure qu’une Ordinary sans sacrifier la répétition de la pinte.

Aujourd’hui, la catégorie reste un repère utile pour les concours et les brasseurs, mais il faut éviter de la traiter comme une formule industrielle figée. La condition du cask, la fraîcheur du houblon, la température de service et la gestion de la levure influencent autant l’expérience qu’une différence de quelques points de densité.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Best/Special Bitter conserve la logique de session d’une Bitter mais avec davantage de matière et de marge aromatique qu’une Ordinary.",
        "maltsEtCereales": [
          "Pale ale malt britannique majoritaire.",
          "Crystal malt faible à modéré selon le profil recherché ; biscuit ou malt légèrement toasté possibles avec retenue.",
          "Sucres de brasserie possibles dans certaines traditions pour alléger le corps tout en maintenant la densité."
        ],
        "houblons": [
          "East Kent Goldings, Fuggles, Challenger, Target ou autres houblons anglais ; des variétés modernes peuvent apparaître dans des versions contemporaines.",
          "Amertume ferme, avec une présence aromatique plus lisible que dans beaucoup d’Ordinary Bitters."
        ],
        "levuresEtMicroorganismes": [
          "Levure britannique expressive mais maîtrisée, floculation moyenne à forte."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Souvent calcique et sulfatée, mais le niveau dépend de l’identité régionale de la brasserie. L’eau ne doit pas produire une amertume minérale agressive.",
        "empatage": "Infusion simple autour d’un compromis entre corps moyen-léger et bonne atténuation.",
        "ebullitionEtHoublonnage": "Amertume structurante puis ajouts tardifs modérés. Le dry-hop en cask peut être utilisé mais n’est pas obligatoire.",
        "fermentation": "Fermentation haute avec esters de fruits modérés et diacétyle nul à très faible selon la tradition.",
        "maturation": "Maturation courte, puis conditionnement en cask, bouteille ou keg. En cask, la carbonatation basse et le service à la pompe sont déterminants.",
        "profilRecherche": "Une Bitter plus pleine et expressive qu’une Ordinary, mais toujours sèche, équilibrée et conçue pour la pinte."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "11B Best Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/11/british-bitter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Special Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fuller’s",
          "edition": null,
          "reference": "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
          "type": "source_primaire_historique",
          "url": "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "extra-special-bitter-esb",
      "nom": "Extra Special Bitter / ESB",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "bitter",
      "aliases": [
        "ESB"
      ],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Angleterre",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.6,
        "max": 6.2,
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
        "min": 16,
        "max": 36,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 10,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Nonic pint",
          "Tulipe"
        ]
      },
      "description": "L’ESB est la bitter qui hausse la voix : cuivre profond, malt biscuité, toffee léger, fruit de levure, houblon floral-terreux et amertume ferme. Elle peut paraître mal nommée, car son intérêt n’est pas d’être extrême, mais d’être anglaise avec plus de coffre.",
      "histoireEtOrigines": `La catégorie « Extra Special Bitter » est intimement liée à Fuller’s. La brasserie de Chiswick lance sa bière ESB en 1971 ; son succès et ses récompenses contribuent ensuite à faire de l’expression un repère international pour les bitters britanniques les plus fortes. Dans la classification BJCP moderne, cette zone est appelée Strong Bitter afin d’éviter de réduire toute la famille à un seul nom commercial, mais « ESB » reste profondément ancré dans le vocabulaire des brasseurs et des consommateurs.

Historiquement, les brasseries britanniques produisaient déjà des pale ales et bitters de différentes forces bien avant 1971. L’innovation de Fuller’s n’est donc pas l’invention de la strong pale ale anglaise ; elle tient plutôt à la création d’une référence commerciale devenue si influente qu’elle a fini par donner son nom, surtout hors du Royaume-Uni, à une catégorie entière. Fuller’s situe également Chiswick Bitter dans les années 1930 et London Pride dans les années 1950, ce qui montre l’ESB comme le sommet d’une gamme de cask ales de forces différentes.

Une bonne ESB moderne n’est pas une IPA anglaise plus sucrée. Le malt y prend davantage de place : pain grillé, biscuit, noix, caramel ou toffee léger, soutenus par des esters de fruits et une amertume suffisamment ferme pour garder la finale fraîche. Le cask reste un service emblématique, mais la bière existe aussi en bouteille et en keg avec davantage de carbonatation.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La Strong/Extra Special Bitter pousse la structure maltée et la force alcoolique plus loin qu’une Best Bitter tout en conservant une finale sèche et une vraie buvabilité.",
        "maltsEtCereales": [
          "Pale ale malt britannique comme base, souvent choisi pour une expression de biscuit, pain et noisette.",
          "Crystal malt en quantité mesurée pour toffee, fruits secs légers et couleur cuivre ; un excès ferait basculer la bière vers une douceur lourde.",
          "Petites touches de malts biscuités ou torréfiés très légers possibles selon la maison."
        ],
        "houblons": [
          "Houblons anglais traditionnels ou profils apparentés ; l’aromatique peut être plus affirmé que dans les Bitters légères.",
          "L’amertume doit équilibrer une densité plus élevée sans devenir tranchante comme une IPA moderne."
        ],
        "levuresEtMicroorganismes": [
          "Souche britannique produisant des esters modérés et une bonne floculation ; certaines souches laissent davantage de corps résiduel."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil calcique et souvent sulfaté pour soutenir une finale sèche malgré le malt plus riche. Une composante chlorure modérée peut arrondir la bouche.",
        "empatage": "Infusion simple visant un corps moyen sans sacrifier l’atténuation.",
        "ebullitionEtHoublonnage": "Amertume de chaudière robuste puis additions tardives anglaises. Un dry-hop discret est possible dans certaines interprétations.",
        "fermentation": "Fermentation haute avec fruité anglais contrôlé ; repos suffisant pour maîtriser diacétyle et composés soufrés selon la souche.",
        "maturation": "Courte à moyenne. Le cask permet une évolution douce des arômes ; la bouteille et le keg donnent généralement une mousse et une carbonatation plus franches.",
        "profilRecherche": "Une ale cuivre, maltée et fruitée, plus forte qu’une Bitter ordinaire mais sèche, houblonnée et suffisamment équilibrée pour rester une bière de pub."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "11C Strong Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/11/british-bitter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Extra Special Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fuller’s",
          "edition": null,
          "reference": "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
          "type": "source_primaire_historique",
          "url": "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "english-summer-ale",
      "nom": "English Summer Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Angleterre",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.4,
        "max": 4.7,
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
        "min": 5,
        "max": 16,
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
          "Nonic pint",
          "Tulipe"
        ]
      },
      "description": "L’English Summer Ale est une bitter qui ouvre les fenêtres : robe claire, corps léger, houblon floral ou citronné, finale sèche et service frais. Elle garde l’esprit anglais, mais retire le manteau de malt pour viser la terrasse.",
      "histoireEtOrigines": `L’English Summer Ale est une création moderne de la scène britannique plutôt qu’un style ancien. À partir des années 1980, plusieurs petites brasseries cherchent à proposer des cask ales plus pâles, plus vives et plus adaptées à l’été que les bitters ambrées traditionnelles. Cette évolution accompagne l’arrivée ou le retour de houblons aromatiques plus démonstratifs, ainsi que le désir de séduire des consommateurs attirés par des bières blondes mais souhaitant conserver le caractère d’une ale de fermentation haute.

La frontière avec British Golden Ale est poreuse. Dans la pratique, « Summer Ale » est souvent un nom commercial saisonnier tandis que « Golden Ale » est devenu un terme stylistique plus stable. Hop Back Summer Lightning, brassée à partir de 1988, est l’un des repères majeurs de cette révolution : une bière très pâle, sèche et houblonnée qui remporte de nombreuses récompenses et contribue à populariser une nouvelle esthétique de cask ale britannique.

Le style n’exige pas d’imiter une lager. Il conserve une fermentation haute, une carbonatation souvent modérée lorsqu’il est servi en cask et une base maltée légère. Sa réussite tient à la fraîcheur : céréale pâle, houblon floral ou agrumé, amertume propre et finale sèche. Il constitue ainsi un pont historique important entre la Bitter britannique et les golden ales craft qui se développeront ensuite.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Une Summer Ale anglaise vise d’abord la légèreté visuelle et la fraîcheur, avec une fermentation d’ale et un houblon plus lumineux que dans de nombreuses bitters traditionnelles.",
        "maltsEtCereales": [
          "Malt pale très clair ou lager/pale ale malt comme base.",
          "Blé malté possible en petite proportion pour la mousse ; crystal généralement absent ou très discret afin de préserver la couleur et la sécheresse."
        ],
        "houblons": [
          "Houblons anglais floraux ou épicés, mais aussi variétés américaines ou européennes agrumées ; le style a historiquement servi de terrain d’ouverture vers de nouveaux profils.",
          "Arôme de houblon net, sans la saturation d’une IPA."
        ],
        "levuresEtMicroorganismes": [
          "Levure anglaise relativement propre, avec esters faibles à modérés et bonne floculation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité et minéralité modérée ; sulfate possible pour sécher la finale et rendre l’amertume vive.",
        "empatage": "Infusion favorisant une bonne fermentescibilité et un corps léger.",
        "ebullitionEtHoublonnage": "Amertume moyenne avec ajouts aromatiques tardifs. Le dry-hop est possible mais généralement mesuré.",
        "fermentation": "Fermentation haute propre, suivie d’une clarification rapide.",
        "maturation": "Courte et fraîche. Le style gagne peu à vieillir ; le houblon et la vivacité doivent rester au premier plan.",
        "profilRecherche": "Une ale britannique très pâle, sèche, rafraîchissante et nettement houblonnée, conçue pour la saison chaude sans perdre le caractère du cask."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Summer Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Hop Back Brewery",
          "edition": null,
          "reference": "Our Story — Summer Lightning, brassée depuis 1988, et essor de la golden ale britannique moderne",
          "type": "source_primaire_historique",
          "url": "https://www.hopback.co.uk/our-story/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "classic-english-pale-ale",
      "nom": "Classic English Pale Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [
        "English Pale Ale"
      ],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Angleterre",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 6.2,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 25,
        "max": 50,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 12,
        "max": 30,
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
          "Nonic pint",
          "Tulipe"
        ]
      },
      "description": "La Classic English Pale Ale est la cousine embouteillée et plus noble de la bitter : ambrée claire, malt biscuité, marmelade légère, houblon floral ou terreux, finale sèche. Elle porte une élégance ancienne, moins explosive que les pale ales modernes.",
      "histoireEtOrigines": `La Classic English Pale Ale représente la continuité moderne des pale ales britanniques hors des catégories de Bitter les plus légères et des IPA plus puissantes. Le terme rappelle qu’avant la spécialisation contemporaine, « pale ale » pouvait couvrir un vaste ensemble de bières anglaises claires à cuivrées, servies en cask ou en bouteille, avec un équilibre variable entre malt, esters et houblon.

Au XIXe siècle, Burton est le grand centre de la pale ale, mais Londres, Yorkshire et de nombreuses régions développent leurs propres traditions. La diffusion du malt pale, l’emploi de houblons anglais et les profils d’eau locaux donnent des bières reconnaissables sans imposer une recette nationale unique. Au XXe siècle, certaines pale ales embouteillées conservent davantage de force et de carbonatation que les bitters de pub, tandis que les noms commerciaux brouillent encore la frontière entre Pale Ale, Best Bitter et Strong Bitter.

Les guides de compétition actuels utilisent « Classic English-Style Pale Ale » pour décrire une ale dorée à cuivre, maltée de façon modérée, houblonnée avec des caractères floraux, herbacés, terreux ou fruités, et fermentée avec une expression d’esters typiquement britannique. C’est une catégorie utile pour comprendre l’école anglaise sans la réduire à une seule force de Bitter.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La Classic English Pale Ale recherche un équilibre traditionnel : davantage de structure qu’une golden ale, mais moins d’intensité houblonnée qu’une IPA moderne.",
        "maltsEtCereales": [
          "Pale ale malt britannique dominant.",
          "Crystal léger à moyen possible pour couleur cuivre et complexité ; biscuit ou amber malt en touche faible selon l’interprétation."
        ],
        "houblons": [
          "East Kent Goldings, Fuggles, Challenger, Target ou autres houblons britanniques ; variétés fruitées modernes possibles avec retenue.",
          "Houblon perceptible en arôme et en bouche, soutenu par une amertume moyenne."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique donnant des esters de fruits modérés et une bonne floculation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Calcium modéré à élevé, sulfate souvent présent pour la sécheresse ; éviter une eau trop alcaline qui ternirait la bière claire.",
        "empatage": "Infusion simple visant un corps moyen-léger à moyen et une bonne atténuation.",
        "ebullitionEtHoublonnage": "Amertume de chaudière puis ajouts tardifs modérés. Dry-hop facultatif selon la tradition de la brasserie.",
        "fermentation": "Fermentation haute avec esters contrôlés et clarification efficace.",
        "maturation": "Courte à moyenne ; cask, bouteille ou keg selon le produit. Les versions conditionnées naturellement peuvent gagner en intégration quelques semaines.",
        "profilRecherche": "Une pale ale anglaise équilibrée, biscuitée et fruitée, avec un houblon traditionnel clairement perceptible et une finale sèche."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Classic English-Style Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "British Bitter and Pale Ale context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/11/british-bitter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fuller’s",
          "edition": null,
          "reference": "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
          "type": "source_primaire_historique",
          "url": "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "british-golden-ale",
      "nom": "British Golden Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Royaume-Uni",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.8,
        "max": 5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 20,
        "max": 45,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 4,
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
          "Nonic pint",
          "Tulipe"
        ]
      },
      "description": "La British Golden Ale est claire, sèche, houblonnée et pensée pour rafraîchir : malt très discret, couleur paille à dorée, amertume nette, houblon floral, herbacé ou citronné. Elle ressemble à une bitter qui aurait troqué son gilet brun contre une chemise d’été.",
      "histoireEtOrigines": `La British Golden Ale est l’un des meilleurs exemples d’un style relativement récent devenu si familier qu’il paraît plus ancien qu’il ne l’est. Elle se développe dans les années 1980 au sein du renouveau des petites brasseries britanniques et du cask ale. L’objectif est clair : proposer une ale très pâle, sèche et rafraîchissante, capable d’attirer les buveurs de lager tout en offrant le houblon, la fermentation haute et le service traditionnel chers aux amateurs d’ale.

Hop Back Summer Lightning, brassée pour la première fois en 1988 selon la brasserie, joue un rôle emblématique. Son succès dans les festivals et les pubs contribue à montrer qu’une cask ale peut être dorée, vivement houblonnée et dépourvue du caramel souvent associé à la Bitter. D’autres brasseries suivent, et la Golden Ale devient une catégorie à part entière. Les houblons anglais restent fréquents, mais les variétés américaines agrumées gagnent rapidement du terrain, ce qui fait du style un laboratoire précoce du goût international dans la bière britannique.

Le BJCP insiste sur la buvabilité et le caractère rafraîchissant, héritage direct de son positionnement estival. La différence avec une Blonde Ale américaine tient généralement à une amertume plus marquée et à un houblon plus expressif ; la différence avec une IPA tient à la force et à l’intensité globale. La Golden Ale reste une bière de pinte, souvent en cask, où la pâleur du malt sert d’écran clair à l’aromatique du houblon.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La Golden Ale britannique doit rester très pâle, sèche et désaltérante ; le houblon est plus visible que dans une simple blonde mais l’ensemble reste de force modérée.",
        "maltsEtCereales": [
          "Malt pale très clair, lager malt ou pale ale malt peu coloré comme base.",
          "Blé malté possible en petite quantité pour la tenue de mousse ; crystal généralement évité afin de préserver couleur claire et finale nette."
        ],
        "houblons": [
          "Houblons anglais, américains ou autres variétés modernes ; les profils floral, herbacé, agrumé et fruité sont courants.",
          "L’amertume est moyenne à moyennement forte et l’arôme peut être nettement présent, parfois avec une seule variété mise en avant."
        ],
        "levuresEtMicroorganismes": [
          "Souche britannique relativement neutre à légèrement fruitée, suffisamment floculante pour une bière brillante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité ; sulfate modéré à élevé possible pour souligner la sécheresse et l’amertume sans produire de dureté.",
        "empatage": "Infusion simple orientée vers une bonne fermentescibilité et un corps léger.",
        "ebullitionEtHoublonnage": "Amertume de chaudière propre, puis ajouts tardifs plus expressifs qu’une Bitter classique. Dry-hop possible mais pas obligatoire.",
        "fermentation": "Fermentation haute propre avec esters faibles à modérés.",
        "maturation": "Courte. Service fréquent en cask avec faible carbonatation, mais les versions bouteille et keg sont également communes.",
        "profilRecherche": "Une ale or pâle, sèche et lumineuse, où un malt discret laisse la première place à un houblon frais et à une grande buvabilité."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "12A British Golden Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/12/pale-commonwealth-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Golden or Blonde Ale — British context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Hop Back Brewery",
          "edition": null,
          "reference": "Our Story — Summer Lightning, brassée depuis 1988, et essor de la golden ale britannique moderne",
          "type": "source_primaire_historique",
          "url": "https://www.hopback.co.uk/our-story/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "golden-blonde-ale",
      "nom": "Golden / Blonde Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [
        "Golden Ale",
        "Blonde Ale"
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
        "min": 3.8,
        "max": 5.5,
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
        "min": 4,
        "max": 16,
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
          "Pint",
          "Tulipe"
        ]
      },
      "description": "La Golden / Blonde Ale est une porte d’entrée : claire, douce, propre, peu amère, avec un malt léger et parfois un fruit ou houblon discret. Sa difficulté est de rester simple sans devenir vide, agréable sans se dissoudre dans l’anonymat.",
      "histoireEtOrigines": `Golden Ale et Blonde Ale sont des termes de marché autant que des catégories techniques. Ils désignent généralement des ales claires, accessibles et modérément alcoolisées, mais leur sens varie selon les pays. En Grande-Bretagne, la Golden Ale moderne s’est développée dans les années 1980 comme une cask ale pâle et houblonnée ; aux États-Unis, Blonde Ale décrit plus volontiers une bière craft douce, équilibrée et moins amère que l’American Pale Ale. Dans d’autres marchés, « golden » ou « blonde » peut simplement signaler la couleur et la facilité d’accès.

Cette diversité explique pourquoi il serait trompeur de chercher une recette fondatrice. Le mouvement général apparaît avec la démocratisation des malts pâles, puis s’accélère lorsque les petites brasseries veulent offrir une alternative de fermentation haute aux lagers blondes industrielles. Les Golden/Blonde Ales deviennent souvent la porte d’entrée d’une gamme : couleur claire, alcool contenu, amertume mesurée et profil suffisamment propre pour être immédiatement lisible.

Le style contemporain peut donc aller d’une Blonde Ale américaine presque maltée à une Golden Ale britannique franchement houblonnée. Ce qui les rapproche est moins une liste d’ingrédients qu’une intention sensorielle : bière claire, nette, rafraîchissante, sans caramel lourd ni fermentation envahissante.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Golden/Blonde Ale est une famille transversale. La version britannique est généralement plus houblonnée et sèche ; la version américaine plus douce et équilibrée.",
        "maltsEtCereales": [
          "Malt pale, two-row ou Pilsner comme base claire.",
          "Petites quantités de blé ou de malt légèrement biscuité possibles ; crystal absent ou très faible pour préserver la couleur et la fraîcheur."
        ],
        "houblons": [
          "Houblonnage faible à modéré dans une Blonde Ale américaine, plus soutenu dans une Golden Ale britannique.",
          "Variétés florales, herbacées, agrumées ou fruitées selon l’origine ; le houblon ne doit pas saturer le palais comme une IPA."
        ],
        "levuresEtMicroorganismes": [
          "Souche d’ale propre, américaine, britannique légère ou Kölsch-like selon l’interprétation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité et minéralité modérée. L’eau peut être légèrement orientée sulfate pour une version sèche ou chlorure pour une version plus douce.",
        "empatage": "Infusion simple donnant un corps léger à moyen-léger et une bonne atténuation.",
        "ebullitionEtHoublonnage": "Amertume propre et mesurée, avec ajouts tardifs facultatifs selon le niveau d’expression du houblon recherché.",
        "fermentation": "Fermentation haute propre, avec esters faibles à modérés.",
        "maturation": "Courte ; une clarification fraîche améliore la brillance mais un lagering long n’est pas requis.",
        "profilRecherche": "Une ale dorée facile d’accès, nette et rafraîchissante, dont la simplicité apparente repose sur un équilibre précis."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Golden or Blonde Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "18A Blonde Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/18/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "12A British Golden Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/12/pale-commonwealth-beer/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "australian-sparkling-ale",
      "nom": "Australian Sparkling Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [],
      "paysOrigine": [
        "Australie"
      ],
      "origine": {
        "libelle": "Australie, tradition de Burton adaptée localement",
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
        "min": 20,
        "max": 35,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 8,
        "max": 18,
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
          "Schooner",
          "Pint"
        ]
      },
      "description": "L’Australian Sparkling Ale pétille comme son nom : dorée, très carbonatée, sèche, fruitée de poire ou pomme, avec un houblon herbacé parfois métallique. Elle doit être vive, mousseuse, presque nerveuse, mais jamais plate ni lourde.",
      "histoireEtOrigines": `L’Australian Sparkling Ale est l’un des rares styles australiens à disposer d’une continuité historique très identifiable. Coopers situe la première production de sa Sparkling Ale en 1862, lorsque Thomas Cooper développe à Adélaïde une bière de fermentation haute naturellement conditionnée. La maison a conservé une levure propre et une pratique de refermentation qui font aujourd’hui encore partie de l’identité du produit.

Le nom « sparkling » renvoie à une effervescence plus vive que celle de nombreuses ales britanniques traditionnelles. Dans le climat australien, cette forte carbonatation, une atténuation élevée et une amertume nette donnent une bière rafraîchissante malgré une force alcoolique respectable. Le profil associe typiquement malt doux, esters de pomme ou de poire, houblon herbacé/épicé et finale sèche. Le fameux sédiment de levure peut être laissé au fond ou remis en suspension, ce qui modifie fortement l’apparence sans changer la nature du style.

Le BJCP classe l’Australian Sparkling Ale parmi les Pale Commonwealth Beers. Il souligne également le rôle historique de variétés de houblon australiennes comme Pride of Ringwood, tout en rappelant que le style n’est pas une American Pale Ale tropicale avant l’heure. Sa personnalité vient de l’interaction entre fermentation expressive, atténuation, carbonatation et amertume plutôt que d’un dry-hop massif.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Le modèle historique est étroitement associé à Coopers : ale pâle, très atténuée, vive, fruitée, amère et naturellement conditionnée.",
        "maltsEtCereales": [
          "Malt pale ou ale australien comme base, avec un profil de céréale et de pain léger.",
          "Les recettes historiques australiennes ont pu employer sucres ou adjuncts, mais une version moderne peut rester majoritairement ou totalement maltée."
        ],
        "houblons": [
          "Pride of Ringwood est le marqueur australien classique, apportant une amertume ferme et un caractère herbacé/épicé particulier.",
          "Le houblon aromatique reste modéré : l’équilibre avec les esters de levure est plus important qu’une saturation à cru."
        ],
        "levuresEtMicroorganismes": [
          "Souche d’ale australienne expressive, produisant notamment des esters rappelant pomme, poire et parfois une trace de banane.",
          "La refermentation en contenant est un élément traditionnel majeur du modèle Coopers."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil minéral modéré ; assez de calcium pour fermentation et clarification, sans dureté qui accentuerait excessivement l’amertume.",
        "empatage": "Empâtage orienté vers une forte fermentescibilité afin d’obtenir une finale sèche malgré une densité initiale non négligeable.",
        "ebullitionEtHoublonnage": "Amertume moyenne à ferme, houblonnage aromatique contenu.",
        "fermentation": "Fermentation haute relativement chaude selon la souche, en recherchant un fruité net sans solvants ni phénols indésirables.",
        "maturation": "Conditionnement naturel en bouteille, canette ou keg possible ; la seconde fermentation produit une carbonatation élevée et peut laisser un dépôt de levure.",
        "profilRecherche": "Une ale australienne dorée, fortement pétillante, fruitée et sèche, avec une amertume nette et un caractère de levure immédiatement reconnaissable."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "12B Australian Sparkling Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/12/pale-commonwealth-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Australian-Style Pale Ale / Sparkling context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Sparkling Ale — première production en 1862, refermentation naturelle et profil actuel",
          "type": "source_primaire_historique_technique",
          "url": "https://coopers.com.au/products/sparkling-ale",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "classic-australian-pale-ale",
      "nom": "Classic Australian Pale Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [],
      "paysOrigine": [
        "Australie"
      ],
      "origine": {
        "libelle": "Australie",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.2,
        "max": 6,
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
        "min": 6,
        "max": 20,
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
          "Schooner",
          "Pint"
        ]
      },
      "description": "La Classic Australian Pale Ale est une pale ale à l’ancienne australienne : dorée, fruitée, sèche, très carbonatée, avec une levure expressive et un houblon local modéré. Elle ne cherche pas la vague tropicale moderne, mais une fraîcheur droite, presque rustique.",
      "histoireEtOrigines": `La Classic Australian Pale Ale désigne l’école australienne issue de la tradition de fermentation haute locale plutôt que la simple transplantation de l’American Pale Ale. Coopers constitue la référence la plus évidente : sa culture de levure, le conditionnement naturel et un équilibre entre fruité, malt, amertume et carbonatation ont maintenu une identité d’ale australienne alors que le marché national était largement dominé par les lagers.

L’expression « classic » permet de distinguer cette lignée des pale ales craft australiennes plus récentes, souvent bâties autour de Cascade, Galaxy, Vic Secret ou d’autres houblons modernes. Dans une pale ale australienne classique, les esters de fermentation et la texture issue de la refermentation peuvent être aussi importants que le houblon. Le trouble léger provoqué par la levure n’est pas celui d’une Hazy Pale Ale moderne : il vient d’un conditionnement vivant et peut varier selon la façon de verser.

Coopers Original Pale Ale illustre aujourd’hui cette logique avec une bière tout malt, naturellement conditionnée, où fruité et floral de fermentation s’équilibrent avec une amertume croquante. Le style doit donc être compris comme un patrimoine brassicole vivant, pas comme une recette figée du XIXe siècle.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "L’école classique australienne met davantage l’accent sur la levure, la refermentation et l’équilibre que sur la démonstration de houblons modernes.",
        "maltsEtCereales": [
          "Base de malt pale/ale, souvent assez simple afin de laisser apparaître la fermentation.",
          "Malt de spécialité discret ; la couleur reste dorée à ambrée claire."
        ],
        "houblons": [
          "Houblon australien traditionnel ou variétés sobres, avec amertume moyenne et arôme floral/herbacé mesuré.",
          "Les houblons tropicaux modernes ne sont pas interdits dans une interprétation actuelle, mais ne doivent pas effacer l’identité classique."
        ],
        "levuresEtMicroorganismes": [
          "Souche d’ale fruitée ; une levure de maison avec forte identité est particulièrement pertinente.",
          "Refermentation en bouteille, canette ou keg pour une carbonatation naturelle et éventuellement un dépôt fin."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Minéralité modérée, sans accent extrême sur sulfate ou chlorure.",
        "empatage": "Infusion simple donnant une bonne atténuation et un corps moyen-léger.",
        "ebullitionEtHoublonnage": "Amertume propre, houblon tardif modéré. Le style ne repose pas sur un dry-hop massif.",
        "fermentation": "Fermentation haute permettant des esters fruités nets, puis clarification partielle.",
        "maturation": "Conditionnement vivant et relativement court ; la bière peut être servie claire ou avec une partie de la levure remise en suspension selon la tradition de service.",
        "profilRecherche": "Une pale ale australienne équilibrée, fruitée, naturellement vive et plus guidée par la fermentation que par la saturation de houblon."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Classic Australian-Style Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Original Pale Ale — conditionnement naturel et référence de la pale ale australienne",
          "type": "source_primaire_technique",
          "url": "https://coopers.com.au/products/original-pale-ale",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Sparkling Ale — première production en 1862, refermentation naturelle et profil actuel",
          "type": "source_primaire_historique_technique",
          "url": "https://coopers.com.au/products/sparkling-ale",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "australian-pale-ale",
      "nom": "Australian Pale Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [],
      "paysOrigine": [
        "Australie"
      ],
      "origine": {
        "libelle": "Australie",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.2,
        "max": 6,
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
        "min": 6,
        "max": 20,
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
          "Schooner",
          "Pint"
        ]
      },
      "description": "L’Australian Pale Ale moderne est plus lumineuse et plus houblonnée : fruits tropicaux, agrumes, raisin blanc ou herbes selon les variétés australiennes. Elle garde une base claire et sèche, mais laisse le houblon local envoyer des cartes postales aromatiques.",
      "histoireEtOrigines": `L’Australian Pale Ale moderne se construit à la rencontre de deux histoires. La première est locale : Coopers et d’autres traditions d’ale australiennes maintiennent fermentation haute, fruité et conditionnement naturel. La seconde est l’explosion craft des années 1990 et 2000, qui adopte le langage des American Pale Ales tout en profitant d’un programme de sélection de houblons australiens de plus en plus distinctifs.

Des variétés comme Galaxy, puis Vic Secret, Enigma et d’autres houblons australiens offrent des profils de fruit de la passion, agrumes, pêche ou résine qui donnent progressivement une signature nationale aux pale ales contemporaines. L’Australian Pale Ale peut donc être plus tropicale et sèche que le modèle classique, avec un houblonnage tardif ou à cru plus appuyé. Coopers illustre lui-même cette évolution avec Pacific Pale Ale, lancé initialement en 2017 et dry-hoppé avec Galaxy, Vic Secret et Melba.

La catégorie reste large : certaines bières se rapprochent d’une American Pale Ale fabriquée avec des ingrédients australiens, d’autres recherchent un équilibre plus doux et plus « pacifique », et d’autres encore empruntent aux hazy pale ales. Il faut donc décrire une école contemporaine plutôt qu’une recette canonique.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Australian Pale Ale moderne couvre plusieurs interprétations, généralement claires à légèrement troubles, sèches et portées par des houblons australiens ou du Pacifique.",
        "maltsEtCereales": [
          "Malt pale ou ale australien, parfois complété par Pilsner pour alléger la couleur.",
          "Petite proportion de blé ou d’avoine possible pour mousse et texture ; crystal souvent faible afin de garder le profil frais."
        ],
        "houblons": [
          "Galaxy, Vic Secret, Enigma et autres variétés australiennes sont emblématiques, souvent complétées par des houblons néo-zélandais ou américains.",
          "Whirlpool et dry-hop fréquents, avec amertume moyenne plutôt que brutale."
        ],
        "levuresEtMicroorganismes": [
          "Souche ale propre à légèrement fruitée ; certaines versions exploitent une levure australienne expressive."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité, chlorure et sulfate équilibrés ou légèrement orientés vers le sulfate pour une finale croquante.",
        "empatage": "Infusion simple favorisant une atténuation suffisante pour laisser le houblon brillant.",
        "ebullitionEtHoublonnage": "Amertume de base propre, puis forte part du houblon en fin d’ébullition, whirlpool et/ou dry-hop.",
        "fermentation": "Fermentation haute nette ; le fruité de levure doit compléter et non concurrencer les fruits tropicaux du houblon.",
        "maturation": "Courte et protégée de l’oxygène. Conditionnement rapide pour préserver les huiles de houblon.",
        "profilRecherche": "Une pale ale moderne, vive et tropicale, où les houblons australiens donnent une identité claire sans la puissance d’une IPA."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Australian-Style Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Original Pale Ale — conditionnement naturel et référence de la pale ale australienne",
          "type": "source_primaire_technique",
          "url": "https://coopers.com.au/products/original-pale-ale",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Pacific Pale Ale — interprétation australienne moderne, dry-hop Galaxy, Vic Secret et Melba",
          "type": "source_primaire_technique",
          "url": "https://coopers.com.au/products/pacific-pale-ale",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "international-pale-ale",
      "nom": "International Pale Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
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
        "max": 6,
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
        "min": 6,
        "max": 24,
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
          "Pint",
          "Tulipe"
        ]
      },
      "description": "L’International Pale Ale est la version traduite du style : assez claire, assez houblonnée, assez sèche, mais sans accent national dominant. Elle peut emprunter à l’Angleterre, aux États-Unis ou au Nouveau Monde, tout en restant dans une zone équilibrée.",
      "histoireEtOrigines": `International Pale Ale est moins un style historique qu’une catégorie de convergence. À mesure que le mouvement craft s’est diffusé hors du Royaume-Uni et des États-Unis, des brasseurs d’Europe, d’Asie, d’Amérique latine et du Pacifique ont repris l’architecture de la pale ale — malt clair, fermentation haute, houblon lisible — en utilisant leurs propres ingrédients, leurs contraintes locales et une culture du houblon devenue mondiale.

Cette internationalisation est particulièrement visible depuis les années 1990-2000. Les variétés américaines sont exportées partout, tandis que les programmes de sélection de Nouvelle-Zélande, d’Australie, d’Allemagne ou de France créent de nouveaux profils. Une pale ale peut alors associer malt européen, levure britannique et houblons néo-zélandais sans appartenir complètement à une école nationale. « International » sert à reconnaître cette réalité plutôt qu’à imposer une origine artificielle.

La catégorie doit rester définie par l’équilibre : plus houblonnée qu’une simple blonde dans beaucoup d’exemples, moins intense qu’une IPA, avec une base maltée claire et une fermentation propre. Son histoire est donc celle de la mondialisation du craft et des matières premières plus que celle d’une ville ou d’une brasserie fondatrice.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie volontairement large : la recette doit être cohérente comme Pale Ale mais peut combiner ingrédients et techniques de plusieurs traditions nationales.",
        "maltsEtCereales": [
          "Base pale, Pilsner ou ale locale, choisie pour fournir une charpente claire et propre.",
          "Malts de spécialité légers possibles pour biscuit, pain ou légère couleur ambrée ; éviter la lourdeur caramélisée."
        ],
        "houblons": [
          "Toute origine pertinente : britannique, américaine, européenne, australienne, néo-zélandaise ou émergente.",
          "L’aromatique doit être identifiable mais rester au niveau d’une pale ale plutôt que d’une IPA extrême."
        ],
        "levuresEtMicroorganismes": [
          "Souche d’ale neutre ou légèrement expressive, choisie pour soutenir le profil de houblon et de malt."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Ajusté au profil voulu : sulfate pour une finale sèche, chlorure pour davantage de rondeur, avec alcalinité faible à modérée.",
        "empatage": "Infusion simple, généralement orientée vers une bonne fermentescibilité.",
        "ebullitionEtHoublonnage": "Amertume moyenne, ajouts tardifs et dry-hop possibles selon l’école choisie.",
        "fermentation": "Fermentation haute propre, sans caractère phénolique fort sauf interprétation explicitement hybride.",
        "maturation": "Courte, surtout si le houblon aromatique est central.",
        "profilRecherche": "Une pale ale contemporaine équilibrée et reconnaissable, libre de son origine géographique mais disciplinée dans son intensité."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "International-Style Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "18B American Pale Ale — comparative reference — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/18/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "New Zealand Hops",
          "edition": null,
          "reference": "Motueka™ — origine génétique, profil citron vert et usage brassicole",
          "type": "source_technique_houblon",
          "url": "https://nzhops.co.nz/products/motueka",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "new-zealand-pale-ale",
      "nom": "New Zealand Pale Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [],
      "paysOrigine": [
        "Nouvelle-Zélande"
      ],
      "origine": {
        "libelle": "Nouvelle-Zélande",
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
        "max": 50,
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
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "IPA glass",
          "Tulipe"
        ]
      },
      "description": "La New Zealand Pale Ale sent le fruit vert et le Pacifique : raisin blanc, groseille, citron vert, fruit de la passion, herbe fraîche ou pin léger. Elle doit rester sèche et claire, avec un houblon très expressif mais rarement lourd.",
      "histoireEtOrigines": `La New Zealand Pale Ale est un style contemporain né de la rencontre entre le modèle de la pale ale craft et l’identité aromatique spectaculaire des houblons néo-zélandais. La Nouvelle-Zélande possède une longue histoire de culture du houblon, mais la reconnaissance internationale actuelle repose largement sur des programmes de sélection modernes qui ont produit des variétés capables d’évoquer agrumes, fruits tropicaux, raisin blanc, groseille, fruits à noyau ou herbes fraîches.

Nelson Sauvin devient l’un des symboles de cette nouvelle identité au début du XXIe siècle, bientôt rejoint par Motueka, Riwaka et de nombreuses autres variétés. New Zealand Hops décrit par exemple Motueka comme un croisement incluant une lignée Saazer, avec un profil marqué de citron vert frais, zestes et fruits tropicaux. Ces houblons permettent de construire des pale ales immédiatement distinctes des classiques américaines centrées sur Cascade, Centennial ou Simcoe.

La Brewers Association reconnaît explicitement les styles New Zealand Pale Ale et New Zealand IPA depuis 2021. L’enjeu n’est pas seulement d’utiliser un houblon cultivé en Nouvelle-Zélande : il faut faire de ce profil aromatique le cœur de la bière, sur une base claire, sèche et suffisamment discrète pour que les huiles de houblon restent précises.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La signature vient d’un houblonnage néo-zélandais expressif sur une base de pale ale claire et buvable.",
        "maltsEtCereales": [
          "Malt pale, ale ou Pilsner comme base, avec éventuellement un peu de Vienna pour soutenir le fruit sans caramel lourd.",
          "Blé ou avoine possibles en quantité modérée selon la texture recherchée."
        ],
        "houblons": [
          "Motueka, Nelson Sauvin, Riwaka, Nectaron, Pacifica, Wai-iti ou autres variétés néo-zélandaises selon le profil recherché.",
          "Whirlpool et dry-hop mettent en avant citron vert, raisin blanc, fruits tropicaux, agrumes ou fruits à noyau ; l’amertume reste moyenne."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine ou autre ale propre pour laisser le houblon au premier plan ; une souche légèrement fruitée peut renforcer le registre tropical."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité. Sulfate modéré pour la netteté, avec assez de chlorure pour éviter une bouche maigre.",
        "empatage": "Infusion simple orientée vers une bonne atténuation et un corps léger à moyen-léger.",
        "ebullitionEtHoublonnage": "Amertume propre, puis charge importante en fin d’ébullition/whirlpool et dry-hop. Éviter une extraction végétale excessive qui masquerait les caractères variétaux.",
        "fermentation": "Fermentation haute propre ; gestion stricte de l’oxygène après fermentation.",
        "maturation": "Très courte et fraîche, avec conditionnement rapide après dry-hop.",
        "profilRecherche": "Une pale ale nette et lumineuse où les houblons néo-zélandais donnent un bouquet de citron vert, fruits tropicaux, raisin ou fruits à noyau sans devenir une IPA."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "New Zealand-Style Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "New Zealand Hops",
          "edition": null,
          "reference": "Motueka™ — origine génétique, profil citron vert et usage brassicole",
          "type": "source_technique_houblon",
          "url": "https://nzhops.co.nz/products/motueka",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Pale Commonwealth and American Pale Ale — comparative context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/18/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-pale-ale",
      "nom": "American Pale Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [
        "APA"
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
        "min": 4.5,
        "max": 6.2,
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
        "min": 10,
        "max": 28,
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
          "IPA glass"
        ]
      },
      "description": "L’American Pale Ale est l’étincelle craft classique : malt pâle propre, caramel retenu, houblon Cascade ou Nouveau Monde, agrumes, pin, fleurs, finale sèche. Elle est plus équilibrée qu’une IPA, mais clairement tournée vers le houblon.",
      "histoireEtOrigines": `L’American Pale Ale est l’un des styles fondateurs du mouvement craft américain moderne. Sa généalogie remonte aux pale ales britanniques, mais son identité se cristallise lorsque les petits brasseurs américains commencent à considérer les nouveaux houblons locaux non plus comme de simples amérisants, mais comme une signature aromatique. Anchor Liberty Ale, brassée dès 1975 avec Cascade, préfigure cette révolution houblonnée.

Sierra Nevada Pale Ale devient ensuite le grand repère. Ken Grossman fonde Sierra Nevada en 1980 et bâtit sa Pale Ale autour de houblon Cascade en cônes entiers, d’un malt two-row et d’une touche caramélisée. La brasserie rappelle qu’au début la bière semblait excessivement amère à de nombreux consommateurs ; elle devient pourtant l’une des icônes du craft et contribue à populariser les caractères d’agrumes, de pin et de résine qui seront associés pendant des décennies à la bière américaine artisanale.

L’American Pale Ale des années 1980-2000 est souvent ambrée, avec davantage de crystal malt que beaucoup de versions actuelles. L’évolution des houblons et du goût l’a progressivement rendue plus claire, plus sèche et parfois plus aromatique. Elle reste cependant distincte de l’American IPA par son intensité et sa force : le malt doit encore jouer un rôle visible, l’amertume rester maîtrisée et la bière conserver une grande buvabilité.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Le modèle américain classique marie une base maltée claire à un houblon américain ou du Nouveau Monde nettement perceptible, sans atteindre la puissance d’une IPA.",
        "maltsEtCereales": [
          "Malt two-row pale comme base.",
          "Crystal/caramel faible à modéré dans l’école classique ; beaucoup de versions modernes réduisent fortement cette proportion pour une couleur plus pâle et une finale plus sèche."
        ],
        "houblons": [
          "Cascade est historique ; Centennial, Chinook, Simcoe, Amarillo, Citra, Mosaic et de nombreuses variétés modernes sont aujourd’hui courantes.",
          "Amertume moyenne à soutenue, ajouts tardifs importants et dry-hop fréquent mais moins massif qu’une IPA moderne."
        ],
        "levuresEtMicroorganismes": [
          "Souche d’ale américaine propre, fortement atténuante, avec esters faibles."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité, sulfate souvent supérieur au chlorure dans l’école classique afin de rendre l’amertume nette ; les versions modernes peuvent rechercher davantage d’équilibre.",
        "empatage": "Infusion simple donnant un corps moyen-léger et une finale sèche sans devenir aqueuse.",
        "ebullitionEtHoublonnage": "Amertume en chaudière, puis couches d’arôme en fin d’ébullition, whirlpool et éventuellement dry-hop.",
        "fermentation": "Fermentation haute propre, généralement autour de la plage neutre de la souche choisie.",
        "maturation": "Courte ; protéger strictement de l’oxygène et servir fraîche pour conserver le houblon.",
        "profilRecherche": "Une pale ale américaine équilibrée : malt assez présent pour soutenir la pinte, houblon assez expressif pour la définir, finale propre et sèche."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "18B American Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/18/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Our Story — fondation en 1980 et rôle de Pale Ale dans l’essor du craft américain",
          "type": "source_primaire_historique",
          "url": "https://sierranevada.com/about-us",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Sierra Nevada Pale Ale — objet et contexte historique du craft américain",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_1854865",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-extra-special-bitter",
      "nom": "American Extra Special Bitter",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "bitter",
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
        "min": 5,
        "max": 6.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 30,
        "max": 55,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 16,
        "max": 36,
        "unite": "EBC",
        "statut": "large"
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
          "American pint",
          "Tulipe"
        ]
      },
      "description": "L’American ESB prend la charpente d’une strong bitter et la pousse vers les habitudes craft : malt ambré, caramel sec, houblon plus franc, finale nette. Elle garde le pub dans le rétroviseur, mais roule sur une route américaine.",
      "histoireEtOrigines": `L’American Extra Special Bitter est un exemple de traduction plutôt que de tradition autonome. Lorsque les microbrasseries américaines des années 1980 et 1990 s’inspirent des Bitters britanniques, elles disposent de malts, de levures et surtout de houblons locaux beaucoup plus expressifs. Certaines conservent une base maltée et une force proches d’une Strong Bitter/ESB tout en augmentant l’aromatique d’agrumes, de pin ou de résine.

Le nom est donc paradoxal : « ESB » renvoie fortement à la référence britannique de Fuller’s et à la logique d’une Strong Bitter, tandis que l’adjectif American signale un déplacement vers les ingrédients du Nouveau Monde. Les guides de la Brewers Association ont d’ailleurs longtemps laissé aux concours la possibilité de distinguer les caractères de houblons anglais et américains dans les Extra Special Bitters.

Ce style se situe historiquement avant l’hégémonie de l’IPA moderne, à une époque où une bière ambrée, maltée et assez houblonnée pouvait être présentée comme une adaptation américaine d’une ale anglaise plutôt que comme une IPA. Il reste intéressant parce qu’il conserve un centre malté plus riche et des esters possibles tout en permettant un houblon américain nettement lisible.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Base de Strong Bitter/ESB, mais avec une expression de houblon américain plus nette et parfois une fermentation plus propre.",
        "maltsEtCereales": [
          "Pale ale malt britannique ou pale malt américain comme base.",
          "Crystal/caramel modéré pour cuivre, biscuit et toffee ; malts toastés possibles en petite quantité."
        ],
        "houblons": [
          "Cascade, Centennial, Willamette, Chinook ou autres houblons américains, éventuellement combinés à des variétés anglaises.",
          "Amertume moyenne à forte, avec un houblon tardif plus aromatique qu’une ESB classique."
        ],
        "levuresEtMicroorganismes": [
          "Souche anglaise modérément fruitée ou souche américaine plus neutre selon l’équilibre souhaité."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil plutôt sulfaté pour maintenir une finale sèche face au malt caramel.",
        "empatage": "Infusion simple avec corps moyen et atténuation suffisante pour éviter la lourdeur.",
        "ebullitionEtHoublonnage": "Amertume classique puis ajouts tardifs américains ; dry-hop léger à modéré possible.",
        "fermentation": "Fermentation haute propre à modérément fruitée.",
        "maturation": "Courte à moyenne, avec service en keg, bouteille ou cask selon l’interprétation.",
        "profilRecherche": "Une ale cuivre à la charpente maltée britannique, traversée par un houblon américain plus vif sans devenir une IPA."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Extra Special Bitter — English/American hop character note — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fuller’s",
          "edition": null,
          "reference": "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
          "type": "source_primaire_historique",
          "url": "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "juicy-hazy-pale-ale",
      "nom": "Juicy / Hazy Pale Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [
        "Hazy Pale Ale",
        "Juicy Pale Ale"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Nord-Est des États-Unis, diffusion internationale",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 20,
        "max": 50,
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
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "IPA glass",
          "Teku"
        ]
      },
      "description": "La Juicy / Hazy Pale Ale est la version plus légère du nuage houblonné : robe voilée, bouche douce, amertume arrondie, fruits tropicaux, agrumes mûrs, pêche ou mangue. Elle doit sentir le jus, pas la purée de houblon oxydée.",
      "histoireEtOrigines": `La Juicy or Hazy Pale Ale est l’un des produits directs de la révolution des IPA troubles du Nord-Est américain. Lorsque des bières comme Heady Topper deviennent cultes dans les années 2000 puis 2010, de nombreux brasseurs développent une nouvelle esthétique houblonnée : arômes massifs de fruits, amertume perçue plus douce, texture souple, trouble stable et interaction plus visible entre levure, protéines de céréales et houblon.

La logique descend rapidement vers des bières moins fortes que l’IPA. La Hazy Pale Ale conserve la texture et le bouquet d’une NEIPA mais vise une force plus proche d’une pale ale. La Brewers Association reconnaît désormais une catégorie Juicy or Hazy Pale Ale avec houblon moyen-fort à très fort, amertume perçue basse à moyenne et possibilité d’utiliser avoine ou blé pour favoriser texture et trouble.

Le trouble ne doit pas être confondu avec un défaut de procédé. Une bonne version n’est ni farineuse, ni chargée de particules, ni oxydée. La stabilité colloïdale, l’usage de houblons tardifs, la gestion des polyphénols et des protéines et surtout la maîtrise de l’oxygène après fermentation sont essentielles. Le style est donc technologiquement exigeant malgré son apparence volontairement opaque.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Version pale ale de l’école hazy : fruit intense, amertume douce, texture souple et alcool modéré.",
        "maltsEtCereales": [
          "Malt pale ou Pilsner comme base légère.",
          "Avoine et blé maltés ou floconnés fréquents pour protéines, trouble et texture ; dextrin malt possible avec retenue.",
          "Crystal généralement absent afin de préserver une couleur jaune à orange claire et d’éviter le caramel."
        ],
        "houblons": [
          "Citra, Mosaic, Galaxy, Nelson Sauvin, Motueka, Amarillo, El Dorado et autres variétés riches en fruits tropicaux, agrumes ou fruits à noyau.",
          "Faible charge amérisante classique ; l’essentiel du houblon est souvent ajouté au whirlpool et en dry-hop."
        ],
        "levuresEtMicroorganismes": [
          "Souche anglaise ou apparentée à expression fruitée, capable de contribuer à la texture et de compléter le houblon.",
          "Une souche comme Verdant IPA illustre cette logique avec abricot, fruits tropicaux et agrumes."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Chlorure souvent supérieur au sulfate pour une bouche souple et arrondie ; faible alcalinité indispensable à une base claire.",
        "empatage": "Infusion visant une atténuation modérée à bonne sans assécher complètement la texture.",
        "ebullitionEtHoublonnage": "Amertume contenue, très gros ajouts tardifs et dry-hop. La quantité seule ne garantit pas la qualité : température, durée de contact et oxygène doivent être maîtrisés.",
        "fermentation": "Fermentation haute fruitée mais propre. Certains dry-hops sont réalisés pendant ou juste après la fermentation pour exploiter interactions levure/houblon, mais la biotransformation ne doit pas être traitée comme une règle absolue.",
        "maturation": "Très courte. Purge au CO₂, transferts fermés et conditionnement rapide sont essentiels pour éviter brunissement et perte d’arômes.",
        "profilRecherche": "Une pale ale trouble et lumineuse, saturée de fruit frais, douce dans l’amertume et moelleuse sans devenir sucrée ni pâteuse."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Juicy or Hazy Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21C Hazy IPA — technical lineage — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "The Alchemist Brewery",
          "edition": null,
          "reference": "Our Story — Heady Topper, Waterbury et diffusion de l’école houblonnée du Vermont",
          "type": "source_primaire_historique",
          "url": "https://alchemistbeer.com/story/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-strong-pale-ale",
      "nom": "American Strong Pale Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
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
        "min": 5.5,
        "max": 7.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 35,
        "max": 65,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 10,
        "max": 28,
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
          "IPA glass",
          "Tulipe"
        ]
      },
      "description": "L’American Strong Pale Ale est une pale ale qui a forcé la porte : plus d’alcool, plus de houblon, plus d’amertume, mais pas encore la densité assumée d’une IPA forte. Elle doit rester sèche et tranchante, pas devenir une soupe de caramel et de résine.",
      "histoireEtOrigines": `L’American Strong Pale Ale apparaît comme une zone intermédiaire du craft américain : plus forte et plus amère qu’une American Pale Ale, mais pas nécessairement construite ou commercialisée comme une IPA. Cette distinction a du sens surtout dans l’histoire des années 1980-2000, lorsque les brasseries multiplient les ales houblonnées sans que le sigle IPA soit encore devenu l’étiquette dominante de presque toute bière fortement aromatique.

La Brewers Association maintient une catégorie American-Style Strong Pale Ale, signe que l’équilibre reste différent de l’American IPA. Le malt peut être plus visible, la couleur aller du pâle au cuivre et l’amertume atteindre un niveau élevé, tout en conservant une force et une structure où la bière reste pensée comme une pale ale amplifiée. Des exemples historiques peuvent se rapprocher de ce que d’autres marchés appelleraient aujourd’hui Extra Pale Ale, Strong Pale Ale ou même IPA légère.

Le style est donc utile pour documenter la continuité plutôt que de tracer une frontière absolue. Il montre comment le craft américain a progressivement augmenté houblon et densité avant que l’IPA ne devienne la catégorie reine.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Pale ale américaine amplifiée : davantage de densité, de houblon et d’amertume, mais avec une charpente maltée encore clairement lisible.",
        "maltsEtCereales": [
          "Malt two-row ou pale comme base.",
          "Crystal faible à modéré dans les versions classiques ; Munich ou Vienna possible en petite proportion pour soutenir la force sans sucrosité excessive."
        ],
        "houblons": [
          "Houblons américains ou du Nouveau Monde, avec intensité moyenne-forte à forte.",
          "Amertume significative et ajouts tardifs généreux ; dry-hop fréquent."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine propre et bien atténuante, éventuellement levure anglaise modérément fruitée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil pauvre en alcalinité, souvent sulfaté pour éviter qu’une densité plus élevée ne donne une finale lourde.",
        "empatage": "Infusion orientée vers une bonne fermentescibilité et un corps moyen-léger à moyen.",
        "ebullitionEtHoublonnage": "Amertume construite en chaudière et forte charge aromatique tardive ; équilibre plus malté qu’une West Coast IPA très sèche.",
        "fermentation": "Fermentation haute propre, contrôle de l’alcool supérieur et des esters.",
        "maturation": "Courte ; service frais pour préserver le houblon.",
        "profilRecherche": "Une pale ale américaine puissante et houblonnée, mais encore équilibrée par le malt plutôt que totalement dominée par l’architecture d’une IPA."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Strong Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Sierra Nevada Pale Ale — objet et contexte historique du craft américain",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_1854865",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "juicy-hazy-strong-pale-ale",
      "nom": "Juicy / Hazy Strong Pale Ale",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "pale-ale",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "États-Unis contemporain",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.5,
        "max": 7.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 25,
        "max": 60,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 6,
        "max": 22,
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
          "IPA glass",
          "Teku"
        ]
      },
      "description": "La Juicy / Hazy Strong Pale Ale garde la douceur du haze mais monte le volume : fruits tropicaux, bouche ronde, voile dense, alcool modéré à sensible. Elle doit rester dangereusement buvable, pas basculer dans le smoothie alcoolisé.",
      "histoireEtOrigines": `La Juicy or Hazy Strong Pale Ale est une catégorie de transition née de l’expansion rapide du langage « hazy ». Lorsque les techniques et profils aromatiques associés aux New England IPA se diffusent dans les années 2010, les brasseurs ne les appliquent pas uniquement aux IPA : ils déclinent également des pale ales plus légères et des strong pale ales dont la force se situe entre la pale ale ordinaire et l’IPA ou la Double IPA.

La Brewers Association distingue aujourd’hui plusieurs niveaux de force au sein des bières « juicy or hazy », ce qui reflète davantage la pratique commerciale qu’une lignée historique indépendante. Le principe reste le même : houblon très aromatique, amertume perçue douce, texture généreuse, trouble souvent important et fruité de fermentation compatible avec les huiles de houblon. La version « strong pale » ajoute de la densité et de l’alcool sans rechercher l’amertume tranchante d’une IPA américaine classique.

Comme pour toutes les bières hazy, la stabilité du trouble et la fraîcheur aromatique dépendent d’un ensemble complexe de protéines, polyphénols, levure, composition de l’eau et gestion de l’oxygène. Une bière simplement mal clarifiée n’est pas une Hazy Strong Pale Ale réussie.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Même architecture qu’une Hazy Pale Ale, mais avec davantage de densité, de corps et d’alcool, sans basculer nécessairement dans l’intensité d’une Hazy IPA.",
        "maltsEtCereales": [
          "Malt pale ou Pilsner comme base.",
          "Avoine et blé fréquents pour texture, protéines et trouble ; malt dextrinique possible en petite quantité.",
          "Crystal généralement évité afin de conserver un profil clair, fruité et non caramélisé."
        ],
        "houblons": [
          "Variétés modernes riches en agrumes, fruits tropicaux ou fruits à noyau : Citra, Mosaic, Galaxy, Nelson Sauvin, Motueka, El Dorado et nombreuses alternatives.",
          "Whirlpool et dry-hop massifs, avec amertume classique modérée afin de préserver une perception douce."
        ],
        "levuresEtMicroorganismes": [
          "Souche anglaise ou apparentée, fruitée, à atténuation moyenne à élevée et texture souple.",
          "Les esters doivent s’intégrer au houblon sans créer de lourdeur ou de caractère fermentaire confus."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Chlorure souvent dominant pour une bouche souple, sulfate modéré pour garder une finale suffisamment nette.",
        "empatage": "Infusion visant un compromis entre fermentescibilité et corps. La bière doit rester buvable malgré une densité supérieure à celle d’une pale ale classique.",
        "ebullitionEtHoublonnage": "Charge amérisante contenue ; forte extraction aromatique au whirlpool et à cru. Limiter température et durée de contact pour éviter brûlure végétale et polyphénols excessifs.",
        "fermentation": "Fermentation haute fruitée, avec contrôle précis de la température et protection de l’oxygène dès la fin de fermentation active.",
        "maturation": "Très courte et en circuit fermé autant que possible. Conditionnement frais indispensable.",
        "profilRecherche": "Une strong pale ale trouble, moelleuse et très fruitée, plus ample qu’une Hazy Pale Ale mais toujours plus facile et moins agressive qu’une IPA puissante."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Juicy or Hazy Strong Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "The Alchemist Brewery",
          "edition": null,
          "reference": "Our Story — Heady Topper, Waterbury et diffusion de l’école houblonnée du Vermont",
          "type": "source_primaire_historique",
          "url": "https://alchemistbeer.com/story/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "kolsch",
      "nom": "Kölsch",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ale",
      "aliases": [
        "Koelsch"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Cologne, Rhénanie-du-Nord-Westphalie",
        "ville": "Cologne",
        "region": "Rhénanie-du-Nord-Westphalie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.4,
        "max": 5.2,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 18,
        "max": 30,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 7,
        "max": 14,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "hybride",
        "details": "Fermentation haute menée plus fraîchement que la plupart des ales, puis maturation prolongée à froid."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Stange"
        ]
      },
      "description": "La Kölsch est une ale qui se comporte presque comme une lager : pâle, claire, délicate, légèrement fruitée, avec malt grainé, houblon discret et finale sèche. Sa beauté tient au murmure : trop d’arôme, et le charme casse.",
      "histoireEtOrigines": `Kölsch est à la fois un style de bière et une appellation géographique intimement liée à Cologne. La ville possède une tradition brassicole médiévale ancienne, mais la Kölsch telle qu’on la comprend aujourd’hui est bien plus récente : elle se développe lorsque les brasseurs colognais de fermentation haute doivent répondre, aux XIXe et XXe siècles, à la concurrence croissante des lagers pâles. Ils conservent une levure d’ale mais recherchent une bière très claire, sèche, délicate et souvent maturée à froid.

Le German Brewers’ Association rappelle l’importance historique de la corporation des brasseurs de Cologne et la protection juridique de l’appellation. La Kölsch-Konvention, conclue en 1985 entre producteurs, formalise notamment l’usage du nom pour une bière claire de fermentation haute brassée dans la région autorisée ; la dénomination bénéficie également d’une protection géographique européenne. Il existe quelques situations historiques bénéficiant d’une antériorité, mais le principe reste celui d’un lien territorial fort.

La culture de service est presque aussi importante que la recette. La Kölsch est traditionnellement servie dans une Stange, verre cylindrique étroit d’environ 20 cl, par les Köbes des brasseries et tavernes de Cologne. Les petits verres sont renouvelés rapidement afin que la bière reste fraîche et pétillante. Cette combinaison d’ale fermentée relativement fraîche, de garde froide et de service local explique pourquoi Kölsch semble parfois située entre ale et lager sans être une fermentation basse.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Ale allemande très pâle et subtile : fermentation haute propre, atténuation élevée et maturation froide pour une précision presque lager-like.",
        "maltsEtCereales": [
          "Malt Pilsner très pâle dominant.",
          "Petite proportion de blé possible dans certaines recettes pour mousse et texture, mais non indispensable.",
          "Malts caramélisés ou fortement toastés doivent rester absents ou imperceptibles."
        ],
        "houblons": [
          "Houblons allemands ou continentaux nobles et apparentés, avec amertume basse à modérée et aromatique délicate.",
          "Le houblon ne doit pas rivaliser avec la finesse de la fermentation et du malt."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces cerevisiae de type Kölsch, fermentée plus fraîche que de nombreuses ales.",
          "Profil très propre avec fruité discret ; une légère note vineuse ou de pomme peut apparaître selon la souche."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau relativement douce à modérément minérale et faible en alcalinité afin de préserver la pâleur et la délicatesse.",
        "empatage": "Infusion simple ou paliers légers, orientés vers une bonne atténuation et un corps léger.",
        "ebullitionEtHoublonnage": "Houblonnage sobre, principalement pour équilibrer la céréale et apporter une touche florale ou herbacée.",
        "fermentation": "Fermentation haute dans la zone fraîche de la souche, puis fin de fermentation complète avant refroidissement.",
        "maturation": "Garde froide de plusieurs semaines fréquente afin d’affiner le profil, clarifier la bière et réduire les notes fermentaires.",
        "profilRecherche": "Une bière colonaise très pâle, brillante, sèche et délicate, où céréale, fermentation et houblon restent subtils mais présents."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "5B Kölsch — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/5/pale-bitter-european-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Koelsch — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "German Brewers’ Association",
          "edition": null,
          "reference": "Kölsch — fermentation haute, tradition colonaise, service et protection géographique",
          "type": "source_institutionnelle",
          "url": "https://germanbrewers.com/en/german-beer-variety/koelsch/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "session-ipa",
      "nom": "Session IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
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
        "min": 3,
        "max": 5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 30,
        "max": 60,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 5,
        "max": 18,
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
          "IPA glass",
          "American pint"
        ]
      },
      "description": "La Session IPA veut garder le parfum d’une IPA avec le poids d’une bière de soif : agrumes, pin, fruits, amertume nette, mais alcool bas et corps léger. L’exercice est cruel : trop mince, elle devient thé au houblon ; trop lourde, elle rate le mot session.",
      "histoireEtOrigines": `La Session IPA apparaît au début du XXIe siècle comme une réponse à l’escalade de force des IPA américaines. Alors que Double et Imperial IPA poussent alcool et houblon vers le haut, certains brasseurs souhaitent conserver l’arôme, la sécheresse et l’amertume d’une IPA dans une bière capable d’être bue en plusieurs pintes. Le terme « session » vient d’une culture britannique de consommation en séance, mais son association explicite avec l’IPA est principalement une construction craft moderne.

La catégorie reste délicate car une IPA moins forte peut facilement devenir une American Pale Ale simplement plus amère. La Brewers Association fixe aujourd’hui une limite de 5,0 % vol. pour ses compétitions et demande d’identifier le style d’IPA sous-jacent. Le BJCP traite également la Session IPA comme une Specialty IPA de force réduite. Le défi est donc de conserver une intensité houblonnée de type IPA sans corps maigre, verdeur ou amertume disproportionnée.

Une bonne Session IPA travaille autant la texture que la quantité de houblon : malts suffisamment expressifs, eau ajustée, empâtage évitant une attenuation excessive et dry-hop propre permettent de maintenir la sensation de bière complète malgré une densité réduite.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA de force réduite, généralement sous 5 % vol., qui doit conserver le langage aromatique et l’équilibre houblonné de son style de base.",
        "maltsEtCereales": [
          "Malt pale ou Pilsner comme base, parfois complété de Vienna, Munich léger, blé ou avoine pour éviter un corps trop mince.",
          "Crystal faible ou absent dans les versions sèches modernes."
        ],
        "houblons": [
          "Même famille de houblons que l’IPA sous-jacente, mais dosage et amertume ajustés à la faible densité.",
          "Whirlpool et dry-hop importants pour maximiser l’arôme sans devoir augmenter brutalement les IBU."
        ],
        "levuresEtMicroorganismes": [
          "Souche propre et atténuante, américaine ou anglaise selon le profil ; une fermentation trop sèche peut accentuer la maigreur."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate et chlorure équilibrés selon l’école, avec assez de chlorure pour préserver la texture et assez de sulfate pour une finale nette.",
        "empatage": "Souvent légèrement plus chaud qu’une IPA standard afin de conserver du corps, sans produire une douceur collante.",
        "ebullitionEtHoublonnage": "Amertume soigneusement calibrée par rapport à la densité ; priorité aux ajouts tardifs et au dry-hop pour conserver l’impact aromatique.",
        "fermentation": "Fermentation haute propre et rapide, avec contrôle de l’oxygène après fermentation.",
        "maturation": "Très courte ; conditionnement frais pour éviter la perte d’arôme.",
        "profilRecherche": "Une IPA authentiquement houblonnée et sèche, mais légère en alcool et suffisamment équilibrée pour rester une bière de session."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Session India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA — Session strength — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "english-ipa",
      "nom": "English IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Angleterre",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5,
        "max": 7.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 40,
        "max": 60,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 12,
        "max": 28,
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
          "Nonic pint",
          "Tulipe"
        ]
      },
      "description": "L’English IPA est sèche, amère, dorée à ambrée, avec houblon floral, épicé ou orangé, malt biscuité et parfois une note minérale. Elle n’a pas besoin de sentir la mangue : son charme vient de la retenue et d’une amertume qui dure.",
      "histoireEtOrigines": `L’English IPA est la descendante la plus directe des pale ales de stock expédiées vers l’Inde britannique au XIXe siècle. Son histoire ne commence pourtant pas par une invention soudaine. Des pale ales bien houblonnées étaient déjà envoyées en Inde avant que le nom IPA ne se fixe, et George Hodgson doit surtout son importance à sa position commerciale près des docks de l’East India Company. Le récit selon lequel il aurait créé une bière exceptionnellement forte uniquement pour survivre au voyage est aujourd’hui considéré comme trop simplificateur.

Dans les années 1820, Burton upon Trent devient un centre majeur de l’IPA. Des brasseries comme Allsopp et Bass utilisent une eau naturellement riche en sulfates, qui accentue la sécheresse et la netteté de l’amertume. Les bières destinées au marché indien sont pâles, fortement atténuées et généreusement houblonnées, souvent avec des houblons anglais. Leur succès finit aussi par nourrir un marché britannique domestique.

Le style décline et se transforme au XXe siècle : de nombreuses « IPA » britanniques deviennent plus faibles, parfois proches d’une Bitter. La renaissance craft remet ensuite en circulation des versions plus fortes et plus sèches, mais celles-ci doivent être distinguées des American IPA. Une English IPA moderne privilégie encore les malts et houblons britanniques, des esters modérés, une amertume franche et un équilibre plus terreux, floral ou marmelade que tropical.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA britannique sèche, bien atténuée et houblonnée, avec ingrédients et fermentation typiquement anglais plutôt qu’un profil américain tropical.",
        "maltsEtCereales": [
          "Pale ale malt britannique dominant, historiquement assez clair et capable de produire un profil de pain et biscuit.",
          "Crystal faible ou nul dans les interprétations historiques ; certaines versions modernes en utilisent modestement pour couleur et toffee léger.",
          "Sucres de brasserie possibles pour favoriser l’atténuation dans certaines traditions."
        ],
        "houblons": [
          "East Kent Goldings, Fuggles, Challenger, Target, Northdown ou autres houblons britanniques et apparentés.",
          "Amertume ferme, houblon tardif et dry-hop historiquement plausibles dans les pale ales de stock."
        ],
        "levuresEtMicroorganismes": [
          "Souche anglaise bien atténuante, avec esters modérés de fruits et bonne floculation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil souvent riche en sulfate dans l’esprit de Burton afin de tendre la finale et donner une amertume sèche, sans minéralité agressive.",
        "empatage": "Infusion orientée vers une bonne fermentescibilité et un corps moyen-léger.",
        "ebullitionEtHoublonnage": "Amertume soutenue dès la chaudière, puis ajouts aromatiques anglais ; dry-hop possible pour reproduire la logique des pale ales de stock.",
        "fermentation": "Fermentation haute avec fruité maîtrisé et atténuation élevée.",
        "maturation": "Les versions modernes sont souvent consommées fraîches ; les pale ales de stock historiques pouvaient être gardées beaucoup plus longtemps et développer un profil différent.",
        "profilRecherche": "Une IPA anglaise sèche, amère et élégante, où biscuit, marmelade, fleurs, herbes et esters britanniques remplacent le tropical massif des versions modernes américaines."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "12C English IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/12/pale-commonwealth-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "CAMRA / Pete Brown",
          "edition": null,
          "reference": "India Pale Ale: A History — mythes, commerce vers l’Inde et réinvention américaine",
          "type": "histoire_brassicole",
          "url": "https://learn.camra.org.uk/courses/india-pale-ale-a-history",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-ipa",
      "nom": "American IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
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
        "min": 5.5,
        "max": 7.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 40,
        "max": 70,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 10,
        "max": 28,
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
          "IPA glass",
          "American pint"
        ]
      },
      "description": "L’American IPA est le grand coup de projecteur sur le houblon : agrumes, pin, résine, fruits tropicaux, melon ou fruits à noyau, sur un malt clair et sec. Elle doit être amère et aromatique, mais jamais râpeuse comme une poignée d’aiguilles de pin.",
      "histoireEtOrigines": `L’American IPA est l’une des créations emblématiques du craft américain, mais elle ne naît pas immédiatement sous ce nom. Anchor Liberty Ale, brassée en 1975 avec Cascade, montre tôt le potentiel aromatique des houblons américains dans une ale pâle. Sierra Nevada Pale Ale, à partir de 1980-1981, élargit encore le public de ces caractères d’agrumes et de pin. Pendant les années 1980 et 1990, les brasseurs poussent progressivement densité, amertume et houblonnage au-delà de la Pale Ale.

La redécouverte des IPA britanniques historiques fournit un vocabulaire, mais les États-Unis réinventent profondément le style. Cascade, Centennial, Chinook, Columbus, Simcoe et plus tard Amarillo, Citra, Mosaic ou d’autres variétés imposent des profils inconnus des IPA anglaises classiques. L’American IPA devient dorée à ambrée, sèche, amère, propre en fermentation et massivement aromatique. Les années 1990-2000 voient le style devenir un étendard de la côte Ouest avant qu’il se diversifie à l’échelle nationale.

L’American IPA moderne est aujourd’hui une catégorie centrale dont dérivent Double IPA, Session IPA et de nombreuses Specialty IPA. Le BJCP la distingue de la Hazy IPA : elle doit rester plus sèche, plus nette dans l’amertume, avec une fermentation généralement plus neutre et un malt de soutien. Les versions récentes ont souvent réduit crystal malt et couleur par rapport aux exemples classiques du début du craft.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA américaine standard : houblon intense, amertume franche, fermentation propre et finale sèche, avec un malt de soutien plutôt que dominant.",
        "maltsEtCereales": [
          "Malt two-row ou pale américain dominant.",
          "Crystal/caramel historiquement courant mais aujourd’hui souvent réduit ou supprimé ; Vienna ou Munich léger possibles en faible proportion.",
          "Sucre simple parfois utilisé en petite quantité pour augmenter l’atténuation dans les versions plus fortes."
        ],
        "houblons": [
          "Cascade, Centennial, Chinook, Columbus, Simcoe, Amarillo, Citra, Mosaic et nombreuses variétés américaines ou du Nouveau Monde.",
          "Amertume moyenne-forte à forte, gros ajouts tardifs, whirlpool et dry-hop."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine neutre et atténuante, limitant les esters afin de laisser le houblon dominer."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité ; sulfate souvent élevé par rapport au chlorure pour une finale sèche et une amertume nette, avec adaptation aux houblons modernes pour éviter la dureté.",
        "empatage": "Infusion simple relativement basse à modérée pour favoriser une forte atténuation.",
        "ebullitionEtHoublonnage": "Amertume de chaudière ou extraits de houblon propres, puis plusieurs couches tardives et dry-hop. Les versions modernes déplacent davantage de matière vers le whirlpool et le froid.",
        "fermentation": "Fermentation haute propre, gestion stricte des températures et de l’oxygène.",
        "maturation": "Courte ; cold crash et conditionnement sous faible oxygène. La fraîcheur est essentielle.",
        "profilRecherche": "Une IPA sèche et tranchante, intensément aromatique et amère, où le malt soutient le houblon sans créer de douceur lourde."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21A American IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Anchor Liberty Ale — Cascade, 1975 et préfiguration de l’IPA américaine",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_2033255",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Our Story — fondation en 1980 et rôle de Pale Ale dans l’essor du craft américain",
          "type": "source_primaire_historique",
          "url": "https://sierranevada.com/about-us",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "new-zealand-ipa",
      "nom": "New Zealand IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
      "aliases": [],
      "paysOrigine": [
        "Nouvelle-Zélande"
      ],
      "origine": {
        "libelle": "Nouvelle-Zélande",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.5,
        "max": 7.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 40,
        "max": 70,
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "IPA glass",
          "Teku"
        ]
      },
      "description": "La New Zealand IPA remplace le pin américain par une salve de fruit vert : sauvignon blanc, groseille, citron vert, fruit de la passion, herbes fraîches. Elle doit rester sèche et IPA dans l’équilibre, mais porter une signature de houblons néo-zélandais évidente.",
      "histoireEtOrigines": `La New Zealand IPA est une spécialisation récente de l’IPA moderne, construite autour des houblons néo-zélandais. Elle prend forme lorsque des variétés comme Nelson Sauvin, Motueka, Riwaka et plus récemment Nectaron acquièrent une réputation internationale pour leurs caractères de raisin blanc, citron vert, fruits tropicaux, agrumes et fruits à noyau. Les brasseurs découvrent qu’elles peuvent donner une IPA très expressive sans reproduire exactement les profils résineux ou agrumés de la côte Ouest américaine.

La Brewers Association a reconnu les styles New Zealand Pale Ale et New Zealand IPA dans ses guidelines à partir de 2021, signe que cette école est devenue suffisamment identifiable pour être jugée séparément. Elle n’est toutefois pas une tradition nationale ancienne : c’est une catégorie craft fondée sur la provenance et le profil aromatique des houblons.

Une New Zealand IPA peut être claire ou légèrement voilée, très sèche ou plus souple selon la brasserie. L’élément déterminant est que les caractères des variétés néo-zélandaises restent au premier plan et que l’intensité corresponde à une IPA, pas simplement à une pale ale enrichie.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA moderne centrée sur les houblons néo-zélandais et leurs profils distinctifs de citron vert, raisin, fruits tropicaux et fruits à noyau.",
        "maltsEtCereales": [
          "Malt pale ou Pilsner comme base claire ; petite proportion de Vienna possible pour soutenir les fruits sans caramel lourd.",
          "Avoine ou blé possibles dans les versions plus souples, mais pas nécessaires."
        ],
        "houblons": [
          "Nelson Sauvin, Motueka, Riwaka, Nectaron, Wai-iti, Pacifica et autres variétés de Nouvelle-Zélande.",
          "Combinaison d’amertume nette, whirlpool et dry-hop ; le choix variétal doit rester identifiable."
        ],
        "levuresEtMicroorganismes": [
          "Souche d’ale propre pour une version claire, ou souche fruitée modérée pour une interprétation plus douce."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité ; sulfate modéré pour la netteté, chlorure suffisant pour préserver le fruit et la texture.",
        "empatage": "Infusion simple orientée vers une bonne atténuation.",
        "ebullitionEtHoublonnage": "Amertume moyenne-forte, puis forte charge aromatique tardive et à cru. Éviter une extraction végétale qui masquerait les caractères délicats de certaines variétés.",
        "fermentation": "Fermentation haute propre et gestion stricte de l’oxygène après fermentation.",
        "maturation": "Très courte ; service frais pour conserver les thiols et huiles les plus volatils.",
        "profilRecherche": "Une IPA où le terroir variétal néo-zélandais se lit immédiatement : agrumes, raisin, fruits tropicaux ou à noyau sur une base sèche et nette."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "New Zealand-Style India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "New Zealand Hops",
          "edition": null,
          "reference": "Motueka™ — origine génétique, profil citron vert et usage brassicole",
          "type": "source_technique_houblon",
          "url": "https://nzhops.co.nz/products/motueka",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21A American IPA — structural comparison — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "west-coast-ipa",
      "nom": "West Coast IPA",
      "collectionId": 2,
      "nature": "SS",
      "parentPrincipalId": "american-ipa",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Côte Ouest des États-Unis",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6,
        "max": 8,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 50,
        "max": 80,
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
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "IPA glass",
          "American pint"
        ]
      },
      "description": "La West Coast IPA est l’IPA au couteau : claire, sèche, amère, résineuse, citronnée, parfois tropicale mais jamais moelleuse. Elle laisse une finale nette et longue, comme si le houblon avait signé le verre au marqueur indélébile.",
      "histoireEtOrigines": `West Coast IPA désigne l’école qui a façonné l’image de l’IPA américaine classique sur la côte Pacifique. Elle ne possède pas un acte de naissance unique, mais une généalogie claire : Anchor Liberty Ale en 1975 montre la force aromatique de Cascade ; Sierra Nevada Pale Ale popularise un houblon américain très expressif au début des années 1980 ; puis les brasseries de Californie, de l’Oregon et de Washington augmentent progressivement l’amertume, la sécheresse et le dry-hop.

Dans les années 1990 et 2000, la côte Ouest devient synonyme de bières très claires à ambrées, résineuses, agrumées et fortement amères. San Diego pousse particulièrement loin cette esthétique de sécheresse et d’intensité. L’essor des Double IPA, avec les premiers essais de Vinnie Cilurzo puis Pliny the Elder, appartient au même mouvement de surenchère maîtrisée du houblon.

Le style évolue ensuite face au succès des Hazy IPA. Les West Coast IPA contemporaines sont souvent plus pâles et encore plus sèches que leurs ancêtres, avec moins de crystal malt, une amertume parfois moins massive mais plus propre, et des houblons modernes pouvant apporter des fruits tropicaux en plus du pin et des agrumes. Ce qui persiste est la clarté de la fermentation, la sécheresse et une amertume explicitement présente.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA claire, sèche et tranchante, où l’amertume reste assumée et le houblon s’exprime avec netteté plutôt qu’avec la douceur d’une Hazy IPA.",
        "maltsEtCereales": [
          "Malt pale ou Pilsner comme base ; les versions historiques pouvaient employer davantage de crystal, les versions modernes tendent à l’éviter.",
          "Petite proportion de Vienna ou Munich clair possible pour le soutien malté sans sucrosité."
        ],
        "houblons": [
          "Cascade, Centennial, Chinook, Columbus et Simcoe pour le registre classique ; Citra, Mosaic, Strata, Idaho 7 et autres variétés modernes peuvent compléter le profil.",
          "Amertume franche et propre, forte charge au whirlpool et dry-hop, avec objectif de clarté aromatique."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine très propre et fortement atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate souvent nettement supérieur au chlorure pour accentuer la sécheresse et la précision de l’amertume ; éviter toutefois les niveaux qui produisent une dureté minérale.",
        "empatage": "Infusion plutôt basse ou modérée pour une forte fermentescibilité et une finale sèche.",
        "ebullitionEtHoublonnage": "Amertume construite proprement, puis couches aromatiques tardives et dry-hop. Les techniques modernes cherchent à maximiser l’arôme tout en limitant polyphénols et oxygène.",
        "fermentation": "Fermentation haute très nette ; contrôle précis de température et atténuation complète.",
        "maturation": "Courte, avec clarification et conditionnement sous CO₂. La bière doit être servie très fraîche.",
        "profilRecherche": "Une IPA limpide à légèrement voilée, sèche et mordante, avec un houblon intense, précis et une amertume qui structure durablement la finale."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "West Coast-Style India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Anchor Liberty Ale — Cascade, 1975 et préfiguration de l’IPA américaine",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_2033255",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "Pliny the Elder — Double IPA, festival de Hayward 2000 et antécédent de Blind Pig en 1994",
          "type": "source_primaire_historique",
          "url": "https://www.russianriverbrewing.com/brew/pliny-the-elder/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "neipa-juicy-hazy-ipa",
      "nom": "NEIPA / Juicy-Hazy IPA",
      "collectionId": 2,
      "nature": "SS",
      "parentPrincipalId": "american-ipa",
      "aliases": [
        "NEIPA",
        "New England IPA",
        "Juicy IPA",
        "Hazy IPA"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Nouvelle-Angleterre, États-Unis",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6,
        "max": 9,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 25,
        "max": 60,
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
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "IPA glass",
          "Teku"
        ]
      },
      "description": "La NEIPA est un nuage de houblon fruité : robe opaque, bouche douce, fruits tropicaux, pêche, agrumes mûrs, amertume perçue plus basse. Elle doit être juteuse et soyeuse, pas farineuse, sucrée ou boueuse.",
      "histoireEtOrigines": `La New England IPA, aujourd’hui souvent appelée Hazy IPA ou Juicy IPA, se développe dans le Nord-Est des États-Unis au tournant des années 2000. Heady Topper, brassée par John Kimmich à The Alchemist à Waterbury, devient une référence majeure de cette nouvelle approche. La bière privilégie une énorme intensité aromatique de houblon et une amertume perçue moins dure que les West Coast IPA de l’époque. The Alchemist ouvre son brewpub en 2003 puis une petite brasserie de production en 2011, période durant laquelle la réputation de Heady Topper explose.

Le phénomène dépasse rapidement le Vermont. D’autres brasseries du Nord-Est développent des IPA troubles, riches en fruits tropicaux et agrumes, utilisant souvent des souches anglaises fruitées, des céréales riches en protéines et de très gros houblonnages tardifs. Dans les années 2010, « NEIPA » devient un mouvement mondial. Le BJCP emploie aujourd’hui Hazy IPA, considérant que le style a dépassé son origine géographique.

Le trouble est un résultat volontaire de la formulation et du procédé, mais il ne suffit pas à définir le style. Une Hazy IPA réussie doit être fruitée, souple et massivement houblonnée sans être sucrée, farineuse ou chargée de particules. L’oxydation est son ennemi principal : une exposition à l’air peut brunir la bière et transformer rapidement les arômes frais en notes ternes ou confites.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA trouble et très aromatique, à amertume perçue plus douce, bouche souple et interaction forte entre céréales, levure et houblon.",
        "maltsEtCereales": [
          "Malt pale ou Pilsner comme base claire.",
          "Avoine et blé fréquents pour protéines, texture et stabilité du trouble ; malt dextrinique possible avec retenue.",
          "Crystal généralement absent afin d’éviter caramel et couleur sombre."
        ],
        "houblons": [
          "Citra, Mosaic, Galaxy, El Dorado, Nelson Sauvin, Motueka et autres variétés fortement fruitées.",
          "Amertume classique limitée à modérée ; très fortes additions au whirlpool et en dry-hop."
        ],
        "levuresEtMicroorganismes": [
          "Souches anglaises ou apparentées, fruitées et relativement peu floculantes à moyennement floculantes, capables de produire une bouche souple.",
          "Verdant IPA illustre une souche moderne offrant abricot, fruits tropicaux et agrumes avec atténuation moyenne à élevée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Chlorure généralement dominant pour adoucir la bouche, sulfate modéré pour conserver de la définition ; faible alcalinité.",
        "empatage": "Infusion visant un corps moyen sans finir sucré. La texture vient autant des protéines et de l’eau que d’un haut niveau de sucres résiduels.",
        "ebullitionEtHoublonnage": "Peu de houblon amérisant classique, gros whirlpool à température contrôlée, puis un ou plusieurs dry-hops. La prévention du hop burn et de l’oxydation est centrale.",
        "fermentation": "Fermentation haute fruitée. Le moment du dry-hop peut varier ; certains ajouts pendant fermentation favorisent certaines transformations aromatiques, mais ils ne sont pas obligatoires.",
        "maturation": "Très courte, transferts fermés et conditionnement sous CO₂. Pas de vieillissement prolongé.",
        "profilRecherche": "Une IPA opaque mais lumineuse, saturée d’arômes de fruits frais, souple en bouche, peu agressive dans l’amertume et extrêmement fraîche."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21C Hazy IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Juicy or Hazy India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "The Alchemist Brewery",
          "edition": null,
          "reference": "Our Story — Heady Topper, Waterbury et diffusion de l’école houblonnée du Vermont",
          "type": "source_primaire_historique",
          "url": "https://alchemistbeer.com/story/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "double-imperial-ipa",
      "nom": "Double / Imperial IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
      "aliases": [
        "Double IPA",
        "DIPA",
        "Imperial IPA"
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
        "min": 7.5,
        "max": 10.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 60,
        "max": 100,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 10,
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
          "IPA glass",
          "Snifter"
        ]
      },
      "description": "La Double IPA augmente tout : houblon, alcool, amertume, arôme, intensité. Mais sa réussite dépend de ce qu’elle retire : pas trop de caramel, pas trop de lourdeur, pas de brûlure. C’est une arme lourde qui doit rester maniable.",
      "histoireEtOrigines": `La Double ou Imperial IPA est une création américaine des années 1990. Vinnie Cilurzo, alors à Blind Pig Brewing, est souvent crédité d’un des premiers exemples en 1994. L’idée est simple mais techniquement exigeante : augmenter densité et houblon tout en évitant qu’une IPA plus forte devienne sirupeuse, brûlante ou simplement excessivement amère.

Russian River documente une étape importante en 2000. Pour le premier Double IPA Festival organisé par le Bistro à Hayward, plusieurs brasseries sont invitées à produire une bière adaptée à cette catégorie encore neuve. Cilurzo brasse alors Pliny the Elder chez Russian River, après son expérience de Blind Pig. Le festival contribue à donner une visibilité et un langage commun à ce qui devient rapidement un style central du craft américain.

La Double IPA classique associe une forte charge de houblon, un alcool élevé et une finale sèche. Contrairement à l’image d’une simple « IPA x2 », elle doit contrôler le malt résiduel et la chaleur alcoolique. Le BJCP la place aujourd’hui dans les Strong American Ale plutôt que dans les Specialty IPA, signe que le style s’est stabilisé.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA américaine forte, très houblonnée et fortement atténuée : puissance sans lourdeur ni chaleur alcoolique agressive.",
        "maltsEtCereales": [
          "Malt pale ou two-row dominant, avec peu de malts caramélisés.",
          "Sucre simple fréquent pour augmenter la densité initiale tout en maintenant une finale sèche.",
          "Vienna ou Munich clair possibles en faible proportion pour soutenir la structure."
        ],
        "houblons": [
          "Très forte charge de houblons américains ou du Nouveau Monde, avec combinaison d’amertume, whirlpool et dry-hop.",
          "Les variétés classiques comprennent Simcoe, Centennial, Columbus et Amarillo ; les versions modernes utilisent aussi Citra, Mosaic, Strata et bien d’autres."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine propre, fortement atténuante et suffisamment tolérante à l’alcool."
        ],
        "ingredientsComplementaires": [
          "Sucres simples possibles et souvent utiles pour assécher la bière sans augmenter excessivement le corps."
        ],
        "profilEau": "Faible alcalinité, sulfate souvent élevé pour une finale nette, avec chlorure suffisant pour éviter une impression mince ou abrasive.",
        "empatage": "Empâtage orienté vers une forte fermentescibilité ; l’objectif est d’éviter un résiduel sucré malgré la forte densité initiale.",
        "ebullitionEtHoublonnage": "Amertume significative mais propre, puis énormes charges tardives et à cru. L’extraction doit être gérée pour éviter astringence et hop burn.",
        "fermentation": "Ensemencement généreux, oxygénation suffisante et contrôle thermique strict afin de limiter alcools supérieurs et fermentation incomplète.",
        "maturation": "Courte à moyenne pour finir proprement la fermentation, mais consommation rapide ensuite afin de préserver le houblon.",
        "profilRecherche": "Une IPA puissante, sèche et explosive en houblon, où l’alcool renforce l’intensité sans produire de lourdeur ou de chaleur dominante."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "22A Double IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/strong-american-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Imperial or Double India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "Pliny the Elder — Double IPA, festival de Hayward 2000 et antécédent de Blind Pig en 1994",
          "type": "source_primaire_historique",
          "url": "https://www.russianriverbrewing.com/brew/pliny-the-elder/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "juicy-hazy-double-imperial-ipa",
      "nom": "Juicy-Hazy Double / Imperial IPA",
      "collectionId": 2,
      "nature": "SS",
      "parentPrincipalId": "double-imperial-ipa",
      "aliases": [
        "Hazy Double IPA",
        "Juicy Double IPA"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "États-Unis contemporain",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 7.5,
        "max": 10.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 35,
        "max": 80,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 6,
        "max": 24,
        "unite": "EBC",
        "statut": "large"
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
          "IPA glass",
          "Teku"
        ]
      },
      "description": "La Juicy-Hazy Double IPA est le fruit tropical sous haute tension : voile dense, bouche ronde, houblon massif, alcool élevé mais masqué. Elle doit rester une bière, pas un nectar épais ; le danger, c’est la douceur qui englue tout.",
      "histoireEtOrigines": `La Juicy or Hazy Double/Imperial IPA est l’aboutissement logique de deux mouvements craft américains : l’escalade de puissance de la Double IPA, née dans les années 1990, et l’esthétique plus douce, trouble et fruitée des Hazy IPA qui explose dans les années 2010. Au lieu d’augmenter simplement l’amertume d’une NEIPA, les brasseurs cherchent à augmenter densité, alcool et quantité de houblon tout en conservant une bouche souple et une amertume perçue relativement modérée.

La Brewers Association distingue aujourd’hui explicitement les Juicy or Hazy Imperial or Double India Pale Ale. Cette reconnaissance montre que le style est devenu plus qu’une simple « NEIPA forte ». Le défi est technique : une forte densité favorise chaleur alcoolique et sucrosité, tandis qu’un dry-hop massif augmente le risque de hop burn, d’oxydation, de refermentation tardive et de perte de stabilité.

Une version réussie doit donc donner une impression de fruits concentrés et d’onctuosité sans devenir sirupeuse. L’alcool peut être élevé, mais il doit rester intégré ; le trouble doit être stable et uniforme ; la finale doit conserver assez de sécheresse pour que la bière ne s’effondre pas sous son propre poids.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Double IPA de l’école hazy : alcool élevé, houblon très intense, amertume douce et texture souple, avec une attention extrême à l’atténuation et à l’oxygène.",
        "maltsEtCereales": [
          "Malt pale ou Pilsner dominant.",
          "Avoine et blé fréquents pour texture et trouble ; malt dextrinique possible avec modération.",
          "Crystal généralement évité afin de limiter couleur et douceur caramélisée."
        ],
        "houblons": [
          "Citra, Mosaic, Galaxy, Nelson Sauvin, Motueka, El Dorado et autres variétés fortement fruitées.",
          "Très grosses charges au whirlpool et en dry-hop, parfois en plusieurs étapes ; amertume classique plus contenue qu’une Double IPA claire."
        ],
        "levuresEtMicroorganismes": [
          "Souche fruitée, tolérante à l’alcool, à atténuation moyenne à élevée et capable de préserver une bouche souple.",
          "Le profil de fermentation doit compléter le houblon sans apporter de solvants ni d’alcool chaud."
        ],
        "ingredientsComplementaires": [
          "Sucre simple possible en faible quantité si nécessaire pour contrôler la densité finale, sans devenir une caractéristique obligatoire."
        ],
        "profilEau": "Chlorure souvent dominant pour la douceur de bouche, sulfate présent en quantité suffisante pour éviter une finale molle.",
        "empatage": "Infusion visant davantage de fermentescibilité qu’une Hazy IPA standard afin de compenser la forte densité initiale.",
        "ebullitionEtHoublonnage": "Faible à moyenne charge amérisante classique, puis houblonnage massif tardif et à cru. Gestion du hop creep, du hop burn et de l’oxygène indispensable.",
        "fermentation": "Ensemencement sain et contrôle thermique strict. Les dry-hops doivent être planifiés pour éviter refermentation incontrôlée ou surpression après conditionnement.",
        "maturation": "Courte, avec transferts fermés et conditionnement rapide. Le style vieillit très mal malgré sa force alcoolique.",
        "profilRecherche": "Une bière très forte mais étonnamment douce et fruitée, saturée de houblon frais, sans chaleur alcoolique agressive ni sucrosité collante."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Juicy or Hazy Imperial or Double India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21C Hazy IPA — lineage — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "Pliny the Elder — Double IPA, festival de Hayward 2000 et antécédent de Blind Pig en 1994",
          "type": "source_primaire_historique",
          "url": "https://www.russianriverbrewing.com/brew/pliny-the-elder/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "belgian-ipa",
      "nom": "Belgian IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
      "aliases": [],
      "paysOrigine": [
        "Belgique",
        "États-Unis"
      ],
      "origine": {
        "libelle": "Belgique et mouvement craft américain",
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
        "min": 50,
        "max": 100,
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
        "temperatureMin": 8,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe belge",
          "IPA glass"
        ]
      },
      "description": "La Belgian IPA mélange deux feux : houblon d’IPA et levure belge. Agrumes, fruits tropicaux ou fleurs rencontrent poivre, clou de girofle, poire, pomme ou banane légère. Si levure et houblon se battent, le style tombe dans le carnaval de solvants.",
      "histoireEtOrigines": `La Belgian IPA est un hybride craft, non un style monastique ancien. Elle apparaît lorsque les brasseurs belges et américains commencent à croiser, à la fin du XXe siècle et au début du XXIe, le houblonnage des IPA modernes avec des levures belges très expressives. Le résultat n’est ni une Tripel simplement plus amère, ni une American IPA fermentée au hasard avec n’importe quelle souche belge : le style fonctionne lorsque les esters, les phénols épicés, la sécheresse et le houblon se renforcent mutuellement.

Le mouvement s’inscrit dans une période de forte circulation des idées entre les scènes craft américaine et belge. Les brasseurs américains s’inspirent des fermentations très atténuées et des levures épicées de Belgique, tandis que plusieurs brasseries belges adoptent davantage de houblons américains ou néo-zélandais. Le BJCP codifie aujourd’hui Belgian IPA parmi les Specialty IPA, ce qui reflète cette nature hybride.

La difficulté est l’accumulation aromatique : une souche donnant banane, girofle, poivre et alcools supérieurs combinée à un houblon tropical intense peut devenir confuse. Les meilleures versions privilégient souvent une fermentation sèche, un malt clair et une sélection de houblons capable de dialoguer avec le fruité et l’épice de la levure.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA sèche et houblonnée dont la fermentation belge apporte fruité et épices sans masquer le houblon.",
        "maltsEtCereales": [
          "Malt Pilsner ou pale très clair dominant.",
          "Petite proportion de Munich/Vienna possible ; caramel généralement faible.",
          "Sucre candi clair ou saccharose possible pour augmenter l’atténuation et alléger la bouche."
        ],
        "houblons": [
          "Houblons américains, du Nouveau Monde ou continentaux : agrumes, fruits tropicaux, épices et fleurs peuvent tous fonctionner.",
          "Amertume moyenne à forte, mais la sécheresse de fermentation augmente déjà la perception de fermeté."
        ],
        "levuresEtMicroorganismes": [
          "Souche belge de Saccharomyces cerevisiae produisant esters fruités et éventuellement phénols poivrés/clou de girofle.",
          "Choisir une souche fortement atténuante afin d’éviter une combinaison lourde de sucre résiduel, alcool et houblon."
        ],
        "ingredientsComplementaires": [
          "Sucre simple ou candi clair possible pour alléger la structure."
        ],
        "profilEau": "Faible alcalinité, sulfate modéré à élevé pour la sécheresse, chlorure contenu afin d’éviter une bouche trop ronde.",
        "empatage": "Empâtage favorisant une forte fermentescibilité ; sucre simple souvent ajouté en chaudière ou fermentation selon la recette.",
        "ebullitionEtHoublonnage": "Amertume structurante puis ajouts tardifs et dry-hop mesurés pour éviter de surcharger un profil fermentaire déjà complexe.",
        "fermentation": "Fermentation haute avec montée contrôlée de température afin d’obtenir fruité et épices sans solvants. Atténuation complète essentielle.",
        "maturation": "Courte à moyenne selon la force, mais consommation relativement fraîche pour préserver le houblon.",
        "profilRecherche": "Une IPA sèche, lumineuse et expressive où poire, agrumes, poivre et houblon moderne forment un ensemble cohérent plutôt qu’un empilement d’arômes."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Belgian IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-Style India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "black-ipa",
      "nom": "Black IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
      "aliases": [
        "Cascadian Dark Ale"
      ],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Nord-Ouest des États-Unis",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.5,
        "max": 9,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 50,
        "max": 90,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 40,
        "max": 80,
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
          "IPA glass",
          "American pint"
        ]
      },
      "description": "La Black IPA ressemble à une contradiction assumée : noire comme une stout, sèche et houblonnée comme une IPA. Le malt noir doit apporter cacao léger, toast ou café discret, jamais cendre, afin de laisser le houblon garder la main.",
      "histoireEtOrigines": `La Black IPA naît de la volonté craft de conserver l’équilibre d’une IPA tout en introduisant une couleur sombre et une touche de malt torréfié. Des précurseurs apparaissent aux États-Unis dans les années 1990 et 2000, particulièrement dans le Nord-Ouest Pacifique, où certains brasseurs préfèrent l’appellation « Cascadian Dark Ale ». Le nom « Black IPA », volontairement contradictoire puisque le P signifie Pale, s’impose pourtant largement sur le marché.

CAMRA souligne ce paradoxe dans son histoire de l’IPA et rappelle la tentative de reclassification sous un nom régional. La catégorie se répand fortement pendant les années 2000-2010 lorsque l’IPA devient un terrain d’expérimentation permanent. Le BJCP l’intègre aujourd’hui parmi les Specialty IPA.

La clé stylistique est la retenue des malts sombres. Une Black IPA ne doit pas goûter comme un stout fortement houblonné : les notes de chocolat, café léger ou pain grillé restent secondaires et ne doivent pas produire de brûlé, de cendre ou de forte astringence. La sécheresse et le houblon restent ceux d’une IPA américaine.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA américaine sombre où la torréfaction soutient le houblon sans transformer la bière en stout ou porter houblonné.",
        "maltsEtCereales": [
          "Malt pale dominant.",
          "Malts noirs désamérisés, Carafa Special ou autres malts sombres doux en faible proportion pour couleur et notes légères de cacao/café.",
          "Crystal faible à modéré selon l’école, mais la finale doit rester sèche."
        ],
        "houblons": [
          "Houblons américains ou du Nouveau Monde intenses, souvent résineux, agrumés, tropicaux ou à fruits à noyau.",
          "Amertume moyenne-forte à très forte, gros houblonnage tardif et dry-hop."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine propre et atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate souvent élevé pour la sécheresse ; alcalinité légèrement supérieure à une IPA pâle peut être nécessaire pour gérer les malts sombres, sans remonter au point de durcir la bière.",
        "empatage": "Infusion favorisant une bonne atténuation. Les malts les plus sombres peuvent être ajoutés tard ou sous formes désamérisées pour limiter astringence et brûlé.",
        "ebullitionEtHoublonnage": "Architecture d’IPA américaine : amertume nette, whirlpool et dry-hop généreux.",
        "fermentation": "Fermentation haute propre, avec attention à l’oxydation qui ternit à la fois houblon et malt sombre.",
        "maturation": "Courte ; la fraîcheur aromatique prime sur l’intégration longue des malts noirs.",
        "profilRecherche": "Une IPA noire mais sèche, intensément houblonnée, avec seulement une ombre de chocolat, café ou toast en soutien."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Black IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Black Ale / Black IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "CAMRA / Pete Brown",
          "edition": null,
          "reference": "India Pale Ale: A History — mythes, commerce vers l’Inde et réinvention américaine",
          "type": "histoire_brassicole",
          "url": "https://learn.camra.org.uk/courses/india-pale-ale-a-history",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "brown-ipa",
      "nom": "Brown IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
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
        "min": 5.5,
        "max": 9,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 40,
        "max": 80,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 24,
        "max": 50,
        "unite": "EBC",
        "statut": "large"
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
          "IPA glass",
          "American pint"
        ]
      },
      "description": "La Brown IPA installe le houblon sur un plancher brun : noisette, pain grillé, caramel sec, parfois cacao doux, avec amertume et arômes d’IPA. Elle doit éviter deux pièges : devenir brown ale trop timide ou IPA boueuse trop maltée.",
      "histoireEtOrigines": `La Brown IPA est une création de la diversification américaine de l’IPA, particulièrement visible lorsque le BJCP formalise les Specialty IPA. Elle combine l’intensité houblonnée et la finale sèche d’une American IPA avec une base de malt rappelant l’American Brown Ale : caramel sombre, chocolat doux, noix, biscuit, toast et parfois fruits secs.

Il ne s’agit pas d’une tradition historique liée aux India Pale Ales britanniques. Le nom sert plutôt à décrire un équilibre moderne reconnu par le marché : une IPA qui n’est plus « pale » au sens littéral, mais qui conserve la structure sèche et amère associée au sigle IPA. Cette logique illustre l’évolution du mot IPA d’une origine géographique/historique vers une famille sensorielle.

La difficulté est de maintenir la buvabilité. Une Brown IPA trop riche en crystal ou en chocolat devient une American Brown Ale forte et houblonnée ; trop maigre, elle ressemble à une Black IPA claire. Les meilleurs exemples utilisent le malt brun comme couche de complexité, pas comme centre de gravité.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA américaine brune : malt plus riche qu’une Black IPA, mais finale toujours sèche et houblon clairement dominant.",
        "maltsEtCereales": [
          "Malt pale dominant.",
          "Crystal moyen à sombre, malt chocolat doux, biscuit ou amber malt en proportions mesurées pour noix, toffee, cacao et pain grillé.",
          "Éviter une charge de malts torréfiés donnant brûlé ou cendre."
        ],
        "houblons": [
          "Houblons américains ou du Nouveau Monde à agrumes, pin, résine, fruits tropicaux ou fruits à noyau.",
          "Amertume forte nécessaire pour équilibrer le malt plus riche."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine propre, esters faibles."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate modéré à élevé pour garder une finale sèche ; chlorure suffisant pour intégrer les malts bruns sans rendre la bière dure.",
        "empatage": "Infusion favorisant une bonne fermentescibilité malgré les malts de spécialité.",
        "ebullitionEtHoublonnage": "Amertume ferme, ajouts tardifs et dry-hop comparables à une American IPA.",
        "fermentation": "Fermentation haute propre et complète.",
        "maturation": "Courte ; le houblon doit rester frais tandis que le malt se fond rapidement.",
        "profilRecherche": "Une IPA brune sèche, où toffee, noix et chocolat léger soutiennent un houblon intense sans alourdir la finale."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Brown IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Brown IPA / Specialty IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "red-ipa",
      "nom": "Red IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
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
        "min": 5.5,
        "max": 9,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 40,
        "max": 80,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 22,
        "max": 40,
        "unite": "EBC",
        "statut": "large"
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
          "IPA glass",
          "American pint"
        ]
      },
      "description": "La Red IPA marie houblon vif et malt rouge : caramel sec, croûte, légère résine, agrumes, fruits rouges ou pin selon les houblons. Elle doit rester sèche malgré la couleur, sinon elle glisse vers l’amber ale trop sucrée.",
      "histoireEtOrigines": `La Red IPA appartient à la même vague de diversification que Black, Brown et Rye IPA. Elle ne possède pas de lignée historique autonome : elle résulte de la rencontre entre l’American IPA et les ales ambrées/rouges américaines. Le BJCP la codifie comme Specialty IPA afin de reconnaître un profil devenu suffisamment courant dans les brasseries craft.

La couleur rouge à rubis vient généralement de malts crystal, caramel ou légèrement torréfiés, qui apportent aussi toffee et fruits secs. Pourtant la bière doit rester clairement une IPA : houblon intense, amertume forte, finale sèche. Une American Amber Ale simplement très houblonnée n’atteint pas nécessairement cet équilibre si le malt reste dominant.

Le style a surtout été populaire dans les années où les IPA américaines étaient plus ambrées qu’aujourd’hui. Il reste pertinent pour les brasseurs souhaitant combiner profondeur maltée et houblon moderne sans aller vers le caractère sombre d’une Brown ou Black IPA.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA rouge à charpente caramel/toast plus visible qu’une American IPA, mais toujours sèche, amère et houblonnée.",
        "maltsEtCereales": [
          "Malt pale dominant.",
          "Crystal moyen, caramel rouge, Munich/Vienna ou petite touche de malt très coloré pour atteindre le rouge sans torréfaction marquée.",
          "Éviter une proportion de crystal qui rendrait la finale sucrée."
        ],
        "houblons": [
          "Houblons américains et du Nouveau Monde, souvent agrumés, résineux, tropicaux ou à fruits à noyau.",
          "Amertume moyenne-forte à très forte et fort houblonnage aromatique."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine propre et atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate généralement soutenu pour équilibrer les malts caramel ; chlorure modéré pour ne pas durcir la bouche.",
        "empatage": "Infusion orientée vers une bonne atténuation, avec corps moyen-léger à moyen.",
        "ebullitionEtHoublonnage": "Amertume de chaudière puis gros ajouts tardifs et dry-hop.",
        "fermentation": "Fermentation haute propre, esters faibles à modérés.",
        "maturation": "Courte ; protection contre l’oxydation particulièrement importante car elle brunit rapidement les teintes rouges et ternit le houblon.",
        "profilRecherche": "Une IPA rouge, sèche et amère, où caramel et toast apportent profondeur sans prendre le dessus sur le houblon."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Red IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Red IPA / Specialty IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "rye-ipa",
      "nom": "Rye IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
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
        "min": 5.5,
        "max": 9,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 50,
        "max": 90,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 10,
        "max": 36,
        "unite": "EBC",
        "statut": "large"
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
          "IPA glass",
          "American pint"
        ]
      },
      "description": "La Rye IPA ajoute du seigle au moteur houblonné : sécheresse, poivre, grain nerveux, parfois une texture plus vive. Le seigle doit tendre la bière, pas l’épaissir ; il donne une colonne épicée aux agrumes, au pin ou aux fruits du houblon.",
      "histoireEtOrigines": `La Rye IPA est une adaptation américaine contemporaine de l’IPA dans laquelle le seigle devient un ingrédient de caractère. Le grain apporte une sensation épicée, céréalière et poivrée ainsi qu’une texture souvent plus crémeuse. La combinaison fonctionne particulièrement bien avec les houblons américains résineux et agrumés, ce qui explique sa diffusion dans la scène craft des années 2000.

Le style n’est pas l’héritier direct des anciennes bières de seigle européennes. Son architecture reste celle d’une American IPA : forte expression de houblon, amertume élevée, fermentation relativement propre et finale sèche. Le seigle agit comme une signature maltée secondaire. Le BJCP le classe donc logiquement parmi les Specialty IPA.

Brasser avec beaucoup de seigle introduit aussi des contraintes pratiques : absence d’enveloppe du grain, forte teneur en bêta-glucanes et risque d’empâtage visqueux. Les recettes utilisent généralement une proportion suffisante pour être perceptible sans rendre filtration et texture incontrôlables.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "American IPA enrichie de seigle : grain épicé et texture plus crémeuse, mais houblon et sécheresse restent centraux.",
        "maltsEtCereales": [
          "Malt pale dominant.",
          "Malt de seigle souvent autour d’une proportion modérée suffisante pour apporter poivre, grain et texture ; la quantité exacte dépend du procédé.",
          "Crystal faible à modéré selon l’école."
        ],
        "houblons": [
          "Houblons américains ou du Nouveau Monde, les profils résineux, agrumés et épicés se mariant particulièrement bien au seigle.",
          "Amertume forte, houblonnage tardif et dry-hop généreux."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine propre et atténuante."
        ],
        "ingredientsComplementaires": [
          "Balles de riz possibles comme aide de filtration lorsque la proportion de seigle rend la maische très visqueuse ; elles n’apportent pas de goût."
        ],
        "profilEau": "Sulfate modéré à élevé pour accentuer la finale sèche ; faible alcalinité.",
        "empatage": "Empâtage soigneux ; un palier bêta-glucanase peut être utile avec de fortes proportions de seigle, ainsi qu’une filtration assistée.",
        "ebullitionEtHoublonnage": "Architecture de houblonnage d’American IPA avec amertume soutenue et gros ajouts aromatiques.",
        "fermentation": "Fermentation haute propre.",
        "maturation": "Courte et fraîche.",
        "profilRecherche": "Une IPA sèche et très houblonnée, traversée par une note de seigle poivrée et céréalière qui ajoute de la texture sans brouiller le houblon."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Rye IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Rye IPA / Specialty IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "white-ipa",
      "nom": "White IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "États-Unis, hybridation witbier-IPA",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.5,
        "max": 7.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 40,
        "max": 70,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 5,
        "max": 14,
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
          "IPA glass",
          "Tulipe"
        ]
      },
      "description": "La White IPA croise IPA et witbier : robe pâle voilée, blé, agrumes, coriandre possible, levure belge, houblon fruité et finale sèche. Elle doit être rafraîchissante et épicée, pas une IPA trouble avec parfum d’assiette d’orange.",
      "histoireEtOrigines": `La White IPA est un hybride craft américain apparu à la charnière des années 2000 et 2010. Elle combine la structure d’une IPA moderne avec des éléments empruntés à la Witbier belge : blé, couleur très pâle, trouble possible, épices et parfois une levure apportant agrumes ou phénols. Plusieurs collaborations et bières de brasseries nord-américaines ont popularisé cette idée avant que les guides de style ne la stabilisent comme Specialty IPA.

Le nom « White » renvoie donc moins à une tradition précise qu’à un langage sensoriel : bière pâle, souvent voilée, sèche et vive, où le houblon rencontre des notes d’écorce d’agrume, de coriandre et parfois de poivre. Le BJCP précise que l’équilibre doit rester celui d’une IPA ; si les épices ou la levure dominent et que le houblon devient secondaire, on se rapproche davantage d’une Witbier fortement houblonnée.

Le style a aujourd’hui moins de visibilité commerciale qu’au pic de sa popularité, mais il reste un exemple important de la période où l’IPA devient une plateforme d’hybridation systématique avec d’autres familles de bière.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA très pâle combinant houblon moderne, blé et éventuellement épices/levure de type Witbier, avec une finale sèche.",
        "maltsEtCereales": [
          "Malt Pilsner ou pale très clair comme base.",
          "Froment malté ou cru en proportion significative pour pâleur, mousse et texture.",
          "Avoine possible en petite quantité selon l’inspiration Witbier."
        ],
        "houblons": [
          "Houblons américains ou du Nouveau Monde à agrumes et fruits, choisis pour s’accorder avec coriandre et écorces d’agrumes.",
          "Amertume moyenne à forte, plus gros houblonnage tardif qu’une Witbier."
        ],
        "levuresEtMicroorganismes": [
          "Souche belge/witbier épicée ou souche plus neutre selon la version ; les phénols doivent rester intégrés au houblon."
        ],
        "ingredientsComplementaires": [
          "Coriandre et écorces d’orange ou autres agrumes fréquemment utilisées, mais avec retenue afin de préserver l’identité IPA."
        ],
        "profilEau": "Faible alcalinité, sulfate modéré pour la sécheresse et chlorure suffisant pour soutenir le blé.",
        "empatage": "Infusion adaptée à une proportion importante de blé ; bonne fermentescibilité recherchée.",
        "ebullitionEtHoublonnage": "Amertume d’IPA, ajouts tardifs et dry-hop ; épices généralement ajoutées en fin d’ébullition ou au whirlpool avec prudence.",
        "fermentation": "Fermentation haute, éventuellement avec une souche belge produisant agrumes et poivre. Contrôler les phénols pour éviter l’effet médicinal.",
        "maturation": "Courte ; un léger trouble est acceptable et la fraîcheur du houblon prime.",
        "profilRecherche": "Une IPA pâle et vive, où blé, agrumes, épices et houblon s’imbriquent dans une finale sèche sans donner une bière parfumée artificiellement."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: White IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "White IPA / Specialty IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "brut-ipa",
      "nom": "Brut IPA",
      "collectionId": 2,
      "nature": "S",
      "parentPrincipalId": "ipa-india-pale-ale",
      "aliases": [],
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
        "min": 6,
        "max": 8,
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
        "min": 4,
        "max": 14,
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
          "Flûte",
          "IPA glass"
        ]
      },
      "description": "La Brut IPA cherche le champagne du houblon : très sèche, très claire, très pétillante, arômes modernes, amertume souvent plus basse qu’attendu. L’enzyme peut manger les sucres, mais elle ne doit pas manger l’âme : sans finesse, le style devient IPA déshydratée.",
      "histoireEtOrigines": `La Brut IPA possède une origine inhabituellement bien documentée pour un style craft récent. Elle est généralement attribuée à Kim Sturdavant, alors brasseur au Social Kitchen & Brewery de San Francisco, vers 2017-2018. En travaillant avec des enzymes destinées à augmenter l’atténuation d’une bière forte, il explore l’idée d’utiliser l’amyloglucosidase sur une IPA de force standard. L’enzyme transforme davantage de dextrines en sucres fermentescibles, permettant une densité finale extrêmement basse.

L’American Homebrewers Association décrit le style en 2019 comme une IPA très pâle, extrêmement sèche et fortement pétillante, avec une amertume réelle relativement faible mais un grand parfum de houblon. L’analogie avec le Champagne vient de la combinaison entre sécheresse, couleur claire, carbonatation élevée et mousse abondante, même si la méthode et les matières premières restent celles d’une bière.

La mode se diffuse très vite puis recule presque aussi rapidement, en partie parce que l’extrême sécheresse rend l’équilibre difficile : une amertume normalement modérée peut devenir agressive lorsque presque aucun sucre résiduel ne subsiste. Le BJCP conserve néanmoins Brut IPA parmi les Specialty IPA, ce qui lui donne une place importante comme témoignage d’une période d’expérimentation intense autour des enzymes et du houblon.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "IPA très pâle, extrêmement atténuée et fortement carbonatée, où l’arôme de houblon est élevé mais l’amertume est volontairement contenue.",
        "maltsEtCereales": [
          "Malt Pilsner ou pale très clair dominant.",
          "Riz, maïs ou autres céréales légères possibles pour alléger encore la structure, mais non obligatoires.",
          "Crystal et malts riches en dextrines généralement évités."
        ],
        "houblons": [
          "Houblons américains ou du Nouveau Monde très aromatiques, avec profils agrumes, fruits tropicaux, raisin blanc ou fruits à noyau.",
          "Peu de houblon amérisant ; priorité au whirlpool et au dry-hop pour conserver beaucoup d’arôme avec une amertume basse à modérée."
        ],
        "levuresEtMicroorganismes": [
          "Souche d’ale propre et très atténuante."
        ],
        "ingredientsComplementaires": [
          "Amyloglucosidase/glucoamylase utilisée au brassage et/ou en fermentation afin de dégrader les dextrines et pousser l’atténuation très près de sa limite pratique."
        ],
        "profilEau": "Faible alcalinité ; sulfate à employer avec prudence car une bière extrêmement sèche amplifie la perception d’amertume et de dureté.",
        "empatage": "Empâtage très fermentescible, souvent complété par enzyme afin de réduire drastiquement les dextrines résiduelles.",
        "ebullitionEtHoublonnage": "Amertume volontairement limitée ; houblons principalement tardifs, whirlpool et dry-hop.",
        "fermentation": "Fermentation complète jusqu’à une densité finale extrêmement basse. Vérifier la stabilité avant conditionnement car l’enzyme peut poursuivre son action.",
        "maturation": "Courte, puis carbonatation élevée. Conditionnement sécurisé indispensable compte tenu de l’atténuation extrême et du risque de refermentation.",
        "profilRecherche": "Une IPA presque tranchante de sécheresse, très pétillante et parfumée, évoquant un vin effervescent houblonné sans douceur résiduelle."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Brut IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "American Homebrewers Association",
          "edition": null,
          "reference": "Brut IPA Style Description 1.0 — glucoamylase, très forte atténuation et attribution à Kim Sturdavant",
          "type": "histoire_et_technique",
          "url": "https://www.homebrewersassociation.org/how-to-brew/brut-ipa-style-description-1-0/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Brut IPA / Specialty IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    }
  ]
};

export default collection;
