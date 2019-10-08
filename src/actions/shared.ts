import { IAction, CALL_ERROR, CALL_LOADING} from "../reducers/shared"


export function callLoading(payload: boolean): IAction {
    return {
        type: CALL_LOADING,
        payload
    }
}

export function callError(error: string): IAction {
    return {
        type: CALL_ERROR,
        payload: error
    }
}

