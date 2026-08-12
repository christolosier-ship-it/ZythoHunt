import { test, expect } from "@playwright/test";
import axeCore from "axe-core";

async function waitForReady(page) {
  await expect(page.locator("#loading-screen")).toBeHidden({ timeout: 20_000 });
  await expect(page.locator("#reveal-search-input")).toBeEnabled();
}

async function waitForApp(page) {
  await page.addInitScript({ content: axeCore.source });
  await page.goto("/");
  await waitForReady(page);
}

async function openSettings(page) {
  await page.locator('[data-menu-view="reglages"]').click();
  await expect(page.locator("#reglages-view h1")).toHaveText("Réglages");
  await expect(page.locator('.settings-select[aria-label="Niveau d\'animations"]')).toBeVisible();
}

async function revealLager(page) {
  await page.locator("#reveal-search-input").fill("Lager");
  await page.locator("#reveal-search-submit").click();
  await expect(page.locator("#reveal-overlay")).toBeVisible();
  await expect(page.locator("#btn-continue")).toBeVisible({ timeout: 15_000 });
}

async function assertNoSeriousA11yViolations(page) {
  const violations = await page.evaluate(async () => {
    const result = await globalThis.axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"] }
    });
    return result.violations
      .filter((violation) => ["serious", "critical"].includes(violation.impact))
      .map(({ id, impact, help, nodes }) => ({
        id,
        impact,
        help,
        targets: nodes.map((node) => node.target)
      }));
  });
  expect(violations, JSON.stringify(violations, null, 2)).toEqual([]);
}

test("démarre sans erreur d'accessibilité sérieuse", async ({ page }) => {
  await waitForApp(page);
  await assertNoSeriousA11yViolations(page);
});

test("la révélation confine réellement le focus et rend l'arrière-plan inerte", async ({ page }) => {
  await waitForApp(page);
  await revealLager(page);

  await expect.poll(() => page.locator("#app-sidebar").evaluate((element) => element.inert)).toBe(true);
  await expect.poll(() => page.locator("#app-shell-main").evaluate((element) => element.inert)).toBe(true);

  await page.locator("#btn-continue").focus();
  await page.keyboard.press("Tab");
  const focusIsInsideDialog = await page.evaluate(() => document.querySelector("#reveal-overlay")?.contains(document.activeElement));
  expect(focusIsInsideDialog).toBe(true);

  await assertNoSeriousA11yViolations(page);
  await page.locator("#btn-continue").click();
  await expect(page.locator("#reveal-overlay")).toBeHidden();
  await expect.poll(() => page.locator("#app-sidebar").evaluate((element) => element.inert)).toBe(false);
});

test("change de collection sans rechargement complet", async ({ page }) => {
  await waitForApp(page);
  await page.locator('[data-sidebar-collection-view="zythosphere"][data-collection-id="porters-stouts"]').click();
  await expect(page.locator("#active-collection-label")).toContainText("Porters et Stouts", { timeout: 15_000 });
  await expect(page.locator("#reveal-search-input")).toBeEnabled();
});

test("un stockage refusé n'empêche pas de terminer la révélation", async ({ page }) => {
  await page.addInitScript(() => {
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function patchedSetItem(key, value) {
      if (String(key).startsWith("zythohunt.discovery.")) throw new DOMException("Storage blocked", "QuotaExceededError");
      return originalSetItem.call(this, key, value);
    };
  });

  await waitForApp(page);
  await revealLager(page);
  await page.locator("#btn-continue").click();
  await expect(page.locator("#reveal-overlay")).toBeHidden();
  await expect(page.locator("#reveal-search-feedback")).toContainText("n'a pas pu être enregistrée");
  await expect(page.locator("#app-notice")).toBeVisible();
});

test("l'écran Badges est navigable, accessible et expose les nouveaux objectifs", async ({ page }) => {
  await waitForApp(page);
  await page.locator('[data-menu-view="badge"]').click();

  await expect(page.locator("#badges-view h1")).toHaveText("Badges");
  await expect(page.locator(".badges-objectives")).toContainText("Prochains objectifs");
  await expect(page.locator(".badge-notification-state")).toContainText("Notifications de trophées");
  await assertNoSeriousA11yViolations(page);
});

test("un badge débloqué célèbre chaque trophée et Voir le badge ouvre sa fiche", async ({ page }) => {
  await waitForApp(page);
  await revealLager(page);
  await page.locator("#btn-continue").click();
  await expect(page.locator("#reveal-overlay")).toBeHidden();

  const celebration = page.locator('.badge-celebration[data-badge-id="global-premiere-gorgee-du-destin"]');
  await expect(celebration).toBeVisible();
  await expect(celebration).toContainText("Première gorgée du destin");
  await celebration.getByRole("button", { name: "Voir le badge" }).click();

  await expect(page.locator("#badges-view h1")).toHaveText("Badges");
  await expect(page.locator(".badge-detail")).toBeVisible();
  await expect(page.locator(".badge-detail h2")).toHaveText("Première gorgée du destin");
  await expect(page.locator('[data-badge-id="global-premiere-gorgee-du-destin"] .badge-state')).toHaveText("Débloqué");
  await assertNoSeriousA11yViolations(page);
});

test("Réglages est accessible et les préférences persistent après rechargement", async ({ page }) => {
  await waitForApp(page);
  await openSettings(page);
  await assertNoSeriousA11yViolations(page);

  const motion = page.locator('.settings-select[aria-label="Niveau d\'animations"]');
  const ambience = page.locator('.settings-select[aria-label="Niveau d\'ambiance animée"]');
  await motion.selectOption("reduced");
  await ambience.selectOption("light");

  await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem("zythohunt.settings.v1") || "{}").motionMode)).toBe("reduced");
  await page.reload();
  await waitForReady(page);
  await openSettings(page);
  await expect(page.locator('.settings-select[aria-label="Niveau d\'animations"]')).toHaveValue("reduced");
  await expect(page.locator('.settings-select[aria-label="Niveau d\'ambiance animée"]')).toHaveValue("light");
});

test("un refus de stockage ne fait pas semblant d'enregistrer un réglage", async ({ page }) => {
  await page.addInitScript(() => {
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function patchedSetItem(key, value) {
      if (String(key) === "zythohunt.settings.v1") throw new DOMException("Storage blocked", "QuotaExceededError");
      return originalSetItem.call(this, key, value);
    };
  });
  await waitForApp(page);
  await openSettings(page);
  await page.locator('.settings-select[aria-label="Niveau d\'ambiance animée"]').selectOption("static");
  await expect(page.locator("#app-notice")).toContainText("n'a pas pu être enregistré");
  await expect(page.locator('.settings-select[aria-label="Niveau d\'ambiance animée"]')).toHaveValue("full");
});

test("désactiver les notifications dans Réglages est reflété dans Badges", async ({ page }) => {
  await waitForApp(page);
  await openSettings(page);
  await page.getByRole("checkbox", { name: "Activer les notifications de trophées" }).uncheck();
  await page.locator('[data-menu-view="badge"]').click();
  await expect(page.locator(".badge-notification-state")).toContainText("désactivées");
});

test("exporte puis importe une sauvegarde versionnée après résumé", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Le scénario de fichier est exécuté une seule fois.");
  await page.addInitScript(() => {
    localStorage.setItem("foreign.key", "safe");
    localStorage.setItem("zythohunt.discovery.lagers-et-fermentations-basses.v1", JSON.stringify({ schemaVersion: 2, discovered: { lager: { discoveredAt: "2026-08-12T10:00:00.000Z" } } }));
    localStorage.setItem("zythohunt.badges.v1", JSON.stringify({ schemaVersion: 2, unlocked: { "global-premiere-gorgee-du-destin": { unlockedAt: "2026-08-12T10:00:00.000Z", seenAt: null } } }));
  });
  await waitForApp(page);
  await openSettings(page);

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "Exporter", exact: true }).click()
  ]);
  expect(download.suggestedFilename()).toMatch(/^zythohunt-sauvegarde-\d{4}-\d{2}-\d{2}\.json$/);
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  const exported = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  expect(exported.format).toBe("zythohunt-backup");
  expect(exported.version).toBe(1);
  expect(exported.entries["zythohunt.discovery.lagers-et-fermentations-basses.v1"]).toBeTruthy();
  expect(exported.entries["foreign.key"]).toBeUndefined();

  const backup = {
    format: "zythohunt-backup",
    version: 1,
    appVersion: "test",
    exportedAt: "2026-08-12T12:00:00.000Z",
    entries: {
      "zythohunt.settings.v1": JSON.stringify({ schemaVersion: 1, notificationsEnabled: false, motionMode: "reduced", ambienceMode: "light", startupMode: "first" }),
      "zythohunt.discovery.lagers-et-fermentations-basses.v1": JSON.stringify({ schemaVersion: 2, discovered: { lager: { discoveredAt: "2026-08-12T12:00:00.000Z" } } }),
      "zythohunt.badges.v1": JSON.stringify({ schemaVersion: 2, unlocked: { "global-premiere-gorgee-du-destin": { unlockedAt: "2026-08-12T12:00:00.000Z", seenAt: null } } })
    }
  };
  await page.locator(".settings-file-input").setInputFiles({
    name: "backup.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(backup))
  });
  const dialog = page.locator("dialog.settings-dialog");
  await expect(dialog).toContainText("1 découverte");
  await expect(dialog).toContainText("1 badge");
  await expect(dialog).toContainText("Réglages inclus");
  await dialog.getByRole("button", { name: "Importer et redémarrer" }).click();
  await waitForReady(page);

  const afterImport = await page.evaluate(() => ({
    settings: JSON.parse(localStorage.getItem("zythohunt.settings.v1") || "{}"),
    foreign: localStorage.getItem("foreign.key")
  }));
  expect(afterImport.settings.motionMode).toBe("reduced");
  expect(afterImport.settings.startupMode).toBe("first");
  expect(afterImport.foreign).toBe("safe");
});

test("Réinitialiser la progression conserve les réglages et reverrouille C10", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Le scénario destructif est exécuté une seule fois.");
  await page.addInitScript(() => {
    localStorage.setItem("zythohunt.settings.v1", JSON.stringify({ schemaVersion: 1, notificationsEnabled: false, motionMode: "reduced", ambienceMode: "light", startupMode: "resume" }));
    localStorage.setItem("zythohunt.discovery.lagers-et-fermentations-basses.v1", JSON.stringify({ schemaVersion: 2, discovered: { lager: { discoveredAt: "x" } } }));
    localStorage.setItem("zythohunt.discovery.bizarre-et-insolite.v1", JSON.stringify({ schemaVersion: 2, discovered: { "C10-001": { discoveredAt: "x" } } }));
    localStorage.setItem("zythohunt.badges.v1", JSON.stringify({ schemaVersion: 2, unlocked: { badge: { unlockedAt: "x", seenAt: null } } }));
    localStorage.setItem("zythohunt.revealStats.v1", JSON.stringify({ schemaVersion: 2, totalAttempts: 9 }));
    localStorage.setItem("zythohunt.activeCollectionId.v1", "bizarre-et-insolite");
    localStorage.setItem("foreign.key", "safe");
  });
  await waitForApp(page);
  await expect(page.locator("#active-collection-label")).toContainText("Lagers et fermentations basses");
  await openSettings(page);
  await page.getByRole("button", { name: "Réinitialiser la progression", exact: true }).first().click();
  const dialog = page.locator("dialog.settings-dialog");
  await dialog.getByRole("button", { name: "Réinitialiser la progression", exact: true }).click();
  await waitForReady(page);

  const state = await page.evaluate(() => ({
    discovery: localStorage.getItem("zythohunt.discovery.lagers-et-fermentations-basses.v1"),
    secret: localStorage.getItem("zythohunt.discovery.bizarre-et-insolite.v1"),
    badges: localStorage.getItem("zythohunt.badges.v1"),
    stats: localStorage.getItem("zythohunt.revealStats.v1"),
    active: localStorage.getItem("zythohunt.activeCollectionId.v1"),
    settings: localStorage.getItem("zythohunt.settings.v1"),
    foreign: localStorage.getItem("foreign.key")
  }));
  expect(state.discovery).toBeNull();
  expect(state.secret).toBeNull();
  expect(state.badges).toBeNull();
  expect(state.stats).toBeNull();
  expect(state.active).toBeNull();
  expect(state.settings).not.toBeNull();
  expect(state.foreign).toBe("safe");
  await expect(page.locator('[data-sidebar-collection-view="zythosphere"][data-collection-id="bizarre-et-insolite"]')).toBeDisabled();
  await expect(page.locator('[data-sidebar-collection-view="zythosphere"][data-collection-id="bizarre-et-insolite"]')).toHaveText("????");
});

test("la remise à zéro complète efface uniquement ZythoHunt, données futures et caches compris", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Le scénario destructif est exécuté une seule fois.");
  await waitForApp(page);
  await page.evaluate(async () => {
    localStorage.setItem("zythohunt.settings.v1", "{}");
    localStorage.setItem("zythohunt.discovery.lagers-et-fermentations-basses.v1", JSON.stringify({ discovered: { lager: {} } }));
    localStorage.setItem("zythohunt.badges.v1", JSON.stringify({ unlocked: { badge: {} } }));
    localStorage.setItem("zythohunt.badgeQueue.v1", JSON.stringify({ pending: [{ badgeId: "badge" }] }));
    localStorage.setItem("zythohunt.revealStats.v1", JSON.stringify({ totalAttempts: 5 }));
    localStorage.setItem("zythohunt.activeCollectionId.v1", "bizarre-et-insolite");
    localStorage.setItem("zythohunt.future.degustation.v1", JSON.stringify([{ id: 1 }]));
    localStorage.setItem("zythohunt_revealed", "[0]");
    localStorage.setItem("foreign.key", "safe");
    await caches.open("zythohunt-stale-test");
    await caches.open("foreign-cache-test");
  });
  await openSettings(page);
  await page.getByRole("button", { name: "Tout remettre à zéro" }).click();
  const dialog = page.locator("dialog.settings-dialog");
  await dialog.getByLabel("Tape ZYTHOHUNT pour confirmer").fill("ZYTHOHUNT");
  await dialog.getByRole("button", { name: "Tout effacer" }).click();
  await waitForReady(page);

  const state = await page.evaluate(async () => ({
    keys: Object.keys(localStorage),
    foreign: localStorage.getItem("foreign.key"),
    caches: await caches.keys()
  }));
  expect(state.keys.filter((key) => key.startsWith("zythohunt.") || key === "zythohunt_revealed")).toEqual([]);
  expect(state.foreign).toBe("safe");
  expect(state.caches).not.toContain("zythohunt-stale-test");
  expect(state.caches).toContain("foreign-cache-test");
  await expect(page.locator("#active-collection-label")).toContainText("Lagers et fermentations basses");
  await expect(page.locator('[data-sidebar-collection-view="zythosphere"][data-collection-id="bizarre-et-insolite"]')).toBeDisabled();
});

test("le shell reste ouvrable hors ligne après amorçage", async ({ page, context }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Le scénario service worker est exécuté une seule fois.");
  await waitForApp(page);
  await page.evaluate(() => navigator.serviceWorker.ready.then(() => true));
  await page.reload();
  await expect(page.locator("#loading-screen")).toBeHidden({ timeout: 20_000 });
  await context.setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("#reveal-search-input")).toBeVisible({ timeout: 20_000 });
  await context.setOffline(false);
});
