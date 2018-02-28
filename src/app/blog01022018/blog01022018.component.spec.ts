import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01022018Component } from './blog01022018.component';

describe('Blog01022018Component', () => {
  let component: Blog01022018Component;
  let fixture: ComponentFixture<Blog01022018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01022018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01022018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
