import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/#/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('nav').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('muravjed@list.ru');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Asdasd,123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' New Article' }).click();
  await page.getByRole('textbox', { name: "What's this article about?" }).click();
});
