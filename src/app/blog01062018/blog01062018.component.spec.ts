import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01062018Component } from './blog01062018.component';

describe('Blog01062018Component', () => {
  let component: Blog01062018Component;
  let fixture: ComponentFixture<Blog01062018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01062018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01062018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
