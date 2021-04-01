import { TestBed } from '@angular/core/testing';

import { SuiviExposantService } from './suivi-exposant.service';

describe('SuiviExposantService', () => {
  let service: SuiviExposantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviExposantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
