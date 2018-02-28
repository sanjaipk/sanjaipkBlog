import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01042018Component } from './blog01042018.component';

describe('Blog01042018Component', () => {
  let component: Blog01042018Component;
  let fixture: ComponentFixture<Blog01042018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01042018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01042018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
