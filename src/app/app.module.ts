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
import { BookContentService } from './book/book.service';
import { HttpModule } from '@angular/http';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    Act1Component,
    Act2Component,
    Act3Component,
    BookComponent
   
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
        path: 'activity2', component: Act2Component
      },
      {
        path: 'activity3', component: Act3Component
      },
      {
        path: 'activity1/book', component: BookComponent
      }   
    ],)
  ],
  providers: [BookListService, BookContentService],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
