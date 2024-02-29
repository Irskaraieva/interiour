import { Outlet } from "react-router-dom";
import { GoodsProvider } from "../../context/GodsContext";
import '../layout/layout.scss';
import Aside from "../aside/Aside";
import NavBtn from "../navBtn/NavBtn";
import Navbar from "../navBar/NavBar";
import SingleItemProd from "../singleItemProd/SingleItemProd";

export default function Layout() {

    return (
        <>
            <div className="content">
                <div className="content-wrapper">
                    <GoodsProvider>
                        <NavBtn />
                        <Aside />
                        <main className="main">                            
                            <Navbar />                        
                            <Outlet />
                            {/* <SingleItemProd /> */}
                        </main>
                    </GoodsProvider>
                </div>
            </div>

        </>
    );
};