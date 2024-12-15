import { inject, Injectable } from '@angular/core';
import { ProductsApiService } from '../../shared/services/products-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class ProductsEffect {
  productsService = inject(ProductsApiService);
  actions$ = inject(Actions);

  loadProducts$ =createEffect(()=>
    this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      tap(() => console.log('Load Products action triggered')),
      switchMap(() =>
        this.productsService.getProducts().pipe(
          map((res) => ProductActions.loadProductSuccess({ products: res })),
          catchError((error) => {
            console.log('Error while loading products', error);
            return of(
              ProductActions.loadProductFailure({
                errorMessage: 'Failed to load products',
              })
            );
          })
        )
      )
    ));
}
