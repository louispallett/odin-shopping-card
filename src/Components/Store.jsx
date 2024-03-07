import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Store() {

    return (
        <>
            <Sidebar />
            <main>
                <div className="shop-title">
                    <h1>Our Store</h1>
                </div>
                <Outlet />
            </main>  
        </>
    )
}