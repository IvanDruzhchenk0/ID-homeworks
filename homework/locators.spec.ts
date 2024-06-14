import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/admin/notifications");
});

test("Plain Notification", async ({ page }) => {
  // Знаходимо текст нотифікації
  const plainNotification = await page
    .locator('//*[contains(@class, "alert-info show")]/*[contains(text(), "plain notification")]')
    .textContent();
  // Перевіряємо, чи текст співпадає з елементом на сторінки за допомогою вбудованих у Playwirght функцій
  await expect(page.getByText(`${plainNotification}`)).toBeVisible();
  // Перевіряємо, чи текст співпадає з елементом на сторінки за допомогою XPath
  await expect(
    page.locator('//*[contains(@class, "alert-info show")]/*[contains(text(), "plain notification")]')
  ).toHaveText(`${plainNotification}`);
});

test("Notification with close button", async ({ page }) => {
  const notificationWithCloseButton = await page
    .locator('//*[contains(@class, "alert-info show")]/*[text() = "This is a notification with close button."]')
    .textContent();

  await expect(page.getByText(`${notificationWithCloseButton}`)).toBeVisible();

  await expect(
    page.locator('//*[contains(@class, "alert-info show")]/*[text() = "This is a notification with close button."]')
  ).toHaveText(`${notificationWithCloseButton}`);
});

test("Notification with close button and icon", async ({ page }) => {
  const notificationWithBothElements = await page
    .locator('//*[contains(@class, "alert-with-icon")]/*[text() = "This is a notification with close button and icon."]')
    .textContent();

  await expect(page.getByText(`${notificationWithBothElements}`)).toBeVisible();

  await expect(
    page
      .locator('//*[contains(@class, "alert-with-icon")]/*[text() = "This is a notification with close button and icon."]')
  ).toHaveText(`${notificationWithBothElements}`);
});

test("Notification with long text", async ({ page }) => {
  const notificationWithLongText = await page
    .locator('//*[contains(@class, "alert-with-icon")]/*[contains(text(), "beautiful notification")]')
    .textContent();

  await expect(page.getByText(`${notificationWithLongText}`)).toBeVisible();

  await expect(
    page
      .locator('//*[contains(@class, "alert-with-icon")]/*[contains(text(), "beautiful notification")]')
  ).toHaveText(`${notificationWithLongText}`);
});
