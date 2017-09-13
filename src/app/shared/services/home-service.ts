import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HomeModel } from "../models/home.model";

@Injectable()
export class HomeService {
    constructor(public http: HttpClient) { }

    getData(): Observable<HomeModel> {
        return this.http.get('./assets/mockup-data/home.json')
          .map(response => {
            
            return response;
          })
          .catch(error => this.handleError(error));
      }

    private handleError(error: any) {
        if (error instanceof Response) {
            return Observable.throw(error.json()['error'] || 'backend server error');
        }
        return Observable.throw(error || 'backend server error');
    }

}
