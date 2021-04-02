import { TestBed } from '@angular/core/testing';

import { ExposantListService } from './exposant-list.service';

describe('ExposantListService', () => {
  let service: ExposantListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExposantListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
