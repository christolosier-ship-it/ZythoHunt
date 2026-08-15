import { BADGE_DEFINITIONS, BADGE_FAMILIES } from "./badge-definitions.js";
import { getBadgeIconUrl, installBadgeImageFallback } from "./badge-icons.js";
import { getBadgeFlavor, getBadgeRumor } from "./badge-presentation.js";

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

function formatProgress(progress) {
  if (!progress) return "";
  if (progress.unit === "ratio") return `${Math.round(progress.current * 100)} % / ${Math.round(progress.target * 100)} %`;
  return `${Math.round(progress.current)} / ${Math.round(progress.target)}`;
}

function remainingLabel(badge, progress) {
  if (!progress) return "";
  const remaining = Math.max(0, progress.target - progress.current);
  if (progress.unit === "ratio") return `encore ${Math.ceil(remaining * 100)} %`;
  if (progress.unit === "attempt") return `encore ${Math.ceil(remaining)} tentative${remaining > 1 ? "s" : ""}`;
  if (progress.unit === "repeat") return `encore ${Math.ceil(remaining)} répétition${remaining > 1 ? "s" : ""}`;
  if (progress.unit === "switch") return `encore ${Math.ceil(remaining)} bascule${remaining > 1 ? "s" : ""}`;
  const isCardGoal = ["totalDiscoveredAtLeast", "totalDiscoveredEquals", "collectionDiscoveredAtLeast", "collectionComplete", "allCollectionsDiscoveredAtLeast"].includes(badge.condition?.type);
  if (isCardGoal) return `encore ${Math.ceil(remaining)} carte${remaining > 1 ? "s" : ""}`;
  return `encore ${Math.ceil(remaining)}`;
}

function createProgressBar({ current = 0, target = 0, ratio = 0 } = {}, className = "badge-progress-track") {
  const track = el("span", className);
  const accessibleName = className.includes("global")
    ? "Progression globale des badges"
    : className.includes("objective")
      ? "Progression vers cet objectif"
      : "Progression du badge";
  track.setAttribute("role", "progressbar");
  track.setAttribute("aria-label", accessibleName);
  track.setAttribute("aria-valuemin", "0");
  track.setAttribute("aria-valuemax", String(target || 1));
  track.setAttribute("aria-valuenow", String(Math.min(current, target || current || 0)));
  track.style.setProperty("--badge-progress", `${Math.max(0, Math.min(1, ratio || 0)) * 100}%`);
  return track;
}

function createBadgeImage(badge, className) {
  const img = el("img", className);
  img.alt = "";
  img.src = getBadgeIconUrl(badge.number);
  img.loading = "lazy";
  img.decoding = "async";
  installBadgeImageFallback(img);
  return img;
}

function notificationStatus() {
  if (!globalThis.Notification) return "non disponibles";
  if (Notification.permission === "granted") return "activées";
  if (Notification.permission === "denied") return "refusées";
  return "non activées";
}

/**
 * @param {{ root?: HTMLElement | null, badgeStore?: any, badgeEngine?: any, definitions?: any[] }} [options]
 */
export function createBadgesView({ root, badgeStore, badgeEngine, definitions = BADGE_DEFINITIONS } = {}) {
  let statusFilter = "all";
  let familyFilter = "all";
  let sortMode = "number";

  const isVisible = (badge) => {
    const unlocked = badgeStore.isUnlocked(badge.id);
    const isNew = badgeStore.isNew?.(badge.id);
    if (familyFilter !== "all" && badge.family !== familyFilter) return false;
    if (statusFilter === "unlocked" && !unlocked) return false;
    if (statusFilter === "locked" && unlocked) return false;
    if (statusFilter === "new" && !isNew) return false;
    return true;
  };

  function sortBadges(items) {
    const list = [...items];
    if (sortMode === "recent") {
      return list.sort((a, b) => {
        const aDate = badgeStore.getUnlocked(a.id)?.unlockedAt || "";
        const bDate = badgeStore.getUnlocked(b.id)?.unlockedAt || "";
        if (aDate || bDate) return bDate.localeCompare(aDate);
        return a.number - b.number;
      });
    }
    if (sortMode === "closest") {
      return list.sort((a, b) => {
        const aUnlocked = badgeStore.isUnlocked(a.id);
        const bUnlocked = badgeStore.isUnlocked(b.id);
        if (aUnlocked !== bUnlocked) return aUnlocked ? 1 : -1;
        const aRatio = badgeEngine.getProgress(a)?.ratio ?? -1;
        const bRatio = badgeEngine.getProgress(b)?.ratio ?? -1;
        if (aRatio !== bRatio) return bRatio - aRatio;
        return a.number - b.number;
      });
    }
    return list.sort((a, b) => a.number - b.number);
  }

  function latestUnlockedBadge() {
    return definitions
      .filter((badge) => badgeStore.isUnlocked(badge.id))
      .map((badge) => ({ badge, unlockedAt: badgeStore.getUnlocked(badge.id)?.unlockedAt || "" }))
      .sort((a, b) => b.unlockedAt.localeCompare(a.unlockedAt))[0] || null;
  }

  function nextObjectives() {
    return definitions
      .filter((badge) => !badge.hidden && !badgeStore.isUnlocked(badge.id))
      .map((badge) => ({ badge, progress: badgeEngine.getProgress(badge) }))
      .filter((item) => item.progress && item.progress.target > 0)
      .sort((a, b) => a.progress.ratio !== b.progress.ratio ? b.progress.ratio - a.progress.ratio : a.badge.number - b.badge.number)
      .slice(0, 3);
  }

  function createOverviewCard() {
    const wrap = el("section", "badges-dashboard");
    const latest = latestUnlockedBadge();
    const latestBox = el("article", "badges-latest");
    latestBox.appendChild(el("span", "badges-dashboard-label", "Dernier badge obtenu"));
    if (latest) {
      const row = el("div", "badges-latest-row");
      row.append(createBadgeImage(latest.badge, "badges-latest-icon"));
      const copy = el("div", "badges-latest-copy");
      copy.append(
        el("strong", "", latest.badge.name),
        el("span", "", `Obtenu le ${new Date(latest.unlockedAt).toLocaleDateString("fr-FR")}`)
      );
      const button = el("button", "badges-inline-action", "Voir");
      button.type = "button";
      button.addEventListener("click", () => openBadge(latest.badge.id));
      row.append(copy, button);
      latestBox.appendChild(row);
    } else {
      latestBox.append(el("p", "badges-empty-copy", "La première médaille attend encore son chasseur."));
    }

    const objectives = el("article", "badges-objectives");
    objectives.append(el("span", "badges-dashboard-label", "Prochains objectifs"));
    const objectiveList = el("div", "badges-objective-list");
    const items = nextObjectives();
    if (!items.length) {
      objectiveList.append(el("p", "badges-empty-copy", "Aucun objectif mesurable en attente."));
    } else {
      items.forEach(({ badge, progress }) => {
        const item = el("button", "badges-objective");
        item.type = "button";
        item.addEventListener("click", () => openBadge(badge.id));
        const copy = el("span", "badges-objective-copy");
        copy.append(
          el("strong", "", badge.name),
          el("small", "", `${formatProgress(progress)} · ${remainingLabel(badge, progress)}`)
        );
        item.append(copy, createProgressBar(progress, "badges-objective-progress"));
        objectiveList.appendChild(item);
      });
    }
    objectives.appendChild(objectiveList);
    wrap.append(latestBox, objectives);
    return wrap;
  }

  function createToolbar() {
    const toolbar = el("div", "badges-toolbar");
    const statusGroup = el("div", "badge-filter-group");
    statusGroup.append(el("span", "badge-filter-label", "Statut"));
    const statusNav = el("div", "badge-filters");
    [["all", "Tous"], ["unlocked", "Débloqués"], ["locked", "Verrouillés"], ["new", "Nouveaux"]].forEach(([id, label]) => {
      const button = el("button", id === statusFilter ? "is-active" : "", label);
      button.type = "button";
      button.setAttribute("aria-pressed", id === statusFilter ? "true" : "false");
      button.addEventListener("click", () => {
        statusFilter = id;
        refresh();
      });
      statusNav.appendChild(button);
    });
    statusGroup.appendChild(statusNav);

    const familyLabel = el("label", "badge-select-control");
    familyLabel.append(el("span", "badge-filter-label", "Famille"));
    const familySelect = el("select", "badge-select");
    [["all", "Toutes"], ...Object.entries(BADGE_FAMILIES)].forEach(([id, label]) => {
      const option = el("option", "", label);
      option.value = id;
      option.selected = familyFilter === id;
      familySelect.appendChild(option);
    });
    familySelect.addEventListener("change", () => {
      familyFilter = familySelect.value;
      refresh();
    });
    familyLabel.appendChild(familySelect);

    const sortLabel = el("label", "badge-select-control");
    sortLabel.append(el("span", "badge-filter-label", "Tri"));
    const sortSelect = el("select", "badge-select");
    [["number", "Numéro"], ["closest", "Plus proches"], ["recent", "Récemment obtenus"]].forEach(([id, label]) => {
      const option = el("option", "", label);
      option.value = id;
      option.selected = sortMode === id;
      sortSelect.appendChild(option);
    });
    sortSelect.addEventListener("change", () => {
      sortMode = sortSelect.value;
      refresh();
    });
    sortLabel.appendChild(sortSelect);

    toolbar.append(
      statusGroup,
      familyLabel,
      sortLabel,
      el("div", "badge-notification-state", `Notifications de trophées : ${notificationStatus()}`)
    );
    return toolbar;
  }

  function createBadgeCard(badge) {
    const unlocked = badgeStore.isUnlocked(badge.id);
    const isNew = badgeStore.isNew?.(badge.id);
    const secretLocked = badge.hidden && !unlocked;
    const unlockedData = badgeStore.getUnlocked(badge.id);
    const progress = badgeEngine.getProgress(badge);
    const article = el(
      "article",
      `badge-card ${unlocked ? "is-unlocked" : "is-locked"}${secretLocked ? " is-secret" : ""}${isNew ? " is-new" : ""}`
    );
    article.dataset.badgeId = badge.id;

    const top = el("div", "badge-card-top");
    top.append(
      el("span", "badge-number", badge.numberLabel),
      el("span", `badge-state${isNew ? " is-new" : ""}`, isNew ? "Nouveau" : unlocked ? "Débloqué" : secretLocked ? "Secret" : "À découvrir")
    );

    const iconStage = el("div", "badge-card-icon-stage");
    if (secretLocked) {
      const secret = el("span", "badge-secret-mark", "?");
      secret.setAttribute("aria-hidden", "true");
      iconStage.appendChild(secret);
    } else {
      iconStage.appendChild(createBadgeImage(badge, "badge-card-icon"));
    }

    article.append(
      top,
      iconStage,
      el("h3", "", secretLocked ? "???" : badge.name),
      el("p", "badge-card-description", secretLocked ? getBadgeRumor(badge) : badge.description)
    );

    if (progress && !secretLocked) {
      const progressBox = el("div", "badge-progress");
      progressBox.append(
        el("span", "badge-progress-label", formatProgress(progress)),
        createProgressBar(progress)
      );
      article.appendChild(progressBox);
    }

    if (unlockedData?.unlockedAt) {
      const date = el("time", "badge-unlocked-date");
      date.dateTime = unlockedData.unlockedAt;
      date.textContent = `Obtenu le ${new Date(unlockedData.unlockedAt).toLocaleDateString("fr-FR")}`;
      article.appendChild(date);
    }

    const open = el("button", "badge-card-open", secretLocked ? "Écouter la rumeur" : "Consulter");
    open.type = "button";
    open.addEventListener("click", () => openBadge(badge.id));
    article.appendChild(open);
    return article;
  }

  function createBadgeDialog(badge) {
    const unlocked = badgeStore.isUnlocked(badge.id);
    const secretLocked = badge.hidden && !unlocked;
    const progress = badgeEngine.getProgress(badge);
    const unlockedData = badgeStore.getUnlocked(badge.id);
    const dialog = el("dialog", "badge-detail");
    const titleId = `badge-detail-title-${badge.numberLabel}`;
    dialog.setAttribute("aria-labelledby", titleId);

    const close = el("button", "badge-detail-close", "Fermer");
    close.type = "button";
    close.addEventListener("click", () => dialog.close());

    const hero = el("div", "badge-detail-hero");
    if (secretLocked) {
      hero.append(el("span", "badge-detail-secret", "?"));
    } else {
      hero.append(createBadgeImage(badge, "badge-detail-icon"));
    }

    const copy = el("div", "badge-detail-copy");
    const title = el("h2", "", secretLocked ? "Badge secret" : badge.name);
    title.id = titleId;
    copy.append(
      el("span", "badge-detail-number", `Badge ${badge.numberLabel} · ${BADGE_FAMILIES[badge.family] || badge.family}`),
      title
    );

    if (secretLocked) {
      copy.append(
        el("p", "badge-detail-rumor", getBadgeRumor(badge)),
        el("p", "badge-detail-condition", "Condition inconnue")
      );
    } else {
      copy.append(
        el("p", "badge-detail-description", badge.description),
        el("p", "badge-detail-flavor", getBadgeFlavor(badge))
      );
      if (progress) {
        const box = el("div", "badge-detail-progress");
        box.append(
          el("strong", "", formatProgress(progress)),
          createProgressBar(progress, "badge-detail-progress-track")
        );
        copy.appendChild(box);
      }
      if (unlockedData?.unlockedAt) {
        copy.append(
          el("time", "badge-detail-date", `Obtenu le ${new Date(unlockedData.unlockedAt).toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" })}`)
        );
      }
    }

    dialog.append(close, hero, copy);
    dialog.addEventListener("close", () => dialog.remove());
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) dialog.close();
    });
    return dialog;
  }

  function openBadge(badgeId) {
    const badge = definitions.find((item) => item.id === badgeId);
    if (!badge || !root) return false;
    if (badgeStore.isNew?.(badge.id)) {
      badgeStore.markSeen?.(badge.id);
      refresh();
    }
    root.querySelector(".badge-detail")?.remove();
    const dialog = createBadgeDialog(badge);
    root.appendChild(dialog);
    dialog.showModal();
    dialog.querySelector(".badge-detail-close")?.focus();
    return true;
  }

  function refresh() {
    if (!root) return;
    const previousScroll = root.querySelector(".badges-shell")?.scrollTop || 0;
    const unlockedCount = definitions.filter((badge) => badgeStore.isUnlocked(badge.id)).length;
    const secretCount = definitions.filter((badge) => badge.hidden && badgeStore.isUnlocked(badge.id)).length;
    const newCount = definitions.filter((badge) => badgeStore.isNew?.(badge.id)).length;
    const ratio = definitions.length ? unlockedCount / definitions.length : 0;

    root.replaceChildren();
    const shell = el("div", "badges-shell");
    const overview = el("header", "badges-overview");
    const heading = el("div", "badges-overview-copy");
    heading.append(
      el("p", "badges-summary", `${unlockedCount} / ${definitions.length} débloqués · ${secretCount} secrets trouvés${newCount ? ` · ${newCount} nouveau${newCount > 1 ? "x" : ""}` : ""}`)
    );

    const globalProgress = el("div", "badges-global-progress");
    globalProgress.append(
      el("strong", "", `${Math.round(ratio * 100)} %`),
      createProgressBar({ current: unlockedCount, target: definitions.length, ratio }, "badges-global-progress-track")
    );
    overview.append(heading, globalProgress);
    shell.append(overview, createOverviewCard(), createToolbar());

    Object.entries(BADGE_FAMILIES).forEach(([family, label]) => {
      const allFamilyBadges = definitions.filter((badge) => badge.family === family);
      const familyBadges = sortBadges(allFamilyBadges.filter(isVisible));
      if (!familyBadges.length) return;

      const section = el("section", "badge-family");
      const familyHeader = el("header", "badge-family-header");
      const unlockedInFamily = allFamilyBadges.filter((badge) => badgeStore.isUnlocked(badge.id)).length;
      familyHeader.append(
        el("h2", "", label),
        el("span", "badge-family-count", `${unlockedInFamily} / ${allFamilyBadges.length}`)
      );

      const grid = el("div", "badge-grid");
      familyBadges.forEach((badge) => grid.appendChild(createBadgeCard(badge)));
      section.append(familyHeader, grid);
      shell.appendChild(section);
    });

    root.appendChild(shell);
    shell.scrollTop = previousScroll;
  }

  return { refresh, mount: refresh, openBadge };
}
