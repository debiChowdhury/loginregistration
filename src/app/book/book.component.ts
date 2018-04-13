import { Component, OnInit } from '@angular/core';
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

  constructor(private _bookContent: BookContentService, private route: ActivatedRoute, private _router: Router, private loggedStatus: LoggedStatusService) { }

  ngOnInit() {
    this._bookContent.getBookContent().subscribe(content => {
      this.allBookContent = content;
      let id = this.route.snapshot.params['id'];
      this.bookId = id;
      for (let k = 0; k < this.allBookContent.length; k++) {
        if (this.allBookContent[k].bookId === this.bookId) {
          this.bookContent = this.allBookContent[k].content;
          console.log(this.bookContent)
        }
      }
    });

    //status = JSON.parse(sessionStorage.getItem('status'));
    status = this.loggedStatus.getSessionStorageItem();
    console.log(status);
    if (status == 'false' || status == 'null') {
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
    for (let j = 0; j < this.bookMarkArray.length; j++) {
      if (this.bookMarkArray[j].index === index) {
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
    this.bookMarkArray.push({ index: this.currentIndex, bookMarked: this.isBookMarked });
    console.log(this.bookMarkArray);
  }

  removeBookMark() {
    this.isBookMarked = !this.isBookMarked;
    this.bookMarkArray.splice(this.currentIndex, 1);
  }

  goToMarkedPage(index) {
    this.currentIndex = index;
    this.updateBookmarkStatus(this.currentIndex);
  }
}
