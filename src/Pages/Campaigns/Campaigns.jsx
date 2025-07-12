import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import LiquidGlass from "../../Components/ui/LiquidGlass";
import campaignsData from "../../data/campaigns.json";
import CampaignCard from "./CampaignCard";
import { Search } from "lucide-react";

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState(campaignsData);
    const [searchTerm, setSearchTerm] = useState("");
    const [allDivisions, setAllDivisions] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState("All Divisions");

    // Extract unique divisions
    useEffect(() => {
        const uniqueDivisions = [
            "All Divisions",
            ...new Set(campaignsData.map((c) => c.campaignDivision)),
        ];
        setAllDivisions(uniqueDivisions);
    }, []);

    // Filter campaigns based on search term and division
    useEffect(() => {
        let filtered = campaignsData;

        // Search
        if (searchTerm) {
            filtered = filtered.filter(
                (campaign) =>
                    campaign.campaignTitle
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    campaign.campaignDescription
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            );
        }

        // Division
        if (selectedDivision && selectedDivision !== "All Divisions") {
            filtered = filtered.filter(
                (campaign) => campaign.campaignDivision === selectedDivision
            );
        }

        setCampaigns(filtered);
    }, [searchTerm, selectedDivision]);

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedDivision("All Divisions");
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center items-center w-full">
                    <LiquidGlass className="px-8 py-6 mb-6">
                        <h1 className="text-4xl font-bold text-slate-800">
                            Discover Our Campaigns
                        </h1>
                    </LiquidGlass>
                </div>

                {/* Search and Filters Section */}
                <div className="mb-8 space-y-6 sticky top-5 z-10 ">
                    {/* Search and Division Filter Side by Side */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <LiquidGlass className="flex-1">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search campaigns..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="w-full px-4 py-3 pl-12 bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-700/60"
                                />
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            </div>
                        </LiquidGlass>

                        <LiquidGlass className="sm:w-48">
                            <select
                                value={selectedDivision}
                                onChange={(e) =>
                                    setSelectedDivision(e.target.value)
                                }
                                className="w-full px-4 py-3 bg-transparent border-none outline-none text-slate-700 cursor-pointer"
                            >
                                {allDivisions.map((division) => (
                                    <option
                                        key={division}
                                        value={division}
                                        className="bg-slate-800 text-white"
                                    >
                                        {division}
                                    </option>
                                ))}
                            </select>
                        </LiquidGlass>
                    </div>

                    {/* Clear Filters */}
                    {(selectedDivision !== "All Divisions" || searchTerm) && (
                        <div className="flex justify-center">
                            <LiquidGlass
                                className="px-6 py-2 cursor-pointer"
                                onClick={clearFilters}
                            >
                                <span className="text-slate-700 font-medium">
                                    Clear All Filters
                                </span>
                            </LiquidGlass>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="mb-6 text-center">
                    <LiquidGlass className="px-6 py-3 inline-block">
                        <p className="text-slate-700">
                            Showing {campaigns.length} of {campaignsData.length}{" "}
                            campaigns
                        </p>
                    </LiquidGlass>
                </div>

                {/* Campaigns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map((campaign) => (
                        <CampaignCard
                            key={campaign.campaignSlug}
                            campaign={campaign}
                        />
                    ))}
                </div>

                {/* No Results */}
                {campaigns.length === 0 && (
                    <div className="text-center py-12">
                        <LiquidGlass className="inline-block px-8 py-6">
                            <svg
                                className="mx-auto h-12 w-12 text-slate-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                                />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-slate-900">
                                No campaigns found
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                                Try adjusting your search or filter criteria.
                            </p>
                            <div className="mt-6">
                                <LiquidGlass
                                    className="cursor-pointer"
                                    onClick={clearFilters}
                                >
                                    <span className="text-slate-700 font-medium">
                                        Clear all filters
                                    </span>
                                </LiquidGlass>
                            </div>
                        </LiquidGlass>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Campaigns;
