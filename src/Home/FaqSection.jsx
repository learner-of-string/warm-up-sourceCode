import SectionTitle from "../Components/ui/SectionTitle";
import Faq from "react-faq-component";
import LiquidGlass from "../Components/ui/LiquidGlass";
import { ChevronDown } from "lucide-react";
import arrayShuffle from "array-shuffle";

const FaqSection = () => {
    const rows = arrayShuffle([
        {
            title: "What is WarmUp?",
            content: `WarmUp is a community-driven initiative dedicated to collecting and distributing winter clothing to those in need across Bangladesh.`,
        },
        {
            title: "How can I donate clothes?",
            content:
                "You can bring your gently used or new winter clothes to our collection points or schedule a pickup through our website.",
        },
        {
            title: "Who receives the donated items?",
            content: `We distribute donated clothes to underprivileged individuals and families in various regions of Bangladesh, prioritizing those most in need during the winter season.`,
        },
        {
            title: "From where is this design inspired?",
            content: `From ios 26 tahoe, newly introduced Liquid Glass by Apple🙂. I tried to copy as bette as possible I failed, plz someone help me for this😭😭`,
        },
        {
            title: "Can I volunteer with WarmUp?",
            content: `Absolutely! We welcome volunteers for sorting, packaging, and distribution. Sign up on our website to join our team and make a difference.`,
        },
        {
            title: "Are monetary donations accepted?",
            content: `Yes, we accept monetary donations to help with logistics and purchasing new winter essentials. Details are available on our donation page.`,
        },
    ]);

    const data = { rows };

    const styles = {
        bgColor: "transparent", // Ensure background is transparent to let LiquidGlass show through
        titleTextColor: "#0c2958", // deep blue, matches text-sky-900
        rowTitleColor: "#0c2958", // deep blue for question titles
        rowContentColor: "#334155", // slate-800 for answers
        rowContentPaddingTop: "12px",
        rowContentPaddingBottom: "12px",
        rowContentPaddingLeft: "0px",
        rowContentPaddingRight: "0px",
        rowTitleTextSize: "18px",
        rowContentTextSize: "16px",
    };

    const config = {
        animate: true,
        arrowIcon: <ChevronDown className="text-slate-600" />,
        tabFocus: true, // Enable keyboard navigation
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <SectionTitle>FAQ</SectionTitle>
            <LiquidGlass className="w-full p-6 md:p-8 flex flex-col items-center -mt-8">
                <Faq data={data} styles={styles} config={config} />
            </LiquidGlass>
        </div>
    );
};

export default FaqSection;
