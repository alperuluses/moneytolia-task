import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoginnedBefore = false;
  users:any[] = [
    {
      id:1,
      name:"Alper",
      email:"alperuluses35@gmail.com",
      password:'123'
    }
  ]
  
userLoginStatus$ = new BehaviorSubject(false)


setUser(email:string, password:string){
 if(this.isLoginnedBefore){
  this.userLoginStatus$.next(true)
 }else if((this.users[0].email == email && this.users[0].password == password)){
    let now = new  Date;
    localStorage.setItem("loginExpireTime",(now.getTime()+60*60*1000).toString())
    this.userLoginStatus$.next(true)
  }else{
    this.userLoginStatus$.next(false)
  }
}
constructor() { 
  let loginExpireTime = localStorage.getItem("loginExpireTime");
  let now = new Date;
  if(loginExpireTime && +loginExpireTime > now.getTime()){
    this.isLoginnedBefore = true
  }else{
    this.isLoginnedBefore = false
  }
}
}
