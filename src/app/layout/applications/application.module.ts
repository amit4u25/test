import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-modal';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ApplicationRoutingModule, PageHeaderModule, ModalModule],
    declarations: [ApplicationComponent]
})
export class ApplicationModule {}
