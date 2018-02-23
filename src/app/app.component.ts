import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginEmail: string;
  loginPwd: string;
  constructor(private routeParamPath : Router){ }
  ngOnInit() { }

  onSubmit() {
    let existUser = [];
    let userDetails;
    userDetails = JSON.parse(window.localStorage.getItem('userInfoStorage'));
    // existUser.push({ email: this.LoginEmail, password: this.LoginPwd });
    console.log(existUser);
    for (let i = 0; i < userDetails.length; i++) {
      let condition = (userDetails[i].email == this.loginEmail) && (userDetails[i].pwd == this.loginPwd);
      if (condition) {
        alert("Lognin Successfull");
        //to naavigate the  page using routeparam beased on the acivity
          this.routeParamPath.navigate([userDetails[i].activityType]);
        break;
      } else {
        if (i == userDetails.length - 1) {
          alert("Invalid");
        }
      }
    }
  }
}
