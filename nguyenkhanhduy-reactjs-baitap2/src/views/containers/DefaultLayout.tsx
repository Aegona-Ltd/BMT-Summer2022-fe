import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import routes from "../../routes";

function DefaultLayout() {
    return (
        <>
            <Header />
            <Routes>
                {
                    routes.map((route, index) =>
                        <Route path={route.path} element={route.component} key={index} />
                    )
                }
            </Routes>
            <Footer/>
            <ToastContainer 
                    position="top-right"
                />
            
        </>
    );
}

export default DefaultLayout;