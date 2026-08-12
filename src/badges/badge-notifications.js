import { BADGE_FAMILIES } from "./badge-definitions.js";
import { getBadgeIconUrl, installBadgeImageFallback } from "./badge-icons.js";

function getCelebrationRoot() {
  let root = document.querySelector(".badge-celebration-root");
  if (root) return root;
  root = document.createElement("section");
  root.className = "badge-celebration-root";
  root.setAttribute("aria-label", "Badges débloqués");
  root.setAttribute("aria-live", "polite");
  document.body.appendChild(root);
  return root;
}

function createCelebrationItem(item, onViewBadge) {
  const card = document.createElement("article");
  card.className = "badge-celebration";
  card.dataset.badgeId = item.badge.id;

  const img = document.createElement("img");
  img.className = "badge-celebration-icon";
  img.src = getBadgeIconUrl(item.badge.number);
  img.alt = "";
  installBadgeImageFallback(img);

  const copy = document.createElement("div");
  copy.className = "badge-celebration-copy";
  const kicker = document.createElement("span");
  kicker.className = "badge-celebration-kicker";
  kicker.textContent = BADGE_FAMILIES[item.badge.family] || "Trophée";
  const title = document.createElement("strong");
  title.textContent = item.badge.name;
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Voir le badge";
  button.addEventListener("click", () => {
    card.remove();
    onViewBadge?.(item.badge.id);
  });
  copy.append(kicker, title, button);
  card.append(img, copy);
  return card;
}

/** @param {any[]} items @param {{ onViewBadge?: ((badgeId: string) => void) | null, duration?: number | null }} [options] */
export function showBadgeCelebration(items, { onViewBadge, duration = 9500 } = {}) {
  if (!items?.length || !globalThis.document) return;
  const root = getCelebrationRoot();
  items.forEach((item) => {
    const card = createCelebrationItem(item, onViewBadge);
    root.appendChild(card);
    if (duration) globalThis.setTimeout(() => card.remove(), duration);
  });
}

function celebrateWhenVisible(items, options) {
  if (!globalThis.document) return;
  if (document.visibilityState !== "hidden") {
    showBadgeCelebration(items, options);
    return;
  }

  const onVisibilityChange = () => {
    if (document.visibilityState === "hidden") return;
    document.removeEventListener("visibilitychange", onVisibilityChange);
    showBadgeCelebration(items, options);
  };
  document.addEventListener("visibilitychange", onVisibilityChange);
}

export function showBadgeToast(items, message) {
  if (!globalThis.document) return;
  let root = document.querySelector(".badge-toast-root");
  if (!root) {
    root = document.createElement("div");
    root.className = "badge-toast-root";
    root.setAttribute("role", "status");
    root.setAttribute("aria-live", "polite");
    document.body.appendChild(root);
  }
  const toast = document.createElement("div");
  toast.className = "badge-toast";
  toast.textContent = message || (items.length > 1 ? `🏅 ${items.length} badges débloqués` : `🏅 Badge débloqué : ${items[0].badge.name}`);
  root.appendChild(toast);
  globalThis.setTimeout(() => toast.remove(), 4200);
}

/**
 * @param {any[]} items
 * @param {{ onViewBadge?: ((badgeId: string) => void) | null, systemNotificationsEnabled?: boolean }} [options]
 */
export async function notifyBadgesUnlocked(items, { onViewBadge, systemNotificationsEnabled = true } = {}) {
  if (!items?.length) return;

  const hidden = globalThis.document?.visibilityState === "hidden";
  celebrateWhenVisible(items, { onViewBadge });
  if (!hidden || !systemNotificationsEnabled) return;
  if (globalThis.Notification?.permission !== "granted" || !globalThis.navigator?.serviceWorker?.ready) return;

  try {
    const reg = await navigator.serviceWorker.ready;
    const names = items.slice(0, 3).map((item) => item.badge.name);
    const body = items.length === 1
      ? names[0]
      : `${names.join(" · ")}${items.length > 3 ? ` · +${items.length - 3}` : ""}`;
    await reg.showNotification(items.length > 1 ? `${items.length} badges débloqués` : "Badge débloqué", {
      body,
      icon: getBadgeIconUrl(items[0].badge.number),
      badge: getBadgeIconUrl(items[0].badge.number),
      data: { badgeId: items[0].badge.id }
    });
  } catch (error) {
    console.warn("Notification de badge indisponible", error);
  }
}
