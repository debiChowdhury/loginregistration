import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface UserInfo {
  username?: string,
  email?: string,
  pwd?: string,
  activityType?: string
}
// interface status{
//   loggedInStatus?: boolean
// }
@Injectable()
export class LoggedStatusService {

  setLocalStorageItem(userInfo: Array<UserInfo>) {
    localStorage.setItem('userInfoStorage', JSON.stringify(userInfo));
  }
  getLocalStorageItem() {
    return JSON.parse(window.localStorage.getItem('userInfoStorage'));
  }
  setSessionStorageItem(status: Boolean) {
    sessionStorage.setItem('status', JSON.stringify(status));
  }
  getSessionStorageItem() {
    return JSON.parse(sessionStorage.getItem('status'));
  }
}


