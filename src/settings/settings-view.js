const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

function formatBytes(value) {
  if (!Number.isFinite(value) || value == null) return "inconnu";
  const units = ["o", "Ko", "Mo", "Go"];
  let size = Math.max(0, Number(value));
  let unit = 0;
  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit += 1;
  }
  return `${size >= 10 || unit === 0 ? Math.round(size) : size.toFixed(1)} ${units[unit]}`;
}

function createSettingRow({ title, description }) {
  const row = el("div", "settings-row");
  const copy = el("div", "settings-row-copy");
  copy.append(el("strong", "settings-row-title", title), el("p", "settings-row-description", description));
  const control = el("div", "settings-row-control");
  row.append(copy, control);
  return { row, control };
}

function createSelect(value, options, onChange, ariaLabel) {
  const select = el("select", "settings-select");
  select.setAttribute("aria-label", ariaLabel);
  options.forEach(([id, label]) => {
    const option = el("option", "", label);
    option.value = id;
    option.selected = id === value;
    select.appendChild(option);
  });
  select.addEventListener("change", () => onChange(select.value));
  return select;
}

function createSection(title, description = "") {
  const section = el("section", "settings-section");
  const header = el("div", "settings-section-header");
  header.append(el("h2", "", title));
  if (description) header.append(el("p", "", description));
  section.appendChild(header);
  return section;
}

function appendButton(control, label, onClick, className = "settings-button") {
  const button = el("button", className, label);
  button.type = "button";
  button.addEventListener("click", onClick);
  control.appendChild(button);
  return button;
}

function downloadBackup(backup) {
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `zythohunt-sauvegarde-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

function createDialog(title) {
  const dialog = el("dialog", "settings-dialog");
  const titleId = `settings-dialog-${Math.random().toString(36).slice(2)}`;
  const heading = el("h2", "", title);
  heading.id = titleId;
  dialog.setAttribute("aria-labelledby", titleId);
  const body = el("div", "settings-dialog-body");
  const actions = el("div", "settings-dialog-actions");
  dialog.append(heading, body, actions);
  dialog.addEventListener("close", () => dialog.remove(), { once: true });
  document.body.appendChild(dialog);
  return { dialog, body, actions };
}

function openDialog(dialog) {
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function closeDialog(dialog) {
  if (typeof dialog.close === "function") dialog.close();
  else dialog.remove();
}

/** @param {{ root?: HTMLElement | null, controller?: any }} [options] */
export function createSettingsView({ root, controller } = {}) {
  let importInput = null;

  function exportCurrentData() {
    const result = controller.exportData();
    if (!result?.ok || !result.backup) return false;
    downloadBackup(result.backup);
    return true;
  }

  function confirmResetSettings() {
    const { dialog, body, actions } = createDialog("Rétablir les réglages par défaut ?");
    body.append(el("p", "", "Les préférences d'affichage, de notifications et de démarrage seront rétablies. Les cartes, badges et dégustations resteront intactes."));
    appendButton(actions, "Annuler", () => closeDialog(dialog), "settings-button settings-button--ghost");
    appendButton(actions, "Rétablir", () => {
      controller.resetSettings();
      closeDialog(dialog);
    });
    openDialog(dialog);
  }

  function confirmResetProgress() {
    const { dialog, body, actions } = createDialog("Réinitialiser toute la progression ?");
    body.append(
      el("p", "", "Cette action effacera les découvertes des 10 collections, les badges, les statistiques de révélation et la collection active."),
      el("p", "settings-dialog-note", "Les réglages, les dégustations et le cache hors ligne seront conservés. La collection secrète redeviendra verrouillée.")
    );
    appendButton(actions, "Annuler", () => closeDialog(dialog), "settings-button settings-button--ghost");
    appendButton(actions, "Réinitialiser la progression", () => controller.resetProgress(), "settings-button settings-button--danger");
    openDialog(dialog);
  }

  function confirmFullReset() {
    const { dialog, body, actions } = createDialog("Remettre ZythoHunt entièrement à zéro ?");
    body.append(
      el("p", "", "Toutes les données ZythoHunt de cet appareil seront supprimées : progression, badges, statistiques, réglages et dégustations. Les caches hors ligne seront également vidés."),
      el("p", "settings-dialog-note", "La permission système de notification dépend du navigateur et ne peut pas être révoquée par l'application.")
    );

    const field = el("label", "settings-confirm-field");
    field.append(el("span", "", "Tape ZYTHOHUNT pour confirmer"));
    const input = el("input", "settings-confirm-input");
    input.type = "text";
    input.autocomplete = "off";
    field.appendChild(input);
    body.appendChild(field);

    appendButton(actions, "Exporter d'abord", () => exportCurrentData(), "settings-button settings-button--ghost");
    appendButton(actions, "Annuler", () => closeDialog(dialog), "settings-button settings-button--ghost");
    const resetButton = appendButton(actions, "Tout effacer", () => void controller.resetAll(), "settings-button settings-button--danger");
    resetButton.disabled = true;
    input.addEventListener("input", () => { resetButton.disabled = input.value.trim() !== "ZYTHOHUNT"; });
    openDialog(dialog);
    input.focus();
  }

  function confirmImport(backup, summary) {
    const { dialog, body, actions } = createDialog("Importer cette sauvegarde ?");
    const list = el("ul", "settings-import-summary");
    list.append(
      el("li", "", `${summary.discoveries} découverte${summary.discoveries > 1 ? "s" : ""}`),
      el("li", "", `${summary.badges} badge${summary.badges > 1 ? "s" : ""}`),
      el("li", "", `${summary.tastings} dégustation${summary.tastings > 1 ? "s" : ""}`),
      el("li", "", summary.settingsIncluded ? "Réglages inclus" : "Aucun réglage dans la sauvegarde")
    );
    body.append(
      el("p", "", "Les données ZythoHunt actuelles seront remplacées par le contenu suivant :"),
      list,
      el("p", "settings-dialog-note", "Les clés appartenant à d'autres applications ne seront jamais modifiées.")
    );
    appendButton(actions, "Annuler", () => closeDialog(dialog), "settings-button settings-button--ghost");
    appendButton(actions, "Importer et redémarrer", () => controller.importData(backup));
    openDialog(dialog);
  }

  async function handleImportFile(file) {
    if (!file) return;
    try {
      const backup = JSON.parse(await file.text());
      const validation = controller.inspectImport(backup);
      if (!validation.valid) {
        const { dialog, body, actions } = createDialog("Sauvegarde refusée");
        body.append(el("p", "", validation.error || "Le fichier n'est pas une sauvegarde ZythoHunt valide."));
        appendButton(actions, "Fermer", () => closeDialog(dialog));
        openDialog(dialog);
        return;
      }
      confirmImport(backup, validation.summary);
    } catch {
      const { dialog, body, actions } = createDialog("Fichier illisible");
      body.append(el("p", "", "Ce fichier ne contient pas un JSON de sauvegarde ZythoHunt valide."));
      appendButton(actions, "Fermer", () => closeDialog(dialog));
      openDialog(dialog);
    } finally {
      if (importInput) importInput.value = "";
    }
  }

  async function refreshStorageEstimate(host) {
    const estimate = await controller.getStorageInfo();
    if (!host.isConnected) return;
    host.textContent = estimate.supported
      ? `${formatBytes(estimate.usage)} utilisés${estimate.quota ? ` sur ${formatBytes(estimate.quota)} disponibles` : ""}`
      : "Estimation non disponible sur ce navigateur";
  }

  function render() {
    if (!root) return;
    const snapshot = controller.getSnapshot();
    const { settings, notifications, about } = snapshot;
    root.replaceChildren();

    const page = el("div", "settings-page");

    const general = createSection("Général", "Quelques choix simples, sans cockpit de sous-marin.");
    const startup = createSettingRow({
      title: "Au démarrage",
      description: "Choisis entre reprendre la dernière collection ZythoSphère ou toujours repartir de la Collection 1."
    });
    startup.control.appendChild(createSelect(settings.startupMode, [["resume", "Reprendre là où j’étais"], ["first", "Toujours ouvrir la Collection 1"]], (value) => controller.setPreference("startupMode", value), "Comportement au démarrage"));
    general.appendChild(startup.row);

    const experience = createSection("Animations & performances", "La direction artistique reste celle des collections ; seuls le mouvement et sa densité changent.");
    const motion = createSettingRow({ title: "Animations", description: "Auto respecte le réglage d'accessibilité du système." });
    motion.control.appendChild(createSelect(settings.motionMode, [["auto", "Auto"], ["full", "Complètes"], ["reduced", "Réduites"]], (value) => controller.setPreference("motionMode", value), "Niveau d'animations"));
    const ambience = createSettingRow({ title: "Ambiance animée", description: "Allégée réduit les particules. Statique conserve les couleurs de la collection sans animation continue." });
    ambience.control.appendChild(createSelect(settings.ambienceMode, [["full", "Complète"], ["light", "Allégée"], ["static", "Statique"]], (value) => controller.setPreference("ambienceMode", value), "Niveau d'ambiance animée"));
    experience.append(motion.row, ambience.row);

    const notificationSection = createSection("Notifications", "Les célébrations restent visibles dans ZythoHunt. Les notifications système servent uniquement lorsque l'application est en arrière-plan.");
    const notificationRow = createSettingRow({ title: "Notifications de trophées", description: `État : ${notifications.label}.` });
    const toggleLabel = el("label", "settings-toggle");
    const toggle = el("input", "");
    toggle.type = "checkbox";
    toggle.checked = settings.notificationsEnabled !== false;
    toggle.setAttribute("aria-label", "Activer les notifications de trophées");
    toggle.addEventListener("change", () => controller.setPreference("notificationsEnabled", toggle.checked));
    toggleLabel.append(toggle, el("span", "settings-toggle-track"));
    notificationRow.control.appendChild(toggleLabel);
    if (notifications.canRequest) appendButton(notificationRow.control, "Autoriser dans le navigateur", () => void controller.requestNotificationPermission(), "settings-button settings-button--small");
    notificationSection.appendChild(notificationRow.row);

    const data = createSection("Données & sauvegardes", "ZythoHunt fonctionne sans compte : une sauvegarde locale permet d'emporter sa collection ailleurs.");
    const exportRow = createSettingRow({ title: "Exporter mes données", description: "Crée un fichier JSON versionné contenant les données ZythoHunt de cet appareil." });
    appendButton(exportRow.control, "Exporter", () => exportCurrentData());
    const importRow = createSettingRow({ title: "Importer une sauvegarde", description: "Le fichier est contrôlé avant toute écriture et un résumé est affiché avant remplacement." });
    importInput = el("input", "settings-file-input");
    importInput.type = "file";
    importInput.accept = "application/json,.json";
    importInput.setAttribute("aria-label", "Fichier de sauvegarde ZythoHunt");
    importInput.addEventListener("change", () => void handleImportFile(importInput.files?.[0]));
    importRow.control.appendChild(importInput);
    appendButton(importRow.control, "Choisir un fichier", () => importInput.click());
    const defaultsRow = createSettingRow({ title: "Rétablir les réglages par défaut", description: "Ne touche ni aux cartes, ni aux badges, ni aux dégustations." });
    appendButton(defaultsRow.control, "Rétablir", confirmResetSettings, "settings-button settings-button--ghost");
    data.append(exportRow.row, importRow.row, defaultsRow.row);

    const storage = createSection("Stockage hors ligne", "Les données utilisateur et le cache PWA sont deux choses différentes.");
    const storageRow = createSettingRow({ title: "Données utilisateur", description: "Stockées uniquement sur cet appareil. Vider le cache hors ligne n'efface jamais la progression." });
    const estimate = el("span", "settings-storage-estimate", "Calcul…");
    storageRow.control.appendChild(estimate);
    const cacheRow = createSettingRow({ title: "Cache hors ligne", description: "Supprime les ressources PWA mises en cache. Elles seront téléchargées à nouveau au besoin." });
    appendButton(cacheRow.control, "Vider le cache", () => void controller.clearOfflineCache(), "settings-button settings-button--ghost");
    storage.append(storageRow.row, cacheRow.row);
    void refreshStorageEstimate(estimate);

    const aboutSection = createSection("À propos de ZythoHunt");
    const aboutGrid = el("dl", "settings-about-grid");
    [["Version", about.version], ["Exécution", about.displayMode], ["Données", about.storageMode]].forEach(([term, value]) => {
      aboutGrid.append(el("dt", "", term), el("dd", "", value));
    });
    aboutSection.appendChild(aboutGrid);
    const updateRow = createSettingRow({ title: "Mises à jour", description: "Vérifie si une nouvelle version PWA est disponible sans forcer le rechargement pendant une interaction." });
    appendButton(updateRow.control, "Rechercher une mise à jour", () => void controller.checkForUpdate(), "settings-button settings-button--ghost");
    aboutSection.appendChild(updateRow.row);

    const danger = createSection("Zone de danger", "Ici, les boutons ont des dents.");
    danger.classList.add("settings-section--danger");
    const progressReset = createSettingRow({ title: "Réinitialiser la progression", description: "Efface les 10 collections, badges, statistiques et collection active, mais conserve les réglages, les dégustations et le cache." });
    appendButton(progressReset.control, "Réinitialiser la progression", confirmResetProgress, "settings-button settings-button--danger-outline");
    const fullReset = createSettingRow({ title: "Réinitialiser complètement ZythoHunt", description: "Efface toutes les données ZythoHunt et ses caches hors ligne, puis redémarre comme au premier lancement." });
    appendButton(fullReset.control, "Tout remettre à zéro", confirmFullReset, "settings-button settings-button--danger");
    danger.append(progressReset.row, fullReset.row);

    page.append(general, experience, notificationSection, data, storage, aboutSection, danger);
    root.appendChild(page);
  }

  return { mount: render, refresh: render };
}