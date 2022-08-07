import { ComponentState } from "react";
import ChartPage from "../views/pages/ChartPage";
import Contact from "../views/pages/Contact";
import Home from "../views/pages/Home";
import Login from "../views/pages/Login";
import ProductPage from "../views/pages/ProductPage";

interface Route {
    path: string,
    component: ComponentState
}

const routes:Route[] = [
    {path: '/', component: <Home/>},
    {path: '/san-pham', component: <ProductPage/>},
    {path: '/login', component: <Login/>},
    {path: '/lien-he', component: <Contact/>},
    {path: '/thong-ke', component: <ChartPage/>},
]

export default routes;