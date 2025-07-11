import LiquidGlass from "../Components/ui/LiquidGlass";
import SectionTitle from "../Components/ui/SectionTitle";

const About = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <SectionTitle>About Us</SectionTitle>
            <LiquidGlass className="w-full p-6 md:p-8 text-center text-base md:text-lg text-slate-800 flex flex-col items-center -mt-8">
                <p className="font-bold text-xl md:text-2xl text-sky-900 mb-2">
                    Warming Hearts, One Coat at a Time
                </p>
                <p className="mb-2">
                    WarmUp is a community project helping people in Bangladesh
                    stay warm each winter. We collect, sort, and share winter
                    clothes with those who need them most.
                </p>
                <p className="text-sky-700/90 mt-2 text-base md:text-lg font-medium italic tracking-wide max-w-lg mx-auto">
                    <span className="font-semibold text-sky-800">
                        Your support
                    </span>{" "}
                    brings comfort and hope.
                    <br className="hidden md:block" />
                    <span className="text-sky-800">
                        Together, we make a real difference.
                    </span>
                </p>
            </LiquidGlass>
        </div>
    );
};

export default About;
