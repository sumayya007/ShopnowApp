import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-admin-manage-categories',
  templateUrl: './edit-admin-manage-categories.component.html',
  styleUrls: ['./edit-admin-manage-categories.component.css']
})
export class EditAdminManageCategoriesComponent {
 
  category: any;
  constructor(private adminService:AdminServiceService,private router:Router,private userService:UserServiceService){}
  ngOnInit(): void {
    const cid=localStorage.getItem("editAdminManageCategoryId");
    console.log("_id of job is",cid);
    this.adminService.getCategoryById(cid).subscribe((data: any)=>{
    this.category=JSON.parse(JSON.stringify(data));
    console.log(this.category);
  });
  
}
adminEditCategory(category:any){
  const cid=localStorage.getItem("editAdminManageCategoryId");
  console.log(cid);
  console.log(this.category);
  this.adminService.adminEditCategory(cid,this.category);  
     
  alert("Success");
  this.router.navigate(['admin-manage-categories']);
}
}
