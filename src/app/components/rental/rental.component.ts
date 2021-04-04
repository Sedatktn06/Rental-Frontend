import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentDate:Date;
  returnDate:Date;
  rentals:Rental[]=[];

  constructor(private rentalService:RentalService,private activaredRoute:ActivatedRoute,private carService:CarService) { }

  ngOnInit(): void 
  {
    this.activaredRoute.params.subscribe(params=>{
      if(params["carId"]){
          this.getRentalsByCarId(params["carId"]);
      }
      this.getRentals();
    })
      
  }

  getRentals()
  {
      this.rentalService.getRentals().subscribe(response=>{
        this.rentals=response.data;
      })
  }

  getRentalsByCarId(carId:number)
  {
    this.rentalService.getRentalsByCarId(carId).subscribe(response=>{
      this.rentals=response.data;
    })
  }

  

}
