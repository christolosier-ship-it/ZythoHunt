# Données Brassopédie

## Règle de simplicité

Une collection enrichie possède **un seul fichier canonique** contenant la taxonomie et le contenu encyclopédique de ses fiches. Une fiche ne doit jamais être répartie entre une taxonomie, un patch, un index et plusieurs fragments.

Les collections enrichies 1 et 2 sont respectivement portées par `collection-01-lagers-et-fermentations-basses.js` et `collection-02-pale-ales-bitters-et-ipa.js`. Les futures collections seront migrées vers le même modèle au moment de leur enrichissement.

`createCollectionBundle()` ne connaît aucune mécanique d'enrichment : il reçoit une collection déjà complète. Les validations communes vivent dans un test Brassopédie unique plutôt que dans un test par sous-module éditorial.

Les fichiers temporaires de migration, les couches legacy et les données dupliquées doivent être supprimés du dépôt une fois une collection migrée.
