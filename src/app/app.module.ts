import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Act1Component } from './act1/act1.component';
import { Act2Component } from './act2/act2.component';
import { Act3Component } from './act3/act3.component';
import { BookListService } from './act1/act1.service';
import { DataService } from './act2/act2.data.service';
import { BookContentService } from './book/book.service';
import { BookDetailsService } from './act2/act2.service';
import { HttpModule } from '@angular/http';
import { BookComponent } from './book/book.component';
import { LoggedStatusService } from './logged-status.service';
import { DetailsComponent } from './act2/details/details.component';
import { CheckoutComponent } from './act2/checkout/checkout.component';
import { BugEditComponent } from './act3/bug-edit.component';
import { TrimTextPipe } from './pipes/trim-text-pipes';
import { SortPipe } from './pipes/sort-pipes';
import { BugDetailsComponent } from './bug-details/bug-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    Act1Component,
    Act2Component,
    Act3Component,
    BookComponent,
    DetailsComponent,
    CheckoutComponent,
    BugEditComponent,
    TrimTextPipe,
    SortPipe,
    BugDetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'signup', component: SignupComponent
      },
      {
        path: '', component: AppComponent
      }, {
        path: 'signin', component: AppComponent
      },
      {
        path: 'activity1', component: Act1Component
      },
      {
        path: 'activity2', component: Act2Component,
     
      },
      {
        path: 'activity3', component: Act3Component
      },
      {
        path: 'activity1/book', component: BookComponent
      }, {
        'path': ':id', component: BugDetailsComponent
      }
    ], )
  ],
  providers: [BookListService, BookContentService, LoggedStatusService, BookDetailsService, DataService],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
