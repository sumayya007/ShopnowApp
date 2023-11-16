import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-admin-manage-users',
  templateUrl: './edit-admin-manage-users.component.html',
  styleUrls: ['./edit-admin-manage-users.component.css']
})
export class EditAdminManageUsersComponent {
  user: any;
  // user={
  //   email:'',
  //   name:'',
  //   address:'',
  //   password:''
  // }
  constructor(private adminService:AdminServiceService,private router:Router,private userService:UserServiceService){}
  ngOnInit(): void {
    const auid=localStorage.getItem("editAdminManageUserId");
    console.log("_id of job is",auid);
    this.userService.getUserById(auid).subscribe((data: any)=>{
    this.user=JSON.parse(JSON.stringify(data));
    console.log(this.user);
  });
  }
  adminEditUsers(user:any){
    const auid=localStorage.getItem("editAdminManageUserId");
    console.log(auid);
    console.log(this.user);
    this.adminService.adminEditUser(auid,this.user);  
       
    alert("Success");
    this.router.navigate(['admin-manage-users']);
  }
}
