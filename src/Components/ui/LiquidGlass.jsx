import clsx from "clsx";

const LiquidGlass = ({ children, className = "", onClick }) => {
    return (
        <div
            className={clsx(
                "inline-flex md:rounded-4xl rounded-3xl bg-white/10 border border-white/30 shadow-xl backdrop-blur-md backdrop-saturate-150 px-2.5 transition-all duration-200 hover:backdrop-blur-xl hover:border-white/40 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default LiquidGlass;
