import { FaTimes } from "react-icons/fa";

const ChefModal = ({ chef, onClose }) => {
  if (!chef) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[700px] rounded-xl shadow-xl p-6 relative max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 hover:text-red-500"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex gap-6">

          <img
            src={chef.profilepic || chef.default_cook_image}
            alt={chef.name}
            className="w-40 h-40 rounded-xl object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold">
              {chef.name}
            </h2>

            <p className="text-gray-500 mt-2">
              📍 {chef.city}, {chef.state}
            </p>

            <p className="mt-2">
              ⭐ {chef.starRating} ({chef.totalRatings} Reviews)
            </p>

            <p className="mt-2">
              Experience : {chef.experience}
            </p>

            <p className="mt-2">
              {chef.verified ? "✅ Verified" : "❌ Not Verified"}
            </p>
          </div>

        </div>

        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-2">
          About
        </h3>

        <p className="text-gray-600">
          {chef.aboutCook || "No description available"}
        </p>

        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-2">
          Languages
        </h3>

        <div className="flex flex-wrap gap-2">
          {chef.language?.map((lang, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>

        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-2">
          Cuisine
        </h3>

        <div className="space-y-2">
          {chef.cuisineRatings?.map((item, index) => (
            <p key={index}>
              ⭐ {item.cuisine} ({item.rating})
            </p>
          ))}
        </div>

        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-2">
          Available Locations
        </h3>

        <ul className="list-disc ml-5">
          {chef.availableLocations?.map((loc, index) => (
            <li key={index}>{loc}</li>
          ))}
        </ul>

        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-2">
          Availability
        </h3>

        {chef.availability?.map((slot, index) => (
          <p key={index}>
            {slot.start} - {slot.end}
          </p>
        ))}

      </div>
    </div>
  );
};

export default ChefModal;