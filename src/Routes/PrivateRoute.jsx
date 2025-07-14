import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Radio } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import LiquidGlass from "../Components/ui/LiquidGlass";

const PrivateRoute = ({ children }) => {
    const { user, isUserLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isUserLoading) {
        return (
            <div className="h-1/2 md:w-1/2 w-3/4 mx-auto">
                <LiquidGlass className="justify-center items-center p-14">
                    <Radio
                        visible={true}
                        height={80}
                        width={80}
                        color={"#1d293d"}
                        ariaLabel="radio-loading"
                    />
                    <span className="md:text-3xl text-xl text-slate-800">
                        Connecting to the Server...
                    </span>
                </LiquidGlass>
            </div>
        );
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to={"/authenticate/signin"} state={location.pathname} />;
};

export default PrivateRoute;
