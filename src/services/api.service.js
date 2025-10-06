import { ChallengerService, ChallengesService } from './index';

export class API {
  constructor(request) {
    this.request = request;
    this.challenger = new ChallengerService(request);
    this.challenges = new ChallengesService(request);
  }
}
