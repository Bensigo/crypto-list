import mockAxios from "./__mocks__/axios"
import getCrypto from "./crypto"
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

describe("API Test", () => {
    beforeEach(() => {
        mockAxios.get.mockImplementationOnce(() => 
        Promise.resolve({
            data: {
                data: result
            }
        }))
    })
    it("should return data", async() => {
        const data = await getCrypto(1)
        expect(data.data).toEqual(result)
    })
    it("should call the enpoint once", () =>{
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    })
    it("should recieve parameter", () => {
        const uri = "/.netlify/functions/cryptos"

        expect(mockAxios.get).toHaveBeenCalledWith(uri, {params: {index: 1}})
    })
})