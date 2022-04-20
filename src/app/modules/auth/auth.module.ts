import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './layout/auth-login/auth-login.component';
import { AuthRegisterComponent } from './layout/auth-register/auth-register.component';
import { AuthForgotPasswordComponent } from './layout/auth-forgot-password/auth-forgot-password.component';
import { AuthVerifyEmailComponent } from './layout/auth-verify-email/auth-verify-email.component';

@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthForgotPasswordComponent,
    AuthVerifyEmailComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
