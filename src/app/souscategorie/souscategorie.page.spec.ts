import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscategoriePage } from './souscategorie.page';

describe('SouscategoriePage', () => {
  let component: SouscategoriePage;
  let fixture: ComponentFixture<SouscategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscategoriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
