import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { BookDetailsService } from './act2.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-act2',
  templateUrl: './act2.component.html',
  styleUrls: ['./act2.component.css'],

})
export class Act2Component implements OnInit {
  bookDetail: any[] = [];
  bookId;
  parentBook;
  book = [];
  // @ViewChild('details') DetailsComponent: DetailsComponent;

  constructor(private bookDetails: BookDetailsService, private route: Router, private routeParam: ActivatedRoute) {
  }

  ngOnInit() {
    this.getData();
  }
  //function for checkout button
  checkOutBtn() {
    this.route.navigateByUrl('/activity2/checkout');
  }

  //function to route the individual books with route params
  goToBookDetails(id) {
    this.bookId = id;
    this.parentBook = this.bookDetail;
    for (let i = 0; i < this.parentBook.length; i++) {
      if (this.bookId === this.parentBook[i].bookId) {
        this.book = this.parentBook[i];
        // this.DetailsComponent.currentBook = this.book;
        // this.DetailsComponent.showData();
        console.log(this.book);
        break;
      }
    }


  }

  getData() {
    this.bookDetails.getBookDetails().subscribe((data) => {
      this.bookDetail = data;
      console.log(this.bookDetail);
    });
  }

}
