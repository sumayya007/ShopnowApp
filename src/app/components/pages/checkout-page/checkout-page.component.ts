import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit{
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
  users: any;
mylocation: any;
  constructor(private userService:UserServiceService,private router:Router){}
  ngOnInit(): void {
    this.userService.refreshrequired$.subscribe(()=>{

      this.getuser();
      
        });
         this.getuser();
       
  
    // const cartid=localStorage.getItem("editCartId");
    // console.log(cartid);
    // this.userService.getCart(cartid).subscribe((data:any)=>{
    //   this.cartItem=JSON.parse(JSON.stringify(data));
    //   console.log(this.cartItem)
    // });
  
  }
  private getuser(){
    const uid=localStorage.getItem("userId");
   
    this.userService.getUserById(uid).subscribe((data:any)=>{
      this.users=JSON.parse(JSON.stringify(data));
      console.log(this.users);
    });
    
  }
  getlocation(){
  //   alert("get location");
  // const mylocation=localStorage.getItem("location");
  // alert(this.mylocation.toString());
  // const uid=localStorage.getItem("userId");
   
  // this.userService.getUserById(uid).subscribe((data:any)=>{
  // this.users=JSON.parse(JSON.stringify(data));
  //   console.log(this.users);
  // });
  // console.log(mylocation);
  // this.userService.updateuser(mylocation,this.users[0]);
  }
  changeAddress(user:any){
    localStorage.setItem("editUserId", user._id.toString());
    
    this.router.navigate(['editaddress']);
  }
  setAddress(user:any){
    const mylocation=localStorage.getItem("location");
    // var loc=JSON.stringify(mylocation);
    console.log(mylocation);
    this.userService.updateuser(mylocation,user);
  }


}
 
