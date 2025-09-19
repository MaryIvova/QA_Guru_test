import { expect } from '@playwright/test';
import { test } from '../src/fixtures/index';
import { UserBuilder } from '../src/builders/index';

const URL = 'https://realworld.qa.guru/';

test.describe('Регистрация', () => {
  // test.beforeEach(async ({ page }) => {
  // await page.goto(URL);
  // });
  test.only('Пользователь не может зарегистрироваться повторно Fixture', async ({ app }) => {
    const user = new UserBuilder().addEmail().addName().addPassword().generate();

    await app.main.gotoRegister();
    await app.register.register(user);
    //  await app.globalfeed.register();

    // todo переделать ассерт
    await expect(app.register.emailErrorText).toContainText(
      'Email already exists.. try logging in',
    );
  });
  test.only('Пользователь не может зарегистрироваться повторно Fixture2', async ({
    registerUser,
  }) => {
    return test.step;
  });
});
