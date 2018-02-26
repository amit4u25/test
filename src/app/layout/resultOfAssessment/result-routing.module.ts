import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultOfAssessmentComponent } from './resultOfAssessment.component';
const routes: Routes = [
    {
        path: '', component: ResultOfAssessmentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResultOfAssessmentRoutingModule {
}
