import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-modal';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ResultRoutingModule, PageHeaderModule, ModalModule],
    declarations: [ResultComponent]
})
export class ResultModule {}
