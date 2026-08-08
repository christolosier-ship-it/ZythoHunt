# Données Brassopédie

## Règle de simplicité

Une collection enrichie possède **un seul fichier canonique** contenant la taxonomie et le contenu encyclopédique de ses fiches. Une fiche ne doit jamais être répartie entre une taxonomie, un patch, un index et plusieurs fragments.

Pour la collection Lager, la source est `collection-01-lagers-et-fermentations-basses.js`. Les futures collections pourront être migrées vers le même modèle lorsqu'elles seront enrichies.

`createCollectionBundle()` ne connaît aucune mécanique d'enrichment : il reçoit une collection déjà complète. Les validations communes vivent dans un test Brassopédie unique plutôt que dans un test par sous-module éditorial.

Les fichiers temporaires de migration, les couches legacy et les données dupliquées doivent être supprimés du dépôt une fois une collection migrée.
