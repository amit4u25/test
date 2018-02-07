import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-modal';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, ModalModule],
    declarations: [FormComponent]
})
export class FormModule {}
