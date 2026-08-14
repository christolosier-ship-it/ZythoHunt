# Dégustation

Statut : **actif — V1, référentiel sensoriel en cours de validation documentaire**

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

Le moteur utilise désormais **un seul catalogue statique de 251 profils**, correspondant aux 251 cartes classiques des Collections 1 à 9 :

```text
src/data/sensory/
├── sensory-profiles.js
├── sensory-profile-schema.js
└── catalog/
    ├── lagers-*.js
    ├── pale-ales-bitters-ipa-*.js
    ├── porters-stouts.js
    ├── traditions-belges-francaises.js
    ├── ble-seigle.js
    ├── acides-sauvages-spontanees.js
    ├── ales-ambrees-brunes-fortes-*.js
    ├── singuliers-historiques-hybrides-*.js
    └── appellations-commerciales.js
```

Les 40 profils du pilote et les 211 profils qui avaient été dérivés sont maintenant matérialisés sous **le même schéma**, dans les mêmes fichiers de collection et avec les mêmes règles de validation.

Les notions techniques de migration `curated`, `derived`, `expert` et `parentCardId` ne font plus partie du catalogue final. Les rôles de matching sont eux aussi portés directement par chaque profil ; il n’existe plus de cartographie parallèle.

La Collection 10 — Bizarre et insolite reste volontairement exclue du moteur sensoriel classique.

## Règle documentaire obligatoire

Un profil sensoriel n’est considéré comme **vérifié** que lorsqu’il possède des sources explicites et une date de revue.

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

- `pending` signifie que la valeur est disponible comme base de travail mais **n’est pas encore réputée vérifiée** ;
- `verified` exige au moins une source documentaire explicite ;
- une source doit être identifiable et accessible en HTTPS ;
- la date de revue est obligatoire pour un profil vérifié ;
- la validation build interdit de déclarer un profil `verified` sans source ;
- la vérification sensorielle doit être faite style par style à partir de sources reconnues, et non par simple extrapolation de mots-clés.

Les profils matérialisés lors de la refactorisation du 14 août 2026 restent `pending` jusqu’à leur reprise individuelle. Une collection ne passe donc pas à l’état documenté par simple héritage de l’ancienne dérivation.

Les sources sont ajoutées au profil concerné. Les référentiels techniques reconnus, organismes brassicoles, documents historiques spécialisés et sources de première main pertinentes sont prioritaires. En cas de divergence sérieuse entre sources, le profil représente l’intervalle défendable ou documente l’incertitude au lieu d’inventer une précision.

## Méthode de transposition documentaire

Le référentiel Dégustation utilise un vocabulaire volontairement plus compact que les guides de styles. La conversion d’une source vers le profil doit rester explicite et reproductible.

Pour les descripteurs aromatiques et gustatifs :

| Formulation de la source | Intensité Dégustation |
| --- | ---: |
| absent / interdit | descripteur omis ou placé dans `contradictions` |
| très faible / faible | `1` — discret |
| moyen-faible / moyen | `2` — présent |
| moyen-fort / fort / très fort | `3` — dominant |

Pour les axes de structure :

| Niveau qualitatif | Valeur Dégustation |
| --- | ---: |
| absent | `0` |
| très faible / faible | `1` |
| moyen | `2` |
| moyen-fort / fort | `3` |
| très fort / extrême | `4` |

Une plage source devient une plage `[min,max]` sur cette même échelle. Lorsqu’une source ne permet pas de défendre une dimension, **la dimension est omise** : le moteur sait ignorer les valeurs non documentées et il est préférable d’avoir une information absente qu’une fausse précision.

L’alcool du profil représente l’**alcool perçu**, pas une conversion mécanique de l’ABV. Il n’est donc renseigné à partir du degré alcoolique que lorsque la force ou la chaleur alcoolique fait explicitement partie de la description sensorielle du style.

Les familles `fallback` peuvent volontairement couvrir une plage plus large que les styles `primary`. Leur rôle est de fournir une famille plausible lorsque les informations de dégustation restent générales, pas de copier une moyenne artificielle de leurs enfants.

Un profil `verified` signifie ainsi : **profil relu contre une ou plusieurs sources identifiées et transposé selon ces règles**. Cela ne signifie pas que toute bière commerciale portant le nom du style doit présenter chaque marqueur au même niveau.

### Sources de référence prioritaires

Pour les styles classiques disposant d’une définition contemporaine, la revue privilégie :

1. les **Brewers Association Beer Style Guidelines** dans leur édition courante ;
2. les **BJCP Beer Style Guidelines 2021** lorsqu’ils définissent directement le style ou apportent une distinction utile ;
3. les organismes, associations, archives ou sources de première main pertinents pour les styles locaux, historiques ou non couverts par ces deux référentiels.

La Collection 1 a été revue le **14 août 2026** principalement à partir des Brewers Association 2026 Beer Style Guidelines et du BJCP 2021. Cette passe a notamment supprimé les faux marqueurs issus de l’ancienne dérivation automatique, comme `funky-cuir-ferme` utilisé positivement dans des lagers propres.

## Rôles de matching

Les 251 profils partagent le même schéma, mais toutes les cartes ne jouent pas le même rôle dans une identification à l’aveugle :

- `primary` : style suffisamment défini pour constituer un résultat principal ;
- `fallback` : famille ou catégorie large pouvant remonter lorsque le profil reste général ;
- `overlay` : signature transversale qui complète un style principal sans le remplacer ;
- `excluded` : carte encyclopédique dont l’appellation ne peut pas être déduite de manière fiable par la seule dégustation.

La répartition actuelle est :

| Rôle | Profils |
| --- | ---: |
| `primary` | 165 |
| `fallback` | 29 |
| `overlay` | 29 |
| `excluded` | 28 |
| **Total** | **251** |

Le rôle n’est pas une différence de qualité ou de traitement documentaire. Un `excluded` doit être vérifié et sourcé avec la même rigueur qu’un `primary`.

## État de la revue documentaire

| Collection | Profils | Vérifiés | En attente |
| --- | ---: | ---: | ---: |
| 1 — Lagers et fermentations basses | 45 | **45** | 0 |
| 2 — Pale Ales, Bitters et IPA | 36 | 0 | 36 |
| 3 — Porters & Stouts | 22 | 0 | 22 |
| 4 — Traditions belges & françaises | 17 | 0 | 17 |
| 5 — Blé & seigle | 13 | 0 | 13 |
| 6 — Acides, sauvages & spontanées | 21 | 0 | 21 |
| 7 — Ales ambrées, brunes, maltées & fortes | 27 | 0 | 27 |
| 8 — Styles singuliers, historiques & hybrides | 40 | 0 | 40 |
| 9 — Appellations commerciales | 30 | 0 | 30 |
| **Total** | **251** | **45** | **206** |

## Validation build

`scripts/build-sensory-payload.mjs` contrôle directement les 251 profils statiques et `scripts/validate-sensory-catalog.mjs` exécute cette validation avant `dev`, `build` et `check`.

La validation contrôle notamment :

- exactement 251 profils et 251 clés `collectionId + cardId` uniques ;
- correspondance exacte avec les 251 cartes classiques ;
- absence de Collection 10 ;
- rôles autorisés ;
- vocabulaire des descripteurs et finales ;
- plages de structure ;
- marqueurs obligatoires des overlays ;
- absence des anciens champs de migration ;
- métadonnées documentaires cohérentes ;
- source obligatoire pour tout profil déclaré `verified`.

Le build **ne génère plus de second référentiel sensoriel**. Il valide le catalogue mais ne fabrique, n’enrichit ni ne dérive aucun profil.

## Runtime et recherche de styles

Dégustation ne maintient plus de second catalogue de styles issu de `beer-search-index.json` et ne charge plus de fichier `beer-sensory-index.json`.

Les noms, collections, alias et signatures nécessaires sont portés par les mêmes 251 profils sensoriels. Le runtime Dégustation utilise donc directement :

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

Le matcher ne connaît pas le catalogue par import implicite : il exige qu’on lui fournisse explicitement l’ensemble complet de 251 profils et refuse un sous-catalogue de prototype.

Les valeurs non renseignées restent ignorées. Elles ne deviennent jamais zéro.

Les overlays sont évalués dans une voie séparée du classement principal : ils peuvent compléter un style, jamais le remplacer.

## Architecture du module

```text
src/tasting/
├── tasting-controller.js
├── tasting-view.js
├── tasting.css
├── tasting-model.js
├── tasting-storage.js
├── tasting-comparison.js
├── tasting-vocabulary.js
├── sensory-runtime.js
├── sensory-score.js
└── sensory-matcher.js
```

Le contrôleur Dégustation orchestre la vue, le carnet et le runtime sensoriel. Il ne charge plus les bundles de collections pour reconstruire un catalogue parallèle.

## Tests de garde-fou

Les tests vérifient notamment :

- présence des 251 profils statiques ;
- unicité des 251 clés ;
- absence des champs `source`, `expert` et `parentCardId` ;
- impossibilité de déclarer un profil vérifié sans source ;
- refus d’un catalogue réduit à 40 profils ;
- invariants purs du moteur sur un catalogue contrôlé : priorité `primary`, séparation des overlays, exclusions, déterminisme et bornes numériques ;
- runtime branché directement sur le même catalogue statique ;
- maintien des cartes `excluded` dans la recherche manuelle ;
- CRUD et erreurs de persistance du carnet ;
- parcours principal Playwright et contrôles axe.

La revue de la Collection 1 ajoute des garde-fous dédiés : les 45 lagers doivent toutes être `verified`, aucune ne peut réintroduire `funky-cuir-ferme` comme caractère positif, et plusieurs signatures étalons verrouillent les distinctions Helles/Pils, West Coast Pils, Dunkel/Schwarzbier et Eisbock.

Les anciens duels de styles du prototype 40 ne sont plus présentés comme validation du catalogue 251. Des comparaisons de styles sont réintroduites progressivement lorsque les profils concernés ont été vérifiés et sourcés.

## Travail documentaire restant

La refactorisation structurelle ne vaut pas validation scientifique des données héritées.

Le chantier restant porte sur **206 profils** des Collections 2 à 9. Pour chaque collection :

1. rechercher les sources de référence ;
2. comparer les valeurs du profil existant aux sources ;
3. corriger le profil si nécessaire ;
4. renseigner les sources ;
5. passer `verification.status` à `verified` ;
6. ajouter ou ajuster les tests de discrimination lorsque la correction peut modifier le classement.

L’objectif final reste simple : **251 profils explicites, 251 profils vérifiés, 251 profils sourcés**.
