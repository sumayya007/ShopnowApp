import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{



  products: any;
  imageWidth:number=50;
  imageMargin:number=2;
  product={
    name:'',
    price:'',
    tags:'',
    favorite:'',
    description:'',
    quantity:'',
    stars:0,
    imageUrl:'',
    category:''
  }
  pressCall: any;
  filteredProducts:any;
  allProducts:any;
  searchInput="";

  constructor(private adminService:AdminServiceService,private router:Router){}
 itemsPerPage=3;
 currentPage=1;


  ngOnInit(): void {
    this.adminService.getProductsList().subscribe((data)=>{
       this.filteredProducts=JSON.parse(JSON.stringify(data));
       this.allProducts=JSON.parse(JSON.stringify(data));
       console.log(this.allProducts);
    });
  }
  filterProducts(){
    this.filteredProducts=this.allProducts.filter(
      (p:any)=>{
        return p.name.toLowerCase().includes(this.searchInput.toLowerCase());
      }
    )
    console.log(this.filteredProducts)
  }
  categorize(categorystring:String){
    console.log(categorystring);
    if(categorystring=='All'){
      this.filteredProducts=this.allProducts;
      console.log(this.filteredProducts)
    }
    else if(categorystring!='All'){

    
    this.filteredProducts = this.allProducts.filter((p: any) => p.category == categorystring);
    }
    console.log(this.filteredProducts)
  }
  sort(order:any){
   
    if(order=='asc'){
     
      this.filteredProducts.sort(
        (p1:any,p2:any)=>{
          return p1.price>p2.price?1:-1
        }
      )
    }
    else if(order=='desc'){
     
      this.filteredProducts.sort(
        (p1:any,p2:any)=>{
          return p1.price>p2.price?-1:1
        }
      )
    }
  }
  changePage(page:number){
    this.currentPage=page;
  }
  get paginatedData(){
    const start=(this.currentPage-1)*this.itemsPerPage;
    const end=start+this.itemsPerPage;
    console.log(this.filteredProducts);
    return this.filteredProducts.slice(start,end);
  }
 
  viewProduct(product:any){
  
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(["/view-product"]);
  }
 
}
