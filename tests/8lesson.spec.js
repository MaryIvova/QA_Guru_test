import { test, expect } from '@playwright/test';
import { App } from '../src/pagesV3/app.page';
import { UserBuilder } from '../src/builders/index';

const URL = 'https://realworld.qa.guru/';

test.describe('Регистрация', () => {
  // test.beforeEach(async ({ page }) => {
  // await page.goto(URL);
  //});

  test('Пользователь не может зарегистрироваться повторно Facade', async ({ page }) => {
    const user = new UserBuilder().addEmail().addName().addPassword().generate();

    let app = new App(page);
    await app.main.open();
    await app.main.gotoRegister();
    await app.register.register(user);
    //await app.globalFeed.register();

    await expect(app.globalFeed.yourfeedEmptyTest.emailErrorText).toBeVisible();
  });
});
