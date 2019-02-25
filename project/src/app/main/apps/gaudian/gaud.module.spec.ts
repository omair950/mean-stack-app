import { GaudModule } from './gaud.module';

describe('GaudModule', () => {
  let gaudModule: GaudModule;

  beforeEach(() => {
    gaudModule = new GaudModule();
  });

  it('should create an instance', () => {
    expect(gaudModule).toBeTruthy();
  });
});
