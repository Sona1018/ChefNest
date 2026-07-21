import React, { useState, useEffect } from "react";
import axios from "axios";

const TabSwitchComponent = () => {
  const [activeTab, setActiveTab] = useState("For Singles");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await axios.get(
          (process.env.REACT_APP_API_URL || "http://localhost:8000") +
            "/home/getall"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching home content:", error);
      }
    };

    fetchHomeData();
  }, []);

  const filteredData = data.find(
    (item) => item.category === activeTab
  );

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Our Services
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Choose the Perfect Home Chef
            <br />
            for Every Occasion
          </h1>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-8">
            Whether you need a chef for your daily meals or a special family
            gathering, ChefNest connects you with experienced professionals who
            prepare fresh and delicious food in your own kitchen.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <button
            className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ${
              activeTab === "For Singles"
                ? "text-orange-500 border-b-4 border-orange-500"
                : "text-gray-500 hover:text-orange-500"
            }`}
            onClick={() => setActiveTab("For Singles")}
          >
            Daily Meals
          </button>

          <button
            className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ${
              activeTab === "For Families"
                ? "text-orange-500 border-b-4 border-orange-500"
                : "text-gray-500 hover:text-orange-500"
            }`}
            onClick={() => setActiveTab("For Families")}
          >
            Family Gatherings
          </button>
        </div>

        {/* Content */}
        {filteredData && (
          <div className="flex flex-col lg:flex-row items-center gap-14">

            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={filteredData.image}
                alt={filteredData.title}
                className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {filteredData.title}
              </h2>

              <p className="text-gray-600 text-lg leading-8">
                {filteredData.content}
              </p>

              <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                Book a Chef
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default TabSwitchComponent;