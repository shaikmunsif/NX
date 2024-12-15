import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../types/product.type";
import { loadProductFailure, loadProductSuccess } from "./product.actions";

export interface ProductState {
    products : IProduct[],
    error : string | null
}

export const initialProductState:ProductState = {
    products : [],
    error : null
}

export const productReducer = createReducer(
    initialProductState,
    on(
        loadProductSuccess, 
        (state:ProductState, {products})=>{
            return {
                ...state,
                products : products,
                error : null
            }
        }
    ),
    on(
        loadProductFailure,
        (state:ProductState, {errorMessage}) => {
            return {
                ...state,
                error : errorMessage
            }
        }
    )
)