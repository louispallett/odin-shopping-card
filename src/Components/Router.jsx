import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Basket from "./Basket";
import Shop from "./Shop";
import Store from "./Store";

export default function Router() {
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
                    element: <Shop />,
                },
                {
                    path: "basket",
                    element: <Basket />,
                },
            ]
        },
    ]);

    return <RouterProvider router={router} />;
}