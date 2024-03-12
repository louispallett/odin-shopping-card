import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Basket from "./Basket";
import Shop from "./Shop";
import Store from "./Store";

export default function Router() {
    const [itemsInBasket, setItemsInBasket] = useState([]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/store",
            element: <Store />,
            children: [
                {
                    path: "shop",
                    element: <Shop itemsInBasket={itemsInBasket} setItemsInBasket={setItemsInBasket} />,
                },
                {
                    path: "basket",
                    element: <Basket itemsInBasket={itemsInBasket} />,
                },
            ]
        },
    ]);

    return <RouterProvider router={router} />;
}