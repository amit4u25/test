import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-modal';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { PageHeaderModule } from './../../shared';
import {AssessmentComponent} from './assessment.component';

@NgModule({
    imports: [CommonModule, AssessmentRoutingModule, PageHeaderModule, ModalModule],
    declarations: [AssessmentComponent]
})
export class AssessmentModule {}
