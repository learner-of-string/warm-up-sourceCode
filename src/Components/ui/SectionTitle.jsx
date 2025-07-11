import LiquidGlass from "./LiquidGlass";

const SectionTitle = ({ children }) => {
    return (
        <div className="flex justify-center items-center w-full">
            <LiquidGlass className="px-6 py-2 md:px-10 md:py-4 mb-6 md:rounded-tl-4xl rounded-tl-3xl md:rounded-tr-4xl rounded-tr-3xl rounded-b-none md:rounded-b-none">
                <h1 className="text-xl md:text-3xl font-bold tracking-tight text-slate-700 text-center capitalize">
                    {children}
                </h1>
            </LiquidGlass>
        </div>
    );
};

export default SectionTitle;
