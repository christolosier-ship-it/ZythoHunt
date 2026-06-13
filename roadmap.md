# ZythoHunt — Roadmap de développement

> **Slogan :** « Buvez-les toutes. »  
> **Carte interactive :** la **Zythosphère**  
> **Encyclopédie :** la **Brassopédie**

---

## 0. Rôle de ce document

Ce fichier est la **source de vérité du suivi de développement** de ZythoHunt.

À chaque intervention sur le projet, Codex doit :

1. lire ce fichier avant toute modification ;
2. identifier la phase et la tâche en cours ;
3. ne pas commencer une phase dont les prérequis ne sont pas validés ;
4. mettre à jour les cases à cocher après réalisation et vérification ;
5. compléter le journal d’avancement en bas du document ;
6. signaler clairement tout écart entre le code et cette roadmap ;
7. ne jamais considérer une tâche comme terminée sans test ou contrôle associé.

### Convention de statut

- `[ ]` À faire
- `[~]` En cours
- `[x]` Terminé et vérifié
- `[!]` Bloqué ou à arbitrer

### Règle de versionnement

- **V0.x.x** : prototypes, fondations et bêta.
- **V1.0.0** : première version publique complète et stable.
- Toute évolution de version doit être répercutée dans tous les fichiers concernés :
  - interface ;
  - manifeste ;
  - service worker ;
  - métadonnées ;
  - exports ;
  - documentation.

---

# 1. Identité du produit

## Nom

**ZythoHunt**

## Slogan

**Buvez-les toutes.**

## Concepts principaux

- **Zythosphère** : cartographie interactive des familles et styles de bière.
- **Brassopédie** : encyclopédie des styles découverts.
- **Capture** : validation individuelle d’un style par saisie dans la barre de vérification.
- **Dégustation** : enregistrement d’une bière commerciale réellement goûtée.
- **Nœud structurel** : élément non capturable servant à organiser la cartographie.
- **Style capturable** : style de bière pouvant être découvert individuellement.

---

# 2. Vision produit

ZythoHunt est une PWA mobile-first permettant d’explorer et de compléter progressivement une cartographie mondiale des styles de bière.

L’utilisateur ne consulte pas une encyclopédie déjà entièrement ouverte. Il révèle la Zythosphère au fil de ses dégustations.

## Boucle principale

1. L’utilisateur goûte un style de bière.
2. Il saisit ce style dans la barre de vérification.
3. L’application cherche une correspondance dans les noms et alias.
4. La Zythosphère se centre sur l’emplacement correspondant.
5. Une bulle de bière contenant un `?` apparaît.
6. Le nom du style se révèle.
7. Une courte définition technique est affichée.
8. La bulle devient cliquable.
9. La fiche complète du style est disponible dans la Brassopédie.
10. Une ou plusieurs dégustations peuvent être associées au style.

---

# 3. Règles fonctionnelles immuables

Ces règles ne doivent pas être modifiées sans décision explicite du propriétaire du projet.

## 3.1 Visibilité de la cartographie

- Les **nœuds structurels** sont toujours visibles.
- Les **styles inconnus** ne sont pas visibles sur la carte.
- Un style inconnu n’affiche ni bulle, ni nom, ni fiche.
- Les coordonnées de tous les styles existent néanmoins dans les données.
- Les ramifications peuvent être visibles sans révéler les bulles ou les noms associés.
- La géométrie générale de la carte reste stable.

## 3.2 Capture

- Chaque style doit être capturé individuellement.
- Capturer un style ne capture jamais automatiquement :
  - son parent ;
  - ses enfants ;
  - ses voisins ;
  - ses liens secondaires.
- Exemple impératif :
  - capturer **West Coast IPA** ne révèle pas **IPA** ;
  - ne révèle pas **American IPA** ;
  - ne révèle pas **New England IPA**.
- Lors d’une capture, seule la bulle du style validé apparaît.
- Le chemin graphique peut être éclairé sans faire apparaître les autres styles.

## 3.3 Nœuds structurels

- Ils sont non capturables.
- Ils restent visibles avant et après toute découverte.
- Ils possèdent une apparence distincte des bulles de styles.
- Ils servent à comprendre l’organisation générale de la Zythosphère.

## 3.4 Dégustations

- Une capture et une dégustation sont deux objets distincts.
- Un style peut être capturé sans fiche de dégustation détaillée.
- Un style peut contenir plusieurs dégustations.
- La première dégustation peut déclencher la capture du style.
- Les dégustations ne modifient jamais les données encyclopédiques communes.

## 3.5 Bibliothèque

- La Brassopédie utilise la même source de données que la Zythosphère.
- Les styles inconnus y restent masqués ou verrouillés.
- Le nom et la description d’un style inconnu ne doivent pas être dévoilés.
- La bibliothèque ne doit pas détruire la mécanique de découverte.

---

# 4. Doctrine technique

## 4.1 Cible

- PWA mobile-first.
- Compatible iPhone Safari.
- Compatible Android, tablette et ordinateur.
- Fonctionnement hors ligne.
- Installation sur l’écran d’accueil.
- Hébergement possible sur GitHub Pages.
- Aucun compte utilisateur.
- Aucun backend obligatoire.
- Aucun cloud obligatoire.
- Aucune publicité.

## 4.2 Technologies recommandées

- HTML5.
- CSS moderne.
- JavaScript vanilla modulaire.
- Modules ES6.
- SVG pour la Zythosphère.
- IndexedDB pour les données personnelles.
- Service Worker pour le mode hors ligne.
- Manifest Web App.
- JSON pour le référentiel.
- Import/export JSON pour les sauvegardes.

## 4.3 Bibliothèques externes

Principe : ne pas ajouter une dépendance sans besoin démontré.

- Zoom, pan et focus : commencer en natif.
- D3.js peut être ajouté uniquement si la gestion native devient trop fragile.
- Ne pas utiliser de moteur de graphe à simulation physique permanente.
- Ne pas utiliser de CDN obligatoire.
- Toute dépendance retenue doit être incluse localement et documentée.

## 4.4 Architecture des données

Séparer strictement :

### Référentiel commun

- taxonomie ;
- liens ;
- alias ;
- fiches encyclopédiques ;
- positions fixes ;
- couleurs ;
- métadonnées.

### Données personnelles

- styles découverts ;
- dates de découverte ;
- dégustations ;
- réglages ;
- progression ;
- sauvegardes.

Une mise à jour du référentiel ne doit jamais supprimer les données personnelles.

---

# 5. Architecture cible du dépôt

```text
zythohunt/
├── index.html
├── README.md
├── ROADMAP.md
├── AGENTS.md
├── manifest.webmanifest
├── service-worker.js
│
├── assets/
│   ├── icons/
│   ├── fonts/
│   ├── textures/
│   └── illustrations/
│
├── data/
│   ├── taxonomy-nodes.json
│   ├── taxonomy-links.json
│   ├── encyclopedia.json
│   ├── aliases.json
│   └── taxonomy-version.json
│
├── src/
│   ├── app.js
│   │
│   ├── domain/
│   │   ├── taxonomy.js
│   │   ├── discovery.js
│   │   ├── search.js
│   │   └── progression.js
│   │
│   ├── map/
│   │   ├── map-renderer.js
│   │   ├── viewport.js
│   │   ├── bubbles.js
│   │   ├── links.js
│   │   └── discovery-animation.js
│   │
│   ├── encyclopedia/
│   │   ├── encyclopedia-view.js
│   │   ├── style-sheet.js
│   │   └── library-filters.js
│   │
│   ├── tastings/
│   │   ├── tasting-form.js
│   │   ├── tasting-list.js
│   │   └── tasting-service.js
│   │
│   ├── ui/
│   │   ├── navigation.js
│   │   ├── modal.js
│   │   ├── bottom-sheet.js
│   │   ├── search-dialog.js
│   │   └── toast.js
│   │
│   └── storage/
│       ├── database.js
│       ├── migrations.js
│       ├── backup.js
│       └── validation.js
│
├── styles/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── map.css
│   ├── bubbles.css
│   ├── encyclopedia.css
│   ├── modals.css
│   └── animations.css
│
├── tools/
│   └── zythosphere-editor/
│
└── tests/
    ├── taxonomy/
    ├── search/
    ├── storage/
    └── e2e/
```

Cette arborescence est une cible. Elle peut évoluer si une meilleure organisation est démontrée et documentée.

---

# 6. Roadmap de développement

---

## PHASE 0 — Cadrage et fondations documentaires

### Objectif

Éliminer les ambiguïtés avant le premier développement significatif.

### Tâches

- [x] Créer `README.md`.
- [x] Créer `AGENTS.md`.
- [x] Reprendre dans `AGENTS.md` l’obligation de consulter et mettre à jour `roadmap.md`.
- [x] Créer `docs/PROJECT_CHARTER.md`.
- [x] Créer `docs/UX_RULES.md`.
- [x] Créer `docs/TAXONOMY_RULES.md`.
- [x] Créer `docs/DATA_MODEL.md`.
- [x] Définir les conventions de nommage des identifiants.
- [x] Définir les conventions de versionnement.
- [x] Définir les règles de migration IndexedDB.
- [x] Définir les critères de validation d’une phase.
- [x] Documenter les éléments explicitement hors périmètre de la V1.

### Critères de validation

- [x] Les règles de révélation sont décrites sans ambiguïté.
- [x] La différence entre structure, style, capture et dégustation est documentée.
- [x] Les futures modifications peuvent être évaluées contre des règles écrites.
- [x] Codex dispose d’instructions claires sur le suivi du projet.

### Version cible

**Préparation du dépôt**

---

## V0.1.0 — Prototype taxonomique et Zythosphère minimale

### Objectif

Prouver que le modèle de données et la carte à positions fixes fonctionnent.

### Périmètre

Une branche de démonstration autour des Pale Ale et IPA, limitée à environ 15 à 20 styles.

### Tâches taxonomiques

- [x] Créer `taxonomy-nodes.json`.
- [x] Créer `taxonomy-links.json`.
- [x] Créer `aliases.json`.
- [x] Créer `taxonomy-version.json`.
- [x] Ajouter les nœuds structurels du prototype.
- [x] Ajouter les styles capturables du prototype.
- [x] Attribuer un identifiant stable à chaque nœud.
- [x] Attribuer une position fixe à chaque nœud.
- [x] Définir les liens principaux.
- [x] Définir les liens secondaires nécessaires.
- [x] Ajouter un validateur de cohérence du graphe.
- [x] Détecter les identifiants dupliqués.
- [x] Détecter les parents inexistants.
- [x] Détecter les cycles interdits dans la hiérarchie principale.

### Tâches cartographiques

- [x] Créer le conteneur SVG.
- [x] Implémenter le déplacement tactile.
- [x] Implémenter le zoom tactile.
- [x] Implémenter le zoom à la molette.
- [x] Ajouter le recentrage.
- [x] Ajouter le retour à la vue générale.
- [x] Rendre les nœuds structurels visibles.
- [x] Masquer totalement les styles inconnus.
- [x] Rendre visibles les styles découverts de test.
- [x] Tracer les connexions principales.
- [x] Tracer les connexions secondaires.
- [x] Garantir que la géométrie ne se recalcule pas après découverte.

### Tests obligatoires

- [!] La carte fonctionne sur iPhone Safari.
- [x] La carte fonctionne à la souris.
- [x] Le zoom ne déplace pas accidentellement les nœuds.
- [x] Les styles cachés ne sont pas accessibles comme éléments interactifs visibles.
- [x] Une nouvelle découverte ne déplace aucun nœud existant.
- [x] Les coordonnées restent identiques après rechargement.

### Critère de sortie

La branche prototype est stable, navigable et cohérente, même sans habillage graphique définitif.

---


## V0.1.1 : Correctifs structurels et outils de test

### Objectif

Corriger les défauts structurels, cartographiques, de validation et de test manuel observés sur la V0.1.0, sans commencer la V0.2.0.

### Tâches

- [x] Ajouter Fermentation spontanée.
- [x] Ajouter Fermentation mixte / sauvage.
- [x] Ajouter les liens principaux depuis `beer`.
- [x] Mettre à jour les compteurs : 28 nœuds, 8 structures, 20 capturables, 27 liens principaux, 2 liens secondaires.
- [x] Mettre à jour les versions applicative et taxonomique.
- [x] Corriger le viewBox SVG pour le monde `2400 × 1800`.
- [x] Centraliser la conversion écran vers SVG.
- [x] Fiabiliser pan, molette, pinch, pointercancel et perte de capture.
- [x] Cadrer automatiquement le scénario actif au chargement.
- [x] Corriger la vue générale avec les extrémités de liens visibles.
- [x] Ajouter l'outil debug « Révéler un style de test » sans persistance.
- [x] Synchroniser scénario, cases, compteurs et carte dans le panneau développeur.
- [x] Retirer les faux rôles bouton des styles non interactifs.
- [x] Restaurer la conception responsable dans le README.
- [x] Reformater les fichiers JavaScript principaux.
- [x] Renforcer le validateur taxonomique.
- [x] Ajouter des tests automatisés V0.1.1.
- [x] Créer `tests/manual/V0.1.1-CHECKLIST.md`.
- [~] Tests navigateur graphiques : serveur local vérifié par HTTP, validation visuelle réelle à faire.
- [!] iPhone Safari réel indisponible dans l'environnement agent.

### Critère de sortie

Prototype V0.1.1 prêt pour validation humaine, avec V0.2.0 explicitement non démarrée.

---

## V0.2.0 — Direction artistique et moteur de bulles

### Objectif

Créer l’identité visuelle définitive des nœuds et des styles.

### États visuels

- [ ] Nœud structurel.
- [ ] Style masqué.
- [ ] Révélation en attente.
- [ ] Style découvert.
- [ ] Style sélectionné.
- [ ] Style approfondi, préparé mais non nécessairement activé en V1.

### Apparence des styles

- [ ] Créer le contour effet verre.
- [ ] Créer le liquide intérieur.
- [ ] Définir les nuances par famille.
- [ ] Ajouter un reflet supérieur.
- [ ] Ajouter un léger halo.
- [ ] Ajouter des microbulles discrètes.
- [ ] Ajouter une respiration lente de 1 à 2 % maximum.
- [ ] Définir le `?` stylisé.
- [ ] Définir la police d’identité des styles.
- [ ] Définir la police d’interface lisible.
- [ ] Tester les noms courts.
- [ ] Tester les noms longs.
- [ ] Garantir la lisibilité sur petit écran.

### Apparence des nœuds structurels

- [ ] Les rendre plus grands.
- [ ] Les rendre plus mats.
- [ ] Limiter l’effet liquide.
- [ ] Les distinguer clairement des styles.
- [ ] Conserver une microanimation très légère.
- [ ] Ne pas les rendre capturables.

### Animation

- [ ] Stopper ou réduire les animations pendant le pan.
- [ ] Stopper ou réduire les animations pendant le zoom.
- [ ] Respecter `prefers-reduced-motion`.
- [ ] Prévoir un réglage utilisateur « Réduire les animations ».
- [ ] Éviter les filtres SVG trop coûteux.

### Critère de sortie

Un utilisateur distingue immédiatement la structure, une découverte en cours et un style déjà découvert.

---

## V0.3.0 — Barre de vérification et capture

### Objectif

Implémenter la boucle principale de découverte.

### Moteur de recherche

- [ ] Normaliser la casse.
- [ ] Ignorer les accents.
- [ ] Ignorer les tirets.
- [ ] Normaliser les espaces.
- [ ] Rechercher dans les noms officiels.
- [ ] Rechercher dans les alias.
- [ ] Gérer les abréviations.
- [ ] Gérer une tolérance limitée aux fautes légères.
- [ ] Empêcher l’autocomplétion de révéler les styles inconnus.
- [ ] Autoriser l’autocomplétion des styles déjà découverts.
- [ ] Autoriser l’affichage des nœuds structurels dans la navigation.

### Cas fonctionnels

#### Correspondance exacte

- [ ] Fermer le clavier.
- [ ] Centrer la carte.
- [ ] Mettre la branche en évidence.
- [ ] Faire apparaître la bulle avec `?`.
- [ ] Révéler le nom.
- [ ] Afficher la bafouille technique.
- [ ] Enregistrer la découverte.
- [ ] Rendre la bulle cliquable.

#### Style déjà découvert

- [ ] Centrer la carte sur le style.
- [ ] Éviter de rejouer toute l’animation.
- [ ] Proposer d’ajouter une dégustation.

#### Recherche trop vague

- [ ] Demander une précision.
- [ ] Ne pas afficher la liste complète des styles cachés.
- [ ] Ne pas révéler les noms proches inconnus.

#### Aucun résultat

- [ ] Afficher un message clair.
- [ ] Suggérer de vérifier l’étiquette.
- [ ] Prévoir un mécanisme de signalement local d’un style absent.

### Test cardinal

- [ ] Capturer `West Coast IPA`.
- [ ] Vérifier que seule `West Coast IPA` apparaît.
- [ ] Vérifier que `IPA` reste cachée si elle n’a pas été capturée.
- [ ] Vérifier que `American IPA` reste cachée.
- [ ] Vérifier que `New England IPA` reste cachée.
- [ ] Vérifier que les ramifications peuvent apparaître sans bulles supplémentaires.

### Critère de sortie

La mécanique de capture est fiable, satisfaisante et ne provoque aucune fuite encyclopédique.

---

## V0.4.0 — Brassopédie et fiches encyclopédiques

### Objectif

Rendre les styles découverts consultables sans quitter l’exploration.

### Fiche encyclopédique

- [ ] Créer le composant de fiche unique.
- [ ] Ouvrir la fiche depuis une bulle découverte.
- [ ] Rendre les bulles inconnues légèrement réactives mais non consultables.
- [ ] Afficher un message « Style inconnu » lors du toucher d’un élément verrouillé.
- [ ] Ne pas afficher de données encyclopédiques pour un style inconnu.

### Contenu

- [ ] Nom officiel.
- [ ] Alias.
- [ ] Famille.
- [ ] Fermentation.
- [ ] Origine.
- [ ] Description courte originale.
- [ ] Couleur indicative.
- [ ] Alcool indicatif.
- [ ] Amertume indicative.
- [ ] Corps.
- [ ] Carbonatation.
- [ ] Arômes dominants.
- [ ] Particularités techniques.
- [ ] Relations déjà découvertes.
- [ ] Nombre de relations inconnues sans révéler leur identité.
- [ ] Nombre de dégustations.
- [ ] Dernière dégustation.
- [ ] Accès à l’ajout d’une dégustation.

### Comportement adaptatif

#### Mobile

- [ ] Bottom sheet.
- [ ] Ouverture partielle.
- [ ] Extension plein écran.
- [ ] Fermeture par geste.
- [ ] Fermeture par bouton accessible.

#### Tablette et ordinateur

- [ ] Panneau latéral ou grande modale.
- [ ] Conservation de la position de la carte.

### Bibliothèque

- [ ] Créer la vue par familles.
- [ ] Afficher la progression par famille.
- [ ] Afficher les styles découverts.
- [ ] Afficher les emplacements inconnus verrouillés.
- [ ] Ajouter la recherche parmi les styles découverts.
- [ ] Ajouter le tri alphabétique.
- [ ] Ajouter le tri par date de découverte.
- [ ] Réutiliser exactement la même fiche qu’en Zythosphère.

### Critère de sortie

La Brassopédie est une vraie bibliothèque utile sans dévoiler la taxonomie cachée.

---

## V0.5.0 — Journal de dégustation

### Objectif

Enregistrer plusieurs bières commerciales pour un même style.

### Modèle de données minimal

- [ ] Identifiant unique.
- [ ] Identifiant du style.
- [ ] Nom commercial de la bière.
- [ ] Brasserie.
- [ ] Date.
- [ ] Lieu facultatif.
- [ ] Appréciation.
- [ ] Note libre.
- [ ] Date de création.
- [ ] Date de modification.

### Fonctionnalités

- [ ] Ajouter une dégustation.
- [ ] Modifier une dégustation.
- [ ] Supprimer une dégustation avec confirmation.
- [ ] Afficher les dégustations dans la fiche du style.
- [ ] Afficher les dégustations dans une vue dédiée.
- [ ] Trier par date.
- [ ] Filtrer par style.
- [ ] Rechercher par bière ou brasserie.
- [ ] Déterminer la bière favorite d’un style.
- [ ] Ne pas altérer les données encyclopédiques.

### Photos

- [ ] Hors périmètre initial.
- [ ] Préparer le modèle pour une intégration ultérieure.
- [ ] Ne pas alourdir la V1 sans validation explicite.

### Critère de sortie

Un style peut posséder plusieurs dégustations indépendantes, sauvegardées et modifiables.

---

## V0.6.0 — Cartographie brassicole complète

### Objectif

Remplacer la branche prototype par la taxonomie complète validée.

### Travaux taxonomiques

- [ ] Inventorier les nœuds structurels.
- [ ] Inventorier les styles capturables.
- [ ] Définir les rangs nécessaires sans imposer une profondeur uniforme.
- [ ] Définir le parent principal de chaque style.
- [ ] Définir les liens secondaires.
- [ ] Définir les alias.
- [ ] Définir les traductions utiles.
- [ ] Définir les familles chromatiques.
- [ ] Écrire des descriptions originales.
- [ ] Ajouter les profils techniques.
- [ ] Ajouter les sources documentaires.
- [ ] Vérifier les doublons.
- [ ] Vérifier les noms commerciaux utilisés abusivement comme styles.
- [ ] Vérifier les familles trop larges ou trop artificielles.
- [ ] Documenter les cas hybrides.

### Cas particuliers à vérifier

- [ ] Baltic Porter.
- [ ] Weizenbock.
- [ ] Witbier.
- [ ] Grodziskie.
- [ ] Gose.
- [ ] Berliner Weisse.
- [ ] California Common.
- [ ] Cream Ale.
- [ ] India Pale Lager.
- [ ] Fruit Lambic.
- [ ] Rauchbier.
- [ ] Kellerbier.
- [ ] Italian Grape Ale.

### Positionnement

- [ ] Attribuer les coordonnées fixes.
- [ ] Vérifier les collisions.
- [ ] Vérifier les noms longs.
- [ ] Vérifier les zones trop denses.
- [ ] Vérifier les ramifications secondaires.
- [ ] Tester les différents niveaux de zoom.

### Atelier de la Zythosphère

Créer un outil de développement séparé :

- [ ] Afficher tous les nœuds.
- [ ] Déplacer un nœud.
- [ ] Afficher les coordonnées.
- [ ] Éditer les liens.
- [ ] Vérifier les collisions.
- [ ] Exporter les coordonnées.
- [ ] Exporter les données validées.
- [ ] Ne pas inclure l’atelier dans la version publique.

### Critère de sortie

Chaque style retenu possède un identifiant stable, un rattachement, des coordonnées et une fiche minimale valide.

---

## V0.7.0 — Stockage, sauvegarde et PWA

### Objectif

Garantir la persistance, le hors-ligne et la sécurité des données.

### IndexedDB

Créer les stores :

- [ ] `discoveries`.
- [ ] `tastings`.
- [ ] `settings`.
- [ ] `app_meta`.

### Migrations

- [ ] Versionner le schéma.
- [ ] Créer le moteur de migration.
- [ ] Tester les mises à jour successives.
- [ ] Ne jamais effacer silencieusement les données.
- [ ] Journaliser les erreurs de migration.
- [ ] Prévoir une restauration de secours.

### Import/export

- [ ] Export JSON complet.
- [ ] Inclure la version du schéma.
- [ ] Inclure la version taxonomique.
- [ ] Valider le fichier avant import.
- [ ] Créer une sauvegarde automatique avant remplacement.
- [ ] Afficher un résumé avant confirmation.
- [ ] Fournir un rapport d’erreur lisible.
- [ ] Restaurer découvertes et dégustations sans dépendre des coordonnées anciennes.

### PWA

- [ ] Créer le manifeste.
- [ ] Créer le service worker.
- [ ] Définir la stratégie de cache.
- [ ] Prévoir une page hors ligne.
- [ ] Tester l’installation sur iPhone.
- [ ] Tester l’installation sur Android.
- [ ] Tester GitHub Pages.
- [ ] Prévoir une mise à jour propre du service worker.
- [ ] Éviter les boucles de rechargement.
- [ ] Référencer les icônes sans demander à Codex de générer des PNG.

### Critère de sortie

Une mise à jour de l’application ou du référentiel ne détruit jamais les découvertes ni les dégustations.

---

## V0.8.0 — Progression, accessibilité et finition

### Objectif

Polir la V1 sans transformer le projet en usine à gaz.

### Progression simple

- [ ] Nombre total de styles découverts.
- [ ] Pourcentage global.
- [ ] Progression par famille.
- [ ] Dernières découvertes.
- [ ] Familles presque complètes.
- [ ] Nombre total de dégustations.
- [ ] Style le plus dégusté.

### Hors périmètre initial

- [ ] Badges complexes.
- [ ] Classements.
- [ ] Défis communautaires.
- [ ] Réseau social.
- [ ] Système de rareté artificiel.
- [ ] Gamification envahissante.

### Accessibilité

- [ ] Respecter `prefers-reduced-motion`.
- [ ] Ajouter un réglage de réduction des animations.
- [ ] Assurer un contraste suffisant.
- [ ] Prévoir des zones tactiles d’au moins 44 px.
- [ ] Permettre la navigation clavier sur ordinateur.
- [ ] Ajouter des libellés accessibles.
- [ ] Ne jamais transmettre une information uniquement par la couleur.
- [ ] Tester le zoom texte.
- [ ] Tester l’orientation portrait et paysage.

### Performances

- [ ] Suspendre les animations hors écran.
- [ ] Suspendre les animations pendant les gestes.
- [ ] Limiter les filtres SVG coûteux.
- [ ] Éviter les recalculs de layout.
- [ ] Charger les données une seule fois.
- [ ] Mesurer le temps de démarrage.
- [ ] Mesurer les performances sur iPhone réel.
- [ ] Vérifier la consommation mémoire.

### Critère de sortie

L’application reste fluide, lisible et agréable sur un appareil mobile réel.

---

## V0.9.0 — Bêta fermée

### Objectif

Tester l’application dans des conditions réelles avant publication.

### Scénarios obligatoires

- [ ] Première ouverture.
- [ ] Onboarding.
- [ ] Première capture.
- [ ] Capture exacte.
- [ ] Recherche avec faute légère.
- [ ] Recherche ambiguë.
- [ ] Style déjà capturé.
- [ ] Plusieurs dégustations du même style.
- [ ] Consultation depuis la Zythosphère.
- [ ] Consultation depuis la Brassopédie.
- [ ] Zoom et déplacement prolongés.
- [ ] Rotation d’écran.
- [ ] Mode hors ligne.
- [ ] Mise à jour du service worker.
- [ ] Export.
- [ ] Réinitialisation.
- [ ] Import.
- [ ] Migration depuis une ancienne version.
- [ ] Réduction des animations.
- [ ] Utilisation sans mode d’emploi.

### Retours à collecter

- [ ] Compréhension de la capture.
- [ ] Compréhension des nœuds structurels.
- [ ] Lisibilité des bulles.
- [ ] Qualité de l’animation.
- [ ] Facilité de navigation.
- [ ] Utilité de la Brassopédie.
- [ ] Simplicité du journal.
- [ ] Frustrations liées aux styles cachés.
- [ ] Performances.
- [ ] Bugs bloquants.

### Critère de sortie

Aucun bug critique, aucune perte de données et aucun blocage majeur de compréhension.

---

## V1.0.0 — Première version publique

### Contenu attendu

- [ ] Identité ZythoHunt finalisée.
- [ ] Slogan intégré.
- [ ] Zythosphère complète.
- [ ] Nœuds structurels toujours visibles.
- [ ] Styles inconnus masqués.
- [ ] Capture par saisie.
- [ ] Animation `?` vers nom.
- [ ] Bulle découverte cliquable.
- [ ] Brassopédie.
- [ ] Fiches encyclopédiques.
- [ ] Journal de dégustation.
- [ ] Progression simple.
- [ ] IndexedDB.
- [ ] Import/export.
- [ ] PWA hors ligne.
- [ ] Compatibilité mobile, tablette et ordinateur.
- [ ] Documentation utilisateur.
- [ ] Documentation technique.
- [ ] Tests de non-régression.
- [ ] Version affichée partout de manière cohérente.

### Hors périmètre V1

- Compte utilisateur.
- Synchronisation multiappareil.
- Backend distant.
- Réseau social.
- Classement public.
- Scanner automatique d’étiquette.
- Reconnaissance d’image.
- Géolocalisation des bars.
- Photos en grand volume.
- Défis communautaires.
- Marketplace.
- Publicité.

---

# 7. Chemin critique

Ces points ont priorité absolue :

1. règles de révélation sans ambiguïté ;
2. modèle taxonomique robuste ;
3. géométrie fixe de la Zythosphère ;
4. qualité visuelle des bulles ;
5. moteur de recherche qui ne révèle pas les styles cachés ;
6. séparation entre référentiel et données personnelles ;
7. migrations sans perte de données ;
8. performances réelles sur mobile.

Aucune fonctionnalité secondaire ne doit retarder ou fragiliser ces fondations.

---

# 8. Dette technique et arbitrages

Toute dette technique acceptée doit être ajoutée ici.

| ID | Sujet | Motif | Risque | Version cible | Statut |
|---|---|---|---|---|---|
| DT-001 | À compléter |  |  |  |  |

---

# 9. Décisions structurantes

Toute décision importante doit être inscrite ici pour éviter les retours en arrière silencieux.

| Date | Décision | Motif | Impact |
|---|---|---|---|
| 2026-06-13 | Nom retenu : ZythoHunt | Identité ludique et mémorable | Toute l’application |
| 2026-06-13 | Slogan : « Buvez-les toutes. » | Positionnement collection et exploration | Identité |
| 2026-06-13 | Carte : Zythosphère | Nom officiel de la cartographie | UX et documentation |
| 2026-06-13 | Encyclopédie : Brassopédie | Nom officiel de la bibliothèque | UX et documentation |
| 2026-06-13 | Nœuds structurels toujours visibles | Lisibilité de la carte | Zythosphère |
| 2026-06-13 | Chaque style est capturé individuellement | Préserver la mécanique de chasse | Capture |
| 2026-06-13 | Une capture ne révèle aucun autre style | Préserver le mystère | Carte et recherche |
| 2026-06-13 | Carte stable avec microanimations | Lisibilité et identité visuelle | Moteur graphique |
| 2026-06-13 | Référentiel séparé des données personnelles | Sécurité des mises à jour | Architecture |

---

# 10. Journal d’avancement

Codex doit ajouter une entrée à chaque intervention significative.

## Modèle

```text
### AAAA-MM-JJ — Version ou phase

- Objectif :
- Réalisé :
- Fichiers créés ou modifiés :
- Tests effectués :
- Résultat :
- Problèmes rencontrés :
- Décisions prises :
- Prochaine étape recommandée :
```

---

## 2026-06-13 — Initialisation de la roadmap

- Objectif : formaliser le chantier ZythoHunt.
- Réalisé : création de la roadmap initiale.
- Fichiers créés ou modifiés : `ROADMAP.md`.
- Tests effectués : relecture de cohérence fonctionnelle.
- Résultat : feuille de route prête à être intégrée dans un dépôt vierge.
- Problèmes rencontrés : aucun.
- Décisions prises : suivi par phases et cases à cocher.
- Prochaine étape recommandée : créer le dépôt et exécuter la Phase 0.

---

## 2026-06-13 — Phase 0 documentaire

- Objectif : réaliser le cadrage et les fondations documentaires de ZythoHunt sans commencer le développement applicatif.
- Réalisé : création du README, des instructions agents et des documents de charte projet, règles UX, règles taxonomiques et modèle de données.
- Fichiers créés ou modifiés : `README.md`, `AGENTS.md`, `docs/PROJECT_CHARTER.md`, `docs/UX_RULES.md`, `docs/TAXONOMY_RULES.md`, `docs/DATA_MODEL.md`, `roadmap.md`.
- Tests effectués : vérification des liens relatifs du README, unicité du fichier de roadmap, cohérence des termes officiels, présence de la règle de non-propagation, distinction capture/dégustation, visibilité des nœuds structurels, absence de révélation automatique des styles inconnus, absence de fichiers applicatifs prématurés, inspection du diff et contrôle Markdown.
- Résultat : Phase 0 documentaire terminée côté dépôt et prête pour validation humaine.
- Problèmes rencontrés : aucun blocage ; le fichier de roadmap existant est `roadmap.md` en minuscules.
- Décisions prises : aucune nouvelle règle produit au-delà de la formalisation des décisions déjà présentes dans la roadmap.
- Prochaine étape recommandée : validation humaine de la Phase 0 avant lancement de la V0.1.0.

## 2026-06-13 — V0.1.0 prototype taxonomique et Zythosphère minimale

- Objectif : créer le prototype taxonomique V0.1.0 et une Zythosphère minimale à positions fixes, sans démarrer les phases ultérieures.
- Réalisé : création des quatre JSON du référentiel, du validateur pur, du calcul de visibilité, du rendu SVG, du pan/zoom natif, des scénarios URL, du panneau développeur conditionné à `debug=1`, des tests automatisés et de la checklist manuelle.
- Fichiers créés ou modifiés : `index.html`, `package.json`, `.gitignore`, `README.md`, `data/taxonomy-nodes.json`, `data/taxonomy-links.json`, `data/aliases.json`, `data/taxonomy-version.json`, `src/**`, `styles/**`, `tests/taxonomy/**`, `tests/manual/V0.1.0-CHECKLIST.md`, `roadmap.md`.
- Taxonomie utilisée : corpus technique provisoire de 26 nœuds, dont 6 nœuds structurels et 20 styles capturables, avec 25 liens principaux et 2 liens secondaires.
- Tests automatisés : `npm test` réussi avec 15 tests couvrant validateur, scénarios de visibilité et stabilité géométrique.
- Tests manuels : serveur HTTP local lancé et pages vérifiées par requêtes HTTP ; tests sur navigateur graphique, iPhone Safari réel et appareils mobiles réels non réalisés dans cet environnement.
- Résultat : prototype cohérent et validé automatiquement ; la V0.1.0 reste à valider humainement sur appareils réels.
- Problèmes rencontrés : aucun blocage applicatif ; validation matérielle iPhone Safari indisponible côté agent.
- Décisions prises : conservation d'un rendu visuel simple et provisoire, sans dépendance, sans PWA, sans stockage personnel.
- Limites : absence volontaire de capture, Brassopédie, fiches, dégustations, persistance, PWA et styles visuels définitifs.
- Points restant à valider : checklist manuelle complète, notamment iPhone Safari réel, Android réel ou émulation, pavé tactile et absence d'erreur console dans un navigateur graphique.
- Prochaine étape recommandée : validation humaine de la V0.1.0 avant toute intervention V0.2.0.


## 2026-06-13 — V0.1.1 correctifs structurels et outils de test

- Objectif : corriger la V0.1.0 avant la direction artistique V0.2.0.
- Réalisé : ajout des deux troncs de fermentation manquants, correction du monde SVG, cadrage initial, vue générale, recherche debug, synchronisation du panneau, accessibilité provisoire, validation renforcée et tests automatisés.
- Fichiers créés ou modifiés : `README.md`, `index.html`, `package.json`, `data/*.json`, `src/**`, `styles/map.css`, `tests/taxonomy/**`, `tests/manual/V0.1.1-CHECKLIST.md`, `roadmap.md`.
- Taxonomie utilisée : 28 nœuds, dont 8 nœuds structurels et 20 styles capturables, avec 27 liens principaux et 2 liens secondaires.
- Correction viewport : monde logique unique `2400 × 1800`, conversion écran vers SVG centralisée, état `{ x, y, scale }` appliqué au groupe SVG.
- Outil développeur : saisie de révélation par nom ou alias, masquage et réinitialisation sans persistance.
- Tests automatisés : `npm test` réussi avec 21 tests.
- Tests manuels réalisés : serveur HTTP local lancé et page vérifiée par requête HTTP ; environnement graphique réel non disponible.
- Tests restant à effectuer : checklist V0.1.1 complète, Chrome/Firefox/Safari graphiques, iPhone Safari réel, Android réel ou émulation.
- Limites connues : pas de vraie capture publique, pas de Brassopédie, pas de persistance, pas de PWA, pas de design de bulles définitif.
- Prochaine étape recommandée : validation humaine de la V0.1.1 ; ne pas commencer V0.2.0 avant accord explicite.

# 11. Règle de clôture d’une tâche

Une tâche ne peut être cochée `[x]` que si :

1. le code ou le document existe ;
2. le comportement est conforme aux règles ;
3. un test ou une vérification a été effectué ;
4. aucun bug bloquant connu ne subsiste ;
5. le journal d’avancement a été mis à jour.

Une tâche partiellement réalisée reste `[~]`.

---

# 12. Première action après création du dépôt

Une fois le dépôt créé avec ce fichier :

1. créer `AGENTS.md` ;
2. y inscrire l’obligation de consulter `ROADMAP.md` avant toute intervention ;
3. créer le squelette documentaire de la Phase 0 ;
4. ne pas commencer directement la Zythosphère ;
5. soumettre les documents de cadrage à validation avant le prototype V0.1.0.
