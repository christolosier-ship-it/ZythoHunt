const BADGE_ICON_BASE = "assets/badges/icons/";

export function getBadgeIconUrl(number) {
  return `${import.meta.env.BASE_URL}${BADGE_ICON_BASE}${String(number).padStart(3, "0")}.webp`;
}


export function installBadgeImageFallback(img, { secret = false } = {}) {
  if (!img) return;
  img.addEventListener("error", () => {
    img.replaceWith(Object.assign(document.createElement("span"), { className: "badge-medal-fallback", textContent: secret ? "❔" : "🏅" }));
  }, { passive: true, once: true });
}
