import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../types/product.type";

export const addToCart = createAction(
    '[cart Component] AddToCart', 
    props<{product: IProduct}>()
);

export const removeFromCart = createAction(
    '[cart Component] RemoveFromCart', 
    props<{productid: number}>()
);


export const incrementProduct = createAction(
    '[Card Component] IncrementProduct',
    props<{productId:number}>(),
);

export const decrementProduct = createAction(
    '[Card Component] DecrementProduct',
    props<{productId:number}>(),
);

