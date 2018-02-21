import { ResultModule } from './result.module';

describe('FormModule', () => {
    let resultModule: ResultModule;

    beforeEach(() => {
        resultModule = new ResultModule();
    });

    it('should create an instance', () => {
        expect(resultModule).toBeTruthy();
    });
});
