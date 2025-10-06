import { expect } from '@playwright/test';
import { title } from 'process';
import { ArticleCreation } from './createArticlePage';

export class ArticleEdit extends ArticleCreation {
  constructor(page) {
    super(page);
    this.page = page;
    this.buttonDelete = page.locator('.ion-trash-a').first();
    this.buttonEdit = page.getByRole('link', { name: 'Edit Article' }).first();
    this.buttonUpdate = page.locator('//*[@class="btn btn-lg pull-xs-right btn-primary"]');
    this.articleDescription2 = page.locator('//input[@name = "description"]');
  }
  getArticlePreview = (text) => {
    return this.page.locator(`//*[text()='${text}']`);
  };
  //getArticleDescription = (text) => {
  // return this.articleDescription2();
  //};
  async editCreatedArticle(article) {
    const locator = this.getArticlePreview(article.title);
    await expect(locator).toHaveText(article.title);
    await locator.click();
    await expect(this.buttonEdit).toBeVisible();
    await this.buttonEdit.click();
    await this.articleDescription2.click();
    await this.articleDescription2.fill(article.description);
    await this.buttonUpdate.click();
  }

  async deleteArticle(article) {
    const locator = this.getArticlePreview(article.title);
    await expect(locator).toHaveText(article.title);
    await locator.click();
    //await expect(this.buttonDelete).toBeVisible();
    await this.buttonDelete.click();
    window.alert = function () {
      dialog.accept();
    };
  }
}
