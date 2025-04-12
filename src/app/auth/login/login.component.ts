import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  loading = false;
  errorMessage = '';
  success = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(form: NgForm) {
    if (form.invalid) return;

    this.loading = true;

    this.authService.login(this.user).subscribe({
      next: (res) => {
        this.success = true;
        this.loading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = err.error || 'Incorrect password or email';
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
        this.loading = false;
        this.success = false;
      },
    });
  }
}
