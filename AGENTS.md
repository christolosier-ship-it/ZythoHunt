# Instructions pour les agents ZythoHunt

## Avant intervention

1. Lire `README.md` et `roadmap.md`.
2. Lire les documents pertinents de `docs/`.
3. Inspecter le code et les données avant modification.
4. Vérifier la phase active et ne pas dépasser son périmètre.

## Invariants produit

- Les nœuds structurels et les bulles inconnues `?` sont visibles par défaut.
- Un style inconnu ne révèle ni nom, ni alias, ni fiche.
- Chaque style est capturé individuellement.
- Une capture ne révèle aucun autre style.
- Capture et dégustation sont deux objets différents.
- Taxonomie, layout généré et iconographie déclarative sont séparés.
- La Zythosphère et la future Brassopédie utilisent le même référentiel taxonomique.

- La Zythosphère est un nuage compact, pas une carte conçue pour être affichée entièrement.
- La bonne visibilité locale prime sur le cadrage global.
- Le zoom est limité à 80-120 %.
- Aucun élément n’apparaît ou disparaît selon le zoom.
- Les ratios de bulles sont verrouillés : styles ×0,8 / ×1 / ×1,2, structures ×1,5, Bière ×2.
- Les liens sont droits.
- La densité est une exigence produit.
- Les conflits se résolvent par placement, jamais par routage courbe.
- Aucun routage courbe ne doit être réintroduit sans nouvelle mission explicite.

## Contraintes techniques

- Conserver un moteur Canvas unique pour la carte.
- La compacité est un objectif produit : ne pas étirer artificiellement le monde.
- Le rang taxonomique ne définit pas un anneau graphique obligatoire.
- Déplacer les sous-arbres comme des groupes cohérents lors des corrections.
- Les marges de layout doivent provenir de la géométrie réelle.
- Aucun changement isolé de constante ne suffit sans validation complète.
- Aucun calcul lourd de layout ou routage ne doit se dérouler au runtime.
- Ne pas réintroduire de moteur SVG.
- Ne jamais déclencher de redraw Canvas complet pendant `pointermove`.
- Ne pas recalculer layout, collisions ou routage dans le navigateur pendant pan/pinch.
- Préserver la compatibilité mobile et iPhone/iPad Safari.
- Ne pas ajouter de dépendance ou framework sans justification documentée.
- Ne pas générer ni intégrer de fichiers PNG.

## Données

- Ne pas modifier identifiants, noms canoniques, alias, parents, capturabilité ou rangs sans mission explicite.
- Les coordonnées graphiques appartiennent au layout généré, pas à la taxonomie.
- Les rapports et diagnostics ne doivent pas être chargés par le navigateur.

## Validation

- Exécuter les validateurs pertinents après modification.
- Inspecter le diff complet.
- Mettre à jour la roadmap : `[x]` terminé et vérifié, `[~]` partiel, `[!]` bloqué.
- Ajouter une entrée au journal d’avancement si le périmètre change.

## Git

- Ne pas faire de commit ou push sans instruction explicite.

## Règles V0.5.1

- Tous les liens, y compris masqués au démarrage ou révélés par All, sont validés.
- Le rapport de build n’est jamais une preuve : le validateur recalcule le JSON final.
- Les sous-arbres validés sont déplacés comme des blocs rigides.
- Aucune relaxation individuelle de nœuds n’est autorisée.
- Aucun corridor spatial large n’est réservé autour des liens.
- Une insertion doit être validée avant la suivante.
- Un retour arrière local est obligatoire en cas de blocage.
