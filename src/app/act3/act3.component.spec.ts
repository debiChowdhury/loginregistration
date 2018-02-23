import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act3Component } from './act3.component';

describe('Act3Component', () => {
  let component: Act3Component;
  let fixture: ComponentFixture<Act3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
