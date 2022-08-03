import { ComponentState } from "react";
import Home from "../views/pages/Home";

interface Route {
    path: string,
    component: ComponentState
}

const routes:Route[] = [
    {path: '/', component: <Home/>}
]

export default routes;