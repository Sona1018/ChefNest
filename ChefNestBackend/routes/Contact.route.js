const {
  createContact,
  getallContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controller/Contact.controller");

const router = require("express").Router();

router.post("/createContact", createContact);

router.get("/get", getallContact);

router.get("/get/:id", getContactById);

router.put("/update/:id", updateContact);

router.delete("/delete/:id", deleteContact);

module.exports = router;