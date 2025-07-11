import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import LiquidGlass from "./ui/LiquidGlass";
import { toast } from "sonner";

const Navbar = () => {
    const handleLogin = () => {
        toast.warning("kire vai log in je korbi project shesh korchot?");
    };

    const navLinks = (
        <>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
        </>
    );

    return (
        <div className="md:p-5 p-2 fixed top-0 left-0 right-0 z-50">
            <LiquidGlass className="w-full">
                <nav className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {" "}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />{" "}
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-medium"
                            >
                                {navLinks}
                            </ul>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img
                                src={logo}
                                alt="warm up logo"
                                className="size-9"
                            />
                            <h1 className="text-xl font-medium">WarmUp</h1>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-lg font-medium">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <LiquidGlass
                            className="cursor-pointer"
                            onClick={handleLogin}
                        >
                            <button className="px-4 py-2.5 font-semibold text-base md:text-lg tracking-wide text-slate-800/90 hover:text-slate-900 transition-colors duration-150 cursor-pointer">
                                Log in
                            </button>
                        </LiquidGlass>
                    </div>
                </nav>
            </LiquidGlass>
        </div>
    );
};

export default Navbar;
