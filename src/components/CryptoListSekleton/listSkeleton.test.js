import React from "react"
import renderer from "react-test-renderer"
import ListSkeleton from "./index"



describe("ListSkeleton", () => {

    it("render component", () => {
       const component = renderer.create(<ListSkeleton></ListSkeleton>);
       const tree = component.toJSON();
       expect(tree).toMatchSnapshot()
    })
})