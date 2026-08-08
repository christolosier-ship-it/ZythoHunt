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

export const stoutPatches = {
  stout: {
    histoireEtOrigines: `Le stout ne naît pas comme une famille séparée du porter. Dans l’anglais des XVIIIe et XIXe siècles, « stout » signifie d’abord robuste, fort, corpulent : on rencontre ainsi des stout porters, c’est-à-dire des porters de plus forte densité. Le mot finit par se détacher de « porter » à mesure que les brasseries commercialisent différentes forces et que certaines lignées, notamment irlandaises, développent un profil plus sec et plus torréfié.

L’histoire irlandaise est fondamentale mais ne doit pas effacer les racines anglaises. Guinness, fondée à St. James’s Gate en 1759, se tourne entièrement vers le porter à la fin du XVIIIe siècle ; le BJCP rappelle qu’une version plus « stout » apparaît au début du XIXe siècle. Le Guinness Extra Stout actuel se rattache à une recette de Superior Porter documentée en 1821. Les transformations ultérieures du maltage, des taxes, des techniques de torréfaction, de la filtration et du service modifient profondément le produit. La célèbre pinte noire et crémeuse servie à l’azote est un développement du XXe siècle : Guinness Draught est lancé en 1959, bien après la naissance du stout.

Au cours du XXe siècle, le mot « stout » couvre un éventail de plus en plus large. À côté des Irish Stouts sèches apparaissent ou survivent des Sweet/Milk Stouts, Oatmeal Stouts, Foreign Extra et Tropical Stouts. Le renouveau craft américain ajoute des stouts plus houblonnés et torréfiés, puis des Imperial Stouts massifs, souvent élevés en fût ou utilisés comme base de bières aromatisées.

Il n’existe donc pas une recette de stout universelle. Le fil conducteur est une bière sombre où le grain torréfié, le malt noir, le café ou le cacao jouent un rôle central, mais la force peut aller de la pinte irlandaise légère à des bières impériales dépassant 10 %, et la finale de très sèche à franchement douce.`,
    recette: recipe({
      profilUnique: false,
      explicationProfil: "Stout est une famille. Irish Stout, Sweet Stout, Oatmeal, Foreign Extra, Tropical, American et Imperial Stout partagent un vocabulaire sombre mais diffèrent fortement en densité, sucre résiduel, houblonnage, fermentation et torréfaction.",
      maltsEtCereales: [
        "Malt pâle ou pale ale comme base dans de nombreuses traditions.",
        "Orge torréfiée, black malt, chocolate malt et autres malts sombres selon le sous-style.",
        "Avoine, lactose, sucres, céréales adjointes ou ingrédients culinaires n’appartiennent qu’à certaines branches et ne définissent pas la famille entière."
      ],
      houblons: ["Houblonnage allant de discret et purement amer dans les stouts traditionnels à franchement aromatique et résineux dans les versions américaines."],
      levuresEtMicroorganismes: ["Levures ale britanniques, irlandaises ou américaines dominantes ; certaines Tropical Stouts peuvent utiliser des levures lager conduites chaud."],
      profilEau: "L’alcalinité doit être adaptée aux grains torréfiés afin de contrôler le pH. Le rapport chlorure/sulfate dépend ensuite de l’objectif : crémeux et rond, ou sec et amer.",
      empatage: "Infusion généralement simple aujourd’hui. Les grains très torréfiés peuvent être intégrés de différentes façons afin de régler acidité, couleur, café et astringence.",
      ebullitionEtHoublonnage: "Amertume ajustée au sous-style : modérée en Sweet Stout, ferme en Irish Extra ou Foreign Extra, élevée dans de nombreux American et Imperial Stouts.",
      fermentation: "Fermentation haute avec contrôle de température ; le niveau d’esters varie selon la tradition. Les bières très fortes demandent oxygénation, levure en quantité et gestion rigoureuse de l’alcool.",
      maturation: "Courte pour les stouts de pub légers ; plus longue pour les stouts export et impériaux, dont les couches de roast, fruit noir et alcool gagnent à se fondre.",
      profilRecherche: "Une bière sombre dont la torréfaction forme une architecture cohérente — café, cacao, grain grillé ou chocolat — adaptée à la force et à la douceur du sous-style."
    }),
    sources: [BJCP.irishStout("Stout family / Irish Stout roots"), REF.camraPorter, REF.guinnessStory, REF.guinnessOriginal]
  },

  "dry-stout-irish-dry-stout": {
    histoireEtOrigines: `L’Irish Stout moderne, souvent appelée Dry Stout ou Irish Dry Stout, descend directement de l’histoire du porter. Les brasseurs irlandais adoptent le porter londonien puis développent progressivement leurs propres profils. Guinness se consacre au porter à la fin du XVIIIe siècle et produit au début du XIXe des versions plus fortes décrites comme stout porter. Au fil du temps, les stouts irlandaises s’éloignent des porters londoniens par un usage plus marqué des grains très torréfiés, un profil plus sec et une amertume plus nette.

La perception contemporaine du style est fortement liée au service. Guinness Draught, lancé en 1959 pour le bicentenaire de la brasserie, utilise un mélange de gaz comprenant de l’azote. Les bulles d’azote, plus petites que celles d’un service purement carbonique, produisent la texture crémeuse et la mousse dense devenues emblématiques. Il serait toutefois faux de confondre ce service avec l’origine du style : des stouts irlandaises existaient depuis plus d’un siècle avant l’apparition du nitro.

Le BJCP distingue des variations régionales historiques : les exemples de Dublin sont typiquement plus secs, plus amers et plus marqués par l’orge torréfiée, tandis que des traditions de Cork ont pu être plus douces et chocolatées. La version moderne de référence reste une bière étonnamment légère en corps et en alcool : sa couleur noire et sa mousse crémeuse donnent une impression de densité, mais sa réussite repose sur la sécheresse, la buvabilité et la précision du roast.`,
    recette: recipe({
      maltsEtCereales: ["Malt pale en base, part significative d’orge torréfiée non maltée ou de malt très torréfié pour café sec et couleur ; flocons d’orge possibles pour la texture."],
      houblons: ["Houblons britanniques ou apparentés surtout pour l’amertume ; arôme faible à absent."],
      levuresEtMicroorganismes: ["Levure ale irlandaise/britannique relativement propre, avec esters faibles à modérés selon l’exemple."],
      profilEau: "Une eau suffisamment alcaline aide à encaisser l’orge torréfiée ; sulfate modéré à élevé possible pour renforcer sécheresse et amertume.",
      empatage: "Empâtage favorisant une bonne atténuation et un corps léger à moyen-léger ; contrôle du pH essentiel avec la charge torréfiée.",
      ebullitionEtHoublonnage: "Amertume nette, peu d’intérêt pour les ajouts aromatiques tardifs. La perception sèche vient autant de l’atténuation et du roast que des IBU.",
      fermentation: "Fermentation haute propre et complète, avec gestion attentive du diacétyle.",
      maturation: "Garde courte à moyenne. Le service nitro est fréquent mais non obligatoire ; un stout conditionné en bouteille peut être stylistiquement juste sans reproduire la texture d’une pinte nitro.",
      profilRecherche: "Une pinte noire mais légère, sèche et désaltérante, avec café torréfié, grain grillé, amertume ferme et mousse persistante."
    }),
    sources: [BJCP.irishStout(), REF.guinnessDraught, REF.guinnessStory]
  },

  "irish-extra-stout": {
    histoireEtOrigines: `L’Irish Extra Stout partage les mêmes racines que l’Irish Stout mais représente historiquement une version plus forte, souvent destinée à la bouteille. Chez Guinness, l’Extra Stout actuel se rattache directement à la recette de Superior Porter consignée par Arthur Guinness II en 1821. Cette continuité de vocabulaire montre encore une fois combien porter et stout sont imbriqués : ce qui est aujourd’hui présenté comme un stout emblématique descend d’un produit que la brasserie appelait porter.

Par rapport à la stout de pub plus légère, l’Extra Stout offre davantage de densité, de corps, de café, de chocolat noir et parfois de malt biscuité ou caramélisé. Le BJCP situe les exemples irlandais traditionnels autour de 5,6 à 6 % et souligne la diversité d’équilibre : certains sont très secs et amers, d’autres présentent plus de malt et de rondeur.

Cette fiche ne doit pas être confondue avec Foreign Extra Stout. L’Irish Extra est le chaînon domestique plus robuste entre la Dry Stout et les versions d’export plus fortes et plus houblonnées.`,
    recette: recipe({
      maltsEtCereales: ["Malt pale, orge torréfiée et/ou malts noirs ; crystal sombre ou sucres bruns possibles pour ajouter cacao, biscuit et profondeur."],
      houblons: ["Houblons terreux ou épicés surtout pour une amertume moyenne à forte ; arôme généralement limité."],
      levuresEtMicroorganismes: ["Levure ale irlandaise ou britannique, atténuante mais capable d’un léger fruité."],
      profilEau: "Alcalinité suffisante pour le roast ; sulfate possible pour soutenir la finale sèche, avec plus de chlorure dans les versions maltées.",
      empatage: "Infusion visant un corps moyen, plus substantiel qu’une Dry Stout mais sans lourdeur.",
      ebullitionEtHoublonnage: "Amertume structurante, généralement plus forte que dans une stout légère ; peu de houblon tardif nécessaire.",
      fermentation: "Fermentation haute propre à légèrement fruitée, avec atténuation suffisante pour garder une finale nette.",
      maturation: "Garde moyenne permettant d’arrondir le roast et les notes de chocolat noir.",
      profilRecherche: "Une stout irlandaise plus dense et plus intense : café, cacao, grain torréfié et amertume ferme, mais encore très lisible et buvable."
    }),
    sources: [BJCP.irishExtra(), REF.guinnessOriginal, ba2026("Irish-Style Extra Stout")]
  },

  "export-stout-foreign-extra-stout": {
    histoireEtOrigines: `La Foreign Extra Stout est l’une des branches où le lien entre stout, commerce maritime et empire brassicole est le plus visible. Les brasseries britanniques et irlandaises expédient des porters et stouts forts vers des marchés lointains dès les XVIIIe et XIXe siècles. Les versions destinées à l’export reçoivent généralement davantage de houblon et peuvent connaître une maturation plus longue, afin de mieux résister au temps et au transport.

Guinness documente une étape particulièrement importante en 1801 avec son West India Porter, ancêtre direct de la Foreign Extra Stout de la marque. La brasserie explique avoir renforcé le houblonnage pour les voyages vers les climats chauds. Le produit change de nom et de formulation au fil du temps, mais cette lignée export devient l’un des vecteurs majeurs de diffusion du stout en Afrique, dans les Caraïbes et en Asie.

Le BJCP rappelle que les anciennes versions pouvaient aussi subir une longue fermentation secondaire, parfois avec Brettanomyces, augmentant l’atténuation et la stabilité. Les versions modernes sont généralement plus propres. Par rapport à une Irish Extra Stout, la Foreign Extra est plus forte et plus amère ; par rapport à une Tropical Stout de même force, elle est généralement plus sèche et plus torréfiée.

L’histoire ne doit donc pas être réduite à « on ajoutait du houblon comme conservateur ». La force, la garde, les pratiques d’embouteillage, les marchés locaux et l’évolution des brasseries ont tous participé à la construction de cette famille.`,
    recette: recipe({
      maltsEtCereales: ["Malt pale en base, orge torréfiée et malts noirs ; historiquement brown et amber malts possibles ; sucre ou autres adjoints parfois employés pour construire la densité."],
      houblons: ["Houblons britanniques ou apparentés, avec une amertume franchement plus élevée que dans les stouts domestiques ; arôme terreux/herbacé possible mais secondaire."],
      levuresEtMicroorganismes: ["Levure ale robuste et atténuante ; les reconstitutions historiques peuvent explorer une maturation mixte, mais ce n’est pas requis dans le style moderne."],
      profilEau: "Profil adapté au roast et à une forte amertume, avec alcalinité suffisante et sulfate modéré si l’on vise une finale sèche.",
      empatage: "Empâtage donnant un corps moyen à plein tout en conservant une bonne fermentescibilité pour la stabilité et la buvabilité.",
      ebullitionEtHoublonnage: "Amertume forte et solide, historiquement renforcée pour l’export ; ébullition franche adaptée à une densité plus élevée.",
      fermentation: "Fermentation haute propre à modérément fruitée ; limiter les alcools agressifs malgré la force supérieure.",
      maturation: "Garde moyenne à longue selon la densité. Le profil doit se fondre sans perdre la fermeté du roast et de l’amertume.",
      profilRecherche: "Une stout export sombre, forte, sèche à équilibrée, riche en café et chocolat noir, avec une amertume suffisamment ferme pour traverser le malt."
    }),
    sources: [BJCP.foreignExtra(), REF.guinnessForeign, REF.guinnessWestIndies, ba2026("Foreign-Style Stout")]
  },

  "tropical-stout": {
    histoireEtOrigines: `Le mot « Tropical » ne décrit pas des arômes de mangue ou de fruit de la passion issus du houblon. Il indique l’origine et la popularité de la famille dans des marchés tropicaux, notamment les Caraïbes, l’Afrique et d’autres régions où les stouts export britanniques et irlandais avaient établi une forte présence.

Le BJCP décrit la Tropical Stout comme une adaptation locale des Foreign Extra Stouts. Une fois brassées directement sur place, ces bières n’ont plus besoin de reproduire exactement l’équilibre d’un produit expédié depuis l’Europe. Les goûts locaux, les matières premières disponibles et les équipements conduisent à des versions souvent plus douces, plus fruitées et moins amères, avec des notes de mélasse, sucre brun, chocolat, café et fruits noirs.

Une particularité technique fréquemment citée est l’utilisation de levures lager fermentées à température relativement chaude, pratique cohérente avec certaines grandes brasseries tropicales dont l’outil principal est orienté lager. Le résultat peut produire un profil propre mais fruité, différent d’une stout anglaise classique.

La Tropical Stout se situe donc entre le Sweet Stout et la Foreign Extra : plus forte qu’une Sweet Stout, souvent aussi alcoolisée qu’une Foreign Extra, mais généralement plus ronde, plus fruitée et moins sèche.`,
    recette: recipe({
      maltsEtCereales: ["Malt pale et malts ou grains torréfiés doux ; crystal/caramel pour rondeur ; adjoints céréaliers possibles selon les traditions locales."],
      houblons: ["Houblons surtout pour l’amertume, à un niveau modéré ; arôme faible afin de laisser dominer malt, fruit et douceur."],
      levuresEtMicroorganismes: ["Levure ale fruitée ou, fréquemment, levure lager conduite à température plus chaude selon les pratiques de la brasserie."],
      ingredientsComplementaires: ["Sucres ou sirops peuvent augmenter la densité et apporter mélasse, sucre brun ou rhum sombre sans exiger de malt supplémentaire."],
      profilEau: "Profil équilibré, avec alcalinité suffisante pour les grains foncés ; chlorures utiles à la texture et à la douceur.",
      empatage: "Empâtage maintenant un corps moyen à plein ; le sucre résiduel ne doit pas uniquement provenir d’un empâtage très chaud si des sucres fermentescibles sont aussi employés.",
      ebullitionEtHoublonnage: "Amertume modérée, nettement moins agressive qu’une Foreign Extra de même force.",
      fermentation: "Fermentation donnant un fruité net et agréable ; contrôle des alcools supérieurs indispensable dans les climats et températures de fermentation plus élevés.",
      maturation: "Garde moyenne pour fondre fruits noirs, caramel et roast.",
      profilRecherche: "Une stout tropicale forte mais accessible : douce, fruitée, chocolatée, légèrement mélassée, sans brûlé brutal ni amertume d’export dominante."
    }),
    sources: [BJCP.tropicalStout(), ba2026("Tropical Stout")]
  },

  "sweet-milk-cream-stout": {
    histoireEtOrigines: `La Sweet Stout apparaît en Angleterre au début du XXe siècle dans un contexte où la bière est encore volontiers présentée comme nourrissante ou tonique. Les termes Milk Stout et Cream Stout se développent autour de l’emploi de lactose, le sucre naturellement présent dans le lait. Les levures de bière ordinaires ne fermentent pas efficacement ce sucre : il reste donc dans la bière et apporte une douceur durable ainsi qu’une impression de corps.

Le terme « milk » ne signifie pas que la bière contient nécessairement du lait liquide. Historiquement, c’est surtout le lactose qui construit la catégorie. Les campagnes publicitaires de l’époque ont parfois attribué à ces bières des bénéfices nutritionnels ou médicaux, notamment pour les mères allaitantes ou les convalescents. Ces affirmations appartiennent à l’histoire du marketing et ne doivent évidemment pas être reprises comme conseils de santé contemporains.

Le BJCP indique que l’appellation « Milk Stout » a ensuite été restreinte en Angleterre, alors qu’elle reste utilisée dans d’autres pays. Aujourd’hui, Sweet Stout, Milk Stout et Cream Stout désignent un continuum : une stout noire, chocolatée et torréfiée avec une douceur nettement supérieure aux Irish Stouts. Toutes les Sweet Stouts n’emploient pas forcément du lactose, mais celui-ci demeure l’ingrédient emblématique de la famille.`,
    recette: recipe({
      maltsEtCereales: ["Malt pale en base, crystal/caramel pour la rondeur, chocolate malt et grains torréfiés pour café doux et cacao."],
      houblons: ["Houblons britanniques ou neutres, principalement en amertume ; le niveau doit équilibrer sans sécher fortement la finale."],
      levuresEtMicroorganismes: ["Levure ale anglaise ou apparentée, généralement avec une atténuation modérée."],
      ingredientsComplementaires: ["Lactose fréquemment ajouté pour une douceur non fermentescible et une sensation crémeuse ; d’autres sucres ou sirops peuvent compléter selon la recette."],
      profilEau: "Chlorures favorables au corps et à la douceur, alcalinité adaptée aux malts noirs ; sulfate modéré afin de ne pas rendre l’amertume trop tranchante.",
      empatage: "Empâtage moyen à légèrement haut pour préserver le corps, sans compter uniquement sur les dextrines : le lactose fournit la signature sucrée de nombreuses versions.",
      ebullitionEtHoublonnage: "Amertume basse à moyenne ; le lactose est souvent ajouté pendant l’ébullition ou en phase chaude pour faciliter dissolution et hygiène.",
      fermentation: "Fermentation haute propre à légèrement fruitée. La densité finale reste volontairement plus élevée à cause des sucres non fermentescibles.",
      maturation: "Garde courte à moyenne ; éviter une oxydation qui transformerait la douceur chocolatée en lourdeur terne.",
      profilRecherche: "Un stout noir, doux et crémeux où café au lait, chocolat et caramel sont équilibrés par une amertume modérée."
    }),
    sources: [BJCP.sweetStout(), ba2026("Sweet / Cream / Milk Stout")]
  },

  "oatmeal-stout": {
    histoireEtOrigines: `L’avoine n’est pas une invention du mouvement craft : elle a été utilisée dans les bières britanniques bien avant l’époque contemporaine. L’Oatmeal Stout devient particulièrement visible entre les deux guerres mondiales, à une période où les brasseries commercialisent volontiers des bières sombres autour d’arguments de corps, de nutrition ou de douceur. Comme pour le Milk Stout, il faut distinguer cette histoire publicitaire des connaissances nutritionnelles actuelles.

Le style décline ensuite fortement au Royaume-Uni avant d’être relancé dans le contexte du renouveau des bières traditionnelles et de l’export. Le BJCP souligne que ce revival contribue à son adoption par les brasseurs craft américains. Les versions modernes utilisent une quantité d’avoine réellement perceptible, souvent autour de 5 à 20 % du grist ou davantage, plutôt qu’une dose symbolique destinée seulement à justifier le nom.

L’avoine n’apporte pas nécessairement un goût évident de porridge. Son rôle se manifeste surtout dans la texture : protéines, bêta-glucanes et lipides augmentent le soyeux, la rondeur et parfois une impression légèrement noisettée. Trop d’avoine peut cependant compliquer la filtration et rendre le moût visqueux. L’Oatmeal Stout doit donc rester une bière, pas une boisson céréalière épaisse : le roast, l’amertume et la fermentation doivent encore structurer la bouche.`,
    recette: recipe({
      maltsEtCereales: ["Malt pale, crystal/caramel et malts torréfiés/chocolate ; avoine en flocons ou maltée à une proportion suffisamment nette pour influencer la texture."],
      houblons: ["Houblons surtout pour l’amertume, généralement britanniques ou neutres ; arôme faible."],
      levuresEtMicroorganismes: ["Levure ale anglaise ou apparentée, avec esters doux possibles."],
      profilEau: "Chlorures modérés pour le soyeux, alcalinité adaptée au roast ; éviter une eau excessivement sulfatée qui durcirait la texture.",
      empatage: "L’avoine peut épaissir fortement la maische ; une bonne gestion des bêta-glucanes, de la filtration et du ratio eau/grain devient importante quand sa proportion augmente.",
      ebullitionEtHoublonnage: "Amertume moyenne permettant de couper le corps sans dominer ; peu d’ajouts tardifs nécessaires.",
      fermentation: "Fermentation haute propre à modérément fruitée, avec atténuation suffisante pour empêcher la texture de devenir pâteuse.",
      maturation: "Garde courte à moyenne pour harmoniser roast et texture céréalière.",
      profilRecherche: "Une stout souple et soyeuse, chocolatée et légèrement noisettée, où l’avoine enrichit la bouche sans transformer la bière en dessert sucré."
    }),
    sources: [BJCP.oatmealStout(), ba2026("Oatmeal Stout")]
  },

  "american-stout": {
    histoireEtOrigines: `L’American Stout est une création du mouvement craft et homebrew américain. Il reprend les stouts anglaises et irlandaises mais leur applique la logique qui transforme aussi Pale Ale et IPA aux États-Unis : davantage de houblon, davantage d’amertume, une torréfaction plus affirmée et une liberté accrue dans la composition du malt.

Le BJCP rappelle qu’une version homebrew de cette famille a autrefois été appelée « West Coast Stout », expression révélatrice du lien avec la culture brassicole de la côte Ouest. Contrairement à une Irish Stout où le houblon aromatique reste discret, l’American Stout peut afficher résine, agrumes ou autres signatures de houblons américains. Le grain torréfié peut évoquer café noir, chocolat amer ou légère brûlure, mais l’astringence excessive reste un défaut.

La catégorie est aujourd’hui moins omniprésente qu’à certaines périodes du boom craft, en partie parce que les Imperial Stouts, Black IPA et stouts aromatisées ont capté une partie de son territoire. Elle demeure néanmoins un style très instructif : une stout de force moyenne à élevée où roast et houblon sont tous deux des protagonistes.`,
    recette: recipe({
      maltsEtCereales: ["Malt 2-row américain en base ; chocolate, black malt, roasted barley et crystal/caramel selon l’équilibre recherché."],
      houblons: ["Houblons américains résineux, agrumés, floraux ou modernes, avec amertume moyenne à élevée et possibilité d’ajouts tardifs expressifs."],
      levuresEtMicroorganismes: ["Levure ale américaine propre, parfois souche anglaise plus fruitée mais atténuante."],
      profilEau: "Sulfate modéré pour soutenir l’amertume, chlorure suffisant pour ne pas amincir le corps, alcalinité ajustée aux grains noirs.",
      empatage: "Corps moyen à plein, mais bonne fermentescibilité nécessaire pour éviter qu’un houblonnage puissant ne repose sur une bière sirupeuse.",
      ebullitionEtHoublonnage: "Amertume forte et ajouts tardifs possibles ; rechercher une interaction nette entre houblon et roast plutôt qu’une simple superposition agressive.",
      fermentation: "Fermentation haute propre, esters bas, température contrôlée.",
      maturation: "Quelques semaines permettent d’arrondir black malt et amertume tout en conservant le houblon suffisamment frais.",
      profilRecherche: "Une stout américaine noire, amère et houblonnée, avec café, chocolat noir et résine/agrumes dans un équilibre volontairement musclé."
    }),
    sources: [BJCP.americanStout(), ba2026("American-Style Stout")]
  },

  "imperial-stout": {
    histoireEtOrigines: `L’Imperial Stout possède une vraie profondeur historique, mais son récit est souvent simplifié à l’excès. Ses racines se trouvent dans les porters et stouts britanniques très forts brassés pour l’export dès le XVIIIe siècle, notamment vers les marchés de la Baltique et de la Russie. Des bières de ce type ont effectivement circulé vers Saint-Pétersbourg et ont été associées à la cour impériale, mais il n’existe pas une recette unique « inventée pour Catherine II » qui serait l’ancêtre direct de toutes les Imperial Stouts modernes.

Après les guerres napoléoniennes et les transformations du commerce, une partie de ces bières fortes est également vendue sur le marché britannique. Le style décline ensuite avec la baisse générale des densités, les changements fiscaux et l’évolution des goûts. Certaines lignées comme Courage Imperial Russian Stout entretiennent néanmoins le souvenir du produit avant que la catégorie ne soit réinterprétée par les brasseurs du renouveau anglais puis, surtout, par le mouvement craft américain.

Le BJCP actuel insiste sur l’extrême amplitude des interprétations modernes. Certaines restent proches d’un profil britannique : malt riche, fruits noirs, esters, toffee et alcool fondu. D’autres poussent roast, amertume et houblons américains. Le vieillissement peut produire des notes vineuses ou de porto. La bière sert aussi de base à une immense famille de variantes en fûts de bourbon, avec café, cacao, vanille ou autres ingrédients.

Le défi technique n’est pas de faire « la bière la plus noire et la plus forte possible ». Une bonne Imperial Stout doit intégrer malt, roast, fruit, houblon et alcool en profondeur. La puissance sans équilibre donne une masse chaude, brûlée ou sirupeuse ; la garde peut aider, mais elle ne répare pas une fermentation défaillante.`,
    recette: recipe({
      profilUnique: false,
      explicationProfil: "Imperial Stout couvre un spectre anglais, américain et international. Les principes communs sont une forte densité, une grande profondeur sombre et une fermentation propre malgré l’alcool ; les niveaux de roast, houblon et fruit varient considérablement.",
      maltsEtCereales: ["Malt pale en base, proportions substantielles de chocolate, black malt ou roasted barley ; crystal/caramel et adjoints en flocons possibles selon l’école."],
      houblons: ["Houblons anglais ou américains, avec une amertume élevée nécessaire pour équilibrer la densité ; arôme allant de faible à très présent."],
      levuresEtMicroorganismes: ["Levure ale hautement viable et tolérante à l’alcool ; pitch massif, oxygénation et nutrition adaptés au moût très concentré."],
      profilEau: "Alcalinité suffisante pour le roast, chlorure pour la texture et sulfate pour l’amertume selon l’école ; éviter l’excès de minéralité qui rendrait alcool et torréfaction durs.",
      empatage: "Empâtage conçu pour conserver du corps tout en produisant suffisamment de sucres fermentescibles. Une bière trop dextrinique devient facilement écœurante à forte densité.",
      ebullitionEtHoublonnage: "Ébullition souvent longue pour concentrer et construire la profondeur ; amertume importante mais calculée avec la densité finale élevée.",
      fermentation: "Contrôle thermique strict, oxygénation parfois fractionnée selon le procédé, levure en excellente santé ; limiter alcools de fusel et sous-atténuation.",
      maturation: "De plusieurs semaines à plusieurs mois, parfois davantage. La garde doit intégrer alcool, fruit noir, roast et amertume ; surveiller l’oxydation qui peut apporter porto agréable puis carton si elle progresse trop.",
      profilRecherche: "Une stout très forte, noire et complexe où chocolat noir, café, fruits secs, malt riche, amertume et chaleur alcoolique forment un ensemble profond plutôt qu’une démonstration brute."
    }),
    sources: [BJCP.imperialStout(), ba2026("Imperial Stout / strong dark beer families")]
  },

  "british-imperial-stout": {
    histoireEtOrigines: `British Imperial Stout est une manière moderne de distinguer le pôle britannique de la grande famille Imperial Stout. Historiquement, les fortes stouts d’export britanniques peuvent présenter davantage de malt, de fruits de fermentation et de douceur que les versions craft américaines modernes. La Brewers Association maintient d’ailleurs une catégorie British-Style Imperial Stout séparée, dont la couleur peut aller du cuivre très sombre au noir et dont le malt riche, le toffee et le caramel jouent un rôle majeur.

Cette distinction ne signifie pas qu’il existe une frontière historique nette entre « British Imperial » et « Russian Imperial ». Les noms ont changé, les recettes ont évolué et les brasseries exportaient vers plusieurs marchés. La catégorie actuelle sert surtout à décrire un équilibre : esters de fruits noirs plus présents, houblon floral/herbacé moins agressif, roast souvent plus doux et une richesse maltée qui peut rappeler toffee, mélasse, pain noir et fruits secs.

Elle reste ainsi plus proche de certaines fortes stouts britanniques historiques et de leurs reprises modernes que du profil américain très café noir, très amer et houblonné.`,
    recette: recipe({
      maltsEtCereales: ["Pale ale malt britannique, crystal/caramel sombre, chocolate et malts noirs ; brown ou amber malt possibles pour une lecture historique plus maltée."],
      houblons: ["Houblons britanniques floraux, terreux ou herbacés ; amertume moyenne à forte mais généralement moins démonstrative que dans les versions américaines."],
      levuresEtMicroorganismes: ["Levure ale anglaise expressive et tolérante à l’alcool, apportant prune, raisin ou fruits rouges sans solvants."],
      profilEau: "Chlorure et alcalinité soutenant le malt sombre ; sulfate modéré afin de garder une amertume structurante mais non tranchante.",
      empatage: "Empâtage donnant un corps plein et une richesse de malt, tout en préservant assez de fermentescibilité pour éviter la lourdeur.",
      ebullitionEtHoublonnage: "Ébullition longue possible pour toffee et concentration ; houblonnage surtout en amertume avec finition britannique discrète.",
      fermentation: "Fermentation haute avec montée contrôlée de température ; accepter un fruité anglais mais éviter chaleur alcoolique rugueuse.",
      maturation: "Garde longue souvent bénéfique pour intégrer esters, fruits secs et caramel ; l’évolution vineuse peut être plaisante.",
      profilRecherche: "Une Imperial Stout riche et britannique : toffee, fruits noirs, chocolat, malt profond et alcool fondu, avec moins d’agressivité de roast et de houblon."
    }),
    sources: [ba2026("British-Style Imperial Stout"), BJCP.imperialStout("Imperial Stout — historical British lineage")]
  },

  "american-imperial-stout": {
    histoireEtOrigines: `L’American Imperial Stout est l’une des expressions emblématiques du mouvement craft américain. À partir des années 1980 et 1990, les brasseurs américains reprennent le concept des fortes stouts britanniques mais augmentent souvent simultanément densité, torréfaction, amertume et houblon aromatique. Le résultat devient une bière noire massive capable de supporter des quantités importantes de malt sombre et une garde prolongée.

Le style moderne s’éloigne ainsi de nombreuses versions britanniques par une signature plus agressive : café noir, cacao amer, black malt, parfois légère brûlure, amertume élevée et houblons américains résineux ou agrumés. Les niveaux d’alcool dépassent couramment ceux des stouts ordinaires et obligent à une conduite de fermentation beaucoup plus rigoureuse.

Cette base devient également centrale dans la culture du barrel-aged stout américain, en particulier avec les fûts de bourbon, puis dans les bières au café, cacao, vanille ou autres ingrédients. La fiche American Imperial Stout vise toutefois la bière de base : les variantes où le fût ou les ingrédients culinaires dominent appartiennent à d’autres catégories.

La puissance n’excuse pas le désordre. Une bonne version doit conserver une structure lisible malgré son intensité : le roast ne doit pas devenir cendreux, l’alcool ne doit pas brûler et le sucre résiduel ne doit pas transformer la bouche en sirop.`,
    recette: recipe({
      maltsEtCereales: ["Malt 2-row ou pale américain, roasted barley, black malt, chocolate malt et crystal/caramel selon la recette ; flocons possibles pour renforcer corps et mousse."],
      houblons: ["Houblons américains en amertume élevée ; variétés résineuses, agrumées ou modernes possibles en finition, même si leur expression diminuera avec la garde."],
      levuresEtMicroorganismes: ["Souche ale américaine ou autre levure très tolérante à l’alcool, avec ensemencement massif et excellente vitalité."],
      profilEau: "Équilibre chlorure/sulfate adapté à une bière à la fois pleine et amère ; alcalinité suffisante pour le grain noir.",
      empatage: "Empâtage plutôt fermentescible malgré la recherche de corps ; une très forte densité fournit déjà beaucoup de texture.",
      ebullitionEtHoublonnage: "Ébullition souvent longue et amertume élevée. Les ajouts tardifs doivent être pensés en fonction de la garde prévue, car le houblon frais s’atténue avec le temps.",
      fermentation: "Gestion de haute densité : oxygène, nutriments, levure en quantité, température contenue et temps suffisant pour atteindre une atténuation saine.",
      maturation: "Longue, souvent plusieurs mois. Les versions destinées à être bues jeunes gardent davantage de houblon ; les versions de garde gagnent en fruits noirs, chocolat et rondeur alcoolique.",
      profilRecherche: "Une stout impériale américaine massive mais nette : café noir, cacao amer, roast profond, forte amertume et alcool chaud mais propre."
    }),
    sources: [ba2026("American-Style Imperial Stout"), BJCP.imperialStout("Imperial Stout — American interpretation")]
  },

  "dessert-pastry-beer": {
    histoireEtOrigines: `Dessert Beer et Pastry Stout sont des catégories de la culture craft contemporaine, pas des styles historiques hérités d’une tradition régionale ancienne. L’idée consiste à prendre une bière sombre et généralement forte — souvent une Imperial Stout — puis à construire volontairement un profil rappelant pâtisseries, desserts, confiseries ou boissons gourmandes.

Les ingrédients deviennent alors un vocabulaire culinaire : cacao, café, vanille, noix de coco, sirop d’érable, fruits, cannelle, cacahuète, noisette, guimauve, biscuits, sucres ou lactose. La Brewers Association reconnaît désormais explicitement la catégorie Dessert or Pastry Beer et insiste sur trois points : une base sombre et forte, une richesse sucrée marquée et des ingrédients culinaires perceptibles. Les versions élevées en fût sont classées séparément lorsque le bois ou le spiritueux devient une dimension majeure.

Le terme « pastry stout » s’est popularisé avec l’explosion des bières craft très aromatisées et des collaborations de brasseries, mais il ne désigne pas une recette fixe. Deux bières portant ce nom peuvent n’avoir presque rien en commun en dehors d’une base sombre et d’une volonté de rappeler un dessert.

La difficulté technique est précisément de rester dans le domaine de la bière. Trop de sucre résiduel, de lactose ou d’extraits peut donner une boisson écœurante où fermentation, malt et amertume disparaissent. Les meilleures versions utilisent la stout comme une charpente, pas comme un simple véhicule à arômes.`,
    recette: recipe({
      profilUnique: false,
      explicationProfil: "Pastry/Dessert Beer est une catégorie de spécialité. Le dessert ciblé et les ingrédients définissent la recette ; il n’existe donc aucun grist universel.",
      maltsEtCereales: ["Base fréquemment proche d’une Imperial Stout : pale malt, chocolate, black/roasted grains, crystal ; avoine ou blé possibles pour texture et mousse."],
      houblons: ["Houblonnage généralement faible en arôme et modéré en amertume afin de ne pas concurrencer les ingrédients culinaires, tout en coupant la douceur."],
      levuresEtMicroorganismes: ["Levure ale robuste, adaptée aux fortes densités et capable d’achever correctement la fermentation malgré les additions."],
      ingredientsComplementaires: ["Cacao, café, vanille, noix de coco, fruits, épices, sirops, lactose, noix, guimauve ou autres ingrédients cohérents avec le dessert ciblé ; chaque ajout doit être documenté et maîtrisé."],
      profilEau: "Chlorures souvent favorisés pour la rondeur ; alcalinité adaptée au roast. Le sulfate doit rester assez bas pour ne pas créer une amertume sèche incompatible avec le dessert recherché.",
      empatage: "Corps plein mais pas nécessairement empâtage extrême : les ingrédients et sucres non fermentescibles apportent déjà beaucoup de densité sensorielle.",
      ebullitionEtHoublonnage: "Amertume de structure ; certains ingrédients tolèrent l’ébullition, d’autres doivent être ajoutés après fermentation pour préserver les arômes. La sécurité microbiologique des ajouts est essentielle.",
      fermentation: "Fermentation de forte densité menée proprement avant de charger la bière en ingrédients ; surveiller reprise de fermentation lors d’ajouts contenant des sucres fermentescibles.",
      maturation: "Variable. Les arômes de café, épices et fruits peuvent décliner rapidement, alors que cacao, vanille et alcool se fondent souvent avec une garde plus longue.",
      profilRecherche: "Une bière-dessert riche et assumée où l’idée pâtissière est évidente mais reste soutenue par une vraie structure de stout, sans lourdeur sucrée incontrôlée."
    }),
    sources: [ba2026("Dessert or Pastry Beer"), BJCP.imperialStout("Imperial Stout — common dark strong base")]
  },

  "coffee-stout-or-porter": {
    histoireEtOrigines: `Associer café et bière sombre semble presque évident sur le plan aromatique : la torréfaction du café dialogue avec les notes de café, cacao et pain grillé déjà produites par les malts foncés. Pourtant, Coffee Stout or Porter est une catégorie de spécialité moderne plutôt qu’un style historique codifié. La Brewers Association classe les bières au café selon la présence perceptible de café et demande de préciser la bière de base, le café employé et le procédé lorsqu’elles sont jugées en compétition.

La scène craft a exploré de nombreuses techniques : café infusé à froid, espresso, grains entiers, café moulu, ajout côté froid, macération en cuve, sélection de torréfactions claires ou sombres et parfois assemblage de plusieurs origines. Founders Breakfast Stout illustre bien cette approche : une stout à l’avoine et au chocolat utilisant deux types de café pour produire un caractère de café fraîchement torréfié.

Le choix du café change autant le résultat que sa quantité. Une torréfaction sombre peut renforcer cacao et amertume mais devenir cendreuse avec les malts noirs ; une torréfaction plus claire peut apporter fruit, acidité et floral. Le procédé d’extraction modifie amertume, acidité, huiles et stabilité aromatique. Le café est aussi sensible à l’oxydation : une bière spectaculaire jeune peut perdre rapidement son parfum.

La catégorie ne doit donc pas être réduite à « ajouter du café dans une stout ». Le brasseur doit construire un continuum entre le roast du grain et celui du café, en décidant ce qui vient du malt et ce qui vient réellement du produit ajouté.`,
    recette: recipe({
      profilUnique: false,
      explicationProfil: "La bière de base peut être Porter, Stout, Oatmeal Stout ou Imperial Stout ; le type de café et le procédé d’extraction font partie de la définition de chaque recette.",
      maltsEtCereales: ["Grist adapté à la bière de base ; chocolate malt et grains torréfiés doivent être choisis en tenant compte de la torréfaction du café pour éviter une accumulation de brûlé."],
      houblons: ["Amertume suffisante pour la base, généralement peu de houblon aromatique afin de garder le café lisible."],
      levuresEtMicroorganismes: ["Levure appropriée à la bière de base ; fermentation idéalement terminée proprement avant les ajouts froids de café."],
      ingredientsComplementaires: ["Café sous forme de cold brew, grains entiers, café fraîchement moulu ou extraction adaptée ; cacao, avoine ou lactose peuvent accompagner certaines recettes mais changent la catégorie sensorielle."],
      profilEau: "Le café apporte sa propre acidité. Une eau bien tamponnée et un pH de bière de base maîtrisé évitent qu’acidité du café et roast ne deviennent mordants.",
      empatage: "Selon la bière de base ; éviter de surcharger inutilement en malts noirs si le café doit fournir une part de la torréfaction.",
      ebullitionEtHoublonnage: "Le café est généralement mieux protégé lorsqu’il n’est pas longuement bouilli. Les ajouts tardifs ou côté froid permettent de préserver les arômes les plus volatils.",
      fermentation: "Fermentation complète et propre avant ajout de café lorsque celui-ci est ajouté à froid ; hygiène stricte pour éviter contamination et oxygénation.",
      maturation: "Souvent relativement courte pour préserver le café frais. Les Imperial Coffee Stouts peuvent gagner en intégration avec le temps mais perdent progressivement les notes les plus volatiles.",
      profilRecherche: "Un porter ou stout où le café est clairement identifiable mais intégré au malt : espresso, cacao, torréfaction et douceur doivent former une seule architecture."
    }),
    sources: [ba2026("Coffee Stout or Porter / Coffee Beer"), REF.foundersBreakfast, BJCP.americanStout("Stout base styles")]
  }
};
