import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import {
  getAllChefs,
  addChef,
  updateChef,
  deleteChef,
} from "../services/chefService";

import ChefModal from "../components/ChefModal";
import ChefForm from "../components/ChefForm";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");

const [selectedChef, setSelectedChef] = useState(null);
const [showForm, setShowForm] = useState(false);
const [editingChef, setEditingChef] = useState(null);

  useEffect(() => {
    fetchChefs();
  }, []);

  const fetchChefs = async () => {
    try {
      const res = await getAllChefs();
      setChefs(res.data.data);
    } catch (err) {
      console.error("Error fetching chefs:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleSaveChef = async (chefData) => {
  try {
    if (editingChef) {
      await updateChef(editingChef._id, chefData);
      toast.success("Chef updated successfully!");
    } else {
      await addChef(chefData);
      toast.success("Chef added successfully!");
    }

    fetchChefs();
    setShowForm(false);
    setEditingChef(null);
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong");
  }
};

  const filteredChefs = chefs.filter(
    (chef) =>
      chef.name?.toLowerCase().includes(search.toLowerCase()) ||
      chef.city?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <h2 className="text-2xl font-semibold">
        Loading chefs...
      </h2>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Chefs Management
        </h1>

       <button
  onClick={() => {
    setEditingChef(null);
    setShowForm(true);
  }}
  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
>
          <FaPlus />
          Add Chef
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-left">Experience</th>
              <th className="p-4 text-left">Rating</th>
              <th className="p-4 text-left">Verified</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredChefs.map((chef) => (
              <tr
                key={chef._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">
                  <img
                    src={
                      chef.profilepic ||
                      chef.default_cook_image ||
                      "https://via.placeholder.com/60"
                    }
                    alt={chef.name}
                    className="w-14 h-14 rounded-full object-cover border"
                  />
                </td>

                <td className="p-4 font-medium">
                  {chef.name}
                </td>

                <td className="p-4">
                  {chef.city}
                </td>

                <td className="p-4">
                  {chef.experience}
                </td>

                <td className="p-4">
                  ⭐ {chef.starRating} ({chef.totalRatings})
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      chef.verified
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {chef.verified ? "Verified" : "Pending"}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setSelectedChef(chef)}
                      className="text-green-600 hover:text-green-800"
                      title="View"
                    >
                      <FaEye />
                    </button>

                    <button
  onClick={() => {
    setEditingChef(chef);
    setShowForm(true);
  }}
  className="text-blue-600 hover:text-blue-800"
  title="Edit"
>
  <FaEdit />
</button>

<button
  onClick={async () => {
    const confirmDelete = window.confirm(
      `Delete ${chef.name}?`
    );

    if (!confirmDelete) return;

    try {
      await deleteChef(chef._id);
      fetchChefs();
      toast.success("Chef deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete chef");
    }
  }}
  className="text-red-600 hover:text-red-800"
  title="Delete"
>
  <FaTrash />
</button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredChefs.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-8 text-gray-500"
                >
                  No chefs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedChef && (
        <ChefModal
          chef={selectedChef}
          onClose={() => setSelectedChef(null)}
        />
      )}
      {showForm && (
  <ChefForm
    chef={editingChef}
    onClose={() => {
      setShowForm(false);
      setEditingChef(null);
    }}
    onSubmit={handleSaveChef}
  />
)}
    </>
  );
};

export default Chefs;