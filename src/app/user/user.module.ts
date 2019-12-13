import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthorizationService } from './../authorization.service';

@NgModule({
  declarations: [LoginComponent, SingupComponent, ProfileComponent],
  imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule],
  exports: [LoginComponent, SingupComponent, ProfileComponent],
  providers: [AuthorizationService]
})
export class UserModule {}
