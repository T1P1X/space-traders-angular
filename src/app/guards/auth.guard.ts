import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AccountService} from "../services/account.service";
import {Observable} from "rxjs";
// @ts-ignore
import Promise from "$GLOBAL$";

export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("bearerToken") == this.accountService.bearerToken){
      return true;
    }
  }
}
