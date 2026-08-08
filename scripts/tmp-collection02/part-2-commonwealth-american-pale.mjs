import { ba2026, bjcp2021, REFERENCES } from "./sources.mjs";

export const part2 = {
  "golden-blonde-ale": {
    histoireEtOrigines: `Golden Ale et Blonde Ale sont des termes de marché autant que des catégories techniques. Ils désignent généralement des ales claires, accessibles et modérément alcoolisées, mais leur sens varie selon les pays. En Grande-Bretagne, la Golden Ale moderne s’est développée dans les années 1980 comme une cask ale pâle et houblonnée ; aux États-Unis, Blonde Ale décrit plus volontiers une bière craft douce, équilibrée et moins amère que l’American Pale Ale. Dans d’autres marchés, « golden » ou « blonde » peut simplement signaler la couleur et la facilité d’accès.

Cette diversité explique pourquoi il serait trompeur de chercher une recette fondatrice. Le mouvement général apparaît avec la démocratisation des malts pâles, puis s’accélère lorsque les petites brasseries veulent offrir une alternative de fermentation haute aux lagers blondes industrielles. Les Golden/Blonde Ales deviennent souvent la porte d’entrée d’une gamme : couleur claire, alcool contenu, amertume mesurée et profil suffisamment propre pour être immédiatement lisible.

Le style contemporain peut donc aller d’une Blonde Ale américaine presque maltée à une Golden Ale britannique franchement houblonnée. Ce qui les rapproche est moins une liste d’ingrédients qu’une intention sensorielle : bière claire, nette, rafraîchissante, sans caramel lourd ni fermentation envahissante.`,
    recette: {
      profilUnique: false,
      explicationProfil: "Golden/Blonde Ale est une famille transversale. La version britannique est généralement plus houblonnée et sèche ; la version américaine plus douce et équilibrée.",
      maltsEtCereales: [
        "Malt pale, two-row ou Pilsner comme base claire.",
        "Petites quantités de blé ou de malt légèrement biscuité possibles ; crystal absent ou très faible pour préserver la couleur et la fraîcheur."
      ],
      houblons: [
        "Houblonnage faible à modéré dans une Blonde Ale américaine, plus soutenu dans une Golden Ale britannique.",
        "Variétés florales, herbacées, agrumées ou fruitées selon l’origine ; le houblon ne doit pas saturer le palais comme une IPA."
      ],
      levuresEtMicroorganismes: [
        "Souche d’ale propre, américaine, britannique légère ou Kölsch-like selon l’interprétation."
      ],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité et minéralité modérée. L’eau peut être légèrement orientée sulfate pour une version sèche ou chlorure pour une version plus douce.",
      empatage: "Infusion simple donnant un corps léger à moyen-léger et une bonne atténuation.",
      ebullitionEtHoublonnage: "Amertume propre et mesurée, avec ajouts tardifs facultatifs selon le niveau d’expression du houblon recherché.",
      fermentation: "Fermentation haute propre, avec esters faibles à modérés.",
      maturation: "Courte ; une clarification fraîche améliore la brillance mais un lagering long n’est pas requis.",
      profilRecherche: "Une ale dorée facile d’accès, nette et rafraîchissante, dont la simplicité apparente repose sur un équilibre précis."
    },
    sources: [ba2026("Golden or Blonde Ale"), bjcp2021("18A Blonde Ale", "18/"), bjcp2021("12A British Golden Ale", "12/pale-commonwealth-beer/")]
  },

  "australian-sparkling-ale": {
    histoireEtOrigines: `L’Australian Sparkling Ale est l’un des rares styles australiens à disposer d’une continuité historique très identifiable. Coopers situe la première production de sa Sparkling Ale en 1862, lorsque Thomas Cooper développe à Adélaïde une bière de fermentation haute naturellement conditionnée. La maison a conservé une levure propre et une pratique de refermentation qui font aujourd’hui encore partie de l’identité du produit.

Le nom « sparkling » renvoie à une effervescence plus vive que celle de nombreuses ales britanniques traditionnelles. Dans le climat australien, cette forte carbonatation, une atténuation élevée et une amertume nette donnent une bière rafraîchissante malgré une force alcoolique respectable. Le profil associe typiquement malt doux, esters de pomme ou de poire, houblon herbacé/épicé et finale sèche. Le fameux sédiment de levure peut être laissé au fond ou remis en suspension, ce qui modifie fortement l’apparence sans changer la nature du style.

Le BJCP classe l’Australian Sparkling Ale parmi les Pale Commonwealth Beers. Il souligne également le rôle historique de variétés de houblon australiennes comme Pride of Ringwood, tout en rappelant que le style n’est pas une American Pale Ale tropicale avant l’heure. Sa personnalité vient de l’interaction entre fermentation expressive, atténuation, carbonatation et amertume plutôt que d’un dry-hop massif.`,
    recette: {
      profilUnique: true,
      explicationProfil: "Le modèle historique est étroitement associé à Coopers : ale pâle, très atténuée, vive, fruitée, amère et naturellement conditionnée.",
      maltsEtCereales: [
        "Malt pale ou ale australien comme base, avec un profil de céréale et de pain léger.",
        "Les recettes historiques australiennes ont pu employer sucres ou adjuncts, mais une version moderne peut rester majoritairement ou totalement maltée."
      ],
      houblons: [
        "Pride of Ringwood est le marqueur australien classique, apportant une amertume ferme et un caractère herbacé/épicé particulier.",
        "Le houblon aromatique reste modéré : l’équilibre avec les esters de levure est plus important qu’une saturation à cru."
      ],
      levuresEtMicroorganismes: [
        "Souche d’ale australienne expressive, produisant notamment des esters rappelant pomme, poire et parfois une trace de banane.",
        "La refermentation en contenant est un élément traditionnel majeur du modèle Coopers."
      ],
      ingredientsComplementaires: [],
      profilEau: "Profil minéral modéré ; assez de calcium pour fermentation et clarification, sans dureté qui accentuerait excessivement l’amertume.",
      empatage: "Empâtage orienté vers une forte fermentescibilité afin d’obtenir une finale sèche malgré une densité initiale non négligeable.",
      ebullitionEtHoublonnage: "Amertume moyenne à ferme, houblonnage aromatique contenu.",
      fermentation: "Fermentation haute relativement chaude selon la souche, en recherchant un fruité net sans solvants ni phénols indésirables.",
      maturation: "Conditionnement naturel en bouteille, canette ou keg possible ; la seconde fermentation produit une carbonatation élevée et peut laisser un dépôt de levure.",
      profilRecherche: "Une ale australienne dorée, fortement pétillante, fruitée et sèche, avec une amertume nette et un caractère de levure immédiatement reconnaissable."
    },
    sources: [bjcp2021("12B Australian Sparkling Ale", "12/pale-commonwealth-beer/"), ba2026("Australian-Style Pale Ale / Sparkling context"), REFERENCES.coopersSparkling]
  },

  "classic-australian-pale-ale": {
    histoireEtOrigines: `La Classic Australian Pale Ale désigne l’école australienne issue de la tradition de fermentation haute locale plutôt que la simple transplantation de l’American Pale Ale. Coopers constitue la référence la plus évidente : sa culture de levure, le conditionnement naturel et un équilibre entre fruité, malt, amertume et carbonatation ont maintenu une identité d’ale australienne alors que le marché national était largement dominé par les lagers.

L’expression « classic » permet de distinguer cette lignée des pale ales craft australiennes plus récentes, souvent bâties autour de Cascade, Galaxy, Vic Secret ou d’autres houblons modernes. Dans une pale ale australienne classique, les esters de fermentation et la texture issue de la refermentation peuvent être aussi importants que le houblon. Le trouble léger provoqué par la levure n’est pas celui d’une Hazy Pale Ale moderne : il vient d’un conditionnement vivant et peut varier selon la façon de verser.

Coopers Original Pale Ale illustre aujourd’hui cette logique avec une bière tout malt, naturellement conditionnée, où fruité et floral de fermentation s’équilibrent avec une amertume croquante. Le style doit donc être compris comme un patrimoine brassicole vivant, pas comme une recette figée du XIXe siècle.`,
    recette: {
      profilUnique: true,
      explicationProfil: "L’école classique australienne met davantage l’accent sur la levure, la refermentation et l’équilibre que sur la démonstration de houblons modernes.",
      maltsEtCereales: [
        "Base de malt pale/ale, souvent assez simple afin de laisser apparaître la fermentation.",
        "Malt de spécialité discret ; la couleur reste dorée à ambrée claire."
      ],
      houblons: [
        "Houblon australien traditionnel ou variétés sobres, avec amertume moyenne et arôme floral/herbacé mesuré.",
        "Les houblons tropicaux modernes ne sont pas interdits dans une interprétation actuelle, mais ne doivent pas effacer l’identité classique."
      ],
      levuresEtMicroorganismes: [
        "Souche d’ale fruitée ; une levure de maison avec forte identité est particulièrement pertinente.",
        "Refermentation en bouteille, canette ou keg pour une carbonatation naturelle et éventuellement un dépôt fin."
      ],
      ingredientsComplementaires: [],
      profilEau: "Minéralité modérée, sans accent extrême sur sulfate ou chlorure.",
      empatage: "Infusion simple donnant une bonne atténuation et un corps moyen-léger.",
      ebullitionEtHoublonnage: "Amertume propre, houblon tardif modéré. Le style ne repose pas sur un dry-hop massif.",
      fermentation: "Fermentation haute permettant des esters fruités nets, puis clarification partielle.",
      maturation: "Conditionnement vivant et relativement court ; la bière peut être servie claire ou avec une partie de la levure remise en suspension selon la tradition de service.",
      profilRecherche: "Une pale ale australienne équilibrée, fruitée, naturellement vive et plus guidée par la fermentation que par la saturation de houblon."
    },
    sources: [ba2026("Classic Australian-Style Pale Ale"), REFERENCES.coopersPale, REFERENCES.coopersSparkling]
  },

  "australian-pale-ale": {
    histoireEtOrigines: `L’Australian Pale Ale moderne se construit à la rencontre de deux histoires. La première est locale : Coopers et d’autres traditions d’ale australiennes maintiennent fermentation haute, fruité et conditionnement naturel. La seconde est l’explosion craft des années 1990 et 2000, qui adopte le langage des American Pale Ales tout en profitant d’un programme de sélection de houblons australiens de plus en plus distinctifs.

Des variétés comme Galaxy, puis Vic Secret, Enigma et d’autres houblons australiens offrent des profils de fruit de la passion, agrumes, pêche ou résine qui donnent progressivement une signature nationale aux pale ales contemporaines. L’Australian Pale Ale peut donc être plus tropicale et sèche que le modèle classique, avec un houblonnage tardif ou à cru plus appuyé. Coopers illustre lui-même cette évolution avec Pacific Pale Ale, lancé initialement en 2017 et dry-hoppé avec Galaxy, Vic Secret et Melba.

La catégorie reste large : certaines bières se rapprochent d’une American Pale Ale fabriquée avec des ingrédients australiens, d’autres recherchent un équilibre plus doux et plus « pacifique », et d’autres encore empruntent aux hazy pale ales. Il faut donc décrire une école contemporaine plutôt qu’une recette canonique.`,
    recette: {
      profilUnique: false,
      explicationProfil: "Australian Pale Ale moderne couvre plusieurs interprétations, généralement claires à légèrement troubles, sèches et portées par des houblons australiens ou du Pacifique.",
      maltsEtCereales: [
        "Malt pale ou ale australien, parfois complété par Pilsner pour alléger la couleur.",
        "Petite proportion de blé ou d’avoine possible pour mousse et texture ; crystal souvent faible afin de garder le profil frais."
      ],
      houblons: [
        "Galaxy, Vic Secret, Enigma et autres variétés australiennes sont emblématiques, souvent complétées par des houblons néo-zélandais ou américains.",
        "Whirlpool et dry-hop fréquents, avec amertume moyenne plutôt que brutale."
      ],
      levuresEtMicroorganismes: [
        "Souche ale propre à légèrement fruitée ; certaines versions exploitent une levure australienne expressive."
      ],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité, chlorure et sulfate équilibrés ou légèrement orientés vers le sulfate pour une finale croquante.",
      empatage: "Infusion simple favorisant une atténuation suffisante pour laisser le houblon brillant.",
      ebullitionEtHoublonnage: "Amertume de base propre, puis forte part du houblon en fin d’ébullition, whirlpool et/ou dry-hop.",
      fermentation: "Fermentation haute nette ; le fruité de levure doit compléter et non concurrencer les fruits tropicaux du houblon.",
      maturation: "Courte et protégée de l’oxygène. Conditionnement rapide pour préserver les huiles de houblon.",
      profilRecherche: "Une pale ale moderne, vive et tropicale, où les houblons australiens donnent une identité claire sans la puissance d’une IPA."
    },
    sources: [ba2026("Australian-Style Pale Ale"), REFERENCES.coopersPale, REFERENCES.coopersPacific]
  },

  "international-pale-ale": {
    histoireEtOrigines: `International Pale Ale est moins un style historique qu’une catégorie de convergence. À mesure que le mouvement craft s’est diffusé hors du Royaume-Uni et des États-Unis, des brasseurs d’Europe, d’Asie, d’Amérique latine et du Pacifique ont repris l’architecture de la pale ale — malt clair, fermentation haute, houblon lisible — en utilisant leurs propres ingrédients, leurs contraintes locales et une culture du houblon devenue mondiale.

Cette internationalisation est particulièrement visible depuis les années 1990-2000. Les variétés américaines sont exportées partout, tandis que les programmes de sélection de Nouvelle-Zélande, d’Australie, d’Allemagne ou de France créent de nouveaux profils. Une pale ale peut alors associer malt européen, levure britannique et houblons néo-zélandais sans appartenir complètement à une école nationale. « International » sert à reconnaître cette réalité plutôt qu’à imposer une origine artificielle.

La catégorie doit rester définie par l’équilibre : plus houblonnée qu’une simple blonde dans beaucoup d’exemples, moins intense qu’une IPA, avec une base maltée claire et une fermentation propre. Son histoire est donc celle de la mondialisation du craft et des matières premières plus que celle d’une ville ou d’une brasserie fondatrice.`,
    recette: {
      profilUnique: false,
      explicationProfil: "Catégorie volontairement large : la recette doit être cohérente comme Pale Ale mais peut combiner ingrédients et techniques de plusieurs traditions nationales.",
      maltsEtCereales: [
        "Base pale, Pilsner ou ale locale, choisie pour fournir une charpente claire et propre.",
        "Malts de spécialité légers possibles pour biscuit, pain ou légère couleur ambrée ; éviter la lourdeur caramélisée."
      ],
      houblons: [
        "Toute origine pertinente : britannique, américaine, européenne, australienne, néo-zélandaise ou émergente.",
        "L’aromatique doit être identifiable mais rester au niveau d’une pale ale plutôt que d’une IPA extrême."
      ],
      levuresEtMicroorganismes: [
        "Souche d’ale neutre ou légèrement expressive, choisie pour soutenir le profil de houblon et de malt."
      ],
      ingredientsComplementaires: [],
      profilEau: "Ajusté au profil voulu : sulfate pour une finale sèche, chlorure pour davantage de rondeur, avec alcalinité faible à modérée.",
      empatage: "Infusion simple, généralement orientée vers une bonne fermentescibilité.",
      ebullitionEtHoublonnage: "Amertume moyenne, ajouts tardifs et dry-hop possibles selon l’école choisie.",
      fermentation: "Fermentation haute propre, sans caractère phénolique fort sauf interprétation explicitement hybride.",
      maturation: "Courte, surtout si le houblon aromatique est central.",
      profilRecherche: "Une pale ale contemporaine équilibrée et reconnaissable, libre de son origine géographique mais disciplinée dans son intensité."
    },
    sources: [ba2026("International-Style Pale Ale"), bjcp2021("18B American Pale Ale — comparative reference", "18/"), REFERENCES.nzMotueka]
  },

  "new-zealand-pale-ale": {
    histoireEtOrigines: `La New Zealand Pale Ale est un style contemporain né de la rencontre entre le modèle de la pale ale craft et l’identité aromatique spectaculaire des houblons néo-zélandais. La Nouvelle-Zélande possède une longue histoire de culture du houblon, mais la reconnaissance internationale actuelle repose largement sur des programmes de sélection modernes qui ont produit des variétés capables d’évoquer agrumes, fruits tropicaux, raisin blanc, groseille, fruits à noyau ou herbes fraîches.

Nelson Sauvin devient l’un des symboles de cette nouvelle identité au début du XXIe siècle, bientôt rejoint par Motueka, Riwaka et de nombreuses autres variétés. New Zealand Hops décrit par exemple Motueka comme un croisement incluant une lignée Saazer, avec un profil marqué de citron vert frais, zestes et fruits tropicaux. Ces houblons permettent de construire des pale ales immédiatement distinctes des classiques américaines centrées sur Cascade, Centennial ou Simcoe.

La Brewers Association reconnaît explicitement les styles New Zealand Pale Ale et New Zealand IPA depuis 2021. L’enjeu n’est pas seulement d’utiliser un houblon cultivé en Nouvelle-Zélande : il faut faire de ce profil aromatique le cœur de la bière, sur une base claire, sèche et suffisamment discrète pour que les huiles de houblon restent précises.`,
    recette: {
      profilUnique: true,
      explicationProfil: "La signature vient d’un houblonnage néo-zélandais expressif sur une base de pale ale claire et buvable.",
      maltsEtCereales: [
        "Malt pale, ale ou Pilsner comme base, avec éventuellement un peu de Vienna pour soutenir le fruit sans caramel lourd.",
        "Blé ou avoine possibles en quantité modérée selon la texture recherchée."
      ],
      houblons: [
        "Motueka, Nelson Sauvin, Riwaka, Nectaron, Pacifica, Wai-iti ou autres variétés néo-zélandaises selon le profil recherché.",
        "Whirlpool et dry-hop mettent en avant citron vert, raisin blanc, fruits tropicaux, agrumes ou fruits à noyau ; l’amertume reste moyenne."
      ],
      levuresEtMicroorganismes: [
        "Souche américaine ou autre ale propre pour laisser le houblon au premier plan ; une souche légèrement fruitée peut renforcer le registre tropical."
      ],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité. Sulfate modéré pour la netteté, avec assez de chlorure pour éviter une bouche maigre.",
      empatage: "Infusion simple orientée vers une bonne atténuation et un corps léger à moyen-léger.",
      ebullitionEtHoublonnage: "Amertume propre, puis charge importante en fin d’ébullition/whirlpool et dry-hop. Éviter une extraction végétale excessive qui masquerait les caractères variétaux.",
      fermentation: "Fermentation haute propre ; gestion stricte de l’oxygène après fermentation.",
      maturation: "Très courte et fraîche, avec conditionnement rapide après dry-hop.",
      profilRecherche: "Une pale ale nette et lumineuse où les houblons néo-zélandais donnent un bouquet de citron vert, fruits tropicaux, raisin ou fruits à noyau sans devenir une IPA."
    },
    sources: [ba2026("New Zealand-Style Pale Ale"), REFERENCES.nzMotueka, bjcp2021("Pale Commonwealth and American Pale Ale — comparative context", "18/")]
  },

  "american-pale-ale": {
    histoireEtOrigines: `L’American Pale Ale est l’un des styles fondateurs du mouvement craft américain moderne. Sa généalogie remonte aux pale ales britanniques, mais son identité se cristallise lorsque les petits brasseurs américains commencent à considérer les nouveaux houblons locaux non plus comme de simples amérisants, mais comme une signature aromatique. Anchor Liberty Ale, brassée dès 1975 avec Cascade, préfigure cette révolution houblonnée.

Sierra Nevada Pale Ale devient ensuite le grand repère. Ken Grossman fonde Sierra Nevada en 1980 et bâtit sa Pale Ale autour de houblon Cascade en cônes entiers, d’un malt two-row et d’une touche caramélisée. La brasserie rappelle qu’au début la bière semblait excessivement amère à de nombreux consommateurs ; elle devient pourtant l’une des icônes du craft et contribue à populariser les caractères d’agrumes, de pin et de résine qui seront associés pendant des décennies à la bière américaine artisanale.

L’American Pale Ale des années 1980-2000 est souvent ambrée, avec davantage de crystal malt que beaucoup de versions actuelles. L’évolution des houblons et du goût l’a progressivement rendue plus claire, plus sèche et parfois plus aromatique. Elle reste cependant distincte de l’American IPA par son intensité et sa force : le malt doit encore jouer un rôle visible, l’amertume rester maîtrisée et la bière conserver une grande buvabilité.`,
    recette: {
      profilUnique: true,
      explicationProfil: "Le modèle américain classique marie une base maltée claire à un houblon américain ou du Nouveau Monde nettement perceptible, sans atteindre la puissance d’une IPA.",
      maltsEtCereales: [
        "Malt two-row pale comme base.",
        "Crystal/caramel faible à modéré dans l’école classique ; beaucoup de versions modernes réduisent fortement cette proportion pour une couleur plus pâle et une finale plus sèche."
      ],
      houblons: [
        "Cascade est historique ; Centennial, Chinook, Simcoe, Amarillo, Citra, Mosaic et de nombreuses variétés modernes sont aujourd’hui courantes.",
        "Amertume moyenne à soutenue, ajouts tardifs importants et dry-hop fréquent mais moins massif qu’une IPA moderne."
      ],
      levuresEtMicroorganismes: [
        "Souche d’ale américaine propre, fortement atténuante, avec esters faibles."
      ],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité, sulfate souvent supérieur au chlorure dans l’école classique afin de rendre l’amertume nette ; les versions modernes peuvent rechercher davantage d’équilibre.",
      empatage: "Infusion simple donnant un corps moyen-léger et une finale sèche sans devenir aqueuse.",
      ebullitionEtHoublonnage: "Amertume en chaudière, puis couches d’arôme en fin d’ébullition, whirlpool et éventuellement dry-hop.",
      fermentation: "Fermentation haute propre, généralement autour de la plage neutre de la souche choisie.",
      maturation: "Courte ; protéger strictement de l’oxygène et servir fraîche pour conserver le houblon.",
      profilRecherche: "Une pale ale américaine équilibrée : malt assez présent pour soutenir la pinte, houblon assez expressif pour la définir, finale propre et sèche."
    },
    sources: [bjcp2021("18B American Pale Ale", "18/"), ba2026("American-Style Pale Ale"), REFERENCES.sierraStory, REFERENCES.sierraPale, REFERENCES.smithsonianPale]
  },

  "american-extra-special-bitter": {
    histoireEtOrigines: `L’American Extra Special Bitter est un exemple de traduction plutôt que de tradition autonome. Lorsque les microbrasseries américaines des années 1980 et 1990 s’inspirent des Bitters britanniques, elles disposent de malts, de levures et surtout de houblons locaux beaucoup plus expressifs. Certaines conservent une base maltée et une force proches d’une Strong Bitter/ESB tout en augmentant l’aromatique d’agrumes, de pin ou de résine.

Le nom est donc paradoxal : « ESB » renvoie fortement à la référence britannique de Fuller’s et à la logique d’une Strong Bitter, tandis que l’adjectif American signale un déplacement vers les ingrédients du Nouveau Monde. Les guides de la Brewers Association ont d’ailleurs longtemps laissé aux concours la possibilité de distinguer les caractères de houblons anglais et américains dans les Extra Special Bitters.

Ce style se situe historiquement avant l’hégémonie de l’IPA moderne, à une époque où une bière ambrée, maltée et assez houblonnée pouvait être présentée comme une adaptation américaine d’une ale anglaise plutôt que comme une IPA. Il reste intéressant parce qu’il conserve un centre malté plus riche et des esters possibles tout en permettant un houblon américain nettement lisible.`,
    recette: {
      profilUnique: true,
      explicationProfil: "Base de Strong Bitter/ESB, mais avec une expression de houblon américain plus nette et parfois une fermentation plus propre.",
      maltsEtCereales: [
        "Pale ale malt britannique ou pale malt américain comme base.",
        "Crystal/caramel modéré pour cuivre, biscuit et toffee ; malts toastés possibles en petite quantité."
      ],
      houblons: [
        "Cascade, Centennial, Willamette, Chinook ou autres houblons américains, éventuellement combinés à des variétés anglaises.",
        "Amertume moyenne à forte, avec un houblon tardif plus aromatique qu’une ESB classique."
      ],
      levuresEtMicroorganismes: [
        "Souche anglaise modérément fruitée ou souche américaine plus neutre selon l’équilibre souhaité."
      ],
      ingredientsComplementaires: [],
      profilEau: "Profil plutôt sulfaté pour maintenir une finale sèche face au malt caramel.",
      empatage: "Infusion simple avec corps moyen et atténuation suffisante pour éviter la lourdeur.",
      ebullitionEtHoublonnage: "Amertume classique puis ajouts tardifs américains ; dry-hop léger à modéré possible.",
      fermentation: "Fermentation haute propre à modérément fruitée.",
      maturation: "Courte à moyenne, avec service en keg, bouteille ou cask selon l’interprétation.",
      profilRecherche: "Une ale cuivre à la charpente maltée britannique, traversée par un houblon américain plus vif sans devenir une IPA."
    },
    sources: [ba2026("English-Style Extra Special Bitter — English/American hop character note"), REFERENCES.fullers, REFERENCES.sierraPale]
  },

  "juicy-hazy-pale-ale": {
    histoireEtOrigines: `La Juicy or Hazy Pale Ale est l’un des produits directs de la révolution des IPA troubles du Nord-Est américain. Lorsque des bières comme Heady Topper deviennent cultes dans les années 2000 puis 2010, de nombreux brasseurs développent une nouvelle esthétique houblonnée : arômes massifs de fruits, amertume perçue plus douce, texture souple, trouble stable et interaction plus visible entre levure, protéines de céréales et houblon.

La logique descend rapidement vers des bières moins fortes que l’IPA. La Hazy Pale Ale conserve la texture et le bouquet d’une NEIPA mais vise une force plus proche d’une pale ale. La Brewers Association reconnaît désormais une catégorie Juicy or Hazy Pale Ale avec houblon moyen-fort à très fort, amertume perçue basse à moyenne et possibilité d’utiliser avoine ou blé pour favoriser texture et trouble.

Le trouble ne doit pas être confondu avec un défaut de procédé. Une bonne version n’est ni farineuse, ni chargée de particules, ni oxydée. La stabilité colloïdale, l’usage de houblons tardifs, la gestion des polyphénols et des protéines et surtout la maîtrise de l’oxygène après fermentation sont essentielles. Le style est donc technologiquement exigeant malgré son apparence volontairement opaque.`,
    recette: {
      profilUnique: true,
      explicationProfil: "Version pale ale de l’école hazy : fruit intense, amertume douce, texture souple et alcool modéré.",
      maltsEtCereales: [
        "Malt pale ou Pilsner comme base légère.",
        "Avoine et blé maltés ou floconnés fréquents pour protéines, trouble et texture ; dextrin malt possible avec retenue.",
        "Crystal généralement absent afin de préserver une couleur jaune à orange claire et d’éviter le caramel."
      ],
      houblons: [
        "Citra, Mosaic, Galaxy, Nelson Sauvin, Motueka, Amarillo, El Dorado et autres variétés riches en fruits tropicaux, agrumes ou fruits à noyau.",
        "Faible charge amérisante classique ; l’essentiel du houblon est souvent ajouté au whirlpool et en dry-hop."
      ],
      levuresEtMicroorganismes: [
        "Souche anglaise ou apparentée à expression fruitée, capable de contribuer à la texture et de compléter le houblon.",
        "Une souche comme Verdant IPA illustre cette logique avec abricot, fruits tropicaux et agrumes."
      ],
      ingredientsComplementaires: [],
      profilEau: "Chlorure souvent supérieur au sulfate pour une bouche souple et arrondie ; faible alcalinité indispensable à une base claire.",
      empatage: "Infusion visant une atténuation modérée à bonne sans assécher complètement la texture.",
      ebullitionEtHoublonnage: "Amertume contenue, très gros ajouts tardifs et dry-hop. La quantité seule ne garantit pas la qualité : température, durée de contact et oxygène doivent être maîtrisés.",
      fermentation: "Fermentation haute fruitée mais propre. Certains dry-hops sont réalisés pendant ou juste après la fermentation pour exploiter interactions levure/houblon, mais la biotransformation ne doit pas être traitée comme une règle absolue.",
      maturation: "Très courte. Purge au CO₂, transferts fermés et conditionnement rapide sont essentiels pour éviter brunissement et perte d’arômes.",
      profilRecherche: "Une pale ale trouble et lumineuse, saturée de fruit frais, douce dans l’amertume et moelleuse sans devenir sucrée ni pâteuse."
    },
    sources: [ba2026("Juicy or Hazy Pale Ale"), bjcp2021("21C Hazy IPA — technical lineage", "21/ipa/"), REFERENCES.alchemist, REFERENCES.lallemandVerdant]
  },

  "american-strong-pale-ale": {
    histoireEtOrigines: `L’American Strong Pale Ale apparaît comme une zone intermédiaire du craft américain : plus forte et plus amère qu’une American Pale Ale, mais pas nécessairement construite ou commercialisée comme une IPA. Cette distinction a du sens surtout dans l’histoire des années 1980-2000, lorsque les brasseries multiplient les ales houblonnées sans que le sigle IPA soit encore devenu l’étiquette dominante de presque toute bière fortement aromatique.

La Brewers Association maintient une catégorie American-Style Strong Pale Ale, signe que l’équilibre reste différent de l’American IPA. Le malt peut être plus visible, la couleur aller du pâle au cuivre et l’amertume atteindre un niveau élevé, tout en conservant une force et une structure où la bière reste pensée comme une pale ale amplifiée. Des exemples historiques peuvent se rapprocher de ce que d’autres marchés appelleraient aujourd’hui Extra Pale Ale, Strong Pale Ale ou même IPA légère.

Le style est donc utile pour documenter la continuité plutôt que de tracer une frontière absolue. Il montre comment le craft américain a progressivement augmenté houblon et densité avant que l’IPA ne devienne la catégorie reine.`,
    recette: {
      profilUnique: true,
      explicationProfil: "Pale ale américaine amplifiée : davantage de densité, de houblon et d’amertume, mais avec une charpente maltée encore clairement lisible.",
      maltsEtCereales: [
        "Malt two-row ou pale comme base.",
        "Crystal faible à modéré dans les versions classiques ; Munich ou Vienna possible en petite proportion pour soutenir la force sans sucrosité excessive."
      ],
      houblons: [
        "Houblons américains ou du Nouveau Monde, avec intensité moyenne-forte à forte.",
        "Amertume significative et ajouts tardifs généreux ; dry-hop fréquent."
      ],
      levuresEtMicroorganismes: [
        "Souche américaine propre et bien atténuante, éventuellement levure anglaise modérément fruitée."
      ],
      ingredientsComplementaires: [],
      profilEau: "Profil pauvre en alcalinité, souvent sulfaté pour éviter qu’une densité plus élevée ne donne une finale lourde.",
      empatage: "Infusion orientée vers une bonne fermentescibilité et un corps moyen-léger à moyen.",
      ebullitionEtHoublonnage: "Amertume construite en chaudière et forte charge aromatique tardive ; équilibre plus malté qu’une West Coast IPA très sèche.",
      fermentation: "Fermentation haute propre, contrôle de l’alcool supérieur et des esters.",
      maturation: "Courte ; service frais pour préserver le houblon.",
      profilRecherche: "Une pale ale américaine puissante et houblonnée, mais encore équilibrée par le malt plutôt que totalement dominée par l’architecture d’une IPA."
    },
    sources: [ba2026("American-Style Strong Pale Ale"), REFERENCES.sierraPale, REFERENCES.smithsonianPale]
  }
};
