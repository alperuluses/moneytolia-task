import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const loginService = inject(LoginService)

  return  loginService.isLoginnedBefore || loginService.userLoginStatus$.pipe(map(loginStatus =>  {
    if(loginStatus == false){
      router.navigate([''])
      alert("Kullanıcı Adı Ve Şifrenizi Kontrol Ediniz")
      return false
    }else{
      return true
    }
  }))
 
 
};
