import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoggedStatusService } from './logged-status.service';

describe('AppComponent', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [LoggedStatusService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should test the onSubmit method', () => {

  });
});
