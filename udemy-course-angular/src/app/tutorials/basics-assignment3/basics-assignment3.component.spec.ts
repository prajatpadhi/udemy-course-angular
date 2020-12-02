import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsAssignment3Component } from './basics-assignment3.component';

describe('BasicsAssignment3Component', () => {
  let component: BasicsAssignment3Component;
  let fixture: ComponentFixture<BasicsAssignment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsAssignment3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsAssignment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
