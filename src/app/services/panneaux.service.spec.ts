import { TestBed } from '@angular/core/testing';

import { PanneauxService } from './panneaux.service';

describe('PanneauxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanneauxService = TestBed.get(PanneauxService);
    expect(service).toBeTruthy();
  });
});
