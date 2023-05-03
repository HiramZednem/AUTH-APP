import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['Test 4', [ Validators.required ]],
    email: ['test4@test.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.minLength(6), Validators.required  ]],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  registro(): void {
    console.log( this.myForm.value );

    this.router.navigateByUrl('/auth/login')
  }
}
