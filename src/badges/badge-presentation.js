const FAMILY_FLAVORS = Object.freeze({
  global: "Le casier se remplit, la légende aussi.",
  collection: "Une marche de plus vers la maîtrise complète de ce rayon brassicole.",
  balanced: "Le vrai chasseur ne laisse aucune famille prendre la poussière.",
  reveal: "Le champ Révéler se souvient de tout, même des détours les plus douteux.",
  secret: "Une petite anomalie dans la mousse. Personne ne pose trop de questions."
});

const SECRET_RUMORS = Object.freeze({
  "secret-position-de-degustation-avancee": "Une vieille ardoise de comptoir mentionne un nombre que les brasseurs évitent de commenter.",
  "secret-le-dernier-bouchon-saute": "Certains trophées n'apparaîtraient qu'au moment précis où un casier n'a plus aucune place vide.",
  "secret-la-lumiere-a-quitte-le-verre": "On raconte qu'une collection très sombre finit par rendre quelque chose à ceux qui vont jusqu'au bout.",
  "secret-champion-de-la-grimace-noble": "Les caves les plus acides auraient leur propre manière de féliciter les obstinés.",
  "secret-directeur-du-musee-des-mauvaises-idees": "Les styles les plus improbables semblent apprécier qu'on leur accorde une attention excessive.",
  "secret-redemption-en-pression": "Après quelques ratés bien sentis, une bonne réponse peut parfois avoir un goût de revanche.",
  "secret-retour-au-vieux-demi": "Il arrive qu'un vieux réflexe, juste après une trouvaille, fasse sourire le comptoir.",
  "secret-nyctalope-du-houblon": "Certains chasseurs affirment qu'il faut rôder quand les caves semblent dormir.",
  "secret-petit-dej-de-champion-douteux": "Les premières heures du jour réserveraient une récompense à ceux qui brassent déjà des idées.",
  "secret-le-revenant-du-frigo": "Une longue absence ne passe peut-être pas totalement inaperçue.",
  "secret-papillon-de-brasserie": "Les chasseurs qui papillonnent entre plusieurs rayons au cours d'une même virée laisseraient une trace.",
  "secret-tournee-generale-cosmique": "Une légende parle d'une tournée capable de faire le tour du Brassivers sans rentrer chez elle.",
  "secret-fin-de-chasse-debut-de-legende": "Il se murmure que la toute dernière place vide possède son propre trophée."
});

export function getBadgeFlavor(badge) {
  return FAMILY_FLAVORS[badge?.family] || "Un trophée de plus dans les archives de ZythoHunt.";
}

export function getBadgeRumor(badge) {
  return SECRET_RUMORS[badge?.id] || "La condition reste noyée dans la mousse. Il faudra continuer à chasser.";
}
