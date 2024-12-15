import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../types/product.type';

export const loadProduct = createAction('[Product Componenet] loadProduct');

export const loadProductSuccess = createAction(
  '[Product Component] loadProductSuccess',
  props<{ products: IProduct[] }>()
);

export const loadProductFailure = createAction(
  '[Product Component] loadProductFailure',
  props<{ errorMessage: string }>()
);
