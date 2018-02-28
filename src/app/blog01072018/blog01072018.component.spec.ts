import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01072018Component } from './blog01072018.component';

describe('Blog01072018Component', () => {
  let component: Blog01072018Component;
  let fixture: ComponentFixture<Blog01072018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01072018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01072018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
