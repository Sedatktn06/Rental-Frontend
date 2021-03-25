import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dataLoaded=false;
  currentCar:Car;
  cars: Car[] = [];
  default: Car; 
  carImages: CarImage[] = [];
  carImageBasePath = "https://localhost:44359";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private carImageService: CarImageService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
          this.getCarsByColor(params["colorId"]);
      }
      else{
        this.getCars();
      }
    })
  }



  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

  

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }
  getCarImage(car:Car){

    if(car.imagePath){
      return car.imagePath
    }
    else{
      return 'sirketlogo.jpg'
    }
  }


}
