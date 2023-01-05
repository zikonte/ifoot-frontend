import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.user && this.authService.user.role === 1) {
      return true; // allow access to the route
    } else {
      this.router.navigate(['/']); // redirect to the home route
      return false; // do not allow access to the route
    }
  }
}
