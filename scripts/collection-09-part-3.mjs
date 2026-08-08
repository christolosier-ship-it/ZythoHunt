import {
  entry,
  source,
  LEGIFRANCE_BEER,
  DGCCRF_BEER,
  EU_GLUTEN,
  RADLER,
  BA,
  BJCP
} from "./collection-09-common.mjs";

const HORAL = source(
  "HORAL",
  "Traditional Lambic Beers — Oude Geuze, lambic et traditions",
  "https://horal.be/en/traditional-lambic-beers/",
  "source_professionnelle_traditionnelle"
);

export default {
  "biere-sans-alcool": entry({
    histoire: `En France, « bière sans alcool » est une dénomination légale précise et beaucoup plus large que ce que le langage courant imagine parfois. Le décret n° 92-307 réserve cette dénomination à une bière dont le titre alcoométrique acquis est inférieur ou égal à 1,2 % vol., obtenue à la suite d’une désalcoolisation ou d’un début de fermentation. Une bière française étiquetée « sans alcool » peut donc légalement contenir une petite quantité d’alcool.

Cette définition nationale ne doit pas être confondue avec les seuils utilisés ailleurs. La Brewers Association, par exemple, classe dans son cadre de compétition les Non-Alcohol Malt Beverages sous 0,5 % vol. : il s’agit d’une convention américaine de concours, pas du seuil juridique français.

Les procédés modernes se répartissent en deux grandes familles : limiter la formation d’éthanol dès la fermentation, ou brasser une bière normalement puis retirer l’alcool. Fermentation interrompue ou restreinte, levures à faible production d’alcool, évaporation sous vide, procédés membranaires ou autres technologies peuvent être employés. Le défi reste de conserver malt, houblon, corps et équilibre malgré l’absence d’une grande partie de l’éthanol.`,
    explication: "Sans alcool est une catégorie réglementaire de teneur et de procédé ; tous les styles peuvent être adaptés, donc aucune recette unique n’existe.",
    malts: ["Selon le style de base ; formulation souvent ajustée pour recréer corps et saveur malgré une fermentation limitée ou une désalcoolisation."],
    hops: ["Selon style, avec dosage prudent car l’amertume peut paraître plus vive dans un corps très léger."],
    yeast: ["Levure de bière classique avec fermentation contrôlée, souche à faible production d’alcool ou fermentation suivie d’une désalcoolisation."],
    extras: ["Maltodextrines, céréales ou autres outils de formulation possibles selon recette pour soutenir le corps, dans le respect de l’étiquetage."],
    water: "Très importante pour l’équilibre : minéralité souvent modérée afin de ne pas durcir une bière peu alcoolisée.",
    mash: "Peut viser davantage de dextrines ou, au contraire, un moût très léger selon le procédé de réduction d’alcool choisi.",
    boil: "Houblonnage calibré pour éviter une amertume disproportionnée ; traitement identique à la bière de base pour la sécurité microbiologique.",
    fermentation: "Début/limitation de fermentation ou fermentation complète suivie de désalcoolisation ; en France, le produit final doit rester à ≤ 1,2 % vol. pour la dénomination légale.",
    maturation: "Conditionnement très propre et maîtrise de l’oxygène essentiels ; l’absence d’alcool réduit une partie de la protection sensorielle et microbiologique habituelle.",
    target: "Une bière conforme au seuil français ≤ 1,2 % vol., conservant le plus possible le caractère du style malgré la réduction d’alcool.",
    sources: [LEGIFRANCE_BEER, DGCCRF_BEER, BA("Non-Alcohol Malt Beverage")]
  }),

  "0-0-pourcent": entry({
    histoire: `« 0,0 % » est avant tout une promesse chiffrée de marketing et d’étiquetage ; le décret français sur les bières ne crée pas une seconde dénomination légale distincte appelée « bière 0,0 ». Sa catégorie juridique est « bière sans alcool » lorsqu’elle remplit les conditions correspondantes, tandis que la mention 0,0 % communique au consommateur une ambition plus stricte que le plafond légal français de 1,2 % vol.

Il ne faut pas transformer cette inscription en procédé unique. Certaines 0,0 sont produites par fermentation très limitée, d’autres par désalcoolisation poussée d’une bière fermentée, et les techniques peuvent être combinées. Les contraintes analytiques, les règles d’arrondi et les limites de quantification dépendent du cadre de mesure et du marché ; l’étiquette et la fiche technique du fabricant restent donc les références pour un produit précis.

Sensoriellement, atteindre 0,0 est difficile : l’éthanol contribue au corps, à la chaleur, à la volatilité aromatique et à l’équilibre. Une bonne bière 0,0 doit reconstruire cette architecture sans devenir sucrée, aqueuse ou excessivement amère.`,
    explication: "0,0 % est une mention chiffrée commerciale plus stricte dans son intention que la catégorie française ≤ 1,2 %, mais ce n’est pas un style ni un procédé unique.",
    malts: ["Selon style de base ; formulation adaptée pour fournir du corps sans produire ou conserver d’alcool significatif."],
    hops: ["Dosage fin car le faible corps accentue facilement l’amertume."],
    yeast: ["Fermentation très limitée, levures spécifiques ou fermentation complète suivie d’une désalcoolisation poussée selon procédé."],
    water: "Souvent douce à modérée pour préserver rondeur et éviter l’agressivité.",
    mash: "Conçu en fonction du procédé : moût peu fermentescible pour limitation biologique, ou recette classique si désalcoolisation ultérieure.",
    boil: "Houblonnage et évaporation adaptés au profil recherché ; maîtrise du DMS et de l’oxygène essentielle dans les bases pâles.",
    fermentation: "Procédé choisi pour atteindre la teneur revendiquée ; la mention 0,0 ne remplace pas les contrôles analytiques du produit fini.",
    maturation: "Conditionnement froid, protection contre l’oxygène et hygiène très rigoureuse.",
    target: "Une bière revendiquant 0,0 % avec un profil complet et stable, sans confondre cette mention commerciale avec une catégorie de style.",
    sources: [LEGIFRANCE_BEER, DGCCRF_BEER, BA("Non-Alcohol Malt Beverage")]
  }),

  "biere-sans-gluten": entry({
    histoire: `« Sans gluten » est une mention réglementée au niveau européen, indépendante du style de bière. Le règlement d’exécution (UE) n° 828/2014 autorise la mention « sans gluten » uniquement si la denrée vendue au consommateur final ne contient pas plus de 20 mg/kg de gluten. « Très faible teneur en gluten » possède un autre seuil, fixé à 100 mg/kg dans les conditions prévues par le règlement.

Pour la bière, deux grandes voies existent. La première utilise des matières premières naturellement dépourvues de gluten — par exemple millet, sorgho, sarrasin ou riz — et doit malgré tout maîtriser les contaminations croisées. La seconde part de céréales contenant du gluten, souvent l’orge, puis réduit les protéines concernées par le procédé ; le produit fini doit néanmoins satisfaire au seuil analytique applicable pour porter la mention.

« Sans gluten » ne signifie donc ni sans céréales, ni sans malt au sens large, ni sans alcool. Une IPA, une lager ou une bière noire peut être sans gluten si le produit final respecte les exigences.`,
    explication: "Sans gluten est une exigence analytique européenne ≤ 20 mg/kg, pas une recette ni une famille sensorielle.",
    malts: ["Céréales naturellement sans gluten ou ingrédients spécialement traités ; sélection et prévention des contaminations croisées essentielles."],
    hops: ["Tous houblons possibles selon style ; le houblon n’est pas la source habituelle de gluten dans la bière."],
    yeast: ["Levure adaptée au style ; vérifier supports, procédés et contaminations dans la chaîne de production."],
    extras: ["Enzymes ou procédés de réduction du gluten possibles ; l’allégation dépend du résultat analytique final, pas de l’intention de recette."],
    water: "Selon style de base.",
    mash: "Adapté aux céréales choisies : gélatinisation et enzymes peuvent devenir plus complexes avec sorgho, millet, sarrasin ou riz.",
    boil: "Selon style ; séparation et nettoyage de l’équipement importants en brasserie produisant aussi avec orge/blé/seigle."],
    fermentation: "Selon style ; la fermentation n’annule pas à elle seule l’obligation de respecter le seuil de gluten.",
    maturation: "Prévenir toute contamination croisée jusqu’au conditionnement.",
    target: "Une bière de n’importe quel style respectant le seuil européen de 20 mg/kg maximum pour l’allégation « sans gluten ».",
    sources: [EU_GLUTEN, DGCCRF_BEER]
  }),

  "pur-malt": entry({
    histoire: `En France, « pur malt » est une mention valorisante juridiquement réservée. L’article 2 du décret n° 92-307 précise qu’elle est réservée à la bière obtenue par fermentation alcoolique d’un moût préparé uniquement à partir de malt de céréales.

Deux erreurs sont fréquentes. D’abord, « pur malt » ne signifie pas « 100 % malt d’orge » : le texte parle de malt de céréales, ce qui permet en principe de combiner plusieurs céréales maltées. Ensuite, la mention n’interdit évidemment pas l’eau, le houblon ou la levure ; elle vise la composition du moût en matières céréalières/fermentescibles par opposition à l’emploi d’adjuncts non maltés ou de sucres comme substituts de l’extrait malté.

Une Pur Malt peut être blonde, brune, ale ou lager. La mention décrit donc une contrainte de matières premières, pas un style sensoriel.`,
    explication: "Pur malt est une mention légale française sur la composition du moût : uniquement du malt de céréales comme base amylacée/sucrée, sans définir le style.",
    malts: ["Uniquement malts de céréales pour le moût : orge, blé, seigle ou autres céréales maltées selon la recette."],
    hops: ["Houblons selon style ; la mention pur malt ne limite pas le houblonnage."],
    yeast: ["Levure selon style."],
    extras: ["Pas d’adjunct non malté ou de sucre utilisé comme matière fermentescible du moût si l’on revendique la mention française pur malt."],
    water: "Selon style.",
    mash: "Empâtage des malts choisis ; gestion enzymatique selon leur pouvoir diastasique.",
    boil: "Selon style ; houblonnage indépendant de la mention."],
    fermentation: "Fermentation alcoolique normale de la bière, haute ou basse selon style.",
    maturation: "Selon style.",
    target: "Une bière dont le moût est construit uniquement à partir de malts de céréales, sans confondre pur malt avec 100 % orge ou avec un style particulier.",
    sources: [LEGIFRANCE_BEER, DGCCRF_BEER]
  }),

  "biere-a": entry({
    histoire: `La dénomination française « bière à… » possède un sens réglementaire précis depuis la révision de 2016. Elle est réservée à une bière élaborée par addition ou macération de matières végétales ou d’origine végétale, de boissons alcoolisées ou de miel, la dénomination étant complétée par la nature de l’ingrédient mis en œuvre.

Le décret fixe un plafond : ces ingrédients ne doivent pas excéder 10 % du volume du produit fini. Si une boisson alcoolisée est ajoutée, elle ne peut augmenter le titre alcoométrique acquis final de plus de 0,5 point de pourcentage en volume. Une « bière au miel », « bière au fruit » ou « bière au whisky » relevant de cette dénomination n’est donc pas une catégorie sans limites.

Le point essentiel est la différence avec « bière aromatisée à… » : dans « bière à… », l’ingrédient lui-même est ajouté ou macéré ; dans la seconde, le caractère provient d’un arôme au sens réglementaire.`,
    explication: "Bière à… est une dénomination légale française fondée sur l’ajout ou la macération de l’ingrédient nommé ; la bière de base peut appartenir à de nombreux styles.",
    malts: ["Selon style de base ; la bière doit d’abord répondre à la définition réglementaire de bière."],
    hops: ["Selon style et ingrédient, souvent ajustés pour préserver l’équilibre."],
    yeast: ["Selon la bière de base."],
    extras: ["Matière végétale/d’origine végétale, boisson alcoolisée ou miel correspondant au nom ; ensemble limité à 10 % du volume final dans le cadre français."],
    water: "Selon style de base.",
    mash: "Selon bière de base ; certains ingrédients peuvent être introduits par macération hors empâtage."],
    boil: "Moment d’ajout choisi selon stabilité et volatilité de l’ingrédient ; la réglementation porte sur sa nature et sa proportion, pas sur un moment unique."],
    fermentation: "Selon bière de base ; l’ingrédient peut modifier fermentescibilité et nécessiter une reprise de fermentation.",
    maturation: "Temps d’intégration variable selon fruit, plante, miel ou boisson alcoolisée utilisée.",
    target: "Une bière où l’ingrédient réellement mis en œuvre est perceptible et correctement nommé, distincte d’une bière seulement aromatisée par arôme.",
    sources: [LEGIFRANCE_BEER, DGCCRF_BEER]
  }),

  "biere-aromatisee-a": entry({
    histoire: `La « bière aromatisée à… » est une autre dénomination légale française, distincte de « bière à… ». Le décret n° 92-307 la réserve à une bière aromatisée par des arômes tels que définis par le règlement européen sur les arômes alimentaires.

La différence n’est pas seulement sémantique : une bière peut évoquer la cerise parce que des cerises ont été ajoutées ou macérées, ou parce qu’un arôme de cerise a été utilisé. Le droit français prévoit des dénominations différentes pour rendre cette distinction lisible au consommateur.

La base brassicole reste libre dans les limites de la définition de bière. Lager, blanche, sour, stout ou bière sans alcool peuvent être aromatisées ; le mot ne définit ni fermentation ni force.`,
    explication: "Bière aromatisée à… décrit l’usage d’un arôme réglementaire ; elle se distingue juridiquement de la bière à… élaborée avec l’ingrédient nommé.",
    malts: ["Selon style de base."],
    hops: ["Selon style, souvent ajustés pour ne pas masquer l’aromatisation."],
    yeast: ["Selon style de base."],
    extras: ["Arôme correspondant à la dénomination, conforme au cadre européen applicable aux arômes alimentaires."],
    water: "Selon style de base.",
    mash: "Selon bière de base."],
    boil: "Les arômes volatils sont souvent dosés tardivement ou après fermentation selon leur stabilité ; aucune méthode unique n’est imposée par le nom."],
    fermentation: "Selon bière de base ; l’aromatisation peut intervenir avant ou après selon le produit et la réglementation."],
    maturation: "Courte à longue selon la base ; vérifier stabilité et intégration aromatique."],
    target: "Une bière dont le caractère nommé vient d’un arôme déclaré, avec une base brassicole encore équilibrée et une information consommateur non trompeuse.",
    sources: [LEGIFRANCE_BEER, DGCCRF_BEER]
  }),

  "biere-de-fermentation-lactique": entry({
    histoire: `Le droit français réserve la dénomination « bière de fermentation lactique » ou « Gueuze » à une bière qui fait l’objet d’une fermentation lactique au cours de son élaboration. Cette définition réglementaire est volontairement courte et ne doit pas être confondue avec la définition brassicole traditionnelle beaucoup plus étroite d’une Oude Geuze belge.

Une fermentation lactique implique l’activité de bactéries lactiques telles que Lactobacillus ou Pediococcus dans de nombreuses méthodes modernes ou traditionnelles. Elle peut intervenir dans une fermentation mixte longue, une acidification rapide du moût ou d’autres schémas. Le simple fait d’être acide ne prouve pas forcément le procédé, et une bière utilisant uniquement Brettanomyces n’est pas automatiquement une bière de fermentation lactique.

La Gueuze traditionnelle, elle, repose sur lambics spontanés d’âges différents assemblés et refermentés, avec un héritage régional et des pratiques précises documentées par les producteurs traditionnels. La mention juridique française et le style traditionnel se recouvrent donc partiellement sans être équivalents.`,
    explication: "La mention française exige une fermentation lactique mais ne fixe pas une recette unique ; la Gueuze traditionnelle constitue un cas beaucoup plus spécifique.",
    malts: ["Selon style : orge et blé non malté pour lambic traditionnel, ou tout autre grist adapté à une sour beer lactique."],
    hops: ["Faibles dans de nombreuses sour beers ; houblons âgés dans le lambic traditionnel, car une forte activité antibactérienne du houblon peut freiner les bactéries lactiques."],
    yeast: ["Bactéries lactiques impliquées dans le procédé ; Saccharomyces, Brettanomyces et microflore spontanée peuvent également intervenir selon la méthode."],
    water: "Selon style et méthode d’acidification ; minéralité à contrôler pour éviter une acidité dure."],
    mash: "Variable : empâtage classique, turbid mash traditionnel du lambic ou autres méthodes selon la bière."],
    boil: "Variable ; le houblonnage et le timing sont déterminants pour la survie ou l’inhibition des bactéries lactiques."],
    fermentation: "Une phase de fermentation lactique doit réellement faire partie du processus pour employer la dénomination française."],
    maturation: "De quelques jours pour certaines acidifications modernes à plusieurs années pour lambic et cultures mixtes traditionnelles."],
    target: "Une bière dont l’acidité résulte réellement d’une fermentation lactique, en distinguant la catégorie juridique française de la Gueuze traditionnelle belge.",
    sources: [LEGIFRANCE_BEER, DGCCRF_BEER, HORAL, BJCP("Gueuze", "23/23E/gueuze")]
  }),

  "biere-de-garde-mention-legale-francaise": entry({
    histoire: `En France, « bière de garde » est une mention valorisante légalement réservée, et son critère est étonnamment simple : après sa fermentation primaire, la bière doit avoir subi une période de garde d’au moins 21 jours. Le décret n’impose ni couleur, ni fermentation haute, ni région, ni degré alcoolique.

Cette définition doit être distinguée du style brassicole French-Style Bière de Garde, historiquement associé au nord de la France et caractérisé dans les guides par une bière maltée, généralement bien atténuée, pouvant être blonde, ambrée ou brune. Une bière peut donc satisfaire à la mention légale française sans correspondre exactement au style de concours, et inversement l’histoire du style ne se résume pas au seuil de 21 jours.

La carte « mention légale française » existe précisément pour éviter cette confusion : ici, le cœur de l’appellation est la durée minimale de garde.`,
    explication: "La mention légale française impose au moins 21 jours de garde après fermentation primaire ; elle ne définit pas à elle seule le style French Bière de Garde.",
    malts: ["Libres selon le style réel ; pale, Vienna, Munich, caramel ou autres possibles."],
    hops: ["Libres selon style ; la mention légale ne fixe aucun IBU."],
    yeast: ["Haute ou basse fermentation possible juridiquement ; le style historique français est souvent traité comme ale propre ou fermentation hybride selon producteurs."],
    water: "Selon style de base.",
    mash: "Selon recette."],
    boil: "Selon style."],
    fermentation: "Fermentation primaire normale, suivie obligatoirement d’une phase de garde pour revendiquer la mention française."],
    maturation: "Au minimum 21 jours après la fermentation primaire selon le décret français ; davantage selon le produit."],
    target: "Une bière respectant la condition légale de 21 jours de garde, sans déduire abusivement couleur, région ou fermentation du seul libellé.",
    sources: [LEGIFRANCE_BEER, DGCCRF_BEER, BA("French-Style Bière de Garde"), BJCP("Bière de Garde", "24/24C/biere-de-garde")]
  }),

  "panache": entry({
    histoire: `« Panaché » est une dénomination légale française, pas seulement un nom de comptoir. Le décret n° 92-307 la réserve à une boisson dont le titre alcoométrique acquis est inférieur ou égal à 1,2 % vol. et qui est exclusivement constituée d’un mélange de bière et de boisson gazeuse aromatisée sans alcool.

Le texte ne fixe pas un rapport universel bière/limonade : la recette commerciale peut donc varier tant que le produit reste dans cette définition. Cela le distingue d’un simple shandy de bar ou d’un Radler international, qui peuvent être préparés à parts égales mais aussi dépasser 1,2 % vol. et relever d’autres règles selon le pays.

Le panaché vise avant tout fraîcheur, carbonatation, faible alcool et équilibre entre amertume de la bière, acidité et douceur de la boisson gazeuse.`,
    unique: true,
    malts: ["Bière de base généralement claire et peu intense ; sa recette peut varier."],
    hops: ["Houblonnage faible à modéré pour ne pas devenir dur face à la limonade/boisson gazeuse."],
    yeast: ["Levure de la bière de base ; aucune fermentation du mélange n’est nécessairement recherchée après assemblage."],
    extras: ["Boisson gazeuse aromatisée sans alcool ; exclusivement ce type de boisson avec la bière dans la définition française."],
    water: "Profil de la bière de base et de la boisson gazeuse ; fraîcheur et netteté prioritaires.",
    mash: "Celui de la bière de base."],
    boil: "Celui de la bière de base."],
    fermentation: "La bière est fermentée avant mélange ; le produit fini doit rester à ≤ 1,2 % vol. pour la dénomination française panaché."],
    maturation: "Assemblage et conditionnement visant stabilité, carbonatation et fraîcheur ; généralement pas de longue garde."],
    target: "Un mélange très frais de bière et boisson gazeuse aromatisée sans alcool, conforme au seuil français ≤ 1,2 % vol.",
    sources: [LEGIFRANCE_BEER, DGCCRF_BEER]
  }),

  "radler-shandy": entry({
    histoire: `Radler et Shandy appartiennent à la grande famille internationale des mélanges de bière et de boisson rafraîchissante. En pays germanophones, le Radler associe généralement une lager — parfois une bière de blé — à une limonade gazeuse citronnée. Le mot allemand signifie « cycliste » et le récit le plus célèbre attribue la popularisation du Radlermaß à l’aubergiste bavarois Franz Xaver Kugler en 1922. Les sources sérieuses présentent toutefois cette attribution comme une tradition largement répétée plutôt que comme une preuve que personne n’avait jamais mélangé bière et limonade auparavant.

Le Shandy britannique suit la même logique générale : bière, souvent bitter ou lager, mélangée à de la lemonade ou parfois ginger beer. Les proportions varient, même si le mélange moitié-moitié est courant. Aujourd’hui, de nombreuses versions sont conditionnées industriellement avec citron, agrumes ou autres fruits.

En France, Radler ou Shandy ne doivent pas être automatiquement assimilés à la dénomination légale « panaché ». Un produit vendu comme panaché doit respecter la définition française et son plafond de 1,2 % vol. ; un Radler international peut parfaitement titrer davantage.`,
    unique: true,
    malts: ["Bière de base généralement lager pâle, Helles, Pils ou bière de blé ; autres bases possibles pour un Shandy moderne."],
    hops: ["Amertume faible à modérée afin de rester harmonieuse avec douceur et acidité de la boisson mélangée."],
    yeast: ["Levure de la bière de base."],
    extras: ["Limonade gazeuse citronnée, lemonade, ginger beer ou boisson fruitée selon tradition et marché."],
    water: "Fraîcheur, carbonatation et équilibre sucre/acide dominent ; profil de la bière de base généralement doux."],
    mash: "Celui de la bière de base."],
    boil: "Celui de la bière de base ; houblonnage pensé pour le mélange final."],
    fermentation: "Bière fermentée avant assemblage ; les produits conditionnés doivent être stabilisés pour éviter refermentation non désirée des sucres de la boisson."],
    maturation: "Très courte : produit conçu pour être consommé frais et vif."],
    target: "Un mélange léger, pétillant et désaltérant où bière et agrumes/limonade restent perceptibles, sans confondre l’usage international avec le panaché légal français.",
    sources: [RADLER, LEGIFRANCE_BEER, DGCCRF_BEER]
  })
};
