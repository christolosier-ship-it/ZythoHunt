import { ba2026, bjcp2021, HISTORY, TECH } from "./lagers-sources.js";

export const lagersEnrichmentPart3 = {
  "vienna-lager": {
    histoireEtOrigines: `La Vienna Lager est liée à l’une des grandes transformations techniques du brassage européen du XIXe siècle. Anton Dreher, héritier d’une famille de brasseurs autrichiens, développe à Schwechat près de Vienne une bière de fermentation basse brassée avec un malt plus pâle et plus régulièrement touraillé que les malts bruns traditionnels. La maison Dreher situe en 1841 son « Lagerbier », au moment même où d’autres brasseurs d’Europe centrale expérimentent des méthodes de maltage et de fermentation qui vont bouleverser l’apparence des bières.

Le malt qui prendra le nom de Vienna se trouve entre le Pilsner très pâle et le Munich plus sombre : assez clair pour produire une bière cuivrée brillante, assez riche pour donner croûte de pain, toast et douceur maltée. La Vienna Lager devient ainsi une lager ambrée élégante, plus sèche et moins caramélisée que beaucoup d’interprétations modernes ne le laissent penser. L’innovation est contemporaine de la naissance de la Pilsner et participe au même basculement vers des bières de couleur plus claire, servies limpides et maturées à froid.

Le style décline fortement dans son berceau européen au XXe siècle, mais sa descendance culturelle est complexe. L’émigration de brasseurs germaniques et autrichiens vers les Amériques contribue à diffuser des lagers ambrées ; au Mexique, plusieurs marques entretiennent une parenté revendiquée avec la tradition viennoise. Il serait trop simple de présenter la Mexican Amber Lager comme un fossile exact de la recette de Dreher : matières premières, procédés et goûts ont évolué. Mais le Mexique constitue bien aujourd’hui l’un des lieux où l’idée d’une lager ambrée de type Vienna demeure familière au grand public.

La renaissance craft redonne ensuite au style une définition plus historique : malt Vienna au premier plan, caramel faible, houblon noble discret, fermentation basse nette et finale sèche. Le style moderne cherche moins à reproduire une bière précise de 1841 qu’à restaurer l’équilibre qui faisait l’originalité de cette famille : couleur cuivre, profondeur de pain et très grande buvabilité.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: [
        "Malt Vienna comme cœur de la recette ; Munich clair ou Pilsner peuvent ajuster la profondeur et la fermentescibilité.",
        "Les malts caramel doivent rester faibles : le profil historique vise toast, pain et Maillard davantage qu’une douceur de caramel."
      ],
      houblons: ["Houblons nobles continentaux ou apparentés, généralement en soutien avec un arôme faible à modéré."],
      levuresEtMicroorganismes: ["Souche lager propre, laissant la place au malt et assurant une finale bien atténuée."],
      ingredientsComplementaires: [],
      profilEau: "Modérément minérale ; l’alcalinité doit être suffisante pour le malt ambré sans rendre la finale lourde. Chlorure et sulfate restent généralement équilibrés.",
      empatage: "Infusion par paliers ou décoction possible. Le procédé doit développer pain et toast tout en conservant une bonne fermentescibilité.",
      ebullitionEtHoublonnage: "Amertume moyenne, juste assez pour équilibrer le malt ; peu d’arôme tardif.",
      fermentation: "Fermentation basse propre et relativement sèche, sans ester dominant ni diacétyle perceptible.",
      maturation: "Lagering moyen à long pour fondre les notes toastées et obtenir une bière brillante.",
      profilRecherche: "Cuivre brillant, pain toasté et malt Vienna profond, mais une finale sèche et nette qui interdit toute lourdeur caramélisée."
    },
    sources: [bjcp2021("Vienna Lager", "7/amber-bitter-european-beer/"), ba2026("Vienna-Style Lager"), HISTORY.viennaDreher, TECH.munichMalt]
  },

  marzen: {
    histoireEtOrigines: `Märzen signifie littéralement « bière de mars ». Le nom s’inscrit dans une ancienne organisation saisonnière du brassage bavarois : avant la réfrigération mécanique, la production de bières de fermentation basse devenait difficile pendant les mois chauds. Les brassins de fin d’hiver ou de début de printemps pouvaient être légèrement plus forts, puis conservés dans des caves froides — parfois avec de la glace naturelle — pour traverser l’été. La Märzen est donc d’abord liée à une logique de calendrier, de garde et de stabilité avant de devenir l’image internationale de la bière d’Oktoberfest.

La forme ambrée moderne se développe au XIXe siècle dans le contexte des nouveaux malts Vienna et Munich. Le BJCP relie notamment l’évolution du style aux travaux d’Anton Dreher et de Gabriel Sedlmayr. À l’Oktoberfest de Munich, le site officiel de la fête rappelle qu’en 1872 la brasserie Spaten introduit une Märzen ambrée plus forte qui rencontre un succès durable. Cette bière finit par modeler l’idée internationale de l’« Oktoberfestbier » : cuivre à ambre, malt de pain et corps généreux.

Pourtant, la fête munichoise moderne ne sert plus principalement cette Märzen. À partir de la fin du XXe siècle, les grandes brasseries de Munich adoptent une Festbier dorée, plus claire et moins rassasiante. Le décalage est désormais culturel : hors de Munich, notamment aux États-Unis, « Oktoberfest » désigne encore très souvent une lager ambrée de type Märzen ; à Munich, la bière de fête contemporaine est plutôt blonde.

La Märzen historique moderne doit rester sèche et élégante. Le malt peut évoquer pain grillé, croûte et toast, mais le caramel intense est un contresens fréquent. Le houblon équilibre sans prendre le dessus, et la fermentation basse transforme une densité relativement forte en bière lisse plutôt qu’en dessert malté.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Munich et Vienna dominants, souvent avec Pilsner pour ajuster la couleur et l’atténuation.", "Caramel faible ou absent ; la richesse doit venir des malts de base et de la conduite thermique."],
      houblons: ["Houblons nobles allemands, amertume modérée, arôme faible."],
      levuresEtMicroorganismes: ["Souche lager propre avec bonne atténuation et faible production d’esters."],
      ingredientsComplementaires: [],
      profilEau: "Modérément minérale, assez équilibrée pour soutenir la rondeur du malt sans accentuer une douceur résiduelle.",
      empatage: "Décoction historiquement cohérente et toujours pratiquée par certaines brasseries ; infusion par paliers possible. Le but est le pain grillé et une texture pleine mais fermentescible.",
      ebullitionEtHoublonnage: "Houblonnage principalement d’équilibre ; ébullition suffisante pour développer un moût propre sans créer de caramel brûlé.",
      fermentation: "Fermentation basse régulière ; la force doit rester lisse, sans alcool chaud.",
      maturation: "Lagering traditionnellement prolongé, historiquement lié à la garde estivale. Les installations modernes raccourcissent parfois les délais sans changer le profil attendu.",
      profilRecherche: "Une lager ambrée riche en pain et toast, pleine mais sèche, avec un malt noble plutôt qu’un caramel sucré."
    },
    sources: [bjcp2021("Märzen", "6/amber-malty-european-lager/"), ba2026("German-Style Maerzen"), HISTORY.oktoberfestMarzen, HISTORY.viennaDreher, TECH.munichMalt]
  },

  "franconian-rotbier": {
    histoireEtOrigines: `La Rotbier franconienne est particulièrement associée à Nuremberg. Les sources touristiques institutionnelles de la ville présentent la cité comme « Home of Rotbier » et rattachent la bière rouge locale à une tradition médiévale. Les règlements de Nuremberg encadrent très tôt les matières premières et la qualité de la bière ; les caves creusées dans le grès sous la ville permettent ensuite de conserver les fûts à température fraîche, un avantage décisif pour les bières de garde puis pour les fermentations basses.

Les archives municipales citées par Tourismus Nürnberg montrent l’importance du brassage local : à la fin du XVIe siècle, la ville compte plusieurs dizaines de brasseries de Rotbier en plus des producteurs de bière blanche. Cette donnée permet de sortir le style du folklore contemporain : la bière rouge n’est pas seulement une invention craft utilisant un nom ancien. En revanche, il faut rester prudent sur la continuité exacte des recettes. Entre les bières médiévales, les transformations du maltage, l’arrivée de la fermentation basse moderne et les Rotbier actuelles, les procédés ont profondément changé.

La Rotbier moderne de Franconie est une lager ambrée à rouge rubis, centrée sur le malt mais plus sèche qu’une bière caramel. Elle peut évoquer croûte de pain, toast et noisette légère, soutenus par des houblons allemands discrets. Les Brewers Association reconnaissent aujourd’hui la Franconian-Style Rotbier, ce qui donne une définition contemporaine à une identité régionale bien plus ancienne. La meilleure lecture encyclopédique consiste donc à tenir ensemble les deux niveaux : une tradition nurembergeoise documentée de bière rouge et un style moderne de fermentation basse codifié beaucoup plus récemment.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Vienna et Munich comme base logique ; Pilsner possible pour alléger, malt colorant ou torréfié désamérisé en très petite quantité pour ajuster le rouge sans goût brûlé."],
      houblons: ["Houblons allemands nobles ou régionaux, amertume modérée, arôme faible à moyen-faible."],
      levuresEtMicroorganismes: ["Souche lager propre, adaptée à une bière maltée mais sèche."],
      ingredientsComplementaires: [],
      profilEau: "Modérément minérale, sans sulfate agressif ; l’équilibre doit favoriser le pain et le toast.",
      empatage: "Paliers ou décoction possible pour renforcer les réactions de Maillard ; éviter une charge excessive de caramel malt.",
      ebullitionEtHoublonnage: "Houblonnage d’équilibre, faible expression aromatique.",
      fermentation: "Fermentation basse propre, sans ester dominant.",
      maturation: "Garde froide jusqu’à une bière limpide, aux reflets rouge-cuivre nets.",
      profilRecherche: "Une lager rouge franconienne sèche, toastée et élégante, dont la couleur ne repose pas sur une sucrosité de caramel."
    },
    sources: [ba2026("Franconian-Style Rotbier"), HISTORY.rotbier, TECH.munichMalt]
  },

  "international-amber-lager": {
    histoireEtOrigines: `L’International Amber Lager est moins une tradition régionale qu’une famille de convergence. À mesure que la lager pâle devient le standard mondial, de nombreuses brasseries proposent une version plus colorée et plus maltée destinée aux consommateurs qui souhaitent davantage de goût sans quitter le registre très accessible de la lager industrielle ou semi-industrielle. Les guides BJCP regroupent ces bières sous une catégorie internationale plutôt que de leur inventer un berceau unique.

Le style peut recevoir des influences de Vienna Lager, Märzen, amber lager américaine ou traditions locales, mais il s’en distingue par sa flexibilité. Le malt peut apporter caramel léger, pain toasté ou biscuit ; les houblons restent généralement en arrière-plan ; le corps est léger à moyen et la fermentation doit être très propre. Des adjoints comme maïs ou riz peuvent être présents, tout comme une base tout malt.

Cette largeur explique pourquoi les exemples commerciaux diffèrent beaucoup d’un pays à l’autre. L’International Amber Lager n’est pas une « Vienna simplifiée » au sens historique : c’est une catégorie utile pour décrire les lagers ambrées de diffusion internationale qui ne revendiquent ni la sécheresse toastée de Vienna, ni la richesse de Märzen, ni une tradition locale plus précise.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Base Pilsner/lager avec Vienna, Munich ou malt caramel léger pour la couleur et le goût ; maïs ou riz possibles selon l’école."],
      houblons: ["Houblons doux et discrets, amertume faible à modérée."],
      levuresEtMicroorganismes: ["Souche lager neutre et régulière."],
      ingredientsComplementaires: [],
      profilEau: "Plutôt neutre à modérément minérale, conçue pour une grande buvabilité.",
      empatage: "Empâtage de fermentescibilité moyenne à élevée ; ne pas accumuler les dextrines et malts caramel.",
      ebullitionEtHoublonnage: "Houblonnage d’équilibre, arôme faible.",
      fermentation: "Fermentation basse propre et suffisamment atténuée.",
      maturation: "Garde froide et clarification jusqu’à un profil lisse.",
      profilRecherche: "Une lager ambrée accessible : davantage de malt et de couleur qu’une pale lager internationale, sans lourdeur ni identité régionale forcée."
    },
    sources: [bjcp2021("International Amber Lager", "2/international-lager/"), ba2026("International amber lager categories"), TECH.w3470]
  },

  "czech-amber-lager": {
    histoireEtOrigines: `La Czech Amber Lager appartient au vocabulaire tchèque des polotmavé pivo — littéralement des bières « semi-sombres ». Le BJCP souligne que la tradition tchèque ne découpe pas les lagers exactement comme les catégories germaniques ou anglo-américaines : couleur et densité originale se combinent pour produire des familles plus larges. Une amber lager tchèque peut ainsi se rapprocher d’une Vienna par sa couleur, d’une Czech Premium par son houblon ou d’une Dunkel légère par sa profondeur de malt, tout en conservant une identité locale.

Historiquement, les lagers ambrées sont moins mondialement célèbres que la Pilsner de Plzeň, mais elles font partie du paysage des brasseries tchèques. Le BJCP note une grande variabilité et la possibilité traditionnelle de construire la couleur et le goût avec Pilsner, Vienna, Munich, caramel et petites quantités de malt sombre. Certaines pratiques de brasserie peuvent même inclure le mélange de moûts ou de bières pâles et sombres, ce qui rappelle que la taxonomie de concours n’est pas toujours la photographie exacte de la production locale.

La renaissance des petites brasseries tchèques a rendu ces bières plus visibles hors du pays. Leur force est l’équilibre : pain grillé, caramel sec ou biscuit peuvent être présents, mais le houblon tchèque garde souvent une place plus importante que dans une lager ambrée purement maltée. Une légère rondeur de fermentation peut exister ; la bière doit néanmoins finir proprement et rester faite pour la consommation répétée en demi-litre.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Pilsner avec Vienna et/ou Munich ; caramel modéré et malt sombre en petite quantité possibles selon la teinte et la profondeur recherchées."],
      houblons: ["Saaz/Žatec ou variétés tchèques proches, avec une amertume et un parfum épicé souvent clairement perceptibles."],
      levuresEtMicroorganismes: ["Souche lager tchèque ou neutre, privilégiant rondeur et netteté."],
      ingredientsComplementaires: [],
      profilEau: "Faiblement minéralisée, ce qui aide à garder une amertume douce malgré le malt plus riche.",
      empatage: "Paliers ou décoction ; une décoction peut intensifier pain, croûte et couleur sans dépendre du caramel malt.",
      ebullitionEtHoublonnage: "Amertume moyenne avec houblon tchèque ; équilibre variable selon la brasserie, du malt-forward au presque hop-forward.",
      fermentation: "Fermentation basse propre ; faible diacétyle parfois acceptable dans l’école tchèque mais jamais obligatoire.",
      maturation: "Lagering jusqu’à intégration de la complexité maltée et du houblon.",
      profilRecherche: "Une amber lager tchèque souple et complexe, où pain, caramel sec et houblon épicé restent tous lisibles."
    },
    sources: [bjcp2021("Czech Amber Lager", "3/czech-lager/"), ba2026("Czech-Style Amber Lager"), TECH.munichMalt]
  },

  "american-amber-lager": {
    histoireEtOrigines: `L’American Amber Lager est une catégorie moderne et large. Elle émerge du paysage américain où coexistent, à partir de la fin du XXe siècle, les lagers industrielles très pâles et une scène artisanale qui remet en valeur les malts plus colorés. Certaines bières s’inspirent de Vienna ou Märzen ; d’autres sont simplement des lagers américaines enrichies en malt caramel ou toasté. Les Brewers Association reconnaissent cette diversité plutôt que d’imposer une généalogie européenne unique.

La catégorie actuelle accepte un caractère de malt caramel ou toasté faible à moyen et une amplitude de houblonnage assez importante. Cette souplesse reflète la culture craft américaine : une Amber Lager peut être malt-forward, équilibrée ou légèrement houblonnée, tant que la fermentation reste propre et que le profil ne dérive pas vers une American Amber Ale fruitée.

Le style a aussi une dimension de transition commerciale. Pour des consommateurs habitués à la pale lager, une robe cuivre et un peu de caramel donnent une impression de richesse sans demander la torréfaction d’une dark lager ou la force d’un Bock. Les meilleures interprétations contemporaines évitent cependant le piège du « malt caramel + faible houblon » : elles recherchent un vrai fond de pain et une finale assez sèche pour que la couleur ne soit pas synonyme de lourdeur.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Base lager/Pilsner complétée de Vienna, Munich et éventuellement caramel léger à moyen ; la composition est plus libre que Vienna Lager."],
      houblons: ["Houblons américains ou nobles, de faible à moyenne intensité selon l’interprétation."],
      levuresEtMicroorganismes: ["Souche lager propre, permettant de distinguer le malt des esters."],
      ingredientsComplementaires: [],
      profilEau: "Profil équilibré, ajustable selon la quantité de houblon ; alcalinité suffisante pour les malts ambrés mais sans excès.",
      empatage: "Empâtage moyen à fermentescible ; éviter que le caramel malt et les dextrines produisent une finale collante.",
      ebullitionEtHoublonnage: "Amertume d’équilibre ou légèrement affirmée, arôme variable mais non IPA-like.",
      fermentation: "Fermentation lager propre, faible ester et diacétyle absent.",
      maturation: "Garde froide jusqu’à un profil lisse et clair.",
      profilRecherche: "Une lager ambrée américaine nette et moderne, avec caramel/toast maîtrisés et une buvabilité qui reste centrale."
    },
    sources: [ba2026("American-Style Amber Lager"), TECH.diamond, TECH.munichMalt]
  },

  "american-marzen-oktoberfest": {
    histoireEtOrigines: `L’American Märzen / Oktoberfest montre comment un style change de sens lorsqu’il voyage. Aux États-Unis, le mot « Oktoberfest » reste fortement associé à la lager ambrée de type Märzen popularisée à Munich à partir de 1872. Cette image a été diffusée par les brasseries germano-américaines, les fêtes d’automne et plus tard par le mouvement craft. Pendant ce temps, l’Oktoberfest de Munich adopte progressivement une Festbier beaucoup plus blonde et fluide.

Les Brewers Association conservent une catégorie German-Style Maerzen et plusieurs lectures d’Oktoberfest, mais le marché américain utilise encore « Oktoberfest » de façon plus large. Une bière saisonnière américaine peut donc aller d’une Märzen assez historique à une amber lager plus caramélisée, parfois avec une intensité de malt que les exemples allemands modernes éviteraient.

Pour une Brassopédie encyclopédique, il est utile de distinguer l’authenticité culturelle de la qualité brassicole. Une American Oktoberfest n’est pas nécessairement une imitation ratée de Festbier : c’est souvent la continuité américaine d’une ancienne image munichoise. En revanche, lorsqu’on vise explicitement Märzen, pain toasté et sécheresse doivent rester plus importants que caramel sucré ou épices automnales.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Vienna et Munich avec Pilsner ; caramel possible en quantité plus libre que dans la Märzen allemande, mais à maîtriser."],
      houblons: ["Houblons nobles, américains doux ou combinaison ; généralement en soutien."],
      levuresEtMicroorganismes: ["Souche lager propre."],
      ingredientsComplementaires: ["Les épices ne font pas partie du style classique, même si certaines bières saisonnières commerciales américaines en utilisent."],
      profilEau: "Modérément minérale, malt-forward mais sans alcalinité lourde.",
      empatage: "Paliers ou infusion, avec un corps moyen et une bonne atténuation.",
      ebullitionEtHoublonnage: "Houblonnage équilibrant ; l’arôme reste secondaire.",
      fermentation: "Fermentation basse propre et alcool bien intégré.",
      maturation: "Garde froide de plusieurs semaines selon la souche et la densité.",
      profilRecherche: "Une lager d’automne américaine ambrée, riche en pain et toast, festive mais encore sèche et nette."
    },
    sources: [ba2026("American and German Oktoberfest/Maerzen categories"), HISTORY.oktoberfestMarzen, TECH.munichMalt]
  },

  "mexican-amber-lager": {
    histoireEtOrigines: `La Mexican Amber Lager s’inscrit dans une histoire brassicole mexicaine marquée par l’arrivée de techniques et de traditions européennes au XIXe siècle, puis par une industrialisation rapide. La chronologie exacte des influences autrichiennes et allemandes est souvent simplifiée dans les récits populaires, mais l’existence d’une affinité durable avec les lagers ambrées de type Vienna est bien visible dans le portefeuille de plusieurs brasseries mexicaines.

Cerveza Victoria revendique une histoire remontant à 1865 et se décrit aujourd’hui comme une Vienna Lager. Grupo Modelo, fondé au XXe siècle, développe également des bières plus sombres à côté des lagers pâles. Ces exemples ne prouvent pas que toutes les lagers ambrées mexicaines descendent directement d’Anton Dreher ; ils montrent plutôt comment le vocabulaire viennois et munichois a trouvé un terrain durable au Mexique, où il s’est adapté aux malts, adjoints, procédés industriels et habitudes de consommation locales.

Le style moderne peut être plus doux et moins strictement toasté qu’une Vienna Lager européenne de concours. Maïs ou autres céréales adjointes peuvent alléger le corps ; le caramel peut être un peu plus présent ; l’amertume est souvent contenue. Pourtant la meilleure Mexican Amber Lager garde une vraie tension : couleur cuivre, pain et caramel léger, fermentation très propre et finale suffisamment sèche pour rester rafraîchissante sous un climat chaud.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt lager avec Vienna/Munich ou caramel pour la couleur ; maïs ou autres céréales adjointes possibles selon la tradition industrielle de la brasserie."],
      houblons: ["Houblons doux, nobles ou apparentés, amertume faible à modérée."],
      levuresEtMicroorganismes: ["Souche lager neutre."],
      ingredientsComplementaires: [],
      profilEau: "Douce à modérément minérale, sans dureté excessive.",
      empatage: "Bonne fermentescibilité malgré la couleur ; gestion spécifique des adjoints si présents.",
      ebullitionEtHoublonnage: "Houblonnage d’équilibre, faible parfum.",
      fermentation: "Fermentation basse propre et stable.",
      maturation: "Garde froide, clarification et carbonatation moyenne à vive.",
      profilRecherche: "Une lager mexicaine cuivrée et souple, avec malt toasté/caramel léger mais une finale rafraîchissante."
    },
    sources: [ba2026("Mexican-Style Amber Lager"), HISTORY.victoria, HISTORY.mexicoHeineken, TECH.munichMalt]
  },

  "munich-dunkel": {
    histoireEtOrigines: `Avant que Munich ne devienne synonyme de Helles dorée, la bière bavaroise était majoritairement sombre. Le Munich Dunkel représente cette ancienne norme : une lager brune centrée sur des malts riches et des procédés capables de développer pain, croûte et profondeur de Maillard. München Tourismus rappelle que les bières sombres dominent la culture locale pendant des siècles et que l’apparition du Helles à la fin du XIXe siècle constitue justement une rupture avec cet héritage.

Le développement des malts Munich, plus foncés que le Vienna et beaucoup plus aromatiques que le Pilsner, permet de produire une bière brun-cuivre sans utiliser la torréfaction noire comme source principale de goût. La décoction, longtemps pratique dans les brasseries d’Europe centrale, renforce encore la profondeur maltée. Le Dunkel historique ne ressemble donc pas à une stout fermentée froid : le café brûlé, l’astringence et la torréfaction forte sont étrangers au centre du style.

Le BJCP décrit une bière aux notes de croûte, toast, noisette et parfois chocolat très doux, avec une amertume modérée et une finale assez sèche. Les malts torréfiés modernes désamérisés peuvent aider à ajuster la couleur, mais ils doivent rester un outil discret. Ce qui fait la grandeur d’un Dunkel est sa capacité à paraître riche sans être lourd : la complexité maltée arrive par couches, tandis que la fermentation lager et l’amertume contenue nettoient la bouche.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Munich dominant ; Pilsner ou Vienna possibles pour ajuster fermentescibilité et couleur.", "Très faible quantité de malt sombre désamérisé possible pour la teinte, sans caractère brûlé."],
      houblons: ["Houblons nobles allemands en soutien, faible arôme."],
      levuresEtMicroorganismes: ["Souche lager propre, laissant le malt Munich au premier plan."],
      ingredientsComplementaires: [],
      profilEau: "Modérément alcaline/minérale pour accompagner les malts sombres, mais sans dureté carbonatée perceptible.",
      empatage: "Décoction traditionnellement très cohérente ; infusion par paliers moderne possible. L’objectif est le Maillard de pain/croûte, non le caramel sucré.",
      ebullitionEtHoublonnage: "Amertume basse à moyenne, juste pour empêcher la richesse maltée de devenir lourde.",
      fermentation: "Fermentation basse propre, faible ester et diacétyle absent.",
      maturation: "Lagering moyen à long pour un malt lisse et une finale propre.",
      profilRecherche: "Une lager brune munichoise profonde en pain et croûte, jamais brûlée, avec une richesse étonnamment buvable."
    },
    sources: [bjcp2021("Munich Dunkel", "8/dark-european-lager/"), ba2026("Munich-Style Dunkel"), HISTORY.munichBeer, TECH.munichMalt]
  },

  schwarzbier: {
    histoireEtOrigines: `Schwarzbier signifie simplement « bière noire », mais le style moderne possède une identité plus précise que son nom générique. La Köstritzer Schwarzbierbrauerei documente une tradition brassicole remontant à 1543 dans la région de Bad Köstritz, en Thuringe. Cette ancienneté ne signifie pas que la Schwarzbier actuelle était brassée exactement de la même manière au XVIe siècle : les levures, le maltage, le refroidissement et la fermentation basse moderne se sont transformés. Elle démontre néanmoins qu’une tradition de bière sombre est profondément enracinée dans l’Allemagne centrale.

La Schwarzbier contemporaine est une lager noire étonnamment légère. Le malt sombre peut évoquer cacao, café doux, pain grillé ou croûte, mais les caractères brûlés, acrides et très torréfiés d’une stout sont généralement inappropriés. Cette distinction est devenue plus facile à obtenir avec des malts torréfiés désamérisés et des techniques permettant d’extraire la couleur sans trop d’astringence.

Comparée au Munich Dunkel, la Schwarzbier est souvent plus sombre, un peu plus sèche et légèrement plus marquée par le malt torréfié ; comparée à une porter, elle est plus propre, moins fruitée et beaucoup plus retenue. Cette position intermédiaire explique son charme : elle a l’apparence d’une bière massive mais le comportement d’une lager de grande buvabilité.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Pilsner et/ou Munich comme base ; malt chocolat léger ou malt torréfié désamérisé en faible proportion pour couleur et cacao sans brûlé."],
      houblons: ["Houblons allemands nobles ou apparentés, amertume faible à moyenne et arôme discret."],
      levuresEtMicroorganismes: ["Souche lager propre et atténuante."],
      ingredientsComplementaires: [],
      profilEau: "Minéralité modérée ; l’alcalinité peut être ajustée pour les malts sombres mais une eau trop dure accentue l’âcreté.",
      empatage: "Empâtage visant une finale sèche. Les malts très sombres peuvent être ajoutés tardivement ou choisis désamérisés pour limiter astringence et brûlé.",
      ebullitionEtHoublonnage: "Amertume suffisante pour nettoyer le malt sombre, sans houblon aromatique dominant.",
      fermentation: "Fermentation basse nette, aucun ester fruité dominant.",
      maturation: "Lagering permettant au cacao, au pain sombre et à l’amertume de se fondre.",
      profilRecherche: "Noire visuellement, légère dans son comportement : cacao et pain sombre propres, torréfaction contenue, finale sèche."
    },
    sources: [bjcp2021("Schwarzbier", "8/dark-european-lager/"), ba2026("German-Style Schwarzbier"), HISTORY.schwarzbier, TECH.munichMalt]
  },

  "international-dark-lager": {
    histoireEtOrigines: `L’International Dark Lager est la sœur sombre de l’International Pale Lager. Elle ne possède pas de naissance régionale unique : on la rencontre partout où les grandes lagers pâles ont généré une déclinaison brune ou noire destinée à offrir davantage de malt, de couleur ou d’image traditionnelle sans changer profondément le profil de fermentation.

Le BJCP la décrit comme une bière souvent plus douce et plus maltée que la pale lager internationale, mais toujours très accessible. Le caractère sombre peut provenir de malts caramel, de malts torréfiés doux, de sirops colorants autorisés selon les marchés ou d’un assemblage de plusieurs matières premières. La torréfaction ne doit généralement pas devenir aussi ferme que dans une Schwarzbier, et la fermentation reste neutre.

Cette catégorie rappelle une réalité importante de l’encyclopédie : toutes les familles n’ont pas une histoire romantique. Certaines naissent de logiques de portefeuille commercial, de standardisation et d’adaptation aux goûts locaux. Cela n’enlève rien au savoir-faire nécessaire pour produire une dark lager stable et propre ; cela signifie simplement que son identité est fonctionnelle et internationale plutôt que liée à une ville ou à un procédé ancestral.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Base lager pâle avec Vienna/Munich, caramel ou petite quantité de malt noir doux ; adjoints comme maïs/riz possibles."],
      houblons: ["Houblons faibles à modérés, généralement peu aromatiques."],
      levuresEtMicroorganismes: ["Souche lager neutre."],
      ingredientsComplementaires: ["Selon les traditions industrielles, des colorants de malt ou extraits peuvent exister ; ils ne sont pas requis pour une interprétation artisanale."],
      profilEau: "Neutre à modérément minérale.",
      empatage: "Bonne fermentescibilité afin que la couleur sombre ne s’accompagne pas automatiquement d’un corps lourd.",
      ebullitionEtHoublonnage: "Faible amertume et peu d’arôme de houblon.",
      fermentation: "Fermentation basse propre et neutre.",
      maturation: "Garde froide, clarification et stabilisation.",
      profilRecherche: "Une lager sombre internationale douce et nette : davantage de malt et de couleur, mais toujours tournée vers l’accessibilité."
    },
    sources: [bjcp2021("International Dark Lager", "2/international-lager/"), ba2026("International dark lager categories"), TECH.w3470]
  }
};
