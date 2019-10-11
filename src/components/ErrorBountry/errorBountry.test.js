import React from 'react';
import ErrorBountry from "./index"
import {  configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from "react-redux"
import store from "../../store"
import {callError} from "../../actions/shared"

describe("<ErrrorBountry/>", () => {
    beforeAll(()=> store.dispatch(callError("bad network")))
    configure({adapter: new Adapter()});
    it("check if snapshot match and error equal text",() => {
        const error = "bad network"
        const Randomcomp = () => {
            throw new Error(error)
        }
        // set error in state 
        const component = mount( 
            <Provider store={store}>
                <ErrorBountry>
                    <Randomcomp  />
                </ErrorBountry>
            </Provider>       
            
        )
        expect(component.html()).toContain(error)
    } )
})