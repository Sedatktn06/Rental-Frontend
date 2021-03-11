import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1: any = {
    carId: 1,
    carName: 'Ticari',
    brandId: 2,
    colorId: 1,
    description: 'Temiz',
  };
  car2: any = {
    carId: 2,
    carName: 'Otomobil',
    brandId: 2,
    colorId: 1,
    description: 'Temiz',
  };
  car3: any = {
    carId: 3,
    carName: 'Jeep',
    brandId: 2,
    colorId: 1,
    description: 'Hasarlı',
  };
  car4: any = {
    carId: 4,
    carName: 'Ticari',
    brandId: 2,
    colorId: 1,
    description: 'Temiz',
  };
  car5: any = {
    carId: 5,
    carName: 'Otomobil',
    brandId: 2,
    colorId: 1,
    description: 'Kazalı',
  };

  cars = [this.car1, this.car2, this.car3, this.car4, this.car5];

  constructor() { }

  ngOnInit(): void {
  }


}
