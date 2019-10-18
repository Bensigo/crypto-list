import * as cryptoActions from "./cryptos"
import {CALL_GET_CRYPTOS, CALL_COIN, CALL_GET_METADATA} from "../reducers/cryptos"


describe("Test Crypto Actions", () => {
    it("check if getCryptos match input", () => {
        const expectation = {
           type: CALL_GET_CRYPTOS,
           payload: 1
        } 
        expect(cryptoActions.getCryptos(1)).toEqual(expectation)
    })
    it("check if getCoin take a name parameter", () => {
        const expectation = {
            type: CALL_COIN,
            payload: "1"
        }
        expect(cryptoActions.getCoin("1")).toEqual(expectation)
    })
    it("check if getCoinMeta take a string", () => {
        const expectation = {
            type: CALL_GET_METADATA,
            payload: "1"
        }
        expect(cryptoActions.getCoinMeta("1")).toEqual(expectation)
    })
})