import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01082018Component } from './blog01082018.component';

describe('Blog01082018Component', () => {
  let component: Blog01082018Component;
  let fixture: ComponentFixture<Blog01082018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01082018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01082018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
