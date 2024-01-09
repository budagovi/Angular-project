import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private notificationService : NotificationService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const role = this.tokenService.getUser().role;
    if (role === '2') {
      return true;
    } else {
      this.router.navigate(['']);
      this.notificationService.showError('You do not have access to this link!');
      return false;
    }
  }

}
