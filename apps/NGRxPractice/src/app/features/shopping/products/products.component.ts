import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { Observable } from 'rxjs';
import { IProduct } from '../../../types/product.type';
import { Store } from '@ngrx/store';
import { addToCart } from '../../../store/cart/cart.actions';
import * as ProductAction from '../../../store/products/product.actions'
import { selectAllProducts, selectProductsError } from '../../../store/products/product.selector';
import { AppState } from '../../../store/app.state';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, AsyncPipe, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products$!: Observable<IProduct[]>;
  prodctsError$!: Observable<string | null>;

  constructor(private store:Store<AppState>){
  }

  ngOnInit(): void {
    this.store.dispatch(ProductAction.loadProduct());
    this.products$ = this.store.select(selectAllProducts);
    this.prodctsError$ = this.store.select(selectProductsError);
  }

  addProductToCart(product:IProduct){
    this.store.dispatch(addToCart({product}));
  }
}
