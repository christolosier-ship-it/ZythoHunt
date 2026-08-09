import { makeCard, makeRecipe, chapter, source, exactMetric, textMetric } from "./c10-authoring-common.mjs";

export default [
  makeCard({
    code: "C10-015",
    nom: "Fossil Fuels / Jurassic Saison",
    nature: "Bière expérimentale / levure ancienne revendiquée",
    aliases: ["Fossil Fuels Brewing", "Jurassic Saison"],
    pays: "États-Unis",
    origine: "Fossil Fuels Brewing Company / travaux de Raul Cano",
    color: textMetric("Variable selon les brassins Fossil Fuels"),
    fermentation: "Haute / souche ancienne revendiquée",
    description: "Une bière bâtie autour d’une souche de Saccharomyces revendiquée comme réveillée depuis de l’ambre vieux de dizaines de millions d’années. La promesse est jurassique ; la bonne encyclopédie garde cependant un astérisque scientifique solidement vissé au dinosaure.",
    histoire: `Fossil Fuels Brewing est liée aux travaux du microbiologiste Raul Cano, qui a publié dans les années 1990 des recherches sur des micro-organismes cultivés à partir d’inclusions d’ambre ancien. Des années plus tard, l’une de ces cultures de levure a été utilisée par le brasseur Peter Hackett pour produire des bières commercialisées sous l’imaginaire Fossil Fuels.

Le récit est irrésistible : ouvrir l’ambre, réveiller une levure préhistorique, lui donner du malt et écouter les dinosaures réclamer une tournée. Scientifiquement, l’âge et l’authenticité de micro-organismes « ressuscités » de matériaux très anciens restent un sujet discuté, notamment à cause du risque de contamination moderne et de la difficulté à démontrer une continuité biologique aussi spectaculaire.

ZythoHunt doit donc conserver la merveille sans la certitude abusive : la levure est revendiquée comme très ancienne et associée à l’ambre ; son âge exact n’est pas un fait à graver dans la roche.`,
    chapitres: [
      chapter("Le ptérodactyle dans l’astérisque", `Une culture qui pousse en laboratoire ne prouve pas automatiquement l’âge que l’on attribue à son support. Les protocoles de stérilité, la génétique et la reproductibilité deviennent essentiels dès qu’une affirmation défie l’échelle habituelle de survie microbienne. C’est précisément ce qui rend le projet passionnant : il est à la frontière entre microbiologie réelle et récit extraordinaire.`),
      chapter("Une levure fossile n’est pas un fossile dans la bière", `Le brassin ne contient pas de morceaux d’ambre ni d’insectes préhistoriques documentés comme ingrédients. L’élément revendiqué est une culture de levure issue d’un travail microbiologique. La bière reste composée d’un moût moderne ; c’est la généalogie supposée du micro-organisme qui constitue l’anomalie.`)
    ],
    recette: makeRecipe({
      titre: "Brasser avec une revendication préhistorique",
      explicationProfil: "Les différentes bières Fossil Fuels ne constituent pas une recette unique. Le point commun documentaire est l’emploi d’une souche de Saccharomyces revendiquée comme très ancienne.",
      profilUnique: false,
      noteProfil: "Il s’agit d’un projet de fermentation fondé sur une souche revendiquée comme ancienne ; l’âge exact reste scientifiquement discuté.",
      malts: ["Moût moderne ; céréales et proportions variables ou non documentées selon la version."],
      hops: ["Houblons non documentés comme signature commune à tous les brassins Fossil Fuels."],
      yeast: ["Souche de Saccharomyces cerevisiae associée aux travaux de Raul Cano et revendiquée comme issue d’ambre ancien."],
      extras: ["Aucun morceau d’ambre n’est nécessairement un ingrédient du brassin ; l’ambre intervient dans l’histoire de l’isolat microbien."],
      fermentation: "Fermentation d’un moût moderne avec la culture revendiquée ancienne ; paramètres variables selon le brassin.",
      target: "Raconter une fermentation archéomicrobiologique fascinante sans transformer une hypothèse d’âge en certitude de parc jurassique."
    }),
    sources: [
      source("Wired", "Fossil Fuels — beer brewed with primordial yeast", "https://www.wired.com/2009/07/ff-primordial-yeast/", "source_presse_scientifique"),
      source("California Sun", "The beer made from 45-million-year-old yeast", "https://www.californiasun.co/the-beer-made-from-45-million-year-old-yeast/", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-016",
    nom: "Bone Dusters Paleo Ale",
    nature: "Bière expérimentale / paléomicrobiologie",
    aliases: [],
    pays: "États-Unis",
    origine: "Lost Rhino Brewing Company / Paleo Quest",
    color: textMetric("Ale ambrée selon les présentations disponibles"),
    fermentation: "Haute / souche issue d’un fossile revendiquée",
    description: "Une ale élaborée avec une levure présentée comme isolée sur un fossile de baleine. Ici, aucun os n’est réduit en poudre dans le mash : le musée fournit un micro-organisme, pas une épice paléontologique.",
    histoire: `Bone Dusters Paleo Ale est née d’une collaboration entre Lost Rhino Brewing Company et Paleo Quest autour d’un fossile de cétacé. Les sources techniques secondaires décrivent une souche nommée Saccharomyces cerevisiae var. protocetus, isolée dans le contexte du fossile puis mise en culture pour le brassage.

La narration est évidemment spectaculaire : boire une bière « au fossile de baleine » semble annoncer une cuve remplie de vertèbres. La réalité est plus subtile et plus intéressante. Ce qui est utilisé est une culture microbienne, c’est-à-dire une descendance de cellules propagées, pas le fossile lui-même comme matière aromatique.

Comme pour Fossil Fuels, la datation et l’origine exacte d’une culture associée à un matériau ancien doivent être racontées avec prudence. La science gagne rarement à être servie avec un âge plus précis que ce qu’elle peut défendre.`,
    chapitres: [
      chapter("Le musée passe par la boîte de Petri", `Le chemin documentaire est fossile → prélèvement → culture → sélection → propagation → fermenteur. Cette chaîne transforme une trouvaille de paléontologie en outil brassicole. Elle explique aussi pourquoi la bière n’a aucune raison de goûter l’os, la baleine ou la poussière de musée.`),
      chapter("Paleo Ale, pas potion de résurrection", `L’intérêt de la carte tient à la question de la provenance de la levure, pas à une promesse sensorielle préhistorique. Les malts, houblons, alcool et profil final ne sont pas assez documentés pour reconstruire la bière. En revanche, l’expérience montre jusqu’où les brasseurs peuvent pousser la notion de terroir microbien : jusque dans une collection fossile.`)
    ],
    recette: makeRecipe({
      titre: "Une levure sortie du musée",
      explicationProfil: "Le style complet et les paramètres du brassin ne sont pas publiés de manière suffisante ; la culture microbienne constitue le fait central.",
      malts: ["Base d’ale non documentée avec précision."],
      hops: ["Houblons et amertume non documentés avec précision."],
      yeast: ["Souche décrite comme Saccharomyces cerevisiae var. protocetus, liée au prélèvement sur un fossile de baleine dans les sources consacrées au projet."],
      extras: ["Le fossile est la source du prélèvement revendiqué, pas un ingrédient solide ajouté à la bière."],
      fermentation: "Fermentation avec la culture propagée ; températures, densités et durée non publiées.",
      target: "Une ale servant de véhicule à une expérience paléomicrobiologique, sans inventer un goût de fossile ou un âge absolu non démontré."
    }),
    sources: [
      source("Craft Beer & Brewing", "Bone Dusters Paleo Ale", "https://www.beerandbrewing.com/bone-dusters-paleo-ale", "source_professionnelle"),
      source("Chemical & Engineering News", "Fossil-Infused Beer", "https://cen.acs.org/articles/92/i17/Fossil-Infused-Beer-75-Million.html", "source_scientifique_secondaire")
    ]
  }),

  makeCard({
    code: "C10-017",
    nom: "Oyster Stout",
    nature: "Famille historique devenue curiosité brassicole",
    aliases: ["Stout aux huîtres"],
    pays: ["Royaume-Uni", "États-Unis", "International"],
    origine: "Accord stout-huîtres britannique, puis interprétations brassées avec mollusques",
    color: textMetric("Noire / stout"),
    fermentation: "Haute",
    description: "L’étrangeté qui a fini par devenir presque respectable : certaines oyster stouts utilisent réellement coquilles, chair ou saumure d’huîtres. Au départ, stout et huîtres se fréquentaient simplement au pub ; un jour, quelqu’un a décidé que la table était trop loin de la cuve.",
    histoire: `Les huîtres et le stout partagent une longue histoire de table en Grande-Bretagne. Au XIXe siècle, les mollusques étaient un aliment populaire et leur association avec les bières sombres est bien documentée. Le nom « oyster stout » a d’abord pu évoquer cet accord ou une bière destinée à accompagner les huîtres avant que des brasseurs n’intègrent réellement des coquilles, puis parfois des huîtres entières, au processus.

Aujourd’hui, la famille est extrêmement variable. Certaines recettes emploient seulement les coquilles pour leur apport minéral, d’autres la chair, la liqueur/saumure, ou une combinaison. Il n’existe donc pas une recette universelle que l’on pourrait attribuer à toutes les Oyster Stouts.

C’est la carte idéale pour montrer comment une anomalie peut se civiliser avec le temps : ce qui paraît absurde à première lecture est devenu une sous-tradition brassicole cohérente.`,
    chapitres: [
      chapter("Avant la cuve, il y avait le comptoir", `L’accord gastronomique précède l’ingrédient. Stout torréfié, douceur du mollusque et salinité formaient déjà un couple de pub. L’étape suivante — mettre les huîtres dans le brassin — transforme une habitude de service en procédé. Cette chronologie évite le mythe d’un style ancestral immuable brassé aux coquillages depuis toujours.`),
      chapter("Coquille, chair ou saumure : trois bières différentes", `Le mot Oyster Stout ne suffit pas à savoir ce qui a été utilisé. Les coquilles apportent surtout des minéraux et du carbonate de calcium ; la chair et la saumure introduisent d’autres composés. Chaque brasserie choisit son niveau de mollusque. Une fiche générique doit donc parler de famille, pas prétendre qu’une seule méthode serait la tradition officielle.`)
    ],
    recette: makeRecipe({
      titre: "La famille aux coquilles multiples",
      profilUnique: false,
      noteProfil: "Oyster Stout est une famille d’interprétations : le type et la quantité d’huître varient fortement selon les brasseries.",
      explicationProfil: "Base de stout sombre enrichie, selon les recettes, de coquilles, chair ou saumure d’huîtres.",
      malts: ["Base typique de stout : malt pâle et céréales/malts torréfiés selon la recette choisie."],
      hops: ["Houblonnage de stout variable ; aucune variété universelle n’est imposée par la présence d’huîtres."],
      yeast: ["Levure ale adaptée à la base stout."],
      extras: ["Coquilles d’huîtres possibles.", "Chair d’huître possible.", "Saumure ou liqueur d’huître possible selon la recette."],
      water: "Le profil minéral peut être influencé par l’usage de coquilles ; le traitement d’eau reste propre à chaque brasserie.",
      mash: "Empâtage de stout classique ; certaines recettes ajoutent les coquilles plus tard plutôt qu’au mash.",
      boil: "De nombreuses recettes incorporent coquilles ou huîtres vers l’ébullition, mais le timing n’est pas universel.",
      fermentation: "Fermentation haute de stout ; les huîtres ne définissent pas une fermentation distincte.",
      maturation: "Maturation selon la base stout ; la fraîcheur et la stabilité de l’ingrédient marin imposent une hygiène rigoureuse.",
      target: "Une stout où le caractère marin complète le torréfié sans supposer qu’une méthode unique définit toutes les Oyster Stouts."
    }),
    sources: [
      source("American Homebrewers Association", "Oyster Stout: tricks for brewing with mollusks", "https://homebrewersassociation.org/how-to-brew/oyster-stout-tricks-brewing-mollusks/", "source_professionnelle"),
      source("VinePair", "What is Oyster Stout?", "https://vinepair.com/articles/what-is-oyster-stout/", "source_secondaire"),
      source("Bon Appétit", "Seafood beer and oyster stout", "https://www.bonappetit.com/drinks/beer/article/seafood-beer", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-018",
    nom: "Mangalitsa Pig Porter",
    nature: "Porter expérimental",
    aliases: ["Pig Porter"],
    pays: "États-Unis",
    origine: "Right Brain Brewery, Michigan",
    color: textMetric("Noire / porter"),
    fermentation: "Haute",
    description: "Un porter brassé avec de véritables têtes et os fumés de porc Mangalitsa. La fumée ne vient donc pas seulement d’un malt qui a vu un feu de loin : une partie de la charcuterie a obtenu son badge visiteur en brasserie.",
    histoire: `Mangalitsa Pig Porter est l’une des curiosités les plus célèbres de Right Brain Brewery. La brasserie a utilisé des têtes et des os fumés de porc Mangalitsa, race connue pour son pelage laineux et sa viande riche, afin de construire une dimension fumée et carnée dans un porter sombre.

Le projet aurait pu rester une bravade de taproom ; il a au contraire reçu une médaille d’or dans la catégorie Experimental Beer au Great American Beer Festival 2011. Cette reconnaissance est intéressante parce qu’elle rappelle qu’« expérimental » n’est pas synonyme d’« aléatoire » : même avec un ingrédient qui ressemble à un inventaire de charcutier, le jury juge encore l’équilibre du produit.

Les détails complets de la base maltée et du dosage animal ne sont pas publics. L’os est documenté ; la recette au gramme près ne l’est pas.`,
    chapitres: [
      chapter("Le fumoir a vraiment envoyé des pièces détachées", `Les sources consacrées à la bière insistent sur l’usage de têtes et d’os fumés, ce qui distingue Pig Porter d’une bière simplement aromatisée au bacon ou construite uniquement avec du malt fumé. La matière animale participe au procédé, mais cela ne permet pas de déduire automatiquement une saveur de bouillon ou de viande.`),
      chapter("Le bizarre avec une médaille autour du cou", `La récompense du GABF 2011 donne à la bière un statut particulier dans la collection. Elle montre qu’une expérience spectaculaire peut être évaluée comme bière, avec des critères d’équilibre et d’exécution. Le cochon attire la caméra ; le porter doit encore tenir debout tout seul.`)
    ],
    recette: makeRecipe({
      titre: "Le porter passé par le fumoir",
      explicationProfil: "Porter expérimental utilisant de vraies pièces fumées de porc Mangalitsa ; la recette complète n’est pas publiée.",
      malts: ["Base de porter sombre et maltée ; composition précise non documentée dans les sources retenues."],
      hops: ["Houblons et amertume non documentés avec précision."],
      yeast: ["Levure ale de porter ; souche non publiée."],
      extras: ["Têtes et os de porc Mangalitsa fumés utilisés dans le brassage."],
      boil: "Étape exacte d’introduction des éléments fumés non suffisamment documentée pour être reproduite avec certitude.",
      fermentation: "Fermentation haute d’un porter ; paramètres détaillés non publiés.",
      target: "Un porter expérimental où l’ingrédient animal construit la signature fumée sans inventer des sensations que les sources ne décrivent pas de manière stable."
    }),
    sources: [
      source("Right Brain Brewery", "Awards — Mangalitsa Pig Porter, GABF 2011", "https://www.rightbrainbrewery.com/awards", "source_producteur"),
      source("Brewbound", "Right Brain Brewery — Mangalitsa Pig Porter", "https://www.brewbound.com/breweries/Right_Brain_Brewery/mangalitsa-pig-porter", "source_professionnelle"),
      source("BeerAdvocate", "Mangalitsa Pig Porter", "https://www.beeradvocate.com/beer/profile/16503/72900/", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-019",
    nom: "Snake Venom",
    nature: "Bière extrême / produit fortifié",
    aliases: ["Brewmeister Snake Venom"],
    pays: "Écosse",
    origine: "Brewmeister / Keith Brewery",
    alcohol: exactMetric(67.5, "%"),
    color: textMetric("Non documentée de manière cohérente"),
    fermentation: "Fermentation puis concentration / fortification revendiquée",
    description: "Un produit écossais affiché à 67,5 % ABV et régulièrement présenté comme une « bière la plus forte du monde ». À cette hauteur, la question la plus intéressante n’est plus de savoir si elle désaltère, mais où finit la bière et où commence l’alcool fortifié.",
    histoire: `Snake Venom a été commercialisée par Brewmeister avec un titre alcoométrique de 67,5 %, valeur qui l’a propulsée dans les listes de records et les rayons de curiosités extrêmes. Les vendeurs avertissent généralement qu’elle doit être consommée en petites quantités et non comme une bière conventionnelle.

Le record est toutefois inséparable d’une question de définition. Des sources consacrées au produit décrivent des procédés de concentration et/ou l’ajout d’alcool, ce qui signifie que les 67,5 % ne proviennent pas d’une fermentation ordinaire. Appeler cela « la bière la plus forte » est donc une revendication commerciale qui dépend de la frontière choisie entre bière, bière concentrée et produit fortifié.

Dans ZythoHunt, cette ambiguïté n’est pas un défaut : c’est précisément la raison pour laquelle Snake Venom appartient à la collection.`,
    chapitres: [
      chapter("Le serpent vit dans la définition", `Une levure de bière ne fermente pas spontanément un moût jusqu’à 67,5 % vol. Les alcools aussi élevés nécessitent une intervention après ou autour de la fermentation : concentration, distillation partielle, fortification ou combinaison. La prouesse n’est donc pas celle d’une levure invincible, mais celle d’un procédé hybride.`),
      chapter("Record du monde, avec conditions générales", `Les titres de « bière la plus forte » changent avec le temps et selon ce que l’on accepte dans la catégorie. Une encyclopédie doit dater ou qualifier ces records plutôt que les transformer en couronne éternelle. Snake Venom reste remarquable par son chiffre revendiqué ; son statut taxonomique, lui, mérite le point d’interrogation.`)
    ],
    recette: makeRecipe({
      titre: "Une bière qui franchit la frontière des spiritueux",
      explicationProfil: "Le procédé complet n’est pas public et le produit est décrit comme concentré et/ou fortifié. Il ne faut pas présenter 67,5 % comme le résultat d’une fermentation classique.",
      malts: ["Base maltée annoncée par les descriptions commerciales ; composition et densité initiale non publiées de manière fiable."],
      hops: ["Houblons non documentés comme élément déterminant du produit."],
      yeast: ["Levure de la base fermentée ; aucune souche ne suffit seule à expliquer 67,5 % ABV."],
      extras: ["Intervention de concentration et/ou fortification rapportée par les sources consacrées au produit."],
      fermentation: "Une fermentation produit la base, puis d’autres opérations sont nécessaires pour atteindre le titre revendiqué.",
      maturation: "Procédé post-fermentation non publié avec assez de précision pour être reproduit ou catégorisé sans réserve.",
      target: "Documenter un objet brassicole extrême tout en rendant visible la frontière floue entre bière fermentée et produit alcoolique fortifié."
    }),
    sources: [
      source("Hops & Hopes", "Brewmeister Snake Venom", "https://www.hopsandhopes.nl/en/beers/snake-venom", "source_commerciale"),
      source("Hard To Find Whisky", "Brewmeister Snake Venom — 67.5%", "https://www.htfw.com/brewmeister-snake-venom-world-s-strongest-beer", "source_commerciale"),
      source("Food & Wine", "Strongest beers and the question of fortification", "https://www.foodandwine.com/news/worlds-strongest-beer", "source_presse")
    ]
  }),

  makeCard({
    code: "C10-020",
    nom: "Tactical Nuclear Penguin",
    nature: "Bière extrême / freeze-concentrated stout",
    aliases: ["BrewDog Tactical Nuclear Penguin"],
    pays: "Écosse",
    origine: "BrewDog",
    alcohol: exactMetric(32, "%"),
    color: textMetric("Noire / imperial stout concentré"),
    fermentation: "Haute puis concentration par congélation",
    description: "Un imperial stout vieilli puis soumis à des cycles de congélation pour atteindre 32 % ABV. Le pingouin du nom n’est pas seulement une mascotte : le froid est littéralement l’outil qui pousse la bière au-delà de sa densité raisonnable.",
    histoire: `Tactical Nuclear Penguin apparaît à la fin des années 2000 pendant la course aux bières les plus fortes. BrewDog part d’un imperial stout, le fait vieillir, puis concentre l’alcool par congélation répétée. À 32 %, le produit devient un manifeste technique et marketing : une stout qui a été passée plusieurs fois au congélateur jusqu’à perdre toute envie de se comporter comme une pinte.

BrewDog a ensuite publié une recette DIY détaillée. On y trouve Extra Pale, Dark Crystal, Chocolate et Roasted Barley, des houblons Chinook, Galena et First Gold, du sucre muscovado, cranberry, jasmin, copeaux de chêne et une levure très tolérante à l’alcool.

Le détail le plus utile reste la logique du procédé : l’alcool n’est pas produit jusqu’à 32 % par la seule levure. La congélation concentre une bière déjà fermentée.`,
    chapitres: [
      chapter("Le congélateur comme alambic qui ne distille pas", `Lorsqu’une bière partiellement gèle, la phase solide est plus riche en eau tandis que le liquide restant se concentre en alcool et en composés dissous. Retirer la glace puis recommencer permet d’augmenter le titre. C’est la logique historique de l’Eisbock poussée jusqu’à une extrémité presque nucléaire.`),
      chapter("Sous l’apocalypse, une vraie architecture de stout", `La recette publiée montre que BrewDog ne s’est pas contenté de congeler une bière quelconque. Malts torréfiés, houblons, sucre, fruits, jasmin et chêne construisent une base suffisamment robuste pour survivre à la concentration, car celle-ci amplifie aussi les défauts et les déséquilibres.`)
    ],
    recette: makeRecipe({
      titre: "Le plan de vol du pingouin nucléaire",
      explicationProfil: "La recette rétrospective BrewDog documente la base et la logique de concentration, sans garantir que chaque détail industriel du lot commercial soit reproductible à domicile.",
      malts: ["Extra Pale.", "Dark Crystal.", "Chocolate Malt.", "Roasted Barley."],
      hops: ["Chinook.", "Galena.", "First Gold."],
      yeast: ["WLP099 Super High Gravity Ale Yeast dans la recette publiée."],
      extras: ["Sucre muscovado.", "Cranberry.", "Jasmin.", "Copeaux de chêne."],
      mash: "Recette BrewDog : empâtage autour de 65 °C pendant 75 minutes.",
      fermentation: "Fermentation haute d’un stout très dense avant la phase de concentration.",
      maturation: "Vieillissement puis cycles de congélation et retrait de glace afin de concentrer le liquide jusqu’au titre annoncé de 32 %.",
      target: "Un imperial stout conçu pour supporter la freeze concentration, et non une fermentation magique à 32 %."
    }),
    sources: [
      source("BrewDog Recipes", "Tactical Nuclear Penguin — DIY Dog recipe", "https://brewdogrecipes.com/recipes/tactical-nuclear-penguin", "source_producteur"),
      source("BeerTasting", "Tactical Nuclear Penguin", "https://www.beertasting.com/de/beers/tactical-nuclear-penguin", "source_secondaire")
    ]
  }),

  makeCard({
    code: "C10-021",
    nom: "Beithir Fire",
    nature: "Bière extrême / bière fortifiée revendiquée",
    aliases: ["Scottish Beithir Fire"],
    pays: "Écosse",
    origine: "88 Brewery",
    alcohol: exactMetric(75, "%"),
    color: textMetric("Non documentée avec précision"),
    fermentation: "Base fermentée puis fortification / traitement post-fermentation",
    description: "Beithir Fire revendique 75 % ABV à partir d’une base de barley ale et d’un assemblage avec un alcool écossais. Le dragon du nom est approprié : on n’est plus vraiment dans la bière de soif, et même la taxonomie commence à chercher un extincteur.",
    histoire: `88 Brewery commercialise Beithir Fire comme un produit extrême à 75 % ABV et l’a présenté comme candidat au titre de bière la plus forte. La description publique évoque une base de barley ale puis une intervention d’alcool écossais, avec filtration ou traitement supplémentaire selon les versions de la communication.

Cette construction rend le produit fascinant pour une collection de frontières : la base est brassicole, mais le titre final ne vient évidemment pas d’une fermentation classique. Certaines couvertures de presse parlent également de distillation ou de statut fiscal proche d’un spiritueux, signe que la catégorie « bière » devient ici autant une question réglementaire que sensorielle.

Le bon récit n’est donc pas « une levure écossaise a atteint 75 % ». Le bon récit est celui d’un objet hybride qui utilise le mot bière comme point de départ, puis le pousse jusqu’à ce que le dictionnaire fume.`,
    chapitres: [
      chapter("Soixante-quinze degrés ne sortent pas d’un fermenteur ordinaire", `Même les levures les plus tolérantes s’arrêtent bien avant ce niveau. Pour atteindre le chiffre revendiqué, il faut ajouter ou concentrer de l’alcool après la fermentation de la base. C’est cette opération qui transforme Beithir Fire en curiosité de frontière plutôt qu’en simple barley wine très musclé.`),
      chapter("La catégorie est une partie du spectacle", `Les records reposent souvent sur des définitions différentes : bière concentrée, bière fortifiée, spiritueux dérivé d’une bière, produit composite. Beithir Fire mérite sa place précisément parce qu’elle oblige à poser la question. La réponse n’est pas un slogan ; elle dépend du procédé et du cadre réglementaire.`)
    ],
    recette: makeRecipe({
      titre: "Une barley ale qui a traversé la douane des spiritueux",
      explicationProfil: "Base de barley ale annoncée, ensuite fortifiée/traitée pour atteindre 75 % ABV. Les proportions et paramètres exacts ne sont pas publiés.",
      malts: ["Base de barley ale ; malts et densités non publiés avec précision."],
      hops: ["Houblons non documentés avec assez de précision."],
      yeast: ["Levure fermentant la base de barley ale ; elle n’est pas responsable à elle seule du titre final."],
      extras: ["Spiritueux/alcool écossais ajouté ou intégré au procédé selon la description publique du producteur."],
      fermentation: "Fermentation de la base avant une phase de fortification ou de concentration distincte.",
      maturation: "Traitement post-fermentation et filtration revendiqués ; protocole complet non public.",
      target: "Présenter un produit brassicole hybride à 75 % sans transformer un assemblage extrême en miracle de fermentation."
    }),
    sources: [
      source("88 Brewery", "Beithir Fire — présentation producteur", "https://www.88brewery.com/", "source_producteur"),
      source("The Sun", "Beithir Fire and the strongest-beer claim", "https://www.thesun.co.uk/fabulous/30282896/worlds-strongest-beer-alcohol-taste/", "source_presse")
    ]
  })
];
