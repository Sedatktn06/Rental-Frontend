import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:44359/api/auth/";
  userApiUrl="https://localhost:44359/api/users/";
  email:string;

  constructor(private httpClient:HttpClient,private toastrService:ToastrService,private localStoregeService:LocalStorageService) { }

  addUser(user:User){
   return this.httpClient.post(this.apiUrl+"register",user);
  }
  
  getUserInfo(email:string){
    return  this.httpClient.get<SingleResponseModel<User>>(this.userApiUrl+"getbyemail?email="+email);
  }
  update(user:User){
    return this.httpClient.post(this.userApiUrl+"update",user);
  }

}
