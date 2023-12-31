import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService)
  const router = inject(Router)

  if(authenticationService.isLoggedIn){
    return true;
  }
  else {
    router.navigate(['/login'])
    return false;
  }
};
