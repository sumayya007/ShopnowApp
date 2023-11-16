import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{
  
  user={

    email:'',
    name:'',
    address:'',
    password:''
  }
  users: any;
  constructor(private router:Router,private userService:UserServiceService){}
ngOnInit(): void {
   this.userService.getUsersList().subscribe((data)=>{
    return this.users=JSON.parse(JSON.stringify(data));
   })
}
userRegister(value:any){
  console.log(value.email)
 var email=this.user.email;
 console.log(email)
  this.userService.getUserByEmail(email).subscribe((data: any)=>{
   
 
    this.users=JSON.parse(JSON.stringify(data));
    console.log("got name",this.users.length)
    if(this.users.length==0){
      
      this.userService.userSignup(value);
      alert("Registered successfully!!");
       this.router.navigate(["/login-page"])
     
     }
     else{
      alert("This email is already registered with us!!");
      this.router.navigate(["/register-page"]);
     }
    })
 }
 
}
