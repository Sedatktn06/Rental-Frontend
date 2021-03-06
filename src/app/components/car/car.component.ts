import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars : Car[] = [];
  carImageBasePath = "https://localhost:44359";
  carNameFilter = "";

  brands: Brand[];
  brandId:number = 0;

  colors:Color[];
  colorId:number = 0;

  showCarRentalAvailable:boolean;

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private rentalService:RentalService,
    private brandService:BrandService,
    private colorService:ColorService,
    private router:Router) { }

  ngOnInit(): void {

      this.getBrands();
      this.getColors();

      this.activatedRoute.params
        .subscribe((param) => {
          
          if(param["brandId"]){
            this.getCarsByBrand(param["brandId"]);
            this.brandId = param['brandId'];
            this.colorId = 0;
          }
          else if(param["colorId"]){
            this.getCarsByColor(param["colorId"]);
            this.colorId = param["colorId"];
            this.brandId = 0;
          }
          else{
            this.getCars();
          }

        });
      
  }

  getCars(){
    this.carService.getCars()
      .subscribe(response => {
        this.cars = response.data;
      });
  }

  getBrands(){
    this.brandService.getBrands()
      .subscribe((response) => {
        this.brands = response.data;
      })
  }

  getColors(){
    this.colorService.getColors()
      .subscribe((response) => {
        this.colors = response.data;
      })
  }

  getCarsByBrand(brandId: number){
    this.carService.getCarsByBrand(brandId)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  getCarsByColor(colorId: number){
    this.carService.getCarsByColor(colorId)
      .subscribe((response) => {
        this.cars = response.data;
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



  getCarById(){

    if(this.brandId > 0 && this.colorId > 0){
      this.router.navigate(['cars/brand/'+ this.brandId +'/color/' + this.colorId])
    }
    else if(this.brandId >= 0){
      if(this.brandId == 0){
        this.router.navigate(['/cars'])
      }else{
        this.router.navigate(['/cars/brand/' + this.brandId])
      }
    }
    else if(this.colorId >= 0){
          if(this.colorId == 0){
            this.router.navigate(["/cars"])
          }else{
            this.router.navigate(["/cars/color/" + this.colorId])
          }
        }
      
  }

  classColorId(id:number){
    this.colorService.setClassColorId(id);
  }

}
