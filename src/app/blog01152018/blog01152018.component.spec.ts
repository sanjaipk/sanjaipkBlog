import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01152018Component } from './blog01152018.component';

describe('Blog01152018Component', () => {
  let component: Blog01152018Component;
  let fixture: ComponentFixture<Blog01152018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01152018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01152018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
