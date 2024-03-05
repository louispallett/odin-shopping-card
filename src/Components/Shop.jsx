import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import errorLogo from "../assets/error.svg";
import loadingIcon from "../assets/loading.svg";
import Sidebar from "./Sidebar"

export default function Shop() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products", {mode: "cors"}
                );
                if(!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                const actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(null);
            }
        }
        getData();
    }, []);

    return (
        <>
            <Sidebar />
            <main>
                <div className="shop-title">
                    <h1>Our Products</h1>
                </div>
                <div className="cards-wrapper">
                {loading && (
                    <div className="main-page-wrapper">
                        <img src={loadingIcon} alt="" className="loading-icon" />
                    </div>
                )}
                {data && (
                    data.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                )}
                {error && (
                    <div className="main-page-wrapper">
                        <img src={errorLogo} alt="" className="error"/>
                        <p>{error}</p>
                        <p>Apologies - an error has occured trying to fetch data from the server. Please try again later.</p>
                    </div>
                )}
                </div>
            </main>
        </>
    )
}

function Card({ data }) {
    return (
        <>
            {data && (
                <div className="product-wrapper">
                    <h5>{data.title}</h5>
                    <img src={data.image} alt={data.title} />
                    <p className="description">{data.description}</p>
                    <div className="price-add-wrapper">
                        <p className="price">£{data.price}</p>
                        <div className="add-wrapper">
                            <button id="minus-btn">-</button>
                            <input type="text" defaultValue={1}/>
                            <button id="plus-btn">+</button>
                        </div>
                        <button className="add">Add</button>
                    </div>
                </div>
            )}
        </>
    )
}