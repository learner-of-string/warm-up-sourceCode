import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Home/About";
import FaqSection from "./Home/FaqSection";
import HeroArea from "./Home/HeroArea";
import HowItWorks from "./Home/HowItWorks";
import ImageGallery from "./Home/ImageGallery";

const Home = () => {
    return (
        <div>
            <div className="relative w-full min-h-screen overflow-x-hidden bg-[url(./assets/bg.jpg)] bg-no-repeat bg-cover bg-center max-h-screen max-w-screen">
                <div className="pt-20">
                    <Navbar />
                    <HeroArea />
                    <About />
                    <HowItWorks />
                    <ImageGallery />
                    <FaqSection />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
