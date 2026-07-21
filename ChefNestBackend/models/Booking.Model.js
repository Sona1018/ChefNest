const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    service: {
      type: String,
      required: true,
      trim: true,
    },
chefId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Chef",
  required: true,
},

chefName: {
  type: String,
  required: true,
},
    bookingDate: {
      type: Date,
      required: true,
    },

    notes: {
      type: String,
      default: "",
    },

    status: {
  type: String,
  enum: [
    "Pending",
    "Confirmed",
    "Completed",
    "Cancelled",
  ],
  default: "Pending",
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", BookingSchema);