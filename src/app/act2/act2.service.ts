import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxJs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class BookDetailsService{
    url: string = 'assets/data/bookDetails.json';
    constructor(private http: Http) { }
    getBookDetails(): Observable<any>{
        return this.http.get(this.url)
            .map((response: Response) => {return response.json()});
    }

}