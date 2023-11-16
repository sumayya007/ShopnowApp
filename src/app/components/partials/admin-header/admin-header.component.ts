import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  constructor(private adminService:AdminServiceService,private router:Router){}
  ngOnInit(): void {
    
  }
  logout(){
    
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    localStorage.clear();
    this.router.navigate(['/login-page']);
  }



}
