
export const CALL_LOADING  = "CALL_LOADING"
export  const SET_LOADING  = "SET_LOADING"
export const CALL_ERROR = "CALL_ERROR"
export const SET_ERROR = "SET_ERROR"

export interface IShared {
    loading: boolean
    error: string | null
}

export interface IAction {
    type: string,
    payload?: any
}

const initialState: IShared = {
    loading: false,
    error: null
}

export default (state=initialState, action: IAction): IShared => {
    switch(action.type){
        case SET_LOADING:
            return {...state, loading: action.payload}
        case SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}