import { Component,OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  implements OnInit{

  user={
   
    email:'',
    name:'',
    address:'',
    password:''
  }
  users: any;
  dbuser: any;
  dbusers: any;
 
 
  constructor(private router:Router,private userService:UserServiceService,private _auth:AuthServiceService){}
  ngOnInit(): void {
    this.userService.getUsersList().subscribe((data: any)=>{
      console.log(data);
      this.users=JSON.parse(JSON.stringify(data));
            
    })
  }
  userLogin(user:any)
  {
    alert("welcome");
    const arr=this.users;
    console.log(arr);
 
      this.userService.loginUser(this.user).subscribe(
               (        res: any)=>{
                  
             
                if(res.token){
                  console.log(this.user.name);
                  localStorage.setItem("userId",res.dbid);
                  localStorage.setItem("userName",this.user.name);
                  localStorage.setItem("token",res.token);
                  alert("login successfull!!");
                 
                  if(res.dbrole=="admin"){
                    console.log(res.dbrole)
                    localStorage.setItem("adminrole",res.dbrole)
                    this.router.navigate(['/admin-dashboard']);
                  }
                  else if(res.dbrole=="basic"){
                    this.router.navigate(["/home-page"]);
                  }
                   else{
                    alert("user role does not match")
                    this.router.navigate(["/login-page"]);
                   }
                  
                 
                 
                }
                else if(res.json){
                    console.log(res.json);
                }
                
                else{
                  alert("Invalid credentials entered");
                  // this.clearform();
                  this.router.navigate(["/login-page"]);
                } 
               
                
                  }
                 
                  );
  

                       
  }
  // clearform(){
  //   var form=document.getElementById("loginForm");
  //   form.value()=="";
    
  // }
  // async userLogin(user:any){

  //   const arr=this.users;
  //   console.log("list of users"+arr);
  //   console.log(user);
  //   console.log("List of employers",this.users)
  //     for(let i=0;i<arr.length;i++){
       
  //       if(arr[i].email==this.user.email){
  //         // const valid=await bcrypt.compare(this.user.password,arr[i].password);
  //         // if(this.users[i].password==this.user.password){
          
  //         this.userService.getUserByEmail(this.user.email).subscribe((data:any)=>{
  //           this.dbusers=JSON.parse(JSON.stringify(data));
  //           console.log(this.dbusers[0].password);
  //           localStorage.setItem("dbpass",this.dbusers[0].password)
  //         });
         
  //         this.userService.loginUser(this.user);
          
         
  //         // .subscribe(
  //         //   (        res: { token: string; })=>{
            
  //         //     localStorage.setItem('token',res.token);
         
            
  //         //     console.log("response token is",res.token);
           
  //         //        });
  //                alert("login successfull!!");
  //                this.router.navigate(["/home-page"]);
  //         const email=this.user.email;
  //         localStorage.setItem("userName",this.user.name);
        
  //         this.userService.getUserByEmail(email).subscribe((data: any)=>{
     
   
  //           this.users=JSON.parse(JSON.stringify(data));
          
  //           localStorage.setItem("userId",this.users[0]._id);
            
            
  //           })
           
  //           // }       
                
  //         }
       
  //      } 
      
      
    
      // }
}

