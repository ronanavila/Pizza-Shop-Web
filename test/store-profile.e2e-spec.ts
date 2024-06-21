import { expect, test } from "@playwright/test";

test("update profile sucessufully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "pizza.shop" }).click();
  await page.waitForTimeout(1000);
  await page.getByText("Perfil da loja").click();
  await page.getByLabel("Nome").fill("pizza.ship");
  await page.getByLabel("Descrição").fill("Filled");

  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");
  await page.getByRole("button", { name: "Close" }).click();

  await expect(page.getByRole("button", { name: "pizza.ship" })).toBeVisible();
});

test("update profile with error", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "pizza.shop" }).click();
  await page.waitForTimeout(1000);
  await page.getByText("Perfil da loja").click();
  await page.getByLabel("Nome").fill("pozza.ship");
  await page.getByLabel("Descrição").fill("Filled");

  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Falha ao atualizar o perfil, tente novamente.");
  await expect(toast).toBeVisible();
});
