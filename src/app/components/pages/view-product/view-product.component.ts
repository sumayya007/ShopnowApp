import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  imageWidth:number=50;
  imageMargin:number=2;
  product={
    name:'',
    price:'',
    tags:'',
    favorite:'',
    description:'',
    quantity:1,
    stars:0,
    imageUrl:'',
    category:''

  }
  cartItems: any;
  token:any=false;
  constructor(private userService:UserServiceService,private router:Router){}
  ngOnInit(): void {
    const pid=localStorage.getItem("editProductId");
    console.log("_id of job is",pid);
    this.userService.getProductById(pid).subscribe((data: any)=>{
    this.product=JSON.parse(JSON.stringify(data));
  });
}
increaseItemAmount(product:any){
    this.product.quantity+=1;
  // this.userService.increasequantity(product);
  // this['cartSubject'].next(this.cartItem);
  // this.userService.refreshrequired$.next();
  
  
}
decreaseItemAmount(product:any){
  this.product.quantity-=1;
  // this.userService.decreasequantity(product);
  // this.cartSubject.next(this.cartItem);
  // this.refreshData$.next(true);
  // alert("decremented successfully");
}
 addToCart(value:any){
    console.log(this.product);
    console.log(this.product.name);
    const userid=localStorage.getItem("userId");
    this.userService.getCartItemsById(userid).subscribe((data:any)=>{
    this.cartItems=JSON.parse(JSON.stringify(data));
   
      
      for(let i=0;i<this.cartItems.length;i++){
       
         
        if(this.cartItems[i].name==this.product.name){
          this.userService.increaseproductquantity(this.cartItems[i],this.product.quantity);
          this.token=true;
        }
       
      }
      if(this.token==false){
       
  this.userService.addToCart(this.product,userid);
 
  this.router.navigate(["/cart-page"]);
      }
     
    
    
  });
  this.router.navigate(["/cart-page"]);
     // alert("Product added to cart successfully!!");
  }

  

}