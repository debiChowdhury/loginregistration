import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  email: string;
  pwd: string;
  confirmPwd: string;

  constructor(private routerPath: Router) { }

  ngOnInit() {
  }

  onSignUp() {
    console.log(this.email + ',' + this.pwd + ',' + this.confirmPwd);
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let userInfo;
    userInfo = JSON.parse(window.localStorage.getItem('userInfoStoragr'));
    if (userInfo === null) {
      userInfo = [];
    }
    if (!emailPattern.test(this.email)) {
      alert('Please enter valid email');
    } else {
      if (this.pwd === this.confirmPwd) {
        userInfo.push({ email: this.email, pwd: this.pwd });
        window.localStorage.setItem('userInfoStoragr', JSON.stringify(userInfo));
        this.routerPath.navigateByUrl('/signin');
      } else {
        alert('password and confirm password does not match');
      }
      this.email = '';
      this.pwd = '';
      this.confirmPwd = '';
    }
  }
}
