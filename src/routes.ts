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
        component: lazy(() => import("./pages/Index"))
    },
    {
        path: "/:coin",
        exact: true,
        component: lazy(() => import("./pages/Detail"))
    }
]

export default routes