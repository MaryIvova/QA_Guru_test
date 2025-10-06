import { test, expect } from '@playwright/test';
import { API } from '../src/services/api.service';

let token;

test.describe('Challenge', () => {
  test.beforeAll(async ({ request }, testinfo) => {
    const api = new API(request);
    let r = await api.challenger.post(testinfo);
    const headers = r.headers();
    console.log(`${testinfo.project.use.apiURL}${headers.location}`);
    token = headers['x-challenger'];
  });
  test.only('получить токен', async ({ request }, testinfo) => {
    const api = new API(request);
    let body = await api.challenges.get(token, testinfo);
    console.log(body);
    expect(body.challenges.length).toBe(59);
  });
});
