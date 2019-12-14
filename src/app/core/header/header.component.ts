import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthorizationService } from './../../authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public auth: AuthorizationService,
    private router: Router,
    location: Location
  ) {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    this.auth.userLogin = false;
  }
}
