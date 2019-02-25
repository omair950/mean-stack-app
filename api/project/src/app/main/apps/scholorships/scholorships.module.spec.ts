import { ScholorshipsModule } from './scholorships.module';

describe('ScholorshipsModule', () => {
  let scholorshipsModule: ScholorshipsModule;

  beforeEach(() => {
    scholorshipsModule = new ScholorshipsModule();
  });

  it('should create an instance', () => {
    expect(scholorshipsModule).toBeTruthy();
  });
});
