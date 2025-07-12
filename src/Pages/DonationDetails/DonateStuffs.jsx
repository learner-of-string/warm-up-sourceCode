import { toast } from "sonner";
import LiquidGlass from "../../Components/ui/LiquidGlass";
import { useState } from "react";

const DonateStuffs = () => {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleValidPhoneNumber = (e) => {
        const value = e.target.value;
        setPhone(value);

        const isValid = /^01[3-9]\d{8}$/.test(value);
        setError(isValid || value === "" ? "" : "Invalid phone number");
    };

    const handleDonationSubmission = (e) => {
        e.preventDefault();
        e.target.reset();
        toast.success("Thank you ! We will reach your destination soon");
    };

    return (
        <form className="space-y-3 my-3" onSubmit={handleDonationSubmission}>
            <LiquidGlass className="w-full">
                <input
                    type="text"
                    placeholder="donation type e.g. warm clothes, pet, medicine etc"
                    name="donation-type"
                    className="px-4 py-3 w-full bg-transparent  text-slate-700 placeholder:text-slate-700/60 border-0 outline-0"
                    required
                />
            </LiquidGlass>
            <LiquidGlass className="w-full">
                <input
                    type="number"
                    placeholder="quantity of donation"
                    name="quantity-of-donation"
                    className="px-4 py-3 w-full bg-transparent  text-slate-700 placeholder:text-slate-700/60 border-0 outline-0"
                    required
                />
            </LiquidGlass>
            <LiquidGlass className="w-full">
                <input
                    type="text"
                    placeholder="enter your name"
                    name="name"
                    className="px-4 py-3 w-full bg-transparent  text-slate-700 placeholder:text-slate-700/60 border-0 outline-0"
                    required
                />
            </LiquidGlass>
            <LiquidGlass className="w-full">
                <input
                    type="number"
                    placeholder="enter your phone number"
                    name="phone"
                    onChange={handleValidPhoneNumber}
                    value={phone}
                    className="px-4 py-3 w-full bg-transparent  text-slate-700 placeholder:text-slate-700/60 border-0 outline-0"
                    required
                />
            </LiquidGlass>
            {/* {error && <p className="text-sm text-red-500 mt-1">{error}</p>} */}
            <LiquidGlass className="w-full">
                <input
                    type="text"
                    placeholder="pickup location"
                    name="pickup-location"
                    className="px-4 py-3 w-full bg-transparent  text-slate-700 placeholder:text-slate-700/60 border-0 outline-0"
                    required
                />
            </LiquidGlass>
            <LiquidGlass className="w-full">
                <input
                    type="text"
                    placeholder="addition notes"
                    name="addition-notes"
                    className="px-4 py-3 w-full bg-transparent  text-slate-700 placeholder:text-slate-700/60 border-0 outline-0"
                />
            </LiquidGlass>
            <LiquidGlass className="w-full">
                <button
                    className="px-4 py-2.5 font-semibold text-base md:text-lg tracking-wide text-slate-800/90 hover:text-slate-900 transition-colors duration-150 cursor-pointer text-center w-full"
                    type="submit"
                >
                    Submit
                </button>
            </LiquidGlass>
        </form>
    );
};

export default DonateStuffs;
