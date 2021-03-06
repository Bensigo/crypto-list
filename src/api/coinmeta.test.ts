import mockAxios from "./__mocks__/axios"
import coinInfo from "./coinmeta"


const result =  {
    urls: {
    website: [
    "https://bitcoin.org/"
    ],
    technical_doc: [
    "https://bitcoin.org/bitcoin.pdf"
    ],
    twitter: [ ],
    reddit: [
    "https://reddit.com/r/bitcoin"
    ],
    message_board: [
    "https://bitcointalk.org"
    ],
    announcement: [ ],
    chat: [ ],
    explorer: [
    "https://blockchain.coinmarketcap.com/chain/bitcoin",
    "https://blockchain.info/",
    "https://live.blockcypher.com/btc/"
    ],
    source_code: [
    "https://github.com/bitcoin/"
    ]
    },
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    slug: "bitcoin",
    description: `Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. 
    Powered by its users, it is a peer to peer payment network that requires no central authority to operate. On October 31st, 2008, an individual or group of individuals operating under the pseudonym "Satoshi Nakamoto" published the Bitcoin Whitepaper and described it as: "a purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.`,
    date_added: "2013-04-28T00:00:00.000Z",
    tags: [
    "mineable"
    ],
    platform: null,
    category: "coin"
}

describe("coin info api", () => {
    beforeEach(() => {
        mockAxios.get
        .mockImplementationOnce(() => Promise.resolve({
            data: result
        }))
            
    })
    it("check if res matches result", async () => {
        // return coin info
        const data = await coinInfo("1")
        expect(data).toEqual(result)
    })
    it("it should run once", () => {
        expect(mockAxios.get).toHaveBeenCalledTimes(1)
    })
    it("params should match.", () => {
        expect(mockAxios.get)
        .toHaveBeenCalledWith("/.netlify/functions/coin", {params: {id: "1"}})
    })
})