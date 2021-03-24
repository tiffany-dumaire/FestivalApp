import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFestComponent } from './create-fest.component';

describe('CreateFestComponent', () => {
  let component: CreateFestComponent;
  let fixture: ComponentFixture<CreateFestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
