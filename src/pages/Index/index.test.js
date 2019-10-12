import React from "react"
import Index from "./index.tsx"
import Enzyme,{ mount } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import configureStore from "redux-mock-store"
import { Provider } from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import Skeletonloading from "../../components/CryptoListSekleton/"

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



Enzyme.configure({ adapter: new Adapter() })
describe("List", () => {
    const mockStore = configureStore()
    const store = mockStore({
        crypto: {
            coinMeta: null,
            coin: null,
            cryptos: result
        },
        shared: {
            loading: false,
            error: null
        }
    })
    const component = mount(
        <Provider store={store}>
            <Router>
                <React.Suspense fallback={<Skeletonloading/>}>
                     <Index ></Index>
                </React.Suspense>
            </Router>
        </Provider>
    );

    it("should render correctly", () => {   
       expect(component).toMatchSnapshot()
    })
    it("have a lenght of one and check if cryptos is equal result", () => {
        const componentProps = component.props().store.getState().crypto.cryptos;
       expect(componentProps).toHaveLength(1)
       expect(componentProps).toEqual(result)
    })
})