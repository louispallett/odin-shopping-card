import { Link } from "react-router-dom"

import companyLogo from "../assets/react.svg"

export default function Sidebar() {
    return (
    <div className="sidebar">
        <div className="sidebar-top">
            <img src={companyLogo} alt="" />
            <h2>Mikoshi</h2>
        </div>
        <div className="sidebar-main">
            <nav>
                <ol>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="shop"><li>Shop</li></Link>
                    <Link to="/"><li>My basket</li></Link>
                </ol>
            </nav>
        </div>
        <div className="sidebar-bottom"></div>
    </div>
    )
}