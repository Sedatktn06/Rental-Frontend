import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList : CartItem[];
  totalPrice: number;

  carImageBasePath = "https://localhost:44359";

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts(){
    this.cartList = this.cartService.cartList();

    this.cartService.data
      .subscribe((response) => {
        this.totalPrice = response.cartTotal;
      })
  }

}
