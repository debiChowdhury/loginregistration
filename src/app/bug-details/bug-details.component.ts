import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {
  bugId;
  bugDetails;
  bugName;
  createdTime;
  stat;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.bugId = this.route.snapshot.params['id'];
    this.bugDetails = JSON.parse(localStorage.getItem('bugList'));
    this.bugDetails.forEach(bug => {
      if (bug.id === this.bugId) {
        this.bugName = bug.name;
        this.createdTime = bug.createdTime;
        this.stat = bug.isClosed;
      }
    });
  }

}
