import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent {
  users: any;
  constructor(private userService:UserServiceService,private _router:Router) { }
  user={
    email:'',
     name:'',
     address:'',
     password:''
   }
   ngOnInit(): void {
    
    const jid=localStorage.getItem("editUserId");
    console.log("_id of job is",jid);
    this.userService.getUserById(jid).subscribe((data: any)=>{
    this.users=JSON.parse(JSON.stringify(data));
  });
 
  }
  changeAddress(){
    const uid=localStorage.getItem("editUserId");
    console.log("inside edituser id is",uid);
    this.userService.getUserById(uid).subscribe((data: any)=>{
      this.users=JSON.parse(JSON.stringify(data));
    });
    this.userService.editUser(uid,this.users[0]);  
       
    alert("Success");
    this._router.navigate(['checkout-page']);
  }
}
