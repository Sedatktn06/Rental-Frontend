import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CartComponent } from './components/cart/cart.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  { path:"cardetail/:carId",component:CarDetailComponent},
  {path:"cars/customer",component:CustomerComponent},
  {path:"cars/rental",component:RentalComponent},
  { path:"cars/rental/:carId",component:RentalComponent},
  {path:"cars/car-filter/:brandId/:colorId",component:CarComponent},
  {path:"payments", component:PaymentComponent},
  {path: "cars/detail/:carId", component: CarDetailComponent},
  {path: "rental/add/:carId", component: RentalAddComponent},
  {path: "cart", component: CartComponent},
  {path: "payment", component: PaymentComponent},
  {path: "cars/update/:carId", component: CarUpdateComponent},
  {path: "car/add", component: CarAddComponent,canActivate:[LoginGuard]},
  {path: "brand/add", component: BrandAddComponent,canActivate:[LoginGuard]},
  {path: "color/add", component: ColorAddComponent,canActivate:[LoginGuard]},
  {path: "brand/update/:id", component: BrandUpdateComponent,canActivate:[LoginGuard]},
  {path: "brands/brand-list", component: BrandListComponent},
  {path: "colors/color-list", component: ColorListComponent},
  {path: "color/update/:id", component: ColorUpdateComponent,canActivate:[LoginGuard]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
