import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  setItem(key:string,value:any){
    localStorage.setItem(key,value);
  }

  getItem(key:string){
    return localStorage.getItem(key);
  }
  clear(){
    localStorage.clear();
  }
  removeItem(key:string){
    localStorage.removeItem(key);
  }
}
