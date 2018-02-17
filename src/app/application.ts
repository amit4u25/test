import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClientHelper} from './app.httpClient';
import {Router} from '@angular/router';

import 'rxjs/Rx';

@Injectable()
export class Application {
    private editDelivery: string = 'deliveryMethod/edit';
    private getDeliveryData: string = 'maintenance/all';
    private httpClient: HttpClientHelper;

    constructor(httpClient: HttpClientHelper, private router: Router) {
        this.httpClient = httpClient;
    }

    // handle responce which is got from map function
    private extractResponse(res) {
        return res;
    }

    // handle error which is got from catch function
    private handleError(error) {
        const errorCode = error.error.code;
        // if invalid token or token expired
        if (errorCode === '-114' || errorCode === -114 || errorCode === '-102' || errorCode === -102 || errorCode === '-132'
            || errorCode === -132 || errorCode === '-104' || errorCode === -104) {
            // if the user is inactivated by the admin
            if (errorCode === '-132' || errorCode === -132) {
                localStorage.clear();
                // this.toastr.error(error.error.message);
                setTimeout(() => {
                    this.router.navigate(['login']);
                }, 3000);
            } else {
                localStorage.clear();
                // this.toastr.error(error.error.message);
                this.router.navigate(['login']);
            }
        } else {
            return Observable.throw(error);
        }
    }
}
