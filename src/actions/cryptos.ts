import {CALL_COIN, CALL_GET_CRYPTOS, CALL_GET_METADATA} from "../reducers/cryptos"
import { IAction } from "../reducers/shared";



export function getCryptos(index: number): IAction{
    return {
        type: CALL_GET_CRYPTOS,
        payload: index
    }
}

export function getCoin(id: string): IAction {
    return {
        type: CALL_COIN,
        payload: id
    }
}

export function getCoinMeta(id: string): IAction{
    return {
        type: CALL_GET_METADATA,
        payload: id
    }
}