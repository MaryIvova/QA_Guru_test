import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
// import { MainPage } from '../src/pages/mainPage';
// FIX: Update the import path if the file exists elsewhere, for example:
import { MainPage } from '../src/pages/index';
import { RegisterPage } from '../src/pages/registerPage';

// Or create the file '../src/pages/mainPage.js' if it does not exist.

const URL = 'https://realworld.qa.guru/';

test.describe('Регистрация', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('Пользователь может зарегистрироваться с навигацией через клавиатуру', async ({ page }) => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);

    await mainPage.gotoRegister();
    await registerPage.register(user);

    await expect(registerPage.emailErrorText).toContainText(
      'Email already exists.. try logging in',
    );
    //await expect(page.getByText(user.name));
  });
});
