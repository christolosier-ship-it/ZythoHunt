import { ba2026, bjcp2021, HISTORY, TECH } from "./lagers-sources.js";

export const lagersEnrichmentPart4 = {
  "european-dark-lager": {
    histoireEtOrigines: `European Dark Lager est une catégorie large conçue pour accueillir des lagers sombres européennes qui ne correspondent pas exactement aux profils plus étroits de Munich Dunkel, Schwarzbier ou Czech Dark Lager. Elle rappelle une réalité historique souvent masquée par le triomphe des lagers blondes : pendant une grande partie de l’histoire brassicole d’Europe centrale, les bières étaient naturellement plus foncées parce que les techniques de maltage séchaient et touraillaient les grains de façon moins douce qu’aujourd’hui.

L’apparition des malts pâles du XIXe siècle et le succès de la Pilsner ne font pas disparaître immédiatement ces traditions brunes. Des brasseries allemandes, autrichiennes, tchèques et voisines continuent à produire des lagers où le malt sombre, le pain, le toast et parfois le caramel léger dominent. La classification moderne sépare certaines familles emblématiques, mais de nombreux exemples locaux restent entre les cases.

La catégorie doit donc être utilisée avec prudence dans une encyclopédie : elle ne constitue pas une tradition paneuropéenne homogène. Elle fonctionne comme un territoire de regroupement. Une European Dark Lager bien construite garde la netteté de fermentation basse, un malt brun lisible et une torréfaction contenue. Si son identité historique ou régionale est mieux connue, il est préférable de la rattacher à un style plus précis plutôt que d’effacer cette provenance sous une étiquette générique.`,
    recette: {
      profilUnique: false,
      explicationProfil: "Catégorie transversale de lagers sombres européennes : la recette varie selon la région et le style de référence. Les principes ci-dessous décrivent un terrain commun, pas une formule canonique.",
      maltsEtCereales: ["Pilsner, Vienna ou Munich comme base ; malts caramel, chocolat doux ou torréfiés désamérisés à faible dose selon la couleur."],
      houblons: ["Houblons européens sobres, généralement nobles ou apparentés, avec amertume faible à moyenne."],
      levuresEtMicroorganismes: ["Souche lager propre et relativement neutre."],
      ingredientsComplementaires: [],
      profilEau: "Adaptée au niveau de malt sombre ; alcalinité modérée possible, mais sans dureté qui accentuerait l’astringence.",
      empatage: "Infusion, paliers ou décoction selon l’école ; rechercher pain et toast plutôt qu’une sucrosité massive.",
      ebullitionEtHoublonnage: "Houblonnage d’équilibre, faible parfum.",
      fermentation: "Fermentation basse propre, avec faible ester.",
      maturation: "Garde froide suffisante pour lisser le malt sombre et clarifier la bière.",
      profilRecherche: "Une lager sombre européenne nette et maltée, plus pain et cacao doux que brûlé, dont l’identité précise dépend de sa région."
    },
    sources: [ba2026("European-Style Dark Lager"), bjcp2021("Dark European Lager families", "8/dark-european-lager/"), TECH.munichMalt]
  },

  "czech-dark-lager": {
    histoireEtOrigines: `La Czech Dark Lager appartient à la vaste famille tchèque des tmavé — « sombres » — et parfois des černé, « noires ». Contrairement à une Schwarzbier allemande, le style tchèque n’est pas défini par une couleur noire sèche ni par une torréfaction nette. Le BJCP insiste sur sa largeur : les exemples peuvent aller du brun rouge profond au presque noir et équilibrer malt, houblon et douceur de façons assez différentes.

Cette diversité s’explique en partie par le système tchèque lui-même, qui classe traditionnellement les bières selon la couleur et la densité originale davantage que selon les catégories internationales. Les brasseries peuvent construire un tmavé avec une combinaison de Pilsner, Munich, Vienna, caramel et malt sombre. Certaines pratiques historiques ou locales utilisent aussi des assemblages de moûts ou de bières. La Czech Dark Lager n’est donc pas simplement une Munich Dunkel avec du Saaz : elle possède une culture de recette plus souple.

Sensoriellement, le malt peut évoquer pain noir, caramel, prune légère, cacao, café doux ou toast, mais l’astringence brûlée doit rester faible. Le houblon tchèque épicé peut demeurer perceptible et empêcher la bière de devenir dessert. Une faible note de diacétyle peut être tolérée dans certains exemples traditionnels, mais les meilleures versions modernes restent propres. Comme pour les lagers tchèques pâles, le service joue un rôle culturel important : mousse dense, tirage soigné et consommation fraîche renforcent la sensation de rondeur sans exiger une forte sucrosité résiduelle.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Pilsner et Munich/Vienna en base ; caramel et malts sombres doux selon la couleur, souvent avec une complexité plus large qu’une Schwarzbier."],
      houblons: ["Saaz/Žatec ou autres houblons tchèques, amertume modérée et parfum épicé/herbacé possible."],
      levuresEtMicroorganismes: ["Souche lager tchèque ou propre, laissant une certaine rondeur maltée."],
      ingredientsComplementaires: [],
      profilEau: "Plutôt douce et faible en sulfate afin de garder l’amertume ronde et le malt souple.",
      empatage: "Paliers ou décoction ; le développement de Maillard peut renforcer pain et croûte sans dépendre d’une forte dose de caramel.",
      ebullitionEtHoublonnage: "Houblonnage plus perceptible que dans certaines dark lagers internationales, mais toujours intégré au malt.",
      fermentation: "Fermentation basse ; faible diacétyle parfois admis par les guides, jamais obligatoire ni dominant.",
      maturation: "Lagering jusqu’à intégration du malt sombre et du houblon, avec une mousse abondante et stable.",
      profilRecherche: "Une lager tchèque sombre, ronde mais buvable, complexe en pain/cacao/caramel sec et encore vivante par son houblon."
    },
    sources: [bjcp2021("Czech Dark Lager", "3/czech-lager/"), ba2026("Czech-Style Dark Lager"), TECH.munichMalt]
  },

  "american-dark-lager": {
    histoireEtOrigines: `L’American Dark Lager est une catégorie moderne qui prolonge le langage des lagers américaines accessibles vers une robe plus sombre. Elle ne possède pas l’ancrage régional du Munich Dunkel ou de la Schwarzbier et ne doit pas être présentée comme une survivance directe d’une tradition précise. Elle apparaît plutôt dans un marché où les brasseries proposent plusieurs niveaux de couleur et d’intensité autour d’une même fermentation propre.

Dans sa forme la plus simple, une base de lager américaine est enrichie par des malts caramel, toastés ou sombres doux. Des céréales adjointes peuvent rester présentes pour préserver le corps léger. Les Brewers Association distinguent les dark lagers américaines de leurs équivalents européens par cette latitude et par une expression souvent plus neutre.

La scène craft peut produire des versions plus maltées ou plus houblonnées, mais le style garde une exigence : la couleur ne doit pas annoncer une stout. Café brûlé, fruit de levure et forte astringence sont étrangers au centre du profil. L’intérêt de la catégorie réside justement dans cette contradiction visuelle : une bière brune ou noire qui conserve la facilité, la carbonatation et la propreté d’une lager américaine.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Base lager/Pilsner ; Vienna, Munich, caramel ou malt sombre doux en complément ; maïs ou riz possibles pour conserver un corps léger."],
      houblons: ["Faible à modéré, américain ou noble, généralement non dominant."],
      levuresEtMicroorganismes: ["Souche lager neutre et propre."],
      ingredientsComplementaires: [],
      profilEau: "Neutre à modérément minérale, avec alcalinité ajustée aux malts sombres.",
      empatage: "Bonne fermentescibilité ; éviter l’accumulation de malts caramel qui rendrait la bière épaisse.",
      ebullitionEtHoublonnage: "Amertume d’équilibre, peu d’arôme tardif.",
      fermentation: "Fermentation basse très propre.",
      maturation: "Garde froide et clarification jusqu’à un profil lisse.",
      profilRecherche: "Une lager sombre américaine facile et propre : malt grillé léger, faible torréfaction, corps raisonnable et finale nette."
    },
    sources: [ba2026("American-Style Dark Lager"), TECH.w3470, TECH.munichMalt]
  },

  "mexican-dark-lager": {
    histoireEtOrigines: `La Mexican Dark Lager s’inscrit dans une culture brassicole où les lagers pâles n’ont jamais complètement effacé les interprétations plus sombres d’inspiration européenne. L’exemple commercial le plus connu à l’international est Modelo Negra, que la marque décrit elle-même comme une bière de style Munich Dunkel brassée au Mexique depuis les débuts du groupe dans les années 1920. La chronologie officielle de Grupo Modelo montre plus largement comment une grande industrie nationale se structure autour de plusieurs profils de lager.

Il serait néanmoins faux de transformer « Mexican Dark Lager » en synonyme de Munich Dunkel authentique. Les recettes mexicaines peuvent utiliser des céréales non maltées, des malts caramel et des procédés industriels conçus pour la stabilité et la buvabilité. Leur expression est souvent plus douce, plus lisse et moins intensément maltée que les Dunkel bavaroises. L’influence européenne fournit une grammaire ; le Mexique en développe sa propre version.

Cette famille complète utilement les Mexican Pale et Amber Lagers. La couleur sombre apporte caramel, pain brun, noix ou chocolat doux, mais la fermentation reste neutre et la bière se boit généralement fraîche. Une bonne version ne doit pas devenir collante : l’alcool modéré, la carbonatation et une finale suffisamment sèche préservent la fonction désaltérante qui reste centrale dans beaucoup de lagers mexicaines.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Base lager avec Munich/Vienna, caramel et malt sombre doux ; céréales non maltées possibles selon la brasserie."],
      houblons: ["Houblons à faible intensité, nobles ou neutres, principalement pour équilibrer la douceur maltée."],
      levuresEtMicroorganismes: ["Souche lager neutre."],
      ingredientsComplementaires: [],
      profilEau: "Douce à modérément minérale, sans amertume dure.",
      empatage: "Empâtage assurant une bonne fermentescibilité malgré la charge de malts plus riches ; traitement adapté des adjoints si présents.",
      ebullitionEtHoublonnage: "Faible à moyenne-faible amertume, très peu d’arôme de houblon.",
      fermentation: "Fermentation basse propre, sans ester dominant.",
      maturation: "Garde froide et clarification avant un conditionnement souvent assez carbonaté.",
      profilRecherche: "Une lager mexicaine sombre, lisse et maltée, avec caramel/pain/chocolat doux mais une finale toujours facile."
    },
    sources: [ba2026("Mexican-Style Dark Lager"), HISTORY.modeloNegra, HISTORY.mexicoModelo, TECH.munichMalt]
  },

  "traditional-bock-dunkles-bock": {
    histoireEtOrigines: `Le Traditional Bock, ou Dunkles Bock, est la forme sombre classique de la famille issue d’Einbeck puis transformée par la culture brassicole bavaroise. La documentation d’Einbecker Brauerei rattache la réputation de la ville à un commerce de bière déjà attesté au XIVe siècle. Ces bières fortes voyagent bien et deviennent connues loin de leur lieu de production. Lorsque le modèle gagne Munich, il est progressivement absorbé par les techniques bavaroises de fermentation basse et les malts riches de la région.

La forme moderne est une lager forte, brune à cuivrée, où le malt domine nettement. Les descriptions contemporaines de concours mettent l’accent sur pain, croûte, toast et parfois fruits secs légers plutôt que sur caramel sucré. Cette précision est importante : l’intensité du Bock vient d’une forte densité de moût et de malts de base riches, pas d’un empilement de crystal malt.

Le houblon joue un rôle structurel mais discret. La fermentation doit rester particulièrement propre malgré la densité ; une mauvaise gestion produit rapidement alcools supérieurs, solvants ou sucres résiduels qui alourdissent la bière. Historiquement liée aux saisons froides et aux bières fortes de garde, la Bock sombre est donc un exercice de patience autant que de puissance. Son meilleur paradoxe est une sensation de richesse considérable suivie d’une finale assez nette pour rappeler qu’il s’agit toujours d’une lager.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Munich dominant, Vienna fréquent, Pilsner possible ; caramel faible ou absent selon l’école."],
      houblons: ["Houblons allemands nobles ou traditionnels, amertume juste suffisante pour équilibrer le moût riche."],
      levuresEtMicroorganismes: ["Souche lager saine, fortement ensemencée et suffisamment tolérante à l’alcool."],
      ingredientsComplementaires: [],
      profilEau: "Modérément minérale ; chlorure souvent favorable à la rondeur, alcalinité adaptée aux malts sombres.",
      empatage: "Paliers ou décoction traditionnelle pour développer pain et croûte ; viser une fermentescibilité suffisante malgré la densité élevée.",
      ebullitionEtHoublonnage: "Ébullition vigoureuse et éventuellement prolongée pour concentrer le moût ; houblonnage surtout en début de cuisson.",
      fermentation: "Ensemencement abondant, oxygénation adaptée et température basse contrôlée afin d’éviter alcool chaud et sous-atténuation.",
      maturation: "Lagering long, souvent plusieurs semaines à quelques mois selon la force et le procédé.",
      profilRecherche: "Un Bock sombre puissant en malt de pain et croûte, chaud mais jamais brûlant, riche sans devenir sirupeux."
    },
    sources: [bjcp2021("Dunkles Bock", "9/strong-european-beer/"), ba2026("Traditional German-Style Bock"), HISTORY.einbecker, TECH.munichMalt, TECH.diamond]
  },

  "helles-bock-maibock": {
    histoireEtOrigines: `Le Helles Bock est la branche pâle de la famille Bock. Son autre nom fréquent, Maibock, l’associe culturellement au printemps et au mois de mai, mais il ne faut pas en faire une obligation historique absolue : toutes les Helles Bock ne sont pas des bières de mai et toutes les bières appelées Maibock ne suivent pas exactement la même recette. La catégorie moderne décrit surtout une lager allemande forte, plus claire et souvent un peu plus houblonnée que le Dunkles Bock.

Le style devient possible grâce aux malts pâles et aux techniques qui, au XIXe siècle, transforment l’ensemble du paysage des lagers. En remplaçant une grande partie du Munich sombre par Pilsner et Vienna, le brasseur conserve la densité et la puissance d’un Bock tout en obtenant une robe dorée à ambrée claire. Le malt évoque pain blanc, grain, miel léger ou toast doux plutôt que fruits secs profonds.

La couleur plus claire rend aussi le houblon plus visible. Les guides de styles acceptent une amertume plus ferme que dans le Traditional Bock et un arôme noble modéré. Malgré cette tension accrue, la bière ne devient pas une strong Pils : le malt et la force alcoolique restent centraux. Une bonne Maibock donne une impression de puissance lumineuse, là où le Dunkles Bock paraît plus sombre et enveloppant.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Pilsner dominant, Vienna et Munich clair en soutien pour le pain et la profondeur."],
      houblons: ["Houblons allemands nobles ou traditionnels, plus présents que dans un Dunkles Bock mais sans domination aromatique."],
      levuresEtMicroorganismes: ["Souche lager propre et tolérante à une densité élevée."],
      ingredientsComplementaires: [],
      profilEau: "Faible à moyenne alcalinité, minéralité modérée ; un peu de sulfate peut soutenir l’amertume plus visible.",
      empatage: "Paliers ou décoction possible ; bonne fermentescibilité indispensable pour éviter une forte bière sucrée.",
      ebullitionEtHoublonnage: "Amertume moyenne, ajout tardif noble possible ; gestion attentive du DMS avec une forte proportion de Pilsner.",
      fermentation: "Fermentation basse fortement ensemencée, alcool supérieur contenu.",
      maturation: "Lagering prolongé pour intégrer force, malt clair et houblon.",
      profilRecherche: "Un Bock clair et puissant : pain pâle, miel discret, houblon noble plus vif et alcool totalement fondu."
    },
    sources: [bjcp2021("Helles Bock", "9/strong-european-beer/"), ba2026("German-Style Heller Bock/Maibock"), TECH.pilsnerMalt, TECH.diamond]
  },

  doppelbock: {
    histoireEtOrigines: `Le Doppelbock est l’une des grandes bières fortes de Bavière et son histoire est intimement liée à la tradition monastique de Munich. La brasserie Paulaner rattache son Salvator à l’héritage des frères de l’ordre des Minimes — les « Paulaner » — qui brassent une bière nourrissante et puissante dans leur monastère. La formule populaire de « pain liquide » traduit cette densité mais ne doit pas être transformée en récit simpliste selon lequel la bière aurait uniquement servi à contourner le jeûne ; les pratiques religieuses, alimentaires et brassicoles sont plus complexes que cette légende souvent répétée.

Salvator devient néanmoins un archétype commercial majeur. Son influence est telle que de nombreux Doppelbocks adoptent ensuite des noms terminés en « -ator », hommage plus ou moins explicite à cette référence. La catégorie moderne conserve l’idée d’une lager extrêmement maltée, plus forte qu’un Bock standard, pouvant aller du doré foncé au brun très profond.

La richesse n’implique pas une sucrosité molle. Les meilleurs Doppelbocks développent pain, croûte, caramel naturel de Maillard, fruits secs et parfois chocolat doux, mais finissent suffisamment propres pour éviter le sirop. Les versions pâles existent également et montrent davantage d’alcool et de malt clair. La maturation joue un rôle essentiel : un jeune Doppelbock peut paraître chaud et anguleux ; après une garde correcte, alcool et malt se fondent en une texture beaucoup plus lisse.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Munich et Vienna dominants dans les versions sombres ; Pilsner plus important dans les versions pâles. Les malts caramel restent secondaires."],
      houblons: ["Houblons allemands sobres, amertume faible à modérée, très peu d’arôme."],
      levuresEtMicroorganismes: ["Souche lager très saine, haut taux d’ensemencement et tolérance alcoolique suffisante."],
      ingredientsComplementaires: [],
      profilEau: "Modérément minérale, adaptée à une forte charge de malt ; équilibre favorisant le malt sans pH trop élevé.",
      empatage: "Empâtage par paliers ou décoction ; rechercher une forte extraction mais aussi assez de fermentescibilité pour éviter la lourdeur.",
      ebullitionEtHoublonnage: "Ébullition vigoureuse voire prolongée pour concentration et profondeur ; houblonnage essentiellement d’équilibre.",
      fermentation: "Oxygénation et levure abondante indispensables. Fermentation fraîche puis repos de diacétyle ; éviter les alcools supérieurs et la fermentation incomplète.",
      maturation: "Lagering long et patience après conditionnement ; plusieurs semaines à mois peuvent être bénéfiques selon le degré et la méthode.",
      profilRecherche: "Une lager très forte centrée sur le malt, immense mais lisse, avec pain, fruits secs et alcool fondu plutôt que sucre résiduel."
    },
    sources: [bjcp2021("Doppelbock", "9/strong-european-beer/"), ba2026("German-Style Doppelbock"), HISTORY.salvator, TECH.munichMalt, TECH.diamond]
  },

  eisbock: {
    histoireEtOrigines: `L’Eisbock est une bière forte obtenue non pas seulement par un brassage plus dense, mais par concentration au froid. Une base de Doppelbock ou de Bock très fort est partiellement congelée ; l’eau cristallise avant la majorité de l’alcool et une partie de cette glace est retirée. La bière restante concentre alcool, sucres résiduels, composés de malt et arômes. Le procédé est une forme de freeze concentration et non une fermentation particulière.

Le style est traditionnellement associé à Kulmbach, en Franconie. Une légende très répandue raconte qu’un apprenti aurait oublié des fûts dehors pendant l’hiver et découvert au matin une bière extraordinairement forte autour d’un bloc de glace. Cette histoire est séduisante mais difficile à documenter solidement ; une encyclopédie doit la présenter comme folklore brassicole et non comme acte de naissance certifié.

La concentration amplifie tout : les qualités comme les défauts. Un Doppelbock riche devient plus intense en fruits noirs, pain, caramel profond et alcool ; une fermentation chaude ou oxydée devient elle aussi plus évidente. L’Eisbock ne doit donc pas être brûlant ni solvanté. Sa densité peut être considérable, mais la garde et l’intégration doivent produire une sensation presque liquoreuse plutôt qu’agressive.

Le procédé soulève enfin des questions réglementaires variables selon les pays, car la concentration par congélation peut être assimilée à une forme de concentration alcoolique. Cela ne change pas sa définition stylistique, mais rappelle qu’une recette domestique ou commerciale doit respecter la législation locale.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Construire d’abord un Bock/Doppelbock sain et riche : Munich/Vienna, Pilsner selon la couleur, peu de caramel ajouté."],
      houblons: ["Houblons allemands discrets ; l’amertume sera elle aussi concentrée, donc inutile de surcharger la bière de base."],
      levuresEtMicroorganismes: ["Souche lager tolérante à l’alcool, fermentation complète avant toute concentration."],
      ingredientsComplementaires: [],
      profilEau: "Modérément minérale et équilibrée ; les sels étant eux aussi concentrés, une eau excessivement minérale peut devenir problématique.",
      empatage: "Comme pour un Doppelbock, forte densité mais fermentescibilité suffisante.",
      ebullitionEtHoublonnage: "Ébullition d’un moût fort, houblonnage retenu.",
      fermentation: "Produire d’abord une bière totalement saine et mature. La congélation ne corrige aucun défaut de fermentation : elle les amplifie.",
      maturation: "Après fermentation et première garde, refroidir sous le point de congélation de l’eau puis retirer une fraction de glace selon le niveau de concentration recherché. Une garde supplémentaire est essentielle pour intégrer l’alcool.",
      profilRecherche: "La profondeur d’un Doppelbock concentrée sans brutalité : fruits noirs, malt intense, texture riche et alcool puissant mais poli."
    },
    sources: [bjcp2021("Eisbock", "9/strong-european-beer/"), ba2026("German-Style Eisbock"), TECH.diamond]
  },

  "american-lager": {
    histoireEtOrigines: `L’American Lager est le produit d’une rencontre entre les traditions de fermentation basse apportées par les immigrants européens et les matières premières, technologies et marchés des États-Unis. Au XIXe siècle, de nombreux brasseurs germano-américains installent la lager dans les villes en croissance. L’orge américaine, souvent à six rangs et riche en protéines, se prête à l’emploi de maïs ou de riz comme adjoints : ces céréales apportent des sucres fermentescibles, éclaircissent le corps et permettent de produire une bière très pâle et stable.

La réfrigération, le chemin de fer, les grandes cuves et la consolidation industrielle transforment ensuite la lager en produit national. La Prohibition bouleverse profondément l’industrie ; après son abrogation, les grandes brasseries gagnent encore en taille et en homogénéité. Au fil du XXe siècle, le profil dominant devient plus léger, plus pâle et moins amer, jusqu’à former l’image mondiale de la « bière américaine ».

Le BJCP distingue l’American Lager de l’American Light Lager : elle conserve un peu plus de corps, d’alcool et de goût de céréale. L’adjoint n’est pas un défaut en soi. Maïs et riz font partie de l’histoire du style et peuvent être utilisés avec une grande maîtrise. Ce qui définit la qualité est la propreté : fermentation neutre, faible amertume, carbonatation vive, aucune oxydation et une finale suffisamment sèche pour encourager la répétition.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt lager/Pilsner avec maïs ou riz fréquents ; recette tout malt possible mais moins typique du modèle historique industriel."],
      houblons: ["Houblons à faible intensité, américains ou nobles, amertume basse et arôme presque absent."],
      levuresEtMicroorganismes: ["Souche lager très neutre et régulière."],
      ingredientsComplementaires: [],
      profilEau: "Douce et neutre, faible alcalinité, peu de minéralité gustative.",
      empatage: "Très fermentescible ; cereal mash ou matières prégélatinisées selon la forme des adjoints.",
      ebullitionEtHoublonnage: "Houblonnage faible, priorité à la stabilité du moût et au contrôle du DMS.",
      fermentation: "Fermentation basse propre, diacétyle et acétaldéhyde non perceptibles.",
      maturation: "Garde froide, clarification poussée et carbonatation vive ; conditionnement sous très faible oxygène.",
      profilRecherche: "Une lager américaine pâle et simple mais pas aqueuse : céréale discrète, grande propreté et fraîcheur immédiate."
    },
    sources: [bjcp2021("American Lager", "1/standard-american-beer/"), ba2026("American-Style Lager"), TECH.w3470]
  },

  "contemporary-american-lager": {
    histoireEtOrigines: `La Contemporary American Lager représente une relecture récente de la grande lager américaine. Elle naît dans un paysage où les brasseries artisanales, après avoir longtemps construit leur identité en opposition aux lagers industrielles, redécouvrent la difficulté et l’élégance des fermentations basses. Plutôt que de reproduire exactement une American Lager historique ou une Pils européenne, elles conservent la buvabilité américaine tout en réintroduisant davantage de malt, de houblon ou de singularité locale.

Les Brewers Association reconnaissent cette évolution avec une catégorie contemporaine distincte. Elle autorise une expression plus présente des ingrédients sans perdre le cœur du style : couleur pâle, corps léger à moyen-léger, fermentation nette, finale sèche et grande facilité de consommation. Les adjoints ne sont ni obligatoires ni interdits ; ils peuvent même devenir des outils créatifs lorsqu’ils sont choisis pour leur goût plutôt que seulement pour réduire le coût.

Cette catégorie est importante culturellement car elle signale un changement de regard. La lager « simple » n’est plus forcément l’ennemie de la bière artisanale. Elle devient un terrain où la qualité de l’eau, de la fermentation, du maltage, du houblon frais et du conditionnement est exposée sans filtre. Les meilleures Contemporary American Lagers restent modestes en intensité mais extrêmement précises.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Pilsner ou pale lager ; maïs, riz ou autres céréales possibles, parfois choisis pour un caractère aromatique spécifique."],
      houblons: ["Américains ou internationaux, faible à modéré, avec davantage de liberté aromatique que l’American Lager classique."],
      levuresEtMicroorganismes: ["Souche lager propre ; certaines brasseries utilisent des souches tolérant des fermentations légèrement plus chaudes tout en gardant un profil net."],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité, profil ajusté à l’équilibre malt/houblon choisi.",
      empatage: "Bonne fermentescibilité et corps contenu.",
      ebullitionEtHoublonnage: "Amertume modérée possible, ajout tardif léger selon l’interprétation.",
      fermentation: "Fermentation basse ou très propre, priorité absolue à l’absence de défauts.",
      maturation: "Garde froide assez longue pour la netteté mais compatible avec la fraîcheur éventuelle du houblon.",
      profilRecherche: "La buvabilité d’une lager américaine avec davantage de personnalité de matière première, sans devenir une Pils ou une IPA."
    },
    sources: [ba2026("Contemporary American-Style Lager"), TECH.diamond, TECH.pilsnerMalt]
  },

  "mexican-pale-lager": {
    histoireEtOrigines: `La Mexican Pale Lager s’inscrit dans plus d’un siècle d’industrialisation brassicole mexicaine. HEINEKEN México fait remonter la Cervecería Cuauhtémoc de Monterrey à 1890 ; Grupo Modelo fonde sa grande brasserie à Mexico dans les années 1920. Ces entreprises et leurs concurrentes développent une culture de lager adaptée à un marché national immense, puis à l’exportation vers les États-Unis et le reste du monde.

Les influences européennes sont réelles mais multiples. La marque Bohemia, créée en 1905 selon HEINEKEN México, revendique explicitement une inspiration Pilsner et l’usage de houblons européens. D’autres lagers mexicaines privilégient davantage la neutralité, les céréales adjointes et une amertume basse. La catégorie moderne Mexican Pale Lager des Brewers Association permet de regrouper ces bières pâles sans les forcer à devenir German Pils ou International Pale Lager.

Le service avec un quartier de citron vert est devenu un symbole international de certaines marques mexicaines, mais il ne fait pas partie de la recette du style et ne doit pas remplacer l’analyse de la bière. Une bonne Mexican Pale Lager est d’abord une lager : malt pâle, éventuels adjoints comme maïs ou riz, faible à moyenne amertume, fermentation propre et finale sèche. Le climat et la culture de consommation très fraîche renforcent la recherche de buvabilité, mais les exemples premium peuvent afficher un vrai parfum de houblon et une céréale plus noble.

Le style illustre enfin la diversité souvent sous-estimée du Mexique brassicole. Derrière l’image mondiale d’une lager très légère se trouve un pays qui produit depuis longtemps des Pilsners, Vienna Lagers, dark lagers et bières de spécialité. La Mexican Pale Lager est une branche de cette histoire, pas son résumé complet.`,
    recette: {
      profilUnique: true,
      maltsEtCereales: ["Malt lager ou Pilsner ; maïs ou riz fréquents mais non obligatoires, selon la brasserie et le niveau de corps recherché."],
      houblons: ["Houblons doux, parfois européens/nobles dans les exemples premium ; amertume généralement contenue."],
      levuresEtMicroorganismes: ["Souche lager neutre et très propre."],
      ingredientsComplementaires: ["Le citron vert relève du service ou du marketing de certaines marques, pas du cahier des charges de la bière."],
      profilEau: "Douce à modérément minérale, sans dureté agressive.",
      empatage: "Empâtage très fermentescible ; gestion du maïs/riz adaptée à leur forme lorsque présents.",
      ebullitionEtHoublonnage: "Amertume basse à moyenne ; certaines interprétations premium montrent un arôme floral/herbacé plus lisible.",
      fermentation: "Fermentation basse propre, faible ester, diacétyle absent.",
      maturation: "Garde froide, clarification et carbonatation vive pour une bière particulièrement rafraîchissante.",
      profilRecherche: "Une lager mexicaine pâle, sèche et fraîche, capable d’aller de la grande buvabilité neutre à une expression Pilsner plus noble."
    },
    sources: [ba2026("Mexican-Style Pale Lager"), HISTORY.mexicoHeineken, HISTORY.bohemiaMexico, HISTORY.mexicoModelo, TECH.w3470]
  }
};
