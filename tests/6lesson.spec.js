import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { MainPage, RegisterPage } from '../src/pages/index';
import { UserBuilder } from '../src/builders/index';

const URL = 'https://realworld.qa.guru/';

test.describe('Регистрация', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('Пользователь не может зарегистрироваться повторно Builder', async ({ page }) => {
    const user = new UserBuilder().addEmail().addName().addPassword().generate();

    /*const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const userDTO = {
      id: null,
      email: '',
      age: 0,
      isActive: true,
      dto(overrides = {}) {
        return {
          ...this,
          id: Date.now(),
          isActive: false,
          ...overrides,
        };
      },
    };

    const userDemo = userDTO.dto();
    console.log(userDemo);*/
    console.log(user);
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
