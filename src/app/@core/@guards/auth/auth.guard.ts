import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DisplayService } from 'assaf-prime-lib/services';

// AuthGuard : used to enforce to tmg.com/home route
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private __router: Router, private _display: DisplayService) {}

  canActivate(): boolean {
    const result = localStorage.getItem('auth_data');
    if (result == 'Assaf') {
      return true;
    } else {
      this._display.displayToast('error', 'Please Login First !');
      this.__router.navigate(['/login']);
      return false;
    }
  }
}
