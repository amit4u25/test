import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOfAssessmentComponent } from './resultOfAssessment.component';

describe('ResultOfAssessmentComponent', () => {
    let component: ResultOfAssessmentComponent;
    let fixture: ComponentFixture<ResultOfAssessmentComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ResultOfAssessmentComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultOfAssessmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
