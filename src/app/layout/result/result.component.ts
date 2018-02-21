import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Modal } from 'ng2-modal';
import { HttpClientHelper } from '../../app.httpClient';
import { Router } from '@angular/router';
@Component({
    selector: 'app-form',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
    animations: [routerTransition()]
})
export class ResultComponent implements OnInit {
    result: any;
    constructor(private router: Router,
                private application: HttpClientHelper) {
        this.result =  this.application.getResult();
    }

    ngOnInit() {}


}
