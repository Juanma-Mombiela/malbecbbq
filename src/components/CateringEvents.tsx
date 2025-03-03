import { useState, useEffect } from "react";

const images = [
  "/catering1.webp",
  "/catering2.webp",
  "/catering3.webp",
  "/catering4.webp",
  "/catering5.webp",
  "/catering6.webp"
];

export default function CateringEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="catering" className="bg-white py-10">
      <div className="checkered-pattern w-full"></div>
      <div className="container mx-auto flex flex-col items-center text-center px-4 pt-8">
        <h3 className="text-second text-4xl font-bold font-lucidity_condensed mb-4">
          Catering & Events
        </h3>
        <p className="text-primary text-sm font-nourd font-medium max-w-3xl mb-6">
          Want to bring the Malbec BBQ experience to your next event? We’ve got you covered! From full-service catering and pickup to our amazing food truck, we deliver our signature flavors to your event. Whether it’s a wedding, engagement party, corporate event, festival, or any other venue, we are ready to provide you an unforgettable experience.
        </p>
        <div className="relative w-full max-w-4xl h-96 overflow-hidden rounded-[12px]">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Catering BBQ"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 rounded-[12px] ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-white"}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}