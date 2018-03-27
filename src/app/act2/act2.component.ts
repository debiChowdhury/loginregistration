import { Component, OnInit, Input, Output } from '@angular/core';
import { BookDetailsService } from './act2.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-act2',
  templateUrl: './act2.component.html',
  styleUrls: ['./act2.component.css']
})
export class Act2Component implements OnInit {
  bookDetail: any[] = [];

  constructor(private bookDetails: BookDetailsService, private route: Router) { }

  ngOnInit() {
    this.bookDetails.getBookDetails().subscribe((data) => {
      this.bookDetail = data;
      console.log(data);
    });
  }

}
