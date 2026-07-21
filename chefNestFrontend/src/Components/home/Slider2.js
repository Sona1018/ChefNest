import React from "react";
import { useNavigate } from "react-router-dom";

const Carousel2 = () => {
  const navigate = useNavigate();

  const handleExploreServices = () => {
    const section = document.getElementById("services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80")',
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">

            <p className="text-orange-400 text-lg font-semibold tracking-wide uppercase mb-4">
              Trusted Home Chef Platform
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Book Professional <br />
              Home Chefs For <br />
              Every Occasion
            </h1>

            <p className="text-gray-200 text-lg mt-6 leading-8">
              Hire verified and experienced chefs for daily meals,
              family dinners, parties and special occasions.
              Enjoy restaurant-quality food prepared fresh in your own kitchen.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => navigate("/book-now")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition duration-300"
              >
                Book a Chef
              </button>

              <button
                onClick={handleExploreServices}
                className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition duration-300"
              >
                Explore Services
              </button>

            </div>

            <div className="flex flex-wrap gap-10 mt-12 text-white">

              <div>
                <h2 className="text-3xl font-bold">1K+</h2>
                <p className="text-gray-300">Happy Families</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">450+</h2>
                <p className="text-gray-300">Verified Chefs</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">3000+</h2>
                <p className="text-gray-300">Meals Cooked</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel2;