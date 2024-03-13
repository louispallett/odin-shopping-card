import mainLogo from "../assets/main-logo.svg";
import Sidebar from "./Sidebar";

export default function App() {

    return (
        <>
            <Sidebar />
            <div className="page">
                <div className="shop-title"></div>
                <div className="main-page-wrapper">
                    <section>
                        <div className="main-top">
                            <img src={mainLogo} alt="" />
                            <h1>Mikoshi Online</h1>
                        </div>
                        <div className="main-bottom">
                            <h4>Come and consume our products, consumer!</h4>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}