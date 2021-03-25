import { TestBed } from '@angular/core/testing';

import { GameListFService } from './game-list-f.service';

describe('GameListFService', () => {
  let service: GameListFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameListFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
