import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { selectCartProducts, selectNumberOfProductsAddedToCart } from '../../../store/cart/cart.selectors';
import { Observable } from 'rxjs';
import { IProduct } from '../../../types/product.type';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit{
  cartItems$!:Observable<IProduct[]>;
  numberOfItemsAddedToCart$!: Observable<number>;

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.cartItems$=  this.store.select(selectCartProducts);
    this.numberOfItemsAddedToCart$=  this.store.select(selectNumberOfProductsAddedToCart);
  }
  
}
