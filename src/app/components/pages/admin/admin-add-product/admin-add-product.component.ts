import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import {ElementRef,ViewChild} from '@angular/core';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit{
  products: any;
  @ViewChild('fileInput', { static: false })
  fileInput!: ElementRef;
 
  product={
    name:'',
    price:0,
    tags:'',
    favorite:'false',
    stars:0,
    imageUrl:'',
    category:''
  }
  postFile={
    "fieldname":"",
    "originalname":"",
    "encoding":"",
    "mimetype":"",
    "destination":"",
    "filename":"",
    "path":"",
    "size":""
  }
  categories: any;

  constructor(private adminService:AdminServiceService,private router:Router,private http:HttpClient,private _elementRef : ElementRef){}
  ngOnInit(): void {
    
    this.adminService.getProductsList().subscribe((data: any)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });
    this.adminService. getCategoryList().subscribe((data: any)=>{
      this.categories=JSON.parse(JSON.stringify(data));
      console.log(this.categories);
    });
    
  }
  onFileUpload(){
    const imageBlob=this.fileInput.nativeElement.files[0];
    const file=new FormData();
    file.set('file',imageBlob);
    
    this.http.post('http://localhost:3000/admin/',file).subscribe(response=>{
    const postFile=response;
      console.log("postfile",postFile);
      localStorage.setItem("postFile",JSON.stringify(postFile));
    });
  }
  adminAddProduct(value:any){
  
    // let domElement = this._elementRef.nativeElement.querySelector(`#tag`).value;
    // alert(domElement);
    // this.product.tags=domElement;
    // // for(let i=0;i<this.product.tags.length;i++){
    
    // // }
    // alert("tags are"+this.product.tags)
    this.adminService.addProduct(this.product);
    alert("Product added successfully!!");
     this.router.navigate(["/admin-dashboard"])
  }

  
}
