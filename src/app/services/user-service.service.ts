import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable, Subject, tap } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
 
 
   product={
    name:'',
    price:'',
    tags:'',
    favorite:'',
    description:'',
    quantity:'',
    stars:0,
    imageUrl:''
  }
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
  cart={
    items:this.cartItem,
    totalPrice:'',
    totalCount:''
  }
  cartItems: any;
 latlng:any;
  constructor(private http:HttpClient,private _router:Router) { }
 private _refreshrequired$=new Subject<void>();
 get refreshrequired$(){
  return this._refreshrequired$;
 }
 
  getUsersList() {
    console.log("inside getemployers")
    return this.http.get<any>("https://shopnow-t9zl.onrender.com/user/getUsers");
  }
  getCartItems() {
    return this.http.get<any>("https://shopnow-t9zl.onrender.com/user/getCartItems");
  }
  getProductById(id:any):Observable<any> {
   return this.http.get<any>("https://shopnow-t9zl.onrender.com/user/getProduct/"+id);
  }
  getUserById(id:any) {
    return this.http.get<any>("https://shopnow-t9zl.onrender.com/user/getUserById/"+id);
  }
  getCart(id:any) {
    return this.http.get<any>("https://shopnow-t9zl.onrender.com/user/getCart/"+id);
  }
  getCartItemsById(userId:any):Observable<any> {
    console.log(userId);
    return this.http.get<any>("https://shopnow-t9zl.onrender.com/user/getCartItemsById/"+userId);
  }
  
  

  getUserByName(name:any){
    console.log("inside getuser");
    console.log(name);
    return this.http.get<any>("https://shopnow-t9zl.onrender.com/user/getUserByName/"+name);
  }


  getUserByEmail(email:any){
    console.log(email)
    return this.http.get<any>("https://shopnow-t9zl.onrender.com/user/getUserByemail/"+email);
  }
 
  
  userSignup(user: any) {
    return this.http.post<any>("https://shopnow-t9zl.onrender.com/user/insertUser",{"user":user}).subscribe(data=>{console.log(data)});
   }

   loginUser(user:any){
    alert("inside auth service");
    
     return this.http.post<any>("https://shopnow-t9zl.onrender.com/user/usersignin",{"user":user});
  }






   addToCart(product:any,id:any) {
    console.log("got product quantity",product)
    return this.http.post<any>("https://shopnow-t9zl.onrender.com/user/addToCart/"+id,{"product":product}).pipe(tap(()=>{
      return this._refreshrequired$.next();
    })).subscribe(data=>{console.log(data)});

   }
   saveToBag(cartItems: any,tPrice:any,tCount:any,uName:any,uAddress:any) {
    // let parameters = JSON.stringify({ 'totalPrice': tPrice, 'totalCount': tCount }); 
     console.log("parameters are",cartItems);
   
    return this.http.post<any>("https://shopnow-t9zl.onrender.com/user/addToBag/"+tPrice+'/'+tCount+'/'+uName+'/'+uAddress,{"cartItems":cartItems}).subscribe(data=>{console.log(data)});
  }
   removeCartItem(id: any) {
   return this.http.delete<any>("https://shopnow-t9zl.onrender.com/user/removeFromCart/"+id).pipe(tap(()=>{
    return this._refreshrequired$.next();
  }));
  
  }
  increasequantity(product:any) {
   
   return this.http.put<any>("https://shopnow-t9zl.onrender.com/user/increasequantity/",product).pipe(tap(()=>{
    return this._refreshrequired$.next();
  })).subscribe(data=>{console.log(data)});
  }
  increaseproductquantity(cartItem:any,quantity:any) {
   
    return this.http.put<any>("https://shopnow-t9zl.onrender.com/user/increasequantity/"+quantity,cartItem).pipe(tap(()=>{
     return this._refreshrequired$.next();
   })).subscribe(data=>{console.log(data)});
   }
  decreasequantity(product:any){
    return this.http.put<any>("https://shopnow-t9zl.onrender.com/user/decreasequantity/",product).pipe(tap(()=>{
      return this._refreshrequired$.next();
    })).subscribe(data=>{console.log(data)});
  }
  findtotal(){
    
  }
  editUser(id:any,user:any){
    // const userId=localStorage.getItem("editUserId");
    // console.log('job update')
  
    return this.http.put("https://shopnow-t9zl.onrender.com/user/updateuser/"+id,{"user":user}).subscribe(data=>{console.log("data is"+data)});
  }
  updateuser(mylocation:any,user:any){
    
   
    console.log(mylocation);
    return this.http.put("https://shopnow-t9zl.onrender.com/user/updatedata/"+mylocation,{"user":user}).subscribe(data=>{console.log("data is"+data)});
  }

}


// { productId: string; userId: string; name: string; quantity: string; price: string; totalPrice: string; }

// .pipe(
//   tap(()=>{
//     this.Refreshrequired.next();
//   })
// );;
// .subscribe(data=>{console.log(data)});