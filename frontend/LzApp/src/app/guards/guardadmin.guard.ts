import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';
import { StoreserviceService } from '../services/storeservice.service';

@Injectable({
  providedIn: 'root',
})
export class GuardadminGuard implements CanActivate {
  constructor(private store: StoreserviceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // if (this.store.loggedIn()== true){
    // return true

    //  }
    // else {
    //return false
    // }
    return new Promise((resolve, rejects) => {
      if (this.store.loggedIn() == true) {
        resolve(true);
      } else {
        this.router.navigate(['/authentification/login']);
        resolve(false);
      }
    });
  }
}
