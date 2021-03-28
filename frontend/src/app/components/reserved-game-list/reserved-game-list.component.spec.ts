import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedGameListComponent } from './reserved-game-list.component';

describe('ReservedGameListComponent', () => {
  let component: ReservedGameListComponent;
  let fixture: ComponentFixture<ReservedGameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservedGameListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
