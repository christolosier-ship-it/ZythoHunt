# Taxonomie sensorielle de Dégustation

Statut : **active — modèle hiérarchique aligné sur la Brassopédie**

## But

Dégustation utilise directement la taxonomie canonique des 251 cartes classiques :

- `F` : famille ou niveau taxonomique générique ;
- `S` : style reconnu ;
- `SS` : sous-style ou variante reconnue ;
- `T` : catégorie transversale reconnue ;
- `A` : appellation commerciale ou d'usage ;
- `R` : dénomination, mention ou certification encadrée ;
- `parentPrincipalId` : relation vers le parent taxonomique principal.

Ces informations sont portées directement par chaque profil de `src/data/sensory-profiles.js` et validées contre les cartes canoniques. Il n'existe aucune table de filiation parallèle.

## Principe de matching

La famille n'est pas un résultat de secours et le style n'est pas un concurrent de sa famille.

```text
profil de dégustation
        ↓
branches taxonomiques plausibles
        ↓
famille la plus soutenue
        ↓
styles / sous-styles de cette famille
        ↓
style résolu si la discrimination est suffisante
```

Un résultat peut donc être :

- une famille identifiée et un style identifié ;
- une famille identifiée mais plusieurs styles encore possibles ;
- un style autonome sans famille artificielle ;
- une famille ou un style accompagné de signatures transversales.

Trouver un style implique automatiquement sa filiation. Exemple :

```text
Ale
└── Pale Ale
    └── IPA / India Pale Ale
        └── American IPA
            └── West Coast IPA
```

Pour `West Coast IPA`, la famille sensorielle la plus proche est `IPA / India Pale Ale`. Le chemin complet reste disponible pour l'explication et les futurs raffinements du moteur.

## Familles `F`

Les familles sont de vrais nœuds du diagnostic. Elles ne reçoivent ni pénalité fixe ni priorité inférieure aux styles.

Une famille peut être le niveau le plus précis défendable par la dégustation. Dans ce cas, Dégustation ne force pas artificiellement un descendant.

## Styles et sous-styles `S` / `SS`

Les styles et sous-styles sont évalués à l'intérieur de leur branche taxonomique. La profondeur n'est pas limitée à deux niveaux.

```text
Stout
└── Imperial Stout
    ├── British Imperial Stout
    └── American Imperial Stout
```

Certains styles `S` n'ont aucun ancêtre `F`. Ils restent des styles autonomes et aucune famille artificielle n'est inventée.

## Catégories transversales `T`

Les catégories `T` décrivent une signature, un ingrédient, un procédé ou un caractère pouvant se superposer à plusieurs branches, par exemple `Fruit Beer`, `Coffee Beer`, `Tea Beer`, `Fresh Hop Beer` ou `Wood- and Barrel-Aged Beer`.

Les descendants d'une carte `T` restent dans la branche transversale même si leur nature propre est `SS`. Une signature est retournée dans `signatures` en complément du diagnostic principal.

## Appellations `A` / `R`

Les 30 cartes de la Collection 9 sont hors identification sensorielle automatique. Elles restent présentes dans la Brassopédie, recherchables dans Dégustation et associables manuellement à une dégustation.

Cette règle vaut pour l'ensemble de la Collection 9, y compris `Panaché` et `Radler / Shandy`.

## Collections et taxonomie

Les collections sont des regroupements éditoriaux et visuels. Elles ne sont pas les familles du moteur. La taxonomie peut traverser les collections ; Dégustation utilise donc `parentPrincipalId` et jamais le numéro de collection pour déterminer une filiation brassicole.

## Contrat de données

Chaque profil de `src/data/sensory-profiles.js` porte notamment :

```text
schemaVersion: 3
collectionId
cardId
type: F | S | SS | T | A | R
parentPrincipalId: string | null
verification
```

Le champ historique `role` a disparu. Les anciens champs de migration `expert` et `parentCardId` restent interdits.

`scripts/validate-sensory-catalog.mjs` vérifie au build que `type` et `parentPrincipalId` sont strictement synchronisés avec les cartes Brassopédie, que tous les parents existent et que la taxonomie ne contient aucun cycle.

## Contrat du matcher

`src/tasting/sensory-matcher.js` retourne :

- `family` et `familyConfidence` ;
- `style` et `styleConfidence` ;
- `styleCandidates` pour les descendants restant à départager ;
- `alternatives` pour les autres branches plausibles ;
- `signatures` pour les catégories transversales détectées.

Le moteur n'applique plus de bonus ou pénalité fondé sur l'ancien classement des profils.

## Hors périmètre de cette refonte

Cette étape ne calibre pas encore les valeurs de matching. Les poids des groupes sensoriels, formules de similarité, pénalités de contradiction, seuils numériques existants et valeurs des 251 portraits restent inchangés.

La prochaine étape consiste à définir et mesurer les valeurs de matching adaptées aux familles, styles, sous-styles et signatures, avec des jeux de dégustations de référence et des métriques famille / style séparées.
