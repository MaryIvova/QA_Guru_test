import { test } from '@playwright/test';
// let r = await request.get(`${testinfo.project.use.apiURL}/challenges`);

export class ChallengerService {
  constructor(request) {
    this.request = request;
  }

  async post(testinfo) {
    return test.step('POST /challenger', async () => {
      const responce = await this.request.post(`${testinfo.project.use.apiURL}/challenger`);
      return responce;
    });
  }
}
