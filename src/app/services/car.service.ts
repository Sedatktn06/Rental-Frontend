import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44359/api/';

  constructor(private httpClient: HttpClient) { }

  getCars() :Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number) :Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number) :Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  update(car:Car){
    let newPath=this.apiUrl+"cars/update";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

  add(car:Car){
    let newPath=this.apiUrl+"cars/add";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

}
