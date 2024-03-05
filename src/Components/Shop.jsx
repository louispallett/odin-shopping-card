import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <div className="cards-wrapper">
                <div className="shop-title">
                    <h1>Our Products</h1>
                </div>
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
                    <p>Oh no, an error occured!</p>
                )}
            </div>
        </>
    )
}

function Card({ data }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="product-wrapper">
            {data && (
                <>
                    <h5>{data.title}</h5>
                    <img src={data.image} alt={data.title} />
                    <p className={`description ${expanded ? 'expanded' : ''}`}>
                        {data.description}
                    </p>
                    {data.description.length > 300 && (
                        <a onClick={toggleExpanded}>
                            {expanded ? 'Less...' : 'More...'}
                        </a>
                    )}
                    <div className="price-add-wrapper">
                        <p className="price">£{data.price}</p>
                        <div className="add-wrapper">
                            <button id="minus-btn">-</button>
                            <input type="text" defaultValue={1}/>
                            <button id="plus-btn">+</button>
                        </div>
                    </div>
                    
                </>
            )}
            {/* loading and error sections can be added later */}
        </div>
    )
}