import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[url(./assets/bg.jpg)] bg-no-repeat bg-cover bg-center max-h-screen max-w-screen pt-20">
            <Outlet />
        </div>
    );
};

export default Layout;
