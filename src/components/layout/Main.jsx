import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";

const Main = () => {
    return (
        <div>
        <Header></Header>
        <Outlet></Outlet>
        <Home></Home>
            
        </div>
    );
};

export default Main;