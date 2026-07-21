import React from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const pricingData = [
  {
    title: "Monthly Home Chef",
    price: "Dedicated chef for your everyday cooking needs.",
    features: [
      "Daily Fresh Meals",
      "Morning & Evening Cooking",
      "Personalized Menu",
    ],
    buttonText: "Book Now",
    note: "Starting from ₹4,999 / month",
    popular: true,
  },
  {
    title: "One-Time Chef",
    price: "Hire a professional chef for a single meal at your home.",
    features: [
      "Verified Professional Chef",
      "Fresh & Hygienic Cooking",
      "Customized Menu",
    ],
    buttonText: "Book Now",
    note: "Starting from ₹299 / visit",
    popular: false,
  },
  {
    title: "Party Chef",
    price: "Professional chefs for parties and special occasions.",
    features: [
      "Birthday Parties",
      "Family Gatherings",
      "Corporate Events",
    ],
    buttonText: "Book Now",
    note: "Custom Pricing",
    popular: false,
  },
];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">
            Discover Our Services
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Choose the perfect cooking service that fits your lifestyle.
          </p>
        </div>

     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border ${
                plan.popular
                  ? "border-orange-500"
                  : "border-gray-200"
              } p-6 flex flex-col`}
            >
              {plan.popular && (
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {plan.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-7">
                {plan.price}
              </p>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white mr-3">
                      ✓
                    </div>

                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/book-now")}
                className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-300"
              >
                {plan.buttonText}
              </button>

              <p className="text-sm text-gray-500 mt-4">
                {plan.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;