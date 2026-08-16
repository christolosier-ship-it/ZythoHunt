# 🍺 ZythoHunt

**ZythoHunt** est une PWA d’exploration brassicole mêlant collection, encyclopédie et dégustation. L’application fonctionne sans compte ni backend : les découvertes, badges, réglages et dégustations restent stockés localement sur l’appareil.

**Version stable : 1.0.0**

[Ouvrir ZythoHunt](https://christolosier-ship-it.github.io/ZythoHunt/)

## Ce que contient ZythoHunt

### ZythoSphère

Le cœur ludique de l’application. L’utilisateur identifie un style de bière, le moteur le résout dans le catalogue puis révèle sa carte avec une animation dédiée. Les découvertes sont persistées localement et alimentent la progression ainsi que les badges.

### Brassopédie

Une encyclopédie brassicole intégrée aux cartes, organisée en **10 collections** :

1. Lagers et fermentations basses — 45 cartes
2. Pale Ales, Bitters et IPA — 36 cartes
3. Porters et Stouts — 22 cartes
4. Traditions belges et françaises — 17 cartes
5. Bières de blé et de seigle — 13 cartes
6. Bières acides, sauvages et spontanées — 21 cartes
7. Ales ambrées, brunes, maltées et fortes — 27 cartes
8. Styles singuliers, historiques et hybrides — 40 cartes
9. Appellations commerciales — 30 cartes
10. Bizarre et insolite — 42 cartes, collection secrète

Soit **293 cartes** au total.

### Dégustation

Un carnet personnel guidé en six étapes : bière, coup d’œil, nez, bouche, verdict et résultat. Le moteur compare le profil renseigné à un référentiel sensoriel documenté de **251 profils** couvrant les Collections 1 à 9, puis propose une famille et les styles les plus compatibles. L’association à une carte reste facultative.

### Badges

Des trophées suivent l’exploration, les découvertes, les collections et différents comportements de jeu. Les badges sont calculés localement et n’introduisent aucun classement social.

### PWA et fonctionnement hors ligne

ZythoHunt est installable comme application web. Le service worker conserve un shell hors ligne minimal, gère un cache d’images borné et propose les mises à jour sans rechargement forcé pendant une interaction.

### Réglages et sauvegardes

L’écran Réglages permet notamment de choisir le comportement au démarrage, ajuster les animations, gérer les notifications, exporter/importer une sauvegarde JSON, vider le cache hors ligne et réinitialiser tout ou partie des données ZythoHunt.

## Architecture

ZythoHunt est une application **Vite / HTML / CSS / JavaScript**, sans serveur applicatif.

Principes structurants :

- chargement dynamique des collections et des vues secondaires ;
- catalogue léger au démarrage ;
- données Brassopédie canoniques séparées de leur présentation ;
- référentiel sensoriel unique pour Dégustation ;
- persistance locale centralisée ;
- service worker préparé à chaque build ;
- tests unitaires, typecheck strict, Playwright et axe en CI.

```text
index.html
src/
├── app/            orchestration et navigation
├── animation/      animations de révélation
├── background/     ambiance liquide et transitions
├── badges/         trophées, statistiques et notifications
├── brassopedie/    bibliothèque encyclopédique
├── carousel/       navigation des cartes
├── components/     composants DOM partagés
├── data/           collections, assets et profils sensoriels
├── discovery/      résolution et progression
├── pwa/            état PWA, cache et mises à jour
├── reveal/         cycle de révélation
├── settings/       préférences, sauvegarde et remise à zéro
├── storage/        persistance locale commune
├── tasting/        carnet et moteur sensoriel
└── utils/          utilitaires partagés
public/             assets, icônes, manifest et service worker
scripts/            génération et validation des données/assets
tests/e2e/          scénarios Playwright + axe
```

Pour le détail des responsabilités et des garde-fous anti-spaghetti, voir [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Développement local

Prérequis : **Node.js 24** et **pnpm 10.12.4**.

```bash
corepack enable
corepack prepare pnpm@10.12.4 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Vite génère automatiquement l’index de recherche et valide le catalogue sensoriel avant le démarrage.

## Contrôles qualité

```bash
pnpm typecheck
pnpm typecheck:strict
pnpm test:unit
pnpm assets:thumbs:check
pnpm test:e2e
pnpm check
```

`pnpm check` exécute les validations de contenu, les deux niveaux de typecheck, les tests unitaires et le build de production. La CI ajoute la vérification des miniatures ainsi que les scénarios Playwright/axe.

## Build et package

```bash
pnpm build
```

Le site de production est généré dans `dist/`.

Pour les releases, GitHub Actions construit une version avec chemins relatifs, vérifie l’application, exécute les tests E2E puis publie un package `ZythoHunt-vX.Y.Z.zip` accompagné de sa somme SHA-256.

## Données et confidentialité

ZythoHunt n’utilise ni compte utilisateur, ni API métier distante, ni base de données serveur. Les données personnelles de l’application restent dans le stockage local du navigateur. Une sauvegarde JSON peut être exportée manuellement puis importée sur un autre appareil.

La remise à zéro complète ne supprime que les clés appartenant à ZythoHunt et ses caches PWA.

## Documentation du projet

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — architecture et responsabilités
- [`docs/active/Badge.md`](docs/active/Badge.md) — système de badges
- [`docs/active/Degustation.md`](docs/active/Degustation.md) — carnet et moteur sensoriel
- [`docs/active/Taxonomie.md`](docs/active/Taxonomie.md) — taxonomie Brassopédie
- [`docs/active/SensoryTaxonomy.md`](docs/active/SensoryTaxonomy.md) — taxonomie sensorielle
- [`docs/BRASSOPEDIE_CHARTE_EDITORIALE_NARRATIVE.md`](docs/BRASSOPEDIE_CHARTE_EDITORIALE_NARRATIVE.md) — charte éditoriale
- [`docs/BACKGROUND_PRESETS_COLLECTIONS.md`](docs/BACKGROUND_PRESETS_COLLECTIONS.md) — ambiances des collections

## Version 1.0.0

La V1.0.0 marque la première version stable de ZythoHunt : les 10 collections sont intégrées, la Brassopédie est exploitable, la ZythoSphère est complète, les badges et Réglages sont opérationnels, le carnet Dégustation utilise son référentiel sensoriel vérifié, et l’application est déployable/installable en PWA.

Voir [`CHANGELOG.md`](CHANGELOG.md) pour les notes de version.
