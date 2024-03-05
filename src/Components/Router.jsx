import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Basket from "./Basket";
import Shop from "./Shop";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/shop",
            element: <Shop />
        },
        {
            path: "/shop/basket",
            element: <Basket />
        }
    ]);

    return <RouterProvider router={router} />;
}