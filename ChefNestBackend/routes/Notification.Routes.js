const express = require("express");
const router = express.Router();

const {
  getNotifications,
  markAsRead,
} = require("../controller/Notification.Controller");
router.get("/", getNotifications);

router.put("/:id/read", markAsRead);

module.exports = router;