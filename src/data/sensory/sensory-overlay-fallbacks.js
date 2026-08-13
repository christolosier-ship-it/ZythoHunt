const OVERLAY_MARKERS = Object.freeze({
  "dessert-pastry-beer": "chocolat-cacao",
  "field-beer": "herbace-epice",
  "alternative-grain-beer": "cereale",
  "alternative-sugar-beer": "caramel-toffee",
  "autumn-seasonal-beer": "epices",
  "winter-seasonal-beer": "epices",
  "fresh-hop-beer": "herbe-fraiche",
  "aged-beer": "boise-vanille"
});

export function ensureOverlayKeyMarker(profile) {
  if (profile?.role !== "overlay" || (profile.keyMarkers || []).length > 0) return profile;
  const marker = OVERLAY_MARKERS[profile.cardId];
  if (!marker) return profile;
  return {
    ...profile,
    nose: { ...(profile.nose || {}), [marker]: Math.max(2, profile.nose?.[marker] || 0) },
    palate: { ...(profile.palate || {}), [marker]: Math.max(2, profile.palate?.[marker] || 0) },
    keyMarkers: [marker]
  };
}
