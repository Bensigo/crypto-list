import {IAction} from "./shared"

export const CALL_GET_CRYPTOS = "CALL_GET_CRYPTOS"
export const SET_CRYPTOS = "SET_CRYPTOS"
export const CALL_COIN = "CALL_COIN"
export const SET_COIN = "SET_COIN"

type MarketValue = {
    price: number,
    volume_24h: number,
    percent_change_1h: number,
    percent_change_24h: number,
    percent_change_7d: number,
    market_cap: number,
    last_updated: string
}
type Quote= {
    USD: MarketValue,
    BTC: MarketValue
}

type Coin = {
    id: string,
    name: string,
    symbol: string,
    slug: string,
    cmc_rank: number,
    num_market_pairs: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    last_updated: string,
    date_added: string,
    tags: Array<string>
    platform: string | null,
    quotes: Quote
}

export interface  ICrypto {
    cryptos: Array<Coin>| [],
    coin: Coin | null
}

const initialState: ICrypto = {
    cryptos: [],
    coin: null
}

export default (state=initialState, action: IAction): ICrypto => {
    /**
     *  A pure function with no side effect that return state
     *  for list of  cryptos and a coin
     */
    switch(action.type){
        case SET_CRYPTOS:
            return {...state, cryptos: action.payload}
        case SET_COIN:
            const coins = [...state.cryptos]
            const coin = coins.filter(coin => coin.name == action.payload)[0]
            return {...state, coin}
        default:
            return state
    }
}