import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  loading: boolean = false;
  success: boolean = false;

  constructor(private service: AuthService) {}

  passwordTooShort(): boolean {
    return this.user.password.length > 0 && this.user.password.length < 6;
  }

  passwordMismatch(): boolean {
    return (
      this.user.confirmPassword.length > 0 &&
      this.user.password !== this.user.confirmPassword
    );
  }

  onRegister(form: NgForm) {
    this.loading = true;
    if (this.passwordTooShort() || this.passwordMismatch()) {
      this.loading = false;
      return;
    }

    console.log('Registering user:', this.user);

    const payLoad = {
      email: this.user.email,
      username: this.user.username,
      password: this.user.confirmPassword,
    };

    this.service.register(payLoad).subscribe({
      next: (res) => {
        this.success = true;
        console.log(this.success);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }
}
