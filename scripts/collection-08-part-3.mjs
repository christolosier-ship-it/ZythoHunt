import { entry, source, BA, BJCP } from "./collection-08-common.mjs";

export default {
  "green-tea-beer": entry({
    histoire: `Green Tea Beer est une branche plus précise de Tea Beer, née de l'expérimentation moderne autour des thés verts japonais, chinois et coréens. Sencha, gyokuro, matcha ou jasmin n'apportent pas les mêmes composés : végétal frais, umami, algue, herbe coupée, agrume, fleurs ou amertume tannique.

La difficulté technique vient de la sensibilité du thé vert à la température et à l'oxydation. Une extraction trop chaude tire rapidement astringence et amertume ; le matcha ajoute en plus matière et couleur. Les meilleures versions utilisent donc infusion séparée, ajout au whirlpool très modéré ou cold steep après fermentation.

Ce n'est pas un style historique japonais traditionnel mais une catégorie craft construite autour d'un ingrédient culturellement fort.`,
    unique: false,
    malts: ["Base généralement pâle : Pilsner, wheat, blonde ale ou lager légère pour préserver la délicatesse du thé."],
    hops: ["Houblons faibles à modérés, souvent floraux ou agrumés, sans amertume agressive."],
    yeast: ["Levure propre ou légèrement fruitée selon base."],
    extras: ["Sencha, gyokuro, matcha, thé au jasmin ou autre thé vert clairement déclaré."],
    water: "Eau douce, faible en alcalinité, adaptée à l'infusion du thé vert.",
    mash: "Selon style de base.",
    boil: "Éviter une longue ébullition du thé ; privilégier whirlpool frais, infusion séparée ou ajout à froid.",
    fermentation: "Selon base ; ajout du thé souvent après fermentation pour protéger les arômes.",
    maturation: "Courte et sans oxygène, le thé vert s'oxyde vite.",
    target: "Une bière fraîche où thé vert, végétal et umami sont nets mais jamais râpeux ni soupe d'algues.",
    sources: [BA("Green Tea Beer / Tea Beer")]
  }),

  "chocolate-beer": entry({
    histoire: `Chocolate Beer est une catégorie transversale moderne qui peut utiliser cacao réel ou simplement rechercher une expression chocolatée renforcée. Le chocolat et le cacao entrent dans le brassage craft sous de nombreuses formes : poudre, nibs torréfiés, cacao maigre, chocolat, extrait ou teinture. Les porters et stouts constituent des bases naturelles parce que leurs malts torréfiés possèdent déjà des notes de cacao, mais des bières pâles existent aussi.

La principale difficulté est technique : matière grasse, amertume du cacao, alcalinité, extraction et microbiologie. Les nibs ajoutés en maturation donnent souvent un profil plus aromatique et sec qu'une grande quantité de chocolat sucré.

La catégorie ne doit pas être confondue avec Dessert/Pastry Beer : une Chocolate Beer peut être sèche et amère ; le chocolat est l'ingrédient central, pas nécessairement la sucrosité.`,
    unique: false,
    malts: ["Style de base libre ; chocolate malt, pale chocolate ou malts torréfiés peuvent soutenir le cacao sans être obligatoires."],
    hops: ["Houblonnage ajusté à l'amertume naturelle du cacao."],
    yeast: ["Levure du style de base."],
    extras: ["Nibs de cacao, poudre, chocolat ou extrait ; vanille possible seulement si déclarée comme complément."],
    water: "Alcalinité adaptée aux malts sombres et au cacao ; éviter astringence minérale.",
    mash: "Selon base ; cacao rarement nécessaire au mash.",
    boil: "Cacao possible en fin de boil, mais ajout en maturation fréquent pour préserver l'arôme et limiter les matières grasses.",
    fermentation: "Selon style de base.",
    maturation: "Contact avec nibs contrôlé par dégustation ; protection contre oxydation.",
    target: "Une bière où cacao et chocolat sont authentiques et intégrés, du cacao sec au chocolat riche selon la base, sans gras ni arôme artificiel.",
    sources: [BA("Chocolate or Cocoa Beer"), BJCP("Spice, Herb, or Vegetable Beer", "30/30A/spice-herb-or-vegetable-beer")]
  }),

  "coffee-beer": entry({
    histoire: `Coffee Beer est devenue une grande famille du craft brewing parce que café et malts torréfiés partagent naturellement des familles aromatiques : cacao, toast, noisette, caramel et torréfaction. Mais la catégorie ne se limite pas aux stouts : cold brew blondes, cream ales et lagers au café ont démontré que la couleur de la bière n'impose pas celle de l'arôme.

Le choix du café est aussi important que celui du houblon : origine, variété, torréfaction, date de torréfaction et méthode d'extraction changent radicalement la bière. Espresso ajouté chaud peut extraire amertume et huile ; cold brew ou grains entiers en maturation donnent souvent un profil plus doux et aromatique.

La Brewers Association traite Coffee Beer comme catégorie d'ingrédient. Elle peut être sèche, forte, légère ou sucrée ; le café doit être perceptible et intégré au style de base.`,
    unique: false,
    malts: ["Base libre ; stouts/porters fréquents mais lagers et ales pâles également possibles."],
    hops: ["Houblonnage ajusté pour éviter de cumuler amertume du café et du houblon."],
    yeast: ["Levure du style de base."],
    extras: ["Café en grains, moulu, cold brew, espresso ou extrait ; origine et torréfaction idéalement documentées."],
    water: "Eau équilibrée, avec attention à l'alcalinité et à l'extraction du café.",
    mash: "Selon base.",
    boil: "Le café est généralement mieux ajouté hors ébullition afin de limiter amertume et perte d'arômes volatils.",
    fermentation: "Selon style de base.",
    maturation: "Cold brew ou grains entiers peuvent être dosés après fermentation ; contact court et dégusté régulièrement.",
    target: "Une bière au café nette, aromatique et intégrée, où torréfaction, fruit du café et base brassicole restent lisibles.",
    sources: [BA("Coffee Beer")]
  }),

  "honey-beer": entry({
    histoire: `Honey Beer est une catégorie transversale qui couvre l'usage du miel dans une bière, mais elle doit être distinguée de l'hydromel : la bière reste structurée par le malt et le brassage. Le miel a longtemps été disponible comme sucre fermentescible et aromatique, mais son emploi moderne va de quelques pourcents pour assécher une bière à des dosages importants destinés à conserver un caractère floral ou variétal.

Le paradoxe du miel est que ses sucres fermentent très bien : ajouté tôt, il peut augmenter l'alcool tout en laissant moins d'arôme de miel que prévu. Les miels délicats sont donc souvent ajoutés tard ou après fermentation primaire, avec gestion sanitaire soigneuse.

La variété compte : acacia, châtaignier, sarrasin, bruyère ou fleurs sauvages produisent des profils extrêmement différents.`,
    unique: false,
    malts: ["Base du style choisi ; souvent volontairement simple pour mettre en valeur le miel."],
    hops: ["Houblonnage cohérent avec le style, généralement modéré si le miel est subtil."],
    yeast: ["Levure du style de base, avec capacité d'atténuation suffisante pour la charge en sucres simples."],
    extras: ["Miel monofloral ou toutes fleurs ; type et moment d'ajout déterminants."],
    water: "Selon base, sans minéralité excessive qui écraserait les notes florales.",
    mash: "Selon base ; le miel ne nécessite pas de conversion enzymatique.",
    boil: "Ajout en ébullition pour fermentescibilité maximale mais moins d'arôme ; ajout tardif ou post-fermentation pour préserver les volatils.",
    fermentation: "Prévoir une attenuation accrue et une remontée d'activité lors d'un ajout tardif de miel.",
    maturation: "Repos suffisant pour fondre alcool et notes florales.",
    target: "Une bière dont le miel est identifiable par ses notes florales, herbacées ou gourmandes sans basculer dans l'hydromel ni le sucre brut.",
    sources: [BA("Honey Beer"), BJCP("Alternative Sugar Beer", "31/31B/alternative-sugar-beer")]
  }),

  "alternative-grain-beer": entry({
    histoire: `Alternative Grain Beer est une catégorie moderne conçue pour les bières où une céréale inhabituelle apporte un caractère sensoriel significatif. Le BJCP cite notamment seigle, avoine, sarrasin, épeautre, millet, sorgho ou riz, employés en complément ou parfois comme base complète dans des bières sans gluten.

Cette catégorie ne signifie pas que ces céréales sont nouvelles dans l'histoire brassicole — beaucoup sont au contraire très anciennes. Ce qui est moderne est le cadre de classification transversal, indépendant d'une tradition géographique particulière.

La recette doit donc être expliquée à partir de la céréale choisie : protéines, bêta-glucanes, absence de gluten, pouvoir diastasique, gélatinisation et texture peuvent imposer des procédés très différents.`,
    unique: false,
    malts: ["Céréale alternative déclarée : seigle, avoine, sarrasin, épeautre, millet, sorgho, riz ou autre ; malt d'orge possible selon concept."],
    hops: ["Selon style de base."],
    yeast: ["Selon style de base ; enzymes ou nutriments supplémentaires possibles pour grists non conventionnels."],
    extras: ["Enzymes de brassage possibles lorsque la céréale apporte peu ou pas de pouvoir diastasique."],
    water: "Adaptée à la céréale et au style ; pH de mash à surveiller particulièrement avec matières premières atypiques.",
    mash: "Paliers, cereal mash, enzymes ou repos bêta-glucanes selon la céréale ; filtration parfois difficile.",
    fermentation: "Selon base, avec attention aux nutriments du moût.",
    maturation: "Selon style de base.",
    target: "Une bière clairement marquée par la céréale alternative, mais techniquement propre et toujours lisible comme bière.",
    sources: [BJCP("Alternative Grain Beer", "31/31A/alternative-grain-beer"), BA("Alternative Grain Beer")]
  }),

  "alternative-sugar-beer": entry({
    histoire: `Alternative Sugar Beer est un cadre de concours contemporain pour les bières dont un sucre ou édulcorant distinctif contribue réellement au goût. Le BJCP englobe miel, cassonade, sucre inverti, mélasse, treacle, sirop d'érable, sorgho, lactose, polyols et autres édulcorants.

Le terme « sucre » ne signifie pas nécessairement bière sucrée. Un sucre très fermentescible peut au contraire assécher le corps, tandis que lactose ou certains édulcorants laissent une douceur résiduelle. Mélasse, érable et sucres bruns apportent également couleur et arômes propres.

La catégorie est donc une architecture de recette et non un style historique. Le sucre déclaré doit laisser une empreinte identifiable et équilibrée dans la bière finale.`,
    unique: false,
    malts: ["Grist du style de base."],
    hops: ["Selon style de base, ajusté à la douceur ou aux arômes du sucre utilisé."],
    yeast: ["Levure adaptée à la base et à la charge fermentescible supplémentaire."],
    extras: ["Mélasse, érable, sucre inverti, cassonade, lactose, sorgho ou autre sucre/édulcorant déclaré."],
    water: "Selon base.",
    mash: "Selon base ; les sucres simples sont généralement ajoutés hors mash.",
    boil: "Ajout au boil, whirlpool ou fermentation selon volatilité et risque de caramélisation.",
    fermentation: "Calculer l'effet réel du sucre sur densité finale, alcool et osmolarité.",
    maturation: "Selon base ; les fortes bières au sucre peuvent nécessiter une garde plus longue.",
    target: "Une bière où le sucre choisi apporte un caractère reconnaissable et harmonieux, qu'il augmente la sécheresse ou la douceur.",
    sources: [BJCP("Alternative Sugar Beer", "31/31B/alternative-sugar-beer"), BA("Alternative Sugar Beer")]
  }),

  "autumn-seasonal-beer": entry({
    histoire: `Autumn Seasonal Beer est une catégorie moderne d'ambiance plutôt qu'une tradition unique. Elle rassemble les bières qui évoquent récolte, temps frais et saison automnale par la couleur, le malt, les courges, les sucres bruns et les épices. Aux États-Unis, la popularité des pumpkin ales a fortement modelé cette catégorie, mais toutes les Autumn Seasonal ne contiennent pas de citrouille.

Le BJCP décrit surtout une bière maltée, épicée et cohérente, souvent ambrée à brune, avec houblon discret. L'objectif est de créer une impression de saison sans laisser une seule épice dominer.

La recette reste entièrement dépendante du concept déclaré : bière à la courge, harvest ale, brown ale épicée ou autre.`,
    unique: false,
    malts: ["Base souvent ambrée à brune : pale, Munich, Vienna, crystal, biscuit ou malts toastés."],
    hops: ["Houblonnage généralement discret."],
    yeast: ["Levure propre à légèrement fruitée selon base."],
    extras: ["Courge, cannelle, muscade, gingembre, sucre brun, érable ou autres ingrédients évoquant l'automne."],
    water: "Équilibrée, soutenant malt et épices sans dureté.",
    mash: "Empâtage moyen à chaud pour une texture légèrement riche si le concept le demande.",
    boil: "Épices tardives et dosage prudent ; courges cuites possibles au mash ou au boil.",
    fermentation: "Selon base, avec fermentation suffisamment complète pour éviter une lourdeur collante.",
    maturation: "Quelques semaines pour fondre malt et épices.",
    target: "Une bière automnale maltée et harmonieuse évoquant la récolte et les épices chaudes sans devenir une bougie parfumée.",
    sources: [BJCP("Autumn Seasonal Beer", "30/30B/autumn-seasonal-beer"), BA("Autumn Seasonal Beer")]
  }),

  "winter-seasonal-beer": entry({
    histoire: `Winter Seasonal Beer, Christmas Ale ou Holiday Beer est une catégorie moderne mais nourrie de traditions commerciales plus anciennes de bières fortes brassées pour l'hiver. Les versions actuelles associent souvent base ambrée ou sombre, degré élevé, fruits secs, sucres foncés et épices rappelant pâtisseries et fêtes de fin d'année.

Le BJCP ne prescrit pas un mélange d'épices : il demande surtout que la bière évoque clairement la saison froide et que malt, alcool, fruits et épices soient intégrés. Certaines grandes winter warmers britanniques ne sont presque pas épicées ; d'autres bières de Noël belges ou américaines le sont fortement.

La fiche doit donc rester transversale et ne pas réduire toute Winter Seasonal à cannelle-girofle.`,
    unique: false,
    malts: ["Base souvent ambrée à noire, maltée et relativement forte ; Munich, crystal, malts toastés ou torréfiés selon concept."],
    hops: ["Houblonnage faible à modéré, généralement secondaire."],
    yeast: ["Levure du style de base, parfois fruitée dans les versions fortes."],
    extras: ["Épices, fruits secs, mélasse, miel, sucre brun ou écorces selon concept ; aucun ingrédient universel."],
    water: "Selon base, généralement ronde plutôt que fortement sulfatée.",
    mash: "Empâtage donnant assez de corps pour la chaleur hivernale sans sucrosité excessive.",
    boil: "Épices et sucres ajoutés de façon contrôlée ; ébullition soutenue pour les strong ales.",
    fermentation: "Pitch et oxygénation adaptés aux densités élevées ; température maîtrisée.",
    maturation: "Plusieurs semaines à plusieurs mois selon force, afin d'intégrer alcool et épices.",
    target: "Une bière d'hiver riche, chaleureuse et cohérente, festive sans excès d'épices ni alcool brûlant.",
    sources: [BJCP("Winter Seasonal Beer", "30/30C/winter-seasonal-beer"), BA("Winter Seasonal Beer")]
  }),

  "ginjo-beer-sake-yeast-beer": entry({
    histoire: `Ginjo Beer / Sake-Yeast Beer est une catégorie hybride contemporaine reconnue par la Brewers Association. Elle ne prétend pas être du saké : la boisson reste une bière, mais utilise une levure de saké et/ou des enzymes issues du koji afin de produire des caractères inspirés de la fermentation japonaise.

Les souches de saké peuvent donner des esters fruités rappelant pomme, poire ou melon et une fermentation très atténuée. Le koji, grâce à ses enzymes amylolytiques, peut modifier profondément la disponibilité des sucres lorsqu'il est utilisé sur du riz ou d'autres céréales. Certaines versions recherchent aussi une légère impression umami ou terreuse.

La catégorie est expérimentale et très ouverte : base lager, ale, rice beer ou strong beer. Elle doit être décrite par son procédé réel, pas uniquement par un marketing « Japanese-style ».`,
    unique: false,
    malts: ["Malt d'orge selon base ; riz fréquent mais non obligatoire."],
    hops: ["Houblonnage bas à modéré, en harmonie avec le caractère sake-like."],
    yeast: ["Levure de saké et/ou levure de bière selon co-fermentation ; tolérance alcool et nutrition à surveiller."],
    extras: ["Koji ou enzymes de koji possibles ; riz poli ou autres substrats selon projet."],
    water: "Plutôt douce à modérée pour préserver finesse et fermentation.",
    mash: "Selon base ; si koji utilisé, tenir compte de son activité enzymatique et des températures de saccharification.",
    boil: "Houblonnage retenu ; gestion du riz adaptée à sa gélatinisation.",
    fermentation: "Fermentation parfois plus lente ou plus froide, selon souche de saké ; gestion attentive de l'alcool et des nutriments.",
    maturation: "Conditionnement propre, souvent avec carbonatation élevée dans le cadre BA.",
    target: "Une bière clairement marquée par des caractères de levure/koji rappelant le saké, fruités et parfois umami, mais restant structurée comme une bière.",
    sources: [BA("Ginjo Beer or Sake-Yeast Beer"), source("World Beer Cup", "2026 Experimental Beer — Ginjo Beer or Sake-Yeast Beer", "https://styles.brewersassociation.org/export/export.php?event=wbc&year=2026", "guide_de_style", "2026")]
  }),

  "fresh-hop-beer": entry({
    histoire: `Fresh Hop Beer est une bière saisonnière du moment de la récolte. Contrairement aux bières utilisant des pellets stockés, elle met en avant des cônes fraîchement récoltés ou des houblons séchés très récemment. Le mouvement est particulièrement visible dans le Nord-Ouest américain, près des houblonnières, où la distance entre champ et cuve peut se compter en heures.

La Brewers Association définit les fresh hop beers autour de houblons récoltés très récemment, tandis que Sierra Nevada distingue « wet hops » non séchés utilisés presque immédiatement et « fresh hops » séchés mais employés très vite. La brasserie lance Celebration en 1981 et son Northern Hemisphere Harvest Wet Hop IPA en 1996, deux repères importants de la culture moderne du houblon de récolte.

Le caractère végétal, chlorophyllien ou herbe fraîche est acceptable s'il reste harmonieux. Ces bières perdent rapidement leur singularité : la fraîcheur fait partie du style.`,
    unique: false,
    malts: ["Base pale ale, IPA, lager ou autre, souvent simple pour mettre en avant le houblon."],
    hops: ["Cônes fraîchement récoltés, non séchés ou très récemment séchés ; variété et délai récolte-brassage déterminants."],
    yeast: ["Levure du style de base, généralement propre ou modérément fruitée."],
    extras: [],
    water: "Souvent sulfates modérés à élevés pour les bases houblonnées, mais adaptée à la variété et au style.",
    mash: "Selon style de base.",
    boil: "Ajouts massifs possibles en kettle et whirlpool ; le volume d'eau contenu dans les wet hops et leur absorption doivent être anticipés.",
    fermentation: "Selon base ; dry hopping frais possible mais gestion de l'oxygène essentielle.",
    maturation: "Très courte : conditionner et consommer rapidement pour préserver les composés de récolte.",
    target: "Une bière intensément fraîche, verte et aromatique, exprimant le houblon de récolte sans végétal cru excessif.",
    sources: [BA("Fresh Hop Beer"), source("Sierra Nevada Brewing Co.", "Wet hops and fresh hops — harvest guide", "https://sierranevada.com/blog/our-beer/your-harvest-guide-wet-hops-and-fresh-hops", "source_producteur_technique")]
  })
};
