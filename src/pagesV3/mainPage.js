import { test } from '@playwright/test';
import { BasePage } from './base.page';

const URL = 'https://realworld.qa.guru/';

export class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.signupLink = page.getByRole('link', { name: 'Sign up' });
    this.loginLink = page.getByRole('link', { name: 'Login' });
  }

  // бизнесовые действия со страницой
  async gotoRegister() {
    return test.step('Переход на страницу регистрации', async (step) => {
      await this.signupLink.click();
    });
  }
}
