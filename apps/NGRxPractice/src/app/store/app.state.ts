import { CartState } from "./cart/cart.reducer";
import { counterState } from "./counter/counter.type";
import { ProductState } from "./products/product.reducer";

export interface AppState {
    counter : counterState,
    cart : CartState,
    product: ProductState
}