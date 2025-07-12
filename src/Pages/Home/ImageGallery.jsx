import SectionTitle from "../../Components/ui/SectionTitle";
import LiquidGlass from "../../Components/ui/LiquidGlass";
import arrayShuffle from "array-shuffle";

const ImageGallery = () => {
    const photos = arrayShuffle([
        {
            photoId: "1",
            img: "https://plus.unsplash.com/premium_photo-1681885338273-cfcce0cb5526?q=80&w=943&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            photoId: "2",
            img: "https://images.unsplash.com/photo-1638478960333-6c0bc41199e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            photoId: "3",
            img: "https://images.unsplash.com/photo-1704543641101-c282f419172c?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            photoId: "4",
            img: "https://images.unsplash.com/photo-1549396193-52b850d39d50?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ]);

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex justify-center">
                <SectionTitle>Warm Moments By Us</SectionTitle>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 -mt-8 p-6 border-2 md:rounded-4xl rounded-3xl border-white/30 backdrop-blur-xs">
                {photos.map((photo) => (
                    <LiquidGlass
                        key={photo.photoId}
                        className="overflow-hidden p-2 flex items-center justify-center group transition-transform duration-300 hover:scale-105 hover:rotate-1"
                    >
                        <img
                            src={photo.img}
                            alt={`Winter donation ${photo.photoId}`}
                            className="md:rounded-4xl rounded-3xl object-cover w-full h-48 md:h-56 shadow-lg transition-transform duration-300"
                        />
                    </LiquidGlass>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
