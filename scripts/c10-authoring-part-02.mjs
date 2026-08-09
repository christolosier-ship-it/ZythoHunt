import { makeCard, makeRecipe, chapter, source, exactMetric, textMetric } from "./c10-authoring-common.mjs";

export default [
  makeCard({
    code: "C10-008",
    nom: "The End of History",
    nature: "Bière extrême / objet de collection",
    aliases: ["BrewDog The End of History"],
    pays: "Écosse",
    origine: "BrewDog",
    alcohol: exactMetric(55, "%"),
    color: textMetric("Blonde belge très concentrée"),
    fermentation: "Haute puis concentration par congélation",
    description: "Une Belgian-style blonde poussée à 55 % ABV par concentration à froid, aromatisée notamment avec orties et baies de genévrier, puis commercialisée dans des taxidermies. À ce niveau, la bouteille a quitté le rayon bière pour entrer dans une performance d’art punk avec bouchon.",
    histoire: `The End of History apparaît en 2010 dans la période où BrewDog participe à une véritable course aux records d’alcool. La brasserie part d’une blonde belge forte, la concentre par congélation et atteint 55 % ABV. Le chiffre aurait déjà suffi à la rendre célèbre ; BrewDog ajoute une présentation devenue iconique : chaque bouteille est installée dans un petit animal taxidermisé.

Les communications de la brasserie évoquent des écureuils et des hermines/stoats issus de taxidermie, ainsi que des ingrédients plus discrets mais réellement brassicoles : orties des Highlands et baies de genévrier. La recette publiée ultérieurement par BrewDog précise aussi malt Extra Pale, plusieurs houblons et une levure belge.

Le résultat est une bière où trois histoires se superposent : technique de concentration, provocation visuelle et critique ironique du luxe. Le liquide est extrême ; le contenant s’est assuré qu’on parlerait de lui même sans l’ouvrir.`,
    chapitres: [
      chapter("Un écureuil n’est pas un ingrédient", `La taxidermie appartient au conditionnement de l’édition, pas au brassage. Cette distinction paraît évidente, mais l’image a tellement dominé la couverture médiatique qu’elle finit parfois par avaler la bière elle-même. Dans la cuve, on trouve une blonde belge, du malt, des houblons, une levure, des plantes et surtout un travail de concentration par le froid.`),
      chapter("Quand l’eisbock devient une machine à records", `La concentration par congélation exploite la différence de comportement entre eau et alcool à basse température : une fraction aqueuse gèle plus facilement et peut être séparée, augmentant la concentration du liquide restant. Répétée, l’opération sort très vite des proportions d’une bière de table. À 55 %, on est dans un produit de dégustation minuscule, pas dans une pinte de soif.`)
    ],
    recette: makeRecipe({
      titre: "Sous la fourrure, une recette documentée",
      explicationProfil: "BrewDog a publié une recette rétrospective permettant d’identifier l’architecture de la bière, même si l’échelle industrielle et les détails de concentration ne se résument pas à un clone domestique.",
      malts: ["Malt Extra Pale comme base documentée."],
      hops: ["Nelson Sauvin.", "Centennial.", "Amarillo."],
      yeast: ["Wyeast 3522 Belgian Ardennes dans la recette publiée par BrewDog."],
      extras: ["Orties fraîches des Highlands.", "Baies de genévrier.", "Taxidermie : uniquement présentation du contenant, jamais ingrédient."],
      mash: "La recette BrewDog publiée indique un empâtage autour de 65 °C pendant 75 minutes.",
      boil: "Houblonnage selon la recette BrewDog ; la chronologie exacte doit être consultée dans la fiche originale pour toute reproduction.",
      fermentation: "Fermentation haute de base belge, suivie d’un processus distinct de concentration à froid.",
      maturation: "Concentration répétée par congélation à très basse température ; le procédé exact de l’édition commerciale n’est pas entièrement public.",
      target: "Une bière extrêmement concentrée où l’on sépare clairement la technique du liquide et la performance taxidermique du conditionnement."
    }),
    sources: [
      source("BrewDog", "The End of History — article d’archive", "https://www.brewdog.com/blog/the-end-of-history", "source_producteur"),
      source("BrewDog", "DIY Dog — recette The End of History", "https://brewdogrecipes.com/recipes/the-end-of-history", "source_producteur"),
      source("Paste Magazine", "BrewDog plans to bottle a 55% beer in taxidermy", "https://www.pastemagazine.com/drink/brewdog-plans-to-bottle-a-55-beer-in-a-taxidermy-s", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-009",
    nom: "Mamma Mia! Pizza Beer",
    nature: "Bière aromatisée / curiosité culinaire",
    aliases: ["Pizza Beer"],
    pays: "États-Unis",
    origine: "Pizza Beer Company, Illinois",
    alcohol: exactMetric(4.6, "%"),
    color: textMetric("Ambrée claire selon les descriptions disponibles"),
    fermentation: "Non documentée avec précision",
    description: "La bière qui a demandé à la pizza Margherita de quitter son assiette pour participer au brassage : tomate, ail, basilic, origan et pâte de blé ont été décrits dans l’ancienne recette du producteur. Une pizzeria familiale transformée en annexe du mash tun.",
    histoire: `Mamma Mia! Pizza Beer est née dans l’Illinois chez Tom et Athena Seefurth, autour d’une idée aussi simple qu’indéfendable face à un puriste : faire entrer les saveurs d’une pizza dans une bière. Le produit a acquis une célébrité Internet durable avant de disparaître du marché, ce qui a laissé derrière lui plus de récits que de bouteilles fraîches.

L’ancienne description du producteur, reproduite par BeerAdvocate, est plus précise que la simple légende : une pizza Margherita composée notamment de croûte de blé, tomate, origan, basilic et ail était immergée dans le mash comme un grand sachet d’infusion, puis retirée. Le liquide filtré poursuivait son chemin vers la cuve d’ébullition avec houblons et épices.

La prudence reste nécessaire : cette documentation est archivistique et secondaire aujourd’hui, mais elle est suffisamment détaillée pour distinguer la vraie méthode rapportée de l’image simpliste d’une part de pizza flottant éternellement dans une bouteille.`,
    chapitres: [
      chapter("La Margherita en sachet de thé", `Le procédé rapporté est presque culinaire : la pizza n’est pas destinée à survivre intacte au brassage. Elle sert de matrice d’extraction dans le mash, puis elle est retirée. Tomate, ail et herbes deviennent ainsi des composés aromatiques du moût plutôt qu’une garniture finale avec mozzarella filante sur la mousse.`),
      chapter("Une bière disparue, une recette qui survit", `Mamma Mia! n’est plus un produit courant. Sa place dans la collection vient aussi de cette condition de curiosité perdue : elle existe désormais surtout par des archives, des fiches de dégustation et les souvenirs d’une époque où la scène craft découvrait qu’Internet récompensait très efficacement les idées impossibles à expliquer en une phrase sobre.`)
    ],
    recette: makeRecipe({
      titre: "Le four à pizza rencontre la cuve",
      explicationProfil: "La méthode historique du producteur est connue par des archives reprises dans des fiches secondaires ; les dosages et paramètres complets ne sont pas disponibles.",
      malts: ["Base de malt non documentée avec précision.", "Croûte de pizza de blé intégrée à la préparation Margherita selon l’ancienne description du producteur."],
      hops: ["Houblons ajoutés après la phase d’extraction de la pizza ; variétés et doses non publiées de façon fiable."],
      yeast: ["Levure et schéma de fermentation non documentés avec précision."],
      extras: ["Tomate.", "Ail.", "Basilic.", "Origan.", "Pizza Margherita utilisée comme support d’extraction selon l’ancienne description du producteur."],
      mash: "La pizza est décrite comme immergée dans le mash à la manière d’un sachet d’infusion puis retirée avant la suite du brassage.",
      boil: "Le liquide issu de cette extraction rejoint la cuve d’ébullition avec houblons et épices ; calendrier exact inconnu.",
      target: "Une bière réellement inspirée de la pizza, documentée sans transformer chaque légende de blog en ingrédient certain."
    }),
    sources: [
      source("BeerAdvocate", "Mamma Mia! Pizza Beer — fiche et ancienne description du producteur", "https://www.beeradvocate.com/beer/profile/16836/41127/", "source_archive_secondaire"),
      source("Punch", "The rise and fall of Mamma Mia Pizza Beer", "https://punchdrink.com/articles/rise-and-fall-mamma-mia-pizza-beer-chicago/", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-010",
    nom: "Saison dell'Aragosta",
    nature: "Bière expérimentale / farmhouse ale",
    aliases: ["Lobster Beer"],
    pays: "États-Unis",
    origine: "Oxbow Brewing Company, Maine / collaboration Birrificio del Ducato",
    alcohol: exactMetric(4.5, "%"),
    color: textMetric("Blonde / farmhouse ale"),
    fermentation: "Mixte / farmhouse ale",
    description: "Une farmhouse ale du Maine brassée avec des homards vivants et du sel marin. L’accord bière-fruits de mer a cessé d’être un accord : le crustacé a obtenu un badge d’accès à la brasserie.",
    histoire: `Saison dell’Aragosta naît chez Oxbow dans le Maine en collaboration avec Birrificio del Ducato. La brasserie la décrit aujourd’hui comme une farmhouse ale vieillie en cuve inox, brassée avec du homard du Maine et du sel marin. L’identité côtière n’est donc pas un simple dessin de phare sur l’étiquette : elle entre effectivement dans le processus.

La bière se situe autour de 4,5 % ABV et Oxbow la classe dans son univers de fermentations mixtes. L’idée du homard vivant attire évidemment toute la lumière, mais le sel marin est tout aussi important pour comprendre la cohérence gastronomique du projet : saline, littorale et sèche plutôt que caricaturalement « goût de crustacé ».

C’est une curiosité qui ressemble moins à un défi que certaines cartes voisines : dans un port du Maine, le homard est extravagant dans la cuve mais parfaitement logique dans le paysage.`,
    chapitres: [
      chapter("Le homard n’est pas une mascotte", `Oxbow présente explicitement le homard comme ingrédient de brassage. Il ne faut donc ni minimiser l’information en simple accord culinaire, ni inventer son impact sensoriel exact. La chair, les minéraux et le contexte marin peuvent participer à l’équilibre, mais la documentation publique ne transforme pas la bière en bisque pétillante.`),
      chapter("Farmhouse ale, mais avec marée haute", `Le mot « saison » du nom est souvent utilisé pour la décrire, mais la fiche actuelle d’Oxbow parle plus largement de farmhouse ale à fermentation mixte. Cette précision est utile : la singularité de la bière n’annule pas son architecture brassicole, elle la déplace vers une lecture de terroir côtier très littérale.`)
    ],
    recette: makeRecipe({
      titre: "Le brassin qui a pris le large",
      explicationProfil: "Farmhouse ale à fermentation mixte, 4,5 % ABV, documentée par Oxbow avec homard du Maine et sel marin.",
      malts: ["Céréales de base non détaillées dans la fiche publique actuelle."],
      hops: ["Houblons et amertume non détaillés par Oxbow dans la fiche publique retenue."],
      yeast: ["Fermentation mixte annoncée par Oxbow ; composition microbienne non publiée."],
      extras: ["Homard vivant du Maine utilisé pendant le brassage.", "Sel marin."],
      water: "Eau de brassage non documentée ; la dimension saline est apportée au moins en partie par le sel marin ajouté.",
      fermentation: "Fermentation mixte de farmhouse ale ; paramètres détaillés non publiés.",
      maturation: "Vieillissement en acier inoxydable annoncé par Oxbow.",
      target: "Une bière sèche et littorale dont la bizarrerie est réellement culinaire sans être transformée en soupe de homard gazeuse."
    }),
    sources: [
      source("Oxbow Brewing Company", "Saison dell’Aragosta", "https://oxbowbeer.com/beer/saison-dellaragosta/", "source_producteur"),
      source("Atlas Obscura", "Lobster Beer", "https://www.atlasobscura.com/foods/lobster-beer", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-011",
    nom: "Beer Geek Brunch Weasel",
    nature: "Imperial stout expérimental",
    aliases: [],
    pays: "Danemark",
    origine: "Mikkeller",
    alcohol: exactMetric(10.9, "%"),
    bitterness: exactMetric(65, "IBU"),
    color: textMetric("Noire / imperial oatmeal stout"),
    fermentation: "Haute",
    description: "Un imperial oatmeal stout au cà phê Chồn vietnamien, café produit à partir de grains passés par le système digestif de civettes. Le brunch devient une dissertation sur le luxe, la fermentation et la trajectoire très personnelle d’un grain de café.",
    histoire: `Beer Geek Brunch Weasel appartient à la famille de stouts massifs qui ont rendu Mikkeller célèbre. Sa singularité vient du cà phê Chồn, café vietnamien associé au passage des grains dans le système digestif de civettes avant collecte, nettoyage, torréfaction et infusion. La bière affiche 10,9 % ABV ; les fiches de référence la placent autour de 65 IBU.

Le procédé du café de civette est souvent vendu sous le vocabulaire du rare et du précieux, mais il soulève aussi des questions éthiques lorsque les animaux sont maintenus en captivité pour produire davantage. Mikkeller a communiqué sur la recherche d’un approvisionnement plus responsable, rappelant qu’un ingrédient spectaculaire possède parfois une histoire moins photogénique que son prix au kilo.

Dans le verre, le café est un ingrédient brassicole ; la civette, elle, reste en amont de la chaîne.`,
    chapitres: [
      chapter("Le café a déjà fait un voyage", `Le grain n’est évidemment pas ajouté à la bière directement à la sortie de l’animal. Les grains sont récupérés, nettoyés, transformés puis torréfiés avant d’être employés comme café. Ce détour biologique est ce qui fonde la réputation du cà phê Chồn et donne à la bière son statut de curiosité.`),
      chapter("Le luxe qui oblige à regarder la filière", `Comme pour le kopi luwak, la demande pour les cafés digérés peut encourager des systèmes d’élevage discutables. Une fiche encyclopédique gagne donc à dépasser l’effet « beurk chic » : le caractère insolite d’un ingrédient n’efface ni sa chaîne d’approvisionnement ni les questions de bien-être animal.`)
    ],
    recette: makeRecipe({
      titre: "Un brunch noir à 10,9 %",
      explicationProfil: "Imperial/oatmeal stout au café vietnamien cà phê Chồn. La base précise reste partiellement propriétaire.",
      malts: ["Base d’imperial oatmeal stout : présence d’avoine documentée par la désignation de la bière ; composition complète des malts non publiée dans les sources retenues."],
      hops: ["Amertume annoncée autour de 65 IBU ; variétés de houblons non établies ici."],
      yeast: ["Levure ale de stout ; souche et conduite détaillée non publiées."],
      extras: ["Café vietnamien cà phê Chồn issu de grains passés par des civettes puis nettoyés et torréfiés."],
      fermentation: "Fermentation haute d’un stout fort ; paramètres non publiés.",
      target: "Un imperial stout dense au café dont la curiosité vient de la filière du grain, sans transformer l’animal en ingrédient direct."
    }),
    sources: [
      source("Mikkeller", "Beer Geek Brunch Weasel — histoire du café", "https://www.mikkeller.com/news/20130919beer-geek-brunch-weasel", "source_producteur"),
      source("Beer Galaxy", "Mikkeller Beer Geek Brunch Weasel", "https://beer-galaxy.com/beers/mikkeller-beer-geek-brunch-weasel/", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-012",
    nom: "Voodoo Doughnut Bacon Maple Ale",
    nature: "Ale aromatisée / bière-dessert",
    aliases: ["Rogue Voodoo Doughnut Bacon Maple Ale"],
    pays: "États-Unis",
    origine: "Rogue Ales / Voodoo Doughnut",
    alcohol: exactMetric(5.6, "%"),
    bitterness: exactMetric(30, "IBU"),
    color: textMetric("Ambrée fumée"),
    fermentation: "Haute",
    description: "Le donut bacon-érable de Voodoo Doughnut transposé en bière : plusieurs malts fumés, vrai bacon fumé au pommier et érable. Un petit-déjeuner de diner américain a trouvé un fermenteur et personne ne l’a arrêté à temps.",
    histoire: `Rogue Ales a collaboré avec Voodoo Doughnut pour transformer plusieurs pâtisseries emblématiques de Portland en bières. Bacon Maple Ale est la plus immédiatement lisible : un donut sucré-salé devient le cahier des charges d’une ale à 5,6 % et 30 IBU.

Les fiches détaillées de la bière sont étonnamment bavardes. Elles citent plusieurs malts fumés — merisier, hêtre et fumage maison au hickory — aux côtés de malts plus conventionnels, du bacon fumé au bois de pommier, un arôme d’érable, des houblons Rogue et la levure Pacman de la brasserie.

Le résultat conceptuel n’est donc pas un simple sirop ajouté à une amber ale : le fumé est construit à plusieurs étages, comme un diner qui aurait embauché un malteur.`,
    chapitres: [
      chapter("Trois fumées avant le bacon", `La recette documentée empile des malts fumés au merisier, au hêtre et au hickory. Le bacon n’arrive qu’ensuite. Cette architecture explique pourquoi la bière est plus intéressante techniquement que la caricature « bière au donut » : le brasseur reconstruit les marqueurs du petit-déjeuner par couches de matière première.`),
      chapter("Sucré-salé, mais brassé", `L’érable apporte l’imaginaire pâtissier tandis que le bacon et les malts fumés portent le versant salé/fumé. À 30 IBU, le houblon n’est pas absent, mais il joue davantage le rôle de contrepoids que de vedette. C’est une bière de concept très américaine, où la recette assume le mauvais goût visuel tout en restant pensée comme un équilibre.`)
    ],
    recette: makeRecipe({
      titre: "Le donut démonté ingrédient par ingrédient",
      explicationProfil: "Rogue a publié une composition suffisamment détaillée pour comprendre la construction de la bière sans prétendre connaître tous les dosages.",
      malts: ["Briess Cherrywood Smoked Malt.", "Weyermann Beechwood Smoked Malt.", "Malt fumé au hickory par Rogue.", "Great Western 2-Row.", "Munich.", "Crystal 15.", "Crystal 75."],
      hops: ["Houblons Rogue Farms annoncés ; variétés/doses selon la fiche commerciale, pour environ 30 IBU."],
      yeast: ["Rogue Pacman Yeast."],
      extras: ["Bacon fumé au bois de pommier.", "Arôme d’érable pur selon la description de produit."],
      fermentation: "Fermentation haute avec Pacman ; températures détaillées non retenues comme recette publique reproductible.",
      target: "Reconstituer le donut bacon-érable en langage malt, fumée, sel et sucre plutôt qu’en versant simplement un petit-déjeuner dans une pinte."
    }),
    sources: [
      source("BeerAdvocate", "Voodoo Doughnut Bacon Maple Ale — composition et données", "https://www.beeradvocate.com/beer/profile/132/72720/", "source_secondaire"),
      source("CraftShack", "Rogue Voodoo Doughnut Bacon Maple Ale — fiche produit", "https://craftshack.com/products/rogue-voodoo-doughnut-bacon-maple-ale", "source_commerciale")
    ]
  }),

  makeCard({
    code: "C10-013",
    nom: "Cave Creek Chili Beer",
    nature: "Lager aromatisée / curiosité de conditionnement",
    aliases: ["Crazy Ed's Cave Creek Chili Beer"],
    pays: ["États-Unis", "Mexique"],
    origine: "Crazy Ed's / Cave Creek",
    alcohol: exactMetric(4.7, "%"),
    color: textMetric("Lager claire"),
    fermentation: "Basse",
    description: "Une lager claire rendue immédiatement suspecte par un piment serrano entier visible dans la bouteille. Aucun laboratoire secret : le piège est vert, long, et vous regarde avant même l’ouverture.",
    histoire: `Cave Creek Chili Beer s’est taillé une réputation durable grâce à un dispositif d’une simplicité marketing presque parfaite : placer un piment serrano entier dans chaque bouteille. Là où d’autres bières insolites ont besoin de trois paragraphes de microbiologie, celle-ci tient dans une silhouette verte derrière le verre.

La base est décrite comme une lager claire d’inspiration mexicaine autour de 4,7 % ABV. Les détails de malt, de houblon et de levure sont beaucoup moins documentés que le piment, ce qui dit quelque chose de la hiérarchie du projet : le consommateur achète d’abord l’expérience du serrano.

Cette transparence visuelle est aussi son intérêt encyclopédique. Le bizarre n’est pas caché dans une souche ou un procédé ; il flotte littéralement dans le contenant.`,
    chapitres: [
      chapter("Le piment comme avertissement intégré", `L’ajout d’un piment entier dans la bouteille prolonge le contact avec la bière après le brassage. Capsaïcine, arômes végétaux et perception de chaleur peuvent donc évoluer avec le temps et le lot. Sans protocole producteur détaillé, il serait hasardeux de promettre une intensité précise : le piment est visible, son effet exact reste une expérience.`),
      chapter("Une recette presque cachée derrière un objet", `La célébrité de Cave Creek repose davantage sur le conditionnement que sur une architecture de lager documentée. C’est justement une leçon utile : une bière peut devenir iconique par un geste de service ou de packaging, sans inventer une nouvelle famille de fermentation.`)
    ],
    recette: makeRecipe({
      titre: "Une lager, puis un serrano entier",
      explicationProfil: "Lager claire à 4,7 % dont la spécificité la mieux documentée est le piment entier placé dans le contenant.",
      malts: ["Base de lager claire ; céréales et proportions non publiées avec précision."],
      hops: ["Houblonnage non documenté avec précision."],
      yeast: ["Fermentation basse cohérente avec la lager annoncée ; souche non publiée."],
      extras: ["Un piment serrano entier dans chaque bouteille selon les descriptions historiques du produit."],
      fermentation: "Fermentation basse de la lager avant conditionnement avec le piment ; paramètres non publiés.",
      maturation: "Le contact avec le serrano se poursuit dans le contenant ; durée de garde recommandée non documentée.",
      target: "Une lager simple dont l’expérience est volontairement dominée par un piment entier, sans inventer le reste de la recette."
    }),
    sources: [
      source("Phoenix New Times", "Brew Review: Cave Creek’s Chili Beer", "https://www.phoenixnewtimes.com/food-drink/brew-review-cave-creeks-chili-beer-6522123/", "source_presse"),
      source("Untappd", "Crazy Ed’s Cave Creek Chili Beer", "https://untappd.com/b/black-mountain-brewing-company-crazy-ed-s-cave-creek-chili-beer/2095562", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-014",
    nom: "Un, Kono Kuro",
    nature: "Stout au café expérimental",
    aliases: ["うん、この黒", "Un Kono Kuro"],
    pays: "Japon",
    origine: "Sankt Gallen Brewery",
    alcohol: exactMetric(6.5, "%"),
    bitterness: exactMetric(28, "IBU"),
    color: textMetric("Noire / stout"),
    fermentation: "Haute",
    description: "Une stout japonaise au Black Ivory Coffee, café dont les grains ont traversé le système digestif d’éléphants. La brasserie a transformé un poisson d’avril en vrai produit limité, avec une recette beaucoup plus sérieuse que son nom malicieusement scatologique.",
    histoire: `Sankt Gallen a lancé Un, Kono Kuro en 2013 autour du Black Ivory Coffee, café de luxe produit en Thaïlande à partir de grains consommés puis excrétés par des éléphants. La bière a été annoncée un 1er avril, mais elle existait réellement — un détail qui résume assez bien l’esprit de cette collection.

La documentation de la brasserie est précise : 6,5 % ABV, 28 IBU, plusieurs malts allant du Pale Ale au Roasted Barley, Chinook et Cascade, puis ajout de café Black Ivory moulu pendant la maturation dans une logique d’extraction à froid.

Au Japon, l’ajout de café peut également faire basculer la classification légale du produit hors de la catégorie stricte de « beer » selon sa formulation. L’anomalie est donc à la fois digestive, brassicole et réglementaire.`,
    chapitres: [
      chapter("L’éléphant est en amont, pas dans la cuve", `Comme pour le café de civette, le passage digestif intervient dans la production du café, pas dans le brassage direct. Les grains sont récupérés, nettoyés, séchés, torréfiés puis moulus. La stout reçoit le café transformé ; elle ne reçoit ni bouse d’éléphant ni ingrédient animal brut.`),
      chapter("Un poisson d’avril qui connaissait ses malts", `La recette publiée par Sankt Gallen tranche avec le caractère farceur du lancement : Pale Ale, Munich, deux Crystal, Chocolate, Black et Roasted Barley forment une base noire structurée. Le café est ajouté à froid en maturation, choix logique pour extraire l’aromatique sans soumettre le grain à une longue ébullition.`)
    ],
    recette: makeRecipe({
      titre: "La blague japonaise est étonnamment précise",
      explicationProfil: "Stout au Black Ivory Coffee documenté à 6,5 % et 28 IBU par Sankt Gallen.",
      malts: ["Pale Ale Malt.", "Munich Malt.", "Crystal 20L.", "Crystal 80L.", "Chocolate Malt.", "Black Malt.", "Roasted Barley."],
      hops: ["Chinook.", "Cascade."],
      yeast: ["Levure ale ; souche exacte non mise en avant dans la documentation retenue."],
      extras: ["Black Ivory Coffee moulu, produit à partir de grains passés par des éléphants puis transformés comme café."],
      boil: "Brassage d’une stout classique avec Chinook et Cascade ; calendrier détaillé non nécessairement public.",
      fermentation: "Fermentation haute puis maturation aromatique au café.",
      maturation: "Le café moulu est ajouté au tank de maturation dans un procédé comparé par la brasserie à une extraction froide.",
      target: "Une vraie stout au café de luxe dont le récit digestif reste dans la filière du café plutôt que d’être transformé en fausse recette scatologique."
    }),
    sources: [
      source("Sankt Gallen Brewery", "Un, Kono Kuro / Black Ivory Coffee beer — communiqué et recette", "https://www.sanktgallenbrewery.com/unkonokuro/", "source_producteur"),
      source("Brookston Beer Bulletin", "Beer brewed with elephant dung coffee", "https://brookstonbeerbulletin.com/beer-brewed-with-elephant-dung/", "source_secondaire")
    ]
  })
];
