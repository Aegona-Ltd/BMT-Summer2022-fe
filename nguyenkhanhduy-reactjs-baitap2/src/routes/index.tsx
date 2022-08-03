import { ComponentState } from "react";
import Contact from "../views/pages/Contact";
import Home from "../views/pages/Home";
import Login from "../views/pages/Login";

interface Route {
    path: string,
    component: ComponentState
}

const routes:Route[] = [
    {path: '/', component: <Home/>},
    {path: '/home', component: <Home/>},
    {path: '/login', component: <Login/>},
    {path: '/lien-he', component: <Contact/>}
]

export default routes;