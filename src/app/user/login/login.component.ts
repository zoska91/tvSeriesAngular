import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

import { AuthorizationService } from './../../authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private auth: AuthorizationService) {}

  ngOnInit() {}

  getLogin(login: string, password: string): void {
    this.user = {
      login,
      password
    };
    this.auth.authorization(this.user).subscribe(resp => {
      if (resp.resp === 'correct') {
        localStorage.setItem('token', resp.userId);
        this.auth.userLogin = true;
      }
    });
  }
}
