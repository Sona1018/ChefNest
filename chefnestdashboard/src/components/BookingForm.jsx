import { useState, useEffect } from "react";

const BookingForm = ({ booking, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    bookingDate: "",
    notes: "",
  });

  useEffect(() => {
    if (booking) {
      setFormData({
        name: booking.name || "",
        phone: booking.phone || "",
        email: booking.email || "",
        service: booking.service || "",
        bookingDate: booking.bookingDate
          ? booking.bookingDate.substring(0, 10)
          : "",
        notes: booking.notes || "",
      });
    }
  }, [booking]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[650px] rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          {booking ? "Edit Booking" : "Add Booking"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4"
        >

          <input
            name="name"
            placeholder="Name"
            value={formData.name}
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
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            name="service"
            placeholder="Service"
            value={formData.service}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            className="border p-3 rounded col-span-2"
            required
          />

          <textarea
            name="notes"
            placeholder="Notes"
            rows="4"
            value={formData.notes}
            onChange={handleChange}
            className="border p-3 rounded col-span-2"
          />

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
              {booking ? "Update Booking" : "Add Booking"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default BookingForm;