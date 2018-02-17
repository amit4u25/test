import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { HttpClientHelper } from '../../app.httpClient';
@Component({
    selector: 'app-form',
    templateUrl: './assessment.component.html',
    styleUrls: ['./assessment.component.scss'],
    animations: [routerTransition()]
})
export class AssessmentComponent implements OnInit {
    answerArray: any = [];
    indexArray: any = [];
    subAnswerArray: any = [];
    subIndexFirstArray: any = [];
    subIndexSecondArray: any = [];
    resultContents; any = [];
    selectValue: any = [];
    subContentsResult: any [];
    tempQ: any;
    qustions: any = [];
    constructor(private router: Router,
                private application: HttpClientHelper) {
        this.application.get().subscribe(
            data => this.success(data)
        );
    }

    success(data) {
        let dropdown = [];
        dropdown.push({'question': 'Select Question', 'id': 0});
        let index = 1;
        data.forEach(item => {
            let inputs = {
                'question':  item.changeType,
                'id': index
            }
            index++;
            dropdown.push(inputs);
        });
        this.selectValue = dropdown;
        this.resultContents = data;
    }


    ngOnInit() {}

    onSelectionChange(entry, index) {

        if (this.indexArray.length > 0) {
            let id = this.indexArray.indexOf(index);
            if (id === -1) {
                this.answerArray.push(entry);
                this.indexArray.push(index);
            } else {
                this.answerArray.splice(id, 1);
                this.indexArray.splice(id, 1);
                this.answerArray.push(entry);
                this.indexArray.push(index);
            }
        } else {
            this.answerArray.push(entry);
            this.indexArray.push(index);
        }

        if (entry) {
            this.qustions[index].isType = true;
        } else {
            this.qustions[index].isType = false;
        }
    }

    submit() {

        let dummy = [];
        for (let i = 0; i < this.indexArray.length; i++) {
            let input = {
                index: this.indexArray[i],
                answer: this.answerArray[i]
            };
            dummy.push(input);
        }
    }

    back() {
        console.log();
    }

    onChange(data) {

        this.resultContents.forEach(item => {
            if (item.changeType === data) {
                item.tierTwoQuestion.forEach(thirdItem => {
                    thirdItem.isType = false;
                    this.qustions = item.tierTwoQuestion;
                }
                setTimeout(() => {
                    console.log(this.qustions);
                }, 200);

            }
        });
    }

    onSecondSelectionChange(status, index1, index2) {
        console.log(status);
        console.log(index1);
        console.log(index2);

        if (this.subIndexFirstArray.length > 0) {
            let id = this.subIndexFirstArray.indexOf(index1);
            if (id === -1) {
                this.subAnswerArray.push(status);
                this.subIndexFirstArray.push(index1);
            } else {
                this.subAnswerArray.splice(id, 1);
                this.subIndexFirstArray.splice(id, 1);
                this.subAnswerArray.push(status);
                this.subIndexFirstArray.push(index1);
            }
        } else {
            this.subAnswerArray.push(status);
            this.subIndexFirstArray.push(index1);
            this.subIndexSecondArray.push(index2);
            this.subContentsResult.push({
                status: status,
                indexFirst: index1,
                indexSecond: index2,
            });
        }
    }
}
