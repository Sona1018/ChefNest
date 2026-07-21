import React from "react";
import {
  FaUserCheck,
  FaUtensils,
  FaLeaf,
  FaSmile,
} from "react-icons/fa";

const SkillIndiaSection = () => {
  const values = [
    {
      icon: <FaUserCheck />,
      title: "Verified Professionals",
      description: "Every chef is carefully verified to ensure safety, trust and quality service.",
    },
    {
      icon: <FaUtensils />,
      title: "Fresh Home Cooking",
      description: "Enjoy freshly prepared meals in your own kitchen, tailored to your taste.",
    },
    {
      icon: <FaLeaf />,
      title: "Healthy Ingredients",
      description: "We encourage hygienic cooking practices using fresh and quality ingredients.",
    },
    {
      icon: <FaSmile />,
      title: "Customer Satisfaction",
      description: "Delivering reliable experiences and making every meal memorable.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Our Commitment
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Why Families Trust ChefNest
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-8">
            We focus on providing reliable home chef services with quality,
            hygiene and customer satisfaction at every step.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-4xl mx-auto mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SkillIndiaSection;