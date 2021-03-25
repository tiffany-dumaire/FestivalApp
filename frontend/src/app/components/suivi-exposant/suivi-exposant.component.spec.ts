import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviExposantComponent } from './suivi-exposant.component';

describe('SuiviExposantComponent', () => {
  let component: SuiviExposantComponent;
  let fixture: ComponentFixture<SuiviExposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviExposantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviExposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
