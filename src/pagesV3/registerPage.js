import { test } from '@playwright/test';
import { BasePage } from './base.page';

export class RegisterPage extends BasePage {
  constructor(page) {
    super(page);

    this.nameInput = page.getByRole('textbox', { name: 'Your Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signupButton = page.getByRole('button', { name: 'Sign up' });
    this.emailErrorText = page.getByText('Email  already exists.. try logging in ');
  }
  async register(user) {
    return test.step(`Регистрация пользователя с ${user.name} с имейл ${user.email} и паролем ${user.password}`, async (step) => {
      step.attach('Реквизиты доступа', {
        body: `с ${user.name} с имейл ${user.email} и паролем ${user.password}`,
        contetnType: 'text/plain',
      });
      const { name, email, password } = user;
      await this.nameInput.click();
      await this.nameInput.fill(name);
      await this.emailInput.click();
      await this.emailInput.fill(email);
      await this.passwordInput.click();
      await this.passwordInput.fill(password);
      await this.signupButton.click();
    });
  }
}
