import sharedReducer from "./shared"
import {SET_LOADING, SET_ERROR} from "./shared"


describe("Shared Reducer", () => {
    it("should return it initial state", () => {
        const initialState = {
            loading: false,
            error: null
        }
        const action = {
            type: "",
            payload: ""
        }
        expect(sharedReducer(undefined, action))
            .toEqual(initialState)
    })
    it("should change the state of loading", () => {
        const returnState = {
            loading: true,
            error: null
        }
        const action = {
            type: SET_LOADING,
            payload: true
        } 
        expect(sharedReducer(undefined, action))
            .toEqual(returnState)
    })
    it("should change the state of error", () => {
        const returnState = {
            loading: false,
            error: "failed getting data"
        }
        const action = {
            type: SET_ERROR,
            payload: "failed getting data"
        } 
        expect(sharedReducer(undefined, action))
            .toEqual(returnState)
    })
})