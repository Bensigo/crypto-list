import React from "react"
import renderer from "react-test-renderer"
import {Provider} from "react-redux"
import store from "../../store"
import List from "./index.tsx"


describe("List", () => {

    it("render component", () => {
       const component = renderer.create(
           <Provider store={store}>
               <List></List>
           </Provider>
       );
       const tree = component.toJSON();
       expect(tree).toMatchSnapshot()
    })
})