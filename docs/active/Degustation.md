# Dégustation

Statut : **actif — V1, référentiel sensoriel 251/251 vérifié et sourcé au 14 août 2026**

## Intention produit

Dégustation transforme ZythoHunt en carnet personnel d’exploration du verre, sans confondre cette activité avec la progression de collection.

Deux états restent distincts :

- **Découverte** : une carte de la Brassopédie a été révélée dans la ZythoSphère ;
- **Dégustée** : l’utilisateur a réellement enregistré une dégustation d’une bière, avec ou sans style Brassopédie associé.

Une même carte peut correspondre à plusieurs dégustations. Le carnet conserve donc des événements indépendants et non un simple booléen « déjà goûté ».

La V1 reste personnelle, locale et non compétitive : aucune note communautaire, aucun classement social et aucun badge de dégustation.

## Parcours utilisateur

L’écran Dégustation propose deux entrées :

- **Dégustation libre** : le style peut être associé dès le départ ;
- **À l’aveugle** : les sensations sont renseignées avant toute proposition de style.

Le parcours comporte six étapes :

1. **La bière** : nom, brasserie, date et style facultatif ;
2. **Le coup d’œil** : couleur, limpidité et mousse ;
3. **Le nez** : familles aromatiques avec intensité discrète, présente ou dominante ;
4. **La bouche** : arômes, amertume, sucrosité, acidité, corps, carbonatation, alcool perçu et finale ;
5. **Mon verdict** : réaction personnelle, note facultative et souvenir libre ;
6. **Le résultat** : pistes de styles, signatures supplémentaires et comparaison avec une fiche Brassopédie liée.

Les champs sensoriels sont facultatifs : une réponse non renseignée signifie **inconnue**, jamais zéro ni absence.

## Modèle et stockage

Le modèle versionné se trouve dans `src/tasting/tasting-model.js`.

La persistance locale est centralisée par `src/tasting/tasting-storage.js` sous la clé :

```text
zythohunt.tastings.v1
```

Le carnet reste indépendant de la progression ZythoSphère. L’export/import global l’inclut, la remise à zéro de progression le conserve et la remise à zéro complète le supprime.

## Référentiel sensoriel : contrat actuel

Le prototype initial de 40 profils est terminé. Il n’existe plus comme couche métier particulière.

Le moteur utilise **un seul catalogue statique de 251 profils**, correspondant aux 251 cartes classiques des Collections 1 à 9 :

```text
src/data/sensory-profiles.js
```

Les profils sont regroupés visuellement par collection à l’intérieur de ce fichier unique. Il n’existe plus de dossier `src/data/sensory/catalog/`, d’agrégateur, de fichier `Part1…PartN` ni de schéma runtime séparé.

Les anciens concepts techniques `curated`, `derived`, `expert` et `parentCardId` ne font plus partie du catalogue. Les rôles de matching sont portés directement par chaque profil ; il n’existe plus de cartographie parallèle.

La Collection 10 — Bizarre et insolite reste volontairement exclue du moteur sensoriel classique.

## Vérification documentaire

Chaque profil porte :

```text
verification
├── status      pending | verified
├── reviewedAt
└── sources[]
    ├── label
    └── url
```

Règles :

- `pending` signifie que le profil existe mais n’a pas encore été relu contre des sources identifiées ;
- `verified` exige au moins une source HTTPS explicite et une date de revue ;
- la validation build interdit de déclarer un profil `verified` sans source ;
- la vérification se fait style par style et non par extrapolation automatique depuis le texte Brassopédie ;
- une absence d’information documentée vaut mieux qu’une fausse précision.

Au 14 août 2026, les **251 profils sont `verified`**. Le statut signifie que le profil a été relu et transposé à partir de sources identifiées selon les règles ci-dessous. Il ne signifie pas qu’une bière commerciale portant l’étiquette du style doit présenter chaque marqueur avec exactement la même intensité.

## Méthode de transposition documentaire

Le référentiel Dégustation utilise un vocabulaire volontairement plus compact que les guides de styles.

### Descripteurs aromatiques et gustatifs

| Formulation de la source | Intensité Dégustation |
| --- | ---: |
| absent / interdit | descripteur omis ou placé dans `contradictions` |
| très faible / faible | `1` — discret |
| moyen-faible / moyen | `2` — présent |
| moyen-fort / fort / très fort | `3` — dominant |

### Axes de structure

| Niveau qualitatif | Valeur Dégustation |
| --- | ---: |
| absent | `0` |
| très faible / faible | `1` |
| moyen | `2` |
| moyen-fort / fort | `3` |
| très fort / extrême | `4` |

Une plage source devient une plage `[min,max]` sur cette même échelle. Lorsqu’une source ne permet pas de défendre une dimension, **la dimension est omise**.

L’alcool du profil représente l’**alcool perçu**, pas une conversion mécanique de l’ABV. Il est renseigné lorsque la force ou la chaleur alcoolique fait partie du caractère sensoriel du style.

Les familles `fallback` peuvent volontairement couvrir une plage plus large que les styles `primary`. Leur rôle est de fournir une famille plausible lorsque la dégustation reste générale, pas de fabriquer une moyenne artificielle de leurs enfants.

Les `overlay` représentent un caractère additionnel — fruit, café, fumée, bois, épices, houblon frais, etc. — et ne doivent pas imposer artificiellement les paramètres du style de base lorsque les sources indiquent qu’ils en dépendent.

## Sources de référence

La revue privilégie :

1. les **Brewers Association Beer Style Guidelines 2026** pour les styles contemporains qu’elles définissent ;
2. les **BJCP Beer Style Guidelines 2021** pour leurs descriptions sensorielles détaillées et leurs catégories historiques ;
3. les organismes, textes réglementaires, associations professionnelles et sources de première main pertinents pour les appellations ou styles non couverts directement par ces deux référentiels.

Les principales sources complémentaires utilisées comprennent notamment :

- le décret français n°92-307 du 31 mars 1992 relatif à la bière pour les dénominations réglementaires françaises ;
- l’International Trappist Association pour le label Authentic Trappist Product ;
- les textes européens pour les mentions biologique et sans gluten ;
- le Deutscher Brauer-Bund pour le Radler ;
- les Belgian Brewers pour le contexte des appellations belges.

Les URLs et la date de revue sont conservées directement dans chaque profil concerné.

## Rôles de matching

Les 251 profils partagent le même schéma mais pas la même fonction :

- `primary` : style suffisamment défini pour constituer un résultat principal ;
- `fallback` : famille ou catégorie large pouvant remonter lorsque le profil reste général ;
- `overlay` : signature transversale qui complète un style principal sans le remplacer ;
- `excluded` : carte encyclopédique ou appellation qui ne peut pas être déduite de manière fiable par la seule dégustation.

Répartition :

| Rôle | Profils |
| --- | ---: |
| `primary` | 165 |
| `fallback` | 29 |
| `overlay` | 29 |
| `excluded` | 28 |
| **Total** | **251** |

Le rôle n’est pas une différence de qualité documentaire. Les 28 profils `excluded` sont sourcés avec la même exigence que les profils scorables.

## État de la revue documentaire

| Collection | Profils | Vérifiés | En attente |
| --- | ---: | ---: | ---: |
| 1 — Lagers et fermentations basses | 45 | **45** | 0 |
| 2 — Pale Ales, Bitters et IPA | 36 | **36** | 0 |
| 3 — Porters & Stouts | 22 | **22** | 0 |
| 4 — Traditions belges & françaises | 17 | **17** | 0 |
| 5 — Blé & seigle | 13 | **13** | 0 |
| 6 — Acides, sauvages & spontanées | 21 | **21** | 0 |
| 7 — Ales ambrées, brunes, maltées & fortes | 27 | **27** | 0 |
| 8 — Styles singuliers, historiques & hybrides | 40 | **40** | 0 |
| 9 — Appellations commerciales | 30 | **30** | 0 |
| **Total** | **251** | **251** | **0** |

## Principales corrections issues de la revue

La reprise documentaire n’a pas consisté à ajouter des liens à des données héritées. Les profils ont été corrigés lorsque les anciennes règles de dérivation produisaient des résultats incompatibles avec les sources.

Parmi les corrections structurantes :

- suppression de faux caractères `funky-cuir-ferme` dans les lagers, Bitter, IPA, Porter/Stout et autres fermentations propres ;
- recalibrage des familles Helles/Pilsner, IPA claire/Hazy/Double, Dry/Sweet/Oatmeal/American/Imperial Stout et des bières belges fortes ;
- distinction explicite entre Brett, acidité lactique et caractère acétique ;
- correction du Kentucky Common, qui n’est pas défini comme une bière acide ;
- séparation de la fumée issue du malt et du caractère boisé d’un élevage ;
- retrait du bois dans `Aged Beer`, dont le vieillissement n’implique pas un passage en fût ;
- suppression des paramètres de bière de base inventés dans les overlays d’ingrédients lorsque ceux-ci dépendent du style support ;
- suppression de la tourbe comme signature normale des Scottish Ale et Wee Heavy ;
- suppression des pseudo-signatures sensorielles attachées à des dénominations purement commerciales, réglementaires ou de certification.

## Cas particulier : Appellations commerciales

La Collection 9 demande une règle particulière : une appellation d’étiquette n’est pas automatiquement un style sensoriel.

Les 28 cartes `excluded` décrivent notamment :

- une couleur commerciale (`Blonde`, `Ambrée`, `Brune`…) ;
- un statut ou label (`Trappiste`, `Bio`, `Craft`, `Sans gluten`…) ;
- une dénomination réglementaire (`Bière spéciale`, `Pur malt`, `Bière de garde`, `Bière aromatisée`…) ;
- une indication générale de force ou de gamme (`Double`, `Triple`, `Quadruple`, `Session Beer`…).

Ces profils sont **documentés mais ne reçoivent aucun arôme ou structure inventé**. Lorsqu’un libellé exprime littéralement une couleur, seule cette information d’apparence est conservée. Les mentions sans alcool portent uniquement l’absence d’alcool perçu.

`Panaché` et `Radler / Shandy` restent `fallback`, car leur composition permet quelques repères de dégustation défendables : alcool faible, forte carbonatation et, pour le Radler/Shandy, caractère agrume/limonade.

## Validation build

`scripts/validate-sensory-catalog.mjs` est l’unique validation structurelle du référentiel. Il s’exécute avant `dev`, `build` et `check` et ne génère aucun payload.

La validation contrôle notamment :

- exactement 251 profils et 251 clés `collectionId + cardId` uniques ;
- correspondance exacte avec les 251 cartes classiques ;
- absence de Collection 10 ;
- rôles autorisés et répartition attendue ;
- vocabulaire des descripteurs et finales ;
- plages de structure ;
- marqueurs obligatoires des overlays scorables ;
- absence des anciens champs de migration ;
- métadonnées documentaires cohérentes ;
- source obligatoire pour tout profil `verified`.

Le build **ne fabrique, n’enrichit ni ne dérive aucun profil**.

## Runtime et recherche de styles

Dégustation ne possède plus de couche `sensory-runtime`. Le contrôleur `src/tasting/tasting-controller.js`, chargé à la demande, importe directement `src/data/sensory-profiles.js`, instancie le matcher et utilise ce même catalogue pour la recherche et la comparaison.

Dégustation ne maintient pas de second catalogue de styles issu de `beer-search-index.json` et ne charge pas de fichier `beer-sensory-index.json`.

Les noms, collections, alias et signatures nécessaires sont portés par les mêmes 251 profils :

```text
catalogue sensoriel statique 251
├── matching
├── comparaison
└── recherche de style
```

`beer-search-index.json` reste utilisé par la ZythoSphère pour sa propre recherche inter-collections.

Les cartes `excluded` restent recherchables et associables manuellement à une dégustation ; elles sont seulement exclues du classement automatique.

## Moteur de correspondance

Le noyau reste volontairement pur :

```text
profil utilisateur
+
251 profils sensoriels
↓
score
↓
classement + confiance + overlays
```

`src/tasting/sensory-score.js` calcule les similarités et pénalités. `src/tasting/sensory-matcher.js` orchestre le classement.

Le matcher exige explicitement l’ensemble complet de 251 profils et refuse un sous-catalogue de prototype.

Les valeurs non renseignées restent ignorées. Elles ne deviennent jamais zéro.

Les overlays sont évalués séparément du classement principal : ils peuvent compléter un style, jamais le remplacer.

## Tests de garde-fou

Les tests sont regroupés par responsabilité :

- `src/tasting/tasting-data.test.js` protège les 251 données, la documentation, les rôles et les discriminants par collection ;
- `src/tasting/tasting-engine.test.js` protège scoring, matching, déterminisme, exclusions, fallback et overlays ;
- `src/tasting/tasting-storage.test.js` protège le CRUD et les erreurs de persistance ;
- `tests/e2e/tasting.spec.js` protège le parcours principal et l’accessibilité.

Ils vérifient notamment :

- présence et unicité des 251 profils ;
- **251 profils `verified`, 0 `pending`** ;
- source et date de revue pour chaque profil ;
- absence des anciens champs `source`, `expert` et `parentCardId` ;
- refus d’un catalogue réduit à 40 profils ;
- invariants purs du moteur : priorité `primary`, séparation des overlays, exclusions, déterminisme et bornes numériques ;
- invariants documentaires propres à chaque collection ;
- distinctions Helles/Pils, West Coast/Hazy/Double IPA, Porter/Stout, levures belges et bavaroises, Brett/acide, Scottish/Peated, fumée/bois/vieillissement ;
- absence de pseudo-signature pour les appellations commerciales `excluded` ;
- contrôleur branché directement sur le même catalogue statique ;
- CRUD et erreurs de persistance du carnet ;
- parcours principal Playwright et contrôles axe.

Les anciens duels du prototype 40 ne sont plus présentés comme validation scientifique du catalogue 251. Les tests de discrimination ne verrouillent que des distinctions documentées.

## Maintenance future

Le chantier initial de vérification est terminé. La maintenance du référentiel suit désormais quatre règles :

1. **réviser les profils lorsqu’une source de référence évolue**, en particulier lors d’une nouvelle édition des Brewers Association Beer Style Guidelines ;
2. **ajouter des tests de discrimination lorsqu’une correction sensorielle modifie les frontières entre styles proches** ;
3. **ne jamais réintroduire de dérivation automatique ou de précision non sourcée** pour remplir artificiellement un profil ;
4. **ne pas redécouper le catalogue pour des raisons de longueur de fichier** : une nouvelle frontière de fichier doit correspondre à une responsabilité métier réelle.

L’état de référence au 14 août 2026 est donc : **251 profils explicites, 251 profils vérifiés, 251 profils sourcés**.
