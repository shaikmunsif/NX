import { createReducer, on } from "@ngrx/store";
import { counterState } from "./counter.type";
import { decrement, increment, reset } from "./counter.action";

export const initialCounterState:counterState = {
    count : 10
}

export const counterReducer = createReducer(
    initialCounterState,
    on(increment, state=>({
            ...state, 
            count : state.count+1
        }
    )),
    on(decrement, state=> ({
        ...state,
        count : state.count-1
    })),
    on(reset, state=>({
        ...state,
        count : 0
    }))
)