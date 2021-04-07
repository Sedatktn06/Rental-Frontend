import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carId:number;
  brands : Brand[];
  colors : Color[];
  carUpdateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private carService:CarService,private toastrService:ToastrService,private activatedRoute: ActivatedRoute,
    private brandService:BrandService,
    private colorService:ColorService,) { }

  ngOnInit(): void {
    this.createCarUpdateForm();
    this.getBrands();
    this.getColors();

    this.activatedRoute.params
      .subscribe((param) => {
        if(param["carId"]){
          this.carId = param["carId"];
        }
      })
    
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

  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
      carName:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    })
  }

  update(){
    if(this.carUpdateForm.valid){

      let carUpdateModel = Object.assign({}, this.carUpdateForm.value);

      carUpdateModel.id = this.carId;

      if(typeof(carUpdateModel.brandId) == "string"){
        carUpdateModel.brandId = parseInt(carUpdateModel.brandId);
      }

      if(typeof(carUpdateModel.colorId) == "string"){
        carUpdateModel.colorId = parseInt(carUpdateModel.colorId);
      }

      if(typeof(carUpdateModel.id) == "string"){
        carUpdateModel.id = parseInt(carUpdateModel.id);
      }

      this.carService.update(carUpdateModel)
        .subscribe((response) => {
          this.toastrService.success(response.message, "Başarılı!!")
        }, responseError => {
          console.log(responseError);

          if(responseError.error.Errors.length > 0){

            for (let i = 0; i < responseError.error.Errors.length; i++) {
              
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Hata!!")
              
            }

          }
        })

    }
  }

}
