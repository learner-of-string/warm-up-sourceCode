import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SectionTitle from "../../Components/ui/SectionTitle";
import LiquidGlass from "../../Components/ui/LiquidGlass";
import campaignsData from "../../data/campaigns.json";

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState(campaignsData);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDivision, setSelectedDivision] = useState("");

    // Extract unique divisions
    const allDivisions = [
        ...new Set(campaignsData.map((campaign) => campaign.campaignDivision)),
    ];

    // Filter campaigns based on search term and division
    useEffect(() => {
        let filtered = campaignsData;

        // Filter by search term
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

        // Filter by division
        if (selectedDivision) {
            filtered = filtered.filter(
                (campaign) => campaign.campaignDivision === selectedDivision
            );
        }

        setCampaigns(filtered);
    }, [searchTerm, selectedDivision]);

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedDivision("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <SectionTitle>Our Campaigns</SectionTitle>

                {/* Search and Filters Section */}
                <div className="mb-8 space-y-6">
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
                                    className="w-full px-4 py-3 pl-12 bg-transparent border-none outline-none text-slate-700 placeholder-slate-500"
                                />
                                <svg
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
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
                                <option value="">All Divisions</option>
                                {allDivisions.map((division) => (
                                    <option key={division} value={division}>
                                        {division}
                                    </option>
                                ))}
                            </select>
                        </LiquidGlass>
                    </div>

                    {/* Clear Filters */}
                    {(searchTerm || selectedDivision) && (
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
                        <p className="text-slate-600">
                            Showing {campaigns.length} of {campaignsData.length}{" "}
                            campaigns
                        </p>
                    </LiquidGlass>
                </div>

                {/* Campaigns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map((campaign, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/30"
                        >
                            <div className="relative">
                                <img
                                    src={campaign.campaignImg}
                                    alt={campaign.campaignTitle}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 right-4">
                                    <LiquidGlass className="px-3 py-1">
                                        <span
                                            className={`text-xs font-medium ${
                                                campaign.campaignStatus ===
                                                "Active"
                                                    ? "text-green-800"
                                                    : "text-red-800"
                                            }`}
                                        >
                                            {campaign.campaignStatus}
                                        </span>
                                    </LiquidGlass>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                                    {campaign.campaignTitle}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {campaign.campaignDescription}
                                </p>

                                <div className="mb-4">
                                    <p className="text-sm text-gray-500 mb-1">
                                        Division:
                                    </p>
                                    <p className="text-sm font-medium text-gray-700">
                                        {campaign.campaignDivision}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <p className="text-sm text-gray-500 mb-1">
                                        Contact:
                                    </p>
                                    <p className="text-sm font-medium text-blue-600">
                                        {campaign.ContactInfo}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {campaign.tags.map((tag) => (
                                        <LiquidGlass
                                            key={tag}
                                            className="px-2 py-1"
                                        >
                                            <span className="text-blue-800 text-xs">
                                                {tag}
                                            </span>
                                        </LiquidGlass>
                                    ))}
                                </div>

                                <LiquidGlass className="w-full cursor-pointer">
                                    <button className="w-full py-2 px-4 text-slate-700 font-medium">
                                        Learn More
                                    </button>
                                </LiquidGlass>
                            </div>
                        </div>
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
