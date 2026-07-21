import React from "react";
import { FaUsers, FaUtensils, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-gray-900">
            About ChefNest
          </h1>

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            ChefNest connects households with trusted and experienced home
            chefs, making healthy and delicious home-cooked meals easily
            accessible for everyone.
          </p>

        </div>

        {/* Mission & Vision */}

        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white rounded-xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              To simplify home cooking by connecting customers with skilled,
              verified chefs who prepare fresh, hygienic and personalized meals.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8">
              To become India's most trusted platform for home chef booking
              while promoting healthy eating and convenient cooking services.
            </p>

          </div>

        </div>

        {/* Why Choose */}

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose ChefNest?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-md text-center">

            <FaUsers className="text-5xl text-orange-500 mx-auto mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Verified Chefs
            </h3>

            <p className="text-gray-600">
              All chefs are professionally trained and verified for your safety.
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">

            <FaUtensils className="text-5xl text-orange-500 mx-auto mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Fresh Meals
            </h3>

            <p className="text-gray-600">
              Enjoy freshly prepared meals according to your taste and
              preferences.
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">

            <FaShieldAlt className="text-5xl text-orange-500 mx-auto mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Trusted Service
            </h3>

            <p className="text-gray-600">
              Reliable customer support and hassle-free booking experience.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;