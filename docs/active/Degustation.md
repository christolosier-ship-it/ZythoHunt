# Dégustation

Statut : **actif - référentiel sensoriel 251/251 vérifié, famille hiérarchique + Top 5 transversal de styles**

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
6. **Le résultat** : famille, jusqu'à cinq styles compatibles, alternatives, signatures et comparaison éventuelle.

Les champs sensoriels sont facultatifs. Une réponse non renseignée signifie **inconnue**, jamais zéro ni absence.

Le questionnaire reste volontairement grand public. Le recalibrage ne doit pas introduire d'axes réservés à des dégustateurs experts uniquement pour forcer la distinction de styles sensoriellement très proches.

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

Il contient exactement les **251 cartes classiques des Collections 1 à 9**. La Collection 10 - Bizarre et insolite reste hors du moteur classique.

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
| très faible / faible | `1` - discret |
| moyen-faible / moyen | `2` - présent |
| moyen-fort / fort / très fort | `3` - dominant |

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
| 1 - Lagers et fermentations basses | 45 | **45** | 0 |
| 2 - Pale Ales, Bitters et IPA | 36 | **36** | 0 |
| 3 - Porters & Stouts | 22 | **22** | 0 |
| 4 - Traditions belges & françaises | 17 | **17** | 0 |
| 5 - Blé & seigle | 13 | **13** | 0 |
| 6 - Acides, sauvages & spontanées | 21 | **21** | 0 |
| 7 - Ales ambrées, brunes, maltées & fortes | 27 | **27** | 0 |
| 8 - Styles singuliers, historiques & hybrides | 40 | **40** | 0 |
| 9 - Appellations commerciales | 30 | **30** | 0 |
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

## Matching hiérarchique et Top 5 transversal

Le moteur ne classe pas 251 cartes comme des candidats indépendants de même niveau.

Le flux est désormais :

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
classement global des styles S / SS
↓
Top 5 transversal avec famille de chaque candidat
↓
style exact seulement si le Top 1 est net et cohérent avec la famille
```

### Famille

Une famille n'est jamais un fallback.

Elle représente le niveau principal du diagnostic. Le moteur peut donc conclure qu'une dégustation appartient probablement à la famille `IPA`, `Stout`, `Pilsner`, `Bock`, etc. sans imposer un descendant lorsque les données ne permettent pas de le distinguer proprement.

Le résultat expose :

- `family` ;
- `familyConfidence`.

### Top 5 de styles

Les styles `S` et sous-styles `SS` restent liés à leur taxonomie canonique, mais le classement présenté à l'utilisateur n'est plus limité aux descendants de la seule famille gagnante.

Cette ouverture est nécessaire pour les frontières réellement proches. Une American IPA et une India Pale Lager peuvent ainsi apparaître ensemble parmi les meilleures pistes si les sensations renseignées ne permettent pas de les départager proprement.

`styleCandidates` contient jusqu'à **cinq** styles classés globalement. Chaque candidat expose notamment :

- son identité et son chemin taxonomique ;
- sa famille sensorielle la plus proche ;
- `score`, conservé pour compatibilité avec le moteur existant ;
- `compatibility`, égal au score sensoriel 0-100 et destiné à l'affichage.

Le pourcentage de compatibilité répond à la question :

> « À quel point ce que j'ai renseigné ressemble-t-il au portrait sensoriel de ce style ? »

Il ne doit **jamais** être présenté comme une probabilité statistique que la bière appartienne réellement au style. `88 % compatible` ne signifie pas `88 % de chances`.

### Match net, probable ou ouvert

Le résultat expose également `styleMatch` :

```text
styleMatch
├── id          net | probable | open
├── label
├── description
├── gap
└── topCompatibility
```

Cette conclusion réutilise les signaux de confiance déjà calculés par le matcher, notamment le score du meilleur candidat et son écart avec le suivant. Elle n'introduit pas un second moteur de fiabilité.

- **Match net** : un style se détache suffisamment selon les critères actuels de correspondance forte ;
- **Match probable** : une piste ressort mais plusieurs styles proches restent crédibles ;
- **Match ouvert** : les sensations renseignées ne permettent pas de départager proprement les meilleures pistes.

### Résolution exacte d'un style

`style` reste disponible pour le contrat métier lorsqu'un style exact est suffisamment défendable.

Il n'est résolu que si :

1. le meilleur style atteint le niveau de correspondance forte ;
2. sa famille est cohérente avec la branche familiale gagnante, ou le style est autonome sans famille.

Ainsi le Top 5 peut traverser plusieurs familles sans provoquer un résultat incohérent du type « famille Lager, style exact American IPA ».

### Exemple de filiation

Le moteur conserve les chemins complets, par exemple :

```text
Ale
└── Pale Ale
    └── IPA / India Pale Ale
        └── American IPA
            └── West Coast IPA
```

La famille sensorielle la plus proche de `West Coast IPA` est `IPA / India Pale Ale`, tandis que son chemin complet reste disponible.

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

Le moteur conserve deux branches secondaires dans `alternatives` afin qu'une faible différence de score au niveau famille ne ferme pas prématurément la bonne piste.

## Collection 9 - Appellations commerciales

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

Le recadrage du résultat **ne calibre pas encore** les valeurs de matching. Les éléments suivants sont volontairement conservés :

- poids des groupes apparence / nez / bouche / structure / finale ;
- fonctions de similarité ;
- bonus des marqueurs clés ;
- pénalités de contradiction ;
- seuils numériques de confiance existants ;
- seuil actuel des signatures ;
- valeurs des 251 profils vérifiés.

Le Top 5, `compatibility` et `styleMatch` changent la lecture et le contrat du résultat, pas les portraits sensoriels.

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

Les tests protègent désormais à la fois la structure et les anciens discriminants documentaires :

- une famille est un niveau de diagnostic, pas un fallback ;
- un style identifié transporte toujours sa filiation ;
- une famille peut être résolue sans forcer un style ;
- le Top 5 peut traverser plusieurs familles sans forcer un Top 1 artificiel ;
- chaque candidat du Top 5 transporte sa famille et sa compatibilité ;
- un style autonome fonctionne sans famille artificielle ;
- une catégorie transversale ressort comme signature ;
- `Brett Beer`, défini `S` dans la taxonomie, reste un vrai style et non une signature générique ;
- les 30 cartes `A/R` restent absentes du matching automatique tout en restant recherchables ;
- les contrôles sensoriels par collection restent présents ;
- le matching reste déterministe et borné.

Le benchmark pilote de bières réelles reste dans `src/tasting/tasting-engine.test.js`. Aucun fichier de benchmark ou référentiel parallèle n'est ajouté.

## Protocole d'étalonnage suivant

L'étalonnage de l'ensemble des familles et styles doit maintenant mesurer séparément :

1. **Famille Top 1** : capacité à proposer la bonne famille lorsque les sensations grand public permettent de la distinguer ;
2. **Style Top 3** : présence du style réel parmi les trois meilleures compatibilités ;
3. **Style Top 5** : garde-fou principal pour les styles très proches et les frontières entre familles ;
4. **Style Top 1** : indicateur de performance conservé, mais plus objectif universel imposé ;
5. **Qualité du match** : capacité à produire `net`, `probable` ou `open` sans fausse certitude ;
6. **Alternatives de famille** : présence d'une branche voisine crédible lorsque la famille principale hésite ;
7. **Signatures transversales** : précision de leur détection ;
8. **Profils aimants** : styles ou familles qui attirent artificiellement trop de dégustations.

Le pilote initial utilise plusieurs observations déterministes par bière étalon afin de tester la robustesse à une information manquante ou légèrement variable.

Les seuils chiffrés définitifs seront fixés après mesure du benchmark complet. Le principe directeur est de privilégier une famille juste et un Top 5 honnête plutôt qu'un Top 1 artificiellement forcé.

L'étalonnage doit ensuite couvrir progressivement toutes les familles et tous les styles automatiques, avec des bières étalons réelles sourcées lorsque cela est défendable, sans modifier le questionnaire grand public uniquement pour améliorer les scores du benchmark.
