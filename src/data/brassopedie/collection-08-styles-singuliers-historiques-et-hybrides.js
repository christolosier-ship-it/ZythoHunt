// Source canonique de la collection : taxonomie + contenu encyclopédique.
// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.

const collection = {
  "schemaVersion": "1.0.0",
  "taxonomyVersion": "1.0.0",
  "collection": {
    "id": 8,
    "slug": "styles-singuliers-historiques-et-hybrides",
    "nom": "Styles singuliers, historiques et hybrides"
  },
  "cartes": [
    {
      "id": "cream-ale",
      "nom": "Cream Ale",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": "ale",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Nord-Est des États-Unis",
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
        "max": 20,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 5,
        "max": 10,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "hybride",
        "details": "Procédé hybride combinant une fermentation atypique pour la famille et une maturation destinée à nettoyer le profil."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 6,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "American pint",
          "Pilsner"
        ]
      },
      "description": "Pâle, pétillante et discrètement céréalière, la Cream Ale est une réponse d’ale à la soif de lager. Maïs ou riz peuvent alléger sa trame ; une fermentation très propre et une garde fraîche effacent les angles. Le mot cream ne promet ni crème ni lactose : seulement une facilité de service qui a longtemps fait d’elle une bière de comptoir avant d’être une catégorie de concours.",
      "histoireEtOrigines": `À la fin du XIXe siècle, la lager gagne les verres américains avec sa robe claire, sa netteté et sa stabilité. Les brasseurs d'ales ne disposent pas tous des mêmes caves froides ni du même équipement. Leur riposte n'est pas une imitation parfaite, mais une famille de bières rapides, pâles et effervescentes, vendues sous des noms tels que cream ale, lively ale ou present-use ale.

Le manuel de Wahl et Henius publié en 1901 décrit ces ales de consommation courante comme des concurrentes de la lager : fermentation haute, matières premières américaines et, selon les maisons, garde fraîche ou mélange avec une bière de fermentation basse. Le maïs n'y joue pas le rôle d'un parfum obligatoire ; il apporte des sucres et allège la charge protéique d'orges américaines souvent riches en azote. Le mot cream relève du langage commercial de douceur et de qualité. Aucune vache n'entre dans le procédé.

La Prohibition brise une grande partie de cette continuité. Après l'abrogation, quelques marques entretiennent ou réemploient le nom. La Cream Ale de Genesee, lancée en 1960, devient un repère durable, sans être pour autant l'acte de naissance du terme. Les guides modernes ont resserré cette histoire diffuse en un profil : bière claire, peu amère, fermentée très proprement, parfois avec une levure lager ou une garde froide.

La mémoire utile tient donc dans une rivalité industrielle : la Cream Ale existe parce que des brasseurs d'ales ont appris à parler le langage sensoriel de la lager sans renoncer entièrement à leurs outils.`,
      "chapitres": [
        {
          "titre": "Une technique de rapprochement, pas une recette secrète",
          "texte": `L'étiquette moderne réunit plusieurs chemins vers la même impression de netteté. Une souche d'ale peu estérifiée peut fermenter puis séjourner au froid ; une levure de lager peut travailler plus chaud que dans une Pils ; certaines pratiques anciennes combinaient même des bières issues de fermentations différentes. Ce qui compte est la conséquence : peu d'esters, peu de soufre, un corps léger et une carbonatation vive.

Cette pluralité explique pourquoi les documents anciens ne livrent pas une formule universelle. Chercher « l'inventeur » de la Cream Ale reviendrait à demander qui a inventé la bière facile à vendre face à une concurrente plus populaire : beaucoup de brasseurs ont eu la même idée, avec des cuves différentes.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale ou six-rangs ; maïs ou riz possibles pour alléger le corps et la couleur."
        ],
        "houblons": [
          "Houblonnage américain ou continental discret, généralement 10-22 IBU dans le cadre BA."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre ; certaines versions utilisent une levure lager fermentée relativement chaud ou une fermentation hybride."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau plutôt douce à modérément minérale pour préserver la netteté.",
        "empatage": "Empâtage favorisant une bonne fermentescibilité et un corps léger.",
        "ebullitionEtHoublonnage": "Une ébullition franche chasse les précurseurs soufrés des moûts très pâles ; l'amertume reste basse et les ajouts tardifs discrets afin de ne pas transformer la réponse à la lager en pale ale.",
        "fermentation": "Souche d'ale neutre, levure lager conduite relativement chaud ou procédé mixte : l'ensemencement et la température visent surtout une atténuation régulière sans esters marqués.",
        "maturation": "Une garde fraîche précipite levure et protéines, arrondit le soufre éventuel et prépare une carbonatation moyenne à vive.",
        "profilRecherche": "Une bière américaine pâle, nette et désaltérante : grain léger, douceur contenue, finale sèche à légèrement ronde, sans goût de crème ni fruité tapageur."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Cream Ale",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Genesee Brewing Company",
          "edition": null,
          "reference": "Genesee Cream Ale — style standard since 1960",
          "type": "source_producteur_historique",
          "url": "https://www.geneseebeer.com/beer/genesee-cream-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian Libraries and Archives",
          "edition": "1901",
          "reference": "Wahl & Henius — American Handy-Book of the Brewing, Malting and Auxiliary Trades",
          "type": "ouvrage_historique_numerise",
          "url": "https://library.si.edu/digital-library/book/americanhandyboo00wahl",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Beervana",
          "edition": "2021",
          "reference": "Genny Cream Ale — enquête sur les present-use ales et le nom Cream Ale",
          "type": "recherche_historique_specialisee",
          "url": "https://www.beervanablog.com/beervana/2021/2/3/genny-cream-ale",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "california-common-steam-beer",
      "nom": "California Common / Steam Beer",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "California Common",
        "Steam Beer"
      ],
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
        "min": 4.5,
        "max": 5.5,
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
        "min": 20,
        "max": 28,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "hybride",
        "details": "Levure lager fermentée à une température relativement chaude, sans long lagering classique."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "American pint",
          "Pokal"
        ]
      },
      "description": "San Francisco a donné à cette lager ambrée une drôle de météo intérieure : levure de fermentation basse, cuve plus chaude qu’une cave bavaroise, malt toasté et houblon boisé. La California Common moderne est nette mais pas muette, ferme sans lourdeur. Steam Beer en est le nom historique le plus célèbre — et une marque protégée aux États-Unis, détail capable de faire mousser davantage les juristes que la bière.",
      "histoireEtOrigines": `Sur la côte pacifique du XIXe siècle, les brasseurs immigrés veulent produire des lagers dans un monde où glace, caves profondes et réfrigération mécanique ne sont pas toujours disponibles. Des « steam beers » apparaissent en Californie bien avant Anchor : bières de fermentation basse conduites et servies dans des conditions adaptées à l'économie locale, souvent jeunes et très carbonatées. Le terme est attesté, mais son étymologie ne l'est pas avec la même solidité.

Plusieurs récits font venir la « vapeur » de cuves ouvertes refroidies sur les toits, du sifflement des fûts sous pression ou d'un vocabulaire allemand déformé. Les archives ne permettent pas de couronner un vainqueur. Le manuel américain de Wahl et Henius de 1901 traite la steam beer comme une classe pratique de bière, sans livrer la petite scène fondatrice que la légende réclame.

Après la Prohibition, la tradition régionale s'efface presque entièrement. Anchor Brewing, dont les racines commerciales remontent à 1896, survit difficilement avant son rachat par Fritz Maytag en 1965. La brasserie transforme Anchor Steam en modèle moderne : robe ambrée, levure lager fermentée relativement chaud, houblon Northern Brewer et contrôle technique bien plus précis que celui des saloons du XIXe siècle. Le nom Steam Beer devient une marque américaine d'Anchor ; California Common sert dès lors d'appellation générique dans les guides.

Anchor ferme en juillet 2023, puis ses actifs sont acquis en mai 2024 par Hamdi Ulukaya. Au moment de cette édition, la relance annoncée n'a pas encore rétabli une production régulière. Le style demeure pourtant : une adaptation de frontière devenue, par la patience d'une brasserie, l'un des emblèmes de la renaissance artisanale américaine.`,
      "chapitres": [
        {
          "titre": "Le froid absent a changé le calendrier",
          "texte": `Une levure lager n'impose pas à elle seule une lager classique. À température plus élevée, elle fermente plus vite et peut produire davantage de composés aromatiques ou soufrés ; une garde fraîche plus courte laisse aussi une bière moins polie. Le défi consiste à conserver une finale nette tout en assumant ce léger relief fermentaire.

La California Common contemporaine stabilise ce compromis par le contrôle de température. Elle ne reproduit pas littéralement chaque steam beer ancienne : elle traduit une contrainte historique en profil volontaire. Entre improvisation du XIXe siècle et cuverie moderne, le thermomètre est devenu auteur.`
        },
        {
          "titre": "Un nom à deux statuts",
          "texte": `Steam beer appartient au vocabulaire historique américain, mais STEAM BEER est aussi une marque enregistrée associée à Anchor. Cette double vie explique la prudence des concours et des brasseries, qui emploient California Common pour la famille générique. La distinction ne prouve pas qu'Anchor ait inventé toutes les steam beers ; elle montre comment une entreprise a fixé commercialement un héritage dispersé.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt pale et/ou lager ; crystal ou malts toastés pour la robe ambrée et le caractère pain/caramel."
        ],
        "houblons": [
          "Northern Brewer historiquement emblématique dans la version Anchor ; amertume moyenne à soutenue."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager capable de fermenter proprement à température relativement élevée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modérément minéral, permettant une amertume ferme sans dureté.",
        "empatage": "Empâtage simple visant un corps moyen et une bonne atténuation.",
        "ebullitionEtHoublonnage": "Une amertume ferme structure le malt ambré ; des ajouts tardifs de Northern Brewer ou d'un houblon au registre boisé, mentholé et rustique signent le modèle moderne sans viser l'explosion aromatique d'une IPA.",
        "fermentation": "Une levure lager travaille typiquement autour du bas de la plage des ales : assez chaud pour accélérer le cycle, assez maîtrisé pour limiter esters et alcools supérieurs.",
        "maturation": "Une garde fraîche nettoie le soufre et stabilise la bière, mais reste moins longue qu'un lagering continental classique afin de préserver son relief.",
        "profilRecherche": "Une bière ambrée nette, toastée et fermement houblonnée, avec fermentation lager chaude mais sans esters envahissants."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "California Common Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Anchor Brewing",
          "edition": null,
          "reference": "Steam Beer / California Common brewing tradition",
          "type": "source_producteur_historique",
          "url": "https://www.anchorbrewing.com/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "San Francisco Office of Small Business",
          "edition": "2019",
          "reference": "Anchor Brewing Company — Legacy Business Registry staff report",
          "type": "dossier_patrimonial_local",
          "url": "https://www.sf.gov/sites/default/files/2024-09/item_3a._lbr-2018-19-053_anchor_brewing.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Anchor Brewing Company Records, 1954–2019",
          "type": "fonds_archives",
          "url": "https://www.si.edu/es/object/archives/sova-nmah-ac-1591",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "USPTO — Trademark Trial and Appeal Board",
          "edition": null,
          "reference": "Dossier de marque STEAM BEER",
          "type": "registre_marque",
          "url": "https://ttabvue.uspto.gov/ttabvue/v?pnam=Eli+Gershkovitch++",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Associated Press",
          "edition": "2024",
          "reference": "Acquisition d'Anchor Brewing par Hamdi Ulukaya",
          "type": "agence_de_presse",
          "url": "https://apnews.com/article/426baf7d70fc3983f4224a8b73b75967",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "San Francisco Chronicle",
          "edition": "2026",
          "reference": "Anchor Brewing reopening: état du projet de relance",
          "type": "presse_locale_reference",
          "url": "https://www.sfchronicle.com/food/wine/article/anchor-brewing-reopening-chobani-22224714.php",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "kentucky-common",
      "nom": "Kentucky Common",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "Louisville, Kentucky",
        "ville": "Louisville",
        "region": "Kentucky",
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
        "min": 20,
        "max": 40,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute rapide et propre ; l’acidité lactique ne fait pas partie du profil historique documenté."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "American pint",
          "Dimple mug"
        ]
      },
      "description": "Brune dans le verre, légère sur l’addition : la Kentucky Common alimentait rapidement les saloons de Louisville. Orge américaine, maïs, une touche de malt sombre, fermentation vive et carbonatation en fût donnent une ale sèche, céréalière et désaltérante. Son histoire moderne lui a parfois ajouté une acidité empruntée au bourbon ; les registres connus, eux, gardent le mash aigre derrière la porte.",
      "histoireEtOrigines": `Louisville grandit au XIXe siècle comme ville fluviale, industrielle et brassicole. Dans ses saloons, la bière quotidienne doit être bon marché et tourner vite. La Kentucky Common répond à cette économie : fermentation haute de trois à cinq jours, départ en fût vers six à huit jours, puis consommation sans la longue garde exigée par une lager.

Les recettes documentées autour de 1900 adaptent les ressources américaines. L'orge six-rangs apporte enzymes et protéines ; le maïs allège le moût ; de faibles quantités de malts caramel et noir ajustent couleur et saveur. Les brasseurs doivent aussi composer avec une eau bicarbonatée, qu'ils peuvent traiter plutôt que célébrer comme un ingrédient mystique. L'ensemble produit une bière ambrée à brune, sèche, vive et modérément houblonnée — une couleur de porter avec un agenda de bière courante.

Une estimation souvent reprise lui attribue environ les trois quarts de la bière vendue à Louisville avant la Prohibition. Le chiffre provient de reconstitutions historiques et mérite cette nuance ; la domination locale, elle, est bien établie. L'interdiction nationale de 1920 ferme les brasseries ou les convertit, et la production ne retrouve pas sa continuité après 1933.

La renaissance artisanale a parfois greffé au style la technique du sour mash, par analogie avec le whiskey du Kentucky. Les documents de grandes brasseries étudiés par les historiens du BJCP n'en apportent pas la preuve. La Kentucky Common reconstruite gagne donc à conserver une acidité au plus légère, issue du grain ou de l'eau, plutôt qu'à jouer les sour ales en chapeau de cowboy.`,
      "chapitres": [
        {
          "titre": "Huit jours entre la cuve et le saloon",
          "texte": `La vitesse n'est pas un détail pittoresque mais le moteur du style. Fermentée avec une levure d'ale, la bière évite le long séjour froid d'une lager ; transférée avant épuisement complet des sucres, elle achève sa prise de mousse dans le fût. Le saloon devient le dernier maillon de la chaîne de production.

Ce circuit court explique simultanément le prix, la fraîcheur et la disparition. Une bière attachée aux brasseries locales, aux fûts retournables et à un débit soutenu résiste mal à la Prohibition puis à la concentration industrielle. Sa reconstruction actuelle part de registres et de manuels, pas d'une bouteille restée intacte sous un comptoir.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt d'orge six-rangs ; maïs en proportion notable ; petites quantités de caramel et de malt noir pour couleur et ajustement du moût."
        ],
        "houblons": [
          "Houblons américains rustiques pour l'amertume ; houblons continentaux possibles en finition."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale rapide et propre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau historiquement carbonatée de Louisville, souvent corrigée par précipitation des carbonates et ajout de gypse.",
        "empatage": "Un cereal mash ou des flocons rendent l'amidon du maïs accessible ; la capacité enzymatique du six-rangs convertit l'ensemble. Aucune acidification prolongée n'est documentée comme principe du style.",
        "ebullitionEtHoublonnage": "L'amertume reste présente mais brève, avec des houblons américains d'époque possibles ; le malt noir colore davantage qu'il ne doit torréfier.",
        "fermentation": "Fermentation haute rapide ; historiquement mise en fût avant fin complète pour carbonatation en cave de saloon.",
        "maturation": "Très courte : c'est une bière de service frais, pas une bière de garde.",
        "profilRecherche": "Une ale ambrée à brune, sèche, légèrement caramélisée et céréalière, très buvable, sans acidité volontaire."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Kentucky Common",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Kentucky Common historical notes — no evidence for sour mash",
          "type": "source_historique",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian Libraries and Archives",
          "edition": "1901",
          "reference": "Wahl & Henius — American Handy-Book of the Brewing, Malting and Auxiliary Trades",
          "type": "ouvrage_historique_numerise",
          "url": "https://library.si.edu/digital-library/book/americanhandyboo00wahl",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brew Your Own",
          "edition": null,
          "reference": "Kentucky Common — Style Profile",
          "type": "presse_technique_specialisee",
          "url": "https://byo.com/articles/kentucky-common-style-profile/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "american-malt-liquor",
      "nom": "American Malt Liquor",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "Malt Liquor"
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
        "min": 6,
        "max": 9,
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
        "min": 4,
        "max": 14,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse très atténuante d’un moût fortement alcooligène, conduite pour limiter chaleur et alcools supérieurs."
      },
      "service": {
        "temperatureMin": 3,
        "temperatureMax": 6,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Shaker",
          "Chope"
        ]
      },
      "description": "L’American Malt Liquor concentre beaucoup d’alcool dans la silhouette légère d’une lager pâle : peu d’amertume, fermentation poussée, céréales ou sucres d’appoint et profil volontairement neutre. Liquor ne signifie pourtant pas spiritueux ; la boisson reste brassée et fermentée. Le style raconte autant l’ingénierie de la haute densité que les bouteilles de quarante onces et le marketing américain d’après-guerre.",
      "histoireEtOrigines": `Le malt liquor américain naît moins d'un terroir que d'une équation industrielle du milieu du XXe siècle : obtenir davantage d'alcool sans construire la masse maltée d'un bock. Des producteurs emploient malts pâles, maïs ou riz, sucres fermentescibles et, dans certains procédés, enzymes capables d'ouvrir davantage de dextrines à la levure. Le résultat reste une malt beverage au sens fédéral, non une boisson distillée, malgré un nom qui aime porter une veste plus large que lui.

Après la Seconde Guerre mondiale, la catégorie trouve son marché dans les lagers fortes, les formats généreux et la concurrence par le rapport degré-prix. Sa trajectoire commerciale devient indissociable des bouteilles de quarante onces et d'une publicité ciblant fortement les quartiers noirs et latinos. Des recherches en santé publique ont documenté cette concentration publicitaire ; la culture populaire s'est ensuite emparée du produit, sans effacer les rapports de pouvoir qui ont façonné sa vente.

Le terme possède aussi une vie réglementaire mouvante. Les définitions fédérales décrivent les malt beverages par leurs matières premières et leur fermentation, tandis que plusieurs États emploient malt liquor comme catégorie légale au-dessus d'un seuil d'alcool différent. Une même bouteille peut donc être « beer » dans un texte et « malt liquor » dans un autre : la recette n'a pas changé pendant que le législateur tournait la page.

Les guides sensoriels contemporains isolent un profil pâle, très atténué et peu houblonné. Cette définition ne doit pas lisser son histoire sociale : le malt liquor est à la fois une solution technique, une catégorie de droit et un objet de marketing controversé.`,
      "chapitres": [
        {
          "titre": "Faire monter l'alcool sans épaissir la bière",
          "texte": `Une forte densité initiale laisse normalement davantage de matière et met la levure sous pression osmotique puis alcoolique. Les sucres simples et les adjuncts bien convertis augmentent la part fermentescible du moût ; une souche robuste et suffisamment nourrie transforme cette réserve en alcool avec moins de dextrines résiduelles. La garde froide élimine ensuite une partie du relief fermentaire.

La neutralité apparente demande donc beaucoup de contrôle. Un moût trop pauvre en nutriments fatigue la levure ; une température mal tenue produit alcools supérieurs et solvants ; une atténuation incomplète laisse une douceur lourde. La puissance discrète n'est pas l'absence de technique, mais sa disparition derrière le produit.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt lager ou pale ; maïs, riz ou sucres fermentescibles fréquents afin d'augmenter l'alcool sans alourdir le corps."
        ],
        "houblons": [
          "Houblonnage très faible à faible, essentiellement structurel."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager neutre et fortement atténuative ; certaines interprétations hybrides existent."
        ],
        "ingredientsComplementaires": [
          "Adjuncts céréaliers et/ou sucres très fermentescibles ; enzymes exogènes possibles dans la production industrielle."
        ],
        "profilEau": "Eau plutôt douce afin d'éviter toute dureté dans une bière fortement atténuée.",
        "empatage": "Empâtage orienté vers une forte fermentescibilité et un corps léger.",
        "ebullitionEtHoublonnage": "Le houblon apporte juste assez d'amertume et de stabilité pour contenir la douceur ; une ébullition efficace limite le diméthylsulfure des moûts pâles riches en adjuncts.",
        "fermentation": "Oxygénation, nutriments, taille d'ensemencement et température sont dimensionnés pour une forte densité. L'objectif est d'éviter à la fois sucres résiduels lourds, solvants et soufre persistant.",
        "maturation": "Garde froide destinée à lisser alcool et fermentation.",
        "profilRecherche": "Une bière américaine pâle et forte, neutre, sèche à légèrement douce, dont l'alcool est perceptible mais sans richesse maltée massive."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "American-Style Malt Liquor",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Alcohol and Tobacco Tax and Trade Bureau",
          "edition": null,
          "reference": "Beer and Malt Beverage Definitions",
          "type": "source_reglementaire",
          "url": "https://www.ttb.gov/regulated-commodities/beverage-alcohol/beer/beer-and-malt-beverage-definitions",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "All About Beer",
          "edition": null,
          "reference": "A Story Without Heroes: The Cautionary Tale of Malt Liquor",
          "type": "presse_historique_specialisee",
          "url": "https://allaboutbeer.com/article/a-story-without-heroes-the-cautionary-tale-of-malt-liquor/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Journal of Urban Health",
          "edition": "2011",
          "reference": "Outdoor alcohol advertising: a 21-city study of exposure by race and socioeconomic status",
          "type": "publication_scientifique",
          "url": "https://pubmed.ncbi.nlm.nih.gov/21409702/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "pre-prohibition-lager",
      "nom": "Pre-Prohibition Lager",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [],
      "paysOrigine": [
        "États-Unis"
      ],
      "origine": {
        "libelle": "États-Unis avant 1920",
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
        "details": "Fermentation basse fraîche, puis garde prolongée : le procédé lager absorbe la proportion de maïs sans gommer le houblonnage."
      },
      "service": {
        "temperatureMin": 4,
        "temperatureMax": 7,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pilsner",
          "American pint"
        ]
      },
      "description": "Dorée, sèche et franchement houblonnée, la Pre-Prohibition Lager reconstruit la lager américaine d’avant 1920. L’orge six-rangs lui donne des enzymes et du grain ; maïs ou riz assouplissent ce matériau sans réduire la bière au silence. Plus robuste que la lager industrielle d’après-guerre, elle porte dans son verre une histoire interrompue : ici, le préfixe pre n’est pas décoratif, c’est la cassure.",
      "histoireEtOrigines": `Au XIXe siècle, l'immigration germanophone apporte aux États-Unis levures de fermentation basse, caves de garde et goût de la lager. Le transfert ne produit pas une copie conforme de la Pils européenne. Les brasseurs rencontrent une orge six-rangs américaine plus riche en protéines, très enzymatique, et des houblons locaux au caractère différent. Ils construisent une lager adaptée plutôt qu'importée.

Le maïs et le riz deviennent des outils de formulation. Un cereal mash gélatinise leurs amidons avant que les enzymes du malt ne les convertissent. Le maïs peut laisser une rondeur céréalière ; le riz tend vers une finale plus sèche et neutre. Ces adjuncts ne prouvent donc pas une recherche automatique du moindre coût : ils corrigent aussi la composition du grain et la buvabilité. Les recettes historiques peuvent recevoir Cluster, houblons continentaux importés ou combinaisons des deux, avec une amertume que la lager américaine standard du XXe siècle rendra presque exotique.

La Prohibition nationale entre en vigueur en 1920. Brasseries fermées, équipements détournés et savoir-faire dispersés rompent la chaîne. Après 1933, consolidation, rationnement de guerre, publicité nationale et quête de stabilité déplacent le marché vers des lagers plus légères. La Pre-Prohibition Lager servie aujourd'hui est donc une reconstruction guidée par manuels, analyses et recettes, parfois appelée Classic American Pilsner.

L'image à garder est un sac de six-rangs à côté d'une cuve à céréales : une tradition immigrée devenue américaine parce qu'elle a dû résoudre un problème de matière première.`,
      "chapitres": [
        {
          "titre": "Reconstituer sans prétendre ressusciter",
          "texte": `Les manuels techniques comme celui de Wahl et Henius décrivent des procédés, mais ils ne conservent ni chaque souche de levure ni chaque récolte de houblon. Les malts modernes sont plus homogènes, les équipements mieux fermés et la microbiologie mieux contrôlée. Une recette exacte sur le papier ne recrée donc pas automatiquement le verre de 1905.

Le style de concours choisit des traits documentés et récurrents — grain américain, adjunct possible, fermentation basse, houblonnage ferme — puis fixe une cible utilisable. Il s'agit d'histoire appliquée, avec notes de bas de page invisibles, non d'un portail temporel muni d'un barboteur.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt six-rangs ou deux-rangs ; maïs ou riz en adjunct traditionnel selon la variante."
        ],
        "houblons": [
          "Cluster et autres houblons américains historiques ; Saaz ou houblons continentaux possibles en finition."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager propre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil variable selon les villes américaines ; sulfates modérés utiles aux versions plus amères.",
        "empatage": "Empâtage adapté aux adjuncts, historiquement souvent avec cereal mash pour maïs ou riz non précuits.",
        "ebullitionEtHoublonnage": "Ébullition longue et houblonnage plus ferme que dans la lager américaine moderne.",
        "fermentation": "Fermentation basse puis lagering complet.",
        "maturation": "Garde froide de plusieurs semaines pour netteté et stabilité.",
        "profilRecherche": "Une lager américaine pré-Prohibition robuste, céréalière, sèche à ronde et nettement houblonnée, sans dilution aromatique moderne."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Pre-Prohibition Lager",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian Libraries and Archives",
          "edition": "1901",
          "reference": "Wahl & Henius — American Handy-Book of the Brewing, Malting and Auxiliary Trades",
          "type": "ouvrage_historique_numerise",
          "url": "https://library.si.edu/digital-library/book/americanhandyboo00wahl",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Economic History Association",
          "edition": null,
          "reference": "A Concise History of America's Brewing Industry",
          "type": "histoire_economique",
          "url": "https://eh.net/encyclopedia/a-concise-history-of-americas-brewing-industry/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "American Brewing History Initiative Oral History Collection",
          "type": "fonds_archives_orales",
          "url": "https://sirismm.si.edu/EADpdfs/NMAH.AC.1595.pdf",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "kellerbier-zwickelbier",
      "nom": "Kellerbier / Zwickelbier",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": "lager",
      "aliases": [
        "Kellerbier",
        "Zwickelbier"
      ],
      "paysOrigine": [
        "Allemagne",
        "Europe"
      ],
      "origine": {
        "libelle": "Franconie et régions brassicoles européennes",
        "ville": null,
        "region": "Franconie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 7,
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
        "min": 5,
        "max": 60,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "Fermentation basse de la lager choisie, menée à terme avant une garde et un service non filtré depuis la cave."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Willi Becher"
        ]
      },
      "description": "Kellerbier nomme moins une recette qu’une bière prise au plus près de sa cave : lager pleinement fermentée, non filtrée, souvent non pasteurisée, avec une texture souple et un léger voile de levure. Une Zwickelbier rappelle le Zwickel, robinet d’échantillonnage de la cuve. Helles, Pils, Märzen ou Dunkel peuvent passer par cette porte ; le trouble n’y obtient jamais un permis pour masquer les défauts.",
      "histoireEtOrigines": `Dans les caves franconiennes, Kellerbier signifie simplement « bière de cave ». Avant que filtration brillante, pasteurisation et longue distribution ne deviennent des attentes industrielles, boire une lager depuis son récipient de maturation relevait d'un état de service plus que d'une recette. Elle gardait levure, protéines et une carbonatation parfois plus douce, avec la fraîcheur d'un produit proche de la brasserie.

Le mot Zwickel déplace l'attention vers un objet : le petit robinet qui permet de prélever un échantillon sur une cuve. Zwickelbier évoque ainsi la bière goûtée au robinet, souvent jeune mais correctement achevée. L'usage commercial moderne rapproche fréquemment les deux termes, sans les rendre historiquement identiques ni limiter la pratique à une couleur.

Le profil franconien classique est souvent ambré, apparenté à une Märzen rustique ; des Kellerpils, Helles ou Dunkel existent aussi. Voilà pourquoi les chiffres couvrent une plage large. Le procédé ajoute fraîcheur, texture et levure résiduelle à une architecture déjà existante. Il ne transforme pas une fermentation incomplète, beurrée ou soufrée en patrimoine culturel par la seule grâce d'une étiquette gothique.

Cette entrée raconte donc le dernier mètre entre la cuve et le verre. La famille lager fournit la grammaire ; la cave décide ce qui n'est pas retiré avant le service.`,
      "chapitres": [
        {
          "titre": "Le Zwickel, un petit robinet qui a baptisé une bière",
          "texte": `Le prélèvement permet au brasseur de suivre densité, arômes et maturation sans ouvrir le récipient. Servir cette bière d'échantillon a donné au mot Zwickelbier son image de produit immédiat. L'objet explique mieux le nom qu'une prétendue recette secrète.

La levure en suspension peut renforcer rondeur et impression de fraîcheur, mais elle évolue. Sans filtration ni pasteurisation, oxygène, chaleur et temps raccourcissent la stabilité aromatique. Une Kellerbier voyage donc moins sereinement qu'une lager industrielle brillante : sa proximité fait partie de sa qualité.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Mode de maturation et de service appliqué à plusieurs lagers : la différence décisive vient de ce qui reste dans la bière et de la distance entre cave et verre, non d'un grist universel.",
        "maltsEtCereales": [
          "Grist de la lager servie — Pilsner, Helles, Märzen ou Dunkel — sans céréale imposée par le mot Kellerbier."
        ],
        "houblons": [
          "Houblons allemands ou tchèques accordés à la lager choisie ; certaines Kellerpils modernes les montrent davantage."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager propre ; levure résiduelle naturellement présente puisque la bière n'est pas filtrée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Le profil suit la lager portée par la pratique ; les eaux et traitements franconiens ne composent pas un modèle unique.",
        "empatage": "Le schéma appartient à la Helles, Pils, Märzen ou Dunkel choisie ; une décoction peut enrichir le malt, mais ne définit pas le mot Kellerbier.",
        "ebullitionEtHoublonnage": "L'amertume et les ajouts aromatiques restent ceux de la lager concernée. Une bière moins filtrée peut paraître plus ronde et modifier leur perception sans changer la dose.",
        "fermentation": "Fermentation basse menée à terme : levure visible ne signifie ni densité bloquée ni diacétyle obligatoire.",
        "maturation": "Garde froide en cave, puis service sans filtration et souvent sans pasteurisation ; cette fragilité impose fraîcheur et chaîne du froid.",
        "profilRecherche": "Une lager allemande fraîche, pleinement fermentée, légèrement plus rustique et crémeuse que sa base, jamais verte ou sulfureuse."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Kellerbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": null,
          "reference": "Bier from the Keller",
          "type": "presse_technique_specialisee",
          "url": "https://www.beerandbrewing.com/bier-from-the-keller",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "grodziskie-piwo-grodziskie",
      "nom": "Grodziskie / Piwo Grodziskie",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "Grodziskie",
        "Piwo Grodziskie"
      ],
      "paysOrigine": [
        "Pologne"
      ],
      "origine": {
        "libelle": "Grodzisk Wielkopolski",
        "ville": "Grodzisk Wielkopolski",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 2.5,
        "max": 3.3,
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
        "type": "haute",
        "details": "Fermentation haute très atténuante, historiquement vive, destinée à laisser le blé fumé, le houblon et l’effervescence au premier plan."
      },
      "service": {
        "temperatureMin": 5,
        "temperatureMax": 8,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Flûte",
          "Pokal"
        ]
      },
      "description": "Dans une flûte, la Grodziskie assemble trois choses qui semblent refuser de tenir ensemble : peu d’alcool, une fumée de chêne bien lisible et une mousse presque cérémonielle. Le blé fumé porte une bière pâle, sèche, amère et très carbonatée. Grodzisk Wielkopolski l’a exportée sous le nom allemand Grätzer ; sa disparition en 1993 a transformé chaque bouteille moderne en exercice de mémoire.",
      "histoireEtOrigines": `Grodzisk Wielkopolski a changé de souveraineté et de nom, mais sa bière a longtemps voyagé sous deux étiquettes : Piwo Grodziskie en polonais, Grätzer en allemand. Les origines lointaines sont difficiles à dater avec certitude ; la singularité industrielle des XIXe et XXe siècles, elle, est mieux documentée. Des malteries locales fument du blé au bois de chêne, les brasseries assemblent parfois plusieurs souches de levure et conditionnent une bière très effervescente destinée bien au-delà de la ville.

Sa faible densité n'annonce aucune timidité. Le malt fumé fournit une impression de feu sec, le houblon apporte une amertume ferme et la bouteille développe une mousse abondante. Le surnom commercial de « champagne polonais » traduit cette présentation et cette carbonatation ; il ne transforme pas la bière en vin effervescent, pas plus qu'il ne constitue une appellation historique uniforme.

Nationalisations, concentration et évolution des goûts réduisent progressivement la production après la Seconde Guerre mondiale. La dernière brasserie de Grodzisk ferme en 1993. Des brasseurs, historiens et associations reconstituent ensuite recettes, malt fumé et cultures de levure ; la production revient dans les années 2010, notamment sur le site relancé de Grodzisk.

Cette renaissance a ses limites. Intensité de fumée, microbiologie et matières premières ont changé ; une fiche de brassage ne met pas 1993 en marche arrière. Le profil contemporain protège néanmoins le paradoxe central : une bière légère dont la fumée, l'amertume et la mousse occupent beaucoup plus d'espace que son alcool.`,
      "chapitres": [
        {
          "titre": "Le blé fumé au chêne, moteur et obstacle",
          "texte": `Des recettes historiques utilisent une très forte proportion, parfois la totalité, de malt de blé fumé. Le chêne produit une signature plus sèche que l'image de jambon souvent associée au Rauchbier. Mais le blé possède peu d'enveloppes : le lit filtrant se compacte facilement, tandis que ses protéines nourrissent la mousse spectaculaire du produit fini.

Les reconstitutions modernes doivent donc résoudre deux problèmes simultanés : fabriquer un malt dont la fumée rappelle les descriptions et faire circuler le moût à travers une masse riche en blé. Le verre limpide et pétillant est l'aboutissement d'un brassage qui, lui, n'a rien d'aérien.`
        },
        {
          "titre": "Disparue, puis reconstruite",
          "texte": `La fermeture de 1993 marque une rupture de production, pas l'effacement des documents. Analyses, témoignages, archives et matériel biologique conservé ont permis aux acteurs de la renaissance de choisir une cible commune. Ce travail est plus solide qu'une simple imitation sensorielle, mais il demeure une reconstruction.

Cette nuance protège l'histoire : dire que la Grodziskie est revenue signifie qu'un projet collectif a réactivé ses traits distinctifs, non que toutes les bouteilles d'avant-guerre auraient eu exactement le profil fixé par les concours du XXIe siècle.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt de blé fumé au chêne, traditionnellement très majoritaire voire exclusif."
        ],
        "houblons": [
          "Houblons polonais, tchèques ou allemands épicés/herbacés ; amertume soutenue pour la faible densité."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre et très atténuative ; levure Weizen phénolique inadaptée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau modérément dure et sulfatée, favorable à la finale sèche et amère.",
        "empatage": "Des paliers peuvent ajuster protéines et fermentescibilité. Avec peu d'enveloppes de grain, débit lent, mouture maîtrisée et support filtrant deviennent décisifs.",
        "ebullitionEtHoublonnage": "Ébullition historiquement longue ; houblonnage ferme, sans fruit moderne dominant.",
        "fermentation": "Fermentation haute propre et complète.",
        "maturation": "Clarification puis forte carbonatation, traditionnellement en bouteille ; service jeune.",
        "profilRecherche": "Une bière de blé très pâle, légère, sèche, amère et fortement mousseuse, avec fumée de chêne élégante et aucune acidité volontaire."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Piwo Grodziskie",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Ron Pattinson",
          "edition": null,
          "reference": "Grätzer/Grodziskie historical brewing records",
          "type": "source_historique_secondaire",
          "url": "https://barclayperkins.blogspot.com/2007/12/grodziskiegratzer.html",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Browar Grodzisk",
          "edition": null,
          "reference": "The legend — production, fermeture de 1993 et renaissance",
          "type": "source_producteur_historique",
          "url": "https://browargrodzisk.com/en/the-legend/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brew Your Own",
          "edition": null,
          "reference": "Piwo Grodziskie — histoire et reconstruction technique",
          "type": "presse_technique_specialisee",
          "url": "https://byo.com/articles/piwo-grodziskie/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "TVP World",
          "edition": "2025",
          "reference": "The beer that came back from the dead: the return of the Polish Champagne",
          "type": "presse_patrimoniale",
          "url": "https://tvpworld.com/87260183/the-beer-that-came-back-from-the-dead-the-return-of-the-polish-champagne",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "lichtenhainer",
      "nom": "Lichtenhainer",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Thuringe, autour de Lichtenhain",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 4.7,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 5,
        "max": 12,
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
        "type": "mixte",
        "details": "Fermentation haute assortie d’une acidité lactique légère ; le moment et la culture d’acidification restent incertains dans les sources anciennes."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 9,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Tulipe"
        ]
      },
      "description": "La Lichtenhainer fait se croiser fumée et acidité dans une petite bière de Thuringe : céréales pâles, citron lactique, feu de bois sec, faible amertume et finale vive. Son nom vient d’un village près d’Iéna, mais sa réputation couvrait autrefois une région plus large. Disparue comme produit continu, elle revient aujourd’hui par fragments documentaires ; la saucisse au vinaigre n’en fait pas partie.",
      "histoireEtOrigines": `Autour d'Iéna, plusieurs villages de Thuringe produisent autrefois des bières de fermentation haute, légères et régionales. Lichtenhain donne son nom à celle qui retient la mémoire des guides modernes. Les textes de la fin du XIXe siècle la décrivent comme une bière de blé ou de céréales mêlées, fumée et acidulée, consommée bien au-delà du hameau qui l'a baptisée.

Les descriptions historiques ne s'emboîtent pas toutes. Proportion de blé, intensité du malt fumé, moment où l'acidité apparaît : les sources varient avec la date et le producteur. Certaines indiquent une fermentation d'abord propre puis une acidification pendant le stockage. Cette incertitude interdit d'élever le kettle sour contemporain au rang de procédé ancestral universel.

L'industrialisation et la concentration brassicole effacent la constellation régionale au XXe siècle. La Lichtenhainer moderne est donc reconstruite autour de son couple le mieux attesté : fumée et acidité lactique, sur un corps léger et peu houblonné. Elle se distingue ainsi de la Grodziskie polonaise, fumée mais non volontairement acide et beaucoup plus amère.

Sa force narrative n'est pas une date de naissance : c'est un paysage de bières locales réduit à quelques descriptions, puis remis en fermentation.`,
      "chapitres": [
        {
          "titre": "Deux intensités qui doivent laisser passer la bière",
          "texte": `Acidité et fumée saturent vite le palais. Une production d'acide lactique mesurée donne tension et fraîcheur ; une fumée douce rappelle le foyer sans recouvrir céréale et fermentation. Le faible houblonnage évite aussi que les iso-alpha-acides n'entravent inutilement les bactéries lactiques.

La reconstruction technique peut acidifier avant, pendant ou après la fermentation principale. Ces chemins n'ont ni le même risque microbiologique ni le même fruité. Le résultat historique ne se déduit donc pas du seul pH : le profil recherché conserve l'impression d'une bière quotidienne, non d'une démonstration de deux boutons poussés à fond.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt d'orge fumé et malt de blé ; le blé représente souvent environ 30 à 50 %, mais les grists historiques varient."
        ],
        "houblons": [
          "Houblonnage très faible ; l'acidité assure l'essentiel de l'équilibre."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre et bactéries lactiques ; pas de funk Brett requis."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau plutôt douce à modérée pour laisser acidité et fumée lisibles.",
        "empatage": "Empâtage favorisant une bière légère et fortement atténuée.",
        "ebullitionEtHoublonnage": "Houblonnage bas afin de ne pas inhiber inutilement les bactéries lactiques.",
        "fermentation": "Fermentation haute et acidification lactique propre, simultanée ou séquentielle selon la reconstruction.",
        "maturation": "Courte ; le style se sert jeune et vif.",
        "profilRecherche": "Une wheat ale légère, sèche, acidulée et fumée, où citron et feu de bois sec se répondent sans lourdeur ni funk."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Lichtenhainer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Ron Pattinson",
          "edition": null,
          "reference": "Lichtenhainer — History by the Glass",
          "type": "source_historique_secondaire",
          "url": "https://www.beeradvocate.com/articles/11624/lichtenhainer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Milk the Funk",
          "edition": null,
          "reference": "Lichtenhainer — sources historiques et pratiques de reconstruction",
          "type": "ressource_technique_collaborative",
          "url": "https://www.milkthefunk.com/wiki/Lichtenhainer",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "adambier",
      "nom": "Adambier",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Dortmund, Westphalie",
        "ville": "Dortmund",
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
        "min": 30,
        "max": 50,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 30,
        "max": 70,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute d’un moût dense, suivie d’une garde longue où atténuation, acidité et oxydation ménagée construisent le profil."
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
      "description": "Avant que Dortmund ne parle couramment la lager Export, l’Adambier y formait une forte ale sombre de garde. Une analyse du XIXe siècle révèle densité, alcool, amertume et acidité ; les recréations y ajoutent parfois fumée, bois ou Brettanomyces avec des preuves plus fragiles. La bière ressemble donc à un dossier d’archives incomplet : assez de pages pour intriguer, pas assez pour autoriser tous les costumes.",
      "histoireEtOrigines": `Dortmund n'a pas toujours été la capitale d'une lager pâle. Parmi ses bières de fermentation haute figurait l'Adambier, forte, sombre et destinée à une longue garde. Des auteurs lui prêtent une ancienneté médiévale, mais les données quantitatives les plus utiles viennent surtout du XIXe siècle ; remonter plus loin exige davantage de conditionnel que de trompettes.

Wahl et Henius reproduisent l'analyse d'un échantillon de 1889 : moût très dense, environ 9,4 % d'alcool en volume et acidité lactique mesurable. D'autres descriptions insistent sur un houblonnage abondant et un vieillissement prolongé. Ces indices dessinent une stock ale allemande puissante, capable d'évoluer pendant un an ou davantage, plutôt qu'une sour beer rapidement acidifiée.

La montée des lagers industrielles transforme Dortmund et marginalise ces ales. L'Adambier disparaît sans laisser une spécification complète : couleur exacte, fumage des malts, type de bois et rôle de Brettanomyces changent selon les reconstitutions modernes. Ces choix peuvent produire une bière convaincante ; ils ne deviennent pas historiques par fermentation spontanée de l'imagination.

L'Adambier se lit donc comme un rapport d'enquête. Ce que l'on sait solidement — force, fermentation haute, garde, houblonnage et acidité documentée — encadre ce que les brasseurs contemporains interprètent.`,
      "chapitres": [
        {
          "titre": "Une analyse chimique, pas une recette complète",
          "texte": `L'analyse de 1889 fixe des grandeurs que la mémoire sensorielle ne peut pas inventer : densité, extrait résiduel, alcool et acidité. Elle montre qu'une bière forte et acide existait bien sous ce nom. Elle ne dit cependant ni quelle souche dominait la cave, ni si chaque lot touchait le bois, ni quel combustible avait séché le malt.

Cette frontière méthodologique est précieuse. La reconstruction peut employer une culture mixte ou un fût pour retrouver une évolution lente, mais elle doit présenter ces outils comme des hypothèses techniques. Le laboratoire éclaire le fantôme ; il ne lui rend pas tout son visage.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malts d'orge riches et sombres ; les sources historiques divergent sur l'usage du blé, donc aucune proportion universelle ne doit être imposée."
        ],
        "houblons": [
          "Houblonnage historiquement très élevé pour une bière forte de garde ; variétés allemandes ou équivalentes."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale pour la fermentation primaire ; une culture lactique de garde est plausible pour reconstruire l'acidité documentée, tandis que Brettanomyces reste un choix interprétatif."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil minéral modéré, compatible avec une forte amertume et une longue garde.",
        "empatage": "Empâtage riche produisant un moût dense mais suffisamment fermentescible pour supporter une longue maturation.",
        "ebullitionEtHoublonnage": "Ébullition soutenue et houblonnage protecteur important.",
        "fermentation": "Fermentation haute primaire, puis évolution secondaire lente.",
        "maturation": "Historiquement au moins un an pour les versions documentées ; bois ou grands récipients possibles selon reconstruction.",
        "profilRecherche": "Une forte ale sombre de Dortmund, très maltée et houblonnée, avec acidité de garde intégrée et aucune piqûre vinaigrée."
      },
      "sources": [
        {
          "organisme": "Ron Pattinson",
          "edition": null,
          "reference": "Adambier — analyses historiques de Dortmund",
          "type": "source_historique_secondaire",
          "url": "https://barclayperkins.blogspot.com/2010/04/adambier.html",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Ron Pattinson",
          "edition": null,
          "reference": "That 1869 Adambier again",
          "type": "source_historique_secondaire",
          "url": "https://barclayperkins.blogspot.com/2018/07/that-1869-adambier-again.html",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian Libraries and Archives",
          "edition": "1901",
          "reference": "Wahl & Henius — analyse d'un Adambier de Dortmund de 1889",
          "type": "ouvrage_technique_historique",
          "url": "https://library.si.edu/digital-library/book/americanhandyboo00wahl",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Beervana",
          "edition": "2013",
          "reference": "What the Brewers Association Did With Adambier",
          "type": "analyse_historique_critique",
          "url": "https://www.beervanablog.com/beervana/2013/03/what-brewers-association-did-with.html",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "dutch-kuyt-kuit",
      "nom": "Dutch Kuyt / Kuit",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "Kuyt",
        "Kuit"
      ],
      "paysOrigine": [
        "Pays-Bas"
      ],
      "origine": {
        "libelle": "Hollande médiévale",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 8,
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
        "min": 10,
        "max": 40,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Levure ale plutôt neutre à légèrement fruitée, afin que la texture d’avoine et le trio de céréales restent lisibles."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Tulipe",
          "Gobelet"
        ]
      },
      "description": "Kuit, Kuyt ou Koyt ouvre les registres urbains des anciens Pays-Bas sur une bière où l’avoine prend beaucoup plus de place qu’aujourd’hui. Les reconstructions modernes mêlent avoine maltée, blé et orge dans une ale souple, céréalière et modérément houblonnée. Une formule de concours aide à la brasser ; elle ne transforme pas plusieurs siècles de règlements changeants en porridge médiéval standardisé.",
      "histoireEtOrigines": `À la fin du Moyen Âge, les villes de Hollande et des régions voisines réglementent grains, force et commerce de la bière. Les mots kuit, kuyt, koyt ou keut circulent dans ces textes, mais leur contenu change selon l'endroit et le siècle. Le nom désigne une famille économique autant qu'une saveur : quantités de céréales, droits et qualité sont surveillés parce que la bière rapporte et nourrit le marché urbain.

L'avoine occupe souvent une place majeure aux côtés de l'orge et du blé. Le passage du gruit au houblon n'est ni instantané ni identique partout ; certaines occurrences anciennes appartiennent encore à un monde d'aromates contrôlés, tandis que les kuit plus tardifs sont houblonnés. Les orthographes survivront plus facilement que les proportions.

La catégorie moderne choisit un intervalle historique, approximativement 1400–1550, et en tire une formule utilisable : au moins 45 % d'avoine maltée, au moins 20 % de blé malté, le complément en orge pâle dans le cadre de la Brewers Association. C'est un protocole de reconstruction et de jugement, non l'article intemporel d'une loi médiévale unique.

La renaissance néerlandaise a rendu cette céréale presque oubliée visible aux brasseurs contemporains. Son intérêt tient précisément à la différence entre archive et style : les règlements révèlent une diversité passée ; le guide moderne sélectionne une branche pour qu'elle puisse de nouveau remplir les verres.`,
      "chapitres": [
        {
          "titre": "Quand une taxe devient une source de recette",
          "texte": `Les autorités enregistrent les matières et volumes moins pour aider les historiens futurs que pour contrôler qualité, privilèges et recettes fiscales. Ces textes offrent des rapports de grains, mais laissent souvent dans l'ombre maltage, levure, température et goût. Une ordonnance est donc une coupe utile dans le brassage, jamais la bière entière.

Les écarts entre villes expliquent les reconstructions concurrentes. L'historien cherche ce que signifiait le mot à une date donnée ; le brasseur doit ensuite choisir des malts et un procédé disponibles. Confondre ces deux opérations donne une certitude très croustillante, mais historiquement mal cuite.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Dans la cible BA moderne : au moins 45 % d'avoine maltée, au moins 20 % de blé malté, puis orge pâle ; d'autres reconstitutions suivent d'autres documents."
        ],
        "houblons": [
          "Houblons européens épicés ou herbacés ; amertume moyenne, sans aromatique moderne envahissante."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale propre à légèrement fruitée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Profil modéré, laissant céréales et texture s'exprimer.",
        "empatage": "L'avoine riche en bêta-glucanes augmente viscosité et risque de filtration lente ; paliers ciblés, mouture et lit filtrant doivent conserver la texture sans bloquer la cuve.",
        "ebullitionEtHoublonnage": "Les reconstructions houblonnées emploient une amertume européenne mesurée. Les formes anciennes au gruit appartiennent à d'autres moments documentaires et ne justifient pas un mélange d'herbes automatique.",
        "fermentation": "Fermentation haute avec atténuation moyenne à élevée.",
        "maturation": "Courte à modérée ; conditionnement visant une texture céréalière mais non pâteuse.",
        "profilRecherche": "Une ale hollandaise historique/reconstruite, céréalière et souple, où avoine, orge et blé forment le cœur du profil."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Dutch-Style Kuit, Kuyt or Koyt",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Ron Pattinson",
          "edition": null,
          "reference": "Kuit — History by the Glass",
          "type": "source_historique_secondaire",
          "url": "https://www.beeradvocate.com/articles/10251/kuit/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Slow Food Foundation for Biodiversity",
          "edition": null,
          "reference": "Koyt, Kuit, Kuyt Beer — Ark of Taste",
          "type": "patrimoine_alimentaire",
          "url": "https://www.fondazioneslowfood.com/en/ark-of-taste-slow-food/koyt-kuit-kuyt-beer/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Lost Beers — Roel Mulder",
          "edition": null,
          "reference": "Gruit Kuit — enquête dans les sources néerlandaises",
          "type": "recherche_historique_specialisee",
          "url": "https://lostbeers.com/gruit-kuit/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "sahti",
      "nom": "Sahti",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Finlande"
      ],
      "origine": {
        "libelle": "Finlande",
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
        "min": 0,
        "max": 15,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 8,
        "max": 44,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Levure de boulanger finlandaise souvent employée à chaud, avec atténuation rapide, esters de banane possibles et très faible carbonatation."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Sahti haarikka",
          "Gobelet"
        ]
      },
      "description": "Le Sahti se reconnaît autant à son outil qu’à son goût : un kuurna garni de branches de genévrier filtre un moût dense d’orge, parfois de seigle, souvent peu ou pas bouilli. Levure de boulanger, banane, épices, résine douce et faible pétillance composent une bière de fête finlandaise à boire fraîche. Sa rusticité est une méthode vivante, pas un permis d’hygiène médiévale.",
      "histoireEtOrigines": `Le Sahti appartient encore aux maisons, aux villages et aux fêtes finlandaises. Mariages et rassemblements ont entretenu une compétence domestique que l'industrialisation a fait disparaître ailleurs : malt concassé, montées de température, filtration dans le kuurna et fermentation rapide. Les recettes circulent par familles et régions ; le mot désigne une tradition partagée, pas un clone national.

Le kuurna — auge filtrante souvent garnie de paille et de branches de genévrier — forme son image la plus concrète. Le genévrier peut aussi infuser l'eau ou entrer autrement dans le procédé ; houblon et baies varient. Beaucoup de sahtis ne font pas subir au moût une ébullition complète. Cette pratique conserve protéines et saveurs céréalières, mais réduit la sécurité microbiologique et la stabilité qu'apporte normalement l'ébullition.

Une levure de boulanger finlandaise est fréquente. Des études ont montré que ces souches peuvent produire l'acétate d'isoamyle évoquant la banane et atténuer un moût fort ; cette proximité aromatique ne les assimile pas aux levures Weizen allemandes. Le seigle épaissit la texture ; le faible gaz et la consommation jeune donnent au Sahti une présence presque nourricière.

L'Union européenne enregistre Sahti comme spécialité traditionnelle garantie : la protection porte sur une composition ou un mode traditionnel, non sur une origine géographique exclusive. Des producteurs commerciaux existent, dont Lammin Sahti, fondée en 1985 et autorisée à produire en 1987 ; une auge de bois entre cuisine, ferme et salle de noces résume toutefois toujours mieux la tradition.`,
      "chapitres": [
        {
          "titre": "Le kuurna transforme une branche en outil",
          "texte": `Dans le lit filtrant, les rameaux ne servent pas seulement d'aromate. Ils soutiennent la drêche, créent des chemins d'écoulement et transmettent une part de leur résine au liquide chaud. Forme de l'auge, densité du tapis et circulation de l'eau font varier le résultat d'une maison à l'autre.

Cette fonction matérielle évite un raccourci : le Sahti n'est pas simplement une bière à laquelle on ajoute « du genièvre ». Le geste associe plante, filtration et organisation du brassage. Retirer l'objet puis doser un extrait résineux peut imiter un arôme ; cela ne reproduit pas toute la méthode.`
        },
        {
          "titre": "Sans ébullition, le temps se raccourcit",
          "texte": `L'ébullition stérilise le moût, coagule des protéines, volatilise le diméthylsulfure et isomérise les acides du houblon. L'omettre ou la réduire conserve une texture pleine et un goût de céréale différent, mais laisse davantage de microorganismes et de précurseurs en circulation.

Le froid et la consommation rapide deviennent alors des éléments du style autant que des précautions. Le Sahti traditionnel n'est pas conçu pour traverser un entrepôt tiède et une année de rayon. Sa fraîcheur n'est pas une posture : c'est la conséquence logique de son procédé.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt d'orge majoritaire ; seigle fréquent ; avoine ou autres céréales possibles selon tradition familiale."
        ],
        "houblons": [
          "Houblon faible ou absent ; le genévrier assure souvent une partie de l'aromatique et de la structure."
        ],
        "levuresEtMicroorganismes": [
          "Levure de boulanger finlandaise traditionnellement fréquente, choisie pour sa capacité à fermenter un moût dense et produire un fruité distinctif ; levures d'ale possibles dans les versions commerciales."
        ],
        "ingredientsComplementaires": [
          "Branches et/ou baies de genévrier ; parfois pain ou autres ingrédients domestiques selon tradition."
        ],
        "profilEau": "Eau locale douce à modérément minérale ; le genévrier peut intervenir aussi dans l'eau de rinçage.",
        "empatage": "Empâtage par paliers, souvent avec montée progressive de température et filtration rustique à travers un kuurna garni de genévrier.",
        "ebullitionEtHoublonnage": "Le moût traditionnel peut ne pas être bouilli ou seulement chauffé ; houblonnage absent ou très faible.",
        "fermentation": "Fermentation chaude et rapide, souvent avec levure de boulanger, recherchant un profil fruité-épicé distinctif.",
        "maturation": "Très courte et au froid ; le Sahti se consomme jeune car sa stabilité microbiologique et oxydative est limitée.",
        "profilRecherche": "Une bière finlandaise dense mais vivante, céréalière, fruitée et résineuse, où genévrier et fermentation dominent sans amertume moderne."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Historical Beer: Sahti",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/27/historical-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lammin Sahti",
          "edition": null,
          "reference": "Lammin Sahti — fondation en 1985 et première production autorisée en 1987",
          "type": "source_producteur_historique",
          "url": "https://www.sahti.fi/en/historiaa",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Union européenne",
          "edition": "2002",
          "reference": "Enregistrement de Sahti comme spécialité traditionnelle garantie",
          "type": "source_reglementaire_patrimoniale",
          "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A01997R2301-20020513",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Journal of the Institute of Brewing",
          "edition": "2015",
          "reference": "Characterization of Finnish farmhouse ale Sahti",
          "type": "publication_scientifique",
          "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/jib.246",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Journal of the Institute of Brewing",
          "edition": "2020",
          "reference": "Traditional Finnish baking and sourdough yeasts as Sahti brewing strains",
          "type": "publication_scientifique",
          "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/jib.608",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "gotlandsdricke",
      "nom": "Gotlandsdricke",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Suède"
      ],
      "origine": {
        "libelle": "Île de Gotland",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6,
        "max": 11,
        "unite": "%",
        "statut": "defini"
      },
      "amertume": {
        "min": 0,
        "max": 20,
        "unite": "IBU",
        "statut": "defini"
      },
      "couleur": {
        "min": 12,
        "max": 50,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute domestique, souvent avec une levure transmise ou choisie localement ; force, température et fruité varient d’un foyer à l’autre."
      },
      "service": {
        "temperatureMin": 9,
        "temperatureMax": 13,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Gobelet",
          "Chope"
        ]
      },
      "description": "Sur l’île baltique de Gotland, dricke signifie simplement « boisson » — mot modeste pour des bières de maison parfois fortes, fumées, résineuses et très personnelles. Orge maltée à la ferme, genévrier, levure domestique, sucre ou miel peuvent entrer en scène. Le rostbunn, auge filtrante de bois, relie surtout ces versions : il trace un geste commun là où aucun tableau d’IBU ne saurait élire une recette officielle.",
      "histoireEtOrigines": `Gotlandsdricke appartient au cycle domestique de l'île suédoise de Gotland : maltage, brassage, fêtes et transmission familiale. Son nom ne promet pas un style uniforme ; il nomme la boisson locale. Les enquêtes de terrain rencontrent des recettes qui changent de ferme en ferme, avec des proportions, forces et températures que la standardisation industrielle n'a jamais alignées.

Le rostbunn concentre la pratique. Cette auge ou cuve filtrante reçoit un fond de branches de genévrier et la drêche ; le liquide y circule avant fermentation. Des malts séchés ou fumés à la ferme peuvent fournir un caractère de foyer, mais toutes les Gotlandsdricke ne sont pas également fumées. Sucre et miel apparaissent dans certaines maisons, pas comme tribut obligatoire à une supposée recette viking.

La fermentation est chaude, souvent avec levure de boulanger ou culture domestique, puis la bière se boit jeune. Le genévrier intervient dans l'eau, le filtre ou le moût et combine donc fonction technique et parfum. Cette organisation rapproche la tradition d'autres farmhouse ales nordiques sans en faire une simple Sahti suédoise : l'outil, les céréales, les levures et la culture locale divergent.

Les versions artisanales contemporaines traduisent cette diversité dans des équipements modernes. Elles peuvent honnêtement revendiquer l'inspiration gotlandaise ; elles ne représentent pas toutes les fermes de l'île, encore moins une continuité démontrée depuis l'âge viking.`,
      "chapitres": [
        {
          "titre": "Le rostbunn, mémoire en bois",
          "texte": `Le filtre gotlandais réunit une géométrie, un lit de rameaux et un geste transmis. Les branches empêchent en partie la drêche de colmater la sortie, tandis que l'eau chaude extrait des composés résineux. Le brasseur domestique règle le débit à l'expérience plutôt qu'avec une courbe industrielle.

Ce dispositif résume mieux la tradition qu'une liste fixe d'arômes. Fumée, miel et force peuvent varier ; le passage du moût à travers ce petit ouvrage de bois explique comment une maison fabrique sa dricke.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Tradition domestique de Gotland très variable ; le profil dépend de la ferme, du maltage, de la fumée, du genévrier et de la fermentation.",
        "maltsEtCereales": [
          "Orge maltée ; seigle ou autres céréales possibles ; malt fumé fréquent mais intensité très variable."
        ],
        "houblons": [
          "Houblon historiquement secondaire et variable, parfois combiné au genévrier."
        ],
        "levuresEtMicroorganismes": [
          "Levures domestiques, de boulanger ou ales adaptées à une fermentation chaude."
        ],
        "ingredientsComplementaires": [
          "Genévrier, parfois miel ou sucre ; recettes familiales très diverses."
        ],
        "profilEau": "Eau locale souvent chauffée avec le genévrier ; la concentration et le temps d'infusion déterminent résine et amertume plus sûrement que l'origine géologique seule.",
        "empatage": "Empâtage rustique ou multi-palier ; filtration possible à travers branches de genévrier.",
        "ebullitionEtHoublonnage": "Ébullition variable selon tradition familiale ; certains procédés sont moins standardisés que le brassage industriel.",
        "fermentation": "Fermentation haute et relativement chaude.",
        "maturation": "Courte ; consommation jeune, parfois après quelques semaines de repos.",
        "profilRecherche": "Une farmhouse ale gotlandaise expressive, céréalière, résineuse et éventuellement fumée, sans prétendre à une formule universelle."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Gotlandsdricke / Historical or Indigenous Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Lars Marius Garshol",
          "edition": null,
          "reference": "Nordic farmhouse brewing traditions",
          "type": "source_historique_secondaire",
          "url": "https://www.garshol.priv.no/blog/358.html",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": null,
          "reference": "Style School: Gotland's Drink — ethnographie d'une bière domestique",
          "type": "presse_ethnographique_specialisee",
          "url": "https://www.beerandbrewing.com/style-school-gotland-s-drink-the-elusive-smoked-ale-of-sweden",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brewing Nordic",
          "edition": null,
          "reference": "How to Brew Gotlandsdricke — pratiques familiales et rostbunn",
          "type": "documentation_de_terrain",
          "url": "https://www.brewingnordic.com/farmhouse-ales/how-to-brew-gotlandsdricke/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "breslau-schoeps",
      "nom": "Breslau Schoeps",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [],
      "paysOrigine": [
        "Pologne"
      ],
      "origine": {
        "libelle": "Breslau/Wrocław, Silésie",
        "ville": "Wrocław",
        "region": "Silésie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.5,
        "max": 6.5,
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
        "min": 8,
        "max": 30,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Fermentation haute dans les reconstructions ; les archives décrivent mieux les céréales et la force que les souches historiques de Breslau."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Tulipe"
        ]
      },
      "description": "Schöps fut un nom de prestige de Breslau, l’actuelle Wrocław : forte bière de blé, ample et maltée, exportée en Silésie puis plus loin. Les sources distinguent des versions claires, brunes et, plus tard, des évolutions de fermentation ; aucune bouteille ne fournit aujourd’hui le patron définitif. Sa renaissance ressemble donc à la restauration d’un bâtiment dont subsistent les plans de plusieurs époques — et quelques murs qui se contredisent.",
      "histoireEtOrigines": `Au XVIe siècle, la bière de Breslau possède déjà assez de réputation pour inquiéter les villes voisines. Une interdiction d'importation décidée à Brzeg en 1553 fournit l'une des premières mentions explicites du Schöps ; des récits placent sa production plus tôt, mais les dates d'apparition varient selon ce que l'on compte comme « bière de Breslau » ou comme nom propre du produit.

Du XVIe au XVIIIe siècle, Schöps voyage et porte le prestige urbain de Breslau. Les documents décrivent une bière forte, largement fondée sur le blé, mais pas une Weissbier bavaroise moderne. Les versions blanches et brunes, les changements de malterie et l'arrivée ultérieure de procédés de fermentation basse brouillent toute silhouette unique. Même le mot survit mieux que sa recette.

Le déclin puis la disparition laissent chroniques, règlements et descriptions, sans cahier de brassage continu. Au XXIe siècle, Browar Stu Mostów et des collaborateurs internationaux recréent une version à Wrocław en assumant l'interprétation : plus de 80 % de malts de blé dans leur projet, décoction, houblon local approché et fermentation choisie pour la rondeur.

Le Schöps moderne est ainsi une hypothèse publique, pas un fac-similé. Il rappelle surtout qu'une ville aujourd'hui connue sous un nom polonais a possédé, sous son nom allemand, une bière dont la renommée a traversé les frontières bien avant les catégories de concours.`,
      "chapitres": [
        {
          "titre": "1553 : une interdiction qui fait publicité",
          "texte": `Lorsque le conseil de Brzeg interdit l'entrée du Schöps, il révèle involontairement son commerce et son attractivité. Les actes municipaux documentent souvent les bières par le conflit — fiscalité, privilège, importation — plutôt que par une note de dégustation. La contrainte devient alors une source historique.

Elle ne livre pourtant ni levure ni température d'empâtage. Toute reconstruction croise ces traces avec des manuels plus tardifs et accepte que le produit ait changé pendant les siècles où son nom restait célèbre.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Style historique disparu avec versions pâles et sombres ; les reconstructions varient fortement selon la période et la source choisies.",
        "maltsEtCereales": [
          "Les reconstructions emploient souvent 70 à 80 % de malts de blé, clairs ou foncés ; cette proportion est une cible moderne fondée sur des descriptions, pas une constante prouvée de toute la période."
        ],
        "houblons": [
          "Houblonnage faible à modéré, européen, restant derrière le malt."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale neutre à légèrement fruitée ; profil Weizen banane/girofle non recherché."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Eau modérément minérale, adaptée à une forte charge de blé.",
        "empatage": "Une forte part de blé ralentit la filtration ; paliers ou décoction développent fermentescibilité et malt sans garantir à eux seuls l'authenticité d'une époque donnée.",
        "ebullitionEtHoublonnage": "Le houblon européen reste en soutien. Les versions pâles et brunes réclament des équilibres différents, ce qui exclut une conduite universelle.",
        "fermentation": "Fermentation haute propre.",
        "maturation": "Modérée, afin de fondre la forte richesse céréalière.",
        "profilRecherche": "Une forte wheat ale silésienne riche et maltée, sans phénols de Weissbier, dont la couleur peut aller du pâle au très sombre selon reconstruction."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Breslau-Style Schoeps",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Catalog.beer",
          "edition": null,
          "reference": "Breslau-Style Schoeps — historical synthesis",
          "type": "source_historique_secondaire",
          "url": "https://www.catalog.beer/style/schoeps",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Browar Stu Mostów",
          "edition": null,
          "reference": "Schops — projet de reconstruction historique à Wrocław",
          "type": "source_producteur_et_reconstruction",
          "url": "https://100mostow.pl/en/schops/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "grape-ale-italian-grape-ale",
      "nom": "Grape Ale / Italian Grape Ale",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "Grape Ale",
        "Italian Grape Ale",
        "IGA"
      ],
      "paysOrigine": [
        "Italie"
      ],
      "origine": {
        "libelle": "Italie",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.8,
        "max": 10,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 10,
        "max": 30,
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
        "details": "Fermentation de bière, co-fermentation avec le raisin ou cultures successives selon le cépage et le profil recherché."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 11,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Calice"
        ]
      },
      "description": "L’Italian Grape Ale fait entrer la vendange dans la brasserie : moût, raisin, peaux ou marc rencontrent céréales, houblon et fermentation. Le cépage peut apporter fruit, acidité, tanin et levures, tandis que la bière garde sa charpente. Née du mouvement artisanal italien contemporain, l’IGA n’est pas un fossile romain retrouvé sous une vigne ; c’est une passerelle moderne entre deux métiers agricoles voisins.",
      "histoireEtOrigines": `L'Italie possède une immense culture du vin mais, jusqu'à la fin du XXe siècle, une scène brassicole artisanale encore réduite. Lorsque celle-ci s'affirme, le raisin devient un matériau évident pour créer une langue locale plutôt que recopier uniquement les styles du Nord. Des expérimentations de Baladin autour de 2000–2002, puis la commercialisation de BB10 au milieu des années 2000, figurent parmi les jalons souvent cités ; d'autres brasseries explorent bientôt cépages, territoires et fermentation.

Le nom Italian Grape Ale apparaît ensuite comme une catégorie construite collectivement. Le BJCP l'intègre à ses directives en 2015, donnant une visibilité internationale à une pratique déjà diverse. Cette date classe une mouvance ; elle n'invente ni la première bière au raisin au monde ni une tradition italienne antique restée cachée.

L'ingrédient peut entrer sous forme de moût, jus, fruit entier, peaux ou marc, au pressurage, dans la cuve active ou pendant l'élevage. Chaque choix transporte des sucres, acides, polyphénols, arômes et microorganismes différents. Des études sur les IGA confirment une grande diversité chimique et sensorielle, depuis des bières nettes et vineuses jusqu'à des fermentations mixtes plus sauvages.

La catégorie Grape Ale a depuis élargi le principe au-delà de l'Italie. La branche italienne conserve néanmoins son image fondatrice : une brasserie et un chai qui partagent une vendange, sans que l'un dissolve l'autre.`,
      "chapitres": [
        {
          "titre": "Le moment d'ajout choisit le dialogue",
          "texte": `Introduit avant fermentation, le moût de raisin apporte des sucres que les levures transforment et peut perdre une partie de ses arômes les plus volatils. Une addition plus tardive conserve davantage de fruit mais augmente le risque de refermentation ou de contamination. Peaux et marc ajoutent tanins, couleur et microflore en plus du jus.

Le cépage n'agit donc pas comme un sirop aromatique. Maturité, état sanitaire, pressurage et souche de levure décident si le verre évoque fruit frais, vin, sécheresse tannique ou acidité. L'étiquette peut nommer la vigne ; le procédé écrit ce qu'elle dira.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La recette dépend du style de bière, du cépage et de la forme d'incorporation du raisin ; l'identité vient du dialogue bière-raisin.",
        "maltsEtCereales": [
          "Base souvent Pilsner/pale, parfois blé ou malts plus foncés selon le cépage et le projet."
        ],
        "houblons": [
          "Houblonnage bas à modéré pour ne pas masquer le raisin ; profils européens fréquents."
        ],
        "levuresEtMicroorganismes": [
          "Saccharomyces ; levures œnologiques, levures indigènes, Brettanomyces ou cultures mixtes possibles selon interprétation."
        ],
        "ingredientsComplementaires": [
          "Raisin frais, moût, jus, marc ou peaux ; cépages blancs ou rouges selon projet."
        ],
        "profilEau": "Eau modérée, laissant acidité et minéralité du raisin s'exprimer.",
        "empatage": "Un moût de bière trop résiduel peut empiler douceur maltée et sucres du raisin ; la fermentescibilité est réglée en fonction du degré Brix, de l'acidité et du moment d'ajout du fruit.",
        "ebullitionEtHoublonnage": "Le raisin est souvent ajouté après l'ébullition, en fermentation ou maturation afin de préserver arômes et microbiote éventuel.",
        "fermentation": "Co-fermentation ou fermentations successives bière/raisin ; gestion de l'acidité et des phénols selon microorganismes.",
        "maturation": "Cuve, bouteille ou bois ; certaines IGA gagnent en complexité sur plusieurs mois.",
        "profilRecherche": "Une bière où le cépage est clairement perceptible mais intégré, avec équilibre entre céréale, fermentation, acidité et fruit vinique."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Italian Grape Ale",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/beer-styles/x3-italian-grape-ale/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Italian-Style Grape Ale / Grape Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentation",
          "edition": "2023",
          "reference": "Italian Grape Ale Beers: the impact of grape varieties and brewing processes",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10539957/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Foods",
          "edition": "2023",
          "reference": "Chemical and sensory characterization of Italian Grape Ale",
          "type": "publication_scientifique",
          "url": "https://www.mdpi.com/2304-8158/12/6/1196",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "European Beer Star — Luca Giaccone",
          "edition": null,
          "reference": "Italian Grape Ale — historique du mouvement et jalons commerciaux",
          "type": "histoire_professionnelle",
          "url": "https://private-brauereien.de/ebs-de-wAssets/docs/blog/IGA/Luca-Giaccone-Italian-Grape-Ale.pdf",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "fruit-beer",
      "nom": "Fruit Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "La levure porte la bière choisie puis refermente les sucres du fruit ; une culture mixte peut aussi transformer acidité et tanins."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Fruit Beer est un carrefour, pas une recette : cerise dans une bière acide, framboise sur blé, pêche en saison ou mangue dans une ale houblonnée n’empruntent ni la même route ni la même levure. Le fruit apporte sucres, acides, couleur, tanins et parfums ; la fermentation en déplace une partie. Le bon verre ressemble à une rencontre, pas à un soda qui aurait volé une mousse.",
      "histoireEtOrigines": `Des fruits ont rejoint des boissons céréalières fermentées dans de nombreux lieux et à de nombreuses époques. Cette ancienneté générale ne donne pourtant pas une biographie commune au lambic à la cerise, à la wheat ale américaine aux framboises et à l'IPA tropicale contemporaine. Fruit Beer est d'abord une catégorie transversale créée pour décrire ce que le fruit change dans une bière identifiable.

Le fruit est un petit moût complet. Il apporte eau, glucose et fructose, acides organiques, pigments, polyphénols, pectines, minéraux et microorganismes. La levure consomme largement ses sucres, abaissant parfois le corps alors que l'imaginaire attendait une douceur de jus. Acide et tanins peuvent accroître la sécheresse ; anthocyanes et arômes évoluent avec pH, oxygène, chaleur et fermentation.

Les formes industrielles — purée aseptique, jus, concentré — facilitent la maîtrise sanitaire. Le fruit entier et les peaux transportent davantage de texture, de tanins et de microflore. Une addition chaude sécurise mais volatilise les parfums fragiles ; une addition en fermentation ou maturation en conserve davantage tout en exigeant suivi de densité et protection contre l'oxygène.

La catégorie s'est élargie avec le mouvement craft parce qu'elle permet de juger l'intégration plutôt qu'un profil fixe. Son histoire est celle d'un problème récurrent : comment laisser le fruit reconnaissable après que la levure a mangé ce qui le rendait sucré.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le fruit modifie simultanément sucre, pH, couleur, tanins, microbiologie et aromatique ; la bière porteuse est choisie pour absorber ces déplacements plutôt que servir de simple fond neutre.",
        "maltsEtCereales": [
          "Grist choisi pour soutenir le fruit : blé léger, saison sèche, stout torréfiée ou autre architecture déclarée, parfois simplifiée pour libérer l'aromatique."
        ],
        "houblons": [
          "Houblonnage cohérent avec la base mais souvent réduit si le fruit apporte acidité ou amertume tannique."
        ],
        "levuresEtMicroorganismes": [
          "Souche cohérente avec la bière porteuse ; cultures mixtes possibles lorsque fruit, acidité et évolution fermentaire font partie du projet."
        ],
        "ingredientsComplementaires": [
          "Fruits entiers, purée, jus, concentré, zestes ou autres formes déclarées ; qualité sanitaire essentielle."
        ],
        "profilEau": "Le pH et les acides du fruit peuvent déplacer l'équilibre minéral ; une eau trop sulfatée durcit parfois une finale déjà acide ou tannique.",
        "empatage": "Le corps et la fermentescibilité du moût sont calibrés en prévision des sucres simples du fruit ; une base trop sèche peut devenir maigre après refermentation.",
        "ebullitionEtHoublonnage": "Fruit en fin d'ébullition pour pasteurisation, en whirlpool, fermentation ou maturation selon le compromis arôme/microbiologie recherché.",
        "fermentation": "Prévoir la refermentation des sucres du fruit et l'évolution du pH.",
        "maturation": "Temps de contact suffisant pour extraction puis séparation du fruit ; protection renforcée contre l'oxydation.",
        "profilRecherche": "Un fruit identifiable et transformé par la fermentation, intégré à une bière encore lisible, sans impression de sirop ni de jus gazeux."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Fruit Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/29/29A/fruit-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Fruit Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Current Opinion in Food Science",
          "edition": "2023",
          "reference": "Fruit beers: production, composition and sensory properties — review",
          "type": "revue_scientifique",
          "url": "https://www.sciencedirect.com/science/article/abs/pii/S1878450X23000586",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Fermentation",
          "edition": "2022",
          "reference": "Fruit Juice Addition in Brewing: a review",
          "type": "revue_scientifique",
          "url": "https://www.mdpi.com/2311-5637/8/10/567",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "American Homebrewers Association",
          "edition": null,
          "reference": "How to Add Fruit to Beer",
          "type": "ressource_technique",
          "url": "https://homebrewersassociation.org/how-to-brew/how-to-add-fruit-to-beer/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "field-beer",
      "nom": "Field Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "Le végétal ne fixe pas la famille de levure ; sa charge en sucres, nutriments et microorganismes modifie toutefois la conduite fermentaire."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Field Beer est le tiroir de concours où le potager rencontre la cuve : betterave, concombre, tomate, patate douce, maïs frais ou autre récolte déclarée modifie une bière existante. Chaque plante arrive avec son eau, son amidon, ses sucres, ses pigments et parfois ses microbes. La catégorie n’a ni couleur ni fermentation propres ; elle pose une question plus utile : comment éviter que le champ finisse en soupe gazeuse ?",
      "histoireEtOrigines": `Field Beer n'est pas le nom d'une ancienne boisson de moissonneurs. C'est une frontière de classification contemporaine, créée lorsque les concours ont dû accueillir des ingrédients agricoles qui entraient mal dans Fruit Beer ou Spice, Herb and Vegetable Beer. Ses contours varient légèrement selon le référentiel ; cette variabilité appartient à l'administration, pas à un terroir.

Le mouvement craft a multiplié betterave, concombre, tomate, patate douce, maïs frais et autres récoltes dans les cuves. Les réunir ne leur donne pas une technique commune. Une racine riche en amidon doit être cuite et convertie ; un concombre apporte surtout eau et volatils fragiles ; une betterave colore fortement et ajoute une note terreuse ; une tomate déplace acidité et registre umami.

La qualité sanitaire dépend de l'ingrédient, de sa surface et de son traitement. Terre, spores, nitrate, enzymes végétales et microflore ne posent pas le même risque après cuisson qu'en ajout frais. La catégorie moderne rend donc visible un travail d'ingénierie agricole : comprendre la plante avant de promettre son arôme.

Une Field Beer réussie ne se juge pas à l'excentricité du panier. L'ingrédient annoncé doit rester identifiable, le support brassicole doit encore fonctionner et le procédé doit résoudre la transformation réelle de la récolte.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie de classification moderne : chaque végétal impose son propre dossier de cuisson, conversion, extraction, hygiène et stabilité.",
        "maltsEtCereales": [
          "Céréales choisies pour absorber la contribution du végétal, éventuellement simplifiées lorsqu'une note terreuse ou aqueuse réclame davantage d'espace."
        ],
        "houblons": [
          "Houblonnage ajusté pour ne pas entrer en conflit avec le végétal."
        ],
        "levuresEtMicroorganismes": [
          "Souche compatible avec les sucres et nutriments de la plante, sans esters susceptibles d'en maquiller l'identité."
        ],
        "ingredientsComplementaires": [
          "Légume, racine, courge, fleur ou autre produit du champ déclaré ; forme fraîche, rôtie, purée, jus ou infusion selon l'ingrédient."
        ],
        "profilEau": "Acides, sels, eau et composés terreux de la plante sont mesurés dans l'équilibre final ; la base ne peut être ajustée avant d'en connaître la contribution.",
        "empatage": "Courges, tubercules et grains non maltés réclament gélatinisation puis enzymes disponibles ; légumes aqueux ou aromatiques gagnent souvent à éviter le mash.",
        "ebullitionEtHoublonnage": "Moment d'ajout choisi selon risque microbiologique, volatilité aromatique et extraction recherchée.",
        "fermentation": "Prévoir la fermentescibilité éventuelle des sucres ajoutés.",
        "maturation": "Courte à modérée, avec protection contre oxydation et végétal cuit indésirable.",
        "profilRecherche": "Une bière où l'ingrédient du champ est clairement identifiable tout en restant intégré à une base brassicole cohérente."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Field Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Beverages",
          "edition": "2021",
          "reference": "Non-Barley Raw Materials for Brewing: a review",
          "type": "revue_scientifique",
          "url": "https://www.mdpi.com/2306-5710/7/1/4",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Foods",
          "edition": "2022",
          "reference": "The Microbiological Safety of Beer and Its Raw Materials",
          "type": "revue_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9455588/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "pumpkin-squash-pumpkin-spice-beer",
      "nom": "Pumpkin / Squash / Pumpkin Spice Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [
        "Pumpkin Beer",
        "Squash Beer",
        "Pumpkin Spice Beer"
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
        "min": 2.5,
        "max": 12,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": 5,
        "max": 35,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": 10,
        "max": 100,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Ale, lager ou fermentation mixte suivant le concept, avec reprise possible après ajout de purée ou de sucres de courge."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Sous le mot Pumpkin Beer se cachent deux citrouilles. Celle d’un texte américain de 1771 est pressée, bouillie, houblonnée puis fermentée presque sans céréale ; celle du craft moderne rejoint une bière maltée et porte souvent cannelle, muscade, gingembre ou girofle. La courge fournit une douceur discrète, les épices l’image immédiate de la tarte. Les confondre donne une jolie histoire — et une recette historiquement bancale.",
      "histoireEtOrigines": `En 1771, les Transactions de l'American Philosophical Society publient une méthode pour tirer une boisson fermentée de la citrouille : fruit mûr battu et pressé, jus bouilli avec houblon puis fermenté. Cette « pompion ale » emploie la courge comme principale source de sucre et ressemble techniquement davantage à un vin ou cidre de citrouille houblonné qu'à l'amber ale épicée servie aujourd'hui.

D'autres témoignages coloniaux montrent que la courge pouvait remplacer ou compléter des fermentescibles disponibles, mais les recettes étaient variables et pas nécessairement prestigieuses. L'ancienneté de l'ingrédient ne crée pas une ligne droite vers l'automne artisanal américain.

Au début des années 1980, Buffalo Bill's Brewery en Californie devient un jalon de la renaissance moderne avec une Pumpkin Ale souvent citée comme première version craft contemporaine. Cette branche part d'une bière maltée, ajoute courge ou purée, puis adopte de plus en plus le vocabulaire aromatique de la pumpkin pie : cannelle, muscade, gingembre, girofle, piment de la Jamaïque et vanille.

Les guides séparent utilement Pumpkin/Squash Beer, où la courge doit compter, et Pumpkin Spice ou Autumn Seasonal, où l'idée du dessert peut dominer sans beaucoup de chair. Deux pages résument l'écart : en 1771, le fruit devient boisson ; dans le craft, une bière devient saison culturelle.`,
      "chapitres": [
        {
          "titre": "La chair parle moins fort que les épices",
          "texte": `La courge est riche en eau et son profil aromatique reste doux. Rôtir concentre les sucres et ajoute des notes de cuisson ; une purée au mash apporte amidon, fibres et risque de filtration lente. Une partie de ses sucres disparaît ensuite en fermentation.

Cannelle, girofle et muscade possèdent au contraire des composés très puissants. Un faible surdosage transforme rapidement la bière en parfum d'intérieur. Pour que la courge existe, le brasseur doit souvent faire exactement l'inverse du marketing saisonnier : baisser le volume des épices.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Deux branches distinctes : courge réellement fermentée ou aromatisée, et bière saisonnière construite surtout par les épices de tarte.",
        "maltsEtCereales": [
          "Base ambrée, brune, porter, wheat ou autre ; malts biscuit/caramel fréquents dans les versions dessert."
        ],
        "houblons": [
          "Houblonnage généralement bas à modéré pour laisser courge et épices lisibles."
        ],
        "levuresEtMicroorganismes": [
          "Souche souvent assez propre pour séparer courge, malt et épices ; une levure expressive reste possible si elle appartient clairement au concept."
        ],
        "ingredientsComplementaires": [
          "Citrouille ou autre courge ; cannelle, muscade, gingembre, girofle, quatre-épices ou vanille selon version."
        ],
        "profilEau": "Plutôt équilibrée, évitant une minéralité agressive avec les épices.",
        "empatage": "Courge rôtie/purée possible au mash ; vérifier la conversion si amidon non gélatinisé.",
        "ebullitionEtHoublonnage": "Épices en fin d'ébullition ou maturation ; dosage prudent car girofle et cannelle deviennent vite dominants.",
        "fermentation": "Les sucres simples de la courge fermentent largement ; densité, pH et activité doivent être suivis après tout ajout tardif de purée.",
        "maturation": "Courte à modérée pour intégrer épices et malt ; servir assez frais pour préserver aromatique.",
        "profilRecherche": "Une bière automnale où courge et/ou épices de tarte restent nettes et intégrées, tandis que la bière demeure parfaitement identifiable."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Pumpkin/Squash Beer and Pumpkin Spice Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Autumn Seasonal Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30B/autumn-seasonal-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "American Philosophical Society",
          "edition": "1771 / édition numérique",
          "reference": "Pompion Ale and Useful Knowledge",
          "type": "source_primaire_commentee",
          "url": "https://www.amphilsoc.org/blog/pompion-ale-useful-knowledge",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Smithsonian Magazine",
          "edition": "2011",
          "reference": "Pumpkin Beers Don't Have to Be the Worst Thing to Drink This Fall",
          "type": "histoire_culturelle",
          "url": "https://www.smithsonianmag.com/arts-culture/pumpkin-beers-dont-have-to-be-the-worst-thing-to-drink-this-fall-6078676/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": null,
          "reference": "Anatomy of a Colonial-Era Pumpkin Ale",
          "type": "analyse_historique_et_technique",
          "url": "https://www.beerandbrewing.com/anatomy-of-a-colonial-era-pumpkin-ale",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "chili-beer",
      "nom": "Chili Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "La fermentation appartient à la bière porteuse ; l'éthanol produit augmente ensuite l'extraction et le transport de la capsaïcine."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Dans une Chili Beer, le piment arrive en deux temps : fruit vert, rouge, fumé ou séché au nez, puis chaleur qui s’allonge après la gorgée. Jalapeño, ancho, chipotle et habanero n’écrivent pas le même scénario. La capsaïcine se dissout mieux dans l’alcool que dans l’eau et s’accumule au palais ; le dosage ressemble donc moins à une course de Scoville qu’à un réglage de frein.",
      "histoireEtOrigines": `Capsicum appartient depuis longtemps aux cuisines et boissons fermentées des Amériques, puis du monde. Chili Beer ne désigne toutefois aucune lignée ancienne unique. La catégorie actuelle grandit avec l'expérimentation artisanale : lagers au jalapeño, ales à l'ancho, stouts au chipotle ou bières inspirées du molé doivent pouvoir déclarer leur ingrédient et être jugées autrement que comme des versions défectueuses de leur support.

Le piment apporte deux familles d'effets. Ses tissus donnent notes végétales, fruitées, terreuses ou fumées selon variété et traitement. Les capsaïcinoïdes activent, eux, les récepteurs de chaleur ; la capsaïcine est peu soluble dans l'eau mais se dissout mieux dans l'éthanol et les corps gras. Une bière forte peut donc extraire et transporter une sensation que le premier échantillon sous-estime.

Cette chaleur s'accumule au fil des gorgées et masque arômes, douceur et carbonatation lorsqu'elle domine. Les brasseurs fractionnent alors les ajouts, préparent une teinture ou assemblent un lot pimenté avec un lot témoin. La précision du mélange compte davantage que la bravoure annoncée sur l'étiquette.

La base n'est pas indifférente : céréale légère met en avant le végétal, malt sombre accueille fumée et cacao, douceur amortit momentanément le feu. Il n'existe donc pas de recette canonique, seulement une règle sensorielle mémorable : une pinte doit encore être une unité de dégustation, pas un test de résistance.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le choix variétal, le traitement et la concentration de capsaïcinoïdes déterminent séparément parfum et chaleur ; la base sert à les porter et à les amortir.",
        "maltsEtCereales": [
          "Céréales légères pour exposer un piment frais ; malts ambrés ou noirs pour rencontrer chipotle, ancho ou registre de molé."
        ],
        "houblons": [
          "Houblonnage généralement contenu afin d'éviter la superposition d'amertume et de chaleur."
        ],
        "levuresEtMicroorganismes": [
          "Souche choisie pour finir assez net sous la chaleur, ou pour apporter un fruité explicitement accordé à la variété de piment."
        ],
        "ingredientsComplementaires": [
          "Piments frais, séchés, fumés, torréfiés ou en teinture ; variété et traitement doivent être déclarés."
        ],
        "profilEau": "Équilibrée ; chlorures peuvent adoucir la perception, sulfates élevés peuvent accentuer une finale agressive.",
        "empatage": "Le moût est dimensionné pour la sensation finale : sucre résiduel et protéines adoucissent brièvement la chaleur, tandis qu'une finale très sèche la laisse exposée.",
        "ebullitionEtHoublonnage": "Ajout en fin d'ébullition, whirlpool, fermentation ou teinture ; extraction de capsaïcine à surveiller continuellement.",
        "fermentation": "La bière fermente avant ou avec le piment selon la méthode ; les fruits frais sont nettoyés ou traités pour limiter la microflore sans cuire leurs arômes.",
        "maturation": "Dégustations fréquentes pendant contact ; retrait du piment dès que l'intensité cible est atteinte.",
        "profilRecherche": "Un piment reconnaissable par son fruit et sa chaleur progressive, dans une bière encore dégustable à la pinte plutôt qu'une brûlure punitive."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Chili Pepper Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Spice, Herb, or Vegetable Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Molecules",
          "edition": "2024",
          "reference": "Capsaicin: chemistry, solubility and sensory mechanisms — review",
          "type": "revue_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11543913/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brew Your Own",
          "edition": null,
          "reference": "Bring the Heat of Hot Peppers to Your Brewing",
          "type": "presse_technique_specialisee",
          "url": "https://byo.com/articles/bring-the-heat-of-hot-peppers-to-your-brewing/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "herb-and-spice-beer",
      "nom": "Herb and Spice Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [
        "Herb Beer",
        "Spice Beer"
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
        "details": "Souche choisie pour compléter les plantes sans empiler des phénols concurrents ; certains ajouts tardifs imposent une surveillance microbiologique."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Herb and Spice Beer ouvre un cabinet de botanique plutôt qu’un style unique : graine de coriandre, gingembre, poivre, romarin, fleur, racine ou écorce peuvent compléter malt, houblon et levure. Chaque plante possède son seuil d’extraction, son amertume et sa mémoire culturelle. L’étiquette doit dire laquelle travaille ; « recette médiévale secrète » n’est pas un ingrédient, même si cela prend moins de place sur le tableau noir.",
      "histoireEtOrigines": `La bière et les plantes possèdent des histoires entremêlées bien avant la catégorie moderne. Genévrier nordique, coriandre, gingembre, myrte des marais et nombreuses espèces locales ont servi à parfumer, amériser ou stabiliser des boissons céréalières. Le houblon s'est imposé progressivement selon les régions et les marchés ; il n'a pas remplacé en une nuit une soupe botanique européenne uniforme.

Le mot gruit concentre particulièrement les malentendus. Dans les Pays-Bas médiévaux et certaines régions germaniques, il a pu désigner un produit nécessaire au brassage, un mélange comprenant plantes et matière céréalière, un monopole, un droit fiscal ou la bière elle-même. Sa composition changeait avec lieu et époque ; le houblon pouvait même apparaître dans certains comptes de transition. Une ale moderne au romarin n'obtient donc pas automatiquement un passeport du XIIe siècle.

La catégorie de concours contemporaine répond à une autre nécessité : accueillir coriandre, poivre, cannelle, fleurs, racines et mélanges dans des bières de supports très divers. Elle évalue l'identité et l'intégration de l'assaisonnement, pas sa conformité à une tradition commune.

Le moteur technique est l'extraction. Chaleur, alcool, temps, mouture et forme fraîche ou sèche déplacent puissamment les huiles essentielles et polyphénols. La liberté du placard s'accompagne ainsi d'une discipline : identifier la plante, comprendre son solvant et goûter avant que l'infusion ne prenne le contrôle de la cuve.`,
      "chapitres": [
        {
          "titre": "Le gruit n'était pas une recette universelle sans houblon",
          "texte": `Les recherches de Susan Verberg montrent que gruit a changé de sens et de composition, tout en restant lié à un système de production et de prélèvement. Le réduire à trois herbes secrètes opposées au houblon efface les grains, les résines, les variations locales et la fiscalité qui rendaient le produit important.

Cette correction n'interdit pas les reconstructions. Elle oblige à nommer une ville, une période et une source avant de choisir les plantes. Sans ces repères, « gruit » décrit surtout l'imaginaire contemporain d'une bière herbacée — intéressant au verre, mais pas encore une preuve historique.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Chaque plante forme un problème d'extraction et de seuil sensoriel ; son identité, sa forme et son moment d'ajout structurent la recette plus sûrement qu'un profil de famille.",
        "maltsEtCereales": [
          "Base libre selon l'épice : bière pâle pour fraîcheur, ambrée/brune pour épices chaudes, etc."
        ],
        "houblons": [
          "Houblonnage adapté afin de ne pas concurrencer les herbes et épices."
        ],
        "levuresEtMicroorganismes": [
          "Souche choisie après l'aromate : ses phénols peuvent renforcer poivre ou girofle jusqu'à rendre leur origine impossible à distinguer."
        ],
        "ingredientsComplementaires": [
          "Herbes, épices, fleurs, graines, racines ou écorces déclarées."
        ],
        "profilEau": "Sulfates, alcalinité et pH sont réglés après dégustation de la plante afin de ne pas durcir amertume ou astringence végétale.",
        "empatage": "Racines et graines peuvent être concassées ou chauffées pour libérer leurs composés ; herbes délicates et fleurs perdent souvent leur intérêt dans un mash long.",
        "ebullitionEtHoublonnage": "Ajout précoce pour extraction robuste, tardif pour arôme, ou teinture à froid pour contrôle fin ; chaque plante réagit différemment.",
        "fermentation": "La souche garde ou transforme les huiles essentielles ; tout ajout froid est suivi pour contamination, reprise de densité et interaction phénolique.",
        "maturation": "Repos suffisant pour intégrer les composés aromatiques ; certaines épices se renforcent ou s'atténuent avec le temps.",
        "profilRecherche": "Une bière où l'assaisonnement est identifiable, propre et proportionné, en dialogue avec malt, houblon et fermentation."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Spice, Herb, or Vegetable Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Herb and Spice Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewery History Society — Susan Verberg",
          "edition": "2018",
          "reference": "The Rise and Fall of Gruit",
          "type": "publication_historique_specialisee",
          "url": "https://www.researchgate.net/publication/329178689_The_Rise_and_Fall_of_Gruit_The_Brewery_History_Society_Brewery_History_2018_174_46-78",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Processes",
          "edition": "2020",
          "reference": "Use of Herbs and Spices in Beer Production",
          "type": "revue_scientifique",
          "url": "https://www.mdpi.com/2227-9717/8/12/1613",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Plants",
          "edition": "2022",
          "reference": "Botanical ingredients in beer: composition and functionality",
          "type": "revue_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9370188/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "tea-beer",
      "nom": "Tea Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "La fermentation construit le support ; le thé intervient souvent après son activité principale afin de préserver les composés volatils."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Tea Beer met deux infusions dans le même verre. Thé noir, blanc, oolong, pu-erh, jasmin ou feuille fumée apportent polyphénols, parfums et astringence à une bière choisie pour les accueillir. La température qui convient à un malt ne convient pas forcément à une feuille délicate ; une infusion séparée permet souvent de doser après coup. Le sachet oublié reste une excellente méthode, mais seulement pour apprendre ce qu’est trop longtemps.",
      "histoireEtOrigines": `La rencontre commerciale entre bière et thé est ancienne, mais Tea Beer comme catégorie reconnaissable appartient surtout à l'expérimentation artisanale contemporaine. Camellia sinensis ne fournit pas un arôme unique : degré d'oxydation, cultivar, terroir, roulage, torréfaction et vieillissement séparent un thé blanc d'un thé noir, un oolong d'un pu-erh ou un lapsang fumé d'un jasmin parfumé.

La feuille apporte catéchines et autres polyphénols, caféine, acides aminés et centaines de composés volatils. Température et durée augmentent l'extraction, mais pas seulement des parfums souhaités : amertume et astringence montent également. Des recherches sur l'infusion montrent que ces paramètres changent fortement le profil chimique ; la bière ajoute ensuite éthanol, pH bas et carbonatation à cette équation.

Les brasseurs ont donc développé plusieurs routes. Une infusion chaude séparée peut être refroidie puis dosée ; un passage au whirlpool profite d'un liquide pasteurisé mais expose les volatils ; une extraction à froid après fermentation privilégie le parfum et réclame une hygiène rigoureuse. Le thé ajouté avant une fermentation active subit encore le travail de la levure et une perte aromatique.

La catégorie ne possède ni couleur ni origine commune. Elle raconte un réglage : extraire assez de feuille pour qu'elle reste identifiable, puis arrêter avant que chaque gorgée ne serre les gencives comme un sachet oublié.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Type de thé, température, temps et eau déterminent l'équilibre entre volatils, caféine, polyphénols, amertume et astringence.",
        "maltsEtCereales": [
          "Base pâle, blonde, saison, wheat, porter ou autre selon le thé ; malt simplifié lorsque l'aromatique du thé doit rester central."
        ],
        "houblons": [
          "Houblonnage bas à modéré ; éviter d'empiler tanins du thé et amertume agressive."
        ],
        "levuresEtMicroorganismes": [
          "Souche souvent neutre pour les feuilles délicates ; esters et phénols ne sont retenus que s'ils prolongent le thé choisi."
        ],
        "ingredientsComplementaires": [
          "Thé noir, vert, blanc, oolong, pu-erh, thé fumé ou assemblage déclaré."
        ],
        "profilEau": "Eau peu alcaline et modérément minérale, adaptée à l'infusion du thé et au pH de la bière.",
        "empatage": "Le corps et le malt sont réglés pour absorber l'astringence attendue ; incorporer la feuille au mash rend son extraction longue et moins contrôlable.",
        "ebullitionEtHoublonnage": "Préférer infusion contrôlée au whirlpool ou à froid pour limiter extraction tannique ; certains thés supportent une infusion séparée puis dosage.",
        "fermentation": "Une activité primaire achevée avant l'infusion conserve mieux les volatils ; un ajout précoce accepte au contraire leur transformation et leur entraînement par le CO₂.",
        "maturation": "Courte, à l'abri de l'oxygène ; les arômes floraux du thé peuvent être fragiles.",
        "profilRecherche": "Une bière où le parfum et la structure tannique du thé sont reconnaissables, avec une finale souple plutôt qu’âpre ou poussiéreuse."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Tea Beer / Herb and Spice Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Food Chemistry: X",
          "edition": "2021",
          "reference": "Effects of brewing conditions on tea extraction and antioxidant capacity",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8400668/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Foods",
          "edition": "2023",
          "reference": "Jasmine Tea Beer: volatile compounds and sensory quality",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10020177/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "green-tea-beer",
      "nom": "Green Tea Beer",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "tea-beer",
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
        "type": "variable",
        "details": "Fermentation généralement nette d'une bière pâle, puis ajout protégé de thé vert sensible à l'oxygène."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Green Tea Beer resserre la famille autour de feuilles peu oxydées : sencha végétal, gyokuro riche en umami, jasmin floral ou matcha en suspension. Catéchines et pigments réagissent vite à la chaleur et à l’oxygène ; le moment d’ajout décide si le verre reste frais ou devient amer, brunissant et poudreux. Cette branche moderne ne raconte pas toute l’histoire du thé : elle raconte sa partie la plus fragile.",
      "histoireEtOrigines": `La Green Tea Beer diverge de sa famille par la faible oxydation de la feuille. Les thés verts japonais, chinois ou coréens conservent davantage de catéchines et des registres végétaux que la fabrication d'un thé noir transforme. Sencha, gyokuro, matcha et thé au jasmin restent cependant des matières distinctes, pas quatre traductions d'un même sachet vert.

La catégorie est une rencontre craft contemporaine, non un style brassicole traditionnel japonais. Son problème central est la conservation : chaleur, oxygène, lumière et temps modifient pigments, polyphénols et volatils. Des travaux sur des bières au thé vert observent des effets sur activité antioxydante et stabilité aromatique, mais aucune dose universelle ne garantit un meilleur vieillissement ou une meilleure saveur.

Une infusion séparée relativement fraîche permet de doser les catéchines sans extraction excessive. Le matcha change le mécanisme : la poudre entière reste en suspension, ajoutant couleur, matière et risque de dépôt plutôt qu'une simple infusion filtrée. La garde doit ensuite protéger un registre qui pardonne peu l'oxygène.

La divergence technique est nette : là où Tea Beer cartographie les familles de feuilles, Green Tea Beer surveille température, suspension et brunissement.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Sous-famille du thé définie par la faible oxydation des feuilles et la fragilité de ses catéchines, pigments et arômes végétaux.",
        "maltsEtCereales": [
          "Base généralement pâle : Pilsner, wheat, blonde ale ou lager légère pour préserver la délicatesse du thé."
        ],
        "houblons": [
          "Houblons faibles à modérés, souvent floraux ou agrumés, sans amertume agressive."
        ],
        "levuresEtMicroorganismes": [
          "Souche propre ou légèrement fruitée, choisie pour ne pas recouvrir végétal, umami et fraîcheur du thé vert."
        ],
        "ingredientsComplementaires": [
          "Sencha, gyokuro, matcha, thé au jasmin ou autre thé vert clairement déclaré."
        ],
        "profilEau": "Eau douce, faible en alcalinité, adaptée à l'infusion du thé vert.",
        "empatage": "Une base pâle et peu résiduelle rend immédiatement visibles astringence et oxydation ; le mash reste séparé de l'extraction fine du thé.",
        "ebullitionEtHoublonnage": "Éviter une longue ébullition du thé ; privilégier whirlpool frais, infusion séparée ou ajout à froid.",
        "fermentation": "Le thé vert entre souvent après l'activité principale, sous faible oxygène ; la bière est ensuite stabilisée sans longue attente chaude.",
        "maturation": "Courte et sans oxygène, le thé vert s'oxyde vite.",
        "profilRecherche": "Une bière fraîche où thé vert, végétal et umami sont nets mais jamais râpeux ni soupe d'algues."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Green Tea Beer / Tea Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Journal of Food Science and Technology",
          "edition": "2015",
          "reference": "Green tea: manufacture, chemistry and quality",
          "type": "revue_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4573099/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Food Chemistry Advances",
          "edition": "2024",
          "reference": "Green tea beer: physicochemical and sensory evaluation",
          "type": "publication_scientifique",
          "url": "https://www.sciencedirect.com/science/article/pii/S2590157524000804",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Journal of Food Science",
          "edition": "2023",
          "reference": "Green tea and beer flavor stability",
          "type": "publication_scientifique",
          "url": "https://ift.onlinelibrary.wiley.com/doi/10.1111/1750-3841.16441",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "chocolate-beer",
      "nom": "Chocolate Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "Ale ou lager suivant la bière porteuse ; l'ajout de cacao se gère surtout par l'extraction, les lipides et la stabilité après fermentation."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Chocolate Beer commence par une question matérielle : fèves concassées, poudre dégraissée, chocolat sucré ou extrait n’apportent ni le même cacao ni la même matière grasse. Porter et stout offrent un écho torréfié naturel, mais une base pâle peut rendre l’ingrédient encore plus évident. La présence d’arômes chocolatés issus du malt ne prouve pas l’ajout de cacao ; la mousse, elle, repère vite les lipides imposteurs.",
      "histoireEtOrigines": `Cacao et bière ont chacun des histoires anciennes, mais Chocolate Beer comme catégorie internationale est un produit du brassage artisanal moderne. Elle ne descend pas d'une famille historique unique : elle réunit des bières qui ajoutent réellement cacao ou chocolat et, selon le guide, des projets où cet ingrédient doit être déclaré et perceptible.

La confusion vient du vocabulaire du malt. Des malts torréfiés, dont le chocolate malt, produisent par chauffage des notes rappelant cacao et café sans contenir une fève. À l'inverse, une bière claire peut recevoir des nibs et sentir nettement le chocolat. Nom de malt, perception aromatique et ingrédient réel forment trois colonnes différentes.

Les formes de cacao changent la technique. Les nibs torréfiés apportent arômes, amertume et polyphénols avec une part de beurre de cacao ; la poudre dégraissée limite les lipides mais peut former des dépôts ; le chocolat commercial ajoute sucre, émulsifiants et matière grasse. Or les lipides déstabilisent la mousse en perturbant son film protéique.

La catégorie ne réclame donc ni lactose ni dessert. Une Chocolate Beer peut être sèche, tannique et sombre, tandis qu'une Pastry Beer poursuit volume, douceur et imitation de pâtisserie. Le cacao suffit à changer le dossier ; la barre chocolatée entière invite beaucoup d'autres problèmes à la réunion.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Forme du cacao, teneur en lipides, torréfaction et extraction déterminent amertume, arôme, dépôt et tenue de mousse.",
        "maltsEtCereales": [
          "Grist clair ou sombre ; chocolate malt, pale chocolate et grains torréfiés peuvent soutenir le cacao sans prouver qu'une fève a été utilisée."
        ],
        "houblons": [
          "Houblonnage ajusté à l'amertume naturelle du cacao."
        ],
        "levuresEtMicroorganismes": [
          "Souche choisie pour laisser distinguer cacao réel, torréfaction du malt et éventuelle douceur résiduelle."
        ],
        "ingredientsComplementaires": [
          "Nibs de cacao, poudre, chocolat ou extrait ; vanille possible seulement si déclarée comme complément."
        ],
        "profilEau": "Alcalinité adaptée aux malts sombres et au cacao ; éviter astringence minérale.",
        "empatage": "Les malts peuvent préparer un écho de cacao ; ajouter les fèves au mash dilue le contrôle d'extraction et expose leurs lipides tout au long du procédé.",
        "ebullitionEtHoublonnage": "Cacao possible en fin de boil, mais ajout en maturation fréquent pour préserver l'arôme et limiter les matières grasses.",
        "fermentation": "La fermentation est achevée avant la plupart des contacts avec nibs ; sucre d'un chocolat commercial et contamination d'un ajout tardif restent à surveiller.",
        "maturation": "Contact avec nibs contrôlé par dégustation ; protection contre oxydation.",
        "profilRecherche": "Un cacao identifiable, du sec et tannique au chocolat riche, fondu dans une bière dont la mousse ne s'effondre ni sous le gras ni sous l'arôme artificiel."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Chocolate or Cocoa Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Spice, Herb, or Vegetable Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30A/spice-herb-or-vegetable-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "The Oxford Companion to Beer",
          "edition": null,
          "reference": "Chocolate and chocolate beer",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/njPXbYOCJR",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Fermentation",
          "edition": "2018",
          "reference": "Lipids in brewing and their effects on beer quality",
          "type": "revue_scientifique",
          "url": "https://www.mdpi.com/2311-5637/4/4/89",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "coffee-beer",
      "nom": "Coffee Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "La levure construit une bière sèche ou ronde avant le dosage du café, souvent effectué une fois l'activité primaire terminée."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Coffee Beer ne verse pas seulement un espresso dans un stout. Origine du grain, torréfaction, mouture et extraction peuvent produire jasmin, fruit rouge, noisette, cacao ou amertume brûlée dans une bière claire comme noire. Cold brew, grains entiers ou café chaud ne livrent pas les mêmes molécules. La base est la tasse, le procédé fait le service — et le vieux marc reste aussi peu séduisant sous une mousse que dans une cafetière.",
      "histoireEtOrigines": `La parenté aromatique entre café torréfié et malts sombres a fait du porter et du stout les premiers partenaires évidents de la Coffee Beer artisanale. Réactions de chauffage différentes mais familles sensorielles voisines — cacao, grillé, noisette — permettent une superposition intuitive. Les bières blondes et lagers au café ont ensuite révélé que cette association tenait à l'arôme, non à la couleur.

La catégorie contemporaine se construit en même temps que le café de spécialité apprend au public à nommer origine, variété, traitement et date de torréfaction. Un grain éthiopien clair et floral n'écrit pas le même verre qu'un assemblage sombre et huileux. À recette de bière égale, la matière première peut déplacer fruit, acidité, amertume et persistance.

L'extraction choisit ensuite ce qui passe dans la bière. Le café chaud extrait vite et fortement, y compris amertume et composés qui peuvent durcir la finale ; le cold brew favorise souvent un profil perçu comme plus doux, mais ses résultats dépendent de mouture, temps, température et ratio. Des grains entiers en maturation donnent beaucoup d'arôme avec moins de matière dissoute, tandis qu'un concentré permet un assemblage précis.

Coffee Beer est ainsi devenue une catégorie d'ingrédient, non un sous-style de stout. Une table de dégustation à deux colonnes la résume : le brasseur choisit une bière, le torréfacteur un café, puis l'extraction décide s'ils conversent ou parlent simultanément.`,
      "chapitres": [
        {
          "titre": "Trois cafés, trois architectures",
          "texte": `Un espresso ou café chaud apporte immédiatement solution, huiles et composés extraits, mais subit ensuite dilution et oxygène. Un cold brew préparé séparément se dose au conditionnement avec un profil souvent moins âpre. Des grains entiers au contact de la bière utilisent l'alcool comme solvant et privilégient les volatils, à condition d'arrêter avant les notes végétales.

L'assemblage par essais gradués reste l'outil le plus sûr. Il sépare extraction et bière finale, évite de condamner toute une cuve et transforme « combien de café ? » en question sensorielle mesurable plutôt qu'en pari matinal.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Café, torréfaction et méthode d'extraction forment trois variables indépendantes ; la bière est construite pour intégrer leur acidité, leur amertume et leurs volatils.",
        "maltsEtCereales": [
          "Base libre ; stouts/porters fréquents mais lagers et ales pâles également possibles."
        ],
        "houblons": [
          "Houblonnage ajusté pour éviter de cumuler amertume du café et du houblon."
        ],
        "levuresEtMicroorganismes": [
          "Souche accordée au profil du café : neutre pour un lot floral, fruitée avec mesure, ou expressive lorsque l'association est volontaire."
        ],
        "ingredientsComplementaires": [
          "Café en grains, moulu, cold brew, espresso ou extrait ; origine et torréfaction idéalement documentées."
        ],
        "profilEau": "Eau équilibrée, avec attention à l'alcalinité et à l'extraction du café.",
        "empatage": "Le grist peut soutenir ou contraster le café ; accumuler malts brûlés et torréfaction sombre multiplie l'âpreté au lieu de prouver l'intensité.",
        "ebullitionEtHoublonnage": "Le café est généralement mieux ajouté hors ébullition afin de limiter amertume et perte d'arômes volatils.",
        "fermentation": "La bière termine son activité avant le dosage le plus précis ; un ajout précoce accepte une plus grande perte de volatils dans le CO₂.",
        "maturation": "Cold brew ou grains entiers peuvent être dosés après fermentation ; contact court et dégusté régulièrement.",
        "profilRecherche": "Une bière au café nette, aromatique et intégrée, où torréfaction, fruit du café et base brassicole restent lisibles."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Coffee Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Foods",
          "edition": "2022",
          "reference": "Hot and cold brew coffee: chemical and sensory comparison",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9562860/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Coffee Science Foundation",
          "edition": null,
          "reference": "Understanding Cold Brew",
          "type": "programme_recherche_professionnel",
          "url": "https://coffeescience.foundation/understanding-cold-brew",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Scott Janish",
          "edition": null,
          "reference": "Guide to Coffee Beers — comparison of addition methods",
          "type": "ressource_technique_specialisee",
          "url": "https://scottjanish.com/guide-to-coffee-beers/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "honey-beer",
      "nom": "Honey Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "La levure doit absorber une charge de glucose et fructose supplémentaire ; un ajout tardif relance fermentation et dégagement de CO₂."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Le miel entre en brasserie chargé d’un paradoxe : ses sucres fermentent si volontiers qu’ils peuvent augmenter l’alcool et assécher la bière tout en faisant disparaître son parfum. Acacia délicat, châtaignier amer, sarrasin sombre ou fleurs sauvages n’offrent pourtant pas la même signature. Le moment d’ajout décide ce qui survivra ; la catégorie reste une bière au miel, pas un hydromel auquel on aurait présenté un sac de malt.",
      "histoireEtOrigines": `Miel et céréales fermentées se rencontrent depuis longtemps, mais Honey Beer ne constitue pas une tradition mondiale continue. Les usages historiques appartiennent à des cultures et proportions différentes ; la catégorie moderne rassemble les bières où le miel, déclaré comme ingrédient, reste sensoriellement significatif.

Le miel contient surtout fructose et glucose, aisément disponibles pour la levure, avec de petites fractions d'acides, minéraux, protéines et composés volatils liés aux fleurs butinées. Ajouté dans une fermentation vigoureuse, il augmente densité et alcool puis laisse souvent une finale plus sèche. Chaleur, dégagement de CO₂ et métabolisme peuvent emporter les molécules qui faisaient sentir la ruche.

Un ajout tardif ou un assemblage après fermentation conserve davantage d'identité variétale, mais réveille la levure et impose hygiène, suivi de densité et calcul de carbonatation. Chauffer sécurise au prix des parfums les plus fragiles. Le brasseur choisit donc entre une fonction surtout fermentescible et une présence aromatique plus risquée.

La frontière avec hydromel ou braggot dépend des référentiels et de la place structurante du malt et du miel. Ici, la bière doit rester lisible comme bière tandis que le miel apporte fleur, cire, herbe, fruit ou amertume propre. Sa douceur n'est jamais acquise : la levure lit d'abord l'étiquette comme un menu.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Variété florale, traitement thermique et moment d'ajout arbitrent entre fermentescibilité, sécheresse et conservation des volatils du miel.",
        "maltsEtCereales": [
          "Base du style choisi ; souvent volontairement simple pour mettre en valeur le miel."
        ],
        "houblons": [
          "Houblonnage cohérent avec le style, généralement modéré si le miel est subtil."
        ],
        "levuresEtMicroorganismes": [
          "Souche saine et suffisamment atténuative pour la charge en glucose et fructose, avec tolérance alcoolique adaptée au dosage de miel."
        ],
        "ingredientsComplementaires": [
          "Miel monofloral ou toutes fleurs ; type et moment d'ajout déterminants."
        ],
        "profilEau": "Une minéralité contenue protège les notes florales ; l'acidité propre du miel et la baisse de corps après fermentation sont intégrées au réglage final.",
        "empatage": "Le miel ne demande aucune conversion enzymatique. Le mash construit plutôt les dextrines et protéines qui empêcheront ses sucres simples d'amincir excessivement le verre.",
        "ebullitionEtHoublonnage": "Ajout en ébullition pour fermentescibilité maximale mais moins d'arôme ; ajout tardif ou post-fermentation pour préserver les volatils.",
        "fermentation": "Prévoir une atténuation accrue et une reprise d'activité lors d'un ajout tardif ; oxygène, nutriments et tolérance alcoolique deviennent importants aux dosages élevés.",
        "maturation": "Repos suffisant pour fondre alcool et notes florales.",
        "profilRecherche": "Une bière dont le miel est identifiable par ses notes florales, herbacées ou gourmandes sans basculer dans l'hydromel ni le sucre brut."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Honey Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Alternative Sugar Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/31/31B/alternative-sugar-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Molecules",
          "edition": "2020",
          "reference": "Volatile compounds and sensory properties of honey-derived fermentations",
          "type": "publication_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7221654/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Brew Your Own",
          "edition": null,
          "reference": "Maximizing Honey Flavor and Aroma",
          "type": "presse_technique_specialisee",
          "url": "https://byo.com/mr-wizard/maximizing-honey-flavor-and-aroma/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "alternative-grain-beer",
      "nom": "Alternative Grain Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "La conduite dépend des sucres et nutriments libérés par la céréale déclarée, avec enzymes ou supplémentation lorsque le moût l'exige."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Alternative Grain Beer classe une céréale par l’effet qu’elle produit : seigle épicé et visqueux, avoine soyeuse, sarrasin noisetté, millet ou sorgho capables de porter une bière sans orge, riz plus léger. Ces grains ne sont pas historiquement « alternatifs » partout ; c’est le tiroir de concours qui est moderne. Chacun possède sa température de gélatinisation, ses enzymes et son talent particulier pour ralentir la filtration.",
      "histoireEtOrigines": `Sorgho en Afrique, millet, riz, sarrasin, avoine, seigle et épeautre ont nourri des fermentations bien avant les concours modernes. Les qualifier d'« alternatifs » décrit leur place à côté de l'orge dans une classification internationale, non leur marginalité historique dans toutes les cultures.

Le cadre contemporain accueille les bières où un grain non standard produit un caractère identifiable. Il sert aussi aux recherches de produits sans gluten, mais la coïncidence n'est pas automatique : seigle et épeautre contiennent du gluten ; l'avoine exige une chaîne d'approvisionnement et une validation adaptées ; une brasserie manipulant de l'orge doit maîtriser les contaminations croisées.

Chaque céréale apporte un dossier physicochimique. Température de gélatinisation, pouvoir diastasique, azote, lipides, bêta-glucanes, enveloppes et polyphénols modifient conversion, viscosité, filtration, mousse et fermentation. Sorgho et millet peuvent être maltés ou traités avec des enzymes exogènes ; riz et grains crus demandent souvent cuisson ; seigle et avoine peuvent transformer le filtre en réunion interminable.

La catégorie moderne n'offre donc pas une recette mais une méthode de lecture : nommer le grain, expliquer son comportement, puis montrer comment le procédé transforme cette contrainte en texture ou en saveur.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le grain déclaré impose son propre bilan d'enzymes, de gélatinisation, de protéines, de lipides et de filtration ; son effet doit rester perceptible dans le verre.",
        "maltsEtCereales": [
          "Céréale alternative déclarée : seigle, avoine, sarrasin, épeautre, millet, sorgho, riz ou autre ; malt d'orge possible selon concept."
        ],
        "houblons": [
          "Dosage choisi après évaluation de la douceur, des polyphénols et de l'arôme du grain ; aucune règle de houblonnage n'appartient à la catégorie entière."
        ],
        "levuresEtMicroorganismes": [
          "La levure reçoit un moût dont l'azote assimilable et les lipides peuvent différer fortement de l'orge ; nutriments et enzymes sont ajustés après analyse."
        ],
        "ingredientsComplementaires": [
          "Enzymes de brassage possibles lorsque la céréale apporte peu ou pas de pouvoir diastasique."
        ],
        "profilEau": "Adaptée à la céréale et au style ; pH de mash à surveiller particulièrement avec matières premières atypiques.",
        "empatage": "Paliers, cereal mash, enzymes ou repos bêta-glucanes selon la céréale ; filtration parfois difficile.",
        "ebullitionEtHoublonnage": "Une ébullition énergique traite protéines et précurseurs propres au grain ; l'amertume est ensuite calibrée contre sa saveur, non contre une valeur générique.",
        "fermentation": "Atténuation et santé de levure sont suivies en fonction des sucres réellement libérés et de l'azote du moût non conventionnel.",
        "maturation": "Clarification, mousse et stabilité sont vérifiées grain par grain ; une matrice riche en lipides ou bêta-glucanes n'évolue pas comme une Pils d'orge.",
        "profilRecherche": "Une bière clairement marquée par la céréale alternative, mais techniquement propre et toujours lisible comme bière."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Alternative Grain Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/31/31A/alternative-grain-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Alternative Grain Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Fermentation",
          "edition": "2020",
          "reference": "Gluten-Free Beer Production Using Alternative Grains",
          "type": "revue_scientifique",
          "url": "https://www.mdpi.com/2311-5637/6/2/53",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Beverages",
          "edition": "2021",
          "reference": "Non-Barley Raw Materials for Brewing: a review",
          "type": "revue_scientifique",
          "url": "https://www.mdpi.com/2306-5710/7/1/4",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Food Chemistry",
          "edition": "2022",
          "reference": "Brewing with high proportions of unmalted grain",
          "type": "publication_scientifique",
          "url": "https://www.sciencedirect.com/science/article/abs/pii/S0308814622005830",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "alternative-sugar-beer",
      "nom": "Alternative Sugar Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "La fermentescibilité du sucre déclaré, de presque complète à résiduelle, détermine atténuation, alcool et corps final."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Alternative Sugar Beer ne signifie pas automatiquement bière douce. Saccharose, sucre inverti ou sirop très fermentescible augmentent alcool et sécheresse ; lactose ou certains polyols restent davantage en bouche ; mélasse et érable transportent minéraux et parfums qui ne survivent pas tous à la fermentation. La catégorie classe l’empreinte d’un sucre déclaré, pas une lignée historique. La levure, excellente comptable, distingue vite promesse gourmande et molécule consommable.",
      "histoireEtOrigines": `Les brasseurs emploient depuis longtemps sucres, sirops et mélasses, pour des raisons de matière disponible, de taxation, de force ou de goût. Alternative Sugar Beer ne regroupe pas ces histoires sous une origine unique : c'est un cadre contemporain pour les recettes où un fermentescible ou édulcorant inhabituel reste une dimension annoncée du produit.

La chimie divise la catégorie. Glucose, fructose, saccharose et sucres invertis sont largement consommés par Saccharomyces et peuvent alléger le corps relatif en augmentant l'alcool. Le lactose n'est généralement pas fermenté par les levures de bière courantes et conserve douceur et densité. Mélasse, treacle, cassonade ou sirop d'érable ajoutent, en proportions variables, minéraux, produits de cuisson et composés volatils au-delà du sucre pur.

L'arôme brut ne garantit pas l'arôme final. Une grande quantité de sirop d'érable peut fermenter presque jusqu'au silence ; une mélasse sombre peut au contraire dominer par son amertume minérale. Ajout fractionné, choix de souche et dégustation d'assemblages permettent de préserver une signature sans fatiguer la levure sous une pression osmotique excessive.

La logique devient une carte de molécules : avant de promettre douceur, reste à demander ce que la levure peut manger et ce que le traitement a laissé autour des sucres.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La fermentescibilité de chaque sucre détermine corps et alcool ; les fractions non sucrées décident si mélasse, érable ou sucre brun restent reconnaissables.",
        "maltsEtCereales": [
          "Grist construit pour fournir le corps que le sucre déclaré laissera, allègera ou renforcera après fermentation."
        ],
        "houblons": [
          "L'amertume répond à la densité finale prévue, pas au poids de sucre ajouté : un sirop entièrement fermenté ne réclame pas le même équilibre qu'un lactose résiduel."
        ],
        "levuresEtMicroorganismes": [
          "Levure adaptée à la base et à la charge fermentescible supplémentaire."
        ],
        "ingredientsComplementaires": [
          "Mélasse, érable, sucre inverti, cassonade, lactose, sorgho ou autre sucre/édulcorant déclaré."
        ],
        "profilEau": "Minéraux d'une mélasse ou d'un sirop concentré entrent dans le bilan ; ils peuvent durcir une eau déjà chargée.",
        "empatage": "Les sucres simples sont ajoutés hors mash ; celui-ci construit le corps résiduel destiné à compenser leur effet d'assèchement ou, au contraire, à ne pas épaissir un édulcorant non fermentescible.",
        "ebullitionEtHoublonnage": "Ajout au boil, whirlpool ou fermentation selon volatilité et risque de caramélisation.",
        "fermentation": "Calculer l'effet réel du sucre sur densité finale, alcool et osmolarité.",
        "maturation": "Les fortes charges fermentescibles demandent du temps pour fondre alcool et sous-produits ; lactose et sirops aromatiques exigent surtout une vérification de stabilité et de douceur.",
        "profilRecherche": "Une bière où le sucre choisi apporte un caractère reconnaissable et harmonieux, qu'il augmente la sécheresse ou la douceur."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Alternative Sugar Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/31/31B/alternative-sugar-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Alternative Sugar Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "American Homebrewers Association",
          "edition": null,
          "reference": "Five Sugar Adjuncts to Include in Your Brew",
          "type": "ressource_technique",
          "url": "https://homebrewersassociation.org/how-to-brew/5-sugar-adjuncts-to-include-in-your-brew/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": null,
          "reference": "Brewing with All Kinds of Sugar",
          "type": "presse_technique_specialisee",
          "url": "https://www.beerandbrewing.com/brewing-with-all-kinds-of-sugar",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "autumn-seasonal-beer",
      "nom": "Autumn Seasonal Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "Ale ou lager choisie pour porter l'évocation automnale, avec atténuation suffisante pour contenir courge, malt et épices."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Autumn Seasonal Beer est une catégorie d’atmosphère : couleur de feuille, céréale ronde, courge, érable, noix ou épices de tarte peuvent évoquer la récolte et le refroidissement des jours. Elle n’est pas synonyme de Fresh Hop Beer, dont le calendrier dépend d’un cône humide, ni de Pumpkin Beer, qui possède son ingrédient propre. Ici, l’automne est une composition moderne — avec un sérieux risque de surproduction de cannelle.",
      "histoireEtOrigines": `Autumn Seasonal Beer ne possède pas de berceau historique. La catégorie est née du calendrier commercial et sensoriel moderne, particulièrement en Amérique du Nord, où récolte, Halloween et Thanksgiving fournissent un langage immédiatement reconnu. Robe ambrée, malt rond, courge, sucre brun et épices de pumpkin pie ont fini par former une famille de concours.

La popularité des Pumpkin Ales craft depuis les années 1980 a fortement modelé ce vocabulaire. Toutes les bières d'automne ne contiennent pourtant ni courge ni épices : une brown ale à l'érable, une bière aux noix ou un projet autour d'une récolte locale peut poursuivre la même impression. Inversement, une Fresh Hop Beer est saisonnière par nécessité logistique, sans devoir sentir la tarte.

Le BJCP juge donc une évocation cohérente plutôt qu'une formule. La base doit offrir assez de malt ou de structure pour intégrer l'assaisonnement, tandis que la fermentation évite la lourdeur que suggère parfois le marketing. La saison est racontée par équilibre, pas par inventaire de rayon pâtisserie.

Cette catégorie assume sa modernité : elle classe la manière dont une culture de consommation a transformé l'automne en profil brassicole. Lui inventer une généalogie coloniale unique serait plus décoratif qu'encyclopédique.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Catégorie saisonnière moderne : la base, la récolte ou les épices sont composées pour produire une évocation automnale cohérente, sans ingrédient obligatoire.",
        "maltsEtCereales": [
          "Base souvent ambrée à brune : pale, Munich, Vienna, crystal, biscuit ou malts toastés."
        ],
        "houblons": [
          "Houblonnage généralement discret."
        ],
        "levuresEtMicroorganismes": [
          "Souche propre à légèrement fruitée, accordée aux ingrédients de récolte sans transformer l'automne en mélange d'esters indistinct."
        ],
        "ingredientsComplementaires": [
          "Courge, cannelle, muscade, gingembre, sucre brun, érable ou autres ingrédients évoquant l'automne."
        ],
        "profilEau": "Équilibrée, soutenant malt et épices sans dureté.",
        "empatage": "Empâtage moyen à chaud pour une texture légèrement riche si le concept le demande.",
        "ebullitionEtHoublonnage": "Épices tardives et dosage prudent ; courges cuites possibles au mash ou au boil.",
        "fermentation": "Atténuation suffisante pour que malts, courge et sucres bruns n'aboutissent pas à une lourdeur collante.",
        "maturation": "Quelques semaines pour fondre malt et épices.",
        "profilRecherche": "Une bière automnale maltée et harmonieuse évoquant récolte et épices chaudes ; le parfum reste dans le verre, pas au rayon des bougies."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Autumn Seasonal Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30B/autumn-seasonal-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Autumn Seasonal Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Smithsonian Magazine",
          "edition": "2011",
          "reference": "Pumpkin Beers and the modern American autumn season",
          "type": "histoire_culturelle",
          "url": "https://www.smithsonianmag.com/arts-culture/pumpkin-beers-dont-have-to-be-the-worst-thing-to-drink-this-fall-6078676/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "winter-seasonal-beer",
      "nom": "Winter Seasonal Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "Ale ou lager saisonnière ; les versions fortes exigent ensemencement et oxygénation capables d'intégrer alcool, fruit et éventuels sucres."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Winter Seasonal Beer réunit plusieurs manières de remplir les jours courts : strong ale britannique presque sans épice, bière de Noël belge fruitée, holiday ale américaine au gingembre ou au zeste. Force et malt sont fréquents, jamais universels ; cannelle et girofle encore moins. La saison donne un calendrier commun à des traditions différentes. Un bon feu d’hiver réchauffe la pièce — il n’exige pas qu’on y jette tout le placard à épices.",
      "histoireEtOrigines": `Les bières plus fortes vendues pendant l'hiver ont de longues histoires locales, mais Winter Seasonal Beer est un rassemblement moderne. En Grande-Bretagne, winter warmer a servi commercialement à des strong ales maltées et souvent non épicées. Belgique et Amérique du Nord ont développé d'autres bières de Noël, avec fruits, sucres, épices ou recettes renouvelées chaque année.

Le marché artisanal américain transforme ces lignées en saison identifiable. Anchor lance Our Special Ale en 1975, changeant recette et dessin d'arbre chaque année ; cette continuité en fait un jalon majeur, non la première bière hivernale de l'histoire. D'autres brasseries utilisent épices de pâtisserie, agrumes ou conifères, tandis que certaines restent fidèles à une forte ale sans assaisonnement.

Les guides contemporains jugent l'impression de saison et l'intégration. Une base forte demande levure, oxygénation et garde adaptées ; une base plus légère peut s'appuyer sur parfum et fraîcheur. Le degré, la couleur et les ingrédients changent donc selon la branche culturelle choisie.

La catégorie ressemble à un marché de décembre : plusieurs stands partagent la date, pas la même recette. La réduire à cannelle-girofle effacerait précisément ce que son histoire commerciale a réuni.`,
      "chapitres": [
        {
          "titre": "Une saison, deux traditions de force",
          "texte": `La winter warmer britannique trouve souvent sa chaleur dans la densité, le malt et l'alcool, sans épices déclarées. Les Christmas ales belges ou américaines peuvent au contraire faire travailler sucre, levure expressive et aromates. Les deux entrent sous le même toit moderne parce qu'elles sont conçues et vendues pour la période froide.

Cette différence guide la technique. Dans la première, la fermentation d'un moût dense et la maturation portent le récit ; dans la seconde, le dosage et la stabilité des ajouts peuvent devenir centraux. Le calendrier ne remplace jamais le protocole fermentaire.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille saisonnière moderne couvrant strong ales non épicées et bières de fête aromatisées ; chaque branche construit autrement chaleur et mémoire de l'hiver.",
        "maltsEtCereales": [
          "Base souvent ambrée à noire, maltée et relativement forte ; Munich, crystal, malts toastés ou torréfiés selon concept."
        ],
        "houblons": [
          "Houblonnage faible à modéré, généralement secondaire."
        ],
        "levuresEtMicroorganismes": [
          "Souche neutre ou fruitée suivant la tradition choisie ; les versions fortes exigent une réelle tolérance alcoolique."
        ],
        "ingredientsComplementaires": [
          "Épices, fruits secs, mélasse, miel, sucre brun ou écorces selon concept ; aucun ingrédient universel."
        ],
        "profilEau": "Profil généralement rond plutôt que fortement sulfaté, ajusté à la torréfaction, aux fruits et aux épices réellement employés.",
        "empatage": "Empâtage donnant assez de corps pour la chaleur hivernale sans sucrosité excessive.",
        "ebullitionEtHoublonnage": "Épices et sucres ajoutés de façon contrôlée ; ébullition soutenue pour les strong ales.",
        "fermentation": "Pitch et oxygénation adaptés aux densités élevées ; température maîtrisée.",
        "maturation": "Plusieurs semaines à plusieurs mois selon force, afin d'intégrer alcool et épices.",
        "profilRecherche": "Une bière d'hiver riche, chaleureuse et cohérente, festive sans excès d'épices ni alcool brûlant."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Winter Seasonal Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/30/30C/winter-seasonal-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Winter Seasonal Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Beervana",
          "edition": "2018",
          "reference": "When Winter Warmers Were a Thing",
          "type": "histoire_brassicole_specialisee",
          "url": "https://www.beervanablog.com/beervana/2018/12/7/when-winter-warmers-were-a-thing",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Hop Culture",
          "edition": null,
          "reference": "A Brief History of Christmas and Holiday Beers",
          "type": "presse_brassicole_specialisee",
          "url": "https://www.hopculture.com/christmas-holiday-beers/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Smithsonian National Museum of American History",
          "edition": null,
          "reference": "Anchor Brewing Company Records, 1954–2019",
          "type": "fonds_archives",
          "url": "https://www.si.edu/es/object/archives/sova-nmah-ac-1591",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "ginjo-beer-sake-yeast-beer",
      "nom": "Ginjo Beer / Sake-Yeast Beer",
      "collectionId": 8,
      "nature": "S",
      "parentPrincipalId": null,
      "aliases": [
        "Ginjo Beer",
        "Sake-Yeast Beer"
      ],
      "paysOrigine": [
        "Japon"
      ],
      "origine": {
        "libelle": "Japon",
        "ville": null,
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5,
        "max": 12,
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
        "min": 4,
        "max": 30,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "Levure de saké et/ou enzymes issues du kōji ; lorsqu’il intervient, le kōji saccharifie tandis qu’une levure assure la fermentation alcoolique."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Verre à saké"
        ]
      },
      "description": "Ginjo Beer déplace dans le moût de bière un ou deux outils du saké : une levure sélectionnée pour ses esters, et/ou les enzymes d’un kōji. Riz et kōji ne sont donc pas obligatoires, pas plus qu’ils ne sont synonymes ; le champignon saccharifie, la levure fermente. Cette catégorie japonaise contemporaine se définit par un procédé déclaré. Une calligraphie sur l’étiquette ne produit encore aucun ester mesurable.",
      "histoireEtOrigines": `Le ginjō-shu japonais doit une partie de son prestige moderne à la maîtrise du riz poli, du kōji, des températures basses et de levures sélectionnées pour des arômes fruités. Des brasseurs de bière ont emprunté ces outils — levure de saké, enzymes de kōji ou les deux — puis les concours ont créé Ginjo Beer ou Sake-Yeast Beer pour rendre ce procédé visible.

La catégorie est contemporaine et expérimentale. Elle ne transforme pas la bière en saké : le moût demeure brassé à partir de malt et reçoit du houblon selon le projet. Une souche de saké peut toutefois métaboliser ce milieu autrement qu'une levure d'ale courante. Des essais publiés montrent des fermentations possibles et des profils volatils spécifiques, avec une performance qui dépend fortement de la souche et de la composition du moût.

Le kōji doit rester dans la bonne colonne. Aspergillus oryzae cultivé sur une céréale produit des enzymes amylolytiques et protéolytiques ; la levure transforme ensuite les sucres disponibles en alcool et arômes. Employer du riz ne prouve donc ni l'usage de kōji ni celui d'une levure de saké, et une Ginjo Beer peut ne pas contenir de riz.

Un passage de témoin microbien résume le procédé : une levure née dans une autre industrie fermentaire reçoit un moût de bière et révèle ce qu'elle en fait. Le caractère japonais vient de cet outil précis, pas d'une décoration générique.`,
      "chapitres": [
        {
          "titre": "Levure et kōji : deux métiers séparés",
          "texte": `Le kōji rend l'amidon accessible en sécrétant des enzymes ; la levure fermente les sucres et produit notamment éthanol et esters. Dans le saké, les deux opérations peuvent avancer parallèlement. Dans une bière, le malt possède déjà des enzymes, ce qui rend le kōji optionnel et change sa fonction.

Cette distinction protège la description technique. Une Sake-Yeast Beer peut employer uniquement une souche de saké sur moût malté. Une bière au kōji peut utiliser une levure de bière ordinaire. Les réunir est un choix de recette, pas la définition automatique du mot ginjō.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Le procédé distinctif est l’emploi documenté d’une levure de saké et/ou d’enzymes de kōji ; le riz reste une variable séparée.",
        "maltsEtCereales": [
          "Malt d'orge pâle ou plus riche selon le projet ; riz fréquent mais non obligatoire et jamais preuve suffisante d'un procédé inspiré du saké."
        ],
        "houblons": [
          "Houblonnage bas à modéré, en harmonie avec le caractère sake-like."
        ],
        "levuresEtMicroorganismes": [
          "Levure de saké et/ou levure de bière selon co-fermentation ; tolérance alcool et nutrition à surveiller."
        ],
        "ingredientsComplementaires": [
          "Koji ou enzymes de koji possibles ; riz poli ou autres substrats selon projet."
        ],
        "profilEau": "Plutôt douce à modérée pour préserver finesse et fermentation.",
        "empatage": "Le malt peut assurer seul la conversion. Si du kōji intervient, son activité enzymatique, son substrat et sa température d'action sont intégrés au bilan plutôt que confondus avec la fermentation.",
        "ebullitionEtHoublonnage": "Houblonnage retenu ; gestion du riz adaptée à sa gélatinisation.",
        "fermentation": "Fermentation parfois plus lente ou plus froide, selon souche de saké ; gestion attentive de l'alcool et des nutriments.",
        "maturation": "Conditionnement propre, souvent avec carbonatation élevée dans le cadre BA.",
        "profilRecherche": "Une bière clairement marquée par des caractères de levure/koji rappelant le saké, fruités et parfois umami, mais restant structurée comme une bière."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Ginjo Beer or Sake-Yeast Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "World Beer Cup",
          "edition": "2026",
          "reference": "2026 Experimental Beer — Ginjo Beer or Sake-Yeast Beer",
          "type": "guide_de_style",
          "url": "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Journal of the American Society of Brewing Chemists",
          "edition": "2023",
          "reference": "Beer Brewed with Sake Yeast: fermentation performance and aroma profile",
          "type": "publication_scientifique",
          "url": "https://www.tandfonline.com/doi/abs/10.1080/03610470.2023.2214567",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "fresh-hop-beer",
      "nom": "Fresh Hop Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [
        "Wet Hop Beer"
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
        "min": 3.5,
        "max": 10,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": 20,
        "max": 100,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": 4,
        "max": 80,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Ale ou lager choisie pour la récolte, puis conduite rapidement et à faible oxygène afin de conserver les volatils du houblon frais."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Fresh Hop Beer est une course entre la liane et la cuve. Un cône non séché contient environ trois quarts d’eau, s’abîme vite et doit voyager en heures ; un houblon fraîchement touraillé relève d’une autre branche que certains producteurs nomment aussi fresh. Résine humide, fleurs, agrume et végétal de récolte marquent un verre éphémère. Le gazon tondu, lui, signale que la course a pris un mauvais raccourci.",
      "histoireEtOrigines": `La récolte du houblon ouvre une fenêtre étroite. Un cône mûr est normalement séché rapidement pour arrêter sa dégradation, réduire son poids et permettre stockage puis transport. Le mettre frais dans une bière inverse cette logistique : ferme, camion et salle de brassage doivent partager le même calendrier.

Wet hop désigne clairement le cône non séché, souvent composé de 75 à 80 % d'eau et utilisé peu après la cueillette. Fresh hop est plus ambigu : la Brewers Association l'emploie pour une récolte très récente, tandis que des brasseries distinguent le cône humide d'un houblon fraîchement mais complètement séché. Nommer l'état réel de la matière évite de vendre une métaphore de récolte à la place d'une information.

Dans le Nord-Ouest américain, proximité des houblonnières et mouvement craft transforment cette contrainte en événement saisonnier. Celebration Ale de Sierra Nevada, lancée en 1981, met en valeur du houblon fraîchement séché ; Northern Hemisphere Harvest de 1996 constitue un jalon distinct pour le wet hop transporté directement. Les confondre efface précisément la différence que leur logistique raconte.

Le cône humide absorbe du moût, apporte son eau et rend le dosage des acides alpha moins prévisible. Ses arômes se fanent ensuite rapidement dans la bière. La Fresh Hop Beer n'est donc pas seulement brassée pendant la récolte : elle doit aussi être conditionnée et bue avant que son sujet principal ne quitte la scène.`,
      "chapitres": [
        {
          "titre": "Quelques heures, beaucoup d'eau",
          "texte": `Le poids du wet hop trompe les comparaisons avec pellets ou cônes secs. La majeure partie est de l'eau ; il faut plusieurs fois la masse pour apporter une quantité comparable de matière sèche. Les cônes gonflent, retiennent le moût et occupent rapidement la cuve.

Pendant ce temps, respiration végétale, chaleur et microorganismes continuent leur travail. Refroidir le chargement et raccourcir le trajet protègent sa qualité. Le planning de récolte devient ainsi un ingrédient invisible : sans lui, le houblon frais est surtout du houblon fatigué qui pèse lourd.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "État du cône et délai récolte-cuve définissent la catégorie ; eau, absorption, instabilité et rendement différent du houblon sec structurent le brassage.",
        "maltsEtCereales": [
          "Base pale ale, IPA, lager ou autre, souvent simple pour mettre en avant le houblon."
        ],
        "houblons": [
          "Cônes fraîchement récoltés, non séchés ou très récemment séchés ; variété et délai récolte-brassage déterminants."
        ],
        "levuresEtMicroorganismes": [
          "Souche propre ou modérément fruitée afin que les composés de récolte restent au premier plan pendant leur courte fenêtre aromatique."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Souvent sulfates modérés à élevés pour les bases houblonnées, mais adaptée à la variété et au style.",
        "empatage": "La base est volontairement lisible et son volume calculé en anticipant les pertes considérables de moût retenu par les cônes humides.",
        "ebullitionEtHoublonnage": "Ajouts massifs possibles en kettle et whirlpool ; le volume d'eau contenu dans les wet hops et leur absorption doivent être anticipés.",
        "fermentation": "Un ajout en fermentation ou à froid exige inertage et vitesse : oxygène et matière végétale accélèrent la perte du caractère fraîchement récolté.",
        "maturation": "Très courte : conditionner et consommer rapidement pour préserver les composés de récolte.",
        "profilRecherche": "Une bière intensément fraîche, verte et aromatique, exprimant le houblon de récolte sans végétal cru excessif."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Fresh Hop Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Sierra Nevada Brewing Co.",
          "edition": null,
          "reference": "Wet hops and fresh hops — harvest guide",
          "type": "source_producteur_technique",
          "url": "https://sierranevada.com/blog/our-beer/your-harvest-guide-wet-hops-and-fresh-hops",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Oregon State University Extension Service",
          "edition": null,
          "reference": "Growing Hops in the Home Garden — harvest moisture and drying",
          "type": "publication_agronomique",
          "url": "https://extension.oregonstate.edu/catalog/em-9115-growing-hops-home-garden",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Oregon State University Libraries",
          "edition": null,
          "reference": "Oregon Hops and Brewing Archives — Fresh Hop Festival oral history",
          "type": "archives_orales",
          "url": "https://scarc.library.oregonstate.edu/omeka/exhibits/show/brewingvoices/item/35276",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "All About Beer",
          "edition": null,
          "reference": "Wet Hop Beers — harvest history and logistics",
          "type": "presse_historique_specialisee",
          "url": "https://allaboutbeer.com/wet-hop-beers/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "wood-and-barrel-aged-beer",
      "nom": "Wood- and Barrel-Aged Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
      "aliases": [
        "Wood-Aged Beer",
        "Barrel-Aged Beer"
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
        "details": "Fermentation primaire achevée avant l'élevage dans la plupart des projets ; le fût peut ensuite héberger ou exclure une microflore selon l'intention."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Wood- and Barrel-Aged Beer commence lorsque le contenant cesse d’être neutre. Essence, chauffe, taille, âge et ancien contenu peuvent apporter vanilline, lactones de coco, tanins, spiritueux, vin et oxygène à une bière déjà formée. Un fût historique servait souvent surtout au transport ; le craft moderne lui demande volontairement de parler. Entre les deux, il y a toute la différence entre stocker une pinte et lui faire lécher une planche.",
      "histoireEtOrigines": `Pendant des siècles, tonneaux et cuves de bois ont stocké ou transporté la bière parce que le matériau était disponible et réparable. Les brasseurs cherchaient souvent un contenant propre, revêtu ou réutilisé jusqu'à devenir relativement neutre. La simple présence d'un fût dans une archive ne prouve donc pas une volonté de goût boisé.

La catégorie contemporaine inverse l'intention : le bois ou l'ancien contenu doit laisser une empreinte sensorielle significative. Le mouvement craft profite notamment de fûts de bourbon, whiskey, rhum et vin disponibles, puis élargit l'élevage à de nombreux styles. Copeaux, cubes et spirales reproduisent une surface d'extraction, mais pas exactement l'oxygénation, les joints ni l'histoire liquide d'une barrique.

Chêne américain et européen, chauffe et usage antérieur déplacent vanilline, lactones, eugénol, furfural, ellagitannins et centaines d'autres composés. L'éthanol et le temps facilitent l'extraction ; l'oxygène entre lentement par le bois et les interstices. Le fût de spiritueux ajoute encore liquide retenu et molécules déjà extraites lors de sa première vie.

Le stockage devient élevage lorsque ces transformations sont recherchées, suivies et arrêtées. Cela demande dégustation de chaque fût, contrôle des pertes, détection de contamination et assemblage. Cette histoire commune explique ensuite pourquoi force, stout ou dessert changent chacun la relation au bois.`,
      "chapitres": [
        {
          "titre": "Le fût n'est pas un sachet de vanille",
          "texte": `Surface interne, volume, chauffe et nombre d'utilisations changent la vitesse d'extraction. Un petit fût neuf cède rapidement tanins et chêne ; une grande barrique plusieurs fois remplie travaille plus lentement et laisse davantage parler son ancien contenu ou l'oxygène.

Les composés ne montent pas tous ensemble. Vanille peut apparaître avant que l'alcool se fonde ; tanins et sécheresse continuent d'augmenter. Goûter régulièrement puis assembler plusieurs lots permet d'arrêter le bois au bon paragraphe plutôt que de le laisser écrire la conclusion seul.`
        },
        {
          "titre": "Stockage, élevage et acidification",
          "texte": `Un récipient conserve, un élevage transforme volontairement. La présence de Brettanomyces ou bactéries dans un vieux fût ajoute encore un autre procédé : fermentation mixte et acidification. Les guides séparent ces projets lorsque l'acidité ou le caractère sauvage devient constitutif.

Cette frontière évite de faire du bois une explication universelle. Il peut extraire, oxygéner et héberger une microflore, mais ces fonctions restent distinctes. Nommer laquelle est recherchée rend la bière plus intelligible — et le nettoyage beaucoup moins philosophique.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Essence, chauffe, géométrie, ancien contenu, oxygénation et durée constituent le procédé ; la base est choisie pour rester lisible après cette transformation.",
        "maltsEtCereales": [
          "Grist choisi pour résister à l'extraction prévue ; les bières maltées ou fortes tolèrent souvent davantage de bois, sans en avoir le monopole."
        ],
        "houblons": [
          "Amertume calculée sur la durée ; les huiles très volatiles déclinent pendant une longue garde et laissent parfois une structure plus dure qu'attendu."
        ],
        "levuresEtMicroorganismes": [
          "Souche adaptée à la bière avant transfert ; microflore du fût exclue ou suivie selon que l'acidité appartient réellement au projet."
        ],
        "ingredientsComplementaires": [
          "Bois, copeaux, spirales ou fûts ; nature du bois, chauffe et liquide précédemment contenu doivent être documentés."
        ],
        "profilEau": "La minéralité anticipe tanins, alcool et ancien contenu : sulfates élevés et bois sec peuvent cumuler une dureté durable.",
        "empatage": "Corps et fermentescibilité sont dimensionnés pour l'élevage ; une bière déjà sucrée ne perd pas magiquement ses dextrines au contact du chêne.",
        "ebullitionEtHoublonnage": "Le houblon est dosé en prévision de sa décroissance et de l'oxydation ; les profils très volatils survivent rarement à une longue barrique.",
        "fermentation": "Fermentation primaire complète avant élevage dans la majorité des projets.",
        "maturation": "De quelques semaines à plusieurs années selon force, fût et surface de contact ; dégustations régulières indispensables.",
        "profilRecherche": "Une bière où le bois et/ou l'ancien contenu du fût enrichissent la base sans la transformer en simple extrait de barrique."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wood- and Barrel-Aged Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Wood-Aged Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/33/33B/specialty-wood-aged-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Molecules",
          "edition": "2023",
          "reference": "Oak wood compounds and their extraction into alcoholic beverages",
          "type": "revue_scientifique",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9866382/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "American Society of Brewing Chemists",
          "edition": "2015",
          "reference": "Barrel Aging — oak chemistry, oxygen and process control",
          "type": "publication_professionnelle",
          "url": "https://www.asbcnet.org/events/archives/2015Meeting/proceedings/2015PreMtgPresentations/PMW_BarrelAging_Hansen.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "The Oxford Companion to Beer",
          "edition": null,
          "reference": "Barrel",
          "type": "encyclopedie_brassicole",
          "url": "https://www.beerandbrewing.com/dictionary/h63PzW6oDQ",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "wood-and-barrel-aged-strong-beer",
      "nom": "Wood- and Barrel-Aged Strong Beer",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "wood-and-barrel-aged-beer",
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
        "min": 7,
        "max": 16,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": 10,
        "max": 100,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": 8,
        "max": 120,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Fermentation d'une bière forte, complète et tolérante à l'alcool avant extraction prolongée dans le bois."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Dans une Wood- and Barrel-Aged Strong Beer, la force change la vitesse et le volume de la conversation avec le fût. L’éthanol extrait efficacement vanille, coco, épices et ancien spiritueux ; la densité offre assez de matière pour absorber tanins et temps. Barley wine, strong ale ou bock peuvent y gagner profondeur. Un degré élevé n’est pourtant pas un rabot : trop de bois donne toujours du bois, simplement plus alcoolisé.",
      "histoireEtOrigines": `Une bière déjà forte change l'échelle du travail raconté par le parent. Le mouvement craft contemporain a multiplié barley wines, strong ales et bocks dans des fûts de spiritueux parce que leur alcool, leur corps et leur durée de garde supportent une extraction que des bières fragiles subiraient.

La force agit de deux côtés. L'éthanol dissout efficacement des molécules du bois et de l'ancien contenu ; la richesse maltée fournit sucres résiduels, mélanoïdines et alcool capables de répondre aux tanins. Elle augmente aussi les risques : fermentation primaire difficile, chaleur solvante et fût de whiskey peuvent s'additionner au lieu de se fondre.

Le brasseur prépare donc l'élevage avant le transfert. Atténuation suffisante, absence de défauts, amertume calculée sur sa décroissance et marge d'extraction sont plus utiles qu'une densité maximale. L'assemblage de fûts jeunes, boisés ou plus doux devient souvent le véritable outil de finition.

Trois plateaux résument l'équilibre : bière forte, bois, ancien liquide. Aucun ne doit être réduit au rôle d'arôme versé sur les deux autres.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "La force alcoolique accélère certaines extractions et exige une fermentation primaire irréprochable ; corps, tanins et ancien spiritueux sont équilibrés par l'assemblage.",
        "maltsEtCereales": [
          "Base forte au choix : barley wine, imperial porter/stout, strong ale, bock ou autre."
        ],
        "houblons": [
          "Houblonnage adapté à la base ; prévoir son atténuation aromatique pendant la garde."
        ],
        "levuresEtMicroorganismes": [
          "Levure robuste et tolérante à l'alcool pour fermentation primaire complète."
        ],
        "ingredientsComplementaires": [
          "Fûts de whisky, bourbon, rhum, vin ou autres ; bois neuf ou alternatif possible."
        ],
        "profilEau": "Minéralité retenue pour ne pas accentuer chaleur alcoolique et tanins une fois la bière concentrée par le temps et l'évaporation.",
        "empatage": "Empâtage équilibrant richesse et fermentescibilité ; éviter une densité finale excessive avant vieillissement.",
        "ebullitionEtHoublonnage": "Ébullition souvent longue pour concentration dans les strong beers ; houblonnage calibré sur la garde.",
        "fermentation": "Pitch massif, oxygénation et nutriments adaptés aux fortes densités.",
        "maturation": "Élevage long en bois, puis éventuel assemblage entre fûts pour ajuster alcool, tanins et douceur.",
        "profilRecherche": "Une bière forte profondément intégrée au bois, chaleureuse mais non brûlante, complexe sans être dominée par vanille ou spiritueux."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wood- and Barrel-Aged Strong Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Specialty Wood-Aged Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/33/33B/specialty-wood-aged-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "American Society of Brewing Chemists",
          "edition": "2015",
          "reference": "Barrel Aging — extraction, oxygen and blending",
          "type": "publication_professionnelle",
          "url": "https://www.asbcnet.org/events/archives/2015Meeting/proceedings/2015PreMtgPresentations/PMW_BarrelAging_Hansen.pdf",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "wood-and-barrel-aged-strong-stout",
      "nom": "Wood- and Barrel-Aged Strong Stout",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "wood-and-barrel-aged-beer",
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
        "min": 8,
        "max": 18,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": 30,
        "max": 100,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": 70,
        "max": 160,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Fermentation haute d'une strong stout, avec gestion de la densité et de la chaleur avant passage en fût de spiritueux."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "La Strong Stout élevée en fût de bourbon est devenue une icône du craft américain : torréfaction, cacao et fruits noirs reçoivent vanille, chêne, coco et spiritueux. Sa robe opaque ne masque pourtant ni le sucre ni l’alcool ; elle les grossit parfois. Le défi n’est pas de faire entrer davantage d’intensité dans le tonneau, mais d’en ressortir une stout que l’on puisse encore distinguer de son fût.",
      "histoireEtOrigines": `Cette sous-catégorie se forme aux États-Unis lorsque l'Imperial Stout rencontre les fûts de bourbon. Goose Island et sa Bourbon County Stout, mise au point au début des années 1990 selon la chronologie officielle de la brasserie, constituent un jalon commercial majeur. Le récit souvent répété d'une invention parfaitement datée et solitaire a toutefois été contesté par une enquête indépendante ; mieux vaut parler d'une œuvre fondatrice pour le marché que d'un brevet sensoriel.

La rencontre fonctionne chimiquement et culturellement. Torréfaction, cacao et fruits noirs de la stout répondent à la vanilline, aux lactones et aux notes de whiskey du fût. Le haut degré extrait vite, tandis que sucres résiduels et malt sombre supportent tanins et oxydation. Cette affinité a fait de la barrel-aged stout un produit de sortie annuelle, de collection et d'assemblage.

Le succès a aussi déplacé les attentes vers des densités et douceurs croissantes. Une fermentation incomplète ne devient pas une qualité par passage en bourbon ; elle peut produire sirop, alcool chaud et saturation. Les meilleurs assemblages utilisent des fûts aux intensités différentes pour retrouver structure et finale.

La branche mérite son nom parce qu'elle a transformé un procédé général en phénomène craft reconnaissable. Son histoire commence dans les années 1990, pas dans chaque tonneau qui a autrefois transporté une stout.`,
      "chapitres": [
        {
          "titre": "Goose Island : jalon majeur, récit disputé",
          "texte": `Goose Island situe les premiers essais de Bourbon County Stout en 1992 et a construit autour du produit une chronologie détaillée. Une enquête d'All About Beer a remis en cause certains éléments du récit de création et l'usage du mot « premier ». Les deux sources ne racontent donc pas exactement la même scène.

Ce désaccord n'efface pas l'influence commerciale du produit. Il oblige seulement à proportionner la formule : Bourbon County a popularisé et institutionnalisé la stout en fût de bourbon à grande échelle ; l'antériorité absolue reste moins solide que sa postérité.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Sous-branche où torréfaction et densité de strong stout rencontrent spécifiquement chêne et ancien spiritueux ; fermentation complète et assemblage contiennent la saturation.",
        "maltsEtCereales": [
          "Base Imperial/Strong Stout : pale malt, roasted barley, chocolate, black malt et malts caramel selon profil."
        ],
        "houblons": [
          "Amertume suffisante pour équilibrer densité et vieillissement ; aromatique secondaire."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale tolérante à l'alcool et fortement atténuative."
        ],
        "ingredientsComplementaires": [
          "Fûts de bourbon, whiskey, rhum ou vin ; adjuncts éventuels seulement s'ils sont déclarés."
        ],
        "profilEau": "Alcalinité adaptée aux malts torréfiés ; chlorures et sulfates équilibrés pour ne pas durcir le bois.",
        "empatage": "Empâtage riche mais avec assez de fermentescibilité pour éviter le sirop après barrique.",
        "ebullitionEtHoublonnage": "Ébullition soutenue ; houblonnage structurel robuste.",
        "fermentation": "Fermentation complète avant transfert, avec gestion de la chaleur alcoolique.",
        "maturation": "Plusieurs mois à plus d'un an en fût selon intensité ; assemblage fréquent pour harmoniser les lots.",
        "profilRecherche": "Une strong stout profonde où torréfaction, chocolat, alcool et fût se fondent en un ensemble ample, jamais boisé ou sucré à l'excès."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wood- and Barrel-Aged Strong Stout",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Wood-Aged Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/33/33B/specialty-wood-aged-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Goose Island Beer Co.",
          "edition": null,
          "reference": "Barrel History — chronologie officielle de Bourbon County Stout",
          "type": "source_producteur_historique",
          "url": "https://www.gooseisland.com/barrel-history",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "All About Beer",
          "edition": null,
          "reference": "The Bourbon County Stout Lie — enquête critique sur le récit d'origine",
          "type": "presse_historique_critique",
          "url": "https://allaboutbeer.com/the-bourbon-county-stout-lie-goose-island/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "wood-and-barrel-aged-dessert-pastry-beer",
      "nom": "Wood- and Barrel-Aged Dessert / Pastry Beer",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "wood-and-barrel-aged-beer",
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
        "min": 7,
        "max": 16,
        "unite": "%",
        "statut": "variable"
      },
      "amertume": {
        "min": 10,
        "max": 70,
        "unite": "IBU",
        "statut": "variable"
      },
      "couleur": {
        "min": 25,
        "max": 140,
        "unite": "EBC",
        "statut": "variable"
      },
      "fermentation": {
        "type": "variable",
        "details": "Fermentation robuste d'une base dessert forte ; sucres, fruits et ajouts postérieurs sont suivis pour éviter toute reprise incontrôlée en fût."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Dessert / Pastry Beer élevée sous bois empile deux tendances récentes : une bière imite gâteau, confiserie ou petit-déjeuner, puis un fût ajoute vanille, coco, spiritueux et tanins. Cacao, café, érable, fruit, noix ou lactose peuvent former la recette. L’opulence est attendue, la confusion non. Si chaque ingrédient réclame la première ligne, le résultat ressemble moins à une pâtisserie composée qu’à tout le buffet passé au mixeur.",
      "histoireEtOrigines": `Le XXIe siècle voit les pastry stouts et autres dessert beers rechercher explicitement brownie, tiramisu, pancake ou confiserie. Leur élevage dans des fûts de spiritueux combine l'esthétique du dessert avec celle des sorties barrel-aged rares et collectionnables. La naissance de la branche est donc récente et pleinement assumée.

Le parent apporte l'histoire du bois ; ici, la divergence est l'empilement. Lactose et dextrines conservent douceur, cacao ou café ajoutent amertume, fruits et sirops relancent la fermentation, noix ou coco menacent la mousse par leurs lipides, puis bourbon et chêne ajoutent alcool et tanins. Chaque couche modifie la stabilité autant que le goût.

La Brewers Association distingue désormais cette version élevée sous bois de la Dessert or Pastry Beer générale. Cette séparation ne consacre pas une tradition ancienne ; elle reconnaît un phénomène de marché et un problème sensoriel assez spécifique pour être jugé à part.

La réussite dépend de la hiérarchie. Une référence de dessert doit être identifiable, la bière lui donner structure et le fût produire profondeur plutôt qu'une dose supplémentaire de vanille. L'étiquette peut rester longue ; la finale, elle, gagne à savoir s'arrêter.`,
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Sous-branche contemporaine combinant imitation d'un dessert et élevage sous bois ; sucre, lipides, refermentation, tanins et alcool doivent être hiérarchisés.",
        "maltsEtCereales": [
          "Base forte sombre, souvent stout ou porter, avec malts caramel et torréfiés."
        ],
        "houblons": [
          "Houblonnage faible à modéré, principalement pour contenir la sucrosité."
        ],
        "levuresEtMicroorganismes": [
          "Levure ale tolérante à l'alcool."
        ],
        "ingredientsComplementaires": [
          "Cacao, café, vanille, coco, fruits, noix, érable, lactose ou autres ingrédients dessert ; fût de spiritueux ou de vin."
        ],
        "profilEau": "Ronde et adaptée aux malts sombres, sans excès minéral.",
        "empatage": "Empâtage souvent riche, mais la fermentescibilité doit empêcher une finale totalement sirupeuse.",
        "ebullitionEtHoublonnage": "Sucres et ingrédients stables peuvent être ajoutés au boil ; aromatiques fragiles plutôt après fermentation.",
        "fermentation": "Fermentation très robuste et complète avant barrique.",
        "maturation": "Élevage en fût puis ajout/ajustement éventuel des ingrédients dessert ; assemblage fortement recommandé.",
        "profilRecherche": "Une bière dessert barrel-aged opulente mais structurée, où base, ingrédients gourmands et fût restent chacun identifiables sans saturation."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Wood- and Barrel-Aged Dessert or Pastry Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BRAUWELT International",
          "edition": "2024",
          "reference": "Pastry Stouts — emergence, ingrédients et profil contemporain",
          "type": "presse_professionnelle_brassicole",
          "url": "https://brauwelt.com/en/topics/beer-brewing-history/646855-pastry-stouts",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "aged-beer",
      "nom": "Aged Beer",
      "collectionId": 8,
      "nature": "T",
      "parentPrincipalId": null,
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
        "type": "variable",
        "details": "La fermentation initiale doit être saine et complète ; l'âge transforme ensuite ses produits dans un emballage non boisé."
      },
      "service": {
        "temperatureMin": 6,
        "temperatureMax": 14,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Teku",
          "Tulipe"
        ]
      },
      "description": "Aged Beer met le temps dans la liste des ingrédients, mais le temps travaille le plus souvent comme un agent de dégradation. Houblon et fraîcheur reculent ; oxygène, chaleur et réactions lentes peuvent donner carton, miel, fruits secs, sherry ou sauce soja selon la bière et le stockage. La catégorie BA demande plus d’un an hors bois. Elle ne promet pas que l’âge ennoblit : elle demande que son effet mérite le verre.",
      "histoireEtOrigines": `La garde a longtemps servi à stabiliser, transporter, mûrir ou transformer certaines bières, mais Aged Beer est une catégorie moderne précise. La Brewers Association la réserve aux bières conservées plus d'un an dans un contenant non boisé. Elle isole ainsi le temps et les conditions de stockage de l'extraction du bois.

La science du vieillissement commence par une mauvaise nouvelle : la qualité fraîche décline généralement. Arômes de houblon disparaissent, amertume change, composés carbonylés se forment et l'oxydation progresse. Température élevée accélère ces réactions ; oxygène dissous et oxygène entrant par l'emballage fournissent le carburant. Carton, papier, cire ou sauce soja ne sont pas des diplômes d'ancienneté.

Certaines matrices transforment pourtant ce déclin en profil apprécié. Alcool, malt sombre, sucres résiduels et composés de fermentation peuvent évoluer vers fruits secs, noix, miel, porto ou sherry ; une bière très houblonnée et légère possède moins de réserve et davantage de volatils à perdre. Même dans une barley wine, l'amélioration n'est ni linéaire ni garantie.

Le stockage fait donc partie de l'identité : bouteille, canette ou fût inox, température stable, lumière et oxygène définissent autant le résultat que la date. Aged Beer ne récompense pas une poussière d'étagère ; elle documente une transformation volontaire et encore harmonieuse.`,
      "chapitres": [
        {
          "titre": "Vieillir n'est pas simplement attendre",
          "texte": `Deux bouteilles du même brassin peuvent diverger si l'une reste fraîche et sombre tandis que l'autre traverse des cycles de chaleur. La vitesse de nombreuses réactions augmente avec la température, et une petite quantité d'oxygène au conditionnement continue d'alimenter des changements pendant des mois.

Un protocole utile conserve des témoins, note dates et conditions puis goûte à intervalles réguliers. Le moment optimal appartient au produit, pas au calendrier universel. Une année est le seuil de la catégorie BA ; elle n'est pas une garantie sensorielle imprimée par le temps.`
        },
        {
          "titre": "Oxydation souhaitée, oxydation subie",
          "texte": `Noix, sherry et fruits secs peuvent compléter une bière forte, mais ils proviennent d'un réseau de réactions qui peut continuer vers carton, bouillon ou lourdeur. Dire « oxydation noble » sans nommer la bière, l'intensité et le stade transforme un défaut possible en titre héréditaire.

La décision reste sensorielle : l'âge doit ajouter une dimension cohérente tout en laissant reconnaître la structure initiale. Lorsque seul le mot vieux survit, la bouteille a gagné une date et perdu son sujet.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Plus d'un an hors bois dans le cadre BA : oxygène, température, emballage et matrice initiale déterminent si le temps apporte complexité ou simple dégradation.",
        "maltsEtCereales": [
          "Candidat choisi pour sa réserve de malt, d'alcool ou de complexité fermentaire ; les profils légers et très volatils perdent plus qu'ils ne gagnent souvent."
        ],
        "houblons": [
          "Houblons dosés en anticipant la perte progressive d'arôme, l'oxydation des huiles et l'évolution de l'amertume."
        ],
        "levuresEtMicroorganismes": [
          "Souche ayant achevé proprement son travail ; la levure résiduelle peut encore modifier oxygène et composés en bouteille."
        ],
        "ingredientsComplementaires": [
          "Aucun ingrédient obligatoire ; le temps et les conditions de stockage sont le facteur distinctif."
        ],
        "profilEau": "La minéralité initiale demeure, tandis que corps et amertume évoluent ; une dureté déjà forte peut devenir plus visible quand les arômes frais reculent.",
        "empatage": "Le candidat est conçu avec assez de structure fermentée, maltée ou alcoolique pour évoluer, sans croire qu'un excès de sucre résiduel deviendra automatiquement complexe.",
        "ebullitionEtHoublonnage": "Les composés de houblon sont dosés en sachant que leur aromatique et leur amertume changeront ; une IPA fraîche n'est pas un candidat universel à la cave.",
        "fermentation": "Fermentation complète et saine avant vieillissement ; éviter d'enfermer des défauts sous prétexte de garde.",
        "maturation": "Plus d'un an dans le cadre BA, en bouteille, canette, keg ou autre récipient non boisé ; température stable et oxygène limité.",
        "profilRecherche": "Une bière dont l'âge apporte profondeur et intégration sans oxydation papery, sauce soja ou disparition complète du style initial."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Aged Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Food Chemistry",
          "edition": "2010",
          "reference": "Beer ageing: a critical review",
          "type": "revue_scientifique",
          "url": "https://talcottlab.tamu.edu/wp-content/uploads/sites/108/2020/03/Review-Beer-Ageing.pdf",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Critical Reviews in Food Science and Nutrition",
          "edition": "2020",
          "reference": "Beer aging: flavor changes and quality",
          "type": "revue_scientifique",
          "url": "https://pubmed.ncbi.nlm.nih.gov/33337064/",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "BrewingScience",
          "edition": null,
          "reference": "Technological strategies for controlling aldehyde formation in beer: a review of brewing-related flavour instability",
          "type": "publication_scientifique_professionnelle",
          "url": "https://brewingscience.de/index.php/brewingscience/article/view/517",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "rauchbier-smoke-beer",
      "nom": "Rauchbier / Smoke Beer",
      "collectionId": 8,
      "nature": "F",
      "parentPrincipalId": null,
      "aliases": [
        "Rauchbier",
        "Smoke Beer",
        "Smoked Beer"
      ],
      "paysOrigine": [
        "International"
      ],
      "origine": {
        "libelle": "Tradition de Bamberg et interprétations internationales",
        "ville": "Bamberg",
        "region": null,
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 3.5,
        "max": 10,
        "unite": "%",
        "statut": "large"
      },
      "amertume": {
        "min": 10,
        "max": 50,
        "unite": "IBU",
        "statut": "large"
      },
      "couleur": {
        "min": 6,
        "max": 80,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "variable",
        "details": "Ale ou lager suivant la branche fumée ; la souche doit laisser distinguer les phénols du malt de ceux de la fermentation."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Tulipe"
        ]
      },
      "description": "Rauchbier et Smoke Beer nomment une famille où la fumée provient d’un malt ou d’un procédé déclaré : hêtre épicé, chêne plus sec, aulne, cerisier ou autre bois adapté changent le registre. Bamberg conserve la branche la plus célèbre, sans prouver que toutes les bières anciennes fumaient. Le feu peut signer une Märzen, une Weizen ou une Bock ; il ne reçoit jamais le droit de brûler le reste de la recette.",
      "histoireEtOrigines": `Sécher le grain germé est indispensable pour stabiliser le malt, mais le feu direct n'a jamais été l'unique solution de toute l'humanité brassicole. Séchage à l'air, au soleil et dispositifs séparant fumée et grain ont coexisté avec les tourailles où les fumées traversaient le lit de malt. Certaines bières anciennes étaient donc fumées ; affirmer qu'elles l'étaient toutes remplace une histoire technique complexe par une cheminée universelle.

La révolution industrielle rend les malts pâles et non fumés plus réguliers et accessibles. Fours à chaleur indirecte, coke puis contrôle mécanique séparent combustible et produit. Ce changement fait progressivement passer la fumée d'une conséquence possible du séchage à un choix sensoriel. La date de 1635 mise en avant par Schlenkerla correspond à un brevet anglais de séchage sans contact de fumée, mais aucun brevet isolé n'éteint tous les foyers européens le lendemain.

Bamberg maintient une continuité remarquable. Des brasseries et malteries locales, notamment Schlenkerla et Spezial, conservent le malt d'orge séché sur feu de hêtre. La légende d'un incendie médiéval qui aurait accidentellement fumé le malt puis ravi les clients est reconnue comme légende par Schlenkerla elle-même. La tradition réelle n'a nul besoin de ce scénario : elle repose sur un outil encore en fonctionnement.

Le craft international a ensuite transformé Rauchbier en famille ouverte. Hêtre, chêne, aulne ou bois fruitier, orge ou blé, ale ou lager produisent des profils différents. Le parent porte cette histoire du séchage ; Märzen, Weiss, Helles et Bock racontent chacune comment leur base absorbe la fumée.`,
      "chapitres": [
        {
          "titre": "Le procès de la bière ancienne forcément fumée",
          "texte": `L'accusation s'appuie sur une vérité partielle : lorsque la fumée traverse le grain humide, le malt prend des phénols aromatiques. Mais l'air et le soleil peuvent aussi sécher, et des techniques de chauffage indirect existaient avant leur domination industrielle. Climat, combustible, architecture et moyens du producteur décidaient du résultat.

Le verdict reste donc local. Une source décrivant une touraille à feu direct soutient une bière fumée à cet endroit et à cette date ; elle ne parfume pas rétrospectivement chaque brassin de l'Antiquité au XVIIe siècle. L'histoire gagne ici à garder les fenêtres ouvertes.`
        },
        {
          "titre": "Le bois ne donne pas seulement une intensité",
          "texte": `Hêtre, chêne, aulne et cerisier produisent des fumées aux compositions différentes, tandis que température et combustion déplacent phénols, goudron et âcreté. Un feu propre et une circulation contrôlée recherchent le parfum sans déposer suie ou créosote.

Le maltage fixe ainsi la personnalité avant le brassage. La proportion de Rauchmalz ajuste le volume, mais changer de bois change aussi le timbre. Une recette qui remplace le hêtre par du chêne n'a pas seulement tourné un bouton : elle a changé d'instrument.`
        }
      ],
      "recette": {
        "profilUnique": false,
        "explicationProfil": "Famille de procédé : combustible, combustion, céréale et proportion de malt fumé construisent la signature ; chaque enfant conserve ensuite la structure de sa base.",
        "maltsEtCereales": [
          "Malt fumé au hêtre, chêne ou autre bois adapté, associé aux céréales nécessaires à la Märzen, Weiss, Helles, Bock ou autre branche déclarée."
        ],
        "houblons": [
          "L'amertume et l'aromatique répondent à la base ; un houblon trop résineux peut fusionner avec la fumée, tandis qu'un profil noble laisse mieux séparer les couches."
        ],
        "levuresEtMicroorganismes": [
          "Souche choisie pour séparer ses éventuels phénols de ceux du feu ; la Weiss constitue l'exception où cette conversation est volontaire."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "La fumée rend vite visibles dureté et finale minérale ; le profil est ajusté à la base sans accentuer cendre ou amertume phénolique.",
        "empatage": "La proportion se règle après dégustation du lot de malt : bois, fraîcheur et touraillage font varier l'intensité davantage qu'un pourcentage universel.",
        "ebullitionEtHoublonnage": "La fumée provient du malt ou du procédé déclaré ; l'ébullition ne corrige ni créosote ni combustion sale et le houblon reste dimensionné au sous-style.",
        "fermentation": "Propre, afin que la fumée reste lisible et non médicinale.",
        "maturation": "Lagering pour les branches bambergiennes, conditionnement plus vif pour une Weiss ou autre garde adaptée : le temps fond fumée et fermentation sans effacer leur base.",
        "profilRecherche": "Une bière où le feu et la branche choisie restent également lisibles, sans cendre, plastique ni charcuterie agressive."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Smoke Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Smoked Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/32/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schlenkerla",
          "edition": null,
          "reference": "History of Rauchbier and Bamberg smoke-malt tradition",
          "type": "source_producteur_historique",
          "url": "https://www.schlenkerla.de/rauchbier/geschichtee.html",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Craft Beer & Brewing",
          "edition": null,
          "reference": "For the Love of Smoke — histoire critique du malt fumé",
          "type": "presse_historique_specialisee",
          "url": "https://www.beerandbrewing.com/for-the-love-of-smoke",
          "consultation": "2026-08-11"
        },
        {
          "organisme": "Weyermann Specialty Malts",
          "edition": null,
          "reference": "Beech Smoked Barley Malt — matière première et usages",
          "type": "documentation_malteur",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-beech-smoked-barley-malt/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "weiss-rauchbier",
      "nom": "Weiss Rauchbier",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "rauchbier-smoke-beer",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bavière et Franconie",
        "ville": null,
        "region": "Bavière",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.3,
        "max": 6,
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
        "min": 6,
        "max": 40,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "haute",
        "details": "Levure de blé en fermentation haute : esters de banane et phénols de girofle doivent rester distincts de la fumée du malt."
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
      "description": "Weiss Rauchbier place trois voix dans un verre haut : blé et mousse donnent le corps, la levure produit banane et girofle, le malt d’orge fumé apporte le foyer. La branche est une hybridation moderne plus qu’une lignée autonome de Bamberg. Son équilibre tient à la séparation des phénols : clou fermentaire et feu de hêtre doivent se reconnaître sans composer un désinfectant à la banane.",
      "histoireEtOrigines": `Au croisement du malt fumé et de la Weissbier apparaît une branche sans la continuité commerciale de la Märzen bambergienne, mais fondée sur deux techniques allemandes bien établies. Schlenkerla en fournit un exemple concret avec une bière de blé où la part d'orge est fumée au hêtre tandis que le malt de blé reste non fumé.

Le principal problème est un triangle aromatique. L'acétate d'isoamyle de la levure évoque la banane ; le 4-vinylguaiacol produit le girofle ; les phénols du malt apportent le feu. Augmenter simultanément souche expressive et Rauchmalz peut faire disparaître le blé sous une masse médicinale.

Le brassage maintient donc une Weissbier d'abord : proportion significative de blé, haute fermentation, mousse et carbonatation vive. La fumée est dosée par la fraction d'orge ou un malt de blé fumé choisi, non ajoutée comme excuse après coup. Cette divergence mérite son nom parce que la levure participe autant que le four au profil final.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt de blé important ; Pilsner et/ou Munich ; fraction de malt fumé au hêtre ou autre bois propre."
        ],
        "houblons": [
          "Houblons allemands faibles, comme dans une Weissbier classique."
        ],
        "levuresEtMicroorganismes": [
          "Levure Weizen produisant esters banane et phénols girofle de façon contrôlée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérément minérale.",
        "empatage": "Un palier libérant l'acide férulique peut accroître le potentiel de girofle ; il se décide avec le niveau de fumée, car les deux familles phénoliques s'additionnent au nez.",
        "ebullitionEtHoublonnage": "Houblonnage faible ; aucune épice nécessaire.",
        "fermentation": "Fermentation haute typique Weizen, contrôlant le ratio banane/girofle afin que la fumée reste intégrée.",
        "maturation": "Courte, avec forte carbonatation et consommation relativement fraîche.",
        "profilRecherche": "Une Weissbier mousseuse et expressive où blé, banane/girofle et fumée douce se superposent sans caractère médicinal."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Smoke Beer — Weissbier base",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Specialty Smoked Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/32/32B/specialty-smoked-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schlenkerla",
          "edition": null,
          "reference": "Smokebeer Wheat — malt d'orge fumé, blé non fumé et refermentation",
          "type": "source_producteur_historique",
          "url": "https://www.schlenkerla.de/rauchbier/sorten/sortene.html",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "helles-rauchbier",
      "nom": "Helles Rauchbier",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "rauchbier-smoke-beer",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bamberg, Franconie",
        "ville": "Bamberg",
        "region": "Franconie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 4.3,
        "max": 5.8,
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
        "min": 6,
        "max": 16,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse très propre puis garde froide, afin que le malt pâle expose une fumée subtile sans bruit fermentaire."
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
      "description": "Helles Rauchbier expose la fumée sur une lager blonde où rien de sombre ne peut l’abriter. Pilsner, douceur céréalière, houblon noble et fermentation nette forment un fond clair ; le feu n’y dispose que d’un trait. Certaines versions utilisent du malt fumé pâle, tandis que la Helles de Schlenkerla acquiert une nuance dans l’environnement de la brasserie sans Rauchmalz déclaré. Même la fumée sait donc entrer par deux portes.",
      "histoireEtOrigines": `La Helles fumée est une déclinaison plus récente que la Märzen Rauchbier qui a rendu Bamberg célèbre. Sa divergence repose sur l'exposition : un grist Pilsner pâle, peu de caramel et une fermentation basse nette laissent la moindre note de feu occuper le premier plan.

Deux chemins illustrent la catégorie. Un brasseur peut employer une petite part de malt fumé clair. Schlenkerla décrit au contraire sa Helles comme brassée sans malt fumé, mais dans les mêmes cuivres, caves et environnement que ses Rauchbiers, d'où une fumée subtile. Ce cas commercial ne prouve pas que toute Helles Rauchbier doive éviter le Rauchmalz ; il montre qu'un procédé partagé peut laisser une empreinte mesurable.

La recette reste celle d'une Helles : malt pâle, amertume basse à modérée, levure lager et garde froide. Le faible volume aromatique de la base impose un feu propre et une dose précise. Ici, la retenue n'est pas un manque de caractère ; elle est le sujet même de la branche.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Pilsner majoritaire ; petite à moyenne proportion de malt fumé clair, selon intensité."
        ],
        "houblons": [
          "Houblons nobles allemands bas à modérés."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager propre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Douce à modérément minérale, proche d'une Helles.",
        "empatage": "Empâtage favorisant une douceur de malt légère et une bonne atténuation ; la très faible couleur rend toute âcreté du malt fumé immédiatement visible.",
        "ebullitionEtHoublonnage": "Houblonnage noble discret ; la fumée peut venir d'un malt pâle fumé ou, dans de rares exemples, d'une empreinte de site clairement documentée.",
        "fermentation": "Fermentation basse nette, puis descente progressive vers la température de garde.",
        "maturation": "Plusieurs semaines au froid clarifient la lager et fondent la trace de fumée dans son malt pâle.",
        "profilRecherche": "Une Helles pâle, douce et nette, traversée par une fumée élégante sans lourdeur, goudron ni caramel excessif."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Smoke Beer — Helles base",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Specialty Smoked Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/32/32B/specialty-smoked-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schlenkerla",
          "edition": null,
          "reference": "Helles Schlenkerla Lager — fumée subtile sans malt fumé",
          "type": "source_producteur_historique",
          "url": "https://www.schlenkerla.de/rauchbier/sorten/sortene.html",
          "consultation": "2026-08-08"
        }
      ]
    },
    {
      "id": "marzen-rauchbier",
      "nom": "Märzen Rauchbier",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "rauchbier-smoke-beer",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bamberg, Franconie",
        "ville": "Bamberg",
        "region": "Franconie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 5.1,
        "max": 6.5,
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
        "min": 20,
        "max": 40,
        "unite": "EBC",
        "statut": "defini"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse nette et lagering complet : la garde fond la fumée de hêtre dans le malt Munich et la finale sèche."
      },
      "service": {
        "temperatureMin": 7,
        "temperatureMax": 10,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Seidel",
          "Mass"
        ]
      },
      "description": "Märzen Rauchbier est la branche bambergienne devenue emblème : lager ambrée, malt Munich, toast, finale nette et fumée de hêtre issue du séchage du malt. Sa structure moyenne donne au feu assez de matière pour s’intégrer sans l’étouffer. Schlenkerla l’a rendue célèbre bien au-delà de la ville ; la première gorgée peut surprendre, la seconde doit rappeler qu’une Märzen se tient toujours dessous.",
      "histoireEtOrigines": `À Bamberg, la Märzen devient le véhicule le plus lisible de la continuité fumée décrite par le parent. Sa robe ambrée, son malt Munich et sa garde froide offrent une charpente capable d'absorber le Rauchmalz au hêtre. Aecht Schlenkerla Rauchbier Märzen, servie notamment au débit depuis le fût dans la taverne historique, a fixé cette image à l'international.

Le mot Märzen renvoie à une famille de lagers historiquement brassées autour du calendrier saisonnier bavarois, mais le profil bambergien contemporain ne doit pas être projeté intact sur tous les siècles. Ce qui est directement observable est une chaîne de production locale : maltage au feu, fermentation basse, lagering et service.

La technique réussit par complémentarité. Munich et Vienna apportent profondeur céréalière ; le hêtre fournit une fumée épicée ; une amertume mesurée nettoie la finale ; la garde fond les angles. La fumée n'est ni un extrait tardif ni un incident de brasserie incendiée. Elle entre dans la recette avant même que le grain ne voie l'empâtage.

Cette branche mérite le développement historique le plus ample de la famille parce qu'elle constitue son modèle public. Weiss, Helles et Bock divergent de cette relation classique entre malt ambré et hêtre.`,
      "chapitres": [
        {
          "titre": "Le feu travaille avant la salle de brassage",
          "texte": `Dans une malterie fumée, l'air chaud et la fumée traversent le malt vert pendant le touraillage. Humidité du grain, essence, température et durée décident de la charge phénolique. Le brasseur reçoit donc une matière déjà aromatisée dans sa structure, pas une base neutre à laquelle il versera du feu liquide.

Cette antériorité explique l'intégration possible. Les composés de fumée évoluent avec empâtage, ébullition, fermentation et garde comme les autres molécules du malt. La Märzen raconte le procédé entier, depuis la bûche jusqu'au lagering.`
        }
      ],
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Malt Munich et Vienna ; proportion importante de Rauchmalz fumé au hêtre, parfois avec Pilsner."
        ],
        "houblons": [
          "Houblons nobles allemands faibles à modérés, essentiellement pour l'équilibre."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager propre."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément minérale, compatible avec Märzen et fermentation lager.",
        "empatage": "Décoction ou paliers peuvent développer la profondeur céréalière, mais la signature fumée existe déjà dans le malt et ne dépend pas d'une réaction de cuisson tardive.",
        "ebullitionEtHoublonnage": "Ébullition complète, houblonnage discret à modéré.",
        "fermentation": "Fermentation basse propre.",
        "maturation": "Lagering de plusieurs semaines pour fondre malt et fumée.",
        "profilRecherche": "Une Märzen ambrée, pain grillé et malt Munich, avec fumée de hêtre franche mais intégrée, jamais cendrée ou artificielle."
      },
      "sources": [
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Rauchbier",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/6/6B/rauchbier/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Bamberg-Style Märzen Rauchbier",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schlenkerla",
          "edition": null,
          "reference": "History of Rauchbier and Bamberg smoke-malt tradition",
          "type": "source_producteur_historique",
          "url": "https://www.schlenkerla.de/rauchbier/sorten/sortene.html",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Weyermann Specialty Malts",
          "edition": null,
          "reference": "Beech Smoked Barley Malt — production et profil",
          "type": "documentation_malteur",
          "url": "https://www.weyermann.de/en-gb/product/weyermann-beech-smoked-barley-malt/",
          "consultation": "2026-08-11"
        }
      ]
    },
    {
      "id": "bock-rauchbier",
      "nom": "Bock Rauchbier",
      "collectionId": 8,
      "nature": "SS",
      "parentPrincipalId": "rauchbier-smoke-beer",
      "aliases": [],
      "paysOrigine": [
        "Allemagne"
      ],
      "origine": {
        "libelle": "Bamberg, Franconie",
        "ville": "Bamberg",
        "region": "Franconie",
        "bassinBrassicole": null
      },
      "alcool": {
        "min": 6.3,
        "max": 9,
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
        "min": 24,
        "max": 70,
        "unite": "EBC",
        "statut": "large"
      },
      "fermentation": {
        "type": "basse",
        "details": "Fermentation basse d’un moût dense, avec ensemencement, oxygénation et température maîtrisés, puis longue garde froide."
      },
      "service": {
        "temperatureMin": 8,
        "temperatureMax": 12,
        "uniteTemperature": "°C",
        "verresRecommandes": [
          "Pokal",
          "Snifter"
        ]
      },
      "description": "Bock Rauchbier donne au feu une bière plus dense à traverser : malt Munich, pain brun, fruit sombre et alcool répondent à la fumée de hêtre ou de chêne. La force autorise une extraction aromatique ample mais additionne aussi chaleur, douceur et phénols. À Bamberg, l’Urbock mûrit des mois pour la saison automnale ; le calendrier rappelle qu’une bûche brassicole gagne parfois à rester en cave avant de rouler dans le verre.",
      "histoireEtOrigines": `La Bock fumée diverge de la famille par sa force et son calendrier. Elle associe une lager forte, déjà riche en malt et en alcool, au Rauchmalz de Bamberg. Cette combinaison est bien attestée dans la production moderne locale, sans constituer pour autant une lignée aussi autonome et ancienne que la Bock ou le malt fumé pris séparément.

Schlenkerla brasse son Urbock en été, le garde plusieurs mois dans les caves rocheuses puis le sert à l'automne. Cette séquence explique la bière mieux qu'une simple hausse de densité : fermentation fraîche, temps et température doivent fondre alcool, malt et feu avant le service. Une Doppelbock de Noël fumée au chêne montre encore que bois et saison peuvent déplacer le profil.

La base apporte sucres, mélanoïdines et chaleur capables de supporter davantage de fumée que la Helles. Elle peut aussi devenir sirupeuse si l'atténuation reste faible. La levure reçoit donc un moût dense mais fermentescible, avec un ensemencement robuste et une longue garde.

Cette branche est une Bock construite avec un malt fumé, non une Smoke Beer à laquelle on aurait ajouté de l'alcool. L'ordre des mots correspond ici à l'ordre des décisions.`,
      "recette": {
        "profilUnique": true,
        "explicationProfil": "",
        "maltsEtCereales": [
          "Munich et Vienna majoritaires ; Rauchmalz fumé au hêtre en proportion adaptée ; caramel éventuel avec retenue."
        ],
        "houblons": [
          "Houblons allemands faibles à modérés, balance vers le malt."
        ],
        "levuresEtMicroorganismes": [
          "Levure lager propre et tolérante à une densité élevée."
        ],
        "ingredientsComplementaires": [],
        "profilEau": "Modérément minérale, favorisant profondeur maltée sans dureté.",
        "empatage": "Munich et Vienna construisent la profondeur ; température et éventuelle décoction gardent assez de fermentescibilité pour que douceur, alcool et fumée ne finissent pas en sirop.",
        "ebullitionEtHoublonnage": "Ébullition soutenue, houblonnage discret.",
        "fermentation": "Fermentation basse avec pitch important et température maîtrisée.",
        "maturation": "Long lagering pour intégrer alcool, malt et fumée.",
        "profilRecherche": "Une Bock fumée profonde et chaleureuse, riche en pain brun et malt Munich, avec fumée fondue plutôt que dominante."
      },
      "sources": [
        {
          "organisme": "Brewers Association",
          "edition": "2026",
          "reference": "Bock Rauchbier / Smoke Beer",
          "type": "guide_de_style",
          "url": "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "BJCP",
          "edition": "2021",
          "reference": "Specialty Smoked Beer",
          "type": "guide_de_style",
          "url": "https://www.bjcp.org/style/2021/32/32B/specialty-smoked-beer/",
          "consultation": "2026-08-08"
        },
        {
          "organisme": "Schlenkerla",
          "edition": null,
          "reference": "Urbock et Oak Smoke Doppelbock — saison, cave et bois de fumage",
          "type": "source_producteur_historique",
          "url": "https://www.schlenkerla.de/rauchbier/sorten/sortene.html",
          "consultation": "2026-08-08"
        }
      ]
    }
  ]
};

export default collection;
