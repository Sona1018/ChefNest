import { useEffect, useState } from "react";

import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import toast from "react-hot-toast";
import {
  getAllBookings,
  deleteBooking,
  updateBooking,
} from "../services/bookingService";

import BookingModal from "../components/BookingModal";
import BookingForm from "../components/BookingForm";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedBooking, setSelectedBooking] = useState(null);
const [showForm, setShowForm] = useState(false);
const [editingBooking, setEditingBooking] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);
  const handleSaveBooking = async (bookingData) => {
  try {
    await updateBooking(editingBooking._id, bookingData);

      toast.success("Booking updated successfully!");

    fetchBookings();
    setShowForm(false);
    setEditingBooking(null);
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong");

  }
};

  const fetchBookings = async () => {
    try {
      const res = await getAllBookings();
      setBookings(res.data.data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    } finally {
      setLoading(false);
    }
  };

 const filteredBookings = bookings.filter((booking) => {
  const searchText = search.trim().toLowerCase();

  const bookingId = `BK-${booking._id.slice(-6).toUpperCase()}`;

  const matchesSearch = bookingId
    .toLowerCase()
    .includes(searchText);

  const matchesStatus =
    statusFilter === "All" ||
    booking.status === statusFilter;

  return matchesSearch && matchesStatus;
});

  if (loading) {
    return (
      <h2 className="text-2xl font-semibold">
        Loading Bookings...
      </h2>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Booking Management
        </h1>

        <div className="bg-orange-500 text-white px-5 py-3 rounded-lg font-semibold">
          Total Bookings : {bookings.length}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">

  <div className="relative w-80">
    <FaSearch className="absolute left-3 top-4 text-gray-400" />

    <input
      type="text"
      placeholder="Search by booking ID..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
  >
    <option value="All">All Status</option>
    <option value="Pending">Pending</option>
    <option value="Confirmed">Confirmed</option>
    <option value="Completed">Completed</option>
    <option value="Cancelled">Cancelled</option>
  </select>

</div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4 text-left">Booking ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Booking Date</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.map((booking, index) => (
              <tr
                key={booking._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{index + 1}</td>

<td className="p-4 font-semibold text-orange-600">
  BK-{booking._id.slice(-6).toUpperCase()}
</td>

<td className="p-4">{booking.name}</td>

                <td className="p-4">{booking.email}</td>

                <td className="p-4">{booking.phone}</td>

                <td className="p-4">{booking.service}</td>

                <td className="p-4">
                  {new Date(
                    booking.bookingDate
                  ).toLocaleDateString()}
                </td>
               <td className="p-4">
  <select
    value={booking.status}
    onChange={async (e) => {
      try {
        await updateBooking(booking._id, {
          ...booking,
          status: e.target.value,
        });

        toast.success("Status Updated");
        fetchBookings();
      } catch (err) {
        console.error(err);
        toast.error("Update Failed");
      }
    }}
    className={`px-3 py-2 rounded-lg font-semibold border
      ${
        booking.status === "Pending"
          ? "bg-yellow-100 text-yellow-700"
          : booking.status === "Confirmed"
          ? "bg-green-100 text-green-700"
          : booking.status === "Completed"
          ? "bg-blue-100 text-blue-700"
          : "bg-red-100 text-red-700"
      }`}
  >
    <option value="Pending">Pending</option>
    <option value="Confirmed">Confirmed</option>
    <option value="Completed">Completed</option>
    <option value="Cancelled">Cancelled</option>
  </select>
</td>
                <td className="p-4">
                  <div className="flex justify-center gap-4">

                  <button
  onClick={() => setSelectedBooking(booking)}
  className="text-green-600 hover:text-green-800"
  title="View"
>
  <FaEye />
</button>

<button
  onClick={() => {
    setEditingBooking(booking);
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
                          `Delete booking of ${booking.name}?`
                        );

                        if (!confirmDelete) return;

                        try {
                          await deleteBooking(booking._id);
                          fetchBookings();
                          toast.success("Booking deleted successfully!");
                        } catch (err) {
                          console.error(err);
                          toast.error("Delete failed");
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

            {filteredBookings.length === 0 && (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-8 text-gray-500"
                >
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {selectedBooking && (
  <BookingModal
    booking={selectedBooking}
    onClose={() => setSelectedBooking(null)}
  />
)}

{showForm && (
  <BookingForm
    booking={editingBooking}
    onClose={() => {
      setShowForm(false);
      setEditingBooking(null);
    }}
    onSubmit={handleSaveBooking}
  />
)}
    </>
  );
};

export default Bookings;