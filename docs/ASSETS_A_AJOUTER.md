# Statut réel des assets de collections

Le statut est désormais porté par `collection.assetStatus` :

- `shellReady`: dos, face, frame et miniatures de dos/face disponibles.
- `cardsReady`: images de cartes `full` et `thumb` disponibles pour toutes les cartes déclarées.
- `assetsReady` reste présent pour compatibilité et vaut `shellReady && cardsReady`.

## Collections complètes (`shellReady: true`, `cardsReady: true`)

- `lagers-et-fermentations-basses`
- `pale-ales-bitters-et-ipa`
- `porters-stouts`
- `traditions-belges-et-francaises`
- `bieres-de-ble-et-de-seigle`

Ces collections peuvent afficher le statut **Disponible**.

## Collections avec illustrations de cartes à compléter (`shellReady: true`, `cardsReady: false`)

- `bieres-acides-sauvages-et-spontanees`
- `ales-ambrees-brunes-maltees-et-fortes`
- `styles-singuliers-historiques-et-hybrides`
- `appellations-commerciales`

Ces collections disposent des assets de shell (dos/face et miniatures), mais leurs images de cartes ne sont pas complètes. Elles doivent afficher **Illustrations à compléter** et ne doivent pas précharger les images de cartes absentes.

## Validation

Le test Node `src/data/collection-assets.test.js` vérifie physiquement les chemins déclarés dans `public/` :

- assets shell obligatoires uniquement si `shellReady === true` ;
- images de cartes obligatoires uniquement si `cardsReady === true` ;
- rapport groupé par collection en cas de fichier manquant.
