import { AppcModule } from './appc.module';

describe('AppcModule', () => {
  let appcModule: AppcModule;

  beforeEach(() => {
    appcModule = new AppcModule();
  });

  it('should create an instance', () => {
    expect(appcModule).toBeTruthy();
  });
});
