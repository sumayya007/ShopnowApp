import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-manage-products',
  templateUrl: './admin-manage-products.component.html',
  styleUrls: ['./admin-manage-products.component.css']
})
export class AdminManageProductsComponent implements OnInit{
 
  products: any;
  imageWidth:number=50;
  imageMargin:number=2;
  product={
    name:'',
    price:0,
    tags:'',
    favorite:false,
    stars:0,
    imageUrl:''
  }
  constructor(private adminService:AdminServiceService,private router:Router){}
  ngOnInit(): void {
    this.adminService.getProductsList().subscribe((data)=>{
       this.products=JSON.parse(JSON.stringify(data));
     
    });
  }
  editProduct(product:any){
    localStorage.setItem("editAdminManageProductId", product._id.toString());
      
    this.router.navigate(['edit-admin-manage-products']);
  }
  removeProduct(product:any){
this.adminService.removeProduct(product._id).subscribe((data)=>{
  this.products=this.products.filter((p: any)=>p!=this.product)
  
});

  }
}
