import { test, expect } from "@playwright/test";
import axeCore from "axe-core";

async function waitForApp(page) {
  await page.addInitScript({ content: axeCore.source });
  await page.goto("/");
  await expect(page.locator("#loading-screen")).toBeHidden({ timeout: 20_000 });
  await expect(page.locator("#reveal-search-input")).toBeEnabled();
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
