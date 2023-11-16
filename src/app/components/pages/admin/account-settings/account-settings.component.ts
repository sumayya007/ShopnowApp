import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit{
  admin={
   
    email:'',
    adminname:'',
    password:''
  }
  admins: any;
  users: any;
  user: any;
  
 
  constructor(private adminService:AdminServiceService,private router:Router){}
  ngOnInit(): void {
    const userId=localStorage.getItem("userId");
    console.log(userId)
    this.adminService.getUserById(userId).subscribe((data:any)=>{
      this.user=JSON.parse(JSON.stringify(data));
      console.log(this.user[0]);
    });
      
  
   }
  
   editAdmin(user:any){
    localStorage.setItem("editAdminId", user[0]._id.toString());
  this.router.navigate(['edit-account-details']);
 
  }
}
