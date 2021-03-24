import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditorComponent } from './create-editor.component';

describe('CreateEditorComponent', () => {
  let component: CreateEditorComponent;
  let fixture: ComponentFixture<CreateEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
