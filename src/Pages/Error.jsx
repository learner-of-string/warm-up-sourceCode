import LiquidGlass from "../Components/ui/LiquidGlass";
import { Button } from "../Components/ui/button";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[url(./assets/bg.jpg)] bg-no-repeat bg-cover bg-center max-h-screen max-w-screen flex justify-center items-center">
            <LiquidGlass className="flex flex-col items-center gap-6 p-10 md:p-16 max-w-md w-full text-center">
                <h1 className="text-5xl font-extrabold text-pink-300 drop-shadow-sm">
                    💔 404
                </h1>
                <p className="text-xl font-medium text-white/90">
                    Oops! This page wandered off... 😢
                </p>
                <p className="text-sm text-white/60 italic">
                    (We searched under the couch... it's gone.)
                </p>
                <Button
                    onClick={() => navigate("/")}
                    className="mt-4 bg-slate-900 text-white/80 hover:bg-transparent hover:text-slate-900 border border-white/20 transition backdrop-blur-md rounded-3xl"
                >
                    Take me Home 🏡
                </Button>
            </LiquidGlass>
        </div>
    );
};

export default Error;
