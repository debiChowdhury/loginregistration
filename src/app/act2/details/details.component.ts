import { Component, OnInit, Input,Output,OnChanges, SimpleChanges,EventEmitter } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../act2.data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnChanges {
  @Input() currentBook: Object;// to get object from parent component i.e; from act2 component
  @Output() addedBookCount: EventEmitter<any> = new EventEmitter<any>();
  // @Output() checkOutBooks: EventEmitter<any> = new EventEmitter<any>();

  bookAddedCount: number = 0;

  //currentBook;// for view-child variable
  
  
  constructor(private route: ActivatedRoute, private data: DataService) {}
  
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentBook = changes.currentBook.currentValue;
    console.log(this.currentBook)
  }
 // for view-child funtion
  // showData() {
  //   console.log(this.currentBook);
  // }
  addingToCart() {
    this.bookAddedCount++;
    // console.log(this.bookAddedCount);
    this.addedBookCount.emit(this.bookAddedCount);
    this.data.changeMsg(this.currentBook);
    
  }
  removeFromCart() {
    this.bookAddedCount--;
    if (this.bookAddedCount < 0) {
      alert("Your cart is already empty");
      this.bookAddedCount = 0;
    }
    this.addedBookCount.emit(this.bookAddedCount);
  }
}

