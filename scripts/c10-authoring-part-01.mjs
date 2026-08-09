import { makeCard, makeRecipe, chapter, source, exactMetric, textMetric } from "./c10-authoring-common.mjs";

export default [
  makeCard({
    code: "C10-001",
    nom: "Bottled Instinct",
    nature: "Bière expérimentale",
    aliases: ["The Order of Yoni Bottled Instinct"],
    pays: "Pologne",
    origine: "The Order of Yoni",
    color: textMetric("Ambrée / sour ale"),
    fermentation: "Mixte / fermentation lactique",
    description: "Une sour ale polonaise dont le véritable ingrédient-spectacle n’est pas un fruit exotique mais une culture de lactobacilles revendiquée comme issue de la flore vaginale. La provocation est anatomique ; le mécanisme, lui, relève de la microbiologie et de l’acidification lactique.",
    histoire: `Bottled Instinct appartient au projet polonais The Order of Yoni, qui a choisi de placer l’intimité féminine au centre de sa narration de marque. Le discours public du projet parle de bactéries lactiques isolées, cultivées puis utilisées dans l’élaboration d’une bière acide. C’est une distinction importante : la légende facile raconterait volontiers qu’un fluide corporel est versé dans la cuve ; ce n’est pas ce que décrivent les sources.

Le projet brouille volontairement les frontières entre science, érotisme publicitaire et fermentation. Cette mise en scène explique une grande partie de sa célébrité : l’expérience n’est pas seulement dans le verre, elle est dans la réaction du lecteur avant même qu’il ait compris ce qu’est une culture microbienne.

La fiche doit donc conserver deux voix à la fois : le sourire gêné du cabinet de curiosités et la blouse blanche du microbiologiste. L’une attire l’attention ; l’autre empêche de raconter n’importe quoi.`,
    chapitres: [
      chapter("Le laboratoire intime", `Le point techniquement intéressant est l’usage de lactobacilles comme agents d’acidification. Les bactéries lactiques transforment des sucres en acide lactique ; ce principe est banal dans de nombreuses fermentations alimentaires et brassicoles. Ce qui rend Bottled Instinct singulière n’est donc pas la fonction du micro-organisme, mais l’endroit revendiqué comme origine de l’isolat et la manière spectaculaire dont cette origine est racontée.`),
      chapter("Le scandale n’est pas dans la pipette", `Les communications autour de la gamme mentionnent une bière de blé ou une sour ale, des levures brassicoles et une culture lactique. Certaines fiches secondaires évoquent aussi des copeaux de chêne au cognac. En revanche, la souche précise, les proportions, le protocole de laboratoire et la chronologie complète du brassage ne sont pas publiés : la Brassopédie peut documenter le principe, pas fabriquer une fausse recette secrète.`)
    ],
    recette: makeRecipe({
      titre: "Anatomie documentée du brassin",
      explicationProfil: "Base de bière acide avec fermentation brassicole et intervention de bactéries lactiques mises en avant par le projet. Les détails industriels restent propriétaires ou non publiés.",
      malts: ["Malt d’orge documenté dans les descriptions du projet ; certaines versions de la gamme évoquent aussi une base de bière de blé."],
      hops: ["Houblons présents dans la base brassicole, sans variétés ni calendrier publiés pour Bottled Instinct."],
      yeast: ["Levure de bière classique pour la fermentation alcoolique.", "Lactobacilles cultivés à partir d’un prélèvement revendiqué comme vaginal pour la composante lactique."],
      extras: ["Copeaux de chêne au cognac mentionnés par certaines fiches secondaires ; à considérer comme information de version tant qu’une fiche producteur détaillée n’est pas disponible."],
      fermentation: "Fermentation alcoolique complétée par une composante lactique. Souche, inoculation, températures et séquençage exacts non publiés.",
      maturation: "Une influence de chêne/cognac est rapportée pour certaines descriptions ; durée et protocole non documentés.",
      target: "Une bière acide où la singularité vient de la provenance revendiquée de la culture lactique, sans transformer cette provenance en fantasme de liquide corporel versé dans le brassin."
    }),
    sources: [
      source("The Order of Yoni", "Présentation du concept Yoni Beer et des cultures de lactobacilles", "https://theorderofyoni.com/", "source_producteur"),
      source("BeerAdvocate", "Bottled Instinct — fiche de référence communautaire", "https://www.beeradvocate.com/beer/profile/50811/316321/", "source_secondaire"),
      source("Untappd", "The Order of Yoni — Bottled Instinct", "https://untappd.com/b/the-order-of-yoni-bottled-instinct/2107354", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-002",
    nom: "Rogue Beard Beer",
    nature: "Bière expérimentale",
    aliases: ["Beard Beer", "New Crustacean"],
    pays: "États-Unis",
    origine: "Rogue Ales, Oregon",
    color: textMetric("Blonde à ambrée claire / ale"),
    fermentation: "Haute / culture sauvage isolée",
    description: "L’ale qui a transformé la barbe du maître-brasseur John Maier en territoire microbiologique. Le poil n’est pas un ingrédient de texture : il a servi de lieu de prélèvement à une levure capable de fermenter la bière.",
    histoire: `Chez Rogue Ales, l’idée est née dans un contexte de recherche de levures locales. Des follicules de la barbe de John Maier, alors maître-brasseur emblématique de la maison, ont été envoyés en laboratoire. Une culture utilisable en fermentation a été isolée, donnant à la brasserie un terroir d’une précision géographique admirable : quelques centimètres sous le nez du brasseur.

Le projet a d’abord circulé sous le nom New Crustacean avant que Beard Beer ne devienne l’évidence marketing. L’histoire fonctionne parce qu’elle paraît sale alors que le procédé est précisément l’inverse : prélèvement, isolement, culture, propagation. La barbe est le lieu de découverte ; elle n’est pas jetée dans la chaudière comme une poignée de houblon velu.

Cette nuance fait de la bière un excellent cours de microbiologie sauvage déguisé en blague de barbier.`,
    chapitres: [
      chapter("Une barbe peut-elle avoir un terroir ?", `Oui, au sens microbiologique le plus littéral : peau, poils et environnement hébergent des communautés de micro-organismes. Trouver une levure fermentaire viable dans ce milieu n’implique pas que toutes les barbes brassent spontanément une pale ale, seulement qu’un isolat particulier a présenté des caractéristiques intéressantes et a pu être propagé proprement.`),
      chapter("Pas de moustache dans le moût", `Le détail à retenir est la chaîne laboratoire → culture → fermentation. Les sources secondaires décrivent une base d’ale Rogue et certaines fiches donnent des malts Munich, Crystal 15 et Pilsner avec du houblon Sterling. Les paramètres complets varient selon les publications ; la véritable signature de la bière reste sa levure dite « beard yeast ».`)
    ],
    recette: makeRecipe({
      titre: "Du follicule au fermenteur",
      explicationProfil: "Une ale de brasserie conventionnelle fermentée par une culture isolée depuis la barbe de John Maier.",
      malts: ["Malt Pilsner, Munich et Crystal 15 rapportés dans des fiches de produit secondaires."],
      hops: ["Sterling est cité dans plusieurs descriptions de la bière ; les doses exactes ne sont pas publiées."],
      yeast: ["Culture fermentaire isolée à partir de follicules de barbe de John Maier puis propagée en conditions de laboratoire."],
      extras: ["Aucun poil de barbe n’est documenté comme ingrédient ajouté au brassin final."],
      fermentation: "Fermentation haute avec la culture dite Beard Yeast ; températures et cinétique détaillées non publiées.",
      target: "Une ale nette et fermentée par une souche atypiquement sourcée, où l’histoire du micro-organisme compte davantage que le spectaculaire d’un faux ingrédient pileux."
    }),
    sources: [
      source("Rogue Ales", "Histoire de la brasserie et de John Maier", "https://www.rogue.com/about/", "source_producteur"),
      source("Appellation Beer", "Rogue finds brewing yeast in John Maier’s beard", "https://appellationbeer.com/blog/rogue-finds-brewing-yeast-in-john-maiers-beard/", "source_secondaire"),
      source("Eater", "Beer made from a man’s beard yeast", "https://www.eater.com/2015/9/28/9409427/beer-made-from-mans-beard-yeast-rogue-ales-no-shave-november", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-003",
    nom: "PU:REST",
    nature: "Bière expérimentale / démonstrateur environnemental",
    aliases: ["PU:REST recycled water beer"],
    pays: "Suède",
    origine: "Nya Carnegiebryggeriet / IVL Swedish Environmental Research Institute / Carlsberg Sweden",
    color: textMetric("Pilsner très claire"),
    fermentation: "Basse",
    description: "Une pilsner brassée avec de l’eau usée devenue eau de haute qualité après traitement avancé. Son ingrédient insolite n’a donc plus rien d’un égout au moment d’entrer en brasserie : tout le projet consiste justement à le démontrer.",
    histoire: `PU:REST a été lancée en Suède en 2018 par Nya Carnegiebryggeriet avec l’IVL Swedish Environmental Research Institute et Carlsberg Sweden. Le projet devait rendre tangible une question généralement enfermée dans des schémas d’ingénieurs : une eau usée correctement purifiée peut-elle redevenir une ressource alimentaire sûre ? Une bière a l’avantage de poser la question devant un verre, donc sans possibilité de l’esquiver derrière un PowerPoint.

La communication d’IVL insiste sur le contrôle de qualité de l’eau et sur une pilsner cristalline brassée avec malt et houblon biologiques. Le contraste psychologique est le véritable moteur de la bière : l’origine de l’eau provoque un « beurk », alors que son état après traitement n’a plus les caractéristiques que ce mot suggère.

PU:REST est ainsi autant une expérience de perception qu’un produit brassicole.`,
    chapitres: [
      chapter("L’égout qui n’en est plus un", `Parler de « bière aux eaux usées » sans expliquer le traitement revient à raconter qu’un pain est fait avec un champ boueux. Entre la ressource initiale et le produit alimentaire se trouvent des étapes de purification, des contrôles et des critères de potabilité. Le sujet scientifique de PU:REST est précisément cette transformation.`),
      chapter("Le yuck factor, cet ingrédient invisible", `La réutilisation de l’eau rencontre souvent une barrière psychologique plus forte que la barrière technique. En choisissant la bière, les partenaires ont transformé le dégoût intuitif en objet de discussion. Le goût attendu n’est donc pas « station d’épuration » : la réussite du projet suppose au contraire que l’eau purifiée se comporte comme une eau de brassage propre.`)
    ],
    recette: makeRecipe({
      titre: "Le brassin après la station de traitement",
      explicationProfil: "Pilsner de démonstration dont la spécificité documentée est l’emploi d’eau usée purifiée et contrôlée.",
      malts: ["Malt biologique annoncé par le projet ; variété et composition du grist non publiées."],
      hops: ["Houblons biologiques annoncés ; variétés et ajouts non publiés."],
      yeast: ["Levure de fermentation basse cohérente avec la pilsner annoncée ; souche non publiée."],
      extras: ["Aucun constituant d’eaux usées n’est recherché comme ingrédient : l’eau est purifiée avant usage alimentaire."],
      water: "Eau issue d’eaux usées puis purifiée et contrôlée par le dispositif du projet ; c’est le cœur expérimental de PU:REST.",
      fermentation: "Fermentation basse de pilsner ; paramètres détaillés non publiés.",
      target: "Une pilsner propre et banale au palais pour rendre extraordinaire une idée de circularité de l’eau."
    }),
    sources: [
      source("IVL Swedish Environmental Research Institute", "Sweden’s first beer brewed with recycled water", "https://www.ivl.se/english/ivl/press/press-releases/2018-05-24-swedens-first-beer-brewed-with-recycled-water.html", "source_institutionnelle"),
      source("Brewing4EU", "PU:REST — Sweden’s first beer brewed with purified wastewater", "https://brewing4.eu/sustainability-initiatives/purest-swedens-first-beer-brewed-with-purified-waste-water/", "source_professionnelle")
    ]
  }),

  makeCard({
    code: "C10-004",
    nom: "Pisner",
    nature: "Bière expérimentale / économie circulaire",
    aliases: ["Nørrebro Bryghus Pisner"],
    pays: "Danemark",
    origine: "Nørrebro Bryghus / Roskilde Festival",
    color: textMetric("Pilsner claire"),
    fermentation: "Basse",
    description: "La fameuse « bière au pipi » qui n’en contient pas : l’urine de festivaliers a servi d’engrais pour l’orge. Le liquide corporel s’arrête donc au champ ; ce qui entre en brasserie est une céréale cultivée dans une boucle de recyclage des nutriments.",
    histoire: `Pisner est née du programme de « beercycling » associé au Roskilde Festival. Des dizaines de milliers de litres d’urine humaine ont été collectés puis utilisés comme ressource fertilisante pour des cultures d’orge. Plus tard, cette orge a rejoint le cycle brassicole chez Nørrebro Bryghus.

Le nom fait volontairement tout ce qu’il peut pour que l’on imagine le pire. C’est efficace, mais faux si l’on conclut que l’urine a été versée dans la bière. Le procédé relève de l’agronomie : récupérer azote et nutriments au lieu de les perdre, faire pousser une céréale, maltage, puis brassage classique.

Pisner est donc une anomalie de chaîne d’approvisionnement, pas une recette de liquide corporel. Et cette correction est beaucoup plus intéressante que la blague initiale.`,
    chapitres: [
      chapter("Le champ a bu avant vous", `L’étape insolite se déroule en amont de la brasserie. L’urine est une ressource riche en nutriments, notamment en azote ; utilisée de manière encadrée comme fertilisant, elle participe à la croissance de l’orge. La plante n’entre pas ensuite dans la cuve avec un petit souvenir liquide du festival : elle est récoltée et transformée comme matière agricole.`),
      chapter("Une blague de toilettes devenue leçon d’agronomie", `Le dispositif a servi à rendre visible le recyclage des nutriments dans un événement accueillant un très grand public. Le gag du nom est presque un cheval de Troie pédagogique : on vient pour rire, puis on découvre qu’une partie de l’économie circulaire consiste précisément à arrêter de considérer certains flux comme des déchets définitifs.`)
    ],
    recette: makeRecipe({
      titre: "La recette commence dans le champ",
      explicationProfil: "Pilsner dont l’originalité documentée réside dans l’origine agronomique de l’orge, et non dans un ajout d’urine au brassage.",
      malts: ["Malt produit à partir d’orge cultivée sur des champs fertilisés avec l’urine collectée au Roskilde Festival."],
      hops: ["Houblons non documentés avec suffisamment de précision."],
      yeast: ["Levure de fermentation basse attendue pour une pilsner ; souche non publiée."],
      extras: ["Urine humaine : utilisée comme ressource fertilisante au champ, pas comme ingrédient du moût ou de la bière finie."],
      water: "Eau de brassage non documentée ; elle n’est pas le vecteur de l’expérience de recyclage.",
      fermentation: "Brassage et fermentation de pilsner conventionnels selon les informations publiques ; paramètres non détaillés.",
      target: "Une pilsner racontant une boucle de nutriments agricole sans perpétuer le faux raccourci de la bière brassée à l’urine."
    }),
    sources: [
      source("Pitchfork", "Danish brewery makes Pisner beer using music festival urine", "https://pitchfork.com/news/73397-danish-brewery-makes-pisner-beer-using-music-festival-urine/", "source_presse"),
      source("Beer Street Journal", "Nørrebro Bryghus Pisner", "https://beerstreetjournal.com/norrebro-bryghus-pisner/", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-005",
    nom: "Hvalur 2",
    nature: "Bière expérimentale / saisonnière",
    aliases: ["Hvalur 2 Þorraöl"],
    pays: "Islande",
    origine: "Steðji Brewery",
    alcohol: exactMetric(5.4, "%"),
    color: textMetric("Ambrée fumée"),
    fermentation: "Non documentée",
    description: "Une bière islandaise de Þorri construite autour de testicules de baleine fumés à la bouse de mouton séchée. Le résumé semble écrit par une saga qui aurait raté la sortie vers la cuisine moderne, mais le produit et son ingrédient ont bien été commercialisés.",
    histoire: `Hvalur 2 est associée à Steðji Brewery et aux célébrations hivernales de Þorri, période durant laquelle des aliments islandais traditionnels très marqués reviennent sur les tables. La brasserie a choisi de pousser cette logique au maximum avec un ingrédient de baleine et une méthode de fumage faisant intervenir de la bouse de mouton séchée comme combustible.

L’histoire est inséparable de la controverse liée à l’exploitation de la baleine. Une Brassopédie sérieuse ne peut donc pas réduire la bière à « haha, des testicules » : elle doit aussi rappeler que l’ingrédient animal se situe dans un contexte culturel, réglementaire et éthique débattu.

Le bizarre, ici, est un paysage complet : mer nord-atlantique, manque historique de bois, fumage, hiver et provocation commerciale.`,
    chapitres: [
      chapter("La fumée vient du combustible, pas d’une poignée de fumier", `La bouse de mouton séchée est décrite comme combustible de fumage. Elle produit la fumée qui traite l’ingrédient animal ; elle n’est pas documentée comme matière jetée dans le moût. La nuance est moins spectaculaire mais beaucoup plus fidèle à la logique des techniques de fumage islandaises.`),
      chapter("Une curiosité qui porte une controverse", `L’usage de produits de baleine a suscité des réactions bien au-delà du monde brassicole. Hvalur 2 est donc un cas où l’insolite ne peut pas être séparé du débat sur la chasse à la baleine. La bière devient un objet culturel autant qu’un objet de dégustation, et le lecteur gagne davantage à comprendre ce contexte qu’à inventer des notes de goût anatomiques.`)
    ],
    recette: makeRecipe({
      titre: "Ce que l’Islande a réellement mis dans l’histoire",
      explicationProfil: "Bière saisonnière fumée à 5,4 % dont l’ingrédient emblématique est un produit de baleine fumé selon une méthode traditionnelle revendiquée.",
      malts: ["Composition maltée non publiée dans les sources retenues."],
      hops: ["Houblons et amertume non documentés avec précision."],
      yeast: ["Levure et famille de fermentation non publiées de façon suffisamment fiable."],
      extras: ["Testicules de baleine fumés, ingrédient annoncé par la brasserie.", "Bouse de mouton séchée utilisée comme combustible de fumage, pas comme ingrédient direct de la bière."],
      fermentation: "Procédé de fermentation non documenté avec assez de précision pour être reproduit.",
      target: "Documenter une bière de Þorri réellement produite sans transformer le folklore, l’anatomie ou la fumée en détails inventés."
    }),
    sources: [
      source("Iceland Monitor", "Whale testicle beer anyone?", "https://icelandmonitor.mbl.is/news/culture_and_living/2015/01/12/whale_testicle_beer_anyone/", "source_presse"),
      source("Barnivore", "Steðji Brewery Hvalur 2 Þorraöl — vérification produit", "https://www.barnivore.com/products/61118-steji-brewery-hvalur-2-orral-54-contains-sheep-shit-smoked-whale-testicles", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-006",
    nom: "Rocky Mountain Oyster Stout",
    nature: "Bière expérimentale",
    aliases: [],
    pays: "États-Unis",
    origine: "Wynkoop Brewing Company, Colorado",
    alcohol: textMetric("7,5 % · lancement documenté"),
    color: textMetric("Noire / stout"),
    fermentation: "Haute",
    description: "Un stout du Colorado brassé avec environ 25 livres de testicules de taureau rôtis. Tout a commencé comme un poisson d’avril ; le problème, ou le génie, est que Wynkoop a fini par réellement brasser la blague.",
    histoire: `L’expression américaine « Rocky Mountain oysters » ne désigne pas des huîtres mais des testicules de taureau préparés comme spécialité culinaire. Wynkoop Brewing Company s’en est servi pour un canular de poisson d’avril. La réaction du public a été suffisamment forte pour que la brasserie commette l’acte irréversible : produire le stout pour de vrai.

Les descriptions de lancement parlent d’environ 25 livres de testicules tranchés et rôtis, associés à une base de stout comprenant malts du Colorado, orge torréfiée, plusieurs malts spéciaux et du Styrian Goldings. La bière est donc plus documentée que beaucoup de curiosités de la collection.

Certaines fiches ultérieures donnent des valeurs d’alcool différentes ; la Brassopédie rattache le 7,5 % à l’édition de lancement documentée plutôt que d’en faire une constante éternelle.`,
    chapitres: [
      chapter("Quand le poisson d’avril demande un fermenteur", `La genèse est presque plus importante que l’ingrédient. Beaucoup de brasseries publient des blagues ; Wynkoop a transformé la sienne en produit. Ce passage du faux au vrai résume l’esprit d’une partie de la scène craft américaine : si le public répond « vous n’oseriez pas », quelqu’un finit toujours par chercher une marmite assez grande.`),
      chapter("L’huître des montagnes n’a jamais vu la mer", `Le nom culinaire joue depuis longtemps sur l’euphémisme. Dans la bière, l’ingrédient est rôti avant emploi, ce qui l’inscrit davantage dans une logique de cuisine et de torréfaction que dans une recherche de sensation crue. Les sources n’autorisent pourtant pas à inventer un profil « carné » précis : l’existence de l’ingrédient est certaine, son impact sensoriel exact dépend du brassin.`)
    ],
    recette: makeRecipe({
      titre: "Du rodéo au mash tun",
      explicationProfil: "Stout expérimental dont la recette de lancement est partiellement documentée.",
      malts: ["Malts du Colorado.", "Orge torréfiée.", "Ensemble de malts spéciaux rapporté par Wynkoop ; proportions non publiées."],
      hops: ["Styrian Goldings documenté sur la version de lancement."],
      yeast: ["Levure de fermentation haute ; souche non publiée dans les sources retenues."],
      extras: ["Environ 25 livres de testicules de taureau tranchés puis rôtis pour le brassin documenté."],
      boil: "Le calendrier précis des ajouts n’est pas publié ; l’ingrédient animal est décrit comme rôti avant intégration au brassage.",
      fermentation: "Fermentation haute de stout ; paramètres détaillés non publiés.",
      target: "Un stout torréfié devenu réel après une blague, sans extrapoler un goût anatomique que les sources ne mesurent pas."
    }),
    sources: [
      source("CraftBeer.com", "Wynkoop Brewing releases Rocky Mountain Oyster Stout", "https://www.craftbeer.com/news/wynkoop-brewing-releases-cans-of-rocky-mountain-oyster-stout", "source_professionnelle"),
      source("Guys Drinking Beer", "Wynkoop Rocky Mountain Oyster Stout review", "https://www.guysdrinkingbeer.com/wynkoop-rocky-mountain-oyster-stout-review/", "source_secondaire"),
      source("BeerAdvocate", "Rocky Mountain Oyster Stout — versions et données de produit", "https://www.beeradvocate.com/beer/profile/111/83843/", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-007",
    nom: "Chicha",
    nature: "Bière ancienne réinterprétée / bière expérimentale",
    aliases: ["Dogfish Head Chicha"],
    pays: ["États-Unis", "Inspiration andine"],
    origine: "Dogfish Head — série Ancient Ales",
    alcohol: exactMetric(3.1, "%"),
    color: textMetric("Trouble / maïs violet selon le brassin documenté"),
    fermentation: "Haute / méthode inspirée de chichas andines",
    description: "La version Dogfish Head d’une chicha andine remet au centre un geste ancestral : mâcher une partie du maïs afin que les enzymes salivaires commencent à transformer l’amidon. C’est une pratique culturelle réelle, pas un concours de grimaces de brasserie.",
    histoire: `Dogfish Head a brassé Chicha à partir de 2009 dans sa série Ancient Ales, consacrée aux boissons inspirées de pratiques historiques et traditionnelles. Pour ce brassin, plus d’une centaine de collaborateurs ont participé à la mastication de maïs violet péruvien. L’image est spectaculaire ; la biochimie l’est aussi : l’amylase salivaire commence à découper l’amidon en molécules plus accessibles à la fermentation.

La brasserie documente également du maïs malté, de l’orge maltée, des fraises et un assemblage de levures. Le moût est ensuite bouilli, ce qui est un détail sanitaire essentiel et une bonne antidote aux caricatures de « bière à la salive ».

Présenter cette bière exige du respect : le procédé s’inspire de traditions andines bien antérieures à la mode craft américaine. L’étrangeté est celle de notre regard moderne, pas celle d’une pratique qui possédait sa propre logique technique et sociale.`,
    chapitres: [
      chapter("La bouche comme outil enzymatique", `Avant l’industrie des enzymes et la maîtrise moderne du maltage, les sociétés humaines ont développé plusieurs moyens pour rendre l’amidon fermentescible. La mastication est l’un d’eux : l’amylase de la salive commence l’hydrolyse de l’amidon. Le geste peut heurter nos habitudes hygiéniques contemporaines, mais son principe biochimique est parfaitement intelligible.`),
      chapter("Dogfish ne sert pas un crachat cru", `Le maïs mâché participe à la préparation, puis le moût est bouilli. La chaleur transforme le procédé en brassage contrôlé et détruit les micro-organismes sensibles présents avant l’ébullition. La fermentation finale repose sur un assemblage de levures documenté par la brasserie, pas sur l’idée folklorique que la salive ferait toute la bière à elle seule.`)
    ],
    recette: makeRecipe({
      titre: "La chicha Dogfish, sans caricature",
      explicationProfil: "Interprétation moderne documentée d’une chicha de maïs, brassée à 3,1 % ABV dans la série Ancient Ales.",
      malts: ["Maïs violet péruvien dont une partie est mâchée.", "Maïs malté.", "Orge maltée."],
      hops: ["Houblonnage non mis en avant dans la documentation publique ; ne pas lui attribuer une signature houblonnée moderne."],
      yeast: ["Assemblage de levures utilisé par Dogfish Head ; composition précise non publiée."],
      extras: ["Fraises documentées dans la version Dogfish Head.", "Salive humaine comme source d’amylase lors de la mastication du maïs, suivie d’une ébullition du moût."],
      mash: "La mastication d’une partie du maïs amorce la conversion enzymatique ; le reste du schéma d’empâtage n’est pas publié au niveau d’une recette reproductible.",
      boil: "Le moût est bouilli après la préparation du maïs, étape essentielle du procédé documenté.",
      fermentation: "Fermentation avec un assemblage de levures après ébullition ; paramètres détaillés non publiés.",
      target: "Une réinterprétation respectueuse d’un procédé andin, où l’on comprend pourquoi le geste existe au lieu de le réduire à son potentiel de grimace."
    }),
    sources: [
      source("Dogfish Head Alehouse", "Chicha — Ancient Ale", "https://dogfishalehouse.com/beers/chicha/", "source_producteur"),
      source("Dogfish Head", "Chicha", "https://www.dogfish.com/drink/beer/chicha", "source_producteur")
    ]
  })
];
