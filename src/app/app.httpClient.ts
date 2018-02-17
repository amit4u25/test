import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class HttpClientHelper {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    get(): Observable<any> {
        let url = 'http://riskassesment.ap-south-1.elasticbeanstalk.com/maintenance/all';
        return this.http.get<any>(url)
            .map(user => {
                return user;
            });
    }

    extractResponse(res: Response) {
        const body = res.json();
        return body;
    }

    private handleError(error: Response): Observable<any> {
        const result = error.json();
        return Observable.throw(result || 'Server error');
    }
}
