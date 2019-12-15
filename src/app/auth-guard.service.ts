import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(public auth: AuthorizationService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.userLogin) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
