import * as cryptoActions from "./cryptos"
import {CALL_GET_CRYPTOS, CALL_COIN} from "../reducers/cryptos"


describe("Test Crypto Actions", () => {
    it("check if getCryptos don't take input", () => {
        const expectation = {
           type: CALL_GET_CRYPTOS,
           payload: "hello"
        } 
        expect(cryptoActions.getCryptos()).not.toBe(expectation)
    })
    it("check if getCoin take a name parameter", () => {
        const expectation = {
            type: CALL_COIN,
            payload: "Bitcoin"
        }
        expect(cryptoActions.getCoin("Bitcoin")).toEqual(expectation)
    })
})