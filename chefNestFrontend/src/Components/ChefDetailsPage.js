import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const ChefDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [chef, setChef] = useState(null);

  useEffect(() => {
    const fetchChef = async () => {
      try {
        const res = await axios.get("http://localhost:8000/chef/get");
        const found = res.data.data.find((c) => c._id === id);
        setChef(found);
      } catch (err) {
        console.error("Failed to fetch chef details", err);
      }
    };

    fetchChef();
  }, [id]);

  if (!chef) {
    return (
      <div className="text-center mt-40 text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-24 px-4">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}

        <div className="flex flex-col md:flex-row items-center gap-8">

          <img
            src={chef.profilepic || "https://via.placeholder.com/120"}
            alt={chef.name}
            className="w-36 h-36 rounded-full object-cover border-4 border-orange-500"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/120";
            }}
          />

          <div>

            <h1 className="text-4xl font-bold">
              {chef.name}
            </h1>

            <p className="text-gray-500 mt-2">
              {chef.city}, {chef.area}
            </p>

            <p className="text-yellow-600 text-lg mt-2">
              ⭐ {chef.starRating || "0"} ({chef.totalRatings || "0"} Ratings)
            </p>

          </div>

        </div>

        {/* About */}

        <div className="mt-10">

          <h2 className="text-2xl font-semibold mb-3">
            About Chef
          </h2>

          <p className="text-gray-600 leading-8">
  {chef.aboutCook ||
    `${chef.name} is a verified professional home chef with ${chef.experience} of experience. Specializes in preparing hygienic, delicious, and customized meals according to customer preferences.`}
</p>

        </div>

        {/* Cuisine */}

        <div className="mt-10">

  <h2 className="text-2xl font-semibold mb-4">
    Cuisine Specialties
  </h2>

  <p className="text-gray-700 leading-8">
    {chef.cuisineRatings?.length
      ? chef.cuisineRatings.map((item) => item.cuisine).join(", ")
      : "North Indian, South Indian, Chinese"}
  </p>

</div>

        {/* Availability */}

        <div className="mt-10">

          <h2 className="text-2xl font-semibold mb-3">
            Available Location
          </h2>

          <div className="flex items-center gap-3 text-blue-600">

            <FaMapMarkerAlt />

            <span>
  {chef.availableLocations?.join(", ") ||
    `${chef.city}, ${chef.area}`}
</span>

          </div>

        </div>

        {/* Timings */}

       <div className="mt-8">

  <h2 className="text-2xl font-semibold mb-3">
    Available Timings
  </h2>

  <p className="text-gray-700 flex items-center gap-2">
    <MdAccessTime className="text-orange-500" />

    {chef.availability?.length
      ? chef.availability
          .map((slot) => `${slot.start} - ${slot.end}`)
          .join(", ")
      : "9:00 AM - 9:00 PM"}

  </p>

</div>

        {/* Information */}

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-gray-50 rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-4">
              Chef Information
            </h2>

            <p>
              <strong>Experience:</strong>{" "}
              {chef.experience || "N/A"} Years
            </p>

            <p className="mt-3">
              <strong>Phone:</strong>{" "}
              {chef.phone}
            </p>

            <p className="mt-3">
              <strong>Houses Served:</strong>{" "}
              {chef.housesServed || 0}
            </p>

            <p className="mt-3">
              <strong>Food Type:</strong>{" "}
              {chef.veg && "Veg "}
              {chef.nonVeg && "/ Non-Veg"}
            </p>

          </div>

          <div className="bg-gray-50 rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-4">
              Ratings
            </h2>

            <p className="text-3xl text-yellow-500">
              ⭐ {chef.starRating || 0}
            </p>

            <p className="text-gray-500 mt-2">
              {chef.totalRatings || 0} Customer Ratings
            </p>

            <button
              onClick={() => navigate("/book-now")}
              className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Book This Chef
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ChefDetails;