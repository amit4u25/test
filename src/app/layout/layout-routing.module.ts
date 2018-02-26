import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {AssessmentModule} from './assessment/assessment.module';
import {ResultOfAssessmentModule} from './resultOfAssessment/resultOfAssessment.module';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'test', loadChildren: './form/form.module#FormModule' },
            { path: 'result', loadChildren: './resultOfAssessment/resultOfAssessment.module#ResultOfAssessmentModule' },
            { path: 'show-result', loadChildren: './result/result.module#ResultModule' },
            { path: 'assessment', loadChildren: './assessment/assessment.module#AssessmentModule' },
            { path: 'application', loadChildren: './applications/application.module#ApplicationModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
