import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListFestivalComponent } from './game-list-festival.component';

describe('GameListFestivalComponent', () => {
  let component: GameListFestivalComponent;
  let fixture: ComponentFixture<GameListFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
