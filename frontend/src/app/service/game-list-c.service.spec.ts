import { TestBed } from '@angular/core/testing';

import { GameListCService } from './game-list-c.service';

describe('GameListCService', () => {
  let service: GameListCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameListCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
