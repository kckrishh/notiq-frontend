import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private baseUrl = 'http://localhost:8080/auth';
  private baseUrl = 'https://notiq-backend.onrender.com/auth';

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData, {
      responseType: 'text',
      withCredentials: true, // ✅ recommended even if not needed now
    });
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userData, {
      responseType: 'text',
      withCredentials: true,
    });
  }

  sendResetEmail(userData: any): Observable<any> {
    const params = new HttpParams().set('email', userData);
    return this.http.post(`${this.baseUrl}/forgot-password`, null, {
      params,
      responseType: 'text',
      withCredentials: true, // ✅ good to include just in case
    });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    const params = new HttpParams()
      .set('token', token)
      .set('newPassword', newPassword);
    return this.http.post(`${this.baseUrl}/reset-password`, null, {
      params,
      responseType: 'text',
      withCredentials: true, // ✅ include this for safety
    });
  }

  logout(): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/logout`,
      {},
      {
        withCredentials: true,
        responseType: 'text',
      }
    );
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/me`, {
      withCredentials: true,
      responseType: 'text',
    });
  }
}
