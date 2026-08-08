import { ba2026, BJCP, REF } from "./sources.mjs";

const recipe = ({
  profilUnique = true,
  explicationProfil = "",
  maltsEtCereales,
  houblons,
  levuresEtMicroorganismes,
  ingredientsComplementaires = [],
  profilEau,
  empatage,
  ebullitionEtHoublonnage,
  fermentation,
  maturation,
  profilRecherche
}) => ({
  profilUnique,
  explicationProfil,
  maltsEtCereales,
  houblons,
  levuresEtMicroorganismes,
  ingredientsComplementaires,
  profilEau,
  empatage,
  ebullitionEtHoublonnage,
  fermentation,
  maturation,
  profilRecherche
});

export const porterPatches = {
  porter: {
    histoireEtOrigines: `Le porter est l’un des grands tournants de l’histoire brassicole moderne. Il apparaît à Londres au début du XVIIIe siècle dans une capitale en pleine croissance, où une population nombreuse consomme de la bière dans les tavernes tandis que le commerce, les docks et les métiers de transport structurent la vie urbaine. Les sources historiques montrent une évolution progressive des brown beers londoniennes vers une bière plus houblonnée, apte à la garde, et non l’invention soudaine d’un homme isolé. L’ancien récit selon lequel Ralph Harwood aurait créé vers 1722 une bière appelée « entire » pour reproduire en un seul brassin un mélange de trois bières servi au comptoir a longtemps été répété ; les historiens modernes considèrent cette explication comme beaucoup trop nette pour rendre compte de la documentation disponible.

Le nom « porter » semble s’être imposé parce que cette bière était particulièrement populaire parmi les nombreux travailleurs chargés de porter marchandises, colis et charges dans Londres. Le phénomène dépasse toutefois largement le folklore des porteurs. Le porter devient pendant plus d’un siècle une bière de masse, produite dans des établissements dont l’échelle impressionne les visiteurs. Sa capacité à être brassé, stocké et assemblé en grands volumes favorise l’essor de grandes brasseries londoniennes et de cuves de garde gigantesques. Il est exporté bien au-delà de l’Angleterre : vers l’Amérique du Nord, l’Irlande, l’Europe continentale, la Baltique, l’Inde et d’autres marchés de l’Empire et du commerce britannique.

Sa recette évolue sans cesse. Les porters du XVIIIe siècle ne ressemblent pas exactement aux porters modernes : changements de gravité, de fiscalité, de malts, de vieillissement et de techniques bouleversent la famille. L’invention et l’adoption du black malt au XIXe siècle permettent notamment d’obtenir une couleur sombre avec une proportion moindre de malt fortement torréfié, tandis que l’industrialisation et les contraintes des guerres modifient encore les formulations. Le mot « stout », qui signifiait d’abord simplement fort ou robuste, s’applique à des « stout porters » avant de devenir progressivement une famille autonome.

Après avoir dominé une partie du marché britannique, le porter décline fortement à partir de la fin du XIXe siècle. Il disparaît pratiquement de la production britannique au milieu du XXe siècle, alors que certaines lignées apparentées survivent ailleurs, notamment en Irlande et autour de la Baltique. Sa renaissance à partir de la fin des années 1970 accompagne le retour de brasseries indépendantes et du mouvement craft. Aujourd’hui, « Porter » désigne donc à la fois une famille moderne et l’héritier très transformé d’une bière historique dont les variantes ont été innombrables.`,
    recette: recipe({
      profilUnique: false,
      explicationProfil: "Porter est une famille historique et moderne, pas une formule unique. Les porters londoniens du XVIIIe siècle, les English Porters actuels, les versions américaines, les porters baltiques et les interprétations fumées ou impériales utilisent des procédés sensiblement différents.",
      maltsEtCereales: [
        "Base de malt pale, pale ale, Vienna ou Munich selon la tradition et la sous-famille.",
        "Brown malt particulièrement pertinent pour les interprétations anglaises ; crystal/caramel, chocolate et autres malts foncés permettent de construire pain grillé, cacao, noisette et caramel sombre.",
        "Black malt ou malts torréfiés peuvent intervenir mais doivent être dosés selon le sous-style : un porter n’est pas défini par une violence brûlée uniforme."
      ],
      houblons: [
        "Houblons britanniques terreux, floraux ou herbacés dans les traditions anglaises ; houblons américains plus expressifs possibles dans les versions modernes.",
        "Le houblonnage peut aller d’un simple contrepoids à un caractère franchement présent selon la famille."
      ],
      levuresEtMicroorganismes: [
        "Levures ale britanniques ou américaines dans la majorité des porters modernes.",
        "Levure lager ou fermentation très fraîche possible pour le Baltic Porter et certaines traditions historiques américaines."
      ],
      profilEau: "Une eau contenant suffisamment d’alcalinité peut aider à équilibrer l’acidité des grains foncés, mais il n’existe pas d’« eau de porter » universelle. Sulfates, chlorures et bicarbonates sont ajustés au caractère sec, rond ou houblonné recherché.",
      empatage: "Infusion simple aujourd’hui dans de nombreux cas. Le choix du pH, de la température et du moment d’ajout des grains foncés sert surtout à contrôler corps, fermentescibilité et extraction d’astringence.",
      ebullitionEtHoublonnage: "Amertume suffisante pour soutenir le malt sombre sans écraser ses couches. Les versions anglaises gardent souvent le houblon aromatique discret ; les versions américaines peuvent employer davantage d’ajouts tardifs.",
      fermentation: "Fermentation haute propre à modérément fruitée pour les porters ales ; conduite froide et propre pour les porters de tradition lager.",
      maturation: "Quelques semaines suffisent aux versions de force modérée ; les porters forts, baltiques ou impériaux bénéficient souvent d’une garde plus longue afin d’intégrer alcool, fruits noirs et malts foncés.",
      profilRecherche: "Une bière sombre construite autour du malt, du pain toasté, du cacao et du caramel brun, avec une torréfaction maîtrisée et une buvabilité adaptée à sa force."
    }),
    sources: [REF.camraPorter, BJCP.englishPorter("Porter / English Porter"), ba2026("Porter families")]
  },

  "english-porter": {
    histoireEtOrigines: `L’English Porter actuel n’est pas une reproduction figée du porter londonien de 1750. Il constitue plutôt une interprétation moderne de cette immense tradition. Le porter historique a connu plus de deux siècles de transformations : malts, densités, assemblages de bière jeune et vieillie, fiscalité, disponibilité des matières premières et habitudes de consommation ont fait varier sa composition au point qu’il serait trompeur de parler d’une recette originelle unique.

Au XIXe siècle, le porter passe d’une bière vieillie et souvent plus forte à des produits progressivement plus faibles et plus jeunes. Le développement du black malt à partir de 1817 offre aux brasseurs une nouvelle manière de construire la couleur et la torréfaction. En parallèle, les stouts — à l’origine des porters plus forts — gagnent leur propre identité. À la fin du XIXe siècle, le porter britannique décline face à d’autres familles. Le BJCP situe sa disparition de la production britannique vers le milieu du XXe siècle avant sa réintroduction à l’époque du renouveau brassicole, à partir de la fin des années 1970.

La catégorie moderne met donc surtout en avant une ale brune à brun très foncé, de force modérée, plus souple et souvent plus caramélisée qu’un American Porter. Le brown malt y garde une valeur culturelle particulière. Fuller’s London Porter illustre bien cette reconstruction moderne : pale, crystal, brown et chocolate malts, associés à du houblon Fuggles, produisent une bière où chocolat, terre, café doux et malt toasté dominent sans basculer dans la brûlure sèche d’un stout très torréfié.`,
    recette: recipe({
      maltsEtCereales: [
        "Pale ale malt britannique comme base.",
        "Brown malt pour la signature biscuitée, toastée et légèrement sèche ; crystal/caramel pour toffee et rondeur.",
        "Chocolate malt ou autre malt sombre en quantité modérée pour cacao et couleur, sans rechercher une forte âcreté."
      ],
      houblons: ["Fuggles, East Kent Goldings ou variétés britanniques de registre terreux, floral et herbacé ; intensité généralement modérée."],
      levuresEtMicroorganismes: ["Levure ale britannique pouvant fournir des esters fruités légers à modérés et une atténuation suffisante pour éviter une finale lourde."],
      profilEau: "Profil modérément minéral, avec alcalinité suffisante pour absorber les grains foncés sans pousser le pH trop bas ; chlorures utiles à la rondeur, sulfates à doser selon la sécheresse souhaitée.",
      empatage: "Infusion simple, souvent orientée vers un corps moyen. Les grains foncés doivent apporter chocolat et toasté sans extraction excessive de tanins.",
      ebullitionEtHoublonnage: "Amertume moyenne, traditionnellement construite surtout en début d’ébullition ; ajout aromatique tardif facultatif et discret.",
      fermentation: "Fermentation haute avec souche anglaise, généralement autour de la plage classique des ales, en maîtrisant diacétyle et esters sans chercher une neutralité absolue.",
      maturation: "Garde courte à moyenne ; un service en cask peut accentuer souplesse et buvabilité.",
      profilRecherche: "Un porter anglais de pub : brun profond, chocolat doux, biscuit, caramel et toast, avec une finale assez sèche pour en reprendre une pinte."
    }),
    sources: [BJCP.englishPorter(), REF.camraPorter, REF.fullersPorter]
  },

  "brown-porter": {
    histoireEtOrigines: `« Brown Porter » est surtout une étiquette de classification moderne héritée d’anciennes grilles de concours, plus qu’un style historique autonome ayant traversé les siècles sous ce nom précis. Dans les versions antérieures des guidelines, elle servait à distinguer un porter anglais relativement doux, malté et peu agressif d’un « Robust Porter » plus intense. Le BJCP 2021 a abandonné cette séparation : le versant britannique est aujourd’hui regroupé sous English Porter, tandis que les interprétations américaines plus fortes et plus houblonnées relèvent de l’American Porter.

Cette évolution taxonomique est instructive. Elle rappelle que les catégories de concours sont des outils contemporains destinés à décrire un marché vivant, pas des lois historiques. Les porters anglais ont toujours existé sur un continuum de couleur, de force, de malt et d’amertume. Le terme Brown Porter reste néanmoins utile dans une encyclopédie pour nommer le pôle le plus doux de la famille : brun plutôt que noir opaque, chocolat au lait ou cacao doux plutôt que café brûlé, toffee, noisette, biscuit et pain grillé, avec une amertume modérée.

Dans ZythoHunt, la fiche doit donc être lue comme un repère sensoriel et historique de taxonomie, pas comme l’affirmation qu’un style « Brown Porter » canonique aurait été inventé à une date précise.`,
    recette: recipe({
      maltsEtCereales: [
        "Pale ale malt en base, complété par brown malt, crystal/caramel et chocolate malt en proportions mesurées.",
        "Éviter de faire du black malt ou de l’orge torréfiée le centre du profil : la torréfaction doit rester douce."
      ],
      houblons: ["Houblons anglais traditionnels, surtout pour équilibrer la douceur maltée ; arôme bas à modéré."],
      levuresEtMicroorganismes: ["Levure ale anglaise à esters doux, avec atténuation moyenne à bonne."],
      profilEau: "Profil plutôt équilibré, souvent légèrement chloruré pour soutenir le malt ; alcalinité adaptée aux malts bruns.",
      empatage: "Température moyenne favorisant un corps souple sans lourdeur ; gestion prudente des grains foncés.",
      ebullitionEtHoublonnage: "Amertume modérée et propre, peu d’ajouts tardifs ; priorité à l’équilibre du malt.",
      fermentation: "Fermentation haute avec expression fruitée légère, sans solvants ni excès de diacétyle.",
      maturation: "Courte à moyenne, juste assez longue pour fondre caramel, chocolat et esters.",
      profilRecherche: "Le côté velours du porter : brun, chocolaté, biscuité et légèrement caramélisé, avec peu de brûlé et une grande facilité de dégustation."
    }),
    sources: [BJCP.englishPorter("English Porter — cadre moderne englobant l’ancien Brown Porter"), REF.camraPorter, REF.fullersPorter]
  },

  "robust-porter": {
    histoireEtOrigines: `Robust Porter est, comme Brown Porter, une catégorie surtout importante dans l’histoire récente des classifications brassicoles. Elle a longtemps servi à décrire les porters américains plus sombres, plus amers, plus torréfiés et souvent plus houblonnés que les porters anglais. Cette nomenclature a marqué des générations de brasseurs amateurs et de microbrasseries, mais le BJCP 2021 l’a absorbée dans la catégorie American Porter.

Cette disparition du nom ne signifie pas que le profil a disparu. Au contraire, il constitue une large part de l’ADN du porter craft américain : davantage de malt chocolate ou black malt, une amertume plus nette, parfois des houblons américains résineux ou agrumés, et une fermentation généralement plus propre que dans de nombreux exemples britanniques. Le mot « robust » reste donc utile pour comprendre l’étape intermédiaire entre le porter anglais et certaines expressions américaines presque assez torréfiées pour toucher au stout.

La frontière avec American Stout reste néanmoins importante. Un Robust/American Porter peut être puissant et sombre, mais le cœur du profil demeure souvent chocolaté et malté ; l’orge torréfiée sèche, le café brûlé et l’agressivité de houblon typiques des stouts américains les plus affirmés ne devraient pas tout dominer.`,
    recette: recipe({
      maltsEtCereales: ["Malt pale américain ou pale ale en base, crystal/caramel mesuré, chocolate malt et black malt pour profondeur et couleur."],
      houblons: ["Houblons américains ou britanniques ; amertume plus ferme qu’en English Porter, avec possibilité d’arôme résineux, floral ou agrumé."],
      levuresEtMicroorganismes: ["Levure ale américaine propre ou souche anglaise relativement atténuante."],
      profilEau: "Profil modérément sulfaté possible pour tendre la finale ; alcalinité ajustée aux malts foncés.",
      empatage: "Empâtage visant un corps moyen et une bonne fermentescibilité afin de préserver la vigueur du style.",
      ebullitionEtHoublonnage: "Amertume moyenne à soutenue ; ajouts tardifs possibles mais le houblon doit rester en dialogue avec chocolat et malt grillé.",
      fermentation: "Fermentation haute propre, esters faibles à modérés selon la souche.",
      maturation: "Quelques semaines de garde pour intégrer les malts noirs et arrondir l’amertume.",
      profilRecherche: "Un porter américain musclé : chocolat noir, café léger, malt grillé et amertume nette, sans devenir un stout franchement brûlé."
    }),
    sources: [BJCP.americanPorter("American Porter — successeur moderne du Robust Porter"), ba2026("American-Style Porter")]
  },

  "american-porter": {
    histoireEtOrigines: `L’American Porter est un produit du renouveau brassicole américain de la seconde moitié du XXe siècle. Le BJCP le décrit comme une version plus forte et plus agressive des porters anglais et des anciens porters américains d’avant la Prohibition, apparue au début de l’ère craft et introduite commercialement en 1974. La catégorie ne cherche donc pas à reconstituer les porters coloniaux ou ceux des communautés germano-américaines : elle décrit une réinterprétation moderne.

Les premiers microbrasseurs américains reprennent le vocabulaire du porter mais l’adaptent à leurs matières premières et à leur goût croissant pour l’amertume. Malt pale américain, crystal, chocolate ou black malt s’associent à des houblons américains ou britanniques ; certaines versions restent très maltées et chocolatées, d’autres ajoutent un net caractère de houblon résineux, floral ou agrumé. Cette liberté explique l’écart important entre exemples commerciaux.

Dans la taxonomie contemporaine, l’American Porter a également absorbé une grande partie de ce qui était autrefois appelé Robust Porter. Il se situe entre la douceur caramélisée de nombreux English Porters et la torréfaction plus agressive de l’American Stout.`,
    recette: recipe({
      maltsEtCereales: ["Malt 2-row ou pale américain en base, crystal/caramel fréquent, chocolate malt et/ou black malt pour la structure sombre."],
      houblons: ["Houblons américains souvent utilisés pour l’amertume ; variétés américaines ou britanniques possibles en finition."],
      levuresEtMicroorganismes: ["Levure ale américaine neutre ou souche anglaise plus expressive selon l’interprétation."],
      profilEau: "Alcalinité suffisante pour le grain foncé ; sulfate modéré si l’on veut accentuer l’amertume, chlorure si l’on privilégie chocolat et rondeur.",
      empatage: "Infusion simple visant un corps moyen, avec attention au pH et à l’extraction des malts noirs.",
      ebullitionEtHoublonnage: "Amertume typiquement plus ferme qu’en porter anglais ; ajouts tardifs facultatifs de faible à forte intensité selon la maison.",
      fermentation: "Fermentation haute propre, avec esters faibles à modérés.",
      maturation: "Courte à moyenne ; le style doit rester frais mais gagner à laisser s’intégrer l’âpreté du grain sombre.",
      profilRecherche: "Un porter sombre, chocolaté et nettement amer, pouvant montrer un vrai houblon américain sans perdre sa base maltée."
    }),
    sources: [BJCP.americanPorter(), ba2026("American-Style Porter")]
  },

  "pre-prohibition-porter": {
    histoireEtOrigines: `Le Pre-Prohibition Porter, parfois appelé Pennsylvania Porter ou East Coast Porter, raconte une branche américaine différente du porter craft moderne. Les colons et brasseurs des jeunes États-Unis adaptent d’abord les modèles britanniques avec les matières premières disponibles. Au XIXe siècle, surtout dans les régions de Philadelphie et du Mid-Atlantic, l’arrivée de nombreux brasseurs d’origine allemande entraîne une nouvelle évolution : techniques de fermentation basse, malts américains et céréales adjointes se mêlent à la tradition du porter.

Le BJCP insiste sur un point souvent mal compris : cette catégorie ne décrit pas simplement « le porter colonial ». Sa forme caractéristique est liée à l’évolution du XIXe siècle et peut être fermentée avec une levure ale ou lager. Le maïs, le six-row, la mélasse, la réglisse de brasserie et même la porterine — un colorant/extrait sombre utilisé historiquement — peuvent appartenir au vocabulaire du style. Les versions les plus anciennes et les plus tardives ne sont donc pas identiques.

La Prohibition détruit l’essentiel de cette continuité commerciale. Quelques porters régionaux survivent ou réapparaissent dans le Nord-Est et le Mid-Atlantic, ce qui permet aujourd’hui de distinguer cette famille historique du porter américain craft apparu dans les années 1970. Sensoriellement, il est généralement plus doux, moins houblonné et parfois plus céréale/adjoint qu’un American Porter moderne.`,
    recette: recipe({
      maltsEtCereales: [
        "Malt 2-row ou 6-row américain en base.",
        "Petites proportions de brown, chocolate ou black malt ; l’orge torréfiée n’est pas typique.",
        "Maïs ou autres adjoints historiquement plausibles, parfois jusqu’à environ un cinquième du grist selon les reconstitutions."
      ],
      houblons: ["Houblons américains historiques pour l’amertume ; variétés américaines ou allemandes possibles en finition."],
      levuresEtMicroorganismes: ["Levure ale ou lager : les deux appartiennent à l’histoire de la catégorie, notamment après l’influence des immigrants allemands."],
      ingredientsComplementaires: ["Mélasse, réglisse de brasserie ou porterine peuvent être historiquement cohérentes dans certaines reconstitutions, mais ne sont pas obligatoires."],
      profilEau: "À adapter au profil régional ; assez d’alcalinité pour les malts sombres, sans rechercher une dureté excessive.",
      empatage: "Infusion compatible avec malts américains et adjoints ; cereal mash possible si l’on utilise des céréales crues nécessitant une gélatinisation séparée.",
      ebullitionEtHoublonnage: "Amertume moyenne, finition florale/épicée discrète ; l’équilibre doit rester plus calme qu’un porter craft moderne.",
      fermentation: "Fermentation ale modérément propre ou fermentation lager selon l’interprétation historique choisie.",
      maturation: "Garde courte à moyenne, éventuellement plus froide pour les versions lagerisées.",
      profilRecherche: "Un porter américain historique, grainé et sec à modérément malté, où céréales, chocolat léger et fermentation propre priment sur la puissance du houblon."
    }),
    sources: [BJCP.preProhibitionPorter(), ba2026("Historical / Pre-Prohibition Porter")]
  },

  "baltic-porter": {
    histoireEtOrigines: `Le Baltic Porter n’est pas simplement un porter anglais transporté vers le nord. Il résulte de l’appropriation locale d’une famille britannique très exportée. Aux XVIIIe et début XIXe siècles, les porters et stouts anglais forts circulent vers les ports de la Baltique et jusqu’à la Russie. Lorsque guerres, politiques commerciales et transformations économiques perturbent ces importations au début du XIXe siècle, plusieurs pays riverains développent leurs propres bières sombres fortes inspirées de ces produits.

Ces bières évoluent indépendamment en Pologne, dans les pays baltes, en Russie, en Finlande et ailleurs. Historiquement, certaines sont fermentées en haute fermentation, mais la diffusion des techniques lager au XIXe siècle conduit beaucoup de brasseries à employer des levures de fermentation basse et une longue garde froide. C’est cette combinaison — richesse maltée profonde, fruits noirs, alcool doux, fermentation très propre et torréfaction sans brûlé — qui définit la perception moderne du Baltic Porter.

Le nom même de « Baltic Porter » est relativement récent. Le BJCP souligne qu’il s’impose surtout depuis les années 1990 pour regrouper des traditions régionales apparentées qui, historiquement, n’utilisaient pas nécessairement cette appellation commune. La Pologne en est devenue l’un des grands foyers contemporains. Żywiec documente par exemple son porter depuis 1881 ; la version actuelle emploie quatre familles de malt, dont Munich, Pilsner, caramel et torréfié, pour une bière autour de 9,5 %.

Le style se distingue d’un Imperial Stout par une torréfaction plus lisse, moins de brûlé et souvent une fermentation lager, et d’un Doppelbock par sa profondeur de couleur et ses notes de cacao, réglisse et fruits noirs.`,
    recette: recipe({
      maltsEtCereales: [
        "Malt Munich et/ou Vienna pour la profondeur de pain et de mélanoïdines, souvent complétés par Pilsner.",
        "Malts caramel/crystal pour fruits secs et toffee ; malts foncés lisses ou désamérisés pour chocolat et couleur sans brûlé agressif.",
        "Des sucres peuvent intervenir dans certaines traditions commerciales, comme le montre Żywiec Porter."
      ],
      houblons: ["Houblons continentaux, généralement bas à modérés en arôme ; l’amertume sert surtout à structurer la richesse maltée."],
      levuresEtMicroorganismes: ["Levure lager courante dans les interprétations modernes ; une levure ale fermentée fraîchement reste historiquement et stylistiquement possible."],
      profilEau: "Profil modérément minéral ; alcalinité suffisante pour le grain sombre, chlorures favorables à la rondeur, sulfate contenu afin de ne pas durcir le roast.",
      empatage: "Infusion par paliers ou décoction possibles. L’objectif est un moût riche mais suffisamment fermentescible pour que l’alcool reste doux plutôt que sirupeux.",
      ebullitionEtHoublonnage: "Ébullition franche, parfois prolongée pour renforcer la profondeur maltée ; houblonnage continental surtout en amertume.",
      fermentation: "Fermentation basse fraîche avec ensemencement important, ou ale très propre à basse température selon la tradition ; gestion stricte des alcools supérieurs.",
      maturation: "Lagering prolongé particulièrement utile pour intégrer alcool, fruits secs, chocolat et notes de mélanoïdines.",
      profilRecherche: "Une bière sombre forte et veloutée : pain noir, toffee, prune, raisin, cacao et alcool chaleureux, sans cendre ni brûlé agressif."
    }),
    sources: [BJCP.balticPorter(), REF.zywiecPorter, ba2026("Baltic-Style Porter")]
  },

  "american-imperial-porter": {
    histoireEtOrigines: `L’American Imperial Porter est une extension contemporaine du porter craft américain plutôt qu’une tradition historique comparable au porter londonien ou baltique. Lorsque les brasseurs américains des années 1980–2000 commencent à pousser systématiquement les styles classiques vers davantage de densité, d’alcool et d’intensité, le porter suit le mouvement. La Brewers Association maintient aujourd’hui une catégorie spécifique American-Style Imperial Porter, distincte de l’Imperial Stout.

La distinction repose surtout sur l’architecture du malt. L’Imperial Porter peut être noir et massif, mais son cœur reste caramel, cacao, chocolat et malt riche ; la BA précise qu’un fort caractère d’orge torréfiée ou de malt brûlé ne doit pas devenir la signature dominante. Le houblon peut être bien présent, parfois franchement américain, mais il doit soutenir une masse maltée pleine et douce.

Dans la pratique craft, ces bières servent aussi de base à des élevages en fût, cafés, vanilles ou autres variantes. La fiche « American Imperial Porter » décrit cependant la bière forte non aromatisée : lorsqu’un ingrédient ou un élevage devient le trait principal, la classification bascule vers une catégorie de spécialité.`,
    recette: recipe({
      maltsEtCereales: ["Malt pale américain en base, crystal/caramel pour la richesse, chocolate malt et malts noirs soigneusement dosés pour cacao et couleur sans brûlé dominant."],
      houblons: ["Houblons américains ou britanniques ; amertume moyenne et arôme bas à moyen-haut selon l’interprétation, toujours équilibrés par le malt."],
      levuresEtMicroorganismes: ["Souche ale robuste, relativement propre et tolérante à l’alcool ; ensemencement élevé indispensable pour les densités fortes."],
      profilEau: "Chlorures modérés pour le corps, sulfate mesuré pour soutenir l’amertume, alcalinité adaptée aux malts noirs.",
      empatage: "Empâtage visant un corps plein mais fermentable ; éviter une température trop haute qui rendrait la bière pâteuse après fermentation.",
      ebullitionEtHoublonnage: "Ébullition suffisamment longue pour concentrer le moût et développer la profondeur ; amertume solide sans chercher la domination d’un Imperial Stout américain.",
      fermentation: "Fermentation haute avec contrôle précis de température, oxygénation et nutriments adaptés à la forte densité ; limiter solvants et alcools de fusel.",
      maturation: "Plusieurs semaines à plusieurs mois selon la force ; le temps doit arrondir alcool et malts sans oxyder prématurément le chocolat.",
      profilRecherche: "Un porter porté à l’échelle impériale : plein, chocolaté, caramélisé et chaleureux, mais moins brûlé et moins agressivement torréfié qu’un Imperial Stout."
    }),
    sources: [ba2026("American-Style Imperial Porter"), BJCP.americanPorter("American Porter — base stylistique du dérivé impérial")]
  },

  "smoke-porter": {
    histoireEtOrigines: `Le Smoke Porter ou Smoked Porter n’est pas une vieille branche universelle du porter londonien. Il s’agit plutôt d’une combinaison entre une base porter et un malt volontairement fumé. Historiquement, avant la généralisation de fours permettant de sécher le malt sans contact direct avec les fumées de combustion, de nombreuses bières pouvaient présenter un caractère fumé ; cela ne signifie pas pour autant que le « Smoked Porter » moderne soit la survivance directe d’une recette londonienne précise.

Aux États-Unis, Alaskan Brewing joue un rôle majeur dans la visibilité moderne de cette association. La brasserie développe son Alaskan Smoked Porter en 1988, à une époque où les bières fumées sont quasiment inconnues du grand public américain. Le malt sélectionné est fumé en petits lots au bois d’aulne, matériau intimement lié aux traditions de fumage du poisson en Alaska. La bière remporte rapidement des médailles et contribue à remettre le goût fumé dans le vocabulaire de la bière craft américaine.

Le principe technique est simple à énoncer mais difficile à équilibrer : la fumée doit se fondre dans chocolat, toast, caramel et fermentation, et non donner l’impression d’un cendrier, d’un désinfectant phénolique ou d’une viande artificiellement aromatisée. Le bois, l’intensité du fumage, la proportion de malt fumé et la fraîcheur du malt changent radicalement le résultat.`,
    recette: recipe({
      maltsEtCereales: ["Base de porter : pale/pale ale, chocolate, brown ou crystal selon l’école.", "Part de malt fumé au bois — aulne, hêtre ou autre bois alimentaire documenté — calibrée selon l’intensité recherchée."],
      houblons: ["Houblons d’équilibre, britanniques ou américains ; arôme généralement secondaire afin de ne pas créer une compétition confuse avec la fumée."],
      levuresEtMicroorganismes: ["Levure ale propre à modérément fruitée, choisie pour soutenir le malt et non ajouter des phénols épicés non désirés."],
      ingredientsComplementaires: ["La fumée doit provenir d’un malt fumé de qualité ou d’un procédé maîtrisé ; les arômes artificiels sont rarement nécessaires à un profil classique."],
      profilEau: "Profil proche du porter de base, avec alcalinité adaptée aux malts foncés et minéralité contenue pour éviter de rendre la fumée âpre.",
      empatage: "Infusion classique ; la proportion de malt fumé doit être décidée après dégustation du lot, car son intensité varie énormément avec le maltage et l’âge.",
      ebullitionEtHoublonnage: "Amertume moyenne ; houblonnage tardif discret dans les versions classiques.",
      fermentation: "Fermentation haute propre. Une fermentation trop chaude peut produire des phénols ou esters qui brouillent la lecture de la fumée.",
      maturation: "Une garde moyenne aide à intégrer fumée et malt ; certaines versions fortes comme l’Alaskan Smoked Porter peuvent évoluer longtemps en bouteille.",
      profilRecherche: "Un porter chocolaté et toasté traversé par une fumée boisée naturelle, intégrée et gastronomique plutôt qu’agressive."
    }),
    sources: [REF.alaskanSmoked, ba2026("Smoke Beer / Porter base"), BJCP.englishPorter("Porter — base stylistique")]
  }
};
