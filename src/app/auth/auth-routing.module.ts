import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { animation } from '@angular/animations';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'LoginPage' },
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { animation: 'RegisterPage' },
      },
      {
        path: 'confirmation',
        component: ConfirmationComponent,
        data: { animation: 'ConfirmationPage' },
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: { animation: 'forgotPasswordPage' },
      },
      { path: '**', redirectTo: 'login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
