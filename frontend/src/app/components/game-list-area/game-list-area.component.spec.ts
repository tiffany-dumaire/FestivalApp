import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListAreaComponent } from './game-list-area.component';

describe('GameListAreaComponent', () => {
  let component: GameListAreaComponent;
  let fixture: ComponentFixture<GameListAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
