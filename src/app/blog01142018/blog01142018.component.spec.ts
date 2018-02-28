import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01142018Component } from './blog01142018.component';

describe('Blog01142018Component', () => {
  let component: Blog01142018Component;
  let fixture: ComponentFixture<Blog01142018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01142018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01142018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
