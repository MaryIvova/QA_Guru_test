import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/#/login');
  await page.getByRole('button', { name: 'Login' }).click();
});
