<div align="center">
  <img src="./public/icons/icon-512.png" alt="Icône ZythoHunt" width="120" height="120" />

# 🍺 ZythoHunt

**Explore les styles de bière, révèle des cartes, enrichis ta Brassopédie et garde la trace de tes dégustations.**

PWA installable · 293 cartes · 10 collections · 251 profils sensoriels · sans compte · sans backend

[![Release](https://img.shields.io/github/v/release/christolosier-ship-it/ZythoHunt?display_name=tag&style=flat-square)](https://github.com/christolosier-ship-it/ZythoHunt/releases/latest)
[![CI](https://img.shields.io/github/actions/workflow/status/christolosier-ship-it/ZythoHunt/pages.yml?branch=main&label=CI&style=flat-square)](https://github.com/christolosier-ship-it/ZythoHunt/actions/workflows/pages.yml)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e?style=flat-square&logo=javascript&logoColor=111)](https://developer.mozilla.org/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-installable-5a0fc8?style=flat-square&logo=pwa&logoColor=white)](./public/manifest.webmanifest)

### [🍻 Essayer ZythoHunt](https://christolosier-ship-it.github.io/ZythoHunt/) · [📦 Télécharger la dernière version](https://github.com/christolosier-ship-it/ZythoHunt/releases/latest)

</div>

---

## ZythoHunt en quelques secondes

ZythoHunt est une **PWA d’exploration brassicole** construite en JavaScript, Vite et GSAP. Le projet mélange trois usages dans une même expérience :

- **collectionner** des styles de bière sous forme de cartes révélées ;
- **explorer** une Brassopédie encyclopédique organisée en collections ;
- **déguster** une bière avec un carnet guidé et un moteur sensoriel local.

Toutes les données utilisateur restent sur l’appareil. Aucun compte, aucune API métier et aucun serveur applicatif ne sont nécessaires.

## ✨ Points forts

| | Fonctionnalité |
| --- | --- |
| 🎴 | **293 cartes** réparties dans 10 collections, dont une collection secrète |
| 📚 | **Brassopédie intégrée** avec fiches encyclopédiques chargées à la demande |
| 🔎 | Recherche et révélation animée d’un style à partir de son nom ou de ses alias |
| 👃 | **251 profils sensoriels** pour rapprocher une dégustation des styles compatibles |
| 🏅 | Badges, statistiques locales et progression persistée |
| 📱 | Interface responsive pensée pour mobile, tablette et ordinateur |
| 📴 | PWA installable avec fonctionnement hors ligne et cache d’images borné |
| 🔐 | Données locales, export/import JSON et absence de compte utilisateur |

## 🎴 ZythoSphère

Le cœur ludique de l’application. L’utilisateur identifie un style, le moteur le résout dans le catalogue puis révèle sa carte avec une animation dédiée. Les découvertes alimentent la progression, la Brassopédie et les badges.

## 📚 Brassopédie

La collection encyclopédique compte **293 cartes** :

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

Les contenus encyclopédiques restent derrière des imports dynamiques afin de ne pas transformer le démarrage de l’application en déménagement de bibliothèque.

## 🍺 Dégustation

Le carnet guide l’utilisateur en six étapes : bière, coup d’œil, nez, bouche, verdict et résultat.

Le moteur compare le profil renseigné à un référentiel sensoriel documenté de **251 profils** couvrant les Collections 1 à 9. Il propose ensuite une famille et les styles les plus compatibles. L’association à une carte Brassopédie reste facultative.

## 🏅 Badges et progression

Les trophées suivent l’exploration, les découvertes et différents comportements de jeu. Tout est calculé et conservé localement, sans classement social ni compte distant.

## 📲 PWA et mode hors ligne

ZythoHunt peut être installé depuis un navigateur compatible. Le service worker :

- conserve un shell hors ligne minimal ;
- utilise un cache d’images borné ;
- réutilise les ressources déjà consultées ;
- propose les mises à jour sans forcer un rechargement pendant une interaction.

👉 **[Ouvrir l’application en ligne](https://christolosier-ship-it.github.io/ZythoHunt/)**

## 🧱 Architecture

ZythoHunt est une application **Vite / HTML / CSS / JavaScript**, sans serveur applicatif.

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

Principes structurants : chargement dynamique des collections et vues secondaires, catalogue léger au démarrage, persistance locale centralisée, source sensorielle unique et validations automatisées.

Le détail se trouve dans [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## 🛠️ Développement local

Prérequis : **Node.js 24** et **pnpm 10.12.4**.

```bash
git clone https://github.com/christolosier-ship-it/ZythoHunt.git
cd ZythoHunt
corepack enable
corepack prepare pnpm@10.12.4 --activate
pnpm install --frozen-lockfile
pnpm dev
```

### Contrôles qualité

```bash
pnpm typecheck
pnpm typecheck:strict
pnpm test:unit
pnpm assets:thumbs:check
pnpm test:e2e
pnpm check
```

La CI exécute typecheck, tests unitaires, validation des assets, build de production, Playwright et contrôles axe.

## 📦 Releases

La branche `main` alimente GitHub Pages. Lors d’une nouvelle version, le workflow de release valide l’application puis publie automatiquement :

- `ZythoHunt-vX.Y.Z.zip` ;
- `SHA256SUMS.txt`.

➡️ **[Voir les releases](https://github.com/christolosier-ship-it/ZythoHunt/releases)**

## 🤝 Participer

Les retours, propositions d’amélioration et corrections sont bienvenus.

- un bug reproductible : ouvre un **Bug report** ;
- une idée ou amélioration : ouvre une **Feature request** ;
- une contribution de code : consulte [`CONTRIBUTING.md`](CONTRIBUTING.md) avant d’ouvrir une Pull Request.

Si ZythoHunt te plaît, une ⭐ sur le dépôt aide simplement d’autres curieux brassicoles et développeurs à le découvrir.

## 🔐 Données et confidentialité

ZythoHunt n’utilise ni compte utilisateur, ni API métier distante, ni base de données serveur. Les données personnelles de l’application restent dans le stockage local du navigateur. Une sauvegarde JSON peut être exportée puis importée sur un autre appareil.

## 📖 Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — architecture et responsabilités
- [`docs/active/Badge.md`](docs/active/Badge.md) — système de badges
- [`docs/active/Degustation.md`](docs/active/Degustation.md) — carnet et moteur sensoriel
- [`docs/active/Taxonomie.md`](docs/active/Taxonomie.md) — taxonomie Brassopédie
- [`docs/active/SensoryTaxonomy.md`](docs/active/SensoryTaxonomy.md) — taxonomie sensorielle
- [`docs/BRASSOPEDIE_CHARTE_EDITORIALE_NARRATIVE.md`](docs/BRASSOPEDIE_CHARTE_EDITORIALE_NARRATIVE.md) — charte éditoriale
- [`CHANGELOG.md`](CHANGELOG.md) — historique des versions

## 🚀 Version stable

**ZythoHunt v1.0.0** est la première version stable, publiée avec ses 10 collections, la Brassopédie, la ZythoSphère, les badges, les réglages, le carnet Dégustation et son référentiel sensoriel vérifié.
