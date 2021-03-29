import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../../service/validation.service';

@Component({
  selector: 'control-messages',
  template: `
    <div *ngIf="errormessage !== null"></div>
  `
})
export class ControlMessageComponent {
errormessage: string;
@Input() control: FormControl;
constructor() {}

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return ValidationService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }

    return null;
  }
}
  


