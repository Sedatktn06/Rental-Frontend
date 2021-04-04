import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';

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
  {path: "payment", component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
