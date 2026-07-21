import { useState, useEffect } from "react";

const ChefForm = ({ chef, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    serviceType: "",
    Address: "",
    city: "",
    state: "",
    area: "",
    country: "",
    pincode: "",
    aboutCook: "",
    profilepic: "",
    verified: false,
    veg: true,
    nonVeg: true,
  });

  useEffect(() => {
    if (chef) {
      setFormData({
        name: chef.name || "",
        email: chef.email || "",
        phone: chef.phone || "",
        experience: chef.experience || "",
        serviceType: chef.serviceType || "",
        Address: chef.Address || "",
        city: chef.city || "",
        state: chef.state || "",
        area: chef.area || "",
        country: chef.country || "",
        pincode: chef.pincode || "",
        aboutCook: chef.aboutCook || "",
        profilepic: chef.profilepic || "",
        veg: chef?.veg ?? true,
        nonVeg: chef?.nonVeg ?? true,
        verified: chef?.verified ?? false,
      });
    }
  }, [chef]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[700px] rounded-xl p-6 max-h-[90vh] overflow-y-auto">

        <h2 className="text-2xl font-bold mb-6">
          {chef ? "Edit Chef" : "Add Chef"}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          >
            <option value="">Select Service Type</option>
            <option value="Monthly Home Chef">Monthly Home Chef</option>
            <option value="One-Time Chef">One-Time Chef</option>
            <option value="Party Chef">Party Chef</option>
          </select>

          <input
            name="Address"
            placeholder="Address"
            value={formData.Address}
            onChange={handleChange}
            className="border p-3 rounded col-span-2"
            required
          />

          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            name="area"
            placeholder="Area"
            value={formData.area}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            name="profilepic"
            placeholder="Profile Image URL"
            value={formData.profilepic}
            onChange={handleChange}
            className="border p-3 rounded col-span-2"
          />

          <textarea
            name="aboutCook"
            placeholder="About Chef"
            value={formData.aboutCook}
            onChange={handleChange}
            className="border p-3 rounded col-span-2"
            rows="4"
          />

          <div className="flex gap-6 col-span-2">

            <label>
              <input
                type="checkbox"
                name="veg"
                checked={formData.veg}
                onChange={handleChange}
              />
              <span className="ml-2">Veg</span>
            </label>

            <label>
              <input
                type="checkbox"
                name="nonVeg"
                checked={formData.nonVeg}
                onChange={handleChange}
              />
              <span className="ml-2">Non Veg</span>
            </label>

            <label>
              <input
                type="checkbox"
                name="verified"
                checked={formData.verified}
                onChange={handleChange}
              />
              <span className="ml-2">Verified</span>
            </label>

          </div>

          <div className="col-span-2 flex justify-end gap-4 mt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-orange-500 text-white rounded"
            >
              {chef ? "Update Chef" : "Add Chef"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default ChefForm;