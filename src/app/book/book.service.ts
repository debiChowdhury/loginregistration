import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxJs/Observable';
import 'rxjs/add/operator/map';

@Injectable() 
export class BookContentService{
    _url: 'assets/data/bookContent.json';
    constructor(private _httpCall: Http) { }
    getBookContent(): Observable<any>{
        return this._httpCall.get(this._url)
            .map((response: Response) => { return response.json() });
    }
}