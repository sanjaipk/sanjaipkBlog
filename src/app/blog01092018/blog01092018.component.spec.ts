import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01092018Component } from './blog01092018.component';

describe('Blog01092018Component', () => {
  let component: Blog01092018Component;
  let fixture: ComponentFixture<Blog01092018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01092018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01092018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
