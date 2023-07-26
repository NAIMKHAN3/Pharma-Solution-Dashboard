import { createBrowserRouter } from "react-router-dom";
import Deshboard from "../Layout/Deshboard";

const router = createBrowserRouter([
    {
        path: '/', element: <Deshboard></Deshboard>, children: [{

        }]
    }
])

export default router;