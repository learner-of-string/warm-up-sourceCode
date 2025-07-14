import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home/Home";
import Campaigns from "../Pages/Campaigns/Campaigns";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import AuthLayout from "../Pages/Auth/AuthLayout";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UpdateProfile from "../Pages/Dashboard/UpdateProfile";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/campaigns",
                element: <Campaigns />,
            },
            {
                path: "/donate/:slug",
                element: (
                    <PrivateRoute>
                        <DonationDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/authenticate",
                element: <AuthLayout />,
                children: [
                    {
                        path: "/authenticate/signin",
                        element: <SignIn />,
                    },
                    {
                        path: "/authenticate/signup",
                        element: <SignUp />,
                    },
                ],
            },
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
            {
                path: "/update-profile",
                element: (
                    <PrivateRoute>
                        <UpdateProfile />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
