import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
    <div class="logout-container">
      <h2>Logging out...</h2>
      <div *ngIf="error" class="error-message">
        {{ error }}
      </div>
    </div>
  `,
  styles: [
    `
      .logout-container {
        text-align: center;
        margin-top: 100px;
      }
      .error-message {
        color: red;
        margin-top: 20px;
      }
    `,
  ],
})
export class LogoutComponent implements OnInit {
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.logout();
  }

  clearCookies(): void {
    document.cookie.split(';').forEach((cookie) => {
      const eqPos = cookie.indexOf('=');
      const name =
        eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        console.log('Logout successful');
        this.clearCookies();
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.error('Logout failed', err);
        this.error = 'Logout failed. Please try again.';
        // Navigate to login after a delay even if logout fails
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 2000);
      },
    });
  }
}
