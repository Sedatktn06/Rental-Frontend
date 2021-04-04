import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rental:Rental;
  apiUrl="https://localhost:44359/api";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>
  {
    let newPath=this.apiUrl+"/rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"/rentals/getrentaldetailsbycarid?id="+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  isCarAvailable(carId:number): Observable<boolean>{

    let newApiUrl = this.apiUrl + "/rentals/iscaravailable?carId=" + carId;

    return this.httpClient.get<boolean>(newApiUrl);

  }


  addRental(rental:Rental):Observable<ResponseModel>{
      let newPath=this.apiUrl+"/rentals/add";
      return this.httpClient.post<ResponseModel>(newPath,rental);
  }


  setRental(rental:Rental){
    this.rental = rental;
  }

  getRental(){
    return this.rental;
  }
}
