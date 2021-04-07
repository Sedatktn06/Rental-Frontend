import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  avtiveColorId:number;
  apiUrl="https://localhost:44359/api/";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>
  {
    let newPath=this.apiUrl+"colors/getall";
      return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  setClassColorId(id:number){
    this.avtiveColorId = id;
  }

  addColor(color:Color){
    let newPath=this.apiUrl+"colors/add";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }

  updateColor(color:Color){
    let newPath=this.apiUrl+"colors/update";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }
}
