import { Component, OnInit, Input } from '@angular/core';
import { AuthorizationService } from './../../authorization.service';
import { Location } from '@angular/common';
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

  constructor(private auth: AuthorizationService, private router: Router) {}

  ngOnInit() {}

  submit(login: string, password: string) {
    if (this.formType === 'login') {
      this.getLogin(login, password);
    } else if (this.formType === 'singup') {
      console.log('singup');
    }
  }

  getLogin(login: string, password: string): void {
    this.user = {
      login,
      password
    };
    this.auth.authorization(this.user).subscribe(resp => {
      if (resp.resp === 'correct') {
        localStorage.setItem('token', resp.userId);
        this.auth.userLogin = true;
        this.router.navigate(['/profile']);
      }
    });
  }
}
