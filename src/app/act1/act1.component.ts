import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookListService } from './act1.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-act1',
  templateUrl: './act1.component.html',
  styleUrls: ['./act1.component.css']
})
export class Act1Component implements OnInit {
  bookList: any[] = [];
  libraryType: string;
  visibleBookList: any[] = [];
  libraryOption = [];
  constructor(private _booklist: BookListService, private _router: Router) { }
  ngOnInit() {
    this._booklist.getBookList().subscribe((data) => {
      this.bookList = data;
      console.log(this.bookList);
      this.getBook();
      this.libraryOption=Object.keys(this.bookList);
    });
  }
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
}
