import { expect } from '@playwright/test';
import { title } from 'process';

export class HomePage {
  constructor(page) {
    // техническое описание страницы
    this.signupLink = page.getByRole('link', { name: 'Sign up' });
    this.loginLink = page.getByRole('link', { name: 'Login' });
  }

  async likeArticle() {}
}
