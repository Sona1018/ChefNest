import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
  `${process.env.REACT_APP_API_URL}/contact/createContact`,
  formData
);

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-4xl font-bold text-center text-gray-900">
            Contact Us
          </h2>

          <p className="text-center text-gray-500 mt-3 mb-8">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* City */}
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium">
                City
              </label>

              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select your city</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bengaluru</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Kolkata</option>
                <option>Pune</option>
                <option>Ahmedabad</option>
                <option>Jaipur</option>
                <option>Lucknow</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-700 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition disabled:bg-gray-400"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;