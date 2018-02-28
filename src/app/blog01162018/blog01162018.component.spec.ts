import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01162018Component } from './blog01162018.component';

describe('Blog01162018Component', () => {
  let component: Blog01162018Component;
  let fixture: ComponentFixture<Blog01162018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01162018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01162018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
