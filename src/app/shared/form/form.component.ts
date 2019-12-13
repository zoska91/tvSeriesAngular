import { Component, OnInit, Input } from '@angular/core';
import { AuthorizationService } from './../../authorization.service';
import { Router } from '@angular/router';

import { User } from '../../models/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formType: string;

  user: User;
  error: string;

  constructor(private auth: AuthorizationService, private router: Router) {}

  ngOnInit() {}

  submit(login: string, password: string) {
    this.user = {
      login,
      password
    };
    if (this.formType === 'login') {
      this.loginFn(login, password);
    } else if (this.formType === 'singup') {
      this.singup(login, password);
    }
  }

  loginFn(login: string, password: string): void {
    this.auth.authorization(this.user).subscribe(resp => {
      if (resp.resp === 'correct') {
        localStorage.setItem('token', resp.userId);
        this.auth.userLogin = true;
        this.router.navigate(['/profile']);
      } else {
        this.error = resp.resp;
        console.log(this.error);
      }
    });
  }

  singup(login: string, password: string): void {
    this.auth.createProfile(this.user).subscribe(resp => {
      if (resp.resp === 'created') {
        this.loginFn(login, password);
      } else {
        this.error = resp.resp;
        console.log(this.error);
      }
    });
  }
}
