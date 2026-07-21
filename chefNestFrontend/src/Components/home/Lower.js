import React from "react";

const Lower = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="uppercase tracking-widest text-orange-100 font-semibold mb-3">
              Join Our Community
            </p>

            <h2 className="text-5xl font-bold text-white leading-tight">
              Become a Professional Chef with
              <span className="block text-yellow-300">ChefNest</span>
            </h2>

            <p className="text-orange-100 text-lg mt-6 leading-8 max-w-2xl">
              Join our growing network of verified chefs and showcase your
              culinary skills. Connect with customers, grow your career,
              and earn with flexible opportunities.
            </p>
          </div>

          {/* Right CTA */}
          <div className="flex justify-center">
            <button className="bg-white text-orange-600 font-bold text-xl px-10 py-4 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Become a Chef
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Lower;