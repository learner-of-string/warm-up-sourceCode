import { Input } from "@/Components/ui/input";
import LiquidGlass from "../../Components/ui/LiquidGlass";
import { Button } from "@/Components/ui/button";
import Divider from "@mui/material/Divider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "sonner";
import { useState } from "react";
import ResetPasswordConfirmation from "./ResetPasswordConfirmation";
import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";

const SignIn = () => {
    const { signInUser, setUser, signInWithGooglePopUp } =
        useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !isValidLength) {
            setError(
                "Password must have uppercase, lowercase and be at least 6 characters."
            );
            return;
        }

        signInUser(email, password)
            .then((res) => {
                setUser(res.user);
                form.reset();

                toast.success("Sign in Successful!");
                navigate(location?.state ? location?.state : "/");
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message || "An error occurred during sign in");
            });
    };

    const handleSignInWithGooglePopUp = () => {
        signInWithGooglePopUp()
            .then((res) => {
                setUser(res.user);
                toast.success("Sign in Successful!");
                navigate(location?.state ? location?.state : "/");
            })
            .catch((error) => {
                console.log("error", error.message);
                setError(error.message || "An error occurred during sign in");
            });
    };

    return (
        <div className="px-8 py-10 flex flex-col space-y-5">
            <h2 className="text-3xl font-bold text-slate-800 text-center">
                Sign In💫
            </h2>
            <form className="space-y-4" onSubmit={handleSignIn}>
                <LiquidGlass className="w-full">
                    <Input
                        placeholder="Enter your email"
                        type="email"
                        required
                        name="email"
                        className="bg-transparent"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </LiquidGlass>
                <LiquidGlass className="w-full relative">
                    <Input
                        placeholder="••••••••"
                        type={isPasswordVisible ? `text` : `password`}
                        required
                        name="password"
                        className="bg-transparent"
                        onChange={() => setError("")}
                    />
                    <span
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        className="absolute right-2 top-3"
                    >
                        {isPasswordVisible ? (
                            <EyeClosed className="text-slate-800" />
                        ) : (
                            <Eye className="text-slate-800" />
                        )}
                    </span>
                </LiquidGlass>
                <div className="flex justify-end -mt-2 mb-4">
                    <ResetPasswordConfirmation email={email} />
                </div>
                <LiquidGlass className="w-full group px-0 py-0">
                    <Button
                        type="submit"
                        className="w-full bg-slate-900 text-white/70 group-hover:bg-transparent group-hover:text-slate-900 backdrop-blur-md transition-all duration-200 rounded-3xl md:rounded-4xl font-medium hover:font-semibold"
                    >
                        Sign In
                    </Button>
                </LiquidGlass>
            </form>
            <div>
                {error && (
                    <LiquidGlass className="w-full">
                        <span className="text-rose-600 text-sm px-2 text-center hover:underline">
                            {error}
                        </span>
                    </LiquidGlass>
                )}
            </div>

            <div className="py-3">
                <Divider className="text-slate-500 text-xs">Or</Divider>
            </div>

            <LiquidGlass className="w-full">
                <Button
                    onClick={handleSignInWithGooglePopUp}
                    className="w-full flex items-center justify-center gap-3 text-slate-800 font-medium hover:text-white hover:bg-slate-900 transition rounded-3xl md:rounded-4xl"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </Button>
            </LiquidGlass>

            <p className="text-sm text-center text-slate-700 mt-2">
                New to warmUp?{" "}
                <Link
                    to="/authenticate/signup"
                    className="text-sky-600 hover:underline font-semibold"
                >
                    Register Now!
                </Link>
            </p>
        </div>
    );
};

export default SignIn;
