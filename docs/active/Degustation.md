# Dégustation

Statut : **actif — référentiel sensoriel 251/251 vérifié, moteur hiérarchique famille → style**

## Intention produit

Dégustation transforme ZythoHunt en carnet personnel d'exploration du verre, sans confondre cette activité avec la progression de collection.

Deux états restent distincts :

- **Découverte** : une carte de la Brassopédie a été révélée dans la ZythoSphère ;
- **Dégustée** : l'utilisateur a réellement enregistré une dégustation, avec ou sans carte Brassopédie associée.

Une même carte peut correspondre à plusieurs dégustations. Le carnet conserve donc des événements indépendants et non un simple booléen « déjà goûté ».

La V1 reste personnelle, locale et non compétitive : aucune note communautaire, aucun classement social et aucun badge de dégustation.

## Parcours utilisateur

L'écran Dégustation propose deux entrées :

- **Dégustation libre** : une carte peut être associée dès le départ ;
- **À l'aveugle** : les sensations sont renseignées avant les propositions du moteur.

Le parcours comporte six étapes :

1. **La bière** : nom, brasserie, date et carte facultative ;
2. **Le coup d'œil** : couleur, limpidité et mousse ;
3. **Le nez** : familles aromatiques et intensités ;
4. **La bouche** : arômes, structure et finale ;
5. **Mon verdict** : réaction personnelle, note et souvenir libre ;
6. **Le résultat** : famille, style, alternatives, signatures et comparaison éventuelle.

Les champs sensoriels sont facultatifs. Une réponse non renseignée signifie **inconnue**, jamais zéro ni absence.

## Modèle et stockage

Le modèle versionné se trouve dans `src/tasting/tasting-model.js`.

La persistance locale est centralisée par `src/tasting/tasting-storage.js` sous la clé :

```text
zythohunt.tastings.v1
```

Le carnet reste indépendant de la progression ZythoSphère. L'export/import global l'inclut, la remise à zéro de progression le conserve et la remise à zéro complète le supprime.

## Référentiel sensoriel

Le moteur utilise un seul catalogue statique :

```text
src/data/sensory-profiles.js
```

Il contient exactement les **251 cartes classiques des Collections 1 à 9**. La Collection 10 — Bizarre et insolite reste hors du moteur classique.

Le prototype initial de 40 profils n'existe plus comme couche métier ou algorithmique particulière.

Chaque profil porte sa taxonomie canonique :

```text
schemaVersion: 3
collectionId
cardId
type: F | S | SS | T | A | R
parentPrincipalId: string | null
```

Les champs `type` et `parentPrincipalId` sont synchronisés avec les cartes Brassopédie et validés au build. Le catalogue ne contient plus de rôle `primary`, `fallback`, `overlay` ou `excluded`.

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

- `pending` signifie que le profil existe mais n'a pas encore été relu contre des sources identifiées ;
- `verified` exige au moins une source HTTPS explicite et une date de revue ;
- la validation build interdit de déclarer un profil `verified` sans source ;
- la vérification se fait carte par carte et non par extrapolation automatique depuis un parent ;
- une absence d'information documentée vaut mieux qu'une fausse précision.

Au 14 août 2026, les **251 profils sont `verified`**. Le statut signifie que le profil a été relu et transposé à partir de sources identifiées ; il ne signifie pas qu'une bière commerciale doit présenter chaque marqueur avec exactement la même intensité.

## Méthode de transposition documentaire

Le référentiel Dégustation utilise un vocabulaire plus compact que les guides de styles.

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

Une plage source devient une plage `[min,max]`. Lorsqu'une source ne permet pas de défendre une dimension, la dimension est omise.

L'alcool du profil représente l'**alcool perçu**, pas une conversion mécanique de l'ABV.

## Sources de référence

La revue documentaire continue de privilégier :

1. les **Brewers Association Beer Style Guidelines 2026** pour les styles contemporains qu'elles définissent ;
2. les **BJCP Beer Style Guidelines 2021** pour leurs descriptions sensorielles détaillées et leurs catégories historiques ;
3. les organismes, textes réglementaires, associations professionnelles et sources de première main pertinents pour les appellations ou styles non couverts directement par ces deux référentiels.

Les principales sources complémentaires comprennent notamment :

- le décret français n°92-307 du 31 mars 1992 relatif à la bière pour les dénominations réglementaires françaises ;
- l'International Trappist Association pour le label Authentic Trappist Product ;
- les textes européens pour les mentions biologique et sans gluten ;
- le Deutscher Brauer-Bund pour le Radler ;
- les Belgian Brewers pour le contexte des appellations belges.

Les URLs et la date de revue restent conservées directement dans chaque profil concerné.

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

## Discriminants documentaires conservés

La migration taxonomique ne réécrit pas les portraits sensoriels validés lors de la revue documentaire. Les garde-fous continuent notamment de protéger :

- l'absence de faux caractères `funky-cuir-ferme` dans les lagers, Bitter, IPA, Porter/Stout et autres fermentations propres ;
- les distinctions Helles/Pilsner, IPA claire/Hazy/Double et Dry/Sweet/Oatmeal/American/Imperial Stout ;
- la distinction entre Brett, acidité lactique et caractère acétique ;
- le Kentucky Common non défini comme bière acide ;
- la séparation entre fumée de malt, caractère boisé et vieillissement ;
- l'absence de tourbe comme signature normale des Scottish Ale et Wee Heavy ;
- l'absence de pseudo-signatures gustatives inventées pour les dénominations commerciales ou réglementaires.

## Taxonomie métier

La taxonomie générale reste celle décrite dans `docs/active/Taxonomie.md` :

- `F` : famille ou niveau taxonomique générique ;
- `S` : style reconnu ;
- `SS` : sous-style ou variante reconnue ;
- `T` : catégorie transversale reconnue ;
- `A` : appellation commerciale ou d'usage ;
- `R` : dénomination, mention ou certification encadrée.

Les collections sont des regroupements éditoriaux. Elles ne servent pas de familles au moteur et une filiation peut traverser plusieurs collections.

## Matching hiérarchique

Le moteur ne classe plus 251 cartes comme des candidats indépendants de même niveau.

Le flux est :

```text
profil utilisateur
+
profils F / S / SS
↓
score sensoriel commun
↓
classement des branches
↓
famille la plus soutenue
↓
classement des styles de cette famille
↓
style résolu si suffisamment discriminé
```

### Famille

Une famille n'est jamais un fallback.

Elle représente un niveau réel du diagnostic. Le moteur peut donc conclure qu'une dégustation appartient probablement à la famille `IPA`, `Stout`, `Pilsner`, `Bock`, etc. sans imposer un descendant lorsque les données ne permettent pas de le distinguer proprement.

Le résultat expose :

- `family` ;
- `familyConfidence`.

### Style et sous-style

Les styles `S` et sous-styles `SS` sont évalués à l'intérieur de la branche retenue.

Le moteur peut descendre sur plusieurs profondeurs. Par exemple :

```text
Ale
└── Pale Ale
    └── IPA / India Pale Ale
        └── American IPA
            └── West Coast IPA
```

La famille sensorielle la plus proche de `West Coast IPA` est `IPA / India Pale Ale`, tandis que son chemin complet reste disponible.

Le résultat expose :

- `style` lorsqu'un style est suffisamment discriminé ;
- `styleConfidence` ;
- `styleCandidates` lorsque plusieurs descendants restent à départager.

À ce stade, la résolution d'un style exige le niveau de confiance déjà qualifié de **fort**. Une correspondance seulement plausible reste visible comme candidat mais n'est pas imposée comme style exact.

### Styles autonomes

Un style `S` ou `SS` sans ancêtre `F` reste un candidat autonome. Aucune famille artificielle n'est créée pour lui.

### Signatures transversales

Une carte `T`, ainsi que ses descendants taxonomiques, appartient au canal des signatures transversales.

Exemples : fruit, café, thé, bois/barrique, houblon frais ou vieillissement.

Ces cartes sont évaluées séparément de la branche famille/style et retournées dans :

```text
signatures[]
```

Il ne s'agit plus d'un rôle `overlay` attribué manuellement. La nature transversale vient de la taxonomie canonique.

### Autres branches

Le moteur conserve quelques branches secondaires dans `alternatives` afin qu'une faible différence de score au niveau famille ne ferme pas prématurément la bonne piste.

## Collection 9 — Appellations commerciales

Les **30 cartes de la Collection 9** sont toutes de nature `A` ou `R` et sont hors identification automatique.

Elles restent :

- dans la Brassopédie ;
- dans la recherche manuelle de Dégustation ;
- associables à une dégustation si l'utilisateur connaît le libellé réel.

Elles ne participent pas au matching automatique, y compris `Panaché` et `Radler / Shandy`.

Leurs portraits restent documentés sans inventer de goût. Une couleur commerciale peut conserver son information d'apparence littérale ; les mentions sans alcool peuvent conserver l'absence d'alcool perçu ; les autres dimensions ne sont pas fabriquées pour les faire entrer de force dans le moteur.

Cette séparation évite de présenter une couleur commerciale, une certification, une mention réglementaire ou une appellation d'usage comme un style que le verre permettrait nécessairement de déduire.

## Comparaison avec une carte liée

Une carte `F`, `S`, `SS` ou `T` peut être comparée au ressenti enregistré lorsque son portrait sensoriel le permet.

Une carte `A` ou `R` reste associable manuellement mais n'est pas traitée comme une identité sensorielle automatique pour la comparaison.

## Scoring

`src/tasting/sensory-score.js` reste le noyau numérique pur.

Cette refonte **ne calibre pas encore** les valeurs de matching. Les éléments suivants sont volontairement conservés :

- poids des groupes apparence / nez / bouche / structure / finale ;
- fonctions de similarité ;
- bonus des marqueurs clés ;
- pénalités de contradiction ;
- seuils numériques de confiance existants ;
- seuil actuel des signatures ;
- valeurs des 251 profils vérifiés.

La seule modification du scoring est structurelle : `computeDescriptorRarity()` reçoit désormais le jeu de candidats que la taxonomie lui fournit, au lieu de filtrer des rôles historiques.

## Validation build

`scripts/validate-sensory-catalog.mjs` valide notamment :

- exactement 251 profils et 251 identités uniques ;
- correspondance exacte avec les 251 cartes classiques ;
- absence de Collection 10 ;
- schéma sensoriel v3 ;
- `type` et `parentPrincipalId` synchronisés avec la Brassopédie ;
- parents existants et absence de cycle taxonomique ;
- 30 appellations `A/R` hors matching automatique ;
- vocabulaire des descripteurs et finales ;
- plages de structure ;
- métadonnées documentaires cohérentes ;
- source obligatoire pour tout profil `verified` ;
- absence des anciens champs de migration et du champ `role`.

Le build valide le catalogue mais ne fabrique, n'enrichit ni ne dérive aucun profil.

## Runtime et recherche manuelle

Dégustation ne possède pas de couche `sensory-runtime`. Le contrôleur `src/tasting/tasting-controller.js`, chargé à la demande, importe directement `src/data/sensory-profiles.js`, instancie le matcher et utilise ce même catalogue pour la recherche et la comparaison.

Dégustation ne maintient pas de second catalogue sensoriel issu de `beer-search-index.json` et ne charge pas de fichier `beer-sensory-index.json`.

La recherche manuelle couvre toujours les 251 cartes, y compris les `A/R` sorties du matching automatique.

## Tests de garde-fou

Les tests protègent désormais à la fois la nouvelle structure et les anciens discriminants documentaires :

- une famille est un niveau de diagnostic, pas un fallback ;
- un style identifié transporte toujours sa filiation ;
- une famille peut être résolue sans forcer un style ;
- un style autonome fonctionne sans famille artificielle ;
- une catégorie transversale ressort comme signature ;
- `Brett Beer`, défini `S` dans la taxonomie, reste un vrai style et non une signature générique ;
- les 30 cartes `A/R` restent absentes du matching automatique tout en restant recherchables ;
- les contrôles sensoriels par collection restent présents ;
- le matching reste déterministe et borné.

## Étape suivante

La prochaine étape est le **cadrage des valeurs de matching**.

Il faudra construire un benchmark séparant au minimum :

1. taux d'identification correcte de la famille ;
2. taux d'identification correcte du style dans la famille ;
3. capacité à s'arrêter au niveau famille lorsqu'un style exact n'est pas défendable ;
4. qualité des alternatives de branche ;
5. précision des signatures transversales ;
6. profils ou familles qui attirent artificiellement trop de résultats.

Ce benchmark servira ensuite à ajuster les poids, seuils, couvertures et discriminants famille/style sans réintroduire de règles de caste dans le catalogue.
