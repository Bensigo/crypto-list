import { lazy, LazyExoticComponent, FunctionComponent} from "react"

interface Route {
    path: string 
    exact: boolean
    component: LazyExoticComponent<FunctionComponent<any>>
}


const routes: Array<Route> = [
    {
        path: "/",
        exact: true,
        component: lazy(() => import("./pages/index"))
    },
    {
        path: "/:coin",
        exact: true,
        component: lazy(() => import("./pages/detail"))
    }
]

export default routes