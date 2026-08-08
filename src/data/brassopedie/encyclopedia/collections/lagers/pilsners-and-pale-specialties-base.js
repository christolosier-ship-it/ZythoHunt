import { ba2026, bjcp2021, HISTORY, TECH } from "./lagers-sources.js";

export const lagersEnrichmentPart2 = {
  "italian-pilsner": {
    histoireEtOrigines: `L’Italian Pilsner est l’un des rares styles brassicoles contemporains dont la généalogie puisse être reliée avec une assez grande précision à une bière emblématique : Tipopils, créée en 1996 par Birrificio Italiano à Limido Comasco. La brasserie présente elle-même Tipopils comme une Pilsner naturellement trouble, brassée avec du malt d’orge et des houblons européens, dont une partie est utilisée à froid. Cette combinaison — structure de Pils continentale, fermentation basse propre et houblonnage à cru très mesuré — devient progressivement un modèle observé puis imité hors d’Italie.

Il faut cependant éviter de réduire toute l’histoire à l’idée d’une « invention » isolée du dry-hopping sur lager : des pratiques de houblonnage à froid ou en garde sont bien plus anciennes dans l’histoire de la bière. La nouveauté de l’Italian Pilsner tient plutôt à la façon dont la scène craft italienne remet cette technique au service d’une Pils très sèche, très buvable et encore clairement européenne dans son langage aromatique. Le houblon doit apporter fleurs, herbes, épices, zeste ou agrumes fins sans donner l’impression d’une IPA blonde fermentée froid.

Au XXIe siècle, le style se diffuse rapidement dans les brasseries artisanales européennes et nord-américaines. Les Brewers Association Guidelines le reconnaissent désormais comme une catégorie distincte. Cette formalisation ne signifie pas qu’il existe une recette italienne unique : certaines versions restent extrêmement proches d’une German Pils parfumée, d’autres poussent davantage l’aromatique. La constante est l’élégance : base sèche, bitterness nette mais non brutale, houblon frais et profil de fermentation très propre.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: [
        "Malt Pilsner de qualité comme base principale ; une faible proportion de Vienna ou d’un malt légèrement plus riche peut soutenir le corps sans assombrir la bière.",
        "La couleur doit rester pâle à dorée et la texture légère : les malts caramel marqués sont généralement contre-productifs."
      ],
      houblons: [
        "Houblons européens nobles ou apparentés : variétés allemandes, tchèques, slovènes ou autres cultivars au registre floral, herbacé, épicé et citronné.",
        "Houblonnage tardif puis dry-hop léger à modéré. L’objectif est la fraîcheur aromatique, pas la saturation végétale."
      ],
      levuresEtMicroorganismes: ["Souche lager propre et suffisamment atténuante pour conserver une finale sèche."],
      ingredientsComplementaires: [],
      profilEau: "Eau faiblement alcaline, souvent assez douce ; une légère orientation sulfate peut tendre la finale mais l’amertume doit rester élégante.",
      empatage: "Empâtage orienté vers une bonne fermentescibilité et un corps léger. Décoction possible mais non structurante pour la définition moderne du style.",
      ebullitionEtHoublonnage: "Construire une base d’amertume de Pils, compléter par des ajouts tardifs, puis effectuer un dry-hop relativement contenu. Les fortes charges qui donnent brûlure végétale, haze massif ou texture huileuse font perdre la finesse recherchée.",
      fermentation: "Fermentation basse propre avec repos de diacétyle adapté à la souche. Le dry-hop est idéalement réalisé après la phase la plus active afin de mieux contrôler l’expression aromatique et le risque de hop creep.",
      maturation: "Garde froide suffisante pour la netteté, mais pas au prix d’une disparition complète des huiles de houblon. Conditionnement avec très faible prise d’oxygène.",
      profilRecherche: "Une Pilsner sèche et précise, dont le houblon frais forme un parfum supplémentaire sans masquer la céréale pâle ni la netteté lager."
    },
    sources: [ba2026("Italian-Style Pilsener"), HISTORY.tipopils, TECH.pilsnerMalt, TECH.diamond]
  },

  "czech-pale-lager": {
    histoireEtOrigines: `La Czech Pale Lager appartient à un système tchèque où la force du moût et la couleur sont historiquement aussi importantes que les catégories stylistiques internationales. Dans l’usage tchèque moderne, les bières sont souvent classées par densité d’extrait du moût primitif : les výčepní se situent traditionnellement dans une zone plus légère que les ležák, ce qui permet de distinguer une bière pâle de consommation courante d’une Czech Premium Pale Lager plus pleine. Le BJCP insiste sur cette logique locale afin d’éviter de traiter la Czech Pale Lager comme une simple « Pilsner diluée ».

La révolution de Plzeň en 1842 fournit évidemment le grand contexte historique. Mais la culture tchèque de la lager ne se limite pas à la bière premium exportée dans le monde : les brasseries ont longtemps produit plusieurs forces de bières pâles destinées à des usages différents. Une Czech Pale Lager moderne conserve donc les marqueurs de la tradition — malt tchèque, houblon de Žatec/Saaz ou apparenté, eau peu minéralisée, fermentation basse, service généreux — dans un ensemble plus léger et souvent plus immédiatement buvable.

Le profil peut être étonnamment savoureux malgré un alcool modeste. Le malt apporte pain clair et céréale ; le houblon donne épices, herbes et une amertume perceptible mais arrondie. Une légère note de diacétyle peut exister dans certains exemples tchèques traditionnels, mais elle n’est ni obligatoire ni une excuse pour une fermentation mal maîtrisée. La mousse dense et persistante, renforcée par les habitudes de tirage tchèques, fait également partie de l’expérience culturelle même si elle ne peut pas être réduite à la recette du moût.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner tchèque ou continental comme base, parfois complété de petites quantités de malt plus riche pour soutenir le pain clair."],
      houblons: ["Saaz/Žatec et variétés tchèques proches, avec une présence aromatique épicée et herbacée clairement perceptible."],
      levuresEtMicroorganismes: ["Souche lager tchèque ou autre souche propre capable de conserver une légère rondeur maltée."],
      ingredientsComplementaires: [],
      profilEau: "Très faible alcalinité et minéralité contenue : cette douceur permet une amertume relativement élevée sans sensation minérale agressive.",
      empatage: "Infusion par paliers ou décoction selon l’équipement et la tradition. Une décoction peut renforcer le caractère pain/céréale sans alourdir le corps.",
      ebullitionEtHoublonnage: "Houblonnage assez généreux pour une bière légère, généralement centré sur les variétés tchèques. Les ajouts aromatiques restent traditionnels plutôt que massivement orientés dry-hop.",
      fermentation: "Fermentation basse propre. Un diacétyle faible peut être stylistiquement toléré dans certaines interprétations tchèques, mais la plupart des brasseurs modernes visent une expression très contrôlée.",
      maturation: "Lagering jusqu’à intégration du malt et du houblon ; la bière doit rester fraîche, mousseuse et vive.",
      profilRecherche: "Une lager tchèque légère mais absolument pas vide : malt tendre, houblon épicé, amertume ronde et grande facilité de consommation."
    },
    sources: [bjcp2021("Czech Pale Lager", "3/czech-lager/"), ba2026("Bohemian-Style Pilsener and related Czech lagers"), HISTORY.pilsnerUrquell, TECH.pilsnerMalt]
  },

  "czech-premium-pale-lager": {
    histoireEtOrigines: `La Czech Premium Pale Lager est l’héritière la plus directe de la bière brassée à Plzeň par Josef Groll en 1842. Le contexte est celui d’une ville décidée à moderniser sa production après des critiques répétées sur la qualité des bières locales. Une nouvelle brasserie est construite et Groll applique la fermentation basse bavaroise à un ensemble de matières premières particulièrement favorables : eau très douce, malt d’orge pâle et houblon de Žatec/Saaz. Le résultat est une bière dorée brillante, fortement houblonnée mais étonnamment douce dans sa perception, qui devient un modèle mondial.

La catégorie BJCP moderne ne se réduit pas à Pilsner Urquell, mais cet exemple reste fondamental pour comprendre le style. Le terme tchèque ležák renvoie à une lager d’une force supérieure aux výčepní légères. Le style combine davantage de richesse maltée et de corps qu’une German Pils, tout en conservant une amertume importante. Cette tension explique son caractère particulier : la bière peut afficher 30 à 45 IBU sans donner la même sécheresse mordante qu’une Pils allemande, notamment grâce à une eau douce, une rondeur de malt et une fermentation qui ne cherche pas l’effacement absolu.

Pilsner Urquell maintient encore un procédé à triple décoction, un houblonnage en plusieurs étapes au Saaz et une maturation prolongée. Ces pratiques sont historiquement précieuses mais ne constituent pas un cahier des charges universel pour toutes les Czech Premium Pale Lagers. Beaucoup de brasseries modernes utilisent des schémas d’empâtage différents tout en respectant le résultat sensoriel : malt riche mais pâle, houblon tchèque noble, amertume ferme et souple, mousse abondante et finale assez sèche pour appeler une nouvelle gorgée.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner tchèque ou continental dominant, recherché pour son caractère de pain blanc, céréale douce et miel très léger."],
      houblons: ["Saaz/Žatec en référence, ou cultivars tchèques proches ; l’arôme épicé, herbacé et légèrement floral doit rester identifiable."],
      levuresEtMicroorganismes: ["Souche lager propre, avec atténuation suffisante mais sans assécher la bière au point de perdre la rondeur tchèque."],
      ingredientsComplementaires: [],
      profilEau: "Très douce et faiblement alcaline dans l’archétype de Plzeň. Le faible sulfate contribue à arrondir une amertume pourtant soutenue.",
      empatage: "Décoction historiquement importante ; Pilsner Urquell conserve une triple décoction. Une infusion par paliers moderne peut produire le style si elle développe suffisamment le caractère malté.",
      ebullitionEtHoublonnage: "Amertume structurante et plusieurs apports de houblon noble. Les ajouts tardifs donnent du parfum mais le dry-hop massif n’appartient pas au modèle classique.",
      fermentation: "Fermentation basse contrôlée. Une trace faible de diacétyle peut être admise dans la tradition tchèque, mais elle ne doit jamais devenir beurrée ou masquer le malt et le houblon.",
      maturation: "Lagering prolongé jusqu’à intégration de l’amertume et obtention d’une mousse et d’une limpidité stables.",
      profilRecherche: "Une Pils tchèque pleine et harmonieuse : malt pâle riche, Saaz épicé, amertume ferme aux contours doux et finale très buvable."
    },
    sources: [bjcp2021("Czech Premium Pale Lager", "3/czech-lager/"), HISTORY.pilsnerUrquell, HISTORY.pilsnerProcess, TECH.pilsnerMalt]
  },

  "american-pilsner": {
    histoireEtOrigines: `L’American Pilsner reconnue aujourd’hui par les Brewers Association renvoie largement à la tradition des lagers américaines plus houblonnées et plus savoureuses qui précèdent la standardisation de masse du XXe siècle. L’immigration brassicole allemande et centre-européenne apporte au XIXe siècle la fermentation basse et l’ambition de produire des bières inspirées des lagers continentales. Mais les matières premières américaines diffèrent : l’orge à six rangs, riche en enzymes mais plus chargée en protéines, s’accommode bien de céréales comme le maïs ou le riz, qui allègent la structure du moût.

La catégorie contemporaine est souvent appelée « Pre-Prohibition Pilsner » dans le langage brassicole, même si les Brewers Association utilisent American-Style Pilsener. Leur guide accepte une proportion notable de maïs ou de riz, jusqu’à environ un quart de la charge céréalière, et une amertume nettement supérieure aux American Lagers de masse. Le profil historique recherché n’est donc pas celui d’une bière neutre : le malt et les céréales sont perceptibles, le houblon peut être floral, épicé ou herbacé, et la finale reste sèche et vive.

L’intérêt moderne du style vient de sa reconstruction par les brasseries artisanales et les passionnés d’histoire brassicole. On ne peut pas prétendre qu’une recette contemporaine reproduit exactement chaque lager américaine du XIXe siècle : les variétés d’orge, de maïs, de houblon et de levure ont changé. Mais le style permet de rappeler qu’avant l’American Lager très légère, il existait des lagers américaines robustes, franchement houblonnées et conçues autour des matières premières locales.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: [
        "Malt lager ou Pilsner, historiquement en relation avec l’orge américaine à six rangs ; les interprétations actuelles utilisent souvent du deux-rangs plus régulier.",
        "Maïs ou riz possibles et historiquement cohérents ; les BA Guidelines autorisent une proportion notable sans que la bière devienne une light lager."
      ],
      houblons: ["Houblons américains traditionnels ou cultivars nobles/apparentés, avec une amertume et un parfum clairement plus présents que dans une American Lager standard."],
      levuresEtMicroorganismes: ["Souche lager propre, neutre à légèrement soufrée pendant la fermentation puis nette après maturation."],
      ingredientsComplementaires: [],
      profilEau: "Faible à moyenne minéralité ; suffisamment de sulfate peut soutenir une amertume plus ferme, sans dureté excessive.",
      empatage: "Empâtage fermentescible. Les céréales crues demandent traditionnellement un cereal mash ou une gélatinisation séparée ; les formes floconnées/prégélatinisées simplifient ce travail.",
      ebullitionEtHoublonnage: "Amertume moyenne à soutenue et apports aromatiques mesurés. Le style peut être houblonné, mais son architecture reste celle d’une Pilsner historique plutôt que d’une IPA.",
      fermentation: "Fermentation basse propre, complète et relativement sèche.",
      maturation: "Garde froide suffisante pour la netteté tout en préservant le caractère de houblon.",
      profilRecherche: "Une lager américaine historique reconstruite : sèche, céréalière, nettement houblonnée et plus expressive que les lagers industrielles qui lui succèdent."
    },
    sources: [ba2026("American-Style Pilsener"), TECH.pilsnerMalt, TECH.w3470]
  },

  "contemporary-american-pilsner": {
    histoireEtOrigines: `La Contemporary American Pilsner est une catégorie de la scène brassicole récente plutôt qu’un style historique. Elle témoigne du retour des brasseurs américains vers la lager comme espace de créativité après plusieurs décennies où l’IPA a dominé l’imaginaire craft. Là où l’American Pilsner historique regarde vers les lagers d’avant la Prohibition, la version contemporaine accepte une palette plus large de malts, d’adjoints et surtout de houblons.

Les Brewers Association distinguent explicitement les deux catégories. Dans la Contemporary American-Style Pilsener, une base tout malt est fréquente mais des céréales adjointes restent possibles ; les houblons peuvent être américains ou internationaux et dépasser le registre strictement noble. Le style reste toutefois une Pilsner : la bière doit demeurer claire à légèrement voilée, très propre, relativement sèche et construite autour d’une amertume lisible.

Cette souplesse explique pourquoi les frontières avec Italian Pilsner, West Coast Pilsner ou India Pale Lager peuvent sembler mouvantes. La Contemporary American Pilsner occupe le milieu du spectre : plus libre qu’une German Pils, généralement moins intensément dry-hoppée qu’une West Coast Pilsner, et moins proche d’une IPA qu’une IPL. La catégorie est utile précisément parce qu’elle reconnaît une génération de lagers américaines qui ne cherchent plus à imiter une école européenne à la lettre.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner ou pale très clair ; recette tout malt fréquente, mais maïs ou riz restent possibles selon l’intention."],
      houblons: ["Houblons américains ou internationaux, du noble floral aux variétés plus citronnées et fruitées ; intensité modérée à affirmée."],
      levuresEtMicroorganismes: ["Souche lager propre et atténuante."],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité, minéralité ajustée à l’amertume. Un sulfate modéré peut accentuer la sécheresse.",
      empatage: "Empâtage orienté vers une finale sèche et un corps léger.",
      ebullitionEtHoublonnage: "Amertume claire, ajouts tardifs plus libres qu’en German Pils. Un dry-hop léger peut être utilisé mais n’est pas obligatoire.",
      fermentation: "Fermentation basse propre, limitant les esters afin de laisser les houblons définir la personnalité.",
      maturation: "Garde froide suffisante pour la netteté ; durée adaptée si des houblons tardifs doivent conserver leur fraîcheur.",
      profilRecherche: "Une Pils américaine moderne : précise et sèche, mais plus libre dans le choix du houblon et des céréales que les écoles européennes classiques."
    },
    sources: [ba2026("Contemporary American-Style Pilsener"), TECH.diamond, TECH.pilsnerMalt]
  },

  "west-coast-pilsner": {
    histoireEtOrigines: `La West Coast Pilsner est un style extrêmement récent, né du croisement entre la culture de la Pils craft américaine et le vocabulaire aromatique de la West Coast IPA. Les Brewers Association l’intègrent aujourd’hui à leurs catégories de compétition, signe qu’un ensemble de pratiques autrefois décrit comme « hoppy lager » ou « dry-hopped Pils » s’est suffisamment stabilisé pour recevoir un nom propre.

Il serait artificiel de lui attribuer un inventeur unique : plusieurs brasseries de la côte Ouest ont exploré en parallèle des lagers fortement houblonnées, claires et sèches. Ce qui distingue la catégorie n’est pas seulement la quantité de houblon, mais le choix d’un registre aromatique typiquement moderne : agrumes, pin, résine, fruits tropicaux, fruits à noyau, notes dank ou sauvages, parfois issus de variétés américaines, néo-zélandaises ou australiennes. La fermentation basse et le corps léger empêchent cependant le houblon de se poser sur une texture d’IPA classique.

Le style illustre aussi une évolution de la culture craft : la limpidité, la sécheresse et la précision redeviennent des qualités recherchées après la vague des IPA opaques. Une West Coast Pilsner réussie peut être intensément parfumée tout en restant tranchante, légère et très pétillante. Le risque principal est de dépasser la frontière : si la bière devient trop alcoolisée, trop résineuse, trop texturée ou trop chargée en matière végétale, elle perd son identité lager.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner ou pale très clair ; recette volontairement simple pour laisser le houblon dominer sans créer de douceur résiduelle."],
      houblons: [
        "Variétés modernes à agrumes, pin, tropical, fruits à noyau ou caractère dank.",
        "Whirlpool et dry-hop plus importants qu’en Italian Pilsner ; les charges restent néanmoins pensées pour conserver une texture sèche."
      ],
      levuresEtMicroorganismes: ["Souche lager propre, parfois conduite légèrement plus chaud selon les contraintes de la brasserie, sans esters dominants."],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité, sulfate souvent supérieur au chlorure pour soutenir une finale sèche et une amertume précise.",
      empatage: "Très fermentescible, corps léger à moyen-léger.",
      ebullitionEtHoublonnage: "Amertume franche, grosse part de l’expression construite au whirlpool et au dry-hop. Contrôler la polyphénolie et l’oxydation devient essentiel.",
      fermentation: "Fermentation basse propre ; repos de diacétyle puis houblonnage à froid selon le protocole choisi.",
      maturation: "Garde froide relativement courte après dry-hop, clarification possible sans dépouiller totalement les arômes. Conditionnement à très faible oxygène.",
      profilRecherche: "Une lame de lager sèche avec l’aromatique moderne de la côte Ouest : intense au nez, légère et nette en bouche."
    },
    sources: [ba2026("West Coast-Style Pilsener"), TECH.diamond, TECH.pilsnerMalt]
  },

  "rice-lager": {
    histoireEtOrigines: `Le riz est utilisé depuis longtemps dans de nombreuses lagers industrielles et régionales, particulièrement en Asie et en Amérique du Nord, mais « Rice Lager » comme catégorie de style autonome est beaucoup plus récente. Les Brewers Association ont ajouté une catégorie Rice Lager à leurs guidelines 2026 afin de reconnaître un courant où le riz n’est plus seulement un adjoint destiné à alléger une recette : il peut devenir une composante revendiquée de l’identité sensorielle.

Cette distinction est importante. Un riz très neutre peut diminuer le corps et laisser une finale sèche ; certaines variétés aromatiques peuvent apporter des impressions de céréale douce, noix, riz cuit ou parfum floral subtil. Les BA Guidelines admettent donc un éventail qui va de la neutralité à une expression du riz perceptible, à condition que la bière conserve la netteté et la buvabilité d’une lager.

Techniquement, le mot « riz » couvre plusieurs matières premières. Les flocons et produits prégélatinisés peuvent être incorporés directement dans certains empâtages, tandis que le riz cru exige généralement une gélatinisation/céréale mash afin de rendre son amidon accessible aux enzymes du malt. Les brasseries industrielles maîtrisent depuis longtemps ces procédés ; la vague craft actuelle les redécouvre parfois avec des variétés culinaires régionales et une ambition aromatique plus forte.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: [
        "Malt Pilsner ou lager pâle comme source principale d’enzymes et de structure.",
        "Riz blanc neutre, riz floconné/prégélatinisé ou variété aromatique selon l’effet recherché. La proportion peut varier fortement : le style n’impose pas de chiffre canonique."
      ],
      houblons: ["Faible à modéré ; noble, floral ou moderne mais rarement assez puissant pour masquer le caractère de céréale."],
      levuresEtMicroorganismes: ["Souche lager propre et atténuante."],
      ingredientsComplementaires: [],
      profilEau: "Plutôt douce, afin de garder une texture nette et une finale délicate.",
      empatage: "Le riz cru nécessite une gélatinisation adaptée avant ou pendant le brassage ; les flocons/prégélatinisés simplifient la conversion. Le malt doit apporter suffisamment de pouvoir enzymatique.",
      ebullitionEtHoublonnage: "Houblonnage d’équilibre. Les versions modernes peuvent être légèrement plus aromatiques mais la finesse reste prioritaire.",
      fermentation: "Fermentation basse propre, permettant de distinguer le caractère du riz du fruit de levure.",
      maturation: "Garde froide jusqu’à netteté ; forte carbonatation fréquente pour accentuer la sensation légère.",
      profilRecherche: "Une lager sèche et très précise dans laquelle le riz peut être soit un outil de légèreté, soit un véritable accent de céréale."
    },
    sources: [ba2026("Rice Lager"), TECH.pilsnerMalt, TECH.w3470]
  },

  "india-pale-lager": {
    histoireEtOrigines: `India Pale Lager, ou IPL, est un nom volontairement hybride apparu dans la scène craft pour décrire des bières qui appliquent un houblonnage d’IPA à une fermentation basse. Il ne s’agit pas d’un descendant historique des India Pale Ales du XIXe siècle : le mot « India » est ici une référence stylistique moderne à l’intensité du houblon. La catégorie est reconnue par les Brewers Association sous le nom American-Style India Pale Lager.

Les premières IPL se multiplient surtout au début du XXIe siècle, lorsque les brasseurs cherchent à distinguer le caractère de houblons américains modernes de l’expression fruitée des levures ale. La lager fournit un fond plus neutre : agrumes, résine, pin, tropical ou fruits à noyau paraissent souvent plus nets, tandis que le corps peut rester très sec. Le style partage donc une partie du vocabulaire de la West Coast Pilsner, mais l’IPL accepte généralement davantage d’alcool, d’amertume et d’intensité aromatique.

Sa réussite dépend d’un équilibre délicat. Une fermentation basse ne transforme pas automatiquement une IPA en lager : il faut aussi une structure de malt relativement légère, une maturation propre et une finale qui ne devient ni sucrée ni chargée. Inversement, si le houblon est trop sage, la bière retombe dans la vaste famille des Hoppy Lagers.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner ou pale dominant ; petite quantité de Vienna possible, très peu de caramel pour éviter une finale lourde."],
      houblons: ["Variétés modernes américaines ou internationales, amertume soutenue, whirlpool généreux et dry-hop fréquent."],
      levuresEtMicroorganismes: ["Souche lager neutre et assez tolérante à l’alcool pour finir un moût plus dense qu’une Pils standard."],
      ingredientsComplementaires: [],
      profilEau: "Sulfate souvent favorisé pour une finale sèche et une amertume nette ; alcalinité faible.",
      empatage: "Empâtage fermentescible pour contenir le corps malgré le degré alcoolique supérieur.",
      ebullitionEtHoublonnage: "Construire l’amertume sans extraction végétale excessive ; répartir l’expression entre chaudière, whirlpool et dry-hop.",
      fermentation: "Fermentation basse propre puis repos de diacétyle. Surveiller le hop creep après dry-hop, qui peut relancer la fermentation et produire du diacétyle.",
      maturation: "Maturation froide et conditionnement rapide sous faible oxygène pour préserver les huiles modernes.",
      profilRecherche: "L’intensité de houblon d’une IPA avec une fermentation et une finale nettement lager : sèche, précise, tranchante."
    },
    sources: [ba2026("American-Style India Pale Lager"), TECH.diamond]
  },

  "munich-helles": {
    histoireEtOrigines: `Le Munich Helles naît à la fin du XIXe siècle dans une Bavière dont la grande tradition est encore la bière sombre. La Pilsner bohémienne, claire et brillante, rencontre un immense succès commercial après 1842 et oblige les brasseries munichoises à répondre. München Tourismus attribue à Spaten un rôle pionnier dans l’apparition du Münchner Hell à cette époque, tandis que les guides de styles situent son développement dans les années 1890.

Le choix munichois n’est pas de copier exactement la Pilsner. Le Helles — « clair » ou « pâle » — conserve la douceur maltée chère à la Bavière et réduit l’agressivité du houblon. Il devient une bière dorée, propre et souple où la céréale, le pain blanc et une légère douceur initiale précèdent une finale suffisamment sèche pour rester désaltérante. Le houblon noble est présent, mais davantage comme équilibre que comme signature dominante.

Au XXe siècle, le Helles devient l’un des piliers de la culture des Biergärten et tavernes bavaroises. Son apparente simplicité en fait une bière particulièrement exigeante : trop de houblon et elle devient Pils-like ; trop de malt ou de sucres résiduels et elle devient lourde ; trop peu des deux et elle ressemble à une lager internationale. Le style moderne repose donc sur la finesse d’un malt pâle de haute qualité et une fermentation d’une grande propreté.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner allemand dominant ; petite proportion de Vienna ou Munich clair possible pour renforcer le pain et la profondeur sans ambrer nettement la bière."],
      houblons: ["Houblons nobles allemands ou apparentés, à faible ou moyenne intensité, principalement pour équilibrer le malt."],
      levuresEtMicroorganismes: ["Souche lager propre et assez atténuante pour éviter une finale sucrée."],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité et minéralité modérée. Le chlorure peut soutenir la rondeur du malt, mais l’eau ne doit pas paraître saline ou lourde.",
      empatage: "Infusion ou paliers ; décoction traditionnelle possible mais non nécessaire. L’objectif est une texture souple et une finale bien fermentée.",
      ebullitionEtHoublonnage: "Amertume nettement plus basse qu’une German Pils ; peu d’arôme tardif.",
      fermentation: "Fermentation basse propre, faible ester, diacétyle absent.",
      maturation: "Lagering jusqu’à intégration et limpidité, avec carbonatation moyenne à vive.",
      profilRecherche: "Une lager munichoise dorée centrée sur le malt pâle : douce au départ, nette et sèche à l’arrivée, sans lourdeur."
    },
    sources: [bjcp2021("Munich Helles", "4/pale-malty-european-lager/"), ba2026("Munich-Style Helles"), HISTORY.munichHelles, HISTORY.munichBeer, TECH.pilsnerMalt]
  },

  "dortmunder-european-export": {
    histoireEtOrigines: `Dortmund devient au XIXe et au début du XXe siècle l’un des grands centres industriels de la bière allemande. L’essor des mines, de l’acier et du chemin de fer crée un immense marché urbain pour des bières capables d’être produites et distribuées à grande échelle. Le Brauerei-Museum Dortmund conserve cette mémoire d’une ville où de nombreuses grandes brasseries ont contribué à faire de la bière un produit industriel majeur.

La figure de Fritz Brinkhoff est particulièrement liée à l’Export : la ville de Dortmund le présente comme maître brasseur fondateur de la Dortmunder Union-Brauerei en 1873 et associe son travail au développement d’une bière Export plus robuste. Le terme « Export » désigne une lager un peu plus forte et durable que les bières locales courantes, adaptée à un transport plus large. Dans les classifications internationales, « Dortmunder Export » a longtemps servi à décrire une lager dorée située entre Helles et Pils : plus de corps et de malt qu’une Pils sèche, mais une amertume et une minéralité souvent plus marquées qu’un Helles.

La célèbre histoire de « l’eau dure de Dortmund » est utile mais mérite d’être nuancée. Les minéraux locaux ont certainement influencé les brasseries historiques, mais les brasseurs modernes savent traiter leur eau. Le style ne doit donc pas être réduit à une recette de sels. Ce qui compte est la sensation d’équilibre : malt doux, corps moyen, amertume ferme mais harmonieuse et impression légèrement minérale possible, jamais crayeuse.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner dominant, éventuellement complété de Vienna ou Munich clair pour donner davantage de corps qu’une Pils très sèche."],
      houblons: ["Houblons allemands nobles ou apparentés, amertume moyenne, arôme faible à modéré."],
      levuresEtMicroorganismes: ["Souche lager propre, bonne atténuation."],
      ingredientsComplementaires: [],
      profilEau: "Traditionnellement plus minérale que Plzeň ou Munich. Un équilibre sulfate/chlorure modéré peut donner une finale ferme, mais reproduire aveuglément une eau historique très chargée n’est pas nécessaire.",
      empatage: "Empâtage donnant un corps moyen mais bien atténué ; infusion ou paliers.",
      ebullitionEtHoublonnage: "Amertume suffisamment forte pour équilibrer une densité légèrement supérieure, sans devenir Pils sèche et tranchante.",
      fermentation: "Fermentation basse propre et régulière.",
      maturation: "Lagering moyen à long pour intégrer minéralité, malt et amertume.",
      profilRecherche: "Une lager d’export dorée, ferme et équilibrée : plus charpentée qu’une Helles, moins coupante qu’une Pils."
    },
    sources: [bjcp2021("Dortmunder Export", "5/pale-bitter-european-beer/"), ba2026("Dortmunder/European-Style Export"), HISTORY.dortmund, HISTORY.dortmundExport]
  },

  "festbier-german-oktoberfest": {
    histoireEtOrigines: `La Festbier moderne est étroitement liée à l’évolution de la bière servie à l’Oktoberfest de Munich, mais elle ne doit pas être confondue avec toute l’histoire de la fête. L’Oktoberfest naît en 1810 à l’occasion du mariage du prince héritier Louis de Bavière et de Thérèse de Saxe-Hildburghausen. La bière qui y est servie change au fil du XIXe et du XXe siècle à mesure que les technologies et les goûts évoluent.

Le lien avec la Märzen se consolide dans la seconde moitié du XIXe siècle. Le site officiel de l’Oktoberfest rappelle qu’une Märzen brassée par Spaten est introduite à la fête en 1872. Cette lager ambrée plus forte devient durablement associée à l’image internationale d’« Oktoberfestbier ». Pourtant, à partir de la fin du XXe siècle, les grandes brasseries munichoises privilégient progressivement une bière plus pâle, dorée et moins saturante. Le BJCP situe le passage majoritaire à la Festbier actuelle autour des années 1990 et rappelle que la version moderne a été développée plusieurs décennies auparavant pour mieux convenir à la consommation en grandes chopes.

Aujourd’hui, l’Oktoberfestbier servie officiellement à Munich est soumise au cadre local de la fête et produite par les brasseries munichoises autorisées. La Festbier comme style international en reprend le profil : force autour de 6 %, malt allemand riche mais pâle, houblon noble modéré, corps souple et finale sèche. Son objectif n’est pas de concentrer le malt comme un Bock ; c’est d’offrir suffisamment de richesse pour être festive tout en restant étonnamment facile à boire litre après litre.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner majoritaire, complété de Vienna et/ou Munich clair pour le pain et la richesse sans obtenir la couleur d’une Märzen."],
      houblons: ["Houblons nobles allemands, amertume modérée et arôme discret."],
      levuresEtMicroorganismes: ["Souche lager allemande propre, atténuation suffisante pour une finale nette malgré une densité de départ relativement élevée."],
      ingredientsComplementaires: [],
      profilEau: "Douce à modérément minérale, pensée pour soutenir le malt plutôt que souligner le sulfate.",
      empatage: "Paliers ou décoction possibles ; l’objectif est un malt de pain clair et une texture souple, pas une lourdeur dextrinique.",
      ebullitionEtHoublonnage: "Houblonnage d’équilibre, faible expression aromatique. Une ébullition solide aide à gérer les précurseurs de DMS lorsque le Pilsner domine.",
      fermentation: "Fermentation basse propre ; le degré alcoolique doit être totalement intégré et sans alcools supérieurs brûlants.",
      maturation: "Lagering assez long pour une bière lisse et brillante, mais conservant une fraîcheur de malt.",
      profilRecherche: "Une lager de fête dorée et robuste, maltée mais non sucrée, capable d’être servie en grande chope sans fatiguer le palais."
    },
    sources: [bjcp2021("Festbier", "4/pale-malty-european-lager/"), ba2026("German-Style Oktoberfest/Wiesn and Festbier"), HISTORY.oktoberfest, HISTORY.oktoberfestMarzen, TECH.pilsnerMalt]
  }
};
