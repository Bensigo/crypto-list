import {fork, all} from "redux-saga/effects"
import { callGetCryptosWatcher} from "./crypto"
import {callError, callLoading} from "./shared"

export default function* (){
    return yield all([
        fork(callLoading),
        fork(callError),
        fork(callGetCryptosWatcher)
    ])
}