import { entry, source, BA, BJCP } from "./collection-08-common.mjs";

export default {
  "sahti": entry({
    histoire: `Sahti est une tradition finlandaise de bière domestique et festive qui a survécu à l'industrialisation beaucoup mieux que de nombreux autres farmhouse beers européens. Elle reste liée aux mariages, fêtes familiales et communautés rurales, avec des recettes transmises localement plutôt qu'un standard national unique.

Le BJCP décrit une bière souvent forte, trouble, peu ou pas houblonnée, filtrée à travers du genévrier ou brassée avec des branches/baies de genévrier, et fréquemment fermentée avec de la levure de boulanger finlandaise. Le moût peut ne pas être bouilli, ce qui change profondément microbiologie, stabilité et expression céréalière. Banane, épices de levure, pain de seigle et genévrier peuvent coexister, mais le résultat ne doit pas être assimilé à une Weizen allemande.

La production commerciale moderne existe, notamment chez Lammin Sahti depuis 1985, mais le cœur culturel du style reste domestique et régional.`,
    malts: ["Malt d'orge majoritaire ; seigle fréquent ; avoine ou autres céréales possibles selon tradition familiale."],
    hops: ["Houblon faible ou absent ; le genévrier assure souvent une partie de l'aromatique et de la structure."],
    yeast: ["Levure de boulanger finlandaise traditionnellement fréquente ; souches ale ou kveik-like possibles dans les interprétations modernes."],
    extras: ["Branches et/ou baies de genévrier ; parfois pain ou autres ingrédients domestiques selon tradition."],
    water: "Eau locale douce à modérément minérale ; le genévrier peut intervenir aussi dans l'eau de rinçage.",
    mash: "Empâtage par paliers, souvent avec montée progressive de température et filtration rustique à travers un kuurna garni de genévrier.",
    boil: "Le moût traditionnel peut ne pas être bouilli ou seulement chauffé ; houblonnage absent ou très faible.",
    fermentation: "Fermentation chaude et rapide, souvent avec levure de boulanger, recherchant un profil fruité-épicé distinctif.",
    maturation: "Très courte et au froid ; le Sahti se consomme jeune car sa stabilité microbiologique et oxydative est limitée.",
    target: "Une bière finlandaise dense mais vivante, céréalière, fruitée et résineuse, où genévrier et fermentation dominent sans amertume moderne.",
    sources: [BJCP("Historical Beer: Sahti"), source("Lammin Sahti", "History and continuous commercial production since 1985", "https://www.sahti.fi/en/historiaa", "source_producteur_historique")]
  }),

  "gotlandsdricke": entry({
    histoire: `Gotlandsdricke — littéralement « boisson de Gotland » — appartient aux traditions de bière domestique nordique de l'île suédoise de Gotland. Comme le Sahti finlandais ou certains kornøl norvégiens, il ne possède pas une recette réglementée unique : chaque ferme ou famille peut avoir son assemblage de céréales, son niveau de fumée, sa quantité de genévrier et sa méthode de filtration.

Le fil conducteur historique est une boisson maltée rustique, souvent brassée avec du malt fumé, du genévrier et parfois du miel ou du sucre. Les branches de genévrier peuvent servir à aromatiser l'eau, constituer un lit filtrant ou être intégrées directement au procédé. La fermentation est traditionnellement chaude et la bière consommée relativement jeune.

Les versions craft contemporaines qui portent ce nom sont donc des interprétations d'une culture de brassage domestique, pas les représentants d'un profil sensoriel fixé au dixième d'IBU.`,
    unique: false,
    explication: "Tradition domestique de Gotland très variable ; le profil dépend de la ferme, du maltage, de la fumée, du genévrier et de la fermentation.",
    malts: ["Orge maltée ; seigle ou autres céréales possibles ; malt fumé fréquent mais intensité très variable."],
    hops: ["Houblon historiquement secondaire et variable, parfois combiné au genévrier."],
    yeast: ["Levures domestiques, de boulanger ou ales adaptées à une fermentation chaude."],
    extras: ["Genévrier, parfois miel ou sucre ; recettes familiales très diverses."],
    water: "Eau locale, souvent infusée avec branches de genévrier.",
    mash: "Empâtage rustique ou multi-palier ; filtration possible à travers branches de genévrier.",
    boil: "Ébullition variable selon tradition familiale ; certains procédés sont moins standardisés que le brassage industriel.",
    fermentation: "Fermentation haute et relativement chaude.",
    maturation: "Courte ; consommation jeune, parfois après quelques semaines de repos.",
    target: "Une farmhouse ale gotlandaise expressive, céréalière, résineuse et éventuellement fumée, sans prétendre à une formule universelle.",
    sources: [BA("Gotlandsdricke / Historical or Indigenous Beer"), source("Lars Marius Garshol", "Nordic farmhouse brewing traditions", "https://www.garshol.priv.no/blog/", "source_historique_secondaire")]
  }),

  "breslau-schoeps": entry({
    histoire: `Schöps ou Schoeps désigne une forte bière de blé historiquement associée à Breslau, aujourd'hui Wrocław en Pologne. Sa réputation est attestée dès l'époque moderne et, aux XVIe-XVIIIe siècles, le nom de Breslauer Schöps devient suffisamment célèbre pour circuler bien au-delà de la Silésie.

Les descriptions historiques ne correspondent pas à une Weissbier bavaroise moderne : la proportion de blé pouvait être très élevée, le malt dominait, et la fermentation n'était pas censée produire la signature banane-girofle d'une levure Weizen. Des versions pâles et sombres ont existé ; les reconstructions modernes peuvent donc différer fortement en couleur tout en partageant une texture pleine et un profil de blé malté.

Comme pour de nombreux styles disparus, les chiffres précis proviennent de sources de différentes périodes. La fiche doit donc présenter Schöps comme une famille historique reconstruite, non comme une recette figée.`,
    unique: false,
    explication: "Style historique disparu avec versions pâles et sombres ; les reconstructions varient fortement selon la période et la source choisies.",
    malts: ["Très forte proportion de malt de blé, parfois autour de 70-80 % dans les reconstructions ; Pilsner/pale et malts toastés ou sombres selon version."],
    hops: ["Houblonnage faible à modéré, européen, restant derrière le malt."],
    yeast: ["Levure ale neutre à légèrement fruitée ; profil Weizen banane/girofle non recherché."],
    water: "Eau modérément minérale, adaptée à une forte charge de blé.",
    mash: "Empâtage multi-palier conseillé pour gérer une proportion élevée de blé et une texture pleine.",
    fermentation: "Fermentation haute propre.",
    maturation: "Modérée, afin de fondre la forte richesse céréalière.",
    target: "Une forte wheat ale silésienne riche et maltée, sans phénols de Weissbier, dont la couleur peut aller du pâle au très sombre selon reconstruction.",
    sources: [BA("Breslau-Style Schoeps"), source("Catalog.beer", "Breslau-Style Schoeps — historical synthesis", "https://www.catalog.beer/style/schoeps", "source_historique_secondaire")]
  }),

  "grape-ale-italian-grape-ale": entry({
    histoire: `L'Italian Grape Ale (IGA) est une création brassicole contemporaine italienne née du dialogue entre deux cultures agricoles majeures du pays : bière et vin. Elle ne correspond pas à une antique tradition de fermentation mixte italienne ; son identité moderne se structure dans le mouvement craft des années 2000-2010, puis gagne une reconnaissance internationale dans les concours.

Le principe est volontairement ouvert : moût, jus, raisins entiers, peaux ou marc peuvent intervenir à différents moments. Le cépage doit rester identifiable sans transformer la bière en vin aromatisé. Certaines versions sont nettes et fermentées uniquement avec Saccharomyces ; d'autres utilisent levures du raisin, Brettanomyces ou élevage sous bois.

Le BJCP conserve une catégorie spécifique Italian Grape Ale pour le contexte italien et une catégorie Grape Ale plus générale ailleurs. L'histoire du style est donc celle d'une innovation craft devenue langage international.`,
    unique: false,
    explication: "La recette dépend du style de bière, du cépage et de la forme d'incorporation du raisin ; l'identité vient du dialogue bière-raisin.",
    malts: ["Base souvent Pilsner/pale, parfois blé ou malts plus foncés selon le cépage et le projet."],
    hops: ["Houblonnage bas à modéré pour ne pas masquer le raisin ; profils européens fréquents."],
    yeast: ["Saccharomyces ; levures œnologiques, levures indigènes, Brettanomyces ou cultures mixtes possibles selon interprétation."],
    extras: ["Raisin frais, moût, jus, marc ou peaux ; cépages blancs ou rouges selon projet."],
    water: "Eau modérée, laissant acidité et minéralité du raisin s'exprimer.",
    mash: "Selon style de base ; rechercher un corps assez léger pour que le raisin reste lisible.",
    boil: "Le raisin est souvent ajouté après l'ébullition, en fermentation ou maturation afin de préserver arômes et microbiote éventuel.",
    fermentation: "Co-fermentation ou fermentations successives bière/raisin ; gestion de l'acidité et des phénols selon microorganismes.",
    maturation: "Cuve, bouteille ou bois ; certaines IGA gagnent en complexité sur plusieurs mois.",
    target: "Une bière où le cépage est clairement perceptible mais intégré, avec équilibre entre céréale, fermentation, acidité et fruit vinique.",
    sources: [BJCP("Italian Grape Ale", "beer-styles/x3-italian-grape-ale"), BA("Italian-Style Grape Ale / Grape Beer")]
  }),

  "fruit-beer": entry({
    histoire: `Fruit Beer n'est pas une tradition unique mais une catégorie transversale : des fruits ont été employés dans des boissons fermentées depuis des siècles, mais les techniques et intentions vont du lambic aux framboises jusqu'aux wheat ales américaines modernes. Les guides contemporains utilisent donc « Fruit Beer » comme cadre permettant de juger l'intégration d'un fruit dans un style de base.

L'enjeu n'est pas la quantité de fruit mais la cohérence. Le fruit peut apporter sucre fermentescible, acidité, tanins, couleur, arômes frais, confiturés ou vineux. Selon le moment d'ajout, une grande partie du sucre est fermentée tandis que les composés aromatiques les plus fragiles peuvent être perdus.

Cette fiche ne doit jamais proposer une recette universelle : une cherry stout, une peach saison et une raspberry wheat sont trois architectures entièrement différentes.`,
    unique: false,
    malts: ["Grain bill du style de base ; parfois simplifié pour laisser le fruit dominer."],
    hops: ["Houblonnage cohérent avec la base mais souvent réduit si le fruit apporte acidité ou amertume tannique."],
    yeast: ["Levure du style de base ; cultures mixtes possibles si elles font partie du projet déclaré."],
    extras: ["Fruits entiers, purée, jus, concentré, zestes ou autres formes déclarées ; qualité sanitaire essentielle."],
    water: "Selon style de base, avec attention au pH et à l'acidité naturelle du fruit.",
    mash: "Selon style de base.",
    boil: "Fruit en fin d'ébullition pour pasteurisation, en whirlpool, fermentation ou maturation selon le compromis arôme/microbiologie recherché.",
    fermentation: "Prévoir la refermentation des sucres du fruit et l'évolution du pH.",
    maturation: "Temps de contact suffisant pour extraction puis séparation du fruit ; protection renforcée contre l'oxydation.",
    target: "Une bière dont le fruit est identifiable et intégré au style de base, sans impression de sirop artificiel ni disparition totale de la bière.",
    sources: [BJCP("Fruit Beer", "29/29A/fruit-beer"), BA("Fruit Beer")]
  }),

  "field-beer": entry({
    histoire: `Field Beer est une catégorie de concours moderne destinée aux bières utilisant des végétaux comestibles qui ne sont pas classés comme fruits au sens brassicole courant : légumes, racines, courges, piments non dominants, fleurs ou autres produits du champ selon les règles du guide employé. Elle ne désigne donc pas une lignée historique précise.

Le terme reflète surtout la diversification du craft brewing et le besoin de juger équitablement des bières à la tomate, betterave, concombre, patate douce ou autres ingrédients végétaux. L'ingrédient doit être reconnaissable et harmonieux avec le style de base.

Il faut éviter de transformer cette catégorie administrative en pseudo-style : couleur, alcool, fermentation et amertume restent ceux de la bière support.`,
    unique: false,
    malts: ["Recette du style de base, éventuellement simplifiée pour mettre en valeur l'ingrédient végétal."],
    hops: ["Houblonnage ajusté pour ne pas entrer en conflit avec le végétal."],
    yeast: ["Levure du style de base."],
    extras: ["Légume, racine, courge, fleur ou autre produit du champ déclaré ; forme fraîche, rôtie, purée, jus ou infusion selon l'ingrédient."],
    water: "Selon base ; tenir compte des minéraux, acides et sucres apportés par l'ingrédient.",
    mash: "Selon base ; certains végétaux riches en amidon nécessitent cuisson ou conversion enzymatique.",
    boil: "Moment d'ajout choisi selon risque microbiologique, volatilité aromatique et extraction recherchée.",
    fermentation: "Prévoir la fermentescibilité éventuelle des sucres ajoutés.",
    maturation: "Courte à modérée, avec protection contre oxydation et végétal cuit indésirable.",
    target: "Une bière où l'ingrédient du champ est clairement identifiable tout en restant intégré à une base brassicole cohérente.",
    sources: [BA("Field Beer")]
  }),

  "pumpkin-squash-pumpkin-spice-beer": entry({
    histoire: `Les bières à la courge possèdent deux histoires souvent confondues. Dans l'Amérique coloniale, la citrouille pouvait servir de source de sucres fermentescibles lorsque le malt était rare ou coûteux. La Pumpkin Beer craft moderne, elle, est surtout une saisonnière d'automne inspirée de la pumpkin pie, utilisant cannelle, muscade, gingembre, clou de girofle ou quatre-épices, parfois avec très peu de caractère réel de courge.

Les guides modernes distinguent utilement la présence de courge de celle d'un simple mélange « pumpkin spice ». Une bière authentiquement centrée sur la courge peut employer chair rôtie ou purée au mash/boil ; une Autumn Seasonal peut surtout évoquer le dessert par les épices.

La fiche couvre ces branches sans prétendre qu'elles partagent une recette historique continue.`,
    unique: false,
    malts: ["Base ambrée, brune, porter, wheat ou autre ; malts biscuit/caramel fréquents dans les versions dessert."],
    hops: ["Houblonnage généralement bas à modéré pour laisser courge et épices lisibles."],
    yeast: ["Levure du style de base, souvent relativement propre."],
    extras: ["Citrouille ou autre courge ; cannelle, muscade, gingembre, girofle, quatre-épices ou vanille selon version."],
    water: "Plutôt équilibrée, évitant une minéralité agressive avec les épices.",
    mash: "Courge rôtie/purée possible au mash ; vérifier la conversion si amidon non gélatinisé.",
    boil: "Épices en fin d'ébullition ou maturation ; dosage prudent car girofle et cannelle deviennent vite dominants.",
    fermentation: "Selon style de base ; sucres de la courge fermentent largement.",
    maturation: "Courte à modérée pour intégrer épices et malt ; servir assez frais pour préserver aromatique.",
    target: "Une bière automnale où courge et/ou épices de tarte sont nettes mais intégrées, sans devenir une infusion sucrée masquant la bière.",
    sources: [BA("Pumpkin/Squash Beer and Pumpkin Spice Beer"), BJCP("Autumn Seasonal Beer", "30/30B/autumn-seasonal-beer")]
  }),

  "chili-beer": entry({
    histoire: `Chili Beer est une catégorie moderne de bière épicée au piment. L'usage de Capsicum dans la bière n'a pas une origine unique : il existe des boissons fermentées pimentées dans différentes cultures, mais la catégorie craft contemporaine est surtout née de l'expérimentation avec jalapeño, habanero, chipotle, ancho et autres variétés.

Le piment apporte plusieurs dimensions distinctes : arôme végétal ou fruité, fumée éventuelle, saveurs de poivron, et chaleur de capsaïcine. Cette dernière ne se comporte pas comme l'amertume du houblon et peut s'accumuler au fil des gorgées. La réussite dépend donc davantage du dosage et de l'intégration que d'une valeur de Scoville spectaculaire.

La base peut aller d'une lager légère à un stout chocolaté ; il n'existe aucune recette canonique.`,
    unique: false,
    malts: ["Style de base au choix ; bases légères pour piment frais, ambrées ou sombres pour chipotle, ancho ou molé."],
    hops: ["Houblonnage généralement contenu afin d'éviter la superposition d'amertume et de chaleur."],
    yeast: ["Levure du style de base."],
    extras: ["Piments frais, séchés, fumés, torréfiés ou en teinture ; variété et traitement doivent être déclarés."],
    water: "Équilibrée ; chlorures peuvent adoucir la perception, sulfates élevés peuvent accentuer une finale agressive.",
    mash: "Selon style de base.",
    boil: "Ajout en fin d'ébullition, whirlpool, fermentation ou teinture ; extraction de capsaïcine à surveiller continuellement.",
    fermentation: "Selon base ; attention aux contaminants apportés par fruits frais.",
    maturation: "Dégustations fréquentes pendant contact ; retrait du piment dès que l'intensité cible est atteinte.",
    target: "Une bière où le piment apporte arôme et chaleur contrôlée, sans brûlure punitive ni disparition du style de base.",
    sources: [BA("Chili Pepper Beer"), BJCP("Spice, Herb, or Vegetable Beer", "30/30A/spice-herb-or-vegetable-beer")]
  }),

  "herb-and-spice-beer": entry({
    histoire: `Herb and Spice Beer est une catégorie transversale moderne, mais l'idée d'aromatiser la bière avec des plantes est bien plus ancienne que le houblon dominant. Avant sa généralisation en Europe, de nombreuses bières étaient assaisonnées par des mélanges de plantes souvent regroupés sous le mot gruit. Les bières modernes épicées ne sont toutefois pas automatiquement des reconstitutions de gruit historique.

Le cadre actuel englobe coriandre, poivre, gingembre, cannelle, genièvre, romarin, basilic, fleurs, graines et une multitude d'autres ingrédients. Le style de base peut être explicite ou volontairement neutre. La règle éditoriale importante est de distinguer histoire générale des plantes brassicoles et recette particulière de la bière présentée.

L'épice doit contribuer à un ensemble cohérent, pas fournir une excuse à un profil médicinal ou parfumé.`,
    unique: false,
    malts: ["Base libre selon l'épice : bière pâle pour fraîcheur, ambrée/brune pour épices chaudes, etc."],
    hops: ["Houblonnage adapté afin de ne pas concurrencer les herbes et épices."],
    yeast: ["Levure du style de base ; phénols de levure à considérer si l'épice est elle-même poivrée ou giroflée."],
    extras: ["Herbes, épices, fleurs, graines, racines ou écorces déclarées."],
    water: "Selon base ; éviter des ions qui durcissent inutilement amertume ou astringence végétale.",
    mash: "Selon style de base.",
    boil: "Ajout précoce pour extraction robuste, tardif pour arôme, ou teinture à froid pour contrôle fin ; chaque plante réagit différemment.",
    fermentation: "Selon style de base.",
    maturation: "Repos suffisant pour intégrer les composés aromatiques ; certaines épices se renforcent ou s'atténuent avec le temps.",
    target: "Une bière où l'assaisonnement est identifiable, propre et proportionné, en dialogue avec malt, houblon et fermentation.",
    sources: [BJCP("Spice, Herb, or Vegetable Beer", "30/30A/spice-herb-or-vegetable-beer"), BA("Herb and Spice Beer")]
  }),

  "tea-beer": entry({
    histoire: `Tea Beer est une catégorie craft contemporaine fondée sur l'incorporation de thé ou d'infusions de Camellia sinensis dans une bière. Elle ne désigne pas une tradition brassicole unique : thé noir, oolong, thé blanc, pu-erh et thés fumés produisent des profils entièrement différents.

Le thé apporte tanins, amertume, floralité, notes oxydatives, fumées ou fruitées. Son extraction ressemble davantage à celle d'un ingrédient de cuisine qu'à celle d'un houblon : température, durée et qualité de l'eau changent fortement le résultat. Une infusion trop chaude ou trop longue peut produire une astringence sèche que la bière amplifie encore.

Les brasseurs modernes utilisent infusion à chaud séparée, whirlpool, thé à froid ou teinture, souvent après fermentation pour conserver les arômes les plus délicats.`,
    unique: false,
    malts: ["Base pâle, blonde, saison, wheat, porter ou autre selon le thé ; malt simplifié lorsque l'aromatique du thé doit rester central."],
    hops: ["Houblonnage bas à modéré ; éviter d'empiler tanins du thé et amertume agressive."],
    yeast: ["Levure du style de base, souvent assez neutre pour les thés fins."],
    extras: ["Thé noir, vert, blanc, oolong, pu-erh, thé fumé ou assemblage déclaré."],
    water: "Eau peu alcaline et modérément minérale, adaptée à l'infusion du thé et au pH de la bière.",
    mash: "Selon style de base.",
    boil: "Préférer infusion contrôlée au whirlpool ou à froid pour limiter extraction tannique ; certains thés supportent une infusion séparée puis dosage.",
    fermentation: "Selon style de base ; ajout post-fermentation fréquent pour préserver aromatique.",
    maturation: "Courte, à l'abri de l'oxygène ; les arômes floraux du thé peuvent être fragiles.",
    target: "Une bière où le thé est reconnaissable par son parfum et sa structure tannique sans devenir âpre, poussiéreux ou dominant.",
    sources: [BA("Tea Beer / Herb and Spice Beer")]
  })
};
