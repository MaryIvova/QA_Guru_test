import { test } from '@playwright/test';
// let r = await request.get(`${testinfo.project.use.apiURL}/challenges`);

export class ChallengesService {
  constructor(request) {
    this.request = request;
  }

  async get(token, testinfo) {
    return test.step('GET /challenger', async () => {
      const r = await this.request.get(`${testinfo.project.use.apiURL}/challenges`, {
        headers: { 'X-CHALLENGER': token },
      });
      const body = await r.json();
      return body;
    });
  }
}
