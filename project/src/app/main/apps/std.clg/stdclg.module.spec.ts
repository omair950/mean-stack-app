import { StdclgModule } from './stdclg.module';

describe('StdclgModule', () => {
  let stdclgModule: StdclgModule;

  beforeEach(() => {
    stdclgModule = new StdclgModule();
  });

  it('should create an instance', () => {
    expect(stdclgModule).toBeTruthy();
  });
});
