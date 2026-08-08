import { entry, source, BA, BJCP } from "./collection-08-common.mjs";

export default {
  "cream-ale": entry({
    histoire: `Cream Ale est une réponse américaine au succès croissant des lagers au XIXe siècle. Les brasseurs d'ales, notamment dans le Nord-Est et le Midwest, ont cherché à produire des bières plus pâles, plus nettes et plus désaltérantes que les ales britanniques traditionnelles, tout en conservant une fermentation haute ou hybride. Le terme n'a jamais impliqué l'usage de crème : il évoque surtout une texture douce et une impression de facilité.

La catégorie moderne est plus étroite que l'ensemble des « present-use ales » historiques. Elle admet souvent maïs ou riz, fermentation ale assez propre, parfois levure lager à température plus chaude, puis garde froide. Genesee, qui lance sa Cream Ale en 1960, devient l'un des grands repères commerciaux du style au XXe siècle.

Il faut donc la comprendre comme une famille américaine de transition technologique entre ale et lager, et non comme une recette unique inventée en 1960.`,
    malts: ["Malt pale ou six-rangs ; maïs ou riz possibles pour alléger le corps et la couleur."],
    hops: ["Houblonnage américain ou continental discret, généralement 10-22 IBU dans le cadre BA."],
    yeast: ["Levure ale propre ; certaines versions utilisent une levure lager fermentée relativement chaud ou une fermentation hybride."],
    water: "Eau plutôt douce à modérément minérale pour préserver la netteté.",
    mash: "Empâtage favorisant une bonne fermentescibilité et un corps léger.",
    fermentation: "Fermentation propre, puis garde froide fréquente afin de lisser le profil.",
    maturation: "Conditionnement froid court à modéré ; carbonatation moyenne à vive.",
    target: "Une bière américaine pâle, douce et très nette, à mi-chemin culturel entre ale et lager, sans lourdeur ni caractère fruité marqué.",
    sources: [BA("American-Style Cream Ale"), source("Genesee Brewing Company", "Genesee Cream Ale — style standard since 1960", "https://www.geneseebeer.com/beer/genesee-cream-ale/", "source_producteur_historique")]
  }),

  "california-common-steam-beer": entry({
    histoire: `La California Common est l'héritière moderne des « steam beers » de la côte Ouest américaine. À l'époque où la réfrigération mécanique était rare et coûteuse, des brasseurs de Californie ont utilisé des levures de fermentation basse à des températures plus élevées que celles des lagers européennes. Les récits historiques sur l'origine exacte du mot « steam » sont nombreux et parfois contradictoires ; il vaut mieux le traiter comme un terme commercial et régional ancien plutôt que comme la description certaine d'un procédé unique.

Le style moderne a été largement défini par Anchor Steam Beer à San Francisco : lager yeast fermentée chaud, malt ambré/toasté et houblon Northern Brewer. « Steam Beer » est devenu associé à Anchor, tandis que les guides de concours utilisent généralement California Common comme nom générique.

Ce n'est donc ni une lager chaude quelconque ni une amber ale : son identité vient précisément du croisement entre fermentation basse conduite à température d'ale et profil malt/houblon californien devenu classique.`,
    malts: ["Malt pale et/ou lager ; crystal ou malts toastés pour la robe ambrée et le caractère pain/caramel."],
    hops: ["Northern Brewer historiquement emblématique dans la version Anchor ; amertume moyenne à soutenue."],
    yeast: ["Levure lager capable de fermenter proprement à température relativement élevée."],
    water: "Profil modérément minéral, permettant une amertume ferme sans dureté.",
    mash: "Empâtage simple visant un corps moyen et une bonne atténuation.",
    fermentation: "Fermentation avec levure lager à température d'ale ou proche, puis conditionnement frais.",
    maturation: "Garde fraîche suffisante pour nettoyer le profil sans effacer le malt et le houblon.",
    target: "Une bière ambrée nette, toastée et fermement houblonnée, avec fermentation lager chaude mais sans esters envahissants.",
    sources: [BA("California Common Beer"), source("Anchor Brewing", "Steam Beer / California Common brewing tradition", "https://www.anchorbrewing.com/", "source_producteur_historique")]
  }),

  "kentucky-common": entry({
    histoire: `Kentucky Common est un style américain régional authentique, presque entièrement associé à Louisville entre l'après-guerre de Sécession et la Prohibition. Il s'agissait d'une bière de consommation immédiate : peu coûteuse, rapidement produite, souvent expédiée vers les saloons quelques jours seulement après le brassage et carbonatée en fût pendant la fin de fermentation.

Le BJCP insiste sur un point important : les histoires modernes de sour mash emprunté au bourbon ne sont pas soutenues par les registres de brassage connus. Les grandes brasseries de Louisville autour de 1900 ne montrent pas de longue acidification ni de profil volontairement aigre. La bière était plutôt propre, sèche, légèrement maltée, avec maïs, six-rangs et une petite quantité de malt sombre. Avant la Prohibition, elle aurait représenté environ les trois quarts des ventes locales.

La reconstruction moderne doit donc éviter de transformer Kentucky Common en sour ale historique.`,
    malts: ["Malt d'orge six-rangs ; maïs en proportion notable ; petites quantités de caramel et de malt noir pour couleur et ajustement du moût."],
    hops: ["Houblons américains rustiques pour l'amertume ; houblons continentaux possibles en finition."],
    yeast: ["Levure ale rapide et propre."],
    water: "Eau historiquement carbonatée de Louisville, souvent corrigée par précipitation des carbonates et ajout de gypse.",
    mash: "Empâtage efficace avec céréales adjunctes ; aucune acidification longue n'est requise historiquement.",
    fermentation: "Fermentation haute rapide ; historiquement mise en fût avant fin complète pour carbonatation en cave de saloon.",
    maturation: "Très courte : c'est une bière de service frais, pas une bière de garde.",
    target: "Une ale ambrée à brune, sèche, légèrement caramélisée et céréalière, très buvable, sans acidité volontaire.",
    sources: [BJCP("Historical Beer: Kentucky Common"), source("BJCP", "Kentucky Common historical notes — no evidence for sour mash", "https://www.bjcp.org/style/2021/27/historical-beer/", "source_historique", "2021")]
  }),

  "american-malt-liquor": entry({
    histoire: `American Malt Liquor est avant tout une catégorie industrielle américaine de bière forte et claire, développée au XXe siècle. Le mot « liquor » ne signifie pas distillation : le produit reste une bière fermentée. La catégorie s'est construite autour d'une densité et d'un degré alcoolique supérieurs à ceux des lagers de masse, souvent obtenus avec une forte proportion d'adjuncts et d'enzymes afin de conserver un corps relativement léger malgré la force.

Son histoire est étroitement liée au marché américain d'après-guerre, aux grands formats et à une communication commerciale spécifique. Il serait trompeur de la présenter comme une tradition européenne ancienne ou comme une simple « lager plus forte » : sa logique est industrielle, économique et réglementaire autant que sensorielle.

Les versions de concours contemporaines cherchent une bière pâle, très atténuée et alcoolisée, sans la richesse maltée d'un Bock ni le houblonnage d'une forte Pils.`,
    malts: ["Malt lager ou pale ; maïs, riz ou sucres fermentescibles fréquents afin d'augmenter l'alcool sans alourdir le corps."],
    hops: ["Houblonnage très faible à faible, essentiellement structurel."],
    yeast: ["Levure lager neutre et fortement atténuative ; certaines interprétations hybrides existent."],
    extras: ["Adjuncts céréaliers et/ou sucres très fermentescibles ; enzymes exogènes possibles dans la production industrielle."],
    water: "Eau plutôt douce afin d'éviter toute dureté dans une bière fortement atténuée.",
    mash: "Empâtage orienté vers une forte fermentescibilité et un corps léger.",
    fermentation: "Fermentation propre, avec gestion rigoureuse du degré alcoolique et des composés soufrés.",
    maturation: "Garde froide destinée à lisser alcool et fermentation.",
    target: "Une bière américaine pâle et forte, neutre, sèche à légèrement douce, dont l'alcool est perceptible mais sans richesse maltée massive.",
    sources: [BA("American-Style Malt Liquor")]
  }),

  "pre-prohibition-lager": entry({
    histoire: `Pre-Prohibition Lager, parfois appelée Classic American Pilsner dans des nomenclatures plus anciennes, représente la lager américaine robuste d'avant 1920. Les immigrants germanophones ont adapté les méthodes de lager à l'orge six-rangs américaine, plus riche en protéines, en utilisant souvent du maïs ou du riz pour équilibrer le moût. Contrairement aux lagers américaines légères d'après-guerre, ces bières pouvaient être franchement houblonnées et céréalières.

Le BJCP décrit une lager jaune à dorée, nette, avec malt grainé, parfois une rondeur de maïs, et une amertume nettement plus affirmée que celle d'une American Lager moderne. Les versions au riz sont généralement plus sèches et neutres que celles au maïs.

La Prohibition a interrompu cette continuité ; le style actuel est donc une reconstruction historique basée sur documents et recettes anciennes, pas une chaîne commerciale restée intacte.`,
    malts: ["Malt six-rangs ou deux-rangs ; maïs ou riz en adjunct traditionnel selon la variante."],
    hops: ["Cluster et autres houblons américains historiques ; Saaz ou houblons continentaux possibles en finition."],
    yeast: ["Levure lager propre."],
    water: "Profil variable selon les villes américaines ; sulfates modérés utiles aux versions plus amères.",
    mash: "Empâtage adapté aux adjuncts, historiquement souvent avec cereal mash pour maïs ou riz non précuits.",
    boil: "Ébullition longue et houblonnage plus ferme que dans la lager américaine moderne.",
    fermentation: "Fermentation basse puis lagering complet.",
    maturation: "Garde froide de plusieurs semaines pour netteté et stabilité.",
    target: "Une lager américaine pré-Prohibition robuste, céréalière, sèche à ronde et nettement houblonnée, sans dilution aromatique moderne.",
    sources: [BJCP("Historical Beer: Pre-Prohibition Lager")]
  }),

  "kellerbier-zwickelbier": entry({
    histoire: `Kellerbier signifie littéralement « bière de cave ». Historiquement, le terme désignait une lager servie directement depuis son récipient de maturation, fraîche, non filtrée et non pasteurisée. Le modèle le plus ancien est franconien et proche d'une Märzen ambrée, mais la pratique s'est étendue à Helles, Dunkel et, plus récemment, Pils.

Le BJCP souligne qu'il s'agit presque davantage d'un mode de service et de manipulation que d'un style unique. Zwickelbier, terme lié au robinet d'échantillonnage du tank, est aujourd'hui souvent utilisé commercialement pour des bières non filtrées du même esprit. Une Kellerbier réussie n'est pas une « bière verte » défectueuse : elle doit être pleinement fermentée, propre, simplement plus fraîche, rustique et parfois légèrement levurée que sa base.

La fiche doit donc conserver un profil non unique : une Kellerbier de Märzen n'a pas la même recette qu'une Zwickel-Pils.`,
    unique: false,
    explication: "Mode traditionnel de service et de conditionnement appliqué à plusieurs lagers allemandes ; la recette dépend du style de base.",
    malts: ["Même grist que le style de base : Pilsner, Helles, Märzen ou Dunkel ; aucune céréale spéciale obligatoire."],
    hops: ["Houblons allemands ou tchèques correspondant au style de base ; certaines versions pâles modernes sont un peu plus aromatiques."],
    yeast: ["Levure lager propre ; levure résiduelle naturellement présente puisque la bière n'est pas filtrée."],
    water: "Identique au style de base, souvent profil franconien modéré.",
    mash: "Selon le style de base ; décoction possible dans les interprétations traditionnelles.",
    fermentation: "Fermentation basse complète ; absence de défauts de bière jeune.",
    maturation: "Lagering en cave puis service relativement frais, traditionnellement sans filtration ni pasteurisation.",
    target: "Une lager allemande fraîche, pleinement fermentée, légèrement plus rustique et crémeuse que sa base, jamais verte ou sulfureuse.",
    sources: [BJCP("Historical Beer: Kellerbier")]
  }),

  "grodziskie-piwo-grodziskie": entry({
    histoire: `Piwo Grodziskie, appelé Grätzer dans les sources germanophones, est une bière historique de Grodzisk Wielkopolski en Pologne. Sa combinaison est singulière : faible degré alcoolique, malt de blé fumé au bois de chêne, forte carbonatation, amertume marquée et fermentation haute propre. Contrairement à une confusion moderne récurrente, le style traditionnel n'est pas acide.

Sa réputation dépasse largement Grodzisk à la fin du XIXe et au début du XXe siècle. La production commerciale régulière décline après la Seconde Guerre mondiale et cesse dans les années 1990, avant le mouvement de reconstruction du XXIe siècle. Les sources techniques historiques décrivent jusqu'à 100 % de malt de blé fumé, une longue ébullition et plusieurs souches de levure.

Le profil moderne de référence conserve cette légèreté spectaculaire : fumée sèche, amertume ferme, mousse très abondante et finale nette.`,
    malts: ["Malt de blé fumé au chêne, traditionnellement très majoritaire voire exclusif."],
    hops: ["Houblons polonais, tchèques ou allemands épicés/herbacés ; amertume soutenue pour la faible densité."],
    yeast: ["Levure ale propre et très atténuative ; levure Weizen phénolique inadaptée."],
    water: "Eau modérément dure et sulfatée, favorable à la finale sèche et amère.",
    mash: "Empâtage multi-palier traditionnel pour le blé ; attention à la filtration d'un grist très riche en blé.",
    boil: "Ébullition historiquement longue ; houblonnage ferme, sans fruit moderne dominant.",
    fermentation: "Fermentation haute propre et complète.",
    maturation: "Clarification puis forte carbonatation, traditionnellement en bouteille ; service jeune.",
    target: "Une bière de blé très pâle, légère, sèche, amère et fortement mousseuse, avec fumée de chêne élégante et aucune acidité volontaire.",
    sources: [BJCP("Historical Beer: Piwo Grodziskie"), source("Ron Pattinson", "Grätzer/Grodziskie historical brewing records", "https://barclayperkins.blogspot.com/2007/12/grodziskiegratzer.html", "source_historique_secondaire")]
  }),

  "lichtenhainer": entry({
    histoire: `Lichtenhainer vient de la région de Lichtenhain et Jena, en Thuringe. À la fin du XIXe siècle, cette bière de blé légère, fumée et acidulée était connue bien au-delà de son petit bassin d'origine. Elle appartient à une ancienne constellation de bières de fermentation haute d'Allemagne centrale aujourd'hui presque disparues.

Son identité tient à une combinaison que peu d'autres styles possèdent simultanément : fumée sèche, acidité lactique propre, faible alcool et haute carbonatation. Le BJCP la rapproche d'une Berliner Weisse ancienne, mais avec fumée ; contrairement au Grodziskie, elle est acide et nettement moins amère.

Les reconstructions modernes doivent éviter deux excès : une acidité de kettle sour agressive et une fumée lourde de charcuterie. Le style historique est fin, vif et très buvable.`,
    malts: ["Malt d'orge fumé et malt de blé ; le blé représente souvent environ 30 à 50 %, mais les grists historiques varient."],
    hops: ["Houblonnage très faible ; l'acidité assure l'essentiel de l'équilibre."],
    yeast: ["Levure ale propre et bactéries lactiques ; pas de funk Brett requis."],
    water: "Eau plutôt douce à modérée pour laisser acidité et fumée lisibles.",
    mash: "Empâtage favorisant une bière légère et fortement atténuée.",
    boil: "Houblonnage bas afin de ne pas inhiber inutilement les bactéries lactiques.",
    fermentation: "Fermentation haute et acidification lactique propre, simultanée ou séquentielle selon la reconstruction.",
    maturation: "Courte ; le style se sert jeune et vif.",
    target: "Une wheat ale légère, sèche, acidulée et fumée, où citron et feu de bois sec se répondent sans lourdeur ni funk.",
    sources: [BJCP("Historical Beer: Lichtenhainer"), source("Ron Pattinson", "Lichtenhainer — History by the Glass", "https://www.beeradvocate.com/articles/11624/lichtenainer/", "source_historique_secondaire")]
  }),

  "adambier": entry({
    histoire: `Adambier était une forte bière de fermentation haute de Dortmund, brassée avant que la ville ne devienne mondialement associée aux lagers Export. Des analyses de la fin du XIXe siècle montrent un moût très dense, un degré voisin de 9 % vol. et une acidité lactique réelle. Les textes la décrivent comme fortement houblonnée et longuement vieillie, parfois plus d'un an.

Cette acidité n'était pas celle d'une sour ale rapide : elle apparaissait pendant une longue maturation, de façon comparable à certaines stock ales ou porters anciens. Le profil moderne reconstruit peut donc associer malt sombre, alcool, amertume, fruits oxydatifs contrôlés et acidité développée avec le temps.

Le style a disparu face à la lager industrielle de Dortmund. Les recréations contemporaines restent interprétatives ; il faut distinguer les données historiques documentées des choix de brasseurs modernes.`,
    malts: ["Malts d'orge riches et sombres ; les sources historiques divergent sur l'usage du blé, donc aucune proportion universelle ne doit être imposée."],
    hops: ["Houblonnage historiquement très élevé pour une bière forte de garde ; variétés allemandes ou équivalentes."],
    yeast: ["Levure ale ; microflore de garde susceptible de développer une acidité lactique lente."],
    water: "Profil minéral modéré, compatible avec une forte amertume et une longue garde.",
    mash: "Empâtage riche produisant un moût dense mais suffisamment fermentescible pour supporter une longue maturation.",
    boil: "Ébullition soutenue et houblonnage protecteur important.",
    fermentation: "Fermentation haute primaire, puis évolution secondaire lente.",
    maturation: "Historiquement au moins un an pour les versions documentées ; bois ou grands récipients possibles selon reconstruction.",
    target: "Une forte ale sombre de Dortmund, très maltée et houblonnée, avec acidité de garde intégrée et complexité ancienne sans devenir vinaigrée.",
    sources: [source("Ron Pattinson", "Adambier — analyses historiques de Dortmund", "https://barclayperkins.blogspot.com/2010/04/adambier.html", "source_historique_secondaire"), source("Ron Pattinson", "That 1869 Adambier again", "https://barclayperkins.blogspot.com/2018/07/that-1869-adambier-again.html", "source_historique_secondaire")]
  }),

  "dutch-kuyt-kuit": entry({
    histoire: `Kuyt, Kuit, Koyt ou Keut est un nom ancien des Pays-Bas et des régions voisines, documenté depuis le bas Moyen Âge. Les formes historiques ont beaucoup varié selon les villes, les époques et les règles fiscales. Il serait donc faux d'imaginer une recette médiévale unique restée stable pendant des siècles.

Les reconstructions modernes se concentrent sur une version houblonnée à forte proportion d'avoine, avec orge et blé, inspirée des règlements urbains hollandais. Le style a connu une renaissance récente via des brasseurs néerlandais et des catégories de concours. Ron Pattinson rappelle que le terme s'est appliqué à des bières de force et de composition diverses et que les toutes premières formes pouvaient encore appartenir au monde du gruit avant la généralisation du houblon.

La fiche doit donc présenter le Kuit moderne comme une reconstruction documentée d'une famille historique, pas comme une photographie exacte du XIVe siècle.`,
    malts: ["Orge maltée, avoine et blé dans des proportions significatives ; les reconstructions modernes mettent souvent l'avoine au premier plan."],
    hops: ["Houblons européens épicés ou herbacés ; amertume moyenne, sans aromatique moderne envahissante."],
    yeast: ["Levure ale propre à légèrement fruitée."],
    water: "Profil modéré, laissant céréales et texture s'exprimer.",
    mash: "Empâtage multi-palier utile pour gérer avoine et blé et préserver une filtration correcte.",
    fermentation: "Fermentation haute avec atténuation moyenne à élevée.",
    maturation: "Courte à modérée ; conditionnement visant une texture céréalière mais non pâteuse.",
    target: "Une ale hollandaise historique/reconstruite, céréalière et souple, où avoine, orge et blé forment le cœur du profil.",
    sources: [BA("Dutch-Style Kuit, Kuyt or Koyt"), source("Ron Pattinson", "Kuit — History by the Glass", "https://www.beeradvocate.com/articles/10251/kuit/", "source_historique_secondaire")]
  })
};
