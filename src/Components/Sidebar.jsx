import { Link } from "react-router-dom";

import companyLogo from "../assets/react.svg";
import exitLogo from "../assets/exit.svg";
import menuLogo from "../assets/menu.svg";

export default function Sidebar() {
    
    
    const showMenu = () => {
        const menu = document.querySelector(".sidebar");
        menu.style.display = "block";
    }

    const hideMenu = () => {
        const menu = document.querySelector(".sidebar");
        menu.style.display = "none";
    }

    return (
        <>
            <img src={menuLogo} alt="" className="menu-btn" onClick={showMenu}/>
            <div className="sidebar">
                <div className="sidebar-top">
                    <img src={companyLogo} alt="" />
                    <h2>Mikoshi</h2>
                    <img src={exitLogo} alt="" className="exit-btn" onClick={hideMenu}/>
                </div>
                <div className="sidebar-main">
                    <nav>
                        <ol>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/shop"><li>Shop</li></Link>
                            <Link to="/shop/basket"><li>My Basket</li></Link>
                        </ol>
                    </nav>
                </div>
                <div className="sidebar-bottom"></div>
            </div>
        </>
    )
}