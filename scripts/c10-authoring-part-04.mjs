import { makeCard, makeRecipe, chapter, source, exactMetric, textMetric } from "./c10-authoring-common.mjs";

export default [
  makeCard({
    code: "C10-022",
    nom: "Celest-jewel-ale",
    nature: "Bière expérimentale / bière cosmique",
    aliases: ["Dogfish Head Celest-jewel-ale"],
    pays: "États-Unis",
    origine: "Dogfish Head",
    alcohol: exactMetric(5, "%"),
    bitterness: exactMetric(25, "IBU"),
    color: textMetric("Ambrée / inspiration Oktoberfest"),
    fermentation: "Basse",
    description: "Une Oktoberfest à 5 % et 25 IBU dans laquelle Dogfish Head a infusé de la poussière issue de météorites lunaires certifiées. La Bavière a donc reçu un caillou du ciel, soigneusement broyé avant service.",
    histoire: `Dogfish Head a conçu Celest-jewel-ale autour de l’équinoxe d’automne, de la harvest moon et de son goût bien établi pour les expériences historiques ou improbables. Le point spectaculaire est documenté par la brasserie : de petites météorites lunaires certifiées ont été réduites en poussière puis utilisées dans une infusion comparable à un thé, ajoutée au brassin.

La bière reste pourtant fondamentalement une Oktoberfest maltée, annoncée à 5 % ABV et 25 IBU. La météorite n’a pas pour rôle de donner un parfum de vide intersidéral — aucune source sérieuse ne promet une note de cosmonaute — mais de transformer un objet de collection minéral en ingrédient narratif et technique.

C’est une forme rare d’insolite où l’ingrédient est extraordinaire surtout par sa provenance, pas par sa puissance aromatique.`,
    chapitres: [
      chapter("La lune passe par une théière", `Dogfish Head décrit une infusion de poudre météoritique plutôt qu’une poignée de pierres abandonnées au fond de la cuve. Cette méthode permet d’extraire ce que le matériau peut céder au liquide tout en maîtrisant le procédé. Le geste rappelle une infusion minérale, avec un prix au gramme beaucoup moins sympathique qu’un sachet d’Earl Grey.`),
      chapter("Un ingrédient qui vaut surtout par son adresse", `La poussière lunaire n’est pas un substitut de malt, de houblon ou de levure. Sa valeur est symbolique et géologique : il s’agit de matière identifiée comme météoritique lunaire. La bière devient ainsi un objet de médiation scientifique aussi inutile qu’irrésistible : le terroir s’étend brutalement jusqu’à la Lune.`)
    ],
    recette: makeRecipe({
      titre: "Une Oktoberfest avec correspondance lunaire",
      explicationProfil: "Base maltée de type Oktoberfest à 5 % et 25 IBU, complétée par une infusion de poussière météoritique lunaire selon Dogfish Head.",
      malts: ["Base maltée d’Oktoberfest ; composition détaillée non publiée dans les sources retenues."],
      hops: ["Houblonnage total annoncé à 25 IBU ; variétés et calendrier non détaillés ici."],
      yeast: ["Fermentation basse cohérente avec la base Oktoberfest annoncée ; souche non publiée."],
      extras: ["Météorites lunaires certifiées, broyées puis infusées comme un thé selon Dogfish Head."],
      water: "Profil d’eau non publié ; l’infusion minérale constitue l’ajout inhabituel documenté.",
      fermentation: "Fermentation basse d’une base Oktoberfest ; paramètres détaillés non publiés.",
      target: "Une bière maltée classique dont l’anomalie vient d’un matériau extraterrestre réellement documenté, sans lui inventer un goût de poussière d’étoile."
    }),
    sources: [
      source("Dogfish Head", "Celest-jewel-ale", "https://www.dogfish.com/drink/beer/celest-jewel-ale", "source_producteur"),
      source("Dogfish Head", "Celest-jewel-ale brewed with moon dust", "https://www.dogfish.com/blogfish/celest-jewel-ale-brewed-moon-dust-served-space-suit-can-coolers", "source_producteur")
    ]
  }),

  makeCard({
    code: "C10-023",
    nom: "Space Barley",
    nature: "Bière expérimentale / agriculture spatiale",
    aliases: ["Sapporo Space Barley"],
    pays: "Japon",
    origine: "Sapporo Breweries / Okayama University / Russian Academy of Sciences",
    color: textMetric("Blonde / lager expérimentale"),
    fermentation: "Non documentée avec précision",
    description: "Une bière brassée non pas avec une poignée de grains revenus directement de l’ISS, mais avec la descendance d’orge dont une génération avait passé environ cinq mois en orbite. Le pedigree est spatial ; le grain du verre, lui, a grandi sur Terre.",
    histoire: `Le projet Space Barley s’inscrit dans une recherche sur la capacité de cultures terrestres à supporter l’environnement spatial. De l’orge Haruna Nijo a séjourné environ cinq mois dans le module Zvezda de la Station spatiale internationale en 2006. Les graines revenues sur Terre ont ensuite servi à produire des générations descendantes.

Sapporo a brassé une bière expérimentale avec cette lignée, puis a organisé une vente très limitée au Japon. La formulation populaire « bière brassée avec de l’orge de l’espace » est donc vraie dans l’esprit mais mérite une précision généalogique : ce n’est pas nécessairement le grain ayant flotté en orbite qui est malté, mais sa descendance terrestre.

Cette nuance rend l’histoire plus intéressante : Space Barley parle autant de sélection, de reproduction et d’agriculture future que de marketing cosmique.`,
    chapitres: [
      chapter("Le grain a un grand-parent astronaute", `La chaîne expérience spatiale → retour des semences → culture sur Terre → descendance → brassage est essentielle. Elle permet d’étudier la stabilité et la viabilité de la lignée sans sacrifier tout le matériel spatial dans une seule cuve. La bière devient le produit final visible d’un programme agronomique.`),
      chapter("Une bière de laboratoire devenue loterie", `Les premiers lots ont été extrêmement limités et distribués dans un cadre promotionnel/lotterie au Japon, avec une dimension caritative ou scientifique autour de l’université partenaire. Le produit n’a jamais été une nouvelle lager standard de supermarché : son rareté fait partie de son identité.`)
    ],
    recette: makeRecipe({
      titre: "Le malt dont l’arbre généalogique passe par l’ISS",
      explicationProfil: "La donnée certaine est l’emploi de descendants d’une orge ayant séjourné dans l’espace ; les autres paramètres du brassin sont beaucoup moins publiés.",
      malts: ["Orge issue de la descendance d’une lignée Haruna Nijo ayant séjourné environ cinq mois à bord de l’ISS."],
      hops: ["Houblons non documentés avec assez de précision pour la version expérimentale."],
      yeast: ["Levure non documentée dans les sources retenues."],
      extras: ["Aucun ingrédient spatial supplémentaire n’est documenté : l’anomalie est la généalogie de l’orge."],
      fermentation: "Procédé de fermentation non publié avec suffisamment de précision.",
      target: "Une bière servant de vitrine à une expérience d’agriculture spatiale, sans prétendre que le verre possède un arôme orbital."
    }),
    sources: [
      source("Wired", "Sapporo Space Barley beer", "https://www.wired.com/2009/12/barley-space-space-beer", "source_presse"),
      source("Universe Today", "Space Beer available to a limited number of buyers", "https://www.universetoday.com/articles/space-beer-available-for-purchase-to-250-people", "source_presse_scientifique")
    ]
  }),

  makeCard({
    code: "C10-024",
    nom: "Kwispelbier",
    nature: "Boisson maltée sans alcool pour chiens",
    aliases: ["Beer for dogs"],
    pays: "Pays-Bas",
    origine: "Terrie Berenden / brasserie locale néerlandaise",
    alcohol: exactMetric(0, "%"),
    color: textMetric("Boisson maltée claire à ambrée selon les présentations"),
    fermentation: "Sans alcool / procédé non détaillé",
    description: "Une « bière » destinée aux chiens, élaborée à base de malt et d’extrait de bœuf, sans alcool. Le compagnon de promenade obtient son rituel de fin de journée ; il lui manque seulement l’application de notation et une opinion interminable sur la mousse.",
    histoire: `Kwispelbier a été créée aux Pays-Bas par Terrie Berenden, propriétaire d’une animalerie, avec l’idée d’offrir une boisson spéciale à ses chiens après des sorties de chasse. Le nom vient du néerlandais « kwispel », lié au mouvement de la queue, ce qui est probablement l’une des rares étymologies brassicoles que l’on peut vérifier sans dictionnaire de vieux moines.

Les articles de l’époque décrivent une boisson à base de malt et d’extrait de bœuf, sans alcool, conçue pour les chiens. Elle emprunte donc l’imaginaire social de la bière — bouteille, moment partagé, récompense — plus qu’elle ne cherche à reproduire une vraie bière humaine avec houblon et fermentation complète.

Sa place dans la collection repose sur ce déplacement de public : l’anomalie n’est pas ce que boit le chien, mais le fait qu’on ait choisi de l’appeler bière.`,
    chapitres: [
      chapter("Le dégustateur idéal remue la queue", `Kwispelbier n’est pas une bière destinée aux humains et ne doit pas être évaluée comme une lager sans alcool. Son cahier des charges est animalier : absence d’alcool, ingrédients adaptés au produit et attractivité pour le chien. La comparaison avec la bière est d’abord culturelle et marketing.`),
      chapter("Malt + bœuf = pastiche brassicole", `Le malt fournit la connexion céréalière avec l’univers de la bière, tandis que l’extrait de bœuf déplace le profil vers une friandise canine. Les proportions et le procédé ne sont pas suffisamment documentés pour reconstruire la boisson. Ce manque n’a rien de dramatique : personne n’a besoin d’un BJCP pour labradors.`)
    ],
    recette: makeRecipe({
      titre: "La gamelle, pas la pinte",
      explicationProfil: "Boisson maltée canine sans alcool ; elle ne constitue ni un style de bière humaine ni une recette à transposer pour la consommation humaine.",
      malts: ["Malt annoncé comme base de la boisson."],
      hops: ["Houblonnage non documenté ; ne pas supposer l’usage de houblon dans une boisson destinée aux chiens."],
      yeast: ["Fermentation éventuelle et micro-organismes non documentés ; le produit final est annoncé sans alcool."],
      extras: ["Extrait de bœuf."],
      water: "Eau de formulation non documentée.",
      mash: "Procédé de production non publié avec assez de précision.",
      boil: "Procédé thermique et aromatique non publié.",
      fermentation: "Aucune fermentation alcoolique significative n’est revendiquée ; détail de fabrication inconnu.",
      maturation: "Conditionnement d’une boisson animale, sans garde brassicole documentée.",
      target: "Une boisson sans alcool pour chiens qui reprend le rituel social de la bière sans être présentée comme bière humaine."
    }),
    sources: [
      source("Wikinews", "Amsterdam pet shop owner creates beer for dogs", "https://en.wikinews.org/wiki/Amsterdam_pet_shop_owner_creates_beer_for_dogs", "source_presse_archive"),
      source("KLTV / Associated Press", "Pet shop owner creates beer for dogs", "https://www.kltv.com/story/5977615/pet-shop-owner-creates-beer-for-dogs/", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-025",
    nom: "Belly Button Beer",
    nature: "Witbier expérimentale / levure humaine isolée",
    aliases: [],
    pays: "Australie",
    origine: "7 Cent Brewery",
    alcohol: exactMetric(4.5, "%"),
    color: textMetric("Blanche / witbier"),
    fermentation: "Haute / souche isolée d’un nombril",
    description: "Une witbier australienne fermentée à 100 % avec une souche de Saccharomyces dérivée d’une cellule de levure isolée dans la peluche de nombril d’un brasseur. L’anatomie fournit la souche ; le fermenteur reçoit une culture propre, pas le contenu d’un nombril.",
    histoire: `7 Cent Brewery a traité son idée absurde avec une méthode de laboratoire sérieuse. Des brasseurs volontaires ont été écouvillonnés au niveau du nombril, les prélèvements ont été cultivés sur milieu gélosé, puis les colonies ont été observées et sélectionnées. Une souche de Saccharomyces capable de fermenter a finalement été propagée.

La bière obtenue est décrite comme une witbier autour de 4,5 % ABV, avec orge, blé, avoine et seigle, houblons Riwaka et Mosaic, ainsi que zestes d’orange et coriandre. Autrement dit, derrière le nombril se cache une recette de blanche assez structurée.

Le point pédagogique est magnifique : le projet paraît corporel, mais la technique repose justement sur l’isolement d’une cellule et sa multiplication contrôlée. Le nombril est une adresse postale pour levure, pas un ingrédient en vrac.`,
    chapitres: [
      chapter("Une cellule, pas une poignée de peluches", `La culture sur agar sert à séparer les micro-organismes présents dans un prélèvement et à sélectionner une colonie intéressante. Après propagation, la masse de levure utilisée au brassage descend de cette colonie. Le lien avec le corps est généalogique ; la matière corporelle originale ne constitue pas la recette.`),
      chapter("La blanche la mieux habillée du laboratoire", `Riwaka et Mosaic apportent une dimension houblonnée moderne tandis que l’orange et la coriandre rappellent le vocabulaire du witbier. Orge, blé, avoine et seigle forment une base céréalière complexe. La bizarrerie n’a donc pas remplacé la conception brassicole : elle s’est installée dans la case « levure » d’une recette autrement cohérente.`)
    ],
    recette: makeRecipe({
      titre: "Du coton-tige à la witbier",
      explicationProfil: "Le projet a été documenté assez précisément pour identifier la logique de laboratoire et plusieurs ingrédients de la bière.",
      malts: ["Orge.", "Blé.", "Avoine.", "Seigle."],
      hops: ["Riwaka.", "Mosaic."],
      yeast: ["Souche de Saccharomyces dérivée d’une cellule isolée depuis un prélèvement de nombril, cultivée sur agar puis propagée."],
      extras: ["Zestes d’orange.", "Coriandre."],
      mash: "Empâtage d’une base multi-céréales ; paliers détaillés non publiés dans les sources retenues.",
      fermentation: "Fermentation haute annoncée comme réalisée à 100 % avec la souche isolée du nombril ; paramètres de température non publiés ici.",
      target: "Une witbier crédible techniquement où l’origine insolite de la levure est expliquée comme un protocole de culture, jamais comme une soupe anatomique."
    }),
    sources: [
      source("Craft Brewing Business", "Australian brewers culture belly-button yeast", "https://www.craftbrewingbusiness.com/news/todays-weird-yeast-strain-australian-belly-button-yeast/", "source_professionnelle"),
      source("Beer Street Journal", "Belly Button Beer", "https://beerstreetjournal.com/belly-button-beer/", "source_secondaire"),
      source("Untappd", "7 Cent Brewery — Belly Button Beer", "https://untappd.com/", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-026",
    nom: "Stag Semen Stout",
    nature: "Milk stout expérimentale",
    aliases: ["Hoihoi Tatea", "Stag Semen Milked Stout"],
    pays: "Nouvelle-Zélande",
    origine: "The Green Man / Choice Bros, Wellington",
    alcohol: exactMetric(5.8, "%"),
    bitterness: exactMetric(35, "IBU"),
    color: textMetric("Noire / milk stout"),
    fermentation: "Haute",
    description: "Une milk stout néo-zélandaise annoncée avec ajout de sperme de cerf, autour de 5,8 % et 35 IBU. Aucune métaphore ne peut vraiment améliorer la phrase ; la meilleure stratégie est donc d’être précis et de laisser le cerf faire le bruit.",
    histoire: `Hoihoi Tatea, souvent appelée Stag Semen Stout, a été associée au Green Man Pub de Wellington et à Choice Bros dans le cadre d’événements culinaires volontairement provocateurs. Les fiches conservées la décrivent comme une milk/sweet stout à environ 5,8 % ABV et 35 IBU avec ajout annoncé de sperme de cerf de qualité export.

Contrairement aux bières à « levure de barbe » ou « levure de nombril », où le corps fournit seulement une souche cultivée, l’élément animal est ici présenté comme un ajout réel au produit. C’est une différence de catégorie importante : la collection ne doit pas mettre toutes les bizarreries corporelles dans le même bocal.

La recette maltée, le dosage et le moment d’ajout restent insuffisamment documentés. La donnée extraordinaire est solide ; les détails extraordinaires supplémentaires seraient de l’invention.`,
    chapitres: [
      chapter("Ici, ce n’est pas seulement une origine microbienne", `Le sperme de cerf est présenté comme ingrédient ajouté, pas comme simple lieu de prélèvement d’une levure. Cela distingue radicalement cette bière de Belly Button Beer ou Beard Beer. La Brassopédie doit être clinique sur ce point : l’humour vient de l’existence du produit, pas de détails anatomiques inventés.`),
      chapter("Le stout fait presque tout le travail de normalité", `La classification en milk/sweet stout, l’alcool et l’amertume donnent un cadre brassicole familier. C’est ce contraste qui rend l’objet si étrange : une bière noire structurée, avec un seul élément qui suffit à faire dérailler toute conversation de dégustation.`)
    ],
    recette: makeRecipe({
      titre: "La stout, puis l’ingrédient que personne n’avait demandé",
      explicationProfil: "Milk stout documentée à 5,8 % et 35 IBU ; l’ingrédient animal est annoncé, mais la formulation complète demeure inconnue.",
      malts: ["Base de milk stout sombre ; malts et proportions non publiés avec précision."],
      hops: ["Houblonnage total annoncé autour de 35 IBU ; variétés non établies dans les sources retenues."],
      yeast: ["Levure ale de stout ; souche non publiée."],
      extras: ["Sperme de cerf annoncé comme ingrédient du brassin.", "Lactose probable au regard de la classification Milk/Sweet Stout, mais ne doit pas être affirmé comme ingrédient sans fiche producteur complète."],
      fermentation: "Fermentation haute ; timing de l’ajout animal et paramètres détaillés non documentés.",
      target: "Une milk stout expérimentale présentée avec exactitude, sans ajouter des détails de procédé ou des notes gustatives que les sources ne permettent pas d’établir."
    }),
    sources: [
      source("Untappd", "Hoihoi Tatea / Stag Semen Milked Stout — données de produit", "https://untappd.com/", "source_secondaire"),
      source("The Drinks Business", "NZ pub selling beer laced with deer semen", "https://www.thedrinksbusiness.com/2015/08/nz-pub-selling-beer-laced-with-deer-semen/", "source_presse"),
      source("American Craft Beer", "Bad ideas in brewing: Stag Semen Stout", "https://www.americancraftbeer.com/bad-ideas-in-brewing-stag-semen-stout/", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-027",
    nom: "Fenrir Nr.26",
    nature: "IPA fumée expérimentale",
    aliases: ["Borg Nr.26 Fenrir"],
    pays: "Islande",
    origine: "Borg Brugghús",
    alcohol: exactMetric(6, "%"),
    color: textMetric("Dorée à ambrée / IPA"),
    fermentation: "Haute",
    description: "Une IPA islandaise à 6 % construite avec du malt fumé au feu de bouse de mouton. La bouse n’est pas versée dans la bière : elle joue le rôle historique du combustible qu’un pays pauvre en bois avait sous la main.",
    histoire: `Borg Brugghús a créé Fenrir Nr.26 en s’inspirant de pratiques islandaises de fumage où la bouse de mouton séchée pouvait servir de combustible lorsque le bois était rare. La brasserie applique cette fumée au malt puis l’intègre dans une IPA de type West Coast autour de 6 % ABV.

La fiche producteur évoque agrumes, pamplemousse, amertume houblonnée et fumée particulière. La singularité ne vient donc pas d’un ingrédient fécal ajouté au moût, mais du combustible utilisé pour transformer le malt. Ce n’est pas une petite nuance : elle déplace le récit de la provocation vers l’histoire matérielle d’un territoire.

Fenrir est ainsi l’une des bières les plus pédagogiques de la collection. Le gag attire ; la géographie explique.`,
    chapitres: [
      chapter("Le combustible que la lande pouvait fournir", `Dans un environnement où le bois de chauffage n’était pas toujours abondant, les combustibles animaux séchés ont eu des usages domestiques réels. Fumer avec de la bouse de mouton appartient donc à une logique d’adaptation, pas à une invention craft créée uniquement pour choquer un festivalier.`),
      chapter("Une West Coast IPA passée au fumoir islandais", `Le contraste entre houblons agrumés/amers et malt fumé donne à Fenrir une identité hybride. La base West Coast fournit la tension aromatique ; la fumée apporte la signature locale. La bouse s’arrête au feu, ce qui est à la fois plus propre et historiquement plus intéressant.`)
    ],
    recette: makeRecipe({
      titre: "Le feu pastoral, pas l’ingrédient pastoral",
      explicationProfil: "West Coast IPA à 6 % utilisant du malt fumé par un feu alimenté à la bouse de mouton séchée.",
      malts: ["Malt dont une partie est fumée au feu de bouse de mouton séchée ; composition complète du grist non publiée."],
      hops: ["Profil West Coast IPA avec agrumes/pamplemousse documenté par Borg ; variétés exactes non retenues comme certaines."],
      yeast: ["Levure ale ; souche non publiée."],
      extras: ["Bouse de mouton séchée utilisée comme combustible de fumage du malt, pas comme matière ajoutée à la bière."],
      boil: "Houblonnage d’IPA ; calendrier détaillé non publié.",
      fermentation: "Fermentation haute d’IPA ; paramètres détaillés non publiés.",
      target: "Une IPA amère et fumée où la signature islandaise vient du traitement du malt plutôt que d’une caricature d’ingrédient sale."
    }),
    sources: [
      source("Borg Brugghús", "Nr.26 Fenrir", "https://www.borgbrugghus.is/thebeer/product/nr-26-fenrir", "source_producteur"),
      source("Iceland Naturally", "Borg Brugghús Fenrir Nr.26", "https://old.icelandnaturally.com/article/borg-brugghus-latest-beer-fenrir-nr-26/", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-028",
    nom: "Coolship No.6",
    nature: "Bière acide expérimentale / collaboration fromagère",
    aliases: ["Coolship Experiment No.6", "Coolship Beer No.6"],
    pays: "États-Unis",
    origine: "Crux Fermentation Project / Rogue Creamery",
    color: textMetric("Ale acide claire à dorée"),
    fermentation: "Spontanée / culture mixte de coolship",
    description: "Une bière de coolship longuement vieillie, associée au Rogue River Blue cheese ou à des cultures liées au fromage bleu selon les récits disponibles. La cave d’affinage et la cave de fermentation se sont regardées et ont décidé de signer un bail commun.",
    histoire: `Coolship No.6 est issue d’une collaboration entre Crux Fermentation Project et Rogue Creamery autour du Rogue River Blue, fromage bleu de l’Oregon affiné longuement et enveloppé de feuilles de vigne. Les articles consacrés au projet décrivent une bière de fermentation spontanée/coolship vieillie environ deux ans avant une expérimentation impliquant le fromage ou sa culture microbienne.

Les sources secondaires ne formulent pas toutes exactement de la même manière ce qui a été introduit : morceau de fromage, culture associée, ou combinaison. Cette divergence doit rester visible dans la fiche plutôt que d’être résolue artificiellement. En encyclopédie, « on ne sait pas avec certitude » est parfois la phrase la plus propre de la cave.

L’idée reste techniquement cohérente : bière acide et fromage bleu reposent tous deux sur des écosystèmes microbiens complexes. Ce n’est pas du roquefort liquide ; c’est une rencontre de fermentations.`,
    chapitres: [
      chapter("Deux caves, deux microbiologies", `Une bière de coolship collecte une microflore environnementale puis évolue lentement en fermentation mixte. Un bleu comme Rogue River Blue s’appuie notamment sur des moisissures Penicillium et des cultures d’affinage. Les réunir est spectaculaire, mais pas absurde d’un point de vue microbiologique : les deux produits sont déjà des écosystèmes comestibles.`),
      chapter("Fromage entier ou culture : l’incertitude fait partie de la fiche", `Les comptes rendus accessibles ne décrivent pas tous le protocole avec la même précision. La Brassopédie conserve donc l’alternative au lieu de choisir arbitrairement la version la plus théâtrale. Ce que l’on peut affirmer : collaboration Rogue Creamery, lien direct avec Rogue River Blue, bière acide/coolship et vieillissement prolongé.`)
    ],
    recette: makeRecipe({
      titre: "Le coolship rencontre le bleu",
      explicationProfil: "Bière acide de fermentation spontanée vieillie longuement puis expérimentée avec Rogue River Blue ou une culture qui lui est associée ; le protocole exact varie selon les sources accessibles.",
      malts: ["Base de bière de coolship non détaillée avec précision."],
      hops: ["Houblonnage non documenté avec assez de précision."],
      yeast: ["Microflore spontanée/culture mixte de la bière.", "Cultures associées au fromage bleu selon les descriptions du projet."],
      extras: ["Rogue River Blue cheese et/ou culture liée au fromage bleu selon les sources ; ne pas trancher au-delà des documents disponibles."],
      fermentation: "Fermentation spontanée ou mixte initiée via coolship, suivie d’un vieillissement prolongé.",
      maturation: "Environ deux ans de vieillissement sont rapportés avant ou autour de l’expérimentation fromagère.",
      target: "Une sour de laboratoire-cave où l’on documente honnêtement la rencontre avec le bleu sans promettre une pinte de fromage fondu."
    }),
    sources: [
      source("Brewpublic", "Rogue Creamery and Crux release ale brewed with blue cheese", "https://brewpublic.com/beer-releases/rogue-creamery-and-crux-fermentation-release-limited-edition-ale-brewed-with-blue-cheese/", "source_presse_professionnelle"),
      source("InsideHook", "Oregon brewery makes blue cheese beer", "https://www.insidehook.com/beer/oregon-brewery-blue-cheese-beer", "source_presse"),
      source("Rogue Creamery", "Rogue River Blue — affinage et cultures", "https://roguecreamery.com/rogue-river-blue/", "source_producteur")
    ]
  })
];
