import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public myForm: FormGroup = this.fb.group({
    email: ['test2@test.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.minLength(6), Validators.required  ]],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  login(): void {

    const { email, password } = this.myForm.value

    // this.router.navigateByUrl('/dashboard')
    this.authService.login( email, password )
      .subscribe( console.log )
  }

}
