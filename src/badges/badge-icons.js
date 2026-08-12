const BADGE_ICON_BASE = "assets/badges/icons/";

export function getBadgeIconUrl(number) {
  return `${import.meta.env.BASE_URL}${BADGE_ICON_BASE}${String(number).padStart(3, "0")}.webp`;
}

export function installBadgeImageFallback(img, { secret = false } = {}) {
  if (!img) return;
  img.addEventListener("error", () => {
    const fallback = document.createElement("span");
    fallback.className = "badge-medal-fallback";
    fallback.textContent = secret ? "❔" : "🏅";
    fallback.setAttribute("role", "img");
    fallback.setAttribute("aria-label", secret ? "Badge secret" : "Badge");
    img.replaceWith(fallback);
  }, { once: true, passive: true });
}
