import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {

  carDetail:Car;
  cars : Car;
  carImages:CarImage[]=[];
  currentImage:CarImage;
  dataLoaded=false;
  carImageBasePath="https://localhost:44359"
  
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params['carId']){
        this.getCarDetailByCarId(params['carId']);
        this.getImageByCarId(params['carId']);
      };
      
    });
  }



  getImageByCarId(carId:number)
  {
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      console.log(this.carImages);
    });
  }

  getCarDetailByCarId(carId:number)
  {
    this.carService.getCarDetailsByCarId(carId).subscribe(response => {
      this.carDetail = response.data[0];
      console.log(this.carDetail)
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

}