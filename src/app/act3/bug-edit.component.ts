import { Component, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';


@Component({
    selector: 'app-bug-edit',
    template: ` <section class="edit" style="position:relative;">
	<label for="" style="font-size: 18px;vertical-align: middle;">Bug Name :</label>
	<input class ="bug-name-input"type="text" name="bugName" id="bugName" [(ngModel)]="bugName"  (keydown)="onKeydown($event)">
	<input class='add-new-btn' type="button" value="Create New" (click)="addNewBugs()">
</section>`
})
export class BugEditComponent {
    @Output()
    bugCreated: EventEmitter<any> = new EventEmitter();
    bugName: string;
    bugId = 0;
    showRemoveBtn = false;

    onKeydown(val) {
        if (val.keyCode === 13) {
            console.log(val);
            this.addNewBugs();
        }
    }

    addNewBugs() {
        this.bugId += 1;
        const newBug = {
            name: this.bugName,
            createdTime: moment().format('LLLL'),
            isClosed: false,
            id: 'bug' + this.bugId
        };
        this.bugCreated.emit(newBug);
        this.bugName = '';
    }
}
