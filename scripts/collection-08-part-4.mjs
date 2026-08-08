import { entry, source, BA, BJCP } from "./collection-08-common.mjs";

const SCHLENKERLA = source(
  "Schlenkerla",
  "History of Rauchbier and Bamberg smoke-malt tradition",
  "https://www.schlenkerla.de/rauchbier/geschichte.html",
  "source_producteur_historique"
);

export default {
  "wood-and-barrel-aged-beer": entry({
    histoire: `Wood and Barrel Aged Beer est une catégorie de procédé : la bière acquiert une partie significative de son profil au contact du bois ou d'un fût ayant contenu un autre liquide. Le bois a longtemps été un simple matériau de stockage et de transport, mais le craft brewing moderne en a fait un outil aromatique volontaire.

Chêne neuf, fût de bourbon, whisky, rhum, vin, porto, sherry ou tequila produisent des résultats très différents. Le bois peut apporter vanille, noix de coco, épices, tanins et oxygénation lente ; l'ancien contenu apporte alcool, fruits, caramel ou notes oxydatives. La Brewers Association insiste sur l'équilibre entre bière de base et contribution du contenant.

Cette fiche exclut les sour beers lorsque l'acidité bactérienne devient constitutive : elles sont classées ailleurs.`,
    unique: false,
    malts: ["Recette du style de base ; les styles maltés ou forts supportent souvent mieux un bois intense, mais aucune base n'est obligatoire."],
    hops: ["Selon style de base ; houblon très aromatique peut se dégrader pendant de longues gardes."],
    yeast: ["Levure du style de base ; microflore non souhaitée à contrôler si le projet n'est pas sour/wild."],
    extras: ["Bois, copeaux, spirales ou fûts ; nature du bois, chauffe et liquide précédemment contenu doivent être documentés."],
    water: "Selon style de base.",
    mash: "Selon style de base.",
    boil: "Selon style de base.",
    fermentation: "Fermentation primaire complète avant élevage dans la majorité des projets.",
    maturation: "De quelques semaines à plusieurs années selon force, fût et surface de contact ; dégustations régulières indispensables.",
    target: "Une bière où le bois et/ou l'ancien contenu du fût enrichissent la base sans la transformer en simple extrait de barrique.",
    sources: [BA("Wood- and Barrel-Aged Beer"), BJCP("Wood-Aged Beer", "33/33B/specialty-wood-aged-beer")]
  }),

  "wood-and-barrel-aged-strong-beer": entry({
    histoire: `Wood and Barrel Aged Strong Beer applique l'élevage sous bois à des bières déjà puissantes. Le couple alcool + bois est historiquement plausible — de nombreuses bières fortes ont voyagé ou vieilli en tonneaux — mais la catégorie moderne de concours est surtout issue du craft brewing et de la disponibilité de fûts de spiritueux.

L'alcool extrait efficacement vanilline, lactones, tanins et composés de l'ancien contenu. Une Imperial Stout, Barley Wine, Strong Ale ou Doppelbock peut donc gagner énormément de complexité, mais aussi devenir brûlante, boisée ou sucrée si le vieillissement est mal maîtrisé.

La réussite repose sur l'intégration : le style de base doit rester identifiable, même après plusieurs mois ou années de garde.`,
    unique: false,
    malts: ["Base forte au choix : barley wine, imperial porter/stout, strong ale, bock ou autre."],
    hops: ["Houblonnage adapté à la base ; prévoir son atténuation aromatique pendant la garde."],
    yeast: ["Levure robuste et tolérante à l'alcool pour fermentation primaire complète."],
    extras: ["Fûts de whisky, bourbon, rhum, vin ou autres ; bois neuf ou alternatif possible."],
    water: "Selon style de base, avec minéralité évitant d'accentuer chaleur et tanins.",
    mash: "Empâtage équilibrant richesse et fermentescibilité ; éviter une densité finale excessive avant vieillissement.",
    boil: "Ébullition souvent longue pour concentration dans les strong beers ; houblonnage calibré sur la garde.",
    fermentation: "Pitch massif, oxygénation et nutriments adaptés aux fortes densités.",
    maturation: "Élevage long en bois, puis éventuel assemblage entre fûts pour ajuster alcool, tanins et douceur.",
    target: "Une bière forte profondément intégrée au bois, chaleureuse mais non brûlante, complexe sans être dominée par vanille ou spiritueux.",
    sources: [BA("Wood- and Barrel-Aged Strong Beer"), BJCP("Specialty Wood-Aged Beer", "33/33B/specialty-wood-aged-beer")]
  }),

  "wood-and-barrel-aged-strong-stout": entry({
    histoire: `Barrel-Aged Strong Stout est devenue l'une des signatures du craft américain : une Imperial Stout riche et torréfiée élevée dans des fûts, souvent de bourbon. Ce n'est pas un style ancien indépendant, mais la rencontre moderne entre stout fort et culture américaine du whiskey barrel.

Les composés du chêne et du bourbon — vanille, noix de coco, caramel, alcool, épices — se marient naturellement avec cacao, café et fruits noirs d'une forte stout. Le risque est de perdre l'équilibre sous la sucrosité, le bois ou l'alcool. Les versions les plus abouties utilisent assemblage de plusieurs fûts et longues périodes de repos.

La fiche doit donc être lue comme une sous-catégorie de procédé appliquée à une strong stout, pas comme une recette universelle d'Imperial Stout.`,
    unique: false,
    malts: ["Base Imperial/Strong Stout : pale malt, roasted barley, chocolate, black malt et malts caramel selon profil."],
    hops: ["Amertume suffisante pour équilibrer densité et vieillissement ; aromatique secondaire."],
    yeast: ["Levure ale tolérante à l'alcool et fortement atténuative."],
    extras: ["Fûts de bourbon, whiskey, rhum ou vin ; adjuncts éventuels seulement s'ils sont déclarés."],
    water: "Alcalinité adaptée aux malts torréfiés ; chlorures et sulfates équilibrés pour ne pas durcir le bois.",
    mash: "Empâtage riche mais avec assez de fermentescibilité pour éviter le sirop après barrique.",
    boil: "Ébullition soutenue ; houblonnage structurel robuste.",
    fermentation: "Fermentation complète avant transfert, avec gestion de la chaleur alcoolique.",
    maturation: "Plusieurs mois à plus d'un an en fût selon intensité ; assemblage fréquent pour harmoniser les lots.",
    target: "Une strong stout profonde où torréfaction, chocolat, alcool et fût se fondent en un ensemble ample, jamais boisé ou sucré à l'excès.",
    sources: [BA("Wood- and Barrel-Aged Strong Stout"), BJCP("Wood-Aged Beer", "33/33B/specialty-wood-aged-beer")]
  }),

  "wood-and-barrel-aged-dessert-pastry-beer": entry({
    histoire: `Wood and Barrel Aged Dessert/Pastry Beer est une catégorie très récente, née de la rencontre de deux tendances craft : bières fortes imitant desserts/confiseries et élevage en fûts de spiritueux. Elle ne possède aucune généalogie historique autonome et doit être présentée franchement comme une construction contemporaine.

Les bases sont souvent des stouts très denses enrichies de cacao, café, vanille, coco, noix, érable, fruits ou lactose, puis élevées en bourbon/whiskey barrels. Le défi est considérable : chaque couche — malt, sucre, alcool, dessert, bois — ajoute intensité et peut faire basculer la bière dans la saturation.

La Brewers Association sépare les versions barrel-aged des Dessert/Pastry Beers non élevées sous bois, ce qui confirme que le fût constitue ici un procédé distinctif majeur.`,
    unique: false,
    malts: ["Base forte sombre, souvent stout ou porter, avec malts caramel et torréfiés."],
    hops: ["Houblonnage faible à modéré, principalement pour contenir la sucrosité."],
    yeast: ["Levure ale tolérante à l'alcool."],
    extras: ["Cacao, café, vanille, coco, fruits, noix, érable, lactose ou autres ingrédients dessert ; fût de spiritueux ou de vin."],
    water: "Ronde et adaptée aux malts sombres, sans excès minéral.",
    mash: "Empâtage souvent riche, mais la fermentescibilité doit empêcher une finale totalement sirupeuse.",
    boil: "Sucres et ingrédients stables peuvent être ajoutés au boil ; aromatiques fragiles plutôt après fermentation.",
    fermentation: "Fermentation très robuste et complète avant barrique.",
    maturation: "Élevage en fût puis ajout/ajustement éventuel des ingrédients dessert ; assemblage fortement recommandé.",
    target: "Une bière dessert barrel-aged opulente mais structurée, où base, ingrédients gourmands et fût restent chacun identifiables sans saturation.",
    sources: [BA("Wood- and Barrel-Aged Dessert or Pastry Beer"), BA("Dessert or Pastry Beer")]
  }),

  "aged-beer": entry({
    histoire: `Aged Beer est une catégorie de maturation prolongée, non un style de base. La Brewers Association l'utilise pour des bières vieillies plus d'un an dans des contenants non boisés, afin que le temps lui-même devienne une composante sensorielle mesurable.

Le vieillissement transforme la bière : l'aromatique de houblon décline, les composés de malt et d'alcool évoluent, des notes de fruits secs, sherry, miel, cuir ou porto peuvent apparaître, tandis qu'une oxydation excessive donne carton, sauce soja ou lourdeur. Toutes les bières ne vieillissent donc pas positivement.

Les fortes bières, profils maltés, torréfiés, fumés ou complexes sont généralement de meilleurs candidats que les lagers légères ou IPA très aromatiques. Le stockage — température, oxygène, contenant — compte autant que la recette.`,
    unique: false,
    malts: ["Style de base au choix ; les bières fortes et maltées supportent généralement mieux une longue garde."],
    hops: ["Houblons selon base, en anticipant la perte progressive d'arôme et l'évolution de l'amertume."],
    yeast: ["Levure du style de base ; levure résiduelle peut contribuer à l'évolution en bouteille."],
    extras: ["Aucun ingrédient obligatoire ; le temps et les conditions de stockage sont le facteur distinctif."],
    water: "Selon style de base.",
    mash: "Selon style de base.",
    boil: "Selon style de base.",
    fermentation: "Fermentation complète et saine avant vieillissement ; éviter d'enfermer des défauts sous prétexte de garde.",
    maturation: "Plus d'un an dans le cadre BA, en bouteille, canette, keg ou autre récipient non boisé ; température stable et oxygène limité.",
    target: "Une bière dont l'âge apporte profondeur et intégration sans oxydation papery, sauce soja ou disparition complète du style initial.",
    sources: [BA("Aged Beer")]
  }),

  "rauchbier-smoke-beer": entry({
    histoire: `Rauchbier signifie bière fumée, mais son importance historique dépasse le seul Bamberg : avant l'invention et la diffusion des séchoirs à malt chauffés indirectement, le malt séché au-dessus d'un feu pouvait naturellement prendre un caractère fumé. La généralisation des malts non fumés à l'époque moderne a transformé cette ancienne réalité technique en spécialité.

Bamberg est le grand lieu de continuité. Schlenkerla rappelle qu'une installation de séchage sans fumée est brevetée en 1635 et que la plupart des régions abandonnent progressivement le goût de fumée, tandis que certaines brasseries bambergiennes conservent la chauffe au feu direct. Le récit populaire d'une brasserie incendiée dont le malt fumé aurait été apprécié est explicitement présenté par Schlenkerla comme une légende.

Aujourd'hui, « Smoke Beer » est une famille : Märzen Rauchbier, Helles fumée, Weizen fumée, Bock fumée ou autres styles. La fumée doit venir du malt ou du procédé, pas d'un défaut phénolique de fermentation.`,
    unique: false,
    explication: "Famille transversale : toute base peut être fumée. La recette dépend du style de base et du bois/malt fumé utilisé.",
    malts: ["Malt fumé au hêtre, chêne ou autre bois adapté, associé aux malts du style de base."],
    hops: ["Selon style de base ; généralement secondaires lorsque la fumée est importante."],
    yeast: ["Levure du style de base ; éviter phénols de levure qui seraient confondus avec la fumée."],
    water: "Selon base.",
    mash: "Selon style de base ; proportion de malt fumé déterminée par son intensité réelle.",
    boil: "Selon base ; la fumée provient surtout du malt, non d'un ajout d'arôme artificiel.",
    fermentation: "Propre, afin que la fumée reste lisible et non médicinale.",
    maturation: "Selon base ; lagering fréquent pour les Rauchbiers bambergiennes.",
    target: "Une bière fumée harmonieuse où feu de bois et style de base restent équilibrés, sans cendre, plastique ni bacon agressif.",
    sources: [BA("Smoke Beer"), BJCP("Smoked Beer", "32"), SCHLENKERLA]
  }),

  "weiss-rauchbier": entry({
    histoire: `Weiss Rauchbier combine le profil fermentaire d'une Weissbier bavaroise avec du malt fumé. Ce n'est pas une grande lignée historique autonome comparable à la Märzen Rauchbier de Bamberg ; c'est plutôt une hybridation moderne et logique entre deux traditions allemandes bien établies.

La difficulté est sensorielle : banane, girofle, blé et fumée occupent tous beaucoup d'espace aromatique. Une fumée trop phénolique peut se confondre avec le girofle de la levure ou donner une impression médicinale. Les meilleures versions laissent la texture de blé et la fermentation Weizen guider la bière, la fumée jouant un rôle complémentaire.

La catégorie doit donc être traitée comme une Weissbier fumée et non comme une smoke beer générique à laquelle on ajouterait artificiellement des esters.`,
    malts: ["Malt de blé important ; Pilsner et/ou Munich ; fraction de malt fumé au hêtre ou autre bois propre."],
    hops: ["Houblons allemands faibles, comme dans une Weissbier classique."],
    yeast: ["Levure Weizen produisant esters banane et phénols girofle de façon contrôlée."],
    water: "Douce à modérément minérale.",
    mash: "Paliers de blé et éventuellement ferulic rest selon profil de levure ; proportion de fumé ajustée avec prudence.",
    boil: "Houblonnage faible ; aucune épice nécessaire.",
    fermentation: "Fermentation haute typique Weizen, contrôlant le ratio banane/girofle afin que la fumée reste intégrée.",
    maturation: "Courte, avec forte carbonatation et consommation relativement fraîche.",
    target: "Une Weissbier mousseuse et expressive où blé, banane/girofle et fumée douce se superposent sans caractère médicinal.",
    sources: [BA("Smoke Beer — Weissbier base"), BJCP("Specialty Smoked Beer", "32/32B/specialty-smoked-beer"), SCHLENKERLA]
  }),

  "helles-rauchbier": entry({
    histoire: `Helles Rauchbier applique la fumée à une lager pâle de type Helles. Elle illustre bien la différence entre tradition et catégorie : Bamberg possède une longue culture de malt fumé, mais la Helles fumée est une déclinaison plus récente que la Märzen Rauchbier classique.

Sur une base très pâle, la fumée est davantage exposée : elle ne peut pas se cacher derrière caramel ou Munich malt profond. Le brasseur doit donc choisir un malt fumé propre et doser précisément sa contribution. Le résultat doit rester une Helles — douce, céréalière, peu amère et nette — avec un voile de feu de bois.

Une coloration trop sombre ou un goût de charcuterie intense signale que la base ou la fumée ont pris le dessus sur le concept.`,
    malts: ["Pilsner majoritaire ; petite à moyenne proportion de malt fumé clair, selon intensité."],
    hops: ["Houblons nobles allemands bas à modérés."],
    yeast: ["Levure lager propre."],
    water: "Douce à modérément minérale, proche d'une Helles.",
    mash: "Empâtage favorisant une douceur de malt légère et une bonne atténuation.",
    boil: "Houblonnage discret ; fumée issue du malt."],
    fermentation: "Fermentation basse propre suivie d'un lagering complet.",
    maturation: "Garde froide de plusieurs semaines.",
    target: "Une Helles pâle, douce et nette, traversée par une fumée élégante sans lourdeur, goudron ni caramel excessif.",
    sources: [BA("Smoke Beer — Helles base"), BJCP("Specialty Smoked Beer", "32/32B/specialty-smoked-beer"), SCHLENKERLA]
  }),

  "marzen-rauchbier": entry({
    histoire: `Märzen Rauchbier est le cœur classique de la tradition fumée de Bamberg. Sa base de Märzen ambrée — malt Munich, pain grillé, corps moyen — absorbe naturellement le caractère du malt fumé au hêtre. C'est cette combinaison, incarnée notamment par Aecht Schlenkerla Rauchbier Märzen, qui a façonné l'image internationale du Rauchbier moderne.

La fumée n'est pas un ajout aromatique : elle vient du malt séché sur feu, procédé que certaines malteries/brasseries de Bamberg ont conservé après la diffusion des séchoirs sans fumée. Schlenkerla insiste sur cette continuité technique et réfute la légende d'un incendie accidentel à l'origine du style.

Le bon équilibre reste crucial. Le malt Munich doit encore parler : croûte de pain, toast et douceur céréalière soutiennent la fumée au lieu d'être recouverts par elle.`,
    malts: ["Malt Munich et Vienna ; proportion importante de Rauchmalz fumé au hêtre, parfois avec Pilsner."],
    hops: ["Houblons nobles allemands faibles à modérés, essentiellement pour l'équilibre."],
    yeast: ["Levure lager propre."],
    water: "Modérément minérale, compatible avec Märzen et fermentation lager.",
    mash: "Décoction ou empâtage multi-palier possible pour renforcer profondeur maltée."],
    boil: "Ébullition complète, houblonnage discret à modéré."],
    fermentation: "Fermentation basse propre."],
    maturation: "Lagering de plusieurs semaines pour fondre malt et fumée."],
    target: "Une Märzen ambrée, pain grillé et malt Munich, avec fumée de hêtre franche mais intégrée, jamais cendrée ou artificielle.",
    sources: [BJCP("Rauchbier", "6/6B/rauchbier"), BA("Bamberg-Style Märzen Rauchbier"), SCHLENKERLA]
  }),

  "bock-rauchbier": entry({
    histoire: `Bock Rauchbier associe la puissance maltée d'une Bock à la tradition du malt fumé. Cette combinaison existe dans la culture bambergienne moderne mais ne doit pas être présentée comme une catégorie aussi ancienne et autonome que Bock ou Rauchbier pris séparément.

La base apporte Munich malt, pain brun, fruits secs et alcool ; la fumée ajoute bois, cheminée et parfois une impression de viande fumée lorsqu'elle est trop poussée. Plus la bière est forte, plus la maturation devient importante pour éviter que chaleur alcoolique et phénols fumés s'additionnent de manière agressive.

La logique de recette est donc celle d'une Bock authentique enrichie par Rauchmalz, pas celle d'une bière fumée arbitrairement renforcée en alcool.`,
    malts: ["Munich et Vienna majoritaires ; Rauchmalz fumé au hêtre en proportion adaptée ; caramel éventuel avec retenue."],
    hops: ["Houblons allemands faibles à modérés, balance vers le malt."],
    yeast: ["Levure lager propre et tolérante à une densité élevée."],
    water: "Modérément minérale, favorisant profondeur maltée sans dureté."],
    mash: "Empâtage riche, décoction possible ; maintenir assez de fermentescibilité pour éviter lourdeur."],
    boil: "Ébullition soutenue, houblonnage discret."],
    fermentation: "Fermentation basse avec pitch important et température maîtrisée."],
    maturation: "Long lagering pour intégrer alcool, malt et fumée."],
    target: "Une Bock fumée profonde et chaleureuse, riche en pain brun et malt Munich, avec fumée fondue plutôt que dominante.",
    sources: [BA("Bock Rauchbier / Smoke Beer"), BJCP("Specialty Smoked Beer", "32/32B/specialty-smoked-beer"), SCHLENKERLA]
  })
};
