import { RouterProvider } from "react-router-dom";
import router from "../Routes/Router";
import { useEffect } from "react";
import AOS from "aos";

const WrapWithAOS = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return <RouterProvider router={router} />;
};

export default WrapWithAOS;
