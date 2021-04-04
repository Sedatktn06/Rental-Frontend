import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';
import { CustomerService } from 'src/app/services/customer.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {

  carDetail: Car;
  carImages: CarImage[] = [];
  carImageBasePath = "https://localhost:44359";

  showCarAvail: boolean;

  showAlert:boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private carDetailService: CarService,
    private carImageService: CarImageService,
    private rentalService:RentalService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((param) => {
      if(param["carId"]){
        this.getCarDetailByCarId(param["carId"]);
        this.isCarAvailable(param["carId"]);
      }

      this.getCarImageByCarId();
      
    });
  }

  getCarDetailByCarId(carId: number){
    this.carDetailService.getCarDetailsByCarId(carId)
    .subscribe((response) => {
      this.carDetail = response.data[0];
      console.log(this.carDetail);
    });
  }


  getCarImageByCarId(){
    this.carImageService.getCarImagesByCarId(this.activatedRoute.snapshot.params["carId"])
      .subscribe((response) => {
        this.carImages = response.data;
        console.log(this.carImages);
      });
  }

  sliderItemActive(index: number){
    if(index === 0){
      return "carousel-item active";
    }
    else{
      return "carousel-item";
    }
  } 

  isCarAvailable(carId:number){
    this.rentalService.isCarAvailable(carId)
      .subscribe((response) => {
        this.showCarAvail = response;
      }, responseEror => {
        this.showAlert = true;
      })

  }

}