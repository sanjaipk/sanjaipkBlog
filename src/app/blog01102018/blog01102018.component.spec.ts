import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01102018Component } from './blog01102018.component';

describe('Blog01102018Component', () => {
  let component: Blog01102018Component;
  let fixture: ComponentFixture<Blog01102018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01102018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01102018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
