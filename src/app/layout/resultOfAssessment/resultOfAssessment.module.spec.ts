import { ResultOfAssessmentRoutingModule } from './result-routing.module';

describe('ResultRoutingModule', () => {
    let resultModule: ResultOfAssessmentRoutingModule;

    beforeEach(() => {
        resultModule = new ResultOfAssessmentRoutingModule();
    });

    it('should create an instance', () => {
        expect(resultModule).toBeTruthy();
    });
});
