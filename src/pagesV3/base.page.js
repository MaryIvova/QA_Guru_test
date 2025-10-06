import { test } from '@playwright/test';
const URL = 'https://realworld.qa.guru/';

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  // бизнесовые действия со страницой
  async open() {
    return test.step(`Переход на страницу регистрации {$URL}`, async (step) => {
      await this.page.goto(URL);
    });
  }
}
