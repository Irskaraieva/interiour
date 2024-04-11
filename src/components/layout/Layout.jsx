import { Outlet } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { GoodsProvider } from "../../context/GodsContext";
import '../layout/layout.scss';
import NavBtn from "../navBtn/NavBtn";
import Navbar from "../navBar/NavBar";
import { CartContextProvider } from "../../context/CartContext";
import { Suspense } from "react";

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
                                <Suspense fallback={<SyncLoader
                                    size={34}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                    speedMultiplier=".7"
                                    className="loader"
                                    color="#A6A6A6"
                                    margin="10px"
                                />}>
                                    <Outlet />
                                </Suspense>
                            </main>

                        </GoodsProvider>
                    </CartContextProvider>
                </div>

            </div>

        </>
    );
};