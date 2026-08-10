// Source canonique de la collection : taxonomie + contenu encyclopédique.
// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 1,
    "slug": "lagers-et-fermentations-basses",
    "nom": "Lagers et fermentations basses"
  },
  "cartes": [
    {
      "id": "lager",
      "nom": "Lager",
      "collectionId": 1,
      "nature": "F",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Europe centrale puis diffusion mondiale",
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "« Lager » nomme une immense famille née du froid, pas une blonde unique. Fermentation basse et maturation fraîche donnent un profil net où malt et houblon restent lisibles. De la Leichtbier gracile à l’Eisbock capiteuse, la robe peut être paille, cuivre ou noire : le fil rouge est une précision tranquille, avec très peu de maquillage pour cacher un faux pas.",
      "histoireEtOrigines": `Le mot « lager » ne décrit pas d’abord une couleur ou une intensité aromatique : il vient de l’allemand lagern, « entreposer ». Bien avant la maîtrise microbiologique de la fermentation, les brasseurs d’Europe centrale avaient compris l’intérêt d’une fermentation et surtout d’une garde au froid, dans des caves, des celliers ou des galeries où la température restait basse. Ces pratiques ont progressivement favorisé des levures capables de travailler à plus basse température et de sédimenter fortement. La famille moderne des levures lager appartient principalement à Saccharomyces pastorianus, un hybride dont l’histoire biologique est plus complexe que le récit simplifié d’une « invention » unique de la fermentation basse.

La révolution du XIXe siècle est autant technique que stylistique. Le développement de malts plus pâles, l’amélioration des systèmes de refroidissement, puis la réfrigération mécanique rendent possible une production régulière indépendamment des saisons. En 1883, au laboratoire Carlsberg, Emil Christian Hansen met au point l’emploi industriel d’une culture pure de levure de fermentation basse. Cette avancée améliore radicalement la reproductibilité et limite les altérations liées aux levures sauvages. Carlsberg partage ensuite cette méthode avec d’autres brasseries, contribuant à standardiser la fermentation lager à grande échelle.

À partir de là, la lager cesse d’être une spécialité régionale pour devenir la grande infrastructure du brassage mondial. Pilsner, Helles, Dunkel, Schwarzbier, Vienna Lager, Bock ou grandes lagers internationales peuvent être très différentes, mais partagent une logique : fermentation très maîtrisée, profil généralement plus net que les ales expressives, puis maturation froide destinée à clarifier, arrondir et stabiliser la bière. La domination commerciale des lagers au XXe siècle a parfois réduit le mot à l’image d’une bière blonde légère ; historiquement et techniquement, la famille est beaucoup plus vaste, allant de la Leichtbier à moins de 4 % jusqu’à l’Eisbock dépassant largement 10 %.`,
      "chapitres": [
        {
          "titre": "Avant la machine, une géographie du froid",
          "texte": `Le premier équipement d’une lager n’est pas une cuve brillante mais un endroit frais. Caves creusées, galeries, celliers et blocs de glace récoltés l’hiver permettent de ralentir la fermentation, de conserver les fûts et de laisser les particules se déposer. La production dépend alors du climat, de la profondeur du sous-sol et d’un calendrier : le froid est une ressource que l’on stocke autant que la bière.

Cette contrainte explique le verbe allemand lagern, entreposer, mais elle n’autorise pas à dater en un jour la « naissance » de la fermentation basse. Des pratiques fraîches et des populations de levures adaptées se sélectionnent progressivement. La cave ne connaît pas encore Saccharomyces pastorianus par son nom latin ; elle connaît très bien, en revanche, le prix d’un hiver trop doux.`
        },
        {
          "titre": "Quand le froid devient une machine",
          "texte": `Au XIXe siècle, les machines frigorifiques mises au point et industrialisées notamment par Carl von Linde changent l’échelle du problème. Les brasseries comptent parmi les premiers grands utilisateurs : refroidir ne dépend plus seulement d’un étang gelé ou d’une cave favorable. Fermentations, garde et expéditions deviennent plus régulières, y compris pendant les mois chauds.

La bouteille, le rail et les wagons isolés élargissent ensuite le rayon commercial. Le froid cesse d’être seulement un lieu ; il devient une chaîne. Cette infrastructure permet aux lagers pâles de voyager avec une stabilité et une apparence que les marchés industriels du tournant du XXe siècle savent transformer en argument mondial.`
        },
        {
          "titre": "Une levure hybride, pas un inventeur solitaire",
          "texte": `La levure lager moderne, Saccharomyces pastorianus, est un hybride entre S. cerevisiae et S. eubayanus. Le lieu, la date et le scénario exacts de cette hybridation restent étudiés : une publication de 2023 propose un épisode munichois au début du XVIIe siècle, mais il s’agit d’une hypothèse historique et génomique, non d’un acte de naissance retrouvé dans un registre.

Un jalon beaucoup plus solidement documenté arrive en 1883. Au laboratoire Carlsberg, Emil Christian Hansen isole et déploie une culture pure de levure basse, puis la méthode est partagée. Les brasseurs n’inventent pas la levure ce jour-là ; ils apprennent à reproduire une lignée au lieu d’inviter toute la parenté microbienne.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La lager est une famille de fermentation et de maturation, non une recette. Les paramètres ci-dessous décrivent les principes communs ; la composition exacte dépend entièrement du sous-style.",
        "maltsEtCereales": [
          "Base possible en malt Pilsner très pâle, Vienna ou Munich selon que l’on recherche finesse céréalière, toasté ou profondeur maltée.",
          "Riz, maïs ou autres céréales non maltées peuvent être légitimes dans certaines traditions internationales ou américaines ; ils ne sont pas un marqueur universel de lager.",
          "Les lagers sombres utilisent des malts plus colorés, parfois des malts torréfiés désamérisés en faible proportion pour apporter la couleur sans dureté brûlée."
        ],
        "houblons": [
          "Houblons nobles ou apparentés dans de nombreuses traditions européennes : Saaz, Hallertau, Tettnang, Spalt et variétés modernes de même registre.",
          "Les familles contemporaines peuvent employer des houblons américains, néo-zélandais ou autres avec houblonnage tardif et à cru ; ce n’est donc pas un trait universel."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces pastorianus est la référence moderne de la fermentation lager.",
          "Des souches neutres et fortement atténuantes sont recherchées ; les profils techniques modernes se situent souvent autour de 10–15 °C pour une conduite traditionnelle, mais certaines souches tolèrent des plages plus larges."
        ],
        "ingredientsComplementaires": [
          "Aucun ingrédient complémentaire n’est requis par la famille ; sucres, céréales crues ou procédés particuliers dépendent du style et de la tradition locale."
        ],
        "profilEau": "Du très doux profil de Plzeň aux eaux plus minérales de Dortmund, il n’existe pas une « eau de lager ». L’eau est au contraire un levier majeur de différenciation : sulfate, chlorure, alcalinité et dureté modifient la perception du houblon, du malt et de la sécheresse.",
        "empatage": "Infusion simple, paliers ou décoctions sont tous possibles. Les décoctions sont historiquement liées à plusieurs traditions d’Europe centrale ; les procédés modernes peuvent atteindre des objectifs similaires avec des malts plus réguliers et un contrôle précis du pH et des températures.",
        "ebullitionEtHoublonnage": "La plupart des lagers classiques privilégient une ébullition franche et un houblonnage lisible mais maîtrisé. Le niveau va de presque imperceptible dans une light lager à très structurant dans une Pils allemande ou une Czech Premium Pale Lager.",
        "fermentation": "Ensemencement généreux, oxygénation correcte et contrôle thermique sont essentiels. Une phase de fermentation fraîche est suivie d’une gestion du diacétyle et des composés soufrés adaptée à la souche et au procédé.",
        "maturation": "Le lagering est une maturation froide après fermentation. Sa durée varie fortement : quelques semaines dans des procédés modernes efficaces, davantage pour certaines productions traditionnelles ou fortes. L’objectif est la netteté, la stabilité, la clarification et l’intégration aromatique, pas une durée symbolique imposée.",
        "profilRecherche": "Une fermentation propre et précise dont la discrétion laisse parler le malt, le houblon et le sous-style choisi."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Lager styles — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Carlsberg Research Laboratory",
          "edition": null,
          "reference": "Emil C. Hansen and the first production-scale pure bottom-fermenting yeast culture, 1883",
          "type": "histoire_des_techniques",
          "url": "https://carlsberggroup.com/pursuit-of-better/scientific-discoveries/purifying-yeast/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "FEMS Yeast Research / Oxford University Press",
          "edition": "2023",
          "reference": "A new hypothesis for the origin of the lager yeast Saccharomyces pastorianus",
          "type": "publication_scientifique",
          "url": "https://academic.oup.com/femsyr/article/doi/10.1093/femsyr/foad023/7142826",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "University of Chicago Library",
          "edition": null,
          "reference": "Something’s Brewing — Refrigeration, natural ice and industrial lager production",
          "type": "histoire_des_techniques",
          "url": "https://www.lib.uchicago.edu/collex/exhibits/somethings-brewing/brewing-technology/refrigeration/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Science History Institute",
          "edition": null,
          "reference": "Carl von Linde — mechanical refrigeration and brewing",
          "type": "biographie_scientifique",
          "url": "https://www.sciencehistory.org/education/scientific-biographies/carl-von-linde/",
          "consultation": "2026-08-10"
        }
      ]
    },
    {
      "id": "pilsner",
      "nom": "Pilsner",
      "collectionId": 1,
      "nature": "F",
      "parentPrincipalId": "lager",
      "aliases": [
        "Pils"
      ],
      "paysOrigine": [
        "Tchéquie",
        "Allemagne",
        "International"
      ],
      "origine": {
        "libelle": "Plzeň puis Europe et monde",
        "ville": "Plzeň",
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "Née à Plzeň en 1842, la Pilsner fait entrer la lager dans la lumière : or limpide, mousse blanche, céréale fine et houblon floral ou épicé. Son amertume allonge la gorgée tandis qu’une fermentation très propre laisse chaque détail à découvert. Cette blonde devenue mondiale paraît évidente aujourd’hui ; au milieu des bières brunes du XIXe siècle, elle avait l’éclat d’une vitrine neuve.",
      "histoireEtOrigines": `La Pilsner naît à Plzeň, en Bohême, dans un contexte de réforme brassicole. Au début des années 1840, les bourgeois détenteurs du droit de brassage souhaitent améliorer la qualité des bières locales et font construire une nouvelle brasserie. Le Bavarois Josef Groll est engagé comme maître brasseur. Le 5 octobre 1842, il brasse la bière qui sera servie pour la première fois en novembre et deviendra le prototype de la lager dorée moderne. Son succès repose moins sur un ingrédient miraculeux que sur la convergence de plusieurs progrès : fermentation basse bavaroise, maltage suffisamment doux pour produire un malt pâle, eau très douce de Plzeň, houblon aromatique de Žatec/Saaz et installations adaptées à la garde froide.

L’expression « première lager pâle » reste à manier avec prudence : des lagers claires ont probablement existé auparavant et l’évolution des techniques anglaises de maltage joue un rôle dans la disponibilité de malts plus pâles. Mais la bière de Plzeň est bien le modèle qui donne au mot Pilsner sa portée mondiale. Sa couleur dorée et sa limpidité arrivent au moment où la verrerie, les transports et l’industrialisation permettent à l’apparence même de la bière de devenir un argument de séduction.

La Pilsner se ramifie ensuite. La tradition tchèque conserve une rondeur maltée, une amertume très présente mais douce et l’usage des houblons tchèques. Les interprétations allemandes deviennent généralement plus sèches et plus tranchantes. Les versions internationales simplifient parfois le profil, tandis que les scènes craft italienne et américaine réintroduisent des houblonnages tardifs ou à cru. Parler de « Pilsner » comme d’une recette unique est donc trompeur : il s’agit d’une famille issue d’un événement fondateur très précis mais développée ensuite en plusieurs écoles.

Pilsner Urquell demeure un témoin technique exceptionnel de la tradition de Plzeň : la brasserie revendique encore le malt d’orge tchèque, le houblon Saaz, l’eau locale très douce et une triple décoction, suivis d’une fermentation puis d’une maturation prolongée. Ces éléments expliquent l’architecture historique du style tout en restant propres à son berceau, pas à chaque Pilsner brassée depuis.`,
      "chapitres": [
        {
          "titre": "Une ville commande une rupture",
          "texte": `Plzeň ne reçoit pas sa bière dorée par accident. Les bourgeois détenteurs du droit de brassage financent une nouvelle brasserie municipale et cherchent au-delà de la Bohême les compétences nécessaires à une fermentation basse régulière. Bâtiment, caves, matières premières et recrutement répondent à un problème collectif de qualité : la ville réorganise son outil avant que Josef Groll ne remplisse la première cuve.

Le 5 octobre 1842 fournit la date du premier brassin documenté. La dégustation publique suit en novembre. La cause importe autant que le calendrier : techniques bavaroises, eau locale très douce, houblon de Žatec et malt pâle convergent dans un équipement conçu pour eux. Une date isolée fait une étiquette ; cette convergence fait une révolution.`
        },
        {
          "titre": "Josef Groll, un contrat court et une ombre longue",
          "texte": `Groll n’est ni un alchimiste tombé du ciel ni le propriétaire de la brasserie. Ce maître brasseur bavarois apporte une pratique de la fermentation basse dans un projet préparé par la ville. Les sources municipales de Plzeň indiquent que son engagement ne dure que trois ans avant son retour à Vilshofen. Son passage est bref ; le modèle qu’il aide à mettre en place échappe presque aussitôt à sa biographie.

Le récit héroïque d’un inventeur unique simplifie donc une œuvre collective, mais effacer Groll serait tout aussi faux. Il demeure le brasseur identifié du brassin fondateur, au point précis où une décision municipale, un procédé importé et des ressources bohémiennes prennent ensemble le nom de Pilsner.`
        },
        {
          "titre": "Le nom quitte Plzeň",
          "texte": `La bière originale gagne Prague puis des marchés plus lointains ; les imitations multiplient bientôt Pils, Pilsener et Pilsner. L’Allemagne accentue généralement sécheresse et amertume, tandis que la tradition tchèque conserve davantage de rondeur. L’industrie internationale réduit parfois les contrastes ; le craft italien puis américain remet le parfum de houblon au premier plan.

Ce succès crée un paradoxe durable : Pilsner désigne à la fois une origine très précise et une famille devenue presque sans frontières. « Urquell », source originelle en allemand, sert justement à distinguer la bière de Plzeň au milieu de ses innombrables descendantes.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Pilsner recouvre plusieurs écoles — tchèque, allemande, internationale et contemporaines. La base technique commune est une lager pâle où malt et houblon restent lisibles, mais leur équilibre change fortement.",
        "maltsEtCereales": [
          "Malt Pilsner comme base dominante ; les versions traditionnelles cherchent un caractère de céréale, de pain clair et parfois de miel très léger plutôt qu’une neutralité totale.",
          "Les versions tchèques peuvent obtenir davantage de profondeur par le maltage local et la décoction ; les versions internationales peuvent intégrer des céréales adjointes."
        ],
        "houblons": [
          "Saaz/Žatec pour l’école tchèque ; Hallertau, Tettnang, Spalt et autres houblons nobles ou apparentés dans l’école allemande.",
          "Les interprétations contemporaines peuvent employer des variétés modernes, mais une Pilsner reste généralement plus nette et structurée qu’une IPA."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre, avec bonne atténuation et capacité à produire un profil net après maturation froide."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "L’école tchèque classique est associée à une eau très pauvre en sulfate et carbonate, donnant une amertume étonnamment ronde malgré un houblonnage élevé. Les Pils allemandes peuvent supporter un profil plus minéral, souvent plus sec dans la perception.",
        "empatage": "Infusion ou paliers modernes ; décoction simple, double ou triple dans certaines traditions. Pilsner Urquell conserve une triple décoction, mais celle-ci n’est pas une condition nécessaire à toute Pilsner.",
        "ebullitionEtHoublonnage": "Amertume de fond clairement construite, puis ajouts aromatiques adaptés à l’école. Les Pils classiques privilégient généralement le houblonnage en chaudière ; les versions italiennes et certaines craft ajoutent un houblonnage à cru.",
        "fermentation": "Fermentation basse avec profil propre. Les températures et la durée dépendent de la souche ; l’objectif est de limiter les esters et le diacétyle indésirables tout en conservant éventuellement la signature légère admise dans certaines lagers tchèques.",
        "maturation": "Lagering suffisamment long pour clarifier et intégrer le soufre, le malt et l’amertume. Une garde trop longue après un houblonnage à cru peut en revanche diminuer les arômes recherchés dans les variantes modernes.",
        "profilRecherche": "Une lager dorée précise et lumineuse, avec un vrai goût de malt pâle et une amertume ou un parfum de houblon clairement assumés selon l’école."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Pilsener families — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Czech and German Pilsner families — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/3/czech-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Pilsner Urquell",
          "edition": null,
          "reference": "Plzeň 1842, Josef Groll, Czech ingredients and traditional triple decoction",
          "type": "source_primaire_historique",
          "url": "https://www.prazdroj.cz/nas-pribeh/historie",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Pilsner Urquell",
          "edition": null,
          "reference": "Traditional brewing process: triple decoction, Saaz hopping, fermentation and maturation",
          "type": "source_primaire_technique",
          "url": "https://www.pilsnerurquell.com/at/stories/der-brauprozess/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Ville de Plzeň",
          "edition": "2013",
          "reference": "Josef Groll, son engagement à Plzeň et le brassin du 5 octobre 1842",
          "type": "histoire_locale",
          "url": "https://plzen.eu/o-meste/aktuality/aktuality-z-mesta/pred-200-lety-se-narodil-sladek-groll-jehoz-pivo-se-vyrazne-zapsalo-do-dejin-piva-a-dejin-plzne/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Český rozhlas Plzeň",
          "edition": "2022",
          "reference": "První spodně kvašený ležák uvařili v Plzni před 180 lety",
          "type": "histoire_locale",
          "url": "https://plzen.rozhlas.cz/prvni-spodne-kvaseny-lezak-uvarili-v-plzni-pred-180-lety-8841159",
          "consultation": "2026-08-10"
        }
      ]
    },
    {
      "id": "hoppy-lager",
      "nom": "Hoppy Lager",
      "collectionId": 1,
      "nature": "F",
      "parentPrincipalId": "lager",
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "Fleurs, herbes, agrumes, résine ou fruits tropicaux jaillissent sur le fond clair de la Hoppy Lager. Cette famille craft confie le premier rôle au houblon, puis utilise la fermentation basse pour garder un corps sec et une finale nerveuse. L’intérêt du contraste tient à sa netteté : le bouquet peut parler fort, mais la bière conserve la silhouette fraîche et précise d’une lager.",
      "histoireEtOrigines": `« Hoppy Lager » est une famille contemporaine plus qu’un style historique figé. L’idée consiste à conserver la fermentation basse, la sécheresse et la netteté d’une lager tout en poussant le houblon au premier plan. Ce terrain existait déjà dans les Pilsners les plus aromatiques, mais la révolution des houblons modernes et la culture craft ont élargi le vocabulaire : dry-hopping inspiré de l’Italian Pilsner, intensité américaine de l’India Pale Lager, profils résineux ou tropicaux des West Coast Pilsners, et nombreuses lagers de brasserie difficiles à enfermer dans une catégorie unique.

La famille devient particulièrement visible lorsque les brasseurs artisanaux, longtemps concentrés sur les ales et les IPA, reviennent aux fermentations basses. La lager est alors utilisée comme une toile de fond très propre : moins d’esters de levure, moins de sucrosité résiduelle, plus d’espace pour percevoir les variétés de houblon et la précision de l’amertume. Les classifications contemporaines reconnaissent aujourd’hui plusieurs de ces branches séparément, notamment Italian-Style Pilsener, American-Style India Pale Lager et West Coast-Style Pilsener.

La limite stylistique est importante : si le corps devient épais, si la fermentation paraît fruitée ou si le houblonnage masque totalement la structure lager, on se rapproche davantage d’une IPA fermentée proprement que d’une Hoppy Lager. La meilleure version conserve deux lectures simultanées : le parfum du houblon au premier plan et, dessous, une bière froide, sèche, nette et désaltérante.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille volontairement large : le niveau d’alcool, l’amertume et les variétés de houblon changent selon Italian Pilsner, IPL, West Coast Pilsner ou interprétation maison.",
        "maltsEtCereales": [
          "Malt Pilsner ou pale très clair comme base ; éventuel appoint de Vienna ou de malt dextrinique très mesuré pour soutenir le houblon sans épaissir la bière."
        ],
        "houblons": [
          "Houblons nobles et continentaux pour les variantes italiennes ; variétés américaines, néo-zélandaises ou modernes pour les interprétations plus intenses.",
          "Ajouts tardifs et whirlpool fréquents ; dry-hopping courant mais dosé pour préserver la netteté et limiter la matière végétale."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre et atténuante ; certaines interprétations contemporaines utilisent une souche très propre conduite plus chaud, mais le résultat sensoriel doit garder la netteté d’une lager."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Plutôt pauvre en alcalinité. Un rapport sulfate/chlorure modérément orienté vers le sulfate peut accentuer la sécheresse et la netteté de l’amertume, sans aller jusqu’à la dureté de certaines IPA.",
        "empatage": "Empâtage visant une bonne fermentescibilité et un corps léger à moyen-léger.",
        "ebullitionEtHoublonnage": "Construire d’abord une amertume propre, puis superposer les arômes tardifs. Le houblonnage à cru doit signer la bière sans apporter de brûlure végétale ni de trouble massif si le sous-style vise la limpidité.",
        "fermentation": "Fermentation basse propre, puis gestion soigneuse du diacétyle avant le dry-hop et le froid.",
        "maturation": "Maturation plus courte que sur certaines lagers classiques lorsque la fraîcheur du houblon est prioritaire ; conditionnement avec limitation stricte de l’oxygène.",
        "profilRecherche": "Le parfum d’une bière houblonnée moderne avec la sécheresse, la netteté et la buvabilité d’une lager."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Italian-Style Pilsener, American-Style India Pale Lager and West Coast-Style Pilsener — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Birrificio Italiano",
          "edition": null,
          "reference": "Tipopils — born in 1996, reference point for Italian-style dry-hopped Pilsner",
          "type": "source_primaire_historique",
          "url": "https://www.birrificio.it/en/tipopils",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "bock",
      "nom": "Bock",
      "collectionId": 1,
      "nature": "F",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Einbeck et Bavière",
        "ville": null,
        "region": "Bavière",
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "D’Einbeck à la Bavière, la famille Bock voyage avant de se ramifier en lagers fortes. Pain, croûte, miel sombre et parfois fruits secs forment un malt ample, soutenu par une chaleur d’alcool lisse. Du Helles Bock lumineux à l’Eisbock concentré, la puissance change d’échelle ; elle garde pour boussole la richesse du grain plutôt qu’une simple douceur sucrée.",
      "histoireEtOrigines": `La famille Bock plonge ses racines dans la ville hanséatique d’Einbeck, en Basse-Saxe. La brasserie d’Einbeck conserve une facture datée du 28 avril 1378 attestant la vente de bière vers Celle et décrit une culture brassicole où de nombreux citoyens possédaient le droit de brasser. La position commerciale d’Einbeck, reliée aux réseaux de la Hanse et aux routes de longue distance, favorise l’exportation d’une bière suffisamment robuste pour voyager. L’idée que le Bock serait simplement « une bière bavaroise forte » masque donc une première phase nord-allemande importante.

Au cours des siècles suivants, cette bière gagne la Bavière. Munich adapte progressivement la tradition aux pratiques locales de fermentation basse et aux malts bavarois. Le passage d’« Einbeck » à « Bock » est entouré de récits linguistiques et folkloriques ; le bouc, Bock en allemand, devient en tout cas l’emblème graphique durable de nombreuses bières de la famille. Il vaut mieux considérer l’étymologie populaire comme une tradition culturelle plutôt que comme un fait unique définitivement établi.

La famille moderne réunit plusieurs expressions. Le Dunkles ou Traditional Bock est sombre et profondément malté ; le Helles Bock/Maibock éclaircit la robe et augmente parfois la présence du houblon ; le Doppelbock pousse la densité et la richesse beaucoup plus loin ; l’Eisbock concentre encore une bière forte par congélation partielle. Leur fil commun n’est pas le caramel mais une forte expression du malt, une fermentation propre et une chaleur alcoolique intégrée. Les guides de styles insistent justement sur le fait qu’un Bock traditionnel peut être riche et doux sans devenir collant, et que les notes de pain, toast et fruits secs doivent venir de la matière maltée et de la conduite du brassage plutôt que d’une surcharge de malts caramel.`,
      "chapitres": [
        {
          "titre": "Einbeck brasse comme une ville",
          "texte": `Dans l’Einbeck historique, le droit de brasser appartient à de nombreuses maisons tandis que des installations communes structurent la production. Les autorités encadrent la qualité et le commerce ; la bière peut quitter la ville par les réseaux marchands de la Hanse. La facture de 1378 conservée par la tradition locale documente une vente vers Celle, mais pas encore une lager Bock au sens moderne.

Cette nuance protège la vraie richesse du dossier. Einbeck fournit une réputation, un commerce de bière forte et un nom qui voyage. La fermentation basse bavaroise et le profil malté aujourd’hui attendu se construisent plus tard : l’arbre possède bien des racines médiévales, pas des bouteilles médiévales miraculeusement conformes aux profils actuels.`
        },
        {
          "titre": "Le bouc n’est pas un certificat d’étymologie",
          "texte": `Une histoire célèbre fait venir à Munich un brasseur d’Einbeck en 1612, puis transforme la prononciation bavaroise d’« Ainpöckisch » en « ein Bock ». Les ressources touristiques d’Einbeck elles-mêmes rangent ce récit parmi les légendes. Le passage linguistique reste plausible dans ses grandes lignes, mais ses personnages, sa date et sa formule trop parfaite ne disposent pas tous du même niveau de preuve.

Le bouc a pourtant gagné : Bock signifie l’animal en allemand et les étiquettes l’ont adopté avec enthousiasme. Il constitue un emblème culturel vérifiable, même lorsque son acte de naissance linguistique refuse poliment de se présenter.`
        },
        {
          "titre": "Une famille, quatre façons de déplacer la force",
          "texte": `Le Traditional Bock concentre la profondeur dans les malts sombres ; le Helles Bock déplace la lumière et rend parfois le houblon plus visible. Le Doppelbock augmente la densité, la chaleur et le temps de garde. L’Eisbock ne pousse pas seulement la recette : il retire de l’eau gelée et concentre ce qui reste.

Ces branches méritent leurs noms parce que chacune change une cause technique — couleur du malt, densité du moût ou concentration par le froid — puis une conséquence sensorielle. Leur voyage commun mène d’Einbeck à Munich ; ensuite, chacune raconte comment la force choisit sa forme.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Bock est une famille. La couleur, le degré alcoolique et l’équilibre changent fortement entre Helles Bock, Dunkles Bock, Doppelbock et Eisbock.",
        "maltsEtCereales": [
          "Munich et Vienna forment le cœur des versions sombres ; le malt Pilsner prend davantage de place dans les Helles Bock.",
          "Les malts caramel peuvent intervenir en soutien, mais la complexité recherchée doit surtout venir des malts de base riches et des réactions de Maillard."
        ],
        "houblons": [
          "Houblons allemands ou nobles, généralement en soutien. Le Helles Bock peut montrer davantage de houblon que le Traditional Bock."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager saine et suffisamment tolérante à l’alcool pour terminer une fermentation de forte densité sans sucrosité excessive."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modérément minéral et alcalinité adaptée à la couleur. L’eau doit soutenir la rondeur maltée sans rendre la finale crayeuse ni l’amertume agressive.",
        "empatage": "Empâtage par paliers ou décoction possible. Une décoction peut renforcer pain, croûte et profondeur sans recourir à une forte dose de caramel malt.",
        "ebullitionEtHoublonnage": "Ébullition suffisamment vigoureuse pour concentrer un moût riche et éviter le DMS dans les versions riches en Pilsner. Houblonnage d’équilibre, rarement aromatique au premier plan.",
        "fermentation": "Ensemencement abondant et fermentation basse soigneuse sont encore plus critiques à forte densité. La levure doit rester propre et éviter alcools supérieurs brûlants ou sous-atténuation.",
        "maturation": "Lagering long fréquent, particulièrement utile pour intégrer alcool et malt. Les versions les plus fortes gagnent à être conditionnées avec patience.",
        "profilRecherche": "Puissance de malt, profondeur de pain et chaleur d’alcool fondue, sans sensation sirupeuse."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German Bock styles — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Bock family — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/9/strong-european-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Einbecker Brauerei",
          "edition": null,
          "reference": "Bock Story — Einbeck brewing trade and documented strong beer from 1378",
          "type": "source_primaire_historique",
          "url": "https://www.einbecker.de/echt-einbecker/bock-story",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Tourist-Information Einbeck",
          "edition": null,
          "reference": "Einbeck, ville de la Bock : droit de brassage, commerce hanséatique et récits légendaires",
          "type": "histoire_locale",
          "url": "https://www.einbeck-tourismus.de/en/bier",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Tourist-Information Einbeck",
          "edition": null,
          "reference": "Einbecker Bierpfad — le récit du brasseur de 1612 présenté comme légende",
          "type": "histoire_locale",
          "url": "https://www.einbeck-tourismus.de/poi/einbecker-bierpfad-fass-1-von-strengen-brauregeln-und-bayerischem-wissenserwerb",
          "consultation": "2026-08-10"
        }
      ]
    },
    {
      "id": "international-light-lager",
      "nom": "International Light Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
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
        "max": 4.2,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 5,
        "max": 15,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 3,
        "max": 8,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 6,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Chope légère"
        ]
      },
      "description": "Très pâle, légère en corps et vivement carbonatée, l’International Light Lager transforme la discrétion en cahier des charges mondial. Malt et houblon murmurent, la finale sèche appelle la gorgée suivante, le service frais accentue l’effet désaltérant. Sa neutralité semble facile jusqu’au premier défaut : dans un profil aussi dépouillé, une trace de beurre, de pomme verte ou de carton prend aussitôt le mégaphone.",
      "histoireEtOrigines": `L’International Light Lager n’est pas née dans une ville précise : c’est une conséquence de la mondialisation du modèle lager pâle. Au XXe siècle, les grandes brasseries perfectionnent la filtration, le contrôle microbiologique, la réfrigération, la carbonatation et la logistique froide. Elles peuvent ainsi produire des bières très pâles, stables, faiblement amères et extrêmement régulières sur des marchés très différents.

La catégorie « light » ajoute une contrainte de corps et souvent de calories. Selon les pays, le résultat peut venir d’une densité initiale plus basse, d’une fermentation plus poussée, d’un emploi d’adjoints très fermentescibles ou d’une combinaison de procédés. Le riz et le maïs ne sont pas obligatoires, mais ils sont courants dans plusieurs traditions parce qu’ils permettent d’alléger le goût de malt et la texture tout en fournissant des sucres fermentescibles.

La difficulté technique est inversement proportionnelle à l’intensité sensorielle : une bière très légère ne dispose d’aucun malt torréfié, houblon massif ou ester expressif pour masquer un défaut. Oxydation, diacétyle, acétaldéhyde, soufre mal géré ou eau déséquilibrée deviennent immédiatement perceptibles. Une bonne International Light Lager peut donc sembler simple tout en exigeant une maîtrise industrielle ou artisanale très fine.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt lager ou Pilsner pâle, souvent complété par riz, maïs ou autre source de sucres très fermentescibles pour alléger le corps."
        ],
        "houblons": [
          "Houblonnage très discret, surtout destiné à empêcher la bière de devenir sucrée."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre, bonne atténuation et faible production d’esters."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau plutôt douce et propre, sans minéralité agressive ; une faible alcalinité facilite une bière très pâle.",
        "empatage": "Empâtage orienté vers une forte fermentescibilité. Selon les céréales utilisées, une cuisson ou une préparation spécifique des adjoints peut être nécessaire.",
        "ebullitionEtHoublonnage": "Amertume basse, très peu d’arôme de houblon. La stabilité et la propreté du moût priment sur l’expression aromatique.",
        "fermentation": "Fermentation basse très propre, avec attention particulière au diacétyle et à l’acétaldéhyde car le profil ne pardonne aucun défaut.",
        "maturation": "Garde froide, clarification et carbonatation relativement élevée pour donner fraîcheur et netteté.",
        "profilRecherche": "Très légère, très nette et désaltérante, sans faux goût malgré une intensité aromatique volontairement faible."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "International Light Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "german-leichtbier",
      "nom": "German Leichtbier",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Allemagne",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 2.4,
        "max": 3.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 15,
        "max": 28,
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Seidel"
        ]
      },
      "description": "Réduire l’alcool et le corps sans effacer l’accent allemand : voilà le numéro d’équilibriste de la German Leichtbier. Une céréale pâle, un houblon floral ou herbacé et une amertume franche donnent du relief à cette bière très légère, sèche et pétillante. Elle ressemble moins à une lager diluée qu’à une miniature soigneusement proportionnée : peu de matière, certes, mais chaque gramme a reçu une mission.",
      "histoireEtOrigines": `Leichtbier signifie littéralement « bière légère ». Dans le paysage allemand, l’idée n’est pas de copier exactement l’American Light Lager mais de réduire l’alcool et le corps tout en conservant une identité de bière allemande : malt pâle perceptible, houblon noble lisible et fermentation propre. Les profils contemporains décrivent ainsi une bière très légère mais davantage houblonnée et structurée que les grandes light lagers internationales.

Le style moderne s’inscrit dans une longue culture européenne des bières de faible densité destinées à la consommation quotidienne, mais la catégorie actuelle est avant tout une définition contemporaine. Elle peut être vue comme l’exercice de précision ultime de la lager allemande : produire un verre réellement léger sans donner l’impression d’un moût dilué. Le faible alcool impose une construction attentive de la mousse, de la carbonatation et de l’amertume, car le manque de matière amplifie toute sensation aqueuse ou dure.

Contrairement à une Pils entière, la Leichtbier ne cherche pas une longue profondeur maltée. Elle conserve surtout les repères : céréale claire, légère note florale ou herbacée, amertume moyenne et finale sèche.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner allemand comme base ; éventuellement une petite part de malt plus riche pour soutenir la perception du corps sans augmenter excessivement la densité."
        ],
        "houblons": [
          "Houblons nobles allemands ou apparentés, à un niveau suffisamment présent pour donner une vraie structure."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre et bien atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité, minéralité modérée. Un peu de sulfate peut aider la finale sèche mais doit rester assez doux pour éviter une amertume râpeuse.",
        "empatage": "Empâtage très fermentescible, tout en préservant assez de protéines et de dextrines pour la mousse et la sensation en bouche.",
        "ebullitionEtHoublonnage": "Amertume plus présente que dans une light lager internationale ; arôme floral, herbacé ou épicé léger à moyen.",
        "fermentation": "Fermentation basse propre ; toute trace importante d’ester ou de diacétyle devient disproportionnée dans ce corps léger.",
        "maturation": "Garde froide suffisante pour une bière claire et nette, avec carbonatation vive.",
        "profilRecherche": "Une vraie lager allemande en miniature : légère en alcool, pas légère en précision."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Leichtbier — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "German Leichtbier — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/5/pale-bitter-european-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-light-lager",
      "nom": "American Light Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
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
        "min": 2.8,
        "max": 4.4,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 5,
        "max": 15,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 3,
        "max": 8,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 2,
        "temperatureMax": 5,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Shaker",
          "Chope"
        ]
      },
      "description": "Presque paille, minimale en corps et très carbonatée, l’American Light Lager pousse loin la logique de fraîcheur américaine. Son faible apport calorique a bâti une catégorie de masse dans les années 1970 ; céréale et amertume y restent furtives. Derrière le verre servi glacé se cache un exercice industriel impitoyable, car ici le moindre défaut arrive sur une scène entièrement vide.",
      "histoireEtOrigines": `L’American Light Lager est indissociable de l’histoire commerciale de la bière américaine de l’après-guerre, mais sa naissance ne se résume pas à un seul produit. Des bières dites « diet » ou allégées existaient déjà avant le succès national de Miller Lite. Ce que Miller transforme au milieu des années 1970, c’est la catégorie elle-même : une bière moins calorique cesse d’être un produit médicalisé ou marginal pour devenir un phénomène culturel de masse.

Molson Coors retrace le lancement de Lite sur plusieurs marchés pilotes à partir de 1973 puis son déploiement national en 1975. Le Smithsonian conserve un exemplaire de la canette et replace cette réussite dans une Amérique d’après-guerre de plus en plus attentive aux calories. Le design et la communication cherchent paradoxalement à éviter l’image d’un produit « de régime », d’où l’insistance sur le goût, le sport et une identité masculine très marquée dans les campagnes de l’époque.

D’un point de vue brassicole, le style pousse très loin la logique de la lager américaine : couleur très pâle, corps minimal, forte carbonatation, faible amertume et service très froid. Le résultat a longtemps été moqué par la scène craft, mais il représente un défi technique réel. Une bière aussi neutre et légère expose immédiatement le moindre défaut et exige une grande régularité de fermentation, de filtration, d’oxygène dissous et de conditionnement.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt d’orge pâle avec une proportion fréquente de riz ou maïs ; le but est de fournir des sucres fermentescibles avec peu de corps résiduel.",
          "Les formulations modernes peuvent être tout malt ou utiliser d’autres stratégies enzymatiques ; l’adjoint n’est donc pas obligatoire."
        ],
        "houblons": [
          "Très faible charge de houblon, généralement neutre, floral ou légèrement épicé."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager extrêmement propre, adaptée à une forte atténuation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Très douce et neutre, avec peu d’alcalinité et aucun caractère minéral agressif.",
        "empatage": "Empâtage favorisant la fermentescibilité maximale ; les céréales adjointes peuvent nécessiter gélatinisation ou traitement adapté selon leur forme.",
        "ebullitionEtHoublonnage": "Houblonnage minimal, surtout pour l’équilibre et la stabilité ; l’aromatique doit rester presque imperceptible.",
        "fermentation": "Fermentation basse propre et complète, avec repos de diacétyle si nécessaire et prévention stricte de l’acétaldéhyde.",
        "maturation": "Clarification poussée, garde froide et forte carbonatation ; conditionnement avec très faible oxygène dissous.",
        "profilRecherche": "Une bière très pâle et presque neutre, mais techniquement irréprochable, sèche, vive et rafraîchissante."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Light Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Light Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/1/1A/american-light-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Miller Lite beer can and the 1975 growth of the American light-beer category",
          "type": "source_museale_historique",
          "url": "https://americanhistory.si.edu/collections/object/nmah_1297773",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Molson Coors",
          "edition": null,
          "reference": "Origins and national rollout of Miller Lite, 1973–1975",
          "type": "source_primaire_historique",
          "url": "https://www.molsoncoorsblog.com/features/born-chicago-raised-milwaukee-new-look-origins-miller-lite",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "contemporary-american-light-lager",
      "nom": "Contemporary American Light Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
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
        "min": 2.8,
        "max": 4.4,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 5,
        "max": 15,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 3,
        "max": 8,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 2,
        "temperatureMax": 5,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Shaker",
          "Chope"
        ]
      },
      "description": "Un malt perceptible, un houblon subtil et parfois une robe allant jusqu’à l’ambre distinguent la Contemporary American Light Lager. Elle conserve le corps mince et les calories comptées de sa parente, puis entrouvre la porte aux ingrédients sans alourdir la gorgée. Cette catégorie récente de concours accueille les lagers légères qui refusent de confondre sobriété sensorielle et bouton « muet ».",
      "histoireEtOrigines": `La Contemporary American Light Lager est une catégorie récente qui reconnaît que la notion de « light lager » américaine ne se limite plus au modèle ultra-neutre des grandes marques historiques. Elle reste faible en calories et en corps, mais peut laisser davantage apparaître le malt ou le houblon.

Cette évolution accompagne deux mouvements : d’une part la recherche de bières plus légères en alcool ou en calories, d’autre part le retour des brasseries artisanales vers les lagers techniquement exigeantes. Les brasseurs peuvent donc conserver la buvabilité et la forte atténuation d’une light lager tout en employant des malts de meilleure expression, des houblons plus frais ou des procédés moins orientés vers la neutralisation totale du goût.

Le centre de gravité reste celui d’une lager légère, nette, peu amère et très accessible ; une intensité de Session IPA le déplacerait ailleurs. Le caractère supplémentaire est une nuance, pas un changement de catégorie.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner ou lager très pâle ; adjoints possibles mais non obligatoires, avec davantage de latitude pour préserver un léger goût de céréale."
        ],
        "houblons": [
          "Houblonnage faible à modéré, plus perceptible que dans l’American Light Lager traditionnelle mais sans domination aromatique."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre et atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau douce à modérément minérale, pensée pour une finale nette.",
        "empatage": "Forte fermentescibilité, mais la texture peut être légèrement plus présente que dans une light industrielle classique.",
        "ebullitionEtHoublonnage": "Amertume discrète ; un ajout tardif léger peut donner une signature florale, herbacée ou moderne.",
        "fermentation": "Fermentation propre et très maîtrisée.",
        "maturation": "Garde froide relativement courte à moyenne, clarification et carbonatation vive.",
        "profilRecherche": "La facilité d’une light lager avec un peu plus de matière et de personnalité, sans perdre la sécheresse."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Contemporary American-Style Light Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Molson Coors",
          "edition": null,
          "reference": "Origins and national rollout of Miller Lite, 1973–1975",
          "type": "source_primaire_historique",
          "url": "https://www.molsoncoorsblog.com/features/born-chicago-raised-milwaukee-new-look-origins-miller-lite",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "mexican-light-lager",
      "nom": "Mexican Light Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Mexique"
      ],
      "origine": {
        "libelle": "Mexique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3,
        "max": 4.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 5,
        "max": 18,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 3,
        "max": 10,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 6,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Chope"
        ]
      },
      "description": "Paille, aérienne, très pétillante et sèche, la Mexican Light Lager vise la fraîcheur immédiate. Une douceur de malt ou de maïs peut affleurer avant une amertume basse. Apparue comme catégorie allégée bien après l’industrialisation brassicole du Mexique, elle garde assez de céréale pour rester une bière, même lorsque le thermomètre lui conseille de parler très vite.",
      "histoireEtOrigines": `L’industrie mexicaine produit déjà des lagers pâles depuis plusieurs générations lorsque la branche « light » apparaît. Son moteur n’est plus l’installation initiale du froid ou du rail, mais une nouvelle segmentation du marché : conserver la fraîcheur familière de la lager nationale en diminuant calories, corps et parfois alcool.

HEINEKEN México présente Tecate Light, lancée en 1992, comme la première bière basse en calories du Mexique. Cette chronologie en fait une adaptation récente aux tendances de consommation allégée déjà puissantes en Amérique du Nord, plutôt qu’une survivance de la première industrialisation brassicole du pays.

Sensoriellement, la catégorie conserve le profil solaire et très désaltérant des lagers mexicaines pâles : céréale légère, faible amertume, forte carbonatation et service frais. Le maïs ou le riz peuvent participer à l’allègement du corps, mais aucune céréale particulière ne définit à elle seule le style. Les meilleures versions évitent l’impression d’eau gazeuse : une pointe de malt, une fermentation propre et une finale sèche suffisent à maintenir une identité de bière.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt lager pâle, souvent complété de maïs ou de riz selon la brasserie et l’objectif de corps."
        ],
        "houblons": [
          "Houblons à faible intensité, nobles ou neutres, utilisés surtout pour l’équilibre."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager très neutre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérément minérale, sans amertume minérale dure.",
        "empatage": "Très fermentescible pour limiter corps et calories ; gestion adaptée des céréales adjointes.",
        "ebullitionEtHoublonnage": "Amertume basse, arôme faible.",
        "fermentation": "Fermentation basse propre, visant un profil neutre et sec.",
        "maturation": "Garde froide, clarification forte et carbonatation vive.",
        "profilRecherche": "Lager mexicaine très légère, sèche, nette et fraîche, avec juste assez de céréale pour ne pas être vide."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Mexican-Style Light Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "HEINEKEN México",
          "edition": null,
          "reference": "History of Cervecería Cuauhtémoc and Mexican industrial brewing since 1890",
          "type": "source_primaire_historique",
          "url": "https://www.heinekenmexico.com/heineken-mexico",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Museo 135 / HEINEKEN México",
          "edition": null,
          "reference": "Chronologie de la brasserie de Monterrey et lancement de Tecate Light en 1992",
          "type": "source_museale",
          "url": "https://heinekenmexico.com/museo-135",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "international-pale-lager",
      "nom": "International Pale Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
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
        "min": 4.2,
        "max": 5.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 8,
        "max": 25,
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Chope"
        ]
      },
      "description": "Claire, dorée, propre et assez sèche, l’International Pale Lager est le grand langage commun de la bière blonde. Brasseries et matières premières changent d’un continent à l’autre ; malt discret, houblon retenu et lecture instantanée restent la destination. Sa singularité n’est pas un terroir, mais cette faculté industrielle à voyager loin tout en paraissant familière dès la première gorgée.",
      "histoireEtOrigines": `L’International Pale Lager est probablement l’un des styles les plus répandus et les moins attachés à une origine unique. Elle descend indirectement de la révolution Pilsner du XIXe siècle, mais son identité se construit surtout avec l’industrialisation mondiale du XXe : grandes cuves cylindro-coniques, filtration, pasteurisation ou stabilisation, réfrigération fiable, distribution longue distance et standardisation des matières premières.

Chaque pays a adapté le modèle à ses ressources et à son marché. Le maïs et le riz peuvent alléger le corps, mais certains exemples sont tout malt. Les houblons peuvent venir d’Europe, d’Amérique ou de productions locales, généralement avec une intensité faible. Ce qui unit la catégorie est moins une recette qu’une fonction : proposer une lager pâle, claire, fortement atténuée, modérément carbonatée à fortement carbonatée, facile à boire et suffisamment neutre pour être comprise dans des cultures de consommation très différentes.

Les classifications actuelles la séparent de l’American Lager par une intensité et une origine plus internationales, et d’une Pilsner par un caractère de houblon généralement beaucoup moins affirmé. C’est aussi une famille qui montre combien la notion de « style » peut être industrielle et culturelle : les bières qui s’y ressemblent ne partagent pas nécessairement une généalogie locale, mais convergent vers les mêmes objectifs de stabilité, fraîcheur et accessibilité.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt lager ou Pilsner ; maïs, riz ou sucres peuvent compléter la charge selon la tradition et le coût, sans être obligatoires."
        ],
        "houblons": [
          "Houblons doux, floraux, herbacés ou neutres à faible dose."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre, généralement choisie pour sa régularité et sa bonne atténuation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Plutôt neutre, faible à moyenne minéralité ; l’eau est souvent traitée pour obtenir un profil stable entre sites de production.",
        "empatage": "Empâtage favorisant une bière sèche et très fermentescible ; préparation spécifique des adjoints si nécessaire.",
        "ebullitionEtHoublonnage": "Amertume faible à moyenne-faible et peu d’arôme tardif.",
        "fermentation": "Fermentation basse propre et reproductible, souvent à grande échelle.",
        "maturation": "Lagering, clarification et stabilisation avant conditionnement ; forte attention à la durée de conservation.",
        "profilRecherche": "Une lager pâle équilibrée, propre et universellement accessible, avec plus de bière que de spectacle."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "International Pale Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/2/international-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "International pale lager categories — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "international-pilsner",
      "nom": "International Pilsner",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "pilsner",
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
        "min": 4.2,
        "max": 5.8,
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
        "min": 4,
        "max": 14,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Pokal"
        ]
      },
      "description": "Partie du modèle de Plzeň, l’International Pilsner en est la descendante voyageuse : blonde limpide, sèche, plus amère et houblonnée qu’une pale lager mondiale, sans reprendre exactement la rondeur tchèque ni le tranchant allemand. Eau, céréales et houblons locaux lui donnent des accents multiples. Pilsner fournit ici une grammaire commune ; chaque marché en prononce les consonnes à sa manière.",
      "histoireEtOrigines": `L’International-Style Pilsener est une lecture mondiale du modèle de Plzeň. Elle se situe entre la Pilsner européenne de tradition et l’International Pale Lager : plus de houblon, une amertume plus visible et un caractère malté plus précis que la lager internationale standard, mais sans obligation de reproduire le profil tchèque ou allemand.

Cette catégorie reflète l’expansion extrêmement rapide de l’idée Pilsner après 1842. Dans de nombreux pays, « Pils », « Pilsener » ou « Pilsner » devient un nom commercial autant qu’une référence stylistique. L’eau locale, les malts disponibles, les variétés de houblon, les adjoints et les attentes du marché produisent des interprétations différentes. Certaines sont très proches d’une German Pils, d’autres plus douces et plus internationales.

Une catégorie International-Style Pilsener distincte évite aujourd’hui de forcer toutes ces bières dans une définition tchèque ou allemande. Aucune « tradition internationale » unique ne se cache derrière l’étiquette : il s’agit d’une convergence autour d’une lager pâle et houblonnée, née de la diffusion mondiale du mot Pilsner. Le nom possède un berceau ; la catégorie, elle, possède surtout des correspondances.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner ou lager pâle ; adjoints possibles selon l’école nationale."
        ],
        "houblons": [
          "Houblon plus lisible que dans l’International Pale Lager, souvent d’inspiration noble mais pas nécessairement européen."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "De douce à modérément minérale ; suffisamment neutre pour laisser l’amertume nette.",
        "empatage": "Bonne fermentescibilité, corps léger à moyen-léger.",
        "ebullitionEtHoublonnage": "Amertume structurante et ajout aromatique modéré ; dry-hop généralement absent dans la définition classique.",
        "fermentation": "Fermentation basse nette, faibles esters et diacétyle non perceptible.",
        "maturation": "Garde froide jusqu’à limpidité et intégration de l’amertume.",
        "profilRecherche": "Une Pilsner internationale propre, sèche et houblonnée, moins liée à un terroir précis que ses cousines tchèque et allemande."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "International-Style Pilsener — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Pilsner Urquell",
          "edition": null,
          "reference": "Plzeň 1842, Josef Groll, Czech ingredients and traditional triple decoction",
          "type": "source_primaire_historique",
          "url": "https://live.pilsnerurquell.com/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "german-pilsner",
      "nom": "German Pilsner",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "pilsner",
      "aliases": [
        "German Pils"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Allemagne, notamment nord et centre",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.4,
        "max": 5.2,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 22,
        "max": 40,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 4,
        "max": 10,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Flûte Pilsner"
        ]
      },
      "description": "Plus pâle, plus sèche et plus tranchante que son ancêtre bohémienne, la German Pilsner aiguise l’héritage de Plzeň. Malt fin, houblon floral, herbacé ou épicé et amertume ferme construisent sa tension malgré les accents régionaux. Elle rafraîchit comme un trait tiré à la règle — à condition que l’eau, le soufre et l’amertume aient appris à la tenir sans frapper les doigts.",
      "histoireEtOrigines": `L’Allemagne adopte très tôt l’idée de la lager pâle venue de Bohême, mais la transforme selon ses matières premières, ses eaux et ses traditions régionales. Au lieu de copier exactement la rondeur de Plzeň, les brasseurs allemands développent progressivement une Pils plus sèche, plus claire et souvent plus tranchante. Le style finit par devenir l’une des grandes références nationales, particulièrement influente dans le nord et le centre du pays.

La German Pils est une lager pâle très atténuée où l’amertume et le houblon noble sont nettement présents. La dureté perçue peut varier : les versions du nord ont historiquement la réputation d’être plus sèches et plus amères, tandis que les exemples du sud peuvent paraître un peu plus doux. Cette tendance régionale ne forme toutefois pas une règle absolue ; les brasseries modernes ajustent leur eau et leurs recettes bien au-delà des contraintes géologiques historiques.

Un point essentiel distingue l’école allemande classique des nouvelles Pilsners aromatiques : le houblonnage tardif peut être prononcé, mais le dry-hopping n’est normalement pas le moteur du style. L’arôme doit rester noble, floral, herbacé ou épicé, avec une amertume ferme mais propre. La fermentation ne fournit pas le fruit : elle sert de cadre neutre à la tension entre malt Pilsner et houblon.`,
      "chapitres": [
        {
          "titre": "Radeberg adopte un modèle, puis défend un nom",
          "texte": `Fondée en 1872, la brasserie de Radeberg choisit explicitement le modèle de Pilsen pour produire une bière pâle en Saxe. Son histoire officielle documente ensuite un conflit autour du nom et l’adoption de « Radeberger Pilsner » à la fin du XIXe siècle. Cet exemple n’établit pas une première German Pils absolue ; il montre comment un lieu allemand transforme rapidement une origine bohémienne en identité commerciale propre.

La chronologie est celle d’une appropriation, pas d’une photocopie. Les brasseries allemandes ajustent l’eau, la fermentation, l’atténuation et le houblonnage jusqu’à faire de Pils un standard national dont la sécheresse devient la signature.`
        },
        {
          "titre": "Du nord au sud, une réputation plutôt qu’une frontière",
          "texte": `Les Pils du nord sont souvent décrites comme plus sèches, minérales et amères que celles du sud. Cette tendance possède une histoire de matières premières et de goûts régionaux, mais les traitements modernes de l’eau rendent toute carte rigide trompeuse. Une brasserie peut désormais corriger son profil minéral avec une précision dont un puits du XIXe siècle n’aurait pas osé rêver.

La mémoire utile reste sensorielle : l’école allemande place l’atténuation et l’amertume au centre, puis laisse varier leur accent. La géographie explique une partie du style ; elle ne remplace pas l’analyse du verre.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner allemand dominant, parfois avec une très faible part de malt plus riche pour soutenir la céréale."
        ],
        "houblons": [
          "Hallertau, Tettnang, Spalt ou variétés nobles/apparentées, avec une présence aromatique modérée à prononcée."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre, haute atténuation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité. Une minéralité modérée et davantage de sulfate que dans une Czech Pils peuvent accentuer la sécheresse, mais une eau excessivement dure rend l’amertume agressive.",
        "empatage": "Infusion ou paliers visant un moût très fermentescible. Décoction possible mais non nécessaire avec les malts modernes.",
        "ebullitionEtHoublonnage": "Amertume ferme dès le début de l’ébullition, puis houblon tardif noble. La définition classique ne repose pas sur le dry-hop.",
        "fermentation": "Fermentation basse propre, très peu d’esters ; diacétyle absent.",
        "maturation": "Lagering suffisant pour une limpidité brillante et une finale précise.",
        "profilRecherche": "Pils allemande pâle, sèche et nette, où l’amertume noble coupe sans devenir rêche."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Pilsener — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "German Pils — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/5/pale-bitter-european-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Radeberger Exportbierbrauerei",
          "edition": null,
          "reference": "Geschichte — fondation en 1872, modèle de Pilsen et adoption du nom Radeberger Pilsner",
          "type": "source_primaire_historique",
          "url": "https://www.radeberger.de/brauerei/geschichte/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Deutscher Brauer-Bund",
          "edition": null,
          "reference": "Pils — profil et place dans la culture brassicole allemande contemporaine",
          "type": "organisme_brassicole",
          "url": "https://brauer-bund.de/bier/pils/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "italian-pilsner",
      "nom": "Italian Pilsner",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "pilsner",
      "aliases": [],
      "paysOrigine": [
        "Italie"
      ],
      "origine": {
        "libelle": "Italie du Nord, diffusion internationale",
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
        "min": 25,
        "max": 45,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 5,
        "max": 12,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Flûte Pilsner"
        ]
      },
      "description": "Un houblonnage à cru mesuré parfume l’Italian Pilsner, généralement avec des variétés européennes. Fleurs, herbes, citron et épices flottent au-dessus d’un malt pâle délicat, avec une amertume nette et une buvabilité intacte. Tipopils, créée en 1996, lui a donné son archétype : assez de houblon pour ouvrir la fenêtre, pas au point d’emporter les meubles.",
      "histoireEtOrigines": `L’Italian Pilsner est l’un des rares styles brassicoles contemporains dont la généalogie puisse être reliée avec une assez grande précision à une bière emblématique : Tipopils, créée en 1996 par Birrificio Italiano à Limido Comasco. La brasserie présente elle-même Tipopils comme une Pilsner naturellement trouble, brassée avec du malt d’orge et des houblons européens, dont une partie est utilisée à froid. Cette combinaison — structure de Pils continentale, fermentation basse propre et houblonnage à cru très mesuré — devient progressivement un modèle observé puis imité hors d’Italie.

Il faut cependant éviter de réduire toute l’histoire à l’idée d’une « invention » isolée du dry-hopping sur lager : des pratiques de houblonnage à froid ou en garde sont bien plus anciennes dans l’histoire de la bière. La nouveauté de l’Italian Pilsner tient plutôt à la façon dont la scène craft italienne remet cette technique au service d’une Pils très sèche, très buvable et encore clairement européenne dans son langage aromatique. Le houblon doit apporter fleurs, herbes, épices, zeste ou agrumes fins sans donner l’impression d’une IPA blonde fermentée à froid.

Au XXIe siècle, le style se diffuse rapidement dans les brasseries artisanales européennes et nord-américaines, puis gagne une catégorie de compétition distincte. Cette formalisation ne signifie pas qu’il existe une recette italienne unique : certaines versions restent extrêmement proches d’une German Pils parfumée, d’autres poussent davantage l’aromatique. La constante est l’élégance : base sèche, amertume nette mais non brutale, houblon frais et profil de fermentation très propre.`,
      "chapitres": [
        {
          "titre": "Tipopils emprunte une idée aux caves anglaises",
          "texte": `Agostino Arioli brasse Tipopils en 1996 lors de la fondation de Birrificio Italiano. Dans les récits qu’il livre à la presse brassicole, l’idée du houblonnage à cru vient notamment de ses observations des ales anglaises en cask, puis s’applique à une Pils influencée par l’Allemagne. L’innovation procède donc d’un voyage entre traditions plutôt que d’une génération spontanée italienne.

La brasserie revendique Tipopils comme première Pilsner houblonnée à cru. Cette antériorité mondiale reste une affirmation de producteur difficile à démontrer pour toutes les lagers jamais brassées ; son rôle d’archétype de l’Italian Pilsner contemporaine est, lui, largement documenté et corroboré.`
        },
        {
          "titre": "Le houblon à froid modifie aussi la fermentation",
          "texte": `Ajouter du houblon après l’ébullition préserve des huiles aromatiques, mais peut aussi introduire des enzymes capables de libérer de nouveaux sucres fermentescibles. Le phénomène appelé hop creep peut relancer la fermentation, assécher la bière et accroître la carbonatation. Les recherches de l’ASBC soulignent encore des questions sur l’origine exacte de certaines activités enzymatiques.

Dans une Italian Pilsner, la fraîcheur aromatique dépend donc d’un pilotage technique fin : dose, température, durée, levure résiduelle et conditionnement. Un bouquet aérien se prépare avec davantage qu’un sac de houblon jeté dans la cuve en faisant « ciao ».`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner de qualité comme base principale ; une faible proportion de Vienna ou d’un malt légèrement plus riche peut soutenir le corps sans assombrir la bière.",
          "La couleur doit rester pâle à dorée et la texture légère : les malts caramel marqués sont généralement contre-productifs."
        ],
        "houblons": [
          "Houblons européens nobles ou apparentés : variétés allemandes, tchèques, slovènes ou autres cultivars au registre floral, herbacé, épicé et citronné.",
          "Houblonnage tardif puis dry-hop léger à modéré. L’objectif est la fraîcheur aromatique, pas la saturation végétale."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre et suffisamment atténuante pour conserver une finale sèche."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau faiblement alcaline, souvent assez douce ; une légère orientation sulfate peut tendre la finale mais l’amertume doit rester élégante.",
        "empatage": "Empâtage orienté vers une bonne fermentescibilité et un corps léger. Décoction possible mais non structurante pour la définition moderne du style.",
        "ebullitionEtHoublonnage": "Construire une base d’amertume de Pils, compléter par des ajouts tardifs, puis effectuer un houblonnage à cru relativement contenu. Les fortes charges qui donnent brûlure végétale, trouble massif ou texture huileuse font perdre la finesse recherchée.",
        "fermentation": "Fermentation basse propre avec repos de diacétyle adapté à la souche. Le dry-hop est idéalement réalisé après la phase la plus active afin de mieux contrôler l’expression aromatique et le risque de hop creep.",
        "maturation": "Garde froide suffisante pour la netteté, mais pas au prix d’une disparition complète des huiles de houblon. Conditionnement avec très faible prise d’oxygène.",
        "profilRecherche": "Une Pilsner sèche et précise, dont le houblon frais forme un parfum supplémentaire sans masquer la céréale pâle ni la netteté lager."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Italian-Style Pilsener — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Birrificio Italiano",
          "edition": null,
          "reference": "Tipopils — born in 1996, reference point for Italian-style dry-hopped Pilsner",
          "type": "source_primaire_historique",
          "url": "https://www.birrificio.it/en/tipopils",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Beervana",
          "edition": "2020",
          "reference": "There’s More to Italian Pilsners Than Dry-Hopping — parcours d’Agostino Arioli et genèse de Tipopils",
          "type": "presse_specialisee",
          "url": "https://www.beervanablog.com/beervana/2020/5/26/more-to-italian-pilsners",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "American Society of Brewing Chemists",
          "edition": "2019",
          "reference": "Understanding the Diastatic Power of Hops — questions and answers on hop creep",
          "type": "publication_technique",
          "url": "https://www.asbcnet.org/events/webinars/Documents/20190418_QandA_HopEnzymesWebinar.pdf",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "czech-pale-lager",
      "nom": "Czech Pale Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Tchéquie"
      ],
      "origine": {
        "libelle": "Bohême et Moravie",
        "ville": null,
        "region": "Bohême",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3,
        "max": 4.1,
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
        "min": 5,
        "max": 12,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Mug tchèque",
          "Pokal"
        ]
      },
      "description": "Au comptoir tchèque, la Czech Pale Lager traduit le registre quotidien des výčepní : blonde légère, malt tendre, houblon épicé, amertume souple et mousse crémeuse. Moins forte qu’un ležák, elle conserve la rondeur et le rythme de service locaux. Le mot désigne une catégorie d’extrait du moût, pas une bière de second rang ; sa légèreté devient précisément son talent principal.",
      "histoireEtOrigines": `La Czech Pale Lager appartient à un système tchèque où l’extrait du moût primitif et la couleur structurent les noms usuels. Le décret tchèque 248/2018, dans sa version consolidée applicable en 2026, classe výčepní les bières à 7–10 % d’extrait primitif ; ležák vise les bières de fermentation basse à 11–12 %. La frontière est donc mesurée avant fermentation. Elle distingue une force de brassage et non une version « inférieure » de la Pilsner.

La révolution de Plzeň en 1842 fournit évidemment le grand contexte historique. Mais la culture tchèque de la lager ne se limite pas à la bière premium exportée dans le monde : les brasseries ont longtemps produit plusieurs forces de bières pâles destinées à des usages différents. Une Czech Pale Lager moderne conserve donc les marqueurs de la tradition — malt tchèque, houblon de Žatec/Saaz ou apparenté, eau peu minéralisée, fermentation basse, service généreux — dans un ensemble plus léger et souvent plus immédiatement buvable.

Le profil peut être étonnamment savoureux malgré un alcool modeste. Le malt apporte pain clair et céréale ; le houblon donne épices, herbes et une amertume perceptible mais arrondie. Une légère note de diacétyle peut exister dans certains exemples tchèques traditionnels, mais elle n’est ni obligatoire ni une excuse pour une fermentation mal maîtrisée. La mousse dense et persistante, renforcée par les habitudes de tirage tchèques, fait également partie de l’expérience culturelle même si elle ne peut pas être réduite à la recette du moût.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner tchèque ou continental comme base, parfois complété de petites quantités de malt plus riche pour soutenir le pain clair."
        ],
        "houblons": [
          "Saaz/Žatec et variétés tchèques proches, avec une présence aromatique épicée et herbacée clairement perceptible."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager tchèque ou autre souche propre capable de conserver une légère rondeur maltée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Très faible alcalinité et minéralité contenue : cette douceur permet une amertume relativement élevée sans sensation minérale agressive.",
        "empatage": "Infusion par paliers ou décoction selon l’équipement et la tradition. Une décoction peut renforcer le caractère pain/céréale sans alourdir le corps.",
        "ebullitionEtHoublonnage": "Houblonnage assez généreux pour une bière légère, généralement centré sur les variétés tchèques. Les ajouts aromatiques restent traditionnels plutôt que massivement orientés dry-hop.",
        "fermentation": "Fermentation basse propre. Un diacétyle faible peut être stylistiquement toléré dans certaines interprétations tchèques, mais la plupart des brasseurs modernes visent une expression très contrôlée.",
        "maturation": "Lagering jusqu’à intégration du malt et du houblon ; la bière doit rester fraîche, mousseuse et vive.",
        "profilRecherche": "Une lager tchèque légère mais absolument pas vide : malt tendre, houblon épicé, amertume ronde et grande facilité de consommation."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Czech Pale Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/3/czech-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Bohemian-Style Pilsener and related Czech lagers — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "République tchèque — e-Sbírka",
          "edition": "version consolidée au 14 juin 2026",
          "reference": "Vyhláška č. 248/2018 Sb., § 16 — catégories výčepní, ležák et couleurs de bière",
          "type": "texte_reglementaire",
          "url": "https://e-sbirka.gov.cz/sb/2018/248?odkazId=112986335",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Pilsner Urquell",
          "edition": null,
          "reference": "Plzeň 1842, Josef Groll, Czech ingredients and traditional triple decoction",
          "type": "source_primaire_historique",
          "url": "https://live.pilsnerurquell.com/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "czech-premium-pale-lager",
      "nom": "Czech Premium Pale Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "pilsner",
      "aliases": [
        "Bohemian Pilsner",
        "Czech Pilsner"
      ],
      "paysOrigine": [
        "Tchéquie"
      ],
      "origine": {
        "libelle": "Bohême, région de Plzeň",
        "ville": "Plzeň",
        "region": "Bohême",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.2,
        "max": 5.8,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 30,
        "max": 45,
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Mug tchèque",
          "Pokal"
        ]
      },
      "description": "Or profond, pain clair, houblon de Žatec et mousse dense composent la Czech Premium Pale Lager. Sa texture plus pleine et son amertume abondante aux contours arrondis la distinguent d’une Pils allemande plus sèche. En Tchéquie, le mot ležák renvoie légalement à 11–12 % d’extrait primitif pour une bière de fermentation basse : « premium » est l’étiquette internationale, la densité est la langue locale.",
      "histoireEtOrigines": `Cette branche plus dense de la famille tchèque prolonge la révolution pâle partie de Plzeň. Dans la réglementation nationale actuelle, ležák désigne une bière de fermentation basse brassée à 11–12 % d’extrait primitif. Le mot « premium » vient des classifications internationales ; il ne traduit pas une catégorie juridique tchèque de luxe.

Cette densité supplémentaire nourrit un malt de pain clair et une texture plus pleine que la výčepní. Une amertume élevée peut pourtant paraître ronde grâce à l’eau douce, au caractère du houblon tchèque et à l’équilibre du moût. Face à une German Pils, la différence se lit moins comme « moins amère » que comme une amertume portée par davantage de matière et des contours moins secs.

Pilsner Urquell maintient encore un procédé à triple décoction, un houblonnage en plusieurs étapes au Saaz et une maturation prolongée. Ces pratiques sont historiquement précieuses mais ne constituent pas un cahier des charges universel pour toutes les Czech Premium Pale Lagers. Beaucoup de brasseries modernes utilisent des schémas d’empâtage différents tout en respectant le résultat sensoriel : malt riche mais pâle, houblon tchèque noble, amertume ferme et souple, mousse abondante et finale assez sèche pour appeler une nouvelle gorgée.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner tchèque ou continental dominant, recherché pour son caractère de pain blanc, céréale douce et miel très léger."
        ],
        "houblons": [
          "Saaz/Žatec en référence, ou cultivars tchèques proches ; l’arôme épicé, herbacé et légèrement floral doit rester identifiable."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre, avec atténuation suffisante mais sans assécher la bière au point de perdre la rondeur tchèque."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Très douce et faiblement alcaline dans l’archétype de Plzeň. Le faible sulfate contribue à arrondir une amertume pourtant soutenue.",
        "empatage": "Décoction historiquement importante ; Pilsner Urquell conserve une triple décoction. Une infusion par paliers moderne peut produire le style si elle développe suffisamment le caractère malté.",
        "ebullitionEtHoublonnage": "Amertume structurante et plusieurs apports de houblon noble. Les ajouts tardifs donnent du parfum mais le dry-hop massif n’appartient pas au modèle classique.",
        "fermentation": "Fermentation basse contrôlée. Une trace faible de diacétyle peut être admise dans la tradition tchèque, mais elle ne doit jamais devenir beurrée ou masquer le malt et le houblon.",
        "maturation": "Lagering prolongé jusqu’à intégration de l’amertume et obtention d’une mousse et d’une limpidité stables.",
        "profilRecherche": "Une Pils tchèque pleine et harmonieuse : malt pâle riche, Saaz épicé, amertume ferme aux contours doux et finale très buvable."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Czech Premium Pale Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/3/czech-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "République tchèque — e-Sbírka",
          "edition": "version consolidée au 14 juin 2026",
          "reference": "Vyhláška č. 248/2018 Sb., § 16 — définition légale du ležák à 11–12 % d’extrait primitif",
          "type": "texte_reglementaire",
          "url": "https://e-sbirka.gov.cz/sb/2018/248?odkazId=112986335",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Pilsner Urquell",
          "edition": null,
          "reference": "Plzeň 1842, Josef Groll, Czech ingredients and traditional triple decoction",
          "type": "source_primaire_historique",
          "url": "https://live.pilsnerurquell.com/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Pilsner Urquell",
          "edition": null,
          "reference": "Traditional brewing process: triple decoction, Saaz hopping, fermentation and maturation",
          "type": "source_primaire_technique",
          "url": "https://www.pilsnerurquell.com/at/stories/der-brauprozess/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-pilsner",
      "nom": "American Pilsner",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "pilsner",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "États-Unis, tradition pré-Prohibition",
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
        "max": 40,
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Shaker"
        ]
      },
      "description": "Orge six-rangs, maïs ou riz et houblon généreux : l’American Pilsner historique adapte la lager européenne aux champs américains. Plus céréalière, pleine et amère que la lager de masse qui dominera ensuite, elle raconte une solution technique devenue goût national. Les adjoints n’y jouent pas les figurants honteux ; avec le malt riche en enzymes, ils font tenir toute l’architecture.",
      "histoireEtOrigines": `L’American Pilsner actuelle renvoie largement à la tradition des lagers américaines plus houblonnées et plus savoureuses qui précèdent la standardisation de masse du XXe siècle. L’immigration brassicole allemande et centre-européenne apporte au XIXe siècle la fermentation basse et l’ambition de produire des bières inspirées des lagers continentales. Mais les matières premières américaines diffèrent : l’orge à six rangs, riche en enzymes mais plus chargée en protéines, s’accommode bien de céréales comme le maïs ou le riz, qui allègent la structure du moût.

La catégorie est souvent appelée « Pre-Prohibition Pilsner » dans le langage brassicole et American-Style Pilsener dans certaines compétitions. Son profil actuel accepte une proportion notable de maïs ou de riz, jusqu’à environ un quart de la charge céréalière, et une amertume nettement supérieure aux American Lagers de masse. Le résultat recherché n’est donc pas neutre : malt et céréales restent perceptibles, le houblon peut être floral, épicé ou herbacé, et la finale sèche et vive.

L’intérêt moderne du style vient de sa reconstruction par les brasseries artisanales et les passionnés d’histoire brassicole. On ne peut pas prétendre qu’une recette contemporaine reproduit exactement chaque lager américaine du XIXe siècle : les variétés d’orge, de maïs, de houblon et de levure ont changé. Mais le style permet de rappeler qu’avant l’American Lager très légère, il existait des lagers américaines robustes, franchement houblonnées et conçues autour des matières premières locales.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt lager ou Pilsner, historiquement en relation avec l’orge américaine à six rangs ; les interprétations actuelles utilisent souvent du deux-rangs plus régulier.",
          "Maïs ou riz possibles et historiquement cohérents ; les BA Guidelines autorisent une proportion notable sans que la bière devienne une light lager."
        ],
        "houblons": [
          "Houblons américains traditionnels ou cultivars nobles/apparentés, avec une amertume et un parfum clairement plus présents que dans une American Lager standard."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre, neutre à légèrement soufrée pendant la fermentation puis nette après maturation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible à moyenne minéralité ; suffisamment de sulfate peut soutenir une amertume plus ferme, sans dureté excessive.",
        "empatage": "Empâtage fermentescible. Les céréales crues demandent traditionnellement une cuisson séparée, ou cereal mash, afin de gélatiniser l’amidon ; les formes floconnées ou prégélatinisées simplifient ce travail.",
        "ebullitionEtHoublonnage": "Amertume moyenne à soutenue et apports aromatiques mesurés. Le style peut être houblonné, mais son architecture reste celle d’une Pilsner historique plutôt que d’une IPA.",
        "fermentation": "Fermentation basse propre, complète et relativement sèche.",
        "maturation": "Garde froide suffisante pour la netteté tout en préservant le caractère de houblon.",
        "profilRecherche": "Une lager américaine historique reconstruite : sèche, céréalière, nettement houblonnée et plus expressive que les lagers industrielles qui lui succèdent."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Pilsener — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Pre-Prohibition Lager / Classic American Pilsner — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/27f-pre-prohibition-lager",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Federal Judicial Center",
          "edition": null,
          "reference": "Prohibition in the Federal Courts — chronologie de la Prohibition, 1920–1933",
          "type": "histoire_institutionnelle",
          "url": "https://www.fjc.gov/history/exhibits/prohibition-in-federal-courts-timeline",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Beverages / MDPI",
          "edition": "2021",
          "reference": "Brewing with Unmalted Cereal Adjuncts — effets sensoriels du maïs et du riz",
          "type": "publication_scientifique",
          "url": "https://www.mdpi.com/2306-5710/7/1/4",
          "consultation": "2026-08-10"
        }
      ]
    },
    {
      "id": "contemporary-american-pilsner",
      "nom": "Contemporary American Pilsner",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "pilsner",
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
        "min": 4.5,
        "max": 6.2,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 25,
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Pokal"
        ]
      },
      "description": "Dans la scène craft, la Contemporary American Pilsner reprend la silhouette pâle et sèche de la pils, puis lui offre le rayon entier des houblons actuels. Agrumes, fleurs, herbes, résine douce ou fruits blancs peuvent apparaître sur un malt net et un corps agile. Cette liberté aromatique la distingue de la Pils américaine historique : même fermentation précise, autre carte du jardin de houblon.",
      "histoireEtOrigines": `La Contemporary American Pilsner est une catégorie de la scène brassicole récente plutôt qu’un style historique. Elle témoigne du retour des brasseurs américains vers la lager comme espace de créativité après plusieurs décennies où l’IPA a dominé l’imaginaire craft. Là où l’American Pilsner historique regarde vers les lagers d’avant la Prohibition, la version contemporaine accepte une palette plus large de malts, d’adjoints et surtout de houblons.

Les classifications actuelles distinguent explicitement les deux catégories. Dans la Contemporary American-Style Pilsener, une base tout malt est fréquente mais des céréales adjointes restent possibles ; les houblons peuvent être américains ou internationaux et dépasser le registre strictement noble. Le style reste toutefois une Pilsner : la bière demeure claire à légèrement voilée, très propre, relativement sèche et construite autour d’une amertume lisible.

Cette souplesse explique pourquoi les frontières avec Italian Pilsner, West Coast Pilsner ou India Pale Lager peuvent sembler mouvantes. La Contemporary American Pilsner occupe le milieu du spectre : plus libre qu’une German Pils, généralement moins intensément dry-hoppée qu’une West Coast Pilsner, et moins proche d’une IPA qu’une IPL. La catégorie est utile précisément parce qu’elle reconnaît une génération de lagers américaines qui ne cherchent plus à imiter une école européenne à la lettre.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner ou pale très clair ; recette tout malt fréquente, mais maïs ou riz restent possibles selon l’intention."
        ],
        "houblons": [
          "Houblons américains ou internationaux, du noble floral aux variétés plus citronnées et fruitées ; intensité modérée à affirmée."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre et atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité, minéralité ajustée à l’amertume. Un sulfate modéré peut accentuer la sécheresse.",
        "empatage": "Empâtage orienté vers une finale sèche et un corps léger.",
        "ebullitionEtHoublonnage": "Amertume claire, ajouts tardifs plus libres qu’en German Pils. Un dry-hop léger peut être utilisé mais n’est pas obligatoire.",
        "fermentation": "Fermentation basse propre, limitant les esters afin de laisser les houblons définir la personnalité.",
        "maturation": "Garde froide suffisante pour la netteté ; durée adaptée si des houblons tardifs doivent conserver leur fraîcheur.",
        "profilRecherche": "Une Pils américaine moderne : précise et sèche, mais plus libre dans le choix du houblon et des céréales que les écoles européennes classiques."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Contemporary American-Style Pilsener — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "west-coast-pilsner",
      "nom": "West Coast Pilsner",
      "collectionId": 1,
      "nature": "SS",
      "parentPrincipalId": "pilsner",
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
        "min": 4.5,
        "max": 6.5,
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
        "min": 4,
        "max": 12,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Teku"
        ]
      },
      "description": "Sur la côte Pacifique, agrumes, pin et fruits tropicaux traversent une lager sèche : la West Coast Pilsner ajoute amertume vive et finale claquante. Son nom encore jeune décrit moins une tradition verrouillée qu’un terrain d’expérimentation californien. Elle emprunte le projecteur de la West Coast IPA tout en gardant la scène propre, froide et légère d’une pils.",
      "histoireEtOrigines": `La West Coast Pilsner est un style extrêmement récent, né du croisement entre la culture de la Pils craft américaine et le vocabulaire aromatique de la West Coast IPA. Son intégration aux compétitions montre qu’un ensemble de pratiques autrefois décrit comme « hoppy lager » ou « dry-hopped Pils » s’est suffisamment stabilisé pour recevoir un nom propre.

L’exploration des lagers fortement houblonnées n’a pas un inventeur unique, mais le nom possède un jalon mieux documenté. À Highland Park Brewery, Los Angeles, Bob Kunz et Tim McDonnell assemblent en 2016 une Pils et une West Coast IPA pour un fût de festival ; la bière qui en découle, Timbo Pils, est ensuite présentée comme la première à porter l’étiquette West Coast Pilsner. Ce récit de brasserie et de presse spécialisée établit l’histoire du terme, pas l’antériorité absolue du procédé.

La catégorie se reconnaît surtout à son registre moderne : agrumes, pin, résine, fruits tropicaux, fruits à noyau ou notes végétales et résineuses dites dank, issues de variétés américaines et du Pacifique. Fermentation basse et corps léger empêchent ces arômes de s’installer sur la texture d’une IPA classique.

Le style illustre aussi une évolution de la culture craft : la limpidité, la sécheresse et la précision redeviennent des qualités recherchées après la vague des IPA opaques. Une West Coast Pilsner réussie peut être intensément parfumée tout en restant tranchante, légère et très pétillante. Le risque principal est de dépasser la frontière : si la bière devient trop alcoolisée, trop résineuse, trop texturée ou trop chargée en matière végétale, elle perd son identité lager.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner ou pale très clair ; recette volontairement simple pour laisser le houblon dominer sans créer de douceur résiduelle."
        ],
        "houblons": [
          "Variétés modernes à agrumes, pin, fruits tropicaux, fruits à noyau ou caractère végétal et résineux dit dank.",
          "Whirlpool et dry-hop plus importants qu’en Italian Pilsner ; les charges restent néanmoins pensées pour conserver une texture sèche."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre, parfois conduite légèrement plus chaud selon les contraintes de la brasserie, sans esters dominants."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité, sulfate souvent supérieur au chlorure pour soutenir une finale sèche et une amertume précise.",
        "empatage": "Très fermentescible, corps léger à moyen-léger.",
        "ebullitionEtHoublonnage": "Amertume franche, grosse part de l’expression construite au whirlpool et au dry-hop. Contrôler la polyphénolie et l’oxydation devient essentiel.",
        "fermentation": "Fermentation basse propre ; repos de diacétyle puis houblonnage à froid selon le protocole choisi.",
        "maturation": "Garde froide relativement courte après dry-hop, clarification possible sans dépouiller totalement les arômes. Conditionnement à très faible oxygène.",
        "profilRecherche": "Une lame de lager sèche avec l’aromatique moderne de la côte Ouest : intense au nez, légère et nette en bouche."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "West Coast-Style Pilsener — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": "2023",
          "reference": "Writing the Rules of West Coast Pilsner — genèse du terme à Highland Park en 2016",
          "type": "presse_specialisee",
          "url": "https://www.beerandbrewing.com/writing-the-rules-of-west-coast-pilsner",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Hop Culture",
          "edition": "2024",
          "reference": "The History of Timbo Pils and the West Coast Pilsner",
          "type": "presse_specialisee",
          "url": "https://www.hopculture.com/west-coast-pilsner-timbo-pils/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "rice-lager",
      "nom": "Rice Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Asie et brassage international",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 5.5,
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
        "min": 3,
        "max": 10,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 6,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Chope"
        ]
      },
      "description": "Dans une Rice Lager, le riz peut alléger le corps et sécher la finale, mais aussi apporter noix, céréale, douceur ou parfum selon sa variété et son traitement. La robe reste pâle, la fermentation propre et le houblon intégré. Sa consécration comme catégorie en 2026 renverse un vieux préjugé : l’adjoint que l’on accusait d’effacer la bière obtient enfin le droit de signer le verre.",
      "histoireEtOrigines": `Le riz est utilisé depuis longtemps dans de nombreuses lagers industrielles et régionales, particulièrement en Asie et en Amérique du Nord, mais « Rice Lager » comme catégorie de style autonome est beaucoup plus récente. Les Brewers Association ont ajouté une catégorie Rice Lager à leurs guidelines 2026 afin de reconnaître un courant où le riz n’est plus seulement un adjoint destiné à alléger une recette : il peut devenir une composante revendiquée de l’identité sensorielle.

Cette distinction est importante. Un riz très neutre peut diminuer le corps et laisser une finale sèche ; certaines variétés aromatiques peuvent apporter des impressions de céréale douce, noix, riz cuit ou parfum floral subtil. La catégorie 2026 admet donc un éventail qui va de la neutralité à une expression du riz perceptible, à condition que la bière conserve la netteté et la buvabilité d’une lager.

Techniquement, le mot « riz » couvre plusieurs matières premières. Les flocons et produits prégélatinisés peuvent être incorporés directement dans certains empâtages, tandis que le riz cru exige généralement une cuisson séparée pour gélatiniser son amidon et le rendre accessible aux enzymes du malt. Les brasseries industrielles maîtrisent depuis longtemps ces procédés ; la vague craft actuelle les redécouvre parfois avec des variétés culinaires régionales et une ambition aromatique plus forte.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner ou lager pâle comme source principale d’enzymes et de structure.",
          "Riz blanc neutre, riz floconné/prégélatinisé ou variété aromatique selon l’effet recherché. Dans le cadre de compétition Brewers Association 2026, la catégorie Rice Lager demande au moins 15 % de riz ; les pratiques brassicoles réelles peuvent naturellement employer des proportions différentes hors de cette définition."
        ],
        "houblons": [
          "Faible à modéré ; noble, floral ou moderne mais rarement assez puissant pour masquer le caractère de céréale."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre et atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Plutôt douce, afin de garder une texture nette et une finale délicate.",
        "empatage": "Le riz cru nécessite une gélatinisation adaptée avant ou pendant le brassage ; les flocons/prégélatinisés simplifient la conversion. Le malt doit apporter suffisamment de pouvoir enzymatique.",
        "ebullitionEtHoublonnage": "Houblonnage d’équilibre. Les versions modernes peuvent être légèrement plus aromatiques mais la finesse reste prioritaire.",
        "fermentation": "Fermentation basse propre, permettant de distinguer le caractère du riz du fruit de levure.",
        "maturation": "Garde froide jusqu’à netteté ; forte carbonatation fréquente pour accentuer la sensation légère.",
        "profilRecherche": "Une lager sèche et très précise dans laquelle le riz peut être soit un outil de légèreté, soit un véritable accent de céréale."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Rice Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Rice Lagers: Tips from World Beer Cup Award Winners — cuisson, variétés et expression du riz",
          "type": "publication_technique",
          "url": "https://www.brewersassociation.org/insights/rice-lagers-tips-from-word-beer-cup-award-winners/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Foods / PubMed Central",
          "edition": "2021",
          "reference": "Brewing with Starchy Adjuncts — influence des céréales sur les propriétés sensorielles de la bière",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8392023/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "india-pale-lager",
      "nom": "India Pale Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "hoppy-lager",
      "aliases": [
        "IPL"
      ],
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
        "min": 5,
        "max": 7.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 35,
        "max": 70,
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "IPA glass",
          "Pokal"
        ]
      },
      "description": "Une charge de houblon d’IPA rencontre la fermentation basse dans l’India Pale Lager : agrumes, résine ou fruits tropicaux éclatent sur un corps pâle, sec et très propre. L’amertume peut être élevée, la fraîcheur demeure centrale. Son « India » ne raconte aucun voyage colonial documenté ; il annonce simplement, dans le dialecte craft contemporain, que le houblon a pris la plus grande chambre.",
      "histoireEtOrigines": `India Pale Lager, ou IPL, est un nom volontairement hybride apparu dans la scène craft pour décrire des bières qui appliquent un houblonnage d’IPA à une fermentation basse. Il ne s’agit pas d’un descendant historique des India Pale Ales du XIXe siècle : le mot « India » est ici une référence stylistique moderne à l’intensité du houblon. La catégorie de compétition porte le nom American-Style India Pale Lager.

Les premières IPL se multiplient surtout au début du XXIe siècle, lorsque les brasseurs cherchent à distinguer le caractère de houblons américains modernes de l’expression fruitée des levures ale. La lager fournit un fond plus neutre : agrumes, résine, pin, tropical ou fruits à noyau paraissent souvent plus nets, tandis que le corps peut rester très sec. Le style partage donc une partie du vocabulaire de la West Coast Pilsner, mais l’IPL accepte généralement davantage d’alcool, d’amertume et d’intensité aromatique.

Sa réussite dépend d’un équilibre délicat. Une fermentation basse ne transforme pas automatiquement une IPA en lager : il faut aussi une structure de malt relativement légère, une maturation propre et une finale qui ne devient ni sucrée ni chargée. Inversement, si le houblon est trop sage, la bière retombe dans la vaste famille des Hoppy Lagers.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner ou pale dominant ; petite quantité de Vienna possible, très peu de caramel pour éviter une finale lourde."
        ],
        "houblons": [
          "Variétés modernes américaines ou internationales, amertume soutenue, whirlpool généreux et dry-hop fréquent."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre et assez tolérante à l’alcool pour finir un moût plus dense qu’une Pils standard."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate souvent favorisé pour une finale sèche et une amertume nette ; alcalinité faible.",
        "empatage": "Empâtage fermentescible pour contenir le corps malgré le degré alcoolique supérieur.",
        "ebullitionEtHoublonnage": "Construire l’amertume sans extraction végétale excessive ; répartir l’expression entre chaudière, whirlpool et dry-hop.",
        "fermentation": "Fermentation basse propre puis repos de diacétyle. Surveiller le hop creep après dry-hop, qui peut relancer la fermentation et produire du diacétyle.",
        "maturation": "Maturation froide et conditionnement rapide sous faible oxygène pour préserver les huiles modernes.",
        "profilRecherche": "L’intensité de houblon d’une IPA avec une fermentation et une finale nettement lager : sèche, précise, tranchante."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style India Pale Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "munich-helles",
      "nom": "Munich Helles",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [
        "Helles"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Munich, Bavière",
        "ville": "Munich",
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.7,
        "max": 5.4,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 16,
        "max": 22,
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Pokal"
        ]
      },
      "description": "Munich répond à la pils par la douceur : la Helles porte pain frais, céréale et miel très léger sous une robe dorée, avec juste assez d’amertume pour nettoyer la finale. Spaten l’envoie d’abord vers le nord en 1894 avant de la proposer localement : une riposte commerciale devenue goût bavarois, souple comme une poignée de main et nettement mieux carbonatée.",
      "histoireEtOrigines": `Le Munich Helles naît à la fin du XIXe siècle dans une Bavière dont la grande tradition est encore la bière sombre. La Pilsner bohémienne, claire et brillante, rencontre un immense succès commercial après 1842 et oblige les brasseries munichoises à répondre. München Tourismus attribue à Spaten un rôle pionnier dans l’apparition du Münchner Hell à cette époque, tandis que les guides de styles situent son développement dans les années 1890.

Le choix munichois n’est pas de copier exactement la Pilsner. Le Helles — « clair » ou « pâle » — conserve la douceur maltée chère à la Bavière et réduit l’agressivité du houblon. Il devient une bière dorée, propre et souple où la céréale, le pain blanc et une légère douceur initiale précèdent une finale suffisamment sèche pour rester désaltérante. Le houblon noble est présent, mais davantage comme équilibre que comme signature dominante.

Au XXe siècle, le Helles devient l’un des piliers de la culture des Biergärten et tavernes bavaroises. Son apparente simplicité en fait une bière particulièrement exigeante : trop de houblon la rapproche d’une Pils ; trop de malt ou de sucres résiduels l’alourdit ; trop peu des deux la ramène vers une lager internationale. Le style moderne repose donc sur la finesse d’un malt pâle de haute qualité et une fermentation d’une grande propreté.`,
      "chapitres": [
        {
          "titre": "Un train vers le nord avant les chopes de Munich",
          "texte": `La chronologie publiée par Spaten donne au lancement une trajectoire inattendue : en 1894, la brasserie produit sa première bière pâle « à la manière de Pilsen » pour l’expédier vers l’Allemagne du Nord. Munich la découvre commercialement l’année suivante. La Helles commence donc comme une réponse dirigée vers un marché déjà conquis par les lagers claires, avant de devenir une évidence bavaroise.

Ce détour évite le joli récit d’une ville qui aurait spontanément désiré sa blonde. Spaten teste une riposte, le rail la transporte, puis les consommateurs munichois l’adoptent. L’innovation locale entre d’abord par la porte de l’exportation.`
        },
        {
          "titre": "Répondre à la Pils sans lui ressembler",
          "texte": `Le choix décisif porte sur l’équilibre. La robe devient dorée et le malt plus pâle, mais l’amertume demeure en retrait ; pain blanc, céréale et rondeur conduisent la gorgée. La Helles ne gagne donc pas sa place en copiant Plzeň : elle conserve la préférence munichoise pour le malt dans un nouveau costume lumineux.

Cette retenue explique sa difficulté technique. Dans une bière si claire et peu houblonnée, une eau mal ajustée, un soufre persistant ou une finale trop douce se remarque immédiatement. La simplicité n’est pas un manque d’idées ; c’est une idée qui a renoncé à ses accessoires.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner allemand dominant ; petite proportion de Vienna ou Munich clair possible pour renforcer le pain et la profondeur sans ambrer nettement la bière."
        ],
        "houblons": [
          "Houblons nobles allemands ou apparentés, à faible ou moyenne intensité, principalement pour équilibrer le malt."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre et assez atténuante pour éviter une finale sucrée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité et minéralité modérée. Le chlorure peut soutenir la rondeur du malt, mais l’eau ne doit pas paraître saline ou lourde.",
        "empatage": "Infusion ou paliers ; décoction traditionnelle possible mais non nécessaire. L’objectif est une texture souple et une finale bien fermentée.",
        "ebullitionEtHoublonnage": "Amertume nettement plus basse qu’une German Pils ; peu d’arôme tardif.",
        "fermentation": "Fermentation basse propre, faible ester, diacétyle absent.",
        "maturation": "Lagering jusqu’à intégration et limpidité, avec carbonatation moyenne à vive.",
        "profilRecherche": "Une lager munichoise dorée centrée sur le malt pâle : douce au départ, nette et sèche à l’arrivée, sans lourdeur."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Munich Helles — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/4/pale-malty-european-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Munich-Style Helles — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "München Tourismus",
          "edition": null,
          "reference": "Munich beer history — Spaten and the emergence of Münchner Hell in the late 19th century",
          "type": "source_institutionnelle_historique",
          "url": "https://www.munich.travel/en/topics/convention-bureau/news-highlights-2022/munich-and-it-s-beer-a-success-story",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "München Tourismus",
          "edition": null,
          "reference": "Munich beer typology — Helles and Dunkel in local beer culture",
          "type": "source_institutionnelle",
          "url": "https://www.munich.travel/en/topics/eat-drink/munich-beers-typology",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Spaten-Franziskaner-Bräu",
          "edition": null,
          "reference": "Geschichte — première bière pâle de Spaten destinée au nord en 1894 et lancement munichois en 1895",
          "type": "source_primaire_historique",
          "url": "https://www.spatenbraeu.de/geschichte",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "dortmunder-european-export",
      "nom": "Dortmunder / European Export",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [
        "Dortmunder Export",
        "Helles Exportbier"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Dortmund, Rhénanie-du-Nord-Westphalie",
        "ville": "Dortmund",
        "region": "Rhénanie-du-Nord-Westphalie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.8,
        "max": 6,
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
        "max": 16,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Seidel"
        ]
      },
      "description": "Entre Helles et Pils, la Dortmunder Export occupe un robuste milieu : dorée, plus charpentée, maltée sans lourdeur, amère sans sécheresse excessive, parfois marquée par une impression minérale. Elle grandit dans la Dortmund des mines, de l’acier et du rail, où une bière de travail devait conjuguer tenue et buvabilité. Le verre a le sérieux d’une machine bien graissée, avec une mousse beaucoup plus avenante.",
      "histoireEtOrigines": `Dortmund devient au XIXe et au début du XXe siècle l’un des grands centres industriels de la bière allemande. L’essor des mines, de l’acier et du chemin de fer crée un immense marché urbain pour des bières capables d’être produites et distribuées à grande échelle. Le Brauerei-Museum Dortmund conserve cette mémoire d’une ville où de nombreuses grandes brasseries ont contribué à faire de la bière un produit industriel majeur.

La figure de Fritz Brinkhoff est particulièrement liée à l’Export : la ville de Dortmund le présente comme maître brasseur fondateur de la Dortmunder Union-Brauerei en 1873 et associe son travail au développement d’une bière Export plus robuste. Le terme « Export » désigne une lager un peu plus forte et durable que les bières locales courantes, adaptée à un transport plus large. Dans les classifications internationales, « Dortmunder Export » a longtemps servi à décrire une lager dorée située entre Helles et Pils : plus de corps et de malt qu’une Pils sèche, mais une amertume et une minéralité souvent plus marquées qu’un Helles.

La célèbre histoire de « l’eau dure de Dortmund » est utile mais mérite d’être nuancée. Les minéraux locaux ont certainement influencé les brasseries historiques, mais les brasseurs modernes savent traiter leur eau. Le style ne doit donc pas être réduit à une recette de sels. Ce qui compte est la sensation d’équilibre : malt doux, corps moyen, amertume ferme mais harmonieuse et impression légèrement minérale possible, jamais crayeuse.`,
      "chapitres": [
        {
          "titre": "Une bière au rythme des hauts-fourneaux",
          "texte": `La Dortmund industrielle concentre mineurs, métallurgistes, cheminots et capitaux. Les brasseries grandissent avec ce bassin urbain, mécanisent la production et utilisent le rail pour dépasser le marché du voisinage. L’Export répond à cette échelle : un peu plus de densité et de tenue qu’une bière courante, sans perdre la faculté d’étancher une soif de travail.

Le décor n’est donc pas une simple anecdote ouvrière collée sur un profil minéral. Industrie lourde, transport et brasserie appartiennent au même système. La bière devient à la fois produit de masse local et marchandise capable de quitter Dortmund.`
        },
        {
          "titre": "Fritz Brinkhoff et le mot Export",
          "texte": `Le musée brassicole municipal associe Fritz Brinkhoff, maître brasseur fondateur de la Dortmunder Union-Brauerei en 1873, au développement du type Export. Cette attribution institutionnelle est plus précise que la formule vague « inventée à Dortmund », mais elle ne transforme pas chaque Export allemande en copie d’une recette individuelle.

Le mot lui-même signale une destination et une force commerciale avant de devenir une case sensorielle. Les guides modernes ont ensuite fixé l’image d’une lager dorée, ferme, maltée et amère. L’histoire part d’un réseau de distribution ; la classification finit par lui donner des IBU.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner dominant, éventuellement complété de Vienna ou Munich clair pour donner davantage de corps qu’une Pils très sèche."
        ],
        "houblons": [
          "Houblons allemands nobles ou apparentés, amertume moyenne, arôme faible à modéré."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre, bonne atténuation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Traditionnellement plus minérale que Plzeň ou Munich. Un équilibre sulfate/chlorure modéré peut donner une finale ferme, mais reproduire aveuglément une eau historique très chargée n’est pas nécessaire.",
        "empatage": "Empâtage donnant un corps moyen mais bien atténué ; infusion ou paliers.",
        "ebullitionEtHoublonnage": "Amertume suffisamment forte pour équilibrer une densité légèrement supérieure, sans devenir Pils sèche et tranchante.",
        "fermentation": "Fermentation basse propre et régulière.",
        "maturation": "Lagering moyen à long pour intégrer minéralité, malt et amertume.",
        "profilRecherche": "Une lager d’export dorée, ferme et équilibrée : plus charpentée qu’une Helles, moins coupante qu’une Pils."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Dortmunder Export — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/5/pale-bitter-european-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Dortmunder/European-Style Export — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brauerei-Museum Dortmund / Stadt Dortmund",
          "edition": null,
          "reference": "Dortmund brewing history, industrial brewing and Fritz Brinkhoff's Export beer",
          "type": "source_museale_historique",
          "url": "https://www.dortmund.de/themen/freizeit-und-kultur/museen-und-kunst/brauerei-museum/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Stadt Dortmund",
          "edition": null,
          "reference": "Fritz Brinkhoff, founding brewer of Dortmunder Union-Brauerei, and the development of Export",
          "type": "source_museale_historique",
          "url": "https://www.dortmund.de/newsroom/presse-mitteilungen/fuehrung-im-brauerei-museum-erzaehlt-die-geschichte-von-fritz-brinkhoff.html",
          "consultation": "2026-08-10"
        }
      ]
    },
    {
      "id": "festbier-german-oktoberfest",
      "nom": "Festbier / German Oktoberfest",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [
        "Festbier"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Munich, Bavière",
        "ville": "Munich",
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.8,
        "max": 6.3,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 18,
        "max": 25,
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Mass",
          "Seidel"
        ]
      },
      "description": "Sous les grandes tentes munichoises, la Festbier moderne verse une lager dorée : pain clair, malt doux, toast léger, corps souple et environ six degrés portés sans pesanteur. Elle raconte une fête dont la bière a changé, du sombre à l’ambré puis au blond. Son exploit tient dans la chope d’un litre : assez de caractère pour accompagner la fanfare, assez de fluidité pour survivre au deuxième refrain.",
      "histoireEtOrigines": `La Festbier moderne raconte l’évolution de la bière servie à l’Oktoberfest, dont l’histoire commence bien avant elle. La fête naît en 1810 à l’occasion du mariage du prince héritier Louis de Bavière et de Thérèse de Saxe-Hildburghausen. La bière qui y est servie change au fil du XIXe et du XXe siècle à mesure que les technologies et les goûts évoluent.

Le lien avec la Märzen se consolide dans la seconde moitié du XIXe siècle. Le site officiel de l’Oktoberfest rappelle qu’une Märzen brassée par Spaten est introduite à la fête en 1872. Cette lager ambrée plus forte devient durablement associée à l’image internationale d’« Oktoberfestbier ». Pourtant, à partir de la fin du XXe siècle, les grandes brasseries munichoises privilégient progressivement une bière plus pâle, dorée et moins saturante ; le passage majoritaire au profil actuel se situe autour des années 1990, après plusieurs décennies d’évolution vers une chope plus facile à boire.

Aujourd’hui, l’Oktoberfestbier servie officiellement à Munich est soumise au cadre local de la fête et produite par les brasseries munichoises autorisées. La Festbier comme style international en reprend le profil : force autour de 6 %, malt allemand riche mais pâle, houblon noble modéré, corps souple et finale sèche. Son objectif n’est pas de concentrer le malt comme un Bock ; c’est d’offrir suffisamment de richesse pour être festive tout en restant étonnamment facile à boire litre après litre.`,
      "chapitres": [
        {
          "titre": "En 1810, la bière n’est pas encore la vedette",
          "texte": `La première fête célèbre le mariage du prince héritier Louis et de Thérèse de Saxe-Hildburghausen par des réjouissances achevées le 17 octobre 1810 avec une course de chevaux. Le récit municipal précise qu’il n’existe alors ni grandes tentes à bière ni manèges sur la prairie. Appeler la bière de ce jour une Festbier moderne reviendrait à photographier une course hippique avec un téléphone qui n’a pas encore été inventé.

Les stands, les halls puis les immenses tentes arrivent au cours du XIXe siècle. L’Oktoberfest devient progressivement une fête de la bière ; elle ne naît pas déjà équipée de sa scénographie actuelle.`
        },
        {
          "titre": "Sombre, ambrée, dorée : la fête change de verre",
          "texte": `Les bières munichoises sont d’abord sombres. En 1872, une Märzen ambrée de Spaten s’impose dans la mémoire de la fête et fixe pour longtemps l’image internationale de l’Oktoberfestbier. Au XXe siècle, les brasseries déplacent peu à peu le profil vers une lager plus pâle, fluide et adaptée au service en grandes quantités ; la Festbier dorée domine finalement les tentes.

Ce déplacement explique un malentendu persistant : une bouteille « Oktoberfest » ambrée aux États-Unis peut évoquer fidèlement une époque de Munich tout en ressemblant fort peu à la bière servie aujourd’hui sur la Wiesn.`
        },
        {
          "titre": "Une force conçue pour la durée de la fête",
          "texte": `La Festbier conserve une densité supérieure à celle d’une Helles, mais répartit cette matière dans un corps souple et une finale sèche. Malt Pilsner, Vienna ou Munich clair apportent le pain ; l’amertume empêche la chope de se refermer sur le palais. Le procédé sensoriel découle directement de l’usage social : tenir un litre sans donner l’impression de mâcher le second.

Cette buvabilité ne rend pas le verre faible. Autour de 6 % vol., il avance plus silencieusement que sa force — une qualité remarquable dans une tente où presque rien d’autre n’avance silencieusement.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner majoritaire, complété de Vienna et/ou Munich clair pour le pain et la richesse sans obtenir la couleur d’une Märzen."
        ],
        "houblons": [
          "Houblons nobles allemands, amertume modérée et arôme discret."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager allemande propre, atténuation suffisante pour une finale nette malgré une densité de départ relativement élevée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérément minérale, pensée pour soutenir le malt plutôt que souligner le sulfate.",
        "empatage": "Paliers ou décoction possibles ; l’objectif est un malt de pain clair et une texture souple, pas une lourdeur dextrinique.",
        "ebullitionEtHoublonnage": "Houblonnage d’équilibre, faible expression aromatique. Une ébullition solide aide à gérer les précurseurs de DMS lorsque le Pilsner domine.",
        "fermentation": "Fermentation basse propre ; le degré alcoolique doit être totalement intégré et sans alcools supérieurs brûlants.",
        "maturation": "Lagering assez long pour une bière lisse et brillante, mais conservant une fraîcheur de malt.",
        "profilRecherche": "Une lager de fête dorée et robuste, maltée mais non sucrée, capable d’être servie en grande chope sans fatiguer le palais."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Festbier — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/4/pale-malty-european-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Oktoberfest/Wiesn and Festbier — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Oktoberfest.de / Stadt München",
          "edition": null,
          "reference": "History of Oktoberfest and the development of festival beer",
          "type": "source_institutionnelle_historique",
          "url": "https://www.oktoberfest.de/en/magazine/tradition/the-history-of-oktoberfest",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Oktoberfest.de / Stadt München",
          "edition": null,
          "reference": "Schottenhamel history — Märzen introduced to Oktoberfest in 1872",
          "type": "source_institutionnelle_historique",
          "url": "https://www.oktoberfest.de/en/tents/big-tents/festhalle-schottenhamel",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "vienna-lager",
      "nom": "Vienna Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Autriche"
      ],
      "origine": {
        "libelle": "Vienne",
        "ville": "Vienne",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.7,
        "max": 5.5,
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
        "min": 18,
        "max": 30,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Pokal"
        ]
      },
      "description": "En 1841, près de Vienne, Anton Dreher met au point l’ambre nette de la Vienna Lager : cuivre lumineux, pain toasté, croûte fine, noisette et finale sèche. Son malt spécifique apporte la couleur sans la lourdeur des anciennes bières brunes. Élégante plutôt qu’opulente, elle ressemble à un coucher de soleil qui aurait étudié la thermodynamique avant d’entrer dans le verre.",
      "histoireEtOrigines": `La Vienna Lager est liée à l’une des grandes transformations techniques du brassage européen du XIXe siècle. Anton Dreher, héritier d’une famille de brasseurs autrichiens, développe à Schwechat près de Vienne une bière de fermentation basse brassée avec un malt plus pâle et plus régulièrement touraillé que les malts bruns traditionnels. La maison Dreher situe en 1841 son « Lagerbier », au moment même où d’autres brasseurs d’Europe centrale expérimentent des méthodes de maltage et de fermentation qui vont bouleverser l’apparence des bières.

Le malt qui prendra le nom de Vienna se trouve entre le Pilsner très pâle et le Munich plus sombre : assez clair pour produire une bière cuivrée brillante, assez riche pour donner croûte de pain, toast et douceur maltée. La Vienna Lager devient ainsi une lager ambrée élégante, plus sèche et moins caramélisée que beaucoup d’interprétations modernes ne le laissent penser. L’innovation est contemporaine de la naissance de la Pilsner et participe au même basculement vers des bières de couleur plus claire, servies limpides et maturées à froid.

Le style décline fortement dans son berceau européen au XXe siècle, mais sa descendance culturelle est complexe. L’émigration de brasseurs germaniques et autrichiens vers les Amériques contribue à diffuser des lagers ambrées ; au Mexique, plusieurs marques entretiennent une parenté revendiquée avec la tradition viennoise. Il serait trop simple de présenter la Mexican Amber Lager comme un fossile exact de la recette de Dreher : matières premières, procédés et goûts ont évolué. Mais le Mexique constitue bien aujourd’hui l’un des lieux où l’idée d’une lager ambrée de type Vienna demeure familière au grand public.

La renaissance craft redonne ensuite au style une définition plus historique : malt Vienna au premier plan, caramel faible, houblon noble discret, fermentation basse nette et finale sèche. Le style moderne cherche moins à reproduire une bière précise de 1841 qu’à restaurer l’équilibre qui faisait l’originalité de cette famille : couleur cuivre, profondeur de pain et très grande buvabilité.`,
      "chapitres": [
        {
          "titre": "Anton Dreher règle la couleur par le four",
          "texte": `À Schwechat, Dreher ne se contente pas de fermenter plus froid. Il associe la fermentation basse à un malt séché de manière plus régulière et plus pâle que les malts bruns traditionnels. Le résultat présenté en 1841 se situe dans un nouvel espace visuel : assez clair pour briller cuivre, assez touraillé pour garder pain et toast.

La causalité est directe. Le contrôle du séchage déplace la couleur et les arômes ; le froid nettoie la fermentation ; la garde polit l’ensemble. Le « malt Vienna » n’est donc pas un nuancier décoratif ajouté après coup, mais l’un des moteurs de la bière.`
        },
        {
          "titre": "Une entreprise qui apprend à faire voyager le froid",
          "texte": `L’empire brassicole Dreher grandit avec les machines, les caves, les lignes de chemin de fer et des wagons capables de protéger les fûts de la chaleur. Les collections du Technisches Museum Wien documentent ce problème logistique : avant une chaîne frigorifique continue, transporter une lager en été suppose glace, isolation et organisation.

La Vienna Lager appartient ainsi à la même modernité que le rail qui l’emporte. Son recul ultérieur en Autriche et sa persistance réinterprétée dans les Amériques montrent qu’un style ne voyage jamais sous cloche : la technique peut préserver la bière, pas immobiliser sa culture.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Vienna comme cœur de la recette ; Munich clair ou Pilsner peuvent ajuster la profondeur et la fermentescibilité.",
          "Les malts caramel doivent rester faibles : le profil historique vise toast, pain et Maillard davantage qu’une douceur de caramel."
        ],
        "houblons": [
          "Houblons nobles continentaux ou apparentés, généralement en soutien avec un arôme faible à modéré."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre, laissant la place au malt et assurant une finale bien atténuée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément minérale ; l’alcalinité doit être suffisante pour le malt ambré sans rendre la finale lourde. Chlorure et sulfate restent généralement équilibrés.",
        "empatage": "Infusion par paliers ou décoction possible. Le procédé doit développer pain et toast tout en conservant une bonne fermentescibilité.",
        "ebullitionEtHoublonnage": "Amertume moyenne, juste assez pour équilibrer le malt ; peu d’arôme tardif.",
        "fermentation": "Fermentation basse propre et relativement sèche, sans ester dominant ni diacétyle perceptible.",
        "maturation": "Lagering moyen à long pour fondre les notes toastées et obtenir une bière brillante.",
        "profilRecherche": "Cuivre brillant, pain toasté et malt Vienna profond, mais une finale sèche et nette qui interdit toute lourdeur caramélisée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Vienna Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/7/amber-bitter-european-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Vienna-Style Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Dreher",
          "edition": null,
          "reference": "Anton Dreher and the 1841 Lagerbier associated with the Vienna brewing tradition",
          "type": "source_primaire_historique",
          "url": "https://www.dreher.it/storia/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Wien Geschichte Wiki / Stadt Wien",
          "edition": null,
          "reference": "Anton Dreher der Ältere — Schwechater Lagerbier de 1841",
          "type": "histoire_locale",
          "url": "https://www.geschichtewiki.wien.gv.at/Anton_Dreher_der_%C3%84ltere",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Technisches Museum Wien",
          "edition": "2026",
          "reference": "Kühles Bier auf heißen Schienen — glace, wagons frigorifiques et brasseries Dreher",
          "type": "histoire_des_techniques",
          "url": "https://www.technischesmuseum.at/tmw-zine/kuehles_bier_auf_heissen_schienen",
          "consultation": "2026-08-10"
        }
      ]
    },
    {
      "id": "marzen",
      "nom": "Märzen",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [
        "Maerzen"
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
        "min": 5.6,
        "max": 6.3,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 18,
        "max": 24,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 16,
        "max": 34,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Mass",
          "Seidel"
        ]
      },
      "description": "Mars demeure dans le nom de la Märzen : brassée au printemps, gardée au froid, elle attendait que l’été relâche son étreinte. Sa forme ambrée moderne offre pain grillé, malt riche, croûte et une finale propre qui évite la confiserie. Cette bière de réserve devenue saison d’automne est généreuse comme un manteau bien coupé et beaucoup moins disposée à perdre ses boutons.",
      "histoireEtOrigines": `Märzen signifie littéralement « bière de mars ». Le nom s’inscrit dans une ancienne organisation saisonnière du brassage bavarois : avant la réfrigération mécanique, la production de bières de fermentation basse devenait difficile pendant les mois chauds. Les brassins de fin d’hiver ou de début de printemps pouvaient être légèrement plus forts, puis conservés dans des caves froides — parfois avec de la glace naturelle — pour traverser l’été. La Märzen est donc d’abord liée à une logique de calendrier, de garde et de stabilité avant de devenir l’image internationale de la bière d’Oktoberfest.

La forme ambrée moderne se développe au XIXe siècle dans le contexte des nouveaux malts Vienna et Munich et des échanges techniques autour d’Anton Dreher et de Gabriel Sedlmayr. À l’Oktoberfest de Munich, le site officiel de la fête rappelle qu’en 1872 la brasserie Spaten introduit une Märzen ambrée plus forte qui rencontre un succès durable. Cette bière finit par modeler l’idée internationale de l’« Oktoberfestbier » : cuivre à ambre, malt de pain et corps généreux.

Pourtant, la fête munichoise moderne ne sert plus principalement cette Märzen. À partir de la fin du XXe siècle, les grandes brasseries de Munich adoptent une Festbier dorée, plus claire et moins rassasiante. Le décalage est désormais culturel : hors de Munich, notamment aux États-Unis, « Oktoberfest » désigne encore très souvent une lager ambrée de type Märzen ; à Munich, la bière de fête contemporaine est plutôt blonde.

La Märzen historique moderne doit rester sèche et élégante. Le malt peut évoquer pain grillé, croûte et toast, mais le caramel intense est un contresens fréquent. Le houblon équilibre sans prendre le dessus, et la fermentation basse transforme une densité relativement forte en bière lisse plutôt qu’en dessert malté.`,
      "chapitres": [
        {
          "titre": "Brasser avant que l’été ne ferme la porte",
          "texte": `Dans la Bavière préindustrielle, la chaleur augmente les risques d’altération et complique la conduite des fermentations fraîches. Les règlements historiques encadrent la saison de brassage ; les derniers brassins du printemps doivent traverser plusieurs mois. Davantage de matière, un houblonnage suffisant et une garde dans des caves rafraîchies par la glace apportent une réponse pratique.

La Märzen naît de cette chaîne causale : saison limitée, bière de réserve, stockage froid, service plus tardif. Réduite à une couleur ambrée, elle perd le calendrier qui lui donne son nom.`
        },
        {
          "titre": "L’ambrée de 1872 devient une mémoire d’exportation",
          "texte": `Les nouveaux malts du XIXe siècle transforment ensuite la bière de mars. La Märzen ambrée associée à Spaten et à l’Oktoberfest de 1872 fournit une image puissante : cuivre, pain et fête d’automne. Quand Munich passe progressivement à la Festbier dorée, cette image ne disparaît pas ; elle continue de voyager dans les bouteilles d’exportation et les Oktoberfests américaines.

Le même mot finit donc par désigner un ancien calendrier, un profil ambré historique et une saison commerciale moderne. Sous les tentes munichoises, la Festbier a pris la relève ; la Märzen garde la réserve de mars et son voyage culturel.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Munich et Vienna dominants, souvent avec Pilsner pour ajuster la couleur et l’atténuation.",
          "Caramel faible ou absent ; la richesse doit venir des malts de base et de la conduite thermique."
        ],
        "houblons": [
          "Houblons nobles allemands, amertume modérée, arôme faible."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre avec bonne atténuation et faible production d’esters."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément minérale, assez équilibrée pour soutenir la rondeur du malt sans accentuer une douceur résiduelle.",
        "empatage": "Décoction historiquement cohérente et toujours pratiquée par certaines brasseries ; infusion par paliers possible. Le but est le pain grillé et une texture pleine mais fermentescible.",
        "ebullitionEtHoublonnage": "Houblonnage principalement d’équilibre ; ébullition suffisante pour développer un moût propre sans créer de caramel brûlé.",
        "fermentation": "Fermentation basse régulière ; la force doit rester lisse, sans alcool chaud.",
        "maturation": "Lagering traditionnellement prolongé, historiquement lié à la garde estivale. Les installations modernes raccourcissent parfois les délais sans changer le profil attendu.",
        "profilRecherche": "Une lager ambrée riche en pain et toast, pleine mais sèche, avec un malt noble plutôt qu’un caramel sucré."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Märzen — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/6/amber-malty-european-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Maerzen — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Oktoberfest.de / Stadt München",
          "edition": null,
          "reference": "Schottenhamel history — Märzen introduced to Oktoberfest in 1872",
          "type": "source_institutionnelle_historique",
          "url": "https://www.oktoberfest.de/en/tents/big-tents/festhalle-schottenhamel",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Dreher",
          "edition": null,
          "reference": "Anton Dreher and the 1841 Lagerbier associated with the Vienna brewing tradition",
          "type": "source_primaire_historique",
          "url": "https://www.dreher.it/storia/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Historisches Lexikon Bayerns",
          "edition": null,
          "reference": "Purity Law, 1516 — réglementation bavaroise du brassage, des prix et de la saison",
          "type": "source_historique_universitaire",
          "url": "https://www.historisches-lexikon-bayerns.de/Lexikon/EN%3APurity_Law%2C_1516",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "University of Chicago Library",
          "edition": null,
          "reference": "Something’s Brewing — glace naturelle, caves et réfrigération brassicole",
          "type": "histoire_des_techniques",
          "url": "https://www.lib.uchicago.edu/collex/exhibits/somethings-brewing/brewing-technology/refrigeration/",
          "consultation": "2026-08-10"
        }
      ]
    },
    {
      "id": "franconian-rotbier",
      "nom": "Franconian Rotbier",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [
        "Rotbier"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Franconie, notamment Nuremberg",
        "ville": null,
        "region": "Franconie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 5.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 18,
        "max": 35,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 20,
        "max": 36,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Willi Becher"
        ]
      },
      "description": "Nuremberg donne à la Franconian Rotbier son décor : robe cuivre-rubis, malt de croûte et de noisette, finale nette de lager et caves creusées dans le grès. Ce patrimoine souterrain est solidement documenté ; l’affirmation d’une origine unique reste discutée jusque dans les sources locales. Cette bière rouge préfère donc la précision aux armoiries trop brillantes : tradition vivante, généalogie tenue au conditionnel.",
      "histoireEtOrigines": `La Rotbier franconienne est particulièrement associée à Nuremberg. Les sources touristiques institutionnelles de la ville présentent la cité comme « Home of Rotbier » et rattachent la bière rouge locale à une tradition médiévale. Les règlements de Nuremberg encadrent très tôt les matières premières et la qualité de la bière ; les caves creusées dans le grès sous la ville permettent ensuite de conserver les fûts à température fraîche, un avantage décisif pour les bières de garde puis pour les fermentations basses.

Les archives municipales citées par Tourismus Nürnberg montrent l’importance du brassage local : à la fin du XVIe siècle, la ville compte plusieurs dizaines de brasseries de Rotbier en plus des producteurs de bière blanche. Cette donnée permet de sortir le style du folklore contemporain : la bière rouge n’est pas seulement une invention craft utilisant un nom ancien. En revanche, il faut rester prudent sur la continuité exacte des recettes. Entre les bières médiévales, les transformations du maltage, l’arrivée de la fermentation basse moderne et les Rotbier actuelles, les procédés ont profondément changé.

La Rotbier moderne de Franconie est une lager ambrée à rouge rubis, centrée sur le malt mais plus sèche qu’une bière caramel. Elle peut évoquer croûte de pain, toast et noisette légère, soutenus par des houblons allemands discrets. Sa codification récente comme Franconian-Style Rotbier donne une définition de compétition à une identité régionale bien plus ancienne. La meilleure lecture encyclopédique consiste donc à tenir ensemble les deux niveaux : une tradition nurembergeoise documentée de bière rouge et un style moderne de fermentation basse défini beaucoup plus récemment.`,
      "chapitres": [
        {
          "titre": "Sous Nuremberg, la température reste sage",
          "texte": `Les galeries creusées dans le grès sont attestées à partir du XIVe siècle et maintiennent une fraîcheur voisine de 8 à 10 °C. Elles servent au stockage de la bière bien avant la réfrigération mécanique, puis accueillent de la glace pour renforcer l’effet. Cette architecture souterraine offre à Nuremberg un avantage matériel réel : garder des fûts pendant que la surface chauffe.

La cave n’établit pas à elle seule la recette d’une Rotbier médiévale, mais elle explique comment une culture de bière de garde peut prospérer. Ici, le lieu ne sert pas seulement de décor romanesque ; il travaille dans le procédé.`
        },
        {
          "titre": "Une origine revendiquée, une continuité à nuancer",
          "texte": `Tourismus Nürnberg appelle la ville « patrie de la Rotbier » tout en signalant que l’origine exacte de la bière rouge reste incertaine et que d’autres traditions revendiquent des antériorités. Cette contradiction apparente est précieuse : une institution locale peut célébrer son héritage sans transformer chaque slogan en verdict d’archive.

La continuité des recettes demeure elle aussi impossible à supposer. Maltage, levures et froid ont changé. Ce qui résiste au contrôle factuel est plus intéressant qu’un mythe parfait : une forte culture nurembergeoise de bière rouge, des caves documentées et une renaissance moderne qui réinterprète cette mémoire.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Vienna et Munich comme base logique ; Pilsner possible pour alléger, malt colorant ou torréfié désamérisé en très petite quantité pour ajuster le rouge sans goût brûlé."
        ],
        "houblons": [
          "Houblons allemands nobles ou régionaux, amertume modérée, arôme faible à moyen-faible."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre, adaptée à une bière maltée mais sèche."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément minérale, sans sulfate agressif ; l’équilibre doit favoriser le pain et le toast.",
        "empatage": "Paliers ou décoction possible pour renforcer les réactions de Maillard ; éviter une charge excessive de caramel malt.",
        "ebullitionEtHoublonnage": "Houblonnage d’équilibre, faible expression aromatique.",
        "fermentation": "Fermentation basse propre, sans ester dominant.",
        "maturation": "Garde froide jusqu’à une bière limpide, aux reflets rouge-cuivre nets.",
        "profilRecherche": "Une lager rouge franconienne sèche, toastée et élégante, dont la couleur ne repose pas sur une sucrosité de caramel."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Franconian-Style Rotbier — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Tourismus Nürnberg",
          "edition": null,
          "reference": "Nuremberg — Home of Rotbier, medieval brewing regulations and local bottom-fermented red beer",
          "type": "source_institutionnelle_historique",
          "url": "https://tourismus.nuernberg.de/en/food-drink/nurembergs-specialties/beer/nuremberg-home-of-rotbier-1/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Tourismus Nürnberg",
          "edition": null,
          "reference": "Historische Felsengänge — caves de grès attestées depuis 1380 et température de conservation",
          "type": "patrimoine_historique",
          "url": "https://tourismus.nuernberg.de/andere-sprachen/location/location/historische-felsengaenge/",
          "consultation": "2026-08-10"
        }
      ]
    },
    {
      "id": "international-amber-lager",
      "nom": "International Amber Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
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
        "min": 4.5,
        "max": 6,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 15,
        "max": 35,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 18,
        "max": 40,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Chope"
        ]
      },
      "description": "Cuivre clair, pain toasté et caramel léger donnent à l’International Amber Lager un cran de couleur et de malt de plus que la blonde mondiale. Corps moyen et amertume mesurée maintiennent la facilité. Aucun berceau unique ne l’attend au bout du récit : souvent née d’un portefeuille de brasserie ou d’une adaptation de marché, elle offre de la chaleur sans transformer chaque gorgée en cours du soir.",
      "histoireEtOrigines": `L’International Amber Lager est moins une tradition régionale qu’une famille de convergence. À mesure que la lager pâle devient le standard mondial, de nombreuses brasseries proposent une version plus colorée et plus maltée destinée aux consommateurs qui souhaitent davantage de goût sans quitter le registre très accessible de la lager industrielle ou semi-industrielle. Les classifications actuelles regroupent ces bières sous une catégorie internationale plutôt que de leur inventer un berceau unique.

Le style peut recevoir des influences de Vienna Lager, Märzen, amber lager américaine ou traditions locales, mais il s’en distingue par sa flexibilité. Le malt peut apporter caramel léger, pain toasté ou biscuit ; les houblons restent généralement en arrière-plan ; le corps est léger à moyen et la fermentation doit être très propre. Des adjoints comme maïs ou riz peuvent être présents, tout comme une base tout malt.

Cette largeur explique pourquoi les exemples commerciaux diffèrent beaucoup d’un pays à l’autre. L’International Amber Lager n’est pas une « Vienna simplifiée » au sens historique : c’est une catégorie utile pour décrire les lagers ambrées de diffusion internationale qui ne revendiquent ni la sécheresse toastée de Vienna, ni la richesse de Märzen, ni une tradition locale plus précise.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Base Pilsner/lager avec Vienna, Munich ou malt caramel léger pour la couleur et le goût ; maïs ou riz possibles selon l’école."
        ],
        "houblons": [
          "Houblons doux et discrets, amertume faible à modérée."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre et régulière."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Plutôt neutre à modérément minérale, conçue pour une grande buvabilité.",
        "empatage": "Empâtage de fermentescibilité moyenne à élevée ; ne pas accumuler les dextrines et malts caramel.",
        "ebullitionEtHoublonnage": "Houblonnage d’équilibre, arôme faible.",
        "fermentation": "Fermentation basse propre et suffisamment atténuée.",
        "maturation": "Garde froide et clarification jusqu’à un profil lisse.",
        "profilRecherche": "Une lager ambrée accessible : davantage de malt et de couleur qu’une pale lager internationale, sans lourdeur ni identité régionale forcée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "International Amber Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/2/international-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "International amber lager categories — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "czech-amber-lager",
      "nom": "Czech Amber Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Tchéquie"
      ],
      "origine": {
        "libelle": "Bohême et Moravie",
        "ville": null,
        "region": "Bohême",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.4,
        "max": 5.8,
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
        "min": 20,
        "max": 32,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Mug tchèque",
          "Pokal"
        ]
      },
      "description": "Polotmavé, « semi-sombre », place la Czech Amber Lager entre pâle et brune : cuivre à grenat, pain grillé, caramel sec, houblon tchèque épicé et texture moelleuse. Certaines versions penchent vers le malt, d’autres vers l’amertume ; la catégorie locale accepte ce jeu d’équilibre. Plus large qu’une Vienna repeinte, cette famille tchèque laisse ses nuances compter autant que la case.",
      "histoireEtOrigines": `La Czech Amber Lager appartient au vocabulaire tchèque des polotmavé pivo — littéralement des bières « semi-sombres ». Le décret national 248/2018 définit les bières polotmavé et tmavé par l’emploi de malts sombres, caramel ou colorants en mélange avec des malts pâles ; la force du moût relève d’une autre classification. Une amber lager tchèque peut donc être výčepní, ležák ou plus forte : la couleur et la densité dessinent deux axes, pas une seule échelle.

Cette règle sépare aussi polotmavé de řezané, la bière obtenue par mélange d’une pâle et d’une sombre au conditionnement ou au service. Confondre les deux efface une distinction locale actuelle. Dans la recette d’une polotmavé, Pilsner, Vienna, Munich, caramel et petites quantités de malt sombre construisent directement couleur et goût ; l’assemblage dans le verre porte un autre nom.

La renaissance des petites brasseries tchèques a rendu ces bières plus visibles hors du pays. Leur force est l’équilibre : pain grillé, caramel sec ou biscuit peuvent être présents, mais le houblon tchèque garde souvent une place plus importante que dans une lager ambrée purement maltée. Une légère rondeur de fermentation peut exister ; la bière doit néanmoins finir proprement et rester faite pour la consommation répétée en demi-litre.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Pilsner avec Vienna et/ou Munich ; caramel modéré et malt sombre en petite quantité possibles selon la teinte et la profondeur recherchées."
        ],
        "houblons": [
          "Saaz/Žatec ou variétés tchèques proches, avec une amertume et un parfum épicé souvent clairement perceptibles."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager tchèque ou neutre, privilégiant rondeur et netteté."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faiblement minéralisée, ce qui aide à garder une amertume douce malgré le malt plus riche.",
        "empatage": "Paliers ou décoction ; une décoction peut intensifier pain, croûte et couleur sans dépendre du caramel malt.",
        "ebullitionEtHoublonnage": "Amertume moyenne avec houblon tchèque ; l’équilibre varie selon la brasserie, d’un profil centré sur le malt à une expression presque dominée par le houblon.",
        "fermentation": "Fermentation basse propre ; faible diacétyle parfois acceptable dans l’école tchèque mais jamais obligatoire.",
        "maturation": "Lagering jusqu’à intégration de la complexité maltée et du houblon.",
        "profilRecherche": "Une amber lager tchèque souple et complexe, où pain, caramel sec et houblon épicé restent tous lisibles."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Czech Amber Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/3/czech-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Czech-Style Amber Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "République tchèque — e-Sbírka",
          "edition": "version consolidée au 14 juin 2026",
          "reference": "Vyhláška č. 248/2018 Sb., § 16 — définitions de polotmavé, tmavé et řezané",
          "type": "texte_reglementaire",
          "url": "https://e-sbirka.gov.cz/sb/2018/248?odkazId=112986335",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-amber-lager",
      "nom": "American Amber Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
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
        "min": 4.5,
        "max": 6.2,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 18,
        "max": 40,
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pint américain",
          "Pokal"
        ]
      },
      "description": "Cuivre, pain toasté, caramel léger et parfois houblon plus présent enrichissent l’American Amber Lager sans quitter le registre accessible. Sa famille moderne est vaste : inspiration viennoise, saisonnière craft ou déclinaison maltée d’une blonde maison. Elle vise le confort sans la mollesse, avec une fermentation propre et une finale assez sèche pour que l’ambre reste une couleur, pas une consigne de sucrage.",
      "histoireEtOrigines": `L’American Amber Lager est une catégorie moderne et large. Elle émerge du paysage américain où coexistent, à partir de la fin du XXe siècle, les lagers industrielles très pâles et une scène artisanale qui remet en valeur les malts plus colorés. Certaines bières s’inspirent de Vienna ou Märzen ; d’autres sont simplement des lagers américaines enrichies en malt caramel ou toasté. Cette diversité résiste à toute généalogie européenne unique.

La catégorie actuelle accepte un caractère de malt caramel ou toasté faible à moyen et une amplitude de houblonnage assez importante. Cette souplesse reflète la culture craft américaine : une Amber Lager peut privilégier le malt, rechercher l’équilibre ou accentuer légèrement le houblon, tant que la fermentation reste propre et que le profil ne dérive pas vers une American Amber Ale fruitée.

Le style a aussi une dimension de transition commerciale. Pour des consommateurs habitués à la pale lager, une robe cuivre et un peu de caramel donnent une impression de richesse sans demander la torréfaction d’une dark lager ou la force d’un Bock. Les meilleures interprétations contemporaines évitent cependant le piège du « malt caramel + faible houblon » : elles recherchent un vrai fond de pain et une finale assez sèche pour que la couleur ne soit pas synonyme de lourdeur.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Base lager/Pilsner complétée de Vienna, Munich et éventuellement caramel léger à moyen ; la composition est plus libre que Vienna Lager."
        ],
        "houblons": [
          "Houblons américains ou nobles, de faible à moyenne intensité selon l’interprétation."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre, permettant de distinguer le malt des esters."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil équilibré, ajustable selon la quantité de houblon ; alcalinité suffisante pour les malts ambrés mais sans excès.",
        "empatage": "Empâtage moyen à fermentescible ; éviter que le caramel malt et les dextrines produisent une finale collante.",
        "ebullitionEtHoublonnage": "Amertume d’équilibre ou légèrement affirmée, arôme variable mais sans intensité d’IPA.",
        "fermentation": "Fermentation lager propre, faible ester et diacétyle absent.",
        "maturation": "Garde froide jusqu’à un profil lisse et clair.",
        "profilRecherche": "Une lager ambrée américaine nette et moderne, avec caramel/toast maîtrisés et une buvabilité qui reste centrale."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Amber Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-marzen-oktoberfest",
      "nom": "American Märzen / Oktoberfest",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [
        "American Oktoberfest"
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
        "min": 5,
        "max": 6.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 18,
        "max": 30,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 18,
        "max": 40,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Mass",
          "Pint américain"
        ]
      },
      "description": "Aux États-Unis, l’American Märzen / Oktoberfest conserve l’image ambrée que Munich a depuis remplacée sous ses tentes par une Festbier dorée. Cuivre, pain toasté, malt rond et finale propre composent cette saisonnière d’automne héritée du voyage des traditions germaniques. Elle raconte moins la Wiesn actuelle que sa mémoire exportée — une photographie de 1872 que le craft continue de développer, parfois avec trop de caramel dans le révélateur.",
      "histoireEtOrigines": `L’American Märzen / Oktoberfest montre comment un style change de sens lorsqu’il voyage. Aux États-Unis, le mot « Oktoberfest » reste fortement associé à la lager ambrée de type Märzen popularisée à Munich à partir de 1872. Cette image a été diffusée par les brasseries germano-américaines, les fêtes d’automne et plus tard par le mouvement craft. Pendant ce temps, l’Oktoberfest de Munich adopte progressivement une Festbier beaucoup plus blonde et fluide.

Les classifications de concours séparent la Märzen de plusieurs lectures d’Oktoberfest, mais le marché américain utilise encore « Oktoberfest » de façon plus large. Une bière saisonnière américaine peut donc aller d’une Märzen assez historique à une amber lager plus caramélisée, parfois avec une intensité de malt que les exemples allemands modernes éviteraient.

Pour une Brassopédie encyclopédique, il est utile de distinguer l’authenticité culturelle de la qualité brassicole. Une American Oktoberfest n’est pas nécessairement une imitation ratée de Festbier : c’est souvent la continuité américaine d’une ancienne image munichoise. En revanche, lorsqu’on vise explicitement Märzen, pain toasté et sécheresse doivent rester plus importants que caramel sucré ou épices automnales.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Vienna et Munich avec Pilsner ; caramel possible en quantité plus libre que dans la Märzen allemande, mais à maîtriser."
        ],
        "houblons": [
          "Houblons nobles, américains doux ou combinaison ; généralement en soutien."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre."
        ],
        "ingredientsComplementaires": [
          "Les épices ne font pas partie du style classique, même si certaines bières saisonnières commerciales américaines en utilisent."
        ],
        "profilEau": "Modérément minérale, orientée vers le malt mais sans alcalinité lourde.",
        "empatage": "Paliers ou infusion, avec un corps moyen et une bonne atténuation.",
        "ebullitionEtHoublonnage": "Houblonnage équilibrant ; l’arôme reste secondaire.",
        "fermentation": "Fermentation basse propre et alcool bien intégré.",
        "maturation": "Garde froide de plusieurs semaines selon la souche et la densité.",
        "profilRecherche": "Une lager d’automne américaine ambrée, riche en pain et toast, festive mais encore sèche et nette."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American and German Oktoberfest/Maerzen categories — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Oktoberfest.de / Stadt München",
          "edition": null,
          "reference": "Schottenhamel history — Märzen introduced to Oktoberfest in 1872",
          "type": "source_institutionnelle_historique",
          "url": "https://www.oktoberfest.de/en/tents/big-tents/festhalle-schottenhamel",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "mexican-amber-lager",
      "nom": "Mexican Amber Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Mexique"
      ],
      "origine": {
        "libelle": "Mexique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 5.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 10,
        "max": 25,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 18,
        "max": 38,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Chope"
        ]
      },
      "description": "Cuivre lumineux, pain toasté, caramel discret et finale sèche dessinent la Mexican Amber Lager. L’influence des lagers viennoises et des brasseurs européens du XIXe siècle est réelle, sans autoriser une généalogie unique pour toutes les marques. Le Mexique a adapté cette grammaire aux céréales, aux eaux et au marché locaux : une ambre de terrasse dont l’histoire mérite mieux qu’un simple costume de Vienne.",
      "histoireEtOrigines": `Une histoire séduisante fait parfois arriver la Vienna Lager au Mexique avec l’empereur Maximilien dans les années 1860. La chronologie technique résiste mal à cette version : la Cervecería de Toluca y México est bien fondée en 1865, mais brasse alors à fermentation haute. Sans froid artificiel fiable, produire régulièrement une lager dans ce climat reste une autre affaire.

Le tournant arrive plus tard. Santiago Graf rachète la brasserie en 1875 ; le rail et les installations de glace puis de réfrigération permettent, dans les années 1880, de développer une production de lager. Le Museo del Objeto del Objeto associe Graf à Toluca Lager et à cette industrialisation. Les lagers ambrées qui en résultent reçoivent des influences européennes et nord-américaines, mais aucune archive consultée ne démontre une recette de Dreher transportée intacte par la cour impériale.

L’histoire officielle de Victoria distingue d’ailleurs la fondation de la brasserie en 1865 des premiers documents de la marque, datés de 1906. La première date ne peut donc servir d’acte de naissance à une Vienna Lager de fermentation basse inchangée. Le style mexicain moderne est une adaptation : malts et adjoints, eau, froid industriel et habitudes locales produisent une ambre souvent plus douce et lisse que l’archétype autrichien.

Le style moderne peut être plus doux et moins strictement toasté qu’une Vienna Lager européenne de concours. Maïs ou autres céréales adjointes peuvent alléger le corps ; le caramel peut être un peu plus présent ; l’amertume est souvent contenue. Pourtant la meilleure Mexican Amber Lager garde une vraie tension : couleur cuivre, pain et caramel léger, fermentation très propre et finale suffisamment sèche pour rester rafraîchissante sous un climat chaud.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt lager avec Vienna/Munich ou caramel pour la couleur ; maïs ou autres céréales adjointes possibles selon la tradition industrielle de la brasserie."
        ],
        "houblons": [
          "Houblons doux, nobles ou apparentés, amertume faible à modérée."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérément minérale, sans dureté excessive.",
        "empatage": "Bonne fermentescibilité malgré la couleur ; gestion spécifique des adjoints si présents.",
        "ebullitionEtHoublonnage": "Houblonnage d’équilibre, faible parfum.",
        "fermentation": "Fermentation basse propre et stable.",
        "maturation": "Garde froide, clarification et carbonatation moyenne à vive.",
        "profilRecherche": "Une lager mexicaine cuivrée et souple, avec malt toasté/caramel léger mais une finale rafraîchissante."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Mexican-Style Amber Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Cerveza Victoria",
          "edition": null,
          "reference": "Nuestra historia — brasserie de Toluca fondée en 1865 et premiers documents de la marque Victoria en 1906",
          "type": "source_primaire_historique",
          "url": "https://victoriausa.com/pages/nuestra-historia",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Museo del Objeto del Objeto / Google Arts & Culture",
          "edition": null,
          "reference": "Los orígenes de la cerveza mexicana — Santiago Graf, Toluca Lager, glace et industrialisation",
          "type": "source_museale",
          "url": "https://artsandculture.google.com/story/los-or%C3%ADgenes-de-la-cerveza-mexicana-museo-del-objeto-del-objeto/rAWhasEZWJSLGA?hl=es-MX",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Casket Beer",
          "edition": "2020",
          "reference": "Rethinking Vienna Lager in Mexico — enquête critique sur la filiation Maximilien–Vienna Lager",
          "type": "enquete_historique_specialisee",
          "url": "https://www.casketbeer.com/home/2020/11/9/rethinking-vienna-lager-in-mexico",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Universidad Autónoma del Estado de México",
          "edition": "2025",
          "reference": "Santiago Graf y la Cervecera Toluca y México S.A. (1875–1910) — industrialisation, rail et modernisation",
          "type": "travail_universitaire",
          "url": "https://ri.uaemex.mx/handle/20.500.11799/142999?show=full",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "HEINEKEN México",
          "edition": null,
          "reference": "History of Cervecería Cuauhtémoc and Mexican industrial brewing since 1890",
          "type": "source_primaire_historique",
          "url": "https://www.heinekenmexico.com/heineken-mexico",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "munich-dunkel",
      "nom": "Munich Dunkel",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [
        "Dunkel"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Munich, Bavière",
        "ville": "Munich",
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 5.6,
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
        "min": 28,
        "max": 56,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Willi Becher"
        ]
      },
      "description": "Avant la Helles dorée, Munich buvait sombre : la Dunkel conserve ce brun acajou, avec pain noir, croûte, noisette et parfois chocolat doux, sans brûlé mordant. Le malt Munich construit sa profondeur tandis que la fermentation basse garde la finale souple. Ce sombre-là fut la norme locale — le pain quotidien de la ville, simplement servi en chope.",
      "histoireEtOrigines": `Avant que Munich ne devienne synonyme de Helles dorée, la bière bavaroise était majoritairement sombre. Le Munich Dunkel représente cette ancienne norme : une lager brune centrée sur des malts riches et des procédés capables de développer pain, croûte et profondeur de Maillard. München Tourismus rappelle que les bières sombres dominent la culture locale pendant des siècles et que l’apparition du Helles à la fin du XIXe siècle constitue justement une rupture avec cet héritage.

Le développement des malts Munich, plus foncés que le Vienna et beaucoup plus aromatiques que le Pilsner, permet de produire une bière brun-cuivre sans utiliser la torréfaction noire comme source principale de goût. La décoction, longtemps pratique dans les brasseries d’Europe centrale, renforce encore la profondeur maltée. Le Dunkel historique ne ressemble donc pas à une stout fermentée froid : le café brûlé, l’astringence et la torréfaction forte sont étrangers au centre du style.

Croûte, toast, noisette et parfois chocolat très doux se déploient avec une amertume modérée et une finale assez sèche. Les malts torréfiés modernes désamérisés peuvent aider à ajuster la couleur, mais ils restent un outil discret. Ce qui fait la grandeur d’un Dunkel est sa capacité à paraître riche sans être lourd : la complexité maltée arrive par couches, tandis que la fermentation lager et l’amertume contenue nettoient la bouche.`,
      "chapitres": [
        {
          "titre": "La bière sombre précède le style sombre",
          "texte": `Pendant des siècles, les malts disponibles donnent naturellement des bières plus foncées que les blondes modernes. Munich boit donc brun avant de disposer d’une catégorie appelée Munich Dunkel au sens des concours actuels. Fermentation, fours et recettes évoluent ; la couleur ancienne ne constitue pas à elle seule une continuité de style.

Ce qui devient spécifiquement munichois est une manière d’organiser cette profondeur autour du malt et de la fermentation basse. La Helles de 1894 crée ensuite le contraste qui rend le Dunkel visible comme branche : l’ancien standard reçoit un nom plus net lorsque sa nouvelle sœur entre dans la salle.`
        },
        {
          "titre": "Faire du pain avec du malt, pas du café",
          "texte": `Le malt Munich, plus intensément touraillé qu’un Pilsner, fournit croûte, pain brun et réactions de Maillard. Une décoction peut renforcer ces impressions ; de faibles quantités de malt sombre règlent la couleur. L’objectif n’est pas une torréfaction de stout, car le brûlé et l’astringence écraseraient la douceur du pain.

La fermentation basse et une atténuation correcte terminent le travail en allégeant la finale. Voilà le paradoxe mémorable du Dunkel : fabriquer une grande profondeur avec des outils qui lui interdisent de devenir pesante.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Munich dominant ; Pilsner ou Vienna possibles pour ajuster fermentescibilité et couleur.",
          "Très faible quantité de malt sombre désamérisé possible pour la teinte, sans caractère brûlé."
        ],
        "houblons": [
          "Houblons nobles allemands en soutien, faible arôme."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre, laissant le malt Munich au premier plan."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément alcaline/minérale pour accompagner les malts sombres, mais sans dureté carbonatée perceptible.",
        "empatage": "Décoction traditionnellement très cohérente ; infusion par paliers moderne possible. L’objectif est le Maillard de pain/croûte, non le caramel sucré.",
        "ebullitionEtHoublonnage": "Amertume basse à moyenne, juste pour empêcher la richesse maltée de devenir lourde.",
        "fermentation": "Fermentation basse propre, faible ester et diacétyle absent.",
        "maturation": "Lagering moyen à long pour un malt lisse et une finale propre.",
        "profilRecherche": "Une lager brune munichoise profonde en pain et croûte, jamais brûlée, avec une richesse étonnamment buvable."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Munich Dunkel — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/8/dark-european-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Munich-Style Dunkel — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "München Tourismus",
          "edition": null,
          "reference": "Munich beer typology — Helles and Dunkel in local beer culture",
          "type": "source_institutionnelle",
          "url": "https://www.munich.travel/en/topics/eat-drink/munich-beers-typology",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "schwarzbier",
      "nom": "Schwarzbier",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Thuringe et Saxe",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.4,
        "max": 5.4,
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
        "min": 34,
        "max": 60,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Seidel"
        ]
      },
      "description": "Noire à l’œil, légère dans sa démarche, la Schwarzbier offre pain sombre, cacao sec, café doux, amertume délicate et finale nette. Sa torréfaction reste polie, loin de l’épaisseur d’une stout. Köstritz documente une activité brassicole dès 1543, mais le verre moderne doit autant aux malts récents et au froid industriel qu’aux archives ; cinq siècles ne tiennent pas dans une recette immobile.",
      "histoireEtOrigines": `Schwarzbier signifie simplement « bière noire », mais le style moderne possède une identité plus précise que son nom générique. La Köstritzer Schwarzbierbrauerei documente une tradition brassicole remontant à 1543 dans la région de Bad Köstritz, en Thuringe. Cette ancienneté ne signifie pas que la Schwarzbier actuelle était brassée exactement de la même manière au XVIe siècle : les levures, le maltage, le refroidissement et la fermentation basse moderne se sont transformés. Elle démontre néanmoins qu’une tradition de bière sombre est profondément enracinée dans l’Allemagne centrale.

La Schwarzbier contemporaine est une lager noire étonnamment légère. Le malt sombre peut évoquer cacao, café doux, pain grillé ou croûte, mais les caractères brûlés, acrides et très torréfiés d’une stout sont généralement inappropriés. Cette distinction est devenue plus facile à obtenir avec des malts torréfiés désamérisés et des techniques permettant d’extraire la couleur sans trop d’astringence.

Comparée au Munich Dunkel, la Schwarzbier est souvent plus sombre, un peu plus sèche et légèrement plus marquée par le malt torréfié ; comparée à une porter, elle est plus propre, moins fruitée et beaucoup plus retenue. Cette position intermédiaire explique son charme : elle a l’apparence d’une bière massive mais le comportement d’une lager de grande buvabilité.`,
      "chapitres": [
        {
          "titre": "1543 documente une brasserie, pas la bouteille actuelle",
          "texte": `Köstritzer fait remonter sa documentation à l’Erbschenke de Köstritz en 1543. Cette date établit une activité brassicole ancienne dans le lieu ; elle ne prouve ni une recette inchangée ni l’usage, au XVIe siècle, d’une levure lager définie comme aujourd’hui. Une enquête indépendante de Beervana formule la même réserve : la nature exacte de la bière ancienne demeure difficile à connaître.

La distinction retire peu au patrimoine et beaucoup au brouillard. Köstritz offre un témoin régional exceptionnel ; la Schwarzbier moderne résulte aussi de siècles de changements techniques.`
        },
        {
          "titre": "Obtenir le noir sans lui donner tout le micro",
          "texte": `Les malts torréfiés désamérisés et les ajouts tardifs de grain sombre permettent de prendre couleur et cacao en limitant brûlé, acidité et astringence. Malt Munich ou Pilsner maintient dessous une base de pain. Le procédé produit un verre noir dont la bouche reste sèche, légère et nette.

Cette causalité distingue la Schwarzbier d’une stout réduite au froid. La fermentation basse contribue à la propreté, mais le choix et l’extraction des malts décident si le noir évoquera le cacao doux ou le fond d’une cafetière oubliée.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Pilsner et/ou Munich comme base ; malt chocolat léger ou malt torréfié désamérisé en faible proportion pour couleur et cacao sans brûlé."
        ],
        "houblons": [
          "Houblons allemands nobles ou apparentés, amertume faible à moyenne et arôme discret."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre et atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Minéralité modérée ; l’alcalinité peut être ajustée pour les malts sombres mais une eau trop dure accentue l’âcreté.",
        "empatage": "Empâtage visant une finale sèche. Les malts très sombres peuvent être ajoutés tardivement ou choisis désamérisés pour limiter astringence et brûlé.",
        "ebullitionEtHoublonnage": "Amertume suffisante pour nettoyer le malt sombre, sans houblon aromatique dominant.",
        "fermentation": "Fermentation basse nette, aucun ester fruité dominant.",
        "maturation": "Lagering permettant au cacao, au pain sombre et à l’amertume de se fondre.",
        "profilRecherche": "Noire visuellement, légère dans son comportement : cacao et pain sombre propres, torréfaction contenue, finale sèche."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Schwarzbier — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/8/dark-european-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Schwarzbier — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Köstritzer Schwarzbierbrauerei",
          "edition": null,
          "reference": "Brewery history — documented Schwarzbier tradition since 1543",
          "type": "source_primaire_historique",
          "url": "https://www.koestritzer.de/brauerei/historie/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Beervana",
          "edition": "2023",
          "reference": "The Making of a Classic: Köstritzer Schwarzbier — enquête sur la continuité historique et le profil moderne",
          "type": "presse_specialisee",
          "url": "https://www.beervanablog.com/beervana/2023/4/17/the-making-of-a-classic-kostritzer-schwarzbier",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "international-dark-lager",
      "nom": "International Dark Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
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
        "min": 4.2,
        "max": 6.2,
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
        "min": 30,
        "max": 70,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Chope"
        ]
      },
      "description": "Sous une robe brune ou noire, l’International Dark Lager conserve le langage accessible de la lager mondiale. Caramel léger, pain, chocolat discret et fermentation neutre ajoutent une ombre douce sans durcir la gorgée ; l’amertume reste basse. Souvent née d’une logique de gamme plutôt que d’une tradition régionale, elle prouve qu’un service marketing peut choisir le sombre sans obliger le brasseur à allumer un feu de tourbe.",
      "histoireEtOrigines": `L’International Dark Lager est la sœur sombre de l’International Pale Lager. Elle ne possède pas de naissance régionale unique : on la rencontre partout où les grandes lagers pâles ont généré une déclinaison brune ou noire destinée à offrir davantage de malt, de couleur ou d’image traditionnelle sans changer profondément le profil de fermentation.

Plus douce et plus maltée que la pale lager internationale, elle reste très accessible. Le caractère sombre peut provenir de malts caramel, de malts torréfiés doux, de sirops colorants autorisés selon les marchés ou d’un assemblage de plusieurs matières premières. La torréfaction demeure généralement moins ferme que dans une Schwarzbier, et la fermentation reste neutre.

Cette catégorie rappelle une réalité importante de l’encyclopédie : toutes les familles n’ont pas une histoire romantique. Certaines naissent de logiques de portefeuille commercial, de standardisation et d’adaptation aux goûts locaux. Cela n’enlève rien au savoir-faire nécessaire pour produire une dark lager stable et propre ; cela signifie simplement que son identité est fonctionnelle et internationale plutôt que liée à une ville ou à un procédé ancestral.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Base lager pâle avec Vienna/Munich, caramel ou petite quantité de malt noir doux ; adjoints comme maïs/riz possibles."
        ],
        "houblons": [
          "Houblons faibles à modérés, généralement peu aromatiques."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre."
        ],
        "ingredientsComplementaires": [
          "Selon les traditions industrielles, des colorants de malt ou extraits peuvent exister ; ils ne sont pas requis pour une interprétation artisanale."
        ],
        "profilEau": "Neutre à modérément minérale.",
        "empatage": "Bonne fermentescibilité afin que la couleur sombre ne s’accompagne pas automatiquement d’un corps lourd.",
        "ebullitionEtHoublonnage": "Faible amertume et peu d’arôme de houblon.",
        "fermentation": "Fermentation basse propre et neutre.",
        "maturation": "Garde froide, clarification et stabilisation.",
        "profilRecherche": "Une lager sombre internationale douce et nette : davantage de malt et de couleur, mais toujours tournée vers l’accessibilité."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "International Dark Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/2/international-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "International dark lager categories — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "european-dark-lager",
      "nom": "European Dark Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Europe"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.2,
        "max": 6.2,
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
        "min": 30,
        "max": 70,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Chope"
        ]
      },
      "description": "European Dark Lager est un parapluie pour les lagers brunes du continent qui échappent aux profils plus précis de Dunkel, Schwarzbier ou tmavé. Pain noir, toast, caramel sec et chocolat doux varient selon la région, toujours sur une fermentation basse propre. L’étiquette rassemble des cousines, pas une antique nation de la bière sombre : dès qu’une origine locale est connue, elle mérite de reprendre son nom et son histoire.",
      "histoireEtOrigines": `European Dark Lager est une catégorie large conçue pour accueillir des lagers sombres européennes qui ne correspondent pas exactement aux profils plus étroits de Munich Dunkel, Schwarzbier ou Czech Dark Lager. Elle rappelle une réalité historique souvent masquée par le triomphe des lagers blondes : pendant une grande partie de l’histoire brassicole d’Europe centrale, les bières étaient naturellement plus foncées parce que les techniques de maltage séchaient et touraillaient les grains de façon moins douce qu’aujourd’hui.

L’apparition des malts pâles du XIXe siècle et le succès de la Pilsner ne font pas disparaître immédiatement ces traditions brunes. Des brasseries allemandes, autrichiennes, tchèques et voisines continuent à produire des lagers où le malt sombre, le pain, le toast et parfois le caramel léger dominent. La classification moderne sépare certaines familles emblématiques, mais de nombreux exemples locaux restent entre les cases.

La catégorie doit donc être utilisée avec prudence dans une encyclopédie : elle ne constitue pas une tradition paneuropéenne homogène. Elle fonctionne comme un territoire de regroupement. Une European Dark Lager bien construite garde la netteté de fermentation basse, un malt brun lisible et une torréfaction contenue. Si son identité historique ou régionale est mieux connue, il est préférable de la rattacher à un style plus précis plutôt que d’effacer cette provenance sous une étiquette générique.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie transversale de lagers sombres européennes : la recette varie selon la région et le style de référence. Les principes ci-dessous décrivent un terrain commun, pas une formule canonique.",
        "maltsEtCereales": [
          "Pilsner, Vienna ou Munich comme base ; malts caramel, chocolat doux ou torréfiés désamérisés à faible dose selon la couleur."
        ],
        "houblons": [
          "Houblons européens sobres, généralement nobles ou apparentés, avec amertume faible à moyenne."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre et relativement neutre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Adaptée au niveau de malt sombre ; alcalinité modérée possible, mais sans dureté qui accentuerait l’astringence.",
        "empatage": "Infusion, paliers ou décoction selon l’école ; rechercher pain et toast plutôt qu’une sucrosité massive.",
        "ebullitionEtHoublonnage": "Houblonnage d’équilibre, faible parfum.",
        "fermentation": "Fermentation basse propre, avec faible ester.",
        "maturation": "Garde froide suffisante pour lisser le malt sombre et clarifier la bière.",
        "profilRecherche": "Une lager sombre européenne nette et maltée, plus pain et cacao doux que brûlé, dont l’identité précise dépend de sa région."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "European-Style Dark Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Dark European Lager families — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/8/dark-european-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "czech-dark-lager",
      "nom": "Czech Dark Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Tchéquie"
      ],
      "origine": {
        "libelle": "Bohême et Moravie",
        "ville": null,
        "region": "Bohême",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.4,
        "max": 5.8,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 18,
        "max": 34,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 28,
        "max": 70,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Mug tchèque",
          "Pokal"
        ]
      },
      "description": "Tmavé, « sombre » en tchèque, couvre ici du brun rouge au presque noir. La Czech Dark Lager assemble pain sombre, caramel, prune légère, cacao doux et houblon épicé dans une texture ronde, souvent couronnée d’une mousse dense. Plus large qu’une Schwarzbier, cette famille accepte plusieurs équilibres ; sa richesse garde pourtant le réflexe du comptoir, revenir souplement en bouche plutôt que s’installer avec ses valises.",
      "histoireEtOrigines": `La Czech Dark Lager appartient à la vaste famille tchèque des tmavé — « sombres » — et parfois des černé, « noires ». Le droit national la relie à l’emploi de malts sombres, caramel ou colorants avec des malts pâles, tandis que výčepní, ležák ou silné décrivent séparément la force. La famille peut ainsi aller du brun rouge au presque noir et équilibrer malt, houblon et douceur de façons différentes.

Le décret distingue tmavé de řezané, obtenue en mélangeant une bière pâle et une sombre au conditionnement ou au tirage. Cette séparation évite de faire d’un assemblage une recette universelle de tmavé. Une bière sombre brassée comme telle peut employer Pilsner, Munich, Vienna, caramel et malt sombre dans des proportions propres à la maison.

À Prague, U Fleků offre un témoin célèbre : une activité brassicole est documentée dans la maison depuis 1499 et la brasserie sert aujourd’hui un ležák sombre à 13°. Cette continuité de lieu ne prouve pas une formule inchangée pendant cinq siècles ; elle montre qu’une culture de bière sombre a survécu au-delà des catégories de concours modernes.

Sensoriellement, le malt peut évoquer pain noir, caramel, prune légère, cacao, café doux ou toast, mais l’astringence brûlée doit rester faible. Le houblon tchèque épicé peut demeurer perceptible et empêcher la bière de devenir dessert. Une faible note de diacétyle peut être tolérée dans certains exemples traditionnels, mais les meilleures versions modernes restent propres. Comme pour les lagers tchèques pâles, le service joue un rôle culturel important : mousse dense, tirage soigné et consommation fraîche renforcent la sensation de rondeur sans exiger une forte sucrosité résiduelle.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Pilsner et Munich/Vienna en base ; caramel et malts sombres doux selon la couleur, souvent avec une complexité plus large qu’une Schwarzbier."
        ],
        "houblons": [
          "Saaz/Žatec ou autres houblons tchèques, amertume modérée et parfum épicé/herbacé possible."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager tchèque ou propre, laissant une certaine rondeur maltée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Plutôt douce et faible en sulfate afin de garder l’amertume ronde et le malt souple.",
        "empatage": "Paliers ou décoction ; le développement de Maillard peut renforcer pain et croûte sans dépendre d’une forte dose de caramel.",
        "ebullitionEtHoublonnage": "Houblonnage plus perceptible que dans certaines dark lagers internationales, mais toujours intégré au malt.",
        "fermentation": "Fermentation basse ; faible diacétyle parfois admis par les guides, jamais obligatoire ni dominant.",
        "maturation": "Lagering jusqu’à intégration du malt sombre et du houblon, avec une mousse abondante et stable.",
        "profilRecherche": "Une lager tchèque sombre, ronde mais buvable, complexe en pain/cacao/caramel sec et encore vivante par son houblon."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Czech Dark Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/3/czech-lager/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Czech-Style Dark Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "République tchèque — e-Sbírka",
          "edition": "version consolidée au 14 juin 2026",
          "reference": "Vyhláška č. 248/2018 Sb., § 16 — définitions de tmavé et řezané",
          "type": "texte_reglementaire",
          "url": "https://e-sbirka.gov.cz/sb/2018/248?odkazId=112986335",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "VisitCzechia",
          "edition": "2014",
          "reference": "U Fleků — activité brassicole documentée depuis 1499",
          "type": "patrimoine_historique",
          "url": "https://www.visitczechia.com/en-us/news/2014/05/n-enjoy-czech-beer",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Pivovar U Fleků",
          "edition": null,
          "reference": "Flekovský ležák — bière sombre actuelle de la brasserie historique",
          "type": "source_primaire_contemporaine",
          "url": "https://en.ufleku.cz/gifts/souvenir-shop/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-dark-lager",
      "nom": "American Dark Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.2,
        "max": 6.2,
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
        "min": 30,
        "max": 70,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Chope"
        ]
      },
      "description": "Sous l’acajou ou le noir, l’American Dark Lager garde un corps léger, une carbonatation vive et une fermentation neutre. Un peu de caramel, de toast ou de chocolat doux suffit à déplacer le décor ; le brûlé reste hors champ. Cette catégorie moderne repose sur une contradiction plaisante : les yeux annoncent un fauteuil profond, la bouche trouve une chaise pliante parfaitement réglée.",
      "histoireEtOrigines": `L’American Dark Lager est une catégorie moderne qui prolonge le langage des lagers américaines accessibles vers une robe plus sombre. Son identité vient d’un marché et d’une famille de recettes, alors que Munich Dunkel et Schwarzbier possèdent des ancrages régionaux plus précis. Elle apparaît dans un marché où les brasseries proposent plusieurs niveaux de couleur et d’intensité autour d’une même fermentation propre.

Dans sa forme la plus simple, une base de lager américaine est enrichie par des malts caramel, toastés ou sombres doux. Des céréales adjointes peuvent rester présentes pour préserver le corps léger. Cette latitude et une expression souvent plus neutre distinguent les dark lagers américaines de leurs équivalents européens.

La scène craft peut produire des versions plus maltées ou plus houblonnées, avec une limite sensorielle claire : café brûlé, fruit de levure et forte astringence déplaceraient la bière vers une autre famille. L’intérêt de la catégorie réside justement dans cette contradiction visuelle, une bière brune ou noire qui conserve la facilité, la carbonatation et la propreté d’une lager américaine.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Base lager/Pilsner ; Vienna, Munich, caramel ou malt sombre doux en complément ; maïs ou riz possibles pour conserver un corps léger."
        ],
        "houblons": [
          "Faible à modéré, américain ou noble, généralement non dominant."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre et propre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Neutre à modérément minérale, avec alcalinité ajustée aux malts sombres.",
        "empatage": "Bonne fermentescibilité ; éviter l’accumulation de malts caramel qui rendrait la bière épaisse.",
        "ebullitionEtHoublonnage": "Amertume d’équilibre, peu d’arôme tardif.",
        "fermentation": "Fermentation basse très propre.",
        "maturation": "Garde froide et clarification jusqu’à un profil lisse.",
        "profilRecherche": "Une lager sombre américaine facile et propre : malt grillé léger, faible torréfaction, corps raisonnable et finale nette."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Dark Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "mexican-dark-lager",
      "nom": "Mexican Dark Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Mexique"
      ],
      "origine": {
        "libelle": "International",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.2,
        "max": 6.2,
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
        "min": 30,
        "max": 70,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Chope"
        ]
      },
      "description": "Au Mexique, la lager sombre associe robe brune, caramel doux, pain, noix ou chocolat léger à une finale lisse de grande buvabilité. Les modèles européens ont fourni une partie du vocabulaire ; les brasseries locales l’ont adapté à leurs recettes et à leur marché. Negra Modelo en est l’ambassadrice mondiale depuis l’entre-deux-guerres, avec un sombre convivial qui préfère la table fraîche au coin du feu.",
      "histoireEtOrigines": `La Mexican Dark Lager s’inscrit dans une industrie où les lagers pâles n’ont jamais complètement effacé les interprétations plus sombres d’inspiration européenne. Modelo Negra fournit un repère précis : la marque date son premier brassin à Tacuba de 1925, année d’ouverture de Cervecería Modelo, et la décrit aujourd’hui comme une lager de type Munich Dunkel contenant aussi des céréales non maltées. C’est une histoire de produit documentée, pas la preuve d’une tradition nationale unique.

Il serait néanmoins faux de transformer « Mexican Dark Lager » en synonyme de Munich Dunkel authentique. Les recettes mexicaines peuvent utiliser des céréales non maltées, des malts caramel et des procédés industriels conçus pour la stabilité et la buvabilité. Leur expression est souvent plus douce, plus lisse et moins intensément maltée que les Dunkel bavaroises. L’influence européenne fournit une grammaire ; le Mexique en développe sa propre version.

Cette famille complète utilement les Mexican Pale et Amber Lagers. La couleur sombre apporte caramel, pain brun, noix ou chocolat doux, tandis que la fermentation neutre et le service frais gardent la gorgée mobile. Alcool modéré, carbonatation et finale suffisamment sèche préservent la fonction désaltérante qui reste centrale dans beaucoup de lagers mexicaines.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Base lager avec Munich/Vienna, caramel et malt sombre doux ; céréales non maltées possibles selon la brasserie."
        ],
        "houblons": [
          "Houblons à faible intensité, nobles ou neutres, principalement pour équilibrer la douceur maltée."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérément minérale, sans amertume dure.",
        "empatage": "Empâtage assurant une bonne fermentescibilité malgré la charge de malts plus riches ; traitement adapté des adjoints si présents.",
        "ebullitionEtHoublonnage": "Faible à moyenne-faible amertume, très peu d’arôme de houblon.",
        "fermentation": "Fermentation basse propre, sans ester dominant.",
        "maturation": "Garde froide et clarification avant un conditionnement souvent assez carbonaté.",
        "profilRecherche": "Une lager mexicaine sombre, lisse et maltée, avec caramel/pain/chocolat doux mais une finale toujours facile."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Mexican-Style Dark Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Modelo",
          "edition": null,
          "reference": "Modelo Negra — Mexican dark lager, brewed in Mexico since 1925 and presented as Munich Dunkel-style",
          "type": "source_primaire_historique",
          "url": "https://www.modelousa.com/products/negra",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Grupo Modelo",
          "edition": null,
          "reference": "History of Grupo Modelo since 1925",
          "type": "source_primaire_historique",
          "url": "https://www.grupomodelo.com/quienes-somos/nuestra-historia",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "UNAM Global",
          "edition": "2022",
          "reference": "La historia y producción de cerveza en el mundo y México — industrialisation de 1890 à 1910",
          "type": "source_universitaire",
          "url": "https://unamglobal.unam.mx/global_revista/lhistoria-de-la-cerveza/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Museo del Objeto del Objeto / Google Arts & Culture",
          "edition": null,
          "reference": "Los orígenes de la cerveza mexicana — chronologie historique et objets de l’industrie",
          "type": "source_museale",
          "url": "https://artsandculture.google.com/story/los-or%C3%ADgenes-de-la-cerveza-mexicana-museo-del-objeto-del-objeto/rAWhasEZWJSLGA?hl=es-MX",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "traditional-bock-dunkles-bock",
      "nom": "Traditional Bock / Dunkles Bock",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "bock",
      "aliases": [
        "Traditional Bock",
        "Dunkles Bock"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Einbeck et Bavière",
        "ville": null,
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6.3,
        "max": 7.5,
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
        "min": 28,
        "max": 60,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Seidel"
        ]
      },
      "description": "Pain grillé, croûte, fruits secs légers et chaleur maîtrisée signalent le Traditional Bock, branche brune classique passée d’Einbeck à la Bavière. Le malt Munich forme une lager forte, ample mais propre ; le houblon tient la charpente depuis l’arrière-scène. Sa puissance vient surtout d’un moût riche et d’une longue patience, non d’un seau de caramel versé avec l’enthousiasme d’un déménageur.",
      "histoireEtOrigines": `Après le voyage commun d’Einbeck à Munich, le Traditional Bock, ou Dunkles Bock, devient en Bavière une bière sombre, de fermentation basse et profondément maltée. Face au Helles Bock plus lumineux, au Doppelbock plus dense et à l’Eisbock concentré, il conserve la forme classique autour des malts Munich et de la force obtenue dès le brassage.

La forme moderne est une lager forte, brune à cuivrée, où le malt domine nettement. Les descriptions contemporaines de concours mettent l’accent sur pain, croûte, toast et parfois fruits secs légers plutôt que sur caramel sucré. Cette précision est importante : l’intensité du Bock vient d’une forte densité de moût et de malts de base riches, pas d’un empilement de crystal malt.

Le houblon joue un rôle structurel mais discret. La fermentation doit rester particulièrement propre malgré la densité ; une mauvaise gestion produit rapidement alcools supérieurs, solvants ou sucres résiduels qui alourdissent la bière. Historiquement liée aux saisons froides et aux bières fortes de garde, la Bock sombre est donc un exercice de patience autant que de puissance. Son meilleur paradoxe est une sensation de richesse considérable suivie d’une finale assez nette pour rappeler qu’il s’agit toujours d’une lager.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Munich dominant, Vienna fréquent, Pilsner possible ; caramel faible ou absent selon l’école."
        ],
        "houblons": [
          "Houblons allemands nobles ou traditionnels, amertume juste suffisante pour équilibrer le moût riche."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager saine, fortement ensemencée et suffisamment tolérante à l’alcool."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément minérale ; chlorure souvent favorable à la rondeur, alcalinité adaptée aux malts sombres.",
        "empatage": "Paliers ou décoction traditionnelle pour développer pain et croûte ; viser une fermentescibilité suffisante malgré la densité élevée.",
        "ebullitionEtHoublonnage": "Ébullition vigoureuse et éventuellement prolongée pour concentrer le moût ; houblonnage surtout en début de cuisson.",
        "fermentation": "Ensemencement abondant, oxygénation adaptée et température basse contrôlée afin d’éviter alcool chaud et sous-atténuation.",
        "maturation": "Lagering long, souvent plusieurs semaines à quelques mois selon la force et le procédé.",
        "profilRecherche": "Un Bock sombre puissant en malt de pain et croûte, chaud mais jamais brûlant, riche sans devenir sirupeux."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Dunkles Bock — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/9/strong-european-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Traditional German-Style Bock — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Einbecker Brauerei",
          "edition": null,
          "reference": "Bock Story — Einbeck brewing trade and documented strong beer from 1378",
          "type": "source_primaire_historique",
          "url": "https://www.einbecker.de/echt-einbecker/bock-story",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "helles-bock-maibock",
      "nom": "Helles Bock / Maibock",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "bock",
      "aliases": [
        "Helles Bock",
        "Maibock"
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
        "min": 6.3,
        "max": 7.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 23,
        "max": 35,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 12,
        "max": 24,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Seidel"
        ]
      },
      "description": "Or à ambre clair, pain blanc, miel léger et toast doux éclaircissent la force du Helles Bock ; un houblon noble peut devenir plus visible. L’alcool reste généreux, intégré par la garde froide. Maibock évoque volontiers le printemps sans imposer un calendrier universel. Même moteur malté que le Dunkles Bock, carrosserie lumineuse — et aucun besoin de klaxonner pour signaler ses six ou sept degrés.",
      "histoireEtOrigines": `Le Helles Bock est la branche pâle de la famille Bock. Son autre nom fréquent, Maibock, l’associe culturellement au printemps et au mois de mai. Cette évocation saisonnière recouvre toutefois des calendriers et des recettes variables selon les brasseries : Helles Bock et Maibock se chevauchent sans former deux ensembles parfaitement identiques. La catégorie moderne décrit surtout une lager allemande forte, plus claire et souvent un peu plus houblonnée que le Dunkles Bock.

Le style devient possible grâce aux malts pâles et aux techniques qui, au XIXe siècle, transforment l’ensemble du paysage des lagers. En remplaçant une grande partie du Munich sombre par Pilsner et Vienna, le brasseur conserve la densité et la puissance d’un Bock tout en obtenant une robe dorée à ambrée claire. Le malt évoque pain blanc, grain, miel léger ou toast doux plutôt que fruits secs profonds.

La couleur plus claire rend aussi le houblon plus visible. Les guides de styles acceptent une amertume plus ferme que dans le Traditional Bock et un arôme noble modéré. Malgré cette tension accrue, la bière ne devient pas une strong Pils : le malt et la force alcoolique restent centraux. Une bonne Maibock donne une impression de puissance lumineuse, là où le Dunkles Bock paraît plus sombre et enveloppant.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Pilsner dominant, Vienna et Munich clair en soutien pour le pain et la profondeur."
        ],
        "houblons": [
          "Houblons allemands nobles ou traditionnels, plus présents que dans un Dunkles Bock mais sans domination aromatique."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre et tolérante à une densité élevée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible à moyenne alcalinité, minéralité modérée ; un peu de sulfate peut soutenir l’amertume plus visible.",
        "empatage": "Paliers ou décoction possible ; bonne fermentescibilité indispensable pour éviter une forte bière sucrée.",
        "ebullitionEtHoublonnage": "Amertume moyenne, ajout tardif noble possible ; gestion attentive du DMS avec une forte proportion de Pilsner.",
        "fermentation": "Fermentation basse fortement ensemencée, alcool supérieur contenu.",
        "maturation": "Lagering prolongé pour intégrer force, malt clair et houblon.",
        "profilRecherche": "Un Bock clair et puissant : pain pâle, miel discret, houblon noble plus vif et alcool totalement fondu."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Helles Bock — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/9/strong-european-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Heller Bock/Maibock — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "doppelbock",
      "nom": "Doppelbock",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "bock",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Munich, Bavière",
        "ville": "Munich",
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 7,
        "max": 10,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 16,
        "max": 26,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 12,
        "max": 70,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Snifter"
        ]
      },
      "description": "Chez les frères paulaniens de Munich, Salvator donne au Doppelbock son archétype et une descendance de noms en « -ator ». Pain noir, croûte, fruits secs, caramel de cuisson et chaleur ample se fondent après une longue garde. Le fameux « pain liquide » est une image parlante ; transformé en certificat universel de jeûne monastique, il devient surtout une tartine de légende.",
      "histoireEtOrigines": `Le Doppelbock est l’une des grandes bières fortes de Bavière et son histoire est intimement liée à la tradition monastique de Munich. La brasserie Paulaner rattache son Salvator à l’héritage des frères de l’ordre des Minimes — les « Paulaner » — qui brassent une bière nourrissante et puissante dans leur monastère. La formule populaire de « pain liquide » traduit cette densité ; le récit selon lequel la bière aurait uniquement servi à contourner le jeûne simplifie des pratiques religieuses, alimentaires et brassicoles bien plus complexes.

Salvator devient néanmoins un archétype commercial majeur. Son influence est telle que de nombreux Doppelbocks adoptent ensuite des noms terminés en « -ator », hommage plus ou moins explicite à cette référence. La catégorie moderne conserve l’idée d’une lager extrêmement maltée, plus forte qu’un Bock standard, pouvant aller du doré foncé au brun très profond.

La richesse n’implique pas une sucrosité molle. Les meilleurs Doppelbocks développent pain, croûte, caramel naturel de Maillard, fruits secs et parfois chocolat doux, mais finissent suffisamment propres pour éviter le sirop. Les versions pâles existent également et montrent davantage d’alcool et de malt clair. La maturation joue un rôle essentiel : un jeune Doppelbock peut paraître chaud et anguleux ; après une garde correcte, alcool et malt se fondent en une texture beaucoup plus lisse.`,
      "chapitres": [
        {
          "titre": "Du monastère de Neudeck au nom Salvator",
          "texte": `Paulaner rattache sa tradition aux frères de l’ordre des Minimes installés au monastère de Neudeck ob der Au ; un document de 1634 mentionne leur bière et un droit de brassage est accordé plus tard au XVIIe siècle. Salvator devient la référence commerciale de cette lager forte, au point d’inspirer une procession de noms terminés en « -ator ».

Les dates documentent une production et une marque archétypale. Elles ne démontrent pas que chaque Doppelbock moderne descend d’une seule recette monastique conservée sous scellés.`
        },
        {
          "titre": "Le pain liquide et le jeûne, entre usage et légende",
          "texte": `Une bière dense peut apporter de l’énergie, et l’expression « pain liquide » traduit bien sa matière. Le récit selon lequel les moines auraient conçu le Doppelbock spécialement pour contourner le jeûne prend toutefois de nombreuses formes tardives et rarement sourcées. Faute de preuve directe pour chaque détail, il reste une tradition narrative, non le mode d’emploi officiel du carême.

Le vrai paradoxe est technique : obtenir un moût très riche, le fermenter assez loin pour éviter le sirop, puis attendre que l’alcool se fonde. La patience monastique est ici une excellente image ; elle n’a pas besoin d’un faux certificat pontifical.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Munich et Vienna dominants dans les versions sombres ; Pilsner plus important dans les versions pâles. Les malts caramel restent secondaires."
        ],
        "houblons": [
          "Houblons allemands sobres, amertume faible à modérée, très peu d’arôme."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager très saine, haut taux d’ensemencement et tolérance alcoolique suffisante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément minérale, adaptée à une forte charge de malt ; équilibre favorisant le malt sans pH trop élevé.",
        "empatage": "Empâtage par paliers ou décoction ; rechercher une forte extraction mais aussi assez de fermentescibilité pour éviter la lourdeur.",
        "ebullitionEtHoublonnage": "Ébullition vigoureuse voire prolongée pour concentration et profondeur ; houblonnage essentiellement d’équilibre.",
        "fermentation": "Oxygénation et levure abondante indispensables. Fermentation fraîche puis repos de diacétyle ; éviter les alcools supérieurs et la fermentation incomplète.",
        "maturation": "Lagering long et patience après conditionnement ; plusieurs semaines à mois peuvent être bénéfiques selon le degré et la méthode.",
        "profilRecherche": "Une lager très forte centrée sur le malt, immense mais lisse, avec pain, fruits secs et alcool fondu plutôt que sucre résiduel."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Doppelbock — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/9/strong-european-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Doppelbock — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Paulaner Brauerei München",
          "edition": null,
          "reference": "Salvator — historical Doppelbock tradition and current ingredients",
          "type": "source_primaire_historique",
          "url": "https://www.paulaner.com/our-products/salvator/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Paulaner Brauerei München",
          "edition": "2019",
          "reference": "Von Paola nach München — ordre des Minimes, Neudeck et chronologie brassicole paulanienne",
          "type": "source_primaire_historique",
          "url": "https://newsroom.paulaner.de/pressreleases/von-paola-nach-muenchen-paulaner-brauerei-ehrt-franz-von-paola-mit-eigenem-bier-2859834",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Munich Malt Type 1 — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/product/weyermann-muenchner-malz-typ-1/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "eisbock",
      "nom": "Eisbock",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "bock",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Kulmbach, Franconie",
        "ville": null,
        "region": "Franconie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 9,
        "max": 14,
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
        "min": 36,
        "max": 70,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 10,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Snifter",
          "Pokal"
        ]
      },
      "description": "Le froid retire une partie de l’eau d’une Bock forte et donne naissance à l’Eisbock. Alcool, malt, fruits noirs, caramel profond et défauts éventuels montent ensemble : le procédé ne connaît pas le bouton « qualités seulement ». Le résultat peut être massif et presque liquoreux, avec une chaleur lisse après maturation. L’apprenti de Kulmbach qui l’aurait découvert par oubli reste prudemment rangé au rayon des légendes.",
      "histoireEtOrigines": `L’Eisbock est une bière forte obtenue non pas seulement par un brassage plus dense, mais par concentration au froid. Une base de Doppelbock ou de Bock très fort est partiellement congelée ; l’eau cristallise avant la majorité de l’alcool et une partie de cette glace est retirée. La bière restante concentre alcool, sucres résiduels, composés de malt et arômes. Le procédé relève de la concentration par congélation et non d’une fermentation particulière.

Le style est traditionnellement associé à Kulmbach, en Franconie. Une légende très répandue raconte qu’un apprenti aurait oublié des fûts dehors pendant l’hiver et découvert au matin une bière extraordinairement forte autour d’un bloc de glace. Cette histoire est séduisante mais difficile à documenter solidement ; une encyclopédie doit la présenter comme folklore brassicole et non comme acte de naissance certifié.

La concentration amplifie tout : les qualités comme les défauts. Un Doppelbock riche devient plus intense en fruits noirs, pain, caramel profond et alcool ; une fermentation chaude ou oxydée devient elle aussi plus évidente. L’Eisbock ne doit donc pas être brûlant ni solvanté. Sa densité peut être considérable, mais la garde et l’intégration doivent produire une sensation presque liquoreuse plutôt qu’agressive.`,
      "chapitres": [
        {
          "titre": "La glace retire de l’eau et concentre tout le reste",
          "texte": `Lors d’une congélation partielle, l’eau forme des cristaux avant que la majeure partie de l’éthanol ne gèle. Retirer une portion de cette glace augmente donc la concentration relative d’alcool, de sucres, de composés du malt et d’arômes. Le procédé relève de la concentration fractionnée ; il ne crée pas de nouveaux degrés par une seconde fermentation.

Cette explication condamne l’idée d’une amélioration automatique. Oxydation, alcool supérieur et lourdeur se concentrent avec les fruits noirs et le pain. La base doit être impeccable avant d’entrer dans le froid.`
        },
        {
          "titre": "L’apprenti puni appartient au folklore de Kulmbach",
          "texte": `Le Deutscher Brauer-Bund raconte lui-même l’épisode de l’apprenti ayant laissé des fûts dehors vers 1890 sous la formule « selon la légende ». Le maître, furieux, lui aurait fait boire le liquide concentré resté autour de la glace, avant de découvrir sa qualité. Le récit possède une morale, un décor et une chute presque trop bien rangés.

Il mérite d’être conservé comme folklore, précisément avec son étiquette. L’origine régionale franconienne du style est solide ; la première gorgée punitive ne l’est pas autant.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Construire d’abord un Bock/Doppelbock sain et riche : Munich/Vienna, Pilsner selon la couleur, peu de caramel ajouté."
        ],
        "houblons": [
          "Houblons allemands discrets ; l’amertume sera elle aussi concentrée, donc inutile de surcharger la bière de base."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager tolérante à l’alcool, fermentation complète avant toute concentration."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément minérale et équilibrée ; les sels étant eux aussi concentrés, une eau excessivement minérale peut devenir problématique.",
        "empatage": "Comme pour un Doppelbock, forte densité mais fermentescibilité suffisante.",
        "ebullitionEtHoublonnage": "Ébullition d’un moût fort, houblonnage retenu.",
        "fermentation": "Produire d’abord une bière totalement saine et mature. La congélation ne corrige aucun défaut de fermentation : elle les amplifie.",
        "maturation": "Après fermentation et première garde, refroidir sous le point de congélation de l’eau puis retirer une fraction de glace selon le niveau de concentration recherché. Une garde supplémentaire est essentielle pour intégrer l’alcool.",
        "profilRecherche": "La profondeur d’un Doppelbock concentrée sans brutalité : fruits noirs, malt intense, texture riche et alcool puissant mais poli."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Eisbock — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/9/strong-european-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "German-Style Eisbock — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Deutscher Brauer-Bund",
          "edition": null,
          "reference": "Eisbock — procédé de concentration et légende de Kulmbach présentée comme telle",
          "type": "organisme_brassicole",
          "url": "https://brauer-bund.de/bier/eisbock/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-lager",
      "nom": "American Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
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
        "max": 5.5,
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
        "min": 3,
        "max": 14,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 6,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Shaker",
          "Pilsner"
        ]
      },
      "description": "Brasseurs immigrés, orge six-rangs, maïs ou riz, puis froid et rail façonnent l’American Lager. Cette blonde nationale, pâle, nette, céréalière, très carbonatée et peu amère, garde davantage de corps qu’une light. Sa simplicité est le résultat d’une longue ingénierie : une machine bien réglée, certes, mais dont l’histoire commence avec des caves pleines de glace.",
      "histoireEtOrigines": `L’American Lager est le produit d’une rencontre entre les traditions de fermentation basse apportées par les immigrants européens et les matières premières, technologies et marchés des États-Unis. Au XIXe siècle, de nombreux brasseurs germano-américains installent la lager dans les villes en croissance. L’orge américaine, souvent à six rangs et riche en protéines, se prête à l’emploi de maïs ou de riz comme adjoints : ces céréales apportent des sucres fermentescibles, éclaircissent le corps et permettent de produire une bière très pâle et stable.

La réfrigération, le chemin de fer, les grandes cuves et la consolidation industrielle transforment ensuite la lager en produit national. La Prohibition bouleverse profondément l’industrie ; après son abrogation, les grandes brasseries gagnent encore en taille et en homogénéité. Au fil du XXe siècle, le profil dominant devient plus léger, plus pâle et moins amer, jusqu’à former l’image mondiale de la « bière américaine ».

L’American Lager conserve un peu plus de corps, d’alcool et de goût de céréale que l’American Light Lager. L’adjoint n’est pas un défaut en soi : maïs et riz font partie de l’histoire du style et peuvent être utilisés avec une grande maîtrise. Ce qui définit la qualité est la propreté : fermentation neutre, faible amertume, carbonatation vive, aucune oxydation et une finale suffisamment sèche pour encourager la répétition.`,
      "chapitres": [
        {
          "titre": "Les méthodes immigrent, les céréales répondent",
          "texte": `Les brasseurs germanophones apportent la fermentation basse aux villes américaines du XIXe siècle, mais ne retrouvent pas exactement l’orge et le climat de leur départ. L’orge six-rangs locale, plus riche en protéines et en enzymes, se combine efficacement avec du maïs ou du riz, dont l’amidon doit être rendu accessible. L’adaptation technique produit une bière plus claire et plus légère sans abandonner toute saveur de grain.

Maïs et riz ne sont donc ni une faute morale ni une explication universelle par le seul coût. Ils modifient corps, couleur et fermentescibilité ; le choix de l’un ou l’autre devient une signature industrielle.`
        },
        {
          "titre": "Le rail et le froid fabriquent un marché national",
          "texte": `Une lager gardée dans une cave locale reste une bière de ville. Réfrigération mécanique, bouteilles, wagons isolés et réseau ferroviaire permettent aux grandes brasseries d’allonger la saison, les distances et la durée de vente. La régularité microbiologique et le conditionnement transforment ensuite la confiance du consommateur en marque.

Le profil pâle et propre se diffuse avec cette infrastructure. La lager américaine devient nationale parce que le froid apprend à prendre le train.`
        },
        {
          "titre": "La Prohibition casse l’arbre, la consolidation taille les branches",
          "texte": `L’interdiction fédérale de 1920 à 1933 ferme ou reconvertit de nombreuses brasseries et désorganise les savoir-faire. Après l’abrogation, les acteurs capables d’investir dans les équipements, la publicité et la distribution prennent un avantage croissant. Guerres, concentration du marché et préférences de consommation déplacent progressivement le standard vers moins d’amertume et davantage de légèreté.

Cette trajectoire ne signifie pas que toutes les lagers d’avant 1920 étaient identiques ni que la Prohibition explique seule le verre moderne. Elle marque une rupture majeure dans une transformation industrielle plus longue.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt lager/Pilsner avec maïs ou riz fréquents ; recette tout malt possible mais moins typique du modèle historique industriel."
        ],
        "houblons": [
          "Houblons à faible intensité, américains ou nobles, amertume basse et arôme presque absent."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager très neutre et régulière."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce et neutre, faible alcalinité, peu de minéralité gustative.",
        "empatage": "Très fermentescible ; cuisson séparée ou matières prégélatinisées selon la forme des adjoints.",
        "ebullitionEtHoublonnage": "Houblonnage faible, priorité à la stabilité du moût et au contrôle du DMS.",
        "fermentation": "Fermentation basse propre, diacétyle et acétaldéhyde non perceptibles.",
        "maturation": "Garde froide, clarification poussée et carbonatation vive ; conditionnement sous très faible oxygène.",
        "profilRecherche": "Une lager américaine pâle et simple mais pas aqueuse : céréale discrète, grande propreté et fraîcheur immédiate."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/1/standard-american-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Federal Judicial Center",
          "edition": null,
          "reference": "Prohibition in the Federal Courts — chronologie de la Prohibition, 1920–1933",
          "type": "histoire_institutionnelle",
          "url": "https://www.fjc.gov/history/exhibits/prohibition-in-federal-courts-timeline",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "University of Chicago Library",
          "edition": null,
          "reference": "Something’s Brewing — réfrigération brassicole et wagons frigorifiques",
          "type": "histoire_des_techniques",
          "url": "https://www.lib.uchicago.edu/collex/exhibits/somethings-brewing/brewing-technology/refrigeration/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Beverages / MDPI",
          "edition": "2021",
          "reference": "Brewing with Unmalted Cereal Adjuncts — effets sensoriels du maïs et du riz",
          "type": "publication_scientifique",
          "url": "https://www.mdpi.com/2306-5710/7/1/4",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "contemporary-american-lager",
      "nom": "Contemporary American Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
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
        "max": 5.5,
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
        "min": 3,
        "max": 14,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 6,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Shaker",
          "Pilsner"
        ]
      },
      "description": "Les brasseries craft reprennent la blonde facile à boire avec un malt plus expressif, un houblon frais, un adjoint choisi pour son goût ou une recette tout malt : la Contemporary American Lager reste pâle, sèche et légère, mais accepte une signature locale. Après des décennies à définir l’artisanat contre la lager de masse, elles redécouvrent qu’une bière discrète peut être un examen sans antisèche.",
      "histoireEtOrigines": `La Contemporary American Lager représente une relecture récente de la grande lager américaine. Elle naît dans un paysage où les brasseries artisanales, après avoir longtemps construit leur identité en opposition aux lagers industrielles, redécouvrent la difficulté et l’élégance des fermentations basses. Plutôt que de reproduire exactement une American Lager historique ou une Pils européenne, elles conservent la buvabilité américaine tout en réintroduisant davantage de malt, de houblon ou de singularité locale.

Une catégorie contemporaine distincte consacre cette évolution. Elle autorise une expression plus présente des ingrédients sans perdre le cœur du style : couleur pâle, corps léger à moyen-léger, fermentation nette, finale sèche et grande facilité de consommation. Les adjoints ne sont ni obligatoires ni interdits ; ils peuvent même devenir des outils créatifs lorsqu’ils sont choisis pour leur goût plutôt que seulement pour réduire le coût.

Cette catégorie est importante culturellement car elle signale un changement de regard. La lager « simple » n’est plus forcément l’ennemie de la bière artisanale. Elle devient un terrain où la qualité de l’eau, de la fermentation, du maltage, du houblon frais et du conditionnement est exposée sans filtre. Les meilleures Contemporary American Lagers restent modestes en intensité mais extrêmement précises.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Pilsner ou pale lager ; maïs, riz ou autres céréales possibles, parfois choisis pour un caractère aromatique spécifique."
        ],
        "houblons": [
          "Américains ou internationaux, faible à modéré, avec davantage de liberté aromatique que l’American Lager classique."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager propre ; certaines brasseries utilisent des souches tolérant des fermentations légèrement plus chaudes tout en gardant un profil net."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité, profil ajusté à l’équilibre malt/houblon choisi.",
        "empatage": "Bonne fermentescibilité et corps contenu.",
        "ebullitionEtHoublonnage": "Amertume modérée possible, ajout tardif léger selon l’interprétation.",
        "fermentation": "Fermentation basse ou très propre, priorité absolue à l’absence de défauts.",
        "maturation": "Garde froide assez longue pour la netteté mais compatible avec la fraîcheur éventuelle du houblon.",
        "profilRecherche": "La buvabilité d’une lager américaine avec davantage de personnalité de matière première, sans devenir une Pils ou une IPA."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Contemporary American-Style Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lallemand Brewing",
          "edition": null,
          "reference": "LalBrew Diamond — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://www.lallemandbrewing.com/fr/canada/produits/diamond-lager-yeast/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Spezialmalze",
          "edition": null,
          "reference": "Weyermann Pilsner Malt — product specification and typical uses",
          "type": "fiche_technique",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-pilsner-malt/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "mexican-pale-lager",
      "nom": "Mexican Pale Lager",
      "collectionId": 1,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "Mexique"
      ],
      "origine": {
        "libelle": "Mexique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 5.5,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 8,
        "max": 25,
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
        "type": "basse",
        "details": "Fermentation basse à température fraîche, généralement suivie d’une maturation à froid."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 6,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "Chope"
        ]
      },
      "description": "Plus d’un siècle d’industrie, de rail et d’exportation se cache derrière la fraîcheur de la Mexican Pale Lager. Or pâle, céréale douce, amertume basse à modérée, fermentation nette et finale sèche la définissent ; maïs ou riz peuvent alléger le corps, tandis que les versions premium montrent davantage de malt et de houblon. Le citron vert relève du service et du marketing : la recette sait parfaitement marcher seule.",
      "histoireEtOrigines": `La Mexican Pale Lager s’inscrit dans plus d’un siècle d’industrialisation brassicole mexicaine. HEINEKEN México fait remonter la Cervecería Cuauhtémoc de Monterrey à 1890 ; Grupo Modelo fonde sa grande brasserie à Mexico dans les années 1920. Ces entreprises et leurs concurrentes développent une culture de lager adaptée à un marché national immense, puis à l’exportation vers les États-Unis et le reste du monde.

Les influences européennes sont réelles mais multiples. La marque Bohemia, créée en 1905 selon HEINEKEN México, revendique explicitement une inspiration Pilsner et l’usage de houblons européens. D’autres lagers mexicaines privilégient davantage la neutralité, les céréales adjointes et une amertume basse. La catégorie moderne Mexican Pale Lager regroupe ces bières pâles sans les forcer à devenir German Pils ou International Pale Lager.

Le service avec un quartier de citron vert est devenu un symbole international de certaines marques mexicaines ; il relève du rituel de consommation, hors de la recette du style. Une Mexican Pale Lager se lit d’abord dans le malt pâle, les éventuels adjoints comme maïs ou riz, une faible à moyenne amertume, une fermentation propre et une finale sèche. Le climat et la culture de consommation très fraîche renforcent la recherche de buvabilité, tandis que les exemples premium peuvent afficher un vrai parfum de houblon et une céréale plus noble.

Le style illustre enfin la diversité souvent sous-estimée du Mexique brassicole. Derrière l’image mondiale d’une lager très légère se trouve un pays qui produit depuis longtemps des Pilsners, Vienna Lagers, dark lagers et bières de spécialité. La Mexican Pale Lager est une branche de cette histoire, pas son résumé complet.`,
      "chapitres": [
        {
          "titre": "Glace, industrie et rail installent la lager",
          "texte": `Le Mexique connaît la bière bien avant le XIXe siècle, mais la lager exige un froid que le climat rend coûteux. L’industrialisation change l’équation : machines à glace, capitaux, malt, bouteilles et chemins de fer permettent d’agrandir la production. L’UNAM situe entre 1890 et 1910 une première vague de grandes entreprises ; Cuauhtémoc est fondée à Monterrey en 1890, Grupo Modelo ouvre sa brasserie de Mexico en 1925.

La Mexican Pale Lager vient de cette modernité matérielle, pas d’une adaptation spontanée au soleil. Pour brasser froid dans un pays chaud, il a d’abord fallu beaucoup de machines.`
        },
        {
          "titre": "Deux groupes, plusieurs accents de blonde",
          "texte": `Cuauhtémoc-Moctezuma et Modelo construisent des portefeuilles où la lager pâle va de la blonde très légère à la Pilsner plus houblonnée. Bohemia, lancée en 1905 selon l’histoire de HEINEKEN México, revendique un registre européen ; Modelo Especial apparaît avec la brasserie Modelo en 1925. L’étiquette « Mexican Pale Lager » rassemble aujourd’hui ces ressemblances sans effacer leurs différences.

Les récits d’influence allemande, autrichienne ou tchèque doivent donc être attachés à des brasseries et des produits précis. Une nationalité entière ne tient pas dans une seule recette d’immigrant.`
        },
        {
          "titre": "Le citron vert accompagne l’export, pas le brassin",
          "texte": `Le quartier de citron vert est devenu une image mondiale de la bière mexicaine, favorisée par le service de certaines marques et par leur commercialisation internationale. Il modifie évidemment l’acidité et l’arôme du verre, mais aucun guide du style n’en fait un ingrédient obligatoire de brassage.

Le rappeler rend justice à la bière : malt, éventuels adjoints, houblon, levure et eau construisent le profil avant que le fruit n’arrive au goulot. Le citron est un rituel possible, pas un certificat d’origine.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt lager ou Pilsner ; maïs ou riz fréquents mais non obligatoires, selon la brasserie et le niveau de corps recherché."
        ],
        "houblons": [
          "Houblons doux, parfois européens/nobles dans les exemples premium ; amertume généralement contenue."
        ],
        "levuresEtMicroorganismes": [
          "Souche lager neutre et très propre."
        ],
        "ingredientsComplementaires": [
          "Le citron vert relève du service ou du marketing de certaines marques, pas du cahier des charges de la bière."
        ],
        "profilEau": "Douce à modérément minérale, sans dureté agressive.",
        "empatage": "Empâtage très fermentescible ; gestion du maïs/riz adaptée à leur forme lorsque présents.",
        "ebullitionEtHoublonnage": "Amertume basse à moyenne ; certaines interprétations premium montrent un arôme floral/herbacé plus lisible.",
        "fermentation": "Fermentation basse propre, faible ester, diacétyle absent.",
        "maturation": "Garde froide, clarification et carbonatation vive pour une bière particulièrement rafraîchissante.",
        "profilRecherche": "Une lager mexicaine pâle, sèche et fraîche, capable d’aller de la grande buvabilité neutre à une expression Pilsner plus noble."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Mexican-Style Pale Lager — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "HEINEKEN México",
          "edition": null,
          "reference": "History of Cervecería Cuauhtémoc and Mexican industrial brewing since 1890",
          "type": "source_primaire_historique",
          "url": "https://www.heinekenmexico.com/heineken-mexico",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "HEINEKEN México",
          "edition": null,
          "reference": "Bohemia — Mexican Pilsner tradition since 1905",
          "type": "source_primaire_historique",
          "url": "https://heinekenmexico.com/noticia/bohemia-celebra-120-anos-de-estar-en-las-mesas-mexicanas",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Grupo Modelo",
          "edition": null,
          "reference": "History of Grupo Modelo since 1925",
          "type": "source_primaire_historique",
          "url": "https://www.grupomodelo.com/quienes-somos/nuestra-historia",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "UNAM Global",
          "edition": "2022",
          "reference": "La historia y producción de cerveza en el mundo y México — première industrialisation brassicole mexicaine",
          "type": "source_universitaire",
          "url": "https://unamglobal.unam.mx/global_revista/lhistoria-de-la-cerveza/",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Museo del Objeto del Objeto / Google Arts & Culture",
          "edition": null,
          "reference": "Los orígenes de la cerveza mexicana — entreprises, glace, rail et objets de l’industrie",
          "type": "source_museale",
          "url": "https://artsandculture.google.com/story/los-or%C3%ADgenes-de-la-cerveza-mexicana-museo-del-objeto-del-objeto/rAWhasEZWJSLGA?hl=es-MX",
          "consultation": "2026-08-10"
        },
        {
          "organisme": "Fermentis",
          "edition": null,
          "reference": "SafLager W-34/70 — lager yeast technical profile",
          "type": "fiche_technique",
          "url": "https://fermentis.com/fr/produit/saflager-w-34-70/",
          "consultation": "2026-08-08"
        }
      ]
    }
  ]
};

export default collection;
