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

Il reste cependant deux sujets de performance à haute priorité :

1. **La recherche globale traverse encore les collections en chargeant leurs bundles complets.** Or ces bundles embarquent désormais les textes complets de la Brassopédie. Une recherche sans résultat peut donc charger et parser successivement presque tout le corpus encyclopédique.
2. **`public/logo.png` pèse 2 842 386 octets.** Ce même fichier sert de favicon, d'Apple Touch Icon, d'icône PWA et fait partie du précache du service worker. Le coût est disproportionné pour un asset d'interface récurrent.

Un troisième sujet est architectural plutôt que directement mesurable : `src/app/app-runtime.js` devient progressivement le point de convergence de trop de responsabilités. Il reste lisible, mais l'ajout prochain de fonctionnalités Badges, Réglages et Dégustation en ferait rapidement un nouveau noyau spaghetti si aucune frontière n'est posée.

Cette branche applique immédiatement les nettoyages et optimisations à faible risque, puis documente séparément les refactors qui nécessitent une passe dédiée et des garde-fous fonctionnels.

---

## 3. Constat détaillé

### P0 — Aucun blocage critique détecté

Aucun problème de corruption de données, boucle de chargement, rupture PWA ou dette nécessitant une intervention d'urgence n'a été identifié dans cette passe.

### P1 — Recherche globale couplée aux bundles encyclopédiques

#### Constat

`src/discovery/global-beer-resolver.js` cherche d'abord dans la collection active, puis parcourt les autres entrées du catalogue. Lorsqu'une collection n'est pas déjà chargée, le resolver appelle son `load()` afin de construire le manager et poursuivre la recherche.

Parallèlement :

- chaque module de collection importe son fichier canonique Brassopédie ;
- `createCollectionBundle()` conserve les données encyclopédiques dans le bundle ;
- les 10 fichiers canoniques de `src/data/brassopedie/` représentent environ **2,11 Mio de source JavaScript** au total.

#### Impact

Une recherche valide visant une autre collection peut charger plusieurs chunks avant d'atteindre la bonne collection. Une faute de frappe ou une bière inconnue peut, dans le pire cas, télécharger et parser successivement presque toutes les collections restantes uniquement pour conclure à l'absence de résultat.

Ce coût a fortement augmenté avec l'enrichissement complet de la Brassopédie.

#### Recommandation

Créer un **index de résolution léger généré depuis les sources canoniques**, contenant uniquement les informations nécessaires à la recherche :

- `collectionId` ;
- `cardId` ;
- nom affiché ;
- nom normalisé ;
- alias normalisés strictement nécessaires à la résolution.

Le resolver interrogerait cet index en mémoire, puis chargerait **un seul bundle**, celui de la collection réellement correspondante.

L'index doit être généré automatiquement à partir des sources existantes afin de ne pas créer une seconde vérité éditoriale manuelle.

#### Critères d'acceptation

- une recherche inconnue ne charge aucun bundle de collection supplémentaire ;
- une correspondance située dans une autre collection charge uniquement cette collection ;
- les alias existants conservent exactement leur comportement ;
- les tests couvrent correspondance exacte, alias, ambiguïté et absence de résultat ;
- aucune donnée encyclopédique longue n'est nécessaire au resolver global.

### P1 — Asset `public/logo.png` surdimensionné

#### Constat

`public/logo.png` pèse **2 842 386 octets**.

Il est référencé comme :

- favicon dans `index.html` ;
- Apple Touch Icon dans `index.html` ;
- icône 512 × 512 du manifeste PWA ;
- ressource du précache PWA ;
- ressource du service worker de secours.

#### Impact

Le même gros fichier est payé dans plusieurs contextes où une version bien plus légère suffit. Il augmente notamment la taille du shell hors ligne et le coût d'installation/mise à jour du cache.

#### Recommandation

Produire des icônes optimisées dédiées aux usages réels, par exemple :

- favicon léger ;
- Apple Touch Icon 180 × 180 ;
- icône PWA 192 × 192 ;
- icône PWA 512 × 512 optimisée.

Mettre à jour le manifeste et le précache pour ne conserver que les tailles nécessaires.

#### Critères d'acceptation

- manifeste PWA valide et installable ;
- icônes correctement affichées sur navigateur et écran d'accueil ;
- réduction nette du poids cumulé des assets d'icône ;
- fonctionnement hors ligne inchangé.

### P2 — `app-runtime.js` devient un orchestrateur trop large

#### Constat

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

Aucune de ces responsabilités n'est individuellement aberrante, mais leur accumulation crée un point de croissance unique.

#### Risque

Les trois prochaines fonctionnalités prévues, Badges, Réglages et Dégustation, vont mécaniquement accroître ce fichier si elles continuent à être pilotées directement depuis le runtime.

#### Recommandation

Avant ou pendant ces évolutions, extraire progressivement des contrôleurs de feature, par exemple :

- contrôleur Badges ;
- contrôleur Brassopédie ;
- contrôleur Réglages ;
- futur contrôleur Dégustation.

Le runtime principal devrait conserver la composition générale, le cycle de session et la navigation inter-feature, pas les détails internes de chaque feature.

### P2 — Frontière données de jeu / Brassopédie encore perfectible

Le lazy loading des collections est correct, mais un bundle de collection réunit encore données nécessaires à la ZythoSphère et contenu encyclopédique complet. Tant que le bundle n'est chargé qu'à bon escient, cela reste acceptable. Le problème apparaît dès qu'un service léger comme la recherche globale a besoin du même module.

La priorité n'est donc pas de dupliquer les fichiers de collection, mais de fournir aux usages légers des index générés adaptés à leurs besoins.

### P2 — Candidats legacy à vérifier avant suppression

Deux zones paraissent potentiellement obsolètes, mais ne doivent pas être supprimées sans validation supplémentaire :

- l'export synchrone `createCollectionManager()` dans `src/data/collection-manager.js`, alors que l'application utilise le manager lazy ;
- plusieurs règles historiques de grille dans `src/styles.css` (`#grid-container`, `#card-grid`, `.card-slot`, etc.) qui ne correspondent plus à la présentation principale en carrousel.

La recherche de références n'a pas fourni de consommateur évident, mais une suppression CSS ou d'API sans test visuel/structurel serait une fausse économie. Ces éléments doivent faire l'objet d'une passe de suppression contrôlée avec tests.

### P3 — Résidus et documentation interne obsolète

Deux éléments étaient clairement morts ou trompeurs :

- `.staging/fingerprints.txt`, résidu temporaire de contrôle d'assets suivi par Git ;
- `src/data/brassopedie/index.json`, index non utilisé, limité à 9 collections et pointant vers des fichiers `.json` qui n'existent plus dans le modèle canonique actuel.

Ils sont supprimés dans cette branche. `.staging/` est désormais ignoré par Git.

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

### 4.3 Nettoyage des résidus

- suppression de `.staging/fingerprints.txt` ;
- ajout de `.staging/` au `.gitignore` ;
- suppression de l'ancien `src/data/brassopedie/index.json` ;
- mise à jour du README interne des données Brassopédie.

---

## 5. Ce qui n'est volontairement pas modifié dans cette passe

Cette PR reste concentrée sur l'audit et les corrections sans ambiguïté. Elle ne modifie pas :

- le README racine, réservé à l'étape 2 de la feuille de route ;
- la logique fonctionnelle des Badges, réservée à l'étape 3 ;
- la future feature Réglages, réservée à l'étape 4 ;
- la future feature Dégustation, réservée à l'étape 5 ;
- le resolver global et la frontière des bundles, qui constituent le prochain refactor structurel du point 1 ;
- les fichiers binaires d'icône, qui nécessitent une vraie passe d'optimisation d'assets plutôt qu'une substitution approximative.

---

## 6. Ordre de traitement recommandé pour terminer le point 1

1. **Indexer la résolution globale** et empêcher une recherche inconnue de charger les collections encyclopédiques.
2. **Optimiser les icônes PWA/favicon**, particulièrement `public/logo.png`.
3. **Mesurer le build après séparation** : chunks d'entrée, chunks Badges, Brassopédie et collections.
4. **Élaguer les candidats legacy** uniquement après vérification par tests et contrôle visuel.
5. **Extraire les contrôleurs de feature** au rythme des étapes Badges/Réglages/Dégustation afin que `app-runtime.js` cesse de grossir.

---

## 7. Vérifications attendues sur la PR

La CI doit exécuter au minimum :

- contrôle syntaxique ;
- typecheck ;
- tests Node ;
- contrôle d'inventaire des images ;
- contrôle des liens de documentation ;
- build Vite et préparation PWA.

Contrôles manuels recommandés :

- démarrage direct sur ZythoSphère ;
- changement de collection ;
- révélation d'une carte et notification d'un badge ;
- première puis seconde ouverture des Badges ;
- première puis seconde ouverture de la Brassopédie ;
- sélection directe d'une collection Brassopédie depuis la sidebar ;
- retour ZythoSphère sans perte de session ;
- fonctionnement hors ligne après installation du nouveau service worker.

## 8. Conclusion

Le dépôt n'est pas actuellement dans un état « spaghetti ». Le refactor récent a supprimé une grande partie des défauts structurels qui justifiaient l'audit du 8 août.

Le risque principal est désormais plus subtil : **les frontières de chargement ne suivent plus complètement la croissance du contenu encyclopédique**. La Brassopédie est devenue volumineuse, ce qui est normal pour son rôle, mais les services légers doivent désormais pouvoir fonctionner sans l'importer par ricochet.

La priorité de performance suivante est donc claire : rendre la recherche globale réellement légère, puis alléger les assets PWA. Côté maintenabilité, la prochaine règle doit être tout aussi simple : les nouvelles features ne doivent plus ajouter leurs détails directement dans `app-runtime.js`.
