import { Link } from "react-router-dom";
import LiquidGlass from "../../Components/ui/LiquidGlass";

const CampaignCard = ({ campaign }) => {
    return (
        <LiquidGlass>
            <div className="py-2.5">
                <figure className="p-2">
                    <img
                        src={campaign?.campaignImg}
                        alt={`donation for ${campaign?.campaignTitle} at warmUp`}
                        className="md:rounded-4xl rounded-3xl w-full h-60 object-cover"
                    />
                </figure>
                <div className="p-2.5">
                    <h1 className="text-2xl font-bold text-slate-800 leading-tight">
                        {campaign?.campaignTitle}
                    </h1>
                    <p className="text-slate-800 leading-relaxed mb-3">
                        {campaign?.campaignDescription}
                    </p>

                    <div>
                        <p className="text-sm text-slate-800">Division:</p>
                        <p className="text-sm font-semibold text-slate-900">
                            {campaign.campaignDivision}
                        </p>
                    </div>
                    <div className="flex gap-2 my-3.5">
                        {campaign?.tags.map((tag) => (
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
                    <LiquidGlass className="w-full cursor-pointer ">
                        <Link
                            to={`/donate/${campaign.campaignSlug}`}
                            className="w-full py-3 text-center px-4 text-slate-700 font-semibold cursor-pointer"
                        >
                            Donate Now
                        </Link>
                    </LiquidGlass>
                </div>
            </div>
        </LiquidGlass>
    );
};

export default CampaignCard;
