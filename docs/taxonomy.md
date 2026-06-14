# Taxonomie V0.4.0

- Version canonique : ZythoHunt Taxonomy 1.0.0.
- Racine : `beer` / Bière.
- Six univers : fermentation haute, fermentation basse, spontanée, mixte/sauvage/acide, hybride et spécialités.
- Types de nœuds : `root`, `universe`, `family`, `subfamily`, `style-group`, `style`.
- Tout nœud `style` est capturable et doit rester une feuille graphique.
- Les alias sont stockés dans `aliases` sur les nœuds et dans `data/aliases.json` pour la recherche ; ils ne créent jamais de nœud.
- Les migrations d’identifiants historiques sont documentées dans `data/id-migrations.json`.

La recherche normalise casse, accents, ponctuation et espaces afin que `NEIPA`, `ESB`, `Weissbier`, `Wee Heavy`, `Maibock` et `IPL` retrouvent les styles canoniques.
