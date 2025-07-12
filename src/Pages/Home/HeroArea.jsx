import { toast } from "sonner";
import LiquidGlass from "../../Components/ui/LiquidGlass";

const HeroArea = () => {
    const handleDonate = () => {
        toast.warning("We are under construction yet...🙂");
    };

    return (
        <section className="relative py-20  flex items-center justify-center">
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-7xl md:max-w-lg mx-auto font-bold drop-shadow text-neutral-800 hero-title text-center">
                    Share the Warmth, Change a Life
                </h1>
                <p className="mt-4 max-w-xl mx-auto  text-lg">
                    Help provide winter clothing to people in need across
                    Bangladesh. Every donation counts.
                </p>
                <LiquidGlass
                    className="mt-6 font-semibold px-6 py-2 rounded-full shadow transition cursor-pointer inline-flex"
                    onClick={handleDonate}
                >
                    <button className="cursor-pointer">Donate Now 🍩</button>
                </LiquidGlass>
            </div>
        </section>
    );
};

export default HeroArea;
