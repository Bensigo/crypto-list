import * as sharedActions from "./shared"
import {CALL_LOADING, CALL_ERROR} from "../reducers/shared"



describe("Test Shared Actions", () => {
    it("check if callLoading receive a boolean and return type of IAction", () => {
        const expectation = {
            type: CALL_LOADING,
            payload: true
        }
        expect(sharedActions.callLoading(true))
            .toEqual(expectation)
    })
    it("check if callError recive a string as parameter and return type IAction", () => {
        const expectation = {
            type: CALL_ERROR,
            payload: "Network Connection Error"
        }
        expect(sharedActions.callError("Network Connection Error"))
            .toEqual(expectation)
    })
})