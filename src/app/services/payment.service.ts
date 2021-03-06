import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../models/payment';
import { Rental } from '../models/rental';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  paymentApiUrl="https://localhost:44359/api/payments/";
  cardApiUrl = "https://localhost:44306/api/cards/";

  private card:Card;
  
  constructor(private httpClient:HttpClient) { }

  payment(payment:Payment, saveCard:boolean):Observable<ResponseModel>{
    
    let addPaymentApiUrl = this.paymentApiUrl + "add";
    let addCardApiUrl = this.cardApiUrl + "add";
    
    if(saveCard){
      this.card.customerId = payment.customerId;
      this.card.cardOwnerName = payment.cartOwnerName;
      this.card.cardCvv = payment.cardCvv;
      this.card.cardExpirationDate = payment.expirationDate;
      this.card.cardNumber = payment.cardNumber;

      return this.httpClient.post<ResponseModel>(addCardApiUrl, this.card);
    }

    return this.httpClient.post<ResponseModel>(addPaymentApiUrl, payment);

  }

  getByCustomerId(customerId:number):Observable<ListResponseModel<Card>>{

    let getCustomerApiUrl = this.cardApiUrl + "getbycustomerid?customerId="+ customerId;

    return this.httpClient.get<ListResponseModel<Card>>(getCustomerApiUrl);
  }
  
}

