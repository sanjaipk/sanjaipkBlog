import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog1118Component } from './blog1118.component';

describe('Blog1118Component', () => {
  let component: Blog1118Component;
  let fixture: ComponentFixture<Blog1118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog1118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog1118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
