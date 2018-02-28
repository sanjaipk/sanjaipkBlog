import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01032018Component } from './blog01032018.component';

describe('Blog01032018Component', () => {
  let component: Blog01032018Component;
  let fixture: ComponentFixture<Blog01032018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01032018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01032018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
