import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountHComponent } from './create-account-h.component';

describe('CreateAccountHComponent', () => {
  let component: CreateAccountHComponent;
  let fixture: ComponentFixture<CreateAccountHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
