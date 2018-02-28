import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01132018Component } from './blog01132018.component';

describe('Blog01132018Component', () => {
  let component: Blog01132018Component;
  let fixture: ComponentFixture<Blog01132018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog01132018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog01132018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
