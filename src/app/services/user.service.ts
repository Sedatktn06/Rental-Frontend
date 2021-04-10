import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { User } from '../models/user';
import { UserDetailDto } from '../models/userDetailDto';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:44359/api/auth/";
  userApiUrl="https://localhost:44359/api/users/";
  email:any;

  constructor(private httpClient:HttpClient,private toastrService:ToastrService,private localStoregeService:LocalStorageService) { }

  addUser(user:User){
   return this.httpClient.post(this.apiUrl+"register",user);
  }
  
  update(user:User){
    return this.httpClient.post(this.userApiUrl+"update",user);
  }

  getUsers():Observable<ListResponseModel<User>>{
    return this.httpClient.get<ListResponseModel<User>>(this.userApiUrl+"getall");
  }
  getUserByMail(mail: string): Observable<SingleResponseModel<UserDetailDto>> {
    return this.httpClient.get<SingleResponseModel<UserDetailDto>>(this.apiUrl + mail)
  }


}
