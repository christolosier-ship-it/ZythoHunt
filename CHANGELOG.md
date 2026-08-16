# Changelog

## 1.0.0 — 2026-08-16

Première version stable de ZythoHunt.

### Exploration

- ZythoSphère complète avec recherche, révélation animée et progression persistée.
- 10 collections et 293 cartes, dont la collection secrète « Bizarre et insolite ».
- Brassopédie intégrée avec chargement à la demande des contenus encyclopédiques.

### Dégustation

- Carnet personnel de dégustation en six étapes.
- Référentiel sensoriel unique de 251 profils vérifiés pour les Collections 1 à 9.
- Identification hiérarchique des familles et classement transversal des styles compatibles.
- Association facultative d’une dégustation à une carte Brassopédie.

### Progression et personnalisation

- Système de badges et statistiques locales.
- Réglages d’animation, ambiance, notifications et comportement au démarrage.
- Export/import JSON, remise à zéro de la progression et remise à zéro complète contrôlée.

### PWA et qualité

- Installation PWA et fonctionnement hors ligne.
- Cache d’images borné et stratégie de mise à jour sans rechargement forcé.
- Chargement dynamique des collections et vues secondaires.
- Typecheck standard et strict, tests unitaires, Playwright et contrôles axe en CI.

### Nettoyage avant release

- Suppression des audits historiques devenus obsolètes.
- Suppression de la configuration Replit spécifique au prototype.
- Suppression de l’ancien `public/logo.png` inutilisé au profit des icônes PWA dédiées.
- Simplification du `.gitignore` et remplacement de l’ancien README de prototype.
