import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorEmail: boolean = false;
  errorPassword: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit(): void {
    this.loginForm.get('email')?.valueChanges.subscribe((data) => {
      if (
        data != null &&
        data !== undefined &&
        this.loginForm.controls['email'].invalid
      ) {
        this.errorEmail = true;
      } else {
        this.errorEmail = false;
      }
    });
    this.loginForm.get('password')?.valueChanges.subscribe((data) => {
      if (
        data != null &&
        data !== undefined &&
        this.loginForm.controls['password'].invalid
      ) {
        this.errorPassword = true;
      } else {
        this.errorPassword = false;
      }
    });
  }

  onSubmit() {
    this.router.navigate(['/success']);
  }
}
