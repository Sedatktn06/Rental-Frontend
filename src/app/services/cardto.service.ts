import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardtoService {

  apiUrl="https://localhost:44359/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number){
      let newPath=this.apiUrl+"cars/getcardetailsbycarid?carId="+carId;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
