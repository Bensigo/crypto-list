import mockAxios from "./__mocks__/axios"
import getCoinLatest from "./coinLatest"

const result = {
    "1": {
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
        }
      }
     }
}

describe("Latest Coin API", () => {
    beforeEach(() => {
        // make mock of data
        mockAxios.get.mockImplementationOnce(() => Promise
         .resolve({
            data: { 
                data: result
            }
         }))
    })
    it("res should equal result", async () => {
        const res = await getCoinLatest("1")
        expect(res.data).toEqual(result)
    })
})