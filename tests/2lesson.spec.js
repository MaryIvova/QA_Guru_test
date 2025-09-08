import { test, expect } from '@playwright/test';

const URL = 'file:///C:/Users/maryz/Downloads/demo.html';

test('test', async ({ page }) => {
  // arrange или настройка, предусловие
  await page.goto(URL);
  await page.locator('#email').click();
  await page.locator('#email').fill('maryz@ya.ru');
  await page.locator('#password').click();
  await page.locator('#password').fill('asdasd,123');
  await page.locator('#btn').click();
  await expect(page.locator('#welcome-txt')).toContainText('Привет');
});

test('Поиск эллемента по аттрибуту', async ({ page }) => {
  // arrange или настройка, предусловие
  await page.goto(URL);
  await page.locator('[name="email"]').click();
  await page.locator('[name="email"]').fill('maryz@ya.ru');
  await page.locator('[id="password"]').click();
  await page.locator('[id="password"]').fill('asdasd,123');
  await page.locator('[in="btn"]').click();
  await expect(page.locator('[id="welcome-txt"]')).toContainText('Привет');
});

test('Поиск эллемента по классу', async ({ page }) => {
  // arrange или настройка, предусловие
  await page.goto(URL);
  await page
    .locator('.el-intup__wrapper')
    .filter({ has: page.locator('#email') })
    .click();
  await page.locator('[name="email"]').fill('maryz@ya.ru');
  await page.locator('[id="password"]').click();
  await page.locator('[id="password"]').fill('asdasd,123');
  await page.locator('[in="btn"]').click();
  await expect(page.locator('[id="welcome-txt"]')).toContainText('Привет');
});

test.only('Поиск эллемента по семантическому селектору', async ({ page }) => {
  // arrange или настройка, предусловие
  await page.goto(URL);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('maryz@ya.ru');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('asdasd,123');
  await page.getByRole('button', { name: 'Войти' }).click();
  await expect(page.locator('[id="welcome-txt"]')).toContainText('Привет');
});
