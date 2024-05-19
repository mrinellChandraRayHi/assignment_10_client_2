import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div className="max-w-6xl mx-auto p-5">
            <div><Nav/></div>
            <div className="min-h-[calc(100vh-284px)]"><Outlet/></div>
            <div><Footer/></div>
        </div>
    );
};

export default Layout;