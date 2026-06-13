# Modèle de données — ZythoHunt

Les schémas ci-dessous sont des propositions conceptuelles à confirmer au prototype. Ils ne constituent pas une API définitivement figée.

## Entités du référentiel

Le référentiel est fourni par l’application et partagé par la Zythosphère et la Brassopédie.

### TaxonomyNode

Champs envisagés :

- `id` ;
- `nodeType` ;
- `functionalType` ;
- `name` ;
- `shortName` ;
- `originalName` ;
- `aliases` ;
- `rank` ;
- `parentId` ;
- `secondaryParentIds` ;
- `familyId` ;
- `position` ;
- `visualFamily` ;
- `capturable` ;
- `status` ;
- `sourceRefs`.

### TaxonomyLink

Champs envisagés :

- `id` ;
- `sourceId` ;
- `targetId` ;
- `linkType` ;
- `visibleWhenHidden`.

### EncyclopediaEntry

Champs envisagés :

- `styleId` ;
- `summary` ;
- `history` ;
- `technicalDefinition` ;
- `origin` ;
- `fermentation` ;
- `colorRange` ;
- `abvRange` ;
- `ibuRange` ;
- `body` ;
- `carbonation` ;
- `aromas` ;
- `ingredients` ;
- `distinguishingFeatures` ;
- `confusions` ;
- `sourceRefs`.

## Entités personnelles

Les données personnelles sont stockées localement et séparées du référentiel.

### Discovery

Champs envisagés :

- `styleId` ;
- `discoveredAt` ;
- `discoveryMethod`.

### Tasting

Champs envisagés :

- `id` ;
- `styleId` ;
- `beerName` ;
- `brewery` ;
- `date` ;
- `location` ;
- `rating` ;
- `notes` ;
- `createdAt` ;
- `updatedAt`.

### Settings

Champs envisagés notamment :

- `reducedMotion` ;
- `theme` ;
- `lastMapPosition`.

### AppMeta

Champs envisagés :

- `schemaVersion` ;
- `taxonomyVersion` ;
- `appVersion` ;
- `lastMigration`.

## Séparation des responsabilités

- Le référentiel est fourni par l’application.
- Les données personnelles sont stockées localement.
- Le référentiel peut évoluer.
- Une découverte pointe vers un identifiant stable.
- Les coordonnées ne doivent pas être copiées dans les données personnelles.
- Une mise à jour visuelle ne doit pas casser les découvertes.
- Capture et dégustation sont des objets distincts : une capture révèle un style, une dégustation décrit une bière goûtée associée à ce style.

## Versionnement

- L’application utilise un versionnement sémantique.
- La taxonomie possède une version séparée.
- Le schéma de stockage possède une version séparée.
- Les migrations doivent être explicites.
- Aucune suppression silencieuse de données n’est autorisée.
- Les erreurs de migration doivent être journalisées.
- Une sauvegarde doit précéder tout import destructif.

## Validation

Les validations futures devront vérifier :

- identifiants uniques ;
- parents existants ;
- absence de cycles principaux ;
- alias non ambigus ou explicitement arbitrés ;
- coordonnées valides ;
- références encyclopédiques correspondantes ;
- dégustations pointant vers un style existant ou migrable.
