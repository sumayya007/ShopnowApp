import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-admin-manage-users',
  templateUrl: './admin-manage-users.component.html',
  styleUrls: ['./admin-manage-users.component.css']
})
export class AdminManageUsersComponent implements OnInit{
  users: any;
  user={
    email:'',
    name:'',
    address:'',
    password:''
  }
  constructor(private adminService:AdminServiceService,private router:Router){}
  ngOnInit(): void {
    this.adminService.getUsersList().subscribe((data: any)=>{
      console.log(data);
      this.users=JSON.parse(JSON.stringify(data));
            
    })
  }
  editUsers(user:any){
   
      localStorage.setItem("editAdminManageUserId", user._id.toString());
      
      this.router.navigate(['edit-admin-manage-users']);
    
  }
  removeUser(user:any){
    
      this.adminService.removeUser(user._id).subscribe((data: any)=>{
        this.users=this.users.filter((p: any)=>p!==this.user);
        //  this.refreshData$.next(true);
      });
      // this.cartSubject.next(this.cartItem);
    }
  
}
