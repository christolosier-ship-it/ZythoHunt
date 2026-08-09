import { makeCard, makeRecipe, chapter, source, exactMetric, textMetric } from "./c10-authoring-common.mjs";

export default [
  makeCard({
    code: "C10-029",
    nom: "Durian Durian Beer",
    nature: "Saison au fruit expérimentale",
    aliases: [],
    pays: "Australie",
    origine: "Foreigner Brewing",
    color: textMetric("Saison claire"),
    fermentation: "Haute / saison",
    description: "Une saison australienne brassée avec du durian, le fruit tropical dont l’odeur suffit à déclencher des interdictions dans certains hôtels et transports. La bière n’ajoute pas un monstre à la cuve : elle invite un fruit qui arrive déjà avec sa propre réputation de catastrophe olfactive.",
    histoire: `Foreigner Brewing a produit Durian Durian Beer comme une saison mettant en avant le durian, fruit d’Asie du Sud-Est célèbre pour une chair riche et une odeur extrêmement clivante. Dans les pays où il est consommé, le fruit est à la fois recherché, culturellement important et parfois interdit dans des espaces clos en raison de son parfum puissant.

La recette détaillée de la bière est peu documentée. On sait qu’il s’agit d’une saison au durian ; l’alcool, les quantités de fruit, les houblons et la souche ne sont pas suffisamment établis dans les sources retenues. La tentation serait d’inventer une dégustation entière à partir de la réputation du fruit. Ce serait précisément l’erreur à éviter.

La carte fonctionne donc sur un contraste : une famille de bière sèche et fermentaire rencontre un ingrédient dont la personnalité aromatique occupe déjà toute la pièce avant ouverture.`,
    chapitres: [
      chapter("Le fruit qui possède déjà une légende", `Le durian est souvent décrit par des comparaisons olfactives extrêmes, mais ces images relèvent largement de la perception culturelle et individuelle. Sa chair est aussi crémeuse, sucrée et complexe. Une bière au durian peut donc jouer sur bien davantage qu’une caricature d’odeur « horrible ».`),
      chapter("Ce que l’on sait, sans renifler à distance", `Foreigner Brewing a bien associé une saison au durian. En revanche, les sources accessibles ne donnent pas une recette complète ni une analyse sensorielle stabilisée. La Brassopédie garde donc le fruit au centre tout en refusant de lui prêter automatiquement des notes que personne n’a mesurées dans le brassin.`)
    ],
    recette: makeRecipe({
      titre: "Une saison avec un fruit impossible à ignorer",
      explicationProfil: "Saison brassée avec du durian ; formulation complète et paramètres non publiés.",
      malts: ["Base de saison claire ; céréales et proportions non documentées avec précision."],
      hops: ["Houblons non documentés avec suffisamment de précision."],
      yeast: ["Levure de saison / fermentation haute annoncée ; souche non publiée."],
      extras: ["Durian utilisé dans le brassin ; quantité et moment d’ajout non documentés."],
      fermentation: "Fermentation haute de saison ; influence du fruit sur la fermentation non détaillée publiquement.",
      target: "Une saison expérimentale qui laisse le durian être étrange par lui-même, sans lui inventer une fiche de dégustation par réputation."
    }),
    sources: [
      source("VinePair", "Australian brewery debuts durian beer", "https://vinepair.com/booze-news/brewery-debuted-durian-beer-rotting-flesh/", "source_presse"),
      source("The Drinks Business", "Aussie brewery makes beer with Asia’s smelliest fruit", "https://www.thedrinksbusiness.com/2018/05/aussie-brewery-makes-beer-with-asias-smelliest-fruit/", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-030",
    nom: "Kimchi Sour",
    nature: "Sour expérimentale / fermentation croisée",
    aliases: ["Dokkaebier Kimchi Sour"],
    pays: ["États-Unis", "Inspiration coréenne"],
    origine: "Dokkaebier",
    color: textMetric("Cuivrée / orangée"),
    fermentation: "Acide / fermentation lactique",
    description: "Une sour qui fait dialoguer deux mondes déjà obsédés par les microbes : bière acide et kimchi. Gochugaru, gingembre et culture lactique déplacent le bocal coréen dans le langage du brassage sans prétendre qu’une pinte est devenue un accompagnement de barbecue liquide.",
    histoire: `Dokkaebier s’est fait connaître par des bières intégrant des ingrédients et références culinaires coréennes. Kimchi Sour pousse cette logique sur un terrain particulièrement cohérent : le kimchi est lui-même un produit de fermentation lactique, et la bière sour utilise également des bactéries capables de produire de l’acide lactique.

Les descriptions du produit mentionnent du gochugaru — piment coréen —, du gingembre et une culture lactique associée à l’univers du kimchi. Les informations disponibles ne permettent pas d’affirmer qu’un bocal complet de kimchi, avec chaque ingrédient traditionnel, a été vidé dans la cuve. Là encore, l’imaginaire doit rester au service des faits.

Cette bière est moins un gag qu’une conversation fermentaire : deux traditions utilisent des micro-organismes pour transformer des matières premières, puis un brasseur décide qu’elles peuvent partager la même table.`,
    chapitres: [
      chapter("Fermentation rencontre fermentation", `Le pont technique principal est l’acide lactique. Dans le kimchi comme dans de nombreuses sour beers, des bactéries lactiques transforment des sucres et abaissent le pH. Les espèces, températures, salinités et matrices sont toutefois très différentes : partager un mécanisme ne signifie pas que les deux procédés sont interchangeables.`),
      chapter("Le kimchi n’est pas une liste d’épices universelle", `Le mot couvre une immense variété de préparations coréennes. Pour cette bière, les éléments documentés sont plus précis que le nom générique : gochugaru, gingembre et culture lactique. Il faut donc partir de ces ingrédients plutôt que d’ajouter automatiquement chou, ail, sauce de poisson ou toute la cuisine coréenne par association d’idées.`)
    ],
    recette: makeRecipe({
      titre: "Le bocal et le fermenteur trouvent un terrain commun",
      explicationProfil: "Sour inspirée du kimchi, documentée avec gochugaru, gingembre et culture lactique ; la composition complète reste propriétaire ou non publiée.",
      malts: ["Base maltée de sour non documentée avec précision."],
      hops: ["Houblonnage non documenté avec précision ; une amertume trop forte peut être incompatible avec certaines bactéries lactiques selon le procédé."],
      yeast: ["Culture lactique associée à l’inspiration kimchi.", "Levure de fermentation alcoolique non identifiée dans les sources retenues."],
      extras: ["Gochugaru.", "Gingembre.", "Autres composants éventuels du profil kimchi non affirmés sans source précise."],
      fermentation: "Acidification/fermentation lactique associée à une fermentation de bière ; protocole et ordre des inoculations non publiés.",
      target: "Une sour coréano-américaine où le lien avec le kimchi repose sur de vrais mécanismes et ingrédients plutôt que sur une étiquette exotique."
    }),
    sources: [
      source("Dokkaebier", "Kimchi Sour — présentation de la bière", "https://enjoydkb.com/blogs/from-the-blogs/dokkaebier-kimchi-sour-korean-craft-beer", "source_producteur"),
      source("Craft Beer & Brewing", "Special Ingredient: Kimchi", "https://www.beerandbrewing.com/special-ingredient-kimchi", "source_professionnelle"),
      source("BeerAdvocate", "Dokkaebier Kimchi Sour", "https://www.beeradvocate.com/beer/profile/59808/542566/", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-031",
    nom: "Mr. Twit's Odious Ale",
    nature: "Bière expérimentale / patrimoine microbien",
    aliases: ["Roald Dahl Beer", "Odious Ale"],
    pays: "Royaume-Uni",
    origine: "Bompas & Parr / 40FT Brewery",
    color: textMetric("Ale anglaise / couleur non documentée avec précision"),
    fermentation: "Haute / levure prélevée sur une chaise",
    description: "Une bière fermentée avec une culture de levure obtenue à partir d’un prélèvement sur la chaise d’écriture de Roald Dahl. La littérature ne finit pas dans la cuve en pages déchirées : c’est le mobilier qui fournit une trace microbienne à cultiver.",
    histoire: `Mr. Twit’s Odious Ale a été créée en 2016 par Bompas & Parr avec 40FT Brewery pour Dinner at the Twits, expérience culinaire inspirée du roman de Roald Dahl. Le détail qui a assuré la célébrité du projet est la provenance de la levure : un écouvillon passé sur la chaise d’écriture personnelle de l’auteur a servi à rechercher une culture fermentaire.

Certaines reprises ont transformé l’histoire en « bière faite avec Roald Dahl », formule beaucoup plus macabre que la réalité. Aucun prélèvement sur son corps n’est documenté. Le lien est patrimonial : un objet de travail, son environnement microbien, puis un laboratoire qui tente d’en tirer une levure utilisable.

C’est une forme étonnante de relique littéraire : au lieu de conserver uniquement l’encre ou le papier, on fait fermenter la poussière biologique du décor.`,
    chapitres: [
      chapter("La chaise devient terroir", `Le terroir microbien peut être envisagé à l’échelle d’une ferme, d’un chai ou d’un bâtiment. Ici, il rétrécit jusqu’à un meuble précis chargé d’histoire. La valeur de la culture vient autant de son origine narrative que de ses qualités fermentaires : une levure identique trouvée sur une table anonyme n’aurait probablement jamais eu son dîner théâtral.`),
      chapter("Roald Dahl n’est pas dans la bière", `La correction est essentielle. La source primaire Bompas & Parr parle de matériau ou de micro-organismes écouvillonnés sur sa chaise d’écriture. Transformer cela en prélèvement corporel rend l’histoire plus sensationnelle mais moins vraie. La chaise suffit largement à rendre la bière odieuse au sens littéraire.`)
    ],
    recette: makeRecipe({
      titre: "Une bière avec note de bas de chaise",
      explicationProfil: "Le style, l’alcool et la formulation complète ne sont pas publiés ; l’élément documenté est la culture issue d’un prélèvement sur la chaise de Roald Dahl.",
      malts: ["Base d’ale non documentée avec précision."],
      hops: ["Houblons non documentés avec précision."],
      yeast: ["Levure obtenue après prélèvement et culture de micro-organismes présents sur la chaise d’écriture de Roald Dahl."],
      extras: ["Aucun morceau de chaise, papier ou matière corporelle de l’auteur n’est documenté comme ingrédient."],
      fermentation: "Fermentation avec la culture sélectionnée ; protocole de laboratoire et paramètres de brasserie non publiés en détail.",
      target: "Une ale patrimoniale où l’histoire est littéralement portée par la provenance de la levure, sans transformer l’auteur en ingrédient."
    }),
    sources: [
      source("Bompas & Parr", "Mr Twit’s Odious Ale", "https://bompasandparr.com/case-study/mr-twits-odious-ale/", "source_createur"),
      source("The Independent", "Beer made from yeast swabbed from Roald Dahl’s writing chair", "https://www.independent.co.uk/arts-entertainment/books/news/beer-to-be-made-from-yeast-swabbed-from-roald-dahl-s-writing-chair-a7195721.html", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-032",
    nom: "Bière égyptienne à levure ancienne",
    nature: "Archéologie expérimentale / reconstitution microbienne",
    aliases: ["Ancient Egyptian beer", "5,000-year-old yeast beer"],
    pays: ["Israël", "Égypte antique et Levant ancien"],
    origine: "Hebrew University / Bar-Ilan University / Israel Antiquities Authority et partenaires",
    color: textMetric("Variable selon les brassins expérimentaux"),
    fermentation: "Levures anciennes isolées de céramiques",
    description: "Des chercheurs ont isolé des levures dans les pores de récipients archéologiques puis les ont utilisées pour fermenter des boissons modernes. Ce n’est pas une recette égyptienne parfaitement ressuscitée : c’est une expérience où un micro-organisme ancien rencontre un moût contemporain.",
    histoire: `Une équipe interdisciplinaire israélienne a travaillé sur des récipients archéologiques provenant de plusieurs sites et périodes, certains associés à la production ou à la consommation de bière et d’autres boissons fermentées. Des colonies de levures ont été isolées à partir des pores de la céramique, identifiées, puis certaines ont été utilisées pour produire de nouvelles boissons.

La couverture médiatique a résumé l’expérience par « bière brassée avec une levure vieille de 5 000 ans ». Cette formule traduit l’émerveillement mais compresse une réalité plus complexe : plusieurs récipients, plusieurs datations, plusieurs régions et un moût moderne. La levure peut éclairer des pratiques anciennes ; elle ne fournit pas à elle seule le reste d’une recette perdue.

C’est précisément ce qui rend l’expérience scientifique intéressante. On ne boit pas l’Égypte antique en bouteille ; on teste ce qu’une culture associée à des objets anciens peut encore faire dans un environnement de fermentation actuel.`,
    chapitres: [
      chapter("Les pores de la poterie comme archive biologique", `Une céramique poreuse peut conserver des résidus et des micro-organismes dans ses microcavités. Les chercheurs ont exploité cette possibilité en cultivant des prélèvements puis en identifiant les souches. Le geste se situe à la frontière de l’archéologie, de la microbiologie et de la fermentation expérimentale.`),
      chapter("Une levure ancienne ne reconstitue pas une recette entière", `Même si la provenance d’une souche est établie, il manque encore les céréales exactes, leur traitement, la composition de l’eau, les aromates, les proportions, les températures et la chaîne de fermentation historique. Le brassin moderne est donc une expérience avec un élément ancien, pas une machine à voyager dans le temps gastronomique.`)
    ],
    recette: makeRecipe({
      titre: "Ce que l’archéologie a réellement remis en fermentation",
      explicationProfil: "Moûts modernes fermentés avec des levures isolées de céramiques antiques ; plusieurs essais et souches sont concernés, pas une recette unique.",
      profilUnique: false,
      noteProfil: "Cette entrée décrit un programme d’archéologie expérimentale : la levure ancienne ne suffit pas à définir une bière égyptienne complète.",
      malts: ["Moûts modernes préparés pour les expérimentations ; composition variable selon l’essai et non équivalente à une recette antique intégrale."],
      hops: ["Le houblon moderne n’est pas un marqueur nécessaire des boissons antiques étudiées ; ne pas l’ajouter par défaut au récit."],
      yeast: ["Souches de levures isolées de récipients archéologiques puis cultivées et identifiées en laboratoire."],
      extras: ["Les poteries sont des sources de prélèvement, pas des ingrédients broyés dans la boisson."],
      fermentation: "Fermentation expérimentale moderne avec les isolats anciens dans des conditions contrôlées.",
      target: "Comprendre le potentiel fermentaire de levures associées à des objets antiques sans prétendre ressusciter une recette complète disparue."
    }),
    sources: [
      source("Bar-Ilan University", "Researchers brew beer with yeast isolated from ancient vessels", "https://www.biu.ac.il/en/article/581409", "source_universitaire"),
      source("Hebrew University / CFHU", "Ancient yeast from pottery used to recreate fermented beverages", "https://www.cfhu.org/news/ancient-yeast/", "source_universitaire"),
      source("Jewish Telegraphic Agency", "5,000-year-old yeast used to brew beer", "https://www.jta.org/2019/05/22/israel/5000-year-old-yeast-is-being-used-by-israeli-scientists-to-brew-a-pretty-good-beer", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-033",
    nom: "The Wreck - Preservation Ale",
    nature: "Rebrassage patrimonial / levure d’épave",
    aliases: ["Preservation Ale", "Sydney Cove beer"],
    pays: "Australie",
    origine: "QVMAG / James Squire / Malt Shovel Brewery",
    color: textMetric("Porter foncé"),
    fermentation: "Haute / levure récupérée de bouteilles d’épave",
    description: "Un porter moderne utilisant une levure récupérée à partir de bouteilles retrouvées dans l’épave du Sydney Cove, naufragé en 1797. Le trésor n’est pas le rhum, ni l’or : c’est une cellule qui a attendu deux siècles qu’on lui rende un fermenteur.",
    histoire: `Le Sydney Cove a fait naufrage au large de la Tasmanie en 1797 avec une cargaison comprenant des bouteilles d’alcool. Des fouilles archéologiques ont permis de récupérer des bouteilles scellées et leur contenu, conservés ensuite par le Queen Victoria Museum and Art Gallery.

Des travaux scientifiques ont cherché des micro-organismes viables dans ces bouteilles. Une culture de levure associée aux restes de bière a ensuite participé à un projet de rebrassage avec James Squire / Malt Shovel Brewery, donnant naissance à Preservation Ale, souvent décrite comme un porter foncé inspiré de l’époque.

Il serait excessif d’appeler le résultat « la bière de 1797 ressuscitée » : la levure est historique, mais la recette et les conditions de production modernes sont des reconstructions. L’épave fournit une voix, pas toute la partition.`,
    chapitres: [
      chapter("Une bouteille comme capsule de temps", `Un contenant scellé, froid et protégé peut préserver des molécules et parfois des micro-organismes bien plus longtemps qu’un environnement ouvert. La récupération de levure viable reste exceptionnelle, ce qui explique la valeur scientifique de la cargaison au-delà de l’anecdote de taverne.`),
      chapter("Rebrasser n’est pas reproduire", `Même avec une levure historique, les malts actuels, l’eau, les équipements, l’oxygénation et le contrôle de température diffèrent profondément de ceux de la fin du XVIIIe siècle. Preservation Ale est donc un hommage expérimental fondé sur un élément authentique, pas une photocopie gustative du navire.`)
    ],
    recette: makeRecipe({
      titre: "Le porter qui remonte d’une épave",
      explicationProfil: "Base de porter moderne utilisant une culture obtenue à partir de bouteilles historiques du Sydney Cove.",
      malts: ["Base de porter foncé inspirée d’un profil historique ; composition exacte non publiée dans les sources retenues."],
      hops: ["Houblons non documentés avec précision."],
      yeast: ["Culture de levure récupérée/isolée à partir de bouteilles associées à l’épave du Sydney Cove."],
      extras: ["Aucun bois d’épave ou eau de mer n’est documenté comme ingrédient de la bière moderne."],
      fermentation: "Fermentation moderne avec la culture historique ; paramètres détaillés non publiés.",
      target: "Un rebrassage patrimonial où la levure sert de lien concret avec 1797 sans prétendre que toute la recette a survécu au naufrage."
    }),
    sources: [
      source("Queen Victoria Museum and Art Gallery", "The Sydney Cove Collection", "https://www.qvmag.tas.gov.au/Whats-on/Museum-at-Inveresk/The-Sydney-Cove-Collection", "source_museale"),
      source("The Maritime Executive", "Beer brewed from 1797 shipwreck bottle", "https://maritime-executive.com/article/beer-brewed-from-1797-shipwrecks-bottle", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-034",
    nom: "Sinai Sour",
    nature: "Reconstitution historique expérimentale",
    aliases: ["Dylan McDonnell ancient Egyptian beer"],
    pays: ["États-Unis", "Inspiration Égypte antique / Levant ancien"],
    origine: "Dylan McDonnell, Utah",
    alcohol: exactMetric(5, "%"),
    color: textMetric("Claire à ambrée / sour"),
    fermentation: "Haute / levure ancienne utilisée expérimentalement",
    description: "Une sour maison inspirée de textes médicaux et d’ingrédients du monde antique, fermentée avec une levure annoncée comme vieille d’environ trois millénaires. Figues de sycomore, dattes, miel, raisins et encens composent moins une recette certifiée qu’un roman archéologique soigneusement annoté.",
    histoire: `Le brasseur amateur Dylan McDonnell a développé Sinai Sour à partir de deux fils documentaires : une culture de levure ancienne liée à des recherches archéologiques au Proche-Orient et le papyrus Ebers, vaste texte médical de l’Égypte antique qui mentionne de nombreuses matières végétales et préparations.

Les comptes rendus de 2024 décrivent un brassin autour de 5 % ABV utilisant notamment orge égyptienne/emmer, figues de sycomore, encens, dattes du désert, cumin noir, miel de Sidr yéménite, caroube, raisins secs dorés et genévrier épineux. Cette liste donne une profondeur réelle au projet, mais elle ne prouve pas qu’une seule recette antique associait exactement tous ces ingrédients dans ces proportions.

Sinai Sour est donc une reconstruction créative informée par des sources, pas une recette retrouvée sur un papyrus avec le mode d’emploi « fermenter trois jours puis servir au pharaon ».`,
    chapitres: [
      chapter("Le papyrus comme garde-manger, pas comme fiche de brassage", `Le papyrus Ebers recense des remèdes et ingrédients dans des contextes multiples. S’en inspirer permet de sélectionner des matières historiquement plausibles, mais ne transforme pas le document en recette brassicole complète. Le travail de McDonnell relève de l’interprétation expérimentale, ce qui doit rester explicite.`),
      chapter("Une sour moderne avec vocabulaire antique", `La présence d’une levure ancienne et d’ingrédients historiques construit une passerelle vers le passé, tandis que le contrôle de fermentation, le matériel et les choix du brasseur restent contemporains. La bière est intéressante précisément parce qu’elle assume ce mélange plutôt que de prétendre abolir trois mille ans de technologie.`)
    ],
    recette: makeRecipe({
      titre: "Une reconstruction avec notes de papyrus",
      explicationProfil: "Brassin expérimental de Dylan McDonnell autour de 5 % ABV, inspiré de matières mentionnées dans des sources anciennes et utilisant une culture de levure ancienne.",
      malts: ["Orge égyptienne et/ou emmer rapportés dans les descriptions du projet."],
      hops: ["Le houblon moderne n’est pas au centre de la reconstruction documentée ; ne pas en inventer une variété."],
      yeast: ["Levure ancienne liée à un récipient archéologique du Levant et utilisée pour la fermentation expérimentale."],
      extras: ["Figues de sycomore.", "Raisins / raisins secs dorés.", "Dattes du désert.", "Miel de Sidr.", "Encens/frankincense.", "Cumin noir.", "Caroube.", "Genévrier épineux."],
      mash: "Procédé moderne adapté aux céréales utilisées ; paramètres complets non publiés comme recette scientifique standardisée.",
      fermentation: "Fermentation expérimentale avec la culture ancienne dans un brassin moderne inspiré de sources historiques.",
      target: "Une boisson plausible et documentée dans son inspiration, mais jamais présentée comme la recette certifiée d’un brasseur égyptien antique."
    }),
    sources: [
      source("Smithsonian Magazine", "Man brews beer using ancient yeast and Egyptian papyrus inspiration", "https://www.smithsonianmag.com/smart-news/this-man-brewed-beer-using-3000-year-old-yeast-and-a-recipe-from-an-ancient-egyptian-papyrus-180984576/", "source_presse_scientifique"),
      source("VinePair", "Beer made with ancient yeast", "https://vinepair.com/booze-news/beer-made-with-ancient-yeast/", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-035",
    nom: "Bière Ötzi",
    nature: "Projet en cours / piste de recherche",
    aliases: ["Ötzi beer project", "Iceman yeast beer"],
    pays: ["Italie", "Autriche", "Allemagne"],
    origine: "Eurac Research et partenaires scientifiques / piste de brassage annoncée",
    alcohol: textMetric("Non applicable · bière non encore brassée"),
    bitterness: textMetric("Non applicable · projet"),
    color: textMetric("Non définie · projet"),
    fermentation: "Projetée / levures isolées dans l’étude microbiologique",
    service: "Non applicable · projet non brassé",
    description: "La carte fantôme de la collection : en 2026, des chercheurs ont travaillé sur des levures associées à Ötzi et les ont utilisées pour du levain ; la bière n’est encore qu’une piste annoncée. Ici, la Brassopédie décrit une promesse, pas une bouteille qui existerait déjà.",
    histoire: `Une étude publiée en 2026 sur le microbiome d’Ötzi, l’homme des glaces, a identifié des micro-organismes et notamment des levures associées à la momie et à son environnement de conservation. Des chercheurs ont réussi à cultiver certaines de ces levures et à explorer leur potentiel, avec une démonstration spectaculaire autour de pain au levain.

La couverture médiatique a ensuite évoqué une prochaine étape possible : tester ces cultures dans une bière, avec l’intérêt de partenaires spécialisés en brassage. À la date de consultation de cette fiche, il ne faut donc pas présenter une « bière Ötzi » comme un produit brassé, commercialisé ou même comme une recette stabilisée.

Autre nuance capitale : les travaux scientifiques suggèrent que certaines levures pourraient être des organismes adaptés au froid ayant colonisé ou persisté dans l’environnement glaciaire après la mort d’Ötzi. Dire « levure de 5 300 ans provenant du corps vivant d’Ötzi » irait bien au-delà de ce que les données autorisent.`,
    chapitres: [
      chapter("Le boss final est encore dans le glacier", `Alcool, couleur, amertume, malts, houblons et style n’existent pas encore comme données de bière. Une fiche qui remplirait ces cases aujourd’hui fabriquerait une boisson imaginaire. Le statut « projet » est donc une information positive : il permet à ZythoHunt de suivre une expérience avant qu’elle ne devienne éventuellement un produit.`),
      chapter("Ancienne, glaciaire ou simplement bien adaptée au froid ?", `La provenance temporelle d’un micro-organisme retrouvé sur une momie n’est pas automatique. Une levure peut avoir colonisé l’environnement bien après l’inhumation tout en restant scientifiquement intéressante. La bonne formulation parle de levures associées à Ötzi et de souches froid-adaptées étudiées, sans leur délivrer un acte de naissance chalcolithique imaginaire.`)
    ],
    recette: makeRecipe({
      titre: "Recette : dossier encore vide",
      profilUnique: false,
      noteProfil: "Aucune bière n’est documentée comme brassée à ce stade : tout paramètre de recette serait spéculatif.",
      explicationProfil: "Le projet envisagé consiste à tester des levures cultivées dans le cadre des recherches sur Ötzi dans une fermentation brassicole future.",
      malts: ["Non définis : aucune recette de bière finalisée n’est publiée."],
      hops: ["Non définis : aucune recette de bière finalisée n’est publiée."],
      yeast: ["Levures cultivées dans le cadre de l’étude microbiologique d’Ötzi, dont certaines sont décrites comme adaptées aux environnements froids ; leur usage brassicole reste à tester."],
      extras: ["Aucun ingrédient « de momie » n’est destiné à être ajouté : le projet concerne des cultures microbiennes isolées et propagées."],
      water: "Non définie.",
      mash: "Non défini.",
      boil: "Non défini.",
      fermentation: "Projet de fermentation future ; aucun protocole brassicole final n’est publié.",
      maturation: "Non définie.",
      target: "Conserver une fiche de veille honnête : une piste de recherche fascinante qui n’est pas encore une bière."
    }),
    sources: [
      source("Eurac Research", "Study of microorganisms associated with Ötzi and cold-adapted yeasts", "https://www.eurac.edu/en/magazine/otzi-microbiome", "source_scientifique"),
      source("Smithsonian Magazine", "Scientists made sourdough with yeast associated with Ötzi", "https://www.smithsonianmag.com/smart-news/scientists-made-sourdough-bread-with-yeast-found-on-otzi-the-icemans-mummified-body-180988894/", "source_presse_scientifique"),
      source("The Guardian", "Scientists explore sourdough and possible brewing with Ötzi-associated yeast", "https://www.theguardian.com/science/2026/jun/05/scientists-sourdough-bread-yeast-strains-mummy", "source_presse"),
      source("The Drinks Business", "Scientists to brew beer with yeast from mummified remains — project report", "https://www.thedrinksbusiness.com/2026/06/scientists-to-brew-beer-with-yeast-from-mummified-remains/", "source_presse")
    ]
  })
];
