import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-modal';
import { ResultOfAssessmentRoutingModule } from './result-routing.module';
import { PageHeaderModule } from './../../shared';
import {ResultOfAssessmentComponent} from './resultOfAssessment.component';

@NgModule({
    imports: [CommonModule, ResultOfAssessmentRoutingModule, PageHeaderModule, ModalModule],
    declarations: [ResultOfAssessmentComponent]
})
export class ResultOfAssessmentModule {}
