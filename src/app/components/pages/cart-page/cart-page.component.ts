import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  [x: string]: any;


  cartItem={
    productId:'',
    userId:'',
    name:'',
    quantity:'',
    price:'',
    totalPrice:''
  }
  cart={
    items:this.cartItem,
    totalPrice:'',
    totalCount:''
  }
  user={
   
    email:'',
    name:'',
    address:'',
    password:''
  }
  
  public cartItems:any;
  // private cartSubject:BehaviorSubject<any>=new BehaviorSubject(this.cartItem);
  public total=0;    
   value:any;  
  public totalquantity=0;
  refreshrequired$: any;
  cartdata:any;
  visible=false;
  constructor(private router:Router,private userService:UserServiceService){
  
  }
 
  
  ngOnInit(): void {

  this.userService.refreshrequired$.subscribe(()=>{

this.getdata();

  });
   this.getdata();
  this.findsum();
 
  }
  private getdata(){
    const uid=localStorage.getItem("userId");
    this.userService.getCartItemsById(uid).subscribe((data:any)=>{
      this.cartItems=JSON.parse(JSON.stringify(data));
      console.log(this.cartItems)
      localStorage.setItem('cartsave', JSON.stringify(this.cartItems));
      if(this.cartItems.length===0){
        var visible=true;
      }
    });
  }
//    calculateTotal(){

//   for(let j=0;j<this.cartItems.length;j++){   
         
//     this.totalquantity += this.cartItems[j].quantity;
    
//     this.total += this.cartItems[j].totalPrice;
      
//   } 
//   localStorage.setItem('tqnty',this.totalquantity.toString());
//   localStorage.setItem('ttotal',this.total.toString());
//   return this.total;
// }
  
  findsum(){   
    
    // //   this.value=data;   
    // // console.log(this.value);  
    //   var cartsaved = JSON.parse(localStorage.getItem('cartsave')!);
    // console.log("yes ",cartsaved)
    // for(let j=0;j<cartsaved.length;j++){   
          
    //       this.totalquantity += cartsaved[j].quantity;
         
    //       this.total += cartsaved[j].totalPrice;
    //       localStorage.setItem("totalquantity",this.totalquantity.toString())
        
    //       console.log("total quantity is ",this.totalquantity);  
       

         
    //  }  
     
    //  this.router.navigate(['/cart-page']);
    
    const uid=localStorage.getItem("userId");
    console.log(uid);
    this.userService.getCartItemsById(uid).subscribe((data:any)=>{
      this.cartItems=JSON.parse(JSON.stringify(data));
      for(let j=0;j<this.cartItems.length;j++){   
        this.total+= this.cartItems[j].totalPrice;
         this.totalquantity+=this.cartItems[j].quantity;
        }
       })
  }

 
  // increaseItemAmount(cartItem:any){
    
  //   this.userService.increasequantity(cartItem);
  //   // this['cartSubject'].next(this.cartItem);
  //   // this.userService.refreshrequired$.next();
    
  //   // alert("incremented successfully");
    
  // }
  // decreaseItemAmount(cartItem:any){
  //   this.userService.decreasequantity(cartItem);
  //   // this.cartSubject.next(this.cartItem);
  //   // this.refreshData$.next(true);
  //   // alert("decremented successfully");
  // }
  removeFromCart(cartItem:any){
    this.userService.removeCartItem(cartItem._id).subscribe((data)=>{
      this.cartItems=this.cartItems.filter((p: any)=>p!==this.cartItem);
      //  this.refreshData$.next(true);
    });
    // this.cartSubject.next(this.cartItem);
  }
  savetocart(cartItems:any,tPrice:any,tCount:any) {
      this.userService.saveToBag(this.cartItems,tPrice,tCount,this.user.name,this.user.address);
    
    console.log(this.cartItems);
  
   alert("order added");
   this.router.navigate(['/checkout-page']);
    }

}
