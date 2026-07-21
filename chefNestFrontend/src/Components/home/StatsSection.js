import React from "react";
import { FaUtensils, FaUserTie, FaHome } from "react-icons/fa";

const StatsSections = () => {
  const stats = [
    {
      icon: <FaUtensils />,
      number: "3000+",
      title: "Meals Cooked",
      description: "Fresh, healthy, and delicious meals prepared with care.",
    },
    {
      icon: <FaUserTie />,
      number: "450+",
      title: "Verified Chefs",
      description: "Experienced and trusted chefs delivering quality service.",
    },
    {
      icon: <FaHome />,
      number: "1K+",
      title: "Happy Households",
      description: "Families who trust ChefNest for everyday home cooking.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-orange-500 uppercase tracking-widest font-semibold">
            Our Impact
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Trusted by Thousands
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
            ChefNest has helped thousands of families enjoy fresh home-cooked
            meals with trusted and verified professional chefs.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center border border-gray-100"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-4xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-gray-900">
                {item.number}
              </h3>

              <h4 className="text-2xl font-semibold mt-3 text-gray-800">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSections;