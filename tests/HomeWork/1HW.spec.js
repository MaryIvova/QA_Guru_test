import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { LogInPage } from '../../src/pages/logIn.Page';
import { ArticleCreation } from '../../src/pages/createArticle';

// Or create the file '../src/pages/mainPage.js' if it does not exist.

const URL = 'https://realworld.qa.guru';

test.describe('Логин', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test.only('Пользователь login', async ({ page }) => {
    const logInPage = new LogInPage(page);
    //const yourFeed = page.getByRole('button', { name: 'Your Feed' });

    await logInPage.userLogIn();
    await expect(page).toHaveURL('https://realworld.qa.guru/#/');
    //await expect(yourFeed).toBeVisible();
  });

  test('New Article', async ({ page }) => {
    const newArticle = new ArticleCreation(page);
  });

  //test ('EditProfile', async ({ page }) => {}
});
