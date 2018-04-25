import { Component, Output, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookListService } from './act1.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { LoggedStatusService } from '../logged-status.service';

@Component({
  selector: 'app-act1',
  templateUrl: './act1.component.html',
  styleUrls: ['./act1.component.css'],
  providers: [LoggedStatusService]
})
export class Act1Component implements OnInit {

  bookList: any[] = [];
  libraryType: string;
  visibleBookList: any[] = [];
  libraryOption = [];
  userName: string;
  status:any;
  state;
  constructor(private _booklist: BookListService, private _router: Router, private routeName: ActivatedRoute, private loggedStatus: LoggedStatusService) { }
  ngOnInit() {
    //getting the value from the url using snapshot
    let name = this.routeName.snapshot.params['username'];
    this.userName = name;
    //subscribe the data to component
    this._booklist.getBookList().subscribe((data) => {
      this.bookList = data;
      console.log(this.bookList);
      this.getBook();
      this.libraryOption = Object.keys(this.bookList);
    });
    // status = JSON.parse(sessionStorage.getItem('status'));
    // checked the logged status of the user
    status = this.loggedStatus.getSessionStorageItem();
    console.log(status);
    if (status === 'false' || status === null) {
      this._router.navigateByUrl('/signin');
      alert('please login again')
    }
  }
// function to  load the book  after mathcing woth what user select
  getlibraryOption() {
    this.visibleBookList = [];
    console.log(this.libraryType);
    for (let key in this.bookList) {
      if (this.libraryType === key) {
        this.bookList[`${key}`].map((item) => {
          this.visibleBookList.push(item);
        });
      }
    };
  };
  //load the books 
  getBook() {
    for (let key in this.bookList) {
      this.bookList[`${key}`].map((item) => {
        this.visibleBookList.push(item);
      });
    };
  }
  //route to the particular books
  routeToBook(id) {
    this._router.navigate(['/activity1/book', { id: id }]);

  }
  // for logout button
  logOutButton() {
    // status =  JSON.parse(sessionStorage.getItem('status'));
    status = this.loggedStatus.getSessionStorageItem();
    if (status) {
      sessionStorage.setItem('status', 'false');
      this._router.navigateByUrl('/signin');
      console.log('please login again to continue');
    } 
  }
}
