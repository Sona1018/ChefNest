import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaClipboardList,
  FaUtensils,
  FaCheckCircle,
  FaHome,
} from "react-icons/fa";

const Work = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Simple Process
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mt-3">
            How It Works
          </h1>

          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Book a professional home chef in just four simple steps.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">

          {/* Step 1 */}
          <div className="p-4 lg:w-1/4 md:w-1/2 relative">
            <div className="h-full flex flex-col items-center text-center relative">

              <div className="w-28 h-28 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <FaClipboardList className="text-6xl text-orange-500" />
              </div>

              <FaArrowRight className="hidden lg:block absolute top-16 -right-5 text-orange-500 text-3xl" />

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Create Your Booking
              </h3>

              <p className="text-gray-600">
                Fill in your details and tell us your cooking preferences.
              </p>

            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 lg:w-1/4 md:w-1/2 relative">
            <div className="h-full flex flex-col items-center text-center relative">

              <div className="w-28 h-28 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <FaUtensils className="text-6xl text-orange-500" />
              </div>

              <FaArrowRight className="hidden lg:block absolute top-16 -right-5 text-orange-500 text-3xl" />

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Choose a Service
              </h3>

              <p className="text-gray-600">
                Select the home chef service that best suits your needs.
              </p>

            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 lg:w-1/4 md:w-1/2 relative">
            <div className="h-full flex flex-col items-center text-center relative">

              <div className="w-28 h-28 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <FaCheckCircle className="text-6xl text-orange-500" />
              </div>

              <FaArrowRight className="hidden lg:block absolute top-16 -right-5 text-orange-500 text-3xl" />

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Confirm Your Booking
              </h3>

              <p className="text-gray-600">
                Review your booking details and confirm securely.
              </p>

            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">

              <div className="w-28 h-28 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <FaHome className="text-6xl text-orange-500" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Enjoy Fresh Home Cooking
              </h3>

              <p className="text-gray-600 mb-8">
                A verified chef arrives at your home and prepares fresh meals.
              </p>

              <button
                onClick={() => navigate("/book-now")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                Book a Chef
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;