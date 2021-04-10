import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindeksService {

  /* apiUrl="https://localhost:44359/api/Findeks/";
  constructor(private httpClient:HttpClient) { }

calculateFindeks(identityNumber:number,carId:number){
return this.httpClient.get(this.apiUrl+"calculate?identityNumber="+identityNumber+"&carId="+carId);
} */

getPointByCustomerId(customerId: number): number {
  return Math.floor(Math.random() * 1900);
}

getPointByCarId(carId: number): number {
  return Math.floor(Math.random() * 1900);
}

}
