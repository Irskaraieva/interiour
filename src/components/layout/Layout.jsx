import { Outlet } from "react-router-dom";
import { GoodsProvider } from "../../context/GodsContext";
import '../layout/layout.scss';
import Aside from "../aside/Aside";
import NavBtn from "../navBtn/NavBtn";
import Navbar from "../navBar/NavBar";
import { CartContextProvider } from "../../context/CartContext";

export default function Layout() {

    return (
        <>
            <div className="content">
                <div className="content-wrapper">
                    <CartContextProvider>
                        <GoodsProvider>

                            <main className="main">
                                <NavBtn />
                                <Navbar />
                                <Outlet />
                            </main>
                        </GoodsProvider>
                    </CartContextProvider>

                </div>
            </div>

        </>
    );
};