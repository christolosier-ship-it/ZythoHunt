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
      "description": "L’Ale est la grande famille des fermentations hautes : malt, levure, esters, chaleur douce, fruits, pain, caramel ou houblon selon les branches. Ici, elle sert de tronc commun aux bières brunes, ambrées, écossaises, irlandaises et fortes, là où la fermentation donne souvent plus de rondeur et d’expression qu’une lager.",
      "histoireEtOrigines": `Le mot « ale » est bien plus ancien que les styles modernes qui l'emploient. Dans l'usage brassicole contemporain, il désigne surtout les bières fermentées avec des levures de fermentation haute, par opposition aux lagers de fermentation basse. Cette opposition est pratique mais imparfaite : certaines ales sont fermentées très froid, certaines bières dites hybrides empruntent aux deux mondes, et l'histoire européenne de la bière est plus ancienne que notre classification microbiologique actuelle.

En Grande-Bretagne, « ale » et « beer » ont longtemps eu des sens variables selon les époques, notamment autour de l'usage du houblon. Avec la généralisation de celui-ci, « ale » est progressivement devenu un terme générique pour de nombreuses bières britanniques de fermentation haute. Aujourd'hui il couvre des familles aussi différentes que Mild, Brown Ale, Bitter, Old Ale, Barley Wine, Scottish Ale ou American Strong Ale. Dans ZythoHunt, cette carte doit donc être comprise comme une porte d'entrée taxonomique, pas comme une recette historique unique.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Ale est une famille de fermentation, pas un style de recette unique.",
        "maltsEtCereales": [
          "Orge maltée comme base la plus fréquente, avec blé, avoine, seigle, sucres ou malts spéciaux selon le style."
        ],
        "houblons": [
          "Houblonnage extrêmement variable, de presque absent à intensément aromatique et amer."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces cerevisiae et autres souches de fermentation haute, choisies pour leur atténuation et leur profil ester/phénol."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Adaptée au style : minéralité faible à forte selon la tradition et l'équilibre malt/houblon recherché.",
        "empatage": "Empâtage conçu autour du profil de corps et d'atténuation de chaque style.",
        "ebullitionEtHoublonnage": "Durée et houblonnage variables selon le style ; aucune architecture universelle.",
        "fermentation": "Fermentation généralement plus chaude qu'une lager, mais les températures exactes dépendent fortement de la souche et du style.",
        "maturation": "De quelques jours à plusieurs années selon qu'il s'agit d'une ale de session ou d'une bière forte de garde.",
        "profilRecherche": "Une famille de bières où la fermentation haute constitue le principe commun, sans imposer couleur, force ou niveau de houblon."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "2021 Beer Style Guidelines — familles d'ales",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "2026 Beer Style Guidelines — Ale Styles",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "La Mild Ale est une bière de pub discrète mais pas vide : faible alcool, malt doux, caramel, pain, noix, chocolat léger ou fruits secs selon la couleur. Elle ne cherche ni l’amertume ni la puissance ; elle cherche la pinte qui disparaît sans faire de bruit.",
      "histoireEtOrigines": `« Mild » ne signifiait pas à l'origine « faible en alcool ». Dans la brasserie britannique des XVIIIe et XIXe siècles, le terme décrivait surtout une bière jeune, vendue avant une longue garde, par opposition aux stock ou stale ales vieillies. Des Milds historiques pouvaient dépasser 5 ou 6 % vol. et exister en plusieurs forces dans une même brasserie.

Le style moderne naît d'une longue contraction. À partir de la fin du XIXe siècle puis surtout pendant et après la Première Guerre mondiale, fiscalité, restrictions sur les matières premières et baisse des densités transforment la Mild en bière de pub plus légère. Les versions brunes deviennent dominantes au XXe siècle, au point d'effacer presque totalement les Pale Milds. La concurrence du Bitter puis de la lager provoque un profond déclin après-guerre. CAMRA continue aujourd'hui à défendre cette tradition de bière de session maltée, subtile et peu houblonnée.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La famille Mild couvre historiquement des forces et couleurs très différentes ; les versions modernes sont surtout légères et maltées.",
        "maltsEtCereales": [
          "Malt pale ou mild britannique ; crystal, amber, brown, chocolat ou black malt selon la couleur ; adjuncts et sucres de brasserie possibles."
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
        "profilEau": "Souvent douce à modérément minérale ; l'alcalinité augmente avec les versions plus sombres.",
        "empatage": "Empâtage visant assez de corps pour éviter la minceur malgré une faible densité initiale.",
        "ebullitionEtHoublonnage": "Amertume retenue ; peu ou pas de houblonnage aromatique moderne.",
        "fermentation": "Fermentation haute relativement propre, avec esters britanniques modérés possibles.",
        "maturation": "Courte pour les versions modernes de pub ; conditionnement en cask fréquent.",
        "profilRecherche": "Une ale facile à boire où le malt, le caramel, le pain et parfois le chocolat léger dominent sans lourdeur ni forte amertume."
      },
      "sources": [
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "Mild, Pale — histoire et profil",
          "type": "source_historique_et_style",
          "url": "https://learn.camra.org.uk/beer-styles/mild-pale",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Dark Mild",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Mild Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "La Brown Ale construit son charme dans le brun : noisette, caramel, pain grillé, biscuit, cacao doux ou fruits secs. Elle peut être anglaise et ronde, américaine et plus houblonnée, faible et sucrée ou plus sèche et robuste, mais son centre reste le malt brun.",
      "histoireEtOrigines": `Brown Ale est aujourd'hui une famille utile pour regrouper des ales brunes maltées, mais elle ne constitue pas une lignée historique unique. Le BJCP insiste d'ailleurs sur le fait que Dark Mild, British Brown Ale et Porter ont des histoires indépendantes malgré leurs couleurs voisines. Le terme « brown ale » a été utilisé commercialement de façons très différentes selon les époques et les régions.

Dans sa lecture moderne, la famille couvre surtout les British Brown Ales, les London Brown Ales beaucoup plus sucrées et les American Brown Ales plus houblonnées. Leur point commun est un registre de caramel, noix, biscuit, pain grillé et parfois chocolat léger, mais leurs forces, niveaux d'amertume et histoires divergent nettement.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Brown Ale regroupe plusieurs traditions distinctes et ne possède pas de recette universelle.",
        "maltsEtCereales": [
          "Malt pale comme base ; crystal, brown, amber et petites quantités de chocolat ou malt sombre selon la branche."
        ],
        "houblons": [
          "Houblons britanniques discrets dans les versions anglaises ; houblons américains plus présents dans les versions US."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale britannique ou américaine selon le sous-style."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément carbonatée pour soutenir les malts bruns sans dureté excessive.",
        "empatage": "Empâtage moyen à légèrement chaud pour préserver une texture maltée.",
        "ebullitionEtHoublonnage": "Amertume faible à moyenne en Angleterre, plus ferme dans les versions américaines.",
        "fermentation": "Fermentation haute, fruitée avec retenue côté britannique, plus neutre côté américain.",
        "maturation": "Courte à modérée ; service cask ou bouteille selon tradition.",
        "profilRecherche": "Une bière brune portée par le malt, de la noix et du caramel doux jusqu'à des versions plus sèches et houblonnées."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Brown British Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/19/19C/american-brown-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Brown Ale / American-Style Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "L’Amber Ale est le point d’équilibre entre malt caramelisé et houblon : cuivre, caramel sec, pain grillé, agrumes, fleurs ou résine selon l’origine. Elle n’est pas une pale ale rougie par accident, mais une bière où la couleur annonce une vraie présence maltée.",
      "histoireEtOrigines": `Amber Ale est avant tout une description de couleur devenue catégorie commerciale, pas une tradition ancienne unique. Des ales ambrées existent depuis des siècles, mais la catégorie moderne s'est surtout structurée avec les brasseries craft américaines, qui ont cherché un espace entre Pale Ale et Brown Ale : davantage de caramel et de corps qu'une Pale Ale, moins de torréfaction qu'une Brown Ale.

Le BJCP présente l'American Amber Ale comme une variation moderne de l'American Pale Ale. La famille s'est largement diffusée à partir des années 1980, avec des équilibres très variables : certaines versions sont nettement maltées, d'autres presque aussi houblonnées qu'une Pale Ale. Utiliser « Amber Ale » sans préciser la tradition doit donc rester une catégorie transversale.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Amber Ale décrit surtout une zone de couleur et d'équilibre ; les recettes changent fortement selon le pays et l'époque.",
        "maltsEtCereales": [
          "Malt pale ; malts crystal/caramel pour couleur et rondeur ; petits apports toastés possibles."
        ],
        "houblons": [
          "Houblons variables : anglais discrets, américains ou New World plus expressifs selon la version."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale adaptée à la tradition visée, de fruitée à très neutre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Équilibre sulfate/chlorure choisi selon que la bière privilégie le malt ou le houblon.",
        "empatage": "Empâtage moyen pour conserver du corps sans finir sucré.",
        "ebullitionEtHoublonnage": "Amertume d'équilibre ; houblonnage tardif possible dans les versions craft.",
        "fermentation": "Fermentation haute propre à modérément fruitée.",
        "maturation": "Courte à modérée, souvent orientée fraîcheur.",
        "profilRecherche": "Une ale ambrée équilibrant caramel léger, pain toasté et houblon sans devenir brune ni excessivement sucrée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Amber Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/19/19A/american-amber-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Amber/Red Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "La Red Ale met la couleur au service du malt : cuivre rouge, caramel doux, biscuit, toast léger, parfois houblon floral, terreux ou américain. Selon l’école, elle peut être irlandaise et douce, américaine et plus amère, ou moderne et franchement houblonnée.",
      "histoireEtOrigines": `Red Ale est un terme encore plus ambigu qu'Amber Ale. La couleur rouge peut provenir de malts caramel, de petites quantités de grains très torréfiés ou simplement de la profondeur d'une robe cuivrée. Elle apparaît dans des traditions sans lien direct : Irish Red Ale, American Amber/Red Ale, certaines ales fortes américaines et de nombreux produits commerciaux baptisés « red ».

Il est donc important de ne pas raconter une histoire unique du « style Red Ale ». L'Irish Red est une construction moderne issue du paysage des ales irlandaises ; l'American Red est liée au mouvement craft des années 1980 et au développement d'American Amber Ale. Les versions Double ou Imperial Red sont encore plus récentes et relèvent surtout de la logique craft d'intensification du malt et du houblon.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Red Ale est une catégorie de couleur et de commercialisation qui recouvre plusieurs styles distincts.",
        "maltsEtCereales": [
          "Base pale ; crystal/caramel et très petites quantités de grains foncés pour obtenir le rouge sans goût brûlé."
        ],
        "houblons": [
          "De très discret dans l'Irish Red à puissant dans les interprétations américaines."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale irlandaise, britannique ou américaine selon le style sous-jacent."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Adaptée au style de base ; éviter une alcalinité excessive pour de faibles charges de grains foncés.",
        "empatage": "Empâtage moyen visant équilibre entre fermentescibilité et rondeur maltée.",
        "ebullitionEtHoublonnage": "Houblonnage calé sur la branche : discret à fortement aromatique.",
        "fermentation": "Fermentation haute généralement propre à légèrement fruitée.",
        "maturation": "Courte à modérée ; plus longue pour les versions fortes.",
        "profilRecherche": "Une robe cuivrée à rouge profond au service d'un style identifiable, sans confondre couleur et identité historique."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Irish Red Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/15/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Amber Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/19/19A/american-amber-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Amber/Red Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "La Strong Ale est la famille des ales qui épaississent le rideau : alcool sensible, malt riche, caramel, fruits secs, noix, pain, esters et parfois chaleur douce. Elle doit être profonde sans devenir collante, puissante sans sentir le solvant.",
      "histoireEtOrigines": `Strong Ale est un terme fonctionnel plutôt qu'une généalogie précise. Les brasseries britanniques ont longtemps produit des ales plus riches destinées à la garde, à l'hiver ou aux marchés premium, tandis que les brasseries américaines ont plus tard utilisé « strong ale » pour des bières situées entre Amber Ale, Double IPA et Barleywine.

Les guides modernes utilisent donc Strong Ale comme une zone de classement : la Brewers Association décrit une Strong Ale maltée, riche et peu houblonnée dans son cadre général, tandis que le BJCP distingue British Strong Ale et American Strong Ale. Le point commun est la force et la densité aromatique, pas une recette universelle.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Strong Ale est une famille de force : British Strong, American Strong, Old Ale et autres variantes ont des architectures différentes.",
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
        "profilEau": "Profil suffisamment minéral pour soutenir fermentation et équilibre, sans dureté excessive.",
        "empatage": "Empâtage visant un compromis entre richesse et fermentescibilité ; éviter une finale sirupeuse.",
        "ebullitionEtHoublonnage": "Ébullition souvent plus longue ou plus intense pour concentrer le moût ; houblonnage proportionné à la densité.",
        "fermentation": "Ensemencement généreux, oxygénation soignée et contrôle de température essentiels à une fermentation propre.",
        "maturation": "Souvent plusieurs semaines à plusieurs mois ; certaines versions gagnent à vieillir davantage.",
        "profilRecherche": "Une ale forte où malt, alcool et houblon éventuel restent intégrés, sans chaleur solvante ni sucrosité lourde."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Strong British Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/22B/american-strong-ale/",
          "consultation": "2026-08-08"
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
      "description": "Le Barley Wine est une ale qui regarde le vin droit dans le verre : très forte, dense, maltée, fruitée, parfois oxydée noblement, avec caramel, toffee, pain, marmelade, fruits secs ou houblon massif selon l’école. C’est une bière de petite gorgée et de grande patience.",
      "histoireEtOrigines": `Barley Wine désigne les ales parmi les plus fortes du monde britannique. Le nom n'implique évidemment pas de raisin : il souligne une puissance alcoolique et une capacité de garde comparables à celles d'un vin. Les fortes Burton Ales du XIXe siècle forment une partie importante de cette généalogie ; le BJCP signale Bass No. 1 comme première bière appelée « barley wine » en 1872.

Au XXe siècle, le style s'est diversifié. Les versions anglaises mettent généralement le malt, les fruits secs et la maturation au premier plan ; les versions américaines, à partir des années 1970-1980, renforcent nettement l'amertume et les houblons. Anchor Old Foghorn en 1975 puis Sierra Nevada Bigfoot en 1983 sont devenues des références de cette branche américaine. La famille Barley Wine doit donc conserver ces deux lignées distinctes.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Barley Wine comprend au moins deux grandes écoles modernes : britannique, plus maltée et fruitée, et américaine, plus fortement houblonnée.",
        "maltsEtCereales": [
          "Grande majorité de malt pale de qualité ; crystal en quantité contrôlée ; malts sombres très limités."
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
        "profilEau": "Calcium suffisant et équilibre minéral évitant d'accentuer dureté ou lourdeur.",
        "empatage": "Empâtage plutôt fermentescible malgré la forte densité afin de conserver de la buvabilité.",
        "ebullitionEtHoublonnage": "Ébullition longue fréquente pour concentrer et développer la profondeur maltée ; amertume élevée en valeur absolue pour équilibrer la densité.",
        "fermentation": "Pitch important, oxygénation renforcée et température maîtrisée ; fermentation souvent longue.",
        "maturation": "Plusieurs mois courants ; certaines bouteilles évoluent favorablement pendant des années avec notes de fruits secs, vin doux et oxydation noble.",
        "profilRecherche": "Une ale de dégustation très forte, riche et chaleureuse, mais encore structurée par l'atténuation et l'amertume."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "English Barleywine",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/17D/english-barleywine/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Barleywine",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/strong-american-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Barley Wine Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "L’English Pale Mild Ale est la mild rare en habits clairs : faible alcool, malt pâle, biscuit, pain, fruit léger et amertume modérée. Elle garde l’esprit mild, c’est-à-dire la douceur de pub et la buvabilité, mais sans la robe brune attendue.",
      "histoireEtOrigines": `La Pale Mild rappelle que la Mild britannique n'a pas toujours été brune. Lorsque « mild » signifiait d'abord jeune et non vieillie, la couleur n'était pas une condition. Des Milds pâles ont coexisté avec des versions plus foncées ; elles sont aujourd'hui devenues très rares.

CAMRA décrit encore Pale Mild comme une bière légère, peu amère et dominée par le malt, parfois appelée Light Mild ou Pennine Mild. Elle peut être confondue avec une Pale Ale ou un Bitter, mais son houblonnage plus discret et son objectif de buvabilité maltée la distinguent. Son intérêt encyclopédique est précisément de montrer que l'image moderne « Mild = brune » est une simplification du XXe siècle.`,
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
        "profilEau": "Plutôt douce à modérément minérale.",
        "empatage": "Empâtage moyen à chaud pour préserver du corps malgré la faible densité.",
        "ebullitionEtHoublonnage": "Amertume basse ; pas de forte signature aromatique de houblon.",
        "fermentation": "Fermentation haute douce, visant une bière propre et peu alcoolisée.",
        "maturation": "Courte ; conditionnement cask particulièrement cohérent historiquement.",
        "profilRecherche": "Une ale pâle de session, maltée, douce et subtile, moins houblonnée qu'un Bitter de même force."
      },
      "sources": [
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "Mild, Pale",
          "type": "source_historique_et_style",
          "url": "https://learn.camra.org.uk/beer-styles/mild-pale",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Dark Mild — commentaire sur les versions pâles historiques",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "L’English Dark Mild Ale est la pinte brune de faible gravité : caramel, toffee, pain grillé, noisette, chocolat doux, parfois prune ou raisin. Elle doit être savoureuse malgré son faible degré, sans devenir porter miniature ni eau sucrée.",
      "histoireEtOrigines": `La Dark Mild actuelle est le résultat d'une évolution, pas la forme originelle du Mild. Le BJCP rappelle que les X ales du XIXe siècle ont commencé à s'assombrir dans les années 1880, mais que la teinte brun foncé ne devient véritablement caractéristique qu'après la Première Guerre mondiale. Dans le même temps, les densités chutent fortement.

Au XXe siècle, la Dark Mild devient une bière de pub de faible degré, peu houblonnée, souvent servie en cask. Caramel, pain grillé, noix, chocolat léger ou fruits sombres peuvent apparaître malgré une densité faible. Son déclin à partir des années 1960 a été profond, mais elle reste une tradition vivante défendue par CAMRA et par des brasseries régionales.`,
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
        "profilEau": "Modérément carbonatée, adaptée aux petites charges de grains foncés.",
        "empatage": "Empâtage assez chaud pour conserver texture et rondeur à faible densité.",
        "ebullitionEtHoublonnage": "10 à 25 IBU environ dans le cadre BJCP moderne ; houblon aromatique très discret.",
        "fermentation": "Fermentation haute contrôlée, sans excès d'esters ni diacétyle.",
        "maturation": "Courte ; service cask traditionnel avec carbonatation basse.",
        "profilRecherche": "Une bière sombre de session très buvable, maltée et nuancée, jamais lourde ni fortement torréfiée."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Dark Mild",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "CAMRA",
          "edition": null,
          "reference": "Mild, 60/-",
          "type": "source_historique_et_style",
          "url": "https://learn.camra.org.uk/beer-styles/mild-60",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Mild Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "L’English Brown Ale est une brune confortable : noisette, caramel, biscuit, pain brun, chocolat doux et fruit discret. Elle doit rester ronde, maltée et claire dans son intention, sans basculer vers le porter ni vers l’amertume américaine.",
      "histoireEtOrigines": `La British Brown Ale moderne est une catégorie relativement étroite par rapport à l'immense histoire des bières brunes britanniques. Le BJCP prend soin de préciser qu'elle ne descend pas du Dark Mild et qu'elle n'est pas une étape vers le Porter : ces familles ont simplement fini par partager certaines couleurs et certains marqueurs maltés.

Les exemples modernes sont généralement plus forts qu'une Mild, avec caramel, noix, biscuit, toffee et parfois chocolat léger, mais sans la torréfaction d'un Porter. Les versions du nord de l'Angleterre ont souvent servi de référence internationale au XXe siècle, tandis que la London Brown Ale sucrée constitue une branche historique distincte.`,
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
        "profilEau": "Carbonatation modérée de l'eau, suffisante pour les malts bruns sans accentuer l'âcreté.",
        "empatage": "Empâtage moyen pour une texture souple, ni mince ni sucrée.",
        "ebullitionEtHoublonnage": "Amertume basse à moyenne ; houblon tardif discret.",
        "fermentation": "Fermentation haute à température modérée.",
        "maturation": "Courte à modérée ; conditionnement cask ou bouteille.",
        "profilRecherche": "Une ale brune maltée et équilibrée, évoquant caramel, noix et biscuit sans torréfaction de Porter."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "British Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/13/13b-british-brown-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "La London Brown Ale est plus sombre, plus douce et plus basse en alcool que beaucoup de brown ales : caramel, sucre brun, mélasse légère, pain noir et fruit doux. Elle a quelque chose de dessert de pub, mais doit rester une bière, pas un sirop brun.",
      "histoireEtOrigines": `La London Brown Ale est beaucoup plus précisément documentée que le terme générique Brown Ale. Le BJCP la rattache à Mann's, qui développe en 1902 une Brown Ale en bouteille annoncée à l'époque comme « the sweetest beer in London ». Avant la Première Guerre mondiale, elle tournait autour de 5 % vol., puis sa densité et son alcool diminuent fortement au fil du XXe siècle.

Sa signature moderne est inhabituelle : faible degré, couleur très sombre, amertume basse et douceur marquée. Certaines versions commerciales pasteurisées peuvent être édulcorées après fermentation. Le style décline fortement dans la seconde moitié du XXe siècle et devient une bière historique de niche. Il ne doit donc pas être confondu avec la British Brown Ale moderne, généralement plus sèche et moins sucrée.`,
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
        "profilEau": "Eau modérément à fortement carbonatée, historiquement adaptée aux malts foncés londoniens.",
        "empatage": "Empâtage orienté vers une faible fermentescibilité et un corps doux malgré la faible densité.",
        "ebullitionEtHoublonnage": "Houblonnage minimal ; éviter toute signature moderne intense.",
        "fermentation": "Fermentation haute avec atténuation contenue.",
        "maturation": "Conditionnement bouteille ; stabilisation nécessaire si édulcoration fermentescible après fermentation.",
        "profilRecherche": "Une petite ale brun très foncé, crémeuse et franchement douce, dominée par caramel et toffee plutôt que par le houblon."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: London Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "English-Style Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "L’Irish Red Ale est une bière rouge de comptoir : caramel léger, biscuit, toast sec, parfois une pointe de grain rôti pour sécher la finale. Elle doit être douce sans être sucrée, rousse sans être lourde, irlandaise sans se déguiser en stout.",
      "histoireEtOrigines": `L'Irlande possède une longue histoire de brassage d'ales, mais l'Irish Red Ale moderne ne doit pas être présentée comme une survivance médiévale inchangée. Le BJCP la décrit essentiellement comme une adaptation irlandaise du Bitter anglais : moins houblonnée, souvent plus douce, avec une petite quantité de grain torréfié pour produire une couleur rouge-cuivrée et une finale sèche.

Le style est aujourd'hui devenu une composante standard de nombreuses gammes de brasseries irlandaises et internationales. Les versions irlandaises tendent à rester relativement sèches et modestes en alcool, alors que certaines interprétations étrangères sont plus fortes et caramélisées. La légère note de torréfaction doit rester un accent de finale, pas transformer la bière en stout rouge.`,
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
        "profilEau": "Profil modéré, sulfate/chlorure équilibré pour conserver une finale nette.",
        "empatage": "Empâtage moyen favorisant une bière facile à boire et modérément sèche.",
        "ebullitionEtHoublonnage": "Amertume 18-28 IBU dans le cadre BJCP ; houblon tardif très discret.",
        "fermentation": "Fermentation haute propre, diacétyle éventuel seulement à très faible niveau.",
        "maturation": "Courte à modérée ; bière généralement consommée fraîche.",
        "profilRecherche": "Une ale rouge-cuivrée souple et subtile, légèrement maltée, avec une finale sèche soulignée par une touche de grain torréfié."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Irish Red Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/15/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Irish-Style Red Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "L’Old Ale sent la cave chaude et le temps : malt profond, caramel sombre, fruits secs, prune, cuir doux, noix, oxydation noble et alcool arrondi. Elle peut être plus sèche ou plus douce, mais elle doit évoquer une bière qui a vécu.",
      "histoireEtOrigines": `Old Ale est l'un des rares styles où la garde est aussi importante que le brassage. Historiquement, les stock ales britanniques étaient conservées longtemps avant d'être servies seules ou assemblées avec des bières plus jeunes. Les mots « old », « stale » ou « stock » renvoyaient à cette maturation plutôt qu'à une simple couleur ou densité.

Le style moderne reste variable. Le BJCP distingue des Old Ales relativement faibles et peu vieillies, autour de 4,5 %, et des versions fortes de 6 à 8 % ou davantage où apparaissent fruits secs, caramel, mélasse, notes vineuses, noix et oxydation noble rappelant xérès, porto ou madère. Une acidité légère ou un caractère Brett peut exister dans certaines traditions historiques de garde, mais ne doit jamais servir d'excuse à une bière techniquement dégradée.`,
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
        "profilEau": "Profil modéré compatible avec une bière maltée de longue garde.",
        "empatage": "Empâtage moyen à chaud pour une base riche, tout en conservant assez d'atténuation.",
        "ebullitionEtHoublonnage": "Ébullition souvent soutenue ; houblonnage plus élevé qu'il n'y paraît après vieillissement.",
        "fermentation": "Fermentation haute complète avant transfert en garde ; éviter tout stress de levure sur les versions fortes.",
        "maturation": "Élément central : plusieurs mois à plus d'un an possibles, en cuve, bouteille ou parfois bois, avec évolution oxidative contrôlée.",
        "profilRecherche": "Une ale anglaise mûre, chaleureuse et complexe, où caramel, fruits secs et notes vineuses de garde restent harmonieuses."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Old Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Old Ale / Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "Le British Barley Wine est la version maltée et contemplative du monstre : toffee, pain, caramel, marmelade, fruits secs, sherry doux, alcool chaud et amertume de soutien. Il peut vieillir magnifiquement, en troquant la fougue contre le cuir, la noix et la profondeur.",
      "histoireEtOrigines": `Le British Barley Wine moderne descend des plus fortes ales britanniques, notamment des Burton Ales. Le BJCP cite Bass No. 1, appelée « barley wine » dès 1872, comme jalon déterminant. Ces bières occupaient le sommet de gamme des brasseries : densité élevée, prix élevé, service en petites quantités et aptitude à une longue garde.

Le style a longtemps été associé à des robes ambrées foncées et à des profils très maltés, mais Gold Label de Tennant introduit en 1951 une version dorée qui élargit nettement le spectre. Les British Barley Wines peuvent ainsi aller de l'ambre clair au brun profond. Leur identité repose moins sur la couleur que sur la richesse maltée, les fruits, l'alcool fondu et un houblonnage britannique qui peut être ferme à la jeunesse puis s'effacer avec la garde.`,
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
        "profilEau": "Profil minéral équilibré, assez de calcium pour la fermentation et la clarification.",
        "empatage": "Empâtage plutôt fermentescible malgré la forte densité ; efficacité et oxygénation du moût sont critiques.",
        "ebullitionEtHoublonnage": "Ébullition longue favorisant concentration et complexité ; 35-70 IBU typiques dans le cadre BJCP.",
        "fermentation": "Ensemencement massif, oxygénation poussée et contrôle thermique pour éviter alcools supérieurs et fermentation bloquée.",
        "maturation": "Plusieurs mois minimum pour les versions les plus fortes ; potentiel de garde pluriannuel avec évolution vers fruits secs et notes vineuses.",
        "profilRecherche": "Une ale britannique très forte, riche et veloutée, maltée et fruitée, avec une chaleur alcoolique douce et une amertume fondue."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "English Barleywine",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/17D/english-barleywine/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "British-Style Barley Wine Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "La Scottish Light Ale est petite en force mais bien ancrée : caramel, toast, pain, toffee léger, fruit discret et finale légèrement sèche. Elle donne du malt sans poids, comme une braise modeste dans une chope fraîche.",
      "histoireEtOrigines": `La Scottish Light moderne correspond à la classe 60/- (sixty shilling), mais les appellations en shillings sont souvent mal interprétées comme une échelle de recette intemporelle. Le BJCP rappelle que ces noms étaient employés pour des mild ales avant la Première Guerre mondiale, tandis que les styles tels qu'on les juge aujourd'hui prennent surtout leur forme après la Seconde Guerre mondiale.

La 60/- est devenue rare, souvent servie en cask, et ressemble par sa force à une Dark Mild tout en conservant une identité écossaise plus maltée et propre. Caramel, pain grillé, toffee et une légère sécheresse de malt sombre composent le profil. Le fumé n'est pas une caractéristique obligatoire : le BJCP exclut explicitement le malt tourbé de ses ingrédients typiques.`,
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
        "profilEau": "Plutôt douce, afin de laisser le malt dominer.",
        "empatage": "Empâtage visant assez de corps à faible densité sans produire de lourdeur.",
        "ebullitionEtHoublonnage": "Amertume basse ; presque aucun houblon aromatique perceptible.",
        "fermentation": "Fermentation haute fraîche et propre.",
        "maturation": "Courte ; service cask cohérent avec la tradition moderne.",
        "profilRecherche": "Une petite ale écossaise maltée, douce et très buvable, avec caramel léger et finale légèrement sèche."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Scottish Light",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/14/14A/scottish-light/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Scottish-Style Light Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "La Scottish Heavy Ale reprend le même alphabet malté, mais avec un peu plus d’épaule : caramel, biscuit, pain grillé, toffee et fruit léger. Elle reste une bière de pub, basse en houblon, propre, ronde et sèche juste ce qu’il faut.",
      "histoireEtOrigines": `Scottish Heavy correspond aujourd'hui à la classe 70/-. Comme pour la Light et l'Export, cette dénomination moderne ne doit pas être projetée sans nuance sur plusieurs siècles de bière écossaise. Les shilling ales avaient d'autres usages avant 1914 et le profil actuel se consolide surtout après 1945.

La Heavy occupe un palier intermédiaire : plus forte que la Light, mais toujours bière de session. Elle privilégie le malt, le caramel, le biscuit et une fermentation propre, avec une amertume juste suffisante pour empêcher la sucrosité de dominer. La petite impression de sécheresse grillée parfois perçue ne doit pas être confondue avec une saveur de fumée.`,
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
        "profilEau": "Eau plutôt douce, favorisant la rondeur maltée.",
        "empatage": "Empâtage moyen à chaud pour conserver texture et moelleux.",
        "ebullitionEtHoublonnage": "Houblonnage très mesuré ; caramelisation recherchée surtout par les malts, pas par une réduction extrême du premier moût.",
        "fermentation": "Fermentation haute fraîche, profil propre.",
        "maturation": "Courte à modérée, souvent pour service cask.",
        "profilRecherche": "Une ale écossaise maltée et douce, plus charpentée qu'une Light mais toujours facile à boire."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Scottish Heavy",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/14/14B/scottish-heavy/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Scottish-Style Heavy Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "La Scottish Export Ale est la plus structurée des petites écossaises : malt plus présent, caramel, biscuit, toast, fruit discret et corps plus affirmé. Elle reste retenue en houblon, car ici le malt tient la cornemuse et personne ne lui coupe le souffle.",
      "histoireEtOrigines": `La Scottish Export, souvent associée à l'appellation 80/-, représente le palier standard le plus robuste de la famille écossaise moderne. Les guides contemporains la rapprochent en force d'un Best ou Strong Bitter, mais son équilibre est différent : davantage orienté vers le malt, moins vers le houblon.

Le BJCP souligne que les Light, Heavy et Export partagent un profil apparenté et peuvent historiquement provenir de méthodes de parti-gyle. La couleur va de l'ambre au brun châtaigne, avec caramel, pain toasté et fruits légers. Comme pour les autres Scottish Ales modernes, le malt tourbé n'est pas requis ; le BJCP le rejette même comme ingrédient typique, alors que la Brewers Association admet dans son cadre de concours que certaines versions commerciales modernes peuvent afficher un faible caractère tourbé.`,
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
        "profilEau": "Plutôt douce à modérément minérale.",
        "empatage": "Empâtage moyen préservant la richesse sans produire de sucrosité excessive.",
        "ebullitionEtHoublonnage": "Amertume équilibrante, houblon aromatique très discret.",
        "fermentation": "Fermentation haute propre et relativement fraîche.",
        "maturation": "Courte à modérée ; versions embouteillées parfois plus carbonatées que le cask.",
        "profilRecherche": "Une ale écossaise ambrée à brune, maltée, caramelisée avec retenue et suffisamment sèche pour rester digeste."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Scottish Export",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/14/14C/scottish-export/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Scottish-Style Export Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "La Scotch Ale / Wee Heavy est l’Écosse en version feu de cheminée : malt massif, caramel profond, toffee, pain, fruits secs, alcool doux et corps ample. Elle doit être riche et chaleureuse, mais pas fumée par défaut ni sucrée comme un caramel fondu oublié.",
      "histoireEtOrigines": `La Wee Heavy, également appelée Strong Scotch Ale, ne doit pas être comprise comme une simple Scottish Export renforcée. Le BJCP la rattache plutôt aux fortes Edinburgh Ales, elles-mêmes proches par certains aspects des Burton Ales mais historiquement moins houblonnées. Le terme « wee heavy » est associé au produit Fowler's Wee Heavy, une 12 Guinea Ale.

Les versions modernes se caractérisent par une grande profondeur maltée : pain toasté, caramel, toffee, fruits secs et chaleur alcoolique. Les exemples peuvent aller d'environ 6,5 à 10 % vol. Le BJCP est sans ambiguïté : le malt tourbé ne fait pas partie des ingrédients traditionnels du style. La réputation internationale de la Strong Scotch Ale a néanmoins favorisé, surtout hors d'Écosse, des interprétations fumées qui ont fini par devenir une catégorie distincte dans certains concours.

Traquair offre un intéressant lien entre tradition domestique et revival moderne : sa brasserie du début du XVIIIe siècle, abandonnée au XIXe, fut remise en service en 1965 avec ses anciens équipements et ses cuves de fermentation en chêne.`,
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
        "profilEau": "Douce à modérément minérale, limitant toute dureté houblonnée.",
        "empatage": "Empâtage moyen à chaud pour une forte richesse, mais avec assez de fermentescibilité pour éviter le sirop.",
        "ebullitionEtHoublonnage": "Ébullition soutenue ; la complexité caramel vient du malt et du procédé global, pas d'une obligation de faire bouillir une petite fraction de moût jusqu'au caramel.",
        "fermentation": "Fermentation haute maîtrisée ; température et pitch suffisants pour éviter les alcools solvants.",
        "maturation": "Plusieurs semaines à plusieurs mois ; la chaleur alcoolique doit se fondre.",
        "profilRecherche": "Une ale écossaise forte, ample et maltée, riche en caramel/toffee et fruits secs, avec faible houblon et alcool chaleureux mais doux."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Wee Heavy",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/17C/wee-heavy/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Scotch Ale — Unpeated Scotch Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Traquair House",
          "edition": null,
          "reference": "History of Traquair House Brewery",
          "type": "source_producteur_historique",
          "url": "https://www.traquair.co.uk/brewery/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "La Peated Scotch Ale est une interprétation moderne : une Wee Heavy à laquelle on ajoute fumée tourbée, phénols, terre, braise froide ou whisky. Le danger est immense : trop de tourbe, et la bière devient un pansement flambé dans une cheminée.",
      "histoireEtOrigines": `Peated Scotch Ale est un excellent exemple de catégorie moderne qu'il ne faut pas faire passer pour une tradition immémoriale. L'association intuitive entre Écosse, whisky et tourbe a conduit des brasseurs — particulièrement hors d'Écosse — à ajouter du malt tourbé à des Strong Scotch Ales. Cette pratique a obtenu une visibilité suffisante pour que la Brewers Association distingue aujourd'hui Peated Scotch Ale et Unpeated Scotch Ale dans ses catégories de concours.

Cette reconnaissance moderne ne signifie pas que le caractère tourbé soit historiquement central aux Scotch Ales. Le BJCP 2021 indique au contraire « no peat-smoked malt » pour Wee Heavy et pour les Scottish Ales. La fiche ZythoHunt doit donc présenter Peated Scotch Ale comme une interprétation contemporaine : une base riche et maltée de Scotch Ale à laquelle s'ajoute volontairement une fumée phénolique de tourbe, à doser avec beaucoup de retenue.`,
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
        "profilEau": "Douce à modérément minérale.",
        "empatage": "Empâtage riche mais suffisamment fermentescible pour éviter que tourbe et sucrosité ne s'additionnent lourdement.",
        "ebullitionEtHoublonnage": "Faible houblonnage ; concentration adaptée à une strong ale.",
        "fermentation": "Fermentation haute propre, sans phénols de levure qui brouilleraient la fumée du malt.",
        "maturation": "Plusieurs semaines ou mois afin d'intégrer alcool, malt et fumée.",
        "profilRecherche": "Une Scotch Ale forte et maltée où une fumée tourbée identifiable reste secondaire et intégrée, jamais médicinale ou dominante."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Peated Scotch Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Wee Heavy — no peat-smoked malt",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/17/17C/wee-heavy/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "L’American Amber / Red Ale pousse la couleur vers le houblon : caramel sec, pain grillé, agrumes, pin, fruits ou fleurs, avec une amertume plus nette que les rouges britanniques ou irlandaises. Le malt donne le socle, le houblon allume les néons.",
      "histoireEtOrigines": `L'American Amber/Red Ale naît avec le mouvement craft américain comme variation plus sombre et plus maltée de l'American Pale Ale. Le BJCP cite Mendocino Red Tail Ale, brassée dès 1983, comme un jalon important de cette identité « red ale » régionale avant sa diffusion nationale.

La catégorie se situe volontairement dans un espace d'équilibre : malt caramel et toasté plus présent qu'en Pale Ale, houblons américains ou New World encore clairement perceptibles, mais sans l'intensité d'une Red IPA ou d'une Double Red. « Amber » et « Red » sont ici deux expressions commerciales d'une même famille craft moderne plutôt que deux lignées historiques distinctes.`,
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
        "profilEau": "Sulfate/chlorure équilibré ou légèrement orienté sulfate pour soutenir le houblon sans amincir le malt.",
        "empatage": "Empâtage moyen pour conserver du corps tout en finissant proprement.",
        "ebullitionEtHoublonnage": "25-40 IBU typiques BJCP ; ajouts tardifs ou dry hop possibles mais modérés par rapport à une IPA.",
        "fermentation": "Fermentation haute propre, température contrôlée.",
        "maturation": "Courte ; bière destinée à conserver une expression fraîche des houblons.",
        "profilRecherche": "Une ale ambrée à rouge-cuivrée où caramel et houblons américains se soutiennent sans que l'un écrase l'autre."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Amber Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/19/19A/american-amber-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Amber/Red Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "L’American Brown Ale garde le brun mais ajoute l’énergie craft : chocolat, caramel, noisette, toast, houblon américain, amertume moyenne à forte et finale plus sèche. Elle doit rester Brown Ale, pas devenir porter houblonné ni Brown IPA déguisée.",
      "histoireEtOrigines": `L'American Brown Ale appartient à la première génération de styles craft américains construits à partir de modèles britanniques puis rééquilibrés avec davantage de houblon. Le style commercial moderne s'est assagi par rapport à certaines recettes homebrew des débuts, mais conserve un contraste plus affirmé qu'une British Brown Ale entre malt brun et houblons américains.

Caramel, noix, chocolat léger et toast composent la base, tandis que les houblons peuvent aller d'un simple soutien à une présence franche. Le BJCP précise que la torréfaction ne doit pas évoquer Porter ou Stout : le style reste une Brown Ale, pas une bière noire fortement grillée.`,
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
        "profilEau": "Profil équilibré, assez de sulfate pour la netteté du houblon et de chlorure pour le corps.",
        "empatage": "Empâtage moyen pour une texture ronde mais non sucrée.",
        "ebullitionEtHoublonnage": "Amertume généralement plus ferme qu'en British Brown ; houblonnage tardif modéré à soutenu.",
        "fermentation": "Fermentation propre, esters faibles à modérés.",
        "maturation": "Courte à modérée.",
        "profilRecherche": "Une brown ale américaine équilibrant caramel, noix et chocolat léger avec un houblon moderne perceptible mais non dominant."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/19/19C/american-brown-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Brown Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "L’American Black Ale cherche l’ombre sans la lourdeur : robe noire, malt sombre doux, cacao, toast, parfois café léger, mais aussi houblon américain, agrumes, pin ou résine. Elle doit être noire et vive, pas porter sucré ni stout épais.",
      "histoireEtOrigines": `American Black Ale est une catégorie craft moderne née de la rencontre entre une bière très houblonnée et une robe noire. Selon les régions et les cadres de concours, des produits voisins ont été appelés Black IPA ou Cascadian Dark Ale. La Brewers Association conserve cependant une catégorie American-Style Black Ale distincte, définie par un houblonnage élevé et une présence de malts sombres qui doit rester douce, sans brûlé ni astringence.

Le style ne cherche donc pas à fabriquer un Stout houblonné. Les meilleurs exemples utilisent des malts noirs désamérisés ou des quantités maîtrisées de grains torréfiés pour obtenir couleur et légère profondeur cacao, tout en laissant le houblon moderne mener l'aromatique. Sa place dans cette collection vient de son identité d'ale américaine sombre et maltée/houblonnée, même si elle chevauche le territoire des IPA noires.`,
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
        "profilEau": "Profil plutôt sulfaté pour une finale nette, tout en contrôlant pH et alcalinité liés aux malts sombres.",
        "empatage": "Empâtage moyen à bas pour conserver une finale relativement sèche ; malts foncés éventuellement ajoutés tard pour limiter l'âcreté.",
        "ebullitionEtHoublonnage": "Amertume élevée et houblonnage tardif/dry hop conséquent.",
        "fermentation": "Fermentation propre mettant le houblon en avant.",
        "maturation": "Courte, à l'abri de l'oxygène pour préserver couleur propre et aromatique de houblon.",
        "profilRecherche": "Une ale noire fortement houblonnée, sèche et nette, où la torréfaction reste basse et jamais brûlée."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Black Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American IPA / Specialty IPA context",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/21/",
          "consultation": "2026-08-08"
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
      "description": "La Double Hoppy Red Ale transforme la red ale en bête de houblon : caramel rouge, malt toasté, amertume haute, agrumes, pin, résine ou fruits rouges. Elle doit garder une charpente maltée, sinon ce n’est qu’une IPA rouge qui a oublié son costume.",
      "histoireEtOrigines": `Double Hoppy Red Ale n'est pas une tradition historique autonome mais une logique craft d'intensification de l'American Amber/Red Ale. La lignée est cohérente avec le développement des Double Reds et des American Strong Ales : davantage de densité, de caramel et surtout de houblons, jusqu'à frôler Red IPA ou American Barleywine selon la force.

Le BJCP classe aujourd'hui de nombreux « Double Red Ales » dans American Strong Ale et cite explicitement ce type de bière parmi les expressions possibles. La carte doit donc décrire une zone de style moderne, pas prétendre à un canon unique. Le mot « hoppy » est essentiel : une simple strong red maltée sans forte expression de houblon se rapproche davantage d'Imperial Red ou d'American Strong Ale générique.`,
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
        "profilEau": "Sulfate modéré à élevé pour porter l'amertume, avec assez de chlorure pour soutenir le malt.",
        "empatage": "Empâtage plutôt fermentescible afin que la densité et le caramel ne rendent pas la bière lourde.",
        "ebullitionEtHoublonnage": "Amertume élevée, houblonnage tardif massif et éventuellement dry hop.",
        "fermentation": "Fermentation haute propre avec pitch généreux pour la densité supérieure.",
        "maturation": "Courte à modérée ; consommation relativement fraîche pour conserver les houblons.",
        "profilRecherche": "Une double red américaine puissante, rouge/cuivrée, caramélisée mais sèche, dominée par un houblon intense sans devenir un Barleywine sucré."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Strong Ale — Double Red Ales",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/22B/american-strong-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Amber/Red Ale and Strong Ale categories",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
        "details": "Fermentation haute, avec une expression de levure et une température adaptées au style."
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
      "description": "L’Imperial Red Ale grossit la Red Ale jusqu’au format de dégustation : alcool élevé, caramel profond, malt rouge, houblon massif, fruits, pin, résine et chaleur. Elle doit rester tendue et sèche, pas sombrer dans le sirop de caramel houblonné.",
      "histoireEtOrigines": `Imperial Red Ale appartient au vocabulaire craft moderne où « imperial » signifie une version renforcée d'un style existant. Il n'existe pas de tradition impériale rouge ancienne comparable à l'histoire de l'Imperial Stout. La catégorie s'est développée lorsque les brasseries américaines ont augmenté simultanément alcool, malt caramel et houblonnage de leurs Amber/Red Ales.

Selon les guides et concours, ces bières peuvent être classées comme American Strong Ale, Strong Red Ale ou Imperial Red. Le BJCP décrit justement American Strong Ale comme l'espace entre American Barleywine, Double IPA et Red IPA, et rappelle ses liens avec les Double Reds. La frontière avec Double Hoppy Red tient plus à l'équilibre choisi qu'à une généalogie différente.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Base pale importante ; crystal/caramel pour couleur et richesse ; malts toastés éventuels."
        ],
        "houblons": [
          "Houblons américains/New World de modérés à très élevés selon équilibre visé."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale américaine robuste et neutre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil équilibré à légèrement sulfaté, adapté à une bière forte et houblonnée.",
        "empatage": "Empâtage assez fermentescible pour éviter une finale collante malgré la forte densité.",
        "ebullitionEtHoublonnage": "Amertume élevée proportionnée au malt ; houblon tardif/dry hop selon interprétation.",
        "fermentation": "Pitch élevé, oxygénation correcte et contrôle thermique pour une fermentation complète.",
        "maturation": "Quelques semaines pour intégrer alcool et malt ; fraîcheur importante si le houblon est dominant.",
        "profilRecherche": "Une red ale américaine forte, profonde et structurée, où caramel, alcool et houblon restent équilibrés."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/22B/american-strong-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Strong Ale / Strong Red Ale context",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "L’American Strong Ale est une grande ale américaine sans laisse courte : malt riche, caramel, fruits, houblon marqué, alcool, amertume et parfois bois. Elle peut frôler barley wine, double red ou strong amber, mais doit rester cohérente, pas simplement “tout plus fort”.",
      "histoireEtOrigines": `American Strong Ale est explicitement une catégorie de regroupement moderne plutôt qu'un style historique étroit. Le BJCP la définit comme l'espace entre American Barleywine, Double IPA et Red IPA : des bières fortes où malt et houblon sont tous deux puissants mais généralement en équilibre.

Le style a une parenté de forme avec les anciennes American Stock Ales très houblonnées d'avant la Prohibition, mais le BJCP précise qu'il n'existe pas de continuité directe. Les versions craft contemporaines proviennent surtout de la logique d'« imperialisation » des Amber/Red Ales et d'autres ales américaines. Elles peuvent offrir caramel, toffee, fruits, pin, agrumes et résine, avec alcool perceptible mais non brûlant.`,
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
          "Levure ale américaine neutre ou légèrement fruitée, bonne tolérance alcoolique."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Sulfate/chlorure équilibré selon orientation malt/houblon ; calcium suffisant pour la fermentation.",
        "empatage": "Empâtage moyen à plutôt fermentescible pour garder une forte bière buvable.",
        "ebullitionEtHoublonnage": "Amertume typiquement élevée ; houblonnage aromatique conséquent mais moins extrême qu'une Double IPA selon l'équilibre.",
        "fermentation": "Pitch généreux, oxygénation soignée et contrôle thermique.",
        "maturation": "Quelques semaines à quelques mois selon force ; le houblon plaide pour une consommation plus jeune qu'un Barleywine.",
        "profilRecherche": "Une strong ale américaine dense, maltée et houblonnée, puissante mais équilibrée, sans lourdeur sirupeuse ni alcool agressif."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Strong Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/22B/american-strong-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Strong Ale / Other Strong Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
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
      "description": "L’American Barley Wine est le barley wine avec les bottes de combat : malt massif, alcool élevé, caramel, pain, fruits secs, mais aussi houblon frontal, agrumes, pin, résine et amertume durable. Il vieillit bien, mais jeune, il peut rugir comme une tronçonneuse fruitée.",
      "histoireEtOrigines": `L'American Barleywine est une adaptation craft de l'English Barleywine qui transforme profondément l'équilibre par le houblon. Le BJCP cite Anchor Old Foghorn, brassée pour la première fois en 1975, comme l'un des premiers exemples américains modernes. Sierra Nevada Bigfoot, lancé en 1983, fixe ensuite le modèle très houblonné qui devient emblématique du style.

Contrairement à une Double IPA, l'American Barleywine garde un corps plus riche, une base maltée plus massive et une vocation de dégustation lente. Jeune, il peut être intensément amer, résineux et fruité ; avec quelques années, le houblon s'assagit et la bière évolue vers caramel, fruits secs, vin doux et notes oxydatives harmonieuses. Cette capacité de garde fait partie de son identité, sans rendre obligatoire le vieillissement.`,
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
        "profilEau": "Calcium suffisant, sulfate souvent plus élevé que dans la version britannique pour soutenir l'amertume.",
        "empatage": "Empâtage fermentescible et gestion attentive d'une très forte densité.",
        "ebullitionEtHoublonnage": "Ébullition longue fréquente ; forte amertume et houblonnage aromatique/dry hop possibles.",
        "fermentation": "Pitch massif, oxygénation renforcée et contrôle thermique rigoureux.",
        "maturation": "Quelques mois minimum pour intégrer l'alcool ; potentiel de garde de plusieurs années, avec perte progressive du houblon frais.",
        "profilRecherche": "Une ale américaine extrêmement forte, maltée et amère, riche mais non sirupeuse, où le houblon puissant dialogue avec une base de Barleywine."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "American Barleywine",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/22/strong-american-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Barley Wine Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "San Francisco Planning Department",
          "edition": null,
          "reference": "Anchor Brewing cultural history — Old Foghorn 1975",
          "type": "source_historique_institutionnelle",
          "url": "https://www.sf.gov/sites/default/files/2024-09/item_3a._lbr-2018-19-053_anchor_brewing.pdf",
          "consultation": "2026-08-08"
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
      "description": "L’Altbier est une ale allemande qui pense comme une lager : cuivre, malt toasté, noisette, amertume ferme, fermentation haute propre et garde froide. Elle doit être sèche, nette et élégante, avec le malt et le houblon en ligne droite, pas en bagarre de taverne.",
      "histoireEtOrigines": `Altbier est la grande exception géographique de cette collection : une ale ambrée allemande, profondément liée à Düsseldorf. Le mot « Alt » signifie ici l'ancienne manière de fermenter — fermentation haute — par contraste avec l'essor des lagers. Mais le BJCP corrige une autre simplification fréquente : l'Altbier moderne se développe surtout à la fin du XIXe siècle en utilisant des techniques de garde froide pour concurrencer les lagers ; il ne s'agit pas d'une bière médiévale restée inchangée.

Le résultat est une bière de fermentation haute au profil étonnamment propre : malt allemand riche, forte atténuation, amertume ferme, houblons épicés/floraux et maturation froide. Dans les Altstadtbrauereien de Düsseldorf, elle reste une bière de débit et de session malgré sa profondeur aromatique.

Schumacher, qui se présente comme la plus ancienne Hausbrauerei de Düsseldorf, brasse son Alt depuis 1838. Son exemple actuel illustre bien le style : fermentation haute, robe ambrée, Tettnanger et équilibre entre malt et houblon.`,
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
        "profilEau": "Eau modérément minérale ; sulfates suffisants pour soutenir l'amertume mais sans dureté agressive.",
        "empatage": "Empâtage multi-palier traditionnel possible, visant forte atténuation et profondeur maltée.",
        "ebullitionEtHoublonnage": "Amertume ferme, généralement 25-50 IBU BJCP ; aromatique noble modéré.",
        "fermentation": "Fermentation haute à température fraîche, suivie d'une phase de conditionnement froid.",
        "maturation": "Lagering à froid de plusieurs semaines pour lisser esters et affiner la bière.",
        "profilRecherche": "Une ale ambrée de Düsseldorf sèche, propre, maltée mais nettement amère, avec la douceur de texture d'une bière longuement conditionnée à froid."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Altbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/7/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brauerei Schumacher",
          "edition": null,
          "reference": "Our Altbier — brewed since 1838",
          "type": "source_producteur_historique",
          "url": "https://schumacher-alt.de/en/our-altbier/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brauerei Schumacher",
          "edition": null,
          "reference": "Brewery and brewing process",
          "type": "source_producteur_historique",
          "url": "https://schumacher-alt.de/en/brewery-and-brewing-process/",
          "consultation": "2026-08-08"
        }
      ]
    }
  ]
};

export default collection;
