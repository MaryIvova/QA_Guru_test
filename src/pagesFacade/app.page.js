import { GlobalFeed, MainPage, RegisterPage } from './index';

export class App {
  constructor(page) {
    this.page = page;
    this.globalFeed = new GlobalFeed(page);
    this.main = new MainPage(page);
    this.register = new RegisterPage(page);
  }
}
