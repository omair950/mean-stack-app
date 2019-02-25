import { SchModule } from './sch.module';

describe('SchModule', () => {
  let schModule: SchModule;

  beforeEach(() => {
    schModule = new SchModule();
  });

  it('should create an instance', () => {
    expect(schModule).toBeTruthy();
  });
});
