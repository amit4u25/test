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
    resultContents: any = [];
    selectValue: any = [];
    answerId: any = [];
    subAnswerId: any = [];
    subContentsResult: any = [];
    changeState: any = '';
    qustions: any = [];
    bapdata: any = '';
    eventData: any = [];
    constructor(private router: Router,
                private application: HttpClientHelper) {
        this.application.get().subscribe(
            data => this.success(data)
        );
    }

    success(data) {
        let dropdown = [];
        dropdown.push({'question': 'Select Question', 'id': 0},
            {'question': 'Both', 'id': 1});
        let index = 2;
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
        let answer = {
            bap: this.bapdata,
            releaseVersion:  this.eventData,
            questionAnswer: []
        };

        // for (let i = 0; i < this.indexArray.length; i++) {
        //     let input = {
        //         answer: this.answerArray[i],
        //         questionId: this.answerId[i]
        //     };
        //     answer.questionAnswer.push(input);
        // }

        // let subAnswer = [];
        for (let j = 0; j < this.subIndexFirstArray.length; j++) {
            let data = {
                answer: this.subAnswerArray[j],
                questionId: this.subAnswerId[j]
            };
            answer.questionAnswer.push(data);
        }

        this.application.submitAnswer(answer).subscribe(
            data => this.successAnswer(data)
        );
    }

    successAnswer(data) {
        console.log(data);
        if (data) {
            if (data.performanceTestingRequired) {
                data.performanceTestingRequired = 'Required';
            } else {
                data.performanceTestingRequired = 'Not Required';
            }
        }

        this.application.setResult(data);
        this.router.navigate(['result']);
    }

    back() {
    }

    onChange(data) {
        this.changeState = data;
        this.application.get().subscribe(
            output => this.successChanges(output)
        );
    }

    successChanges(input) {
        let data = this.changeState;
        this.qustions = [];

        input.forEach(item => {
            if(data === 'Both') {
                this.subIndexFirstArray = [];
                this.subIndexSecondArray = [];
                this.subAnswerArray = [];
                this.subContentsResult = [];
                this.subAnswerId = [];
                this.answerArray = [];
                this.indexArray = [];
                this.answerId = [];

                item.tierTwoQuestion.forEach(thirdItem => {
                    thirdItem.isType = false;
                });

                if(this.qustions.length > 0) {
                    this.qustions.push.apply(this.qustions, item.tierTwoQuestion);
                } else {
                    this.qustions = item.tierTwoQuestion;
                }

            }

            if (item.changeType === data) {
                this.subIndexFirstArray = [];
                this.subIndexSecondArray = [];
                this.subAnswerArray = [];
                this.subContentsResult = [];
                this.subAnswerId = [];
                this.answerArray = [];
                this.indexArray = [];
                this.answerId = [];

                item.tierTwoQuestion.forEach(thirdItem => {
                    thirdItem.isType = false;
                    thirdItem.both = false;

                });
                this.qustions = item.tierTwoQuestion;
            }
        });

    }

    onSelectionChange(entry, index, _id) {

        if (this.indexArray.length > 0) {
            let id = this.indexArray.indexOf(index);
            if (id === -1) {
                this.answerArray.push(entry);
                this.indexArray.push(index);
                this.answerId.push(_id);
            } else {
                this.answerArray.splice(id, 1);
                this.indexArray.splice(id, 1);
                this.answerId.splice(id, 1);

                this.answerArray.push(entry);
                this.indexArray.push(index);
                this.answerId.push(_id);

                for(let i = 0; i < this.subIndexFirstArray.length; i++) {
                    let temp = this.subIndexFirstArray.indexOf(index);
                    if(temp !== -1) {
                        this.subIndexFirstArray.splice(temp, 1);
                        this.subIndexSecondArray.splice(temp, 1);
                        this.subAnswerArray.splice(temp, 1);
                        this.subContentsResult.splice(temp, 1);
                        this.subAnswerId.splice(temp, 1);
                    }
                }
            }
        } else {
            this.answerArray.push(entry);
            this.indexArray.push(index);
            this.answerId.push(_id);
        }

        if (entry) {
            this.qustions[index].isType = true;
        } else {
            this.qustions[index].isType = false;
        }
    }

    onSecondSelectionChange(status, index1, index2, _id) {


        let value = index1.toString() + '.' + index2.toString();

        if (this.subAnswerArray.lenght > 0) {
            let id = this.subContentsResult.indexOf(value);
            if (id === -1) {
                this.subAnswerArray.push(status);
                this.subIndexFirstArray.push(index1);
                this.subIndexSecondArray.push(index2);
                this.subContentsResult.push(value);
                this.subAnswerId.push(_id);
            } else {
                this.subAnswerArray.splice(id, 1);
                this.subIndexFirstArray.splice(id, 1);
                this.subIndexSecondArray.splice(id, 1);
                this.subContentsResult.splice(id, 1);
                this.subAnswerId.splice(id, 1);

                this.subAnswerArray.push(status);
                this.subIndexFirstArray.push(index1);
                this.subIndexSecondArray.push(index2);
                this.subContentsResult.push(value);
                this.subAnswerId.push(_id);
            }

        } else {
            this.subAnswerArray.push(status);
            this.subIndexFirstArray.push(index1);
            this.subIndexSecondArray.push(index2);
            this.subContentsResult.push(value);
            this.subAnswerId.push(_id);
        }
    }

    bap(data) {
        this.bapdata = data;
    }
    version(data) {
        this.eventData = data;
    }
}
