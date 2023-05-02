import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public myForm: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.minLength(6), Validators.required  ]],
  })

  constructor( private fb: FormBuilder ) { }

  login(): void {
    console.log( this.myForm.value );
    console.log( this.myForm.valid );
  }

}
