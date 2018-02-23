import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act1Component } from './act1.component';

describe('Act1Component', () => {
  let component: Act1Component;
  let fixture: ComponentFixture<Act1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
