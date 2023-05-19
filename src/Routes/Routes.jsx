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
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import ToyDetails from "../components/Pages/AllToys/ToyDetails";
import UpdateToy from "../components/Pages/MyToys/UpdateToy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <Blogs></Blogs>
            },
            {
                path: "/addToy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>
            },
            {
                path: "/allToys/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
            },
            {
                path: "/myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,

            },
            {
                path: "/updateToy/:id",
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
            }



        ]
    },
]);

export default router;