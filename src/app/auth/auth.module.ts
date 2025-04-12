import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Mail,
  Lock,
  Loader,
  User,
  CheckCircle,
  XCircle,
} from 'lucide-angular';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmationComponent,
    ForgotPasswordComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    LucideAngularModule.pick({
      Mail,
      Lock,
      Loader,
      User,
      XCircle,
      CheckCircle,
    }),
  ],
})
export class AuthModule {}
