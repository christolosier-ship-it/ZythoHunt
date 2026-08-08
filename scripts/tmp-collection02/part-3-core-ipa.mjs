import { ba2026, bjcp2021, REFERENCES } from "./sources.mjs";

export const part3 = {
  "juicy-hazy-strong-pale-ale": {
    histoireEtOrigines: `La Juicy or Hazy Strong Pale Ale est une catégorie de transition née de l’expansion rapide du langage « hazy ». Lorsque les techniques et profils aromatiques associés aux New England IPA se diffusent dans les années 2010, les brasseurs ne les appliquent pas uniquement aux IPA : ils déclinent également des pale ales plus légères et des strong pale ales dont la force se situe entre la pale ale ordinaire et l’IPA ou la Double IPA.

La Brewers Association distingue aujourd’hui plusieurs niveaux de force au sein des bières « juicy or hazy », ce qui reflète davantage la pratique commerciale qu’une lignée historique indépendante. Le principe reste le même : houblon très aromatique, amertume perçue douce, texture généreuse, trouble souvent important et fruité de fermentation compatible avec les huiles de houblon. La version « strong pale » ajoute de la densité et de l’alcool sans rechercher l’amertume tranchante d’une IPA américaine classique.

Comme pour toutes les bières hazy, la stabilité du trouble et la fraîcheur aromatique dépendent d’un ensemble complexe de protéines, polyphénols, levure, composition de l’eau et gestion de l’oxygène. Une bière simplement mal clarifiée n’est pas une Hazy Strong Pale Ale réussie.`,
    recette: {
      profilUnique: true,
      explicationProfil: "Même architecture qu’une Hazy Pale Ale, mais avec davantage de densité, de corps et d’alcool, sans basculer nécessairement dans l’intensité d’une Hazy IPA.",
      maltsEtCereales: [
        "Malt pale ou Pilsner comme base.",
        "Avoine et blé fréquents pour texture, protéines et trouble ; malt dextrinique possible en petite quantité.",
        "Crystal généralement évité afin de conserver un profil clair, fruité et non caramélisé."
      ],
      houblons: [
        "Variétés modernes riches en agrumes, fruits tropicaux ou fruits à noyau : Citra, Mosaic, Galaxy, Nelson Sauvin, Motueka, El Dorado et nombreuses alternatives.",
        "Whirlpool et dry-hop massifs, avec amertume classique modérée afin de préserver une perception douce."
      ],
      levuresEtMicroorganismes: [
        "Souche anglaise ou apparentée, fruitée, à atténuation moyenne à élevée et texture souple.",
        "Les esters doivent s’intégrer au houblon sans créer de lourdeur ou de caractère fermentaire confus."
      ],
      ingredientsComplementaires: [],
      profilEau: "Chlorure souvent dominant pour une bouche souple, sulfate modéré pour garder une finale suffisamment nette.",
      empatage: "Infusion visant un compromis entre fermentescibilité et corps. La bière doit rester buvable malgré une densité supérieure à celle d’une pale ale classique.",
      ebullitionEtHoublonnage: "Charge amérisante contenue ; forte extraction aromatique au whirlpool et à cru. Limiter température et durée de contact pour éviter brûlure végétale et polyphénols excessifs.",
      fermentation: "Fermentation haute fruitée, avec contrôle précis de la température et protection de l’oxygène dès la fin de fermentation active.",
      maturation: "Très courte et en circuit fermé autant que possible. Conditionnement frais indispensable.",
      profilRecherche: "Une strong pale ale trouble, moelleuse et très fruitée, plus ample qu’une Hazy Pale Ale mais toujours plus facile et moins agressive qu’une IPA puissante."
    },
    sources: [ba2026("Juicy or Hazy Strong Pale Ale"), REFERENCES.lallemandVerdant, REFERENCES.alchemist]
  },

  "kolsch": {
    histoireEtOrigines: `Kölsch est à la fois un style de bière et une appellation géographique intimement liée à Cologne. La ville possède une tradition brassicole médiévale ancienne, mais la Kölsch telle qu’on la comprend aujourd’hui est bien plus récente : elle se développe lorsque les brasseurs colognais de fermentation haute doivent répondre, aux XIXe et XXe siècles, à la concurrence croissante des lagers pâles. Ils conservent une levure d’ale mais recherchent une bière très claire, sèche, délicate et souvent maturée à froid.

Le German Brewers’ Association rappelle l’importance historique de la corporation des brasseurs de Cologne et la protection juridique de l’appellation. La Kölsch-Konvention, conclue en 1985 entre producteurs, formalise notamment l’usage du nom pour une bière claire de fermentation haute brassée dans la région autorisée ; la dénomination bénéficie également d’une protection géographique européenne. Il existe quelques situations historiques bénéficiant d’une antériorité, mais le principe reste celui d’un lien territorial fort.

La culture de service est presque aussi importante que la recette. La Kölsch est traditionnellement servie dans une Stange, verre cylindrique étroit d’environ 20 cl, par les Köbes des brasseries et tavernes de Cologne. Les petits verres sont renouvelés rapidement afin que la bière reste fraîche et pétillante. Cette combinaison d’ale fermentée relativement fraîche, de garde froide et de service local explique pourquoi Kölsch semble parfois située entre ale et lager sans être une fermentation basse.`,
    recette: {
      profilUnique: true,
      explicationProfil: "Ale allemande très pâle et subtile : fermentation haute propre, atténuation élevée et maturation froide pour une précision presque lager-like.",
      maltsEtCereales: [
        "Malt Pilsner très pâle dominant.",
        "Petite proportion de blé possible dans certaines recettes pour mousse et texture, mais non indispensable.",
        "Malts caramélisés ou fortement toastés doivent rester absents ou imperceptibles."
      ],
      houblons: [
        "Houblons allemands ou continentaux nobles et apparentés, avec amertume basse à modérée et aromatique délicate.",
        "Le houblon ne doit pas rivaliser avec la finesse de la fermentation et du malt."
      ],
      levuresEtMicroorganismes: [
        "Saccharomyces cerevisiae de type Kölsch, fermentée plus fraîche que de nombreuses ales.",
        "Profil très propre avec fruité discret ; une légère note vineuse ou de pomme peut apparaître selon la souche."
      ],
      ingredientsComplementaires: [],
      profilEau: "Eau relativement douce à modérément minérale et faible en alcalinité afin de préserver la pâleur et la délicatesse.",
      empatage: "Infusion simple ou paliers légers, orientés vers une bonne atténuation et un corps léger.",
      ebullitionEtHoublonnage: "Houblonnage sobre, principalement pour équilibrer la céréale et apporter une touche florale ou herbacée.",
      fermentation: "Fermentation haute dans la zone fraîche de la souche, puis fin de fermentation complète avant refroidissement.",
      maturation: "Garde froide de plusieurs semaines fréquente afin d’affiner le profil, clarifier la bière et réduire les notes fermentaires.",
      profilRecherche: "Une bière colonaise très pâle, brillante, sèche et délicate, où céréale, fermentation et houblon restent subtils mais présents."
    },
    sources: [bjcp2021("5B Kölsch", "5/pale-bitter-european-beer/"), ba2026("German-Style Koelsch"), REFERENCES.germanBrewersKolsch]
  },

  "session-ipa": {
    histoireEtOrigines: `La Session IPA apparaît au début du XXIe siècle comme une réponse à l’escalade de force des IPA américaines. Alors que Double et Imperial IPA poussent alcool et houblon vers le haut, certains brasseurs souhaitent conserver l’arôme, la sécheresse et l’amertume d’une IPA dans une bière capable d’être bue en plusieurs pintes. Le terme « session » vient d’une culture britannique de consommation en séance, mais son association explicite avec l’IPA est principalement une construction craft moderne.

La catégorie reste délicate car une IPA moins forte peut facilement devenir une American Pale Ale simplement plus amère. La Brewers Association fixe aujourd’hui une limite de 5,0 % vol. pour ses compétitions et demande d’identifier le style d’IPA sous-jacent. Le BJCP traite également la Session IPA comme une Specialty IPA de force réduite. Le défi est donc de conserver une intensité houblonnée de type IPA sans corps maigre, verdeur ou amertume disproportionnée.

Une bonne Session IPA travaille autant la texture que la quantité de houblon : malts suffisamment expressifs, eau ajustée, empâtage évitant une attenuation excessive et dry-hop propre permettent de maintenir la sensation de bière complète malgré une densité réduite.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA de force réduite, généralement sous 5 % vol., qui doit conserver le langage aromatique et l’équilibre houblonné de son style de base.",
      maltsEtCereales: [
        "Malt pale ou Pilsner comme base, parfois complété de Vienna, Munich léger, blé ou avoine pour éviter un corps trop mince.",
        "Crystal faible ou absent dans les versions sèches modernes."
      ],
      houblons: [
        "Même famille de houblons que l’IPA sous-jacente, mais dosage et amertume ajustés à la faible densité.",
        "Whirlpool et dry-hop importants pour maximiser l’arôme sans devoir augmenter brutalement les IBU."
      ],
      levuresEtMicroorganismes: [
        "Souche propre et atténuante, américaine ou anglaise selon le profil ; une fermentation trop sèche peut accentuer la maigreur."
      ],
      ingredientsComplementaires: [],
      profilEau: "Sulfate et chlorure équilibrés selon l’école, avec assez de chlorure pour préserver la texture et assez de sulfate pour une finale nette.",
      empatage: "Souvent légèrement plus chaud qu’une IPA standard afin de conserver du corps, sans produire une douceur collante.",
      ebullitionEtHoublonnage: "Amertume soigneusement calibrée par rapport à la densité ; priorité aux ajouts tardifs et au dry-hop pour conserver l’impact aromatique.",
      fermentation: "Fermentation haute propre et rapide, avec contrôle de l’oxygène après fermentation.",
      maturation: "Très courte ; conditionnement frais pour éviter la perte d’arôme.",
      profilRecherche: "Une IPA authentiquement houblonnée et sèche, mais légère en alcool et suffisamment équilibrée pour rester une bière de session."
    },
    sources: [ba2026("Session India Pale Ale"), bjcp2021("21B Specialty IPA — Session strength", "21/21B/specialty-ipa/"), REFERENCES.sierraPale]
  },

  "english-ipa": {
    histoireEtOrigines: `L’English IPA est la descendante la plus directe des pale ales de stock expédiées vers l’Inde britannique au XIXe siècle. Son histoire ne commence pourtant pas par une invention soudaine. Des pale ales bien houblonnées étaient déjà envoyées en Inde avant que le nom IPA ne se fixe, et George Hodgson doit surtout son importance à sa position commerciale près des docks de l’East India Company. Le récit selon lequel il aurait créé une bière exceptionnellement forte uniquement pour survivre au voyage est aujourd’hui considéré comme trop simplificateur.

Dans les années 1820, Burton upon Trent devient un centre majeur de l’IPA. Des brasseries comme Allsopp et Bass utilisent une eau naturellement riche en sulfates, qui accentue la sécheresse et la netteté de l’amertume. Les bières destinées au marché indien sont pâles, fortement atténuées et généreusement houblonnées, souvent avec des houblons anglais. Leur succès finit aussi par nourrir un marché britannique domestique.

Le style décline et se transforme au XXe siècle : de nombreuses « IPA » britanniques deviennent plus faibles, parfois proches d’une Bitter. La renaissance craft remet ensuite en circulation des versions plus fortes et plus sèches, mais celles-ci doivent être distinguées des American IPA. Une English IPA moderne privilégie encore les malts et houblons britanniques, des esters modérés, une amertume franche et un équilibre plus terreux, floral ou marmelade que tropical.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA britannique sèche, bien atténuée et houblonnée, avec ingrédients et fermentation typiquement anglais plutôt qu’un profil américain tropical.",
      maltsEtCereales: [
        "Pale ale malt britannique dominant, historiquement assez clair et capable de produire un profil de pain et biscuit.",
        "Crystal faible ou nul dans les interprétations historiques ; certaines versions modernes en utilisent modestement pour couleur et toffee léger.",
        "Sucres de brasserie possibles pour favoriser l’atténuation dans certaines traditions."
      ],
      houblons: [
        "East Kent Goldings, Fuggles, Challenger, Target, Northdown ou autres houblons britanniques et apparentés.",
        "Amertume ferme, houblon tardif et dry-hop historiquement plausibles dans les pale ales de stock."
      ],
      levuresEtMicroorganismes: [
        "Souche anglaise bien atténuante, avec esters modérés de fruits et bonne floculation."
      ],
      ingredientsComplementaires: [],
      profilEau: "Profil souvent riche en sulfate dans l’esprit de Burton afin de tendre la finale et donner une amertume sèche, sans minéralité agressive.",
      empatage: "Infusion orientée vers une bonne fermentescibilité et un corps moyen-léger.",
      ebullitionEtHoublonnage: "Amertume soutenue dès la chaudière, puis ajouts aromatiques anglais ; dry-hop possible pour reproduire la logique des pale ales de stock.",
      fermentation: "Fermentation haute avec fruité maîtrisé et atténuation élevée.",
      maturation: "Les versions modernes sont souvent consommées fraîches ; les pale ales de stock historiques pouvaient être gardées beaucoup plus longtemps et développer un profil différent.",
      profilRecherche: "Une IPA anglaise sèche, amère et élégante, où biscuit, marmelade, fleurs, herbes et esters britanniques remplacent le tropical massif des versions modernes américaines."
    },
    sources: [bjcp2021("12C English IPA", "12/pale-commonwealth-beer/"), ba2026("English-Style India Pale Ale"), REFERENCES.camraIpa, REFERENCES.fermentisS04]
  },

  "american-ipa": {
    histoireEtOrigines: `L’American IPA est l’une des créations emblématiques du craft américain, mais elle ne naît pas immédiatement sous ce nom. Anchor Liberty Ale, brassée en 1975 avec Cascade, montre tôt le potentiel aromatique des houblons américains dans une ale pâle. Sierra Nevada Pale Ale, à partir de 1980-1981, élargit encore le public de ces caractères d’agrumes et de pin. Pendant les années 1980 et 1990, les brasseurs poussent progressivement densité, amertume et houblonnage au-delà de la Pale Ale.

La redécouverte des IPA britanniques historiques fournit un vocabulaire, mais les États-Unis réinventent profondément le style. Cascade, Centennial, Chinook, Columbus, Simcoe et plus tard Amarillo, Citra, Mosaic ou d’autres variétés imposent des profils inconnus des IPA anglaises classiques. L’American IPA devient dorée à ambrée, sèche, amère, propre en fermentation et massivement aromatique. Les années 1990-2000 voient le style devenir un étendard de la côte Ouest avant qu’il se diversifie à l’échelle nationale.

L’American IPA moderne est aujourd’hui une catégorie centrale dont dérivent Double IPA, Session IPA et de nombreuses Specialty IPA. Le BJCP la distingue de la Hazy IPA : elle doit rester plus sèche, plus nette dans l’amertume, avec une fermentation généralement plus neutre et un malt de soutien. Les versions récentes ont souvent réduit crystal malt et couleur par rapport aux exemples classiques du début du craft.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA américaine standard : houblon intense, amertume franche, fermentation propre et finale sèche, avec un malt de soutien plutôt que dominant.",
      maltsEtCereales: [
        "Malt two-row ou pale américain dominant.",
        "Crystal/caramel historiquement courant mais aujourd’hui souvent réduit ou supprimé ; Vienna ou Munich léger possibles en faible proportion.",
        "Sucre simple parfois utilisé en petite quantité pour augmenter l’atténuation dans les versions plus fortes."
      ],
      houblons: [
        "Cascade, Centennial, Chinook, Columbus, Simcoe, Amarillo, Citra, Mosaic et nombreuses variétés américaines ou du Nouveau Monde.",
        "Amertume moyenne-forte à forte, gros ajouts tardifs, whirlpool et dry-hop."
      ],
      levuresEtMicroorganismes: [
        "Souche américaine neutre et atténuante, limitant les esters afin de laisser le houblon dominer."
      ],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité ; sulfate souvent élevé par rapport au chlorure pour une finale sèche et une amertume nette, avec adaptation aux houblons modernes pour éviter la dureté.",
      empatage: "Infusion simple relativement basse à modérée pour favoriser une forte atténuation.",
      ebullitionEtHoublonnage: "Amertume de chaudière ou extraits de houblon propres, puis plusieurs couches tardives et dry-hop. Les versions modernes déplacent davantage de matière vers le whirlpool et le froid.",
      fermentation: "Fermentation haute propre, gestion stricte des températures et de l’oxygène.",
      maturation: "Courte ; cold crash et conditionnement sous faible oxygène. La fraîcheur est essentielle.",
      profilRecherche: "Une IPA sèche et tranchante, intensément aromatique et amère, où le malt soutient le houblon sans créer de douceur lourde."
    },
    sources: [bjcp2021("21A American IPA", "21/"), ba2026("American-Style India Pale Ale"), REFERENCES.smithsonianLiberty, REFERENCES.sierraPale, REFERENCES.sierraStory]
  },

  "new-zealand-ipa": {
    histoireEtOrigines: `La New Zealand IPA est une spécialisation récente de l’IPA moderne, construite autour des houblons néo-zélandais. Elle prend forme lorsque des variétés comme Nelson Sauvin, Motueka, Riwaka et plus récemment Nectaron acquièrent une réputation internationale pour leurs caractères de raisin blanc, citron vert, fruits tropicaux, agrumes et fruits à noyau. Les brasseurs découvrent qu’elles peuvent donner une IPA très expressive sans reproduire exactement les profils résineux ou agrumés de la côte Ouest américaine.

La Brewers Association a reconnu les styles New Zealand Pale Ale et New Zealand IPA dans ses guidelines à partir de 2021, signe que cette école est devenue suffisamment identifiable pour être jugée séparément. Elle n’est toutefois pas une tradition nationale ancienne : c’est une catégorie craft fondée sur la provenance et le profil aromatique des houblons.

Une New Zealand IPA peut être claire ou légèrement voilée, très sèche ou plus souple selon la brasserie. L’élément déterminant est que les caractères des variétés néo-zélandaises restent au premier plan et que l’intensité corresponde à une IPA, pas simplement à une pale ale enrichie.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA moderne centrée sur les houblons néo-zélandais et leurs profils distinctifs de citron vert, raisin, fruits tropicaux et fruits à noyau.",
      maltsEtCereales: [
        "Malt pale ou Pilsner comme base claire ; petite proportion de Vienna possible pour soutenir les fruits sans caramel lourd.",
        "Avoine ou blé possibles dans les versions plus souples, mais pas nécessaires."
      ],
      houblons: [
        "Nelson Sauvin, Motueka, Riwaka, Nectaron, Wai-iti, Pacifica et autres variétés de Nouvelle-Zélande.",
        "Combinaison d’amertume nette, whirlpool et dry-hop ; le choix variétal doit rester identifiable."
      ],
      levuresEtMicroorganismes: [
        "Souche d’ale propre pour une version claire, ou souche fruitée modérée pour une interprétation plus douce."
      ],
      ingredientsComplementaires: [],
      profilEau: "Faible alcalinité ; sulfate modéré pour la netteté, chlorure suffisant pour préserver le fruit et la texture.",
      empatage: "Infusion simple orientée vers une bonne atténuation.",
      ebullitionEtHoublonnage: "Amertume moyenne-forte, puis forte charge aromatique tardive et à cru. Éviter une extraction végétale qui masquerait les caractères délicats de certaines variétés.",
      fermentation: "Fermentation haute propre et gestion stricte de l’oxygène après fermentation.",
      maturation: "Très courte ; service frais pour conserver les thiols et huiles les plus volatils.",
      profilRecherche: "Une IPA où le terroir variétal néo-zélandais se lit immédiatement : agrumes, raisin, fruits tropicaux ou à noyau sur une base sèche et nette."
    },
    sources: [ba2026("New Zealand-Style India Pale Ale"), REFERENCES.nzMotueka, bjcp2021("21A American IPA — structural comparison", "21/")]
  },

  "west-coast-ipa": {
    histoireEtOrigines: `West Coast IPA désigne l’école qui a façonné l’image de l’IPA américaine classique sur la côte Pacifique. Elle ne possède pas un acte de naissance unique, mais une généalogie claire : Anchor Liberty Ale en 1975 montre la force aromatique de Cascade ; Sierra Nevada Pale Ale popularise un houblon américain très expressif au début des années 1980 ; puis les brasseries de Californie, de l’Oregon et de Washington augmentent progressivement l’amertume, la sécheresse et le dry-hop.

Dans les années 1990 et 2000, la côte Ouest devient synonyme de bières très claires à ambrées, résineuses, agrumées et fortement amères. San Diego pousse particulièrement loin cette esthétique de sécheresse et d’intensité. L’essor des Double IPA, avec les premiers essais de Vinnie Cilurzo puis Pliny the Elder, appartient au même mouvement de surenchère maîtrisée du houblon.

Le style évolue ensuite face au succès des Hazy IPA. Les West Coast IPA contemporaines sont souvent plus pâles et encore plus sèches que leurs ancêtres, avec moins de crystal malt, une amertume parfois moins massive mais plus propre, et des houblons modernes pouvant apporter des fruits tropicaux en plus du pin et des agrumes. Ce qui persiste est la clarté de la fermentation, la sécheresse et une amertume explicitement présente.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA claire, sèche et tranchante, où l’amertume reste assumée et le houblon s’exprime avec netteté plutôt qu’avec la douceur d’une Hazy IPA.",
      maltsEtCereales: [
        "Malt pale ou Pilsner comme base ; les versions historiques pouvaient employer davantage de crystal, les versions modernes tendent à l’éviter.",
        "Petite proportion de Vienna ou Munich clair possible pour le soutien malté sans sucrosité."
      ],
      houblons: [
        "Cascade, Centennial, Chinook, Columbus et Simcoe pour le registre classique ; Citra, Mosaic, Strata, Idaho 7 et autres variétés modernes peuvent compléter le profil.",
        "Amertume franche et propre, forte charge au whirlpool et dry-hop, avec objectif de clarté aromatique."
      ],
      levuresEtMicroorganismes: [
        "Souche américaine très propre et fortement atténuante."
      ],
      ingredientsComplementaires: [],
      profilEau: "Sulfate souvent nettement supérieur au chlorure pour accentuer la sécheresse et la précision de l’amertume ; éviter toutefois les niveaux qui produisent une dureté minérale.",
      empatage: "Infusion plutôt basse ou modérée pour une forte fermentescibilité et une finale sèche.",
      ebullitionEtHoublonnage: "Amertume construite proprement, puis couches aromatiques tardives et dry-hop. Les techniques modernes cherchent à maximiser l’arôme tout en limitant polyphénols et oxygène.",
      fermentation: "Fermentation haute très nette ; contrôle précis de température et atténuation complète.",
      maturation: "Courte, avec clarification et conditionnement sous CO₂. La bière doit être servie très fraîche.",
      profilRecherche: "Une IPA limpide à légèrement voilée, sèche et mordante, avec un houblon intense, précis et une amertume qui structure durablement la finale."
    },
    sources: [ba2026("West Coast-Style India Pale Ale"), REFERENCES.smithsonianLiberty, REFERENCES.sierraPale, REFERENCES.russianRiverPliny]
  },

  "neipa-juicy-hazy-ipa": {
    histoireEtOrigines: `La New England IPA, aujourd’hui souvent appelée Hazy IPA ou Juicy IPA, se développe dans le Nord-Est des États-Unis au tournant des années 2000. Heady Topper, brassée par John Kimmich à The Alchemist à Waterbury, devient une référence majeure de cette nouvelle approche. La bière privilégie une énorme intensité aromatique de houblon et une amertume perçue moins dure que les West Coast IPA de l’époque. The Alchemist ouvre son brewpub en 2003 puis une petite brasserie de production en 2011, période durant laquelle la réputation de Heady Topper explose.

Le phénomène dépasse rapidement le Vermont. D’autres brasseries du Nord-Est développent des IPA troubles, riches en fruits tropicaux et agrumes, utilisant souvent des souches anglaises fruitées, des céréales riches en protéines et de très gros houblonnages tardifs. Dans les années 2010, « NEIPA » devient un mouvement mondial. Le BJCP emploie aujourd’hui Hazy IPA, considérant que le style a dépassé son origine géographique.

Le trouble est un résultat volontaire de la formulation et du procédé, mais il ne suffit pas à définir le style. Une Hazy IPA réussie doit être fruitée, souple et massivement houblonnée sans être sucrée, farineuse ou chargée de particules. L’oxydation est son ennemi principal : une exposition à l’air peut brunir la bière et transformer rapidement les arômes frais en notes ternes ou confites.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA trouble et très aromatique, à amertume perçue plus douce, bouche souple et interaction forte entre céréales, levure et houblon.",
      maltsEtCereales: [
        "Malt pale ou Pilsner comme base claire.",
        "Avoine et blé fréquents pour protéines, texture et stabilité du trouble ; malt dextrinique possible avec retenue.",
        "Crystal généralement absent afin d’éviter caramel et couleur sombre."
      ],
      houblons: [
        "Citra, Mosaic, Galaxy, El Dorado, Nelson Sauvin, Motueka et autres variétés fortement fruitées.",
        "Amertume classique limitée à modérée ; très fortes additions au whirlpool et en dry-hop."
      ],
      levuresEtMicroorganismes: [
        "Souches anglaises ou apparentées, fruitées et relativement peu floculantes à moyennement floculantes, capables de produire une bouche souple.",
        "Verdant IPA illustre une souche moderne offrant abricot, fruits tropicaux et agrumes avec atténuation moyenne à élevée."
      ],
      ingredientsComplementaires: [],
      profilEau: "Chlorure généralement dominant pour adoucir la bouche, sulfate modéré pour conserver de la définition ; faible alcalinité.",
      empatage: "Infusion visant un corps moyen sans finir sucré. La texture vient autant des protéines et de l’eau que d’un haut niveau de sucres résiduels.",
      ebullitionEtHoublonnage: "Peu de houblon amérisant classique, gros whirlpool à température contrôlée, puis un ou plusieurs dry-hops. La prévention du hop burn et de l’oxydation est centrale.",
      fermentation: "Fermentation haute fruitée. Le moment du dry-hop peut varier ; certains ajouts pendant fermentation favorisent certaines transformations aromatiques, mais ils ne sont pas obligatoires.",
      maturation: "Très courte, transferts fermés et conditionnement sous CO₂. Pas de vieillissement prolongé.",
      profilRecherche: "Une IPA opaque mais lumineuse, saturée d’arômes de fruits frais, souple en bouche, peu agressive dans l’amertume et extrêmement fraîche."
    },
    sources: [bjcp2021("21C Hazy IPA", "21/"), ba2026("Juicy or Hazy India Pale Ale"), REFERENCES.alchemist, REFERENCES.lallemandVerdant]
  },

  "double-imperial-ipa": {
    histoireEtOrigines: `La Double ou Imperial IPA est une création américaine des années 1990. Vinnie Cilurzo, alors à Blind Pig Brewing, est souvent crédité d’un des premiers exemples en 1994. L’idée est simple mais techniquement exigeante : augmenter densité et houblon tout en évitant qu’une IPA plus forte devienne sirupeuse, brûlante ou simplement excessivement amère.

Russian River documente une étape importante en 2000. Pour le premier Double IPA Festival organisé par le Bistro à Hayward, plusieurs brasseries sont invitées à produire une bière adaptée à cette catégorie encore neuve. Cilurzo brasse alors Pliny the Elder chez Russian River, après son expérience de Blind Pig. Le festival contribue à donner une visibilité et un langage commun à ce qui devient rapidement un style central du craft américain.

La Double IPA classique associe une forte charge de houblon, un alcool élevé et une finale sèche. Contrairement à l’image d’une simple « IPA x2 », elle doit contrôler le malt résiduel et la chaleur alcoolique. Le BJCP la place aujourd’hui dans les Strong American Ale plutôt que dans les Specialty IPA, signe que le style s’est stabilisé.`,
    recette: {
      profilUnique: true,
      explicationProfil: "IPA américaine forte, très houblonnée et fortement atténuée : puissance sans lourdeur ni chaleur alcoolique agressive.",
      maltsEtCereales: [
        "Malt pale ou two-row dominant, avec peu de malts caramélisés.",
        "Sucre simple fréquent pour augmenter la densité initiale tout en maintenant une finale sèche.",
        "Vienna ou Munich clair possibles en faible proportion pour soutenir la structure."
      ],
      houblons: [
        "Très forte charge de houblons américains ou du Nouveau Monde, avec combinaison d’amertume, whirlpool et dry-hop.",
        "Les variétés classiques comprennent Simcoe, Centennial, Columbus et Amarillo ; les versions modernes utilisent aussi Citra, Mosaic, Strata et bien d’autres."
      ],
      levuresEtMicroorganismes: [
        "Souche américaine propre, fortement atténuante et suffisamment tolérante à l’alcool."
      ],
      ingredientsComplementaires: [
        "Sucres simples possibles et souvent utiles pour assécher la bière sans augmenter excessivement le corps."
      ],
      profilEau: "Faible alcalinité, sulfate souvent élevé pour une finale nette, avec chlorure suffisant pour éviter une impression mince ou abrasive.",
      empatage: "Empâtage orienté vers une forte fermentescibilité ; l’objectif est d’éviter un résiduel sucré malgré la forte densité initiale.",
      ebullitionEtHoublonnage: "Amertume significative mais propre, puis énormes charges tardives et à cru. L’extraction doit être gérée pour éviter astringence et hop burn.",
      fermentation: "Ensemencement généreux, oxygénation suffisante et contrôle thermique strict afin de limiter alcools supérieurs et fermentation incomplète.",
      maturation: "Courte à moyenne pour finir proprement la fermentation, mais consommation rapide ensuite afin de préserver le houblon.",
      profilRecherche: "Une IPA puissante, sèche et explosive en houblon, où l’alcool renforce l’intensité sans produire de lourdeur ou de chaleur dominante."
    },
    sources: [bjcp2021("22A Double IPA", "22/strong-american-ale/"), ba2026("Imperial or Double India Pale Ale"), REFERENCES.russianRiverPliny]
  }
};
