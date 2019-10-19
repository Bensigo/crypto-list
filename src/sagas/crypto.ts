import {
    CALL_GET_CRYPTOS,
    SET_CRYPTOS,
    SET_COIN,
    CALL_COIN,
    SET_METADATA,
    CALL_GET_METADATA
} from "../reducers/cryptos"
import {takeLatest, call, put} from "redux-saga/effects"
import store from "../store"
import { callLoading, callError} from "../actions/shared"
import { IAction } from "../reducers/shared"
import getCryptos from "../api/crypto"
import getCoin from "../api/coinLatest"
import getCoinMetadata from "../api/coinmeta"

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


function* getCoinLatest(action:IAction){
    /*
     * get the latest info of a particular coin using the coin id
     **/
    try {
        yield store.dispatch(callLoading(true))
        yield store.dispatch(callError(null))
        // call api
        console.log(action.payload)
        const coin = yield call(getCoin, action.payload); 
        yield store.dispatch(callLoading(false))
        console.log(coin)
        yield put({type: SET_COIN, payload: coin})

    }catch(err){
        yield store.dispatch(callLoading(false))
        yield store.dispatch(callError(err.message)) 
    }
}


function* getCoinMeta(action: IAction) {
    /*
        get coin metadata using coin id  
    **/
   try {
    yield store.dispatch(callLoading(true))
    yield store.dispatch(callError(null))
    // call api
    const metadataRes = yield call(getCoinMetadata, action.payload)
    console.log(metadataRes)
    yield store.dispatch(callLoading(false))
    yield put({type: SET_METADATA, payload: metadataRes})

   }catch(err){
    yield store.dispatch(callLoading(false))
    yield store.dispatch(callError(err.message))   
   }
}

export function* callGetCryptosWatcher(){
    yield takeLatest(CALL_GET_CRYPTOS, getCryptosWorker)
}

export function* callGetCoin(){
    yield takeLatest(CALL_COIN, getCoinLatest);
}

export function* callCoinMetaData(){
    yield takeLatest(CALL_GET_METADATA, getCoinMeta);
}