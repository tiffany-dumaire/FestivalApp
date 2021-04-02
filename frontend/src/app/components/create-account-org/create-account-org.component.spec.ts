import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountOrgComponent } from './create-account-org.component';

describe('CreateAccountOrgComponent', () => {
  let component: CreateAccountOrgComponent;
  let fixture: ComponentFixture<CreateAccountOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
