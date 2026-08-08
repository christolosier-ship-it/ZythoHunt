import { BADGE_DEFINITIONS, BADGE_FAMILIES } from "./badge-definitions.js";
import { getBadgeIconUrl, installBadgeImageFallback } from "./badge-icons.js";

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

function formatProgressValue(value) {
  if (!Number.isFinite(value)) return "0";
  return Number.isInteger(value) ? String(value) : String(Math.round(value * 100) / 100);
}

function createProgressBar({ current = 0, target = 0, ratio = 0 } = {}, className = "badge-progress-track") {
  const track = el("span", className);
  track.setAttribute("role", "progressbar");
  track.setAttribute("aria-valuemin", "0");
  track.setAttribute("aria-valuemax", String(target || 1));
  track.setAttribute("aria-valuenow", String(Math.min(current, target || current || 0)));
  track.style.setProperty("--badge-progress", `${Math.max(0, Math.min(1, ratio || 0)) * 100}%`);
  return track;
}

/** @param {{[key: string]: any}} [options] */
export function createBadgesView({ root, badgeStore, badgeEngine, definitions = BADGE_DEFINITIONS } = {}) {
  let filter = "all";

  const visible = (badge) => (
    filter === "all"
    || (filter === "unlocked" && badgeStore.isUnlocked(badge.id))
    || (filter === "locked" && !badgeStore.isUnlocked(badge.id))
    || (filter === "secret" && badge.family === "secret")
  );

  function createBadgeCard(badge) {
    const unlocked = badgeStore.isUnlocked(badge.id);
    const secretLocked = badge.hidden && !unlocked;
    const unlockedData = badgeStore.getUnlocked(badge.id);
    const progress = badgeEngine.getProgress(badge);
    const article = el("article", `badge-card ${unlocked ? "is-unlocked" : "is-locked"}${secretLocked ? " is-secret" : ""}`);

    const top = el("div", "badge-card-top");
    top.append(
      el("span", "badge-number", badge.numberLabel),
      el("span", "badge-state", unlocked ? "Débloqué" : secretLocked ? "Secret" : "À découvrir")
    );

    const iconStage = el("div", "badge-card-icon-stage");
    if (secretLocked) {
      const secret = el("span", "badge-secret-mark", "?");
      secret.setAttribute("aria-hidden", "true");
      iconStage.appendChild(secret);
    } else {
      const img = el("img", "badge-card-icon");
      img.alt = "";
      img.src = getBadgeIconUrl(badge.number);
      img.loading = "lazy";
      img.decoding = "async";
      installBadgeImageFallback(img, { secret: false });
      iconStage.appendChild(img);
    }

    const title = el("h3", "", secretLocked ? "???" : badge.name);
    const description = el("p", "badge-card-description", secretLocked ? "Condition inconnue" : badge.description);
    article.append(top, iconStage, title, description);

    if (progress && !secretLocked) {
      const progressBox = el("div", "badge-progress");
      const progressLabel = el(
        "span",
        "badge-progress-label",
        `${formatProgressValue(progress.current)} / ${formatProgressValue(progress.target)}`
      );
      progressBox.append(progressLabel, createProgressBar(progress));
      article.appendChild(progressBox);
    }

    if (unlockedData?.unlockedAt) {
      const date = el("time", "badge-unlocked-date");
      date.dateTime = unlockedData.unlockedAt;
      date.textContent = `Obtenu le ${new Date(unlockedData.unlockedAt).toLocaleDateString("fr-FR")}`;
      article.appendChild(date);
    }

    return article;
  }

  function createFilterNav() {
    const nav = el("nav", "badge-filters");
    nav.setAttribute("aria-label", "Filtres badges");
    [["all", "Tous"], ["unlocked", "Débloqués"], ["locked", "Verrouillés"], ["secret", "Secrets"]].forEach(([id, label]) => {
      const button = el("button", id === filter ? "is-active" : "", label);
      button.type = "button";
      button.setAttribute("aria-pressed", id === filter ? "true" : "false");
      button.addEventListener("click", () => {
        filter = id;
        refresh();
      });
      nav.appendChild(button);
    });
    return nav;
  }

  function createNotificationControl() {
    const wrap = el("div", "badge-notification-control");
    const button = el("button", "badge-notification-button", "Notifications");
    button.type = "button";
    const state = el("span", "badge-notification-state");

    if (!globalThis.Notification) {
      button.disabled = true;
      state.textContent = "Non disponibles";
    } else if (Notification.permission === "granted") {
      state.textContent = "Activées";
    }

    button.addEventListener("click", async () => {
      if (!globalThis.Notification) return;
      const permission = await Notification.requestPermission();
      state.textContent = permission === "granted" ? "Activées" : permission === "denied" ? "Refusées" : "Non activées";
    });

    wrap.append(button, state);
    return wrap;
  }

  function refresh() {
    if (!root) return;

    const unlockedCount = definitions.filter((badge) => badgeStore.isUnlocked(badge.id)).length;
    const secretCount = definitions.filter((badge) => badge.hidden && badgeStore.isUnlocked(badge.id)).length;
    const ratio = definitions.length ? unlockedCount / definitions.length : 0;

    root.replaceChildren();
    const shell = el("div", "badges-shell");

    const overview = el("header", "badges-overview");
    const heading = el("div", "badges-overview-copy");
    heading.append(
      el("p", "badges-kicker", "Trophées brassicoles"),
      el("h1", "", "Badges"),
      el("p", "badges-summary", `${unlockedCount} / ${definitions.length} débloqués · ${secretCount} secrets trouvés`)
    );
    const globalProgress = el("div", "badges-global-progress");
    globalProgress.append(
      el("strong", "", `${Math.round(ratio * 100)} %`),
      createProgressBar({ current: unlockedCount, target: definitions.length, ratio }, "badges-global-progress-track")
    );
    overview.append(heading, globalProgress);

    const toolbar = el("div", "badges-toolbar");
    toolbar.append(createFilterNav(), createNotificationControl());
    shell.append(overview, toolbar);

    Object.entries(BADGE_FAMILIES).forEach(([family, label]) => {
      const familyBadges = definitions.filter((badge) => badge.family === family && visible(badge));
      if (!familyBadges.length) return;

      const section = el("section", "badge-family");
      const familyHeader = el("header", "badge-family-header");
      const unlockedInFamily = familyBadges.filter((badge) => badgeStore.isUnlocked(badge.id)).length;
      familyHeader.append(
        el("h2", "", label),
        el("span", "badge-family-count", `${unlockedInFamily} / ${familyBadges.length}`)
      );

      const grid = el("div", "badge-grid");
      familyBadges.forEach((badge) => grid.appendChild(createBadgeCard(badge)));
      section.append(familyHeader, grid);
      shell.appendChild(section);
    });

    root.appendChild(shell);
  }

  return { refresh, mount: refresh };
}
