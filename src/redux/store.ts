import {configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./cards/cardsSlice"


export const store = configureStore({
    reducer: {
        cards: cardsReducer
    }
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch