import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01172018Component } from './blog01172018.component';

describe('Blog01172018Component', () => {
  let component: Blog01172018Component;
  let fixture: ComponentFixture<Blog01172018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01172018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01172018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
