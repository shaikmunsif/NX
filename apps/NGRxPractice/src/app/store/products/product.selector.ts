import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";

export const selectProductFeature = createFeatureSelector<ProductState>('product');

export const selectAllProducts = createSelector(
    selectProductFeature,
    (state:ProductState) => state.products
);

export const selectProductsError = createSelector(
    selectProductFeature,
    (state:ProductState)=> state.error
);

