# Prompt Codex — Réécriture éditoriale Collection 01 : Lagers et fermentations basses

## Objectif

Intégrer dans `collection-01-lagers-et-fermentations-basses.json` les textes éditoriaux validés pour la collection 01.

Le fichier source contient 45 cartes dans la collection `lagers-et-fermentations-basses`.

## Règles impératives

- Modifier uniquement les champs suivants :
  - `description`
  - `histoireEtOrigines`
  - `recette.profilRecherche`
- Ne modifier aucun autre champ.
- Ne modifier aucun identifiant.
- Ne modifier aucun `nom`, `collectionId`, `nature`, `parentPrincipalId`, `aliases`, `paysOrigine`, `origine`, `alcool`, `amertume`, `couleur`, `fermentation`, `service`, `recette.explicationProfil`, `recette.maltsEtCereales`, `recette.houblons`, `recette.levuresEtMicroorganismes`, `recette.ingredientsComplementaires`, `recette.profilEau`, `recette.empatage`, `recette.ebullitionEtHoublonnage`, `recette.fermentation`, `recette.maturation`, `sources`.
- Ne pas reformuler les textes ci-dessous.
- Ne pas corriger la ponctuation.
- Ne pas remplacer les apostrophes typographiques.
- Ne pas ajouter de sources.
- Ne pas supprimer de cartes.
- Ne pas réordonner les cartes.
- Utiliser l’`id` de chaque carte comme clé de correspondance.
- Après modification, vérifier que le JSON reste valide.
- Après modification, vérifier que la collection contient toujours exactement 45 cartes.
- Afficher un résumé des IDs modifiés.

---

# Textes validés à intégrer

## 1. `lager`

### `description`

La Lager est moins un goût unique qu’une méthode devenue empire : fermentation basse, maturation froide, profil net, bulles propres et grande lisibilité. Elle peut être pâle, ambrée, noire, légère ou forte, mais son fil rouge reste cette impression de bière tenue au cordeau, où les défauts n’ont nulle part où se cacher.

### `histoireEtOrigines`

Le mot vient de l’idée de stockage à froid : des bières gardées en caves, longtemps, pour s’arrondir et se clarifier. Partie d’Europe centrale, la fermentation basse a fini par redessiner la carte mondiale de la bière, jusqu’à devenir la famille dominante des grandes brasseries industrielles comme des pilsners artisanales les plus précises.

### `recette.profilRecherche`

une bière de fermentation basse propre, nette et maîtrisée, dont l’identité dépend du sous-style mais jamais du hasard

---

## 2. `pilsner`

### `description`

La Pilsner est la lame claire de la lager : robe dorée, mousse blanche, malt céréale net et amertume qui tranche proprement. Elle paraît simple, mais c’est une bière de précision : le moindre défaut se voit comme une rayure sur du cristal.

### `histoireEtOrigines`

Née à Plzeň en 1842 autour du brassage de Josef Groll, elle a transformé une révolution locale en modèle mondial. Eau douce, malt pâle, houblon Saaz et fermentation basse ont donné une bière claire si brillante qu’elle a changé la façon de regarder la bière autant que de la boire.

### `recette.profilRecherche`

une lager claire, sèche et brillante, portée par un équilibre net entre céréale pâle, houblon noble et finale précise

---

## 3. `hoppy-lager`

### `description`

La Hoppy Lager prend la propreté d’une lager et y accroche un bouquet de houblons modernes : agrumes, herbes, fruits blancs, résine ou fleurs fraîches. Elle doit rester nerveuse et sèche ; si elle devient lourde ou floue, elle perd son avantage face à une IPA.

### `histoireEtOrigines`

Cette famille vient de la scène craft, quand les brasseurs ont commencé à appliquer les techniques de houblonnage aromatique aux fermentations basses. Elle ne cherche pas à remplacer la pilsner classique, mais à créer un terrain hybride : précision froide dessous, houblon expressif dessus.

### `recette.profilRecherche`

une lager aromatique et sèche, où le houblon parle clairement sans brouiller la netteté de fermentation

---

## 4. `bock`

### `description`

Le Bock est une lager de muscle et de malt : pain brun, croûte, miel sombre, parfois fruits secs, avec une chaleur d’alcool qui doit rester polie. Ce n’est pas une bière sucrée par paresse, mais une bière forte où le malt avance en manteau épais.

### `histoireEtOrigines`

Le nom renvoie à Einbeck, puis à la Bavière, où la prononciation locale aurait transformé le nom de la ville en “Bock”, le bouc devenu emblème. La famille rassemble des lagers fortes, de saison ou de tradition, souvent liées aux périodes froides, aux fêtes et aux brassins de patience.

### `recette.profilRecherche`

une lager forte et maltée, ample sans lourdeur collante, où l’alcool réchauffe sans brûler

---

## 5. `international-light-lager`

### `description`

L’International Light Lager est la bière du quasi-effacement : très pâle, très froide, très carbonatée, pensée pour disparaître avec élégance plutôt que laisser une trace. Son talent n’est pas la complexité, mais la neutralité propre, sans défaut évident.

### `histoireEtOrigines`

Elle appartient à l’ère mondiale des grandes lagers standardisées, adaptées aux marchés larges, aux climats chauds et à la consommation très fraîche. C’est une bière d’industrie au sens technique du terme : régularité, stabilité, faible intensité, buvabilité maximale.

### `recette.profilRecherche`

une lager ultra-légère, limpide et désaltérante, où la propreté compte plus que l’expression aromatique

---

## 6. `german-leichtbier`

### `description`

La German Leichtbier est légère, mais pas vide : corps réduit, alcool discret, malt pâle propre et amertume plus présente qu’une light lager internationale. Elle marche sur un fil : donner une vraie sensation de bière avec peu de matière.

### `histoireEtOrigines`

“Leicht” signifie léger, mais l’approche allemande reste plus structurée que la logique américaine du “less filling”. Le style conserve une colonne malt-houblon lisible, dans l’esprit des lagers allemandes de table, sobres mais brassées avec discipline.

### `recette.profilRecherche`

une lager allemande légère mais définie, sèche, nette, avec assez de houblon pour éviter l’eau maltée

---

## 7. `american-light-lager`

### `description`

L’American Light Lager est conçue pour la fraîcheur immédiate : très pâle, très pétillante, corps minimal, grain discret et amertume presque fantôme. C’est une bière où l’absence de défaut devient la principale qualité, comme une page blanche glacée.

### `histoireEtOrigines`

Les versions modernes explosent aux États-Unis dans les années 1970, portées par le marketing du “tastes great, less filling”. Elles transforment la lager américaine en produit de masse allégé, calibré pour le sport, le froid, la répétition et le verre qui se vide vite.

### `recette.profilRecherche`

une lager américaine très légère, très froide, très carbonatée, quasiment neutre mais irréprochablement propre

---

## 8. `contemporary-american-light-lager`

### `description`

La Contemporary American Light Lager reprend le squelette de l’American Light Lager avec un regard plus actuel : toujours légère, toujours nette, mais parfois un peu plus précise, moins caricaturale. Elle reste un exercice de retenue extrême.

### `histoireEtOrigines`

Cette carte sert à distinguer les versions modernes qui assument la légèreté sans forcément tomber dans le produit anonyme. La scène récente a réhabilité certaines lagers très simples, à condition qu’elles soient brassées avec soin plutôt qu’effacées par automatisme.

### `recette.profilRecherche`

une light lager moderne, sèche et limpide, très facile à boire mais assez soignée pour ne pas sembler creuse

---

## 9. `mexican-light-lager`

### `description`

La Mexican Light Lager est une lager de soleil : pâle, vive, peu amère, souvent servie très froide, avec une finale sèche et parfois une impression céréalière légère. Elle doit rafraîchir avant de raconter, mais elle ne doit pas devenir transparente.

### `histoireEtOrigines`

Le Mexique a hérité d’influences brassicoles européennes, notamment allemandes et autrichiennes, avant de développer ses propres grandes lagers nationales. Les versions light prolongent cette tradition en l’adaptant au climat, au service très frais et à une buvabilité de plage ou de terrasse.

### `recette.profilRecherche`

une lager mexicaine légère, sèche et solaire, très rafraîchissante sans perdre toute texture céréalière

---

## 10. `international-pale-lager`

### `description`

L’International Pale Lager est la lager mondiale par excellence : dorée, claire, propre, moyennement légère, avec un malt discret et un houblon qui garde les mains dans les poches. Elle ne cherche pas à être mémorable, mais à être immédiatement compréhensible.

### `histoireEtOrigines`

Elle vient de la diffusion planétaire des lagers pâles inspirées des pilsners, mais adaptées aux goûts, matières premières et contraintes industrielles locales. Selon le pays, elle peut tirer vers le maïs, le riz, le malt plus rond ou une amertume un peu plus franche.

### `recette.profilRecherche`

une lager pâle internationale, nette et accessible, plus expressive qu’une light lager mais toujours très mesurée

---

## 11. `international-pilsner`

### `description`

L’International Pilsner emprunte le costume de la pilsner sans toujours en garder le tranchant bohémien ou allemand. Elle est claire, sèche, modérément houblonnée, plus affirmée qu’une pale lager générique mais souvent moins typée qu’une Czech ou German Pils.

### `histoireEtOrigines`

C’est la conséquence logique du succès mondial de Plzeň : partout, des brasseries ont repris l’idée de la lager blonde amère et brillante, puis l’ont adaptée à leur eau, leurs houblons, leurs malts et leurs marchés. Le résultat est une pilsner de traduction, pas toujours d’origine.

### `recette.profilRecherche`

une pilsner internationale claire et sèche, avec une amertume lisible mais un caractère régional volontairement modéré

---

## 12. `german-pilsner`

### `description`

La German Pilsner est plus sèche, plus fine et souvent plus mordante que sa cousine tchèque. Malt Pilsner net, houblon floral ou herbacé, amertume droite et finale ciselée : elle ne caresse pas longtemps, elle nettoie.

### `histoireEtOrigines`

L’Allemagne adopte l’idée de la pilsner en la disciplinant à sa manière : fermentation basse propre, houblons nobles, finale sèche, accent parfois plus minéral selon les régions. Les versions du nord peuvent paraître plus dures, celles du sud plus rondes, mais l’axe reste la netteté.

### `recette.profilRecherche`

une pils allemande sèche et tendue, avec malt pâle discret, houblon noble précis et amertume élégamment ferme

---

## 13. `italian-pilsner`

### `description`

L’Italian Pilsner prend une pils sèche et lui ajoute un parfum de houblon frais : floral, herbacé, citronné, parfois légèrement épicé. Elle ne doit pas devenir une IPA en costume clair ; son charme vient de ce houblonnage aérien posé sur une base très nette.

### `histoireEtOrigines`

Le style moderne est associé à l’influence de Tipopils et à la redécouverte des pilsners dry-hoppées par la scène craft. L’Italie y apporte une idée élégante : intensifier l’arôme sans sacrifier la finesse, comme si la pilsner classique passait par un jardin d’herbes fraîches.

### `recette.profilRecherche`

une pilsner sèche, florale et parfumée, où le houblonnage à cru reste fin, lumineux et jamais gras

---

## 14. `czech-pale-lager`

### `description`

La Czech Pale Lager est la petite sœur quotidienne de la grande pils tchèque : plus légère, moins intense, mais toujours riche en malt tendre et houblon épicé. Elle a ce goût de pain frais, de Saaz discret et de mousse crémeuse qui donne envie d’une deuxième pinte avant la fin de la première.

### `histoireEtOrigines`

En Tchéquie, les catégories de force comptent autant que les couleurs. Cette version pâle et plus basse en alcool correspond à une bière de consommation courante, nourrie par la même culture que les ležák plus puissants : eau douce, malt tchèque, houblon traditionnel et service généreux.

### `recette.profilRecherche`

une lager tchèque pâle, légère mais savoureuse, avec malt rond, houblon épicé et amertume douce jamais dure

---

## 15. `czech-premium-pale-lager`

### `description`

La Czech Premium Pale Lager est la grande pils bohémienne : dorée, ronde, houblonnée, amère mais douce dans ses contours. Là où la German Pils coupe net, elle enveloppe davantage : pain clair, herbe épicée, mousse dense et longue finale noble.

### `histoireEtOrigines`

Elle descend directement du coup de tonnerre de Plzeň en 1842. Le mariage de l’eau douce, du malt pâle, du houblon Saaz et de la fermentation basse a donné un modèle si puissant qu’il a été copié partout, souvent plus sèchement, rarement avec la même rondeur.

### `recette.profilRecherche`

une pils tchèque premium, dorée et expressive, avec houblon Saaz, malt rond, amertume élégante et mousse généreuse

---

## 16. `american-pilsner`

### `description`

L’American Pilsner historique est plus rustique qu’une pils européenne : malt pâle, maïs possible, amertume franche et caractère céréale plus marqué. Elle n’est pas une light lager ; c’est une tentative américaine ancienne de faire une pilsner robuste avec les ingrédients du pays.

### `histoireEtOrigines`

Avant la Prohibition, les brasseurs immigrés adaptent les lagers européennes aux céréales américaines, notamment le maïs, qui allège le corps sans effacer la bière. Cette carte regarde vers cette tradition pré-Prohibition, plus savoureuse et plus amère que l’image moderne des grandes lagers américaines.

### `recette.profilRecherche`

une pilsner américaine ancienne, sèche et céréalière, avec amertume nette et maïs intégré plutôt que diluant

---

## 17. `contemporary-american-pilsner`

### `description`

La Contemporary American Pilsner est une pils craft américaine : claire, sèche, précise, mais plus libre sur le houblon. Elle peut sentir le citron, les fleurs, les herbes ou les fruits blancs, tout en gardant la colonne vertébrale d’une lager nette.

### `histoireEtOrigines`

Elle vient du retour des brasseries artisanales américaines vers les lagers exigeantes. Après des années dominées par l’IPA, la pilsner devient un terrain de démonstration technique : moins spectaculaire, mais souvent plus impitoyable.

### `recette.profilRecherche`

une pils américaine moderne, sèche et propre, assez houblonnée pour signer la scène craft sans perdre sa structure lager

---

## 18. `west-coast-pilsner`

### `description`

La West Coast Pilsner est une créature de laboratoire en lunettes de soleil : base de pils sèche, houblons expressifs, agrumes, pin, fruits tropicaux, finale nerveuse. Elle flirte avec l’IPA, mais doit garder le claquant froid d’une lager.

### `histoireEtOrigines`

Née dans le vocabulaire craft récent de la côte Ouest américaine, elle transpose l’énergie des West Coast IPA dans une fermentation basse. C’est un style de frontière : trop houblonné pour les puristes, trop sec pour les amateurs de haze, parfait pour ceux qui veulent une lame de houblon glacée.

### `recette.profilRecherche`

une pilsner sèche et très houblonnée, claire comme une lager mais aromatique comme un coup de vent de côte Ouest

---

## 19. `rice-lager`

### `description`

La Rice Lager utilise le riz comme instrument de légèreté : robe pâle, corps sec, finale nette, texture allégée et parfois une délicate note céréalière. Le riz ne doit pas rendre la bière vide ; il doit la rendre plus fine, comme du papier de soie brassicole.

### `histoireEtOrigines`

Le riz apparaît dans de nombreuses traditions de lagers asiatiques et internationales, souvent pour éclaircir le corps et améliorer la buvabilité. Dans les meilleures versions, il ne remplace pas le malt : il affine la structure et donne une sécheresse très propre.

### `recette.profilRecherche`

une lager au riz très nette, légère et sèche, avec une buvabilité cristalline mais une vraie tenue de céréale

---

## 20. `india-pale-lager`

### `description`

L’India Pale Lager prend l’intensité houblonnée d’une IPA et lui retire la chaleur de fermentation ale : agrumes, résine, fruits tropicaux, finale sèche, amertume franche. C’est une IPA passée par une chambre froide, avec moins d’esters et plus de précision.

### `histoireEtOrigines`

Elle appartient à la vague craft des styles hybrides, quand les brasseurs ont cherché à combiner houblonnage moderne et fermentation basse. Le nom joue volontairement avec l’IPA, mais le résultat doit rester lager : propre, atténué, tendu, sans lourdeur fruitée de levure.

### `recette.profilRecherche`

une lager très houblonnée et sèche, avec l’intensité aromatique d’une IPA mais la netteté froide d’une fermentation basse

---

## 21. `munich-helles`

### `description`

La Munich Helles est la lager dorée de la douceur bavaroise : malt clair, pain frais, miel léger, amertume basse et finale propre. Elle ne cherche pas le tranchant d’une pilsner, mais une rondeur lumineuse qui glisse sans devenir sucrée.

### `histoireEtOrigines`

Créée à Munich comme réponse bavaroise aux pilsners plus amères, elle garde l’obsession locale du malt tout en adoptant la clarté moderne. C’est une bière de précision douce : moins spectaculaire qu’une Pils, mais redoutable quand elle est bien brassée.

### `recette.profilRecherche`

une lager blonde munichoise douce et nette, centrée sur le malt clair, le pain frais et une buvabilité profonde

---

## 22. `dortmunder-european-export`

### `description`

La Dortmunder Export est une lager dorée plus charpentée qu’une Helles, plus ronde qu’une German Pils, souvent avec une impression minérale et une amertume équilibrante. Elle a le sérieux d’une bière de ville industrielle : propre, solide, carrée.

### `histoireEtOrigines`

Associée à Dortmund et à ses eaux plus minérales, l’Export allemande s’est développée comme lager pâle de force supérieure, robuste sans devenir forte. Elle occupe une zone médiane élégante entre Munich, Plzeň et le monde ouvrier de la Ruhr.

### `recette.profilRecherche`

une lager export dorée, minérale et équilibrée, avec malt clair solide, amertume propre et finale sèche mais pas maigre

---

## 23. `festbier-german-oktoberfest`

### `description`

La Festbier moderne est l’Oktoberfest en version dorée : malt doux, pain clair, touche toastée, corps souple et grande buvabilité malgré la force. Elle doit donner envie de lever la chope, pas de faire une sieste sous la table.

### `histoireEtOrigines`

Depuis 1990, la bière majoritairement servie à l’Oktoberfest de Munich est plutôt ce style blond et fluide que l’ancien Märzen ambré. Le changement répond à une logique simple : garder la richesse maltée, mais alléger la couleur et la satiété pour les grandes fêtes.

### `recette.profilRecherche`

une lager de fête dorée, maltée et souple, assez forte pour exister mais assez légère pour remplir une grande chope

---

## 24. `vienna-lager`

### `description`

La Vienna Lager est une ambre élégante : malt toasté, noisette, croûte de pain, caramel très léger, finale sèche et propre. Elle n’est ni sucrée ni lourde ; son charme est dans cette couleur cuivre qui promet plus de chaleur qu’elle n’en donne vraiment.

### `histoireEtOrigines`

Créée dans le sillage des innovations de maltage et de fermentation du XIXe siècle, elle est associée à Anton Dreher et à Vienne. Tombée en retrait en Europe, elle a trouvé une seconde vie inattendue dans les Amériques, notamment au Mexique, où l’héritage autrichien a laissé des lagers ambrées célèbres.

### `recette.profilRecherche`

une lager ambrée sèche et toastée, avec élégance de malt Vienna, faible caramel et finale nette

---

## 25. `marzen`

### `description`

La Märzen est une lager ambrée de garde : pain grillé, malt riche, croûte, douceur initiale puis finale sèche. Elle doit sembler généreuse sans coller au palais, comme un manteau d’automne bien coupé.

### `histoireEtOrigines`

Son nom renvoie au mois de mars, quand on brassait des bières plus fortes destinées à être conservées au frais pendant l’été. L’image moderne de la Märzen est liée à l’Oktoberfest historique, avant que les grandes chopes munichoises ne se remplissent surtout de Festbier blond.

### `recette.profilRecherche`

une lager ambrée maltée et élégante, riche en pain grillé mais sèche en finale, jamais lourde ni caramélisée à l’excès

---

## 26. `franconian-rotbier`

### `description`

La Franconian Rotbier joue sur le rouge : malt toasté, croûte de pain, légère noisette, couleur cuivre-rubis et finale propre. Elle doit rester une lager de précision, pas une ambrée sucrée maquillée en tradition.

### `histoireEtOrigines`

Associée à la Franconie, cette famille évoque des lagers rouges régionales, souvent moins connues que Märzen ou Vienna mais très liées à la culture locale des petites brasseries. Dans ZythoHunt, elle mérite sa carte parce qu’elle donne une couleur et une identité distinctes à l’univers des lagers maltées.

### `recette.profilRecherche`

une lager rouge franconienne, toastée et nette, avec malt profond, reflets rubis et finale sèche

---

## 27. `international-amber-lager`

### `description`

L’International Amber Lager est une lager ambrée de compromis : malt caramel léger, pain toasté, corps moyen, amertume sage et profil très accessible. Elle reprend la couleur des grandes lagers maltées sans forcément leur profondeur historique.

### `histoireEtOrigines`

Elle apparaît dans le monde entier comme version plus colorée et plus maltée des lagers pâles internationales. Selon les pays, elle peut évoquer Vienna, Märzen ou simplement une lager commerciale plus douce et plus ambrée.

### `recette.profilRecherche`

une lager ambrée internationale, douce et accessible, avec malt toasté léger et équilibre sans aspérités

---

## 28. `czech-amber-lager`

### `description`

La Czech Amber Lager est une ambre tchèque pleine de nuances : pain grillé, caramel sec, houblon épicé, rondeur maltée et amertume souple. Elle peut tirer vers le malt ou vers le houblon, mais elle doit garder ce moelleux tchèque qui arrondit les angles.

### `histoireEtOrigines`

En Tchéquie, les lagers ambrées occupent un espace plus large que les simples copies de Märzen. Elles s’inscrivent dans une culture de degrés Plato, de service local et de houblons traditionnels, où la couleur ne dicte pas toute l’identité.

### `recette.profilRecherche`

une lager ambrée tchèque, maltée et épicée, avec caramel sec, houblon noble et finale ronde mais jamais lourde

---

## 29. `american-amber-lager`

### `description`

L’American Amber Lager est une lager ambrée propre, plus maltée que la blonde standard, mais rarement radicale : caramel léger, pain toasté, douceur modérée, amertume contenue. Elle est souvent plus confortable que profonde, mais une bonne version garde une vraie colonne sèche.

### `histoireEtOrigines`

Elle descend de la tradition américaine des lagers accessibles, colorées pour offrir plus de malt sans perdre la buvabilité. C’est une bière de pont : entre le monde industriel et la culture craft, entre la pale lager et les ambitions maltées plus affirmées.

### `recette.profilRecherche`

une lager ambrée américaine, propre et toastée, avec caramel discret, corps moyen et finale facile

---

## 30. `american-marzen-oktoberfest`

### `description`

L’American Märzen / Oktoberfest reprend l’imaginaire bavarois en version craft ou export : robe ambrée, malt toasté, caramel léger, corps rond et finale assez propre. Elle doit éviter le piège du sirop d’automne : une Märzen n’est pas une bière au caramel déguisée en folklore.

### `histoireEtOrigines`

Aux États-Unis, “Oktoberfest” a longtemps désigné des lagers ambrées inspirées de la Märzen, même lorsque Munich servait déjà majoritairement des Festbier dorées. Cette carte garde ce décalage culturel très utile : l’Oktoberfest américain est souvent plus orange que son cousin munichois moderne.

### `recette.profilRecherche`

une Oktoberfest américaine ambrée, maltée et festive, avec pain grillé, rondeur modérée et finale propre

---

## 31. `mexican-amber-lager`

### `description`

La Mexican Amber Lager est une ambre solaire : malt toasté, caramel léger, corps moyen, finale sèche et buvabilité de terrasse. Elle peut rappeler Vienna Lager, mais avec une approche souvent plus douce, plus lisse, plus tournée vers le verre frais.

### `histoireEtOrigines`

Le Mexique a conservé une affinité particulière avec les lagers ambrées d’inspiration viennoise, héritage des influences européennes du XIXe siècle. Des marques comme Victoria ou Negra Modelo ont entretenu cette mémoire maltée là où le style avait reculé en Europe.

### `recette.profilRecherche`

une lager mexicaine ambrée, toastée et souple, avec chaleur maltée mais finale assez sèche pour rester rafraîchissante

---

## 32. `munich-dunkel`

### `description`

La Munich Dunkel est sombre sans être noire de colère : pain brun, croûte, noisette, chocolat très doux, malt Munich profond et finale propre. Elle ne doit pas goûter la torréfaction de stout ; son noir est celui du pain, pas du café brûlé.

### `histoireEtOrigines`

Avant la domination des lagers blondes, les bières bavaroises étaient souvent plus sombres, liées aux malts disponibles et aux méthodes de touraillage. La Dunkel garde cette mémoire munichoise : une lager de malt brun, douce et profonde, mais toujours nette.

### `recette.profilRecherche`

une lager brune munichoise, riche en malt Munich, pain noir et noisette, sans brûlé ni lourdeur sucrée

---

## 33. `schwarzbier`

### `description`

La Schwarzbier est noire mais légère sur ses pieds : cacao sec, pain sombre, touche de café doux, finale nette et amertume délicate. Elle ressemble parfois à une stout de loin, mais au goût elle reste lager : propre, fine, sèche, sans épaisseur rôtie.

### `histoireEtOrigines`

Associée notamment à la Thuringe et à la Saxe, elle représente la tradition allemande de la bière noire basse fermentation. Son nom dit “bière noire”, mais son équilibre est subtil : plus sombre qu’une Dunkel, moins massive qu’un Bock, plus sèche qu’un dessert malté.

### `recette.profilRecherche`

une lager noire sèche et élégante, avec cacao léger, malt sombre net et torréfaction contenue

---

## 34. `international-dark-lager`

### `description`

L’International Dark Lager est une sombre accessible : couleur brune à noire, malt doux, caramel léger, parfois chocolat discret, mais peu d’amertume et peu de torréfaction. Elle veut rassurer plus qu’impressionner.

### `histoireEtOrigines`

Partout où les lagers pâles dominent, des versions sombres commerciales existent pour offrir une alternative maltée sans changer complètement les habitudes de consommation. Cette famille est plus une logique de marché qu’une tradition unique.

### `recette.profilRecherche`

une dark lager internationale douce et accessible, avec malt sombre modéré, faible amertume et finale propre

---

## 35. `european-dark-lager`

### `description`

L’European Dark Lager couvre les lagers sombres européennes qui ne rentrent pas parfaitement dans Munich Dunkel ou Schwarzbier : malt brun, pain noir, caramel sec, parfois chocolat doux. Elle doit rester propre et basse fermentation, avec une noirceur civilisée.

### `histoireEtOrigines`

L’Europe centrale a longtemps brassé des lagers plus sombres avant la vague blonde. Cette carte sert de territoire de transition pour les interprétations régionales : moins strictement munichoises, moins noires que Schwarzbier, mais toujours enracinées dans le malt sombre.

### `recette.profilRecherche`

une lager sombre européenne, maltée et nette, entre pain brun, caramel sec et chocolat discret

---

## 36. `czech-dark-lager`

### `description`

La Czech Dark Lager est sombre, ronde et étonnamment buvable : pain noir, caramel, cacao doux, houblon épicé et parfois une pointe de douceur moelleuse. Elle peut sembler riche, mais elle doit garder la souplesse d’une lager tchèque bien tirée.

### `histoireEtOrigines`

En Tchéquie, les tmavé et černé lagers vivent à côté des grandes blondes, avec la même culture de service, de mousse dense et d’équilibre malt-houblon. Elles ne cherchent pas la torréfaction britannique : leur noirceur reste plus pain, cacao et douceur que café brûlé.

### `recette.profilRecherche`

une lager tchèque sombre, ronde et maltée, avec pain noir, cacao doux, houblon épicé et finale souple

---

## 37. `american-dark-lager`

### `description`

L’American Dark Lager est une sombre domestiquée : brune, propre, malt légèrement grillé, corps moyen-léger et finale douce. Elle peut évoquer une dark lager internationale avec un peu plus de couleur, mais rarement un vrai caractère de torréfaction.

### `histoireEtOrigines`

Elle appartient à la tradition américaine des lagers faciles à boire, avec une variante plus colorée pour les amateurs de malt discret. Dans ZythoHunt, son intérêt est de ne pas la confondre avec une Schwarzbier ou une Dunkel : elle est plus simple, plus commerciale, plus lisse.

### `recette.profilRecherche`

une lager sombre américaine, douce et propre, avec malt grillé léger et buvabilité très directe

---

## 38. `mexican-dark-lager`

### `description`

La Mexican Dark Lager est une lager sombre de chaleur : brune, douce, maltée, avec caramel, pain brun, parfois chocolat léger, mais une finale assez lisse pour rester désaltérante. Elle ne doit pas être lourde ; son sombre doit rester convivial.

### `histoireEtOrigines`

Le Mexique a développé plusieurs lagers sombres et ambrées influencées par les traditions viennoises, munichoises et allemandes. Certaines marques historiques ont gardé ce profil plus malté, devenu presque une spécialité locale face aux lagers blondes d’exportation.

### `recette.profilRecherche`

une dark lager mexicaine, maltée et douce, avec caramel brun, pain toasté et finale propre de climat chaud

---

## 39. `traditional-bock-dunkles-bock`

### `description`

Le Traditional Bock est le bock brun classique : malt riche, croûte, caramel sombre, pain grillé, fruits secs légers et chaleur maîtrisée. Le houblon reste en retrait ; ici, c’est le malt qui porte le sceptre.

### `histoireEtOrigines`

Héritier d’Einbeck puis de la Bavière, le Dunkles Bock représente la version sombre et traditionnelle de la famille. Il a le sérieux des bières fortes de saison : assez dense pour marquer l’hiver, assez propre pour rester lager.

### `recette.profilRecherche`

un bock brun traditionnel, riche et malté, avec chaleur douce, profondeur de pain grillé et finale jamais collante

---

## 40. `helles-bock-maibock`

### `description`

Le Helles Bock est un bock de printemps : fort mais blond, malté mais plus lumineux, avec pain clair, miel léger, fleurs de houblon et alcool bien intégré. Il a la force du bock sans son manteau sombre.

### `histoireEtOrigines`

Souvent associé au mois de mai, le Maibock transpose la puissance du bock dans une robe plus claire et une expression plus fraîche. C’est la version qui sort de la cave quand l’hiver lâche prise : encore robuste, déjà tournée vers la lumière.

### `recette.profilRecherche`

un bock blond et printanier, fort mais lumineux, avec malt clair riche, houblon noble discret et chaleur propre

---

## 41. `doppelbock`

### `description`

Le Doppelbock est le pain liquide devenu légende : malt dense, croûte, caramel profond, fruits secs, parfois chocolat doux, avec une chaleur alcoolisée large mais lisse. Il doit nourrir l’imaginaire sans devenir sirop.

### `histoireEtOrigines`

Associé aux moines munichois et à la tradition des bières fortes, le Doppelbock a donné naissance à l’imagerie du “liquid bread”. Les noms en “-ator” perpétuent le clin d’œil à Salvator, l’un des exemples historiques les plus célèbres.

### `recette.profilRecherche`

une lager très maltée et forte, riche en pain, caramel et fruits secs, avec alcool fondu et finale propre

---

## 42. `eisbock`

### `description`

L’Eisbock est un Doppelbock passé par la glace : plus concentré, plus dense, plus alcoolisé, avec malt intense, fruits noirs, caramel sombre et chaleur profonde. Il doit être massif mais lisse, jamais brûlant ni solvanté.

### `histoireEtOrigines`

Originaire de Franconie, souvent rattaché à Kulmbach, le style repose sur la concentration par le froid : on gèle une bière de type Doppelbock puis on retire une partie de l’eau sous forme de glace. La légende parle d’un accident ; la réalité moderne demande surtout beaucoup de maîtrise.

### `recette.profilRecherche`

une lager concentrée par le froid, intense et soyeuse, avec malt profond, fruits noirs et alcool puissant mais poli

---

## 43. `american-lager`

### `description`

L’American Lager est plus pleine qu’une light, mais reste construite pour la limpidité : pâle, nette, légèrement céréalière, très carbonatée, avec une amertume basse. Elle est simple, mais pas forcément négligée ; une bonne version a la propreté d’une machine bien réglée.

### `histoireEtOrigines`

Développée par les brasseurs immigrés puis transformée par l’industrie américaine, elle utilise souvent riz ou maïs pour alléger le corps. Elle est devenue l’un des modèles les plus influents du XXe siècle : moins une tradition régionale qu’un standard de consommation national.

### `recette.profilRecherche`

une lager américaine pâle, propre et très buvable, avec céréale légère, corps sec et finale sans aspérité

---

## 44. `contemporary-american-lager`

### `description`

La Contemporary American Lager reprend le standard américain en version plus moderne : toujours claire et facile, mais parfois plus maltée, plus houblonnée ou plus artisanale. Elle garde le format “lager accessible”, avec une exécution moins anonyme.

### `histoireEtOrigines`

Elle reflète le retour récent de la scène craft vers les styles simples, où la difficulté n’est plus d’ajouter des ingrédients mais de brasser propre. Après les excès houblonnés, une lager claire réussie devient presque une preuve de maturité technique.

### `recette.profilRecherche`

une lager américaine moderne, nette et facile, avec assez de caractère pour se distinguer sans perdre son accessibilité

---

## 45. `mexican-pale-lager`

### `description`

La Mexican Pale Lager est une blonde de climat chaud : pâle, sèche, légèrement céréalière, peu amère, très rafraîchissante. Elle peut évoquer le maïs, le malt doux ou une touche herbacée, mais sa mission première reste la soif.

### `histoireEtOrigines`

Les grandes lagers mexicaines mêlent influences européennes, adaptation industrielle et culture du service très frais. Elles sont devenues des bières d’exportation mondiales, souvent associées à la bouteille claire, au citron vert et à une image solaire qui dépasse largement leur recette.

### `recette.profilRecherche`

une lager mexicaine pâle, sèche et solaire, très désaltérante, avec malt discret et finale nette

---

## Vérifications demandées à Codex

Après intégration, effectuer les vérifications suivantes :

1. Le fichier JSON est valide.
2. La collection contient toujours exactement 45 cartes.
3. Tous les IDs ci-dessus existent dans le fichier source.
4. Seuls les champs `description`, `histoireEtOrigines` et `recette.profilRecherche` ont été modifiés.
5. Aucun autre champ n’a changé.
6. Générer un diff lisible des modifications.
7. Signaler toute anomalie avant de poursuivre.
