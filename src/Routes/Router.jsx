import { createBrowserRouter } from "react-router-dom";
import Deshboard from "../Layout/Deshboard";
import Customers from "../Pages/Customers";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";

const router = createBrowserRouter([
    {
        path: '/', element: <Deshboard></Deshboard>, children: [
            {
                path: '/', element: <DashboardHome />
            },
            {
                path: '/dashboard', element: <DashboardHome />
            },
            {
                path: '/customers', element: <Customers />
            },
        ]
    }
])

export default router;