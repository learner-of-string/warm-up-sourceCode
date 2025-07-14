import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import LiquidGlass from "./ui/LiquidGlass";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Menu } from "lucide-react";

const Navbar = () => {
    const { user } = useContext(AuthContext);

    const navLinks = (
        <>
            <LiquidGlass className="px-3 py-2 text-center transition rounded-2xl bg-sky-200">
                <NavLink
                    to={"/"}
                    viewTransition
                    className="text-slate-800 font-medium"
                >
                    Home
                </NavLink>
            </LiquidGlass>
            <LiquidGlass className="px-3 py-2 text-center transition rounded-2xl bg-sky-200">
                <NavLink
                    to={"/campaigns"}
                    viewTransition
                    className="text-slate-800 font-medium"
                >
                    Campaigns
                </NavLink>
            </LiquidGlass>
            <LiquidGlass className="px-3 py-2 text-center transition rounded-2xl bg-sky-200">
                <NavLink
                    to={"/dashboard"}
                    viewTransition
                    className="text-slate-800 font-medium"
                >
                    Dashboard
                </NavLink>
            </LiquidGlass>
        </>
    );

    return (
        <div className="md:p-5 p-2 fixed top-0 left-0 right-0 z-50">
            <LiquidGlass className="w-full px-2.5">
                <nav className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="px-2 lg:hidden hover:bg-white/10 rounded-lg p-1 transition-colors"
                            >
                                <Menu className="w-6 h-6" />
                            </div>
                            <div
                                tabIndex={0}
                                className="menu menu-sm dropdown-content z-50 mt-3 w-64 rounded-2xl bg-white/95 border-2 border-sky-200/50 shadow-2xl backdrop-blur-xl"
                            >
                                <div className="flex flex-col gap-2 p-1">
                                    <div className="px-3 py-2 text-center transition-all duration-200 rounded-xl bg-gradient-to-r from-sky-100 to-blue-100 hover:from-sky-200 hover:to-blue-200 shadow-sm hover:shadow-md">
                                        <NavLink
                                            to={"/"}
                                            viewTransition
                                            className="text-slate-800 font-semibold text-base block w-full"
                                        >
                                            Home
                                        </NavLink>
                                    </div>
                                    <div className="px-3 py-2 text-center transition-all duration-200 rounded-xl bg-gradient-to-r from-sky-100 to-blue-100 hover:from-sky-200 hover:to-blue-200 shadow-sm hover:shadow-md">
                                        <NavLink
                                            to={"/campaigns"}
                                            viewTransition
                                            className="text-slate-800 font-semibold text-base block w-full"
                                        >
                                            Campaigns
                                        </NavLink>
                                    </div>
                                    <div className="px-3 py-2 text-center transition-all duration-200 rounded-xl bg-gradient-to-r from-sky-100 to-blue-100 hover:from-sky-200 hover:to-blue-200 shadow-sm hover:shadow-md">
                                        <NavLink
                                            to={"/dashboard"}
                                            viewTransition
                                            className="text-slate-800 font-semibold text-base block w-full"
                                        >
                                            Dashboard
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img
                                src={logo}
                                alt="warm up logo"
                                className="size-9"
                            />
                            <Link to={"/"}>
                                <h1 className="text-xl font-medium">WarmUp</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className="menu menu-horizontal px-1 text-lg font-medium space-x-5">
                            {navLinks}
                        </div>
                    </div>
                    <div className="navbar-end">
                        <LiquidGlass className="cursor-pointer">
                            {user ? (
                                <div>
                                    <Link to={"/dashboard"}>
                                        <img
                                            src={
                                                user?.photoURL ||
                                                `https://img.icons8.com/?size=100&id=YRJN4lBDhzh8&format=png&color=000000`
                                            }
                                            alt={`profile photo for ${user?.displayName}`}
                                            className="size-10 rounded-full"
                                        />
                                    </Link>
                                </div>
                            ) : (
                                <Link
                                    to={"/authenticate/signin"}
                                    viewTransition
                                    className="px-4 py-2.5 font-semibold text-base md:text-lg tracking-wide text-slate-800/90 hover:text-slate-900 transition-colors duration-150 cursor-pointer"
                                >
                                    Log in
                                </Link>
                            )}
                        </LiquidGlass>
                    </div>
                </nav>
            </LiquidGlass>
        </div>
    );
};

export default Navbar;
