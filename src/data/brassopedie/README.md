# Données Brassopédie

## Règle de simplicité

Une collection enrichie possède **un seul fichier canonique** contenant la taxonomie et le contenu encyclopédique de ses fiches. Une fiche ne doit jamais être répartie entre une taxonomie, un patch, un index et plusieurs fragments.

Les 10 collections sont désormais intégrées dans ce modèle canonique. Chaque fichier `collection-XX-*.js` constitue la source éditoriale de vérité de sa collection et contient la taxonomie ainsi que le contenu encyclopédique utilisé pour construire le bundle correspondant.

`createCollectionBundle()` ne connaît aucune mécanique d'enrichment : il reçoit une collection déjà complète. Les validations communes vivent dans les tests de couverture Brassopédie plutôt que dans des couches éditoriales parallèles.

Les fichiers temporaires de migration, les couches legacy, les index éditoriaux parallèles et les données dupliquées doivent être supprimés du dépôt une fois une collection migrée.
