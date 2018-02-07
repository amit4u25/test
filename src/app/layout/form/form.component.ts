import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Modal } from 'ng2-modal';
import { Router } from '@angular/router';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    dropdownList = [
        {'name': 'Please select your Monitoring APM...'},
        {   'name': 'AppDynamics'},
        {   'name': 'Argus'},
        {   'name': 'CloudWatch'},
        {   'name': 'PinPont'},
        {    'name': 'Do Not have'}
        ];
    selectedValue: any;

    @ViewChild('myModal') myModal: Modal;

    constructor(private router: Router) {}

    ngOnInit() {}

    onChange(data) {
        console.log(data);
        this.selectedValue = data;
        this.myModal.open();
    }

}
