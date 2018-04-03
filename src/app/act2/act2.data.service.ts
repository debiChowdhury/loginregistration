import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService{
    private message = new BehaviorSubject<{}>({});
    currentMsg = this.message.asObservable();
    constructor() { }
    changeMsg(message: {}) {
        this.message.next(message);
    }
}