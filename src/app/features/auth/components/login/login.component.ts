import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DisplayService } from 'assaf-prime-lib/services';

@Component({
  selector: 'assaf-documentation-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  validLogin: Login = {
    username: 'Assaf',
    password: 'Assaf123',
  };
  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _display: DisplayService
  ) {
    this.form = _fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    const formValue = this.form.value as Login;
    if (
      formValue.password === this.validLogin.password &&
      formValue.username === this.validLogin.username
    ) {
      localStorage.setItem('auth_data', formValue.username);
      this._router.navigate(['']);
    } else {
      this._display.displayToast(
        'error',
        'Please enter a valid username or password'
      );
    }
  }
}
interface Login {
  username: string;
  password: string;
}
