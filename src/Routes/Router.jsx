import { createBrowserRouter } from "react-router-dom";
import Deshboard from "../Layout/Deshboard";
import Customers from "../Pages/Customers";

const router = createBrowserRouter([
    {
        path: '/', element: <Deshboard></Deshboard>, children: [
            {
                path: '/customers', element: <Customers />
            }
        ]
    }
])

export default router;