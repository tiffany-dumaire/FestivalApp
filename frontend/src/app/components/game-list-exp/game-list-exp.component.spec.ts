import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListExpComponent } from './game-list-exp.component';

describe('GameListExpComponent', () => {
  let component: GameListExpComponent;
  let fixture: ComponentFixture<GameListExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
