import cryptoReducer,{ SET_COIN, SET_CRYPTOS} from "./cryptos"

const result = [ 
    {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    slug: "bitcoin",
    cmc_rank: 5,
    num_market_pairs: 500,
    circulating_supply: 16950100,
    total_supply: 16950100,
    max_supply: 21000000,
    last_updated: "2018-06-02T22:51:28.209Z",
    date_added: "2013-04-28T00:00:00.000Z",
    tags: ["mineable"],
    platform: null,
    quote: {
    USD: {
    price: 9283.92,
    volume_24h: 7155680000,
    percent_change_1h: -0.152774,
    percent_change_24h: 0.518894,
    percent_change_7d: 0.986573,
    market_cap: 158055024432,
    last_updated: "2018-08-09T22:53:32.000Z"
    },
    BTC: {
    price: 1,
    volume_24h: 772012,
    percent_change_1h: 0,
    percent_change_24h: 0,
    percent_change_7d: 0,
    market_cap: 17024600,
    last_updated: "2018-08-09T22:53:32.000Z"
    }
  }
 }
]

describe("Crypto Reducer", () => {
    it("should return the initial state", () => {
        const initialState = {
            cryptos: [],
            coin: null,
            coinMeta: null
        }
        const action = {
            type: "",
            payload: ""
        }
        expect(cryptoReducer(undefined, action)).toEqual(initialState)
    })
    it("should change the cryptos state", () => {
        const action= {
            type: SET_CRYPTOS,
            payload: result
        }
        expect(cryptoReducer(undefined, action))
            .toEqual({coin: null, coinMeta: null,cryptos: result})
    })
    it("should change the state of coin", () => {
        const initialState = {
            cryptos: result,
            coin: null,
            coinMeta: null
        }
        const action =  {
            type: SET_COIN,
            payload: "Bitcoin"
        }
        expect(cryptoReducer(initialState, action))
            .toEqual({coin: result[0], cryptos: result, coinMeta: null})
    })
})




