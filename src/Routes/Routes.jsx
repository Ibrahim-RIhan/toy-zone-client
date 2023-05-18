import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Pages/Home/Home";
import Blogs from "../components/Pages/Blogs/Blogs";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blogs",
                element: <PrivateRoute><Blogs></Blogs>
                </PrivateRoute>
            },
        ]
    },
]);

export default router;