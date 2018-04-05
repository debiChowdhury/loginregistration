import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService{
    private message = new BehaviorSubject<{}>({});
    private status = new BehaviorSubject<boolean>(false);
    currentMsg = this.message.asObservable();
    currentStat = this.status.asObservable();
    constructor() { }
    changeMsg(message: {}) {
        this.message.next(message);
    }
    changeStat(status) {
        this.status.next(status);
    }
}