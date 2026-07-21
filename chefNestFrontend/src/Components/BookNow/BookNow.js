import { useState } from "react";
import axios from "axios";

const BookNow = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [chefs, setChefs] = useState([]);
const [selectedChef, setSelectedChef] = useState(null);

  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  service: "",
  chefId: "",
  chefName: "",
  bookingDate: "",
  notes: "",
});

 const handleChange = async (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  if (name === "service") {
    setSelectedChef(null);

    setFormData((prev) => ({
      ...prev,
      service: value,
      chefId: "",
      chefName: "",
    }));

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/chef/service/${value}`
      );

      setChefs(res.data.data);
    } catch (error) {
      console.error(error);
      setChefs([]);
    }
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
  !formData.name ||
  !formData.phone ||
  !formData.email ||
  !formData.service ||
  !formData.chefId ||
  !formData.bookingDate
) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      console.log(formData);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/booking/create`,
        formData
      );

      alert(response.data.message);

      setSubmitted(true);

      setFormData({
         name: "",
  phone: "",
  email: "",
  service: "",
  chefId: "",
  chefName: "",
  bookingDate: "",
  notes: "",
      });
      setChefs([]);
setSelectedChef(null);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-24">

      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Book a Home Chef
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Complete the form below.
A booking confirmation along with your Booking ID will be sent to your registered email address.
        </p>

        {submitted ? (
          <div className="text-center py-12">

            <div className="text-6xl mb-4">✅</div>

            <h2 className="text-3xl font-bold text-green-600">
  Booking Submitted Successfully!
</h2>

<p className="mt-4 text-gray-600 leading-8">
  Thank you for choosing <span className="font-semibold">ChefNest</span>.
  <br />
  Your booking has been received successfully.
  <br />
  📧 A confirmation email containing your <span className="font-semibold">Booking ID</span> has been sent to your registered email address.
  <br />
  Our team will contact you shortly.
</p>

          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select Service</option>
              <option value="Monthly Home Chef">
                Monthly Home Chef
              </option>
              <option value="One-Time Chef">
                One-Time Chef
              </option>
              <option value="Party Chef">
                Party Chef
              </option>
            </select>
{formData.service && (
  <div className="border rounded-lg p-4">
    <h3 className="text-lg font-semibold mb-4">
      Select Your Chef
    </h3>

    {chefs.length === 0 ? (
      <p className="text-gray-500">
        No chefs available for this service.
      </p>
    ) : (
      <div className="grid md:grid-cols-2 gap-4">
        {chefs.map((chef) => (
          <div
            key={chef._id}
            onClick={() => {
              setSelectedChef(chef);

              setFormData((prev) => ({
                ...prev,
                chefId: chef._id,
                chefName: chef.name,
              }));
            }}
            className={`border rounded-xl p-4 cursor-pointer transition ${
              selectedChef?._id === chef._id
                ? "border-orange-500 bg-orange-50"
                : "hover:border-orange-400"
            }`}
          >
            <img
              src={
                chef.profilepic ||
                chef.default_cook_image
              }
              alt={chef.name}
              className="w-20 h-20 rounded-full object-cover mx-auto"
            />

            <h3 className="text-center font-bold mt-3">
              {chef.name}
            </h3>

            <p className="text-center text-gray-500">
              {chef.city}
            </p>

            <p className="text-center">
              ⭐ {chef.starRating}
            </p>

            <p className="text-center">
              Experience: {chef.experience}
            </p>

            {selectedChef?._id === chef._id && (
              <p className="text-center text-green-600 font-semibold mt-2">
                ✅ Selected
              </p>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
)}
            <input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              rows="4"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Address / Special Instructions"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition disabled:bg-gray-400"
            >
              {loading ? "Booking..." : "Book Now"}
            </button>

          </form>
        )}

      </div>

    </div>
  );
};

export default BookNow;