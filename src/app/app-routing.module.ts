import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SingupComponent } from './user/singup/singup.component';
import { ProfileComponent } from './user/profile/profile.component';

import { AuthGuardService as AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
