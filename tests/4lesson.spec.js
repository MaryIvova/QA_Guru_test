import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';

//const nameInput = page.getByRole('textbox', { name: 'Your Name' });
const URL = 'https://realworld.qa.guru/';

const SIGNUP_LINK_TEST = 'Sign up';
const YOUR_NAME_INPUT = 'Your Name';
const EMAIL_INPUT_TEXT = 'Email';
const PASSWORD_INPUT_TEXT = 'Password';
const SIGNUP_BUTTON_TEXT = 'Sign up';

const fillRegisrtationForm = async (page, user) => {
  await page.goto(URL);
  await page.getByRole('link', { name: SIGNUP_LINK_TEST }).click();
  await page.getByRole('textbox', { name: YOUR_NAME_INPUT }).click();
  await page.getByRole('textbox', { name: YOUR_NAME_INPUT }).fill(user.name);
  await page.getByRole('textbox', { name: YOUR_NAME_INPUT }).press('Tab');
  await page.getByRole('textbox', { name: EMAIL_INPUT_TEXT }).fill(user.email);
  await page.getByRole('textbox', { name: EMAIL_INPUT_TEXT }).press('Tab');
  await page.getByRole('textbox', { name: PASSWORD_INPUT_TEXT }).fill(user.password);
  await page.getByRole('button', { name: SIGNUP_BUTTON_TEXT }).click();
};

test.describe('Registration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('Регистрация пользователя через клавиатуру', async ({ page }) => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    await fillRegisrtationForm(page, user);

    await expect(page.getByText(name)).toBeVisible();
    await expect(page.getByRole('navigation')).toContainText(name);
  });
});

/* const flat = {
  number: 24,
  isFree: 'no',
  hasAnimals: 'yes',
  roomsCount: 2,
  kitchen: {
    hasGas: false,
  },
  din: function (text) {
    console.log(text);
  },
  don(text) {
    console.log(text);
  },
  async click() {
    //do something
  },
};

flat.hasAnimals;
flat.room = { hasSofa: true };

console.log(flat);
*/

const homePets = {
  cats: true,
  dogs: false,
};

console.log(homePets.cats);
