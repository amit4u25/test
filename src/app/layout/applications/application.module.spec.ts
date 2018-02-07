import { ApplicationModule } from './application.module';

describe('FormModule', () => {
    let formModule: ApplicationModule;

    beforeEach(() => {
        formModule = new ApplicationModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
