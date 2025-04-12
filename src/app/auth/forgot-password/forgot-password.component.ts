import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  token: string | null = '';
  loading: boolean = false;
  success: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private route: ActivatedRoute) {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  onRequestResetLink() {
    if (!this.email) return;
    this.loading = true;
    this.authService.sendResetEmail(this.email).subscribe({
      next: (res) => {
        this.success = true;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error || 'Something went wrong';
        this.loading = false;
        this.errorMessage = err;
      },
    });
  }

  onResetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = "Passwords don't match";
      return;
    }

    if (!this.token) {
      this.errorMessage = 'Reset token is missing or invalid.';
    }
    this.loading = true;
    this.authService
      .resetPassword(this.token!, this.confirmPassword)
      .subscribe({
        next: (res) => {
          this.success = true;
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err;
        },
      });
  }
}
