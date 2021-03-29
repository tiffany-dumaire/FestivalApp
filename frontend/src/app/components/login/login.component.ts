import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from '../../service/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ValidationService]

})
export class LoginComponent implements OnInit {
  userForm: any;

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      mail: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }


  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(
        `Name: ${this.userForm.value.password} Email: ${this.userForm.value.mail}`
      );
    }
  }
}
