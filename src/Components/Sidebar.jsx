import { Link } from "react-router-dom";

import companyLogo from "../assets/react.svg";
import cartLogo from "/cart.svg";
import exitLogo from "../assets/exit.svg";
import homeLogo from "../assets/home.svg";
import menuLogo from "../assets/menu.svg";
import shopLogo from "../assets/shop.svg"

export default function Sidebar() {
    
    
    const showMenu = () => {
        const menu = document.querySelector(".sidebar");
        menu.style.display = "flex";
    }

    const hideMenu = () => {
        const menu = document.querySelector(".sidebar");
        menu.style.display = "none";
    }

    return (
        <>
            <img src={menuLogo} alt="" className="menu-btn" onClick={showMenu}/>
            <div className="sidebar">
                <img src={exitLogo} alt="" className="exit-btn" onClick={hideMenu}/>
                <div className="sidebar-top">
                    <img src={companyLogo} alt="" />
                    <h2>Mikoshi</h2>
                </div>
                <div className="sidebar-main">
                    <nav>
                        <ol>
                            <Link to="/">
                                <img src={homeLogo} alt="" />
                                <li>Home</li>
                            </Link>
                            <Link to="/store/shop">
                                <img src={shopLogo} alt="" />
                                <li>Shop</li>
                            </Link>
                            <Link to="/store/basket">
                                <img src={cartLogo} alt="" />
                                <li>My Basket</li>
                            </Link>
                        </ol>
                    </nav>
                </div>
                <div className="sidebar-bottom"></div>
            </div>
        </>
    )
}