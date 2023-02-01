import {configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./cards/cardsSlice"
import resultsReducer from "./results/resultsSlice"
import createSagaMiddleware from 'redux-saga'
import {watcher} from "./sagas/mySaga";
import {all, fork} from "redux-saga/effects";

export const sagaMiddleware = createSagaMiddleware()

export function* rootSaga() {
    yield all([fork(watcher)])
}

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        results: resultsReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch