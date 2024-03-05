import { Link } from "react-router-dom"

import mainLogo from "../assets/main-logo.svg";
import Sidebar from "./Sidebar";

export default function App() {

    return (
        <>
            <Sidebar />
            <div className="main-page-wrapper">
                <section className="home-logo">
                    <div className="main-top">
                        <img src={mainLogo} alt="" />
                        <h1>Mikoshi Books</h1>
                    </div>
                    <div className="main-bottom">
                        <h4>Welcome to the future of academic publishing</h4>
                    </div>
                </section>
            </div>
        </>
    )
}