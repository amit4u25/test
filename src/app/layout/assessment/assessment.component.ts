import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { HttpClientHelper } from '../../app.httpClient';
import index from '@angular/cli/lib/cli';
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
    subContentsResult: any = [];
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



    submit() {

        let answer = [];
        for (let i = 0; i < this.indexArray.length; i++) {
            let input = {
                index: this.indexArray[i] + 1,
                answer: this.answerArray[i]
            };
            answer.push(input);
        }

        let subAnswer = [];
        for (let j = 0; j < this.subIndexFirstArray.length; j++) {
            let data = {
                firstIndex: this.subIndexFirstArray[j] + 1,
                secondIndex: this.subIndexSecondArray[j] + 1,
                answer: this.subAnswerArray[j],
            };
            subAnswer.push(data);
        }
        console.log(answer);
        console.log(subAnswer);
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
                });
            }
        });
    }

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

                for(let i = 0; i < this.subIndexFirstArray.length; i++) {
                    let temp = this.subIndexFirstArray.indexOf(index);
                    if(temp !== -1) {
                        this.subIndexFirstArray.splice(temp, 1);
                        this.subIndexSecondArray.splice(temp, 1);
                        this.subAnswerArray.splice(temp, 1);
                        this.subContentsResult.splice(temp, 1);
                    }
                }
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

    onSecondSelectionChange(status, index1, index2) {


        let value = index1.toString() + '.' + index2.toString();

        if (this.subAnswerArray.lenght > 0) {
            let id = this.subContentsResult.indexOf(value);
            if (id === -1) {
                this.subAnswerArray.push(status);
                this.subIndexFirstArray.push(index1);
                this.subIndexSecondArray.push(index2);
                this.subContentsResult.push(value);
            } else {
                this.subAnswerArray.splice(id, 1);
                this.subIndexFirstArray.splice(id, 1);
                this.subIndexSecondArray.splice(id, 1);
                this.subContentsResult.splice(id, 1);

                this.subAnswerArray.push(status);
                this.subIndexFirstArray.push(index1);
                this.subIndexSecondArray.push(index2);
                this.subContentsResult.push(value);
            }

        } else {
            this.subAnswerArray.push(status);
            this.subIndexFirstArray.push(index1);
            this.subIndexSecondArray.push(index2);
            this.subContentsResult.push(value);
        }
    }
}
