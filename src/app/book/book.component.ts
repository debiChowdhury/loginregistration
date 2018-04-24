import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookContentService } from './book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggedStatusService } from '../logged-status.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']

})
export class BookComponent implements OnInit {
  allBookContent: Array<any> = [];
  bookContent: Array<any> = [];
  bookId: string;
  divideContent: Array<any> = [];
  currentIndex = 0;
  status: boolean;
  isBookMarked;
  bookMarkArray = [];
  getMarkedBook;
  currentBook = <any>[];
  

  constructor(private _bookContent: BookContentService, private route: ActivatedRoute, private _router: Router, private loggedStatus: LoggedStatusService) { }

  ngOnInit() {
    this._bookContent.getBookContent().subscribe(content => {
      this.allBookContent = content;
      let id = this.route.snapshot.params['id'];
      this.bookId = id;
      for (let k = 0; k < this.allBookContent.length; k++) {
        if (this.allBookContent[k].bookId === this.bookId) {
          this.bookContent = this.allBookContent[k].content;
          console.log(this.bookContent);
          this.currentBook = this.allBookContent[k];
          console.log(this.currentBook);
          this.currentBook.bookMark = [];
         
        }
      }
          // for fethcing the book amrked elmenets from localstorage on load if any
      console.log(JSON.parse(localStorage.getItem('bookMarkedStat' + this.bookId)));
      this.updateBookmarkStatus(this.currentIndex);
    });

    //status = JSON.parse(sessionStorage.getItem('status'));
    // for logged  in status
    status = this.loggedStatus.getSessionStorageItem();
    console.log(status);
    if (status === "false" || status === null) {
      this._router.navigateByUrl('/signin');
      alert('please login again')
    }
  
  }

  goPrevPage() {
    this.currentIndex--;
    console.log(this.bookMarkArray);
    this.updateBookmarkStatus(this.currentIndex);
  }

  updateBookmarkStatus(index) {
    this.isBookMarked = false;
    this.getMarkedBook = JSON.parse(localStorage.getItem('bookMarkedStat'+this.bookId));
    console.log(this.getMarkedBook);
    for (let j = 0; j < this.getMarkedBook.length; j++) {
      if (this.getMarkedBook[j].index === index) {
        this.isBookMarked = true;
        break;
      }
    }
  }

  goNextPage() {
    this.currentIndex++;
    console.log(this.bookMarkArray);
    this.updateBookmarkStatus(this.currentIndex);
  }

  addBookMark() {
    
    this.isBookMarked = !this.isBookMarked
    console.log(this.currentIndex);
    let localStgData;
    this.bookMarkArray = JSON.parse(localStorage.getItem('bookMarkedStat'+this.bookId));
    if (this.bookMarkArray == null) {
      this.bookMarkArray = [];
    }
    this.currentBook.bookMark.push({ index: this.currentIndex, bookMarked: this.isBookMarked });
    localStorage.setItem('bookMarkedStat' + this.bookId, JSON.stringify(this.currentBook.bookMark));
    console.log(this.currentBook);
   // console.log(this.bookMarkArray);
  }

  removeBookMark() {
    this.isBookMarked = !this.isBookMarked;
    this.getMarkedBook.splice(this.currentIndex, 1);
    localStorage.setItem('bookMarkedStat'+this.bookId, JSON.stringify(this.getMarkedBook));

  }

  goToMarkedPage(index) {
    this.currentIndex = index;
    this.updateBookmarkStatus(this.currentIndex);
  }
}
