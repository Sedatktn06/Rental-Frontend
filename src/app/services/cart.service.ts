import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartTotal } from '../models/card';
import { CartItem, CartItems } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartTotal = new CartTotal();
  private dataSource = new BehaviorSubject<CartTotal>(this.cartTotal);
  data = this.dataSource.asObservable();


  constructor() { }

  addToCart(cartItem:CartItem){
    CartItems.push(cartItem);
    this.cartTotal.customerId = cartItem.customerId;
    this.calculateCart();
  }


  calculateCart(){
    let total = CartItems.reduce((acc, val) => acc += val.totalPrice, 0)
    this.cartTotal.cartTotal = total;
    this.dataSource.next(this.cartTotal);
  }

  cartList():CartItem[]{
    return CartItems
  }
}
