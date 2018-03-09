import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookContentService } from './book.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private _bookContent: BookContentService, private route: ActivatedRoute) { }

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
    })
  }
  goPrevPage() {
    this.currentIndex--;

  }
  goNextPage() {
    this.currentIndex++;
  }
}
