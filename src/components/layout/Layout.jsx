import { Outlet } from "react-router-dom";
import '../layout/layout.scss';
import Aside from "../aside/Aside";
import MainPage from "../mainPage/MainPage";
import NavBtn from "../navBtn/NavBtn";

export default function Layout() {
    return (
        <>
        <div className="content">
            <div className="content-wrapper">
            <NavBtn />
            <Aside />            
            <MainPage />
            <Outlet /> 
            </div>            
        </div>
        
        </>
    );
};