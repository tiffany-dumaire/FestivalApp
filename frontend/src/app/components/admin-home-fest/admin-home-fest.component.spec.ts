import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeFestComponent } from './admin-home-fest.component';

describe('AdminHomeFestComponent', () => {
  let component: AdminHomeFestComponent;
  let fixture: ComponentFixture<AdminHomeFestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHomeFestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
