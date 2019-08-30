import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscategoriePage } from './detailscategorie.page';

describe('DetailscategoriePage', () => {
  let component: DetailscategoriePage;
  let fixture: ComponentFixture<DetailscategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailscategoriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
