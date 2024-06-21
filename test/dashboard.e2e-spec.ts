import { expect, test } from "@playwright/test";

test("display day order amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("20", { exact: true })).toBeVisible();
});

test("month receipt", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("R$ 1.000,00")).toBeVisible();
});

test("display month orders amount", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("10", { exact: true })).toBeVisible();
});

test("display month orders canceled amount", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("3", { exact: true })).toBeVisible();
});
