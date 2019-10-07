import  { combineReducers} from "redux"
import shared, {IShared} from"./shared"
import crypto,{ICrypto} from "./cryptos"


// app state interface
export interface IState {
    crypto: ICrypto,
    shared: IShared
}


const reducer = combineReducers({
    crypto,
    shared
})

export default reducer;