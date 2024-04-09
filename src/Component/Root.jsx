import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Root = () => {
    return (
        <div>
         
                <nav className="h-[68px]">
                    <Navbar></Navbar>
                </nav>
            <main className="">
                
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;