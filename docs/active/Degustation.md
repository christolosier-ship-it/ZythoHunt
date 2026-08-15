# Dégustation

Statut : **actif - référentiel sensoriel 251/251 vérifié, matching étalonné, famille hiérarchique + Top 5 transversal de styles**

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

Le questionnaire reste volontairement grand public. L'étalonnage ne doit pas introduire d'axes réservés à des dégustateurs experts uniquement pour forcer la distinction de styles sensoriellement très proches.

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

Le classement familial est porté par le **meilleur style descendant** de chaque branche. Le portrait `F`, volontairement large, reste le portrait de la famille et son support d'affichage ; il ne peut plus gagner une branche uniquement parce que sa plage générique absorbe davantage d'observations. En cas d'égalité entre branches, le départage suit l'identité du style meneur et non le nom technique de la famille.

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

## Scoring et étalonnage

`src/tasting/sensory-score.js` reste le noyau numérique pur.

Le grand étalonnage du 15 août 2026 n'a pas justifié de retoucher les poids et fonctions de score. Les éléments suivants restent inchangés :

- poids des groupes apparence / nez / bouche / structure / finale ;
- fonctions de similarité ;
- bonus des marqueurs clés ;
- pénalités de contradiction ;
- seuils numériques de confiance ;
- seuil des signatures ;
- valeurs des 251 profils vérifiés.

Le défaut global découvert par le benchmark était structurel : un profil familial `F`, volontairement large, pouvait devenir le meneur d'une branche et battre le meilleur style d'une autre branche. La correction est donc restée dans `src/tasting/sensory-matcher.js` et ne constitue pas une pondération supplémentaire.

Aucune constante de calibration spécifique à une bière, un style ou une famille n'a été ajoutée.

## Étalonnage exhaustif

Le benchmark complet reste intégré à `src/tasting/tasting-engine.test.js`. Aucun fichier de benchmark, catalogue dérivé ou table d'override n'est créé.

Il couvre les **175 styles et sous-styles `S/SS`**, les **24 familles `F`** et les **22 signatures transversales `T`**. Chaque style est soumis à dix observations déterministes issues de son portrait sensoriel vérifié :

1. portrait central complet ;
2. limpidité omise ;
3. couleur omise ;
4. marqueur principal atténué ;
5. marqueur secondaire omis ;
6. finale omise ;
7. nez omis ;
8. bouche omise ;
9. un axe de structure omis ;
10. légère variation de corps à l'intérieur de la plage documentée, ou variation d'amertume lorsqu'aucun corps n'est disponible.

Cela représente **1 750 observations** de styles à chaque exécution des tests.

### Résultats de référence

Résultats obtenus après correction structurelle du classement familial :

| Indicateur | Résultat |
| --- | ---: |
| Famille exacte Top 1 | **97,1 %** |
| Bonne famille dans les 3 branches affichées | **99,9 %** |
| Style exact Top 1 | **93,3 %** |
| Style exact Top 3 | **99,7 %** |
| Style exact Top 5 | **100,0 %** |
| Signature retrouvée lorsque son marqueur clé est renseigné | **100,0 %** |

Le Top 1 style reste un indicateur diagnostique. Il n'est pas transformé en objectif universel, car des styles réellement voisins peuvent partager la même zone sensorielle avec le questionnaire grand public.

Le garde-fou principal est plus exigeant là où il doit l'être : **chacun des 175 styles doit rester dans son Top 5 sur ses dix variantes**. Le benchmark échoue dès qu'un seul style descend sous 100 % de présence Top 5.

Le test impose également :

- au moins **97 %** de famille principale exacte sur l'ensemble des observations ;
- au moins **99 %** de présence du style exact dans le Top 3 ;
- **100 %** de présence globale et individuelle dans le Top 5 ;
- **100 %** de rappel des signatures sur les observations qui conservent réellement un de leurs marqueurs clés.

Un cas limite subsiste volontairement visible : `American Light Lager` peut perdre sa famille `Lager` sur une observation fortement appauvrie, mais le style reste dans le Top 5. Le moteur exprime donc l'incertitude au lieu de recevoir une exception codée pour ce cas.

## Contrôle externe par bières réelles

Le benchmark exhaustif vérifie la robustesse du moteur contre les **175 portraits sourcés** ; il ne prétend pas constituer à lui seul une validation expérimentale indépendante, puisqu'il part du référentiel lui-même.

Un second contrôle, conservé dans le même fichier de test, utilise des bières commerciales réelles documentées pour éprouver plusieurs frontières difficiles :

- Sierra Nevada Pale Ale - American Pale Ale ;
- Russian River Blind Pig IPA - American IPA ;
- Russian River Simcoe 25 - West Coast IPA ;
- Russian River Pliny the Elder - Double / Imperial IPA ;
- Tree House Julius - NEIPA / Juicy-Hazy IPA.

Chaque bière est testée sous cinq observations déterministes légèrement incomplètes ou variables. Les cinq étalons doivent conserver leur style réel dans le **Top 5 à 100 %**.

Les observations commerciales sont construites à partir des descriptions officielles des brasseries et d'un guide de style de référence. Elles servent de contrôle externe, jamais de définition unique du style. Cette distinction est volontaire : les guides BJCP eux-mêmes rappellent qu'un exemple commercial ne couvre pas nécessairement toute la plage d'un style et qu'il peut évoluer avec le temps.

Le cas Sierra Nevada a notamment permis de corriger le benchmark lui-même : la brasserie décrit explicitement des arômes intenses de pin et d'agrumes, tandis qu'aucune source utilisée ne justifiait d'inventer un niveau d'alcool perçu. Le moteur n'a pas été retouché pour faire réussir cet étalon ; l'observation de test a été remise en conformité avec les sources.

Pour les styles historiques, rares ou sans exemple commercial actuel suffisamment stable et documenté, aucun faux étalon n'est fabriqué. Leur couverture exhaustive repose sur leur portrait vérifié et ses dix variantes, complétée par les contrôles commerciaux là où ceux-ci sont défendables.

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

Les tests protègent désormais à la fois la structure, le référentiel et les résultats d'étalonnage :

- une famille est un niveau de diagnostic, pas un fallback ;
- un profil familial générique ne peut pas battre une branche portée par un meilleur style ;
- un style identifié transporte toujours sa filiation ;
- une famille peut être résolue sans forcer un style ;
- le Top 5 peut traverser plusieurs familles sans forcer un Top 1 artificiel ;
- chaque candidat du Top 5 transporte sa famille et sa compatibilité ;
- un style autonome fonctionne sans famille artificielle ;
- une catégorie transversale ressort comme signature ;
- `Brett Beer`, défini `S` dans la taxonomie, reste un vrai style et non une signature générique ;
- les 30 cartes `A/R` restent absentes du matching automatique tout en restant recherchables ;
- les cinq bières étalons réelles restent dans leur Top 5 ;
- les 175 styles sont rejoués sous dix variantes à chaque exécution ;
- les seuils famille, Top 3, Top 5 et signatures sont bloquants ;
- les contrôles sensoriels par collection restent présents ;
- le matching reste déterministe et borné.

## Architecture de calibration

L'étalonnage ne crée aucune deuxième source de vérité :

- **0 nouveau fichier** ;
- aucun ancien prototype de 40 profils ;
- aucune table séparée de 175 styles ;
- aucun override par bière, style ou famille ;
- aucun générateur runtime ;
- aucun nouveau critère expert dans le questionnaire ;
- les définitions restent dans `src/data/sensory-profiles.js` ;
- le benchmark reste dans `src/tasting/tasting-engine.test.js` ;
- le moteur reste dans `src/tasting/sensory-matcher.js` et `src/tasting/sensory-score.js`.

Le résultat recherché n'est pas un Top 1 artificiellement parfait. Le contrat final privilégie une **famille solide, un Top 5 honnête et une incertitude visible** lorsque le verre ne permet pas de départager des styles voisins.
