import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// import { Router } from 'lucide-angular';
import { catchError, map, of } from 'rxjs';

export const mainGuard: CanActivateFn = () => {
  const http = inject(HttpClient);
  const router = inject(Router);

  return (
    http
      // .get('http://localhost:8080/auth/me', {
      .get('https://notiq-backend.onrender.com/auth/me', {
        responseType: 'text',
        withCredentials: true,
      })
      .pipe(
        map((user: any) => {
          console.log('Guard success: user is: ', user);
          if (!user) {
            router.navigate(['/auth/login']);
            return false;
          }
          return true;
        }),
        catchError(() => {
          router.navigate(['/auth/login']);
          return of(false);
        })
      )
  );
};
