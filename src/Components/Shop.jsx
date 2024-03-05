import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar"

export default function Shop() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
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
            {data && (<div>{data[0].title}</div>)}
        </>
    )
}

function Card() {
    return (
        <div className="product-wrapper">

        </div>
    )
}