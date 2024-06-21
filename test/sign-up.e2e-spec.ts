import { expect, test } from "@playwright/test";

test("sign up sucessufully", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("pizza.shop");
  await page.getByLabel("Seu nome").fill("Abacatman");
  await page.getByLabel("Seu e-mail").fill("user@email.com");
  await page.getByLabel("Seu celular").fill("11999998888");
  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Restaurante cadastrado com sucesso.");
  await expect(toast).toBeVisible();
});

test("sign up with error", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("pizza.ship");
  await page.getByLabel("Seu nome").fill("Abacatman");
  await page.getByLabel("Seu e-mail").fill("user@email.com");
  await page.getByLabel("Seu celular").fill("11999998888");
  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Erro ao cadastrar o restaurante.");
  await expect(toast).toBeVisible();
});

test("navigate to a new restaurant page", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Fazer login" }).click();

  expect(page.url()).toContain("/sign-in");
});
