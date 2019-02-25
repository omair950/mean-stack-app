import { ProfModule } from './prof.module';

describe('ProfModule', () => {
  let profModule: ProfModule;

  beforeEach(() => {
    profModule = new ProfModule();
  });

  it('should create an instance', () => {
    expect(profModule).toBeTruthy();
  });
});
