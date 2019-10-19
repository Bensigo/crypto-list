import {fork, all} from "redux-saga/effects"
import { callGetCryptosWatcher, callGetCoin, callCoinMetaData} from "./crypto"
import {callError, callLoading} from "./shared"

export default function* (){
    return yield all([
        fork(callLoading),
        fork(callError),
        fork(callGetCryptosWatcher),
        fork(callGetCoin),
        fork(callCoinMetaData)
    ])
}