import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChefDirectory = () => {
  const [chefs, setChefs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    city: "",
    area: "",
    locality: "",
  });

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await axios.get(
          (process.env.REACT_APP_API_URL || "http://localhost:8000") +
            "/chef/get"
        );

        if (response.data && response.data.data) {
          setChefs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching chefs:", error);
      }
    };

    fetchChefs();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredChefs = chefs.filter((chef) => {
    const matchesGlobalSearch =
      chef.name?.toLowerCase().includes(search.toLowerCase()) ||
      chef.phone?.includes(search);

    const matchesCity =
      filters.city === "" ||
      chef.city?.toLowerCase().includes(filters.city.toLowerCase());

    const matchesArea =
      filters.area === "" ||
      chef.area?.toLowerCase().includes(filters.area.toLowerCase());

    const matchesLocality =
      filters.locality === "" ||
      chef.locality
        ?.toLowerCase()
        .includes(filters.locality.toLowerCase());

    return (
      matchesGlobalSearch &&
      matchesCity &&
      matchesArea &&
      matchesLocality
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-16">
      {/* Search Filters */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

        <input
          type="text"
          placeholder="Global Search..."
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          name="city"
          placeholder="Search by City"
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
          value={filters.city}
          onChange={handleFilterChange}
        />

        <input
          type="text"
          name="area"
          placeholder="Search by Area"
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
          value={filters.area}
          onChange={handleFilterChange}
        />

        <input
          type="text"
          name="locality"
          placeholder="Search by Locality"
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
          value={filters.locality}
          onChange={handleFilterChange}
        />
      </div>

      {/* Heading */}

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Trending Home Chefs
      </h1>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredChefs.map((chef, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 cursor-pointer"
          >
            {/* Top */}

            <div className="flex items-center gap-4">

              <img
                src={chef.profilepic || "https://via.placeholder.com/80"}
                alt={chef.name}
                className="w-20 h-20 rounded-full object-cover border"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/80";
                }}
              />

              <div>

                <h2 className="text-xl font-bold">
                  {chef.name}
                </h2>

                <p className="text-gray-500">
                  {chef.city}, {chef.area}
                </p>

              </div>

            </div>

            {/* Details */}

            <div className="mt-5 space-y-2">

              <p className="text-yellow-600 font-semibold">
                ⭐ {chef.starRating || "0"} ({chef.totalRatings || "0"} Ratings)
              </p>

              <p className="text-blue-600">
                📞 {chef.phone}
              </p>

              <p className="font-medium">
                Experience: {chef.experience || "N/A"} Years
              </p>

            </div>

            {/* Button */}

            <button
              onClick={() => navigate(`/chef/${chef._id}`)}
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              View Details
            </button>

          </div>

        ))}

      </div>
    </div>
  );
};

export default ChefDirectory;