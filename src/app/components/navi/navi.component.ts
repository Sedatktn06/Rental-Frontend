import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserDetailDto } from 'src/app/models/userDetailDto';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  user: UserDetailDto

  constructor(
    public authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    let mail = localStorage.getItem("email")
    if (mail != null) {
      this.userService.getUserByMail(mail).subscribe(response => {
        console.log(response.data);
        this.user = response.data
      })
    }
  }

  logout() {
    this.authService.logOut()
    window.location.reload()
  }

  isAuthenticated(){
    if(this.authService.isAuthenticated()){
      return true;
    }
    else{
      return false;
    }
  }
}
