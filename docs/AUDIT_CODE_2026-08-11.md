# Audit code, dette technique et performances — 11 août 2026

## 1. Portée

Cet audit prend comme référence l'état de `main` au commit `5c6ec99661f25cedaf1e50d8b98fba01869793c8`, après les gros travaux de consolidation de la ZythoSphère et l'achèvement des 10 collections de la Brassopédie.

Il complète l'audit du 8 août 2026 sans le recopier. Plusieurs problèmes alors identifiés ont depuis été corrigés, notamment le chargement monolithique des collections, la persistance locale, la robustesse de la révélation et la stratégie du service worker.

Objectifs de cette passe :

- détecter les nouveaux points de concentration et de duplication ;
- identifier les fichiers morts, temporaires ou trompeurs ;
- vérifier les frontières entre données légères de jeu et données encyclopédiques lourdes ;
- réduire le coût du démarrage sans modifier le comportement fonctionnel ;
- préparer une base saine avant les futurs travaux Badges, Réglages et Dégustation.

## 2. Résumé exécutif

L'architecture actuelle est nettement plus saine qu'au 8 août. L'ancien problème d'un bundle JavaScript initial d'environ 1,29 Mio a été largement corrigé par le chargement dynamique des collections.

La présente passe a identifié puis corrigé deux nouvelles régressions de frontière de chargement :

1. la recherche globale parcourait encore les collections en chargeant leurs bundles complets, alors que ces bundles embarquent désormais la Brassopédie complète ;
2. les interfaces Badges et bibliothèque Brassopédie étaient encore payées au démarrage alors qu'elles sont des vues secondaires.

La recherche globale utilise désormais un **index léger généré automatiquement** depuis les sources canoniques. Une recherche inconnue ne charge plus les bundles encyclopédiques et une correspondance externe ne provoque le chargement de sa collection qu'au moment du changement effectif de collection.

Le shell PWA a également été allégé : `public/logo.png`, qui pèse **2 842 386 octets**, reste l'icône applicative mais n'est plus précaché de force par le service worker. Le petit index de recherche rejoint au contraire le shell hors ligne.

Le principal sujet restant est désormais architectural : `src/app/app-runtime.js` devient progressivement le point de convergence de trop de responsabilités. Il reste lisible, mais l'ajout prochain de fonctionnalités Badges, Réglages et Dégustation en ferait rapidement un nouveau noyau spaghetti si aucune frontière n'est posée.

---

## 3. Constat détaillé

### P0 — Aucun blocage critique détecté

Aucun problème de corruption de données, boucle de chargement ou dette nécessitant une intervention d'urgence n'a été identifié dans cette passe.

### P1 corrigé — Recherche globale couplée aux bundles encyclopédiques

#### Constat initial

`src/discovery/global-beer-resolver.js` cherchait d'abord dans la collection active, puis parcourait les autres collections. Lorsqu'une collection n'était pas déjà chargée, le resolver chargeait son bundle complet afin de poursuivre la recherche.

Parallèlement :

- chaque module de collection importe son fichier canonique Brassopédie ;
- `createCollectionBundle()` conserve les données encyclopédiques dans le bundle ;
- les 10 fichiers canoniques de `src/data/brassopedie/` représentent environ **2,11 Mio de source JavaScript** au total.

Une faute de frappe ou une bière inconnue pouvait donc entraîner le téléchargement et le parsing d'une grande partie du corpus encyclopédique simplement pour conclure à l'absence de résultat.

#### Correction appliquée

`scripts/generate-beer-search-index.mjs` génère désormais `public/beer-search-index.json` avant `dev` et `build` à partir des sources canoniques existantes.

Cet index ne conserve que les données nécessaires à la résolution :

- identifiant et nom de collection ;
- identifiant et nom de carte ;
- clés normalisées issues du nom et des alias.

Le fichier généré est ignoré par Git afin d'éviter une seconde vérité éditoriale versionnée.

Au runtime :

- la collection active est toujours résolue directement en mémoire ;
- si elle ne correspond pas, le resolver consulte l'index léger ;
- il ne charge plus aucun bundle de collection pour effectuer la recherche ;
- le bundle cible n'est chargé qu'après une correspondance, lorsque l'application change réellement de collection ;
- l'index est mis en cache par le resolver et par le navigateur ;
- l'index rejoint le précache PWA afin que la recherche inter-collections reste disponible hors ligne.

Des tests garantissent explicitement qu'une recherche externe ou inconnue ne déclenche aucun chargement de bundle lourd et que les correspondances locales n'ont même pas besoin de lire l'index global.

### P1 partiellement corrigé — Asset `public/logo.png` surdimensionné

#### Constat

`public/logo.png` pèse **2 842 386 octets**.

Il sert encore de :

- favicon dans `index.html` ;
- Apple Touch Icon dans `index.html` ;
- icône 512 × 512 du manifeste PWA.

#### Correction immédiate

Le logo a été retiré du précache obligatoire du shell PWA. Cela évite de télécharger environ 2,84 Mo uniquement pour installer ou mettre à jour le cache applicatif.

Le fichier reste accessible normalement au navigateur et au manifeste.

#### Dette restante

Une passe d'assets dédiée doit encore produire des icônes optimisées adaptées aux usages réels, par exemple :

- favicon léger ;
- Apple Touch Icon 180 × 180 ;
- icône PWA 192 × 192 ;
- icône PWA 512 × 512 optimisée.

Cette optimisation binaire n'est pas réalisée à l'aveugle dans cette PR.

### P2 — `app-runtime.js` devient un orchestrateur trop large

`src/app/app-runtime.js` orchestre actuellement :

- le chargement et le changement de collection ;
- la session ZythoSphère ;
- la persistance et ses erreurs ;
- le moteur de badges et ses notifications ;
- la bibliothèque Brassopédie ;
- la collection secrète ;
- le panneau de réglages de debug ;
- le changement de vue ;
- les transitions de fond.

Aucune responsabilité n'est individuellement aberrante, mais leur accumulation crée un point de croissance unique.

Les prochaines évolutions Badges, Réglages et Dégustation devront extraire progressivement des contrôleurs de feature. Le runtime principal doit conserver la composition générale, le cycle de session et la navigation inter-feature, pas les détails internes de chaque feature.

### P2 — Frontière données de jeu / Brassopédie

Le lazy loading des collections est correct. Un bundle de collection réunit toujours données de jeu et contenu encyclopédique complet, mais ce choix n'est plus pénalisant pour la recherche globale depuis l'introduction de l'index léger généré.

La règle à conserver est simple : lorsqu'un usage ne nécessite que quelques métadonnées, il doit consommer un index généré plutôt qu'importer un bundle encyclopédique par commodité.

### P2 — Candidats legacy à vérifier avant suppression

Deux zones paraissent potentiellement obsolètes, mais ne doivent pas être supprimées sans validation supplémentaire :

- l'export synchrone `createCollectionManager()` dans `src/data/collection-manager.js`, alors que l'application utilise le manager lazy ;
- plusieurs règles historiques de grille dans `src/styles.css` (`#grid-container`, `#card-grid`, `.card-slot`, etc.) qui ne correspondent plus à la présentation principale en carrousel.

La recherche de références n'a pas fourni de consommateur évident, mais une suppression CSS ou d'API sans test visuel/structurel serait une fausse économie. Ces éléments doivent faire l'objet d'une passe de suppression contrôlée.

### P3 corrigé — Résidus et documentation interne obsolète

Deux éléments étaient clairement morts ou trompeurs :

- `.staging/fingerprints.txt`, résidu temporaire de contrôle d'assets suivi par Git ;
- `src/data/brassopedie/index.json`, index non utilisé, limité à 9 collections et pointant vers des fichiers `.json` qui n'existent plus dans le modèle canonique actuel.

Ils sont supprimés. `.staging/` est désormais ignoré par Git.

Le README interne de `src/data/brassopedie/` a également été remis en phase avec l'achèvement des 10 collections.

---

## 4. Optimisations appliquées dans cette branche

### 4.1 Badges chargés à la demande

L'écran Badges n'est plus monté au démarrage de l'application.

- `badges-view.js` est importé lors de la première ouverture de la vue ;
- `badges.css` suit le même cycle ;
- l'instance est ensuite conservée et rafraîchie aux ouvertures suivantes.

Le **moteur de badges**, son stockage et l'évaluation des déblocages restent volontairement chargés au démarrage afin de préserver le comportement fonctionnel actuel.

### 4.2 Bibliothèque Brassopédie chargée à la demande

La vue bibliothèque Brassopédie et sa feuille de style ne sont plus chargées pendant le boot de la ZythoSphère.

Elles sont importées lors de la première ouverture de la Brassopédie ou lors de la sélection explicite d'une collection dans sa navigation.

Le panneau Brassopédie utilisé pendant une révélation reste dans le chemin initial puisqu'il fait partie du fonctionnement direct de la ZythoSphère.

### 4.3 Recherche globale légère

La recherche inter-collections s'appuie sur un index généré avant `dev` et `build`.

Conséquences attendues :

- recherche locale : aucun chargement supplémentaire ;
- recherche externe : lecture du petit index, puis chargement de la seule collection cible au moment du changement ;
- recherche inconnue : lecture du petit index uniquement ;
- aucune importation en cascade des contenus Brassopédie pour résoudre une saisie.

### 4.4 Shell PWA allégé

Le logo de 2,84 Mo sort du précache obligatoire. `beer-search-index.json` y entre afin de maintenir la résolution globale hors ligne.

### 4.5 Nettoyage des résidus

- suppression de `.staging/fingerprints.txt` ;
- ajout de `.staging/` au `.gitignore` ;
- suppression de l'ancien `src/data/brassopedie/index.json` ;
- mise à jour du README interne des données Brassopédie.

---

## 5. Ce qui n'est volontairement pas modifié dans cette passe

Cette PR ne modifie pas :

- le README racine, réservé à l'étape 2 de la feuille de route ;
- la logique fonctionnelle des Badges, réservée à l'étape 3 ;
- la future feature Réglages, réservée à l'étape 4 ;
- la future feature Dégustation, réservée à l'étape 5 ;
- le visuel ou le contenu binaire de `public/logo.png` ;
- les candidats legacy encore insuffisamment prouvés comme morts.

---

## 6. Suite recommandée du point 1

1. **Valider la nouvelle CI** après génération de l'index et modification du précache.
2. **Optimiser réellement les variantes d'icônes PWA/favicon** lorsque les assets binaires peuvent être retraités proprement.
3. **Élaguer les candidats legacy** uniquement après vérification par tests et contrôle visuel.
4. **Extraire les contrôleurs de feature** au rythme des étapes Badges/Réglages/Dégustation afin que `app-runtime.js` cesse de grossir.

---

## 7. Vérifications attendues sur la PR

La CI doit exécuter au minimum :

- typecheck standard et strict ;
- tests Node, y compris les garde-fous du resolver global ;
- contrôle d'inventaire des images ;
- build Vite ;
- génération de l'index de recherche ;
- préparation PWA ;
- Playwright + axe sur desktop, mobile et tablette.

Contrôles manuels recommandés :

- démarrage direct sur ZythoSphère ;
- recherche locale ;
- recherche d'un style appartenant à une autre collection ;
- recherche inconnue ;
- changement de collection ;
- révélation d'une carte et notification d'un badge ;
- première puis seconde ouverture des Badges ;
- première puis seconde ouverture de la Brassopédie ;
- sélection directe d'une collection Brassopédie depuis la sidebar ;
- retour ZythoSphère sans perte de session ;
- fonctionnement hors ligne après installation du nouveau service worker.

## 8. Conclusion

Le dépôt n'est pas actuellement dans un état « spaghetti ». Le refactor récent a supprimé une grande partie des défauts structurels qui justifiaient l'audit du 8 août.

Cette passe remet désormais les frontières de chargement en phase avec la croissance de la Brassopédie : les vues secondaires sont différées et la recherche globale n'importe plus le corpus encyclopédique par ricochet.

Le risque principal devient donc organisationnel : les prochaines features ne doivent pas ajouter leurs détails directement dans `app-runtime.js`. Côté performance, la dette la plus visible restante est l'optimisation réelle des variantes d'icônes PWA/favicon.
