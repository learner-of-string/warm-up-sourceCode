import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Radio } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, isUserLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isUserLoading) {
        return (
            <LiquidGlass className="h-1/2 w-1/2 mx-auto">
                <Radio
                    visible={true}
                    height={80}
                    width={80}
                    color={"#1d293d"}
                    ariaLabel="radio-loading"
                />
                <span className="text-3xl text-slate-800">
                    Connecting to the Server...
                </span>
            </LiquidGlass>
        );
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to={"/authenticate/signin"} state={location.pathname} />;
};

export default PrivateRoute;
