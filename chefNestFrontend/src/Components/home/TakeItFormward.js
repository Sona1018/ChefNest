import React from "react";

const TakeItForward = () => {
  return (
    <section className="bg-orange-500 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white mb-6">
          Ready to Enjoy Fresh Home-Cooked Meals?
        </h2>

        <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-10">
          Book experienced home chefs for daily meals, family gatherings,
          special occasions, or personalized cooking services—all from the
          comfort of your home.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <button className="bg-white text-orange-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">
            Book a Chef
          </button>

          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-500 transition">
            Explore Services
          </button>

        </div>

      </div>
    </section>
  );
};

export default TakeItForward;