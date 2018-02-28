import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01052018Component } from './blog01052018.component';

describe('Blog01052018Component', () => {
  let component: Blog01052018Component;
  let fixture: ComponentFixture<Blog01052018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01052018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01052018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
