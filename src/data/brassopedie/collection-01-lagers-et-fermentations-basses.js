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
      "description": "La Lager est moins un goût unique qu’une méthode devenue empire : fermentation basse, maturation froide, profil net, bulles propres et grande lisibilité. Elle peut être pâle, ambrée, noire, légère ou forte, mais son fil rouge reste cette impression de bière tenue au cordeau, où les défauts n’ont nulle part où se cacher.",
      "histoireEtOrigines": `Le mot « lager » ne décrit pas d’abord une couleur ou une intensité aromatique : il vient de l’allemand lagern, « entreposer ». Bien avant la maîtrise microbiologique de la fermentation, les brasseurs d’Europe centrale avaient compris l’intérêt d’une fermentation et surtout d’une garde au froid, dans des caves, des celliers ou des galeries où la température restait basse. Ces pratiques ont progressivement favorisé des levures capables de travailler à plus basse température et de sédimenter fortement. La famille moderne des levures lager appartient principalement à Saccharomyces pastorianus, un hybride dont l’histoire biologique est plus complexe que le récit simplifié d’une « invention » unique de la fermentation basse.

La révolution du XIXe siècle est autant technique que stylistique. Le développement de malts plus pâles, l’amélioration des systèmes de refroidissement, puis la réfrigération mécanique rendent possible une production régulière indépendamment des saisons. En 1883, au laboratoire Carlsberg, Emil Christian Hansen met au point l’emploi industriel d’une culture pure de levure de fermentation basse. Cette avancée améliore radicalement la reproductibilité et limite les altérations liées aux levures sauvages. Carlsberg partage ensuite cette méthode avec d’autres brasseries, contribuant à standardiser la fermentation lager à grande échelle.

À partir de là, la lager cesse d’être une spécialité régionale pour devenir la grande infrastructure du brassage mondial. Pilsner, Helles, Dunkel, Schwarzbier, Vienna Lager, Bock ou grandes lagers internationales peuvent être très différentes, mais partagent une logique : fermentation très maîtrisée, profil généralement plus net que les ales expressives, puis maturation froide destinée à clarifier, arrondir et stabiliser la bière. La domination commerciale des lagers au XXe siècle a parfois réduit le mot à l’image d’une bière blonde légère ; historiquement et techniquement, la famille est beaucoup plus vaste, allant de la Leichtbier à moins de 4 % jusqu’à l’Eisbock dépassant largement 10 %.`,
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
      "description": "La Pilsner est la lame claire de la lager : robe dorée, mousse blanche, malt céréale net et amertume qui tranche proprement. Elle paraît simple, mais c’est une bière de précision : le moindre défaut se voit comme une rayure sur du cristal.",
      "histoireEtOrigines": `La Pilsner naît à Plzeň, en Bohême, dans un contexte de réforme brassicole. Au début des années 1840, les bourgeois détenteurs du droit de brassage souhaitent améliorer la qualité des bières locales et font construire une nouvelle brasserie. Le Bavarois Josef Groll est engagé comme maître brasseur. Le 5 octobre 1842, il brasse la bière qui sera servie pour la première fois en novembre et deviendra le prototype de la lager dorée moderne. Son succès repose moins sur un ingrédient miraculeux que sur la convergence de plusieurs progrès : fermentation basse bavaroise, maltage suffisamment doux pour produire un malt pâle, eau très douce de Plzeň, houblon aromatique de Žatec/Saaz et installations adaptées à la garde froide.

Le BJCP souligne que l’histoire est plus nuancée que l’expression « première lager pâle » : des lagers claires ont probablement existé auparavant et l’évolution des techniques anglaises de maltage joue un rôle dans la disponibilité de malts plus pâles. Mais la bière de Plzeň est bien le modèle qui donne au mot Pilsner sa portée mondiale. Sa couleur dorée et sa limpidité arrivent au moment où la verrerie, les transports et l’industrialisation permettent à l’apparence même de la bière de devenir un argument de séduction.

La Pilsner se ramifie ensuite. La tradition tchèque conserve une rondeur maltée, une amertume très présente mais douce et l’usage des houblons tchèques. Les interprétations allemandes deviennent généralement plus sèches et plus tranchantes. Les versions internationales simplifient parfois le profil, tandis que les scènes craft italienne et américaine réintroduisent des houblonnages tardifs ou à cru. Parler de « Pilsner » comme d’une recette unique est donc trompeur : il s’agit d’une famille issue d’un événement fondateur très précis mais développée ensuite en plusieurs écoles.

Pilsner Urquell demeure un témoin technique exceptionnel de la tradition de Plzeň : la brasserie revendique encore le malt d’orge tchèque, le houblon Saaz, l’eau locale très douce et une triple décoction, suivis d’une fermentation puis d’une maturation prolongée. Ces éléments ne doivent pas être transformés en obligations universelles pour toutes les Pilsners, mais ils expliquent l’architecture historique du style.`,
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
      "description": "La Hoppy Lager prend la propreté d’une lager et y accroche un bouquet de houblons modernes : agrumes, herbes, fruits blancs, résine ou fleurs fraîches. Elle doit rester nerveuse et sèche ; si elle devient lourde ou floue, elle perd son avantage face à une IPA.",
      "histoireEtOrigines": `« Hoppy Lager » est une famille contemporaine plus qu’un style historique figé. L’idée consiste à conserver la fermentation basse, la sécheresse et la netteté d’une lager tout en poussant le houblon au premier plan. Ce terrain existait déjà dans les Pilsners les plus aromatiques, mais la révolution des houblons modernes et la culture craft ont élargi le vocabulaire : dry-hopping inspiré de l’Italian Pilsner, intensité américaine de l’India Pale Lager, profils résineux ou tropicaux des West Coast Pilsners, et nombreuses lagers de brasserie difficiles à enfermer dans une catégorie unique.

La famille devient particulièrement visible lorsque les brasseurs artisanaux, longtemps concentrés sur les ales et les IPA, reviennent aux fermentations basses. La lager est alors utilisée comme une toile de fond très propre : moins d’esters de levure, moins de sucrosité résiduelle, plus d’espace pour percevoir les variétés de houblon et la précision de l’amertume. Les Brewers Association Guidelines reconnaissent aujourd’hui plusieurs de ces branches séparément, notamment Italian-Style Pilsener, American-Style India Pale Lager et West Coast-Style Pilsener.

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
          "Souche lager neutre et atténuante ; certaines interprétations contemporaines utilisent une souche très propre conduite plus chaud, mais le résultat sensoriel doit rester lager-like."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Plutôt pauvre en alcalinité. Un rapport sulfate/chlorure modérément orienté vers le sulfate peut accentuer la sécheresse et la netteté de l’amertume, sans aller jusqu’à la dureté de certaines IPA.",
        "empatage": "Empâtage visant une bonne fermentescibilité et un corps léger à moyen-léger.",
        "ebullitionEtHoublonnage": "Construire d’abord une amertume propre, puis superposer les arômes tardifs. Le dry-hop doit être suffisamment expressif pour signer la bière mais pas au point d’apporter brûlure végétale ou haze massif si le sous-style vise la limpidité.",
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
      "description": "Le Bock est une lager de muscle et de malt : pain brun, croûte, miel sombre, parfois fruits secs, avec une chaleur d’alcool qui doit rester polie. Ce n’est pas une bière sucrée par paresse, mais une bière forte où le malt avance en manteau épais.",
      "histoireEtOrigines": `La famille Bock plonge ses racines dans la ville hanséatique d’Einbeck, en Basse-Saxe. La brasserie d’Einbeck conserve une facture datée du 28 avril 1378 attestant la vente de bière vers Celle et décrit une culture brassicole où de nombreux citoyens possédaient le droit de brasser. La position commerciale d’Einbeck, reliée aux réseaux de la Hanse et aux routes de longue distance, favorise l’exportation d’une bière suffisamment robuste pour voyager. L’idée que le Bock serait simplement « une bière bavaroise forte » masque donc une première phase nord-allemande importante.

Au cours des siècles suivants, cette bière gagne la Bavière. Munich adapte progressivement la tradition aux pratiques locales de fermentation basse et aux malts bavarois. Le passage d’« Einbeck » à « Bock » est entouré de récits linguistiques et folkloriques ; le bouc, Bock en allemand, devient en tout cas l’emblème graphique durable de nombreuses bières de la famille. Il vaut mieux considérer l’étymologie populaire comme une tradition culturelle plutôt que comme un fait unique définitivement établi.

La famille moderne réunit plusieurs expressions. Le Dunkles ou Traditional Bock est sombre et profondément malté ; le Helles Bock/Maibock éclaircit la robe et augmente parfois la présence du houblon ; le Doppelbock pousse la densité et la richesse beaucoup plus loin ; l’Eisbock concentre encore une bière forte par congélation partielle. Leur fil commun n’est pas le caramel mais une forte expression du malt, une fermentation propre et une chaleur alcoolique intégrée. Les guides de styles insistent justement sur le fait qu’un Bock traditionnel peut être riche et doux sans devenir collant, et que les notes de pain, toast et fruits secs doivent venir de la matière maltée et de la conduite du brassage plutôt que d’une surcharge de malts caramel.`,
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
      "description": "L’International Light Lager est la bière du quasi-effacement : très pâle, très froide, très carbonatée, pensée pour disparaître avec élégance plutôt que laisser une trace. Son talent n’est pas la complexité, mais la neutralité propre, sans défaut évident.",
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
      "description": "La German Leichtbier est légère, mais pas vide : corps réduit, alcool discret, malt pâle propre et amertume plus présente qu’une light lager internationale. Elle marche sur un fil : donner une vraie sensation de bière avec peu de matière.",
      "histoireEtOrigines": `Leichtbier signifie littéralement « bière légère ». Dans le paysage allemand, l’idée n’est pas de copier exactement l’American Light Lager mais de réduire l’alcool et le corps tout en conservant une identité de bière allemande : malt pâle perceptible, houblon noble lisible et fermentation propre. Les guides BJCP et Brewers Association décrivent ainsi une bière très légère mais davantage houblonnée et structurée que les grandes light lagers internationales.

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
      "description": "L’American Light Lager est conçue pour la fraîcheur immédiate : très pâle, très pétillante, corps minimal, grain discret et amertume presque fantôme. C’est une bière où l’absence de défaut devient la principale qualité, comme une page blanche glacée.",
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
      "description": "La Contemporary American Light Lager reprend le squelette de l’American Light Lager avec un regard plus actuel : toujours légère, toujours nette, mais parfois un peu plus précise, moins caricaturale. Elle reste un exercice de retenue extrême.",
      "histoireEtOrigines": `La Contemporary American Light Lager est une catégorie récente qui reconnaît que la notion de « light lager » américaine ne se limite plus au modèle ultra-neutre des grandes marques historiques. Les Brewers Association Guidelines distinguent désormais des versions contemporaines où la bière reste faible en calories et en corps mais peut laisser davantage apparaître le malt ou le houblon.

Cette évolution accompagne deux mouvements : d’une part la recherche de bières plus légères en alcool ou en calories, d’autre part le retour des brasseries artisanales vers les lagers techniquement exigeantes. Les brasseurs peuvent donc conserver la buvabilité et la forte atténuation d’une light lager tout en employant des malts de meilleure expression, des houblons plus frais ou des procédés moins orientés vers la neutralisation totale du goût.

La catégorie ne doit pas devenir une Session IPA fermentée basse : le cœur reste une lager légère, nette, peu amère et très accessible. Le caractère supplémentaire est une nuance, pas un changement de centre de gravité.`,
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
      "description": "La Mexican Light Lager est une lager de soleil : pâle, vive, peu amère, souvent servie très froide, avec une finale sèche et parfois une impression céréalière légère. Elle doit rafraîchir avant de raconter, mais elle ne doit pas devenir transparente.",
      "histoireEtOrigines": `La Mexican Light Lager appartient à une industrie brassicole mexicaine fortement structurée depuis la fin du XIXe siècle. HEINEKEN México fait remonter la fondation de la Cervecería Cuauhtémoc à Monterrey à 1890 ; le développement des grandes brasseries, de la réfrigération et des réseaux ferroviaires puis routiers installe durablement la lager comme langage dominant du marché national.

La catégorie « light » apparaît plus tard. HEINEKEN México présente Tecate Light, lancée en 1992, comme la première bière basse en calories du Mexique. Cette chronologie rappelle que la Mexican Light Lager n’est pas une survivance ancienne mais une adaptation relativement récente de la lager mexicaine aux tendances de consommation allégée déjà puissantes en Amérique du Nord.

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
      "description": "L’International Pale Lager est la lager mondiale par excellence : dorée, claire, propre, moyennement légère, avec un malt discret et un houblon qui garde les mains dans les poches. Elle ne cherche pas à être mémorable, mais à être immédiatement compréhensible.",
      "histoireEtOrigines": `L’International Pale Lager est probablement l’un des styles les plus répandus et les moins attachés à une origine unique. Elle descend indirectement de la révolution Pilsner du XIXe siècle, mais son identité se construit surtout avec l’industrialisation mondiale du XXe : grandes cuves cylindro-coniques, filtration, pasteurisation ou stabilisation, réfrigération fiable, distribution longue distance et standardisation des matières premières.

Chaque pays a adapté le modèle à ses ressources et à son marché. Le maïs et le riz peuvent alléger le corps, mais certains exemples sont tout malt. Les houblons peuvent venir d’Europe, d’Amérique ou de productions locales, généralement avec une intensité faible. Ce qui unit la catégorie est moins une recette qu’une fonction : proposer une lager pâle, claire, fortement atténuée, modérément carbonatée à fortement carbonatée, facile à boire et suffisamment neutre pour être comprise dans des cultures de consommation très différentes.

Le BJCP la distingue de l’American Lager par une intensité et une origine plus internationales, et d’une Pilsner par un caractère de houblon généralement beaucoup moins affirmé. C’est aussi une famille qui montre combien la notion de « style » peut être industrielle et culturelle : les bières qui s’y ressemblent ne partagent pas nécessairement une généalogie locale, mais convergent vers les mêmes objectifs de stabilité, fraîcheur et accessibilité.`,
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
      "description": "L’International Pilsner emprunte le costume de la pilsner sans toujours en garder le tranchant bohémien ou allemand. Elle est claire, sèche, modérément houblonnée, plus affirmée qu’une pale lager générique mais souvent moins typée qu’une Czech ou German Pils.",
      "histoireEtOrigines": `L’International-Style Pilsener est une lecture mondiale du modèle de Plzeň. Elle se situe entre la Pilsner européenne de tradition et l’International Pale Lager : plus de houblon, une amertume plus visible et un caractère malté plus précis que la lager internationale standard, mais sans obligation de reproduire le profil tchèque ou allemand.

Cette catégorie reflète l’expansion extrêmement rapide de l’idée Pilsner après 1842. Dans de nombreux pays, « Pils », « Pilsener » ou « Pilsner » devient un nom commercial autant qu’une référence stylistique. L’eau locale, les malts disponibles, les variétés de houblon, les adjoints et les attentes du marché produisent des interprétations différentes. Certaines sont très proches d’une German Pils, d’autres plus douces et plus internationales.

Les Brewers Association Guidelines maintiennent justement une catégorie International-Style Pilsener distincte, ce qui évite de forcer toutes ces bières dans une définition tchèque ou allemande. Le prototype encyclopédique doit donc résister à la tentation de raconter une fausse « tradition internationale » unique : il s’agit d’une convergence autour d’une lager pâle et houblonnée, née de la diffusion mondiale du mot Pilsner.`,
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
      "description": "La German Pilsner est plus sèche, plus fine et souvent plus mordante que sa cousine tchèque. Malt Pilsner net, houblon floral ou herbacé, amertume droite et finale ciselée : elle ne caresse pas longtemps, elle nettoie.",
      "histoireEtOrigines": `L’Allemagne adopte très tôt l’idée de la lager pâle venue de Bohême, mais la transforme selon ses matières premières, ses eaux et ses traditions régionales. Au lieu de copier exactement la rondeur de Plzeň, les brasseurs allemands développent progressivement une Pils plus sèche, plus claire et souvent plus tranchante. Le style finit par devenir l’une des grandes références nationales, particulièrement influente dans le nord et le centre du pays.

Le BJCP décrit la German Pils comme une lager pâle très atténuée où l’amertume et le houblon noble sont nettement présents. La dureté perçue peut varier : les versions du nord ont historiquement la réputation d’être plus sèches et plus amères, tandis que les exemples du sud peuvent paraître un peu plus doux. Il ne faut toutefois pas transformer cette tendance régionale en règle absolue ; les brasseries modernes ajustent leur eau et leurs recettes bien au-delà des contraintes géologiques historiques.

Un point essentiel distingue l’école allemande classique des nouvelles Pilsners aromatiques : le houblonnage tardif peut être prononcé, mais le dry-hopping n’est normalement pas le moteur du style. L’arôme doit rester noble, floral, herbacé ou épicé, avec une amertume ferme mais propre. La fermentation ne fournit pas le fruit : elle sert de cadre neutre à la tension entre malt Pilsner et houblon.`,
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
      "description": "L’Italian Pilsner prend une pils sèche et lui ajoute un parfum de houblon frais : floral, herbacé, citronné, parfois légèrement épicé. Elle ne doit pas devenir une IPA en costume clair ; son charme vient de ce houblonnage aérien posé sur une base très nette.",
      "histoireEtOrigines": `L’Italian Pilsner est l’un des rares styles brassicoles contemporains dont la généalogie puisse être reliée avec une assez grande précision à une bière emblématique : Tipopils, créée en 1996 par Birrificio Italiano à Limido Comasco. La brasserie présente elle-même Tipopils comme une Pilsner naturellement trouble, brassée avec du malt d’orge et des houblons européens, dont une partie est utilisée à froid. Cette combinaison — structure de Pils continentale, fermentation basse propre et houblonnage à cru très mesuré — devient progressivement un modèle observé puis imité hors d’Italie.

Il faut cependant éviter de réduire toute l’histoire à l’idée d’une « invention » isolée du dry-hopping sur lager : des pratiques de houblonnage à froid ou en garde sont bien plus anciennes dans l’histoire de la bière. La nouveauté de l’Italian Pilsner tient plutôt à la façon dont la scène craft italienne remet cette technique au service d’une Pils très sèche, très buvable et encore clairement européenne dans son langage aromatique. Le houblon doit apporter fleurs, herbes, épices, zeste ou agrumes fins sans donner l’impression d’une IPA blonde fermentée froid.

Au XXIe siècle, le style se diffuse rapidement dans les brasseries artisanales européennes et nord-américaines. Les Brewers Association Guidelines le reconnaissent désormais comme une catégorie distincte. Cette formalisation ne signifie pas qu’il existe une recette italienne unique : certaines versions restent extrêmement proches d’une German Pils parfumée, d’autres poussent davantage l’aromatique. La constante est l’élégance : base sèche, bitterness nette mais non brutale, houblon frais et profil de fermentation très propre.`,
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
        "ebullitionEtHoublonnage": "Construire une base d’amertume de Pils, compléter par des ajouts tardifs, puis effectuer un dry-hop relativement contenu. Les fortes charges qui donnent brûlure végétale, haze massif ou texture huileuse font perdre la finesse recherchée.",
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
      "description": "La Czech Pale Lager est la petite sœur quotidienne de la grande pils tchèque : plus légère, moins intense, mais toujours riche en malt tendre et houblon épicé. Elle a ce goût de pain frais, de Saaz discret et de mousse crémeuse qui donne envie d’une deuxième pinte avant la fin de la première.",
      "histoireEtOrigines": `La Czech Pale Lager appartient à un système tchèque où la force du moût et la couleur sont historiquement aussi importantes que les catégories stylistiques internationales. Dans l’usage tchèque moderne, les bières sont souvent classées par densité d’extrait du moût primitif : les výčepní se situent traditionnellement dans une zone plus légère que les ležák, ce qui permet de distinguer une bière pâle de consommation courante d’une Czech Premium Pale Lager plus pleine. Le BJCP insiste sur cette logique locale afin d’éviter de traiter la Czech Pale Lager comme une simple « Pilsner diluée ».

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
      "description": "La Czech Premium Pale Lager est la grande pils bohémienne : dorée, ronde, houblonnée, amère mais douce dans ses contours. Là où la German Pils coupe net, elle enveloppe davantage : pain clair, herbe épicée, mousse dense et longue finale noble.",
      "histoireEtOrigines": `La Czech Premium Pale Lager est l’héritière la plus directe de la bière brassée à Plzeň par Josef Groll en 1842. Le contexte est celui d’une ville décidée à moderniser sa production après des critiques répétées sur la qualité des bières locales. Une nouvelle brasserie est construite et Groll applique la fermentation basse bavaroise à un ensemble de matières premières particulièrement favorables : eau très douce, malt d’orge pâle et houblon de Žatec/Saaz. Le résultat est une bière dorée brillante, fortement houblonnée mais étonnamment douce dans sa perception, qui devient un modèle mondial.

La catégorie BJCP moderne ne se réduit pas à Pilsner Urquell, mais cet exemple reste fondamental pour comprendre le style. Le terme tchèque ležák renvoie à une lager d’une force supérieure aux výčepní légères. Le style combine davantage de richesse maltée et de corps qu’une German Pils, tout en conservant une amertume importante. Cette tension explique son caractère particulier : la bière peut afficher 30 à 45 IBU sans donner la même sécheresse mordante qu’une Pils allemande, notamment grâce à une eau douce, une rondeur de malt et une fermentation qui ne cherche pas l’effacement absolu.

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
      "description": "L’American Pilsner historique est plus rustique qu’une pils européenne : malt pâle, maïs possible, amertume franche et caractère céréale plus marqué. Elle n’est pas une light lager ; c’est une tentative américaine ancienne de faire une pilsner robuste avec les ingrédients du pays.",
      "histoireEtOrigines": `L’American Pilsner reconnue aujourd’hui par les Brewers Association renvoie largement à la tradition des lagers américaines plus houblonnées et plus savoureuses qui précèdent la standardisation de masse du XXe siècle. L’immigration brassicole allemande et centre-européenne apporte au XIXe siècle la fermentation basse et l’ambition de produire des bières inspirées des lagers continentales. Mais les matières premières américaines diffèrent : l’orge à six rangs, riche en enzymes mais plus chargée en protéines, s’accommode bien de céréales comme le maïs ou le riz, qui allègent la structure du moût.

La catégorie contemporaine est souvent appelée « Pre-Prohibition Pilsner » dans le langage brassicole, même si les Brewers Association utilisent American-Style Pilsener. Leur guide accepte une proportion notable de maïs ou de riz, jusqu’à environ un quart de la charge céréalière, et une amertume nettement supérieure aux American Lagers de masse. Le profil historique recherché n’est donc pas celui d’une bière neutre : le malt et les céréales sont perceptibles, le houblon peut être floral, épicé ou herbacé, et la finale reste sèche et vive.

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
        "empatage": "Empâtage fermentescible. Les céréales crues demandent traditionnellement un cereal mash ou une gélatinisation séparée ; les formes floconnées/prégélatinisées simplifient ce travail.",
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
      "description": "La Contemporary American Pilsner est une pils craft américaine : claire, sèche, précise, mais plus libre sur le houblon. Elle peut sentir le citron, les fleurs, les herbes ou les fruits blancs, tout en gardant la colonne vertébrale d’une lager nette.",
      "histoireEtOrigines": `La Contemporary American Pilsner est une catégorie de la scène brassicole récente plutôt qu’un style historique. Elle témoigne du retour des brasseurs américains vers la lager comme espace de créativité après plusieurs décennies où l’IPA a dominé l’imaginaire craft. Là où l’American Pilsner historique regarde vers les lagers d’avant la Prohibition, la version contemporaine accepte une palette plus large de malts, d’adjoints et surtout de houblons.

Les Brewers Association distinguent explicitement les deux catégories. Dans la Contemporary American-Style Pilsener, une base tout malt est fréquente mais des céréales adjointes restent possibles ; les houblons peuvent être américains ou internationaux et dépasser le registre strictement noble. Le style reste toutefois une Pilsner : la bière doit demeurer claire à légèrement voilée, très propre, relativement sèche et construite autour d’une amertume lisible.

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
      "description": "La West Coast Pilsner est une créature de laboratoire en lunettes de soleil : base de pils sèche, houblons expressifs, agrumes, pin, fruits tropicaux, finale nerveuse. Elle flirte avec l’IPA, mais doit garder le claquant froid d’une lager.",
      "histoireEtOrigines": `La West Coast Pilsner est un style extrêmement récent, né du croisement entre la culture de la Pils craft américaine et le vocabulaire aromatique de la West Coast IPA. Les Brewers Association l’intègrent aujourd’hui à leurs catégories de compétition, signe qu’un ensemble de pratiques autrefois décrit comme « hoppy lager » ou « dry-hopped Pils » s’est suffisamment stabilisé pour recevoir un nom propre.

Il serait artificiel de lui attribuer un inventeur unique : plusieurs brasseries de la côte Ouest ont exploré en parallèle des lagers fortement houblonnées, claires et sèches. Ce qui distingue la catégorie n’est pas seulement la quantité de houblon, mais le choix d’un registre aromatique typiquement moderne : agrumes, pin, résine, fruits tropicaux, fruits à noyau, notes dank ou sauvages, parfois issus de variétés américaines, néo-zélandaises ou australiennes. La fermentation basse et le corps léger empêchent cependant le houblon de se poser sur une texture d’IPA classique.

Le style illustre aussi une évolution de la culture craft : la limpidité, la sécheresse et la précision redeviennent des qualités recherchées après la vague des IPA opaques. Une West Coast Pilsner réussie peut être intensément parfumée tout en restant tranchante, légère et très pétillante. Le risque principal est de dépasser la frontière : si la bière devient trop alcoolisée, trop résineuse, trop texturée ou trop chargée en matière végétale, elle perd son identité lager.`,
      "recette": {
        "profilUnique": true,
        "maltsEtCereales": [
          "Malt Pilsner ou pale très clair ; recette volontairement simple pour laisser le houblon dominer sans créer de douceur résiduelle."
        ],
        "houblons": [
          "Variétés modernes à agrumes, pin, tropical, fruits à noyau ou caractère dank.",
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
      "description": "La Rice Lager utilise le riz comme instrument de légèreté : robe pâle, corps sec, finale nette, texture allégée et parfois une délicate note céréalière. Le riz ne doit pas rendre la bière vide ; il doit la rendre plus fine, comme du papier de soie brassicole.",
      "histoireEtOrigines": `Le riz est utilisé depuis longtemps dans de nombreuses lagers industrielles et régionales, particulièrement en Asie et en Amérique du Nord, mais « Rice Lager » comme catégorie de style autonome est beaucoup plus récente. Les Brewers Association ont ajouté une catégorie Rice Lager à leurs guidelines 2026 afin de reconnaître un courant où le riz n’est plus seulement un adjoint destiné à alléger une recette : il peut devenir une composante revendiquée de l’identité sensorielle.

Cette distinction est importante. Un riz très neutre peut diminuer le corps et laisser une finale sèche ; certaines variétés aromatiques peuvent apporter des impressions de céréale douce, noix, riz cuit ou parfum floral subtil. Les BA Guidelines admettent donc un éventail qui va de la neutralité à une expression du riz perceptible, à condition que la bière conserve la netteté et la buvabilité d’une lager.

Techniquement, le mot « riz » couvre plusieurs matières premières. Les flocons et produits prégélatinisés peuvent être incorporés directement dans certains empâtages, tandis que le riz cru exige généralement une gélatinisation/céréale mash afin de rendre son amidon accessible aux enzymes du malt. Les brasseries industrielles maîtrisent depuis longtemps ces procédés ; la vague craft actuelle les redécouvre parfois avec des variétés culinaires régionales et une ambition aromatique plus forte.`,
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
      "description": "L’India Pale Lager prend l’intensité houblonnée d’une IPA et lui retire la chaleur de fermentation ale : agrumes, résine, fruits tropicaux, finale sèche, amertume franche. C’est une IPA passée par une chambre froide, avec moins d’esters et plus de précision.",
      "histoireEtOrigines": `India Pale Lager, ou IPL, est un nom volontairement hybride apparu dans la scène craft pour décrire des bières qui appliquent un houblonnage d’IPA à une fermentation basse. Il ne s’agit pas d’un descendant historique des India Pale Ales du XIXe siècle : le mot « India » est ici une référence stylistique moderne à l’intensité du houblon. La catégorie est reconnue par les Brewers Association sous le nom American-Style India Pale Lager.

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
      "description": "La Munich Helles est la lager dorée de la douceur bavaroise : malt clair, pain frais, miel léger, amertume basse et finale propre. Elle ne cherche pas le tranchant d’une pilsner, mais une rondeur lumineuse qui glisse sans devenir sucrée.",
      "histoireEtOrigines": `Le Munich Helles naît à la fin du XIXe siècle dans une Bavière dont la grande tradition est encore la bière sombre. La Pilsner bohémienne, claire et brillante, rencontre un immense succès commercial après 1842 et oblige les brasseries munichoises à répondre. München Tourismus attribue à Spaten un rôle pionnier dans l’apparition du Münchner Hell à cette époque, tandis que les guides de styles situent son développement dans les années 1890.

Le choix munichois n’est pas de copier exactement la Pilsner. Le Helles — « clair » ou « pâle » — conserve la douceur maltée chère à la Bavière et réduit l’agressivité du houblon. Il devient une bière dorée, propre et souple où la céréale, le pain blanc et une légère douceur initiale précèdent une finale suffisamment sèche pour rester désaltérante. Le houblon noble est présent, mais davantage comme équilibre que comme signature dominante.

Au XXe siècle, le Helles devient l’un des piliers de la culture des Biergärten et tavernes bavaroises. Son apparente simplicité en fait une bière particulièrement exigeante : trop de houblon et elle devient Pils-like ; trop de malt ou de sucres résiduels et elle devient lourde ; trop peu des deux et elle ressemble à une lager internationale. Le style moderne repose donc sur la finesse d’un malt pâle de haute qualité et une fermentation d’une grande propreté.`,
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
      "description": "La Dortmunder Export est une lager dorée plus charpentée qu’une Helles, plus ronde qu’une German Pils, souvent avec une impression minérale et une amertume équilibrante. Elle a le sérieux d’une bière de ville industrielle : propre, solide, carrée.",
      "histoireEtOrigines": `Dortmund devient au XIXe et au début du XXe siècle l’un des grands centres industriels de la bière allemande. L’essor des mines, de l’acier et du chemin de fer crée un immense marché urbain pour des bières capables d’être produites et distribuées à grande échelle. Le Brauerei-Museum Dortmund conserve cette mémoire d’une ville où de nombreuses grandes brasseries ont contribué à faire de la bière un produit industriel majeur.

La figure de Fritz Brinkhoff est particulièrement liée à l’Export : la ville de Dortmund le présente comme maître brasseur fondateur de la Dortmunder Union-Brauerei en 1873 et associe son travail au développement d’une bière Export plus robuste. Le terme « Export » désigne une lager un peu plus forte et durable que les bières locales courantes, adaptée à un transport plus large. Dans les classifications internationales, « Dortmunder Export » a longtemps servi à décrire une lager dorée située entre Helles et Pils : plus de corps et de malt qu’une Pils sèche, mais une amertume et une minéralité souvent plus marquées qu’un Helles.

La célèbre histoire de « l’eau dure de Dortmund » est utile mais mérite d’être nuancée. Les minéraux locaux ont certainement influencé les brasseries historiques, mais les brasseurs modernes savent traiter leur eau. Le style ne doit donc pas être réduit à une recette de sels. Ce qui compte est la sensation d’équilibre : malt doux, corps moyen, amertume ferme mais harmonieuse et impression légèrement minérale possible, jamais crayeuse.`,
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
          "url": "https://www.dortmund.de/newsroom/presse-mitteilungen/fuehrung-im-brauerei-museum-erzaehlt-die-geschichte-von-fritz-brinkhoff-2.html",
          "consultation": "2026-08-08"
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
      "description": "La Festbier moderne est l’Oktoberfest en version dorée : malt doux, pain clair, touche toastée, corps souple et grande buvabilité malgré la force. Elle doit donner envie de lever la chope, pas de faire une sieste sous la table.",
      "histoireEtOrigines": `La Festbier moderne est étroitement liée à l’évolution de la bière servie à l’Oktoberfest de Munich, mais elle ne doit pas être confondue avec toute l’histoire de la fête. L’Oktoberfest naît en 1810 à l’occasion du mariage du prince héritier Louis de Bavière et de Thérèse de Saxe-Hildburghausen. La bière qui y est servie change au fil du XIXe et du XXe siècle à mesure que les technologies et les goûts évoluent.

Le lien avec la Märzen se consolide dans la seconde moitié du XIXe siècle. Le site officiel de l’Oktoberfest rappelle qu’une Märzen brassée par Spaten est introduite à la fête en 1872. Cette lager ambrée plus forte devient durablement associée à l’image internationale d’« Oktoberfestbier ». Pourtant, à partir de la fin du XXe siècle, les grandes brasseries munichoises privilégient progressivement une bière plus pâle, dorée et moins saturante. Le BJCP situe le passage majoritaire à la Festbier actuelle autour des années 1990 et rappelle que la version moderne a été développée plusieurs décennies auparavant pour mieux convenir à la consommation en grandes chopes.

Aujourd’hui, l’Oktoberfestbier servie officiellement à Munich est soumise au cadre local de la fête et produite par les brasseries munichoises autorisées. La Festbier comme style international en reprend le profil : force autour de 6 %, malt allemand riche mais pâle, houblon noble modéré, corps souple et finale sèche. Son objectif n’est pas de concentrer le malt comme un Bock ; c’est d’offrir suffisamment de richesse pour être festive tout en restant étonnamment facile à boire litre après litre.`,
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
      "description": "La Vienna Lager est une ambre élégante : malt toasté, noisette, croûte de pain, caramel très léger, finale sèche et propre. Elle n’est ni sucrée ni lourde ; son charme est dans cette couleur cuivre qui promet plus de chaleur qu’elle n’en donne vraiment.",
      "histoireEtOrigines": `La Vienna Lager est liée à l’une des grandes transformations techniques du brassage européen du XIXe siècle. Anton Dreher, héritier d’une famille de brasseurs autrichiens, développe à Schwechat près de Vienne une bière de fermentation basse brassée avec un malt plus pâle et plus régulièrement touraillé que les malts bruns traditionnels. La maison Dreher situe en 1841 son « Lagerbier », au moment même où d’autres brasseurs d’Europe centrale expérimentent des méthodes de maltage et de fermentation qui vont bouleverser l’apparence des bières.

Le malt qui prendra le nom de Vienna se trouve entre le Pilsner très pâle et le Munich plus sombre : assez clair pour produire une bière cuivrée brillante, assez riche pour donner croûte de pain, toast et douceur maltée. La Vienna Lager devient ainsi une lager ambrée élégante, plus sèche et moins caramélisée que beaucoup d’interprétations modernes ne le laissent penser. L’innovation est contemporaine de la naissance de la Pilsner et participe au même basculement vers des bières de couleur plus claire, servies limpides et maturées à froid.

Le style décline fortement dans son berceau européen au XXe siècle, mais sa descendance culturelle est complexe. L’émigration de brasseurs germaniques et autrichiens vers les Amériques contribue à diffuser des lagers ambrées ; au Mexique, plusieurs marques entretiennent une parenté revendiquée avec la tradition viennoise. Il serait trop simple de présenter la Mexican Amber Lager comme un fossile exact de la recette de Dreher : matières premières, procédés et goûts ont évolué. Mais le Mexique constitue bien aujourd’hui l’un des lieux où l’idée d’une lager ambrée de type Vienna demeure familière au grand public.

La renaissance craft redonne ensuite au style une définition plus historique : malt Vienna au premier plan, caramel faible, houblon noble discret, fermentation basse nette et finale sèche. Le style moderne cherche moins à reproduire une bière précise de 1841 qu’à restaurer l’équilibre qui faisait l’originalité de cette famille : couleur cuivre, profondeur de pain et très grande buvabilité.`,
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
      "description": "La Märzen est une lager ambrée de garde : pain grillé, malt riche, croûte, douceur initiale puis finale sèche. Elle doit sembler généreuse sans coller au palais, comme un manteau d’automne bien coupé.",
      "histoireEtOrigines": `Märzen signifie littéralement « bière de mars ». Le nom s’inscrit dans une ancienne organisation saisonnière du brassage bavarois : avant la réfrigération mécanique, la production de bières de fermentation basse devenait difficile pendant les mois chauds. Les brassins de fin d’hiver ou de début de printemps pouvaient être légèrement plus forts, puis conservés dans des caves froides — parfois avec de la glace naturelle — pour traverser l’été. La Märzen est donc d’abord liée à une logique de calendrier, de garde et de stabilité avant de devenir l’image internationale de la bière d’Oktoberfest.

La forme ambrée moderne se développe au XIXe siècle dans le contexte des nouveaux malts Vienna et Munich. Le BJCP relie notamment l’évolution du style aux travaux d’Anton Dreher et de Gabriel Sedlmayr. À l’Oktoberfest de Munich, le site officiel de la fête rappelle qu’en 1872 la brasserie Spaten introduit une Märzen ambrée plus forte qui rencontre un succès durable. Cette bière finit par modeler l’idée internationale de l’« Oktoberfestbier » : cuivre à ambre, malt de pain et corps généreux.

Pourtant, la fête munichoise moderne ne sert plus principalement cette Märzen. À partir de la fin du XXe siècle, les grandes brasseries de Munich adoptent une Festbier dorée, plus claire et moins rassasiante. Le décalage est désormais culturel : hors de Munich, notamment aux États-Unis, « Oktoberfest » désigne encore très souvent une lager ambrée de type Märzen ; à Munich, la bière de fête contemporaine est plutôt blonde.

La Märzen historique moderne doit rester sèche et élégante. Le malt peut évoquer pain grillé, croûte et toast, mais le caramel intense est un contresens fréquent. Le houblon équilibre sans prendre le dessus, et la fermentation basse transforme une densité relativement forte en bière lisse plutôt qu’en dessert malté.`,
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
      "description": "La Franconian Rotbier joue sur le rouge : malt toasté, croûte de pain, légère noisette, couleur cuivre-rubis et finale propre. Elle doit rester une lager de précision, pas une ambrée sucrée maquillée en tradition.",
      "histoireEtOrigines": `La Rotbier franconienne est particulièrement associée à Nuremberg. Les sources touristiques institutionnelles de la ville présentent la cité comme « Home of Rotbier » et rattachent la bière rouge locale à une tradition médiévale. Les règlements de Nuremberg encadrent très tôt les matières premières et la qualité de la bière ; les caves creusées dans le grès sous la ville permettent ensuite de conserver les fûts à température fraîche, un avantage décisif pour les bières de garde puis pour les fermentations basses.

Les archives municipales citées par Tourismus Nürnberg montrent l’importance du brassage local : à la fin du XVIe siècle, la ville compte plusieurs dizaines de brasseries de Rotbier en plus des producteurs de bière blanche. Cette donnée permet de sortir le style du folklore contemporain : la bière rouge n’est pas seulement une invention craft utilisant un nom ancien. En revanche, il faut rester prudent sur la continuité exacte des recettes. Entre les bières médiévales, les transformations du maltage, l’arrivée de la fermentation basse moderne et les Rotbier actuelles, les procédés ont profondément changé.

La Rotbier moderne de Franconie est une lager ambrée à rouge rubis, centrée sur le malt mais plus sèche qu’une bière caramel. Elle peut évoquer croûte de pain, toast et noisette légère, soutenus par des houblons allemands discrets. Les Brewers Association reconnaissent aujourd’hui la Franconian-Style Rotbier, ce qui donne une définition contemporaine à une identité régionale bien plus ancienne. La meilleure lecture encyclopédique consiste donc à tenir ensemble les deux niveaux : une tradition nurembergeoise documentée de bière rouge et un style moderne de fermentation basse codifié beaucoup plus récemment.`,
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
      "description": "L’International Amber Lager est une lager ambrée de compromis : malt caramel léger, pain toasté, corps moyen, amertume sage et profil très accessible. Elle reprend la couleur des grandes lagers maltées sans forcément leur profondeur historique.",
      "histoireEtOrigines": `L’International Amber Lager est moins une tradition régionale qu’une famille de convergence. À mesure que la lager pâle devient le standard mondial, de nombreuses brasseries proposent une version plus colorée et plus maltée destinée aux consommateurs qui souhaitent davantage de goût sans quitter le registre très accessible de la lager industrielle ou semi-industrielle. Les guides BJCP regroupent ces bières sous une catégorie internationale plutôt que de leur inventer un berceau unique.

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
      "description": "La Czech Amber Lager est une ambre tchèque pleine de nuances : pain grillé, caramel sec, houblon épicé, rondeur maltée et amertume souple. Elle peut tirer vers le malt ou vers le houblon, mais elle doit garder ce moelleux tchèque qui arrondit les angles.",
      "histoireEtOrigines": `La Czech Amber Lager appartient au vocabulaire tchèque des polotmavé pivo — littéralement des bières « semi-sombres ». Le BJCP souligne que la tradition tchèque ne découpe pas les lagers exactement comme les catégories germaniques ou anglo-américaines : couleur et densité originale se combinent pour produire des familles plus larges. Une amber lager tchèque peut ainsi se rapprocher d’une Vienna par sa couleur, d’une Czech Premium par son houblon ou d’une Dunkel légère par sa profondeur de malt, tout en conservant une identité locale.

Historiquement, les lagers ambrées sont moins mondialement célèbres que la Pilsner de Plzeň, mais elles font partie du paysage des brasseries tchèques. Le BJCP note une grande variabilité et la possibilité traditionnelle de construire la couleur et le goût avec Pilsner, Vienna, Munich, caramel et petites quantités de malt sombre. Certaines pratiques de brasserie peuvent même inclure le mélange de moûts ou de bières pâles et sombres, ce qui rappelle que la taxonomie de concours n’est pas toujours la photographie exacte de la production locale.

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
        "ebullitionEtHoublonnage": "Amertume moyenne avec houblon tchèque ; équilibre variable selon la brasserie, du malt-forward au presque hop-forward.",
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
      "description": "L’American Amber Lager est une lager ambrée propre, plus maltée que la blonde standard, mais rarement radicale : caramel léger, pain toasté, douceur modérée, amertume contenue. Elle est souvent plus confortable que profonde, mais une bonne version garde une vraie colonne sèche.",
      "histoireEtOrigines": `L’American Amber Lager est une catégorie moderne et large. Elle émerge du paysage américain où coexistent, à partir de la fin du XXe siècle, les lagers industrielles très pâles et une scène artisanale qui remet en valeur les malts plus colorés. Certaines bières s’inspirent de Vienna ou Märzen ; d’autres sont simplement des lagers américaines enrichies en malt caramel ou toasté. Les Brewers Association reconnaissent cette diversité plutôt que d’imposer une généalogie européenne unique.

La catégorie actuelle accepte un caractère de malt caramel ou toasté faible à moyen et une amplitude de houblonnage assez importante. Cette souplesse reflète la culture craft américaine : une Amber Lager peut être malt-forward, équilibrée ou légèrement houblonnée, tant que la fermentation reste propre et que le profil ne dérive pas vers une American Amber Ale fruitée.

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
        "ebullitionEtHoublonnage": "Amertume d’équilibre ou légèrement affirmée, arôme variable mais non IPA-like.",
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
      "description": "L’American Märzen / Oktoberfest reprend l’imaginaire bavarois en version craft ou export : robe ambrée, malt toasté, caramel léger, corps rond et finale assez propre. Elle doit éviter le piège du sirop d’automne : une Märzen n’est pas une bière au caramel déguisée en folklore.",
      "histoireEtOrigines": `L’American Märzen / Oktoberfest montre comment un style change de sens lorsqu’il voyage. Aux États-Unis, le mot « Oktoberfest » reste fortement associé à la lager ambrée de type Märzen popularisée à Munich à partir de 1872. Cette image a été diffusée par les brasseries germano-américaines, les fêtes d’automne et plus tard par le mouvement craft. Pendant ce temps, l’Oktoberfest de Munich adopte progressivement une Festbier beaucoup plus blonde et fluide.

Les Brewers Association conservent une catégorie German-Style Maerzen et plusieurs lectures d’Oktoberfest, mais le marché américain utilise encore « Oktoberfest » de façon plus large. Une bière saisonnière américaine peut donc aller d’une Märzen assez historique à une amber lager plus caramélisée, parfois avec une intensité de malt que les exemples allemands modernes éviteraient.

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
        "profilEau": "Modérément minérale, malt-forward mais sans alcalinité lourde.",
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
      "description": "La Mexican Amber Lager est une ambre solaire : malt toasté, caramel léger, corps moyen, finale sèche et buvabilité de terrasse. Elle peut rappeler Vienna Lager, mais avec une approche souvent plus douce, plus lisse, plus tournée vers le verre frais.",
      "histoireEtOrigines": `La Mexican Amber Lager s’inscrit dans une histoire brassicole mexicaine marquée par l’arrivée de techniques et de traditions européennes au XIXe siècle, puis par une industrialisation rapide. La chronologie exacte des influences autrichiennes et allemandes est souvent simplifiée dans les récits populaires, mais l’existence d’une affinité durable avec les lagers ambrées de type Vienna est bien visible dans le portefeuille de plusieurs brasseries mexicaines.

Cerveza Victoria revendique une histoire remontant à 1865 et se décrit aujourd’hui comme une Vienna Lager. Grupo Modelo, fondé au XXe siècle, développe également des bières plus sombres à côté des lagers pâles. Ces exemples ne prouvent pas que toutes les lagers ambrées mexicaines descendent directement d’Anton Dreher ; ils montrent plutôt comment le vocabulaire viennois et munichois a trouvé un terrain durable au Mexique, où il s’est adapté aux malts, adjoints, procédés industriels et habitudes de consommation locales.

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
          "reference": "Victoria — Vienna Lager and brand history dating to 1865",
          "type": "source_primaire_historique",
          "url": "https://www.cervezavictoria.com.mx/preguntas-frecuentes",
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
      "description": "La Munich Dunkel est sombre sans être noire de colère : pain brun, croûte, noisette, chocolat très doux, malt Munich profond et finale propre. Elle ne doit pas goûter la torréfaction de stout ; son noir est celui du pain, pas du café brûlé.",
      "histoireEtOrigines": `Avant que Munich ne devienne synonyme de Helles dorée, la bière bavaroise était majoritairement sombre. Le Munich Dunkel représente cette ancienne norme : une lager brune centrée sur des malts riches et des procédés capables de développer pain, croûte et profondeur de Maillard. München Tourismus rappelle que les bières sombres dominent la culture locale pendant des siècles et que l’apparition du Helles à la fin du XIXe siècle constitue justement une rupture avec cet héritage.

Le développement des malts Munich, plus foncés que le Vienna et beaucoup plus aromatiques que le Pilsner, permet de produire une bière brun-cuivre sans utiliser la torréfaction noire comme source principale de goût. La décoction, longtemps pratique dans les brasseries d’Europe centrale, renforce encore la profondeur maltée. Le Dunkel historique ne ressemble donc pas à une stout fermentée froid : le café brûlé, l’astringence et la torréfaction forte sont étrangers au centre du style.

Le BJCP décrit une bière aux notes de croûte, toast, noisette et parfois chocolat très doux, avec une amertume modérée et une finale assez sèche. Les malts torréfiés modernes désamérisés peuvent aider à ajuster la couleur, mais ils doivent rester un outil discret. Ce qui fait la grandeur d’un Dunkel est sa capacité à paraître riche sans être lourd : la complexité maltée arrive par couches, tandis que la fermentation lager et l’amertume contenue nettoient la bouche.`,
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
      "description": "La Schwarzbier est noire mais légère sur ses pieds : cacao sec, pain sombre, touche de café doux, finale nette et amertume délicate. Elle ressemble parfois à une stout de loin, mais au goût elle reste lager : propre, fine, sèche, sans épaisseur rôtie.",
      "histoireEtOrigines": `Schwarzbier signifie simplement « bière noire », mais le style moderne possède une identité plus précise que son nom générique. La Köstritzer Schwarzbierbrauerei documente une tradition brassicole remontant à 1543 dans la région de Bad Köstritz, en Thuringe. Cette ancienneté ne signifie pas que la Schwarzbier actuelle était brassée exactement de la même manière au XVIe siècle : les levures, le maltage, le refroidissement et la fermentation basse moderne se sont transformés. Elle démontre néanmoins qu’une tradition de bière sombre est profondément enracinée dans l’Allemagne centrale.

La Schwarzbier contemporaine est une lager noire étonnamment légère. Le malt sombre peut évoquer cacao, café doux, pain grillé ou croûte, mais les caractères brûlés, acrides et très torréfiés d’une stout sont généralement inappropriés. Cette distinction est devenue plus facile à obtenir avec des malts torréfiés désamérisés et des techniques permettant d’extraire la couleur sans trop d’astringence.

Comparée au Munich Dunkel, la Schwarzbier est souvent plus sombre, un peu plus sèche et légèrement plus marquée par le malt torréfié ; comparée à une porter, elle est plus propre, moins fruitée et beaucoup plus retenue. Cette position intermédiaire explique son charme : elle a l’apparence d’une bière massive mais le comportement d’une lager de grande buvabilité.`,
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
      "description": "L’International Dark Lager est une sombre accessible : couleur brune à noire, malt doux, caramel léger, parfois chocolat discret, mais peu d’amertume et peu de torréfaction. Elle veut rassurer plus qu’impressionner.",
      "histoireEtOrigines": `L’International Dark Lager est la sœur sombre de l’International Pale Lager. Elle ne possède pas de naissance régionale unique : on la rencontre partout où les grandes lagers pâles ont généré une déclinaison brune ou noire destinée à offrir davantage de malt, de couleur ou d’image traditionnelle sans changer profondément le profil de fermentation.

Le BJCP la décrit comme une bière souvent plus douce et plus maltée que la pale lager internationale, mais toujours très accessible. Le caractère sombre peut provenir de malts caramel, de malts torréfiés doux, de sirops colorants autorisés selon les marchés ou d’un assemblage de plusieurs matières premières. La torréfaction ne doit généralement pas devenir aussi ferme que dans une Schwarzbier, et la fermentation reste neutre.

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
      "description": "L’European Dark Lager couvre les lagers sombres européennes qui ne rentrent pas parfaitement dans Munich Dunkel ou Schwarzbier : malt brun, pain noir, caramel sec, parfois chocolat doux. Elle doit rester propre et basse fermentation, avec une noirceur civilisée.",
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
      "description": "La Czech Dark Lager est sombre, ronde et étonnamment buvable : pain noir, caramel, cacao doux, houblon épicé et parfois une pointe de douceur moelleuse. Elle peut sembler riche, mais elle doit garder la souplesse d’une lager tchèque bien tirée.",
      "histoireEtOrigines": `La Czech Dark Lager appartient à la vaste famille tchèque des tmavé — « sombres » — et parfois des černé, « noires ». Contrairement à une Schwarzbier allemande, le style tchèque n’est pas défini par une couleur noire sèche ni par une torréfaction nette. Le BJCP insiste sur sa largeur : les exemples peuvent aller du brun rouge profond au presque noir et équilibrer malt, houblon et douceur de façons assez différentes.

Cette diversité s’explique en partie par le système tchèque lui-même, qui classe traditionnellement les bières selon la couleur et la densité originale davantage que selon les catégories internationales. Les brasseries peuvent construire un tmavé avec une combinaison de Pilsner, Munich, Vienna, caramel et malt sombre. Certaines pratiques historiques ou locales utilisent aussi des assemblages de moûts ou de bières. La Czech Dark Lager n’est donc pas simplement une Munich Dunkel avec du Saaz : elle possède une culture de recette plus souple.

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
      "description": "L’American Dark Lager est une sombre domestiquée : brune, propre, malt légèrement grillé, corps moyen-léger et finale douce. Elle peut évoquer une dark lager internationale avec un peu plus de couleur, mais rarement un vrai caractère de torréfaction.",
      "histoireEtOrigines": `L’American Dark Lager est une catégorie moderne qui prolonge le langage des lagers américaines accessibles vers une robe plus sombre. Elle ne possède pas l’ancrage régional du Munich Dunkel ou de la Schwarzbier et ne doit pas être présentée comme une survivance directe d’une tradition précise. Elle apparaît plutôt dans un marché où les brasseries proposent plusieurs niveaux de couleur et d’intensité autour d’une même fermentation propre.

Dans sa forme la plus simple, une base de lager américaine est enrichie par des malts caramel, toastés ou sombres doux. Des céréales adjointes peuvent rester présentes pour préserver le corps léger. Les Brewers Association distinguent les dark lagers américaines de leurs équivalents européens par cette latitude et par une expression souvent plus neutre.

La scène craft peut produire des versions plus maltées ou plus houblonnées, mais le style garde une exigence : la couleur ne doit pas annoncer une stout. Café brûlé, fruit de levure et forte astringence sont étrangers au centre du profil. L’intérêt de la catégorie réside justement dans cette contradiction visuelle : une bière brune ou noire qui conserve la facilité, la carbonatation et la propreté d’une lager américaine.`,
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
      "description": "La Mexican Dark Lager est une lager sombre de chaleur : brune, douce, maltée, avec caramel, pain brun, parfois chocolat léger, mais une finale assez lisse pour rester désaltérante. Elle ne doit pas être lourde ; son sombre doit rester convivial.",
      "histoireEtOrigines": `La Mexican Dark Lager s’inscrit dans une culture brassicole où les lagers pâles n’ont jamais complètement effacé les interprétations plus sombres d’inspiration européenne. L’exemple commercial le plus connu à l’international est Modelo Negra, que la marque décrit elle-même comme une bière de style Munich Dunkel brassée au Mexique depuis les débuts du groupe dans les années 1920. La chronologie officielle de Grupo Modelo montre plus largement comment une grande industrie nationale se structure autour de plusieurs profils de lager.

Il serait néanmoins faux de transformer « Mexican Dark Lager » en synonyme de Munich Dunkel authentique. Les recettes mexicaines peuvent utiliser des céréales non maltées, des malts caramel et des procédés industriels conçus pour la stabilité et la buvabilité. Leur expression est souvent plus douce, plus lisse et moins intensément maltée que les Dunkel bavaroises. L’influence européenne fournit une grammaire ; le Mexique en développe sa propre version.

Cette famille complète utilement les Mexican Pale et Amber Lagers. La couleur sombre apporte caramel, pain brun, noix ou chocolat doux, mais la fermentation reste neutre et la bière se boit généralement fraîche. Une bonne version ne doit pas devenir collante : l’alcool modéré, la carbonatation et une finale suffisamment sèche préservent la fonction désaltérante qui reste centrale dans beaucoup de lagers mexicaines.`,
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
      "description": "Le Traditional Bock est le bock brun classique : malt riche, croûte, caramel sombre, pain grillé, fruits secs légers et chaleur maîtrisée. Le houblon reste en retrait ; ici, c’est le malt qui porte le sceptre.",
      "histoireEtOrigines": `Le Traditional Bock, ou Dunkles Bock, est la forme sombre classique de la famille issue d’Einbeck puis transformée par la culture brassicole bavaroise. La documentation d’Einbecker Brauerei rattache la réputation de la ville à un commerce de bière déjà attesté au XIVe siècle. Ces bières fortes voyagent bien et deviennent connues loin de leur lieu de production. Lorsque le modèle gagne Munich, il est progressivement absorbé par les techniques bavaroises de fermentation basse et les malts riches de la région.

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
      "description": "Le Helles Bock est un bock de printemps : fort mais blond, malté mais plus lumineux, avec pain clair, miel léger, fleurs de houblon et alcool bien intégré. Il a la force du bock sans son manteau sombre.",
      "histoireEtOrigines": `Le Helles Bock est la branche pâle de la famille Bock. Son autre nom fréquent, Maibock, l’associe culturellement au printemps et au mois de mai, mais il ne faut pas en faire une obligation historique absolue : toutes les Helles Bock ne sont pas des bières de mai et toutes les bières appelées Maibock ne suivent pas exactement la même recette. La catégorie moderne décrit surtout une lager allemande forte, plus claire et souvent un peu plus houblonnée que le Dunkles Bock.

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
      "description": "Le Doppelbock est le pain liquide devenu légende : malt dense, croûte, caramel profond, fruits secs, parfois chocolat doux, avec une chaleur alcoolisée large mais lisse. Il doit nourrir l’imaginaire sans devenir sirop.",
      "histoireEtOrigines": `Le Doppelbock est l’une des grandes bières fortes de Bavière et son histoire est intimement liée à la tradition monastique de Munich. La brasserie Paulaner rattache son Salvator à l’héritage des frères de l’ordre des Minimes — les « Paulaner » — qui brassent une bière nourrissante et puissante dans leur monastère. La formule populaire de « pain liquide » traduit cette densité mais ne doit pas être transformée en récit simpliste selon lequel la bière aurait uniquement servi à contourner le jeûne ; les pratiques religieuses, alimentaires et brassicoles sont plus complexes que cette légende souvent répétée.

Salvator devient néanmoins un archétype commercial majeur. Son influence est telle que de nombreux Doppelbocks adoptent ensuite des noms terminés en « -ator », hommage plus ou moins explicite à cette référence. La catégorie moderne conserve l’idée d’une lager extrêmement maltée, plus forte qu’un Bock standard, pouvant aller du doré foncé au brun très profond.

La richesse n’implique pas une sucrosité molle. Les meilleurs Doppelbocks développent pain, croûte, caramel naturel de Maillard, fruits secs et parfois chocolat doux, mais finissent suffisamment propres pour éviter le sirop. Les versions pâles existent également et montrent davantage d’alcool et de malt clair. La maturation joue un rôle essentiel : un jeune Doppelbock peut paraître chaud et anguleux ; après une garde correcte, alcool et malt se fondent en une texture beaucoup plus lisse.`,
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
      "description": "L’Eisbock est un Doppelbock passé par la glace : plus concentré, plus dense, plus alcoolisé, avec malt intense, fruits noirs, caramel sombre et chaleur profonde. Il doit être massif mais lisse, jamais brûlant ni solvanté.",
      "histoireEtOrigines": `L’Eisbock est une bière forte obtenue non pas seulement par un brassage plus dense, mais par concentration au froid. Une base de Doppelbock ou de Bock très fort est partiellement congelée ; l’eau cristallise avant la majorité de l’alcool et une partie de cette glace est retirée. La bière restante concentre alcool, sucres résiduels, composés de malt et arômes. Le procédé est une forme de freeze concentration et non une fermentation particulière.

Le style est traditionnellement associé à Kulmbach, en Franconie. Une légende très répandue raconte qu’un apprenti aurait oublié des fûts dehors pendant l’hiver et découvert au matin une bière extraordinairement forte autour d’un bloc de glace. Cette histoire est séduisante mais difficile à documenter solidement ; une encyclopédie doit la présenter comme folklore brassicole et non comme acte de naissance certifié.

La concentration amplifie tout : les qualités comme les défauts. Un Doppelbock riche devient plus intense en fruits noirs, pain, caramel profond et alcool ; une fermentation chaude ou oxydée devient elle aussi plus évidente. L’Eisbock ne doit donc pas être brûlant ni solvanté. Sa densité peut être considérable, mais la garde et l’intégration doivent produire une sensation presque liquoreuse plutôt qu’agressive.

Le procédé soulève enfin des questions réglementaires variables selon les pays, car la concentration par congélation peut être assimilée à une forme de concentration alcoolique. Cela ne change pas sa définition stylistique, mais rappelle qu’une recette domestique ou commerciale doit respecter la législation locale.`,
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
      "description": "L’American Lager est plus pleine qu’une light, mais reste construite pour la limpidité : pâle, nette, légèrement céréalière, très carbonatée, avec une amertume basse. Elle est simple, mais pas forcément négligée ; une bonne version a la propreté d’une machine bien réglée.",
      "histoireEtOrigines": `L’American Lager est le produit d’une rencontre entre les traditions de fermentation basse apportées par les immigrants européens et les matières premières, technologies et marchés des États-Unis. Au XIXe siècle, de nombreux brasseurs germano-américains installent la lager dans les villes en croissance. L’orge américaine, souvent à six rangs et riche en protéines, se prête à l’emploi de maïs ou de riz comme adjoints : ces céréales apportent des sucres fermentescibles, éclaircissent le corps et permettent de produire une bière très pâle et stable.

La réfrigération, le chemin de fer, les grandes cuves et la consolidation industrielle transforment ensuite la lager en produit national. La Prohibition bouleverse profondément l’industrie ; après son abrogation, les grandes brasseries gagnent encore en taille et en homogénéité. Au fil du XXe siècle, le profil dominant devient plus léger, plus pâle et moins amer, jusqu’à former l’image mondiale de la « bière américaine ».

Le BJCP distingue l’American Lager de l’American Light Lager : elle conserve un peu plus de corps, d’alcool et de goût de céréale. L’adjoint n’est pas un défaut en soi. Maïs et riz font partie de l’histoire du style et peuvent être utilisés avec une grande maîtrise. Ce qui définit la qualité est la propreté : fermentation neutre, faible amertume, carbonatation vive, aucune oxydation et une finale suffisamment sèche pour encourager la répétition.`,
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
        "empatage": "Très fermentescible ; cereal mash ou matières prégélatinisées selon la forme des adjoints.",
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
      "description": "La Contemporary American Lager reprend le standard américain en version plus moderne : toujours claire et facile, mais parfois plus maltée, plus houblonnée ou plus artisanale. Elle garde le format “lager accessible”, avec une exécution moins anonyme.",
      "histoireEtOrigines": `La Contemporary American Lager représente une relecture récente de la grande lager américaine. Elle naît dans un paysage où les brasseries artisanales, après avoir longtemps construit leur identité en opposition aux lagers industrielles, redécouvrent la difficulté et l’élégance des fermentations basses. Plutôt que de reproduire exactement une American Lager historique ou une Pils européenne, elles conservent la buvabilité américaine tout en réintroduisant davantage de malt, de houblon ou de singularité locale.

Les Brewers Association reconnaissent cette évolution avec une catégorie contemporaine distincte. Elle autorise une expression plus présente des ingrédients sans perdre le cœur du style : couleur pâle, corps léger à moyen-léger, fermentation nette, finale sèche et grande facilité de consommation. Les adjoints ne sont ni obligatoires ni interdits ; ils peuvent même devenir des outils créatifs lorsqu’ils sont choisis pour leur goût plutôt que seulement pour réduire le coût.

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
      "description": "La Mexican Pale Lager est une blonde de climat chaud : pâle, sèche, légèrement céréalière, peu amère, très rafraîchissante. Elle peut évoquer le maïs, le malt doux ou une touche herbacée, mais sa mission première reste la soif.",
      "histoireEtOrigines": `La Mexican Pale Lager s’inscrit dans plus d’un siècle d’industrialisation brassicole mexicaine. HEINEKEN México fait remonter la Cervecería Cuauhtémoc de Monterrey à 1890 ; Grupo Modelo fonde sa grande brasserie à Mexico dans les années 1920. Ces entreprises et leurs concurrentes développent une culture de lager adaptée à un marché national immense, puis à l’exportation vers les États-Unis et le reste du monde.

Les influences européennes sont réelles mais multiples. La marque Bohemia, créée en 1905 selon HEINEKEN México, revendique explicitement une inspiration Pilsner et l’usage de houblons européens. D’autres lagers mexicaines privilégient davantage la neutralité, les céréales adjointes et une amertume basse. La catégorie moderne Mexican Pale Lager des Brewers Association permet de regrouper ces bières pâles sans les forcer à devenir German Pils ou International Pale Lager.

Le service avec un quartier de citron vert est devenu un symbole international de certaines marques mexicaines, mais il ne fait pas partie de la recette du style et ne doit pas remplacer l’analyse de la bière. Une bonne Mexican Pale Lager est d’abord une lager : malt pâle, éventuels adjoints comme maïs ou riz, faible à moyenne amertume, fermentation propre et finale sèche. Le climat et la culture de consommation très fraîche renforcent la recherche de buvabilité, mais les exemples premium peuvent afficher un vrai parfum de houblon et une céréale plus noble.

Le style illustre enfin la diversité souvent sous-estimée du Mexique brassicole. Derrière l’image mondiale d’une lager très légère se trouve un pays qui produit depuis longtemps des Pilsners, Vienna Lagers, dark lagers et bières de spécialité. La Mexican Pale Lager est une branche de cette histoire, pas son résumé complet.`,
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
