import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxJs/Observable';
import 'rxjs/add/operator/map';

@Injectable() 
export class BookContentService{
    url: string = 'assets/data/bookContent.json';
    constructor(private _httpCall: Http) { }
    getBookContent(): Observable<any>{
        return this._httpCall.get(this.url)
            .map((response: Response) => { return response.json() });
    }
}