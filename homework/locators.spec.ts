import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/admin/notifications");
});

test("Plain Notification", async ({ page }) => {
  // Знаходимо текст нотифікації
  const plainNotification = await page
    .locator('//div[@class="fade alert alert-info show"]')
    .nth(0)
    .textContent();
  // Перевіряємо, чи текст співпадає з елементом на сторінки за допомогою вбудованих у Playwirght функцій
  await expect(page.getByText(`${plainNotification}`)).toBeVisible();
  // Перевіряємо, чи текст співпадає з елементом на сторінки за допомогою XPath
  await expect(
    page.locator('//div[@class="fade alert alert-info show"]').nth(0)
  ).toHaveText(`${plainNotification}`);
});

test("Notification with close button", async ({ page }) => {
  const notificationWithCloseButton = await page
    .locator('//div[@class="fade alert alert-info show"]')
    .nth(1)
    .textContent();

  await expect(page.getByText(`${notificationWithCloseButton}`)).toBeVisible();

  await expect(
    page.locator('//div[@class="fade alert alert-info show"]').nth(1)
  ).toHaveText(`${notificationWithCloseButton}`);
});

test("Notification with close button and icon", async ({ page }) => {
  const notificationWithBothElements = await page
    .locator('//div[@class="fade alert-with-icon alert alert-info show"]')
    .nth(0)
    .textContent();

  await expect(page.getByText(`${notificationWithBothElements}`)).toBeVisible();

  await expect(
    page
      .locator('//div[@class="fade alert-with-icon alert alert-info show"]')
      .nth(0)
  ).toHaveText(`${notificationWithBothElements}`);
});

test("Notification with long text", async ({ page }) => {
  const notificationWithLongText = await page
    .locator('//div[@class="fade alert-with-icon alert alert-info show"]')
    .nth(1)
    .textContent();

  await expect(page.getByText(`${notificationWithLongText}`)).toBeVisible();

  await expect(
    page
      .locator('//div[@class="fade alert-with-icon alert alert-info show"]')
      .nth(1)
  ).toHaveText(`${notificationWithLongText}`);
});
