import { Outlet } from "react-router-dom";
import { GoodsProvider } from "../../context/GodsContext";
import '../layout/layout.scss';
import Aside from "../aside/Aside";
import NavBtn from "../navBtn/NavBtn";
import Navbar from "../navBar/NavBar";

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
                        </main>
                    </GoodsProvider>
                </div>
            </div>

        </>
    );
};