import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['Test', [ Validators.required ]],
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.minLength(6), Validators.required  ]],
  })

  constructor( private fb: FormBuilder ) { }

  registro(): void {
    console.log( this.myForm.value );
    console.log( this.myForm.valid );
  }
}
