import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-manage-categories',
  templateUrl: './admin-manage-categories.component.html',
  styleUrls: ['./admin-manage-categories.component.css']
})
export class AdminManageCategoriesComponent implements OnInit{
  category={
    name:''
  }
  categories: any;
  constructor(private adminService:AdminServiceService,private router:Router){}
  ngOnInit(): void {
    this.adminService.getCategoryList().subscribe((data:any)=>{
      this.categories=JSON.parse(JSON.stringify(data));
    })
  }
  editCategory(category:any){
    console.log(category);
    localStorage.setItem("editAdminManageCategoryId", category._id.toString());
      
    this.router.navigate(['edit-admin-manage-categories']);
  }
  removeCategory(category:any){
    this.adminService.removeCategory(category._id).subscribe((data: any)=>{
      this.categories=this.categories.filter((p: any)=>p!==this.category);
      //  this.refreshData$.next(true);
    });
  }

}
