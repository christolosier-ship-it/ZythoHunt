import {
  entry,
  DGCCRF_BEER,
  EU_ORGANIC,
  BRASSEURS_FRANCE,
  BRASSEURS_FRANCE_NOEL,
  WESTMALLE,
  BA,
  BJCP
} from "./collection-09-common.mjs";

export default {
  "biere-biologique-bio": entry({
    histoire: `« Bière biologique » ou « bière bio » n’est pas un style : c’est une qualification de production et d’étiquetage encadrée par le droit européen. Le règlement (UE) 2018/848 protège les termes faisant référence à la production biologique et impose un système de certification et de contrôle. Pour une denrée transformée présentée comme biologique, les règles portent notamment sur la proportion d’ingrédients agricoles biologiques et sur l’usage du logo européen.

Pour les denrées préemballées produites dans l’Union qui satisfont aux conditions d’étiquetage biologique, le logo bio européen est obligatoire, accompagné du code de l’organisme de contrôle et de l’indication de l’origine des matières premières agricoles. Le seuil de 95 % concerne les ingrédients agricoles dans les cas où le produit transformé est étiqueté comme biologique ; l’eau et le sel ne sont pas comptés comme ingrédients agricoles dans ce calcul.

Une bière bio peut donc être Pils, IPA, Stout, Saison, sans alcool ou autre. La certification ne donne aucune indication automatique sur la couleur, l’amertume, le degré alcoolique ou le caractère « artisanal ».`,
    explication: "Bio décrit le mode de production certifié des ingrédients agricoles et l’étiquetage, non un profil sensoriel ou une recette unique.",
    malts: ["Malts et autres ingrédients agricoles conformes au cahier des charges biologique lorsque la bière est commercialisée comme biologique."],
    hops: ["Houblons biologiques lorsque requis par le statut biologique du produit ; variété et intensité selon style."],
    yeast: ["Levure adaptée au style ; la certification bio ne crée pas de fermentation spécifique."],
    extras: ["Épices, fruits, sucres ou autres ingrédients agricoles possibles selon style et conformité au règlement biologique."],
    target: "Une bière de n’importe quel style dont la production et l’étiquetage satisfont aux exigences de l’agriculture biologique européenne.",
    sources: [EU_ORGANIC, DGCCRF_BEER]
  }),

  "biere-speciale": entry({
    histoire: `« Bière spéciale » est l’un des termes commerciaux les plus souples de l’univers brassicole. Selon l’époque et le pays, il a servi à distinguer une bière plus forte, plus riche, plus élaborée, saisonnière ou simplement différente de la gamme standard. En Belgique et en France, l’expression a été abondamment utilisée sur les marques sans devenir pour autant un style technique homogène.

Le décret français qui définit les dénominations légales de produits brassicoles énumère « bière », « bière sans alcool », « bière à… », « bière aromatisée à… », « bière de fermentation lactique / Gueuze » et « panaché », ainsi que les mentions « bière de garde » et « pur malt ». Il ne crée pas de dénomination réglementaire générale « bière spéciale ».

Il faut donc lire « spéciale » comme un signal de gamme ou de différenciation. La bière réelle peut être forte ou non, blonde ou sombre, haute ou basse fermentation, traditionnelle ou expérimentale.`,
    target: "Une appellation commerciale de différenciation, sans seuil légal français ni recette universelle ; le style réel doit être recherché ailleurs sur l’étiquette.",
    sources: [DGCCRF_BEER, BA("Specialty and Experimental beer categories")]
  }),

  "biere-de-noel": entry({
    histoire: `La « bière de Noël » désigne une bière saisonnière brassée ou commercialisée pour la fin de l’année plutôt qu’un style unique. Les traditions européennes de bières hivernales fortes, maltées ou épicées ont nourri cette image : couleurs ambrées à brunes, rondeur, fruits secs, caramel, épices et degré alcoolique parfois supérieur à la gamme permanente.

Brasseurs de France décrit la bière de Noël comme une tradition de fin de saison brassicole, mise en avant à partir de la mi-novembre et souvent plus aromatique, ronde et forte. Mais ces caractéristiques restent des tendances, non une norme obligatoire. Certaines bières de Noël sont blondes, très houblonnées, acides ou sans épices.

Le BJCP classe les Winter Seasonal Beers comme une catégorie de spécialité dont la bière de base et les ingrédients doivent être annoncés. La bonne approche encyclopédique est donc de parler de saison et d’intention festive, puis d’identifier la recette réelle.`,
    explication: "Bière de Noël est une appellation saisonnière : la base, la couleur, les épices et la force varient selon le brasseur.",
    malts: ["Souvent pale/Munich/caramel et parfois malts sombres pour rondeur et couleur, mais une base claire reste possible."],
    hops: ["Généralement d’équilibre ; certaines interprétations modernes peuvent être nettement houblonnées."],
    yeast: ["Selon le style de base : ale, lager ou autre."],
    extras: ["Cannelle, agrumes, gingembre, muscade, clou de girofle, miel, fruits ou sucres possibles mais jamais obligatoires par le seul nom Noël."],
    maturation: "Souvent quelques semaines de garde pour intégrer alcool, malt et éventuelles épices ; durée variable selon la force.",
    target: "Une bière saisonnière hivernale expressive et festive dont le caractère doit rester cohérent avec sa base plutôt que suivre une recette imposée.",
    sources: [BRASSEURS_FRANCE_NOEL, BJCP("Winter Seasonal Beer", "30/30C/winter-seasonal-beer"), BA("Winter Seasonal Beer")]
  }),

  "biere-de-printemps-biere-de-mars": entry({
    histoire: `« Bière de Mars » ou « bière de Printemps » est une appellation saisonnière française liée à l’ancien calendrier brassicole. Avant la généralisation du froid industriel à la fin du XIXe siècle, l’hiver offrait naturellement de bonnes conditions pour la fermentation et la garde. Brasseurs de France rattache la tradition à l’orge récoltée en été, maltée à l’automne puis brassée pendant la saison froide pour être proposée au retour du printemps.

L’appellation moderne conserve surtout cette idée de fraîcheur saisonnière et de série limitée. Elle n’impose pas un style unique : blonde, ambrée, ale, lager ou recette plus houblonnée peuvent porter la mention selon le producteur. Elle ne doit pas être confondue avec la Märzen bavaroise, dont le nom partage l’idée de mars mais appartient à une histoire et à un profil brassicole distincts.

La fiche doit donc présenter la Bière de Mars française comme une tradition calendaire et commerciale, pas comme un clone de Märzen ni comme une recette réglementaire figée.`,
    explication: "Bière de Mars / Printemps décrit une saison de brassage et de commercialisation ; la recette moderne varie selon les producteurs.",
    malts: ["Base souvent claire à ambrée, mais aucune composition universelle ; malt d’orge généralement central."],
    hops: ["Houblonnage modéré à aromatique selon l’interprétation printanière."],
    yeast: ["Ale ou lager selon le brasseur ; le terme de saison n’impose pas une fermentation."],
    maturation: "Traditionnellement associée à une fermentation/garde hivernale avant consommation printanière ; pratique moderne variable.",
    target: "Une bière de saison printanière fraîche et limitée, héritière d’un calendrier de brassage plus que d’un style technique unique.",
    sources: [BRASSEURS_FRANCE, DGCCRF_BEER]
  }),

  "biere-forte-strong-beer": entry({
    histoire: `« Bière forte » ou « Strong Beer » est une indication relative : elle signale un degré alcoolique ou une densité supérieure à la norme attendue pour une gamme ou un style donné, mais il n’existe pas de seuil international unique. Une forte lager, une Belgian Strong Ale, une Barley Wine et une Imperial Stout peuvent toutes être « fortes » sans rien partager d’autre.

La Brewers Association utilise une catégorie Other Strong Beer pour les bières volontairement brassées au-dessus de la force du style sous-jacent lorsqu’elles ne trouvent pas mieux leur place dans une catégorie forte déjà définie. C’est un cadre de concours, pas une définition juridique mondiale.

Sur une étiquette, le consommateur doit donc regarder le titre alcoométrique et le style réel. « Strong » décrit l’intensité alcoolique relative ; il ne dit ni couleur, ni fermentation, ni douceur, ni quantité de malt.`,
    explication: "Strong/Forte qualifie une force alcoolique relative au produit ou au style de base, sans seuil universel ni recette propre.",
    malts: ["Charge fermentescible plus élevée que la version standard du style ; malts et sucres selon la famille de bière."],
    hops: ["Adaptés au style de base et souvent renforcés pour équilibrer la densité, mais pas systématiquement."],
    yeast: ["Souche capable d’achever une fermentation plus dense ; tolérance alcoolique adaptée."],
    fermentation: "Gestion attentive du pitch, de l’oxygénation et de la température pour éviter alcools chauds et fermentation incomplète.",
    maturation: "Souvent plus longue qu’une bière standard afin de fondre l’alcool et les composés de fermentation.",
    target: "Une version plus forte d’une famille donnée, où l’alcool supplémentaire reste intégré et où le style de base demeure identifiable.",
    sources: [BA("Other Strong Beer"), DGCCRF_BEER]
  }),

  "biere-legere-light-beer": entry({
    histoire: `« Bière légère » ou « Light Beer » est une appellation dépendante du marché. Elle peut évoquer moins d’alcool, moins de corps, moins de calories, une lager très atténuée ou simplement une bière plus facile à boire que la référence de la marque. Ces significations ne sont pas interchangeables et le mot « light » n’est pas un style international unique.

Dans les classifications brassicoles américaines, plusieurs styles « light » décrivent des lagers pâles, sèches et peu corpulentes. Ailleurs, « bière légère » peut désigner une ale à faible degré. Elle ne doit surtout pas être confondue avec la dénomination française « bière sans alcool », qui possède son propre seuil légal et ses propres procédés.

Pour comprendre une Light Beer, il faut donc lire le degré alcoolique, les informations nutritionnelles éventuelles et le style de base plutôt que supposer une formule standard.`,
    explication: "Light/Légère est un qualificatif relatif dont le sens peut porter sur alcool, corps ou positionnement ; il ne remplace pas la dénomination légale sans alcool.",
    malts: ["Souvent densité initiale réduite et/ou adjuncts favorisant légèreté dans les lagers, mais dépend du produit."],
    hops: ["Généralement faibles à modérés pour préserver la buvabilité ; variables selon style."],
    yeast: ["Levure du style de base, avec forte atténuation souvent recherchée."],
    fermentation: "Fermentation visant une finale nette et légère ; le procédé exact dépend du produit.",
    target: "Une bière perçue comme plus légère que sa référence, dont le degré et le style doivent être vérifiés sur l’étiquette.",
    sources: [BA("American-Style Light Lager and other light beer categories"), DGCCRF_BEER]
  }),

  "session-beer": entry({
    histoire: `« Session Beer » est devenue une appellation craft internationale pour des bières conçues afin de conserver le caractère d’un style tout en abaissant sa densité et son alcool, de manière à favoriser la buvabilité sur plusieurs verres. Le mot « session » possède un imaginaire britannique, mais les récits qui lui attribuent une origine historique unique pendant les pauses d’usine ou de guerre sont difficiles à démontrer et ne doivent pas être présentés comme des faits établis.

La Brewers Association fournit un cadre moderne précis pour ses concours : une Session Beer doit être à 5,0 % vol. ou moins et se situer en dessous de la densité et de la force du style classique pris comme référence. Ce seuil appartient à ce guide de compétition ; il ne constitue pas une loi internationale sur l’usage commercial du mot « session ».

Une Session IPA, Session Bock ou Session Stout doit donc rester reconnaissable comme version allégée de son modèle, avec l’équilibre recalibré plutôt qu’une simple dilution.`,
    explication: "Session Beer est une version volontairement moins forte d’un style de référence ; le seuil de 5 % est celui du cadre BA 2026, pas une définition légale universelle.",
    malts: ["Densité initiale réduite tout en conservant la signature céréalière du style de base."],
    hops: ["Houblonnage recalibré à la baisse en intensité absolue afin de conserver l’équilibre du style ; peut rester aromatique pour une Session IPA."],
    yeast: ["Levure du style sous-jacent ; bonne atténuation et absence de défauts essentiels à faible densité."],
    water: "Profil du style de base, souvent ajusté pour éviter qu’amertume ou minéralité ne paraissent agressives dans un corps plus léger.",
    target: "Une version plus faible mais non aqueuse d’un style identifiable, équilibrée pour la répétabilité et la buvabilité.",
    sources: [BA("Session Beer"), DGCCRF_BEER]
  }),

  "double": entry({
    histoire: `« Double » est un terme commercial ambigu qu’il faut distinguer du style belge Dubbel. Dans une gamme, « double » peut signaler une force supérieure, une concentration accrue ou simplement un niveau hiérarchique de produit. Rien n’oblige internationalement une bière appelée Double à contenir exactement deux fois plus de malt, de houblon ou d’alcool qu’une autre.

L’histoire de Westmalle explique toutefois pourquoi l’idée de doublement est devenue célèbre : en 1926, les moines renforcent leur bière trappiste sombre en doublant les ingrédients de leur bière légère d’origine, donnant naissance à la Westmalle Dubbel moderne. Cette origine spécifique ne doit pas être transformée en règle générale pour toutes les « doubles ».

Lorsque l’étiquette vise clairement une Belgian Dubbel, on attend une ale sombre, maltée, fruitée et sèche à modérément sèche. Lorsqu’elle dit seulement « Double », il faut vérifier le contexte de marque.`,
    explication: "Double peut désigner une Belgian Dubbel ou un simple niveau de force commercial ; aucun multiplicateur universel ne s’applique.",
    malts: ["Pour une Dubbel belge : malt Pils/pale avec malts ou sucres foncés apportant pain, caramel et fruits secs ; autrement selon le produit."],
    hops: ["Pour une Dubbel : houblons continentaux modérés et secondaires ; autrement selon style."],
    yeast: ["Pour une Dubbel : levure belge fruitée/épicée ; aucune levure imposée au mot commercial Double."],
    fermentation: "Fermentation haute et souvent refermentation en bouteille pour une Dubbel classique ; variable pour un produit seulement nommé Double.",
    target: "Distinguer le style Belgian Dubbel de l’usage marketing plus large du mot Double.",
    sources: [WESTMALLE, BJCP("Belgian Dubbel", "26/26B/belgian-dubbel"), BA("Belgian-Style Dubbel")]
  }),

  "triple": entry({
    histoire: `« Triple » ou « Tripel » est aujourd’hui fortement associé au style belge pâle et fort, mais le mot reste également utilisé comme marqueur commercial de gamme. Westmalle constitue le repère historique majeur : une nouvelle bière est brassée en 1934 pour l’inauguration de la nouvelle salle de brassage, et cette Tripel popularise le modèle moderne.

La Westmalle Tripel est une bière claire, forte, très atténuée, hautement carbonatée, fruitée et épicée, avec une amertume notable. Le BJCP rattache explicitement le style moderne à Westmalle. Mais le terme « triple » ne signifie pas qu’une recette contemporaine doit contenir mathématiquement trois fois chaque ingrédient d’une bière simple.

Dans certaines gammes commerciales, « Triple » signifie seulement « forte et prestigieuse ». La fiche doit donc différencier l’appellation de force du véritable style Belgian Tripel.`,
    explication: "Tripel est un style belge reconnaissable mais « Triple » peut aussi être un rang de gamme ; le mot n’impose aucun triplement mathématique universel.",
    malts: ["Pour une Tripel classique : malt Pilsner majoritaire et sucres pâles souvent utilisés pour augmenter l’alcool sans alourdir le corps."],
    hops: ["Houblons continentaux avec amertume modérée à ferme ; aromatique noble discret à modéré."],
    yeast: ["Levure belge fruitée et épicée, fortement atténuative."],
    water: "Plutôt douce pour soutenir finesse, sécheresse et houblon sans dureté.",
    mash: "Empâtage favorisant une forte fermentescibilité ; la légèreté du corps est essentielle malgré la densité initiale.",
    boil: "Houblonnage d’équilibre à relativement ferme ; sucres pâles ajoutés selon la recette.",
    fermentation: "Fermentation haute maîtrisée avec forte atténuation ; refermentation en bouteille fréquente dans les exemples traditionnels.",
    maturation: "Conditionnement suffisant pour intégrer alcool, esters et carbonatation élevée.",
    target: "Une Tripel pâle, forte mais étonnamment sèche et légère de corps, distincte d’une simple bière blonde très alcoolisée.",
    sources: [WESTMALLE, BJCP("Belgian Tripel", "26/26C/belgian-tripel"), BA("Belgian-Style Tripel")]
  }),

  "quadruple": entry({
    histoire: `« Quadrupel » est une appellation moderne devenue courante pour des ales belges ou d’inspiration monastique très fortes, souvent sombres et riches. Contrairement à Dubbel et Tripel, elle ne correspond pas à une ancienne progression universelle où chaque niveau multiplierait mécaniquement les ingrédients. Le mot s’est surtout imposé comme nom de produit puis comme catégorie commerciale et de concours à la fin du XXe siècle.

Le profil recoupe souvent celui que le BJCP classe comme Belgian Dark Strong Ale : forte ale ambrée foncée à brune, riche en malt et fruits noirs, épicée par la fermentation, avec alcool doux et carbonatation élevée. Le BJCP note d’ailleurs que de nombreux exemples traditionnels portent plutôt des désignations de force ou de couleur que le nom Quadrupel.

Une bière marquée « Quadruple » doit donc être évaluée sur son style et son producteur. Elle peut correspondre à une Belgian Dark Strong, à une bière d’abbaye forte ou à une interprétation plus libre ; le chiffre quatre n’est pas une formule de brassage.`,
    explication: "Quadrupel est une appellation moderne de bière belge/inspirée monastique très forte ; elle n’implique aucun quadruplement universel des ingrédients.",
    malts: ["Souvent base Pils/pale ou Munich avec sucres foncés et éventuellement malts spéciaux pour profondeur sans torréfaction excessive."],
    hops: ["Houblons continentaux faibles à modérés, généralement secondaires face au malt, aux fruits et à la fermentation."],
    yeast: ["Levure belge fortement atténuative, expressive en esters et épices, tolérante à l’alcool."],
    water: "Variable mais sans minéralité agressive ; doit préserver souplesse et profondeur.",
    mash: "Empâtage suffisamment fermentescible pour éviter qu’une forte densité ne donne une bière sirupeuse.",
    boil: "Houblonnage structurel modéré ; sucres foncés ou sirops possibles selon recette.",
    fermentation: "Fermentation haute robuste et maîtrisée ; température souvent conduite progressivement pour achever l’atténuation.",
    maturation: "Plusieurs semaines à plusieurs mois pour intégrer l’alcool ; refermentation en bouteille fréquente dans les interprétations belges.",
    target: "Une ale très forte, complexe et fruitée, souvent sombre, où l’alcool reste doux et où « quatre » est un nom de gamme plutôt qu’une équation.",
    sources: [BJCP("Belgian Dark Strong Ale", "26/26D/belgian-dark-strong-ale"), BA("Belgian-Style Quadrupel"), WESTMALLE]
  })
};
