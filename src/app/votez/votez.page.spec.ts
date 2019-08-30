import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotezPage } from './votez.page';

describe('VotezPage', () => {
  let component: VotezPage;
  let fixture: ComponentFixture<VotezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotezPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
