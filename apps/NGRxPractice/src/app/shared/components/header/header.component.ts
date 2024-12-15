import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { Observable } from 'rxjs';
import { selectCount } from '../../../store/counter/counter.selector';
import { IProduct } from '../../../types/product.type';
import { selectCartProducts } from '../../../store/cart/cart.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  count$!: Observable<number>;
  cartItems$!: Observable<IProduct[]>;
  numberOfItems!:number;

  constructor(
    private store:Store<AppState>,
    private router:Router
  ){}

  ngOnInit(): void {
      this.count$ = this.store.select(selectCount);
      this.cartItems$ = this.store.select(selectCartProducts); 
      this.cartItems$.subscribe((products)=>{
        this.numberOfItems = products.length;
      })
  }

  routeToCart(){
    this.router.navigate(['cart']);
  }
}
