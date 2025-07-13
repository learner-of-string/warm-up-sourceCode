import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
import LiquidGlass from "../../Components/ui/LiquidGlass";

import SignIn from "./SignIn";

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="flex flex-col items-center">
                <LiquidGlass className="px-8 py-10 flex-col w-11/12 md:w-[420px] shadow-2xl">
                    <Outlet />
                </LiquidGlass>
            </div>
            <Footer />
        </div>
    );
};

export default AuthLayout;
