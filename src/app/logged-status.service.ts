 import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoggedStatusService {

  private userData = new BehaviorSubject({});
  getData = this.userData.asObservable();

  constructor() { }

  pass(loggedInStat, userName) {
    this.userData.next({
      loggedInStat: loggedInStat,
      user: userName
    });
  }
}
