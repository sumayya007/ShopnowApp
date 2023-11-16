import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

   constructor(private http:HttpClient,private router:Router) { }
  

  editAdmin(id:any,user: any) {
   ;
      console.log('job update')
    
      return this.http.put("https://shopnowapi-ydrz.onrender.com/admin/updateadmin/"+id,{"user":user}).subscribe(data=>{console.log("data is"+data)});
    }
  
    adminEditUser(id:any,user:any){
      console.log("hey user is ",user)
      const newuser=user[0];
      console.log("hey user is ",newuser)
      return this.http.put("https://shopnowapi-ydrz.onrender.com/admin/adminupdateuser/"+id,{"user":newuser}).subscribe(data=>{console.log("data is"+data)});
    }
    adminEditProduct(id:any,product:any){
      console.log("hey user is ",product)
      const newproduct=product[0];
      return this.http.put("https://shopnowapi-ydrz.onrender.com/admin/adminupdateproduct/"+id,{"product":newproduct}).subscribe(data=>{console.log("data is"+data)});
    }
    adminEditCategory(id:any,category:any){
      console.log("hey user is ",category)
      const newcategory=category[0];
      return this.http.put("https://shopnowapi-ydrz.onrender.com/admin/adminupdatecategory/"+id,{"category":newcategory}).subscribe(data=>{console.log("data is"+data)});
    }
    

    removeUser(id:any){
      return this.http.delete("https://shopnowapi-ydrz.onrender.com/admin/removeUser/"+id);
    }
    removeCategory(id:any){
      return this.http.delete("https://shopnowapi-ydrz.onrender.com/admin/removeCategory/"+id);
    }
  getCategoryList() {
    return this.http.get<any>("https://shopnowapi-ydrz.onrender.com/admin/getCategoriesList");
  }
 
  getProductsList() {
    return this.http.get<any>("https://shopnowapi-ydrz.onrender.com/admin/getProductsList");
  }

 

 
  getUsersList() {
    console.log("inside getemployers")
    return this.http.get<any>("https://shopnowapi-ydrz.onrender.com/user/getUsers");
  }
  
  addProduct(product:any){
    return this.http.post<any>("https://shopnowapi-ydrz.onrender.com/admin/addProduct",{"product":product}).subscribe(data=>{console.log(data)});
  }
  addToCart(product:any) {
    return this.http.post<any>("https://shopnowapi-ydrz.onrender.com/admin/addToCart",{"product":product}).subscribe(data=>{console.log(data)});
  }
 
  removeProduct(id: any) {
    return this.http.delete("https://shopnowapi-ydrz.onrender.com/admin/removeProduct/"+id);
  }
  addCategory(category:any){
    return this.http.post<any>("https://shopnowapi-ydrz.onrender.com/admin/addCategory",{"category":category}).subscribe(data=>{console.log(data)});
  }
  getAdminById(id:any){
    return this.http.get<any>("https://shopnowapi-ydrz.onrender.com/admin/getadminbyid/"+id);
  }
  updateAdmin(admin:any) {
    return this.http.put("https://shopnowapi-ydrz.onrender.com/admin/update",admin).subscribe(data=>{console.log("data is"+data)});
  }
  getProductById(id:any){
    return this.http.get<any>("https://shopnowapi-ydrz.onrender.com/admin/getproductbyid/"+id);
  }
  getUserById(id:any){
    return this.http.get<any>("https://shopnowapi-ydrz.onrender.com/admin/getuserbyid/"+id);
  }
  getCategoryById(id:any){
    return this.http.get<any>("https://shopnowapi-ydrz.onrender.com/admin/getcategorybyid/"+id);
  }
}
