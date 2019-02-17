import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailPage } from './fail.page';

describe('FailPage', () => {
  let component: FailPage;
  let fixture: ComponentFixture<FailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
