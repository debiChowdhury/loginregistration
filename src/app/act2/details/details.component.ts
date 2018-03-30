import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnChanges {
  @Input() currentBook: Object;
  
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentBook = changes.currentBook.currentValue;
    console.log(this.currentBook)
  }

  // showData() {
  //   console.log(this.currentBook);
  // }

}

