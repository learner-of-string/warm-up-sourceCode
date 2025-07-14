import LiquidGlass from "../../Components/ui/LiquidGlass";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.photoUrl.value;
        form.reset();

        const newDataAsObject = Object.fromEntries(
            Object.entries({
                displayName,
                photoURL,
            }).filter(([, value]) => value)
        );

        updateUserProfile(newDataAsObject)
            .then(() => {
                navigate("/dashboard");
                toast.success("Profile updated successfully!");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="py-8 space-y-5">
            <Navbar />
            <div className="flex justify-center items-center">
                <LiquidGlass className="px-5 py-3 text-2xl font-semibold text-slate-800">
                    Update Your profile
                </LiquidGlass>
            </div>
            <div className="w-11/12 md:w-xl mx-auto">
                <LiquidGlass className="p-8">
                    <div className="grid md:grid-cols-15 grid-cols-1 gap-5">
                        <div className="md:col-span-4">
                            <div className="flex justify-center items-center">
                                <img
                                    src={
                                        user?.photoURL ||
                                        `https://img.icons8.com/?size=100&id=YRJN4lBDhzh8&format=png&color=000000`
                                    }
                                    alt={`profile photo for ${user?.displayName}`}
                                    className="object-cover rounded-full size-28"
                                />
                            </div>
                        </div>
                        <div className="md:col-span-11 pl-4 md:border-l-2 border-white/30">
                            <form
                                className="space-y-3"
                                onSubmit={handleUpdateProfile}
                            >
                                <LiquidGlass className="w-full">
                                    <Input
                                        placeholder="Enter your new user name..."
                                        type="text"
                                        name="name"
                                        className="bg-transparent"
                                    />
                                </LiquidGlass>
                                <LiquidGlass className="w-full">
                                    <Input
                                        placeholder="Enter your new profile photo url..."
                                        type="text"
                                        name="photoUrl"
                                        className="bg-transparent"
                                    />
                                </LiquidGlass>
                                <div>
                                    <LiquidGlass>
                                        <Button type="submit">
                                            Update Profile
                                        </Button>
                                    </LiquidGlass>
                                </div>
                            </form>
                        </div>
                    </div>
                </LiquidGlass>
            </div>
            <Footer />
        </div>
    );
};

export default UpdateProfile;
