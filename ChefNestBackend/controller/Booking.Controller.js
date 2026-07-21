const Notification = require("../models/Notification.Model");
const Booking = require("../models/Booking.Model");
const sendEmail = require("../utils/sendEmail");
// Create Booking
const createBooking = async (req, res) => {
  try {
    const {
  name,
  phone,
  email,
  service,
  chefId,
  chefName,
  bookingDate,
  notes,
} = req.body;

    if (
  !name ||
  !phone ||
  !email ||
  !service ||
  !chefId ||
  !chefName ||
  !bookingDate
){
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

const newBooking = new Booking({
  name,
  phone,
  email,
  service,
  chefId,
  chefName,
  bookingDate,
  notes,
});

    await newBooking.save();
    const bookingId = `BK-${newBooking._id
  .toString()
  .slice(-6)
  .toUpperCase()}`;
    await Notification.create({
  title: "New Booking",
  message: `${name} booked ${service} with ${chefName}`,
  type: "booking",
});
await sendEmail(
  email,
  "ChefNest Booking Confirmation",
 `
<h2>Hi ${name},</h2>

<p>Thank you for choosing <b>ChefNest</b>. 🎉</p>

<p>Your booking has been received successfully.</p>

<h3>Booking Details</h3>

<ul>
  <li><b>Booking ID:</b> ${bookingId}</li>
  <li><b>Service:</b> ${service}</li>
  <li><b>Chef:</b> ${chefName}</li>
  <li><b>Date:</b> ${new Date(bookingDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}</li>
  <li><b>Status:</b> Pending</li>
</ul>

<p>
📧 Please keep your <b>Booking ID</b> safe. You can use it to track or refer to your booking in the future.
</p>

<p>
Our team will contact you shortly regarding your booking.
</p>

<br/>

<p>Regards,</p>

<b>ChefNest Team</b>
`
);
    res.status(201).json({
      message: "Booking created successfully",
      data: newBooking,
    });
  } catch (error) {
    console.error("Booking Error:", error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Get All Bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Get Booking By ID
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json({
      message: "Booking fetched successfully",
      data: booking,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
//update booking
const updateBooking = async (req, res) => {
  try {
    const oldBooking = await Booking.findById(req.params.id);

    if (!oldBooking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (oldBooking.status !== updatedBooking.status) {
      
      let subject = "";
      let message = "";

      if (updatedBooking.status === "Confirmed") {
        subject = "🎉 Your ChefNest Booking is Confirmed";

        message = `
          <h2>Hi ${updatedBooking.name},</h2>

          <p>Great news! Your booking has been <b>confirmed</b>.</p>

          <ul>
            <li><b>Service:</b> ${updatedBooking.service}</li>
            <li><b>Date:</b> ${new Date(updatedBooking.bookingDate).toLocaleDateString()}</li>
            <li><b>Status:</b> Confirmed</li>
          </ul>

          <p>We look forward to serving you!</p>

          <br>

          <b>ChefNest Team</b>
        `;
      }

      if (updatedBooking.status === "Completed") {
        subject = "✅ Your ChefNest Booking is Completed";

        message = `
          <h2>Hi ${updatedBooking.name},</h2>

          <p>Your booking has been completed successfully.</p>

          <p>Thank you for choosing <b>ChefNest</b>.</p>

          <br>

          <b>ChefNest Team</b>
        `;
      }

      if (updatedBooking.status === "Cancelled") {
        subject = "❌ Your ChefNest Booking was Cancelled";

        message = `
          <h2>Hi ${updatedBooking.name},</h2>

          <p>We're sorry to inform you that your booking has been cancelled.</p>

          <p>If you have any questions, feel free to contact us.</p>

          <br>

          <b>ChefNest Team</b>
        `;
      }

      if (subject) {
        await sendEmail(
          updatedBooking.email,
          subject,
          message
        );
        
      }
    }

    res.status(200).json({
      message: "Booking updated successfully",
      data: updatedBooking,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
// Delete Booking
const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);

    if (!deletedBooking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json({
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};