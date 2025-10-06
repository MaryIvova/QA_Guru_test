import { ChallengerService } from '../src/services';
import { API } from '../src/services/api.service';
import { test } from '../src/fixtures/fixture';

let token;
//const URL = 'https://apichallenges.eviltester.com';

test.describe('Challenge', () => {
  test.beforeAll(async ({ page }) => {
    let r = await request.post(`${testinfo.project.use.apiURL}/challenger`);
    const headers = r.headers();
    console.log(`${testinfo.project.use.apiURL}${headers.location}`);
    token = headers['x-challenger'];
  });

  test('получить токен', async ({ request }, testinfo) => {
    let r = await request.get(`${testinfo.project.use.apiURL}/challenges`, {
      headers: { 'X-CHALLENGER': token },
    });
    console.log(resp.body());
    //expect(r.status()).toBe(201);
    const body = await resp.json();
    expect(body.challenges.length).toBe(59);
  });
});

test.describe('Challenge with service pattern', () => {
  test.skip('получить токен', async ({ request }, testinfo) => {
    const challenger = new ChallengerService(request);
    let r = await challenger.post(testinfo);
    const headers = r.headers();
    console.log(`${testinfo.project.use.apiURL}${headers.location}`);
    token = headers['x-challenger'];
    console.log(token);
  });
  test.skip('получить токен с фасадом', async ({ request }, testinfo) => {
    const api = new API(request);
    let r = await api.challenger.post(testinfo);
    const headers = r.headers();
    console.log(`${testinfo.project.use.apiURL}${headers.location}`);
    token = headers['x-challenger'];
    console.log(token);
  });
});
