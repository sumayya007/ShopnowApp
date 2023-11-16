import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserServiceService } from './user-service.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router=inject(Router);
  const userService=inject(UserServiceService);
  let name=localStorage.getItem("userName");
  userService.getUserByName(name).subscribe((data: any)=>{
   
     
    const user=JSON.parse(JSON.stringify(data));
    console.log(user);
    localStorage.setItem("userdb",user);
    console.log("got name as follows",user.role)
    if(user.role=="admin")
    {
      return true;
    }
    else{
      router.navigate(['/login-page']);
      return false;
    }
    });
  
  
  return true;
  
};
