import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import LiquidGlass from "../../Components/ui/LiquidGlass";
import { useParams } from "react-router-dom";
import campaignsData from "../../data/campaigns.json";
import DonateStuffs from "./DonateStuffs";

const DonationDetails = () => {
    const { slug } = useParams();

    const currentCampaign = campaignsData.find(
        (campaign) => campaign.campaignSlug === slug
    );

    return (
        <div>
            <Navbar />
            <div className="py-8 md:w-3/5 w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
                <div>
                    <img
                        src={currentCampaign?.campaignImg}
                        alt={`donation for ${currentCampaign?.campaignTitle} at warmUp`}
                        className="w-full h-72 object-cover rounded-3xl md:rounded-4xl"
                    />
                </div>

                <LiquidGlass className="flex-col p-5">
                    <div className="flex gap-2 mt-3.5 mb-2">
                        {currentCampaign?.tags.map((tag) => (
                            <LiquidGlass
                                key={tag}
                                className="px-3 py-1 cursor-pointer"
                            >
                                <span className="text-blue-800 text-xs font-semibold">
                                    {tag}
                                </span>
                            </LiquidGlass>
                        ))}
                    </div>
                    <h1 className="text-4xl font-bold text-slate-800 leading-tight">
                        {currentCampaign?.campaignTitle}
                    </h1>
                    <p className="text-xl text-slate-800 leading-relaxed mb-3">
                        {currentCampaign?.campaignDescription}
                    </p>
                    <p>
                        <span className="text-sm text-slate-800">
                            Division:{" "}
                        </span>
                        <span className=" font-semibold text-slate-900">
                            {currentCampaign?.campaignDivision}
                        </span>
                    </p>
                    <p>
                        <span className="text-sm text-slate-800">
                            Contact:{" "}
                        </span>
                        <span className=" font-semibold text-slate-900 cursor-pointer hover:underline">
                            {currentCampaign?.ContactInfo}
                        </span>
                    </p>
                </LiquidGlass>
            </div>
            <div className="md:w-3/5 w-11/12 mx-auto mb-5">
                <LiquidGlass className="flex-col py-10 px-10 w-full">
                    <p className="text-xl md:text-3xl text-center ">
                        Fill the form to confirm your donate.
                    </p>
                    <DonateStuffs />
                </LiquidGlass>
            </div>
            <Footer />
        </div>
    );
};

export default DonationDetails;
