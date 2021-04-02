import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountAdComponent } from './create-account-ad.component';

describe('CreateAccountAdComponent', () => {
  let component: CreateAccountAdComponent;
  let fixture: ComponentFixture<CreateAccountAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
