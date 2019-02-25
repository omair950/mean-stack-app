import { AcadModule } from './acad.module';

describe('AcadModule', () => {
  let acadModule: AcadModule;

  beforeEach(() => {
    acadModule = new AcadModule();
  });

  it('should create an instance', () => {
    expect(acadModule).toBeTruthy();
  });
});
