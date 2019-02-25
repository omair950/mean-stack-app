import { ClgModule } from './clg.module';

describe('ClgModule', () => {
  let clgModule: ClgModule;

  beforeEach(() => {
    clgModule = new ClgModule();
  });

  it('should create an instance', () => {
    expect(clgModule).toBeTruthy();
  });
});
