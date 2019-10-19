import React from 'react';
import ErrorBountry from "./index"
import {  configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import Skeletonloading from "../CryptoListSekleton"
import configureStore from "redux-mock-store"

configure({adapter: new Adapter()});
describe("<ErrrorBountry/>", () => {
    it("check if snapshot match and error equal text",() => {
        const mockStore = configureStore()
        const store = mockStore({
            crypto: {
                coinMeta: null,
                coin: null,
                cryptos: []
            },
            shared: {
                loading: false,
                error: "Network error"
            }
        })
        // set error in state 
        const component = mount( 
            <Provider  store={store}>
                <Router>
                <React.Suspense fallback={<Skeletonloading/>}>
                    <ErrorBountry>
                       <h1>hello</h1>
                    </ErrorBountry>
                </React.Suspense>
                </Router>
            </Provider>       
            
        )
        expect(component).toMatchSnapshot()
        expect(component.props().store.getState().shared.error)
            .toEqual("Network error")
    } )
})