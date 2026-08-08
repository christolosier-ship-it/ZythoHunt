# Audit complet du code — 8 août 2026

## 1. Synthèse exécutive

ZythoHunt est une application Vite monopage, sans backend, organisée en modules fonctionnels cohérents. La séparation entre données, découverte, carrousel, révélation, Brassopédie, badges et PWA est lisible. Les validateurs de collections et les 76 tests unitaires actuellement présents donnent une bonne protection à la logique métier. Le typecheck, les tests et le build de production passent.

L'audit ne met en évidence ni injection de contenu utilisateur, ni secret embarqué, ni appel à une API métier distante. Le principal risque de sécurité classique est donc faible. En revanche, quatre sujets méritent une action prioritaire : l'accessibilité de la modale de révélation, le poids du bundle initial, la persistance silencieusement non garantie et la stratégie de cache PWA non bornée.

**Avis global : base saine, maintenable à court terme, mais non prête à être qualifiée comme robuste en production sur mobile/PWA sans traiter les points P1 et P2 ci-dessous.**

## 2. Périmètre et méthode

L'audit couvre :

- la composition de l'application et les changements de collection ;
- le carrousel, le cycle de révélation et la navigation clavier ;
- les données des neuf collections et leurs validateurs ;
- la Brassopédie et les badges ;
- les stockages locaux ;
- le service worker, le manifest et le build Vite ;
- les tests, la vérification statique, les dépendances et les scripts d'assets.

Contrôles exécutés : `pnpm check`, inspection du build Vite, `pnpm audit --prod` et `pnpm assets:thumbs:check`. Les deux derniers contrôles sont restés incomplets pour des raisons d'environnement documentées en section 8.

Quelques métriques observées :

- 76 tests, tous réussis ;
- 87 modules transformés par Vite ;
- bundle JavaScript minifié de **1 294,34 kB** (**319,06 kB gzip**) ;
- environ **132 MB** d'assets publics et 646 fichiers sous `public/assets` ;
- environ **2 MB** de sources, dont une part majeure est constituée des données Brassopédie.

## 3. Points forts

### Architecture et lisibilité

- Les responsabilités sont réellement séparées par domaine, et `main.js` joue principalement le rôle de composition.
- Les sessions de collection possèdent un cycle de destruction explicite ; les écouteurs complexes utilisent majoritairement `AbortController` ou une fonction de nettoyage.
- Le changement de collection utilise un numéro de séquence pour empêcher une opération dépassée de remplacer la session courante.
- Les données sont assemblées par bundles et validées structurellement avant usage.

### Sécurité applicative

- Les entrées de recherche sont résolues comme du texte et ne sont pas injectées en HTML.
- Les vues construisent l'essentiel du contenu dynamique avec `textContent` et des nœuds DOM.
- Les données restent locales ; aucun compte, jeton, secret ou backend n'élargit la surface d'attaque.
- Les rares usages de `innerHTML` concernent une structure interne ou des constantes d'icônes contrôlées par le dépôt.

### Qualité fonctionnelle

- Les tests couvrent la résolution des styles, les migrations de progression, les changements de collection, le cycle de révélation, le calcul des badges, les formatteurs, les fallbacks d'images et les validateurs de données.
- Les opérations de révélation restaurent le contexte et déverrouillent l'interface même en cas d'échec.
- Les détails Brassopédie disposent d'un focus initial, d'une boucle de tabulation, d'une fermeture à `Escape` et d'une restauration du focus.

## 4. Constats et recommandations

### P1 — Corriger le confinement de focus de la modale de révélation

**Constat.** La modale de révélation annonce `aria-modal="true"`, mais ne rend inertes que l'en-tête, le formulaire et le carrousel. La barre latérale demeure interactive. En outre, la boucle de focus ne traite que les bornes lorsque le focus est déjà dans la modale : un clic sur la barre latérale peut donc sortir le focus du dialogue et permettre de changer de vue pendant une révélation.

**Impact.** Rupture WCAG sur le comportement modal, expérience confuse pour les utilisateurs clavier ou de technologies d'assistance, et risque de modifier l'interface derrière une animation en cours.

**Correction recommandée.** Rendre inerte le conteneur applicatif situé derrière la modale (ou au minimum `#app-sidebar` et toutes les vues), conserver uniquement l'overlay actif, et ajouter un test DOM couvrant clic extérieur, tabulation et restauration du focus. Mutualiser idéalement le gestionnaire de dialogue déjà mieux implémenté dans la Brassopédie.

### P1 — Découper le bundle initial et charger les collections à la demande

**Constat.** Les neuf très gros modules Brassopédie sont importés dans le graphe initial. Le build émet un bundle JavaScript minifié de 1,29 MB et l'avertissement Vite de chunk supérieur à 500 kB.

**Impact.** Temps de téléchargement, parsing et exécution élevés, surtout sur mobile ; mémoire accrue ; écran de chargement plus long ; chaque correction éditoriale invalide potentiellement le gros chunk applicatif.

**Correction recommandée.** Introduire des `import()` dynamiques par collection, séparer au minimum GSAP/Draggable des données, et ne charger la fiche Brassopédie complète qu'à l'ouverture. Fixer un budget mesurable dans la CI (taille initiale gzip et taille des chunks).

### P1 — Ne pas masquer les échecs de persistance

**Constat.** Les écritures `localStorage` de la progression capturent toute erreur sans la remonter. La carte reste marquée en mémoire et l'interface annonce une découverte réussie même si le quota est dépassé, si le stockage est désactivé ou si le navigateur refuse l'accès.

**Impact.** Perte silencieuse de progression au rechargement, incohérence entre badges, interface et état durable ; problème particulièrement sensible en navigation privée ou dans certains contextes embarqués.

**Correction recommandée.** Faire retourner un statut à `write` et `markDiscovered`, n'émettre le succès durable qu'après confirmation, afficher un avertissement non bloquant si le stockage est indisponible, et tester un adaptateur de stockage qui lance une exception. Appliquer la même politique aux badges et statistiques.

### P2 — Borner et versionner finement le cache PWA

**Constat.** Toutes les images consultées sont conservées dans un cache unique sans limite d'âge, de nombre ou de volume. Avec environ 132 MB d'assets publics, une exploration complète peut consommer une quantité significative de stockage. Le cache n'est supprimé qu'au changement de constante globale. Aucun shell minimal n'est précaché : une première visite hors ligne ne fonctionne pas et seules les ressources déjà vues sont disponibles.

**Impact.** Pression sur le quota, éviction imprévisible par le navigateur et promesse hors ligne partielle. Une mise à jour force aussi l'activation immédiate et peut recharger une page ouverte sans demander à l'utilisateur.

**Correction recommandée.** Séparer shell, code et images ; précacher un shell minimal produit depuis le manifeste de build ; définir une politique LRU/expiration pour les images ; prévoir une page de repli hors ligne ; afficher une proposition de mise à jour plutôt que recharger automatiquement pendant une interaction.

### P2 — Renforcer la vérification statique

**Constat.** TypeScript vérifie du JavaScript avec `strict: false`, `noImplicitAny: false` et `strictNullChecks: false`. Plusieurs frontières centrales sont annotées `any`, notamment la composition et le moteur de révélation. Les tests sont exclus du typecheck.

**Impact.** Les erreurs de contrats entre modules, de valeurs nulles DOM et de payloads de callbacks peuvent franchir la CI malgré un `pnpm typecheck` vert.

**Correction recommandée.** Activer progressivement `strictNullChecks`, typer les bundles, cartes, résultats de résolution et sessions via JSDoc ou TypeScript, puis inclure les tests dans une configuration dédiée. Remplacer les `Any` structurants par des interfaces explicites.

### P2 — Ajouter des tests navigateur, accessibilité et PWA

**Constat.** La suite actuelle est rapide et utile mais simule largement le DOM. Aucun outil E2E n'exerce un vrai navigateur, GSAP/Draggable, la navigation tactile, les modales, le service worker ou le stockage réel. Aucun audit automatisé d'accessibilité ou de performance n'est configuré.

**Impact.** Les régressions d'intégration les plus probables — focus, inert, responsive, gestures, cache, installation PWA, chargement d'images — restent hors couverture.

**Correction recommandée.** Ajouter quelques parcours Playwright sur desktop et mobile, `axe-core` sur les vues et dialogues, et Lighthouse CI avec budgets. Tester au minimum : révélation complète, bascule inter-collection, fiche Brassopédie, persistance après rechargement, mise à jour/offline du service worker.

### P2 — Ajouter une politique CSP et réduire les dépendances externes au runtime

**Constat.** Le document ne définit pas de Content Security Policy et charge des polices depuis Google. Le code actuel échappe correctement les données, mais une CSP constituerait une seconde barrière contre une future injection. Les polices externes ne bénéficient pas du cache applicatif et exposent une requête tierce.

**Impact.** Défense en profondeur limitée, dépendance réseau et confidentialité perfectible.

**Correction recommandée.** Auto-héberger les fontes (avec licences vérifiées), puis déployer une CSP restrictive par en-tête HTTP. Commencer en `Report-Only`, autoriser explicitement les besoins de Vite/GSAP du build produit et supprimer les styles inline dynamiques si nécessaire avant durcissement.

### P3 — Nettoyer le flux de révélation différée inutilisé

**Constat.** `setPendingReveal` et `clearPendingReveal` sont exportés mais ne sont appelés nulle part ; seul `takePendingReveal` est utilisé au démarrage. Le mécanisme ne peut donc pas créer une révélation différée avec le code actuel et peut seulement consommer une ancienne valeur déjà présente.

**Impact.** Dette technique et ambiguïté sur le comportement attendu ; une valeur visant une autre collection est supprimée sans être rejouée.

**Correction recommandée.** Supprimer ce stockage si le changement de collection en mémoire est le flux définitif, ou rétablir un contrat complet et testé qui sélectionne d'abord la collection portée par la valeur différée.

### P3 — Durcir les retours utilisateur et la supervision

**Constat.** Les erreurs de démarrage, de collection et de révélation sont essentiellement envoyées dans la console. La demande de permission de notification n'est pas protégée contre un rejet de promesse. Il n'existe ni journal applicatif structuré ni collecte d'erreurs — ce qui est acceptable pour une application locale, mais limite fortement le diagnostic en production.

**Correction recommandée.** Centraliser un petit gestionnaire d'erreurs, présenter des actions de récupération accessibles, capturer le rejet de `Notification.requestPermission`, et prévoir une télémétrie opt-in respectueuse de la vie privée uniquement si le produit en a besoin.

## 5. Maintenabilité et données

Les données éditoriales dominent la taille du dépôt et du bundle. Leur format est validé, ce qui est un excellent point, mais les modules JavaScript générés de plusieurs centaines de kilo-octets compliquent les revues. À moyen terme, il serait préférable de :

1. conserver une source canonique JSON validée par schéma ;
2. générer les index de recherche et modules optimisés pendant le build ;
3. vérifier en CI qu'identifiants, alias et chemins d'assets sont uniques ;
4. publier un rapport des assets manquants et des dimensions/poids anormaux ;
5. charger les détails éditoriaux séparément du catalogue minimal nécessaire à la recherche.

Le script de miniatures va dans cette direction, mais son contrôle dépend de Pillow sans bootstrap automatique dans le script principal de qualité.

## 6. Performance

Le fond animé tient compte de `prefers-reduced-motion`, adapte les particules par palier et suspend l'animation lorsque le document est caché. Le carrousel limite aussi sa fenêtre de rendu/préchargement. Ces choix sont pertinents.

Les gains prioritaires restent néanmoins :

1. code-splitting des données et des vues ;
2. compression et budgets d'images par famille ;
3. mesure du LCP/INP sur matériel mobile moyen ;
4. cache d'images borné ;
5. auto-hébergement et sous-ensemble des fontes.

## 7. Sécurité et confidentialité

Le niveau de risque intrinsèque est contenu par l'architecture entièrement statique. Aucun résultat d'audit de vulnérabilités npm ne peut cependant être affirmé : l'endpoint npm a répondu HTTP 403 pendant la revue. Le lockfile fixe les versions, et le projet ne comporte qu'une dépendance runtime directe (`gsap`), ce qui limite la surface de supply chain.

Avant une mise en production formelle :

- exécuter l'audit de dépendances dans une CI autorisée à joindre le registre ;
- activer Dependabot ou Renovate avec validation par `pnpm check` ;
- servir les en-têtes CSP, `X-Content-Type-Options`, `Referrer-Policy` et `Permissions-Policy` depuis l'hébergeur ;
- documenter clairement la conservation locale et la permission de notification ;
- ne jamais introduire de donnée sensible dans `localStorage`.

## 8. Résultats des contrôles

| Contrôle | Résultat | Observation |
| --- | --- | --- |
| `pnpm check` | Réussi | Typecheck, 76/76 tests et build réussis ; avertissement de moteur car l'environnement fournit Node 20 au lieu de Node 24. |
| `pnpm build` (via `pnpm check`) | Réussi avec avertissement | Chunk JavaScript de 1 294,34 kB, au-dessus du seuil Vite de 500 kB. |
| `pnpm audit --prod` | Non conclu | Endpoint npm audit inaccessible : HTTP 403. Aucun résultat de vulnérabilité ne doit en être déduit. |
| `pnpm assets:thumbs:check` | Non conclu | Dépendance Python Pillow absente (`ModuleNotFoundError: PIL`). |

## 9. Conclusion — liste ordonnée des points à corriger

### Avant une qualification production

1. **P1 :** confiner correctement le focus et rendre toute l'application arrière inactive pendant la révélation.
2. **P1 :** découper le bundle initial, en priorité les neuf collections Brassopédie.
3. **P1 :** rendre visibles et testables les échecs de persistance locale.
4. **P2 :** borner le cache PWA, précacher un shell minimal et maîtriser le cycle de mise à jour.
5. **P2 :** ajouter des parcours navigateur et des audits accessibilité/performance.
6. **P2 :** renforcer progressivement les types et vérifier aussi les tests.
7. **P2 :** déployer une CSP et, si possible, auto-héberger les fontes.

### Entretien à planifier

8. **P3 :** supprimer ou terminer le mécanisme de révélation différée.
9. **P3 :** centraliser les erreurs et protéger la demande de permission de notification.
10. **P3 :** intégrer l'audit npm et le contrôle des miniatures dans une CI reproductible avec les dépendances nécessaires.

Après correction des trois P1, puis ajout des tests E2E/accessibilité et de budgets de build, le projet disposera d'une base solide pour évoluer sans dégrader l'expérience mobile, la fiabilité de la progression ou l'accessibilité.
