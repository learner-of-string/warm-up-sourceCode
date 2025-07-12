import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import LiquidGlass from "../../Components/ui/LiquidGlass";
import { useParams } from "react-router-dom";

const DonationDetails = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>
            <Navbar />
            <div className="py-8">
                <LiquidGlass>Donation Details</LiquidGlass>
            </div>
            <Footer />
        </div>
    );
};

export default DonationDetails;
