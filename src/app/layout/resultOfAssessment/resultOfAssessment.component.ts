import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Modal } from 'ng2-modal';
import { HttpClientHelper } from '../../app.httpClient';
import { Router } from '@angular/router';
@Component({
    selector: 'app-form',
    templateUrl: './resultOfAssessment.component.html',
    styleUrls: ['./resultOfAssessment.component.scss'],
    animations: [routerTransition()]
})
export class ResultOfAssessmentComponent implements OnInit {
    result: any;
    constructor(private router: Router,
                private application: HttpClientHelper) {
        this.result =  this.application.getResultData();
    }

    ngOnInit() {}


}
