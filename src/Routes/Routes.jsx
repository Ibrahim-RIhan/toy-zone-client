import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Pages/Home/Home";
import Blogs from "../components/Pages/Blogs/Blogs";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../components/Pages/AddToy/AddToy";
import MyToys from "../components/Pages/MyToys/MyToys";
import AllToys from "../components/Pages/AllToys/AllToys";


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
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: "/addToy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "/allToys",
                element: <PrivateRoute><AllToys></AllToys></PrivateRoute>
            },
            {
                path: "/myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
        ]
    },
]);

export default router;