import { ba2026, bjcp2021, HISTORY, TECH } from "./lagers-sources.js";

export const lagersEnrichmentPart1 = {
  lager: {
    histoireEtOrigines: `Le mot « lager » ne décrit pas d’abord une couleur ou une intensité aromatique : il vient de l’allemand lagern, « entreposer ». Bien avant la maîtrise microbiologique de la fermentation, les brasseurs d’Europe centrale avaient compris l’intérêt d’une fermentation et surtout d’une garde au froid, dans des caves, des celliers ou des galeries où la température restait basse. Ces pratiques ont progressivement favorisé des levures capables de travailler à plus basse température et de sédimenter fortement. La famille moderne des levures lager appartient principalement à Saccharomyces pastorianus, un hybride dont l’histoire biologique est plus complexe que le récit simplifié d’une « invention » unique de la fermentation basse.

La révolution du XIXe siècle est autant technique que stylistique. Le développement de malts plus pâles, l’amélioration des systèmes de refroidissement, puis la réfrigération mécanique rendent possible une production régulière indépendamment des saisons. En 1883, au laboratoire Carlsberg, Emil Christian Hansen met au point l’emploi industriel d’une culture pure de levure de fermentation basse. Cette avancée améliore radicalement la reproductibilité et limite les altérations liées aux levures sauvages. Carlsberg partage ensuite cette méthode avec d’autres brasseries, contribuant à standardiser la fermentation lager à grande échelle.

À partir de là, la lager cesse d’être une spécialité régionale pour devenir la grande infrastructure du brassage mondial. Pilsner, Helles, Dunkel, Schwarzbier, Vienna Lager, Bock ou grandes lagers internationales peuvent être très différentes, mais partagent une logique : fermentation très maîtrisée, profil généralement plus net que les ales expressives, puis maturation froide destinée à clarifier, arrondir et stabiliser la bière. La domination commerciale des lagers au XXe siècle a parfois réduit le mot à l’image d’une bière blonde légère ; historiquement et techniquement, la famille est beaucoup plus vaste, allant de la Leichtbier à moins de 4 % jusqu’à l’Eisbock dépassant largement 10 %.`,
    recette: {
      profilUnique: false,
      explicationProfil: "La lager est une famille de fermentation et de maturation, non une recette. Les paramètres ci-dessous décrivent les principes communs ; la composition exacte dépend entièrement du sous-style.",
      maltsEtCereales: [
        "Base possible en malt Pilsner très pâle, Vienna ou Munich selon que l’on recherche finesse céréalière, toasté ou profondeur maltée.",
        "Riz, maïs ou autres céréales non maltées peuvent être légitimes dans certaines traditions internationales ou américaines ; ils ne sont pas un marqueur universel de lager.",
        "Les lagers sombres utilisent des malts plus colorés, parfois des malts torréfiés désamérisés en faible proportion pour apporter la couleur sans dureté brûlée."
      ],
      houblons: [
        "Houblons nobles ou apparentés dans de nombreuses traditions européennes : Saaz, Hallertau, Tettnang, Spalt et variétés modernes de même registre.",
        "Les familles contemporaines peuvent employer des houblons américains, néo-zélandais ou autres avec houblonnage tardif et à cru ; ce n’est donc pas un trait universel."
      ],
      levuresEtMicroorganismes: [
        "Saccharomyces pastorianus est la référence moderne de la fermentation lager.",
        "Des souches neutres et fortement atténuantes sont recherchées ; les profils techniques modernes se situent souvent autour de 10–15 °C pour une conduite traditionnelle, mais certaines souches tolèrent des plages plus larges."
      ],
      ingredientsComplementaires: [
        "Aucun ingrédient complémentaire n’est requis par la famille ; sucres, céréales crues ou procédés particuliers dépendent du style et de la tradition locale."
      ],
      profilEau: "Du très doux profil de Plzeň aux eaux plus minérales de Dortmund, il n’existe pas une « eau de lager ». L’eau est au contraire un levier majeur de différenciation : sulfate, chlorure, alcalinité et dureté modifient la perception du houblon, du malt et de la sécheresse.",
      empatage: "Infusion simple, paliers ou décoctions sont tous possibles. Les décoctions sont historiquement liées à plusieurs traditions d’Europe centrale ; les procédés modernes peuvent atteindre des objectifs similaires avec des malts plus réguliers et un contrôle précis du pH et des températures.",
      ebullitionEtHoublonnage: "La plupart des lagers classiques privilégient une ébullition franche et un houblonnage lisible mais maîtrisé. Le niveau va de presque imperceptible dans une light lager à très structurant dans une Pils allemande ou une Czech Premium Pale Lager.",
      fermentation: "Ensemencement généreux, oxygénation correcte et contrôle thermique sont essentiels. Une phase de fermentation fraîche est suivie d’une gestion du diacétyle et des composés soufrés adaptée à la souche et au procédé.",
      maturation: "Le lagering est une maturation froide après fermentation. Sa durée varie fortement : quelques semaines dans des procédés modernes efficaces, davantage pour certaines productions traditionnelles ou fortes. L’objectif est la netteté, la stabilité, la clarification et l’intégration aromatique, pas une durée symbolique imposée.",
      profilRecherche: "Une fermentation propre et précise dont la discrétion laisse parler le malt, le houblon et le sous-style choisi."
    },
    sources: [ba2026("Lager styles"), HISTORY.lagerYeast, TECH.diamond, TECH.w3470]
  },

  pilsner: {
    histoireEtOrigines: `La Pilsner naît à Plzeň, en Bohême, dans un contexte de réforme brassicole. Au début des années 1840, les bourgeois détenteurs du droit de brassage souhaitent améliorer la qualité des bières locales et font construire une nouvelle brasserie. Le Bavarois Josef Groll est engagé comme maître brasseur. Le 5 octobre 1842, il brasse la bière qui sera servie pour la première fois en novembre et deviendra le prototype de la lager dorée moderne. Son succès repose moins sur un ingrédient miraculeux que sur la convergence de plusieurs progrès : fermentation basse bavaroise, maltage suffisamment doux pour produire un malt pâle, eau très douce de Plzeň, houblon aromatique de Žatec/Saaz et installations adaptées à la garde froide.

Le BJCP souligne que l’histoire est plus nuancée que l’expression « première lager pâle » : des lagers claires ont probablement existé auparavant et l’évolution des techniques anglaises de maltage joue un rôle dans la disponibilité de malts plus pâles. Mais la bière de Plzeň est bien le modèle qui donne au mot Pilsner sa portée mondiale. Sa couleur dorée et sa limpidité arrivent au moment où la verrerie, les transports et l’industrialisation permettent à l’apparence même de la bière de devenir un argument de séduction.

La Pilsner se ramifie ensuite. La tradition tchèque conserve une rondeur maltée, une amertume très présente mais douce et l’usage des houblons tchèques. Les interprétations allemandes deviennent généralement plus sèches et plus tranchantes. Les versions internationales simplifient parfois le profil, tandis que les scènes craft italienne et américaine réintroduisent des houblonnages tardifs ou à cru. Parler de « Pilsner » comme d’une recette unique est donc trompeur : il s’agit d’une famille issue d’un événement fondateur très précis mais développée ensuite en plusieurs écoles.

Pilsner Urquell demeure un témoin technique exceptionnel de la tradition de Plzeň : la brasserie revendique encore le malt d’orge tchèque, le houblon Saaz, l’eau locale très douce et une triple décoction, suivis d’une fermentation puis d’une maturation prolongée. Ces éléments ne doivent pas être transformés en obligations universelles pour toutes les Pilsners, mais ils expliquent l’architecture historique du style.`,
    recette: {
      profilUnique: false,
      explicationProfil: "Pilsner recouvre plusieurs écoles — tchèque, allemande, internationale et contemporaines. La base technique commune est une lager pâle où malt et houblon restent lisibles, mais leur équilibre change fortement.",
      maltsEtCereales: [
        "Malt Pilsner comme base dominante ; les versions traditionnelles cherchent un caractère de céréale, de pain clair et parfois de miel très léger plutôt qu’une neutralité totale.",
        "Les versions tchèques peuvent obtenir davantage de profondeur par le maltage local et la décoction ; les versions internationales peuvent intégrer des céréales adjointes."
      ],
      houblons: [
        "Saaz/Žatec pour l’école tchèque ; Hallertau, Tettnang, Spalt et autres houblons nobles ou apparentés dans l’école allemande.",
        "Les interprétations contemporaines peuvent employer des variétés modernes, mais une Pilsner reste généralement plus nette et structurée qu’une IPA."
      ],
      levuresEtMicroorganismes: [
        "Souche lager propre, avec bonne atténuation et capacité à produire un profil net après maturation froide."
      ],
      ingredientsComplementaires: [],
      profilEau: "L’école tchèque classique est associée à une eau très pauvre en sulfate et carbonate, donnant une amertume étonnamment ronde malgré un houblonnage élevé. Les Pils allemandes peuvent supporter un profil plus minéral, souvent plus sec dans la perception.",
      empatage: "Infusion ou paliers modernes ; décoction simple, double ou triple dans certaines traditions. Pilsner Urquell conserve une triple décoction, mais celle-ci n’est pas une condition nécessaire à toute Pilsner.",
      ebullitionEtHoublonnage: "Amertume de fond clairement construite, puis ajouts aromatiques adaptés à l’école. Les Pils classiques privilégient généralement le houblonnage en chaudière ; les versions italiennes et certaines craft ajoutent un houblonnage à cru.",
      fermentation: "Fermentation basse avec profil propre. Les températures et la durée dépendent de la souche ; l’objectif est de limiter les esters et le diacétyle indésirables tout en conservant éventuellement la signature légère admise dans certaines lagers tchèques.",
      maturation: "Lagering suffisamment long pour clarifier et intégrer le soufre, le malt et l’amertume. Une garde trop longue après un houblonnage à cru peut en revanche diminuer les arômes recherchés dans les variantes modernes.",
      profilRecherche: "Une lager dorée précise et lumineuse, avec un vrai goût de malt pâle et une amertume ou un parfum de houblon clairement assumés selon l’école."
    },
    sources: [ba2026("Pilsener families"), bjcp2021("Czech and German Pilsner families", "3/czech-lager/"), HISTORY.pilsnerUrquell, HISTORY.pilsnerProcess, TECH.pilsnerMalt]
  },

  "hoppy-lager": {
    histoireEtOrigines: `« Hoppy Lager » est une famille contemporaine plus qu’un style historique figé. L’idée consiste à conserver la fermentation basse, la sécheresse et la netteté d’une lager tout en poussant le houblon au premier plan. Ce terrain existait déjà dans les Pilsners les plus aromatiques, mais la révolution des houblons modernes et la culture craft ont élargi le vocabulaire : dry-hopping inspiré de l’Italian Pilsner, intensité américaine de l’India Pale Lager, profils résineux ou tropicaux des West Coast Pilsners, et nombreuses lagers de brasserie difficiles à enfermer dans une catégorie unique.

La famille devient particulièrement visible lorsque les brasseurs artisanaux, longtemps concentrés sur les ales et les IPA, reviennent aux fermentations basses. La lager est alors utilisée comme une toile de fond très propre : moins d’esters de levure, moins de sucrosité résiduelle, plus d’espace pour percevoir les variétés de houblon et la précision de l’amertume. Les Brewers Association Guidelines reconnaissent aujourd’hui plusieurs de ces branches séparément, notamment Italian-Style Pilsener, American-Style India Pale Lager et West Coast-Style Pilsener.

La limite stylistique est importante : si le corps devient épais, si la fermentation paraît fruitée ou si le houblonnage masque totalement la structure lager, on se rapproche davantage d’une IPA fermentée proprement que d’une Hoppy Lager. La meilleure version conserve deux lectures simultanées : le parfum du houblon au premier plan et, dessous, une bière froide, sèche, nette et désaltérante.`,
    recette: {
      profilUnique: false,
      explicationProfil: "Famille volontairement large : le niveau d’alcool, l’amertume et les variétés de houblon changent selon Italian Pilsner, IPL, West Coast Pilsner ou interprétation maison.",
      maltsEtCereales: [
        "Malt Pilsner ou pale très clair comme base ; éventuel appoint de Vienna ou de malt dextrinique très mesuré pour soutenir le houblon sans épaissir la bière."
      ],
      houblons: [
        "Houblons nobles et continentaux pour les variantes italiennes ; variétés américaines, néo-zélandaises ou modernes pour les interprétations plus intenses.",
        "Ajouts tardifs et whirlpool fréquents ; dry-hopping courant mais dosé pour préserver la netteté et limiter la matière végétale."
      ],
      levuresEtMicroorganismes: [
        "Souche lager neutre et atténuante ; certaines interprétations contemporaines utilisent une souche très propre conduite plus chaud, mais le résultat sensoriel doit rester lager-like."
      ],
      ingredientsComplementaires: [],
      profilEau: "Plutôt pauvre en alcalinité. Un rapport sulfate/chlorure modérément orienté vers le sulfate peut accentuer la sécheresse et la netteté de l’amertume, sans aller jusqu’à la dureté de certaines IPA.",
      empatage: "Empâtage visant une bonne fermentescibilité et un corps léger à moyen-léger.",
      ebullitionEtHoublonnage: "Construire d’abord une amertume propre, puis superposer les arômes tardifs. Le dry-hop doit être suffisamment expressif pour signer la bière mais pas au point d’apporter brûlure végétale ou haze massif si le sous-style vise la limpidité.",
      fermentation: "Fermentation basse propre, puis gestion soigneuse du diacétyle avant le dry-hop et le froid.",
      maturation: "Maturation plus courte que sur certaines lagers classiques lorsque la fraîcheur du houblon est prioritaire ; conditionnement avec limitation stricte de l’oxygène.",
      profilRecherche: "Le parfum d’une bière houblonnée moderne avec la sécheresse, la netteté et la buvabilité d’une lager."
    },
    sources: [ba2026("Italian-Style Pilsener, American-Style India Pale Lager and West Coast-Style Pilsener"), HISTORY.tipopils, TECH.diamond]
  },

  bock: {
    histoireEtOrigines: `La famille Bock plonge ses racines dans la ville hanséatique d’Einbeck, en Basse-Saxe. La brasserie d’Einbeck conserve une facture datée du 28 avril 1378 attestant la vente de bière vers Celle et décrit une culture brassicole où de nombreux citoyens possédaient le droit de brasser. La position commerciale d’Einbeck, reliée aux réseaux de la Hanse et aux routes de longue distance, favorise l’exportation d’une bière suffisamment robuste pour voyager. L’idée que le Bock serait simplement « une bière bavaroise forte » masque donc une première phase nord-allemande importante.

Au cours des siècles suivants, cette bière gagne la Bavière. Munich adapte progressivement la tradition aux pratiques locales de fermentation basse et aux malts bavarois. Le passage d’« Einbeck » à « Bock » est entouré de récits linguistiques et folkloriques ; le bouc, Bock en allemand, devient en tout cas l’emblème graphique durable de nombreuses bières de la famille. Il vaut mieux considérer l’étymologie populaire comme une tradition culturelle plutôt que comme un fait unique définitivement établi.

La famille moderne réunit plusieurs expressions. Le Dunkles ou Traditional Bock est sombre et profondément malté ; le Helles Bock/Maibock éclaircit la robe et augmente parfois la présence du houblon ; le Doppelbock pousse la densité et la richesse beaucoup plus loin ; l’Eisbock concentre encore une bière forte par congélation partielle. Leur fil commun n’est pas le caramel mais une forte expression du malt, une fermentation propre et une chaleur alcoolique intégrée. Les guides de styles insistent justement sur le fait qu’un Bock traditionnel peut être riche et doux sans devenir collant, et que les notes de pain, toast et fruits secs doivent venir de la matière maltée et de la conduite du brassage plutôt que d’une surcharge de malts caramel.`,
    recette: {
      profilUnique: false,
      explicationProfil: "Bock est une famille. La couleur, le degré alcoolique et l’équilibre changent fortement entre Helles Bock, Dunkles Bock, Doppelbock et Eisbock.",
      maltsEtCereales: [
        "Munich et Vienna forment le cœur des versions sombres ; le malt Pilsner prend davantage de place dans les Helles Bock.",
        "Les malts caramel peuvent intervenir en soutien, mais la complexité recherchée doit surtout venir des malts de base riches et des réactions de Maillard."
      ],
      houblons: [
        "Houblons allemands ou nobles, généralement en soutien. Le Helles Bock peut montrer davantage de houblon que le Traditional Bock."
      ],
      levuresEtMicroorganismes: [
        "Souche lager saine et suffisamment tolérante à l’alcool pour terminer une fermentation de forte densité sans sucrosité excessive."
      ],
      ingredientsComplementaires: [],
      profilEau: "Profil modérément minéral et alcalinité adaptée à la couleur. L’eau doit soutenir la rondeur maltée sans rendre la finale crayeuse ni l’amertume agressive.",
      empatage: "Empâtage par paliers ou décoction possible. Une décoction peut renforcer pain, croûte et profondeur sans recourir à une forte dose de caramel malt.",
      ebullitionEtHoublonnage: "Ébullition suffisamment vigoureuse pour concentrer un moût riche et éviter le DMS dans les versions riches en Pilsner. Houblonnage d’équilibre, rarement aromatique au premier plan.",
      fermentation: "Ensemencement abondant et fermentation basse soigneuse sont encore plus critiques à forte densité. La levure doit rester propre et éviter alcools supérieurs brûlants ou sous-atténuation.",
      maturation: "Lagering long fréquent, particulièrement utile pour intégrer alcool et malt. Les versions les plus fortes gagnent à être conditionnées avec patience.",
      profilRecherche: "Puissance de malt, profondeur de pain et chaleur d’alcool fondue, sans sensation sirupeuse."
    },
    sources: [ba2026("German Bock styles"), bjcp2021("Bock family", "9/strong-european-beer/"), HISTORY.einbecker, TECH.munichMalt, TECH.diamond]
  },

  "international-light-lager": {
    histoireEtOrigines: `L’International Light Lager n’est pas née dans une ville précise : c’est une conséquence de la mondialisation du modèle lager pâle. Au XXe siècle, les grandes brasseries perfectionnent la filtration, le contrôle microbiologique, la réfrigération, la carbonatation et la logistique froide. Elles peuvent ainsi produire des bières très pâles, stables, faiblement amères et extrêmement régulières sur des marchés très différents.

La catégorie « light » ajoute une contrainte de corps et souvent de calories. Selon les pays, le résultat peut venir d’une densité initiale plus basse, d’une fermentation plus poussée, d’un emploi d’adjoints très fermentescibles ou d’une combinaison de procédés. Le riz et le maïs ne sont pas obligatoires, mais ils sont courants dans plusieurs traditions parce qu’ils permettent d’alléger le goût de malt et la texture tout en fournissant des sucres fermentescibles.

La difficulté technique est inversement proportionnelle à l’intensité sensorielle : une bière très légère ne dispose d’aucun malt torréfié, houblon massif ou ester expressif pour masquer un défaut. Oxydation, diacétyle, acétaldéhyde, soufre mal géré ou eau déséquilibrée deviennent immédiatement perceptibles. Une bonne International Light Lager peut donc sembler simple tout en exigeant une maîtrise industrielle ou artisanale très fine.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: [
        "Malt lager ou Pilsner pâle, souvent complété par riz, maïs ou autre source de sucres très fermentescibles pour alléger le corps."
      ],
      houblons: ["Houblonnage très discret, surtout destiné à empêcher la bière de devenir sucrée."],
      levuresEtMicroorganismes: ["Souche lager neutre, bonne atténuation et faible production d’esters."],
      ingredientsComplementaires: [],
      profilEau: "Eau plutôt douce et propre, sans minéralité agressive ; une faible alcalinité facilite une bière très pâle.",
      empatage: "Empâtage orienté vers une forte fermentescibilité. Selon les céréales utilisées, une cuisson ou une préparation spécifique des adjoints peut être nécessaire.",
      ebullitionEtHoublonnage: "Amertume basse, très peu d’arôme de houblon. La stabilité et la propreté du moût priment sur l’expression aromatique.",
      fermentation: "Fermentation basse très propre, avec attention particulière au diacétyle et à l’acétaldéhyde car le profil ne pardonne aucun défaut.",
      maturation: "Garde froide, clarification et carbonatation relativement élevée pour donner fraîcheur et netteté.",
      profilRecherche: "Très légère, très nette et désaltérante, sans faux goût malgré une intensité aromatique volontairement faible."
    },
    sources: [ba2026("International Light Lager"), TECH.w3470, TECH.pilsnerMalt]
  },

  "german-leichtbier": {
    histoireEtOrigines: `Leichtbier signifie littéralement « bière légère ». Dans le paysage allemand, l’idée n’est pas de copier exactement l’American Light Lager mais de réduire l’alcool et le corps tout en conservant une identité de bière allemande : malt pâle perceptible, houblon noble lisible et fermentation propre. Les guides BJCP et Brewers Association décrivent ainsi une bière très légère mais davantage houblonnée et structurée que les grandes light lagers internationales.

Le style moderne s’inscrit dans une longue culture européenne des bières de faible densité destinées à la consommation quotidienne, mais la catégorie actuelle est avant tout une définition contemporaine. Elle peut être vue comme l’exercice de précision ultime de la lager allemande : produire un verre réellement léger sans donner l’impression d’un moût dilué. Le faible alcool impose une construction attentive de la mousse, de la carbonatation et de l’amertume, car le manque de matière amplifie toute sensation aqueuse ou dure.

Contrairement à une Pils entière, la Leichtbier ne cherche pas une longue profondeur maltée. Elle conserve surtout les repères : céréale claire, légère note florale ou herbacée, amertume moyenne et finale sèche.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner allemand comme base ; éventuellement une petite part de malt plus riche pour soutenir la perception du corps sans augmenter excessivement la densité."],
      houblons: ["Houblons nobles allemands ou apparentés, à un niveau suffisamment présent pour donner une vraie structure."],
      levuresEtMicroorganismes: ["Souche lager neutre et bien atténuante."],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité, minéralité modérée. Un peu de sulfate peut aider la finale sèche mais doit rester assez doux pour éviter une amertume râpeuse.",
      empatage: "Empâtage très fermentescible, tout en préservant assez de protéines et de dextrines pour la mousse et la sensation en bouche.",
      ebullitionEtHoublonnage: "Amertume plus présente que dans une light lager internationale ; arôme floral, herbacé ou épicé léger à moyen.",
      fermentation: "Fermentation basse propre ; toute trace importante d’ester ou de diacétyle devient disproportionnée dans ce corps léger.",
      maturation: "Garde froide suffisante pour une bière claire et nette, avec carbonatation vive.",
      profilRecherche: "Une vraie lager allemande en miniature : légère en alcool, pas légère en précision."
    },
    sources: [ba2026("German-Style Leichtbier"), bjcp2021("German Leichtbier", "5/pale-bitter-european-beer/"), TECH.pilsnerMalt, TECH.diamond]
  },

  "american-light-lager": {
    histoireEtOrigines: `L’American Light Lager est indissociable de l’histoire commerciale de la bière américaine de l’après-guerre, mais sa naissance ne se résume pas à un seul produit. Des bières dites « diet » ou allégées existaient déjà avant le succès national de Miller Lite. Ce que Miller transforme au milieu des années 1970, c’est la catégorie elle-même : une bière moins calorique cesse d’être un produit médicalisé ou marginal pour devenir un phénomène culturel de masse.

Molson Coors retrace le lancement de Lite sur plusieurs marchés pilotes à partir de 1973 puis son déploiement national en 1975. Le Smithsonian conserve un exemplaire de la canette et replace cette réussite dans une Amérique d’après-guerre de plus en plus attentive aux calories. Le design et la communication cherchent paradoxalement à éviter l’image d’un produit « de régime », d’où l’insistance sur le goût, le sport et une identité masculine très marquée dans les campagnes de l’époque.

D’un point de vue brassicole, le style pousse très loin la logique de la lager américaine : couleur très pâle, corps minimal, forte carbonatation, faible amertume et service très froid. Le résultat a longtemps été moqué par la scène craft, mais il représente un défi technique réel. Une bière aussi neutre et légère expose immédiatement le moindre défaut et exige une grande régularité de fermentation, de filtration, d’oxygène dissous et de conditionnement.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: [
        "Malt d’orge pâle avec une proportion fréquente de riz ou maïs ; le but est de fournir des sucres fermentescibles avec peu de corps résiduel.",
        "Les formulations modernes peuvent être tout malt ou utiliser d’autres stratégies enzymatiques ; l’adjoint n’est donc pas obligatoire."
      ],
      houblons: ["Très faible charge de houblon, généralement neutre, floral ou légèrement épicé."],
      levuresEtMicroorganismes: ["Souche lager extrêmement propre, adaptée à une forte atténuation."],
      ingredientsComplementaires: [],
      profilEau: "Très douce et neutre, avec peu d’alcalinité et aucun caractère minéral agressif.",
      empatage: "Empâtage favorisant la fermentescibilité maximale ; les céréales adjointes peuvent nécessiter gélatinisation ou traitement adapté selon leur forme.",
      ebullitionEtHoublonnage: "Houblonnage minimal, surtout pour l’équilibre et la stabilité ; l’aromatique doit rester presque imperceptible.",
      fermentation: "Fermentation basse propre et complète, avec repos de diacétyle si nécessaire et prévention stricte de l’acétaldéhyde.",
      maturation: "Clarification poussée, garde froide et forte carbonatation ; conditionnement avec très faible oxygène dissous.",
      profilRecherche: "Une bière très pâle et presque neutre, mais techniquement irréprochable, sèche, vive et rafraîchissante."
    },
    sources: [ba2026("American-Style Light Lager"), bjcp2021("American Light Lager", "1/1A/american-light-lager/"), HISTORY.americanLight, HISTORY.millerLite]
  },

  "contemporary-american-light-lager": {
    histoireEtOrigines: `La Contemporary American Light Lager est une catégorie récente qui reconnaît que la notion de « light lager » américaine ne se limite plus au modèle ultra-neutre des grandes marques historiques. Les Brewers Association Guidelines distinguent désormais des versions contemporaines où la bière reste faible en calories et en corps mais peut laisser davantage apparaître le malt ou le houblon.

Cette évolution accompagne deux mouvements : d’une part la recherche de bières plus légères en alcool ou en calories, d’autre part le retour des brasseries artisanales vers les lagers techniquement exigeantes. Les brasseurs peuvent donc conserver la buvabilité et la forte atténuation d’une light lager tout en employant des malts de meilleure expression, des houblons plus frais ou des procédés moins orientés vers la neutralisation totale du goût.

La catégorie ne doit pas devenir une Session IPA fermentée basse : le cœur reste une lager légère, nette, peu amère et très accessible. Le caractère supplémentaire est une nuance, pas un changement de centre de gravité.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner ou lager très pâle ; adjoints possibles mais non obligatoires, avec davantage de latitude pour préserver un léger goût de céréale."],
      houblons: ["Houblonnage faible à modéré, plus perceptible que dans l’American Light Lager traditionnelle mais sans domination aromatique."],
      levuresEtMicroorganismes: ["Souche lager neutre et atténuante."],
      ingredientsComplementaires: [],
      profilEau: "Eau douce à modérément minérale, pensée pour une finale nette.",
      empatage: "Forte fermentescibilité, mais la texture peut être légèrement plus présente que dans une light industrielle classique.",
      ebullitionEtHoublonnage: "Amertume discrète ; un ajout tardif léger peut donner une signature florale, herbacée ou moderne.",
      fermentation: "Fermentation propre et très maîtrisée.",
      maturation: "Garde froide relativement courte à moyenne, clarification et carbonatation vive.",
      profilRecherche: "La facilité d’une light lager avec un peu plus de matière et de personnalité, sans perdre la sécheresse."
    },
    sources: [ba2026("Contemporary American-Style Light Lager"), TECH.w3470, HISTORY.millerLite]
  },

  "mexican-light-lager": {
    histoireEtOrigines: `La Mexican Light Lager appartient à une industrie brassicole mexicaine fortement structurée depuis la fin du XIXe siècle. HEINEKEN México fait remonter la fondation de la Cervecería Cuauhtémoc à Monterrey à 1890 ; le développement des grandes brasseries, de la réfrigération et des réseaux ferroviaires puis routiers installe durablement la lager comme langage dominant du marché national.

La catégorie « light » apparaît plus tard. HEINEKEN México présente Tecate Light, lancée en 1992, comme la première bière basse en calories du Mexique. Cette chronologie rappelle que la Mexican Light Lager n’est pas une survivance ancienne mais une adaptation relativement récente de la lager mexicaine aux tendances de consommation allégée déjà puissantes en Amérique du Nord.

Sensoriellement, la catégorie conserve le profil solaire et très désaltérant des lagers mexicaines pâles : céréale légère, faible amertume, forte carbonatation et service frais. Le maïs ou le riz peuvent participer à l’allègement du corps, mais aucune céréale particulière ne définit à elle seule le style. Les meilleures versions évitent l’impression d’eau gazeuse : une pointe de malt, une fermentation propre et une finale sèche suffisent à maintenir une identité de bière.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt lager pâle, souvent complété de maïs ou de riz selon la brasserie et l’objectif de corps."],
      houblons: ["Houblons à faible intensité, nobles ou neutres, utilisés surtout pour l’équilibre."],
      levuresEtMicroorganismes: ["Souche lager très neutre."],
      ingredientsComplementaires: [],
      profilEau: "Douce à modérément minérale, sans amertume minérale dure.",
      empatage: "Très fermentescible pour limiter corps et calories ; gestion adaptée des céréales adjointes.",
      ebullitionEtHoublonnage: "Amertume basse, arôme faible.",
      fermentation: "Fermentation basse propre, visant un profil neutre et sec.",
      maturation: "Garde froide, clarification forte et carbonatation vive.",
      profilRecherche: "Lager mexicaine très légère, sèche, nette et fraîche, avec juste assez de céréale pour ne pas être vide."
    },
    sources: [ba2026("Mexican-Style Light Lager"), HISTORY.mexicoHeineken, TECH.w3470]
  },

  "international-pale-lager": {
    histoireEtOrigines: `L’International Pale Lager est probablement l’un des styles les plus répandus et les moins attachés à une origine unique. Elle descend indirectement de la révolution Pilsner du XIXe siècle, mais son identité se construit surtout avec l’industrialisation mondiale du XXe : grandes cuves cylindro-coniques, filtration, pasteurisation ou stabilisation, réfrigération fiable, distribution longue distance et standardisation des matières premières.

Chaque pays a adapté le modèle à ses ressources et à son marché. Le maïs et le riz peuvent alléger le corps, mais certains exemples sont tout malt. Les houblons peuvent venir d’Europe, d’Amérique ou de productions locales, généralement avec une intensité faible. Ce qui unit la catégorie est moins une recette qu’une fonction : proposer une lager pâle, claire, fortement atténuée, modérément carbonatée à fortement carbonatée, facile à boire et suffisamment neutre pour être comprise dans des cultures de consommation très différentes.

Le BJCP la distingue de l’American Lager par une intensité et une origine plus internationales, et d’une Pilsner par un caractère de houblon généralement beaucoup moins affirmé. C’est aussi une famille qui montre combien la notion de « style » peut être industrielle et culturelle : les bières qui s’y ressemblent ne partagent pas nécessairement une généalogie locale, mais convergent vers les mêmes objectifs de stabilité, fraîcheur et accessibilité.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt lager ou Pilsner ; maïs, riz ou sucres peuvent compléter la charge selon la tradition et le coût, sans être obligatoires."],
      houblons: ["Houblons doux, floraux, herbacés ou neutres à faible dose."],
      levuresEtMicroorganismes: ["Souche lager propre, généralement choisie pour sa régularité et sa bonne atténuation."],
      ingredientsComplementaires: [],
      profilEau: "Plutôt neutre, faible à moyenne minéralité ; l’eau est souvent traitée pour obtenir un profil stable entre sites de production.",
      empatage: "Empâtage favorisant une bière sèche et très fermentescible ; préparation spécifique des adjoints si nécessaire.",
      ebullitionEtHoublonnage: "Amertume faible à moyenne-faible et peu d’arôme tardif.",
      fermentation: "Fermentation basse propre et reproductible, souvent à grande échelle.",
      maturation: "Lagering, clarification et stabilisation avant conditionnement ; forte attention à la durée de conservation.",
      profilRecherche: "Une lager pâle équilibrée, propre et universellement accessible, avec plus de bière que de spectacle."
    },
    sources: [bjcp2021("International Pale Lager", "2/international-lager/"), ba2026("International pale lager categories"), TECH.w3470]
  },

  "international-pilsner": {
    histoireEtOrigines: `L’International-Style Pilsener est une lecture mondiale du modèle de Plzeň. Elle se situe entre la Pilsner européenne de tradition et l’International Pale Lager : plus de houblon, une amertume plus visible et un caractère malté plus précis que la lager internationale standard, mais sans obligation de reproduire le profil tchèque ou allemand.

Cette catégorie reflète l’expansion extrêmement rapide de l’idée Pilsner après 1842. Dans de nombreux pays, « Pils », « Pilsener » ou « Pilsner » devient un nom commercial autant qu’une référence stylistique. L’eau locale, les malts disponibles, les variétés de houblon, les adjoints et les attentes du marché produisent des interprétations différentes. Certaines sont très proches d’une German Pils, d’autres plus douces et plus internationales.

Les Brewers Association Guidelines maintiennent justement une catégorie International-Style Pilsener distincte, ce qui évite de forcer toutes ces bières dans une définition tchèque ou allemande. Le prototype encyclopédique doit donc résister à la tentation de raconter une fausse « tradition internationale » unique : il s’agit d’une convergence autour d’une lager pâle et houblonnée, née de la diffusion mondiale du mot Pilsner.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner ou lager pâle ; adjoints possibles selon l’école nationale."],
      houblons: ["Houblon plus lisible que dans l’International Pale Lager, souvent d’inspiration noble mais pas nécessairement européen."],
      levuresEtMicroorganismes: ["Souche lager propre."],
      ingredientsComplementaires: [],
      profilEau: "De douce à modérément minérale ; suffisamment neutre pour laisser l’amertume nette.",
      empatage: "Bonne fermentescibilité, corps léger à moyen-léger.",
      ebullitionEtHoublonnage: "Amertume structurante et ajout aromatique modéré ; dry-hop généralement absent dans la définition classique.",
      fermentation: "Fermentation basse nette, faibles esters et diacétyle non perceptible.",
      maturation: "Garde froide jusqu’à limpidité et intégration de l’amertume.",
      profilRecherche: "Une Pilsner internationale propre, sèche et houblonnée, moins liée à un terroir précis que ses cousines tchèque et allemande."
    },
    sources: [ba2026("International-Style Pilsener"), HISTORY.pilsnerUrquell, TECH.pilsnerMalt]
  },

  "german-pilsner": {
    histoireEtOrigines: `L’Allemagne adopte très tôt l’idée de la lager pâle venue de Bohême, mais la transforme selon ses matières premières, ses eaux et ses traditions régionales. Au lieu de copier exactement la rondeur de Plzeň, les brasseurs allemands développent progressivement une Pils plus sèche, plus claire et souvent plus tranchante. Le style finit par devenir l’une des grandes références nationales, particulièrement influente dans le nord et le centre du pays.

Le BJCP décrit la German Pils comme une lager pâle très atténuée où l’amertume et le houblon noble sont nettement présents. La dureté perçue peut varier : les versions du nord ont historiquement la réputation d’être plus sèches et plus amères, tandis que les exemples du sud peuvent paraître un peu plus doux. Il ne faut toutefois pas transformer cette tendance régionale en règle absolue ; les brasseries modernes ajustent leur eau et leurs recettes bien au-delà des contraintes géologiques historiques.

Un point essentiel distingue l’école allemande classique des nouvelles Pilsners aromatiques : le houblonnage tardif peut être prononcé, mais le dry-hopping n’est normalement pas le moteur du style. L’arôme doit rester noble, floral, herbacé ou épicé, avec une amertume ferme mais propre. La fermentation ne fournit pas le fruit : elle sert de cadre neutre à la tension entre malt Pilsner et houblon.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt Pilsner allemand dominant, parfois avec une très faible part de malt plus riche pour soutenir la céréale."],
      houblons: ["Hallertau, Tettnang, Spalt ou variétés nobles/apparentées, avec une présence aromatique modérée à prononcée."],
      levuresEtMicroorganismes: ["Souche lager neutre, haute atténuation."],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité. Une minéralité modérée et davantage de sulfate que dans une Czech Pils peuvent accentuer la sécheresse, mais une eau excessivement dure rend l’amertume agressive.",
      empatage: "Infusion ou paliers visant un moût très fermentescible. Décoction possible mais non nécessaire avec les malts modernes.",
      ebullitionEtHoublonnage: "Amertume ferme dès le début de l’ébullition, puis houblon tardif noble. La définition classique ne repose pas sur le dry-hop.",
      fermentation: "Fermentation basse propre, très peu d’esters ; diacétyle absent.",
      maturation: "Lagering suffisant pour une limpidité brillante et une finale précise.",
      profilRecherche: "Pils allemande pâle, sèche et nette, où l’amertume noble coupe sans devenir rêche."
    },
    sources: [ba2026("German-Style Pilsener"), bjcp2021("German Pils", "5/pale-bitter-european-beer/"), TECH.pilsnerMalt, TECH.diamond]
  }
};
