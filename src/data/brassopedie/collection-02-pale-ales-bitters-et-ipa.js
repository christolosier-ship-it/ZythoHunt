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
      "description": "La Pale Ale est la grande famille où la bière britannique change de lumière. Du biscuit et des fleurs d’une pinte anglaise aux zestes éclatants d’une version américaine, elle garde un même ressort : un malt clair qui tient la scène sans étouffer le houblon. Sa couleur raconte une révolution de malterie ; ses descendants, plusieurs siècles de voyages et de réinventions.",
      "histoireEtOrigines": `Avant d’être un style, « pale ale » est une comparaison. Dans la Grande-Bretagne des XVIIe et XVIIIe siècles, une bière dite pale est plus claire que les productions faites avec des malts bruns, fumés ou fortement chauffés. Le progrès ne tient pas à un inventeur levant soudain un rideau de fumée : coke peu fumant, foyers indirects et meilleure conduite des tourailles rendent peu à peu le malt pâle plus régulier et plus économique. Des pale ales au malt séché au coke sont attestées dans le nord de l’Angleterre à la fin du XVIIe siècle ; Burton n’en possède donc ni l’invention ni le monopole.

Burton upon Trent devient néanmoins le décor décisif du XIXe siècle. Sous la ville, les aquifères traversent des terrains gypseux et chargent l’eau en calcium et en sulfates. Cette composition favorise la clarification, la fermentation et une perception plus nette de l’amertume : elle ne crée pas le houblon, mais lui donne une diction particulièrement ferme. Les brasseries Allsopp, Bass, Worthington et leurs concurrentes combinent cette ressource avec le canal, puis le rail, des capacités industrielles considérables et un marché impérial. La Pale Ale de Burton devient un produit de masse exportable autant qu’un goût local.

Les mots restent plus mobiles que nos arbres de styles. Au comptoir, une pale ale servie en fût peut être commandée comme « bitter » ; sur une bouteille ou dans un registre de brasserie, le même voisinage de bière conserve le nom pale ale. Les versions destinées au marché indien forment une autre branche, elle aussi nommée tardivement et de façon irrégulière. Attribuer rétrospectivement aux brasseurs victoriens les cases Ordinary, Best, English IPA ou American Pale Ale reviendrait à leur prêter un formulaire qu’ils n’avaient pas reçu.

Au XXe siècle, guerres, fiscalité, concentration industrielle et succès des lagers réduisent ou déplacent une partie du paysage britannique. Puis, à partir des années 1970, la pale ale traverse une seconde révolution. Les petits brasseurs américains reprennent son architecture et donnent le premier rôle à des houblons cultivés dans le Nord-Ouest des États-Unis. L’Australie et la Nouvelle-Zélande développent à leur tour des langues locales. La famille n’a donc pas une recette unique : elle est l’arbre dont Bitter et IPA sont deux grandes branches, puis dont le brassage craft a multiplié les rameaux.`,
      "chapitres": [
        {
          "titre": "La révolution est dans la touraille",
          "texte": `Un malt pâle suppose de sécher l’orge germée sans la brûler ni l’enfumer. Le coke a compté parce qu’il fournit une chaleur plus propre que le charbon brut, mais les historiens soulignent aussi le rôle des foyers indirects et du contrôle de la touraille. La bonne formule n’est donc pas « un combustible invente la Pale Ale » : plusieurs améliorations rendent enfin reproductible une couleur autrefois coûteuse.

Cette nuance explique la progression plutôt qu’une date magique. Le malt pâle offre un meilleur rendement que certains malts plus sombres et laisse apparaître la couleur ainsi que l’amertume du houblon. Une innovation de malterie finit ainsi par modifier le paysage du verre, du comptoir et de l’industrie.`
        },
        {
          "titre": "Burton : de l’eau, mais aussi des rails",
          "texte": `L’eau sulfatée de Burton convient remarquablement aux ales pâles et houblonnées. Elle n’est pourtant qu’un avantage parmi d’autres. Les maisons de Burton disposent de capitaux, agrandissent leurs brasseries, organisent leurs fermentations et profitent d’abord des voies navigables, puis du chemin de fer. Une géologie heureuse sans tonneaux, wagons ni agents commerciaux serait restée une curiosité minérale.

Lorsque les chimistes comprennent mieux cette eau, d’autres brasseries la reproduisent par ajout de sels : la « burtonisation » transforme un avantage géographique en procédé. Burton perd alors une partie de son secret, ce qui est le destin habituel d’un secret dès qu’un laboratoire lui attribue une formule.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La Pale Ale est une famille, pas une recette mère à agrandir ou réduire. Maltage, eau, levure, houblons et conditionnement prennent des formes différentes dans les branches britannique, américaine et océanienne.",
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
        "profilEau": "L’eau doit être adaptée au sous-style et au malt. Les sulfates peuvent affermir la perception de sécheresse et d’amertume ; les chlorures peuvent soutenir la rondeur. Leur effet dépend aussi du pH, de l’alcalinité, de la levure et de la recette : aucun ratio universel ne transforme à lui seul une eau en Pale Ale.",
        "empatage": "Infusion simple très fréquente. Une température favorisant une atténuation moyenne à élevée permet de conserver la buvabilité ; les versions plus rondes peuvent viser davantage de dextrines.",
        "ebullitionEtHoublonnage": "Une amertume de chaudière reste fréquente, mais l’équilibre entre ajouts précoces, fin d’ébullition, whirlpool et dry-hop appartient au sous-style. Les IBU mesurent imparfaitement la perception et ne comptabilisent pas à eux seuls la saturation aromatique.",
        "fermentation": "Fermentation haute propre à modérément fruitée. Le caractère de levure doit soutenir le style choisi sans produire de solvants ni de phénols non recherchés.",
        "maturation": "Les pale ales modernes orientées vers le parfum se protègent rigoureusement de l’oxygène et se consomment fraîches. Les pale ales de stock historiques pouvaient au contraire mûrir longtemps : confondre les deux époques ferait de la fraîcheur une règle rétroactive.",
        "profilRecherche": "Une ale claire à ambrée dont le malt fournit une charpente lisible et dont le houblon apporte fraîcheur, amertume et identité sans lourdeur."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Pale Ale families — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Pale American Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/18/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CAMRA / Pete Brown",
          "edition": null,
          "reference": "India Pale Ale: A History — mythes, commerce vers l’Inde et réinvention américaine",
          "type": "histoire_brassicole",
          "url": "https://learn.camra.org.uk/courses/india-pale-ale-a-history",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": null,
          "reference": "Burton: NOT the first place in the world to brew pale beers — coke, touraillage et antériorités documentaires",
          "type": "histoire_brassicole",
          "url": "https://zythophile.wordpress.com/2009/11/26/burton-not-the-first-place-in-the-world-to-brew-pale-beers/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Mercian Geologist / Aberystwyth University",
          "edition": "2019",
          "reference": "The role of geology in the fall and rise of local brewing — aquifères gypseux et eau de Burton",
          "type": "publication_scientifique",
          "url": "https://www.emgs.org.uk/uploads/1/4/9/1/149143154/mg19_4_2019_265_maltman_role_of_geology_in_fall___rise_of_local_brewing_1.pdf",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Chartered Institute of Brewers and Distillers",
          "edition": null,
          "reference": "Our History — essor industriel des pale ales de Burton",
          "type": "organisation_professionnelle",
          "url": "https://www.cibd.org.uk/about-cibd/our-history/",
          "consultation": "2026-08-10"
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
      "description": "La Bitter est moins une graduation d’amertume qu’une manière britannique d’habiter le pub. Dans une pinte peu gazeuse, le biscuit, le fruit discret de la levure et le houblon floral avancent à pas mesurés ; aucun ne cherche l’affiche. Sa force est souvent modeste, mais son équilibre supporte l’épreuve la plus sévère : donner envie de reprendre exactement la même chose.",
      "histoireEtOrigines": `La Bitter se nomme d’abord au comptoir. Dans la seconde moitié du XIXe siècle, les clients britanniques emploient « bitter » pour distinguer les pale ales sèches et bien houblonnées des mild ales plus jeunes, plus rondes et généralement moins amères. Les livres de brassage et les étiquettes peuvent continuer à parler de Pale Ale tandis que le pub sert une bitter : la différence est autant commerciale et sociale que strictement brassicole.

Cette bière se construit avec son lieu de service. En cask, elle poursuit une légère fermentation dans le fût, se clarifie, se conditionne et arrive au verre par gravité ou pompe manuelle. Une carbonatation modérée laisse paraître la texture, les esters de la levure anglaise et la précision d’une amertume qui serait plus tranchante sous beaucoup de gaz. Le cellérier du pub participe donc au résultat final ; la brasserie ne livre pas seulement un liquide, elle confie une dernière responsabilité.

La modération alcoolique n’est pas un trait éternel gravé dans le cuivre. En 1880, le Royaume-Uni remplace la taxe sur le malt par un droit sur la bière calculé à partir de la densité ; guerres, rationnements et fortes hausses fiscales poussent ensuite les brasseurs vers des moûts moins denses. Au XXe siècle, la Bitter devient la grande bière de consommation courante de nombreux pubs. Elle apprend à produire du relief avec peu de matière fermentescible : une économie de moyens qui relève davantage de l’horlogerie que de la privation.

Ordinary, Best/Special et Strong/ESB sont des repères modernes commodes, pas trois lois historiques. Les brasseries britanniques ont longtemps classé leurs propres gammes avec des mots tels que ordinary, best, special ou premium, sans frontières nationales uniformes. L’histoire commune porte donc le pub, le cask et la fiscalité ; chaque niveau raconte ensuite comment il résout différemment le problème de l’équilibre.`,
      "chapitres": [
        {
          "titre": "Le pub termine la bière",
          "texte": `Dans une real ale conditionnée en cask, la levure encore active crée une carbonatation naturelle. Le fût doit être mis en perce, ventilé, laissé au repos et servi dans une fenêtre de fraîcheur. Température de cave, tirage et rotation du débit influencent la pinte autant que le choix d’un verre.

Ce service explique une partie du style sensoriel : peu de gaz, une bouche souple, des arômes accessibles à température moins froide qu’une lager industrielle. Il explique aussi pourquoi une Bitter négligée au cellier raconte une histoire injuste sur la brasserie. Le pub est coéditeur du texte, avec possibilité de faute de frappe.`
        },
        {
          "titre": "Une famille de noms locaux",
          "texte": `« Best » ne garantit pas partout la même densité ; « ordinary » n’apparaît pas sur chaque pompe ; « special » peut être un rang interne ou un pur nom de marque. Les catégories de concours ont ordonné ce vocabulaire afin de comparer les bières, mais elles n’ont pas créé les gammes de pubs dont elles s’inspirent.

Lire une Bitter demande donc deux cartes : celle du profil moderne et celle de la brasserie. Une Best d’un comté peut frôler la force d’une Ordinary d’un autre. La seule chose vraiment uniforme dans la nomenclature britannique est son talent pour résister à l’uniformité.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La recette doit être pensée avec le service. En cask, faible carbonatation, fermentation secondaire et température de cave rendent plus visibles le malt, la levure et l’amertume qu’un simple tableau de densités.",
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
        "fermentation": "Fermentation haute avec une souche britannique choisie pour son fruité, son atténuation et sa floculation. Une gestion correcte du diacétyle est nécessaire ; sa présence légère dans certains exemples ne le rend ni obligatoire ni souhaitable partout.",
        "maturation": "Pour le cask, la bière est transférée avec assez de levure et de fermentescibles pour se conditionner, puis clarifiée et gérée au pub. Une Bitter en bouteille ou en keg peut être plus gazeuse : le contenant modifie la sensation sans changer automatiquement la catégorie.",
        "profilRecherche": "Une pinte sèche, expressive et immédiatement buvable, où biscuit, fruit discret et amertume se répondent sans qu’aucun élément ne domine lourdement."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Bitter family — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "British Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/11/british-bitter/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fuller’s",
          "edition": null,
          "reference": "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
          "type": "source_primaire_historique",
          "url": "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "A brief history of cask beer — émergence du mot bitter et culture du cask",
          "type": "histoire_brassicole",
          "url": "https://wb.camra.org.uk/2023/02/02/a-brief-history-of-cask-beer/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "UK Parliament — Hansard",
          "edition": "1880",
          "reference": "Customs and Inland Revenue Bill, 1880 — remplacement du malt duty par un droit fondé sur la densité",
          "type": "archive_parlementaire",
          "url": "https://hansard.parliament.uk/commons/1880-07-20/debates/c6e50dd0-8206-4149-a5c3-df1ff6ac461f/OrdersOfTheDay",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "Bitter, Session — rôle de la Bitter au pub et usages de Bitter / Best Bitter",
          "type": "referentiel_contemporain",
          "url": "https://learn.camra.org.uk/beer-styles/bitter-session",
          "consultation": "2026-08-10"
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
      "description": "L’IPA est une Pale Ale dont l’histoire a beaucoup voyagé — parfois plus vite que ses archives. Née d’un commerce britannique vers l’Inde, elle associe malt clair, fermentation haute et houblon affirmé ; ses descendants vont de la pinte anglaise aux versions américaines sèches, troubles, noires ou presque effervescentes. Son vrai récit n’a pas un inventeur : il a des marchés, des concurrents et d’excellents malentendus.",
      "histoireEtOrigines": `L’IPA n’apparaît pas dans un éclair de génie destiné à sauver une bière condamnée par l’océan. Des pale ales et des porters voyagent vers l’Inde au moins dès les années 1780, et des conseils d’époque recommandent déjà de houblonner davantage les bières destinées aux climats chauds. La brasserie d’Abbott and Hodgson, à Bow près des quais londoniens de l’East India Company, se place avantageusement sur ce marché. George Hodgson n’invente pourtant ni la pale ale, ni le houblon conservateur, ni le commerce avec l’Inde ; ses conditions de crédit et sa proximité des armateurs expliquent une influence plus commerciale que prométhéenne.

Le nom arrive après la pratique. Une annonce de 1801 associe Hodgson à une pale ale pour l’Inde ; les formulations « pale ale prepared for the India market » ou « East India pale ale » se répandent dans la presse britannique au cours des années 1820 et 1830. Cette chronologie interdit un baptême net. On expédie d’abord une catégorie de pale ale bien atténuée et houblonnée ; le marché, les publicités et les concurrents stabilisent ensuite le vocabulaire.

En 1822, après un conflit entre les Hodgson et des marchands, Samuel Allsopp est sollicité pour produire à Burton une pale ale destinée à l’Inde. Allsopp, Bass et d’autres maisons de Burton entrent dans le commerce. Leur eau riche en sulfates donne aux ales pâles un profil sec et une amertume distincte, mais leur réussite dépend aussi de l’échelle industrielle, du réseau commercial et des transports. Aucune brasserie ne possède seule la parenté : Bow ouvre une voie, Burton l’élargit et plusieurs concurrents la transforment.

Les bières n’étaient pas systématiquement des forteresses alcooliques. Les analyses et recettes historiques montrent des forces variables, souvent comparables à d’autres pale ales de l’époque. Le houblonnage, l’atténuation, le soin du conditionnement et la qualité de la bière comptaient davantage qu’un supplément d’alcool mythique. Le voyage modifiait certainement le produit — chaleur, mouvement et vieillissement ne sont pas neutres — mais il n’avait pas pour fonction romantique de « cuire » volontairement un goût d’IPA.

Au Royaume-Uni, fiscalité, guerres et changements du marché affaiblissent beaucoup d’IPA au XXe siècle ; certaines ne gardent du nom qu’une bière légère. Aux États-Unis, la révolution craft reprend la branche à partir des années 1970 et 1980, puis l’étire vers l’American, la Double, la West Coast et la Hazy IPA. L’IPA moderne n’est donc pas la survivance intacte d’une recette coloniale. C’est une famille historique dont chaque époque a négocié à nouveau la force, la clarté, l’amertume et jusqu’au sens des trois lettres.`,
      "chapitres": [
        {
          "titre": "Hodgson : avantage commercial, pas brevet",
          "texte": `Bow se trouve près des quais d’où partent les navires de l’East India Company. Hodgson consent aux capitaines et marchands des conditions de crédit attractives, ce qui aide sa pale ale à dominer un temps le commerce. Cette position est bien documentée ; l’idée d’une recette inventée ex nihilo pour résister au voyage ne l’est pas.

La nuance rend l’histoire plus intéressante. Hodgson devient central parce qu’il comprend un circuit de distribution, puis perd cet avantage lorsqu’il tente d’en modifier les règles. L’IPA naît moins dans un chaudron solitaire que dans une chaîne de crédit, de cargaisons et de rivalités — un milieu où même le houblon doit lire les petites lignes.`
        },
        {
          "titre": "Ce que faisait réellement le voyage",
          "texte": `Une traversée vers l’Inde dure des mois et expose les fûts à la chaleur ainsi qu’au mouvement. Des expériences modernes de reconstitution montrent que ces conditions peuvent accélérer certaines transformations du vieillissement, mais elles ne prouvent pas une intention historique de produire un goût par roulis.

Les brasseurs cherchaient d’abord une bière stable et vendable à l’arrivée. Une forte atténuation laissait moins de sucres fermentescibles ; le houblon contribuait à la stabilité et à l’amertume ; de bons fûts et un conditionnement soigné limitaient les accidents. Le navire était un obstacle géré, non un ingrédient certifié par l’Amirauté.`
        },
        {
          "titre": "Trois lettres, plusieurs renaissances",
          "texte": `Après son recul britannique, l’IPA devient aux États-Unis un terrain d’expérimentation. Liberty Ale, les pale ales au Cascade, puis les IPA de brewpubs montrent que les houblons américains peuvent écrire un vocabulaire propre. Le Great American Beer Festival introduit une catégorie IPA en 1989 : il ne crée pas la bière, mais rend visible une identité commerciale en cours de stabilisation.

La suite se ramifie. Une branche californienne recherche sécheresse et amertume ; une branche du Vermont privilégie texture et parfum ; d’autres ajoutent seigle, levure belge, malt sombre ou enzyme. L’histoire commune s’arrête ici : chaque branche explique désormais sa divergence au lieu de refaire la traversée de l’océan.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "IPA couvre des lignées historiques et modernes incompatibles avec une formule unique. Une reconstitution d’East India Pale Ale, une English IPA de pub, une West Coast et une NEIPA n’emploient ni la même eau ni le même calendrier de houblonnage.",
        "maltsEtCereales": [
          "Base de malt pale ou Pilsner selon l’école ; pale ale britannique pour les versions anglaises, two-row ou malt très clair pour de nombreuses versions américaines.",
          "Crystal/caramel historiquement fréquent dans certaines IPA américaines classiques mais nettement moins présent dans de nombreuses interprétations contemporaines sèches.",
          "Avoine et blé sont courants dans les Hazy IPA ; seigle, malts sombres ou céréales de blé définissent certaines Specialty IPA."
        ],
        "houblons": [
          "Dans les versions historiques britanniques, houblons anglais et dry-hopping participent à la conservation et au profil. La variété, la récolte, le stockage et le conditionnement comptent autant que la masse ajoutée.",
          "Les versions modernes répartissent l’amertume et l’arôme entre chaudière, whirlpool, hop stand et dry-hop. Davantage de houblon peut accroître parfum, polyphénols ou pertes de rendement sans augmenter proportionnellement l’amertume mesurée."
        ],
        "levuresEtMicroorganismes": [
          "Souche anglaise fruitée dans l’English IPA, souche américaine neutre dans de nombreuses American/West Coast IPA, souches fruitées dans les Hazy IPA, levures belges pour la Belgian IPA.",
          "Le profil de levure doit être choisi en fonction du sous-style : une IPA n’est pas nécessairement neutre, mais le houblon doit rester central."
        ],
        "ingredientsComplementaires": [
          "Certains sous-styles emploient enzymes, épices ou céréales particulières ; aucun ingrédient complémentaire n’est commun à toute la famille."
        ],
        "profilEau": "Burton offre historiquement une eau riche en sulfates, favorable à une finale sèche et à une amertume nette. La reproduire exactement n’est pas une obligation et peut devenir dure avec une recette moderne. Sulfates, chlorures, calcium, alcalinité et pH s’ajustent au résultat visé, non à un ratio fétiche.",
        "empatage": "Généralement orienté vers une bonne atténuation. Les versions hazy ou très souples peuvent conserver davantage de corps ; les Brut IPA poussent au contraire la fermentescibilité à l’extrême.",
        "ebullitionEtHoublonnage": "Le houblonnage définit le sous-style : forte charge amérisante et aromatique dans l’école classique, whirlpool et dry-hop massifs dans les IPA modernes, amertume plus douce dans les hazy, limitation de l’amertume dans la Brut IPA.",
        "fermentation": "Fermentation haute soigneusement contrôlée. La gestion de l’oxygène après fermentation est cruciale pour éviter le brunissement, la perte d’arômes de houblon et l’apparition de notes de carton ou de fruits trop mûrs.",
        "maturation": "Une IPA historique d’export et une IPA moderne aromatique n’ont pas le même rapport au temps. La première pouvait subir une longue maturation et un voyage ; la seconde perd rapidement des composés de houblon et exige un conditionnement pauvre en oxygène.",
        "profilRecherche": "Une bière où le houblon structure l’arôme, la saveur et/ou l’amertume, soutenu par une base suffisamment sèche et nette pour rester buvable malgré l’intensité."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "India Pale Ale families — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CAMRA / Pete Brown",
          "edition": null,
          "reference": "India Pale Ale: A History — mythes, commerce vers l’Inde et réinvention américaine",
          "type": "histoire_brassicole",
          "url": "https://learn.camra.org.uk/courses/india-pale-ale-a-history",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Anchor Liberty Ale — Cascade, 1975 et préfiguration de l’IPA américaine",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_2033255",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": null,
          "reference": "IPA: the executive summary — chronologie des annonces, Hodgson et mythes de l’invention",
          "type": "histoire_brassicole",
          "url": "https://zythophile.wordpress.com/2010/03/31/ipa-the-executive-summary/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "British History Online",
          "edition": null,
          "reference": "Burton-upon-Trent: Economic history — industrie brassicole, transport et expansion",
          "type": "archive_historique",
          "url": "https://www.british-history.ac.uk/vch/staffs/vol9/pp53-84",
          "consultation": "2026-08-10"
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
      "description": "L’Ordinary Bitter fait tenir une conversation entière dans une petite densité. Biscuit léger, fruit de levure, amertume nette et gaz discret s’organisent autour d’un alcool modeste ; rien n’est miniature pour autant. C’est la pinte de cask qui prouve qu’une bière peut manquer de carburant sans manquer de relief.",
      "histoireEtOrigines": `« Ordinary » n’est pas une catégorie victorienne aux frontières mesurées : c’est un rang pratique dans certaines gammes britanniques, devenu ensuite une case de guides. Son histoire appartient à la Bitter de pub, mais sa divergence est précise : maintenir une bière expressive quand la densité et l’alcool sont bas.

Cette aptitude prend une importance particulière au XXe siècle. Les droits fondés sur la densité, puis les restrictions et hausses fiscales des deux guerres mondiales encouragent des bières plus légères. La fermentation anglaise, un malt pale ale savoureux, une touche éventuelle de crystal, une eau favorable et une amertume soigneusement proportionnée permettent de conserver une impression complète. Le cask ajoute texture et continuité aromatique sans recourir à une forte carbonatation.

La difficulté est moins de retirer du malt que d’éviter le vide. Trop de crystal donne une petite bière collante ; trop d’amertume transforme la finale en papier de verre ; une atténuation mal conduite laisse soit de l’eau, soit du sucre. L’Ordinary Bitter réussie est donc une architecture de charge légère. Les concours lui ont donné des bornes ; les pubs lui avaient déjà donné sa raison d’exister.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La faible densité est le problème central : chaque choix doit fournir du goût et de la texture sans sucre collant, amertume rêche ni sensation aqueuse.",
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
        "empatage": "Une infusion simple peut préserver assez de dextrines pour la bouche, mais une température élevée n’est pas une solution automatique : composition du malt, atténuation de la levure et carbonatation déterminent ensemble la texture.",
        "ebullitionEtHoublonnage": "Amertume principale en chaudière, avec une petite charge aromatique tardive. Le ratio amertume/densité compte davantage que la quantité absolue de houblon.",
        "fermentation": "Fermentation haute autour de la plage propre à la souche, en conservant des esters discrets. Gestion du diacétyle avant conditionnement.",
        "maturation": "Très courte ; conditionnement en cask ou maturation brève en cuve. Une carbonatation basse à modérée renforce la buvabilité.",
        "profilRecherche": "Une pinte légère mais complète, dont la seconde gorgée paraît aussi construite que la première et dont la modestie alcoolique ne devient jamais une excuse sensorielle."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "11A Ordinary Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/11/british-bitter/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Ordinary Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "Bitter, Session — faibles densités, pub et buvabilité",
          "type": "referentiel_contemporain",
          "url": "https://learn.camra.org.uk/beer-styles/bitter-session",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "UK Parliament — Hansard",
          "edition": "1930",
          "reference": "Death Duties, 1930 — rétrospective officielle de la fiscalité sur la bière et la densité",
          "type": "archive_parlementaire",
          "url": "https://hansard.parliament.uk/Commons/1930-04-30/debates/8c5ebf3a-6869-4d00-8cc6-3ec2719223a6/DeathDuties",
          "consultation": "2026-08-10"
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
      "description": "La Best Bitter occupe le milieu très britannique où « meilleure » ne signifie pas tapageuse. Plus ample qu’une Ordinary, elle garde la souplesse du cask : pain grillé, marmelade discrète, esters fruités et houblon anglais se relaient sans solo prolongé. C’est souvent la bière qui porte le nom de la maison, donc celle qui n’a pas le droit de fatiguer les habitués.",
      "histoireEtOrigines": `Dans un pub britannique, « Best » est longtemps un rang de gamme avant d’être une mesure universelle. Une brasserie distingue sa Bitter courante d’une version plus riche ou plus soignée ; une autre emploie « Special », « Premium » ou simplement un nom de marque. Les seuils modernes facilitent les concours, mais ils ne doivent pas être renvoyés par télégramme aux brasseurs du XIXe siècle.

La Best Bitter a souvent le rôle commercial le plus délicat : assez de densité pour offrir davantage de malt, de fruit et de longueur, assez de retenue pour rester une pinte de répétition. Le malt pale ale porte des notes de pain et de biscuit ; le crystal peut donner une teinte cuivrée et un accent de caramel, sans obligation ni lourdeur. Une souche anglaise expressive et floculante donne le fruité, puis le service en cask rapproche la texture du comptoir.

Les variations régionales et les recettes de maison comptent davantage qu’une échelle droite. Une Best claire et sèche du Yorkshire ne raconte pas exactement la même chose qu’une version londonienne plus cuivrée. Le mot promet une place dans la gamme, pas une recette nationale sous scellés. Cette ambiguïté n’est pas un défaut : c’est le souvenir d’un marché de pubs antérieur aux tableaux de styles.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Special Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fuller’s",
          "edition": null,
          "reference": "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
          "type": "source_primaire_historique",
          "url": "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "Bitter, Session — usage commercial de Best Bitter",
          "type": "referentiel_contemporain",
          "url": "https://learn.camra.org.uk/beer-styles/bitter-session",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "A beginner’s guide to cask carbonation — fermentation secondaire et conditionnement",
          "type": "source_technique",
          "url": "https://learn.camra.org.uk/courses/a-beginner-s-guide-to-cask-carbonation",
          "consultation": "2026-08-10"
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
      "description": "L’ESB est une Strong Bitter avec un casier judiciaire terminologique. Fuller’s lança sa bière ESB en 1971 ; les trois lettres, devenues célèbres, furent ensuite lues ailleurs comme le nom d’un style. Dans le verre : une ale cuivrée, ample mais sèche, où biscuit, fruits mûrs et houblon épicé soutiennent une force qui reste celle du pub, pas d’un barley wine.",
      "histoireEtOrigines": `L’histoire commence à Chiswick, pas dans un glossaire. Fuller’s brasse en 1969 une Winter Beer issue de la lignée de son Old Burton Extra, puis lance en 1971 la bière permanente ESB. La maison possède déjà une Bitter ordinaire, Chiswick Bitter, et une Special, London Pride : « Extra Special Bitter » prolonge logiquement cette hiérarchie commerciale. Il s’agit d’abord d’un nom de produit, pas d’une subdivision dont tous les brasseurs britanniques auraient attendu la révélation.

Le succès de Fuller’s ESB change la portée des initiales. Ses récompenses CAMRA et son exportation vers les États-Unis à partir de 1979 en font un modèle influent pour les premiers brasseurs craft américains. Les guides de styles reprennent ensuite ESB comme désignation commode de la branche forte des Bitters. La transformation est réelle, mais il faut distinguer ses étapes : Fuller’s crée et popularise une marque ; le marché et les concours généralisent le terme ; les brasseurs du XIXe siècle, qui n’ont rien demandé, restent en dehors de cette rétroactivité.

Techniquement, une ESB ne gagne pas en identité par le seul alcool. Une base pale ale, un crystal mesuré, parfois des céréales ou sucres de tradition britannique, des esters expressifs et une amertume ferme composent une bière plus longue et plus charpentée. La version en cask peut être moins forte que la bouteille de la même marque. « Strong Bitter » décrit donc mieux la famille ; « ESB » raconte l’étrange réussite d’un nom propre devenu nom commun — au moins hors du Royaume-Uni, où la marque n’a jamais totalement quitté la pièce.`,
      "chapitres": [
        {
          "titre": "Une marque entre dans le dictionnaire",
          "texte": `Fuller’s utilise ESB depuis 1971 et enregistre la marque au Royaume-Uni avec effet en 1988. Ailleurs, surtout en Amérique du Nord, les lettres circulent comme une catégorie générique. Les deux réalités coexistent : une bière historique précise et une étiquette de concours plus large.

Cette trajectoire oblige à séparer invention, popularisation et codification. Fuller’s n’a pas inventé la strong bitter ; la brasserie a donné à l’une de ses expressions un nom si efficace que les taxonomistes l’ont adopté. Trois lettres peuvent donc accomplir ce qu’un traité entier échoue parfois à faire : traverser l’Atlantique sans perdre leurs bagages.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Strong Bitter est la famille ; ESB rappelle le modèle de Fuller’s. La force supplémentaire doit allonger malt, fruit et houblon sans faire basculer la bière vers la douceur d’une old ale ou d’un barley wine.",
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
        "profilRecherche": "Une strong bitter cuivrée et sèche, plus ample qu’une Best mais toujours conçue pour le débit du pub ; la complexité vient de l’intégration, pas du poids alcoolique seul."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "11C Strong Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/11/british-bitter/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Extra Special Bitter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fuller’s",
          "edition": null,
          "reference": "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
          "type": "source_primaire_historique",
          "url": "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fuller’s Brewery",
          "edition": null,
          "reference": "Our Story — lancement d’ESB en 1971 et export américain en 1979",
          "type": "source_primaire_historique",
          "url": "https://www.fullersbrewery.co.uk/pages/our-story",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Roger Protz",
          "edition": null,
          "reference": "ESB at 50: rolling back the years — Winter Beer, lancement et évolution",
          "type": "histoire_brassicole",
          "url": "https://protzonbeer.co.uk/features/2021/12/19/esb-at-50-rolling-back-the-years",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Osborne Clarke",
          "edition": null,
          "reference": "Bitter victory for Fullers — usage et enregistrement de la marque ESB",
          "type": "analyse_juridique",
          "url": "https://marketinglaw.osborneclarke.com/media-and-ip/bitter-victory-for-fullers/",
          "consultation": "2026-08-10"
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
      "description": "L’English Summer Ale transforme la pinte en éclaircie : robe paille, malt très léger, houblon floral ou citronné, fermentation anglaise propre et finale vive. Ce n’est pas nécessairement une bière saisonnière ni une Golden Ale sous un parasol ; c’est une désignation commerciale souple, construite pour la fraîcheur du pub sans abandonner le caractère d’une ale.",
      "histoireEtOrigines": `La Summer Ale anglaise n’a ni acte de naissance unique ni définition historique rigide. Elle apparaît surtout dans le renouveau des petites brasseries britanniques de la fin du XXe siècle, lorsque des producteurs cherchent des ales plus claires, sèches et parfumées capables de séduire au-delà de la Bitter ambrée. Le mot « summer » indique d’abord une promesse de fraîcheur, parfois une saison de vente, parfois seulement une humeur météorologique — ce qui, en Angleterre, exige déjà un certain optimisme.

Hop Back illustre bien cette souplesse. Fondée en 1986, la brasserie produit à partir de 1988 Summer Lightning, une ale dorée très houblonnée qui contribue puissamment à populariser la Golden Ale moderne. Elle commercialise aussi Summer Ale toute l’année. La naissance stylistique appartient à la British Golden Ale ; la Summer Ale retient plutôt le travail du nom : une bière de pub claire, légère à modérée, dont l’étiquette saisonnière a pu devenir permanente.

La construction technique vise la netteté plus que la nouveauté radicale : malt pâle, faible charge de crystal, houblons anglais tardifs ou variétés plus modernes, fermentation assez propre et cask possible. Lorsque l’histoire autonome manque, mieux vaut le dire. « Summer Ale » reste une famille commerciale aux contours poreux, utile pour décrire une intention de service, pas un décret émis par le soleil.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Hop Back Brewery",
          "edition": null,
          "reference": "Our Story — Summer Lightning, brassée depuis 1988, et essor de la golden ale britannique moderne",
          "type": "source_primaire_historique",
          "url": "https://www.hopback.co.uk/our-story/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Hop Back Brewery",
          "edition": null,
          "reference": "Our Beers — Summer Ale et Summer Lightning",
          "type": "source_primaire_commerciale",
          "url": "https://www.hopback.co.uk/our-beers/",
          "consultation": "2026-08-10"
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
      "description": "La Classic English Pale Ale conserve la conversation entre un malt de biscuit, une levure fruitée et un houblon d’herbes, de fleurs ou de marmelade. Plus contemplative qu’une Bitter de faible densité, moins chargée qu’une IPA moderne, elle ressemble à une bibliothèque de brasserie : on y reconnaît des volumes anciens, mais le classement sur l’étagère est récent.",
      "histoireEtOrigines": `« Classic English Pale Ale » est surtout une catégorie contemporaine de continuité. Elle rassemble des ales britanniques plus soutenues que beaucoup de bitters de session, nourries par l’héritage des pale ales de Burton et des pale ales embouteillées, sans prétendre reproduire une recette victorienne unique. Le qualificatif classic décrit une grammaire sensorielle ; il ne prouve pas que ce nom figurait sur les registres d’une brasserie du XIXe siècle.

Cette grammaire repose sur trois voix. Un malt pale ale britannique fournit le pain, la noisette ou le biscuit ; une souche anglaise ajoute des esters de poire, d’orange ou de fruits rouges ; les houblons locaux apportent fleurs, terre, thé ou épices. Crystal, sucres de brasserie, fermentation ouverte et conditionnement en cask ou en bouteille varient selon les maisons. L’eau de Burton peut inspirer le profil sans devoir être copiée comme une formule sacrée.

La catégorie existe parce que le marché moderne a séparé ce que l’histoire mêlait : Bitter, Pale Ale et IPA. Elle offre une place aux bières qui mettent la tradition malt-levure-houblon au premier plan sans se réduire à un rang de pub ni entrer dans l’intensité IPA. Sa mémoire-cible est donc une prudence : « classique » signifie héritière, non fossile parfaitement daté.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "British Bitter and Pale Ale context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/11/british-bitter/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fuller’s",
          "edition": null,
          "reference": "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
          "type": "source_primaire_historique",
          "url": "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Chartered Institute of Brewers and Distillers",
          "edition": null,
          "reference": "Our History — remplacement progressif des porters par les pale ales de Burton",
          "type": "organisation_professionnelle",
          "url": "https://www.cibd.org.uk/about-cibd/our-history/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Mercian Geologist / Aberystwyth University",
          "edition": "2019",
          "reference": "The role of geology in the fall and rise of local brewing",
          "type": "publication_scientifique",
          "url": "https://www.emgs.org.uk/uploads/1/4/9/1/149143154/mg19_4_2019_265_maltman_role_of_geology_in_fall___rise_of_local_brewing_1.pdf",
          "consultation": "2026-08-10"
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
      "description": "La British Golden Ale est une riposte de pub en robe claire : moins biscuitée qu’une Bitter ambrée, plus houblonnée qu’une blonde internationale, sèche et souvent servie en cask. Elle peut sentir la fleur anglaise ou le citron du Nouveau Monde, mais son intention reste stable : offrir aux amateurs de lager une porte d’entrée qui mène bien à une ale.",
      "histoireEtOrigines": `En 1986, Exmoor Ales lance Exmoor Gold. La brasserie la présente comme la première Golden Ale moderne britannique ; cette primauté commerciale est corroborée par l’histoire de la catégorie, même si des bières pâles ont évidemment existé bien avant elle. Le geste décisif n’est pas d’inventer la couleur or, mais de bâtir une ale de pub claire, sèche et accessible au moment où les lagers attirent une large part du public.

Deux ans plus tard, Hop Back brasse Summer Lightning. Son succès dans les festivals et ses récompenses au début des années 1990 contribuent à rendre la formule visible : malt très pâle, corps élancé, houblon expressif et service en cask. D’autres brasseries britanniques suivent. La Golden Ale devient ainsi une réponse de marché issue du renouveau des microbrasseries et de la real ale, pas un chapitre oublié de l’époque impériale.

Son évolution accueille ensuite des houblons américains, australiens ou néo-zélandais, mais sans devenir automatiquement une American Pale Ale. L’équilibre demeure plus léger, la fermentation britannique peut laisser un fruité discret et la buvabilité du pub reste centrale. Exmoor Gold fournit un jalon de lancement ; Summer Lightning joue un rôle de popularisation ; les guides et concours stabilisent plus tard la catégorie. Trois opérations, trois acteurs — et aucune raison de les fondre dans une seule légende dorée.`,
      "chapitres": [
        {
          "titre": "1986 puis 1988 : le bon ordre des éclairs",
          "texte": `Exmoor Gold apparaît en 1986. Summer Lightning est brassée pour la première fois en 1988. La seconde bière a tellement marqué le public qu’elle est parfois traitée comme l’origine du style ; elle en est surtout l’un des grands accélérateurs.

Cette distinction compte parce qu’elle montre comment naît un style moderne. Un premier produit formule une solution, un autre la rend spectaculaire, puis les concurrents et les buveurs reconnaissent une famille. L’histoire brassicole préfère souvent un héros unique ; la chronologie, d’un naturel moins coopératif, en propose au moins deux.`
        }
      ],
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Golden or Blonde Ale — British context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Hop Back Brewery",
          "edition": null,
          "reference": "Our Story — Summer Lightning, brassée depuis 1988, et essor de la golden ale britannique moderne",
          "type": "source_primaire_historique",
          "url": "https://www.hopback.co.uk/our-story/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Exmoor Ales",
          "edition": null,
          "reference": "Exmoor Gold — lancement en 1986 et revendication de première Golden Ale moderne",
          "type": "source_primaire_historique",
          "url": "https://www.exmoorales.co.uk/exmoor-gold/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Exmoor Ales",
          "edition": null,
          "reference": "History — contexte de création d’Exmoor Gold",
          "type": "source_primaire_historique",
          "url": "https://www.exmoorales.co.uk/history/",
          "consultation": "2026-08-10"
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
      "description": "Golden / Blonde Ale est la zone diplomatique de la collection : une ale claire, douce à modérément amère, faite pour être comprise dès la première gorgée. Le malt évoque le pain frais, la levure reste polie et le houblon éclaire sans éblouir. Derrière cette simplicité se cache une fonction commerciale mondiale : accueillir sans intimider.",
      "histoireEtOrigines": `Golden Ale et Blonde Ale sont des noms employés dans de nombreux pays pour des bières claires et accessibles. Ils ne descendent pas tous d’une même brasserie ni d’une tradition nationale continue. Le mot « blonde » emprunte aussi au vocabulaire belge et continental ; « golden » peut évoquer la renaissance britannique des années 1980 ou servir simplement de description de couleur. La catégorie internationale stabilise donc un voisinage de marché plus qu’une généalogie unique.

Sa raison d’exister est pratique. À mesure que les petites brasseries cherchent un public habitué aux lagers pâles, elles proposent une ale peu caramélisée, relativement neutre, facile à servir en fût, en bouteille ou en canette. La fermentation haute raccourcit souvent la production par rapport à une longue garde lager, tandis qu’une levure propre, un malt clair et une amertume mesurée maintiennent la bière familière.

Ce profil n’est pas un brouillon sans personnalité : réussir la discrétion exige d’éviter douceur pâteuse, esters envahissants et amertume vide. Mais son histoire autonome reste courte et diffuse. Les guides ont donné des bornes à une promesse déjà répandue sur les étiquettes : une bière dorée, aimable et lisible. Pour une fois, le marketing disait presque exactement ce qu’il y avait dans le verre.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "18A Blonde Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/18/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "12A British Golden Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/12/pale-commonwealth-beer/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "Beer styles — Session and Premium Pale, Blond and Golden Ales",
          "type": "referentiel_contemporain",
          "url": "https://nottingham.camra.org.uk/beer-brewers/beer-styles/",
          "consultation": "2026-08-10"
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
      "description": "L’Australian Sparkling Ale pétille, mais ne se comporte pas comme une lager. Sa robe dorée peut garder un voile de levure ; son malt, ses esters fruités, son amertume ferme et sa carbonatation vive composent une ale sèche, robuste et étonnamment désaltérante. Elle porte moins le goût d’un continent entier que la longue continuité d’une maison : Coopers.",
      "histoireEtOrigines": `Le 13 mai 1862, Thomas Cooper consigne son premier brassin à Adélaïde : malt anglais, houblon du Kent et eau entrent dans une production familiale destinée d’abord à son épouse malade. La brasserie se développe ensuite autour de méthodes de fermentation haute et de conditionnement naturel. L’Australian Sparkling Ale moderne est indissociable de cette continuité Coopers ; mieux vaut parler d’un style-maison devenu repère national que d’une recette commune à toutes les brasseries australiennes.

Le mot sparkling insiste sur le conditionnement. La fermentation secondaire en bouteille ou en fût produit une carbonatation vive et laisse un dépôt de levure, que le service peut remettre en suspension. Cette levure contribue aux esters fruités et à une texture particulière, tandis qu’une forte atténuation et une amertume soutenue empêchent la bière de paraître lourde malgré une force supérieure à celle de nombreuses pale ales de session.

Le climat australien est parfois invoqué comme explication totale ; il ne suffit pas. Importations de malt et de houblon, contraintes de transport, évolution du matériel et surtout conservation d’une culture de levure jouent un rôle plus direct. La catégorie de concours a ensuite abstrait un profil autour de l’exemple Coopers. Elle décrit une tradition réelle, mais étroite : ici, une brasserie n’est pas seulement un exemple du style, elle en est presque l’archive vivante.`,
      "chapitres": [
        {
          "titre": "Le dépôt n’est pas un accident",
          "texte": `Une Sparkling Ale conditionnée naturellement contient encore de la levure. Le dépôt en bouteille signale une refermentation et non un défaut d’hygiène ; le buveur peut verser clair ou remettre doucement la levure en suspension selon l’expérience recherchée.

Cette pratique lie procédé et sensation : gaz vif, fruité de fermentation, sécheresse et légère impression levurée. La limpidité absolue n’est donc pas un examen moral. Dans cette bière, le fond de la bouteille a un emploi déclaré.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La signature vient de la fermentation haute et du conditionnement naturel : une recette claire et amère doit laisser la levure, la sécheresse et l’effervescence construire le relief.",
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
        "fermentation": "Souche d’ale australienne expressive, conduite pour obtenir des esters fruités sans chaleur de solvant. L’atténuation élevée aide la bière à rester vive malgré sa force.",
        "maturation": "Refermentation en bouteille ou en fût avec levure résiduelle. Le dépôt est normal ; la stabilité exige que la fermentation principale soit achevée et que la prise de mousse soit maîtrisée.",
        "profilRecherche": "Une ale australienne dorée, fortement pétillante, fruitée et sèche, avec une amertume nette et un caractère de levure immédiatement reconnaissable."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "12B Australian Sparkling Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/12/pale-commonwealth-beer/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Australian-Style Pale Ale / Sparkling context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Sparkling Ale — première production en 1862, refermentation naturelle et profil actuel",
          "type": "source_primaire_historique_technique",
          "url": "https://coopers.com.au/products/sparkling-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Thomas Cooper — premier brassin consigné le 13 mai 1862",
          "type": "source_primaire_historique",
          "url": "https://coopers.com.au/pages/thomas-cooper",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "The Coopers Story — continuité familiale et conditionnement naturel",
          "type": "source_primaire_historique",
          "url": "https://coopers.com.au/pages/the-coopers-story",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Good Beer Hunting",
          "edition": null,
          "reference": "Australia’s Native Beer — histoire documentée de la survie de la Sparkling Ale",
          "type": "presse_specialisee",
          "url": "https://www.goodbeerhunting.com/blog/2023/8/10/australia-native-beer-how-sparkling-ale-survived",
          "consultation": "2026-08-10"
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
      "description": "La Classic Australian Pale Ale est une pale ale de levure avant d’être une vitrine de houblon. Dorée, sèche, modérément amère et naturellement conditionnée, elle mêle fruité de fermentation, pain léger et effervescence souple. Le voile éventuel n’annonce pas la future Hazy IPA : il raconte la bouteille, le dépôt et la persistance de Coopers dans un marché longtemps dominé par la lager.",
      "histoireEtOrigines": `La catégorie « Classic Australian Pale Ale » a été séparée de l’Australian Pale Ale moderne par la Brewers Association en 2018, après consultation du secteur brassicole australien. Cette décision de concours reconnaît deux lignées commerciales déjà visibles : d’un côté, la tradition conditionnée en bouteille et centrée sur la levure ; de l’autre, les pale ales craft plus pâles et davantage orientées vers les houblons aromatiques.

Coopers Original Pale Ale fournit le principal repère de la branche classique. Elle transpose à une force plus légère la culture de fermentation et de conditionnement naturel entretenue par la brasserie d’Adélaïde. Le malt reste simple, l’amertume équilibrée et la levure fournit une part essentielle du fruité. Le dépôt peut troubler le verre, mais l’intention diffère radicalement de celle d’une Hazy Pale Ale saturée en houblon.

Le mot classic ne doit pas fabriquer une tradition continentale uniforme. Il désigne surtout la continuité d’un modèle industriel familial devenu emblématique, puis isolé par les guides afin de ne pas le juger selon les critères des pale ales craft contemporaines. La codification est tardive ; la pratique, elle, précède la case.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Original Pale Ale — conditionnement naturel et référence de la pale ale australienne",
          "type": "source_primaire_technique",
          "url": "https://coopers.com.au/products/original-pale-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Sparkling Ale — première production en 1862, refermentation naturelle et profil actuel",
          "type": "source_primaire_historique_technique",
          "url": "https://coopers.com.au/products/sparkling-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association / Brewbound",
          "edition": "2018",
          "reference": "2018 Beer Style Guidelines — séparation Classic Australian / Australian Pale Ale",
          "type": "organisation_professionnelle",
          "url": "https://www.brewbound.com/news/brewers-association-acknowledges-haze-craze-creation-new-style-categories/",
          "consultation": "2026-08-10"
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
      "description": "L’Australian Pale Ale moderne regarde moins vers la cave à bouteilles que vers les houblonnières. Claire, sèche et lumineuse, elle laisse les variétés australiennes dérouler pêche, agrume, fruits tropicaux ou herbes sur une base de malt discrète. Sa personnalité ne vient pas d’un passeport collé sur une American Pale Ale : elle naît d’une scène craft locale et d’un programme de sélection devenu langage.",
      "histoireEtOrigines": `Lorsque Little Creatures ouvre ses portes à Fremantle à la fin de 2000, la brasserie s’organise autour d’une Pale Ale inspirée par les ales américaines et brassée avec des houblons des États-Unis. La bière devient un pivot de la scène craft australienne : elle montre qu’une pale ale aromatique peut construire une identité de brasserie dans un marché largement habitué aux lagers. Ce point de départ n’est pas encore une école strictement « australienne » par ses matières premières, mais il crée l’espace commercial où elle peut apparaître.

Le second moteur pousse dans les champs. Le programme australien de sélection du houblon, engagé dans les années 1950 pour les besoins agronomiques et l’amertume, se réoriente avec l’essor craft vers la saveur et l’arôme. Galaxy, puis d’autres variétés de Hop Products Australia, donnent aux brasseurs des signatures locales suffisamment fortes pour ne plus seulement imiter Cascade. Le houblon devient ici une infrastructure de recherche agricole avant de devenir un adjectif sur une canette.

La Brewers Association sépare en 2018 l’Australian-Style Pale Ale de sa branche Classic afin de reconnaître ce changement. La version moderne privilégie une couleur plus pâle, un houblonnage tardif et à cru plus visible, et souvent une fermentation plus neutre. Coopers participe elle-même à ce mouvement avec une première bière dry-hoppée lancée en 2017 sous le nom Session Ale, devenue Pacific Pale Ale. La catégorie raconte donc une transition : l’Australie passe d’un grand modèle historique centré sur la levure à plusieurs expressions craft où ses propres houblons prennent la parole.`,
      "chapitres": [
        {
          "titre": "Quand la sélection variétale change le verre",
          "texte": `Le programme de Hop Products Australia ne naît pas pour produire un bouquet tropical à photographier. Ses premiers objectifs concernent rendement, adaptation et acides alpha. L’essor des petites brasseries déplace ensuite la demande vers l’arôme ; les critères sensoriels entrent au premier plan.

Cette chronologie évite le catalogue botanique. Galaxy n’est important ici ni parce que son nom est céleste ni parce qu’un argumentaire commercial aligne des descripteurs : il donne aux pale ales australiennes une matière première locale capable de structurer une école moderne.`
        }
      ],
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Original Pale Ale — conditionnement naturel et référence de la pale ale australienne",
          "type": "source_primaire_technique",
          "url": "https://coopers.com.au/products/original-pale-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Coopers Brewery",
          "edition": null,
          "reference": "Pacific Pale Ale — interprétation australienne moderne, dry-hop Galaxy, Vic Secret et Melba",
          "type": "source_primaire_technique",
          "url": "https://coopers.com.au/products/pacific-pale-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Little Creatures",
          "edition": null,
          "reference": "Our Story — ouverture en 2000 et brasserie construite autour de Pale Ale",
          "type": "source_primaire_historique",
          "url": "https://www.littlecreatures.com.au/our-story/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Hop Products Australia",
          "edition": null,
          "reference": "Hop Breeding Program — passage de la sélection alpha à la saveur et à l’arôme",
          "type": "organisme_agricole",
          "url": "https://hops.com.au/hop-breeding-program/",
          "consultation": "2026-08-10"
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
      "description": "L’International Pale Ale est un carrefour plutôt qu’une patrie. Malt clair, fermentation haute et houblon lisible y composent une bière nette, modérément forte et exportable, sans exiger l’accent anglais, américain ou océanien d’une école précise. Son élégance tient à la traduction : garder une pale ale identifiable lorsque les ingrédients, l’eau et le public changent de pays.",
      "histoireEtOrigines": `L’International Pale Ale ne possède pas de fondateur, de ville ni de première bouteille convaincante. Elle naît de la diffusion mondiale du brassage craft et de la nécessité des guides de classer des pale ales qui n’imitent pas fidèlement une tradition britannique, américaine, australienne ou néo-zélandaise. Son histoire est donc celle d’un marché convergent, puis d’une catégorie.

Les brasseurs emploient des malts locaux ou importés, des levures plus ou moins neutres et un mélange de houblons disponibles. Les chaînes frigorifiques, les pellets et le commerce mondial des variétés aromatiques rendent possible une expression relativement cohérente à des milliers de kilomètres des régions de culture. Pourtant, une variété identique n’efface ni l’eau, ni la fermentation, ni les habitudes de consommation.

La catégorie assume sa modestie historique. L’International Pale Ale décrit une intention médiane : plus de présence houblonnée qu’une blonde générique, moins d’intensité et de force qu’une IPA, aucun passeport sensoriel obligatoire. Les concours n’ont pas inventé ces bières ; ils leur ont construit un guichet.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "18B American Pale Ale — comparative reference — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/18/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "New Zealand Hops",
          "edition": null,
          "reference": "Motueka™ — origine génétique, profil citron vert et usage brassicole",
          "type": "source_technique_houblon",
          "url": "https://nzhops.co.nz/products/motueka",
          "consultation": "2026-08-10"
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
      "description": "La New Zealand Pale Ale fait d’un petit pays producteur de houblon un grand paysage aromatique. Sur un malt clair et une fermentation nette, les variétés locales peuvent évoquer citron vert, fruits à noyau, herbes fraîches ou raisin blanc sans former une liste obligatoire. Le style est surtout une rencontre : une pale ale craft internationale traduite par des décennies de sélection néo-zélandaise.",
      "histoireEtOrigines": `La Nouvelle-Zélande ne représente qu’une faible part de la production mondiale de houblon, mais ses variétés ont acquis une influence disproportionnée. Les programmes de recherche commencent dans les années 1950 en réponse aux maladies et aux besoins de l’agriculture locale. La sélection produit d’abord des cultivars résistants et adaptés ; elle s’oriente ensuite vers des profils aromatiques distinctifs destinés à un marché craft mondial.

Motueka illustre cette construction par la recherche plutôt qu’un folklore spontané : le cultivar est issu du programme néo-zélandais et associe ascendance Saaz et sélection locale. Nelson Sauvin devient un autre repère, étudié pour son caractère rappelant certains vins blancs. Ces noms expliquent l’émergence du style lorsqu’ils décrivent une innovation agricole ; ils ne constituent pas une recette à cocher.

La New Zealand Pale Ale apparaît lorsque des brasseurs locaux et étrangers utilisent cette matière première dans l’architecture modérée d’une pale ale : malt sobre, fermentation assez neutre, houblonnage tardif expressif et amertume équilibrée. Elle partage son moteur avec la New Zealand IPA, mais pas sa force ni sa saturation. La Pale Ale porte l’histoire du programme de sélection ; la branche IPA raconte ce que l’intensité en fait.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "New Zealand Hops",
          "edition": null,
          "reference": "Motueka™ — origine génétique, profil citron vert et usage brassicole",
          "type": "source_technique_houblon",
          "url": "https://nzhops.co.nz/products/motueka",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Pale Commonwealth and American Pale Ale — comparative context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/18/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Bioeconomy Science Institute New Zealand",
          "edition": null,
          "reference": "Hops with global appeal — programme de sélection depuis les années 1950",
          "type": "organisme_scientifique_public",
          "url": "https://www.bioeconomyscience.co.nz/about-us/100-years/hops-with-global-appeal",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Plant & Food Research",
          "edition": null,
          "reference": "NZ hops capturing the world’s attention — recherche et cultivars locaux",
          "type": "organisme_scientifique_public",
          "url": "https://www.plantandfood.com/en-nz/article/nz-hops-capturing-the-worlds-attention",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Journal of the American Society of Brewing Chemists",
          "edition": "2021",
          "reference": "Distinctive chemical signatures of New Zealand hop cultivars",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7917646/",
          "consultation": "2026-08-10"
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
      "description": "L’American Pale Ale est le moment où le houblon des États-Unis cesse d’être un remplaçant et devient un personnage. Une trame de malt clair, parfois légèrement caramélisée, soutient une amertume vive et un parfum d’agrumes, de pin ou de fleurs. Entre Liberty Ale et Sierra Nevada Pale Ale, la tradition anglaise n’est pas copiée : elle reçoit un nouvel accent et une nouvelle scène.",
      "histoireEtOrigines": `En 1972, le programme public de sélection mené par l’USDA avec Oregon State University libère Cascade. Le cultivar avait été choisi notamment pour répondre aux besoins agronomiques et remplacer des houblons aromatiques importés ; son caractère d’agrume et de fleur ne correspond pas exactement aux attentes de la grande industrie. Les petites brasseries y voient au contraire une signature. Une matière première conçue comme solution agricole devient le vocabulaire d’un mouvement.

Anchor brasse Liberty Ale le 18 avril 1975 pour le bicentenaire de la chevauchée de Paul Revere. Houblonnée au Cascade et dry-hoppée, cette bière est un jalon majeur des ales américaines modernes et un ancêtre direct de nombreuses IPA. Elle ne suffit pourtant pas à stabiliser seule l’American Pale Ale. En 1980, à Chico, Ken Grossman brasse douze essais avant de fixer Sierra Nevada Pale Ale ; la première production date du 15 novembre. Mise en bouteille au début de 1981, elle installe durablement l’alliance entre malt américain, fermentation nette et Cascade entier.

La différence entre les deux pivots importe. Liberty Ale montre très tôt la puissance d’un houblon unique et du houblonnage à cru ; Sierra Nevada Pale Ale diffuse et popularise un modèle reproductible qui devient un repère national. Dans le contexte du homebrewing légalisé au niveau fédéral en 1978, des premiers brewpubs et de la multiplication des microbrasseries, cette pale ale fournit une grammaire que des centaines de producteurs adaptent.

Centennial, Chinook, Columbus, puis Simcoe, Citra ou Mosaic élargissent plus tard le lexique. Ils ne remplacent pas le récit par un herbier : chaque génération permet de déplacer le style vers davantage de résine, d’agrumes ou de fruit. L’American IPA naît dans le prolongement de cette révolution, en augmentant intensité et sécheresse. L’APA demeure son point d’équilibre historique : assez houblonnée pour annoncer une rupture, assez mesurée pour laisser encore le malt répondre.`,
      "chapitres": [
        {
          "titre": "Cascade : un programme public, un goût imprévu",
          "texte": `Sélectionné dans les années 1950 et libéré en 1972, Cascade sort d’un programme commun à l’USDA et à Oregon State University. La variété répond à des enjeux de culture et d’approvisionnement ; sa destinée craft n’était pas inscrite dans le cahier des charges comme une prophétie.

Le retournement est fécond : ce qui paraît trop expressif à certains grands brasseurs devient une marque d’indépendance sensorielle. L’American Pale Ale naît aussi de cette capacité des petites structures à transformer un écart industriel en désir du public.`
        },
        {
          "titre": "Deux bières, deux rôles",
          "texte": `Liberty Ale précède Sierra Nevada Pale Ale et sert de préfiguration influente : Cascade, amertume franche, dry-hopping. Sierra Nevada Pale Ale arrive cinq ans plus tard et impose durablement le modèle au-delà d’un brassin commémoratif.

Les qualifier correctement évite le podium artificiel. Anchor fournit un jalon précoce et une influence technique ; Sierra Nevada assure une popularisation et une continuité commerciale exceptionnelles. Une histoire peut parfaitement avoir plusieurs premiers rôles sans organiser de duel à l’aube.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Le modèle américain classique marie une base maltée claire à un houblon américain ou du Nouveau Monde nettement perceptible, sans atteindre la puissance d’une IPA.",
        "maltsEtCereales": [
          "Malt two-row pale comme base.",
          "Crystal/caramel faible à modéré dans l’école classique ; beaucoup de versions modernes réduisent fortement cette proportion pour une couleur plus pâle et une finale plus sèche."
        ],
        "houblons": [
          "Cascade est le pivot historique, non une obligation contemporaine. Centennial, Chinook, Columbus et les générations plus récentes élargissent le vocabulaire lorsqu’elles servent une intention précise.",
          "Amertume lisible, ajouts tardifs et dry-hop modéré à soutenu. L’APA doit garder un échange avec le malt plutôt que devenir une American IPA simplement rangée dans la mauvaise case."
        ],
        "levuresEtMicroorganismes": [
          "Souche d’ale américaine propre, fortement atténuante, avec esters faibles."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité, sulfate souvent supérieur au chlorure dans l’école classique afin de rendre l’amertume nette ; les versions modernes peuvent rechercher davantage d’équilibre.",
        "empatage": "Infusion simple donnant un corps moyen-léger et une finale sèche sans devenir aqueuse.",
        "ebullitionEtHoublonnage": "Amertume en chaudière, puis couches d’arôme en fin d’ébullition, whirlpool et éventuellement dry-hop.",
        "fermentation": "Fermentation haute propre, généralement autour de la plage neutre de la souche choisie.",
        "maturation": "Maturation courte, clarification selon le modèle, puis conditionnement avec très peu d’oxygène. La fraîcheur protège les huiles de houblon ; le froid ralentit leur dégradation sans rendre la bière immortelle.",
        "profilRecherche": "Une pale ale américaine équilibrée : malt assez présent pour soutenir la pinte, houblon assez expressif pour la définir, finale propre et sèche."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "18B American Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/18/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Our Story — fondation en 1980 et rôle de Pale Ale dans l’essor du craft américain",
          "type": "source_primaire_historique",
          "url": "https://sierranevada.com/about-us",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Sierra Nevada Pale Ale — objet et contexte historique du craft américain",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_1854865",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "National Museum of American History — Smithsonian",
          "edition": null,
          "reference": "Liberty Ale banner — brassage du 18 avril 1975 et rôle précurseur de Cascade",
          "type": "archive_museale",
          "url": "https://americanhistory.si.edu/collections/object/nmah_2033255",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Oregon State University Libraries",
          "edition": null,
          "reference": "Hops Research Reports, 1931–1995 — Cascade sélectionné et libéré en 1972",
          "type": "archive_universitaire",
          "url": "https://archiveswest.orbiscascade.org/ark%3A80444/xv71075",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "American Homebrewers Association",
          "edition": null,
          "reference": "How Homebrewing Led to Sierra Nevada Pale Ale — premier brassin du 15 novembre 1980",
          "type": "histoire_brassicole",
          "url": "https://homebrewersassociation.org/zymurgy-live/how-homebrewing-led-to-sierra-nevada-pale-ale/",
          "consultation": "2026-08-10"
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
      "description": "L’American ESB traduit une strong bitter avec un dictionnaire américain : malt toasté, caramel mesuré et levure fruitée restent lisibles, tandis que le houblon peut prendre un accent d’agrume ou de résine. Ce n’est ni une IPA brune ni une antiquité anglaise expatriée ; c’est l’un des premiers dialectes du brewpub, formé quand les brasseurs américains apprenaient encore leurs classiques au comptoir britannique.",
      "histoireEtOrigines": `À la fin des années 1970 et dans les années 1980, les pionniers du craft américain regardent vers les ales britanniques pour échapper à l’uniformité des lagers industrielles. Fuller’s ESB, exportée vers les États-Unis à partir de 1979, devient un modèle particulièrement visible. Les homebrewers, brewpubs et premiers guides adoptent ses initiales comme nom de famille, alors qu’au Royaume-Uni elles restent attachées à une marque et que « strong bitter » décrit mieux l’ensemble.

La traduction modifie rapidement l’accent. Les malts américains peuvent être plus neutres, la carbonatation plus vive et le service plus souvent en keg ; Cascade, Centennial ou d’autres variétés locales remplacent parfois tout ou partie des houblons anglais. Le résultat garde une assise de malt plus prononcée qu’une American Pale Ale classique, mais son fruit et son amertume peuvent regarder vers le Pacifique.

L’American ESB est donc moins une invention ponctuelle qu’un genre de transition. Elle documente le moment où la scène craft américaine apprend avec des modèles britanniques avant de créer ses propres catégories. Sa place actuelle est plus discrète, prise entre APA, amber ale et IPA ; son intérêt historique tient précisément à cette position de pont.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fuller’s",
          "edition": null,
          "reference": "History and Heritage — tradition londonienne des Bitters, London Pride et ESB",
          "type": "source_primaire_historique",
          "url": "https://www.fullers.co.uk/corporate/about-us/history-and-heritage",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fuller’s Brewery",
          "edition": null,
          "reference": "Our Story — ESB lancée en 1971 et exportée aux États-Unis en 1979",
          "type": "source_primaire_historique",
          "url": "https://www.fullersbrewery.co.uk/pages/our-story",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CraftBeer.com / Brewers Association",
          "edition": null,
          "reference": "Beer History — homebrewing, brewpubs et naissance du craft américain",
          "type": "histoire_brassicole",
          "url": "https://www.craftbeer.com/beer/beer-history",
          "consultation": "2026-08-10"
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
      "description": "La Juicy / Hazy Pale Ale garde le toucher velouté, le parfum de houblon et le trouble assumé de l’école Hazy, mais ramène la force au territoire de la pale ale. Le fruit semble mûr, l’amertume moins anguleuse et le malt presque tactile. Ce n’est pas une NEIPA coupée à l’eau : c’est un exercice d’échelle où texture et fraîcheur doivent survivre à une densité plus basse.",
      "histoireEtOrigines": `Cette catégorie ne précède pas la New England IPA ; elle en descend. Lorsque les IPA troubles et fruitées du Vermont puis du Massachusetts rencontrent un public national, les brasseries déclinent leur langage à plusieurs niveaux de force. La pale ale permet de conserver une forte présence aromatique avec moins d’alcool, de coût et de fatigue au verre.

En 2018, la Brewers Association reconnaît simultanément Juicy or Hazy Pale Ale, IPA et Double IPA. Ce triptyque révèle une codification par intensité d’un mouvement déjà installé, non trois inventions séparées. Heady Topper, Tree House, Trillium et la rupture sensorielle appartiennent à l’histoire de la NEIPA ; la Hazy Pale Ale raconte le redimensionnement.

Le défi technique ressemble à celui d’une Session IPA, mais avec une autre cible. Blé ou avoine, protéines du malt, levure expressive et composés du houblon construisent la texture et le trouble ; une amertume moins dure préserve l’impression juteuse. À faible densité, trop de céréales peut donner une bouche farineuse, trop de dry-hop une astringence végétale, et l’oxygène ternit rapidement couleur et parfum. Réduire l’alcool ne réduit donc pas le nombre de pièges.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21C Hazy IPA — technical lineage — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "The Alchemist Brewery",
          "edition": null,
          "reference": "Our Story — Heady Topper, Waterbury et diffusion de l’école houblonnée du Vermont",
          "type": "source_primaire_historique",
          "url": "https://alchemistbeer.com/story/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association / Brewbound",
          "edition": "2018",
          "reference": "2018 Beer Style Guidelines — création du triptyque Juicy or Hazy",
          "type": "organisation_professionnelle",
          "url": "https://www.brewbound.com/news/brewers-association-acknowledges-haze-craze-creation-new-style-categories/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentation",
          "edition": "2021",
          "reference": "Dry-Hop Creep Potential of Various Saccharomyces Yeast Species and Strains",
          "type": "publication_scientifique",
          "url": "https://www.mdpi.com/2311-5637/7/2/66",
          "consultation": "2026-08-10"
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
      "description": "L’American Strong Pale Ale habite l’étage entre APA et IPA. Elle conserve un malt perceptible et une silhouette de pale ale, mais porte davantage d’alcool, d’amertume et de houblon tardif. Son intérêt est moins une légende fondatrice qu’un problème de classement : que faire des bières trop musclées pour la première case, pas assez nettement IPA pour la suivante ?",
      "histoireEtOrigines": `Les brasseries américaines des années 1990 et 2000 poussent volontiers leurs pale ales au-delà des frontières initiales : densité plus haute, davantage de malt et houblonnage plus intense. Les noms commerciaux — extra pale, strong pale, imperial pale — ne décrivent pas une tradition homogène. La catégorie American Strong Pale Ale apparaît dans les guides de la Brewers Association pour loger ce continuum.

La distinction avec l’American IPA dépend de l’équilibre, pas d’un interrupteur. Une Strong Pale Ale peut garder plus de caramel, de pain et de rondeur, avec une amertume moins dominante ; une IPA cherche généralement une finale plus sèche et un centre de gravité franchement houblonné. Les paramètres se chevauchent, ce qui est justement la raison d’être — et la faiblesse — de la case.

Cette catégorie reste volontairement concise. Issue de l’escalade craft, elle ne constitue pas une école autonome avec un inventeur. Son intérêt est de montrer que la taxonomie dessine parfois des frontières là où le marché avait peint un dégradé.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Sierra Nevada Pale Ale — objet et contexte historique du craft américain",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_1854865",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2015",
          "reference": "2015 Beer Style Guidelines — American-Style Strong Pale Ale",
          "type": "guide_de_style",
          "url": "https://cdn.brewersassociation.org/wp-content/uploads/2017/04/2015-brewers-association-beer-style-guidelines.pdf",
          "consultation": "2026-08-10"
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
      "description": "La Juicy / Hazy Strong Pale Ale est une frontière en suspension : plus charpentée qu’une Hazy Pale Ale, pas forcément assez intense pour devenir Hazy IPA. Houblon fruité, trouble stable, bouche ronde et amertume souple y prennent un peu de hauteur alcoolique. Sa personnalité est réelle dans le verre ; son histoire, elle, appartient surtout aux tables de catégories.",
      "histoireEtOrigines": `Le marché hazy s’est développé comme un continuum de forces, et les concours ont dû lui donner plusieurs couloirs. La Brewers Association distingue la pale ale, l’IPA et la double IPA troubles dès 2018, puis maintient des paramètres capables d’accueillir les zones intermédiaires. « Strong Pale Ale » décrit ici une position de gamme davantage qu’une lignée régionale.

Le travail brassicole consiste à augmenter la densité sans laisser le sucre ou l’alcool couvrir le parfum. Une base pâle, des céréales riches en protéines selon la cible de texture, une levure fruitée et un houblonnage tardif généreux construisent le profil. Atténuation, astringence et oxygène réclament une surveillance proportionnelle : une bière trouble peut être intentionnelle tout en étant techniquement nette.

Il serait artificiel de lui inventer un fondateur. La catégorie documente la manière dont une esthétique née avec la NEIPA est devenue un langage modulaire. Quand un mouvement remplit assez de rayons, le concours finit par installer des étagères.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "The Alchemist Brewery",
          "edition": null,
          "reference": "Our Story — Heady Topper, Waterbury et diffusion de l’école houblonnée du Vermont",
          "type": "source_primaire_historique",
          "url": "https://alchemistbeer.com/story/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association / Brewbound",
          "edition": "2018",
          "reference": "2018 Beer Style Guidelines — segmentation des ales Juicy or Hazy par force",
          "type": "organisation_professionnelle",
          "url": "https://www.brewbound.com/news/brewers-association-acknowledges-haze-craze-creation-new-style-categories/",
          "consultation": "2026-08-10"
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
      "description": "La Kölsch est une ale qui a appris les manières d’une lager sans renier Cologne. Fermentée avec une levure haute puis mûrie au froid, elle offre grain pâle, fruit à peine esquissé, houblon fin et finale très nette. Dans une Stange de 20 centilitres, le Köbes remplace le verre vide avant la demande : pour arrêter le courant, il faut poser le sous-bock dessus.",
      "histoireEtOrigines": `Cologne défend longtemps la fermentation haute face à l’expansion des bières de fermentation basse. Au début du XXe siècle, la brasserie Sünner produit une ale pâle et claire issue de la tradition locale de Wieß ; le mot Kölsch commence à désigner ce type de bière autour de 1918. Le style moderne se consolide surtout après la Seconde Guerre mondiale, lorsque les brasseries reconstruites proposent une réponse locale, nette et dorée au succès de la Pils.

Le procédé est un compromis précis : fermentation haute, souvent dans une plage fraîche, puis maturation froide. La levure peut laisser un fruité très discret avant que la garde n’affine la bière. Malt pâle, forte atténuation, clarté et houblon délicat composent un profil qui boit comme une lager tout en restant biologiquement une ale. Le rapprochement est sensoriel, pas une conversion administrative de la levure.

En 1986, vingt-quatre brasseries signent la Kölsch-Konvention, qui encadre le nom et les caractéristiques. Depuis 1997, Kölsch bénéficie d’une indication géographique protégée dans l’Union européenne. La protection couvre Cologne et des lieux historiquement admis dans les environs ; hors de cette juridiction, de nombreuses brasseries utilisent le terme comme nom de style. Une « Kölsch » américaine peut donc être ressemblante sans être une Kölsch au sens européen — la géographie, ici, figure dans la recette juridique.

Le service achève l’identité. Le Köbes circule avec un Kranz de petites Stangen, remplace les verres et marque chaque tournée sur le sous-bock. Le petit volume maintient fraîcheur, mousse et conversation. Poser le sous-bock sur le verre arrête les renouvellements : rare système où la paperasserie constitue une mesure de sobriété.`,
      "chapitres": [
        {
          "titre": "Une ale contre la marée lager",
          "texte": `La Kölsch moderne ne représente pas un vestige inchangé du Moyen Âge. Elle se forme lorsque les brasseurs de Cologne adaptent leur fermentation haute au désir de bières pâles, claires et nettes. La maturation froide devient un outil de concurrence autant qu’un geste technique.

Cette réponse explique mieux le style que la formule « ale-lager hybride ». La levure travaille en fermentation haute ; le froid affine ensuite le produit. Cologne ne change pas de camp : elle apprend à gagner avec les armes sensorielles de l’adversaire.`
        },
        {
          "titre": "Le nom appartient aussi au lieu",
          "texte": `La convention de 1986 puis la protection européenne de 1997 transforment Kölsch en indication d’origine encadrée. Les critères sensoriels et techniques ne suffisent pas : la production doit appartenir à la zone reconnue.

Cette règle crée deux usages mondiaux du mot. Dans l’Union européenne, il désigne un produit géographique protégé ; dans de nombreux pays, il sert de modèle de recette. Les deux verres peuvent se ressembler, mais un seul a dû présenter ses papiers à Cologne.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Dans l’Union européenne, le nom est lié à l’origine en plus du profil. Techniquement, la bière combine fermentation haute et maturation froide ; ce n’est pas une fermentation basse accélérée.",
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
        "fermentation": "Levure de fermentation haute assez neutre, conduite fraîche selon la souche afin de produire un fruité très discret. La fermentation doit être complète avant la maturation froide.",
        "maturation": "Garde froide destinée à clarifier, affiner les composés soufrés ou fruités et stabiliser la bière. Sa durée dépend du procédé ; aucune période symbolique ne remplace les mesures de fermentation et de stabilité.",
        "profilRecherche": "Une ale pâle, brillante, très atténuée et délicatement houblonnée, servie fraîche dans une petite Stange ; la subtilité ne laisse aucune place aux défauts."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "5B Kölsch — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/5/pale-bitter-european-beer/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Koelsch — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "German Brewers’ Association",
          "edition": null,
          "reference": "Kölsch — fermentation haute, tradition colonaise, service et protection géographique",
          "type": "source_institutionnelle",
          "url": "https://germanbrewers.com/en/german-beer-variety/koelsch/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Commission européenne — eAmbrosia",
          "edition": "1997",
          "reference": "Kölsch — registre officiel de l’indication géographique protégée",
          "type": "registre_officiel",
          "url": "https://ec.europa.eu/agriculture/eambrosia/geographical-indications-register/details/EUGI00000013042",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Kölner Brauerei-Verband",
          "edition": null,
          "reference": "Kölsch-Konvention — critères et protection du nom",
          "type": "organisation_professionnelle",
          "url": "https://koelschverbindet.de/koelsch/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Office du tourisme de Cologne",
          "edition": null,
          "reference": "Brewery culture in Cologne — brauhaüser, Köbes, Stange et Kranz",
          "type": "source_culturelle_officielle",
          "url": "https://www.cologne-tourism.com/food-drink/breweries",
          "consultation": "2026-08-10"
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
      "description": "La Session IPA tente de garder le feu d’artifice aromatique en retirant une partie du carburant. Faible en alcool mais franchement houblonnée, elle doit offrir parfum, finale sèche et corps suffisant sans devenir aqueuse ni rêche. Son nom réemploie l’idéal de la « session beer » ; sa difficulté est moderne : faire beaucoup avec une densité qui pardonne très peu.",
      "histoireEtOrigines": `La légende relie parfois « session beer » aux courtes plages d’ouverture imposées aux pubs britanniques pendant la Première Guerre mondiale. Les historiens de la bière n’ont pas trouvé de preuve convaincante que l’expression soit née ainsi. Le mot session décrit plus sûrement une bière que l’on peut boire au cours d’une longue rencontre ; sa définition chiffrée varie selon les pays, les auteurs et les guides.

Aux États-Unis, le journaliste Lew Bryson lance en 2007 le Session Beer Project et propose, pour sa campagne, un plafond de 4,5 % accompagné d’exigences de goût, d’équilibre et de prix. Ce mouvement répond à l’escalade alcoolique du craft. Les brasseries appliquent bientôt l’idée à la catégorie la plus demandée : l’IPA. Founders commence en 2009 le développement d’All Day IPA, cherchant une bière légère mais aussi aromatique qu’une IPA plus forte ; le produit devient l’un des grands popularisateurs commerciaux du terme.

La Brewers Association ajoute Session India Pale Ale à ses guides en 2015. Elle n’invente ni la bière légère ni les premiers essais commerciaux : elle stabilise un marché déjà visible. Les seuils restent discutés et ont évolué ; une Session IPA n’est donc pas définie par un nombre universel gravé sur la pompe.

Le défi de recette donne au style sa vraie autonomie. Moins de malt signifie moins de corps, moins d’alcool pour porter les arômes et une amertume plus facile à rendre dure. Les brasseurs jouent sur le choix du malt, l’empâtage, une levure adaptée, les ajouts tardifs et une amertume calculée en perception plutôt qu’en concours d’IBU. Trop de dry-hop peut ajouter polyphénols et astringence sans restaurer la bouche. L’exercice ne consiste pas à diluer une IPA : il consiste à redessiner ses proportions.`,
      "chapitres": [
        {
          "titre": "Une étymologie moins commode que la légende",
          "texte": `Le récit des ouvriers britanniques buvant pendant des « sessions » légales raccourcies par la guerre est séduisant, mais sa chaîne documentaire est faible. Des bières de faible force et des habitudes de longues consommations existaient bien ; cela ne suffit pas à prouver l’origine du terme.

La prudence est plus utile : « session beer » devient surtout, dans le discours moderne, un idéal de bière goûteuse, équilibrée et répétable. Le plafond change selon celui qui tient la règle — ce qui est une façon très session de prolonger la discussion.`
        },
        {
          "titre": "Le corps manquant",
          "texte": `À densité basse, chaque gramme de houblon paraît plus agressif et chaque défaut de texture plus visible. Augmenter simplement le dry-hop peut donner une bière végétale ou astringente, tandis qu’un excès de malt caramélisé fabrique une douceur incompatible avec la finale recherchée.

La solution vient d’un ensemble : malts apportant saveur et mousse, empâtage ajusté, atténuation contrôlée, amertume de chaudière retenue, houblonnage tardif précis et très bonne protection contre l’oxygène. La Session IPA est une réduction d’orchestre, pas un concert diffusé moins fort.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Il faut reconstruire l’IPA à faible densité, pas diluer une recette forte. Corps, amertume perçue et arôme doivent être recalibrés ensemble.",
        "maltsEtCereales": [
          "Base pale ou two-row choisie pour sa saveur, parfois complétée par un malt plus riche en protéines ou une petite part de blé pour la mousse.",
          "Crystal et dextrine malt peuvent aider la bouche en très faible quantité, mais un excès donne une douceur lourde qui rend l’amertume plus fatigante.",
          "Le réglage du corps dépend aussi de l’empâtage et de la levure ; aucun ingrédient unique ne remplace une architecture complète."
        ],
        "houblons": [
          "Amertume de chaudière contenue afin d’éviter une perception dure dans un moût peu dense.",
          "Whirlpool, hop stand et dry-hop apportent le parfum, mais les doses élevées peuvent donner astringence, matière végétale et hop creep sans restaurer le corps."
        ],
        "levuresEtMicroorganismes": [
          "Souche propre et atténuante, américaine ou anglaise selon le profil ; une fermentation trop sèche peut accentuer la maigreur."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Un apport de sulfates peut soutenir la finale, tandis que les chlorures peuvent aider la texture. La faible densité amplifie la minéralité : les ajustements restent modérés et guidés par le pH ainsi que la dégustation.",
        "empatage": "Souvent légèrement plus chaud qu’une IPA standard afin de conserver du corps, sans produire une douceur collante.",
        "ebullitionEtHoublonnage": "Amertume soigneusement calibrée par rapport à la densité ; priorité aux ajouts tardifs et au dry-hop pour conserver l’impact aromatique.",
        "fermentation": "Fermentation haute propre et rapide, avec contrôle de l’oxygène après fermentation.",
        "maturation": "Très courte ; conditionnement frais pour éviter la perte d’arôme.",
        "profilRecherche": "Une IPA pleinement aromatique que l’on peut boire longuement, avec une finale vive, un corps léger mais présent et aucune sensation de recette amputée."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Session India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA — Session strength — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": null,
          "reference": "How old is the term ‘session beer’? — critique de l’étymologie liée aux horaires de guerre",
          "type": "histoire_brassicole",
          "url": "https://zythophile.wordpress.com/2011/05/20/how-old-is-the-term-session-beer/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Founders Brewing Co.",
          "edition": null,
          "reference": "A Brief History of All Day IPA — développement commencé en 2009",
          "type": "source_primaire_historique",
          "url": "https://foundersbrewing.com/latest-news/2018/brief-history-day-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2015",
          "reference": "2015 Beer Style Guidelines — ajout de Session India Pale Ale",
          "type": "guide_de_style",
          "url": "https://cdn.brewersassociation.org/wp-content/uploads/2017/04/2015-brewers-association-beer-style-guidelines.pdf",
          "consultation": "2026-08-10"
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
      "description": "L’English IPA moderne garde un air de famille avec les pale ales d’export sans prétendre sortir intacte d’un fût de 1830. Malt pâle biscuité, fermentation fruitée, houblons floraux ou épicés et finale sèche composent une bière plus équilibrée que nombre de ses descendantes américaines. Elle porte une mémoire britannique reconstruite, pas un certificat d’authenticité coloniale.",
      "histoireEtOrigines": `Hodgson, Burton, l’Inde et les mythes du voyage appartiennent à l’histoire commune de l’IPA. L’English IPA raconte ce qui arrive ensuite à la branche britannique. Au XIXe siècle, les pale ales destinées à l’Inde coexistent avec des versions vendues au Royaume-Uni ; noms, densités et recettes varient selon les maisons. « IPA » n’est jamais un cahier des charges national parfaitement stable.

Au XXe siècle, la force de nombreuses bières britanniques diminue sous l’effet des guerres, de la fiscalité et des transformations du marché. Certaines IPA deviennent des ales de pub très légères dont le nom conserve davantage de prestige historique que de ressemblance avec les export pales victoriennes. D’autres pale ales embouteillées et fortement houblonnées maintiennent une continuité partielle. Il n’existe donc pas une ligne droite reliant 1820 à une plage moderne de concours.

La renaissance craft oblige les brasseries britanniques à choisir entre reconstitution, continuité locale et influence américaine. L’English IPA contemporaine privilégie généralement malt pale ale, esters anglais et houblons floraux, terreux ou épicés, avec une amertume ferme mais moins saturée d’arôme que les versions américaines. Des variétés du Nouveau Monde peuvent entrer sans effacer la levure ni le malt.

Le style est ainsi une reconstruction consciente de son héritage. Il ne reproduit pas automatiquement la force, le vieillissement ou le dry-hopping d’une East India Pale Ale historique ; il sélectionne des traits lisibles pour le pub et le marché actuels. La tradition n’est pas congelée : elle fermente encore, ce qui est plus convenable pour une ale.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CAMRA / Pete Brown",
          "edition": null,
          "reference": "India Pale Ale: A History — mythes, commerce vers l’Inde et réinvention américaine",
          "type": "histoire_brassicole",
          "url": "https://learn.camra.org.uk/courses/india-pale-ale-a-history",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafAle S-04 — levure d’ale anglaise, profil fruité/floral et forte floculation",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/safale-s-04/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": null,
          "reference": "IPA: the executive summary — terminologie et forces historiques",
          "type": "histoire_brassicole",
          "url": "https://zythophile.wordpress.com/2010/03/31/ipa-the-executive-summary/",
          "consultation": "2026-08-10"
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
      "description": "L’American IPA prend la pale ale américaine et déplace son centre de gravité : moins de caramel, davantage de sécheresse, un houblon qui gouverne l’arôme comme l’amertume. Agrume, pin, fruit ou résine varient avec les générations de cultivars ; l’intention reste une bière nette et expressive. Elle n’est pas la copie musclée de l’Angleterre, mais le grand laboratoire du craft américain.",
      "histoireEtOrigines": `L’American IPA ne recommence pas le voyage vers l’Inde. Elle sort de la renaissance américaine décrite par l’American Pale Ale : Anchor montre en 1975 ce que Cascade et le dry-hopping peuvent faire avec Liberty Ale ; Sierra Nevada installe en 1980-1981 une pale ale fortement aromatique dans la durée. À mesure que les microbrasseries et brewpubs se multiplient, certains poussent la sécheresse, l’amertume et les ajouts tardifs au-delà du nouvel équilibre APA.

La catégorie devient assez reconnaissable pour entrer au Great American Beer Festival en 1989, où Rubicon IPA obtient l’or et Liberty Ale l’argent. Ce concours ne signe pas un acte de naissance : il photographie une identité en train de se stabiliser. Dans les années 1990, Centennial, Chinook et Columbus épaississent le vocabulaire résineux et agrumé ; Simcoe, Citra et Mosaic élargissent ensuite la gamme fruitée. L’enjeu n’est pas d’empiler les noms, mais de constater que la sélection variétale offre à chaque décennie de nouveaux outils.

La technique évolue avec ces matières. Les brasseurs réduisent souvent les malts crystal pour obtenir une bière plus claire et plus sèche ; ils déplacent une part du houblon vers la fin de l’ébullition, le whirlpool et le dry-hop afin de séparer davantage parfum et amertume. Plus de houblon ne signifie pas mécaniquement plus d’IBU : température, temps, forme du produit, composition du moût et perception modifient le résultat. À forte dose, les polyphénols peuvent aussi donner âpreté et brûlure.

L’American IPA devient une plateforme, puis engendre des divergences nettes. La Double IPA augmente la charge et l’alcool ; la West Coast affine sécheresse et clarté comme école régionale ; la NEIPA renverse l’idéal sensoriel vers le trouble et la texture. La révolution américaine demeure leur tronc commun. Les branches suivantes n’ont donc pas besoin de rappeler Cascade à chaque paragraphe : elles expliquent ce qu’elles ont changé après lui.`,
      "chapitres": [
        {
          "titre": "1989 : le concours reconnaît le marché",
          "texte": `Lorsque le Great American Beer Festival introduit IPA comme catégorie en 1989, il réunit sous un nom des bières déjà brassées. Rubicon gagne l’or ; Liberty Ale, antérieure de quatorze ans, reçoit l’argent. Le palmarès montre précisément la différence entre existence et codification.

À partir de là, les concours offrent une langue commune aux brasseurs, juges et buveurs. Cette langue stabilise le style tout en encourageant l’escalade : une grille de notation peut devenir, involontairement, une rampe de lancement.`
        },
        {
          "titre": "Du chaudron au whirlpool",
          "texte": `Le houblonnage américain se déplace progressivement vers les ajouts tardifs. En chaudière, les acides alpha isomérisés construisent l’amertume ; au whirlpool ou en hop stand, une température plus basse conserve davantage de composés volatils ; à cru, l’extraction se poursuit sans ébullition mais apporte aussi polyphénols, enzymes et oxygène potentiel.

Ces étapes ne possèdent pas de températures universelles ni de dose magique. Le matériel, le pH, le cultivar, la durée et le contact avec la levure changent l’expression. Une American IPA technique n’est pas celle qui récite un ratio : c’est celle qui sait quel résultat chaque opération cherche dans le verre.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Le centre de gravité doit rester le houblon sur une base sèche. La recette se distingue de l’APA par l’intensité globale et de la Double IPA par la force, sans frontière fondée sur un seul chiffre.",
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
        "ebullitionEtHoublonnage": "Amertume de chaudière puis charge croissante en fin d’ébullition, whirlpool et dry-hop selon l’école. Température et durée du hop stand changent extraction et volatilité ; un dry-hop massif peut accroître astringence et hop creep. Les IBU ne résument donc ni la méthode ni le verre.",
        "fermentation": "Fermentation haute propre, gestion stricte des températures et de l’oxygène.",
        "maturation": "Après fermentation et éventuel dry-hop, limiter fortement l’oxygène lors des transferts et du conditionnement. Le temps chaud et l’oxygène réduisent les notes fraîches de houblon ; une canette récente peut avoir plus de pertinence qu’un long pedigree.",
        "profilRecherche": "Une IPA sèche et tranchante, intensément aromatique et amère, où le malt soutient le houblon sans créer de douceur lourde."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21A American IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Anchor Liberty Ale — Cascade, 1975 et préfiguration de l’IPA américaine",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_2033255",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Our Story — fondation en 1980 et rôle de Pale Ale dans l’essor du craft américain",
          "type": "source_primaire_historique",
          "url": "https://sierranevada.com/about-us",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CraftBeer.com / Brewers Association",
          "edition": null,
          "reference": "Beer History — catégorie IPA au GABF en 1989 et chronologie craft",
          "type": "histoire_brassicole",
          "url": "https://www.craftbeer.com/beer/beer-history",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Hop Breeding Company",
          "edition": null,
          "reference": "Citra and Mosaic — dates de libération et profils de cultivars",
          "type": "source_primaire_agricole",
          "url": "https://www.hopbreeding.com/",
          "consultation": "2026-08-10"
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
      "description": "La New Zealand IPA pousse les houblons néo-zélandais jusqu’au premier plan : citron vert, fruit à noyau, herbe, baies ou raisin blanc peuvent surgir sur une base sèche et claire. Plus intense que la Pale Ale sœur, elle garde une amertume structurante sans imposer un bouquet officiel. Sa géographie vient des cultivars et de leur sélection, non d’une couleur de passeport.",
      "histoireEtOrigines": `La New Zealand Pale Ale porte l’histoire du programme de sélection commencé dans les années 1950. La branche IPA apparaît lorsque ces variétés rencontrent l’intensité et les techniques du craft international : densité plus élevée, houblonnage tardif et à cru plus important, finale sèche capable de soutenir des arômes puissants.

Nelson Sauvin, Motueka, Riwaka ou Nectaron peuvent servir d’outils, mais aucun n’est obligatoire et leurs profils changent selon récolte, lot et procédé. Leur succès mondial donne aux brasseries néo-zélandaises un avantage de proximité et une identité exportable ; il permet aussi à des producteurs étrangers de brasser des « New Zealand IPA ». Le style désigne donc une matière première géographique plus sûrement qu’une école de fermentation unique.

Les guides de la Brewers Association reconnaissent une catégorie dédiée, signe d’une stabilisation commerciale. La frontière avec une American IPA brassée au Nelson Sauvin reste poreuse : origine du houblon, intention aromatique et équilibre global comptent davantage que le domicile de la cuve. Cette incertitude est constitutive, pas une lacune à masquer.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "New Zealand Hops",
          "edition": null,
          "reference": "Motueka™ — origine génétique, profil citron vert et usage brassicole",
          "type": "source_technique_houblon",
          "url": "https://nzhops.co.nz/products/motueka",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21A American IPA — structural comparison — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Bioeconomy Science Institute New Zealand",
          "edition": null,
          "reference": "Hops with global appeal — sélection et export des houblons néo-zélandais",
          "type": "organisme_scientifique_public",
          "url": "https://www.bioeconomyscience.co.nz/about-us/100-years/hops-with-global-appeal",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Journal of the American Society of Brewing Chemists",
          "edition": "2021",
          "reference": "Distinctive chemical signatures of New Zealand hop cultivars",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7917646/",
          "consultation": "2026-08-10"
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
      "description": "La West Coast IPA avance en pleine lumière : claire, très atténuée, sèche, avec une amertume ferme et un houblon qui découpe agrumes, pin, résine ou fruit sans coussin sucré. Née d’un réseau de brasseries du littoral pacifique plutôt que d’un seul chaudron, elle a connu plusieurs âges — caramel et puissance, puis pâleur et précision — avant que les concours ne fixent tardivement son nom.",
      "histoireEtOrigines": `« West Coast IPA » ne désigne pas une invention unique née au bord d’une plage. Elle se forme dans l’écosystème brassicole de Californie, d’Oregon et de Washington à partir des années 1990 : accès aux houblons du Nord-Ouest, culture des brewpubs, échanges entre brasseurs et goût du public pour des ales de plus en plus sèches et amères. San Diego devient un foyer particulièrement visible avec Pizza Port, Stone, AleSmith et Ballast Point, tandis que la baie de San Francisco et le Nord californien apportent leurs propres pivots.

La première génération n’est pas toujours pâle ni minimaliste. Les IPA américaines des années 1990 et 2000 peuvent employer un malt crystal marqué et rechercher des chiffres d’amertume spectaculaires. Pliny the Elder, lancé par Russian River à la charnière de 1999-2000, montre qu’une forte charge de houblon peut aussi rester sèche, claire et précisément aromatique. Des bières comme Stone IPA ou, plus tard, Firestone Walker Union Jack diffusent différentes versions de l’école.

Face au succès des Hazy IPA, le terme West Coast devient plus explicite et le profil se resserre. Les versions contemporaines tendent vers une couleur paille, une atténuation élevée, peu ou pas de caramel, une amertume nette mais mieux intégrée et des houblons ajoutés pour le parfum autant que pour la morsure. La tradition se révise donc elle-même : « classique » et « moderne » West Coast ne sont pas exactement le même verre.

La Brewers Association décrit déjà une West Coast-Style IPA dans ses guides de 2023 et la maintient ensuite comme catégorie distincte. Cette codification tardive ne crée pas l’école ; elle reconnaît qu’un adjectif régional est devenu un contrat sensoriel international. Une West Coast peut désormais être brassée à Paris ou Tokyo. La côte est devenue une méthode — destin curieux pour une géographie.`,
      "chapitres": [
        {
          "titre": "San Diego, réseau plutôt que capitale autoproclamée",
          "texte": `Les brewpubs de Pizza Port servent de terrain d’apprentissage à plusieurs brasseurs, tandis que Stone et d’autres maisons donnent à la région une visibilité nationale. Compétitions, festivals, distribution et circulation des personnes font émerger une réputation collective.

Dire que San Diego « invente » la West Coast IPA simplifierait trop : Anchor, Sierra Nevada et Russian River ont des rôles essentiels plus au nord, et le Pacific Northwest possède sa propre scène. San Diego montre plutôt comment un réseau local peut intensifier, comparer et commercialiser une esthétique jusqu’à la rendre régionale.`
        },
        {
          "titre": "La clarté après l’escalade",
          "texte": `La West Coast contemporaine ne cherche plus nécessairement le plus grand nombre d’IBU. Elle privilégie un moût très fermentescible, une base pâle, une eau qui soutient la sécheresse sans dureté et un houblonnage tardif capable de rester défini.

Cette évolution répond autant aux Hazy IPA qu’à elles-mêmes : pour se distinguer, les brasseurs accentuent clarté, netteté et finale vive. La rivalité régionale devient ainsi une technique de mise au point.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La version contemporaine recherche pâleur, forte atténuation, clarté et netteté du houblon. Les versions historiques plus ambrées et caramélisées restent des jalons, pas une obligation de recette.",
        "maltsEtCereales": [
          "Base pale ou Pilsner très claire, avec assez de caractère pour soutenir la fermentation mais peu ou pas de crystal.",
          "Une fraction de sucre simple peut augmenter l’atténuation dans les versions fortes ; elle sert la sécheresse, non une économie cachée."
        ],
        "houblons": [
          "Cascade, Centennial, Chinook, Columbus et Simcoe pour le registre classique ; Citra, Mosaic, Strata, Idaho 7 et autres variétés modernes peuvent compléter le profil.",
          "Amertume franche et propre, forte charge au whirlpool et dry-hop, avec objectif de clarté aromatique."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine très propre et fortement atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Les sulfates sont souvent privilégiés pour la finale sèche et la précision de l’amertume, mais une concentration excessive devient minérale ou rêche. Le rapport aux chlorures dépend de l’eau de départ, du pH et de la recette ; il n’existe pas de nombre californien obligatoire.",
        "empatage": "Infusion plutôt basse ou modérée pour une forte fermentescibilité et une finale sèche.",
        "ebullitionEtHoublonnage": "Amertume construite proprement, puis couches aromatiques tardives et dry-hop. Les techniques modernes cherchent à maximiser l’arôme tout en limitant polyphénols et oxygène.",
        "fermentation": "Fermentation haute très nette ; contrôle précis de température et atténuation complète.",
        "maturation": "Courte, avec clarification et conditionnement sous CO₂. La bière doit être servie très fraîche.",
        "profilRecherche": "Une IPA claire et très sèche dont le houblon est défini plutôt que confus, l’amertume ferme plutôt que brutale et le malt réduit à une charpente active."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "West Coast-Style India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Anchor Liberty Ale — Cascade, 1975 et préfiguration de l’IPA américaine",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_2033255",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Pale Ale — Cascade, malt two-row et caramel, repère de l’American Pale Ale",
          "type": "source_primaire_technique",
          "url": "https://sierranevada.com/brews/pale-ale",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "Pliny the Elder — Double IPA, festival de Hayward 2000 et antécédent de Blind Pig en 1994",
          "type": "source_primaire_historique",
          "url": "https://www.russianriverbrewing.com/brew/pliny-the-elder/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2023",
          "reference": "2023 Beer Style Guidelines — West Coast-Style India Pale Ale",
          "type": "guide_de_style",
          "url": "https://cdn.brewersassociation.org/wp-content/uploads/2023/07/10124402/2023_BA_Beer_Style_Guidelines-updated.pdf",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "About Us — Pliny the Elder brassée à partir de 1999",
          "type": "source_primaire_historique",
          "url": "https://www.russianriverbrewing.com/about-us/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Pizza Port Brewing Co.",
          "edition": null,
          "reference": "About — premiers brassins en 1992 et développement du réseau de brewpubs de San Diego",
          "type": "source_primaire_historique",
          "url": "https://www.pizzaport.com/about/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Stone Brewing",
          "edition": null,
          "reference": "Stone IPA — lancement pour le premier anniversaire de la brasserie en 1997",
          "type": "source_primaire_historique",
          "url": "https://www.stonebrewing.com/beer/year-round-releases/stone-ipa",
          "consultation": "2026-08-10"
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
      "description": "La NEIPA change la question posée à une IPA. Au lieu de demander jusqu’où pousser clarté et amertume, elle cherche une bouche souple, un parfum de fruit mûr et un trouble assumé. Le houblon semble juteux plutôt que tranchant ; la levure et les céréales participent à la texture. Ce verre opaque n’est pas une filtration oubliée : c’est une rupture régionale devenue mondiale.",
      "histoireEtOrigines": `Au Vermont, Greg Noonan forme et influence une génération de brasseurs au Vermont Pub & Brewery. John Kimmich y travaille avant d’ouvrir avec Jen Kimmich The Alchemist à Waterbury en 2003. Heady Topper, brassée au pub dès 2003-2004 puis conditionnée en canette à partir de 2011, devient le pivot le plus visible d’une IPA intensément aromatique, non filtrée et moins agressive dans sa perception que les extrêmes de la côte Ouest. Il est plus juste de la dire pionnière et popularisatrice que d’en faire l’unique invention.

Autour d’elle, une scène régionale construit le langage. Hill Farmstead ouvre en 2010 dans le nord du Vermont ; Tree House, fondée dans le Massachusetts en 2011, développe Julius autour d’un houblon fruité et d’un assemblage de levures ; Trillium participe à la diffusion de l’esthétique dans la région de Boston. Vente locale, growlers, canettes fraîches et files d’attente transforment la rareté en réseau de circulation. La « Vermont IPA » devient « New England IPA » à mesure que l’école franchit les frontières de l’État.

Le trouble n’est pas simplement de la levure laissée par négligence. Protéines du malt, blé ou avoine, polyphénols du houblon, calendrier du dry-hop et choix de levure contribuent à l’apparence et à la texture. Une partie des composés aromatiques peut être transformée pendant la fermentation, mais la « biotransformation » regroupe plusieurs mécanismes dont l’ampleur dépend fortement de la souche et des précurseurs ; la science ne valide pas une recette universelle consistant à jeter le houblon un jour précis.

L’eau est souvent orientée vers davantage de chlorures que dans une West Coast afin de soutenir la rondeur, mais un ratio sulfate/chlorure n’est ni une identité de style ni une loi sensorielle. Atténuation, pH, alcool, protéines et carbonatation comptent ensemble. Surtout, ces bières très houblonnées sont vulnérables à l’oxygène : le vieillissement et l’oxygène dissous réduisent les notes tropicales et agrumées, assombrissent le verre et font apparaître des caractères maltés ou cartonnés.

En 2018, la Brewers Association crée trois catégories Juicy or Hazy — Pale Ale, IPA et Double IPA. Dès leur première année au Great American Beer Festival, la catégorie Hazy/Juicy IPA dépasse l’American IPA en nombre d’inscriptions. Le concours arrive après la rupture sensorielle et commerciale, mais il accélère sa normalisation. La NEIPA cesse alors d’être une bizarrerie régionale : elle devient une seconde grande école mondiale de l’IPA.`,
      "chapitres": [
        {
          "titre": "Waterbury : la canette change l’échelle",
          "texte": `The Alchemist sert d’abord Heady Topper au brewpub. La petite unité de production ouverte en 2011 permet de la mettre en canette ; après la fermeture du pub provoquée par la tempête Irene, cette production devient le centre de l’activité. Les files de clients et la distribution très locale font du contenant un vecteur de réputation.

La canette protège de la lumière, voyage et porte une consigne célèbre de consommation directement au contenant. Elle n’invente pas le profil, mais elle l’expédie hors du comptoir sans prétendre en faire un produit de longue garde. Dans cette histoire, le conditionnement compte autant que le trouble.`
        },
        {
          "titre": "Le trouble est une construction",
          "texte": `Les interactions entre protéines et polyphénols peuvent former une brume stable ; certaines levures restent aussi plus longtemps en suspension. Le choix des céréales, la charge de houblon et le procédé déterminent si le voile paraît lumineux et intégré ou s’il devient boueux et astringent.

Une NEIPA réussie n’est donc pas dispensée de précision par son opacité. Le trouble peut être voulu sans que toute particule le soit. La bière a simplement cessé de confondre transparence optique et honnêteté morale.`
        },
        {
          "titre": "Biotransformation : verbe utile, explication incomplète",
          "texte": `Les levures peuvent convertir certains terpènes et libérer des thiols à partir de précurseurs, selon leurs activités enzymatiques. Mais les cultivars, la souche, le moût, le moment du houblonnage et les pertes par fermentation modifient le résultat ; plusieurs voies restent activement étudiées.

Parler de biotransformation aide à décrire une interaction entre levure et houblon. En faire une formule parfaitement comprise ou une dose obligatoire transforme une recherche en argument de vente. Le point d’interrogation reste donc posé à côté du verre.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Trouble, texture et parfum se construisent ensemble. Ni l’avoine, ni une souche « London », ni un ratio d’eau, ni un dry-hop pendant la fermentation ne suffit isolément à produire le style.",
        "maltsEtCereales": [
          "Base pale ou Pilsner, complétée selon le profil par blé, avoine maltée ou floconnée et malts riches en protéines.",
          "Les protéines contribuent à la mousse, à la texture et aux interactions de trouble, mais une charge excessive peut donner une bouche farineuse ou compliquer la filtration.",
          "Le crystal foncé est généralement absent ou très faible afin de préserver pâleur et fraîcheur."
        ],
        "houblons": [
          "Houblons choisis pour une expression fruitée, utilisés surtout en fin d’ébullition, au whirlpool et à cru ; aucune variété ne définit seule la NEIPA.",
          "Un ajout pendant fermentation peut modifier certains composés via la levure, mais la biotransformation dépend de la souche et des précurseurs et ne justifie pas un calendrier universel.",
          "De fortes doses augmentent aussi polyphénols, astringence, pertes de bière et risque de hop creep."
        ],
        "levuresEtMicroorganismes": [
          "Souches anglaises ou apparentées, fruitées et relativement peu floculantes à moyennement floculantes, capables de produire une bouche souple.",
          "Verdant IPA illustre une souche moderne offrant abricot, fruits tropicaux et agrumes avec atténuation moyenne à élevée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Des chlorures relativement présents peuvent soutenir la rondeur et les sulfates maintenir la finale, mais le ratio entre eux n’est qu’une partie du système. pH, calcium, alcalinité, céréales, atténuation et carbonatation façonnent également la sensation.",
        "empatage": "Infusion visant un corps moyen sans finir sucré. La texture vient autant des protéines et de l’eau que d’un haut niveau de sucres résiduels.",
        "ebullitionEtHoublonnage": "Peu de houblon amérisant classique, gros whirlpool à température contrôlée, puis un ou plusieurs dry-hops. La prévention du hop burn et de l’oxydation est centrale.",
        "fermentation": "Fermentation haute fruitée. Le moment du dry-hop peut varier ; certains ajouts pendant fermentation favorisent certaines transformations aromatiques, mais ils ne sont pas obligatoires.",
        "maturation": "Courte et protégée de l’oxygène. Purges, transferts fermés et conditionnement précis limitent brunissement et perte des arômes tropicaux. Le trouble voulu ne protège pas contre l’oxydation.",
        "profilRecherche": "Une IPA opaque mais lumineuse, saturée d’arômes de fruits frais, souple en bouche, peu agressive dans l’amertume et extrêmement fraîche."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21C Hazy IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Juicy or Hazy India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "The Alchemist Brewery",
          "edition": null,
          "reference": "Our Story — Heady Topper, Waterbury et diffusion de l’école houblonnée du Vermont",
          "type": "source_primaire_historique",
          "url": "https://alchemistbeer.com/story/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Tree House Brewing Company",
          "edition": null,
          "reference": "Julius — origine, levure et évolution du modèle Tree House",
          "type": "source_primaire_historique",
          "url": "https://treehousebrew.com/julius-ipa",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association / Brewbound",
          "edition": "2018",
          "reference": "2018 Beer Style Guidelines — reconnaissance des styles Juicy or Hazy",
          "type": "organisation_professionnelle",
          "url": "https://www.brewbound.com/news/brewers-association-acknowledges-haze-craze-creation-new-style-categories/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "FEMS Yeast Research",
          "edition": "2022",
          "reference": "Fruits of their labour — revue des biotransformations aromatiques par les levures",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9329171/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Foods",
          "edition": "2023",
          "reference": "Effects of Dry-Hopping on Beer Chemistry and Sensory Properties — revue scientifique",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10534726/",
          "consultation": "2026-08-10"
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
      "description": "La Double / Imperial IPA ne se contente pas d’ajouter de l’alcool : elle agrandit l’IPA sans laisser le malt devenir sirupeux ni le houblon devenir une punition. Force, atténuation, amertume et parfum doivent tenir dans la même charpente. Son histoire appartient à la Californie craft des années 1990, quand l’excès devient un terrain de maîtrise plutôt qu’un simple concours de chiffres.",
      "histoireEtOrigines": `Le 23 juin 1994, Vinnie Cilurzo brasse Inaugural Ale pour l’ouverture de Blind Pig à Temecula. Il manque d’expérience professionnelle et utilise bien plus de houblon qu’une recette normale afin de masquer d’éventuels défauts ; la bière devient l’un des premiers exemples documentés de ce que l’on appellera Double IPA. Il est prudent de parler de jalon majeur plutôt que de première absolue : des ales américaines très fortes et très houblonnées existaient, mais Inaugural Ale relie clairement l’intention, la date et la future catégorie.

À Russian River, alors propriété de Korbel, Cilurzo brasse Pliny the Elder en 1999 pour un festival organisé au Bistro de Hayward, lancé en 2000 autour des Double IPA. Pliny combine une forte charge de houblon avec une base relativement sèche et une attention particulière à l’arôme ; elle devient un modèle d’équilibre dans une époque fascinée par l’escalade. Pliny the Younger, brassée à partir de 2005 comme version triple et saisonnière, transforme ensuite la sortie rare en pèlerinage, mais appartient davantage à la culture de l’extrême qu’à l’origine de la Double IPA.

« Double IPA » et « Imperial IPA » circulent parallèlement. Double décrit l’augmentation de la recette sans signifier un doublement mathématique ; Imperial emprunte au vocabulaire des bières fortes et sert souvent de marqueur commercial. Les guides les réunissent, et l’usage ne trace pas une frontière historique nette entre les deux.

La technique fait la différence entre ampleur et sirop. Une forte densité exige une levure saine, une bonne oxygénation initiale et une fermentation capable d’aller loin. Des sucres simples peuvent alléger le corps ; le crystal est généralement mesuré ; l’amertume doit soutenir l’alcool sans devenir abrasive. Les énormes charges à cru apportent aussi pertes de rendement, astringence, oxygène et risque de hop creep. La Double IPA naît d’une escalade, mais survit grâce à ceux qui apprennent à freiner.`,
      "chapitres": [
        {
          "titre": "Blind Pig, 1994 : le houblon comme assurance",
          "texte": `Cilurzo raconte avoir surchargé Inaugural Ale en houblon afin de couvrir les défauts possibles d’un premier brassin professionnel. La stratégie ressemble moins à une révélation stylistique qu’à une police d’assurance très odorante.

Le résultat compte néanmoins parce qu’il produit une lignée : anniversaires de Blind Pig, puis travail à Russian River et Pliny the Elder. Une origine peut être à la fois improvisée dans son motif et décisive dans ses conséquences.`
        },
        {
          "titre": "Pliny et le festival qui donne un public",
          "texte": `Le Bistro de Hayward organise en 2000 un festival consacré aux Double IPA. Pliny the Elder y apparaît et le rendez-vous met en relation des brasseurs californiens qui expérimentent la même montée en intensité.

Le festival n’invente pas toutes les bières présentes ; il transforme des essais dispersés en scène identifiable. La compétition joue ici un rôle de chambre d’écho avant que les guides ne terminent la nomenclature.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Augmenter alcool et houblon exige de préserver l’atténuation. Le malt doit porter la fermentation sans laisser une douceur sirupeuse qui transforme l’amertume en poids supplémentaire.",
        "maltsEtCereales": [
          "Base pale majoritaire, crystal faible ou nul selon l’école.",
          "Sucres simples possibles pour augmenter la densité initiale tout en abaissant le corps final ; ils exigent une fermentation saine, pas seulement une addition en chaudière."
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
        "fermentation": "Ensemencement suffisant, oxygénation initiale adaptée, nutriments si nécessaires et contrôle thermique. Une levure neutre et atténuante doit finir le travail malgré l’alcool ; une fermentation arrêtée laisse une bière sucrée et instable.",
        "maturation": "Le dry-hop et la force n’immunisent pas contre l’oxygène. Laisser finir toute refermentation liée au hop creep, contrôler la densité, puis conditionner avec un apport d’oxygène minimal.",
        "profilRecherche": "Une IPA puissante où alcool, amertume et parfum paraissent plus grands mais restent articulés ; la force doit allonger le goût, non l’épaissir."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "22A Double IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/strong-american-ale/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Imperial or Double India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "Pliny the Elder — Double IPA, festival de Hayward 2000 et antécédent de Blind Pig en 1994",
          "type": "source_primaire_historique",
          "url": "https://www.russianriverbrewing.com/brew/pliny-the-elder/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "American Homebrewers Association / Vinnie Cilurzo",
          "edition": null,
          "reference": "Brew a Double IPA — Inaugural Ale brassée le 23 juin 1994",
          "type": "temoignage_primaire",
          "url": "https://homebrewersassociation.org/zymurgy-article/brew-a-double-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "About Us — Pliny the Elder, Korbel et chronologie de la brasserie",
          "type": "source_primaire_historique",
          "url": "https://www.russianriverbrewing.com/about-us/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Appellation Beer",
          "edition": null,
          "reference": "Which Blind Pig beer was one of the first Double IPAs? — distinction Inaugural Ale / Blind Pig IPA",
          "type": "histoire_brassicole",
          "url": "https://appellationbeer.com/blog/hold-it-which-blind-pig-beer-was-one-of-the-first-double-ipas/",
          "consultation": "2026-08-10"
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
      "description": "La Juicy / Hazy Double IPA réunit deux escalades qui pourraient mal tourner : force alcoolique et saturation aromatique. Elle cherche pourtant la douceur, le fruit mûr et une texture ample plutôt qu’une morsure accrue. Le trouble masque peu de choses : sucre résiduel, chaleur, astringence ou oxydation apparaissent vite. Sa réussite tient à l’intégration, pas au poids du sac de houblon.",
      "histoireEtOrigines": `Cette branche naît après la NEIPA, lorsque l’esthétique trouble et fruitée est appliquée à la force des Double IPA. Heady Topper elle-même se situe à 8 % et montre dès le début du mouvement qu’une IPA du Vermont peut être à la fois puissante, non filtrée et moins abrasive que les modèles d’escalade occidentaux. Tree House et d’autres brasseries de Nouvelle-Angleterre développent ensuite des versions explicitement Double.

En 2018, la Brewers Association crée Juicy or Hazy Double IPA avec les catégories Pale Ale et IPA du même mouvement. La codification reconnaît une variation de force déjà commerciale ; elle ne fournit pas un inventeur distinct. Waterbury et les files de canettes appartiennent à l’histoire commune ; la Hazy Double s’intéresse au rapprochement de deux architectures.

Une densité élevée peut donner rondeur et alcool, tandis que blé, avoine, levure et houblon renforcent la texture. Mais trop de sucre résiduel rend le fruit confit ; trop de matière végétale ajoute brûlure et astringence ; une fermentation incomplète laisse une bière instable. Le dry-hop peut aussi déclencher un hop creep en libérant des sucres fermentescibles, phénomène dont l’intensité dépend du procédé et de la levure.

La Hazy Double est ainsi moins une « NEIPA plus forte » qu’un exercice de compensation. Elle ne doit cacher ni son alcool ni sa technique, mais les intégrer jusqu’à faire croire que l’équilibre était facile. Le verre, lui, n’a pas vu les pertes de rendement.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La recette combine le moteur hazy et une forte densité. Le sucre résiduel, l’alcool, les protéines et les polyphénols doivent produire de la douceur perçue sans lourdeur ni brûlure.",
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
        "fermentation": "Souche fruitée mais capable d’achever une fermentation forte. Surveiller densité, température et activité après dry-hop : les enzymes du houblon peuvent libérer de nouveaux sucres et relancer la levure.",
        "maturation": "Courte, froide après fermentation complète et extrêmement pauvre en oxygène. Une bière forte n’est pas nécessairement une bière de garde lorsque son identité dépend d’arômes de houblon fragiles.",
        "profilRecherche": "Une bière très forte mais étonnamment douce et fruitée, saturée de houblon frais, sans chaleur alcoolique agressive ni sucrosité collante."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Juicy or Hazy Imperial or Double India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21C Hazy IPA — lineage — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Russian River Brewing Company",
          "edition": null,
          "reference": "Pliny the Elder — Double IPA, festival de Hayward 2000 et antécédent de Blind Pig en 1994",
          "type": "source_primaire_historique",
          "url": "https://www.russianriverbrewing.com/brew/pliny-the-elder/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association / Brewbound",
          "edition": "2018",
          "reference": "2018 Beer Style Guidelines — Juicy or Hazy Double IPA",
          "type": "organisation_professionnelle",
          "url": "https://www.brewbound.com/news/brewers-association-acknowledges-haze-craze-creation-new-style-categories/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Journal of the American Society of Brewing Chemists",
          "edition": "2024",
          "reference": "Effect of Dry Hopping Conditions on the Hop Creep Potential of Beer",
          "type": "publication_scientifique",
          "url": "https://www.tandfonline.com/doi/abs/10.1080/03610470.2024.2388430",
          "consultation": "2026-08-10"
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
      "description": "La Belgian IPA met deux parfumeries dans la même pièce : esters et épices de levure belge d’un côté, houblon franc de l’autre. Pâle, sèche et souvent forte, elle peut rappeler une tripel devenue plus amère ou une IPA fermentée avec une souche expressive. Son identité vient de cette tension, pas d’un simple remplacement de levure sur une recette américaine.",
      "histoireEtOrigines": `La Belgique possède une longue histoire de bières amères et houblonnées, mais « Belgian IPA » est une catégorie de convergence récente. En 1996, De Ranke brasse XX Bitter, pale ale belge très amère qui contribue au renouveau du houblon dans un paysage alors souvent associé aux ales fortes, sucrées ou épicées. Elle n’est pas nécessairement nommée IPA ; elle prépare cependant le terrain sensoriel.

En 2006, la Brasserie d’Achouffe lance Houblon Chouffe, devenue Chouffe IPA en 2025, et la présente comme sa première Belgian IPA. La bière marie la force et le fruité d’une ale belge à une amertume renforcée. Sa diffusion internationale rend lisible l’étiquette et offre un pivot commercial, sans effacer les antécédents ni les interprétations de brasseurs américains employant des levures belges.

La catégorie se stabilise donc par deux routes : des brasseries belges réaccentuent le houblon, tandis que le craft américain applique des souches belges à l’architecture IPA. Les résultats vont de la saison sèche et poivrée à la tripel houblonnée. Cette largeur explique pourquoi la levure, l’atténuation et l’équilibre importent plus qu’une variété obligatoire.

La difficulté vient des superpositions. Esters, phénols, alcool et houblon peuvent s’amplifier ou se brouiller. Une fermentation trop chaude ne produit pas davantage d’authenticité, seulement davantage de solvants possibles. La Belgian IPA réussie organise un dialogue ; elle ne pose pas deux enceintes l’une contre l’autre en espérant que le volume fasse la musique.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Le profil doit décider si la charpente vient plutôt d’une ale belge sèche ou d’une IPA fermentée avec une souche belge. Dans les deux cas, levure et houblon doivent se compléter au lieu d’empiler leurs notes les plus fortes.",
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
        "fermentation": "Souche belge choisie pour des esters et phénols compatibles avec le houblon, conduite dans sa plage plutôt que chauffée arbitrairement. Une température excessive peut produire solvants et alcool supérieur sans ajouter de caractère régional.",
        "maturation": "Courte à moyenne selon la force, mais consommation relativement fraîche pour préserver le houblon.",
        "profilRecherche": "Une ale sèche et houblonnée où fruit, épice, amertume et alcool forment une seule phrase ; ni tripel simplement surhoublonnée, ni American IPA parfumée au hasard."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Belgian IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Belgian-Style India Pale Ale — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Verdant IPA — souche fruitée pour Pale Ale, Bitter, IPA anglaise et NEIPA",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/global/produits/lalbrew-verdant-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brasserie d’Achouffe",
          "edition": null,
          "reference": "Our Story — Houblon Chouffe lancée en 2006 et renommée Chouffe IPA en 2025",
          "type": "source_primaire_historique",
          "url": "https://chouffe.com/en-us/about-us/our-story",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brouwerij De Ranke",
          "edition": null,
          "reference": "XX Bitter — profil, houblons et 60–65 IBU",
          "type": "source_primaire_technique",
          "url": "https://www.deranke.be/en/bier/xx-bitter",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Belgian Beer Heaven",
          "edition": null,
          "reference": "Brouwerij De Ranke — XX Bitter brassée pour la première fois en 1996",
          "type": "histoire_de_brasserie",
          "url": "https://www.belgianbeerheaven.com/de/en/breweries/brouwerij-de-ranke",
          "consultation": "2026-08-10"
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
      "description": "La Black IPA est noire sans vouloir goûter comme un stout, houblonnée comme une IPA sans prétendre être pâle : son nom a offert des années de travail aux amateurs de contradiction. Sous la robe sombre, le malt torréfié reste sec et retenu afin de laisser pin, agrume ou résine dominer. L’histoire hésite entre Vermont et Cascadia ; cette querelle fait partie du style.",
      "histoireEtOrigines": `Des porters britanniques fortement houblonnés et même dry-hoppés ont voyagé au XIXe siècle, mais les relier directement à la Black IPA moderne serait une généalogie rétrospective. Le jalon américain le mieux documenté est Blackwatch IPA, brassée au Vermont Pub & Brewery par Greg Noonan et Glenn Walter en 1994. Des dates légèrement différentes ont circulé dans les récits ; les témoignages et archives de la scène du Vermont soutiennent 1994, sans autoriser à déclarer toute bière sombre houblonnée antérieure inexistante.

Dans le Pacific Northwest, John Maier chez Rogue et Matt Phillips à Victoria développent au début des années 2000 des ales sombres et fortement houblonnées, parfois indépendamment de la lignée du Vermont. La région possède les houblons, une culture craft expérimentale et un imaginaire biogéographique puissant. Le terme « Cascadian Dark Ale » s’y impose parmi ses défenseurs pour éviter l’oxymore Black IPA et revendiquer une origine régionale.

Le marché préfère largement « Black IPA ». La Brewers Association crée en 2010 une catégorie American-Style India Black Ale pour le Great American Beer Festival, puis la terminologie évolue ; le BJCP retient Black IPA dans ses Specialty IPA. La séquence distingue trois choses : des antécédents multiples, une popularisation du Pacific Northwest, puis une codification qui choisit encore un autre nom. Rarement une bière aura autant clarifié sa couleur en changeant d’étiquette.

Le procédé cherche une obscurité sans domination brûlée. Malts noirs désamérisés, grains torréfiés ajoutés avec retenue ou extraction à froid peuvent apporter couleur et une pointe de cacao ; une base sèche et un houblonnage américain restent au centre. Trop de torréfaction produit un stout houblonné, trop peu une IPA maquillée. La catégorie vit précisément dans cette ligne de crête.

Après un sommet de popularité au début des années 2010, la Black IPA recule face aux IPA troubles et claires, puis connaît des retours périodiques. Son nom reste contestable, son profil reste reconnaissable et ses prétendants à la primauté restent pluriels : une situation étonnamment stable pour un style fondé sur la contradiction.`,
      "chapitres": [
        {
          "titre": "Vermont contre Cascadia",
          "texte": `Le Vermont dispose d’un jalon daté avec Blackwatch IPA et Greg Noonan. Le Pacific Northwest dispose d’une scène qui multiplie les exemples, façonne une esthétique régionale et propose le nom Cascadian Dark Ale. Les deux affirmations ne portent donc pas sur la même chose.

Le Vermont peut revendiquer un premier exemple moderne bien documenté ; Cascadia peut revendiquer une popularisation collective et un vocabulaire. Confondre ces rôles transforme l’enquête en match. Les distinguer permet de garder les deux équipes au bar.`
        },
        {
          "titre": "Noire par la couleur, pas par la cendre",
          "texte": `Les malts torréfiés fournissent rapidement café, brûlé et astringence. Pour conserver une logique IPA, les brasseurs utilisent des malts décortiqués ou désamérisés, limitent les quantités, retardent parfois leur contact ou travaillent une extraction séparée.

Le but n’est pas d’annuler tout malt sombre : une nuance de cacao ou de pain grillé donne son relief à la rencontre. Il faut seulement que la couleur arrive avec un bagage cabine, pas avec tout le mobilier du stout.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La couleur doit s’accompagner d’un caractère sombre mesuré, tandis que l’atténuation et le houblon restent ceux d’une IPA. Un stout fortement houblonné n’est pas automatiquement une Black IPA.",
        "maltsEtCereales": [
          "Base pale majoritaire, éventuellement complétée par Munich ou crystal avec retenue.",
          "Malts noirs décortiqués ou désamérisés en petite proportion pour la couleur et une nuance de cacao.",
          "Ajout tardif des grains sombres ou extraction à froid possibles pour limiter brûlé et astringence ; ces méthodes sont des outils, pas des obligations."
        ],
        "houblons": [
          "Houblons américains ou du Nouveau Monde intenses, souvent résineux, agrumés, tropicaux ou à fruits à noyau.",
          "Amertume moyenne-forte à très forte, gros houblonnage tardif et dry-hop."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine propre et atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil compatible avec une IPA sèche, sans alcalinité excessive. Les malts noirs abaissent le pH et modifient l’extraction : leur quantité et leur moment d’ajout comptent autant que les sels.",
        "empatage": "Infusion favorisant une bonne atténuation. Les malts les plus sombres peuvent être ajoutés tard ou sous formes désamérisées pour limiter astringence et brûlé.",
        "ebullitionEtHoublonnage": "Architecture d’IPA américaine : amertume nette, whirlpool et dry-hop généreux.",
        "fermentation": "Fermentation haute propre, avec attention à l’oxydation qui ternit à la fois houblon et malt sombre.",
        "maturation": "Courte ; la fraîcheur aromatique prime sur l’intégration longue des malts noirs.",
        "profilRecherche": "Une IPA sombre dont le houblon demeure protagoniste, soutenu par cacao ou pain grillé sec et jamais englouti sous la cendre."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Black IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Black Ale / Black IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CAMRA / Pete Brown",
          "edition": null,
          "reference": "India Pale Ale: A History — mythes, commerce vers l’Inde et réinvention américaine",
          "type": "histoire_brassicole",
          "url": "https://learn.camra.org.uk/courses/india-pale-ale-a-history",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CraftBeer.com / Brewers Association",
          "edition": null,
          "reference": "Cascadian Dark Ale: A Rose By Any Other Name — controverse de 2010 et catégorie GABF",
          "type": "presse_professionnelle",
          "url": "https://www.craftbeer.com/craft-beer-muses/india-black-ale-a-rose-by-any-other-name",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Vermont Pub & Brewery",
          "edition": null,
          "reference": "Our Story — Greg Noonan et le premier brewpub du Vermont",
          "type": "source_primaire_historique",
          "url": "https://vermontbrewery.com/our-story",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Good Beer Hunting",
          "edition": null,
          "reference": "Darkest Before the Dawn — Blackwatch, antécédents et lignées modernes",
          "type": "histoire_brassicole",
          "url": "https://www.goodbeerhunting.com/blog/2021/4/5/darkest-before-the-dawn-the-unlikely-return-of-black-ipa",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "All About Beer",
          "edition": null,
          "reference": "The Quiet Resilience of the Black IPA — trajectoire et reflux du style",
          "type": "presse_specialisee",
          "url": "https://allaboutbeer.com/black-ipa-cascadian-dark-ale/",
          "consultation": "2026-08-10"
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
      "description": "La Brown IPA donne au houblon une charpente de noix, de pain grillé et de caramel sec. Plus sombre et plus maltée qu’une American IPA, elle reste pourtant atténuée et amère, sans glisser vers le dessert ni le porter. Son autonomie historique est limitée : c’est surtout une exploration craft devenue sous-type de concours.",
      "histoireEtOrigines": `Des brown ales américaines fortement houblonnées existaient avant que le nom Brown IPA ne se fixe. La catégorie se forme lorsque les brasseurs appliquent l’intensité IPA à une base brune plus toastée et que les concours cherchent à distinguer ce profil de la Black IPA, de l’American Brown Ale et de l’American IPA.

Le BJCP l’intègre en 2015 dans les Specialty IPA. Cette date marque une codification, pas une invention. Aucune bière pivot ne rassemble un consensus comparable à Pliny, Heady Topper ou la collaboration White IPA ; fabriquer un fondateur serait plus narratif que vrai.

La modification réelle tient au malt : Munich, crystal ou malts bruns apportent noix, pain et caramel, tandis que l’atténuation et le houblon empêchent la lourdeur. Si la torréfaction devient dominante, la Black IPA reprend le dossier ; si le houblon recule, l’American Brown Ale le récupère. La Brown IPA existe dans cet intervalle administratif et sensoriel, ce qui est déjà une raison suffisante.`,
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
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Brown IPA / Specialty IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2015",
          "reference": "2015 Specialty IPA — Brown IPA et première codification dans le référentiel",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2015/21/ipa/",
          "consultation": "2026-08-10"
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
      "description": "La Red IPA porte une robe rubis et une base de caramel sec ou de pain grillé, puis laisse l’amertume et le houblon reprendre le gouvernail. Plus maltée qu’une American IPA, plus sèche et plus houblonnée qu’une amber ale, elle organise un contraste plutôt qu’un coloriage. Sa catégorie vient surtout du brassage craft et de sa codification.",
      "histoireEtOrigines": `L’American Amber Ale fournit le parent malté ; l’American IPA fournit la force du houblon. Des brasseries américaines croisent naturellement ces profils sous des noms comme red ale, imperial red ou red IPA, sans qu’un premier exemple unique se détache de façon suffisamment documentée.

Le BJCP formalise Red IPA parmi les Specialty IPA en 2015. Comme pour Brown IPA, le guide reconnaît une pratique commerciale et offre une case de concours ; il ne fait pas apparaître le style au premier coup de sifflet. La catégorie reste poreuse avec les American Amber Ales les plus houblonnées.

La couleur provient généralement de crystal et de malts apportant pain grillé ou fruits secs, parfois d’une très petite quantité de malt plus sombre. L’erreur consiste à accumuler le caramel jusqu’à émousser l’amertume. Une Red IPA réussie garde une finale sèche et un houblon dominant : le rouge indique une architecture de malt, pas une autorisation de sucrer le paysage.`,
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
        "profilRecherche": "Une IPA rouge et sèche, à l’amertume ferme, où caramel et toast apportent profondeur sans prendre le dessus sur le houblon."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Red IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Red IPA / Specialty IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2015",
          "reference": "2015 Specialty IPA — Red IPA et première codification dans le référentiel",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2015/21/ipa/",
          "consultation": "2026-08-10"
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
      "description": "La Rye IPA remplace la rondeur par une tension céréalière. Le seigle ajoute pain noir, épice perçue et une texture parfois soyeuse ou presque huileuse ; le houblon apporte l’angle aromatique. Le grain ne contient pas une molécule de « poivre IPA » obligatoire : son effet dépend de la proportion, du maltage et du reste de la recette.",
      "histoireEtOrigines": `Le seigle connaît une histoire brassicole bien antérieure au craft américain, mais la Rye IPA moderne naît du goût des petites brasseries pour les grains alternatifs. Bear Republic Hop Rod Rye, commercialisée au début des années 2000 et revendiquée par la brasserie comme première Rye IPA américaine produite, devient un exemple influent. La revendication doit rester attribuée à la source : des bières au seigle fortement houblonnées ont pu précéder l’étiquette.

Le style propose une solution à l’uniformité de l’IPA sans changer seulement sa couleur. Le seigle apporte des bêta-glucanes qui modifient viscosité et filtration ; il peut suggérer pain, terre ou épice, tandis qu’une base sèche et un houblon américain évitent que le grain ne devienne pâteux. Le défi se trouve aussi dans la cuve-filtre : une proportion élevée ralentit l’écoulement, et les enveloppes de riz peuvent aider sans contribuer au goût.

Le BJCP intègre Rye IPA aux Specialty IPA en 2015, stabilisant une famille déjà commerciale. La catégorie ne prescrit ni pourcentage exact ni variété de houblon. Elle exige surtout que le seigle soit lisible et que la bière reste une IPA. Autrement, on a simplement rempli un formulaire avec beaucoup de céréales.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "Le seigle doit être identifiable par le grain et la texture, pas par une légende de poivre automatique. Sa proportion se choisit avec la filtration, l’atténuation et le poids du houblon.",
        "maltsEtCereales": [
          "Base pale accompagnée de malt de seigle ou de seigle floconné selon la texture et le goût recherchés.",
          "Les bêta-glucanes du seigle peuvent épaissir la filtration ; une proportion élevée demande une mouture, un palier éventuel et un lit filtrant adaptés.",
          "Les enveloppes de riz peuvent faciliter l’écoulement sans ajouter de saveur."
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
        "profilRecherche": "Une IPA sèche et aromatique traversée par le pain, la terre ou la tension céréalière du seigle, avec une texture présente mais jamais visqueuse."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Rye IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Rye IPA / Specialty IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CraftBeer.com / Bear Republic",
          "edition": null,
          "reference": "Hop Rod Rye — revendication de première Rye IPA américaine produite",
          "type": "source_de_brasserie_attribuee",
          "url": "https://www.craftbeer.com/news/beer-release/bear-republic-racer-x-and-hop-rod-rye",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BJCP",
          "edition": "2015",
          "reference": "2015 Specialty IPA — Rye IPA",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2015/21/ipa/",
          "consultation": "2026-08-10"
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
      "description": "La White IPA est née d’une collaboration explicite : le trouble, le blé et les épices d’une witbier rencontrent l’amertume et le houblon américain d’une IPA. Pâle, vive, citronnée et parfois poivrée, elle ne se résume pas à une IPA plus claire. Son identité vient du frottement entre levure belge, céréale et houblonnage — un mariage arrangé qui a réellement eu une date.",
      "histoireEtOrigines": `En 2011, Boulevard Brewing au Missouri et Deschutes Brewery en Oregon élaborent ensemble Collaboration No. 2 / Conflux No. 2. Les brasseurs Steven Pauwels et Larry Sidor veulent créer un style en mariant les caractéristiques d’une witbier belge et celles d’une American IPA. Les deux brasseries produisent la même recette dans leurs installations respectives, à plus de 2 500 kilomètres l’une de l’autre, puis commercialisent leurs versions la même année.

Cette collaboration constitue un pivot documenté, même si elle ne permet pas d’affirmer qu’aucune bière de blé houblonnée similaire n’avait jamais existé. Son importance tient à l’intention déclarée, au nom White IPA et à la diffusion : une invention revendiquée et immédiatement reproductible. D’autres brasseries adoptent la formule au début des années 2010 ; le BJCP l’intègre aux Specialty IPA en 2015.

La modification est profonde. Blé et parfois avoine construisent mousse, pâleur et texture ; une levure belge peut produire esters et phénols ; coriandre ou écorce d’agrume rappellent la witbier ; houblonnage tardif et amertume restent ceux d’une IPA. La difficulté est d’éviter que l’épice, la levure et le houblon se disputent la même note citronnée jusqu’à l’épuiser.

Sa popularité a ensuite diminué, mais l’histoire courte reste nette : problème créatif, collaboration, diffusion, codification. La White IPA prouve qu’une catégorie moderne peut avoir un acte de naissance assez précis sans prétendre que le monde n’avait jamais vu de blé ni de houblon avant la réunion.`,
      "chapitres": [
        {
          "titre": "Une recette, deux brasseries",
          "texte": `Boulevard apporte son expérience des ales belges ; Deschutes, celle des bières très houblonnées du Nord-Ouest. Chaque maison brasse sa version du projet commun, ce qui transforme la collaboration en expérience sur le rôle du matériel et du lieu.

Le style naît ainsi d’une question explicite : que devient une witbier lorsque l’architecture IPA prend le houblon en charge ? La réponse ne se contente pas d’être blanche ; elle possède une levure, une céréale et un procédé distincts.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "La recette doit conserver les deux parents : céréales, levure et éventuelles épices de witbier ; amertume et houblonnage tardif d’IPA. Si un seul parent parle, la collaboration a échoué.",
        "maltsEtCereales": [
          "Base Pilsner ou pale avec une part importante de blé ; avoine possible pour la texture et le trouble.",
          "Le grain cru ou floconné demande une conversion correcte et peut affecter filtration et mousse."
        ],
        "houblons": [
          "Houblons américains ou du Nouveau Monde à agrumes et fruits, choisis pour s’accorder avec coriandre et écorces d’agrumes.",
          "Amertume moyenne à forte, plus gros houblonnage tardif qu’une Witbier."
        ],
        "levuresEtMicroorganismes": [
          "Souche belge/witbier épicée ou souche plus neutre selon la version ; les phénols doivent rester intégrés au houblon."
        ],
        "ingredientsComplementaires": [
          "Coriandre et écorces d’agrumes possibles lorsque l’intention witbier les justifie ; doses contenues afin de ne pas doubler artificiellement les notes du houblon."
        ],
        "profilEau": "Faible alcalinité, sulfate modéré pour la sécheresse et chlorure suffisant pour soutenir le blé.",
        "empatage": "Infusion adaptée à une proportion importante de blé ; bonne fermentescibilité recherchée.",
        "ebullitionEtHoublonnage": "Amertume d’IPA, ajouts tardifs et dry-hop ; épices généralement ajoutées en fin d’ébullition ou au whirlpool avec prudence.",
        "fermentation": "Souche belge ou de witbier produisant esters et phénols mesurés. La conduite thermique doit éviter que girofle, solvant ou banane saturent un profil déjà chargé en houblon.",
        "maturation": "Courte ; un léger trouble est acceptable et la fraîcheur du houblon prime.",
        "profilRecherche": "Une IPA pâle et vive où blé, levure belge, épices éventuelles et houblon américain se distinguent puis se rejoignent."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: White IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "White IPA / Specialty IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Boulevard Brewing Company",
          "edition": null,
          "reference": "Collaboration No. 2 — création déclarée d’une White IPA avec Deschutes",
          "type": "source_primaire_historique",
          "url": "https://www.boulevard.com/collaboration-no-2/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewbound",
          "edition": "2011",
          "reference": "Deschutes and Boulevard collaborate on White IPA — lancement commercial de 2011",
          "type": "presse_professionnelle",
          "url": "https://www.brewbound.com/news/deschutes-brewery-and-boulevard-brewing-company-collaborate-on-white-ipa/",
          "consultation": "2026-08-10"
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
      "description": "La Brut IPA fut le champagne houblonné d’un moment : très pâle, effervescente, intensément aromatique et presque dépourvue de sucre résiduel. Son moteur n’est pas une couleur ni une région, mais une enzyme — l’amyloglucosidase — utilisée par Kim Sturdavant à San Francisco en 2017. Le style monta vite, traversa les continents, puis quitta l’affiche avec une élégance étonnamment appropriée.",
      "histoireEtOrigines": `Au Social Kitchen & Brewery de San Francisco, Kim Sturdavant utilise depuis plusieurs années une amyloglucosidase pour assécher une Triple IPA. À la fin de 2017, il applique l’enzyme à une IPA de force plus normale avec un objectif radical : éliminer presque tout sucre résiduel afin d’obtenir une bière légère en bouche, très pâle, effervescente et aromatique. La première version porte le nom Hop Champagne, puis « Brut IPA » s’impose par analogie avec le vin effervescent sec.

L’amyloglucosidase coupe des dextrines que les enzymes ordinaires de l’empâtage et la levure laisseraient autrement derrière elles. Les sucres ainsi libérés fermentent, abaissent la densité finale et augmentent l’atténuation. Le procédé n’est pas inventé pour cette bière — il est employé dans d’autres productions, notamment les bières très fortes ou allégées — mais Sturdavant en fait le principe esthétique d’un style.

La diffusion est fulgurante. Sturdavant partage ouvertement sa méthode avec les brasseurs de la baie ; les versions se multiplient en 2018 aux États-Unis puis à l’étranger. Houblonnage tardif, faible amertume perçue et forte carbonatation cherchent à préserver le parfum sans épaissir la bouche. La réussite exige toutefois de doser l’enzyme et de laisser la fermentation s’achever : une activité résiduelle mal maîtrisée peut créer suratténuation et surcarbonatation.

La mode recule presque aussi vite, prise entre la douceur tactile des Hazy IPA et le retour de profils West Coast plus familiers. La Brut IPA ne disparaît pas totalement, mais elle perd son omniprésence dès le début des années 2020. Sa brièveté n’est pas un échec encyclopédique : elle montre comment une innovation de procédé, un nom mémorable et le réseau craft peuvent fabriquer une catégorie mondiale en quelques mois — puis la rendre historique avant même que ses affiches aient jauni.`,
      "chapitres": [
        {
          "titre": "Une enzyme retire le plancher",
          "texte": `L’amyloglucosidase hydrolyse notamment les liaisons qui maintiennent des dextrines hors de portée de la levure. En rendant ces glucides fermentescibles, elle fait descendre la densité finale vers des valeurs extrêmement basses.

Le résultat n’est pas seulement « sec » au sens gustatif : la structure même du corps change. L’arôme de houblon doit alors occuper un espace où malt et sucre ne fournissent presque aucun coussin. La Brut IPA est une innovation par soustraction.`
        },
        {
          "titre": "Ascension, saturation, reflux",
          "texte": `Le partage de la méthode accélère l’adoption en 2018. Festivals, presse spécialisée et collaborations font du style une expérience presque obligatoire ; cette vitesse réduit aussi la durée de la nouveauté.

Lorsque le public se tourne vers d’autres textures, la Brut IPA perd son avantage distinctif. Son cycle rappelle qu’une catégorie peut être historiquement importante sans devenir permanente. Certaines étoiles filantes éclairent surtout la mécanique du ciel.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "L’amyloglucosidase est constitutive : elle rend fermentescibles des dextrines et permet une densité finale extrêmement basse. Son emploi exige contrôle de l’atténuation et de la stabilité, pas une simple dose copiée.",
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
          "Amyloglucosidase ajoutée selon le produit et le procédé, à l’empâtage ou en fermentation ; suivre les spécifications du fabricant et vérifier la densité finale.",
          "Sucres simples ou céréales très pâles possibles pour alléger encore couleur et corps, sans obligation."
        ],
        "profilEau": "Faible alcalinité ; sulfate à employer avec prudence car une bière extrêmement sèche amplifie la perception d’amertume et de dureté.",
        "empatage": "Empâtage orienté vers la fermentescibilité. L’enzyme peut poursuivre l’hydrolyse au-delà du travail des amylases du malt ; température, pH et moment d’ajout modifient son activité.",
        "ebullitionEtHoublonnage": "Amertume volontairement limitée ; houblons principalement tardifs, whirlpool et dry-hop.",
        "fermentation": "Levure neutre et atténuante, conduite jusqu’à stabilité réelle de la densité. Une enzyme encore active et une mise en bouteille prématurée créent un risque de surcarbonatation.",
        "maturation": "Très courte, avec carbonatation élevée mais calculée et protection contre l’oxygène. La sécheresse extrême ne protège ni les arômes de houblon ni la stabilité du conditionnement.",
        "profilRecherche": "Une IPA presque sans sucre résiduel, pâle, effervescente et parfumée, dont la légèreté de bouche contraste avec l’intensité aromatique."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "21B Specialty IPA: Brut IPA — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/21B/specialty-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "American Homebrewers Association",
          "edition": null,
          "reference": "Brut IPA Style Description 1.0 — glucoamylase, très forte atténuation et attribution à Kim Sturdavant",
          "type": "histoire_et_technique",
          "url": "https://www.homebrewersassociation.org/how-to-brew/brut-ipa-style-description-1-0/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Brut IPA / Specialty IPA context — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "BeerAdvocate / Kim Sturdavant",
          "edition": null,
          "reference": "Creating the Brut IPA — enzyme, premiers essais et chronologie de 2017",
          "type": "entretien_primaire",
          "url": "https://www.beeradvocate.com/articles/18074/kim-sturdavant-brewmaster-at-social-kitchen-brewery-on-creating-the-brut-ipa/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "CraftBeer.com",
          "edition": null,
          "reference": "The Birth of the Brut IPA — méthode et diffusion depuis Social Kitchen",
          "type": "presse_professionnelle",
          "url": "https://www.craftbeer.com/featured-brewery/social-kitchen-birth-brut-ipa",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Good Beer Hunting",
          "edition": null,
          "reference": "EP-191 Kim Sturdavant — contexte, partage de la méthode et réception du style",
          "type": "entretien_primaire",
          "url": "https://www.goodbeerhunting.com/gbh-podcast/2018/10/12/ep-191-kim-sturdavant-of-social-kitchen-and-brewery",
          "consultation": "2026-08-10"
        }
      ]
    }
  ]
};

export default collection;
