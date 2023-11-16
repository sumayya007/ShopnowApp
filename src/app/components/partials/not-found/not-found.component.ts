import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
@Input()
visible=false;
  cartItems: any;
constructor(private router:Router,private userService:UserServiceService){}
  

ngOnInit(): void {
  const uid=localStorage.getItem("userId");

  this.userService.getCartItemsById(uid).subscribe((data:any)=>{
    this.cartItems=JSON.parse(JSON.stringify(data));
    console.log(this.cartItems.length)
    if(this.cartItems.length==0){
      this.visible=true;
    }
  });
}
}


