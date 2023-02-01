import {call, put, takeEvery} from 'redux-saga/effects'
import {setData} from "../results/resultsSlice";
import {todosAPI} from "../../api/todoAPI";
import {LOAD_TODOS} from "../results/actionsTypes";

type ReceivedDataType = {
    data: Array<{ title: string, id: number }>
}

export function* worker() {
    try {
        const data: ReceivedDataType = yield call(todosAPI.getTodos)
        yield put(setData(data.data))
    } catch (e) {
        console.log(e)
    }
}

export function* watcher() {
    yield takeEvery(LOAD_TODOS, worker)
}