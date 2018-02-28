import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01112018Component } from './blog01112018.component';

describe('Blog01112018Component', () => {
  let component: Blog01112018Component;
  let fixture: ComponentFixture<Blog01112018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01112018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01112018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
