import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import {ElementRef,ViewChild} from '@angular/core';
@Component({
  selector: 'app-edit-account-settings',
  templateUrl: './edit-account-settings.component.html',
  styleUrls: ['./edit-account-settings.component.css']
})
export class EditAccountSettingsComponent implements OnInit{
 
  user: any;
  
  constructor(private adminService:AdminServiceService,private router:Router,private _elementRef:ElementRef,private http:HttpClient){}
  ngOnInit(): void {
    const adminid=localStorage.getItem("editAdminId");
    console.log("_id of job is",adminid);
    this.adminService.getUserById(adminid).subscribe((data:any)=>{
      this.user=JSON.parse(JSON.stringify(data));
    });

}

  editAdmin(user:any){
    console.log("user with changes",user)
    const aid=localStorage.getItem("editAdminId");
    console.log("inside editjob id is",aid);
    this.adminService.editAdmin(aid,this.user);  
       
    alert("Success");
    this.router.navigate(['admin-dashboard']);

  }
}
