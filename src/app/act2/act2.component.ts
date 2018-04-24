import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { BookDetailsService } from './act2.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoggedStatusService } from '../logged-status.service';




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
  books = [];
  bookAddedCount: number = 0;
  isCheckOutLoaded = false;
  status;
  state;
  //@ViewChild('details') DetailsComponent: DetailsComponent;
  

  constructor(private bookDetails: BookDetailsService, private route: Router, private routeParam: ActivatedRoute, private loggedStatus: LoggedStatusService) {
  }

  ngOnInit() {
    this.getData();
    status = this.loggedStatus.getSessionStorageItem();
    console.log(status);
    if (status === 'false' || status === null) {
      this.route.navigateByUrl('/signin');
      alert('please login again')
    }
    
  }
  //function for checkout button
  checkOutBtn() {
    //this.route.navigateByUrl('/activity2/checkout');
    this.isCheckOutLoaded = true;
    
  }

  //function to get the individual  details of books 
  goToBookDetails(id) {
    this.isCheckOutLoaded = false;
    this.bookId = id;
    this.parentBook = this.bookDetail;
    for (let i = 0; i < this.parentBook.length; i++) {
      if (this.bookId === this.parentBook[i].bookId) {
        this.book = this.parentBook[i];
        // for vew-child
        // this.DetailsComponent.currentBook = this.book;
        // this.DetailsComponent.showData();
        break;
      }
    }


  }

  getData() {
    this.bookDetails.getBookDetails().subscribe((data) => {
      this.bookDetail = data;
    });
  }

  addedBookToCart(addCount) {
    this.bookAddedCount = addCount;
    
  }
  logOutButton() {
    this.status = this.loggedStatus.getSessionStorageItem();
    if (this.status) {
      this.state = false;
      sessionStorage.setItem('status', this.state);
      this.route.navigateByUrl('/signin');
      console.log('please login again to continue');
    } 

  }

}
