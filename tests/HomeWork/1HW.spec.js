import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { LogInPage } from '../../src/pages/logIn.Page';
import { ArticleCreation } from '../../src/pages/createArticlePage';

// Or create the file '../src/pages/mainPage.js' if it does not exist.

const URL = 'https://realworld.qa.guru';

test.describe('Логин', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    const logInPage = new LogInPage(page);
    //const yourFeed = page.getByRole('button', { name: 'Your Feed' });

    await logInPage.userLogIn();
    await expect(page).toHaveURL('https://realworld.qa.guru/#/');
  });

  /*test('Пользователь login', async ({ page }) => {

    //await expect(yourFeed).toBeVisible();
  });*/

  test.only('New Article', async ({ page }) => {
    const article = {
      title: faker.word.adjective(),
      description: faker.word.adjective(),
      text: faker.lorem.lines(3),
      tags: faker.word.adjective(),
    };
    const articleTT = page.locator('//*[class="col-md-12"]');

    const newArticle = new ArticleCreation(page);
    await newArticle.createArticle(article);

    expect(articleTT).toBeVisible;
  });

  test('Check My articler', async ({ page }) => {});
  //test ('EditProfile', async ({ page }) => {}
});
