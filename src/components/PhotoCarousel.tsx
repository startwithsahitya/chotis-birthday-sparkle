import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import photo1 from "@/assets/p1.png";
import photo2 from "@/assets/p2.png";
import photo3 from "@/assets/p3.png";

const PhotoCarousel = () => {
  const photos = [
    { src: photo1, caption: "Cute 🌟" },
    { src: photo2, caption: "Bachhi ❤️" },
    { src: photo3, caption: "Keep that smile 👭" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary-light/30 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-center mb-12 text-gradient-hero animate-slide-up">
          Photos nhi hai toh aapki hi lgadi 🙏
        </h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Main Photo Display */}
          <div className="photo-frame animate-slide-up">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].caption}
              className="w-full h-80 sm:h-96 object-cover rounded-2xl"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Photo Caption */}
          <div className="text-center mt-6">
            <p className="text-lg font-medium text-primary bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block">
              {photos[currentIndex].caption}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Touch Gesture Hint */}
        <div className="text-center mt-8 sm:hidden">
          <p className="text-sm text-muted-foreground">
            👆 Tap the arrows or dots to navigate
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
