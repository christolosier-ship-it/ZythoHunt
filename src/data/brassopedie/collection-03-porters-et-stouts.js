// Source canonique de la collection : taxonomie + contenu encyclopédique.
// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 3,
    "slug": "porters-et-stouts",
    "nom": "Porters et Stouts"
  },
  "cartes": [
    {
      "id": "porter",
      "nom": "Porter",
      "collectionId": 3,
      "nature": "F",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Londres, Angleterre",
        "ville": "Londres",
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
      "description": "Le Porter est une bière de pénombre : brun profond, reflets rubis, malt toasté, chocolat sec, caramel sombre et parfois une pointe de café doux. Il ne cherche pas forcément la brutalité torréfiée du stout ; son charme vient plutôt de l’équilibre, du fondu, de cette impression de pain noir passé au feu puis calmé par le malt.",
      "histoireEtOrigines": `Le porter est l’un des grands tournants de l’histoire brassicole moderne. Il apparaît à Londres au début du XVIIIe siècle dans une capitale en pleine croissance, où une population nombreuse consomme de la bière dans les tavernes tandis que le commerce, les docks et les métiers de transport structurent la vie urbaine. Les sources historiques montrent une évolution progressive des brown beers londoniennes vers une bière plus houblonnée, apte à la garde, et non l’invention soudaine d’un homme isolé. L’ancien récit selon lequel Ralph Harwood aurait créé vers 1722 une bière appelée « entire » pour reproduire en un seul brassin un mélange de trois bières servi au comptoir a longtemps été répété ; les historiens modernes considèrent cette explication comme beaucoup trop nette pour rendre compte de la documentation disponible.

Le nom « porter » semble s’être imposé parce que cette bière était particulièrement populaire parmi les nombreux travailleurs chargés de porter marchandises, colis et charges dans Londres. Le phénomène dépasse toutefois largement le folklore des porteurs. Le porter devient pendant plus d’un siècle une bière de masse, produite dans des établissements dont l’échelle impressionne les visiteurs. Sa capacité à être brassé, stocké et assemblé en grands volumes favorise l’essor de grandes brasseries londoniennes et de cuves de garde gigantesques. Il est exporté bien au-delà de l’Angleterre : vers l’Amérique du Nord, l’Irlande, l’Europe continentale, la Baltique, l’Inde et d’autres marchés de l’Empire et du commerce britannique.

Sa recette évolue sans cesse. Les porters du XVIIIe siècle ne ressemblent pas exactement aux porters modernes : changements de gravité, de fiscalité, de malts, de vieillissement et de techniques bouleversent la famille. L’invention et l’adoption du black malt au XIXe siècle permettent notamment d’obtenir une couleur sombre avec une proportion moindre de malt fortement torréfié, tandis que l’industrialisation et les contraintes des guerres modifient encore les formulations. Le mot « stout », qui signifiait d’abord simplement fort ou robuste, s’applique à des « stout porters » avant de devenir progressivement une famille autonome.

Après avoir dominé une partie du marché britannique, le porter décline fortement à partir de la fin du XIXe siècle. Il disparaît pratiquement de la production britannique au milieu du XXe siècle, alors que certaines lignées apparentées survivent ailleurs, notamment en Irlande et autour de la Baltique. Sa renaissance à partir de la fin des années 1970 accompagne le retour de brasseries indépendantes et du mouvement craft. Aujourd’hui, « Porter » désigne donc à la fois une famille moderne et l’héritier très transformé d’une bière historique dont les variantes ont été innombrables.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Porter est une famille historique et moderne, pas une formule unique. Les porters londoniens du XVIIIe siècle, les English Porters actuels, les versions américaines, les porters baltiques et les interprétations fumées ou impériales utilisent des procédés sensiblement différents.",
        "maltsEtCereales": [
          "Base de malt pale, pale ale, Vienna ou Munich selon la tradition et la sous-famille.",
          "Brown malt particulièrement pertinent pour les interprétations anglaises ; crystal/caramel, chocolate et autres malts foncés permettent de construire pain grillé, cacao, noisette et caramel sombre.",
          "Black malt ou malts torréfiés peuvent intervenir mais doivent être dosés selon le sous-style : un porter n’est pas défini par une violence brûlée uniforme."
        ],
        "houblons": [
          "Houblons britanniques terreux, floraux ou herbacés dans les traditions anglaises ; houblons américains plus expressifs possibles dans les versions modernes.",
          "Le houblonnage peut aller d’un simple contrepoids à un caractère franchement présent selon la famille."
        ],
        "levuresEtMicroorganismes": [
          "Levures ale britanniques ou américaines dans la majorité des porters modernes.",
          "Levure lager ou fermentation très fraîche possible pour le Baltic Porter et certaines traditions historiques américaines."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Une eau contenant suffisamment d’alcalinité peut aider à équilibrer l’acidité des grains foncés, mais il n’existe pas d’« eau de porter » universelle. Sulfates, chlorures et bicarbonates sont ajustés au caractère sec, rond ou houblonné recherché.",
        "empatage": "Infusion simple aujourd’hui dans de nombreux cas. Le choix du pH, de la température et du moment d’ajout des grains foncés sert surtout à contrôler corps, fermentescibilité et extraction d’astringence.",
        "ebullitionEtHoublonnage": "Amertume suffisante pour soutenir le malt sombre sans écraser ses couches. Les versions anglaises gardent souvent le houblon aromatique discret ; les versions américaines peuvent employer davantage d’ajouts tardifs.",
        "fermentation": "Fermentation haute propre à modérément fruitée pour les porters ales ; conduite froide et propre pour les porters de tradition lager.",
        "maturation": "Quelques semaines suffisent aux versions de force modérée ; les porters forts, baltiques ou impériaux bénéficient souvent d’une garde plus longue afin d’intégrer alcool, fruits noirs et malts foncés.",
        "profilRecherche": "Une bière sombre construite autour du malt, du pain toasté, du cacao et du caramel brun, avec une torréfaction maîtrisée et une buvabilité adaptée à sa force."
      },
      "sources": [
        {
          "organisme": "CAMRA / Martyn Cornell",
          "edition": null,
          "reference": "300th anniversary of Porter — rise, decline and revival of London porter",
          "type": "histoire_brassicole",
          "url": "https://members.camra.org.uk/learn-discover/discover/300th-anniversary-of-porter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Porter / English Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/13C/english-porter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Porter families — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "stout",
      "nom": "Stout",
      "collectionId": 3,
      "nature": "F",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Irlande",
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Îles Britanniques",
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
      "description": "Le Stout pousse la famille des bières noires vers le grain torréfié : café, cacao amer, mousse beige, finale sèche ou ronde selon les variantes. Il peut être léger comme une pinte irlandaise, soyeux avec de l’avoine, lacté avec du lactose ou massif en version impériale. Son fil rouge n’est pas la puissance, mais cette signature sombre où le malt brûlé devient un paysage.",
      "histoireEtOrigines": `Le stout ne naît pas comme une famille séparée du porter. Dans l’anglais des XVIIIe et XIXe siècles, « stout » signifie d’abord robuste, fort, corpulent : on rencontre ainsi des stout porters, c’est-à-dire des porters de plus forte densité. Le mot finit par se détacher de « porter » à mesure que les brasseries commercialisent différentes forces et que certaines lignées, notamment irlandaises, développent un profil plus sec et plus torréfié.

L’histoire irlandaise est fondamentale mais ne doit pas effacer les racines anglaises. Guinness, fondée à St. James’s Gate en 1759, se tourne entièrement vers le porter à la fin du XVIIIe siècle ; le BJCP rappelle qu’une version plus « stout » apparaît au début du XIXe siècle. Le Guinness Extra Stout actuel se rattache à une recette de Superior Porter documentée en 1821. Les transformations ultérieures du maltage, des taxes, des techniques de torréfaction, de la filtration et du service modifient profondément le produit. La célèbre pinte noire et crémeuse servie à l’azote est un développement du XXe siècle : Guinness Draught est lancé en 1959, bien après la naissance du stout.

Au cours du XXe siècle, le mot « stout » couvre un éventail de plus en plus large. À côté des Irish Stouts sèches apparaissent ou survivent des Sweet/Milk Stouts, Oatmeal Stouts, Foreign Extra et Tropical Stouts. Le renouveau craft américain ajoute des stouts plus houblonnés et torréfiés, puis des Imperial Stouts massifs, souvent élevés en fût ou utilisés comme base de bières aromatisées.

Il n’existe donc pas une recette de stout universelle. Le fil conducteur est une bière sombre où le grain torréfié, le malt noir, le café ou le cacao jouent un rôle central, mais la force peut aller de la pinte irlandaise légère à des bières impériales dépassant 10 %, et la finale de très sèche à franchement douce.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Stout est une famille. Irish Stout, Sweet Stout, Oatmeal, Foreign Extra, Tropical, American et Imperial Stout partagent un vocabulaire sombre mais diffèrent fortement en densité, sucre résiduel, houblonnage, fermentation et torréfaction.",
        "maltsEtCereales": [
          "Malt pâle ou pale ale comme base dans de nombreuses traditions.",
          "Orge torréfiée, black malt, chocolate malt et autres malts sombres selon le sous-style.",
          "Avoine, lactose, sucres, céréales adjointes ou ingrédients culinaires n’appartiennent qu’à certaines branches et ne définissent pas la famille entière."
        ],
        "houblons": [
          "Houblonnage allant de discret et purement amer dans les stouts traditionnels à franchement aromatique et résineux dans les versions américaines."
        ],
        "levuresEtMicroorganismes": [
          "Levures ale britanniques, irlandaises ou américaines dominantes ; certaines Tropical Stouts peuvent utiliser des levures lager conduites chaud."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "L’alcalinité doit être adaptée aux grains torréfiés afin de contrôler le pH. Le rapport chlorure/sulfate dépend ensuite de l’objectif : crémeux et rond, ou sec et amer.",
        "empatage": "Infusion généralement simple aujourd’hui. Les grains très torréfiés peuvent être intégrés de différentes façons afin de régler acidité, couleur, café et astringence.",
        "ebullitionEtHoublonnage": "Amertume ajustée au sous-style : modérée en Sweet Stout, ferme en Irish Extra ou Foreign Extra, élevée dans de nombreux American et Imperial Stouts.",
        "fermentation": "Fermentation haute avec contrôle de température ; le niveau d’esters varie selon la tradition. Les bières très fortes demandent oxygénation, levure en quantité et gestion rigoureuse de l’alcool.",
        "maturation": "Courte pour les stouts de pub légers ; plus longue pour les stouts export et impériaux, dont les couches de roast, fruit noir et alcool gagnent à se fondre.",
        "profilRecherche": "Une bière sombre dont la torréfaction forme une architecture cohérente — café, cacao, grain grillé ou chocolat — adaptée à la force et à la douceur du sous-style."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Stout family / Irish Stout roots — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/15/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "CAMRA / Martyn Cornell",
          "edition": null,
          "reference": "300th anniversary of Porter — rise, decline and revival of London porter",
          "type": "histoire_brassicole",
          "url": "https://members.camra.org.uk/learn-discover/discover/300th-anniversary-of-porter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Guinness",
          "edition": null,
          "reference": "The Story of Guinness — St. James’s Gate and brewing heritage since 1759",
          "type": "source_primaire_historique",
          "url": "https://www.guinness.com/en/our-craft/guinness-story",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Guinness",
          "edition": null,
          "reference": "Guinness Original / Extra Stout — descendant of the 1821 Superior Porter recipe",
          "type": "source_primaire_historique_et_technique",
          "url": "https://www.guinness.com/en/beers/guinness-original",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "english-porter",
      "nom": "English Porter",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "porter",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Londres, Angleterre",
        "ville": "Londres",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 5.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 18,
        "max": 35,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 40,
        "max": 70,
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
      "description": "L’English Porter avance en brun profond, pas en noir brutal. On y cherche le biscuit sombre, le cacao léger, le caramel, la noisette et un toasté propre, sans morsure de charbon. Elle peut paraître discrète à côté des stouts modernes, mais c’est précisément sa force : une bière sombre de pub, souple, lisible, faite pour durer plus que pour impressionner.",
      "histoireEtOrigines": `L’English Porter actuel n’est pas une reproduction figée du porter londonien de 1750. Il constitue plutôt une interprétation moderne de cette immense tradition. Le porter historique a connu plus de deux siècles de transformations : malts, densités, assemblages de bière jeune et vieillie, fiscalité, disponibilité des matières premières et habitudes de consommation ont fait varier sa composition au point qu’il serait trompeur de parler d’une recette originelle unique.

Au XIXe siècle, le porter passe d’une bière vieillie et souvent plus forte à des produits progressivement plus faibles et plus jeunes. Le développement du black malt à partir de 1817 offre aux brasseurs une nouvelle manière de construire la couleur et la torréfaction. En parallèle, les stouts — à l’origine des porters plus forts — gagnent leur propre identité. À la fin du XIXe siècle, le porter britannique décline face à d’autres familles. Le BJCP situe sa disparition de la production britannique vers le milieu du XXe siècle avant sa réintroduction à l’époque du renouveau brassicole, à partir de la fin des années 1970.

La catégorie moderne met donc surtout en avant une ale brune à brun très foncé, de force modérée, plus souple et souvent plus caramélisée qu’un American Porter. Le brown malt y garde une valeur culturelle particulière. Fuller’s London Porter illustre bien cette reconstruction moderne : pale, crystal, brown et chocolate malts, associés à du houblon Fuggles, produisent une bière où chocolat, terre, café doux et malt toasté dominent sans basculer dans la brûlure sèche d’un stout très torréfié.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pale ale malt britannique comme base.",
          "Brown malt pour la signature biscuitée, toastée et légèrement sèche ; crystal/caramel pour toffee et rondeur.",
          "Chocolate malt ou autre malt sombre en quantité modérée pour cacao et couleur, sans rechercher une forte âcreté."
        ],
        "houblons": [
          "Fuggles, East Kent Goldings ou variétés britanniques de registre terreux, floral et herbacé ; intensité généralement modérée."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique pouvant fournir des esters fruités légers à modérés et une atténuation suffisante pour éviter une finale lourde."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modérément minéral, avec alcalinité suffisante pour absorber les grains foncés sans pousser le pH trop bas ; chlorures utiles à la rondeur, sulfates à doser selon la sécheresse souhaitée.",
        "empatage": "Infusion simple, souvent orientée vers un corps moyen. Les grains foncés doivent apporter chocolat et toasté sans extraction excessive de tanins.",
        "ebullitionEtHoublonnage": "Amertume moyenne, traditionnellement construite surtout en début d’ébullition ; ajout aromatique tardif facultatif et discret.",
        "fermentation": "Fermentation haute avec souche anglaise, généralement autour de la plage classique des ales, en maîtrisant diacétyle et esters sans chercher une neutralité absolue.",
        "maturation": "Garde courte à moyenne ; un service en cask peut accentuer souplesse et buvabilité.",
        "profilRecherche": "Un porter anglais de pub : brun profond, chocolat doux, biscuit, caramel et toast, avec une finale assez sèche pour en reprendre une pinte."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "English Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/13C/english-porter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "CAMRA / Martyn Cornell",
          "edition": null,
          "reference": "300th anniversary of Porter — rise, decline and revival of London porter",
          "type": "histoire_brassicole",
          "url": "https://members.camra.org.uk/learn-discover/discover/300th-anniversary-of-porter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fuller’s Brewery",
          "edition": null,
          "reference": "London Porter — brown, crystal and chocolate malts with Fuggles",
          "type": "source_primaire_technique",
          "url": "https://www.fullersbrewery.co.uk/products/london-porter",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "brown-porter",
      "nom": "Brown Porter",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "porter",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Londres, Angleterre",
        "ville": "Londres",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 5.6,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 18,
        "max": 35,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 40,
        "max": 70,
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
      "description": "Le Brown Porter est le côté velours du porter : brun, rond, peu agressif, avec des notes de biscuit, cacao doux, caramel, toffee et pain grillé. Il ne cherche ni la densité d’un Imperial Porter, ni le café sec d’un stout irlandais. Son terrain naturel, c’est la nuance : une bière sombre qui parle bas, mais avec beaucoup de grain dans la voix.",
      "histoireEtOrigines": `« Brown Porter » est surtout une étiquette de classification moderne héritée d’anciennes grilles de concours, plus qu’un style historique autonome ayant traversé les siècles sous ce nom précis. Dans les versions antérieures des guidelines, elle servait à distinguer un porter anglais relativement doux, malté et peu agressif d’un « Robust Porter » plus intense. Le BJCP 2021 a abandonné cette séparation : le versant britannique est aujourd’hui regroupé sous English Porter, tandis que les interprétations américaines plus fortes et plus houblonnées relèvent de l’American Porter.

Cette évolution taxonomique est instructive. Elle rappelle que les catégories de concours sont des outils contemporains destinés à décrire un marché vivant, pas des lois historiques. Les porters anglais ont toujours existé sur un continuum de couleur, de force, de malt et d’amertume. Le terme Brown Porter reste néanmoins utile dans une encyclopédie pour nommer le pôle le plus doux de la famille : brun plutôt que noir opaque, chocolat au lait ou cacao doux plutôt que café brûlé, toffee, noisette, biscuit et pain grillé, avec une amertume modérée.

Dans ZythoHunt, la fiche doit donc être lue comme un repère sensoriel et historique de taxonomie, pas comme l’affirmation qu’un style « Brown Porter » canonique aurait été inventé à une date précise.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pale ale malt en base, complété par brown malt, crystal/caramel et chocolate malt en proportions mesurées.",
          "Éviter de faire du black malt ou de l’orge torréfiée le centre du profil : la torréfaction doit rester douce."
        ],
        "houblons": [
          "Houblons anglais traditionnels, surtout pour équilibrer la douceur maltée ; arôme bas à modéré."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale anglaise à esters doux, avec atténuation moyenne à bonne."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil plutôt équilibré, souvent légèrement chloruré pour soutenir le malt ; alcalinité adaptée aux malts bruns.",
        "empatage": "Température moyenne favorisant un corps souple sans lourdeur ; gestion prudente des grains foncés.",
        "ebullitionEtHoublonnage": "Amertume modérée et propre, peu d’ajouts tardifs ; priorité à l’équilibre du malt.",
        "fermentation": "Fermentation haute avec expression fruitée légère, sans solvants ni excès de diacétyle.",
        "maturation": "Courte à moyenne, juste assez longue pour fondre caramel, chocolat et esters.",
        "profilRecherche": "Le côté velours du porter : brun, chocolaté, biscuité et légèrement caramélisé, avec peu de brûlé et une grande facilité de dégustation."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "English Porter — cadre moderne englobant l’ancien Brown Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/13C/english-porter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "CAMRA / Martyn Cornell",
          "edition": null,
          "reference": "300th anniversary of Porter — rise, decline and revival of London porter",
          "type": "histoire_brassicole",
          "url": "https://members.camra.org.uk/learn-discover/discover/300th-anniversary-of-porter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fuller’s Brewery",
          "edition": null,
          "reference": "London Porter — brown, crystal and chocolate malts with Fuggles",
          "type": "source_primaire_technique",
          "url": "https://www.fullersbrewery.co.uk/products/london-porter",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "robust-porter",
      "nom": "Robust Porter",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "porter",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "États-Unis, interprétation craft",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.8,
        "max": 6.5,
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
        "min": 44,
        "max": 80,
        "unite": "EBC",
        "statut": "large"
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
          "American pint",
          "Tulipe"
        ]
      },
      "description": "Le Robust Porter pousse le curseur : plus sombre, plus amer, plus chocolat noir, parfois presque café, mais sans basculer dans le stout pur. La torréfaction y prend plus de place que dans un Brown Porter, avec une impression plus ferme, plus adulte, plus craft. C’est le porter qui serre la poignée de main un peu trop fort, mais sans écraser les doigts.",
      "histoireEtOrigines": `Robust Porter est, comme Brown Porter, une catégorie surtout importante dans l’histoire récente des classifications brassicoles. Elle a longtemps servi à décrire les porters américains plus sombres, plus amers, plus torréfiés et souvent plus houblonnés que les porters anglais. Cette nomenclature a marqué des générations de brasseurs amateurs et de microbrasseries, mais le BJCP 2021 l’a absorbée dans la catégorie American Porter.

Cette disparition du nom ne signifie pas que le profil a disparu. Au contraire, il constitue une large part de l’ADN du porter craft américain : davantage de malt chocolate ou black malt, une amertume plus nette, parfois des houblons américains résineux ou agrumés, et une fermentation généralement plus propre que dans de nombreux exemples britanniques. Le mot « robust » reste donc utile pour comprendre l’étape intermédiaire entre le porter anglais et certaines expressions américaines presque assez torréfiées pour toucher au stout.

La frontière avec American Stout reste néanmoins importante. Un Robust/American Porter peut être puissant et sombre, mais le cœur du profil demeure souvent chocolaté et malté ; l’orge torréfiée sèche, le café brûlé et l’agressivité de houblon typiques des stouts américains les plus affirmés ne devraient pas tout dominer.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale américain ou pale ale en base, crystal/caramel mesuré, chocolate malt et black malt pour profondeur et couleur."
        ],
        "houblons": [
          "Houblons américains ou britanniques ; amertume plus ferme qu’en English Porter, avec possibilité d’arôme résineux, floral ou agrumé."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine propre ou souche anglaise relativement atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modérément sulfaté possible pour tendre la finale ; alcalinité ajustée aux malts foncés.",
        "empatage": "Empâtage visant un corps moyen et une bonne fermentescibilité afin de préserver la vigueur du style.",
        "ebullitionEtHoublonnage": "Amertume moyenne à soutenue ; ajouts tardifs possibles mais le houblon doit rester en dialogue avec chocolat et malt grillé.",
        "fermentation": "Fermentation haute propre, esters faibles à modérés selon la souche.",
        "maturation": "Quelques semaines de garde pour intégrer les malts noirs et arrondir l’amertume.",
        "profilRecherche": "Un porter américain musclé : chocolat noir, café léger, malt grillé et amertume nette, sans devenir un stout franchement brûlé."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Porter — successeur moderne du Robust Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/20/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-porter",
      "nom": "American Porter",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "porter",
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
        "min": 4.8,
        "max": 6.5,
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
        "min": 44,
        "max": 80,
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
          "American pint",
          "Tulipe"
        ]
      },
      "description": "L’American Porter reprend l’idée anglaise et lui met des bottes plus lourdes : chocolat plus intense, café léger, caramel sombre, amertume plus visible et parfois une touche résineuse ou florale de houblon. Il peut rester rond ou devenir presque agressif selon la brasserie, mais il garde une règle simple : le malt noir doit parler avec force, pas hurler.",
      "histoireEtOrigines": `L’American Porter est un produit du renouveau brassicole américain de la seconde moitié du XXe siècle. Le BJCP le décrit comme une version plus forte et plus agressive des porters anglais et des anciens porters américains d’avant la Prohibition, apparue au début de l’ère craft et introduite commercialement en 1974. La catégorie ne cherche donc pas à reconstituer les porters coloniaux ou ceux des communautés germano-américaines : elle décrit une réinterprétation moderne.

Les premiers microbrasseurs américains reprennent le vocabulaire du porter mais l’adaptent à leurs matières premières et à leur goût croissant pour l’amertume. Malt pale américain, crystal, chocolate ou black malt s’associent à des houblons américains ou britanniques ; certaines versions restent très maltées et chocolatées, d’autres ajoutent un net caractère de houblon résineux, floral ou agrumé. Cette liberté explique l’écart important entre exemples commerciaux.

Dans la taxonomie contemporaine, l’American Porter a également absorbé une grande partie de ce qui était autrefois appelé Robust Porter. Il se situe entre la douceur caramélisée de nombreux English Porters et la torréfaction plus agressive de l’American Stout.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt 2-row ou pale américain en base, crystal/caramel fréquent, chocolate malt et/ou black malt pour la structure sombre."
        ],
        "houblons": [
          "Houblons américains souvent utilisés pour l’amertume ; variétés américaines ou britanniques possibles en finition."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine neutre ou souche anglaise plus expressive selon l’interprétation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Alcalinité suffisante pour le grain foncé ; sulfate modéré si l’on veut accentuer l’amertume, chlorure si l’on privilégie chocolat et rondeur.",
        "empatage": "Infusion simple visant un corps moyen, avec attention au pH et à l’extraction des malts noirs.",
        "ebullitionEtHoublonnage": "Amertume typiquement plus ferme qu’en porter anglais ; ajouts tardifs facultatifs de faible à forte intensité selon la maison.",
        "fermentation": "Fermentation haute propre, avec esters faibles à modérés.",
        "maturation": "Courte à moyenne ; le style doit rester frais mais gagner à laisser s’intégrer l’âpreté du grain sombre.",
        "profilRecherche": "Un porter sombre, chocolaté et nettement amer, pouvant montrer un vrai houblon américain sans perdre sa base maltée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/20/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "pre-prohibition-porter",
      "nom": "Pre-Prohibition Porter",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "porter",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "États-Unis, XIXe siècle",
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
        "min": 20,
        "max": 40,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 36,
        "max": 70,
        "unite": "EBC",
        "statut": "large"
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
          "American pint",
          "Tulipe"
        ]
      },
      "description": "Le Pre-Prohibition Porter a quelque chose de poussiéreux et de nerveux : porter américain ancien, sombre mais pas moderne, avec du malt grillé, une sécheresse plus franche, parfois une impression céréalière ou rustique. Il ne cherche pas le dessert ni la rondeur maximale. Il évoque plutôt un verre brun sorti d’un vieux comptoir, avant que l’histoire ne coupe le courant.",
      "histoireEtOrigines": `Le Pre-Prohibition Porter, parfois appelé Pennsylvania Porter ou East Coast Porter, raconte une branche américaine différente du porter craft moderne. Les colons et brasseurs des jeunes États-Unis adaptent d’abord les modèles britanniques avec les matières premières disponibles. Au XIXe siècle, surtout dans les régions de Philadelphie et du Mid-Atlantic, l’arrivée de nombreux brasseurs d’origine allemande entraîne une nouvelle évolution : techniques de fermentation basse, malts américains et céréales adjointes se mêlent à la tradition du porter.

Le BJCP insiste sur un point souvent mal compris : cette catégorie ne décrit pas simplement « le porter colonial ». Sa forme caractéristique est liée à l’évolution du XIXe siècle et peut être fermentée avec une levure ale ou lager. Le maïs, le six-row, la mélasse, la réglisse de brasserie et même la porterine — un colorant/extrait sombre utilisé historiquement — peuvent appartenir au vocabulaire du style. Les versions les plus anciennes et les plus tardives ne sont donc pas identiques.

La Prohibition détruit l’essentiel de cette continuité commerciale. Quelques porters régionaux survivent ou réapparaissent dans le Nord-Est et le Mid-Atlantic, ce qui permet aujourd’hui de distinguer cette famille historique du porter américain craft apparu dans les années 1970. Sensoriellement, il est généralement plus doux, moins houblonné et parfois plus céréale/adjoint qu’un American Porter moderne.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt 2-row ou 6-row américain en base.",
          "Petites proportions de brown, chocolate ou black malt ; l’orge torréfiée n’est pas typique.",
          "Maïs ou autres adjoints historiquement plausibles, parfois jusqu’à environ un cinquième du grist selon les reconstitutions."
        ],
        "houblons": [
          "Houblons américains historiques pour l’amertume ; variétés américaines ou allemandes possibles en finition."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale ou lager : les deux appartiennent à l’histoire de la catégorie, notamment après l’influence des immigrants allemands."
        ],
        "ingredientsComplementaires": [
          "Mélasse, réglisse de brasserie ou porterine peuvent être historiquement cohérentes dans certaines reconstitutions, mais ne sont pas obligatoires."
        ],
        "profilEau": "À adapter au profil régional ; assez d’alcalinité pour les malts sombres, sans rechercher une dureté excessive.",
        "empatage": "Infusion compatible avec malts américains et adjoints ; cereal mash possible si l’on utilise des céréales crues nécessitant une gélatinisation séparée.",
        "ebullitionEtHoublonnage": "Amertume moyenne, finition florale/épicée discrète ; l’équilibre doit rester plus calme qu’un porter craft moderne.",
        "fermentation": "Fermentation ale modérément propre ou fermentation lager selon l’interprétation historique choisie.",
        "maturation": "Garde courte à moyenne, éventuellement plus froide pour les versions lagerisées.",
        "profilRecherche": "Un porter américain historique, grainé et sec à modérément malté, où céréales, chocolat léger et fermentation propre priment sur la puissance du houblon."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Pre-Prohibition Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Historical / Pre-Prohibition Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "baltic-porter",
      "nom": "Baltic Porter",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "porter",
      "aliases": [],
      "paysOrigine": [
        "Europe du Nord et de l’Est"
      ],
      "origine": {
        "libelle": "Baltique, Pologne et pays voisins",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6.5,
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
        "min": 34,
        "max": 80,
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
      "description": "Le Baltic Porter est un porter de climat froid : profond, lisse, ample, avec du chocolat noir, du pruneau, du raisin sec, de la mélasse et une chaleur alcoolisée qui avance en manteau de velours. Il peut être très sombre, mais il ne doit pas sentir la cendre. Sa puissance est souvent trompeuse : plus palais de liqueur maltée que poing sur la table.",
      "histoireEtOrigines": `Le Baltic Porter n’est pas simplement un porter anglais transporté vers le nord. Il résulte de l’appropriation locale d’une famille britannique très exportée. Aux XVIIIe et début XIXe siècles, les porters et stouts anglais forts circulent vers les ports de la Baltique et jusqu’à la Russie. Lorsque guerres, politiques commerciales et transformations économiques perturbent ces importations au début du XIXe siècle, plusieurs pays riverains développent leurs propres bières sombres fortes inspirées de ces produits.

Ces bières évoluent indépendamment en Pologne, dans les pays baltes, en Russie, en Finlande et ailleurs. Historiquement, certaines sont fermentées en haute fermentation, mais la diffusion des techniques lager au XIXe siècle conduit beaucoup de brasseries à employer des levures de fermentation basse et une longue garde froide. C’est cette combinaison — richesse maltée profonde, fruits noirs, alcool doux, fermentation très propre et torréfaction sans brûlé — qui définit la perception moderne du Baltic Porter.

Le nom même de « Baltic Porter » est relativement récent. Le BJCP souligne qu’il s’impose surtout depuis les années 1990 pour regrouper des traditions régionales apparentées qui, historiquement, n’utilisaient pas nécessairement cette appellation commune. La Pologne en est devenue l’un des grands foyers contemporains. Żywiec documente par exemple son porter depuis 1881 ; la version actuelle emploie quatre familles de malt, dont Munich, Pilsner, caramel et torréfié, pour une bière autour de 9,5 %.

Le style se distingue d’un Imperial Stout par une torréfaction plus lisse, moins de brûlé et souvent une fermentation lager, et d’un Doppelbock par sa profondeur de couleur et ses notes de cacao, réglisse et fruits noirs.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt Munich et/ou Vienna pour la profondeur de pain et de mélanoïdines, souvent complétés par Pilsner.",
          "Malts caramel/crystal pour fruits secs et toffee ; malts foncés lisses ou désamérisés pour chocolat et couleur sans brûlé agressif.",
          "Des sucres peuvent intervenir dans certaines traditions commerciales, comme le montre Żywiec Porter."
        ],
        "houblons": [
          "Houblons continentaux, généralement bas à modérés en arôme ; l’amertume sert surtout à structurer la richesse maltée."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager courante dans les interprétations modernes ; une levure ale fermentée fraîchement reste historiquement et stylistiquement possible."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modérément minéral ; alcalinité suffisante pour le grain sombre, chlorures favorables à la rondeur, sulfate contenu afin de ne pas durcir le roast.",
        "empatage": "Infusion par paliers ou décoction possibles. L’objectif est un moût riche mais suffisamment fermentescible pour que l’alcool reste doux plutôt que sirupeux.",
        "ebullitionEtHoublonnage": "Ébullition franche, parfois prolongée pour renforcer la profondeur maltée ; houblonnage continental surtout en amertume.",
        "fermentation": "Fermentation basse fraîche avec ensemencement important, ou ale très propre à basse température selon la tradition ; gestion stricte des alcools supérieurs.",
        "maturation": "Lagering prolongé particulièrement utile pour intégrer alcool, fruits secs, chocolat et notes de mélanoïdines.",
        "profilRecherche": "Une bière sombre forte et veloutée : pain noir, toffee, prune, raisin, cacao et alcool chaleureux, sans cendre ni brûlé agressif."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Baltic Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/9/9C/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Grupa Żywiec",
          "edition": null,
          "reference": "Żywiec Porter — Baltic Porter brewed since 1881; composition and service",
          "type": "source_primaire_historique_et_technique",
          "url": "https://strona.zywiec.com.pl/produkty/zywiec-porter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Baltic-Style Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-imperial-porter",
      "nom": "American Imperial Porter",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "porter",
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
        "min": 7,
        "max": 12,
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
        "min": 50,
        "max": 100,
        "unite": "EBC",
        "statut": "large"
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
      "description": "L’American Imperial Porter grossit le porter jusqu’à la frontière du monstre : corps dense, chocolat noir, café, caramel brûlé, alcool perceptible et amertume solide. Il garde pourtant une âme de porter quand le malt reste plus rond que cendreux, plus chocolat-caramel que grain brûlé. C’est une bière de fauteuil profond, pas de comptoir pressé.",
      "histoireEtOrigines": `L’American Imperial Porter est une extension contemporaine du porter craft américain plutôt qu’une tradition historique comparable au porter londonien ou baltique. Lorsque les brasseurs américains des années 1980–2000 commencent à pousser systématiquement les styles classiques vers davantage de densité, d’alcool et d’intensité, le porter suit le mouvement. La Brewers Association maintient aujourd’hui une catégorie spécifique American-Style Imperial Porter, distincte de l’Imperial Stout.

La distinction repose surtout sur l’architecture du malt. L’Imperial Porter peut être noir et massif, mais son cœur reste caramel, cacao, chocolat et malt riche ; la BA précise qu’un fort caractère d’orge torréfiée ou de malt brûlé ne doit pas devenir la signature dominante. Le houblon peut être bien présent, parfois franchement américain, mais il doit soutenir une masse maltée pleine et douce.

Dans la pratique craft, ces bières servent aussi de base à des élevages en fût, cafés, vanilles ou autres variantes. La fiche « American Imperial Porter » décrit cependant la bière forte non aromatisée : lorsqu’un ingrédient ou un élevage devient le trait principal, la classification bascule vers une catégorie de spécialité.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale américain en base, crystal/caramel pour la richesse, chocolate malt et malts noirs soigneusement dosés pour cacao et couleur sans brûlé dominant."
        ],
        "houblons": [
          "Houblons américains ou britanniques ; amertume moyenne et arôme bas à moyen-haut selon l’interprétation, toujours équilibrés par le malt."
        ],
        "levuresEtMicroorganismes": [
          "Souche ale robuste, relativement propre et tolérante à l’alcool ; ensemencement élevé indispensable pour les densités fortes."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Chlorures modérés pour le corps, sulfate mesuré pour soutenir l’amertume, alcalinité adaptée aux malts noirs.",
        "empatage": "Empâtage visant un corps plein mais fermentable ; éviter une température trop haute qui rendrait la bière pâteuse après fermentation.",
        "ebullitionEtHoublonnage": "Ébullition suffisamment longue pour concentrer le moût et développer la profondeur ; amertume solide sans chercher la domination d’un Imperial Stout américain.",
        "fermentation": "Fermentation haute avec contrôle précis de température, oxygénation et nutriments adaptés à la forte densité ; limiter solvants et alcools de fusel.",
        "maturation": "Plusieurs semaines à plusieurs mois selon la force ; le temps doit arrondir alcool et malts sans oxyder prématurément le chocolat.",
        "profilRecherche": "Un porter porté à l’échelle impériale : plein, chocolaté, caramélisé et chaleureux, mais moins brûlé et moins agressivement torréfié qu’un Imperial Stout."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Imperial Porter — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Porter — base stylistique du dérivé impérial — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/20/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "smoke-porter",
      "nom": "Smoke Porter",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "porter",
      "aliases": [
        "Smoked Porter"
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
        "min": 4.5,
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
        "min": 40,
        "max": 90,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Nonic pint"
        ]
      },
      "description": "Le Smoke Porter ajoute une braise au porter : chocolat noir, pain grillé, caramel sombre et fumée de bois. La réussite tient à l’équilibre. Trop peu, la fumée disparaît ; trop fort, elle transforme la bière en planche calcinée. Dans les meilleurs exemples, elle rappelle le feu éteint, le bois sec, parfois le bacon ou le cuir, mais laisse encore respirer le malt brun.",
      "histoireEtOrigines": `Le Smoke Porter ou Smoked Porter n’est pas une vieille branche universelle du porter londonien. Il s’agit plutôt d’une combinaison entre une base porter et un malt volontairement fumé. Historiquement, avant la généralisation de fours permettant de sécher le malt sans contact direct avec les fumées de combustion, de nombreuses bières pouvaient présenter un caractère fumé ; cela ne signifie pas pour autant que le « Smoked Porter » moderne soit la survivance directe d’une recette londonienne précise.

Aux États-Unis, Alaskan Brewing joue un rôle majeur dans la visibilité moderne de cette association. La brasserie développe son Alaskan Smoked Porter en 1988, à une époque où les bières fumées sont quasiment inconnues du grand public américain. Le malt sélectionné est fumé en petits lots au bois d’aulne, matériau intimement lié aux traditions de fumage du poisson en Alaska. La bière remporte rapidement des médailles et contribue à remettre le goût fumé dans le vocabulaire de la bière craft américaine.

Le principe technique est simple à énoncer mais difficile à équilibrer : la fumée doit se fondre dans chocolat, toast, caramel et fermentation, et non donner l’impression d’un cendrier, d’un désinfectant phénolique ou d’une viande artificiellement aromatisée. Le bois, l’intensité du fumage, la proportion de malt fumé et la fraîcheur du malt changent radicalement le résultat.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base de porter : pale/pale ale, chocolate, brown ou crystal selon l’école.",
          "Part de malt fumé au bois — aulne, hêtre ou autre bois alimentaire documenté — calibrée selon l’intensité recherchée."
        ],
        "houblons": [
          "Houblons d’équilibre, britanniques ou américains ; arôme généralement secondaire afin de ne pas créer une compétition confuse avec la fumée."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre à modérément fruitée, choisie pour soutenir le malt et non ajouter des phénols épicés non désirés."
        ],
        "ingredientsComplementaires": [
          "La fumée doit provenir d’un malt fumé de qualité ou d’un procédé maîtrisé ; les arômes artificiels sont rarement nécessaires à un profil classique."
        ],
        "profilEau": "Profil proche du porter de base, avec alcalinité adaptée aux malts foncés et minéralité contenue pour éviter de rendre la fumée âpre.",
        "empatage": "Infusion classique ; la proportion de malt fumé doit être décidée après dégustation du lot, car son intensité varie énormément avec le maltage et l’âge.",
        "ebullitionEtHoublonnage": "Amertume moyenne ; houblonnage tardif discret dans les versions classiques.",
        "fermentation": "Fermentation haute propre. Une fermentation trop chaude peut produire des phénols ou esters qui brouillent la lecture de la fumée.",
        "maturation": "Une garde moyenne aide à intégrer fumée et malt ; certaines versions fortes comme l’Alaskan Smoked Porter peuvent évoluer longtemps en bouteille.",
        "profilRecherche": "Un porter chocolaté et toasté traversé par une fumée boisée naturelle, intégrée et gastronomique plutôt qu’agressive."
      },
      "sources": [
        {
          "organisme": "Alaskan Brewing Co.",
          "edition": null,
          "reference": "Smoked Porter — introduced in 1988; alder-smoked malt and American smoked-beer revival",
          "type": "source_primaire_historique_et_technique",
          "url": "https://www.alaskanbeer.com/our-beers/smoked-porter/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Smoke Beer / Porter base — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Porter — base stylistique — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/13C/english-porter/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "dry-stout-irish-dry-stout",
      "nom": "Dry Stout / Irish Dry Stout",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "stout",
      "aliases": [
        "Dry Stout",
        "Irish Dry Stout"
      ],
      "paysOrigine": [
        "Irlande"
      ],
      "origine": {
        "libelle": "Dublin, Irlande",
        "ville": "Dublin",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 4.8,
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
        "min": 50,
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
          "Irish pint",
          "Nonic pint"
        ]
      },
      "description": "La Dry Stout est noire, sèche et plus légère qu’elle n’en a l’air. Elle apporte café froid, grain torréfié, cacao amer et une finale nette qui claque sans sucrer la bouche. En pression nitro, elle gagne cette mousse dense et crémeuse devenue iconique ; en bouteille, elle redevient plus directe, plus sèche, parfois presque tranchante.",
      "histoireEtOrigines": `L’Irish Stout moderne, souvent appelée Dry Stout ou Irish Dry Stout, descend directement de l’histoire du porter. Les brasseurs irlandais adoptent le porter londonien puis développent progressivement leurs propres profils. Guinness se consacre au porter à la fin du XVIIIe siècle et produit au début du XIXe des versions plus fortes décrites comme stout porter. Au fil du temps, les stouts irlandaises s’éloignent des porters londoniens par un usage plus marqué des grains très torréfiés, un profil plus sec et une amertume plus nette.

La perception contemporaine du style est fortement liée au service. Guinness Draught, lancé en 1959 pour le bicentenaire de la brasserie, utilise un mélange de gaz comprenant de l’azote. Les bulles d’azote, plus petites que celles d’un service purement carbonique, produisent la texture crémeuse et la mousse dense devenues emblématiques. Il serait toutefois faux de confondre ce service avec l’origine du style : des stouts irlandaises existaient depuis plus d’un siècle avant l’apparition du nitro.

Le BJCP distingue des variations régionales historiques : les exemples de Dublin sont typiquement plus secs, plus amers et plus marqués par l’orge torréfiée, tandis que des traditions de Cork ont pu être plus douces et chocolatées. La version moderne de référence reste une bière étonnamment légère en corps et en alcool : sa couleur noire et sa mousse crémeuse donnent une impression de densité, mais sa réussite repose sur la sécheresse, la buvabilité et la précision du roast.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale en base, part significative d’orge torréfiée non maltée ou de malt très torréfié pour café sec et couleur ; flocons d’orge possibles pour la texture."
        ],
        "houblons": [
          "Houblons britanniques ou apparentés surtout pour l’amertume ; arôme faible à absent."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale irlandaise/britannique relativement propre, avec esters faibles à modérés selon l’exemple."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Une eau suffisamment alcaline aide à encaisser l’orge torréfiée ; sulfate modéré à élevé possible pour renforcer sécheresse et amertume.",
        "empatage": "Empâtage favorisant une bonne atténuation et un corps léger à moyen-léger ; contrôle du pH essentiel avec la charge torréfiée.",
        "ebullitionEtHoublonnage": "Amertume nette, peu d’intérêt pour les ajouts aromatiques tardifs. La perception sèche vient autant de l’atténuation et du roast que des IBU.",
        "fermentation": "Fermentation haute propre et complète, avec gestion attentive du diacétyle.",
        "maturation": "Garde courte à moyenne. Le service nitro est fréquent mais non obligatoire ; un stout conditionné en bouteille peut être stylistiquement juste sans reproduire la texture d’une pinte nitro.",
        "profilRecherche": "Une pinte noire mais légère, sèche et désaltérante, avec café torréfié, grain grillé, amertume ferme et mousse persistante."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Irish Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/15/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Guinness",
          "edition": null,
          "reference": "Guinness Draught — first brewed in 1959; nitrogen dispense and current ingredients",
          "type": "source_primaire_historique_et_technique",
          "url": "https://www.guinness.com/en-us/beers/guinness-draught",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Guinness",
          "edition": null,
          "reference": "The Story of Guinness — St. James’s Gate and brewing heritage since 1759",
          "type": "source_primaire_historique",
          "url": "https://www.guinness.com/en/our-craft/guinness-story",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "irish-extra-stout",
      "nom": "Irish Extra Stout",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "stout",
      "aliases": [],
      "paysOrigine": [
        "Irlande"
      ],
      "origine": {
        "libelle": "Irlande",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5,
        "max": 6.5,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 35,
        "max": 50,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 50,
        "max": 80,
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
          "Irish pint",
          "Nonic pint"
        ]
      },
      "description": "L’Irish Extra Stout reprend la sécheresse irlandaise et lui donne plus d’épaule : café plus dense, chocolat noir, grain torréfié, corps plus plein et amertume plus solide. Elle reste nette, mais moins légère qu’une Dry Stout. C’est la version bouteille qui prend son manteau noir, ferme la porte derrière elle et laisse une trace de moka amer.",
      "histoireEtOrigines": `L’Irish Extra Stout partage les mêmes racines que l’Irish Stout mais représente historiquement une version plus forte, souvent destinée à la bouteille. Chez Guinness, l’Extra Stout actuel se rattache directement à la recette de Superior Porter consignée par Arthur Guinness II en 1821. Cette continuité de vocabulaire montre encore une fois combien porter et stout sont imbriqués : ce qui est aujourd’hui présenté comme un stout emblématique descend d’un produit que la brasserie appelait porter.

Par rapport à la stout de pub plus légère, l’Extra Stout offre davantage de densité, de corps, de café, de chocolat noir et parfois de malt biscuité ou caramélisé. Le BJCP situe les exemples irlandais traditionnels autour de 5,6 à 6 % et souligne la diversité d’équilibre : certains sont très secs et amers, d’autres présentent plus de malt et de rondeur.

Cette fiche ne doit pas être confondue avec Foreign Extra Stout. L’Irish Extra est le chaînon domestique plus robuste entre la Dry Stout et les versions d’export plus fortes et plus houblonnées.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale, orge torréfiée et/ou malts noirs ; crystal sombre ou sucres bruns possibles pour ajouter cacao, biscuit et profondeur."
        ],
        "houblons": [
          "Houblons terreux ou épicés surtout pour une amertume moyenne à forte ; arôme généralement limité."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale irlandaise ou britannique, atténuante mais capable d’un léger fruité."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Alcalinité suffisante pour le roast ; sulfate possible pour soutenir la finale sèche, avec plus de chlorure dans les versions maltées.",
        "empatage": "Infusion visant un corps moyen, plus substantiel qu’une Dry Stout mais sans lourdeur.",
        "ebullitionEtHoublonnage": "Amertume structurante, généralement plus forte que dans une stout légère ; peu de houblon tardif nécessaire.",
        "fermentation": "Fermentation haute propre à légèrement fruitée, avec atténuation suffisante pour garder une finale nette.",
        "maturation": "Garde moyenne permettant d’arrondir le roast et les notes de chocolat noir.",
        "profilRecherche": "Une stout irlandaise plus dense et plus intense : café, cacao, grain torréfié et amertume ferme, mais encore très lisible et buvable."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Irish Extra Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/15/15C/irish-extra-stout/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Guinness",
          "edition": null,
          "reference": "Guinness Original / Extra Stout — descendant of the 1821 Superior Porter recipe",
          "type": "source_primaire_historique_et_technique",
          "url": "https://www.guinness.com/en/beers/guinness-original",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Irish-Style Extra Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "export-stout-foreign-extra-stout",
      "nom": "Export Stout / Foreign Extra Stout",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "stout",
      "aliases": [
        "Export Stout",
        "Foreign Extra Stout"
      ],
      "paysOrigine": [
        "Royaume-Uni",
        "International"
      ],
      "origine": {
        "libelle": "Royaume-Uni et marchés d’exportation",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6.3,
        "max": 8,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 50,
        "max": 70,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 60,
        "max": 100,
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
          "Tulipe",
          "Nonic pint"
        ]
      },
      "description": "L’Export Stout est une stout noire taillée pour voyager : plus forte, plus amère, plus rôtie, avec café, chocolat noir, mélasse, réglisse ou fruit sec selon les versions. Elle n’a pas la lourdeur d’une Imperial Stout, mais elle porte déjà une armure. Sa finale reste assez sèche, comme si le sucre avait été laissé au port avant le départ.",
      "histoireEtOrigines": `La Foreign Extra Stout est l’une des branches où le lien entre stout, commerce maritime et empire brassicole est le plus visible. Les brasseries britanniques et irlandaises expédient des porters et stouts forts vers des marchés lointains dès les XVIIIe et XIXe siècles. Les versions destinées à l’export reçoivent généralement davantage de houblon et peuvent connaître une maturation plus longue, afin de mieux résister au temps et au transport.

Guinness documente une étape particulièrement importante en 1801 avec son West India Porter, ancêtre direct de la Foreign Extra Stout de la marque. La brasserie explique avoir renforcé le houblonnage pour les voyages vers les climats chauds. Le produit change de nom et de formulation au fil du temps, mais cette lignée export devient l’un des vecteurs majeurs de diffusion du stout en Afrique, dans les Caraïbes et en Asie.

Le BJCP rappelle que les anciennes versions pouvaient aussi subir une longue fermentation secondaire, parfois avec Brettanomyces, augmentant l’atténuation et la stabilité. Les versions modernes sont généralement plus propres. Par rapport à une Irish Extra Stout, la Foreign Extra est plus forte et plus amère ; par rapport à une Tropical Stout de même force, elle est généralement plus sèche et plus torréfiée.

L’histoire ne doit donc pas être réduite à « on ajoutait du houblon comme conservateur ». La force, la garde, les pratiques d’embouteillage, les marchés locaux et l’évolution des brasseries ont tous participé à la construction de cette famille.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale en base, orge torréfiée et malts noirs ; historiquement brown et amber malts possibles ; sucre ou autres adjoints parfois employés pour construire la densité."
        ],
        "houblons": [
          "Houblons britanniques ou apparentés, avec une amertume franchement plus élevée que dans les stouts domestiques ; arôme terreux/herbacé possible mais secondaire."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale robuste et atténuante ; les reconstitutions historiques peuvent explorer une maturation mixte, mais ce n’est pas requis dans le style moderne."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil adapté au roast et à une forte amertume, avec alcalinité suffisante et sulfate modéré si l’on vise une finale sèche.",
        "empatage": "Empâtage donnant un corps moyen à plein tout en conservant une bonne fermentescibilité pour la stabilité et la buvabilité.",
        "ebullitionEtHoublonnage": "Amertume forte et solide, historiquement renforcée pour l’export ; ébullition franche adaptée à une densité plus élevée.",
        "fermentation": "Fermentation haute propre à modérément fruitée ; limiter les alcools agressifs malgré la force supérieure.",
        "maturation": "Garde moyenne à longue selon la densité. Le profil doit se fondre sans perdre la fermeté du roast et de l’amertume.",
        "profilRecherche": "Une stout export sombre, forte, sèche à équilibrée, riche en café et chocolat noir, avec une amertume suffisamment ferme pour traverser le malt."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Foreign Extra Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/16/16D/foreign-extra-stout/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Guinness",
          "edition": null,
          "reference": "Foreign Extra Stout — West India Porter lineage and export hopping",
          "type": "source_primaire_historique",
          "url": "https://www.guinness.com/en/beers/guinness-foreign-extra-stout",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Guinness",
          "edition": null,
          "reference": "West Indies Porter — 1801 export concept and extra hopping",
          "type": "source_primaire_historique",
          "url": "https://www.guinness.com/en/beers/guinness-west-indies-porter",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Foreign-Style Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "tropical-stout",
      "nom": "Tropical Stout",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "stout",
      "aliases": [],
      "paysOrigine": [
        "Caraïbes",
        "Afrique",
        "Asie"
      ],
      "origine": {
        "libelle": "Régions tropicales de tradition britannique",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.5,
        "max": 8,
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
        "min": 60,
        "max": 100,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Pint"
        ]
      },
      "description": "La Tropical Stout est une stout noire de chaleur : douce, fruitée, ronde, avec café, chocolat, mélasse, sucre brun, parfois rhum sombre ou fruits secs. Malgré son nom, elle ne signifie pas stout aux fruits tropicaux. Le tropical, ici, parle d’origine et de climat : une bière noire assez douce pour séduire sous le soleil, mais assez rôtie pour garder sa colonne vertébrale.",
      "histoireEtOrigines": `Le mot « Tropical » ne décrit pas des arômes de mangue ou de fruit de la passion issus du houblon. Il indique l’origine et la popularité de la famille dans des marchés tropicaux, notamment les Caraïbes, l’Afrique et d’autres régions où les stouts export britanniques et irlandais avaient établi une forte présence.

Le BJCP décrit la Tropical Stout comme une adaptation locale des Foreign Extra Stouts. Une fois brassées directement sur place, ces bières n’ont plus besoin de reproduire exactement l’équilibre d’un produit expédié depuis l’Europe. Les goûts locaux, les matières premières disponibles et les équipements conduisent à des versions souvent plus douces, plus fruitées et moins amères, avec des notes de mélasse, sucre brun, chocolat, café et fruits noirs.

Une particularité technique fréquemment citée est l’utilisation de levures lager fermentées à température relativement chaude, pratique cohérente avec certaines grandes brasseries tropicales dont l’outil principal est orienté lager. Le résultat peut produire un profil propre mais fruité, différent d’une stout anglaise classique.

La Tropical Stout se situe donc entre le Sweet Stout et la Foreign Extra : plus forte qu’une Sweet Stout, souvent aussi alcoolisée qu’une Foreign Extra, mais généralement plus ronde, plus fruitée et moins sèche.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale et malts ou grains torréfiés doux ; crystal/caramel pour rondeur ; adjoints céréaliers possibles selon les traditions locales."
        ],
        "houblons": [
          "Houblons surtout pour l’amertume, à un niveau modéré ; arôme faible afin de laisser dominer malt, fruit et douceur."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale fruitée ou, fréquemment, levure lager conduite à température plus chaude selon les pratiques de la brasserie."
        ],
        "ingredientsComplementaires": [
          "Sucres ou sirops peuvent augmenter la densité et apporter mélasse, sucre brun ou rhum sombre sans exiger de malt supplémentaire."
        ],
        "profilEau": "Profil équilibré, avec alcalinité suffisante pour les grains foncés ; chlorures utiles à la texture et à la douceur.",
        "empatage": "Empâtage maintenant un corps moyen à plein ; le sucre résiduel ne doit pas uniquement provenir d’un empâtage très chaud si des sucres fermentescibles sont aussi employés.",
        "ebullitionEtHoublonnage": "Amertume modérée, nettement moins agressive qu’une Foreign Extra de même force.",
        "fermentation": "Fermentation donnant un fruité net et agréable ; contrôle des alcools supérieurs indispensable dans les climats et températures de fermentation plus élevés.",
        "maturation": "Garde moyenne pour fondre fruits noirs, caramel et roast.",
        "profilRecherche": "Une stout tropicale forte mais accessible : douce, fruitée, chocolatée, légèrement mélassée, sans brûlé brutal ni amertume d’export dominante."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Tropical Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/16/16C/tropical-stout/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Tropical Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "sweet-milk-cream-stout",
      "nom": "Sweet / Milk / Cream Stout",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "stout",
      "aliases": [
        "Sweet Stout",
        "Milk Stout",
        "Cream Stout"
      ],
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
        "min": 4,
        "max": 6,
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
        "min": 60,
        "max": 100,
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
      "description": "La Sweet Stout arrondit le noir. Le café et le cacao restent présents, mais le lactose ou la douceur résiduelle adoucissent les angles : texture plus pleine, impression de crème, finale moins sèche qu’une Irish Stout. Ce n’est pas forcément une bière dessert, mais elle regarde clairement du côté du chocolat au lait plutôt que de l’expresso amer.",
      "histoireEtOrigines": `La Sweet Stout apparaît en Angleterre au début du XXe siècle dans un contexte où la bière est encore volontiers présentée comme nourrissante ou tonique. Les termes Milk Stout et Cream Stout se développent autour de l’emploi de lactose, le sucre naturellement présent dans le lait. Les levures de bière ordinaires ne fermentent pas efficacement ce sucre : il reste donc dans la bière et apporte une douceur durable ainsi qu’une impression de corps.

Le terme « milk » ne signifie pas que la bière contient nécessairement du lait liquide. Historiquement, c’est surtout le lactose qui construit la catégorie. Les campagnes publicitaires de l’époque ont parfois attribué à ces bières des bénéfices nutritionnels ou médicaux, notamment pour les mères allaitantes ou les convalescents. Ces affirmations appartiennent à l’histoire du marketing et ne doivent évidemment pas être reprises comme conseils de santé contemporains.

Le BJCP indique que l’appellation « Milk Stout » a ensuite été restreinte en Angleterre, alors qu’elle reste utilisée dans d’autres pays. Aujourd’hui, Sweet Stout, Milk Stout et Cream Stout désignent un continuum : une stout noire, chocolatée et torréfiée avec une douceur nettement supérieure aux Irish Stouts. Toutes les Sweet Stouts n’emploient pas forcément du lactose, mais celui-ci demeure l’ingrédient emblématique de la famille.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale en base, crystal/caramel pour la rondeur, chocolate malt et grains torréfiés pour café doux et cacao."
        ],
        "houblons": [
          "Houblons britanniques ou neutres, principalement en amertume ; le niveau doit équilibrer sans sécher fortement la finale."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale anglaise ou apparentée, généralement avec une atténuation modérée."
        ],
        "ingredientsComplementaires": [
          "Lactose fréquemment ajouté pour une douceur non fermentescible et une sensation crémeuse ; d’autres sucres ou sirops peuvent compléter selon la recette."
        ],
        "profilEau": "Chlorures favorables au corps et à la douceur, alcalinité adaptée aux malts noirs ; sulfate modéré afin de ne pas rendre l’amertume trop tranchante.",
        "empatage": "Empâtage moyen à légèrement haut pour préserver le corps, sans compter uniquement sur les dextrines : le lactose fournit la signature sucrée de nombreuses versions.",
        "ebullitionEtHoublonnage": "Amertume basse à moyenne ; le lactose est souvent ajouté pendant l’ébullition ou en phase chaude pour faciliter dissolution et hygiène.",
        "fermentation": "Fermentation haute propre à légèrement fruitée. La densité finale reste volontairement plus élevée à cause des sucres non fermentescibles.",
        "maturation": "Garde courte à moyenne ; éviter une oxydation qui transformerait la douceur chocolatée en lourdeur terne.",
        "profilRecherche": "Un stout noir, doux et crémeux où café au lait, chocolat et caramel sont équilibrés par une amertume modérée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Sweet Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/16/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Sweet / Cream / Milk Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "oatmeal-stout",
      "nom": "Oatmeal Stout",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "stout",
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
        "min": 4.2,
        "max": 5.9,
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
        "min": 44,
        "max": 80,
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
      "description": "L’Oatmeal Stout est la stout en chaussons de velours : noire, rôtie, mais adoucie par l’avoine. Le café et le chocolat restent là, parfois avec une note de noix ou de céréale chaude, mais la texture devient plus soyeuse, presque huileuse dans les versions généreuses. L’avoine ne doit pas transformer la bière en porridge ; elle doit lisser les angles.",
      "histoireEtOrigines": `L’avoine n’est pas une invention du mouvement craft : elle a été utilisée dans les bières britanniques bien avant l’époque contemporaine. L’Oatmeal Stout devient particulièrement visible entre les deux guerres mondiales, à une période où les brasseries commercialisent volontiers des bières sombres autour d’arguments de corps, de nutrition ou de douceur. Comme pour le Milk Stout, il faut distinguer cette histoire publicitaire des connaissances nutritionnelles actuelles.

Le style décline ensuite fortement au Royaume-Uni avant d’être relancé dans le contexte du renouveau des bières traditionnelles et de l’export. Le BJCP souligne que ce revival contribue à son adoption par les brasseurs craft américains. Les versions modernes utilisent une quantité d’avoine réellement perceptible, souvent autour de 5 à 20 % du grist ou davantage, plutôt qu’une dose symbolique destinée seulement à justifier le nom.

L’avoine n’apporte pas nécessairement un goût évident de porridge. Son rôle se manifeste surtout dans la texture : protéines, bêta-glucanes et lipides augmentent le soyeux, la rondeur et parfois une impression légèrement noisettée. Trop d’avoine peut cependant compliquer la filtration et rendre le moût visqueux. L’Oatmeal Stout doit donc rester une bière, pas une boisson céréalière épaisse : le roast, l’amertume et la fermentation doivent encore structurer la bouche.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale, crystal/caramel et malts torréfiés/chocolate ; avoine en flocons ou maltée à une proportion suffisamment nette pour influencer la texture."
        ],
        "houblons": [
          "Houblons surtout pour l’amertume, généralement britanniques ou neutres ; arôme faible."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale anglaise ou apparentée, avec esters doux possibles."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Chlorures modérés pour le soyeux, alcalinité adaptée au roast ; éviter une eau excessivement sulfatée qui durcirait la texture.",
        "empatage": "L’avoine peut épaissir fortement la maische ; une bonne gestion des bêta-glucanes, de la filtration et du ratio eau/grain devient importante quand sa proportion augmente.",
        "ebullitionEtHoublonnage": "Amertume moyenne permettant de couper le corps sans dominer ; peu d’ajouts tardifs nécessaires.",
        "fermentation": "Fermentation haute propre à modérément fruitée, avec atténuation suffisante pour empêcher la texture de devenir pâteuse.",
        "maturation": "Garde courte à moyenne pour harmoniser roast et texture céréalière.",
        "profilRecherche": "Une stout souple et soyeuse, chocolatée et légèrement noisettée, où l’avoine enrichit la bouche sans transformer la bière en dessert sucré."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Oatmeal Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/16/16B/oatmeal-stout/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Oatmeal Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-stout",
      "nom": "American Stout",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "stout",
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
        "max": 7,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 35,
        "max": 75,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 60,
        "max": 100,
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
          "American pint",
          "Tulipe"
        ]
      },
      "description": "L’American Stout n’est pas là pour murmurer : café grillé, chocolat amer, malt noir, amertume affirmée et parfois houblon résineux ou agrume en arrière-plan. Elle reprend la stout et la branche sur l’ampli américain. Le risque, c’est la dureté ; la réussite, c’est une bière noire nerveuse, sèche, intense, mais encore buvable.",
      "histoireEtOrigines": `L’American Stout est une création du mouvement craft et homebrew américain. Il reprend les stouts anglaises et irlandaises mais leur applique la logique qui transforme aussi Pale Ale et IPA aux États-Unis : davantage de houblon, davantage d’amertume, une torréfaction plus affirmée et une liberté accrue dans la composition du malt.

Le BJCP rappelle qu’une version homebrew de cette famille a autrefois été appelée « West Coast Stout », expression révélatrice du lien avec la culture brassicole de la côte Ouest. Contrairement à une Irish Stout où le houblon aromatique reste discret, l’American Stout peut afficher résine, agrumes ou autres signatures de houblons américains. Le grain torréfié peut évoquer café noir, chocolat amer ou légère brûlure, mais l’astringence excessive reste un défaut.

La catégorie est aujourd’hui moins omniprésente qu’à certaines périodes du boom craft, en partie parce que les Imperial Stouts, Black IPA et stouts aromatisées ont capté une partie de son territoire. Elle demeure néanmoins un style très instructif : une stout de force moyenne à élevée où roast et houblon sont tous deux des protagonistes.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt 2-row américain en base ; chocolate, black malt, roasted barley et crystal/caramel selon l’équilibre recherché."
        ],
        "houblons": [
          "Houblons américains résineux, agrumés, floraux ou modernes, avec amertume moyenne à élevée et possibilité d’ajouts tardifs expressifs."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine propre, parfois souche anglaise plus fruitée mais atténuante."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate modéré pour soutenir l’amertume, chlorure suffisant pour ne pas amincir le corps, alcalinité ajustée aux grains noirs.",
        "empatage": "Corps moyen à plein, mais bonne fermentescibilité nécessaire pour éviter qu’un houblonnage puissant ne repose sur une bière sirupeuse.",
        "ebullitionEtHoublonnage": "Amertume forte et ajouts tardifs possibles ; rechercher une interaction nette entre houblon et roast plutôt qu’une simple superposition agressive.",
        "fermentation": "Fermentation haute propre, esters bas, température contrôlée.",
        "maturation": "Quelques semaines permettent d’arrondir black malt et amertume tout en conservant le houblon suffisamment frais.",
        "profilRecherche": "Une stout américaine noire, amère et houblonnée, avec café, chocolat noir et résine/agrumes dans un équilibre volontairement musclé."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/20/american-porter-and-stout/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "imperial-stout",
      "nom": "Imperial Stout",
      "collectionId": 3,
      "nature": "S",
      "parentPrincipalId": "stout",
      "aliases": [
        "Russian Imperial Stout"
      ],
      "paysOrigine": [
        "Royaume-Uni",
        "International"
      ],
      "origine": {
        "libelle": "Origine britannique, diffusion internationale",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 8,
        "max": 12,
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
        "min": 60,
        "max": 120,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 11,
        "temperatureMax": 15,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Snifter",
          "Tulipe"
        ]
      },
      "description": "L’Imperial Stout est une cathédrale noire : malt torréfié, cacao amer, café dense, réglisse, fruits secs, alcool chaud et parfois une impression de porto ou de pruneau après garde. Sa difficulté n’est pas d’être puissante, mais de ne pas devenir brouillonne. Quand elle fonctionne, chaque excès trouve son contrepoids.",
      "histoireEtOrigines": `L’Imperial Stout possède une vraie profondeur historique, mais son récit est souvent simplifié à l’excès. Ses racines se trouvent dans les porters et stouts britanniques très forts brassés pour l’export dès le XVIIIe siècle, notamment vers les marchés de la Baltique et de la Russie. Des bières de ce type ont effectivement circulé vers Saint-Pétersbourg et ont été associées à la cour impériale, mais il n’existe pas une recette unique « inventée pour Catherine II » qui serait l’ancêtre direct de toutes les Imperial Stouts modernes.

Après les guerres napoléoniennes et les transformations du commerce, une partie de ces bières fortes est également vendue sur le marché britannique. Le style décline ensuite avec la baisse générale des densités, les changements fiscaux et l’évolution des goûts. Certaines lignées comme Courage Imperial Russian Stout entretiennent néanmoins le souvenir du produit avant que la catégorie ne soit réinterprétée par les brasseurs du renouveau anglais puis, surtout, par le mouvement craft américain.

Le BJCP actuel insiste sur l’extrême amplitude des interprétations modernes. Certaines restent proches d’un profil britannique : malt riche, fruits noirs, esters, toffee et alcool fondu. D’autres poussent roast, amertume et houblons américains. Le vieillissement peut produire des notes vineuses ou de porto. La bière sert aussi de base à une immense famille de variantes en fûts de bourbon, avec café, cacao, vanille ou autres ingrédients.

Le défi technique n’est pas de faire « la bière la plus noire et la plus forte possible ». Une bonne Imperial Stout doit intégrer malt, roast, fruit, houblon et alcool en profondeur. La puissance sans équilibre donne une masse chaude, brûlée ou sirupeuse ; la garde peut aider, mais elle ne répare pas une fermentation défaillante.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Imperial Stout couvre un spectre anglais, américain et international. Les principes communs sont une forte densité, une grande profondeur sombre et une fermentation propre malgré l’alcool ; les niveaux de roast, houblon et fruit varient considérablement.",
        "maltsEtCereales": [
          "Malt pale en base, proportions substantielles de chocolate, black malt ou roasted barley ; crystal/caramel et adjoints en flocons possibles selon l’école."
        ],
        "houblons": [
          "Houblons anglais ou américains, avec une amertume élevée nécessaire pour équilibrer la densité ; arôme allant de faible à très présent."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale hautement viable et tolérante à l’alcool ; pitch massif, oxygénation et nutrition adaptés au moût très concentré."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Alcalinité suffisante pour le roast, chlorure pour la texture et sulfate pour l’amertume selon l’école ; éviter l’excès de minéralité qui rendrait alcool et torréfaction durs.",
        "empatage": "Empâtage conçu pour conserver du corps tout en produisant suffisamment de sucres fermentescibles. Une bière trop dextrinique devient facilement écœurante à forte densité.",
        "ebullitionEtHoublonnage": "Ébullition souvent longue pour concentrer et construire la profondeur ; amertume importante mais calculée avec la densité finale élevée.",
        "fermentation": "Contrôle thermique strict, oxygénation parfois fractionnée selon le procédé, levure en excellente santé ; limiter alcools de fusel et sous-atténuation.",
        "maturation": "De plusieurs semaines à plusieurs mois, parfois davantage. La garde doit intégrer alcool, fruit noir, roast et amertume ; surveiller l’oxydation qui peut apporter porto agréable puis carton si elle progresse trop.",
        "profilRecherche": "Une stout très forte, noire et complexe où chocolat noir, café, fruits secs, malt riche, amertume et chaleur alcoolique forment un ensemble profond plutôt qu’une démonstration brute."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Imperial Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/20/american-porter-and-stout/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Imperial Stout / strong dark beer families — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "british-imperial-stout",
      "nom": "British Imperial Stout",
      "collectionId": 3,
      "nature": "SS",
      "parentPrincipalId": "imperial-stout",
      "aliases": [
        "British-Style Imperial Stout"
      ],
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
        "min": 7,
        "max": 11,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 45,
        "max": 75,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 60,
        "max": 110,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 11,
        "temperatureMax": 15,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Snifter",
          "Tulipe"
        ]
      },
      "description": "La British Imperial Stout garde le goût du vieux monde : puissance, oui, mais avec une retenue maltée, des fruits noirs, du chocolat amer, de la mélasse, parfois un côté vin cuit ou réglisse. Moins démonstrative que certaines versions américaines, elle mise sur la profondeur et la patience. C’est une bière noire qui préfère le velours lourd au feu d’artifice.",
      "histoireEtOrigines": `British Imperial Stout est une manière moderne de distinguer le pôle britannique de la grande famille Imperial Stout. Historiquement, les fortes stouts d’export britanniques peuvent présenter davantage de malt, de fruits de fermentation et de douceur que les versions craft américaines modernes. La Brewers Association maintient d’ailleurs une catégorie British-Style Imperial Stout séparée, dont la couleur peut aller du cuivre très sombre au noir et dont le malt riche, le toffee et le caramel jouent un rôle majeur.

Cette distinction ne signifie pas qu’il existe une frontière historique nette entre « British Imperial » et « Russian Imperial ». Les noms ont changé, les recettes ont évolué et les brasseries exportaient vers plusieurs marchés. La catégorie actuelle sert surtout à décrire un équilibre : esters de fruits noirs plus présents, houblon floral/herbacé moins agressif, roast souvent plus doux et une richesse maltée qui peut rappeler toffee, mélasse, pain noir et fruits secs.

Elle reste ainsi plus proche de certaines fortes stouts britanniques historiques et de leurs reprises modernes que du profil américain très café noir, très amer et houblonné.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pale ale malt britannique, crystal/caramel sombre, chocolate et malts noirs ; brown ou amber malt possibles pour une lecture historique plus maltée."
        ],
        "houblons": [
          "Houblons britanniques floraux, terreux ou herbacés ; amertume moyenne à forte mais généralement moins démonstrative que dans les versions américaines."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale anglaise expressive et tolérante à l’alcool, apportant prune, raisin ou fruits rouges sans solvants."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Chlorure et alcalinité soutenant le malt sombre ; sulfate modéré afin de garder une amertume structurante mais non tranchante.",
        "empatage": "Empâtage donnant un corps plein et une richesse de malt, tout en préservant assez de fermentescibilité pour éviter la lourdeur.",
        "ebullitionEtHoublonnage": "Ébullition longue possible pour toffee et concentration ; houblonnage surtout en amertume avec finition britannique discrète.",
        "fermentation": "Fermentation haute avec montée contrôlée de température ; accepter un fruité anglais mais éviter chaleur alcoolique rugueuse.",
        "maturation": "Garde longue souvent bénéfique pour intégrer esters, fruits secs et caramel ; l’évolution vineuse peut être plaisante.",
        "profilRecherche": "Une Imperial Stout riche et britannique : toffee, fruits noirs, chocolat, malt profond et alcool fondu, avec moins d’agressivité de roast et de houblon."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "British-Style Imperial Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Imperial Stout — historical British lineage — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/20/american-porter-and-stout/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "american-imperial-stout",
      "nom": "American Imperial Stout",
      "collectionId": 3,
      "nature": "SS",
      "parentPrincipalId": "imperial-stout",
      "aliases": [
        "American-Style Imperial Stout"
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
        "max": 14,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 50,
        "max": 100,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 70,
        "max": 140,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
      },
      "service": {
        "temperatureMin": 11,
        "temperatureMax": 15,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Snifter",
          "Tulipe"
        ]
      },
      "description": "L’American Imperial Stout prend l’Imperial Stout et ouvre les vannes : plus d’alcool, plus de torréfaction, plus d’amertume, parfois plus de houblon, plus de barrique, plus de tout. Les meilleures restent lisibles, avec café intense, chocolat noir, fruits secs, caramel brûlé et chaleur enveloppante. Les moins sages deviennent des trous noirs parfumés au malt.",
      "histoireEtOrigines": `L’American Imperial Stout est l’une des expressions emblématiques du mouvement craft américain. À partir des années 1980 et 1990, les brasseurs américains reprennent le concept des fortes stouts britanniques mais augmentent souvent simultanément densité, torréfaction, amertume et houblon aromatique. Le résultat devient une bière noire massive capable de supporter des quantités importantes de malt sombre et une garde prolongée.

Le style moderne s’éloigne ainsi de nombreuses versions britanniques par une signature plus agressive : café noir, cacao amer, black malt, parfois légère brûlure, amertume élevée et houblons américains résineux ou agrumés. Les niveaux d’alcool dépassent couramment ceux des stouts ordinaires et obligent à une conduite de fermentation beaucoup plus rigoureuse.

Cette base devient également centrale dans la culture du barrel-aged stout américain, en particulier avec les fûts de bourbon, puis dans les bières au café, cacao, vanille ou autres ingrédients. La fiche American Imperial Stout vise toutefois la bière de base : les variantes où le fût ou les ingrédients culinaires dominent appartiennent à d’autres catégories.

La puissance n’excuse pas le désordre. Une bonne version doit conserver une structure lisible malgré son intensité : le roast ne doit pas devenir cendreux, l’alcool ne doit pas brûler et le sucre résiduel ne doit pas transformer la bouche en sirop.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt 2-row ou pale américain, roasted barley, black malt, chocolate malt et crystal/caramel selon la recette ; flocons possibles pour renforcer corps et mousse."
        ],
        "houblons": [
          "Houblons américains en amertume élevée ; variétés résineuses, agrumées ou modernes possibles en finition, même si leur expression diminuera avec la garde."
        ],
        "levuresEtMicroorganismes": [
          "Souche ale américaine ou autre levure très tolérante à l’alcool, avec ensemencement massif et excellente vitalité."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Équilibre chlorure/sulfate adapté à une bière à la fois pleine et amère ; alcalinité suffisante pour le grain noir.",
        "empatage": "Empâtage plutôt fermentescible malgré la recherche de corps ; une très forte densité fournit déjà beaucoup de texture.",
        "ebullitionEtHoublonnage": "Ébullition souvent longue et amertume élevée. Les ajouts tardifs doivent être pensés en fonction de la garde prévue, car le houblon frais s’atténue avec le temps.",
        "fermentation": "Gestion de haute densité : oxygène, nutriments, levure en quantité, température contenue et temps suffisant pour atteindre une atténuation saine.",
        "maturation": "Longue, souvent plusieurs mois. Les versions destinées à être bues jeunes gardent davantage de houblon ; les versions de garde gagnent en fruits noirs, chocolat et rondeur alcoolique.",
        "profilRecherche": "Une stout impériale américaine massive mais nette : café noir, cacao amer, roast profond, forte amertume et alcool chaud mais propre."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Imperial Stout — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Imperial Stout — American interpretation — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/20/american-porter-and-stout/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "dessert-pastry-beer",
      "nom": "Dessert / Pastry Beer",
      "collectionId": 3,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [
        "Dessert Beer",
        "Pastry Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Mouvement craft contemporain",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 7,
        "max": 13,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 20,
        "max": 65,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 25,
        "max": 100,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 10,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Snifter",
          "Teku"
        ]
      },
      "description": "La Dessert / Pastry Beer ne cherche pas seulement à être noire, forte ou sucrée : elle veut évoquer une pâtisserie. Vanille, cacao, noix de coco, érable, biscuit, caramel, marshmallow ou fruits peuvent entrer dans le jeu. Le danger est évident : devenir un sirop déguisé en bière. La réussite, c’est quand le dessert apparaît sans effacer la base maltée.",
      "histoireEtOrigines": `Dessert Beer et Pastry Stout sont des catégories de la culture craft contemporaine, pas des styles historiques hérités d’une tradition régionale ancienne. L’idée consiste à prendre une bière sombre et généralement forte — souvent une Imperial Stout — puis à construire volontairement un profil rappelant pâtisseries, desserts, confiseries ou boissons gourmandes.

Les ingrédients deviennent alors un vocabulaire culinaire : cacao, café, vanille, noix de coco, sirop d’érable, fruits, cannelle, cacahuète, noisette, guimauve, biscuits, sucres ou lactose. La Brewers Association reconnaît désormais explicitement la catégorie Dessert or Pastry Beer et insiste sur trois points : une base sombre et forte, une richesse sucrée marquée et des ingrédients culinaires perceptibles. Les versions élevées en fût sont classées séparément lorsque le bois ou le spiritueux devient une dimension majeure.

Le terme « pastry stout » s’est popularisé avec l’explosion des bières craft très aromatisées et des collaborations de brasseries, mais il ne désigne pas une recette fixe. Deux bières portant ce nom peuvent n’avoir presque rien en commun en dehors d’une base sombre et d’une volonté de rappeler un dessert.

La difficulté technique est précisément de rester dans le domaine de la bière. Trop de sucre résiduel, de lactose ou d’extraits peut donner une boisson écœurante où fermentation, malt et amertume disparaissent. Les meilleures versions utilisent la stout comme une charpente, pas comme un simple véhicule à arômes.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Pastry/Dessert Beer est une catégorie de spécialité. Le dessert ciblé et les ingrédients définissent la recette ; il n’existe donc aucun grist universel.",
        "maltsEtCereales": [
          "Base fréquemment proche d’une Imperial Stout : pale malt, chocolate, black/roasted grains, crystal ; avoine ou blé possibles pour texture et mousse."
        ],
        "houblons": [
          "Houblonnage généralement faible en arôme et modéré en amertume afin de ne pas concurrencer les ingrédients culinaires, tout en coupant la douceur."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale robuste, adaptée aux fortes densités et capable d’achever correctement la fermentation malgré les additions."
        ],
        "ingredientsComplementaires": [
          "Cacao, café, vanille, noix de coco, fruits, épices, sirops, lactose, noix, guimauve ou autres ingrédients cohérents avec le dessert ciblé ; chaque ajout doit être documenté et maîtrisé."
        ],
        "profilEau": "Chlorures souvent favorisés pour la rondeur ; alcalinité adaptée au roast. Le sulfate doit rester assez bas pour ne pas créer une amertume sèche incompatible avec le dessert recherché.",
        "empatage": "Corps plein mais pas nécessairement empâtage extrême : les ingrédients et sucres non fermentescibles apportent déjà beaucoup de densité sensorielle.",
        "ebullitionEtHoublonnage": "Amertume de structure ; certains ingrédients tolèrent l’ébullition, d’autres doivent être ajoutés après fermentation pour préserver les arômes. La sécurité microbiologique des ajouts est essentielle.",
        "fermentation": "Fermentation de forte densité menée proprement avant de charger la bière en ingrédients ; surveiller reprise de fermentation lors d’ajouts contenant des sucres fermentescibles.",
        "maturation": "Variable. Les arômes de café, épices et fruits peuvent décliner rapidement, alors que cacao, vanille et alcool se fondent souvent avec une garde plus longue.",
        "profilRecherche": "Une bière-dessert riche et assumée où l’idée pâtissière est évidente mais reste soutenue par une vraie structure de stout, sans lourdeur sucrée incontrôlée."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Dessert or Pastry Beer — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Imperial Stout — common dark strong base — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/20/american-porter-and-stout/",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "coffee-stout-or-porter",
      "nom": "Coffee Stout or Porter",
      "collectionId": 3,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [
        "Coffee Stout",
        "Coffee Porter"
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
        "min": 4.5,
        "max": 12,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 20,
        "max": 80,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 40,
        "max": 120,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "Le type de fermentation dépend du style de base ou du produit concerné."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Snifter"
        ]
      },
      "description": "La Coffee Stout or Porter joue avec une évidence : les malts noirs parlent déjà café, le vrai café vient leur répondre. Selon la méthode, elle peut évoquer espresso, cold brew, moka, grain fraîchement moulu ou marc amer. L’enjeu n’est pas seulement d’ajouter du café, mais de l’accorder au chocolat, au rôti, au corps et à l’amertume de la bière.",
      "histoireEtOrigines": `Associer café et bière sombre semble presque évident sur le plan aromatique : la torréfaction du café dialogue avec les notes de café, cacao et pain grillé déjà produites par les malts foncés. Pourtant, Coffee Stout or Porter est une catégorie de spécialité moderne plutôt qu’un style historique codifié. La Brewers Association classe les bières au café selon la présence perceptible de café et demande de préciser la bière de base, le café employé et le procédé lorsqu’elles sont jugées en compétition.

La scène craft a exploré de nombreuses techniques : café infusé à froid, espresso, grains entiers, café moulu, ajout côté froid, macération en cuve, sélection de torréfactions claires ou sombres et parfois assemblage de plusieurs origines. Founders Breakfast Stout illustre bien cette approche : une stout à l’avoine et au chocolat utilisant deux types de café pour produire un caractère de café fraîchement torréfié.

Le choix du café change autant le résultat que sa quantité. Une torréfaction sombre peut renforcer cacao et amertume mais devenir cendreuse avec les malts noirs ; une torréfaction plus claire peut apporter fruit, acidité et floral. Le procédé d’extraction modifie amertume, acidité, huiles et stabilité aromatique. Le café est aussi sensible à l’oxydation : une bière spectaculaire jeune peut perdre rapidement son parfum.

La catégorie ne doit donc pas être réduite à « ajouter du café dans une stout ». Le brasseur doit construire un continuum entre le roast du grain et celui du café, en décidant ce qui vient du malt et ce qui vient réellement du produit ajouté.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La bière de base peut être Porter, Stout, Oatmeal Stout ou Imperial Stout ; le type de café et le procédé d’extraction font partie de la définition de chaque recette.",
        "maltsEtCereales": [
          "Grist adapté à la bière de base ; chocolate malt et grains torréfiés doivent être choisis en tenant compte de la torréfaction du café pour éviter une accumulation de brûlé."
        ],
        "houblons": [
          "Amertume suffisante pour la base, généralement peu de houblon aromatique afin de garder le café lisible."
        ],
        "levuresEtMicroorganismes": [
          "Levure appropriée à la bière de base ; fermentation idéalement terminée proprement avant les ajouts froids de café."
        ],
        "ingredientsComplementaires": [
          "Café sous forme de cold brew, grains entiers, café fraîchement moulu ou extraction adaptée ; cacao, avoine ou lactose peuvent accompagner certaines recettes mais changent la catégorie sensorielle."
        ],
        "profilEau": "Le café apporte sa propre acidité. Une eau bien tamponnée et un pH de bière de base maîtrisé évitent qu’acidité du café et roast ne deviennent mordants.",
        "empatage": "Selon la bière de base ; éviter de surcharger inutilement en malts noirs si le café doit fournir une part de la torréfaction.",
        "ebullitionEtHoublonnage": "Le café est généralement mieux protégé lorsqu’il n’est pas longuement bouilli. Les ajouts tardifs ou côté froid permettent de préserver les arômes les plus volatils.",
        "fermentation": "Fermentation complète et propre avant ajout de café lorsque celui-ci est ajouté à froid ; hygiène stricte pour éviter contamination et oxygénation.",
        "maturation": "Souvent relativement courte pour préserver le café frais. Les Imperial Coffee Stouts peuvent gagner en intégration avec le temps mais perdent progressivement les notes les plus volatiles.",
        "profilRecherche": "Un porter ou stout où le café est clairement identifiable mais intégré au malt : espresso, cacao, torréfaction et douceur doivent former une seule architecture."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Coffee Stout or Porter / Coffee Beer — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Founders Brewing Co.",
          "edition": null,
          "reference": "Breakfast Stout — oats, chocolate and two types of coffee",
          "type": "source_primaire_technique",
          "url": "https://foundersbrewing.com/our-beer/breakfast-stout/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Stout base styles — Beer Style Guidelines",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/20/american-porter-and-stout/",
          "consultation": "2026-08-08"
        }
      ]
    }
  ]
};

export default collection;
