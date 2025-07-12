import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import About from "./About";
import FaqSection from "./FaqSection";
import HeroArea from "./HeroArea";
import HowItWorks from "./HowItWorks";
import ImageGallery from "./ImageGallery";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
                <HeroArea />
                <HowItWorks />
                <About />
                <ImageGallery />
                <FaqSection />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
