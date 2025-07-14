import { toast } from "sonner";
import LiquidGlass from "@/Components/ui/LiquidGlass";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/Components/ui/button";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { Howl } from "howler";

const DonateStuffs = () => {
    const [error, setError] = useState("");

    const { user } = useContext(AuthContext);

    const sounds = {
        successfulDonation: new Howl({
            src: ["/public/donation-successful.mp3"],
        }),
    };

    const handleDonationSubmission = (e) => {
        e.preventDefault();

        const form = e.target;
        const phoneNumber = form.phoneNumber.value;
        phoneNumber.length > 0;
        console.log(form);

        if (!/^01[3-9]/.test(phoneNumber) || phoneNumber.length !== 11) {
            setError(
                "Phone number must start with '01' followed by 3-9 and can't exceed 11 digits"
            );
            return;
        }

        sounds.successfulDonation.play();

        form.reset();

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
                    placeholder="Enter your name..."
                    name="name"
                    required
                    defaultValue={user?.displayName}
                />
            </LiquidGlass>
            <LiquidGlass className="w-full">
                <Input
                    type="number"
                    placeholder={`enter your phone number`}
                    maxLength={11}
                    onChange={() => {
                        setError("");
                    }}
                    name="phoneNumber"
                    className="phone-input"
                    required
                    defaultValue={user?.phoneNumber}
                />
            </LiquidGlass>
            {error && (
                <LiquidGlass>
                    <p className="text-sm text-red-500 mt-1 px-2">{error}</p>
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
                <Button type="submit">Submit</Button>
            </LiquidGlass>
        </form>
    );
};

export default DonateStuffs;
