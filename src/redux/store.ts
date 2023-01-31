import {configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./cards/cardsSlice"
import resultsReducer from "./results/resultsSlice"

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        results: resultsReducer
    }
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch