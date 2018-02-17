import { AssessmentModule } from './assessment.module';

describe('FormModule', () => {
    let formModule: AssessmentModule;

    beforeEach(() => {
        formModule = new AssessmentModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
