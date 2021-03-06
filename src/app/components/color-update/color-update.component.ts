import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm: FormGroup;
  colorId:number;

  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createColorUpdateForm();

    this.activatedRoute.params
      .subscribe((param) => {
        if(param["colorId"]){
          this.colorId = param["colorId"]
        }
      })
  }

  createColorUpdateForm(){

    this.colorUpdateForm = this.formBuilder.group({
      colorName : ["", Validators.required]
    });

  }

  updateBrand(){

    if(this.colorUpdateForm.valid){

      let colorModel = Object.assign({}, this.colorUpdateForm.value);
      colorModel.id = this.colorId;

      if(typeof(colorModel.id) == "string"){
        colorModel.id = parseInt(colorModel.id);
      }

      this.colorService.updateColor(colorModel)
        .subscribe((response) => {
          this.toastrService.success(response.message, "Başarılı!");
        })

    }
    else{
      this.toastrService.error("Lütfen ilgili yerleri doldurunuz.", "Hata!");
    }
  }

}
