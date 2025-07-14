import LiquidGlass from "./ui/LiquidGlass";

const Footer = () => {
    return (
        <div className="md:p-5 p-2">
            <LiquidGlass className="w-full">
                <footer className="w-full">
                    <div className="flex justify-center items-center flex-col gap-2 p-8 text-white text-sm text-center ">
                        <p className="hover:underline">
                            Copyright &copy; 2025 - All right reserved by Warm
                            Up Community
                        </p>
                        <span className="hover:underline">V-1.0</span>
                    </div>
                </footer>
            </LiquidGlass>
        </div>
    );
};

export default Footer;
