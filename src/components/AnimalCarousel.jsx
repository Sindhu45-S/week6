import React, { useState, useEffect } from "react";

// Define your images array
const images = [
  "/src/assets/images/l1.jpg",
  "/src/assets/images/bird-cage.jpg",
  "/src/assets/images/rabbit-hutch.jpg",
];

export default function AnimalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300); // fade-out before changing image
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 300);
  };

  // Auto-slide (optional)
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // change every 5 sec
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className={`w-full h-64 object-cover rounded-lg shadow-lg transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Previous button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-gray-800"
      >
        ◀
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-gray-800"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-400"
            }`}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setFade(true);
              }, 300);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
