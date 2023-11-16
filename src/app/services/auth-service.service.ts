import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user={
   
    email:'',
    name:'',
    address:'',
    password:''
  }
  constructor(private http:HttpClient,private router:Router) { }
  loginUser(user:any){
    alert("inside auth service");
    const dbpass=localStorage.getItem("dbpass")?.toString();
    console.log(dbpass);
     return this.http.post<any>("https://shopnow-t9zl.onrender.com/user/userlogin/"+dbpass,{"user":user}).subscribe(data=>{console.log(data)});;
  }


  loggedIn(){
    return !!localStorage.getItem('token');
  }
  role(){
    return !!localStorage.getItem('adminrole');
     
  }


  getToken(){
    return localStorage.getItem('token');
  }
}



