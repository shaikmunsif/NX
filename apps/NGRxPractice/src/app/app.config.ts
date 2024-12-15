import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { counterReducer } from './store/counter/counte.reducer';
import { provideHttpClient } from '@angular/common/http';
import { cartReducer } from './store/cart/cart.reducer';
import { productReducer } from './store/products/product.reducer';
import { ProductsEffect } from './store/products/product.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync('noop'),
    provideStore(),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(
      ProductsEffect
    ),
    provideState({
      name: 'counter',
      reducer: counterReducer,
    }),
    provideState({
      name: 'cart',
      reducer: cartReducer,
    }),
    provideState({
      name: 'product',
      reducer: productReducer,
    }),
  ],
};
