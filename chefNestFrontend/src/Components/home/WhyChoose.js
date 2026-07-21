import React from "react";
import {
  FaUserTie,
  FaClipboardCheck,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserTie />,
      title: "Verified Professional Chefs",
      description:
        "Experienced and background-verified chefs who deliver restaurant-quality meals at home.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Easy Online Booking",
      description:
        "Book your preferred chef in just a few clicks with a simple and hassle-free process.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Service",
      description:
        "Our chefs arrive on schedule and prepare fresh meals exactly when you need them.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description:
        "Our support team is always available to assist you before and after your booking.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Experience the ChefNest Difference
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-8">
            We make home cooking convenient, reliable and enjoyable by
            connecting you with experienced chefs who understand your taste
            and lifestyle.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-4xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;