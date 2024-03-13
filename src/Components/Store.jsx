import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Store() {

    return (
        <>
            <Sidebar />
            <div className="page">
                <div className="shop-title">
                    <h1>Our Store</h1>
                </div>
                <ConfirmAdded />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}

function ConfirmAdded() {
    return (
        <div className="confirm-wrapper">
            <h2>Item Added!</h2>
        </div>
    )
}