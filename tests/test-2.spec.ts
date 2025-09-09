import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...await page.goto('https://realworld.qa.guru/#/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('muravjed@list.ru');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Asdasd,123');
  await page.getByRole('button', { name: 'Login' }).click();
});
