import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css']
})
export class AdminAddCategoryComponent implements OnInit{
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
  adminAddCategory(value:any){
   this.adminService.addCategory(this.category);
   alert("Category added successfully!!");
   this.router.navigate(["/admin-dashboard"])
  }
}
