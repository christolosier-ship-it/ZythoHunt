import { ba2026, bjcp2021, REFERENCES } from "./sources.mjs";

export const part4 = {
  "juicy-hazy-double-imperial-ipa": {
    histoireEtOrigines: `La Juicy or Hazy Double/Imperial IPA est l’aboutissement logique de deux mouvements craft américains : l’escalade de puissance de la Double IPA, née dans les années 1990, et l’esthétique plus douce, trouble et fruitée des Hazy IPA qui explose dans les années 2010. Au lieu d’augmenter simplement l’amertume d’une NEIPA, les brasseurs cherchent à augmenter densité, alcool et quantité de houblon tout en conservant une bouche souple et une amertume perçue relativement modérée.

La Brewers Association distingue aujourd’hui explicitement les Juicy or Hazy Imperial or Double India Pale Ale. Cette reconnaissance montre que le style est devenu plus qu’une simple « NEIPA forte ». Le défi est technique : une forte densité favorise chaleur alcoolique et sucrosité, tandis qu’un dry-hop massif augmente le risque de hop burn, d’oxydation, de refermentation tardive et de perte de stabilité.

Une version réussie doit donc donner une impression de fruits concentrés et d’onctuosité sans devenir sirupeuse. L’alcool peut être élevé, mais il doit rester intégré ; le trouble doit être stable et uniforme ; la finale doit conserver assez de sécheresse pour que la bière ne s’effondre pas sous son propre poids.`,
    recette: {
      profilUnique: true,
      explicationProfil: "Double IPA de l’école hazy : alcool élevé, houblon très intense, amertume douce et texture souple, avec une attention extrême à l’atténuation et à l’oxygène.",
      maltsEtCereales: [
        "Malt pale ou Pilsner dominant.",
        "Avoine et blé fréquents pour texture et trouble ; malt dextrinique possible avec modération.",
        "Crystal généralement évité afin de limiter couleur et douceur caramélisée."
      ],
      houblons: [
        "Citra, Mosaic, Galaxy, Nelson Sauvin, Motueka, El Dorado et autres variétés fortement fruitées.",
        "Très grosses charges au whirlpool et en dry-hop, parfois en plusieurs étapes ; amertume classique plus contenue qu’une Double IPA claire."
      ],
      levuresEtMicroorganismes: [
        "Souche fruitée, tolérante à l’alcool, à atténuation moyenne à élevée et capable de préserver une bouche souple.",
        "Le profil de fermentation doit compléter le houblon sans apporter de solvants ni d’alcool chaud."
      ],
      ingredientsComplementaires: [
        "Sucre simple possible en faible quantité si nécessaire pour contrôler la densité finale, sans devenir une caractéristique obligatoire."
      ],
      profilEau: "Chlorure souvent dominant pour la douceur de bouche, sulfate présent en quantité suffisante pour éviter une finale molle.",
      empatage: "Infusion visant davantage de fermentescibilité qu’une Hazy IPA standard afin de compenser la forte densité initiale.",
      ebullitionEtHoublonnage: "Faible à moyenne charge amérisante classique, puis houblonnage massif tardif et à cru. Gestion du hop creep, du hop burn et de l’oxygène indispensable.",
      fermentation: "Ensemencement sain et contrôle thermique strict. Les dry-hops doivent être planifiés pour éviter refermentation incontrôlée ou surpression après conditionnement.",
      maturation: "Courte, avec transferts fermés et conditionnement rapide. Le style vieillit très mal malgré sa force alcoolique.",
      profilRecherche: "Une bière très forte mais étonnamment douce et fruitée, saturée de houblon frais, sans chaleur alcoolique agressive ni sucrosité collante."
    },
    sources: [ba2026("Juicy or Hazy Imperial or Double India Pale Ale"), bjcp2021("21C Hazy IPA — lineage", "21/"), REFERENCES.lallemandVerdant, REFERENCES.russianRiverPliny]
  },

  "belgian-ipa": {
    histoireEtOrigines: `La Belgian IPA est un hybride craft, non un style monastique ancien. Elle apparaît lorsque les brasseurs belges et américains commencent à croiser, à la fin du XXe siècle et au début du XXIe, le houblonnage des IPA modernes avec des levures belges très expressives. Le résultat n’est ni une Tripel simplement plus amère, ni une American IPA fermentée au hasard avec n’importe quelle souche belge : le style fonctionne lorsque les esters, les phénols épicés, la sécheresse et le houblon se renforcent mutuellement.

Le mouvement s’inscrit dans une période de forte circulation des idées entre les scènes craft américaine et belge. Les brasseurs américains s’inspirent des fermentations très atténuées et des levures épicées de Belgique, tandis que plusieurs brasseries belges adoptent davantage de houblons américains ou néo-zélandais. Le BJCP codifie aujourd’hui Belgian IPA parmi les Specialty IPA, ce qui reflète cette nature hybride.

La difficulté est l’accumulation aromatique : une souche donnant banane, girofle, poivre et alcools supérieurs combinée à un houblon tropical intense peut devenir confuse. Les meilleures versions privilégient souvent une fermentation sèche, un malt clair et une sélection de houblons capable de dialoguer avec le fruité et l’épice de la levure.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA sèche et houblonnée dont la fermentation belge apporte fruité et épices sans masquer le houblon.",
      maltsEtCereales: [
        "Malt Pilsner ou pale très clair dominant.",
        "Petite proportion de Munich/Vienna possible ; caramel généralement faible.",
        "Sucre candi clair ou saccharose possible pour augmenter l’atténuation et alléger la bouche."
      ],
      houblons: [
        "Houblons américains, du Nouveau Monde ou continentaux : agrumes, fruits tropicaux, épices et fleurs peuvent tous fonctionner.",
        "Amertume moyenne à forte, mais la sécheresse de fermentation augmente déjà la perception de fermeté."
      ],
      levuresEtMicroorganismes: [
        "Souche belge de Saccharomyces cerevisiae produisant esters fruités et éventuellement phénols poivrés/clou de girofle.",
        "Choisir une souche fortement atténuante afin d’éviter une combinaison lourde de sucre résiduel, alcool et houblon."
      ],
      ingredientsComplementaires: [
        "Sucre simple ou candi clair possible pour alléger la structure."
      ],
      profilEau: "Faible alcalinité, sulfate modéré à élevé pour la sécheresse, chlorure contenu afin d’éviter une bouche trop ronde.",
      empatage: "Empâtage favorisant une forte fermentescibilité ; sucre simple souvent ajouté en chaudière ou fermentation selon la recette.",
      ebullitionEtHoublonnage: "Amertume structurante puis ajouts tardifs et dry-hop mesurés pour éviter de surcharger un profil fermentaire déjà complexe.",
      fermentation: "Fermentation haute avec montée contrôlée de température afin d’obtenir fruité et épices sans solvants. Atténuation complète essentielle.",
      maturation: "Courte à moyenne selon la force, mais consommation relativement fraîche pour préserver le houblon.",
      profilRecherche: "Une IPA sèche, lumineuse et expressive où poire, agrumes, poivre et houblon moderne forment un ensemble cohérent plutôt qu’un empilement d’arômes."
    },
    sources: [bjcp2021("21B Specialty IPA: Belgian IPA", "21/21B/specialty-ipa/"), ba2026("Belgian-Style India Pale Ale"), REFERENCES.lallemandVerdant]
  },

  "black-ipa": {
    histoireEtOrigines: `La Black IPA naît de la volonté craft de conserver l’équilibre d’une IPA tout en introduisant une couleur sombre et une touche de malt torréfié. Des précurseurs apparaissent aux États-Unis dans les années 1990 et 2000, particulièrement dans le Nord-Ouest Pacifique, où certains brasseurs préfèrent l’appellation « Cascadian Dark Ale ». Le nom « Black IPA », volontairement contradictoire puisque le P signifie Pale, s’impose pourtant largement sur le marché.

CAMRA souligne ce paradoxe dans son histoire de l’IPA et rappelle la tentative de reclassification sous un nom régional. La catégorie se répand fortement pendant les années 2000-2010 lorsque l’IPA devient un terrain d’expérimentation permanent. Le BJCP l’intègre aujourd’hui parmi les Specialty IPA.

La clé stylistique est la retenue des malts sombres. Une Black IPA ne doit pas goûter comme un stout fortement houblonné : les notes de chocolat, café léger ou pain grillé restent secondaires et ne doivent pas produire de brûlé, de cendre ou de forte astringence. La sécheresse et le houblon restent ceux d’une IPA américaine.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA américaine sombre où la torréfaction soutient le houblon sans transformer la bière en stout ou porter houblonné.",
      maltsEtCereales: [
        "Malt pale dominant.",
        "Malts noirs désamérisés, Carafa Special ou autres malts sombres doux en faible proportion pour couleur et notes légères de cacao/café.",
        "Crystal faible à modéré selon l’école, mais la finale doit rester sèche."
      ],
      houblons: [
        "Houblons américains ou du Nouveau Monde intenses, souvent résineux, agrumés, tropicaux ou à fruits à noyau.",
        "Amertume moyenne-forte à très forte, gros houblonnage tardif et dry-hop."
      ],
      levuresEtMicroorganismes: [
        "Souche américaine propre et atténuante."
      ],
      ingredientsComplementaires: [],
      profilEau: "Sulfate souvent élevé pour la sécheresse ; alcalinité légèrement supérieure à une IPA pâle peut être nécessaire pour gérer les malts sombres, sans remonter au point de durcir la bière.",
      empatage: "Infusion favorisant une bonne atténuation. Les malts les plus sombres peuvent être ajoutés tard ou sous formes désamérisées pour limiter astringence et brûlé.",
      ebullitionEtHoublonnage: "Architecture d’IPA américaine : amertume nette, whirlpool et dry-hop généreux.",
      fermentation: "Fermentation haute propre, avec attention à l’oxydation qui ternit à la fois houblon et malt sombre.",
      maturation: "Courte ; la fraîcheur aromatique prime sur l’intégration longue des malts noirs.",
      profilRecherche: "Une IPA noire mais sèche, intensément houblonnée, avec seulement une ombre de chocolat, café ou toast en soutien."
    },
    sources: [bjcp2021("21B Specialty IPA: Black IPA", "21/21B/specialty-ipa/"), ba2026("American-Style Black Ale / Black IPA context"), REFERENCES.camraIpa]
  },

  "brown-ipa": {
    histoireEtOrigines: `La Brown IPA est une création de la diversification américaine de l’IPA, particulièrement visible lorsque le BJCP formalise les Specialty IPA. Elle combine l’intensité houblonnée et la finale sèche d’une American IPA avec une base de malt rappelant l’American Brown Ale : caramel sombre, chocolat doux, noix, biscuit, toast et parfois fruits secs.

Il ne s’agit pas d’une tradition historique liée aux India Pale Ales britanniques. Le nom sert plutôt à décrire un équilibre moderne reconnu par le marché : une IPA qui n’est plus « pale » au sens littéral, mais qui conserve la structure sèche et amère associée au sigle IPA. Cette logique illustre l’évolution du mot IPA d’une origine géographique/historique vers une famille sensorielle.

La difficulté est de maintenir la buvabilité. Une Brown IPA trop riche en crystal ou en chocolat devient une American Brown Ale forte et houblonnée ; trop maigre, elle ressemble à une Black IPA claire. Les meilleurs exemples utilisent le malt brun comme couche de complexité, pas comme centre de gravité.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA américaine brune : malt plus riche qu’une Black IPA, mais finale toujours sèche et houblon clairement dominant.",
      maltsEtCereales: [
        "Malt pale dominant.",
        "Crystal moyen à sombre, malt chocolat doux, biscuit ou amber malt en proportions mesurées pour noix, toffee, cacao et pain grillé.",
        "Éviter une charge de malts torréfiés donnant brûlé ou cendre."
      ],
      houblons: [
        "Houblons américains ou du Nouveau Monde à agrumes, pin, résine, fruits tropicaux ou fruits à noyau.",
        "Amertume forte nécessaire pour équilibrer le malt plus riche."
      ],
      levuresEtMicroorganismes: [
        "Souche américaine propre, esters faibles."
      ],
      ingredientsComplementaires: [],
      profilEau: "Sulfate modéré à élevé pour garder une finale sèche ; chlorure suffisant pour intégrer les malts bruns sans rendre la bière dure.",
      empatage: "Infusion favorisant une bonne fermentescibilité malgré les malts de spécialité.",
      ebullitionEtHoublonnage: "Amertume ferme, ajouts tardifs et dry-hop comparables à une American IPA.",
      fermentation: "Fermentation haute propre et complète.",
      maturation: "Courte ; le houblon doit rester frais tandis que le malt se fond rapidement.",
      profilRecherche: "Une IPA brune sèche, où toffee, noix et chocolat léger soutiennent un houblon intense sans alourdir la finale."
    },
    sources: [bjcp2021("21B Specialty IPA: Brown IPA", "21/21B/specialty-ipa/"), ba2026("Brown IPA / Specialty IPA context")]
  },

  "red-ipa": {
    histoireEtOrigines: `La Red IPA appartient à la même vague de diversification que Black, Brown et Rye IPA. Elle ne possède pas de lignée historique autonome : elle résulte de la rencontre entre l’American IPA et les ales ambrées/rouges américaines. Le BJCP la codifie comme Specialty IPA afin de reconnaître un profil devenu suffisamment courant dans les brasseries craft.

La couleur rouge à rubis vient généralement de malts crystal, caramel ou légèrement torréfiés, qui apportent aussi toffee et fruits secs. Pourtant la bière doit rester clairement une IPA : houblon intense, amertume forte, finale sèche. Une American Amber Ale simplement très houblonnée n’atteint pas nécessairement cet équilibre si le malt reste dominant.

Le style a surtout été populaire dans les années où les IPA américaines étaient plus ambrées qu’aujourd’hui. Il reste pertinent pour les brasseurs souhaitant combiner profondeur maltée et houblon moderne sans aller vers le caractère sombre d’une Brown ou Black IPA.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA rouge à charpente caramel/toast plus visible qu’une American IPA, mais toujours sèche, amère et houblonnée.",
      maltsEtCereales: [
        "Malt pale dominant.",
        "Crystal moyen, caramel rouge, Munich/Vienna ou petite touche de malt très coloré pour atteindre le rouge sans torréfaction marquée.",
        "Éviter une proportion de crystal qui rendrait la finale sucrée."
      ],
      houblons: [
        "Houblons américains et du Nouveau Monde, souvent agrumés, résineux, tropicaux ou à fruits à noyau.",
        "Amertume moyenne-forte à très forte et fort houblonnage aromatique."
      ],
      levuresEtMicroorganismes: [
        "Souche américaine propre et atténuante."
      ],
      ingredientsComplementaires: [],
      profilEau: "Sulfate généralement soutenu pour équilibrer les malts caramel ; chlorure modéré pour ne pas durcir la bouche.",
      empatage: "Infusion orientée vers une bonne atténuation, avec corps moyen-léger à moyen.",
      ebullitionEtHoublonnage: "Amertume de chaudière puis gros ajouts tardifs et dry-hop.",
      fermentation: "Fermentation haute propre, esters faibles à modérés.",
      maturation: "Courte ; protection contre l’oxydation particulièrement importante car elle brunit rapidement les teintes rouges et ternit le houblon.",
      profilRecherche: "Une IPA rouge, sèche et amère, où caramel et toast apportent profondeur sans prendre le dessus sur le houblon."
    },
    sources: [bjcp2021("21B Specialty IPA: Red IPA", "21/21B/specialty-ipa/"), ba2026("Red IPA / Specialty IPA context")]
  },

  "rye-ipa": {
    histoireEtOrigines: `La Rye IPA est une adaptation américaine contemporaine de l’IPA dans laquelle le seigle devient un ingrédient de caractère. Le grain apporte une sensation épicée, céréalière et poivrée ainsi qu’une texture souvent plus crémeuse. La combinaison fonctionne particulièrement bien avec les houblons américains résineux et agrumés, ce qui explique sa diffusion dans la scène craft des années 2000.

Le style n’est pas l’héritier direct des anciennes bières de seigle européennes. Son architecture reste celle d’une American IPA : forte expression de houblon, amertume élevée, fermentation relativement propre et finale sèche. Le seigle agit comme une signature maltée secondaire. Le BJCP le classe donc logiquement parmi les Specialty IPA.

Brasser avec beaucoup de seigle introduit aussi des contraintes pratiques : absence d’enveloppe du grain, forte teneur en bêta-glucanes et risque d’empâtage visqueux. Les recettes utilisent généralement une proportion suffisante pour être perceptible sans rendre filtration et texture incontrôlables.`,
    recette: {
      profilUnique: true,
      explicationProfil: "American IPA enrichie de seigle : grain épicé et texture plus crémeuse, mais houblon et sécheresse restent centraux.",
      maltsEtCereales: [
        "Malt pale dominant.",
        "Malt de seigle souvent autour d’une proportion modérée suffisante pour apporter poivre, grain et texture ; la quantité exacte dépend du procédé.",
        "Crystal faible à modéré selon l’école."
      ],
      houblons: [
        "Houblons américains ou du Nouveau Monde, les profils résineux, agrumés et épicés se mariant particulièrement bien au seigle.",
        "Amertume forte, houblonnage tardif et dry-hop généreux."
      ],
      levuresEtMicroorganismes: [
        "Souche américaine propre et atténuante."
      ],
      ingredientsComplementaires: [
        "Balles de riz possibles comme aide de filtration lorsque la proportion de seigle rend la maische très visqueuse ; elles n’apportent pas de goût."
      ],
      profilEau: "Sulfate modéré à élevé pour accentuer la finale sèche ; faible alcalinité.",
      empatage: "Empâtage soigneux ; un palier bêta-glucanase peut être utile avec de fortes proportions de seigle, ainsi qu’une filtration assistée.",
      ebullitionEtHoublonnage: "Architecture de houblonnage d’American IPA avec amertume soutenue et gros ajouts aromatiques.",
      fermentation: "Fermentation haute propre.",
      maturation: "Courte et fraîche.",
      profilRecherche: "Une IPA sèche et très houblonnée, traversée par une note de seigle poivrée et céréalière qui ajoute de la texture sans brouiller le houblon."
    },
    sources: [bjcp2021("21B Specialty IPA: Rye IPA", "21/21B/specialty-ipa/"), ba2026("Rye IPA / Specialty IPA context")]
  },

  "white-ipa": {
    histoireEtOrigines: `La White IPA est un hybride craft américain apparu à la charnière des années 2000 et 2010. Elle combine la structure d’une IPA moderne avec des éléments empruntés à la Witbier belge : blé, couleur très pâle, trouble possible, épices et parfois une levure apportant agrumes ou phénols. Plusieurs collaborations et bières de brasseries nord-américaines ont popularisé cette idée avant que les guides de style ne la stabilisent comme Specialty IPA.

Le nom « White » renvoie donc moins à une tradition précise qu’à un langage sensoriel : bière pâle, souvent voilée, sèche et vive, où le houblon rencontre des notes d’écorce d’agrume, de coriandre et parfois de poivre. Le BJCP précise que l’équilibre doit rester celui d’une IPA ; si les épices ou la levure dominent et que le houblon devient secondaire, on se rapproche davantage d’une Witbier fortement houblonnée.

Le style a aujourd’hui moins de visibilité commerciale qu’au pic de sa popularité, mais il reste un exemple important de la période où l’IPA devient une plateforme d’hybridation systématique avec d’autres familles de bière.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA très pâle combinant houblon moderne, blé et éventuellement épices/levure de type Witbier, avec une finale sèche.",
      maltsEtCereales: [
        "Malt Pilsner ou pale très clair comme base.",
        "Froment malté ou cru en proportion significative pour pâleur, mousse et texture.",
        "Avoine possible en petite quantité selon l’inspiration Witbier."
      ],
      houblons: [
        "Houblons américains ou du Nouveau Monde à agrumes et fruits, choisis pour s’accorder avec coriandre et écorces d’agrumes.",
        "Amertume moyenne à forte, plus gros houblonnage tardif qu’une Witbier."
      ],
      levuresEtMicroorganismes: [
        "Souche belge/witbier épicée ou souche plus neutre selon la version ; les phénols doivent rester intégrés au houblon."
      ],
      ingredientsComplementaires: [
        "Coriandre et écorces d’orange ou autres agrumes fréquemment utilisées, mais avec retenue afin de préserver l’identité IPA."
      ],
      profilEau: "Faible alcalinité, sulfate modéré pour la sécheresse et chlorure suffisant pour soutenir le blé.",
      empatage: "Infusion adaptée à une proportion importante de blé ; bonne fermentescibilité recherchée.",
      ebullitionEtHoublonnage: "Amertume d’IPA, ajouts tardifs et dry-hop ; épices généralement ajoutées en fin d’ébullition ou au whirlpool avec prudence.",
      fermentation: "Fermentation haute, éventuellement avec une souche belge produisant agrumes et poivre. Contrôler les phénols pour éviter l’effet médicinal.",
      maturation: "Courte ; un léger trouble est acceptable et la fraîcheur du houblon prime.",
      profilRecherche: "Une IPA pâle et vive, où blé, agrumes, épices et houblon s’imbriquent dans une finale sèche sans donner une bière parfumée artificiellement."
    },
    sources: [bjcp2021("21B Specialty IPA: White IPA", "21/21B/specialty-ipa/"), ba2026("White IPA / Specialty IPA context")]
  },

  "brut-ipa": {
    histoireEtOrigines: `La Brut IPA possède une origine inhabituellement bien documentée pour un style craft récent. Elle est généralement attribuée à Kim Sturdavant, alors brasseur au Social Kitchen & Brewery de San Francisco, vers 2017-2018. En travaillant avec des enzymes destinées à augmenter l’atténuation d’une bière forte, il explore l’idée d’utiliser l’amyloglucosidase sur une IPA de force standard. L’enzyme transforme davantage de dextrines en sucres fermentescibles, permettant une densité finale extrêmement basse.

L’American Homebrewers Association décrit le style en 2019 comme une IPA très pâle, extrêmement sèche et fortement pétillante, avec une amertume réelle relativement faible mais un grand parfum de houblon. L’analogie avec le Champagne vient de la combinaison entre sécheresse, couleur claire, carbonatation élevée et mousse abondante, même si la méthode et les matières premières restent celles d’une bière.

La mode se diffuse très vite puis recule presque aussi rapidement, en partie parce que l’extrême sécheresse rend l’équilibre difficile : une amertume normalement modérée peut devenir agressive lorsque presque aucun sucre résiduel ne subsiste. Le BJCP conserve néanmoins Brut IPA parmi les Specialty IPA, ce qui lui donne une place importante comme témoignage d’une période d’expérimentation intense autour des enzymes et du houblon.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA très pâle, extrêmement atténuée et fortement carbonatée, où l’arôme de houblon est élevé mais l’amertume est volontairement contenue.",
      maltsEtCereales: [
        "Malt Pilsner ou pale très clair dominant.",
        "Riz, maïs ou autres céréales légères possibles pour alléger encore la structure, mais non obligatoires.",
        "Crystal et malts riches en dextrines généralement évités."
      ],
      houblons: [
        "Houblons américains ou du Nouveau Monde très aromatiques, avec profils agrumes, fruits tropicaux, raisin blanc ou fruits à noyau.",
        "Peu de houblon amérisant ; priorité au whirlpool et au dry-hop pour conserver beaucoup d’arôme avec une amertume basse à modérée."
      ],
      levuresEtMicroorganismes: [
        "Souche d’ale propre et très atténuante."
      ],
      ingredientsComplementaires: [
        "Amyloglucosidase/glucoamylase utilisée au brassage et/ou en fermentation afin de dégrader les dextrines et pousser l’atténuation très près de sa limite pratique."
      ],
      profilEau: "Faible alcalinité ; sulfate à employer avec prudence car une bière extrêmement sèche amplifie la perception d’amertume et de dureté.",
      empatage: "Empâtage très fermentescible, souvent complété par enzyme afin de réduire drastiquement les dextrines résiduelles.",
      ebullitionEtHoublonnage: "Amertume volontairement limitée ; houblons principalement tardifs, whirlpool et dry-hop.",
      fermentation: "Fermentation complète jusqu’à une densité finale extrêmement basse. Vérifier la stabilité avant conditionnement car l’enzyme peut poursuivre son action.",
      maturation: "Courte, puis carbonatation élevée. Conditionnement sécurisé indispensable compte tenu de l’atténuation extrême et du risque de refermentation.",
      profilRecherche: "Une IPA presque tranchante de sécheresse, très pétillante et parfumée, évoquant un vin effervescent houblonné sans douceur résiduelle."
    },
    sources: [bjcp2021("21B Specialty IPA: Brut IPA", "21/21B/specialty-ipa/"), REFERENCES.ahaBrut, ba2026("Brut IPA / Specialty IPA context")]
  }
};
