const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../controller/Booking.Controller");

const router = require("express").Router();

// Create Booking
router.post("/create", createBooking);

// Get All Bookings
router.get("/get", getBookings);

// Get Booking By ID
router.get("/get/:id", getBookingById);

// Update Booking
router.put("/update/:id", updateBooking);

// Delete Booking
router.delete("/delete/:id", deleteBooking);

module.exports = router;