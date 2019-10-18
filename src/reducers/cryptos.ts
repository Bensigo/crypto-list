import {IAction} from "./shared"

export const CALL_GET_CRYPTOS = "CALL_GET_CRYPTOS"
export const SET_CRYPTOS = "SET_CRYPTOS"
export const CALL_COIN = "CALL_COIN"
export const SET_COIN = "SET_COIN"
export const CALL_GET_METADATA = "CALL_GET_METADATA"
export const SET_METADATA = "SET_METADATA"


type MarketValue = {
    price: number,
    volume_24h: number,
    percent_change_1h: any,
    percent_change_24h: any,
    percent_change_7d: any,
    market_cap: number,
    last_updated: string
}
type Quote= {
    USD: MarketValue,
}

export type Coin = {
    id: number,
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
    quote: Quote
}

interface ICoinMeta {
    urls: {
        website: Array<string>,
        technical_doc: Array<string>,
        twitter: Array<string>,
        reddit: Array<string>,
        message_board: Array<string>,
        announcement: Array<any>,
        chat: Array<any>,
        explorer: Array<string>,
        source_code: Array<string>
        },
        logo: string
        id: number,
        name: string,
        symbol: string,
        slug: string,
        description: string
        date_added: string,
        tags: Array<string>,
        platform: string| null,
        category: string
}


export interface  ICrypto {
    cryptos: Array<Coin>| [],
    coin: Coin | null,
    coinMeta: ICoinMeta| null
}

const initialState: ICrypto = {
    cryptos: [],
    coin: null,
    coinMeta: null
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
            return {...state, coin: action.payload}
        case SET_METADATA:
            return {...state, coinMeta: action.payload}
        default:
            return state
    }
}