import {
    CALL_GET_CRYPTOS,
    SET_CRYPTOS
} from "../reducers/cryptos"
import {takeLatest, call, put} from "redux-saga/effects"
import store from "../store"
import { callLoading, callError} from "../actions/shared"
import { IAction } from "../reducers/shared"
import getCryptos from "../api/crypto"

function* getCryptosWorker(action: IAction) {
    /**
     * get a list of all cryto information and 
     * update the app state 
     */
    try {
        yield store.dispatch(callLoading(true))
        yield store.dispatch(callError(null))
        // call api
        const cryptos = yield call(getCryptos, action.payload)
        yield store.dispatch(callLoading(false))
        yield put({type: SET_CRYPTOS, payload: cryptos})
        
    }catch(err){
        yield store.dispatch(callLoading(false))
        yield store.dispatch(callError(err.message))
    }
}


export function* callGetCryptosWatcher(){
    yield takeLatest(CALL_GET_CRYPTOS, getCryptosWorker)
}