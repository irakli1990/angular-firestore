import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './layout/auth-login/auth-login.component';

const routes: Routes = [
  {
    path: 'auth-login',
    component: AuthLoginComponent,
  },
  {
    path: 'auth-register',
    component: AuthLoginComponent,
  },
  {
    path: 'auth-verify',
    component: AuthLoginComponent,
  },
  {
    path: 'auth-forgot-password',
    component: AuthLoginComponent,
  },
  {
    path: '',
    redirectTo: 'auth-login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
