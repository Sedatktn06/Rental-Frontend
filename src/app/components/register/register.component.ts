import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;
  userAddForm:FormGroup;

  constructor(private userService:UserService,private toastrService:ToastrService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm(){
 this.userAddForm=this.formBuilder.group({
   firstName:["",Validators.required],
   lastName:["",Validators.required],
   email:["",Validators.required],
   password:["",Validators.required]
 })
  }
  addUser(){
if(this.userAddForm.valid){
  let userModel=Object.assign({},this.userAddForm.value);
  this.userService.addUser(userModel).subscribe(response=>{
    this.toastrService.success("Successfully register");
    setTimeout(() => 
    {
      this.router.navigateByUrl('cars');
    },
    2000);
  },
  responseError=>{
    this.toastrService.error(responseError.error);
  }
  )
}else{
  this.toastrService.error("Please add valid user");
}
  }



}
