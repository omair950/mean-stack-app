import { StdModule } from './std.module';

describe('StdModule', () => {
  let stdModule: StdModule;

  beforeEach(() => {
    stdModule = new StdModule();
  });

  it('should create an instance', () => {
    expect(stdModule).toBeTruthy();
  });
});
