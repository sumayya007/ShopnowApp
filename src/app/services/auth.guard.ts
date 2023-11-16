import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
 const router=inject(Router);
  const token=localStorage.getItem('token');
  if(token){
    console.log(token)
    return true;
  }
  else{
   alert("Please login to continue");
   router.navigate(['/login-page']);
    return false;
  }
  

};




