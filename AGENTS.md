# Instructions pour les agents ZythoHunt

## Avant toute intervention

1. Lire entièrement `roadmap.md`, source de vérité du projet.
2. Lire les documents pertinents du dossier `docs/`.
3. Inspecter le code et les documents existants.
4. Identifier la phase active et ses prérequis.
5. Vérifier que les prérequis sont satisfaits.
6. Ne pas dépasser le périmètre demandé.

## Pendant l’intervention

- Préserver les décisions déjà validées.
- Ne pas inventer de nouvelle règle produit.
- Placer les incertitudes dans une section « À arbitrer ».
- Ne jamais modifier silencieusement une règle structurante.
- Privilégier des changements limités, testables et réversibles.
- Séparer le référentiel commun des données personnelles.
- Ne pas générer de fichiers PNG.
- Ne pas ajouter de dépendance sans justification documentée.
- Respecter le fonctionnement hors ligne futur.
- Préserver la compatibilité mobile et iPhone Safari.
- Ne pas réintroduire de moteur SVG pour la Zythosphère.
- Ne pas conserver deux Canvas plein écran permanents.
- Ne pas ajouter de debug permanent, de charge synthétique ou de diagnostics continus.
- Ne pas restaurer les tests historiques supprimés.
- Ne pas ajouter d’animation permanente hors révélation.
- Ne jamais déclencher de redraw Canvas complet pendant `pointermove`.

## Après l’intervention

- Exécuter les vérifications pertinentes.
- Inspecter le diff complet.
- Mettre à jour les cases de la roadmap.
- Ne cocher `[x]` que les tâches réellement terminées et vérifiées.
- Utiliser `[~]` pour une tâche partielle.
- Utiliser `[!]` pour un blocage.
- Ajouter une entrée au journal d’avancement.
- Fournir un compte rendu final.
- Ne pas lancer automatiquement la phase suivante.

## Règles cardinales du produit

- Les nœuds structurels et les bulles inconnues marquées ? sont visibles par défaut. Seul le nom d’un style découvert est visible.
- Chaque style est capturé individuellement.
- Une capture ne révèle aucun autre style.
- Les ramifications peuvent apparaître sans afficher les bulles cachées.
- Capture et dégustation sont deux objets différents.
- La Zythosphère et la Brassopédie utilisent une seule source de données.
