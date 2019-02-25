import { AddrsModule } from './addrs.module';

describe('AddrsModule', () => {
  let addrsModule: AddrsModule;

  beforeEach(() => {
    addrsModule = new AddrsModule();
  });

  it('should create an instance', () => {
    expect(addrsModule).toBeTruthy();
  });
});
