import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.scss'],
    animations: [routerTransition()]
})
export class ApplicationComponent implements OnInit {
    toggleZero: boolean = false;
    toggleFirst: boolean =  false;
    toggleSecond: boolean = false;
    dataListZero = ['Node1', 'Node2', 'Node3'];
    dataListFirst = ['Tabs-1', 'Tabs-2', 'Tabs-3', 'Tabs-4', 'Tabs-5'];
    dataListSecond = ['Event-1', 'Event-2', 'Event-3', 'Event-4', 'Event-5'];

    constructor() {
    }

    ngOnInit() {
    }

    toggle(data) {
        if (data === 0) {
            this.toggleZero = !this.toggleZero;
        } else if (data === 1) {
            this.toggleFirst = !this.toggleFirst;
        } else if (data === 2) {
            this.toggleSecond = !this.toggleSecond;
        }

    }
}
