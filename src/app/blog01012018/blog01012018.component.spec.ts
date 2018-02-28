import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01012018Component } from './blog01012018.component';

describe('Blog01012018Component', () => {
  let component: Blog01012018Component;
  let fixture: ComponentFixture<Blog01012018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01012018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01012018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
