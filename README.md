<div align="center">
  <img src="./public/logo.png" alt="ZythoHunt logo" width="112" height="112" />

# ZythoHunt

**Explorez, révélez et collectionnez les styles de bières dans une Brassopédie interactive.**

[![Version](https://img.shields.io/badge/version-0.2.0-c68b3c?style=flat-square)](./package.json)
[![Node.js](https://img.shields.io/badge/Node.js-24.x-43853d?style=flat-square&logo=node.js&logoColor=white)](./package.json)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tests](https://img.shields.io/badge/tests-Node.js%20%2B%20Playwright-3c873a?style=flat-square)](#qualité-et-vérifications)
[![PWA](https://img.shields.io/badge/PWA-installable-8b4513?style=flat-square)](./public/manifest.webmanifest)

[Présentation](#présentation) · [Fonctionnalités](#fonctionnalités) · [Démarrage](#démarrage-rapide) · [Architecture](#architecture)

</div>

## Présentation

ZythoHunt est une application web de découverte et de collection consacrée aux styles de bières. L’utilisateur saisit le nom d’un style identifié, déclenche une révélation animée, archive la carte correspondante et enrichit progressivement sa **Brassopédie**.

L’expérience repose sur une direction artistique sombre et brassicole, des carrousels animés, des collections thématiques, un système de badges et une progression conservée localement dans le navigateur.

> [!NOTE]
> ZythoHunt est un outil ludique de découverte. Les informations brassicoles présentées ne remplacent pas les référentiels officiels des organismes de classification.

## Fonctionnalités

- Recherche et révélation d’un style de bière à partir de son nom ou de ses alias.
- Navigation entre **neuf collections classiques et une dixième collection secrète**.
- Carrousel interactif animé avec GSAP et interactions tactiles.
- Séquence de révélation cinématique avec ajout automatique à la collection.
- Brassopédie permettant de consulter les cartes découvertes et leurs fiches détaillées.
- Progression indépendante pour chaque collection.
- Détection des styles appartenant à une autre collection et bascule automatique.
- Déverrouillage de la collection secrète **Bizarre et insolite** à partir de 50 % de progression sur les collections classiques.
- Système de badges fondé sur les découvertes et les habitudes de révélation.
- Fond de bière animé adapté à l’identité de chaque collection.
- Persistance locale de la progression, des badges et de la collection active.
- Installation en PWA et mise en cache progressive des ressources consultées.
- Interface responsive pensée pour mobile, tablette et ordinateur.

> [!IMPORTANT]
> Les sections **Dégustation** et **Réglages** sont actuellement des écrans préparatoires. La Brassopédie, les collections, les révélations et les badges constituent les fonctionnalités actives.

## Collections

ZythoHunt regroupe actuellement les familles suivantes :

- Lagers et fermentations basses
- Pale Ales, Bitters et IPA
- Porters et Stouts
- Traditions belges et françaises
- Bières de blé et de seigle
- Bières acides, sauvages et spontanées
- Ales ambrées, brunes, maltées et fortes
- Styles singuliers, historiques et hybrides
- Appellations commerciales
- Bizarre et insolite, collection secrète

Chaque collection possède ses propres cartes, alias de recherche, progression, identité visuelle et réglages d’ambiance. Les neuf collections classiques totalisent 251 cartes et la collection secrète en ajoute 42.

## Démarrage rapide

### Prérequis

- [Node.js 24](https://nodejs.org/)
- [pnpm 10](https://pnpm.io/)

### Installation

```bash
git clone https://github.com/christolosier-ship-it/ZythoHunt.git
cd ZythoHunt
pnpm install
pnpm dev
```

Ouvrez ensuite l’adresse affichée par Vite, généralement `http://localhost:5173`.

### Build de production

```bash
pnpm build
pnpm preview
```

## Utilisation

1. Sélectionnez une collection dans la ZythoSphère.
2. Saisissez le nom d’un style de bière dans le champ de révélation.
3. Validez pour lancer la séquence animée.
4. Retrouvez la carte découverte dans le carrousel et la Brassopédie.
5. Consultez l’onglet **Badge** pour suivre les exploits débloqués.

Les variantes orthographiques et noms alternatifs peuvent être reconnus grâce aux alias définis dans les données de chaque carte. La recherche inter-collections s’appuie sur un index léger généré automatiquement afin d’éviter de charger inutilement les contenus encyclopédiques des autres collections.

## Installation PWA et mode hors ligne

L’application fournit un manifest et un service worker. Une fois déployée sur HTTPS, elle peut être installée depuis le navigateur comme une application autonome.

Le service worker utilise :

- une stratégie **network first** pour les pages, scripts et feuilles de style ;
- une stratégie **stale while revalidate** avec cache borné pour les images ;
- une stratégie **stale while revalidate** pour les polices, le manifest et l’index léger de recherche inter-collections.

> [!WARNING]
> Le shell PWA et l’index de recherche sont précachés, mais les bundles de collections et les images se chargent progressivement. Une ressource de collection qui n’a jamais été chargée peut donc rester indisponible hors connexion.

## Données et confidentialité

La progression utilisateur est conservée localement dans le navigateur. ZythoHunt ne nécessite ni compte, ni backend, ni clé API pour fonctionner.

Les données locales couvrent notamment :

- les cartes révélées ;
- la collection active ;
- les statistiques de révélation ;
- les badges débloqués et notifications associées.

Effacer les données du site depuis le navigateur réinitialise la progression.

## Architecture

```text
ZythoHunt/
├── public/
│   ├── assets/                    # Illustrations et ressources statiques
│   ├── logo.png                   # Logo et icône principale
│   ├── manifest.webmanifest       # Métadonnées PWA
│   └── sw.js                      # Cache et mises à jour hors ligne
├── scripts/                       # Génération des miniatures, index et préparation PWA
├── src/
│   ├── animation/                 # Timelines et effets de révélation
│   ├── app/                       # Navigation, session et état applicatif
│   ├── background/                # Fond de bière animé et presets
│   ├── badges/                    # Définitions, stockage et moteur de badges
│   ├── brassopedie/               # Bibliothèque et consultation des cartes
│   ├── carousel/                  # Navigation et interactions du carrousel
│   ├── components/                # Construction des éléments d’interface
│   ├── data/                      # Catalogue lazy, bundles, Brassopédie et assets de cartes
│   ├── discovery/                 # Résolution des styles et progression
│   ├── pwa/                       # Enregistrement du service worker
│   ├── reveal/                    # Orchestration des révélations
│   ├── storage/                   # Primitives communes de persistance locale
│   ├── utils/                     # Géométrie, préchargement et résolution des assets
│   └── main.js                    # Point d’entrée et composition globale
├── index.html                     # Structure principale de l’application
├── package.json                   # Scripts et dépendances
└── vite.config.js                 # Configuration Vite et GitHub Pages
```

Le catalogue léger `src/data/collection-catalog.js` est chargé au démarrage. Les bundles complets des collections restent derrière des `import()` dynamiques et ne sont chargés qu’à la demande. Les vues Badges et bibliothèque Brassopédie chargent également leur JavaScript et leur CSS à leur première ouverture.

Le flux principal suit cette chaîne :

```text
Saisie du style
      ↓
Résolution du nom et des alias dans la collection active
      ↓
Consultation de l’index léger si une recherche inter-collections est nécessaire
      ↓
Vérification de la collection et de la progression
      ↓
Animation de révélation
      ↓
Archivage local, mise à jour de la Brassopédie et évaluation des badges
```

## Stack technique

| Technologie | Utilisation |
| --- | --- |
| HTML5 | Structure sémantique et accessibilité |
| CSS3 | Direction artistique, responsive design et animations |
| JavaScript ES Modules | Architecture modulaire et logique applicative |
| GSAP | Carrousel, transitions et séquences de révélation |
| Vite | Serveur de développement et build de production |
| TypeScript | Vérification statique du JavaScript via `checkJs` |
| Node Test Runner | Tests unitaires automatisés sans framework supplémentaire |
| Playwright + axe-core | Tests end-to-end et contrôles d’accessibilité |
| @fontsource | Polices embarquées localement |
| Local Storage | Progression, badges, statistiques et préférences locales |
| Service Worker et Cache API | Installation PWA et cache progressif |

## Qualité et vérifications

La commande principale exécute les deux niveaux de typecheck, les tests unitaires puis le build de production :

```bash
pnpm check
```

Les commandes peuvent également être lancées séparément :

```bash
pnpm typecheck
pnpm typecheck:strict
pnpm test
pnpm test:e2e
pnpm assets:thumbs:check
pnpm build
```

> [!TIP]
> Lors de l’ajout d’une collection ou d’une carte, vérifiez les identifiants, alias, images, miniatures, clés de progression et presets visuels. Les validateurs de collection signalent les incohérences en développement.

## Ajouter ou modifier une collection

Une collection est généralement composée de :

1. un fichier canonique Brassopédie dans `src/data/brassopedie/collection-XX-*.js` ;
2. un mapping des images et miniatures dans `src/data/card-assets/` ;
3. un module `*-collection.js` composant les données et les assets dans un bundle ;
4. une entrée de métadonnées et de chargement dynamique dans `src/data/collection-catalog.js` ;
5. une clé de progression locale unique ;
6. un preset d’arrière-plan.

Chaque carte expose notamment un identifiant stable, un nom, des alias, une description, ses images et ses données Brassopédie. L’index léger de recherche inter-collections est régénéré automatiquement avant `dev` et `build`.

## Déploiement sur GitHub Pages

Le projet est conçu pour être publié comme site statique :

```bash
pnpm check
pnpm build
```

Publiez ensuite le contenu généré dans `dist/` via GitHub Pages ou un workflow GitHub Actions.

> [!IMPORTANT]
> Conservez la configuration de base relative utilisée par Vite. Elle permet aux assets, au manifest et au service worker de fonctionner correctement sous le sous-chemin GitHub Pages du dépôt.
