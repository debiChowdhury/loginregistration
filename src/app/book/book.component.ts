import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookContentService } from './book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private _bookContent: BookContentService) { }

  ngOnInit() {
    this._bookContent.getBookContent().subscribe(data => {
      console.log(data);
    })
  }
}
