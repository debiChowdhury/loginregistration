import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  LoginEmail: string;
  LoginPwd: string;
  ngOnInit() { }

  onSubmit() {
    let existUser = [];
    console.log(JSON.parse(window.localStorage.getItem('userInfoStoragr')));
    existUser.push({ email: this.LoginEmail, password: this.LoginPwd });
    console.log(existUser);
   
  }
}
