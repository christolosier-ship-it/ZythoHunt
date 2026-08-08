import { ba2026, bjcp2021, REFERENCES } from "./sources.mjs";

export const part1 = {
  "pale-ale": {
    histoireEtOrigines: `« Pale Ale » est d’abord un terme relatif : il désigne une ale plus claire que les bières brunes et noires qui dominaient longtemps la production britannique. À mesure que les techniques de touraillage permettent de sécher le malt avec davantage de contrôle et moins de fumée, les brasseurs obtiennent des malts plus pâles et plus réguliers. Aux XVIIe et XVIIIe siècles, ces malts restent coûteux et leurs bières ne constituent pas encore une famille homogène au sens moderne, mais ils ouvrent progressivement la voie aux pale ales de stock, aux bitters et aux futures India Pale Ales.

Au XIXe siècle, Burton upon Trent devient l’un des centres majeurs de la pale ale britannique. Son eau naturellement riche en sulfates favorise une perception sèche et tranchante du houblon, et le développement du chemin de fer facilite la diffusion nationale des bières de Burton. Dans le même temps, les mots « pale ale », « bitter » et « India pale ale » se chevauchent selon les brasseries, les marchés et le conditionnement. La taxonomie actuelle est donc plus nette que le vocabulaire historique : une Pale Ale victorienne ne se superpose pas automatiquement à une catégorie de concours moderne.

Au XXe siècle, les versions britanniques perdent souvent en densité et en alcool tandis que la culture du cask et du pub maintient les bitters. À partir des années 1970 et surtout 1980, les brasseurs américains reprennent le principe d’une ale claire et houblonnée mais remplacent une partie du vocabulaire aromatique anglais par Cascade puis par une multitude de houblons américains et du Nouveau Monde. La Pale Ale devient alors une famille mondiale : English Pale Ale, American Pale Ale, Australian Pale Ale, New Zealand Pale Ale, versions golden ou hazy n’ont pas une recette commune, mais partagent l’idée d’une ale relativement claire où le houblon est lisible sans nécessairement atteindre l’intensité d’une IPA moderne.`,
    recette: {
      profilUnique: false,
      explicationProfil: "Pale Ale désigne une famille historique et contemporaine. La recette dépend fortement de l’école britannique, américaine, australienne, néo-zélandaise ou moderne ; les principes ci-dessous décrivent un socle plutôt qu’un canon.",
      maltsEtCereales: [
        "Un malt pale ale constitue généralement la base : pale britannique plus biscuité, two-row américain plus neutre, ou malts locaux selon l’école.",
        "Les malts crystal/caramel peuvent apporter couleur, corps et notes de biscuit ou de caramel, mais leur proportion est faible dans les versions modernes les plus sèches et peut être nulle dans les golden ou hazy pale ales.",
        "Blé, avoine ou autres céréales peuvent être employés dans les interprétations modernes pour agir sur mousse, texture ou trouble, sans être constitutifs de la famille."
      ],
      houblons: [
        "Houblons britanniques floraux, terreux ou épicés dans les écoles historiques ; Cascade et autres variétés américaines dans l’American Pale Ale ; variétés tropicales, agrumées ou thiolées dans les écoles du Nouveau Monde.",
        "L’amertume doit rester suffisamment présente pour donner de l’élan à la bière, mais la frontière avec l’IPA dépend de l’intensité globale, de la force alcoolique et de l’équilibre plutôt que d’un seul chiffre d’IBU."
      ],
      levuresEtMicroorganismes: [
        "Saccharomyces cerevisiae de fermentation haute ; souche expressive et floculante dans de nombreuses versions britanniques, plus neutre dans de nombreuses versions américaines.",
        "Les variantes hazy peuvent rechercher une souche fruitée capable de compléter les arômes de houblon."
      ],
      ingredientsComplementaires: [],
      profilEau: "Très variable. Les profils britanniques peuvent être franchement sulfatés pour renforcer la sécheresse et l’amertume ; les pale ales modernes peuvent employer davantage de chlorures pour arrondir la bouche. Le pH et l’alcalinité doivent rester adaptés à une bière claire.",
      empatage: "Infusion simple très fréquente. Une température favorisant une atténuation moyenne à élevée permet de conserver la buvabilité ; les versions plus rondes peuvent viser davantage de dextrines.",
      ebullitionEtHoublonnage: "Amertume en chaudière puis ajouts tardifs selon le style. Le dry-hopping est historique dans certaines pale ales de stock et omniprésent dans de nombreuses interprétations craft, mais son intensité va de discrète à massive.",
      fermentation: "Fermentation haute propre à modérément fruitée. Le caractère de levure doit soutenir le style choisi sans produire de solvants ni de phénols non recherchés.",
      maturation: "Courte pour les pale ales modernes orientées fraîcheur ; historiquement, certaines pale ales fortes et de stock pouvaient être gardées bien plus longtemps. Les versions houblonnées sont aujourd’hui protégées de l’oxygène et servies fraîches.",
      profilRecherche: "Une ale claire à ambrée dont le malt fournit une charpente lisible et dont le houblon apporte fraîcheur, amertume et identité sans lourdeur."
    },
    sources: [ba2026("Pale Ale families"), bjcp2021("Pale American Ale", "18/"), REFERENCES.sierraPale, REFERENCES.camraIpa]
  },

  "bitter": {
    histoireEtOrigines: `La Bitter n’est pas née un jour précis derrière la porte d’une seule brasserie. Le mot s’enracine dans le langage des pubs britanniques du XIXe siècle, lorsque les consommateurs et débitants distinguent les pale ales plus houblonnées et plus sèches des mild ales, généralement plus jeunes et moins amères. « Bitter » devient ainsi un nom d’usage avant d’être une famille de styles codifiée. Les brasseries pouvaient employer « Pale Ale » sur leurs registres ou leurs bouteilles tandis que le même univers de bière était demandé comme « bitter » au comptoir.

La révolution industrielle, le chemin de fer, les malts pâles plus réguliers et l’influence de Burton favorisent la diffusion des ales claires et houblonnées. Mais la Bitter évolue surtout comme bière de pub : gravité modérée, fermentation haute, faible carbonatation en cask, service rapide et capacité à donner beaucoup de goût dans une pinte relativement légère. Les guerres, la fiscalité sur la densité et les changements de consommation du XXe siècle contribuent à abaisser la force moyenne de nombreuses ales britanniques, ce qui renforce le caractère « session » des Bitters.

Les catégories Ordinary, Best/Special et Strong Bitter utilisées aujourd’hui servent surtout à ordonner cette famille par force et intensité. Elles se chevauchent davantage dans la réalité commerciale qu’un tableau de concours ne le suggère. La qualité d’une Bitter tient rarement à la puissance brute : elle repose sur la combinaison d’un malt pale ale biscuité, d’une amertume ferme, d’un fruité de fermentation mesuré, d’un houblon anglais ou apparenté et, lorsqu’elle est servie en cask, d’une carbonatation basse qui fait ressortir la texture et la buvabilité.`,
    recette: {
      profilUnique: false,
      explicationProfil: "Bitter couvre plusieurs niveaux de force. Une Ordinary ne doit pas être simplement une Best diluée : le rapport entre densité, amertume, malt, esters et conditionnement doit rester cohérent à chaque niveau.",
      maltsEtCereales: [
        "Malt pale ale britannique comme base traditionnelle, souvent de caractère biscuité ou légèrement toasté.",
        "Crystal malt en proportion modérée selon la brasserie ; certains exemples restent presque entièrement pale malt.",
        "Sucres de brasserie, maïs ou autres adjuncts ont existé historiquement dans l’industrie britannique et peuvent alléger ou ajuster le profil sans être indispensables."
      ],
      houblons: [
        "East Kent Goldings, Fuggles, Challenger, Target, Northdown et autres variétés britanniques sont classiques ; les guides modernes acceptent aussi des expressions fruitées plus contemporaines selon le sous-style.",
        "L’amertume est structurante mais ne doit pas devenir âpre ; un houblonnage tardif ou un dry-hop léger peut apporter floral, terreux, résineux ou fruité."
      ],
      levuresEtMicroorganismes: [
        "Souche d’ale britannique floculante, avec esters fruités faibles à modérés et bonne aptitude au cask.",
        "Une très légère expression de diacétyle peut exister dans certains exemples traditionnels, mais elle n’est ni obligatoire ni un objectif général."
      ],
      ingredientsComplementaires: [],
      profilEau: "Un profil riche en calcium et souvent en sulfate est classique dans de nombreuses traditions britanniques ; il accentue la finale sèche et la netteté de l’amertume. Il faut toutefois éviter une minéralité dure ou crayeuse.",
      empatage: "Infusion simple, souvent orientée vers une bonne fermentescibilité. Le corps doit rester assez léger pour permettre plusieurs pintes tout en conservant un centre malté.",
      ebullitionEtHoublonnage: "Amertume principale en début d’ébullition, complétée par des ajouts plus tardifs selon la brasserie. Le houblonnage n’a pas vocation à produire la saturation aromatique d’une IPA moderne.",
      fermentation: "Fermentation haute avec gestion attentive des esters, du diacétyle et de la floculation. Les souches britanniques peuvent fermenter rapidement et clarifier efficacement.",
      maturation: "Maturation courte. En cask, une seconde fermentation légère, la clarification et le conditionnement au pub font partie de l’expérience traditionnelle ; les versions bouteille ou keg sont généralement plus carbonatées.",
      profilRecherche: "Une pinte sèche, expressive et immédiatement buvable, où biscuit, fruit discret et amertume se répondent sans qu’aucun élément ne domine lourdement."
    },
    sources: [ba2026("English-Style Bitter family"), bjcp2021("British Bitter", "11/british-bitter/"), REFERENCES.fullers, REFERENCES.fermentisS04]
  },

  "ipa-india-pale-ale": {
    histoireEtOrigines: `L’histoire de l’India Pale Ale est célèbre parce qu’elle a longtemps été racontée sous forme de légende simple : un brasseur londonien aurait inventé une bière extraordinairement forte et houblonnée afin qu’elle survive au voyage vers l’Inde. Les travaux historiques modernes montrent une réalité plus progressive. Des bières pâles et bien houblonnées existaient déjà, le porter voyageait lui aussi vers l’Inde, et George Hodgson n’a pas « inventé » à lui seul une recette de conservation. Sa Bow Brewery bénéficie surtout de sa proximité avec les quais de l’East India Company et devient un fournisseur important du marché indien à la fin du XVIIIe et au début du XIXe siècle.

L’expression « East India Pale Ale » puis « India Pale Ale » se fixe progressivement au XIXe siècle. Lorsque les relations commerciales avec Hodgson se dégradent, des négociants se tournent vers Burton upon Trent. Des brasseries comme Allsopp et Bass disposent d’une eau sulfatée particulièrement favorable aux pale ales sèches et houblonnées. Le modèle de Burton devient alors central : bière pâle de stock, fortement atténuée, amertume nette, houblonnage généreux et parfois garde prolongée. Le voyage maritime a pu modifier favorablement certaines bières, mais l’IPA n’est pas simplement un produit inventé pour résister à la chaleur des cales.

Au Royaume-Uni, le nom IPA finit par couvrir au XXe siècle des bières parfois beaucoup plus faibles que leurs ancêtres victoriens. La grande rupture suivante vient des États-Unis. Anchor Liberty Ale en 1975, puis la Pale Ale de Sierra Nevada et la scène craft des années 1980-1990 remettent au premier plan les houblons américains. L’IPA devient progressivement la grande plateforme d’innovation du brassage craft : American IPA, Double IPA, Black IPA, Belgian IPA, NEIPA/Hazy IPA, Session IPA, Brut IPA et de nombreuses variantes utilisent le sigle « IPA » davantage comme promesse d’un équilibre centré sur le houblon que comme reconstruction de la bière exportée vers l’Inde.

Cette évolution explique pourquoi « IPA » est aujourd’hui à la fois un héritage britannique et une famille mondiale en mouvement. Une English IPA, une West Coast IPA et une Hazy IPA peuvent sembler presque opposées en bouche ; elles appartiennent pourtant à une même généalogie où le houblon, la sécheresse et la volonté de dépasser la pale ale ordinaire restent des fils conducteurs.`,
    recette: {
      profilUnique: false,
      explicationProfil: "IPA est devenue une vaste famille. Les ingrédients, le trouble, l’amertume, la levure et même la couleur changent selon l’école ; il faut donc raisonner en équilibre houblonné plutôt qu’en recette universelle.",
      maltsEtCereales: [
        "Base de malt pale ou Pilsner selon l’école ; pale ale britannique pour les versions anglaises, two-row ou malt très clair pour de nombreuses versions américaines.",
        "Crystal/caramel historiquement fréquent dans certaines IPA américaines classiques mais nettement moins présent dans de nombreuses interprétations contemporaines sèches.",
        "Avoine et blé sont courants dans les Hazy IPA ; seigle, malts sombres ou céréales de blé définissent certaines Specialty IPA."
      ],
      houblons: [
        "Houblons britanniques classiques pour l’English IPA ; Cascade, Centennial, Chinook, Simcoe et autres variétés américaines dans l’école historique craft ; Citra, Mosaic, Galaxy, Nelson Sauvin, Motueka et nombreuses variétés modernes dans les versions contemporaines.",
        "L’architecture de houblonnage peut aller d’une forte amertume en chaudière à une construction presque entièrement tardive et à cru dans les styles hazy."
      ],
      levuresEtMicroorganismes: [
        "Souche anglaise fruitée dans l’English IPA, souche américaine neutre dans de nombreuses American/West Coast IPA, souches fruitées dans les Hazy IPA, levures belges pour la Belgian IPA.",
        "Le profil de levure doit être choisi en fonction du sous-style : une IPA n’est pas nécessairement neutre, mais le houblon doit rester central."
      ],
      ingredientsComplementaires: [
        "Certains sous-styles emploient enzymes, épices ou céréales particulières ; aucun ingrédient complémentaire n’est commun à toute la famille."
      ],
      profilEau: "Souvent orienté vers une eau pauvre en alcalinité. Les IPA sèches et amères utilisent fréquemment davantage de sulfate ; les Hazy IPA privilégient souvent un rapport plus riche en chlorures pour adoucir la bouche. Ce sont des tendances, pas des obligations.",
      empatage: "Généralement orienté vers une bonne atténuation. Les versions hazy ou très souples peuvent conserver davantage de corps ; les Brut IPA poussent au contraire la fermentescibilité à l’extrême.",
      ebullitionEtHoublonnage: "Le houblonnage définit le sous-style : forte charge amérisante et aromatique dans l’école classique, whirlpool et dry-hop massifs dans les IPA modernes, amertume plus douce dans les hazy, limitation de l’amertume dans la Brut IPA.",
      fermentation: "Fermentation haute soigneusement contrôlée. La gestion de l’oxygène après fermentation est cruciale pour éviter le brunissement, la perte d’arômes de houblon et l’apparition de notes de carton ou de fruits trop mûrs.",
      maturation: "Garde généralement courte dans les IPA modernes. La fraîcheur est un ingrédient de fait : les composés aromatiques du houblon évoluent vite et l’oxygène accélère fortement leur dégradation.",
      profilRecherche: "Une bière où le houblon structure l’arôme, la saveur et/ou l’amertume, soutenu par une base suffisamment sèche et nette pour rester buvable malgré l’intensité."
    },
    sources: [ba2026("India Pale Ale families"), bjcp2021("IPA", "21/ipa/"), REFERENCES.camraIpa, REFERENCES.smithsonianLiberty]
  },

  "ordinary-bitter": {
    histoireEtOrigines: `L’Ordinary Bitter représente l’extrémité légère de la famille des Bitters. Elle s’inscrit dans la culture britannique de la bière de session : une pinte conçue pour être bue fraîche, souvent en cask, avec beaucoup plus de relief que sa faible teneur en alcool ne le laisserait penser. Cette faiblesse n’est pas un héritage d’une « bière pauvre » immuable ; elle résulte aussi des effets combinés de la fiscalité sur la densité, des restrictions de guerre et de l’évolution du marché britannique au XXe siècle.

Le mot « Ordinary » est surtout un outil de classification moderne. Dans les pubs et chez les brasseurs, les noms commerciaux ne suivent pas toujours les catégories BJCP. Une bière à 3,5 % peut être vendue comme Bitter, Best Bitter ou sous un nom de marque sans mention de niveau. Ce qui définit l’Ordinary dans les guides actuels est davantage sa combinaison de faible densité, de faible carbonatation possible, d’amertume franche et de très forte buvabilité.

Le défi brassicole est précisément de ne pas la rendre aqueuse. Une base de malt britannique expressive, une levure apportant quelques esters, une eau souvent sulfatée et une amertume nette permettent d’obtenir une bière complète avec peu d’alcool. Servie au handpump autour de la température de cave, elle illustre une philosophie très britannique : la complexité vient de l’équilibre et du conditionnement, pas de la puissance.`,
    recette: {
      profilUnique: true,
      explicationProfil: "La faible densité impose de construire du goût sans ajouter de lourdeur. Chaque composant doit être précis car il y a peu d’alcool ou de sucre résiduel pour masquer les défauts.",
      maltsEtCereales: [
        "Malt pale ale britannique dominant, choisi pour son caractère de pain, biscuit ou noisette légère.",
        "Petite proportion de crystal possible pour apporter couleur et profondeur, mais un excès rendrait la bière douce et fatigante.",
        "Des sucres de brasserie ou adjuncts peuvent être historiquement plausibles pour ajuster atténuation et couleur."
      ],
      houblons: [
        "Houblons britanniques classiques, avec une amertume relativement élevée par rapport à la densité initiale.",
        "Ajout tardif modéré pour floral, terreux, résineux ou fruité léger ; le parfum ne doit pas transformer la bière en pale ale moderne."
      ],
      levuresEtMicroorganismes: [
        "Souche anglaise floculante et modérément fruitée, adaptée au cask et capable de laisser une impression maltée malgré la faible densité."
      ],
      ingredientsComplementaires: [],
      profilEau: "Calcium suffisant pour la fermentation et la clarification ; sulfate souvent notable afin de tendre la finale et de donner de la précision à l’amertume.",
      empatage: "Infusion simple. Une température modérée évite à la fois une finale pâteuse et une atténuation si forte que la bière deviendrait maigre.",
      ebullitionEtHoublonnage: "Amertume principale en chaudière, avec une petite charge aromatique tardive. Le ratio amertume/densité compte davantage que la quantité absolue de houblon.",
      fermentation: "Fermentation haute autour de la plage propre à la souche, en conservant des esters discrets. Gestion du diacétyle avant conditionnement.",
      maturation: "Très courte ; conditionnement en cask ou maturation brève en cuve. Une carbonatation basse à modérée renforce la buvabilité.",
      profilRecherche: "Une bière légère mais jamais vide : biscuit, fruit discret, houblon britannique et finale amère propre dans une pinte de grande buvabilité."
    },
    sources: [bjcp2021("11A Ordinary Bitter", "11/british-bitter/"), ba2026("English-Style Ordinary Bitter"), REFERENCES.fermentisS04]
  },

  "special-best-bitter": {
    histoireEtOrigines: `Best Bitter ou Special Bitter désigne historiquement moins une recette unique qu’un rang supérieur dans la gamme d’une brasserie. Par rapport à une Bitter plus légère, la bière reçoit généralement davantage de malt et parfois davantage de houblon, tout en restant une bière de pub et non une ale forte de dégustation. Les mots « Best », « Special », « Premium » ou simplement le nom de marque se sont chevauchés selon les maisons, ce qui explique pourquoi les guides modernes parlent d’une plage de style plutôt que d’une identité légale.

Le développement des Best Bitters accompagne la consolidation de la culture du cask au XXe siècle. Des bières comme London Pride, Timothy Taylor Landlord ou de nombreuses ales régionales montrent à quel point le style peut varier : plus malté ou plus houblonné, plus fruité ou plus net, avec des profils d’eau et des levures propres à chaque brasserie. Le point commun est la capacité à offrir davantage de structure qu’une Ordinary sans sacrifier la répétition de la pinte.

Aujourd’hui, la catégorie reste un repère utile pour les concours et les brasseurs, mais il faut éviter de la traiter comme une formule industrielle figée. La condition du cask, la fraîcheur du houblon, la température de service et la gestion de la levure influencent autant l’expérience qu’une différence de quelques points de densité.`,
    recette: {
      profilUnique: true,
      explicationProfil: "Best/Special Bitter conserve la logique de session d’une Bitter mais avec davantage de matière et de marge aromatique qu’une Ordinary.",
      maltsEtCereales: [
        "Pale ale malt britannique majoritaire.",
        "Crystal malt faible à modéré selon le profil recherché ; biscuit ou malt légèrement toasté possibles avec retenue.",
        "Sucres de brasserie possibles dans certaines traditions pour alléger le corps tout en maintenant la densité."
      ],
      houblons: [
        "East Kent Goldings, Fuggles, Challenger, Target ou autres houblons anglais ; des variétés modernes peuvent apparaître dans des versions contemporaines.",
        "Amertume ferme, avec une présence aromatique plus lisible que dans beaucoup d’Ordinary Bitters."
      ],
      levuresEtMicroorganismes: [
        "Levure britannique expressive mais maîtrisée, floculation moyenne à forte."
      ],
      ingredientsComplementaires: [],
      profilEau: "Souvent calcique et sulfatée, mais le niveau dépend de l’identité régionale de la brasserie. L’eau ne doit pas produire une amertume minérale agressive.",
      empatage: "Infusion simple autour d’un compromis entre corps moyen-léger et bonne atténuation.",
      ebullitionEtHoublonnage: "Amertume structurante puis ajouts tardifs modérés. Le dry-hop en cask peut être utilisé mais n’est pas obligatoire.",
      fermentation: "Fermentation haute avec esters de fruits modérés et diacétyle nul à très faible selon la tradition.",
      maturation: "Maturation courte, puis conditionnement en cask, bouteille ou keg. En cask, la carbonatation basse et le service à la pompe sont déterminants.",
      profilRecherche: "Une Bitter plus pleine et expressive qu’une Ordinary, mais toujours sèche, équilibrée et conçue pour la pinte."
    },
    sources: [bjcp2021("11B Best Bitter", "11/british-bitter/"), ba2026("English-Style Special Bitter"), REFERENCES.fullers, REFERENCES.fermentisS04]
  },

  "extra-special-bitter-esb": {
    histoireEtOrigines: `La catégorie « Extra Special Bitter » est intimement liée à Fuller’s. La brasserie de Chiswick lance sa bière ESB en 1971 ; son succès et ses récompenses contribuent ensuite à faire de l’expression un repère international pour les bitters britanniques les plus fortes. Dans la classification BJCP moderne, cette zone est appelée Strong Bitter afin d’éviter de réduire toute la famille à un seul nom commercial, mais « ESB » reste profondément ancré dans le vocabulaire des brasseurs et des consommateurs.

Historiquement, les brasseries britanniques produisaient déjà des pale ales et bitters de différentes forces bien avant 1971. L’innovation de Fuller’s n’est donc pas l’invention de la strong pale ale anglaise ; elle tient plutôt à la création d’une référence commerciale devenue si influente qu’elle a fini par donner son nom, surtout hors du Royaume-Uni, à une catégorie entière. Fuller’s situe également Chiswick Bitter dans les années 1930 et London Pride dans les années 1950, ce qui montre l’ESB comme le sommet d’une gamme de cask ales de forces différentes.

Une bonne ESB moderne n’est pas une IPA anglaise plus sucrée. Le malt y prend davantage de place : pain grillé, biscuit, noix, caramel ou toffee léger, soutenus par des esters de fruits et une amertume suffisamment ferme pour garder la finale fraîche. Le cask reste un service emblématique, mais la bière existe aussi en bouteille et en keg avec davantage de carbonatation.`,
    recette: {
      profilUnique: true,
      explicationProfil: "La Strong/Extra Special Bitter pousse la structure maltée et la force alcoolique plus loin qu’une Best Bitter tout en conservant une finale sèche et une vraie buvabilité.",
      maltsEtCereales: [
        "Pale ale malt britannique comme base, souvent choisi pour une expression de biscuit, pain et noisette.",
        "Crystal malt en quantité mesurée pour toffee, fruits secs légers et couleur cuivre ; un excès ferait basculer la bière vers une douceur lourde.",
        "Petites touches de malts biscuités ou torréfiés très légers possibles selon la maison."
      ],
      houblons: [
        "Houblons anglais traditionnels ou profils apparentés ; l’aromatique peut être plus affirmé que dans les Bitters légères.",
        "L’amertume doit équilibrer une densité plus élevée sans devenir tranchante comme une IPA moderne."
      ],
      levuresEtMicroorganismes: [
        "Souche britannique produisant des esters modérés et une bonne floculation ; certaines souches laissent davantage de corps résiduel."
      ],
      ingredientsComplementaires: [],
      profilEau: "Profil calcique et souvent sulfaté pour soutenir une finale sèche malgré le malt plus riche. Une composante chlorure modérée peut arrondir la bouche.",
      empatage: "Infusion simple visant un corps moyen sans sacrifier l’atténuation.",
      ebullitionEtHoublonnage: "Amertume de chaudière robuste puis additions tardives anglaises. Un dry-hop discret est possible dans certaines interprétations.",
      fermentation: "Fermentation haute avec fruité anglais contrôlé ; repos suffisant pour maîtriser diacétyle et composés soufrés selon la souche.",
      maturation: "Courte à moyenne. Le cask permet une évolution douce des arômes ; la bouteille et le keg donnent généralement une mousse et une carbonatation plus franches.",
      profilRecherche: "Une ale cuivre, maltée et fruitée, plus forte qu’une Bitter ordinaire mais sèche, houblonnée et suffisamment équilibrée pour rester une bière de pub."
    },
    sources: [bjcp2021("11C Strong Bitter", "11/british-bitter/"), ba2026("English-Style Extra Special Bitter"), REFERENCES.fullers, REFERENCES.fermentisS04]
  },

  "english-summer-ale": {
    histoireEtOrigines: `L’English Summer Ale est une création moderne de la scène britannique plutôt qu’un style ancien. À partir des années 1980, plusieurs petites brasseries cherchent à proposer des cask ales plus pâles, plus vives et plus adaptées à l’été que les bitters ambrées traditionnelles. Cette évolution accompagne l’arrivée ou le retour de houblons aromatiques plus démonstratifs, ainsi que le désir de séduire des consommateurs attirés par des bières blondes mais souhaitant conserver le caractère d’une ale de fermentation haute.

La frontière avec British Golden Ale est poreuse. Dans la pratique, « Summer Ale » est souvent un nom commercial saisonnier tandis que « Golden Ale » est devenu un terme stylistique plus stable. Hop Back Summer Lightning, brassée à partir de 1988, est l’un des repères majeurs de cette révolution : une bière très pâle, sèche et houblonnée qui remporte de nombreuses récompenses et contribue à populariser une nouvelle esthétique de cask ale britannique.

Le style n’exige pas d’imiter une lager. Il conserve une fermentation haute, une carbonatation souvent modérée lorsqu’il est servi en cask et une base maltée légère. Sa réussite tient à la fraîcheur : céréale pâle, houblon floral ou agrumé, amertume propre et finale sèche. Il constitue ainsi un pont historique important entre la Bitter britannique et les golden ales craft qui se développeront ensuite.`,
    recette: {
      profilUnique: true,
      explicationProfil: "Une Summer Ale anglaise vise d’abord la légèreté visuelle et la fraîcheur, avec une fermentation d’ale et un houblon plus lumineux que dans de nombreuses bitters traditionnelles.",
      maltsEtCereales: [
        "Malt pale très clair ou lager/pale ale malt comme base.",
        "Blé malté possible en petite proportion pour la mousse ; crystal généralement absent ou très discret afin de préserver la couleur et la sécheresse."
      ],
      houblons: [
        "Houblons anglais floraux ou épicés, mais aussi variétés américaines ou européennes agrumées ; le style a historiquement servi de terrain d’ouverture vers de nouveaux profils.",
        "Arôme de houblon net, sans la saturation d’une IPA."
      ],
      levuresEtMicroorganismes: [
        "Levure anglaise relativement propre, avec esters faibles à modérés et bonne floculation."
      ],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité et minéralité modérée ; sulfate possible pour sécher la finale et rendre l’amertume vive.",
      empatage: "Infusion favorisant une bonne fermentescibilité et un corps léger.",
      ebullitionEtHoublonnage: "Amertume moyenne avec ajouts aromatiques tardifs. Le dry-hop est possible mais généralement mesuré.",
      fermentation: "Fermentation haute propre, suivie d’une clarification rapide.",
      maturation: "Courte et fraîche. Le style gagne peu à vieillir ; le houblon et la vivacité doivent rester au premier plan.",
      profilRecherche: "Une ale britannique très pâle, sèche, rafraîchissante et nettement houblonnée, conçue pour la saison chaude sans perdre le caractère du cask."
    },
    sources: [ba2026("English-Style Summer Ale"), REFERENCES.hopBack, REFERENCES.fermentisS04]
  },

  "classic-english-pale-ale": {
    histoireEtOrigines: `La Classic English Pale Ale représente la continuité moderne des pale ales britanniques hors des catégories de Bitter les plus légères et des IPA plus puissantes. Le terme rappelle qu’avant la spécialisation contemporaine, « pale ale » pouvait couvrir un vaste ensemble de bières anglaises claires à cuivrées, servies en cask ou en bouteille, avec un équilibre variable entre malt, esters et houblon.

Au XIXe siècle, Burton est le grand centre de la pale ale, mais Londres, Yorkshire et de nombreuses régions développent leurs propres traditions. La diffusion du malt pale, l’emploi de houblons anglais et les profils d’eau locaux donnent des bières reconnaissables sans imposer une recette nationale unique. Au XXe siècle, certaines pale ales embouteillées conservent davantage de force et de carbonatation que les bitters de pub, tandis que les noms commerciaux brouillent encore la frontière entre Pale Ale, Best Bitter et Strong Bitter.

Les guides de compétition actuels utilisent « Classic English-Style Pale Ale » pour décrire une ale dorée à cuivre, maltée de façon modérée, houblonnée avec des caractères floraux, herbacés, terreux ou fruités, et fermentée avec une expression d’esters typiquement britannique. C’est une catégorie utile pour comprendre l’école anglaise sans la réduire à une seule force de Bitter.`,
    recette: {
      profilUnique: true,
      explicationProfil: "La Classic English Pale Ale recherche un équilibre traditionnel : davantage de structure qu’une golden ale, mais moins d’intensité houblonnée qu’une IPA moderne.",
      maltsEtCereales: [
        "Pale ale malt britannique dominant.",
        "Crystal léger à moyen possible pour couleur cuivre et complexité ; biscuit ou amber malt en touche faible selon l’interprétation."
      ],
      houblons: [
        "East Kent Goldings, Fuggles, Challenger, Target ou autres houblons britanniques ; variétés fruitées modernes possibles avec retenue.",
        "Houblon perceptible en arôme et en bouche, soutenu par une amertume moyenne."
      ],
      levuresEtMicroorganismes: [
        "Levure ale britannique donnant des esters de fruits modérés et une bonne floculation."
      ],
      ingredientsComplementaires: [],
      profilEau: "Calcium modéré à élevé, sulfate souvent présent pour la sécheresse ; éviter une eau trop alcaline qui ternirait la bière claire.",
      empatage: "Infusion simple visant un corps moyen-léger à moyen et une bonne atténuation.",
      ebullitionEtHoublonnage: "Amertume de chaudière puis ajouts tardifs modérés. Dry-hop facultatif selon la tradition de la brasserie.",
      fermentation: "Fermentation haute avec esters contrôlés et clarification efficace.",
      maturation: "Courte à moyenne ; cask, bouteille ou keg selon le produit. Les versions conditionnées naturellement peuvent gagner en intégration quelques semaines.",
      profilRecherche: "Une pale ale anglaise équilibrée, biscuitée et fruitée, avec un houblon traditionnel clairement perceptible et une finale sèche."
    },
    sources: [ba2026("Classic English-Style Pale Ale"), bjcp2021("British Bitter and Pale Ale context", "11/british-bitter/"), REFERENCES.fullers, REFERENCES.fermentisS04]
  },

  "british-golden-ale": {
    histoireEtOrigines: `La British Golden Ale est l’un des meilleurs exemples d’un style relativement récent devenu si familier qu’il paraît plus ancien qu’il ne l’est. Elle se développe dans les années 1980 au sein du renouveau des petites brasseries britanniques et du cask ale. L’objectif est clair : proposer une ale très pâle, sèche et rafraîchissante, capable d’attirer les buveurs de lager tout en offrant le houblon, la fermentation haute et le service traditionnel chers aux amateurs d’ale.

Hop Back Summer Lightning, brassée pour la première fois en 1988 selon la brasserie, joue un rôle emblématique. Son succès dans les festivals et les pubs contribue à montrer qu’une cask ale peut être dorée, vivement houblonnée et dépourvue du caramel souvent associé à la Bitter. D’autres brasseries suivent, et la Golden Ale devient une catégorie à part entière. Les houblons anglais restent fréquents, mais les variétés américaines agrumées gagnent rapidement du terrain, ce qui fait du style un laboratoire précoce du goût international dans la bière britannique.

Le BJCP insiste sur la buvabilité et le caractère rafraîchissant, héritage direct de son positionnement estival. La différence avec une Blonde Ale américaine tient généralement à une amertume plus marquée et à un houblon plus expressif ; la différence avec une IPA tient à la force et à l’intensité globale. La Golden Ale reste une bière de pinte, souvent en cask, où la pâleur du malt sert d’écran clair à l’aromatique du houblon.`,
    recette: {
      profilUnique: true,
      explicationProfil: "La Golden Ale britannique doit rester très pâle, sèche et désaltérante ; le houblon est plus visible que dans une simple blonde mais l’ensemble reste de force modérée.",
      maltsEtCereales: [
        "Malt pale très clair, lager malt ou pale ale malt peu coloré comme base.",
        "Blé malté possible en petite quantité pour la tenue de mousse ; crystal généralement évité afin de préserver couleur claire et finale nette."
      ],
      houblons: [
        "Houblons anglais, américains ou autres variétés modernes ; les profils floral, herbacé, agrumé et fruité sont courants.",
        "L’amertume est moyenne à moyennement forte et l’arôme peut être nettement présent, parfois avec une seule variété mise en avant."
      ],
      levuresEtMicroorganismes: [
        "Souche britannique relativement neutre à légèrement fruitée, suffisamment floculante pour une bière brillante."
      ],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité ; sulfate modéré à élevé possible pour souligner la sécheresse et l’amertume sans produire de dureté.",
      empatage: "Infusion simple orientée vers une bonne fermentescibilité et un corps léger.",
      ebullitionEtHoublonnage: "Amertume de chaudière propre, puis ajouts tardifs plus expressifs qu’une Bitter classique. Dry-hop possible mais pas obligatoire.",
      fermentation: "Fermentation haute propre avec esters faibles à modérés.",
      maturation: "Courte. Service fréquent en cask avec faible carbonatation, mais les versions bouteille et keg sont également communes.",
      profilRecherche: "Une ale or pâle, sèche et lumineuse, où un malt discret laisse la première place à un houblon frais et à une grande buvabilité."
    },
    sources: [bjcp2021("12A British Golden Ale", "12/pale-commonwealth-beer/"), ba2026("Golden or Blonde Ale — British context"), REFERENCES.hopBack, REFERENCES.fermentisS04]
  }
};
