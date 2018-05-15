import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-act3',
  templateUrl: './act3.component.html',
  styleUrls: ['./act3.component.css']
})
export class Act3Component implements OnInit {
  bugName: any = '';
  bugList: any = [];
  newBug: any;
  existingBugs = [];
  closedBug = 0;
  closed = 0;
  storedBugs;
  bugSortBy = 'name';
  bugSortDescendingOrder = false;
  hoveredBug;
  userName;
  constructor(private router: Router) {}

  ngOnInit() {
    this.storedBugs = JSON.parse(localStorage.getItem('bugList'));
    if (this.storedBugs) {
      this.bugList = this.storedBugs;
    }
    this.userName = JSON.parse(localStorage.getItem('userInfoStorage'));
    console.log(this.userName[0].username);
  }

  onNewBugCreated(value) {
    if (value.name) {
      this.bugList.push(value);
      localStorage.setItem('bugList', JSON.stringify(this.bugList));
    }
  }

  toggleBug(value) {
    // event.stopPropagation();
    // e.preventDefault();
    value.isClosed = !value.isClosed;
    this.closedBug = (value.isClosed ? this.closedBug += 1 : this.closedBug -= 1);
  }

  removeClosedBugs() {
    this.bugList = this.bugList.filter(bug => !bug.isClosed);
    this.closedBug = 0;
    localStorage.setItem('bugList', JSON.stringify(this.bugList));
  }
  showBugDetails(event, bug) {
    //  event.stopPropagation();
    //  event.preventDefault();
    console.log('clicking on  li', bug, event.target);
    this.router.navigate(['/details/', {
      id: bug.id
    }]);
  }
  showButton(bug) {
    this.hoveredBug = bug;
    this.hoveredBug.showBtn = true;
  }

  hideButton() {
    // this.hoveredBug = bug;
    this.hoveredBug.showBtn = false;
  }

  removeBug(bug) {
    const index = this.bugList.indexOf(bug);
    this.bugList.splice(index, 1);
    localStorage.setItem('bugList', JSON.stringify(this.bugList));
  }
}

