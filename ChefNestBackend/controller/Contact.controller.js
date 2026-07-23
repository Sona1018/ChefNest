const Notification = require("../models/Notification.Model");
const Contact = require("../models/Contact.Models");
const sendEmail = require("../utils/sendEmail");

// Create Contact
const createContact = async (req, res) => {
  try {
    const { name, phone, email, city, message } = req.body;

    if (!name || !phone || !email || !city || !message) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // Save Contact
    const newContact = await Contact.create({
      name,
      phone,
      email,
      city,
      message,
    });
    await Notification.create({
  title: "New Contact",
  message: `${name} sent a contact inquiry`,
  type: "contact",
});

    // Thank You Email to User
    await sendEmail(
      email,
      "Thanks for contacting ChefNest",
      `
        <h2>Hi ${name},</h2>

        <p>Thank you for contacting <b>ChefNest</b>.</p>

        <p>We have received your message successfully.</p>

        <p>Our team will get back to you as soon as possible.</p>

        <h3>Your Details</h3>

        <ul>
          <li><b>Name:</b> ${name}</li>
          <li><b>City:</b> ${city}</li>
          <li><b>Phone:</b> ${phone}</li>
        </ul>

        <p>We appreciate your interest in ChefNest.</p>

        <br/>

        <b>ChefNest Team</b>
      `
    );

    // Admin Notification Email
    await sendEmail(
  process.env.ADMIN_EMAIL,
  "📩 New Contact Form Submission",
      `
        <h2>New Contact Inquiry</h2>

        <p>A new contact form has been submitted.</p>

        <hr>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>

        <p><b>Message:</b></p>
        <p>${message}</p>

        <hr>

        <p><b>ChefNest Admin Notification</b></p>
      `
    );

    res.status(201).json({
      message: "Message sent successfully",
      data: newContact,
    });

  } catch (error) {
    console.error("Contact Error:", error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Get All Contacts
const getallContact = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Contacts fetched successfully",
      data: contacts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Get Contact By ID
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json({
      data: contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Update Contact
const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedContact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json({
      message: "Contact updated successfully",
      data: updatedContact,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Delete Contact
const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json({
      message: "Contact deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createContact,
  getallContact,
  getContactById,
  updateContact,
  deleteContact,
};