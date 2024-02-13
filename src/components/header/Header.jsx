import '../header/header.scss';
import Navbar from "../navBar/NavBar";
import NavBtn from "../navBtn/NavBtn";

export default function Header() {
    return (
        <header className="header">

            <Navbar />
            <NavBtn />
        </header>
    )
}