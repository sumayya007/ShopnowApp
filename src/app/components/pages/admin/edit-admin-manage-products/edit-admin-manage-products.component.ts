import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-admin-manage-products',
  templateUrl: './edit-admin-manage-products.component.html',
  styleUrls: ['./edit-admin-manage-products.component.css']
})
export class EditAdminManageProductsComponent {
  product: any;
  constructor(private adminService:AdminServiceService,private router:Router,private userService:UserServiceService){}
  ngOnInit(): void {
    const pid=localStorage.getItem("editAdminManageProductId");
    console.log("_id of job is",pid);
    this.adminService.getProductById(pid).subscribe((data: any)=>{
    this.product=JSON.parse(JSON.stringify(data));
    console.log(this.product);
  });
}
adminEditProduct(product:any){
  const pid=localStorage.getItem("editAdminManageProductId");
  console.log(pid);
  console.log(this.product);
  this.adminService.adminEditProduct(pid,this.product);  
     
  alert("Success");
  this.router.navigate(['admin-manage-products']);
}
}
