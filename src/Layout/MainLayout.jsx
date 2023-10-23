import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />   
            <Footer />
        </>
    );
};

export default MainLayout;