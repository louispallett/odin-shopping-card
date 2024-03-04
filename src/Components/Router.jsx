import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
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
        }
    ]);

    return <RouterProvider router={router} />;
}