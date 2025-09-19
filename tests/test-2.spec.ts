import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).dblclick();
  await page.getByRole('textbox', { name: 'Email' }).fill('muravjed@list.ru');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Asdasd,123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('mary').click();
  await page.getByRole('link', { name: ' Profile' }).click();
  await page.getByRole('heading', { name: 'mary' }).click();
  await page.getByText('marySeptember 10, 2025 ( 0 )pleasantafraidRead more...corrupt').click();
});
