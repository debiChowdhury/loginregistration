import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../act2.data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  // @Input() loadCheckout: boolean;
  books;
  message = {};
  booksToCheckOut = [];
  totalPrice = 0;
  Price;
  

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMsg.subscribe(message => {
      this.message = message;
      this.booksToCheckOut.push(this.message);
      console.log(this.booksToCheckOut)
      this.totalPrice = 0;
      for (let i = 0; i < this.booksToCheckOut.length; i++) {
        if (this.booksToCheckOut[i].price) {
          this.totalPrice += this.booksToCheckOut[i].price;
        }
      }
        
     
    });
  
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.loadCheckout = changes.loadCheckout.currentValue;
  //   console.log(this.loadCheckout);
  // }

}
