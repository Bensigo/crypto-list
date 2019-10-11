import {put , takeEvery} from "redux-saga/effects"
import {
    IAction, 
    CALL_LOADING, 
    CALL_ERROR, 
    SET_ERROR,
     SET_LOADING
} from "../reducers/shared"


function* handleLoading(action: IAction){
    yield put({type: SET_LOADING, payload: action.payload})
}

export function* callLoading(){
    yield takeEvery(CALL_LOADING, handleLoading)
}

function* handleError(action: IAction){
    yield put({type: SET_ERROR, payload: action.payload})
}

export function* callError(){
    yield takeEvery(CALL_ERROR, handleError)
}

