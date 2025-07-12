import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home/Home";
import Campaigns from "../Pages/Campaigns/Campaigns";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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
                path: "/donation/:slug",
                element: <DonationDetails />,
            },
        ],
    },
]);

export default router;
