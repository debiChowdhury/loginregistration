import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedStatusService } from './logged-status.service';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  providers: [LoggedStatusService]
})

export class AppComponent implements OnInit {
  loginEmail: string;
  loginPwd: string;
  loggedInStatus: boolean = false;
  status;

  constructor(private routeParamPath: Router, private loggedInStat: LoggedStatusService, private route: ActivatedRoute) { }

  ngOnInit() {
    // status = JSON.parse(sessionStorage.getItem('status'));
    // console.log(status);
    // if (!status) {
    //   this.routeParamPath.navigateByUrl('/signin');
    //   alert('please login again')
    // }
  }

  onSubmit() {
    let existUser = [];
    let userDetails;
    userDetails = JSON.parse(window.localStorage.getItem('userInfoStorage'));
    for (let i = 0; i < userDetails.length; i++) {
      let condition = (userDetails[i].email == this.loginEmail) && (userDetails[i].pwd == this.loginPwd);
      if (condition) {
        //to navigate the  page using routeparam beased on the acivity 
        this.routeParamPath.navigate([userDetails[i].activityType, { username: userDetails[i].username }]);
        this.loggedInStatus = true;
        sessionStorage.setItem('status', JSON.stringify(this.loggedInStatus));
        break;
      } else {
        if (i == userDetails.length - 1) {
          alert("Invalid");
        }
      }
    }
  }
}
