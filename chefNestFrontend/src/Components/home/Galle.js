import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

const GalleryWithState = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          (process.env.REACT_APP_API_URL || "http://localhost:8000") +
            "/foodGall/getall"
        );
        setImages(response.data);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const handleZoom = (index) => {
    setZoomedIndex(index);
    setIsZoomed(true);
  };

  const handleNextZoom = () => {
    setZoomedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevZoom = () => {
    setZoomedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Gallery
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Moments from Our Kitchens
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
            Explore some memorable moments where our professional chefs created
            delicious home-cooked meals for happy families.
          </p>
        </div>

        {/* Gallery Slider */}
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={img._id} className="px-4 py-4">
              <img
                src={img.image}
                alt={`Gallery ${index}`}
                onClick={() => handleZoom(index)}
                className="w-full h-80 object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
              />
            </div>
          ))}
        </Slider>

        {/* Modal */}
        {isZoomed && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

            {/* Close */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-black text-2xl hover:bg-orange-500 hover:text-white transition"
            >
              ×
            </button>

            {/* Previous */}
            <button
              onClick={handlePrevZoom}
              className="absolute left-6 text-white text-5xl hover:text-orange-500 transition"
            >
              ❮
            </button>

            {/* Image */}
            <img
              src={images[zoomedIndex]?.image}
              alt="Zoom"
              className="max-h-[85vh] max-w-[85vw] rounded-2xl shadow-2xl"
            />

            {/* Next */}
            <button
              onClick={handleNextZoom}
              className="absolute right-6 text-white text-5xl hover:text-orange-500 transition"
            >
              ❯
            </button>

          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryWithState;