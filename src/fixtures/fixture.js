import { test as base } from '@playwright/test';
import { App } from '../../src/pagesFacade/app.page';
import { API } from '../services/api.service';

export const test = base.extend({
  app: async ({ page }, use) => {
    let application = new App(page);
    await application.main.open();
    await use(application);
  },
  api: async ({ request }, use) => {
    let api = new API(request);
    await use(api);
  },
  registerUser: async ({ page }, use) => {
    let app = new App(page);

    const user = new UserBuilder().addEmail().addName().addPassword().generate();
    await app.main.open();
    await app.main.gotoRegister();
    await app.register.register(user);
    await use(app);
  },
});
