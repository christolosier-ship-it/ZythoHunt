// Source canonique de la collection : taxonomie + contenu encyclopédique.
// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 7,
    "slug": "ales-ambrees-brunes-maltees-et-fortes",
    "nom": "Ales ambrées, brunes, maltées et fortes"
  },
  "cartes": [
    {
      "id": "ale",
      "nom": "Ale",
      "collectionId": 7,
      "nature": "F",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Traditions de fermentation haute",
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
        "details": "Levures de fermentation haute, généralement plus chaudes que les lagers ; esters, atténuation et récolte de levure varient selon les branches."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "Ale est un vieux mot devenu une immense famille : une fermentation haute relie aujourd’hui la pinte de Mild, l’Alt de Düsseldorf, la Brown américaine et le Barley Wine, sans leur imposer ni couleur ni force. La levure peut apporter fruits ou épices, mais chaque branche décide ensuite du malt, du houblon, de la garde et du volume sonore.",
      "histoireEtOrigines": `Avant de désigner une famille microbiologique, « ale » nommait une boisson. Dans l'Angleterre de la fin du Moyen Âge, les textes opposaient volontiers l'ale locale, traditionnellement non houblonnée, à la beer houblonnée associée aux brasseurs venus du continent. Historic England situe l'installation du commerce du houblon à Londres au XVe siècle. La distinction a survécu longtemps dans les mots et les règlements, puis s'est brouillée à mesure que le houblon s'imposait dans les deux boissons. Au XVIIIe siècle, « ale » pouvait déjà contenir du houblon sans provoquer l'effondrement de la langue anglaise.

La révolution suivante n'est pas lexicale mais biologique. Au XIXe puis au XXe siècle, l'observation des levures, leur isolement et la maîtrise des fermentations donnent un nouveau sens pratique au terme : les ales sont principalement associées à Saccharomyces cerevisiae, les lagers à des levures du complexe S. pastorianus. « Fermentation haute » reste toutefois une commodité historique. Une levure ale n'est pas définie par une obligation de camper au sommet de la cuve, et sa température de travail varie avec la souche, la pression, la géométrie du fermenteur et le profil recherché.

Cette définition moderne forme un tronc, pas une recette. Des ales peuvent être pâles ou noires, légères ou proches du vin en alcool, servies jeunes au pub ou gardées plusieurs années. L'Altbier fermente avec une levure ale puis mûrit au froid ; certaines Strong Ales américaines poussent houblon et densité dans la même direction ; une Mild contemporaine préfère la conversation longue à la démonstration de force.

La généalogie explique ainsi l'apparente bizarrerie de la collection : Brown, Amber, Red, Scottish et Strong Ale ne descendent pas d'un breuvage originel aux reflets bruns. Elles partagent un mode de fermentation et un vocabulaire, puis bifurquent sous l'effet des villes, des impôts, des malts, des marchés et des habitudes de service.`,
      "chapitres": [
        {
          "titre": "Le dessus de la cuve n'est pas une frontière",
          "texte": `Les expressions « fermentation haute » et « fermentation basse » décrivent une histoire de pratiques autant qu'une séparation biologique absolue. Les souches diffèrent par leur capacité à fermenter certains sucres, leur floculation, leur tolérance à l'alcool et leur production d'esters ; la température module ces caractères sans transformer magiquement une ale en lager.

Les arômes fruités souvent associés aux ales proviennent notamment d'esters synthétisés par la levure. Leur intensité dépend de la souche et du procédé : taux d'ensemencement, oxygénation, température, pression et composition du moût. Le mot « ale » annonce donc un monde fermentaire ; il ne promet pas automatiquement une corbeille de fruits.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Ale relie des bières par leur monde fermentaire ; couleur, densité, houblonnage et durée de garde appartiennent aux branches.",
        "maltsEtCereales": [
          "Orge maltée comme base la plus fréquente ; autres céréales, sucres et malts de spécialité ne prennent sens qu'à l'échelle du sous-style."
        ],
        "houblons": [
          "Le houblon n'est ni obligatoire historiquement dans toutes les ales anciennes, ni discret dans la famille moderne : son rôle va de la conservation et de l'équilibre à l'arôme principal."
        ],
        "levuresEtMicroorganismes": [
          "Souches de Saccharomyces cerevisiae sélectionnées pour leur atténuation, leur floculation et leur signature fermentaire ; les phénols épicés ne sont produits que par certaines lignées."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Aucun profil familial : alcalinité, sulfate, chlorure et calcium se règlent pour le malt, le houblon, la levure et la couleur de la branche concernée.",
        "empatage": "La fermentescibilité recherchée commande les paliers et la température ; une Mild légère et un Barley Wine ne résolvent pas le même problème de corps.",
        "ebullitionEtHoublonnage": "De l'amertume d'équilibre au houblonnage massif, le programme suit le style. Une ébullition prolongée peut concentrer une ale forte, mais elle n'est pas un rite de famille.",
        "fermentation": "Souche, température, oxygénation, pression et ensemencement règlent atténuation et esters. Les ales fermentent souvent plus chaud que les lagers, avec des exceptions importantes comme l'Altbier.",
        "maturation": "Quelques jours de conditionnement pour une ale de session, garde froide pour une Alt, mois ou années pour certaines ales fortes : le temps est un axe de divergence majeur.",
        "profilRecherche": "Une identité lisible du sous-style, portée par une fermentation maîtrisée plutôt qu'une caricature universelle de fruits et de rondeur."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "2021 Beer Style Guidelines — familles d'ales",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "2026 Beer Style Guidelines — Ale Styles",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Historic England",
          "edition": "2018",
          "reference": "500 Years of Oasts and Hop Kilns in England",
          "type": "recherche_patrimoniale",
          "url": "https://historicengland.org.uk/whats-new/research/back-issues/500-years-of-oasts-and-hop-kilns-in-england/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Colonial Williamsburg Foundation",
          "edition": "1996",
          "reference": "A Study of Beer and Brewing in 18th-Century England",
          "type": "rapport_de_recherche_historique",
          "url": "https://research.colonialwilliamsburg.org/DigitalLibrary/view/index.cfm?doc=ResearchReports%5CRR0364.xml",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Stewart — Beverages",
          "edition": "2016",
          "reference": "Saccharomyces species in the production of beer",
          "type": "publication_scientifique",
          "url": "https://www.mdpi.com/2306-5710/2/4/34",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Saerens et al. — Applied and Environmental Microbiology",
          "edition": "2008",
          "reference": "The Saccharomyces cerevisiae EHT1 and EEB1 genes encode novel enzymes with medium-chain fatty acid ethyl ester synthesis capacity",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2223249/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "mild-ale",
      "nom": "Mild Ale",
      "collectionId": 7,
      "nature": "F",
      "parentPrincipalId": "ale",
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
        "details": "Levure ale britannique et cycle rapide ; la faible densité moderne réclame une atténuation franche plutôt qu’une fermentation arrêtée."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "Une Mild moderne tient souvent sous les 4 % vol., mais son nom racontait d’abord l’âge : mild signifiait jeune, encore tendre, face aux ales gardées devenues stock ou stale. Dans la pinte actuelle, céréale, cacao doux, noisette ou sucre brun parlent bas, le houblon équilibre, et le pub peut poursuivre la conversation sans appeler un taxi après deux tournées.",
      "histoireEtOrigines": `Imaginez d'abord deux tonneaux, pas deux degrés d'alcool. Dans la brasserie britannique des XVIIIe et XIXe siècles, mild décrivait une bière vendue jeune, encore « douce » au sens de non vieillie. Stock ou stale désignaient des ales ayant attendu, parfois pour être assemblées aux jeunes. Une Mild pouvait donc être forte ; le mot renseignait son état et son traitement bien avant de devenir le nom d'une petite bière brune.

Le glissement vers la légèreté résulte d'une longue pression, accélérée par la guerre. À la veille de la Première Guerre mondiale, une réponse parlementaire de novembre 1914 place encore la densité moyenne des Milds courantes au-dessus de 1,040. Les droits sur la bière augmentent, les autorités limitent les matières premières puis pilotent les densités et les volumes. En 1918, le débat à la Chambre des communes porte explicitement sur les quantités de grain autorisées aux brasseurs ; en 1922, les députés rappellent que le droit sur le baril standard est passé depuis 1914 de 7 shillings 9 pence à 5 livres. La fiscalité n'a pas inventé seule la Mild faible, mais elle a puissamment rétréci le moût.

La couleur change elle aussi de statut. Les Milds pâles ne disparaissent pas d'un coup ; cependant les versions brunes, rendues sombres par des malts colorés, des sucres ou du caramel de brasserie selon les recettes, deviennent l'image dominante du XXe siècle. Le produit se fixe alors comme bière de débit : peu alcoolisée, modérément houblonnée, servie en cask et assez savoureuse pour supporter une pinte, puis une autre.

Après la Seconde Guerre mondiale, le Bitter gagne du terrain, la lager progresse et la Mild recule. Elle représentait encore une part considérable des ventes pression au milieu du siècle avant de devenir une spécialité menacée. La campagne de CAMRA et le Mild Month ont conservé le mot dans les pubs, tandis que des brasseries contemporaines redécouvrent aussi les versions pâles ou plus fortes. La mémoire utile tient dans ce paradoxe : la Mild est devenue légère par l'histoire ; son nom, lui, n'était pas né sur une balance.`,
      "chapitres": [
        {
          "titre": "Du tonneau jeune à la pinte de session",
          "texte": `Le service rapide des Milds anciennes ne signifie pas qu'elles sortaient chaudes et inachevées de la cuve. « Jeune » s'entendait face à des ales conservées des mois : fermentation, clarification et conditionnement restaient nécessaires. Dans le pub moderne, le cask poursuit une maturation courte et la prise en charge par le cellarman règle limpidité, carbonatation naturelle et service.

Cette continuité explique mieux le style que le seul taux d'alcool. La Mild demeure une bière pensée pour être débitée fraîche et en volume, avec une intensité aromatique proportionnée à une densité modeste. Son héroïsme consiste à rester intéressante au troisième demi, performance moins spectaculaire qu'un fût de whisky mais nettement plus sociale.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Mild désignait historiquement une ale jeune ; les sous-styles actuels retiennent surtout une bière de session maltée, pâle ou sombre.",
        "maltsEtCereales": [
          "Malt pale ou mild comme base ; les versions sombres règlent couleur et accents de cacao ou de noix avec crystal, brown, chocolat, caramel de brasserie ou sucres selon la tradition.",
          "La faible densité impose de doser les malts spéciaux : leur goût doit enrichir la gorgée sans donner l'impression de boire un extrait de malt."
        ],
        "houblons": [
          "Houblons britanniques à faible intensité, destinés surtout à équilibrer le malt."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique, souvent modérément fruitée et adaptée au service cask."
        ],
        "ingredientsComplementaires": [
          "Sucres invertis, maïs, caramel de brasserie ou autres adjuncts sont historiquement plausibles selon la recette."
        ],
        "profilEau": "Une minéralité modérée soutient la fermentation et l'équilibre ; les grains sombres exigent surtout un pH d'empâtage maîtrisé, non une eau systématiquement alcaline.",
        "empatage": "Température et composition préservent une sensation suffisante malgré la faible densité, tout en laissant une finale nette qui invite à reprendre la pinte.",
        "ebullitionEtHoublonnage": "Amertume basse à modérée, généralement sans houblonnage aromatique démonstratif ; l'objectif est de tendre le malt, pas de le couvrir.",
        "fermentation": "Une souche britannique modérément atténuante peut apporter des esters discrets. Un ensemencement sain évite que faible densité ne signifie fermentation négligée.",
        "maturation": "Courte et orientée vers le service frais ; en cask, la fermentation secondaire, la clarification et le travail de cave font partie du produit final.",
        "profilRecherche": "Une pinte légère mais construite, où chaque note maltée reste lisible et où la finale permet le débit plutôt que la dégustation au compte-gouttes."
      },
      "sources": [
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "Mild, Pale — histoire et profil",
          "type": "source_historique_et_style",
          "url": "https://learn.camra.org.uk/beer-styles/mild-pale",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Dark Mild",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Mild Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "UK Parliament — Hansard",
          "edition": "1914",
          "reference": "Beer Duties — gravities of Mild ales before wartime contraction",
          "type": "archive_parlementaire",
          "url": "https://api.parliament.uk/historic-hansard/written-answers/1914/nov/26/beer-duties",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "UK Parliament — Hansard",
          "edition": "1918",
          "reference": "Intoxicating Liquors (Manufacture) — restrictions on brewing materials",
          "type": "archive_parlementaire",
          "url": "https://api.parliament.uk/historic-hansard/commons/1918/mar/12/intoxicating-liquors-manufacture",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "UK Parliament — Hansard",
          "edition": "1922",
          "reference": "Reduced Excise Duty on Beer — evolution of duty since 1914",
          "type": "archive_parlementaire",
          "url": "https://api.parliament.uk/historic-hansard/commons/1922/jun/27/new-clause-reduced-excise-duty-on-beer",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Encyclopaedia Britannica",
          "edition": "1911",
          "reference": "Ale — mild and stock ales in contemporary brewing vocabulary",
          "type": "source_historique",
          "url": "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Ale",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "brown-ale",
      "nom": "Brown Ale",
      "collectionId": 7,
      "nature": "F",
      "parentPrincipalId": "ale",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni",
        "États-Unis"
      ],
      "origine": {
        "libelle": "Royaume-Uni puis États-Unis",
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
        "details": "Fermentation ale dont les esters changent avec la branche régionale, assez retenus pour laisser parler noix, céréale et malt brun."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "Brown Ale est une étagère de bruns, pas une dynastie : bouteille douce du Londres industriel, ale du nord anglais plus sèche, interprétation américaine traversée de houblon. Noisette, cacao, sucre brun ou malt grillé donnent un air de famille ; le degré, l’amertume et même la raison d’exister changent dès que l’on passe à la bouteille suivante.",
      "histoireEtOrigines": `La couleur donne envie de dessiner une lignée : d'abord des ales brunes anciennes, puis la Brown Ale moderne, enfin ses descendantes. Les archives résistent à ce scénario trop propre. Les mots brown ale ont servi à des produits différents, tandis que Mild, Porter et Brown Ale ont poursuivi des histoires parallèles malgré des robes voisines. Une bière brune n'hérite pas automatiquement de toutes les autres bières brunes ; la couleur fait une excellente photographie et une médiocre généalogie.

La famille contemporaine se consolide surtout au XXe siècle autour de produits en bouteille. À Londres, Mann's lance en 1902 une Brown Ale douce et de faible densité, branche qui deviendra un sous-style à part. Dans le nord-est, Newcastle Brown Ale apparaît en 1927 et donne une visibilité internationale à une expression plus forte, plus sèche et plus fruitée. D'autres brasseries utilisent le nom avec leurs propres équilibres : le singulier « English Brown Ale » masque donc déjà une carte régionale.

Les brasseurs artisanaux américains rouvrent le dossier dans les années 1980. Ils conservent la profondeur de couleur et les accents de noix ou de chocolat, mais augmentent volontiers amertume et arômes de houblons américains. À partir de 1986, la diffusion nationale de Pete's Wicked Ale rend cette branche visible bien au-delà des brewpubs.

La classification moderne réunit ces branches pour aider à la lecture sensorielle. Elle ne leur fabrique pas un ancêtre commun. Le parent Brown Ale porte cette constellation ; London Brown, British Brown et American Brown racontent ensuite pourquoi une ville, un conditionnement ou une révolution craft a déplacé l'équilibre.`,
      "chapitres": [
        {
          "titre": "Le brun n'est pas un ingrédient",
          "texte": `La robe peut venir de crystal, de brown malt, de malts chocolat ou d'une combinaison mesurée de grains très foncés. Deux bières au même EBC peuvent ainsi évoquer l'une la noisette et le sucre brun, l'autre le cacao sec et le houblon résineux. La couleur indique la quantité de lumière absorbée ; elle ne livre ni la facture de malt ni l'histoire de la brasserie.

Cette distinction protège aussi le Porter et la Dark Mild. Ils peuvent partager la palette visuelle d'une Brown Ale sans adopter son intensité torréfiée, sa densité ou son mode de service. Le nuancier rapproche ; la recette tranche.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie en constellation : les Brown Ales britanniques, londoniennes et américaines partagent une zone sensorielle, non une recette fondatrice.",
        "maltsEtCereales": [
          "Malt pale comme base ; crystal, brown, amber et petites quantités de chocolat règlent couleur, noix, cacao et douceur selon la branche.",
          "Le malt brun historique n'est pas obligatoire dans toute bière moderne portant le mot Brown."
        ],
        "houblons": [
          "Houblons britanniques discrets dans les versions anglaises ; houblons américains plus présents dans les versions US."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique ou américaine selon le sous-style."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Le pH compte davantage qu'une supposée « eau brune » : alcalinité et sels s'ajustent à la charge de malts foncés et au niveau de houblon.",
        "empatage": "La branche londonienne préserve davantage de rondeur ; les versions nordiques ou américaines peuvent viser une atténuation plus nette.",
        "ebullitionEtHoublonnage": "Amertume très retenue dans London Brown, modérée dans British Brown, franchement structurante dans American Brown.",
        "fermentation": "Esters britanniques possibles dans les branches anglaises ; profil plus net côté américain pour séparer malt sombre et houblon.",
        "maturation": "Conditionnement en cask ou en bouteille selon l'histoire du produit ; la famille n'impose pas de longue garde.",
        "profilRecherche": "Une identité de branche immédiatement perceptible derrière la robe brune : douce et embouteillée, sèche et fruitée, ou houblonnée à l'américaine."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Brown British Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/19/19C/american-brown-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Brown Ale / American-Style Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "American Homebrewers Association",
          "edition": "2017",
          "reference": "London Brown Ale — Mann's 1902 and the bottled London tradition",
          "type": "histoire_de_style",
          "url": "https://homebrewersassociation.org/zymurgy-article/london-brown-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Heineken UK",
          "edition": null,
          "reference": "Newcastle Brown Ale — product history",
          "type": "source_producteur",
          "url": "https://www.heineken.co.uk/newcastlebrown",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": "2011",
          "reference": "Why there's no such beer as English brown ale",
          "type": "recherche_historique_specialisee",
          "url": "https://zythophile.wordpress.com/2011/03/31/why-theres-no-such-beer-as-english-brown-ale/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "amber-ale",
      "nom": "Amber Ale",
      "collectionId": 7,
      "nature": "F",
      "parentPrincipalId": "ale",
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
        "details": "Fermentation ale moderne, nette à modérément fruitée selon la tradition revendiquée ; la couleur n’impose aucune souche unique."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "Amber Ale nomme moins une patrie qu’une zone de rencontre : robe cuivrée, saveurs de céréale toastée ou de sucre cuit, amertume capable de répondre sans transformer la pinte en IPA. Le mouvement craft américain a donné à cette zone une identité commerciale ; ailleurs, « amber » reste souvent un adjectif. La couleur ouvre la porte, l’équilibre malt-houblon donne l’adresse.",
      "histoireEtOrigines": `Des ales ambrées existaient évidemment avant les microbrasseries : la couleur n'a pas attendu 1980 pour apparaître dans un verre. La catégorie Amber Ale, en revanche, est largement une construction récente. Elle prend forme lorsque le mouvement craft américain cherche un vocabulaire lisible entre Pale Ale et Brown Ale. Le malt crystal apporte couleur cuivrée, rondeur et saveurs de sucre cuit ; les nouveaux houblons américains donnent à l'ensemble une finale plus parfumée que celle de nombreuses ales britanniques.

Les brasseries n'ont pas suivi un manifeste commun. Certaines Amber Ales servent de porte d'entrée maltée à une gamme craft ; d'autres ressemblent à des Pale Ales plus colorées ; la côte Ouest produit bientôt des versions assez houblonnées pour que « red », « amber » et même « red IPA » se chevauchent. Le BJCP décrit ainsi l'American Amber comme une cousine moderne de l'American Pale Ale, tandis que la Brewers Association réunit Amber et Red dans une même catégorie de concours.

Le succès commercial a ensuite internationalisé le mot. « Amber Ale » peut désormais désigner une interprétation locale, une étiquette de couleur ou le sous-style américain précis. Cette fiche conserve donc la fonction d'un carrefour : elle explique comment une bande du nuancier est devenue une promesse d'équilibre, puis laisse l'American Amber/Red raconter la branche issue des brewpubs des années 1980.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie moderne de couleur et d'équilibre, dont l'American Amber/Red est la branche la mieux codifiée.",
        "maltsEtCereales": [
          "Malt pale fermentescible ; crystal/caramel pour la teinte cuivrée et la rondeur, avec une main assez légère pour ne pas figer la finale.",
          "De petits apports toastés ou biscuités peuvent donner du relief sans conduire vers Brown Ale."
        ],
        "houblons": [
          "Houblons variables : anglais discrets, américains ou New World plus expressifs selon la version."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale adaptée à la tradition visée, de fruitée à très neutre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate et chlorure accompagnent le choix éditorial de la bière — finale plus vive ou texture plus ronde — sans remplacer le travail d'atténuation.",
        "empatage": "Un moût suffisamment fermentescible évite que malt crystal et couleur soient traduits en sucrosité pesante.",
        "ebullitionEtHoublonnage": "Amertume moyenne et houblonnage tardif variable ; le houblon doit être assez présent pour répondre au malt dans la branche américaine.",
        "fermentation": "Une souche ale nette rend l'axe malt-houblon lisible ; des esters modérés restent possibles dans les interprétations britanniques.",
        "maturation": "Garde courte, puis service frais afin de préserver les houblons lorsqu'ils participent à l'identité.",
        "profilRecherche": "Une ale cuivrée où texture, atténuation et amertume construisent un équilibre reconnaissable au-delà du simple code couleur."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Amber Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/19/19A/american-amber-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Amber/Red Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2022",
          "reference": "Craft Historical Data — growth of American craft brewing since 1971",
          "type": "donnees_professionnelles",
          "url": "https://cdn.brewersassociation.org/wp-content/uploads/2022/07/05094132/Brewers_Association_Data_2022.xlsx",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "red-ale",
      "nom": "Red Ale",
      "collectionId": 7,
      "nature": "F",
      "parentPrincipalId": "ale",
      "aliases": [],
      "paysOrigine": [
        "Irlande",
        "États-Unis",
        "International"
      ],
      "origine": {
        "libelle": "Irlande et mouvement craft international",
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
        "details": "Fermentation propre à légèrement fruitée ; l’atténuation empêche malts colorants et crystal de finir en sirop rouge."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "Red Ale est une couleur devenue argument : rousse douce dans certaines interprétations irlandaises, ambrée et houblonnée dans les brasseries américaines, dense sous les noms Double ou Imperial. Une pointe de grain sombre peut rougir la robe sans donner de brûlé. Le mot rapproche ces bières sur l’étiquette ; leur histoire, elle, refuse obstinément de poser pour la photo de famille.",
      "histoireEtOrigines": `Le rouge paraît précis jusqu'au moment où l'on place deux verres sous la même lumière. Une bière cuivrée profonde, un malt crystal rougeâtre et une petite dose de grain torréfié peuvent tous conduire au mot red, sans produire le même goût. Le terme a donc prospéré comme signal visuel et commercial avant de devenir une catégorie stable.

En Irlande, l'histoire brassicole de Kilkenny et de Smithwick's est ancienne, mais l'expression « Irish Red Ale » au sens d'un style universel est bien plus récente. La bière pression de Smithwick's prend son essor dans les années 1960 ; le vocabulaire de la rousse irlandaise est aussi façonné hors d'Irlande par George Killian's Bière Rousse, créée en 1975 par Pelforth, puis par ses adaptations internationales. Une tradition réelle de production ne suffit donc pas à faire remonter intacte une catégorie contemporaine jusqu'au XVIIIe siècle.

Aux États-Unis, red fonctionne d'abord comme voisin ou synonyme d'amber dans le mouvement craft. Les houblons américains déplacent ensuite certaines versions vers Red IPA, Double Red ou Imperial Red. Ce sont des bifurcations de recette et de marché, non les degrés d'une ancienne échelle irlandaise.

La famille réunit ainsi trois histoires : une identité irlandaise codifiée tardivement, une ale craft américaine d'équilibre et des variantes modernes d'intensification. L'image à retenir est le nuancier lui-même : le rouge indique où regarder, jamais tout ce qu'il faut comprendre.`,
      "chapitres": [
        {
          "titre": "Rougir une bière sans la brûler",
          "texte": `La couleur rouge peut être obtenue avec des malts crystal appropriés, une base ambrée ou une quantité minuscule de malt très foncé. Ce dernier absorbe beaucoup de lumière : quelques dixièmes ou pourcents de la mouture suffisent parfois à approfondir la robe. Au-delà, café et brûlé changent la famille sensorielle.

Les pigments et produits de cuisson formés pendant le maltage ne sont pas une molette unique appelée « Maillard ». Température, humidité, durée de touraillage ou de torréfaction et composition du grain fabriquent des ensembles différents de couleur et d'arômes. Le rouge est un résultat mesuré, pas une saveur en soi.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Red Ale rassemble des identités irlandaises et américaines récentes autour d'un signal de couleur, non d'une origine commune.",
        "maltsEtCereales": [
          "Base pale ; crystal/caramel ou malts ambrés pour la teinte et la texture.",
          "Une très petite quantité de grain foncé peut approfondir le rouge, à condition de ne pas imposer café ou cendre."
        ],
        "houblons": [
          "De très discret dans l'Irish Red à puissant dans les interprétations américaines."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale irlandaise, britannique ou américaine selon le style sous-jacent."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Réglée selon la branche : minéralité modérée pour l'Irish Red, sulfate plus présent possible dans une version américaine houblonnée.",
        "empatage": "La fermentescibilité compense les dextrines et la douceur des malts crystal ; les variantes fortes demandent encore plus de vigilance.",
        "ebullitionEtHoublonnage": "Houblonnage discret dans l'Irish Red, équilibré dans l'American Amber/Red, tardif et massif dans les dérivés Double ou Imperial.",
        "fermentation": "Une fermentation nette à légèrement fruitée laisse la couleur être accompagnée par un profil réel plutôt que par une sucrosité de façade.",
        "maturation": "Courte pour les versions de pub ou de fraîcheur houblonnée ; plus longue seulement lorsque force et alcool réclament une intégration.",
        "profilRecherche": "Une robe rouge lisible au service d'une branche clairement identifiée — irlandaise, américaine équilibrée ou américaine intensifiée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Irish Red Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/15/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Amber Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/19/19A/american-amber-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Amber/Red Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewery History Society",
          "edition": "2022",
          "reference": "The story of George Killian's — Bière Rousse, Pelforth and the Irish claim",
          "type": "recherche_historique",
          "url": "https://breweryhistory.com/journal/archive/187/Killian.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Kilkenny Archaeological Society",
          "edition": "1989",
          "reference": "A Brief History of the Brewing Industry in Kilkenny",
          "type": "histoire_locale",
          "url": "https://kilkennyarchaeologicalsociety.ie/wp-content/uploads/2022/02/OKR1989-583-T-B-Halpin-A-Brief-History-of-the-Brewing-Industry-in-Kilkenny.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Smithwick's Experience",
          "edition": null,
          "reference": "Smithwick's brewing history and surviving ledgers",
          "type": "source_producteur_historique",
          "url": "https://www.smithwicksexperience.com/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Yin et al. — Comprehensive Reviews in Food Science and Food Safety",
          "edition": "2022",
          "reference": "Formation and sensory contribution of aroma compounds in malt",
          "type": "publication_scientifique",
          "url": "https://ift.onlinelibrary.wiley.com/doi/10.1111/1541-4337.12806",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "strong-ale",
      "nom": "Strong Ale",
      "collectionId": 7,
      "nature": "F",
      "parentPrincipalId": "ale",
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
        "details": "Fermentation ale à haute densité : ensemencement, oxygène, nutriments et température conditionnent l’atténuation et limitent les alcools solvants."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "Strong Ale est la grande salle des ales fortes : Old Ale vieillie, Wee Heavy écossaise, Barley Wine de garde ou création américaine trop maltée pour l’IPA et trop vive pour le fauteuil club. L’alcool augmente la chaleur et le défi fermentaire ; il n’autorise ni le sirop ni le dissolvant. Ici, « strong » mesure une contrainte avant de raconter une filiation.",
      "histoireEtOrigines": `Pendant des siècles, strong n'a pas eu besoin de majuscule : c'était un adjectif utile pour distinguer, dans la gamme d'une brasserie, les moûts les plus denses et les bières les plus chères. Les marques X, XX ou XXX, les prix par baril et les noms Stock, Old, Burton ou October Ale ont chacun classé la force selon leur époque. Aucune administration n'a remis un acte de naissance à « la Strong Ale ».

La puissance avait pourtant des conséquences concrètes. Plus de malt mobilisait davantage de capital ; une fermentation à haute densité réclamait une levure saine ; une garde longue immobilisait fûts et espace. En échange, l'alcool et le houblon permettaient de construire des bières de saison, de prestige ou de conservation. La Grande-Bretagne a produit plusieurs lignées de ce monde, parmi lesquelles Old Ale, Burton Ale, Scotch Ale et Barley Wine se recouvrent parfois tout en gardant des trajectoires distinctes.

À la fin du XXe siècle, le mouvement craft américain transforme aussi strong en zone de classement. Des bières intensément maltées et houblonnées se logent entre Double IPA, Red IPA et American Barleywine. Le BJCP nomme explicitement American Strong Ale ce regroupement de profil plutôt qu'un style historique ; la Brewers Association distribue ces produits entre plusieurs catégories de concours.

La famille sert donc de plan de salle. Les enfants apportent leur propre moteur — garde, ville, marché ou houblon — tandis que le parent explique le problème commun : faire fermenter beaucoup de sucre, équilibrer l'alcool et décider si le temps doit préserver, assouplir ou transformer la bière.`,
      "chapitres": [
        {
          "titre": "Plus de malt, plus de travail pour la levure",
          "texte": `Un moût très dense exerce une pression osmotique avant même que l'éthanol ne s'accumule. Au fil de la fermentation, alcool, manque d'oxygène et nutriments limitants fragilisent encore les cellules. Un grand ensemencement viable, une oxygénation adaptée au cadre de production, des nutriments suffisants et une température pilotée deviennent des outils de goût : ils réduisent les arrêts de fermentation et les alcools supérieurs agressifs.

La richesse finale ne dépend donc pas seulement de la quantité de malt. Fermentescibilité du moût, santé de la levure et atténuation décident si la force donnera une chaleur intégrée ou une cuillère debout dans le verre — exploit de physique rarement recherché par le brasseur.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille de contrainte fermentaire et de classement : ses branches historiques et modernes ne partagent pas une recette unique.",
        "maltsEtCereales": [
          "Base pale riche ; malts crystal, toastés ou foncés en proportions variables selon la tradition."
        ],
        "houblons": [
          "Houblons anglais retenus ou houblons américains plus intenses selon le sous-style."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale robuste, tolérant une densité et un degré alcoolique élevés."
        ],
        "ingredientsComplementaires": [
          "Sucres de brassage possibles dans les traditions britanniques pour contrôler le corps."
        ],
        "profilEau": "Calcium et nutriments soutiennent brassage et fermentation ; sulfate et chlorure suivent ensuite l'équilibre propre à la branche.",
        "empatage": "Une forte charge de malt exige un moût assez fermentescible pour éviter la lourdeur. Les sucres simples peuvent alléger certaines recettes britanniques.",
        "ebullitionEtHoublonnage": "Une longue ébullition concentre certains brassins mais augmente aussi couleur et charge thermique ; le houblon compense densité et durée de garde selon le style.",
        "fermentation": "Pression osmotique puis éthanol éprouvent la levure : ensemencement, oxygénation, nutriments et maîtrise thermique déterminent atténuation et propreté.",
        "maturation": "Le repos intègre alcool et fermentation ; une garde prolongée n'est choisie que si la branche accepte l'évolution du houblon et de l'oxydation.",
        "profilRecherche": "Une force structurée : finale encore mobile, alcool intégré et intensité maltée ou houblonnée cohérente avec le sous-style."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Strong British Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/22B/american-strong-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Puligundla et al. — Food and Bioproducts Processing",
          "edition": "2020",
          "reference": "Recent developments in high gravity beer-brewing",
          "type": "publication_scientifique",
          "url": "https://www.sciencedirect.com/science/article/abs/pii/S1466856420303453",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Heriot-Watt University",
          "edition": "2003",
          "reference": "Effects of osmotic pressure and ethanol on yeast viability and morphology",
          "type": "publication_scientifique",
          "url": "https://researchportal.hw.ac.uk/en/publications/the-effects-of-osmotic-pressure-and-ethanol-on-yeast-viability-an",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Wyeast Laboratories",
          "edition": null,
          "reference": "Professional high-gravity brewing",
          "type": "ressource_technique_professionnelle",
          "url": "https://wyeastlab.com/resource/professional-high-gravity-brewing/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "barley-wine",
      "nom": "Barley Wine",
      "collectionId": 7,
      "nature": "F",
      "parentPrincipalId": "strong-ale",
      "aliases": [
        "Barleywine"
      ],
      "paysOrigine": [
        "Royaume-Uni",
        "États-Unis"
      ],
      "origine": {
        "libelle": "Royaume-Uni puis États-Unis",
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
        "details": "Moût très dense confié à une levure ale abondante ; chaleur et nutrition sont maîtrisées avant une maturation qui polit alcool et esters."
      },
      "service": {
        "temperatureMin": null,
        "temperatureMax": null,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Verre adapté au sous-style"
        ]
      },
      "description": "Le Barley Wine est bien une bière : l’orge fournit le moût, la levure construit une force comparable à celle du vin, et le temps peut ajouter cuir, marmelade ou fruits confits — comme il peut simplement fatiguer la bouteille. L’école britannique privilégie malt et maturation ; l’américaine ajoute une architecture de houblon. Petite quantité servie, grand dossier historique.",
      "histoireEtOrigines": `Le nom arrive tard dans une histoire déjà ancienne. Les brasseurs britanniques produisaient depuis longtemps October Ales, Stock Ales et fortes Burton Ales capables de mûrir en fût ou en bouteille. Au XIXe siècle, Bass No. 1 appartient à ce monde de bières puissantes de Burton-upon-Trent. L'expression barley wine offre ensuite une comparaison commerciale immédiatement compréhensible : alcool et occasion de dégustation proches du vin, matière première toujours céréalière.

La date exacte mérite davantage de prudence que la légende habituelle. Le BJCP retient 1872 pour Bass No. 1. Des recherches dans la presse et la littérature médicale trouvent cependant l'expression « barley wine » associée à Bass autour de 1870, tandis que les publicités de Bass continuent longtemps à parler de strong ale ou de No. 1. Les documents disponibles ne permettent donc pas d'identifier avec certitude le jour où Bass aurait officiellement baptisé le style. Le terme émerge autour de 1870 ; le premier carton d'invitation reste introuvable.

Au XXe siècle, les bouteilles fortes survivent comme produits d'hiver, de cadeau ou de prestige. Bass No. 1 et, à partir de 1951, Gold Label de Tennant participent à fixer l'image britannique : malt profond, alcool, fruité de fermentation et évolution en cave. La garde n'est pourtant pas une garantie de noblesse. L'oxygène peut former des notes de fruits secs ou de vin doux appréciées dans certaines bouteilles, mais aussi carton, papier et perte d'arôme ; fermeture, température et recette décident du verdict.

Les États-Unis ouvrent une seconde grande branche. Anchor présente Old Foghorn en 1975, puis Sierra Nevada lance Bigfoot en 1983. Les houblons américains, plus abondants et plus expressifs, donnent une jeunesse amère et résineuse qui s'assouplit avec le temps. Le parent Barley Wine conserve ce voyage commun ; les fiches britannique et américaine racontent ensuite comment chaque rive emploie malt, houblon et cave.`,
      "chapitres": [
        {
          "titre": "Bass No. 1 et le premier nom introuvable",
          "texte": `Bass No. 1 est indispensable à l'histoire, mais « première Barley Wine en 1872 » condense plusieurs choses : une bière plus ancienne, un terme qui circule dans des textes autour de 1870 et une adoption commerciale dont les traces ne coïncident pas parfaitement. Les sources spécialisées ne datent pas toutes le même événement parce qu'elles ne posent pas exactement la même question.

La formulation la plus solide est donc modeste : Bass No. 1 a joué un rôle fondateur dans l'association entre forte ale de Burton et barley wine ; l'expression apparaît publiquement vers 1870, sans preuve définitive d'un baptême unique en 1872.`
        },
        {
          "titre": "Vieillir n'est pas simplement stocker",
          "texte": `La maturation poursuit un objectif : intégrer alcool, fermentation et amertume dans des conditions choisies. Le stockage décrit seulement le fait que la bouteille attend. Pendant cette attente, réactions d'oxydation, transformations d'esters et perte des composés de houblon changent le profil ; elles ne suivent pas une pente régulière vers le sublime.

Une Barley Wine conçue pour la cave, correctement conditionnée et gardée au frais peut gagner en cohésion. La même bière chaude, mal fermée ou déjà oxydée vieillira surtout plus vite. Le calendrier ne possède pas de palais.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Deux grandes écoles modernes partagent la haute densité et la capacité de garde : britannique centrée sur malt et évolution, américaine fortement structurée par le houblon.",
        "maltsEtCereales": [
          "Grande majorité de malt pale de qualité ; la profondeur peut venir d'une longue ébullition et de la maturation plutôt que d'une accumulation de malts spéciaux.",
          "Crystal en quantité contrôlée et malts sombres limités afin de préserver atténuation et lisibilité."
        ],
        "houblons": [
          "Houblons anglais pour la branche britannique ; houblons américains/New World plus intenses pour la branche US."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale à forte tolérance alcoolique et bonne atténuation."
        ],
        "ingredientsComplementaires": [
          "Sucres fermentescibles possibles dans certaines recettes britanniques pour limiter le corps."
        ],
        "profilEau": "Calcium suffisant pour l'empâtage et la levure ; sulfate plus ferme dans l'école américaine, sans durcir un alcool déjà puissant.",
        "empatage": "Profil fermentescible malgré la densité, parfois complété par du sucre dans des recettes britanniques, pour conserver une finale de bière plutôt que de sirop.",
        "ebullitionEtHoublonnage": "Ébullition souvent longue pour concentrer le moût ; amertume élevée en valeur absolue. L'école américaine protège en plus une charge aromatique destinée à s'estomper avec l'âge.",
        "fermentation": "Grand ensemencement, oxygénation adaptée, nutriments et température maîtrisée ; la fermentation peut repartir lentement après sa phase la plus active.",
        "maturation": "Plusieurs mois avant commercialisation possibles. Une garde de plusieurs années transforme la bière, favorablement ou non selon oxygène, température, fermeture et conception.",
        "profilRecherche": "Une ale de dégustation concentrée mais fermentée jusqu'à l'équilibre, dont la jeunesse et l'âge ont chacun un propos plutôt qu'une hiérarchie automatique."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "English Barleywine",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/17D/english-barleywine/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Barleywine",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/strong-american-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Barley Wine Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": "2010",
          "reference": "What is the difference between barley wine and old ale?",
          "type": "recherche_historique_specialisee",
          "url": "https://zythophile.wordpress.com/2010/09/14/so-what-is-the-difference-between-barley-wine-and-old-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Ron Pattinson — Shut Up About Barclay Perkins",
          "edition": "2013",
          "reference": "The Lancet and Bass's Barley Wine — 1870 documentary evidence",
          "type": "recherche_sur_archives",
          "url": "https://barclayperkins.blogspot.com/2013/11/the-lancet-and-basss-barley-wine.html",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "National Center for Biotechnology Information",
          "edition": "2019",
          "reference": "Bass advertising and the marketing of barley wine",
          "type": "ouvrage_universitaire",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK524984/?report=printable",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Vanderhaegen et al. — Food Chemistry",
          "edition": "2006",
          "reference": "The chemistry of beer aging — a critical review",
          "type": "publication_scientifique",
          "url": "https://talcottlab.tamu.edu/wp-content/uploads/sites/108/2020/03/Review-Beer-Ageing.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Bigfoot Barleywine-Style Ale — introduced in 1983",
          "type": "source_producteur",
          "url": "https://sierranevada.com/brews/bigfoot-barleywine-style-ale",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "english-pale-mild-ale",
      "nom": "English Pale Mild Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "mild-ale",
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
        "min": 10,
        "max": 25,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 10,
        "max": 24,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Levure britannique rapide et légèrement fruitée ; le grist pâle expose immédiatement diacétyle excessif, soufre ou sous-atténuation."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Nonic pint",
          "Dimple mug"
        ]
      },
      "description": "La Pale Mild est la photographie qui fait mentir le cliché : une Mild peut être dorée à ambrée, légère et centrée sur la céréale, avec miel discret, mie fraîche et fruit de levure. Le houblon garde le comptoir sans monter sur scène. Light Mild ou Pennine Mild selon les lieux, elle rappelle qu’un mot d’âge n’a jamais été un code Pantone.",
      "histoireEtOrigines": `Sa simple robe constitue une pièce d'archive. Lorsque mild qualifiait une ale jeune, aucune règle ne l'obligeait à être brune. Les gammes britanniques proposaient des Milds de couleurs et de forces diverses ; ce sont les transformations du XXe siècle qui ont soudé, dans l'imaginaire du pub, faible densité et teinte sombre.

La Pale Mild a survécu par poches plutôt que par grande dynastie nationale. CAMRA relève les noms Light Mild et, dans certaines régions, Pennine Mild. Maurice Gorham écrivait en 1949 que la light mild avait la couleur d'un bitter et se rencontrait rarement dans les pubs londoniens : la branche claire existait encore, mais le brun occupait déjà le portrait officiel.

Aujourd'hui, sa différence tient moins à la teinte qu'à l'usage du houblon. À force égale, un Bitter privilégie davantage amertume et arôme ; la Pale Mild laisse malt clair et fermentation construire une pinte souple. Sa rareté moderne lui donne un rôle disproportionné : elle prouve, verre en main, que la famille Mild s'est rétrécie au cours de l'histoire sans avoir toujours porté le même uniforme. Elle conserve ainsi une branche entière en une seule nuance.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale ou mild clair, éventuellement petite part de crystal très pâle ou sucre clair."
        ],
        "houblons": [
          "Houblons britanniques traditionnels à faible dose, principalement pour l'équilibre."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique assez propre, esters légers possibles."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Faible alcalinité adaptée au malt clair ; calcium modéré pour fermentation et clarification.",
        "empatage": "Une température moyenne à haute et un malt de base savoureux maintiennent la texture sans charger la recette de crystal.",
        "ebullitionEtHoublonnage": "Amertume basse, ajout tardif discret : la différence avec le Bitter se joue précisément dans ce volume baissé.",
        "fermentation": "Une souche britannique peut apporter poire ou pomme légère ; une bonne atténuation évite qu'une petite bière devienne molle.",
        "maturation": "Conditionnement court, souvent en cask, afin de conserver céréale fraîche et carbonatation douce.",
        "profilRecherche": "Une pinte claire de session où le malt parle avant le houblon, preuve sensorielle que Mild n'est pas synonyme de brune."
      },
      "sources": [
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "Mild, Pale",
          "type": "source_historique_et_style",
          "url": "https://learn.camra.org.uk/beer-styles/mild-pale",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Dark Mild — commentaire sur les versions pâles historiques",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Pale Mild Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": "2008",
          "reference": "What colour was mild?",
          "type": "recherche_historique_specialisee",
          "url": "https://zythophile.wordpress.com/2008/04/09/what-colour-was-mild/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "english-dark-mild-ale",
      "nom": "English Dark Mild Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "mild-ale",
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
        "min": 10,
        "max": 25,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 24,
        "max": 50,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Levure britannique conduite à température modérée ; le corps vient du grist et de l’empâtage, non d’une fermentation abandonnée."
      },
      "service": {
        "temperatureMin": 10,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Nonic pint",
          "Dimple mug"
        ]
      },
      "description": "La Dark Mild fait tenir un garde-manger dans une petite pinte : noix, cacao doux, sucre brun, céréale grillée et parfois prune, pour un alcool souvent voisin de 3 à 4 %. Sa robe sombre est une conquête du XXe siècle, pas l’acte de naissance de Mild. Le tour de force consiste à donner du relief sans emprunter au Porter son café ni sa masse.",
      "histoireEtOrigines": `Dans les registres du XIXe siècle, les X ales appelées mild sont d'abord classées par âge et par force. À partir des années 1880, certaines recettes s'assombrissent ; après la Première Guerre mondiale, couleur brune et faible densité se rejoignent assez durablement pour que « Mild » finisse, dans de nombreux pubs, par signifier Dark Mild sans autre précision.

Cette rencontre n'est pas un simple effet de malt. Les brasseurs ont travaillé avec malt crystal, brown ou chocolat, sucres invertis, adjuncts et parfois caramel de brasserie. À mesure que la densité tombait, ces outils maintenaient couleur et saveur dans une pinte moins alcoolisée. La difficulté technique changeait : produire moins d'alcool tout en laissant assez de matière pour que la bière ne s'efface pas entre la pompe et la table.

La Dark Mild devient l'une des grandes bières de débit du milieu du XXe siècle. Puis sa propre efficacité sociale la rend vulnérable : le Bitter gagne le comptoir, la lager capte de nouveaux consommateurs et les regroupements brassicoles réduisent les gammes régionales. CAMRA en fait une cause patrimoniale. Les exemples survivants ne reconstituent pas une Mild victorienne ; ils conservent cette solution du XXe siècle, sombre, légère et étonnamment bavarde à faible volume.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale ou mild britannique ; crystal ; petites quantités de chocolate, black ou brown malt selon la couleur."
        ],
        "houblons": [
          "Fuggles, Goldings ou autres houblons britanniques à faible intensité."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique favorisant une expression maltée et des esters modérés."
        ],
        "ingredientsComplementaires": [
          "Sucres invertis, maïs ou caramel de brasserie historiquement possibles."
        ],
        "profilEau": "Alcalinité seulement suffisante pour la petite charge de grains foncés ; un pH trop haut rendrait la finale terne.",
        "empatage": "Corps préservé par la température et le choix du malt, sans accumulation de dextrines qui contredirait la pinte de session.",
        "ebullitionEtHoublonnage": "Amertume de soutien et arôme de houblon presque en coulisses ; la perception dépend autant de l'atténuation que du nombre d'IBU.",
        "fermentation": "Esters modérés et atténuation régulière. Un soupçon de diacétyle peut exister dans certains exemples, jamais comme cache-misère.",
        "maturation": "Conditionnement court en cask, carbonatation basse et service de cave donnent du volume à une bière peu dense.",
        "profilRecherche": "Une petite ale sombre où plusieurs couches maltées restent distinctes, avec une finale nette et aucune torréfaction de Porter."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Dark Mild",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "Mild, 60/-",
          "type": "source_historique_et_style",
          "url": "https://learn.camra.org.uk/beer-styles/mild-60",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Mild Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": "2008",
          "reference": "What colour was mild? — chronology of darkening",
          "type": "recherche_historique_specialisee",
          "url": "https://zythophile.wordpress.com/2008/04/09/what-colour-was-mild/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "UK Parliament — Hansard",
          "edition": "1920",
          "reference": "Food Controller beer gravities and wartime regulation",
          "type": "archive_parlementaire",
          "url": "https://api.parliament.uk/historic-hansard/commons/1920/jul/06/clause-6-increased-excise-duty-on-beer/division_185",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "english-brown-ale",
      "nom": "English Brown Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "brown-ale",
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
        "min": 4.2,
        "max": 5.4,
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
        "min": 24,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation anglaise modérément fruitée et correctement atténuée, où la levure complète noisette et caramel sans les sucrer."
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
      "description": "L’English Brown Ale moderne regarde surtout vers le nord de l’Angleterre : force moyenne, noisette, toffee léger, fruit de levure et finale plus sèche que la London Brown. Newcastle Brown Ale lui a donné une silhouette exportable, sans résumer toutes les brunes du pays. Entre Mild et Porter sur le nuancier, elle suit sa propre route dans l’histoire.",
      "histoireEtOrigines": `La carte se précise au nord. Lorsque Newcastle Brown Ale paraît en 1927, la bouteille conçue par le brasseur Jim Porter et le chimiste Archie Jones associe une ale ambrée-brune, fruitée et relativement sèche à une ville industrielle. Son succès national puis international fournit au XXe siècle un repère puissant pour ce que les guides appelleront British Brown Ale.

Ce repère ne crée pas une recette anglaise universelle. Les brasseries ont vendu des brown ales de forces et de profils variés ; les archives montrent que la couleur ne permet pas de les aligner proprement entre Dark Mild et Porter. La catégorie moderne retient surtout les versions plus fortes et moins sucrées que la London Brown, avec malt de base, crystal, notes de noix et esters britanniques.

L'embouteillage compte autant que la latitude. Une marque comme Newcastle voyage en bouteille puis en canette et transforme une spécialité régionale en emblème. Le service, la carbonatation et la stabilité attendue diffèrent alors de la petite Mild en cask. L'English Brown Ale est ainsi moins un fauteuil ancestral qu'un produit du XXe siècle ayant très bien appris à prendre le train.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale britannique ; crystal/caramel ; brown ou amber malt possibles ; chocolat très léger pour profondeur."
        ],
        "houblons": [
          "Houblons anglais floraux, terreux ou herbacés, modestes."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique à esters bas à modérés."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Minéralité modérée et pH adapté aux malts colorés ; aucune dureté nécessaire pour prouver l'origine nordique.",
        "empatage": "Fermentescibilité moyenne : assez de corps pour porter noix et toffee, assez d'atténuation pour distinguer la branche londonienne.",
        "ebullitionEtHoublonnage": "Amertume moyenne, houblons anglais discrets mais perceptibles dans la finale.",
        "fermentation": "Une souche britannique apporte des esters fruités retenus et une atténuation plus nette que dans London Brown.",
        "maturation": "Courte à modérée ; bouteille, canette ou cask changent la carbonatation sans exiger de longue garde.",
        "profilRecherche": "Une brune anglaise souple et fruitée, plus sèche et plus ferme que London Brown, sans café de Porter."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "British Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/13b-british-brown-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Heineken UK",
          "edition": null,
          "reference": "Newcastle Brown Ale — Jim Porter and the 1927 launch",
          "type": "source_producteur",
          "url": "https://www.heineken.co.uk/newcastlebrown",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Oxford Companion to Beer",
          "edition": "2011",
          "reference": "Newcastle Brown Ale",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/3p7imypYfG",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": "2011",
          "reference": "Regional divergence within English brown ales",
          "type": "recherche_historique_specialisee",
          "url": "https://zythophile.wordpress.com/2011/03/31/why-theres-no-such-beer-as-english-brown-ale/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "london-brown-ale",
      "nom": "London Brown Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "brown-ale",
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
        "min": 2.8,
        "max": 4,
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
        "min": 40,
        "max": 70,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Levure anglaise conservant corps et esters mesurés ; une atténuation plus ronde sert le profil doux de la Brown londonienne embouteillée."
      },
      "service": {
        "temperatureMin": 10,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Nonic pint",
          "Dimple mug"
        ]
      },
      "description": "Née pour la bouteille londonienne, la London Brown Ale assemble faible alcool, robe presque noire et douceur franche : toffee, sucre brun, raisin léger et mousse crémeuse, avec juste assez d’amertume pour remettre la cuillère au tiroir. Mann’s l’a lancée en 1902 ; son étrangeté moderne vient de cette invention industrielle, pas d’une taverne médiévale opportunément mal éclairée.",
      "histoireEtOrigines": `En 1902, Thomas Wells Thorpe, directeur de Mann, Crossman & Paulin, lance une Brown Ale à l'Albion Brewery de Whitechapel. Le produit est conçu pour la bouteille à une époque où ce conditionnement ouvre de nouveaux circuits de vente. Son profil doux se distingue des ales pression et la publicité en fait bientôt une spécialité reconnaissable.

La Première Guerre mondiale puis la fiscalité et les baisses de densité transforment la formule. D'environ 5 % vol. avant-guerre selon les reconstructions documentaires, Mann's descend vers la petite bière brune connue au XXe siècle. La douceur demeure alors que l'alcool recule : forte proportion de malts crystal ou sucres, faible atténuation et, dans certaines fabrications stabilisées, édulcoration après fermentation deviennent des moyens possibles de tenir ce paradoxe.

Mann's atteint une grande diffusion au milieu du siècle, puis le style décline avec la concentration industrielle et le changement des goûts. L'Albion Brewery ferme en 1979. Les recréations et catégories historiques actuelles décrivent donc une branche très spécifique : sombre, embouteillée, peu amère et franchement douce. La London Brown n'est pas la grand-mère de toutes les Brown Ales ; c'est une invention de produit dont l'acte de naissance porte une adresse.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale britannique ; forte proportion de malts caramel/crystal ; petites quantités de black et parfois wheat malt."
        ],
        "houblons": [
          "Houblons anglais à faible niveau, avec 15-20 IBU typiques dans le cadre BJCP."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique relativement peu atténuative pour préserver la douceur."
        ],
        "ingredientsComplementaires": [
          "Édulcoration post-fermentation possible dans certaines versions pasteurisées ; lactose ou sucre selon méthode."
        ],
        "profilEau": "Alcalinité adaptée à la mouture sombre et pH final net ; l'eau londonienne historique n'est pas une ordonnance universelle.",
        "empatage": "Faible fermentescibilité et choix de crystal construisent la douceur, mais le faible degré impose de préserver une texture non aqueuse.",
        "ebullitionEtHoublonnage": "Houblonnage minimal, sans signature tardive : l'amertume empêche la douceur de devenir uniforme.",
        "fermentation": "Atténuation contenue ; toute édulcoration post-fermentation exige pasteurisation, filtration stérile ou autre stabilisation fiable.",
        "maturation": "Pensée pour la bouteille plutôt que pour une longue cave ; carbonatation et stabilité sont des composantes du style.",
        "profilRecherche": "Une petite ale très sombre et douce, dont l'équilibre de bouteille reste crémeux et brassicole plutôt que sirupeux."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: London Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "American Homebrewers Association",
          "edition": "2017",
          "reference": "London Brown Ale — Thomas Wells Thorpe, Mann's and the 1902 launch",
          "type": "histoire_de_style",
          "url": "https://homebrewersassociation.org/zymurgy-article/london-brown-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewery History Society",
          "edition": null,
          "reference": "Mann, Crossman & Paulin Ltd — Albion Brewery records",
          "type": "archive_industrielle",
          "url": "https://breweryhistory.com/wiki/index.php/Mann%2C_Crossman_%26_Paulin_Ltd",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Martyn Cornell — Zythophile",
          "edition": "2011",
          "reference": "Mann's gravities and the London brown branch",
          "type": "recherche_historique_specialisee",
          "url": "https://zythophile.wordpress.com/2011/03/31/why-theres-no-such-beer-as-english-brown-ale/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "irish-red-ale",
      "nom": "Irish Red Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "red-ale",
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
        "min": 3.8,
        "max": 5,
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
        "min": 18,
        "max": 36,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation nette aux esters discrets, afin que le jeu entre malt roux, légère torréfaction et finale sèche reste lisible."
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
      "description": "L’Irish Red Ale moderne est une pinte cuivrée, souple et peu démonstrative : céréale toastée, toffee léger, fruit discret, amertume mesurée et parfois un trait de grain rôti qui sèche la sortie. Kilkenny lui donne une histoire de brasserie ancienne ; la catégorie « Irish Red », elle, s’est fixée beaucoup plus tard. Le patrimoine est réel, la ligne directe vers 1710 beaucoup moins.",
      "histoireEtOrigines": `Kilkenny fournit le lieu, mais pas une recette figée. Des documents conservés par Smithwick's font remonter l'activité de John Smithwick à 1710, dans une ville déjà brassicole. La maison traverse changements de propriété, concurrence du porter et industrialisation ; cette continuité raconte une entreprise et une culture locale, non trois siècles d'une même « Irish Red Ale ».

Le produit qui structure la branche moderne apparaît après le rapprochement avec Guinness. L'histoire locale publiée par la Kilkenny Archaeological Society date de 1966 le lancement de la keg ale de Smithwick's, au début d'une forte expansion commerciale. Pression sous gaz, régularité industrielle et export donnent à l'ale ambrée de Kilkenny une identité beaucoup plus visible que les catégories antérieures du marché irlandais.

Le nom rouge se renforce ensuite à l'international. George Killian's Bière Rousse, créée par Pelforth en France en 1975 à partir d'un récit familial irlandais, puis les marchés nord-américains contribuent à faire de « Irish Red » un style reconnaissable. Les guides contemporains le décrivent comme proche du Bitter anglais, moins houblonné, avec une finale parfois asséchée par une faible dose de grain torréfié.

La fiche raconte donc une codification, pas une résurrection. La brasserie de Kilkenny est ancienne ; le service keg de 1966 et le marketing de la rousse sont modernes ; la recette de concours est plus récente encore. Ces couches se superposent dans la pinte sans avoir été brassées le même jour.`,
      "chapitres": [
        {
          "titre": "Un soupçon de rôti, pas une stout en rouge",
          "texte": `Une petite quantité d'orge torréfiée ou de malt très foncé peut approfondir la robe et donner une impression sèche en finale. À ce dosage, café et brûlé restent sous le seuil dominant. La base pale, un crystal mesuré et l'atténuation produisent l'essentiel du profil.

Cette touche n'est ni obligatoire dans toute ale irlandaise ni la preuve d'une recette ancestrale. C'est un outil de formulation devenu caractéristique de la catégorie moderne.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale ; malt caramel en quantité mesurée ; très petite proportion d'orge torréfiée ou black malt pour couleur et sécheresse."
        ],
        "houblons": [
          "Houblons anglais ou irlandais de tradition britannique, terreux/floraux, peu aromatiques."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale irlandaise ou britannique assez propre, esters faibles."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Minéralité modérée ; sulfate suffisant pour une finale nette, sans sécher une bière déjà légère.",
        "empatage": "Fermentescibilité moyenne à élevée pour empêcher le crystal de rendre la pinte collante.",
        "ebullitionEtHoublonnage": "Amertume mesurée et houblon tardif très discret ; l'équilibre vise le débit plutôt que le parfum.",
        "fermentation": "Souche propre à légèrement fruitée. Un diacétyle très bas peut être toléré par certains guides, jamais recherché comme signature obligatoire.",
        "maturation": "Courte, avec conditionnement cask, keg ou bouteille selon le produit moderne.",
        "profilRecherche": "Une ale rouge-cuivrée sèche et souple, où le grain rôti signe la finale d'un trait fin au lieu de peindre tout le verre."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Irish Red Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/15/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Irish-Style Red Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Kilkenny Archaeological Society",
          "edition": "1989",
          "reference": "A Brief History of the Brewing Industry in Kilkenny",
          "type": "histoire_locale",
          "url": "https://kilkennyarchaeologicalsociety.ie/wp-content/uploads/2022/02/OKR1989-583-T-B-Halpin-A-Brief-History-of-the-Brewing-Industry-in-Kilkenny.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Smithwick's Experience",
          "edition": null,
          "reference": "Smithwick's and Kilkenny brewing history",
          "type": "source_producteur_historique",
          "url": "https://www.smithwicksexperience.com/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewery History Society",
          "edition": "2022",
          "reference": "The story of George Killian's and the modern red-ale identity",
          "type": "recherche_historique",
          "url": "https://breweryhistory.com/journal/archive/187/Killian.pdf",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "old-ale",
      "nom": "Old Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "strong-ale",
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
        "min": 5.5,
        "max": 9,
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
        "min": 20,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation ale primaire puis maturation de stock ; Brettanomyces, acidité et bois sont des possibilités documentées, jamais des automatismes."
      },
      "service": {
        "temperatureMin": 10,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Snifter",
          "Nonic pint"
        ]
      },
      "description": "Old Ale décrit ce que le temps a fait autant que ce que la cuve a produit : une ale britannique gardée, parfois assemblée à une jeune, où prune, noix, mélasse, cuir ou légère vinosité peuvent remplacer l’éclat initial du houblon. « Old » ne signifie ni très forte à coup sûr ni volontairement éventée. La cave travaille ; elle n’obtient pas l’immunité diplomatique.",
      "histoireEtOrigines": `Le geste fondateur est un déplacement. Une partie de la bière quitte la rotation rapide, entre dans un grand fût ou un vat et attend. Dans le vocabulaire britannique, mild désigne longtemps la jeune bière ; stock, stale ou old signalent une maturation. Le brasseur ou le publican peut servir la bière âgée seule, ou l'assembler avec une jeune plus douce afin de régler acidité, fruité et vivacité.

Le bois historique n'était pas toujours neutre au sens microbiologique moderne. Des travaux sur des stock ales et des textes de brasserie associent Brettanomyces à certaines maturations longues, où la levure consomme lentement des composés résiduels et produit un caractère sec, cuiré ou fruité. Cette réalité ne transforme pas toute Old Ale en bière sauvage : brasserie, époque, état des fûts et stratégie d'assemblage variaient considérablement.

L'industrialisation remplace nombre de grands contenants et privilégie la stabilité. « Old Ale » survit alors comme nom de bières fortes, hivernales ou simplement traditionnelles, avec des degrés très différents. Certaines sont mises en vente relativement jeunes ; d'autres mûrissent en bouteille. Le guide moderne conserve cette amplitude, des exemples proches de 4,5 % aux fortes ales de 8 % et davantage.

La leçon de la cave tient dans les verbes. Garder vise une évolution ; stocker constate une attente ; oxyder décrit une famille de réactions ; assembler construit un goût. Notes de noix ou de vin doux peuvent être harmonieuses, tandis que carton, vinaigre ou solvant restent des défauts. L'âge apporte un dossier, jamais un certificat de bonne conduite.`,
      "chapitres": [
        {
          "titre": "Le fût de stock, réservoir et atelier",
          "texte": `Un stock ale pouvait immobiliser capital et volume pendant des mois. La récompense attendue était une bière transformée, parfois suffisamment tranchante pour être mélangée à une mild ale plus jeune. L'assemblage permettait au débitant ou à la brasserie de reproduire un équilibre malgré des lots vivants et des fûts variables.

Le modèle explique pourquoi Old Ale et Barley Wine se chevauchent sans se confondre. La seconde met d'abord l'accent sur la force ; la première sur l'état mûri. Une bière peut appartenir aux deux histoires, ce qui est moins une erreur de classement qu'une conséquence du réel.`
        },
        {
          "titre": "Brettanomyces : présence historique, option moderne",
          "texte": `Des analyses microbiologiques de stock ales britanniques contemporaines et des sources anciennes documentent un rôle possible de Brettanomyces dans la garde. Son métabolisme lent peut assécher et développer des arômes caractéristiques. Il exige aussi temps, contrôle et séparation sanitaire.

Une Old Ale moderne proprement fermentée avec Saccharomyces reste parfaitement légitime. Inoculer Brett pour « faire ancien » sans maîtriser le processus ne reconstitue pas une cave victorienne ; cela introduit surtout un micro-organisme très persévérant dans la brasserie.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale britannique ; crystal, amber ou brown malt ; petites quantités de malts foncés possibles."
        ],
        "houblons": [
          "Houblons anglais suffisamment présents au brassage pour soutenir la garde, mais leur expression diminue avec l'âge."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique ; certaines méthodes historiques peuvent laisser intervenir une microflore de garde."
        ],
        "ingredientsComplementaires": [
          "Sucres invertis, mélasse légère ou autres sucres de brasserie possibles selon la tradition."
        ],
        "profilEau": "Profil modéré : la garde concentre la perception de certains défauts, une minéralité brutale ne s'assagit pas par devoir.",
        "empatage": "Assez de fermentescibilité pour une longue évolution ; un moût trop dextrinique peut rester lourd même après des mois.",
        "ebullitionEtHoublonnage": "Houblonnage initial plus ferme que le verre mûr ne le suggère, car arômes et amertume évoluent pendant la garde.",
        "fermentation": "Fermentation primaire complète avant transfert. Brettanomyces ou bactéries n'interviennent que dans une méthode explicitement conçue et suivie.",
        "maturation": "Mois en cuve, bois ou bouteille ; contrôle de l'oxygène, dégustation et éventuel assemblage comptent davantage qu'un âge affiché.",
        "profilRecherche": "Une ale mûre dont sécheresse, fruit, légère vinosité et chaleur forment un ensemble intentionnel, sans confondre complexité et altération."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Old Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Old Ale / Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": "2022",
          "reference": "Lost, Stock & Barrel — historical stock ales and Brettanomyces",
          "type": "presse_specialisee",
          "url": "https://www.beerandbrewing.com/lost-stock-and-barrel-the-forgotten-funk-of-old-ales",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Thomas et al. — Journal of the Institute of Brewing",
          "edition": "2021",
          "reference": "Preliminary microbiological and chemical analysis of two historical stock ales",
          "type": "publication_scientifique",
          "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/jib.641",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Vanderhaegen et al. — Food Chemistry",
          "edition": "2006",
          "reference": "The chemistry of beer aging — a critical review",
          "type": "publication_scientifique",
          "url": "https://talcottlab.tamu.edu/wp-content/uploads/sites/108/2020/03/Review-Beer-Ageing.pdf",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "british-barley-wine",
      "nom": "British Barley Wine",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "barley-wine",
      "aliases": [
        "English Barleywine"
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
        "min": 8,
        "max": 12,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 35,
        "max": 70,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 16,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Levure anglaise sur moût très dense, esters fruités admis ; la chaleur est contenue avant une garde assez longue pour fondre l’alcool."
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
      "description": "Le British Barley Wine concentre le brassin britannique en petite bouteille : malt pale devenu marmelade, toffee ou fruits confits par fermentation, ébullition et temps, alcool ample, houblon ferme à la jeunesse puis plus discret. Bass No. 1 représente la lignée sombre de Burton ; Gold Label, lancé en 1951, rappelle qu’une Barley Wine peut aussi porter une robe dorée.",
      "histoireEtOrigines": `Une bouteille de Ratcliff Ale brassée par Bass le 16 décembre 1869 a survécu jusqu'au XXIe siècle. Le brassin célébrait une naissance dans la famille Ratcliff et reprenait la forte No. 1 de Bass, avec une ébullition rapportée de douze heures lors de sa recréation. L'objet donne une mesure concrète de la branche britannique : moût très dense, bouteille solide, liège, temps et beaucoup de confiance dans les générations futures.

Burton-upon-Trent fournissait au XIXe siècle un vaste appareil industriel, des réseaux ferroviaires et d'exportation, ainsi que des gammes de fortes ales. Bass No. 1 devient le jalon autour duquel l'expression barley wine se fixe vers 1870, avec l'incertitude documentaire détaillée par la fiche parente. Dans la publicité, ces bières occupent le sommet de gamme et empruntent au vin son langage de santé, d'hiver ou de respectabilité.

La couleur n'est jamais restée stable. En 1951, Tennant de Sheffield lance Gold Label, une Barley Wine pâle, fortement atténuée et pétillante. Des annonces de 1954 insistent sur plusieurs mois de maturation en fût, une saveur « clean » et l'absence de lourdeur. Le produit prouve qu'une forte ale britannique peut construire sa richesse avec malt pale, fermentation et garde sans se déguiser en mélasse.

La branche britannique se distingue aujourd'hui de l'américaine par un houblon moins aromatiquement dominateur et une fermentation plus fruitée. Jeune, elle peut être vivement amère ; mûre, elle tend vers orange confite, noix et vin doux. La cave reste un choix de profil, non une obligation de boire chaque bouteille le jour de sa retraite.`,
      "chapitres": [
        {
          "titre": "Douze heures d'ébullition, pas douze malts spéciaux",
          "texte": `La recréation du Ratcliff Ale de 1869 a utilisé le registre de Bass et une ébullition de douze heures. Une telle durée concentre le moût, augmente la couleur et favorise des réactions thermiques ; elle impose aussi rendement énergétique, évaporation et contrôle du volume. Elle explique comment une recette dominée par le malt pale peut devenir très profonde.

Ce cas historique ne prescrit pas douze heures à toute Barley Wine moderne. Il rappelle surtout que couleur et saveur ne se lisent pas uniquement dans la liste des grains : le temps passé dans la chaudière possède lui aussi une facture.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale britannique de haute qualité majoritaire ; crystal en quantité modérée ; dark malt très limité."
        ],
        "houblons": [
          "East Kent Goldings, Fuggles, Target, Northdown ou autres houblons britanniques, avec amertume importante mais intégrée."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique tolérante à l'alcool, capable d'une bonne atténuation tout en produisant des esters élégants."
        ],
        "ingredientsComplementaires": [
          "Sucres de brassage possibles pour atteindre la densité sans corps excessif."
        ],
        "profilEau": "Calcium suffisant pour un brassin très dense ; minéralité retenue afin que la concentration ne durcisse pas la finale.",
        "empatage": "Moût fermentescible, rendement suivi et rinçage prudent. Une densité spectaculaire n'excuse pas l'extraction de tanins.",
        "ebullitionEtHoublonnage": "Ébullition prolongée possible pour concentrer et colorer ; houblons britanniques généreux au départ, appelés à s'intégrer avec la garde.",
        "fermentation": "Ensemencement massif, oxygénation adaptée et contrôle thermique : les esters sont souhaités, les alcools de fusel ne le sont pas.",
        "maturation": "Plusieurs mois peuvent intégrer le produit avant vente ; cave pluriannuelle seulement si emballage, température et profil s'y prêtent.",
        "profilRecherche": "Une forte ale britannique fruitée et profondément maltée, dont la chaleur reste douce et la finale plus nette que sa densité ne le laisse craindre."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "English Barleywine",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/17D/english-barleywine/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "British-Style Barley Wine Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Historic England",
          "edition": "2025",
          "reference": "Burton-upon-Trent: The Beer Capital of England",
          "type": "recherche_patrimoniale",
          "url": "https://heritagecalling.com/2025/03/27/burton-upon-trent-the-beer-capital-of-england/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Pete Brown",
          "edition": "2019",
          "reference": "Ratcliff Ale at 150 — Bass brewing record and reconstruction",
          "type": "recherche_historique_et_experimentale",
          "url": "https://www.petebrown.net/2019/12/20/happy-birthday-ratcliff-ale-tasting-pretty-good-at-150-years-old/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Ron Pattinson — Shut Up About Barclay Perkins",
          "edition": "2016",
          "reference": "Advertising Gold Label — 1954 documentary evidence",
          "type": "recherche_sur_archives",
          "url": "https://barclayperkins.blogspot.com/2016/11/advertising-gold-label.html",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Picture Sheffield",
          "edition": null,
          "reference": "Tennant's Gold Label Barley Wine label",
          "type": "archive_municipale",
          "url": "https://picturesheffield.com/frontend.php?action=zoom&id=157813&keywords=Ref_No_increment%3BEQUALS%3Bt16145&pos=8348",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "scottish-light-ale",
      "nom": "Scottish Light Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "ale",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Écosse",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 2.5,
        "max": 3.5,
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
        "min": 16,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation ale écossaise fraîche et propre ; à faible densité, ensemencement et atténuation précis évitent à la fois maigreur et lourdeur."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Thistle glass",
          "Nonic pint"
        ]
      },
      "description": "La Scottish Light moderne, souvent notée 60/-, met une faible densité au service d’une pinte cuivrée : céréale toastée, sucre cuit léger, fruit discret et finale sèche. Le nombre vient d’un ancien prix de vente, pas d’un dosage de malt gravé dans le granit. À 2,5–3,5 % vol., la précision compte davantage que les effets de cornemuse.",
      "histoireEtOrigines": `Commençons par la facture. Au XIXe siècle, les désignations en shillings indiquent le prix d'un hogshead, un grand fût de vente en gros. Les bières plus denses coûtent généralement davantage, mais le nombre ne constitue ni une recette ni un degré fixe : une brasserie peut vendre sous une même classe de prix des types différents. L'échelle 60/-, 70/-, 80/- apprise aujourd'hui est une normalisation tardive de ce vocabulaire commercial.

Light devient, au XXe siècle, le nom écossais d'une ale de faible force. Les guerres, les droits et la contraction générale des densités britanniques réduisent les produits ; la 60/- moderne finit par occuper la marche la plus basse des guides. Elle partage avec la Mild anglaise le service de session et le cask, mais la codification contemporaine privilégie une fermentation plus nette, une amertume basse et une palette de malt toasté.

La branche est rare, ce qui rend les chiffres trompeusement monumentaux : 60 shillings paraît une formule ancestrale, alors qu'il s'agissait d'un prix mouvant réemployé par les brasseurs et le mouvement real ale. Aucun élément historique n'impose le malt tourbé. La Scottish Light mémorable est donc une petite bière accompagnée d'une grande étiquette comptable.`,
      "chapitres": [
        {
          "titre": "60/- : une ancienne ligne de facture",
          "texte": `Le signe /- signifie que le montant est exprimé en shillings sans pence. Le prix reflétait souvent la force parce que plus de matière et davantage de droit coûtaient plus cher, mais inflation, fiscalité, volume du fût et politique commerciale empêchent toute conversion universelle en alcool.

Lire 60/- comme « recette à 3 % » pour toutes les époques reviendrait à utiliser un ticket de caisse victorien comme densimètre. Les plages modernes restent utiles ; elles sont modernes.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale écossais ou britannique ; faibles quantités de crystal, amber ou malt colorant ; sucre ou maïs possibles historiquement."
        ],
        "houblons": [
          "Houblons britanniques très retenus, uniquement pour éviter une finale écœurante."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre, peu estérifiée."
        ],
        "ingredientsComplementaires": [
          "Caramel de brasserie ou sucres possibles selon tradition ; malt tourbé non nécessaire et non traditionnel dans le cadre BJCP."
        ],
        "profilEau": "Profil modéré plutôt que mythiquement doux ; pH et calcium soutiennent une petite mouture où chaque âcreté serait visible.",
        "empatage": "Assez de corps pour porter la gorgée, mais une atténuation nette : faible alcool ne doit pas signifier moût inachevé.",
        "ebullitionEtHoublonnage": "Amertume basse, arôme de houblon minimal. La couleur vient du grist et du procédé ordinaire, non d'une réduction obligatoire du premier jus.",
        "fermentation": "Fermentation haute fraîche et propre, avec très peu d'esters.",
        "maturation": "Conditionnement court en cask ; carbonatation douce et température de cave donnent de l'ampleur.",
        "profilRecherche": "Une ale écossaise minuscule en alcool mais nette en malt, dont la finale permet la pinte entière sans fatigue."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Scottish Light",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/14/14A/scottish-light/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Scottish-Style Light Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Oxford Companion to Beer",
          "edition": "2011",
          "reference": "Shilling system",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/WD4TbnEdt4",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "All About Beer",
          "edition": "2014",
          "reference": "Scottish Ale — invoice prices and modern class names",
          "type": "presse_specialisee",
          "url": "https://allaboutbeer.com/article/scottish-ale-style/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Scottish Brewing Archive Association",
          "edition": null,
          "reference": "Scottish brewing archives and company collections",
          "type": "association_archivistique",
          "url": "https://www.scottishbrewingarchive.co.uk/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "scottish-heavy-ale",
      "nom": "Scottish Heavy Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "ale",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Écosse",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 4,
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
        "min": 16,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Levure ale conduite plutôt fraîche, avec esters retenus et atténuation modérée pour conserver une rondeur maltée sans sucre pâteux."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Thistle glass",
          "Nonic pint"
        ]
      },
      "description": "Dans le pub écossais, Heavy a fini par désigner une ale de force courante ; les guides l’alignent aujourd’hui sur 70/-. À 3,5–4 % vol., elle ajoute à la Light une assise de malt, de toffee pâle et de fruit discret, toujours avec peu de houblon aromatique. Le nom promet une marche supplémentaire, pas un poids d’haltère dans la pinte.",
      "histoireEtOrigines": `Heavy appartient d'abord à la langue du comptoir. Au milieu du XXe siècle, les clients écossais demandent volontiers light, heavy ou export plutôt qu'un ancien prix en shillings. Les brasseurs et les guides feront ensuite correspondre 70/- à cette marche intermédiaire, malgré des archives où prix, type et densité ne s'alignent pas avec une telle régularité.

La Heavy moderne se consolide comme ale de session légèrement plus pleine que la 60/-. Son identité tient à un équilibre bas : malt pale, couleur cuivrée à brune obtenue par de petites additions, fermentation propre et houblon sans démonstration. Elle n'est pas une Wee Heavy miniature, car la forte Scotch Ale descend d'autres produits et d'autres occasions de service.

Cette position médiane résume précisément la 70/-. Elle ne raconte ni exportation ni prestige : elle raconte le vocabulaire vivant d'un marché qui a transformé une ancienne classe de prix en commande de pub, puis une commande de pub en style de concours. Sa modestie n'est pas un manque de documentation ; c'est la fonction même du produit, conçu pour revenir au comptoir sans cérémonie.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale ; crystal ou malts toastés en faible quantité ; une touche de malt sombre pour couleur et finale."
        ],
        "houblons": [
          "Houblons britanniques discrets, 10-20 IBU environ dans le cadre BJCP."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre, esters faibles."
        ],
        "ingredientsComplementaires": [
          "Sucres, maïs ou caramel de brasserie possibles selon les pratiques historiques et modernes."
        ],
        "profilEau": "Minéralité modérée ; chlorure et sulfate restent secondaires devant pH, fermentation et fraîcheur.",
        "empatage": "Température moyenne pour une texture souple ; le supplément de corps par rapport à Light vient surtout de la densité, pas d'un empâtage extrême.",
        "ebullitionEtHoublonnage": "Houblonnage mesuré. Les malts colorés construisent la teinte plus sûrement qu'une réduction spectaculaire du premier moût.",
        "fermentation": "Fermentation haute fraîche, propre et faiblement estérifiée.",
        "maturation": "Conditionnement court à modéré, souvent en cask.",
        "profilRecherche": "Une ale de pub écossaise au malt lisible, plus pleine que Light mais encore sèche, mobile et modeste en alcool."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Scottish Heavy",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/14/14B/scottish-heavy/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Scottish-Style Heavy Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Oxford Companion to Beer",
          "edition": "2011",
          "reference": "Shilling system and parti-gyle",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/WD4TbnEdt4",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Archives Hub",
          "edition": "2002",
          "reference": "Celebrating 20 years of preserving Scottish brewing heritage",
          "type": "portail_archivistique_universitaire",
          "url": "https://archiveshub.jisc.ac.uk/features/apr02.shtml",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "scottish-export-ale",
      "nom": "Scottish Export Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "ale",
      "aliases": [],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Écosse",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4,
        "max": 5.5,
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
        "min": 16,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation ale fraîche et propre ; la densité supérieure exige davantage de levure tout en gardant le malt au premier plan."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Thistle glass",
          "Nonic pint"
        ]
      },
      "description": "Scottish Export, ou 80/- dans son classement moderne, porte la famille de session vers 4–5,5 % vol. : malt plus ferme, fruits de levure discrets, céréale grillée et amertume capable d’allonger la finale. Le mot Export rappelle la puissance commerciale des brasseurs écossais, mais ne prouve pas que chaque pinte ait préparé sa malle pour les colonies.",
      "histoireEtOrigines": `Au XIXe siècle, les brasseries d'Édimbourg ne vivent pas repliées derrière un mur de malt. William Younger et d'autres maisons produisent Pale Ale, IPA, stout et fortes ales, utilisent des houblons importés et expédient vers l'Angleterre et l'outre-mer. Les collections du Scottish Brewing Archive documentent cette industrie diverse. L'absence de houblonnières écossaises n'a jamais constitué une interdiction commerciale : les ports et le rail savent transporter des ballots.

Le nom Export du pub moderne s'inscrit dans cet horizon, sans correspondre à une recette d'exportation unique. Avec Heavy, il devient une commande de force ; la renaissance du cask associe ensuite 80/- à la plus robuste des trois Scottish Ales courantes. Les guides actuels en font une bière de malt modérée, proche en alcool d'un Best Bitter mais moins dominée par le houblon.

Cette construction tardive évite deux mythes. D'une part, tout 80/- historique n'était pas nécessairement l'ancêtre de Scottish Export. D'autre part, les brasseurs écossais ne furent pas uniformément avares de houblon par climat : leurs pales ales exportées pouvaient être amères et fortement houblonnées. La retenue aromatique de la Scottish Export contemporaine décrit un style actuel, non une incapacité nationale à passer commande.

Dans le verre, la densité supplémentaire permet davantage de malt et une amertume légèrement plus ferme que Light ou Heavy. La fiche raconte donc une double circulation : des bières écossaises ont réellement voyagé ; leur ancien vocabulaire a lui aussi voyagé jusqu'aux catégories modernes.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale ; crystal, amber ou malt colorant en faible quantité ; adjuncts possibles."
        ],
        "houblons": [
          "Houblons britanniques retenus, amertume basse à moyenne."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre, esters faibles."
        ],
        "ingredientsComplementaires": [
          "Sucres ou caramel de brasserie possibles ; tourbe non nécessaire à l'authenticité."
        ],
        "profilEau": "Le profil dépendait des sites de brassage ; la version moderne demande surtout un pH net et une minéralité qui n'écrase pas la faible charge de houblon.",
        "empatage": "Fermentescibilité moyenne : davantage de matière que Heavy, sans finale sucrée.",
        "ebullitionEtHoublonnage": "Amertume équilibrante et arôme discret dans le style actuel ; l'histoire écossaise autorise cependant bien plus de houblon que le cliché.",
        "fermentation": "Fermentation haute fraîche, propre, avec esters bas.",
        "maturation": "Conditionnement court à modéré ; bouteille plus vive ou cask plus doux selon le marché.",
        "profilRecherche": "La plus structurée des Scottish Ales de session, maltée mais sèche, sans tourbe obligatoire ni fausse timidité historique envers le houblon."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Scottish Export",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/14/14C/scottish-export/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Scottish-Style Export Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Scottish Brewing Archive Association",
          "edition": "2022",
          "reference": "Forty years of the Scottish Brewing Archive and its Edinburgh collections",
          "type": "association_archivistique",
          "url": "https://www.scottishbrewingarchive.co.uk/newsletter-no-47/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Archives Hub",
          "edition": "2002",
          "reference": "Scottish brewing records — Edinburgh ales, IPA and export",
          "type": "portail_archivistique_universitaire",
          "url": "https://archiveshub.jisc.ac.uk/features/apr02.shtml",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "All About Beer",
          "edition": "2014",
          "reference": "Scottish Ale — trade, imported hops and brewing diversity",
          "type": "presse_specialisee",
          "url": "https://allaboutbeer.com/article/scottish-ale-style/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "scotch-ale-wee-heavy",
      "nom": "Scotch Ale / Wee Heavy",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "strong-ale",
      "aliases": [
        "Scotch Ale",
        "Wee Heavy"
      ],
      "paysOrigine": [
        "Royaume-Uni"
      ],
      "origine": {
        "libelle": "Écosse",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6.5,
        "max": 10,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 17,
        "max": 35,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 28,
        "max": 50,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Moût dense fermenté plutôt frais avec un ensemencement généreux, puis longue garde pour intégrer alcool, fruit et profondeur maltée."
      },
      "service": {
        "temperatureMin": 10,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Thistle glass",
          "Snifter"
        ]
      },
      "description": "La Wee Heavy est une forte ale écossaise servie avec mesure : malt profond, toffee, fruits sombres, alcool enveloppant et houblon intégré. Son nom vient surtout de la petite bouteille de Fowler’s, descendante d’une Twelve Guinea Ale, non d’une antique unité nationale. Ni tourbe ni goût de whisky ne sont requis ; l’Écosse brassait de la bière, détail parfois perdu dans le brouillard marketing.",
      "histoireEtOrigines": `À Prestonpans, Fowler brassait au XIXe siècle une Twelve Guinea Ale d'une densité extraordinaire. Les analyses retrouvées dans les archives montrent un produit dépassant 1,150 à certaines périodes ; guerres et fiscalité réduisent ensuite sa force. Au milieu du XXe siècle, la petite nip bottle de Fowler's Wee Heavy donne son nom populaire à cette lignée de fortes ales écossaises. « Wee » décrit bien le format de service ; « heavy » prévient que le contenu n'a rien d'une 70/- ordinaire.

Le produit appartient au vaste monde des Edinburgh et Scotch Ales fortes, non à une simple multiplication de la Scottish Export. Les brasseurs écossais produisaient aussi des ales pâles, amères et exportées. Affirmer que leurs fortes bières étaient nécessairement peu houblonnées faute de culture locale projette une géographie rurale sur des entreprises très connectées : l'Écosse importait des houblons et ses archives conservent des recettes généreuses.

La Wee Heavy moderne choisit néanmoins un équilibre nettement malté. Malt pale en grande majorité, couleur mesurée, ébullition et fermentation construisent toffee, fruit et chaleur ; l'amertume empêche la densité de s'affaisser. Le BJCP exclut le malt tourbé du profil traditionnel. Le cliché whisky-climat-tourbe est séduisant, mais il assemble trois industries et un bulletin météo sans consulter les registres.

Traquair offre une autre sorte de continuité. La brasserie domestique aménagée au XVIIIe siècle dans la maison est remise en activité en 1965 avec ses équipements anciens et ses cuves ouvertes en chêne. Elle n'est pas une capsule intacte — une production contemporaine répond à des contraintes contemporaines —, mais elle relie lieu, geste et renaissance mieux qu'un arôme artificiellement enfumé.

Le pub ajoute enfin son propre rituel. Dans les anciens bassins miniers des Lothians, la Scottish Brewing Archive Association rapporte le « Happy Days » : une demi-pinte de light ou heavy complétée par une nip de Fowler's Wee Heavy. La bière forte n'était pas seulement contemplée près d'un feu ; elle entrait aussi, très concrètement, dans la sociabilité du comptoir.`,
      "chapitres": [
        {
          "titre": "Du prix en guinées à la petite bouteille",
          "texte": `Comme les shillings, la guinée relève du prix et du prestige, non d'une unité de densité. Fowler's Twelve Guinea Ale était une forte bière coûteuse ; son profil et sa force ont changé au fil des décennies. Wee Heavy devient ensuite le nom d'une marque et d'un format reconnaissable.

La catégorie moderne hérite de cette mémoire commerciale. Elle ne convertit pas automatiquement douze guinées en une recette de 8 % vol., opération que même la comptabilité brassicole refuserait de signer.`
        },
        {
          "titre": "La tourbe appartient d'abord au mythe moderne",
          "texte": `Les archives écossaises montrent une industrie capable d'acheter houblon et combustible, de brasser pâle ou noir et d'exporter à grande échelle. Le malt tourbé destiné au whisky ne devient pas, par voisinage, l'ingrédient normal de Scotch Ale.

Une impression fumée légère peut venir d'un ingrédient moderne ou être évoquée par certaines notes de fermentation et de malt ; elle ne constitue pas une preuve historique. La Peated Scotch Ale possède sa propre fiche précisément parce qu'elle représente une divergence volontaire.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale écossais ou britannique majoritaire ; crystal ou malts colorants mesurés pour soutenir caramel et robe."
        ],
        "houblons": [
          "Houblons britanniques discrets, souvent Goldings ou apparentés ; amertume basse par rapport à la richesse maltée."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre à faiblement fruitée, tolérante à un degré élevé."
        ],
        "ingredientsComplementaires": [
          "Adjuncts ou sucres possibles selon recette ; pas besoin de malt tourbé pour une Wee Heavy traditionnelle."
        ],
        "profilEau": "Profil du site et de la recette, non légendaire douceur écossaise ; calcium suffisant et minéralité sans dureté.",
        "empatage": "Moût fermentescible malgré la richesse. Les malts spéciaux restent mesurés afin de laisser base, ébullition et fermentation construire la profondeur.",
        "ebullitionEtHoublonnage": "Ébullition soutenue possible ; aucune obligation de réduire une casserole de premier moût. Une amertume réelle équilibre la densité même si l'arôme reste discret.",
        "fermentation": "Grand ensemencement et température maîtrisée. Une fermentation fraîche peut retenir les esters, mais elle doit atteindre son atténuation.",
        "maturation": "Semaines ou mois pour intégrer alcool et fermentation ; le houblon se fond, la sucrosité excessive ne disparaît pas par décret.",
        "profilRecherche": "Une forte ale écossaise concentrée, fruitée et maltée, servie en petite quantité, sans tourbe obligatoire ni lourdeur de confiserie."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Wee Heavy",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/17C/wee-heavy/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Scotch Ale — Unpeated Scotch Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Traquair House",
          "edition": null,
          "reference": "History of Traquair House Brewery",
          "type": "source_producteur_historique",
          "url": "https://www.traquair.co.uk/brewery/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Scottish Brewing Archive Association",
          "edition": "2019",
          "reference": "Fowler's Wee Heavy and the Happy Days pub serve",
          "type": "memoire_industrielle_et_locale",
          "url": "https://www.scottishbrewingarchive.co.uk/newsletter-no-43/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Ron Pattinson — Shut Up About Barclay Perkins",
          "edition": "2011",
          "reference": "Fowler's Twelve Guinea Ale — historical analyses",
          "type": "recherche_sur_archives",
          "url": "https://barclayperkins.blogspot.com/2011/10/fowlers-twelve-guinea-ale.html",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Archives Hub",
          "edition": "2002",
          "reference": "Scottish Brewing Archive — strong Edinburgh ales and brewing diversity",
          "type": "portail_archivistique_universitaire",
          "url": "https://archiveshub.jisc.ac.uk/features/apr02.shtml",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "All About Beer",
          "edition": "2014",
          "reference": "Scottish Ale — hops, trade and the peat myth",
          "type": "presse_specialisee",
          "url": "https://allaboutbeer.com/article/scottish-ale-style/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "peated-scotch-ale",
      "nom": "Peated Scotch Ale",
      "collectionId": 7,
      "nature": "SS",
      "parentPrincipalId": "scotch-ale-wee-heavy",
      "aliases": [],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Interprétation moderne inspirée de l’Écosse",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6.5,
        "max": 11,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 15,
        "max": 40,
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
        "type": "haute",
        "details": "Base de forte ale fermentée proprement ; les phénols de tourbe rendent tout alcool solvant ou ester excessif particulièrement discordant."
      },
      "service": {
        "temperatureMin": 10,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Thistle glass",
          "Snifter"
        ]
      },
      "description": "La Peated Scotch Ale est une mutation contemporaine : une forte ale maltée reçoit du malt séché à la fumée de tourbe, donc phénol, terre humide, goudron doux ou notes médicinales selon le produit et la dose. La Brewers Association la classe séparément ; les archives ne la consacrent pas tradition nationale. Une pincée intrigue, une pelletée transforme la pinte en cabinet de pansements.",
      "histoireEtOrigines": `Le raisonnement paraît irrésistible : whisky écossais, malt tourbé, Scotch Ale — donc tourbe dans la bière. Il est surtout récent. Les registres brassicoles étudiés ne montrent pas le malt tourbé comme signature régulière des fortes ales écossaises ; le BJCP l'exclut explicitement de Wee Heavy. Les brasseurs modernes, particulièrement hors d'Écosse, ont pourtant trouvé l'association expressive et commercialement claire.

La répétition crée alors une catégorie. La Brewers Association distingue Peated Scotch Ale et Unpeated Scotch Ale dans ses lignes de concours. Cette décision décrit des produits présents sur le marché ; elle ne rétroagit pas sur le XIXe siècle. La fiche commence donc au moment de la divergence : une base de forte ale écossaise moderne reçoit volontairement un malt fabriqué surtout pour la distillation.

Le changement technique est considérable. Les malteurs expriment la charge de fumée en parties par million de phénols ; Crisp propose par exemple plusieurs niveaux allant d'environ 15 à 50 ppm. Ces valeurs décrivent le malt, non la bière finie. Des recherches sur le brassage montrent qu'une partie importante des phénols volatils se perd pendant empâtage et ébullition, mais la tourbe reste plus riche en phénols et crésols que certains malts fumés au bois.

La recette doit donc être construite par essais, spécification du lot et dégustation. Guaiacol, phénol et crésols ne racontent pas tous la même fumée ; leur excès peut donner antiseptique, caoutchouc ou cendre. La réussite ne consiste pas à prouver l'Écosse par la force, mais à laisser une fumée identifiable traverser le malt sans confisquer le verre.`,
      "chapitres": [
        {
          "titre": "Le ppm du malt n'est pas celui de la bière",
          "texte": `La fiche technique mesure les phénols sur la matière première. La proportion dans la mouture, l'empâtage, l'ébullition, la fermentation et la maturation modifient ensuite leur transfert et leur perception. Deux malts annoncés au même niveau peuvent aussi répartir différemment guaiacols, phénols et crésols.

Un pourcentage de recette copié sans connaître la spécification du lot est donc une loterie très parfumée. Le brasseur commence bas, mesure ce qu'il peut et, surtout, goûte.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base de Scotch Ale : malt pale, éventuellement crystal et malts colorants ; petite fraction de malt tourbé lorsque le caractère fumé est recherché."
        ],
        "houblons": [
          "Houblons britanniques très faibles, afin de ne pas concurrencer malt et fumée."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale écossaise ou britannique propre."
        ],
        "ingredientsComplementaires": [
          "Malt tourbé comme choix contemporain explicite, non comme exigence historique."
        ],
        "profilEau": "Eau sans chlore résiduel : fumée et chlorophénols médicinaux seraient une alliance particulièrement mal choisie.",
        "empatage": "Base fermentescible et dose de malt tourbé calculée à partir de sa spécification en phénols, non d'un pourcentage universel.",
        "ebullitionEtHoublonnage": "Houblon discret ; l'ébullition élimine une partie des phénols volatils, ce qui doit être intégré aux essais plutôt que compensé aveuglément.",
        "fermentation": "Souche propre et température tenue afin de ne pas empiler phénols fermentaires et fumée de tourbe.",
        "maturation": "La garde peut fondre alcool et fumée sur plusieurs semaines ou mois ; elle n'efface jamais un surdosage de tourbe.",
        "profilRecherche": "Une forte ale maltée où terre, fumée et phénols restent une couche volontaire et lisible, clairement moderne."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Peated Scotch Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Wee Heavy — no peat-smoked malt",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/17C/wee-heavy/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Crisp Malt",
          "edition": null,
          "reference": "Scottish Peated Malt — phenol specifications",
          "type": "fiche_technique_malteur",
          "url": "https://crispmalt.com/malts/scottish-peated-malt/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Jung et al. — European Food Research and Technology",
          "edition": "2023",
          "reference": "Balance of volatile phenols from wood- and peat-smoked malt during brewing",
          "type": "publication_scientifique",
          "url": "https://link.springer.com/article/10.1007/s00217-022-04130-8",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BeerSmith — Ron Pattinson",
          "edition": "2016",
          "reference": "Scottish Ale history and the limited historical role of peat",
          "type": "entretien_historique",
          "url": "https://beersmith.com/blog/2016/09/14/scottish-ale-history-with-ron-pattinson-beersmith-podcast-133/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "american-amber-red-ale",
      "nom": "American Amber / Red Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "amber-ale",
      "aliases": [
        "American Amber Ale",
        "American Red Ale"
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
        "min": 25,
        "max": 40,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 20,
        "max": 36,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Levure américaine neutre à légèrement fruitée ; l’atténuation maintient la tension entre crystal, agrumes et résine."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "American pint",
          "Tulipe"
        ]
      },
      "description": "L’American Amber / Red Ale a donné une couleur au premier mouvement craft : cuivre profond, malt crystal, céréale toastée, levure nette et houblons américains aux accents d’agrumes, de fleurs ou de pin. Red Tail Ale apparaît en Californie en 1983 ; le style s’installe entre Pale et Brown avant que l’IPA ne pousse les décibels. Son métier reste l’équilibre.",
      "histoireEtOrigines": `À Hopland, dans le nord de la Californie, un ancien restaurant routier devient en 1983 le Mendocino Brewing Company brewpub. Red Tail Ale y est brassée dès l'ouverture. Sa robe rouge-ambrée et son équilibre plus malté qu'une Pale Ale fournissent un repère précoce à une génération de consommateurs qui découvre encore le vocabulaire des microbrasseries.

Le style ne naît pas d'une recette déposée. Les pionniers américains travaillent avec malt pale, crystal et houblons nationaux pour ouvrir un espace accessible entre Pale Ale, Bitter et Brown Ale. Amber promet davantage de couleur et de corps ; Red offre un nom plus vif sur l'enseigne. Le BJCP les réunit parce que les bières se chevauchent davantage que leurs services marketing.

Dans les années 1990 et 2000, l'Amber/Red devient un pilier de gamme : assez différente de la lager blonde, moins amère qu'une IPA, capable d'accompagner un repas et de voyager en bouteille. L'explosion des IPA la rend ensuite moins centrale, tandis que certaines Reds se renforcent jusqu'aux catégories Double, Imperial ou Red IPA.

Cette trajectoire résume une phase du craft américain : avant la course à l'intensité, il fallait d'abord construire un pont entre bière industrielle familière et saveurs nouvelles. L'American Amber/Red a souvent tenu ce pont, avec un sac de crystal d'un côté et du Cascade de l'autre.`,
      "chapitres": [
        {
          "titre": "Hopland, 1983 : la couleur sur l'enseigne",
          "texte": `Red Tail Ale n'est pas proclamée inventrice de toute Amber Ale. Elle constitue un jalon documenté : un produit vendu dès 1983 dans l'un des premiers brewpubs californiens de la nouvelle vague, puis diffusé au-delà de son comptoir.

Son importance vient de cette visibilité. Un nom, une couleur et un lieu rendent une catégorie mémorisable bien avant que les guides n'en polissent les frontières.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale nord-américain ; crystal moyen à foncé pour couleur et caramel ; petites touches toastées possibles."
        ],
        "houblons": [
          "Cascade, Centennial, Chinook ou autres houblons américains/New World, de modérés à soutenus."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine neutre ou légèrement fruitée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate et chlorure proches de l'équilibre ; le premier affine le houblon, le second soutient la texture sans rendre le crystal pâteux.",
        "empatage": "Fermentescibilité moyenne à haute pour donner une finale nette malgré le malt crystal.",
        "ebullitionEtHoublonnage": "Amertume moyenne, ajouts tardifs lisibles et dry hop possible à dose inférieure à une IPA.",
        "fermentation": "Souche américaine propre ; esters bas afin que le dialogue malt-houblon reste au premier plan.",
        "maturation": "Conditionnement court et protection contre l'oxygène pour préserver houblon et couleur.",
        "profilRecherche": "Une ale cuivrée où malt toasté et houblon américain arrivent ensemble, sans que l'un serve de décor à l'autre."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Amber Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/19/19A/american-amber-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Amber/Red Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "San Francisco Chronicle",
          "edition": "2025",
          "reference": "Hopland brewpub and Mendocino Brewing's 1983 opening",
          "type": "presse_regionale",
          "url": "https://www.sfgate.com/northcoast/article/historic-brewpub-hopland-for-sale-20240896.php",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association — CraftBeer.com",
          "edition": null,
          "reference": "Modern U.S. craft beer history",
          "type": "archives_professionnelles",
          "url": "https://www.craftbeer.com/beer/beer-history",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "american-brown-ale",
      "nom": "American Brown Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "brown-ale",
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
        "min": 4.3,
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
        "min": 36,
        "max": 70,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation américaine propre aux esters modestes, assez atténuante pour empêcher chocolat et caramel d’étouffer le houblon."
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
      "description": "L’American Brown Ale branche une Brown britannique sur le secteur craft : noisette et cacao léger demeurent, mais la finale s’assèche et le houblon américain apporte agrumes, pin ou fleurs. Pete’s Wicked Ale, lancée en 1986, a transformé ce profil en marque nationale avant de disparaître. Le style garde de cette époque une ambition simple : brun, vif, jamais brûlé.",
      "histoireEtOrigines": `En 1986, Pete Slosberg lance Pete's Wicked Ale avec une recette identifiée comme American Brown. La bière arrive au moment où le secteur craft cherche des produits phares capables de raconter une différence en rayon. Son étiquette, son marketing et une distribution rapide font de la marque l'un des grands succès des années 1990, un temps derrière Boston Beer parmi les acteurs craft américains.

Le produit illustre le déplacement du modèle britannique. Des accents de noix, de chocolat et de malt toasté restent visibles, mais le houblon américain et une fermentation plus nette donnent davantage de contraste. Les homebrewers et microbrasseries explorent aussi des versions assez amères pour annoncer Brown IPA, tandis que les guides resserrent l'American Brown autour d'un équilibre plus modéré.

L'histoire de Pete's rappelle que les styles craft se forment dans des entreprises, pas seulement dans des concours. La marque change de propriétaire, perd son élan et disparaît finalement du marché ; le profil, lui, entre dans le répertoire brassicole. Une vedette peut quitter l'affiche tout en laissant son rôle au casting.

L'American Brown moderne conserve donc une limite utile : le malt sombre apporte couleur, noix et cacao, sans torréfaction de Porter ; le houblon reste plus expressif qu'en British Brown, sans faire de la bière une Black IPA brune par erreur de lumière.`,
      "chapitres": [
        {
          "titre": "Pete's Wicked : un style porté par une marque",
          "texte": `Le succès de Pete's ne prouve pas qu'une seule brasserie ait inventé l'American Brown. Il montre comment un profil issu du homebrewing et des premières microbrasseries devient compréhensible à l'échelle nationale grâce à un produit phare.

Lorsque la marque décline, la catégorie ne s'effondre pas avec elle. Recettes, juges, brasseurs et consommateurs ont déjà séparé le personnage de son premier grand interprète.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale américain ; crystal ; chocolate ou brown malt en faible quantité pour noix/cacao sans brûlé."
        ],
        "houblons": [
          "Houblons américains ou New World, agrumes, pin, floral ou fruit selon recette, toujours équilibrés par le malt."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine neutre à légèrement fruitée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate modéré pour la netteté et alcalinité calibrée aux malts sombres ; trop d'alcalinité émousserait le houblon.",
        "empatage": "Température moyenne et mouture mesurée : assez de corps pour la noisette, assez d'atténuation pour la vivacité américaine.",
        "ebullitionEtHoublonnage": "Amertume plus ferme que British Brown, ajouts tardifs perceptibles mais inférieurs à Brown IPA.",
        "fermentation": "Fermentation propre, esters faibles ; le profil sépare clairement malt brun et houblon.",
        "maturation": "Courte à modérée, avec protection contre l'oxydation des houblons.",
        "profilRecherche": "Une Brown américaine sèche et contrastée, où cacao et noix répondent à un houblon moderne sans torréfaction de Porter."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/19/19C/american-brown-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Beer Professor",
          "edition": "2021",
          "reference": "Pete's Wicked Ale and the rise of American Brown Ale",
          "type": "histoire_orale_et_industrielle",
          "url": "https://www.thebeerprofessor.com/?tag=petes-wicked-ale",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Beervana",
          "edition": "2011",
          "reference": "The fast rise and slow death of Pete's Wicked Ale",
          "type": "presse_specialisee",
          "url": "https://www.beervanablog.com/beervana/2011/05/fast-rise-and-slow-death-of-petes.html",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "american-black-ale",
      "nom": "American Black Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "ale",
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
        "max": 8,
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
        "min": 45,
        "max": 90,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Levure américaine neutre : sa netteté sépare la couleur des malts sombres de leur torréfaction et laisse avancer le houblon."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "American pint",
          "IPA glass"
        ]
      },
      "description": "L’American Black Ale produit un tour de lumière : presque noire dans le verre, sèche et saturée de houblons d’agrumes, de pin ou de résine, avec seulement une ombre de cacao. Black IPA, India Black Ale ou Cascadian Dark Ale ont nommé des produits voisins. Le débat sur l’étiquette fut parfois plus torréfié que la bière, qui gagne justement à éviter le brûlé.",
      "histoireEtOrigines": `Le style commence par plusieurs revendications concurrentes. Greg Noonan brasse Blackwatch IPA au Vermont Pub & Brewery autour de 1990, jalon souvent cité sur la côte Est. Dans le Nord-Ouest, John Maier chez Rogue et d'autres brasseurs développent au tournant des années 2000 des ales noires fortement houblonnées ; le nom Cascadian Dark Ale s'impose chez ceux qui veulent revendiquer le paysage houblonnier régional.

La controverse porte autant sur la géographie que sur la contradiction « black pale ». Black IPA devient le terme immédiatement lisible ; India Black Ale contourne l'oxymore ; Cascadian Dark Ale réclame une identité du Pacifique Nord-Ouest. Les sources ne permettent pas de remettre un brevet unique : recettes sombres et houblonnées avaient existé auparavant, et plusieurs brasseurs ont développé la forme indépendamment.

Le concours transforme le débat en case. En 2010, la Brewers Association reconnaît American-style India Black Ale au Great American Beer Festival ; ses lignes actuelles parlent d'American-Style Black Ale. Le BJCP place Black IPA parmi les Specialty IPA. Ces catégories voisines sélectionnent un même problème technique : obtenir la couleur et un accent de malt sombre sans couvrir les huiles de houblon de café, cendre ou astringence.

Les malts noirs désamérisés, l'ajout tardif des grains sombres et la maîtrise du pH rendent cette séparation plus facile. L'American Black Ale appartient ainsi à la génération des hybrides craft conceptuels : une silhouette de stout, une dynamique d'IPA, et trois noms encore accrochés au même portemanteau.`,
      "chapitres": [
        {
          "titre": "Qui l'a brassée en premier ?",
          "texte": `Blackwatch de Greg Noonan fournit un jalon commercial solide autour de 1990. Des récits du Nord-Ouest citent ensuite Rogue, Phillips et d'autres producteurs. « Premier » change toutefois selon que l'on cherche la première bière sombre très houblonnée, la première Black IPA nommée ainsi ou la première Cascadian Dark Ale conforme au profil actuel.

La chronologie la plus honnête garde ces niveaux séparés. Noonan précède la vague ; le Nord-Ouest développe une scène et un nom ; les concours stabilisent une définition.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale américain ; malts noirs désamérisés, Carafa Special ou autres grains foncés en quantité mesurée ; crystal léger possible."
        ],
        "houblons": [
          "Houblons américains ou New World intenses : agrumes, pin, résine, fruits tropicaux ou herbacés."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine neutre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate pour une finale nette, alcalinité juste suffisante pour les grains foncés et pH surveillé afin d'éviter l'âcreté.",
        "empatage": "Moût fermentescible ; malts noirs désamérisés ou ajout tardif permettent de colorer sans extraire toute la torréfaction.",
        "ebullitionEtHoublonnage": "Amertume élevée, gros ajouts tardifs et dry hop ; la charge sombre doit être pensée en fonction de ces arômes volatils.",
        "fermentation": "Souche neutre, atténuation haute et oxygène limité après fermentation.",
        "maturation": "Courte : le houblon frais est la moitié du concept, tandis que l'oxydation ternit rapidement agrumes et couleur.",
        "profilRecherche": "Une ale noire qui boit comme une bière houblonnée sèche, avec assez de cacao pour justifier la robe et jamais assez de brûlé pour l'alourdir."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Black Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American IPA / Specialty IPA context",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association — CraftBeer.com",
          "edition": "2010",
          "reference": "Cascadian Dark Ale: A Rose By Any Other Name",
          "type": "presse_professionnelle",
          "url": "https://www.craftbeer.com/craft-beer-muses/india-black-ale-a-rose-by-any-other-name",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "All About Beer",
          "edition": "2024",
          "reference": "The Quiet Resilience of the Black IPA",
          "type": "presse_specialisee",
          "url": "https://allaboutbeer.com/black-ipa-cascadian-dark-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Great American Beer Festival",
          "edition": "2026",
          "reference": "American-Style Black Ale competition category",
          "type": "referentiel_de_concours",
          "url": "https://www.greatamericanbeerfestival.com/brewers-information/gabf-competition/styles/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "double-hoppy-red-ale",
      "nom": "Double Hoppy Red Ale",
      "collectionId": 7,
      "nature": "SS",
      "parentPrincipalId": "red-ale",
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
        "min": 6,
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
        "min": 22,
        "max": 46,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation américaine bien atténuante ; oxygène et température sont maîtrisés avant le houblonnage massif de cette red ale renforcée."
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
      "description": "La Double Hoppy Red Ale prend l’Amber/Red comme châssis et installe un moteur de houblon : agrumes, résine, pin ou fruits tropicaux au-dessus d’un malt cuivré, avec 6–9 % vol. et une amertume durable. Les concours l’ont tour à tour séparée, réunie et rebaptisée. Dans le verre, son identité demeure nette : le rouge porte le houblon, pas l’inverse.",
      "histoireEtOrigines": `Cette bière naît dans une case en mouvement. Au Great American Beer Festival de 2004 et 2005, Imperial et Double Red partagent encore une catégorie. En 2015, le concours distribue séparément Double Red Ale et Imperial Red Ale ; plus tard, Strong Red Ale les réunit de nouveau sous un titre plus large. La chronologie décrit une population de produits, pas une dynastie.

Double Hoppy Red privilégie la branche aromatique de cette population. Les brasseurs augmentent densité et malt crystal afin de conserver une robe profonde, mais surtout amertume, ajouts tardifs et houblonnage à cru. Ninkasi Believer figure parmi les exemples commerciaux durables de ce langage du Nord-Ouest : double red, malt visible, houblon au premier plan.

La frontière avec Red IPA ou American Strong Ale dépend du cadre et de l'équilibre. Ici, le malt rouge possède une présence propre, plus construite que dans une IPA simplement colorée ; la fraîcheur du houblon compte davantage que la garde. Le nom n'est donc pas l'acte de naissance d'un style ancien, mais une instruction sensorielle étonnamment précise : doubler l'ambition de la Red et laisser le houblon signer le reçu.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale américain ; crystal moyen/foncé pour couleur rouge et caramel ; malts toastés légers possibles."
        ],
        "houblons": [
          "Charge élevée de houblons américains/New World, amérisants et aromatiques, souvent avec dry hopping."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine neutre, forte atténuation."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate modéré à élevé pour tendre l'amertume, chlorure contenu afin de ne pas épaissir une forte charge de crystal.",
        "empatage": "Empâtage fermentescible : le malt doit résister au houblon par la saveur, pas par le sucre résiduel.",
        "ebullitionEtHoublonnage": "Amertume haute, ajouts tardifs massifs et dry hop central ; le rendement aromatique exige une excellente maîtrise de l'oxygène.",
        "fermentation": "Souche américaine propre, ensemencement généreux et température contenue pour une densité supérieure à l'Amber.",
        "maturation": "Courte ; conditionnement et distribution rapides préservent le moteur narratif du style.",
        "profilRecherche": "Une Red américaine forte et sèche dont le malt cuivré soutient une expression de houblon immédiatement dominante et fraîche."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Strong Ale — Double Red Ales",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/22B/american-strong-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Amber/Red Ale and Strong Ale categories",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Great American Beer Festival",
          "edition": "2004",
          "reference": "Imperial or Double Red Ale competition category",
          "type": "archive_de_concours",
          "url": "https://www.greatamericanbeerfestival.com/wp-content/uploads/gabf04_winners.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Great American Beer Festival",
          "edition": "2015",
          "reference": "Double Red Ale and Imperial Red Ale as separate categories",
          "type": "archive_de_concours",
          "url": "https://cdn.greatamericanbeerfestival.com/wp-content/uploads/15_GABF_winners.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Ninkasi Brewing Company",
          "edition": null,
          "reference": "Believer Double Red Ale",
          "type": "source_producteur",
          "url": "https://ninkasibrewing.com/beers/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "imperial-red-ale",
      "nom": "Imperial Red Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "red-ale",
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
        "max": 10,
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
        "details": "Levure américaine propre et tolérante à l’alcool, avec fort ensemencement et chaleur contenue avant les ajouts aromatiques tardifs."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Snifter"
        ]
      },
      "description": "Imperial Red Ale agrandit d’abord la charpente : 7–10 % vol., couleur rubis sombre, malt intense, fruits de fermentation et chaleur, puis assez de houblon pour tenir l’ensemble debout. « Imperial » est ici le préfixe craft de l’agrandissement, sans tsar ni route commerciale à convoquer. Face à Double Hoppy Red, la force et la masse maltée prennent davantage la parole.",
      "histoireEtOrigines": `Le mot imperial arrive ici par analogie. Après Imperial Stout, les brasseries craft l'emploient pour signaler la version renforcée d'une IPA, d'une Pilsner, d'une Red ou de presque tout ce qui accepte une police de caractères plus grande. Imperial Red ne revendique donc pas une cour ancienne ; elle traduit une stratégie de gamme.

Les archives du Great American Beer Festival montrent cette stratégie devenue catégorie dès le début des années 2000 : Imperial or Double Red compte ses propres médailles en 2004 et 2005. Les organisateurs séparent ensuite Imperial et Double selon l'équilibre, avant de les rapprocher sous Strong Red. Les noms changent parce que les produits forment un continuum entre Amber/Red, Red IPA, American Strong et Barleywine.

Dans Imperial Red, la hausse de densité est le moteur. Le malt pale et le crystal construisent une matière profonde ; alcool et esters élargissent le fruité ; l'amertume garde la finale en mouvement. Le houblon peut être intense, mais une bière conçue principalement pour son parfum frais se lit mieux comme Double Hoppy Red.

Ce partage ne prétend pas résoudre tous les concours. Il offre une mémoire simple : Double Hoppy décrit l'avant-scène aromatique ; Imperial décrit l'agrandissement du bâtiment. Les deux peuvent partager une porte rouge.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base pale importante ; crystal/caramel pour couleur et richesse ; malts toastés éventuels."
        ],
        "houblons": [
          "Variétés américaines modernes, d’une présence moyenne à une charge aromatique très élevée selon l’équilibre visé."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine robuste et neutre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Calcium suffisant pour la fermentation et équilibre sulfate/chlorure choisi selon la place du houblon.",
        "empatage": "Moût fermentescible malgré la densité ; le crystal colore et parfume, il ne doit pas devenir la base du corps.",
        "ebullitionEtHoublonnage": "Amertume élevée proportionnée au malt ; houblonnage tardif présent mais pas nécessairement aussi massif que Double Hoppy.",
        "fermentation": "Grand ensemencement, oxygénation adaptée et maîtrise thermique pour intégrer alcool et esters.",
        "maturation": "Quelques semaines pour fondre la chaleur ; garde plus courte si les houblons sont au premier plan.",
        "profilRecherche": "Une Red américaine agrandie par la densité et l'alcool, profondément maltée mais attenuée, soutenue par une vraie structure amère."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/22B/american-strong-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Strong Ale / Strong Red Ale context",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Great American Beer Festival",
          "edition": "2005",
          "reference": "Imperial or Double Red Ale competition category",
          "type": "archive_de_concours",
          "url": "https://www.greatamericanbeerfestival.com/wp-content/uploads/gabf05_winners.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Great American Beer Festival",
          "edition": "2026",
          "reference": "Imperial Red Ale within Strong Red Ale",
          "type": "referentiel_de_concours",
          "url": "https://www.greatamericanbeerfestival.com/brewers-information/gabf-competition/styles/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "american-strong-ale",
      "nom": "American Strong Ale",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "strong-ale",
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
        "max": 80,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 16,
        "max": 60,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Souche ale choisie pour sa tolérance alcoolique et ses esters mesurés ; la température évite de transformer la force en brûlure."
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
      "description": "American Strong Ale est une zone de douane brassicole : trop maltée pour une Double IPA, moins concentrée ou moins faite pour la cave qu’une Barleywine, parfois proche d’une Double Red. Malt, alcool, amertume et houblon peuvent tous être élevés ; la cohérence décide du visa. Son histoire est celle d’une catégorie de classement née après les bières qu’elle rassemble.",
      "histoireEtOrigines": `Les bières arrivent d'abord, la boîte ensuite. Les brasseries américaines produisent à partir des années 1980 et 1990 des ales fortes, amères et maltées que les catégories existantes accueillent mal : trop riches pour IPA, trop houblonnées ou pas assez massives pour Barleywine, parfois vendues sous un nom de marque sans style précis.

Le BJCP introduit American Strong Ale dans ses lignes de 2015 et la maintient en 2021 comme regroupement de profil. Sa propre définition insiste sur l'espace entre American Barleywine, Double IPA et Red IPA. Cette naissance administrative est une information positive : elle évite d'inventer un ancêtre unique à des créations craft convergentes.

Le centre de gravité est l'équilibre à haute intensité. Une base de malt apporte céréale, toffee ou fruit sombre ; les houblons fournissent amertume, pin ou agrumes ; l'alcool reste perceptible. La différence avec American Barleywine n'est pas un chiffre isolé : la Barleywine possède généralement davantage de concentration et de vocation à évoluer, tandis que la Strong Ale peut être conçue pour une consommation plus jeune.

La catégorie fonctionne comme un sas. Une recette très rouge peut entrer par Double/Imperial Red ; une recette très houblonnée par Double IPA ; une recette de garde par Barleywine. American Strong accueille ce qui conserve volontairement plusieurs axes à égalité — et lui demande tout de même de ranger ses valises.`,
      "chapitres": [
        {
          "titre": "2015 : le classement rattrape le marché",
          "texte": `L'ajout dans le BJCP 2015 n'invente pas les bières. Il reconnaît qu'un nombre suffisant de produits partagent un équilibre sans correspondre proprement aux styles voisins. C'est une catégorie descriptive, non une origine.

Cette distinction protège le récit historique : le concours donne un nom à une population contemporaine ; il ne transforme pas rétrospectivement chaque forte ale américaine en membre conscient du club.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale américain ; crystal moyen à foncé fréquent ; malts toastés ou chocolat très léger possibles."
        ],
        "houblons": [
          "Houblons américains/New World à intensité moyenne à forte."
        ],
        "levuresEtMicroorganismes": [
          "Souche américaine discrète, sobre en esters et suffisamment tolérante à l’alcool."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate/chlorure réglé pour l'orientation choisie ; calcium et nutriments soutiennent la forte fermentation.",
        "empatage": "Moût fermentescible afin que la somme malt-alcool-houblon reste mobile.",
        "ebullitionEtHoublonnage": "Amertume haute, aromatique conséquent mais modulé pour ne pas faire basculer automatiquement vers Double IPA.",
        "fermentation": "Grand ensemencement, oxygénation adaptée et contrôle thermique ; le profil propre laisse les axes de recette se comparer.",
        "maturation": "Semaines à quelques mois. Plus le houblon définit la bière, moins une longue cave a de sens.",
        "profilRecherche": "Une forte ale américaine à plusieurs voix, où malt, houblon et alcool restent distincts puis se rejoignent dans une finale nette."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/22B/american-strong-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Strong Ale / Other Strong Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brew Your Own",
          "edition": "2017",
          "reference": "American Strong Ale — a new style in the 2015 BJCP Guidelines",
          "type": "presse_technique",
          "url": "https://byo.com/articles/style-profile-layout-6/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Great American Beer Festival",
          "edition": "2026",
          "reference": "Current strong-ale competition categories",
          "type": "referentiel_de_concours",
          "url": "https://www.greatamericanbeerfestival.com/brewers-information/gabf-competition/styles/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "american-barley-wine",
      "nom": "American Barley Wine",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "barley-wine",
      "aliases": [
        "American Barleywine"
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
        "min": 50,
        "max": 100,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 20,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Très haute densité : levure abondante, oxygène, nutriments et température par paliers précèdent une maturation prolongée."
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
      "description": "L’American Barley Wine fait tenir deux époques dans la bouteille : Old Foghorn, lancé par Anchor en 1975, adapte la forte ale anglaise ; Bigfoot de Sierra Nevada, apparu en 1983, l’équipe de houblons américains entiers. Jeune, pin, agrumes et amertume affrontent un moût massif ; avec le temps, le houblon recule. La cave change le rapport de force, pas toujours à son avantage.",
      "histoireEtOrigines": `San Francisco fournit le premier grand repère. Anchor Brewing, relancée par Fritz Maytag, présente Old Foghorn en 1975. Le rapport patrimonial de la ville l'identifie comme une première américaine moderne du Barley Wine. Le nom évoque la baie ; la méthode s'inspire des fortes ales anglaises, avec un produit riche, conditionné et destiné à une petite portion.

Huit ans plus tard, Sierra Nevada lance Bigfoot. La brasserie de Chico emploie ses houblons entiers américains avec une intensité qui transforme l'équilibre : l'amertume et les arômes résineux ne soutiennent plus seulement le malt, ils organisent la jeunesse de la bière. Les bouteilles millésimées invitent bientôt les consommateurs à comparer les années, pratique devenue un rituel craft.

Ces deux produits n'épuisent pas le style, mais ils en dessinent les axes. L'American Barleywine garde la densité, la force et la lente dégustation britanniques ; il ajoute une architecture de houblon issue du mouvement américain. Une Double IPA peut atteindre un degré voisin, mais elle recherche généralement une finale plus sèche et la consommation fraîche. Ici, la masse de malt et la transformation en cave restent centrales.

Le vieillissement produit un échange plutôt qu'une amélioration automatique. Les arômes frais de houblon diminuent, l'amertume s'arrondit, fruits secs et notes vineuses peuvent émerger ; l'oxygène peut aussi fabriquer papier et carton. Une verticale de Bigfoot raconte donc le temps avec une franchise remarquable : certaines années gagnent une voix grave, d'autres perdent simplement les aigus.`,
      "chapitres": [
        {
          "titre": "1975 et 1983 : deux gestes fondateurs",
          "texte": `Old Foghorn établit qu'une microbrasserie américaine peut produire et vendre une forte ale de tradition anglaise. Bigfoot ajoute quelques années plus tard l'accent houblonné de Sierra Nevada et la logique du millésime.

Le style moderne vient moins d'une invention instantanée que de cette succession : importer une forme, déplacer son équilibre, puis faire de son évolution un rendez-vous.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale américain majoritaire ; crystal en quantité contrôlée ; malts très foncés avec grande retenue."
        ],
        "houblons": [
          "Houblons américains/New World en forte quantité, historiquement Cascade puis nombreuses variétés modernes ; 50-100 IBU typiques BJCP."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine ou anglaise tolérante à l'alcool et fortement atténuative."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Calcium suffisant et sulfate souvent plus élevé que dans la branche britannique, sans rendre une amertume déjà massive râpeuse.",
        "empatage": "Empâtage fermentescible et gestion attentive du rendement ; la densité vient surtout du malt de base.",
        "ebullitionEtHoublonnage": "Ébullition longue possible, forte amertume, ajouts tardifs et parfois dry hop. Le programme doit anticiper ce qui restera après quelques mois.",
        "fermentation": "Une population levurienne abondante, bien oxygénée et nourrie, traverse successivement pression osmotique et montée de l’alcool sous contrôle thermique.",
        "maturation": "Mois avant intégration ; cave pluriannuelle possible avec perte des houblons frais et risque oxydatif croissant.",
        "profilRecherche": "Une Barleywine américaine dense mais atténuée, où le houblon structure la jeunesse et le malt demeure lorsque cette jeunesse se retire."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Barleywine",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/strong-american-ale/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Barley Wine Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "San Francisco Planning Department",
          "edition": null,
          "reference": "Anchor Brewing cultural history — Old Foghorn 1975",
          "type": "source_historique_institutionnelle",
          "url": "https://www.sf.gov/sites/default/files/2024-09/item_3a._lbr-2018-19-053_anchor_brewing.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Bigfoot Barleywine-Style Ale — introduced in 1983",
          "type": "source_producteur",
          "url": "https://sierranevada.com/brews/bigfoot-barleywine-style-ale",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Vanderhaegen et al. — Food Chemistry",
          "edition": "2006",
          "reference": "The chemistry of beer aging — a critical review",
          "type": "publication_scientifique",
          "url": "https://talcottlab.tamu.edu/wp-content/uploads/sites/108/2020/03/Review-Beer-Ageing.pdf",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "altbier",
      "nom": "Altbier",
      "collectionId": 7,
      "nature": "S",
      "parentPrincipalId": "ale",
      "aliases": [
        "Alt"
      ],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Düsseldorf, Rhénanie-du-Nord-Westphalie",
        "ville": "Düsseldorf",
        "region": "Rhénanie-du-Nord-Westphalie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.3,
        "max": 5.5,
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
        "min": 20,
        "max": 35,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "hybride",
        "details": "Fermentation haute à température modérée, suivie d’une garde froide qui affine le profil."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Altbierbecher",
          "Verre cylindrique étroit"
        ]
      },
      "description": "À Düsseldorf, l’Altbier relie deux temps : levure de fermentation haute, méthode devenue « ancienne » face aux lagers, puis plusieurs semaines de garde froide. Le résultat est cuivré, sec, finement fruité et franchement amer. Dans l’Altstadt, le Köbes apporte les verres de 0,2 litre jusqu’à ce qu’un sous-bock couvre le dernier. Ici, le procédé et la ville se servent ensemble.",
      "histoireEtOrigines": `Düsseldorf a transformé une position défensive en identité. Lorsque les lagers de fermentation basse progressent au XIXe siècle, les brasseurs rhénans conservent leurs levures de fermentation haute. Le mot Alt — ancien — finit par distinguer cette méthode. La bière actuelle n'est pourtant pas une survivante médiévale intacte : refroidissement, cuves et garde froide lui permettent justement d'adopter la netteté qui faisait la force commerciale des lagers.

Schumacher date sa Hausbrauerei de 1838 et se présente comme la plus ancienne de Düsseldorf. Uerige brasse sa spécialité de fermentation haute depuis 1862. Autour d'elles, Füchschen, Schlüssel, Kürzer et d'autres maisons maintiennent une production urbaine concentrée : l'office du tourisme recense six Altbiere brassées sur le territoire municipal, dont cinq maisons-mères dans l'Altstadt. La pluralité compte, car « l'Alt » locale n'est pas une marque unique.

Le procédé crée son paradoxe. Une levure ale fermente assez frais, puis la bière mûrit plusieurs semaines à basse température. Esters et sous-produits s'intègrent, la levure se dépose, tandis qu'une forte atténuation et des houblons allemands laissent une amertume précise. Classer simplement l'Alt comme « hybride » décrit le résultat mais cache le geste : elle ne mélange pas nécessairement deux levures, elle enchaîne fermentation haute et conditionnement froid.

La ville termine le travail. Dans les brasseries, le Köbes circule avec un plateau de petits verres cylindriques de 0,2 litre. Le remplacement peut se poursuivre sans nouvelle commande jusqu'à ce que le client pose son sous-bock sur le verre. Ce débit rapide sert l'Alt fraîche, multiplie les comparaisons entre maisons et fait de la carbonatation, de la température et du service une même chaîne.

La mémoire de l'Altbier tient donc dans une succession : méthode haute, cave froide, petit verre, nouveau verre. L'ancienne fermentation n'a survécu ni sous cloche ni par nostalgie ; elle s'est modernisée assez habilement pour rester la boisson quotidienne d'une ville entourée de lagers.`,
      "chapitres": [
        {
          "titre": "Haute fermentation, basse température",
          "texte": `Les souches d'Alt travaillent dans la partie fraîche du spectre des ales, souvent autour de 13 à 19 °C selon levure et brasserie. Après la fermentation et l'éventuelle réduction du diacétyle, la garde froide clarifie et affine le profil. Cette séquence demande une levure saine : trop froid au départ peut ralentir l'atténuation et retenir soufre ou diacétyle.

« Hybride » décrit donc une méthode croisée, non une fermentation confuse. La levure reste ale ; la gestion du froid emprunte au monde lager.`
        },
        {
          "titre": "Le sous-bock fait office de feu rouge",
          "texte": `Le petit Altbierbecher accélère le service et garantit une bière renouvelée avant qu'elle ne se réchauffe. Le Köbes remplace le verre et marque le compte sur le sous-bock ; posé sur l'ouverture, celui-ci indique que la série s'arrête.

Le rituel n'est pas un folklore ajouté après la recette. Il règle volume, fraîcheur, carbonatation et rythme de consommation — quatre paramètres sensoriels avec un simple morceau de carton.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt Pilsner allemand ou parfois Munich comme base ; petites quantités de crystal, chocolate ou black malt pour couleur sans torréfaction."
        ],
        "houblons": [
          "Spalt traditionnel ; Tettnanger, Hallertau ou autres houblons allemands/tchèques épicés et floraux possibles."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre et fortement atténuative, adaptée à une fermentation relativement fraîche."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau modérément minérale ; sulfate suffisant pour une amertume précise, sans dureté qui masquerait le malt allemand.",
        "empatage": "Palier unique ou programme multi-palier selon malts et équipement, avec forte atténuation comme objectif plutôt qu'un cérémonial imposé.",
        "ebullitionEtHoublonnage": "Amertume ferme, houblons allemands épicés ou floraux, aromatique moins expansive qu'une ale américaine.",
        "fermentation": "Levure ale ensemencée sainement et fermentée dans une plage fraîche adaptée à la souche ; repos de réduction si nécessaire.",
        "maturation": "Plusieurs semaines à froid pour clarifier, déposer la levure et intégrer les sous-produits avant un service très frais.",
        "profilRecherche": "Une Alt de Düsseldorf sèche, cuivrée et amère, dont la fermentation haute reste subtile derrière la précision acquise en garde froide."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Altbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/7/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brauerei Schumacher",
          "edition": null,
          "reference": "Our Altbier — brewed since 1838",
          "type": "source_producteur_historique",
          "url": "https://schumacher-alt.de/unser-alt/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brauerei Schumacher",
          "edition": null,
          "reference": "Brewery and brewing process",
          "type": "source_producteur_historique",
          "url": "https://schumacher-alt.de/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Uerige Obergärige Hausbrauerei",
          "edition": null,
          "reference": "Uerige Alt — top-fermented house beer since 1862",
          "type": "source_producteur_historique",
          "url": "https://uerige.de/erzeugnisse/biere/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Düsseldorf Tourismus",
          "edition": "2026",
          "reference": "Breweries in Düsseldorf and Altstadt beer culture",
          "type": "source_locale_institutionnelle",
          "url": "https://www.visitduesseldorf.de/en/business/contact-us/media-service/infotexts/the-cult-of-beer-and-brewing-in-dusseldorfs-old-town",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Düsseldorf Tourismus",
          "edition": null,
          "reference": "Köbes service and the 0.2-litre glass ritual",
          "type": "source_locale_institutionnelle",
          "url": "https://www.visitduesseldorf.de/en/experience/sights/altstadt-old-town",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Oxford Companion to Beer",
          "edition": "2011",
          "reference": "Altbier — cool top fermentation",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/kX0vhv1TwC",
          "consultation": "2026-08-11"
        }
      ]
    }
  ]
};

export default collection;
