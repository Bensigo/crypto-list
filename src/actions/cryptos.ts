import {CALL_COIN, CALL_GET_CRYPTOS} from "../reducers/cryptos"
import { IAction } from "../reducers/shared";



export function getCryptos(index: number): IAction{
    return {
        type: CALL_GET_CRYPTOS,
        payload: index
    }
}

export function getCoin(name: string): IAction {
    return {
        type: CALL_COIN,
        payload: name
    }
}