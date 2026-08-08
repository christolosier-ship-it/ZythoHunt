import {
  entry,
  source,
  DGCCRF_BEER,
  TRAPPIST,
  TRAPPIST_FAQ,
  BRASSEURS_FRANCE,
  CRAFT_FRANCE,
  BA,
  BJCP
} from "./collection-09-common.mjs";

const ZYTHOS_ABBEY = source(
  "Zythos",
  "Trappist or Abbey beer? — distinction entre trappiste et bière d’abbaye",
  "https://www.zythos.be/trappist-of-abdijbier/",
  "source_associative"
);

const BA_CRAFT = source(
  "Brewers Association",
  "Craft Brewer Definition — small and independent brewer",
  "https://www.brewersassociation.org/statistics-and-data/craft-brewer-definition/",
  "source_professionnelle"
);

export default {
  "blonde": entry({
    histoire: `« Blonde » est avant tout une indication visuelle et commerciale. Elle promet une bière claire, jaune à dorée, mais ne renseigne ni sur la fermentation, ni sur la force, ni sur le niveau de houblon. Une lager internationale, une Belgian Blond Ale, une Golden Ale britannique, une bière d’abbaye forte ou une pale ale très claire peuvent toutes être vendues comme blondes sans partager la même architecture brassicole.

Dans le commerce français et belge, le mot s’est imposé parce qu’il est immédiatement compréhensible par un consommateur qui ne connaît pas nécessairement les classifications techniques. Il fonctionne comme un repère de rayon : clair, souvent perçu comme accessible et rafraîchissant. La réglementation française des dénominations de bière ne crée pourtant pas de catégorie juridique « bière blonde » ; le terme complète donc une dénomination légale ou usuelle sans définir une recette.

La bonne lecture d’une étiquette « blonde » consiste ainsi à chercher derrière la couleur : fermentation basse ou haute, degré alcoolique, style revendiqué, houblons, origine et éventuels ingrédients complémentaires.`,
    target: "Une mention de couleur claire, utile comme repère visuel mais insuffisante pour déduire le style, la fermentation ou la recette.",
    sources: [DGCCRF_BEER, BRASSEURS_FRANCE, BA("Beer Style Guidelines — pale and gold styles across multiple families")]
  }),

  "blanche": entry({
    histoire: `Le mot « blanche » possède davantage de profondeur historique que beaucoup d’autres couleurs commerciales, car il renvoie depuis longtemps à des bières de froment très pâles. Les traditions belge de Witbier et bavaroise de Weissbier ont contribué à associer le terme à une robe laiteuse ou opalescente, au blé, à une mousse abondante et à une grande fraîcheur.

Mais l’appellation commerciale moderne est plus large que ces deux styles. Une « blanche » peut être une Witbier épicée à la coriandre et aux agrumes, une Weissbier sans épices dominée par la levure, une American Wheat très propre, une bière aromatisée au citron ou une création trouble dont le blé n’est qu’un élément secondaire. Le mot ne permet donc pas, à lui seul, de conclure à la présence de coriandre, d’écorce d’orange ou même à un profil fermentaire précis.

La réglementation française ne définit pas « blanche » comme dénomination légale autonome. La fiche doit donc inviter à distinguer la couleur commerciale du véritable style brassicole indiqué ailleurs sur l’étiquette.`,
    malts: ["Souvent blé malté ou non malté avec malt d’orge pâle, mais aucune proportion universelle n’est imposée par le mot « blanche »."],
    hops: ["Souvent modérés à faibles dans les traditions de blé, mais variables selon le style réel."],
    yeast: ["Levure Witbier épicée, levure Weizen banane/girofle, levure ale neutre ou autre selon la bière réelle."],
    extras: ["Coriandre et écorces d’agrumes possibles en Witbier ; non obligatoires pour l’appellation commerciale « blanche »."],
    target: "Une mention claire et souvent associée au blé, à vérifier par le style réel : Witbier, Weissbier, Wheat Beer ou création commerciale.",
    sources: [DGCCRF_BEER, BJCP("Witbier", "24/24A/witbier"), BJCP("Weissbier", "10/10A/weissbier")]
  }),

  "ambree": entry({
    histoire: `« Ambrée » décrit une zone de couleur allant approximativement de l’or profond au cuivre et au caramel. Dans l’imaginaire commercial, elle suggère souvent davantage de malt, de biscuit, de croûte de pain ou de caramel qu’une blonde, sans que ces sensations soient obligatoires.

Cette couleur traverse des familles très différentes : Vienna Lager, Märzen, Amber Lager, Belgian Pale Ale, bière d’abbaye ambrée, American Amber Ale ou créations saisonnières. Le mot est donc un repère chromatique et sensoriel, pas une filiation historique unique. Deux bières ambrées peuvent avoir des fermentations, des taux d’alcool et des niveaux d’amertume totalement opposés.

En France, le décret sur les dénominations brassicoles ne réserve pas la mention « ambrée ». Elle fonctionne comme une information de présentation qui doit être complétée par le véritable type de produit.`,
    malts: ["Souvent malts pale, Vienna, Munich ou caramel pour la couleur et le toasté ; le choix dépend entièrement du style de base."],
    target: "Une bière de teinte cuivrée à ambrée, souvent plus maltée en perception, sans recette ni fermentation imposées.",
    sources: [DGCCRF_BEER, BRASSEURS_FRANCE, BA("Amber beer styles across ale and lager families")]
  }),

  "rousse": entry({
    histoire: `« Rousse » est une appellation de couleur particulièrement utilisée dans les marchés francophones. Elle évoque des reflets cuivre rouge, acajou clair ou roux, souvent associés à caramel léger, biscuit ou pain grillé. Cette promesse sensorielle reste pourtant très souple.

Le terme peut recouvrir une Irish Red Ale, une ale ambrée française, une bière belge, une lager rougeâtre ou une création de microbrasserie. Il n’existe pas de « recette rousse » internationale et l’emploi du mot ne garantit ni origine irlandaise, ni fermentation haute, ni niveau précis de malt caramel.

Comme « blonde » ou « ambrée », « rousse » n’est pas une dénomination légale spécifique du décret français sur la bière. La couleur doit être lue comme un indice, non comme le nom d’un style technique.`,
    malts: ["Malt pâle avec malts caramel, biscuit, Munich ou très petite touche de malt torréfié pour ajuster les reflets, selon style."],
    target: "Une mention de robe rousse à cuivre rouge, sans implication automatique d’Irish Red Ale ou de recette précise.",
    sources: [DGCCRF_BEER, BJCP("Irish Red Ale", "15/15A/irish-red-ale"), BA("Amber and Red beer styles")]
  }),

  "brune": entry({
    histoire: `« Brune » est un grand mot de couleur, historiquement très présent dans les marchés belge, français et britannique, mais il ne correspond pas à une famille technique unique. Il peut désigner une Dubbel belge, une Brown Ale, une Dunkel, une bière d’abbaye sombre, une strong ale ou une lager brune.

La couleur provient de choix très différents : malts Munich et mélanoïdines, malts caramel, malts bruns, sucres foncés, petites fractions de grains fortement torréfiés. Ces chemins produisent des profils allant du pain et de la noisette aux fruits secs, au caramel ou au cacao doux. « Brune » ne signifie donc pas automatiquement « torréfiée », encore moins « stout ».

Dans la vente, le mot joue surtout le rôle de repère chromatique face à blonde et ambrée. Il doit être accompagné du style réel si l’on veut comprendre le produit.`,
    malts: ["Malts Munich, caramel, brown, chocolate ou autres selon style ; la robe brune peut aussi venir de sucres foncés."],
    target: "Une mention de couleur brune, couvrant des profils maltés très variés et ne signifiant ni Stout ni Dubbel par défaut.",
    sources: [DGCCRF_BEER, BA("Brown and dark beer styles across multiple families"), BJCP("British Brown Ale", "13/13B/british-brown-ale")]
  }),

  "noire": entry({
    histoire: `« Noire » annonce une robe très sombre à opaque et constitue d’abord une promesse visuelle. Dans l’esprit du consommateur, elle suggère souvent café, cacao, torréfaction ou pain brûlé, mais ces arômes ne sont pas obligatoires : une Schwarzbier cherche par exemple une torréfaction beaucoup plus douce qu’un Stout, tandis qu’une Black IPA peut associer couleur noire et houblon intense.

Le mot peut donc couvrir Stout, Porter très sombre, Schwarzbier, Black IPA, lager noire, bière aromatisée ou création expérimentale. La couleur ne permet pas d’inférer la fermentation ni la force alcoolique.

Aucune catégorie légale française « bière noire » ne fixe de paramètres particuliers. L’appellation doit rester un raccourci de couleur, à distinguer des noms de styles réellement définis.`,
    malts: ["Malts torréfiés, black malt, chocolate, roasted barley ou malts déhuskés selon le profil recherché ; aucune combinaison universelle."],
    target: "Une bière très sombre ou noire dont le style réel peut aller d’une lager douce à une stout ou une bière fortement houblonnée.",
    sources: [DGCCRF_BEER, BJCP("Schwarzbier", "8/8B/schwarzbier"), BA("Dark and black beer styles")]
  }),

  "rouge": entry({
    histoire: `« Rouge » est encore plus ambigu que « rousse ». La couleur peut provenir des malts, d’un fruit, d’un ingrédient végétal ou d’une combinaison des deux. Une Flanders Red Ale est un style historique précis ; une fruit beer à la framboise peut être rouge pour une raison totalement différente ; une Red IPA ou une lager rouge relève encore d’une autre logique.

Dans le commerce, le mot attire l’œil et évoque fruits rouges, caramel ou acidité selon les marques, mais il ne garantit aucun de ces caractères. La réglementation française permet d’ailleurs certains ingrédients végétaux colorants dans les catégories prévues de bières « à… » et aromatisées, ce qui renforce la nécessité de lire la liste d’ingrédients.

Une « bière rouge » ne doit donc jamais être automatiquement assimilée à une Flanders Red Ale.`,
    malts: ["Selon style : malts caramel/rouges pour une base maltée, ou malt pâle si la couleur vient principalement du fruit."],
    extras: ["Fruits, jus, extraits végétaux ou autres ingrédients possibles lorsque la dénomination légale et l’étiquetage le permettent."],
    target: "Une mention de couleur rouge dont l’origine chromatique doit être recherchée dans le style et les ingrédients, sans supposer une Flanders Red Ale.",
    sources: [DGCCRF_BEER, BJCP("Flanders Red Ale", "23/23B/flanders-red-ale"), BA("Fruit Beer and Red beer categories")]
  }),

  "biere-dabbaye": entry({
    histoire: `« Bière d’abbaye » n’est pas un style brassicole. L’expression évoque un lien réel, historique ou simplement de marque avec un monastère, mais elle peut couvrir des blondes, brunes, Dubbel, Tripel, fortes ou légères. Ce qui définit éventuellement l’appellation est la relation institutionnelle ou commerciale, pas une recette.

En Belgique, il existe un label collectif « Bière belge d’Abbaye reconnue / Erkend Belgisch Abdijbier » créé pour distinguer certaines marques ayant un lien documenté avec une abbaye et répondant à des conditions de licence, de royalties et de contrôle. Toutes les bières vendues comme « d’abbaye » ne portent toutefois pas ce label, et l’expression générale ne doit pas être confondue avec « Trappiste ».

Une bière trappiste répond à des règles d’origine et de gouvernance beaucoup plus strictes. Une bière d’abbaye peut au contraire être produite dans une brasserie laïque sous licence ou en relation avec une abbaye. Dans les deux cas, le nom ne préjuge pas du style : c’est l’étiquette de la bière elle-même qui dira si elle est Dubbel, Tripel, blonde forte, etc.`,
    explication: "Bière d’abbaye décrit un lien de marque, historique ou institutionnel ; les recettes vont de bières légères à des ales monastiques fortes.",
    malts: ["Selon la bière : Pilsner, pale, Munich, caramel, sucres et autres matières premières possibles."],
    hops: ["Houblons continentaux ou autres selon le produit ; aucune intensité commune à toutes les bières d’abbaye."],
    yeast: ["Souvent levure ale belge pour les exemples connus, mais l’appellation n’impose aucune souche ni fermentation unique."],
    target: "Une bière liée commercialement ou historiquement à une abbaye ; le lien institutionnel ne remplace jamais l’identification du style réel.",
    sources: [ZYTHOS_ABBEY, TRAPPIST_FAQ, BJCP("Monastic Ale family", "26")]
  }),

  "trappiste": entry({
    histoire: `« Trappiste » désigne d’abord une origine monastique protégée, pas un style de bière. L’Association Internationale Trappiste rappelle que seuls les monastères trappistes peuvent utiliser la marque Trappist® et qu’aucune recette comparable ne peut, à elle seule, justifier cette appellation. Chaque abbaye possède ses propres bières, levures et choix techniques.

Le label international « Authentic Trappist Product » ajoute trois critères stricts : fabrication dans l’environnement immédiat de l’abbaye, production sous la supervision des moines ou moniales, et affectation des revenus aux besoins de la communauté, à la solidarité de l’ordre, à des projets de développement ou à des œuvres caritatives. Le label est attribué après contrôle et n’est pas synonyme d’un profil sensoriel particulier.

C’est pourquoi une Trappiste peut être blonde légère, Dubbel, Tripel, bière sombre forte, bière houblonnée atypique ou même sans alcool. L’appellation renseigne sur l’origine et la gouvernance du produit, tandis que le style renseigne sur ce qui se trouve dans le verre.`,
    explication: "Trappiste est une certification d’origine et de gouvernance, pas une formule brassicole. Les recettes diffèrent volontairement entre abbayes et produits.",
    malts: ["Variables selon chaque bière trappiste : malt pâle, Munich, caramel, blé, sucres brassicoles, etc."],
    hops: ["Variables selon l’abbaye et le style ; des profils très discrets à nettement houblonnés existent."],
    yeast: ["Levures propres aux différentes brasseries trappistes ; aucune souche « trappiste » universelle."],
    target: "Identifier une origine trappiste authentique sans transformer la marque/certification en faux style brassicole unique.",
    sources: [TRAPPIST, TRAPPIST_FAQ, WESTMALLE]
  }),

  "biere-artisanale-craft-beer": entry({
    histoire: `« Bière artisanale » et « craft beer » décrivent davantage le producteur, son organisation ou son positionnement que le contenu du verre. Le mouvement craft moderne s’est construit autour de petites brasseries indépendantes, de la diversité des styles, de l’innovation et d’un lien plus direct avec le territoire ou la clientèle, mais il n’existe aucune recette « craft ».

Les définitions varient selon les pays. Aux États-Unis, la Brewers Association définit aujourd’hui un craft brewer comme un brasseur petit et indépendant selon ses propres critères professionnels ; cette définition qualifie le brasseur, pas un style sensoriel. En France, la DGCCRF rappelle que l’usage de « bière artisanale » ou « brasserie artisanale » se rattache aux règles applicables à la qualité artisanale : ce n’est donc pas un simple synonyme juridique de « petite production » ou « bière originale ».

Une lager techniquement classique peut être craft, tout comme une stout pâtissière ou une IPA. À l’inverse, un goût « artisanal » ne permet pas de déduire le statut de l’entreprise. La fiche doit donc séparer identité économique, mode de production et style de bière.`,
    explication: "Craft/artisanale qualifie principalement le producteur ou le positionnement commercial ; tous les styles de bière peuvent être concernés.",
    malts: ["Tous types de malts, céréales et adjuncts selon le style réellement brassé."],
    hops: ["Tous profils de houblonnage possibles, du quasi absent au très intense."],
    yeast: ["Toutes fermentations possibles selon le style : ale, lager, mixte, spontanée ou procédés sans alcool."],
    target: "Une indication sur l’identité ou le mode d’organisation du producteur, sans prétendre à une recette ou un profil sensoriel universel.",
    sources: [CRAFT_FRANCE, BA_CRAFT, BA("Beer Style Guidelines — diversité des styles")]
  })
};
