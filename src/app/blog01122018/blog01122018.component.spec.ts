import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01122018Component } from './blog01122018.component';

describe('Blog01122018Component', () => {
  let component: Blog01122018Component;
  let fixture: ComponentFixture<Blog01122018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01122018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01122018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
