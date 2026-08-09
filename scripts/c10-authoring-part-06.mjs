import { makeCard, makeRecipe, chapter, source, exactMetric, textMetric } from "./c10-authoring-common.mjs";

export default [
  makeCard({
    code: "C10-036",
    nom: "ACWA Reuse Brew",
    nature: "Bière expérimentale / démonstrateur de réutilisation de l’eau",
    aliases: ["Reuse Brew", "Village Brewery Reuse Beer"],
    pays: "Canada",
    origine: "University of Calgary / Advancing Canadian Wastewater Assets / Village Brewery / Xylem",
    color: textMetric("Blonde / Village Blonde pour le brassin documenté"),
    fermentation: "Fermentation de bière blonde / détails non publiés",
    description: "Une bière de Calgary brassée avec des eaux usées municipales transformées en eau potable par une chaîne de traitement avancé. L’expérience vise moins à parfumer la bière à l’égout qu’à démonter, filtre après filtre, la peur instinctive de la réutilisation de l’eau.",
    histoire: `Le projet mené autour d’ACWA — Advancing Canadian Wastewater Assets — réunit l’University of Calgary, Village Brewery et Xylem. L’objectif est de démontrer concrètement qu’une eau municipale usée peut être traitée jusqu’à respecter des critères très exigeants puis être utilisée dans un produit alimentaire familier.

La chaîne décrite par l’université ne se résume pas à « un bon filtre ». Elle associe traitement biologique des nutriments, ultrafiltration, oxydation avancée par ozone et UV, puis osmose inverse. L’eau obtenue a été testée par un laboratoire indépendant et comparée aux lignes directrices canadiennes de qualité de l’eau potable avant d’être utilisée pour brasser une Village Blonde.

La bière devient ainsi un outil de communication scientifique. Le verre dit : si le traitement est correctement conçu et contrôlé, l’histoire de l’eau avant purification n’est pas son identité chimique après purification.`,
    chapitres: [
      chapter("Une station d’épuration en plusieurs actes", `Traitement biologique, membranes, oxydation avancée et osmose inverse ne font pas tous la même chose. Ils retirent successivement matières, micro-organismes et contaminants dissous. L’intérêt du démonstrateur est précisément l’empilement de barrières : la sûreté ne repose pas sur un seul gadget miraculeux.`),
      chapter("La bière contre le facteur beurk", `La réutilisation potable rencontre souvent une résistance psychologique même lorsque la qualité analytique est démontrée. Brasser une blonde rend la question concrète : le public peut comprendre que « eau recyclée » décrit une histoire de traitement, pas une saveur résiduelle. La mousse sert ici de support pédagogique.`)
    ],
    recette: makeRecipe({
      titre: "La recette commence par une usine de traitement",
      explicationProfil: "Le brassin documenté est une Village Blonde utilisant une eau municipale usée purifiée et testée ; la formulation complète de la bière n’est pas publiée.",
      malts: ["Base maltée de Village Blonde ; composition détaillée non publiée dans la documentation du projet."],
      hops: ["Houblons de la blonde non documentés dans les sources institutionnelles retenues."],
      yeast: ["Levure de la bière blonde ; souche non publiée."],
      extras: ["Aucun constituant d’eaux usées n’est recherché comme ingrédient : le projet utilise l’eau après traitement avancé et contrôle."],
      water: "Eau municipale traitée par BNR, ultrafiltration, ozone/UV, osmose inverse et contrôles analytiques avant brassage.",
      fermentation: "Fermentation conventionnelle d’une bière blonde après purification de l’eau ; paramètres non publiés.",
      target: "Une bière volontairement normale dont la normalité sert à démontrer la performance d’une chaîne de réutilisation de l’eau."
    }),
    sources: [
      source("University of Calgary", "UCalgary, Village Brewery and Xylem produce Alberta’s first beer made with treated wastewater", "https://ucalgary.ca/news/ucalgary-village-brewery-and-xylem-produce-albertas-first-beer-made-treated-wastewater", "source_universitaire"),
      source("Global News", "Calgary brewery makes beer with treated wastewater", "https://globalnews.ca/news/7282032/calgary-brewery-wastewater-beer/", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-037",
    nom: "Epic OneWater Brew",
    nature: "Famille de bières expérimentales à eau grise réutilisée",
    aliases: ["Shower Hour IPA", "Laundry Club Kölsch", "Epic Cleantec Beer"],
    pays: "États-Unis",
    origine: "Epic Cleantec / Devil's Canyon Brewing Company, Californie",
    alcohol: textMetric("6 % IPA / 4,6 % Kölsch · selon déclinaison"),
    bitterness: textMetric("Variable selon déclinaison"),
    color: textMetric("IPA ou Kölsch selon déclinaison"),
    fermentation: "Variable selon déclinaison",
    description: "Des bières brassées avec l’eau récupérée des douches, lavabos et machines à laver d’immeubles, puis purifiée par un système de réutilisation avancé. Shower Hour IPA et Laundry Club Kölsch ont au moins l’élégance d’annoncer d’où vient la blague hydraulique.",
    histoire: `Epic Cleantec travaille sur le traitement local des eaux grises de bâtiments afin de les réutiliser plutôt que de les envoyer systématiquement vers le réseau d’assainissement. Pour rendre le concept visible, l’entreprise a lancé OneWater Brew avec Devil’s Canyon Brewing, utilisant une eau récupérée dans un immeuble de San Francisco puis traitée.

Le projet a ensuite donné des produits mieux caractérisés. Shower Hour IPA est annoncée autour de 6 % ABV avec houblon Azacca, fonio et levure kveik ; Laundry Club Kölsch autour de 4,6 % avec malt Pilsner, Hallertau et un assemblage de levures. Les noms jouent sur la douche et la lessive, mais aucune bière ne reçoit savon ou assouplissant : la source est de l’eau grise purifiée.

Le système de traitement décrit par Epic Cleantec combine plusieurs barrières, dont filtration, traitement biologique, membranes, charbon actif, osmose inverse et désinfection selon les installations.`,
    chapitres: [
      chapter("La douche est une source, pas une saveur", `L’eau grise provient d’usages domestiques relativement peu contaminés comparés aux eaux de toilettes, mais elle contient tout de même savons, matières organiques et micro-organismes. Le système OneWater traite cette eau jusqu’à obtenir une qualité adaptée à l’usage démontré. Dire « bière à l’eau de douche » sans le mot « purifiée » retire précisément la moitié importante de l’histoire.`),
      chapter("Une anomalie devenue petite gamme", `La première OneWater Brew était surtout un démonstrateur. Les déclinaisons Shower Hour IPA et Laundry Club Kölsch montrent une maturation du concept : la source d’eau reste insolite, mais chaque bière possède désormais une vraie identité de recette. La collection ne contient donc pas un style unique, mais une famille de preuves par la bière.`)
    ],
    recette: makeRecipe({
      titre: "Deux bières, une même boucle d’eau",
      profilUnique: false,
      noteProfil: "Epic OneWater Brew désigne un programme ayant produit plusieurs recettes ; les paramètres varient entre Shower Hour IPA et Laundry Club Kölsch.",
      explicationProfil: "La constante est l’usage d’eau grise de bâtiment traitée par le système OneWater avant brassage avec Devil’s Canyon.",
      malts: ["Shower Hour IPA : fonio documenté parmi les céréales/adjuncts ; base maltée complète non résumée ici.", "Laundry Club Kölsch : malt Pilsner documenté."],
      hops: ["Shower Hour IPA : Azacca documenté.", "Laundry Club Kölsch : Hallertau documenté."],
      yeast: ["Shower Hour IPA : levure kveik documentée.", "Laundry Club Kölsch : assemblage de levures annoncé par le projet."],
      extras: ["Aucun savon ni produit de lessive n’est un ingrédient recherché ; l’eau est traitée avant brassage."],
      water: "Eau grise récupérée dans des bâtiments puis traitée par plusieurs barrières, pouvant inclure biologique, membranes, charbon actif, osmose inverse et désinfection.",
      fermentation: "Dépend de la déclinaison : IPA à kveik ou Kölsch avec son assemblage de levures.",
      target: "Montrer qu’une source d’eau inhabituelle peut alimenter plusieurs vraies recettes après un traitement rigoureux, sans confondre recyclage et aromatisation domestique."
    }),
    sources: [
      source("Epic Cleantec", "Shower Hour IPA and Laundry Club Kölsch", "https://epiccleantec.com/blog/shower-hour-ipa-laundry-club-kolsch", "source_producteur_technique"),
      source("Devil's Canyon Brewing Company", "Epic OneWater Brew", "https://www.devilscanyon.com/epic-onewater-brew.html", "source_brasserie")
    ]
  }),

  makeCard({
    code: "C10-038",
    nom: "ERKO",
    nature: "Pilsner expérimentale / réutilisation de l’eau",
    aliases: ["Erko beer"],
    pays: "République tchèque",
    origine: "Veolia / brasserie de Čížová",
    color: textMetric("Pilsner claire"),
    fermentation: "Basse",
    description: "Une lager tchèque de type Pilsner brassée avec de l’eau usée recyclée puis purifiée par plusieurs étapes, dont ultrafiltration et osmose inverse. Dans le pays de la Pils, choisir une blonde nette comme démonstrateur revient à faire passer l’eau recyclée devant un jury particulièrement susceptible.",
    histoire: `ERKO est un projet tchèque associé à Veolia et à une brasserie de Čížová, conçu pour sensibiliser à la sécheresse et à la réutilisation de l’eau. Contrairement aux premières descriptions très vagues qui circulent parfois, Veolia précise que la bière originale est une lager de type Pilsner, non filtrée et non pasteurisée, à fermentation basse.

L’eau provient d’eaux usées traitées puis passe par une chaîne supplémentaire comprenant coagulation, ultrafiltration, osmose inverse, adsorption sur charbon actif et désinfection. Le but est de produire une eau compatible avec le brassage, pas de laisser une trace sensorielle de son origine.

Des déclinaisons plus récentes existent, dont ERKO ZERO ; elles ne doivent pas être confondues avec la bière originale. La collection documente ici le projet initial de lager à eau recyclée.`,
    chapitres: [
      chapter("Tester l’eau recyclée dans le temple de la Pils", `Une bière pâle, nette et peu chargée en arômes de fermentation cache mal les défauts d’eau. Choisir une Pilsner comme démonstrateur est donc symboliquement fort : si l’eau purifiée posait un problème sensoriel majeur, la base claire aurait peu d’endroits où le dissimuler.`),
      chapter("ERKO n’est pas forcément ERKO ZERO", `Le projet a évolué et Veolia communique désormais sur plusieurs produits. La fiche conserve les générations séparées : la première ERKO illustre la réutilisation d’eau dans une lager tchèque ; une version zéro alcool appartient à une étape ultérieure. L’histoire reste lisible seulement si l’on évite de fusionner toutes les fiches marketing.`)
    ],
    recette: makeRecipe({
      titre: "Une Pilsner qui commence par l’osmose inverse",
      explicationProfil: "Lager de type Pilsner à fermentation basse, non filtrée et non pasteurisée dans la présentation du projet initial.",
      malts: ["Base de Pilsner tchèque ; malt exact et composition non publiés dans les sources techniques retenues."],
      hops: ["Houblons non documentés avec précision dans les documents de réutilisation de l’eau."],
      yeast: ["Levure de fermentation basse ; souche non publiée."],
      extras: ["Aucun constituant d’eaux usées n’est conservé comme ingrédient intentionnel après traitement."],
      water: "Eau usée traitée puis soumise notamment à coagulation, ultrafiltration, osmose inverse, charbon actif et désinfection avant brassage.",
      fermentation: "Fermentation basse d’une lager de type Pilsner ; paramètres détaillés non publiés.",
      target: "Une Pilsner tchèque assez propre pour faire oublier au palais l’histoire très longue de son eau."
    }),
    sources: [
      source("Veolia", "ERKO — beer brewed from recycled wastewater", "https://www.veolia.cz/cs/erko", "source_entreprise"),
      source("Veolia", "Drought, recycling wastewater and reuse", "https://www.veolia.com/en/news/drought-recycling-wastewater-reuse-drinking-water", "source_entreprise"),
      source("Radio Prague International", "Czech brewery rolls out wastewater beer", "https://english.radio.cz/czech-brewery-rolls-out-first-wastewater-beer-8128614", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-039",
    nom: "Egtvedpigens Bryg",
    nature: "Reconstitution protohistorique / hybride bière-hydromel",
    aliases: ["Egtved Girl's beer"],
    pays: "Danemark",
    origine: "Nationalmuseet / reconstitutions modernes dont brasserie Skands",
    color: textMetric("Ambrée / boisson de céréales et miel"),
    fermentation: "Reconstruction moderne / fermentation historique inconnue",
    description: "Une boisson inspirée du récipient trouvé dans la tombe de la jeune fille d’Egtved, morte à l’âge du Bronze : blé, miel, baies rouges, myrte des marais et pollen. Une recette funéraire qui ressemble moins à une bière moderne qu’à un carrefour entre bière, hydromel et paysage danois.",
    histoire: `La jeune fille d’Egtved a été enterrée au Danemark vers 1370 av. J.-C. Dans son cercueil de chêne se trouvait un récipient en écorce contenant les restes d’une boisson fermentée. Les analyses et la présentation du Nationalmuseet mentionnent du blé, du miel, des airelles ou canneberges, du myrte des marais et une quantité importante de pollen, notamment de tilleul.

Ces indices suggèrent une boisson fermentée complexe, parfois décrite comme bière sucrée au miel, braggot ou mélange bière-hydromel. Les catégories modernes sont forcément imparfaites : l’âge du Bronze n’avait aucune raison de respecter nos menus déroulants.

Des reconstitutions danoises comme Egtvedpigens Bryg s’inspirent de ces résidus. Elles ne peuvent évidemment pas récupérer la souche de levure originelle ni chaque proportion, mais elles permettent de tester l’équilibre possible entre céréales, miel, fruits et plantes.`,
    chapitres: [
      chapter("Une recette écrite en résidus", `L’archéologie des boissons travaille souvent avec des traces : grains, pollens, composés végétaux, dépôts dans un récipient. Chaque indice renseigne une matière possible, mais la quantité initiale et le procédé peuvent rester inconnus. La reconstruction est donc un raisonnement, pas une transcription.`),
      chapter("Quand le style n’existe pas encore", `Appeler la boisson « bière » est pratique parce que le blé fermenté joue un rôle, mais le miel peut rapprocher le produit d’un hydromel et les plantes d’un gruit. La fiche assume cette indéfinition : le meilleur nom moderne est peut-être simplement « boisson fermentée de l’âge du Bronze ».`)
    ],
    recette: makeRecipe({
      titre: "Reconstituer un fond de récipient vieux de 3 300 ans",
      profilUnique: false,
      noteProfil: "Les ingrédients sont inspirés d’analyses archéologiques ; proportions, levure et protocole historique restent inconnus.",
      explicationProfil: "Les reconstitutions modernes combinent les éléments identifiés dans ou autour du récipient funéraire sans pouvoir reproduire exactement la boisson originale.",
      malts: ["Blé / grains de blé documentés dans les analyses ; maltage historique exact inconnu."],
      hops: ["Aucun houblon n’est nécessairement documenté ; le myrte des marais fournit une piste aromatique plus cohérente avec les résidus."],
      yeast: ["Micro-organismes historiques inconnus ; les reconstitutions utilisent une fermentation moderne."],
      extras: ["Miel.", "Airelles ou canneberges / baies rouges selon l’interprétation des résidus.", "Myrte des marais.", "Pollen, notamment de tilleul, observé dans les vestiges."],
      mash: "Procédé historique inconnu ; toute reconstruction d’empâtage est moderne et expérimentale.",
      fermentation: "Fermentation moderne dans les reconstitutions ; la souche de l’âge du Bronze n’est pas connue.",
      target: "Une boisson archéologique crédible dans ses ingrédients tout en acceptant qu’elle déborde les catégories bière/hydromel contemporaines."
    }),
    sources: [
      source("National Museum of Denmark", "The Egtved Girl — fermented drink in the burial", "https://en.natmus.dk/historical-knowledge/denmark/prehistoric-period-until-1050-ad/the-bronze-age/the-egtved-girl/", "source_museale"),
      source("Snoremark", "Bronze Age girl buried with braggot/mead — reconstruction", "https://snoremark.dk/en/girl-from-bronze-age-was-barried-with-braggot-mead/", "source_producteur_reconstitution")
    ]
  }),

  makeCard({
    code: "C10-040",
    nom: "St. Anthony's Quad",
    nature: "Quadrupel sauvage / bière de terroir microbien",
    aliases: ["The Quad"],
    pays: "États-Unis",
    origine: "Urban Artifact / National Shrine of St. Anthony, Cincinnati",
    alcohol: exactMetric(10.1, "%"),
    color: textMetric("Brune / Belgian-style quadrupel"),
    fermentation: "Haute / levure sauvage capturée sur le sanctuaire",
    description: "Une quadrupel à 10,1 % fermentée avec une culture sauvage capturée sur la propriété du sanctuaire franciscain St. Anthony, puis vieillie en barriques de vin rouge. La sainteté n’est pas un paramètre de fermentation ; le lieu, en revanche, devient réellement source microbienne.",
    histoire: `Urban Artifact et le National Shrine of St. Anthony à Cincinnati ont monté cette bière comme collaboration caritative et expérience de capture de levure sauvage. Des dizaines de récipients contenant un milieu attractif ont été disposés sur la propriété, protégés par une étamine, afin d’exposer le liquide aux micro-organismes présents dans l’air et sur le site.

Après sélection et culture, la levure sauvage a servi à fermenter une Belgian-style quadrupel riche. Les sources du projet décrivent ensuite un vieillissement prolongé en barriques de vin rouge, autour de dix mois, pour un produit final annoncé à 10,1 % ABV.

L’histoire est presque monastique sans être une bière d’abbaye au sens traditionnel : ce ne sont pas des moines qui transmettent une souche séculaire, mais une équipe qui part à la chasse aux levures sur un terrain religieux contemporain.`,
    chapitres: [
      chapter("Vingt-huit pièges à levure dans un sanctuaire", `La capture sauvage n’est pas un acte mystique. On expose un milieu nutritif à l’environnement, puis on observe ce qui s’y développe et on sélectionne les cultures intéressantes. Le nombre de pièges augmente les chances de trouver un candidat fermentaire viable. La grâce divine peut rester dans le récit ; la boîte de Petri garde la responsabilité technique.`),
      chapter("Le terroir peut tenir dans un jardin", `Une levure capturée sur place permet de raconter un terroir microbien très local. Elle ne garantit pas que la souche soit unique au sanctuaire, mais elle crée un lien matériel entre lieu et fermentation. Le passage en barrique de vin rouge ajoute ensuite un deuxième terroir, celui du bois et de son usage précédent.`)
    ],
    recette: makeRecipe({
      titre: "La quad qui a tendu des pièges au vent",
      explicationProfil: "Belgian-style quadrupel à 10,1 % fermentée avec une culture sauvage capturée sur la propriété puis élevée en barrique de vin rouge.",
      malts: ["Base riche de quadrupel belge ; composition exacte des malts et sucres non publiée dans les sources retenues."],
      hops: ["Houblonnage non documenté avec précision ; probablement structurel plutôt que vedette, sans en inventer les variétés."],
      yeast: ["Levure sauvage capturée sur la propriété du sanctuaire à partir de pièges de culture puis sélectionnée/propagée."],
      extras: ["Apports issus du vieillissement en barriques ayant contenu du vin rouge."],
      fermentation: "Fermentation haute avec la culture sauvage sélectionnée ; paramètres détaillés non publiés.",
      maturation: "Environ dix mois en barriques de vin rouge selon les descriptions du projet.",
      target: "Une quadrupel forte où la singularité vient d’un véritable lien microbien avec un lieu, sans confondre fermentation sauvage et miracle."
    }),
    sources: [
      source("National Shrine of St. Anthony", "St. Anthony’s Quad Beer", "https://www.stanthony.org/st-anthonys-quad-beer/", "source_institutionnelle"),
      source("Brewbound", "Urban Artifact collaborates with St. Anthony’s Shrine on a Quad", "https://www.brewbound.com/news/urban-artifact-collaborates-st-anthonys-shrine-friary-quad/", "source_professionnelle"),
      source("The Catholic Telegraph", "St. Anthony Quad beer to debut", "https://www.thecatholictelegraph.com/st-anthony-quad-beer-to-debut-fat-tuesday/38390", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-041",
    nom: "Carlsberg Rebrew 1883",
    nature: "Reconstitution historique / levure patrimoniale",
    aliases: ["Carlsberg 1883"],
    pays: "Danemark",
    origine: "Carlsberg Research Laboratory",
    alcohol: exactMetric(4.6, "%"),
    color: textMetric("Cuivrée / lager foncée"),
    fermentation: "Basse / levure pure Carlsberg historique",
    description: "Une lager foncée rebrassée avec une culture Carlsberg issue d’une bouteille de 1883 retrouvée dans les anciennes caves. Pas besoin de momie ni de météorite : une levure de brasserie historique parfaitement datée suffit à ouvrir une porte sur la révolution scientifique de la fermentation.",
    histoire: `Carlsberg a retrouvé dans ses caves des bouteilles anciennes datant de 1883. Le laboratoire de recherche a réussi à récupérer et cultiver une levure viable associée à cette période, puis a développé Rebrew 1883 afin de recréer une lager inspirée du goût et des méthodes de la fin du XIXe siècle.

L’année est particulièrement symbolique. C’est en 1883 qu’Emil Christian Hansen, au Carlsberg Laboratory, parvient à isoler et propager une culture pure de levure de lager, étape fondamentale de l’histoire brassicole moderne. La maîtrise d’une souche stable permet alors de réduire l’imprévisibilité des fermentations et Carlsberg diffuse largement cette avancée.

La bière moderne documentée titre 4,6 %, avec malts Munich, caramel et torréfié, houblon Hallertauer Tradition et la levure historique réactivée. Ici, l’insolite n’est pas grotesque : il porte une blouse, tient un microscope et a changé la bière mondiale.`,
    chapitres: [
      chapter("1883 : quand la levure devient un individu", `Avant l’isolement de cultures pures, les fermentations étaient souvent menées par des populations microbiennes moins contrôlées. Les travaux de Hansen permettent de sélectionner une cellule puis de multiplier sa descendance, donnant une culture beaucoup plus reproductible. Cette idée paraît banale aujourd’hui parce qu’elle a précisément réussi.`),
      chapter("Rebrew n’est pas une bouteille ouverte et servie 133 ans plus tard", `La vieille bière n’est pas versée telle quelle dans les verres modernes. Le laboratoire récupère une culture viable, la propage, puis brasse avec des matières premières contemporaines choisies pour reconstruire un profil historique. C’est une reconstitution scientifique, pas une dégustation directe du liquide de 1883.`)
    ],
    recette: makeRecipe({
      titre: "Une machine à remonter le temps parfaitement danoise",
      explicationProfil: "Carlsberg documente les grands éléments de la reconstitution : levure historique, malts sombres et houblon Hallertauer Tradition pour une lager à 4,6 %.",
      malts: ["Malt Munich.", "Malt caramel.", "Malt torréfié."],
      hops: ["Hallertauer Tradition."],
      yeast: ["Culture de levure Carlsberg de 1883 réactivée et propagée par le Carlsberg Research Laboratory."],
      extras: ["Aucun ingrédient archéologique exotique : la singularité réside dans la levure patrimoniale et la reconstruction historique."],
      fermentation: "Fermentation basse avec la culture historique ; paramètres précis de production non intégralement publiés.",
      maturation: "Garde de lager selon la reconstruction Carlsberg ; durée et températures détaillées non fournies comme recette ouverte complète.",
      target: "Une lager cuivrée qui raconte l’invention de la culture pure de levure sans prétendre que chaque molécule du brassin provient de 1883."
    }),
    sources: [
      source("Carlsberg Group", "Carlsberg Research Lab rebrews the father of quality beers", "https://www.carlsberggroup.com/newsroom/carlsberg-research-lab-rebrews-the-father-of-quality-beers/", "source_producteur_scientifique"),
      source("Carlsberg", "1883 beer", "https://www.carlsberg.com/en/our-beer/1883/", "source_producteur"),
      source("Carlsberg Group", "1883 Rebrew — scientific discoveries", "https://www.carlsberggroup.com/pursuit-of-better/scientific-discoveries/1883-rebrew/", "source_producteur_scientifique")
    ]
  }),

  makeCard({
    code: "C10-042",
    nom: "Chernobyl Iиfusioи IPA",
    nature: "Hazy IPA à anomalie thématique",
    aliases: ["Chernobyl Infusion IPA"],
    pays: "Norvège",
    origine: "Gullkrona Eliksir-kokeri / Engelsrud Gladbryggeri",
    alcohol: exactMetric(7.8, "%"),
    bitterness: exactMetric(60, "IBU"),
    color: textMetric("Hazy / New England IPA"),
    fermentation: "Haute",
    description: "Une hazy IPA norvégienne à 7,8 % et 60 IBU dont le caractère « nucléaire » appartient au nom et à l’imagerie, pas à la liste d’ingrédients. Elle termine la collection avec une anomalie salutaire : parfois le bizarre est seulement une histoire que l’étiquette raconte très fort.",
    histoire: `Chernobyl Iиfusioи IPA est documentée comme une collaboration homebrew entre Gullkrona Eliksir-kokeri et Engelsrud Gladbryggeri. La fiche publique disponible la classe comme New England / Hazy IPA, à 7,8 % ABV et 60 IBU, avec une communication volontairement chargée de références à Tchernobyl, au compteur Geiger et à l’excès de houblon.

Aucun ingrédient radioactif, aucune matière provenant de la zone de Tchernobyl et aucune contamination ne sont documentés. Le caractère insolite est donc essentiellement thématique. Ce constat pourrait sembler décevant après quarante et une cartes de microbes, animaux, épaves et eaux recyclées ; il est en réalité une excellente conclusion méthodologique.

Une encyclopédie du bizarre doit aussi savoir dire quand le bizarre s’arrête à la narration. Sinon, elle devient elle-même radioactive en informations douteuses.`,
    chapitres: [
      chapter("Le compteur Geiger peut rester au placard", `Les 60 IBU et le profil hazy sont des données brassicoles ; la radioactivité ne l’est pas. Les plaisanteries de la fiche de bière font partie du thème, mais elles ne doivent pas être traduites en fait matériel. Le vert néon appartient au décor graphique, pas à l’analyse chimique.`),
      chapter("La dernière anomalie : une bière presque normale", `Cette carte rappelle qu’une collection de curiosités mélange nécessairement plusieurs natures d’étrangeté. Certaines bières sont singulières par un ingrédient, d’autres par une souche, une provenance, un procédé, un record ou une reconstitution. Chernobyl Iиfusioи est singulière surtout par son récit. La classification elle-même devient alors la leçon finale.`)
    ],
    recette: makeRecipe({
      titre: "Une NEIPA, sans isotope caché",
      explicationProfil: "Hazy/New England IPA documentée à 7,8 % ABV et 60 IBU ; les houblons, malts et levure exacts ne sont pas publiés dans la fiche publique disponible.",
      malts: ["Base de hazy IPA non documentée avec précision."],
      hops: ["Houblonnage important cohérent avec la description et les 60 IBU, sans variétés identifiées dans la source retenue."],
      yeast: ["Levure de fermentation haute de type IPA ; souche non documentée."],
      extras: ["Aucun ingrédient radioactif ou provenant de Tchernobyl n’est documenté."],
      fermentation: "Fermentation haute d’une hazy IPA ; paramètres non publiés.",
      target: "Une IPA houblonnée dont le thème nucléaire reste explicitement un thème, démontrant que l’insolite peut être narratif plutôt que matériel."
    }),
    sources: [
      source("Untappd", "Chernobyl Iиfusioи IPA — fiche publique", "https://untappd.com/b/gullkrona-eliksir-kokeri-chernobyl-iifusioi-ipa/2517910", "source_secondaire")
    ]
  })
];
