import { CollegesModule } from './colleges.module';

describe('CollegesModule', () => {
  let collegesModule: CollegesModule;

  beforeEach(() => {
    collegesModule = new CollegesModule();
  });

  it('should create an instance', () => {
    expect(collegesModule).toBeTruthy();
  });
});
