import { test, expect } from "@playwright/test";
import axeCore from "axe-core";

async function waitForApp(page) {
  await page.addInitScript({ content: axeCore.source });
  await page.goto("/");
  await expect(page.locator("#loading-screen")).toBeHidden({ timeout: 20_000 });
  await expect(page.locator("#reveal-search-input")).toBeEnabled();
}

async function openTasting(page) {
  await page.locator('[data-menu-view="degustation"]').click();
  await expect(page.locator("#degustation-view .tasting-page")).toBeVisible({ timeout: 15_000 });
  await expect(page.locator("#degustation-view h1")).toContainText("Dégustation");
}

async function assertNoSeriousA11yViolations(page) {
  const violations = await page.evaluate(async () => {
    const result = await globalThis.axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"] }
    });
    return result.violations
      .filter((violation) => ["serious", "critical"].includes(violation.impact))
      .map(({ id, impact, help, nodes }) => ({ id, impact, help, targets: nodes.map((node) => node.target) }));
  });
  expect(violations, JSON.stringify(violations, null, 2)).toEqual([]);
}

async function continueStep(page) {
  await page.getByRole("button", { name: "Continuer" }).click();
}

async function selectDescriptor(page, name, count = 3) {
  const button = page.getByRole("button", { name: new RegExp(`^${name}`) });
  for (let index = 0; index < count; index += 1) await button.click();
}

test("Dégustation est chargée à la demande et reste accessible", async ({ page }) => {
  await waitForApp(page);
  await openTasting(page);
  await expect(page.locator("body")).not.toContainText("Shazam du palais");
  await expect(page.getByRole("button", { name: "Dégustation libre" })).toBeVisible();
  await expect(page.getByRole("button", { name: "À l’aveugle" })).toBeVisible();
  await assertNoSeriousA11yViolations(page);
});

test("une West Coast IPA est rattachée à la famille IPA, proposée puis enregistrée", async ({ page }) => {
  await waitForApp(page);
  await openTasting(page);
  await page.getByRole("button", { name: "Dégustation libre" }).click();

  await page.getByLabel("Nom de la bière").fill("West Test");
  await page.getByLabel("Brasserie").fill("Brasserie CI");
  await continueStep(page);

  await page.getByRole("button", { name: "Doré" }).click();
  await page.getByRole("button", { name: "Claire" }).click();
  await page.getByRole("button", { name: "Moyenne" }).click();
  await continueStep(page);

  await selectDescriptor(page, "Agrumes", 3);
  await selectDescriptor(page, "Résine / pin", 3);
  await continueStep(page);

  await selectDescriptor(page, "Agrumes", 3);
  await selectDescriptor(page, "Résine / pin", 3);
  await page.getByRole("button", { name: "Amertume 4 sur 4" }).click();
  await page.getByRole("button", { name: "Corps 1 sur 4" }).click();
  await page.getByRole("button", { name: "Sucrosité 0 sur 4" }).click();
  await page.getByRole("button", { name: "Sèche" }).click();
  await continueStep(page);

  await page.getByRole("button", { name: /J’en reprends volontiers/ }).click();
  await page.getByRole("button", { name: "4 sur 5" }).click();
  await continueStep(page);

  await expect(page.getByRole("heading", { name: /Famille (identifiée|probable)/ })).toBeVisible({ timeout: 15_000 });
  await expect(page.locator(".tasting-match").filter({ hasText: "IPA / India Pale Ale" }).first()).toBeVisible();
  await expect(page.locator(".tasting-match").filter({ hasText: "West Coast IPA" }).first()).toBeVisible();
  await expect(page.locator(".tasting-confidence")).toBeVisible();
  await assertNoSeriousA11yViolations(page);

  await page.getByRole("button", { name: "Ajouter au carnet" }).click();
  await expect(page.locator(".tasting-detail h1")).toHaveText("West Test");

  const raw = await page.evaluate(() => localStorage.getItem("zythohunt.tastings.v1"));
  expect(raw).toContain("West Test");

  await page.reload();
  await expect(page.locator("#loading-screen")).toBeHidden({ timeout: 20_000 });
  await openTasting(page);
  await expect(page.locator(".tasting-card").first()).toContainText("West Test");
});

test("le mode aveugle ne montre aucun style avant la dernière étape", async ({ page }) => {
  await waitForApp(page);
  await openTasting(page);
  await page.getByRole("button", { name: "À l’aveugle" }).click();
  await expect(page.locator(".tasting-mode-pill")).toContainText("à l’aveugle");
  await expect(page.locator(".tasting-style-picker")).toHaveCount(0);
  await expect(page.locator(".tasting-match")).toHaveCount(0);

  await continueStep(page);
  await expect(page.locator(".tasting-match")).toHaveCount(0);
  await continueStep(page);
  await expect(page.locator(".tasting-match")).toHaveCount(0);
  await continueStep(page);
  await expect(page.locator(".tasting-match")).toHaveCount(0);
  await continueStep(page);
  await expect(page.locator(".tasting-match")).toHaveCount(0);
  await continueStep(page);

  await expect(page.getByRole("heading", { name: "Le résultat" })).toBeVisible();
  await expect(page.getByText(/Profil trop ambigu|Correspondance/)).toBeVisible();
  await expect(page.locator(".tasting-style-picker")).toBeVisible();
  await assertNoSeriousA11yViolations(page);
});
