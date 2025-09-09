export class ArticleCreation {
  constructor(page) {
    this.this.buttonNewArticle = page.locator('.ion-compose');
  }

  async userLogIn() {
    await this.emailField.fill('muravjed@listenerCount.ru');
    await this.pwdField.fill('Asdasd,123');
    await this.buttonLogIn.click();
  }
}
