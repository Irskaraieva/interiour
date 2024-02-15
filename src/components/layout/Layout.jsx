import { Outlet } from "react-router-dom";
import '../layout/layout.scss';
import Aside from "../aside/Aside";
import MainPage from "../mainPage/MainPage";

export default function Layout() {
    return (
        <>
        <div className="content">
            <div className="content-wrapper">
            <Aside />            
            <MainPage />
            <Outlet /> 
            </div>
            
        </div>
        
        </>
    );
};