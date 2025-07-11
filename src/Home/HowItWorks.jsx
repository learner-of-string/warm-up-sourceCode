import SectionTitle from "../Components/ui/SectionTitle";
import LiquidGlass from "../Components/ui/LiquidGlass";

const steps = [
    {
        title: "Step 1: Gather Warm Clothes",
        description:
            "Collect gently used or new winter clothes such as coats, sweaters, scarves, and blankets that you wish to donate.",
    },
    {
        title: "Step 2: Submit Your Donation",
        description:
            "Bring your items to our collection point or schedule a pickup. Fill out a simple form with your contact details.",
    },
    {
        title: "Step 3: Spread the Warmth",
        description:
            "We distribute your donated clothes to people in need, helping them stay warm and safe during winter.",
    },
];

const HowItWorks = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <SectionTitle>How it works</SectionTitle>
            <LiquidGlass className="w-full p-6 md:p-8 flex flex-col items-center gap-8 text-slate-800 -mt-8">
                <div className="flex flex-col gap-6 w-full">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`flex items-center gap-4 transition-all duration-700 ease-out transform border border-white/30 p-3 rounded-2xl md:rounded-4xl`}
                        >
                            <div className="relative flex-shrink-0 h-10 w-10 flex items-center justify-center">
                                <span className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-sky-900 border border-white/30 transition-transform duration-500 z-10">
                                    {idx + 1}
                                </span>
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-sky-900 mb-1">
                                    {step.title}
                                </div>
                                <div className="text-sky-700/90 text-base">
                                    {step.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </LiquidGlass>
        </div>
    );
};

export default HowItWorks;
