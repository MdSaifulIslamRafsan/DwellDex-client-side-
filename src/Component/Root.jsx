import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Root = () => {
    return (
        <div>
            <div className="w-full shadow-2xl z-50 fixed top-0">
                <Navbar></Navbar>
            </div>
            <main className="mt-10">
                
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;