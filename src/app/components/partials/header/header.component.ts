import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user={
    email:'',
    name:'',
    address:'',
    password:''
  }
  cartItem={
    productId:'',
    userId:'',
    name:'',
    quantity:'',
    price:'',
    totalPrice:''
  }
 public totalquantity:any;
 public total=0;
 public count:any;
  cartItems: any;
  data:any;
  value: any;
  cart: any;
  constructor(private userService:UserServiceService,private router:Router,public auth:AuthServiceService){}
  ngOnInit(): void {
    const uid=localStorage.getItem("userId");
    console.log(uid);
    const name=localStorage.getItem("userName");
    console.log(name);
    this.userService.getUserByName(name).subscribe((data: any)=>{
   
     
      this.user=JSON.parse(JSON.stringify(data));
      console.log("got name as follows",this.user.name)
      });
      this.userService.refreshrequired$.subscribe(()=>{
        this.getcartdata();
        
          });
          this.getcartdata();
          this.findquantity();
          
          
 
   
      // this.totalquantity=localStorage.getItem("totalquantity");
      
  }


private getcartdata(){
  const uid=localStorage.getItem("userId");
    console.log(uid);
    this.userService.getCartItemsById(uid).subscribe((data:any)=>{
    this.cartItems=JSON.parse(JSON.stringify(data));
   
    });
}

  findquantity(){   
    
    const uid=localStorage.getItem("userId");
    console.log(uid);
    this.userService.getCartItemsById(uid).subscribe((data:any)=>{
      this.cartItems=JSON.parse(JSON.stringify(data));
      for(let j=0;j<this.cartItems.length;j++){   
        this.total+= this.cartItems[j].quantity;
         
        }
        console.log("total is: ",this.total)
       })
       
      }
 
    // this.userService.getCartItemsById(uid).subscribe((data:any)=>{
    // this.cartItems=JSON.parse(JSON.stringify(data));
    // console.log(this.cartItems);
    // for(let j=0;j<this.cartItems.length;j++){   
    //   this.total+= this.cartItems[j].quantity;
      
    // }
    // console.log(this.total);
    // });
   
  


  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
   
    alert("logged out");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    localStorage.removeItem("adminrole");
    localStorage.removeItem("totalquantity");
    localStorage.removeItem("token");
    
  localStorage.clear();
   sessionStorage.clear();
   this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/login-page']);
  });
  window.location.reload();
}
   
  }


