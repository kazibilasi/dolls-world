import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Main = () => {
    return (
        <div className=" top-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;