import { SubjModule } from './subj.module';

describe('SubjModule', () => {
  let subjModule: SubjModule;

  beforeEach(() => {
    subjModule = new SubjModule();
  });

  it('should create an instance', () => {
    expect(subjModule).toBeTruthy();
  });
});
