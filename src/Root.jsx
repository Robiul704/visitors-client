import { Outlet } from "react-router-dom";
import Navber from "./components/Navber/Navber";
import Footer from "./components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;