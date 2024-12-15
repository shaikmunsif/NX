import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../types/product.type';
import * as CartActions from './cart.actions';

export interface CartState {
  products: IProduct[];
  totalPrice?: number;
}

export const cartInitialState: CartState = {
  products: [],
};

export const cartReducer = createReducer(
  cartInitialState,
  on(CartActions.addToCart, (state, { product }) => {
    const checkForProductInExistingState = state.products.find(
      (item) => item.id === product.id
    );
    if (checkForProductInExistingState) {
      return {
        ...state,
      };
    } else {
      const updatedProducts = [...state.products, product];
      return {
        ...state,
        products: updatedProducts,
      };
    }
  }),
  on(CartActions.removeFromCart, (state, { productid }) => {
    const updatedProducts = state.products.filter(
      (product) => product.id !== productid
    );

    return {
      ...state,
      products: updatedProducts,
    };
  }),
  on(CartActions.incrementProduct, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    return {
      ...state,
      products: updatedProducts,
    };
  }),
  on(CartActions.decrementProduct, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );

    return {
      ...state,
      products: updatedProducts,
    };
  })
);
