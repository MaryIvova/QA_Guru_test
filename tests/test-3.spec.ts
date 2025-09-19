import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/#/profile/mary');
  await expect(page.getByRole('main')).toContainText('pleasant');
});
