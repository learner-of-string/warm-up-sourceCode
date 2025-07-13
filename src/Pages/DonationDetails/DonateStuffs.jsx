import { toast } from "sonner";
import LiquidGlass from "../../Components/ui/LiquidGlass";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const DonateStuffs = () => {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleValidPhoneNumber = (e) => {
        const value = e.target.value;
        if (value.length > 0) {
            if (!/^01[3-9]/.test(value)) {
                setError("Phone number must start with '01' followed by 3-9");
            } else {
                setError("");
            }
        } else {
            setError("");
        }
        setPhone(value);
    };

    const handleDonationSubmission = (e) => {
        e.preventDefault();
        e.target.reset();
        setPhone("");

        toast.success("Thank you ! We will reach your destination soon");
    };

    return (
        <form className="space-y-3 my-3" onSubmit={handleDonationSubmission}>
            <LiquidGlass className="w-full">
                <Input
                    type="text"
                    placeholder="donation type e.g. warm clothes, pet, medicine etc"
                    name="donation-type"
                    required
                />
            </LiquidGlass>
            <LiquidGlass className="w-full">
                <Input
                    type="number"
                    placeholder="quantity of donation"
                    name="quantity-of-donation"
                    required
                />
            </LiquidGlass>
            <LiquidGlass className="w-full">
                <Input
                    type="text"
                    placeholder="enter your name"
                    name="name"
                    required
                />
            </LiquidGlass>
            <LiquidGlass className="w-full">
                <Input
                    type="number"
                    placeholder="enter your phone number"
                    maxLength={11}
                    onChange={handleValidPhoneNumber}
                    value={phone}
                    className="phone-input"
                    required
                />
            </LiquidGlass>
            {error && (
                <LiquidGlass>
                    <p className="text-sm text-red-500 mt-1">{error}</p>
                </LiquidGlass>
            )}
            <LiquidGlass className="w-full">
                <Input
                    type="text"
                    placeholder="pickup location"
                    name="pickup-location"
                    required
                />
            </LiquidGlass>
            <LiquidGlass className="w-full">
                <Input
                    type="text"
                    placeholder="addition notes"
                    name="addition-notes"
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
