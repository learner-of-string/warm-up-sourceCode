import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import LiquidGlass from "../../Components/ui/LiquidGlass";
import { Edit } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import { toast } from "sonner";

const Dashboard = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("Successfully Logged Out!");
                navigate("/");
            })
            .catch((error) => {
                console.log(error.code, error.massage);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="py-8 space-y-4">
                <div className="flex justify-center items-center">
                    <div className="p-4 border-2 border-white/30 backdrop-blur-xs rounded-full inline-flex">
                        <img
                            src={user?.photoURL}
                            alt={`profile photo of ${user?.email}`}
                            className="rounded-full size-24 object-cover"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-slate-800">
                        {user?.displayName && `Hey, ${user?.displayName}!`}
                    </h1>
                    <p className="text-slate-800 text-xl hover:underline cursor-pointer flex items-center gap-1 justify-center">
                        {user?.emailVerified && (
                            <img
                                src="https://img.icons8.com/?size=100&id=F8sJNbgWH2bt&format=png&color=000000"
                                alt="verified"
                                className="size-5"
                            />
                        )}{" "}
                        {user?.email}
                    </p>
                </div>
                <div className="w-10/12 md:w-lg mx-auto">
                    <LiquidGlass className="w-full p-5 flex-col">
                        <p className="py-2.5 border-b border-white/30 w-full">
                            Name: {user?.displayName || "Who I am🥴"}
                        </p>
                        {user?.phoneNumber && (
                            <p className="py-2.5 border-b border-white/30 w-full">
                                Phone Number: {user?.phoneNumber}
                            </p>
                        )}
                        <p className="py-2.5 w-full flex items-center gap-1">
                            Email: {user?.email || "idonotknowme😒@whoiwas.com"}{" "}
                            {user?.emailVerified && (
                                <img
                                    src="https://img.icons8.com/?size=100&id=F8sJNbgWH2bt&format=png&color=000000"
                                    alt="verified"
                                    className="size-5"
                                />
                            )}
                        </p>
                    </LiquidGlass>
                    <div className="flex">
                        <LiquidGlass className="mt-5 mx-auto justify-center items-center">
                            <Link
                                to={"/update-profile"}
                                className="flex justify-center items-center gap-0.5 py-3 px-5"
                            >
                                <Edit /> Update Profile
                            </Link>
                        </LiquidGlass>
                        <LiquidGlass
                            className="mt-5 mx-auto justify-center items-center"
                            onClick={handleSignOut}
                        >
                            <Button className="text-rose-500 hover:text-red-500 font-semibold">
                                Log Out
                            </Button>
                        </LiquidGlass>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
