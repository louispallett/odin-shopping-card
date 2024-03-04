import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Cart from "./Cart";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/cart",
            element: <Cart />
        }
    ]);

    return <RouterProvider router={router} />;
}