import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposantListComponent } from './exposant-list.component';

describe('ExposantListComponent', () => {
  let component: ExposantListComponent;
  let fixture: ComponentFixture<ExposantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExposantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
