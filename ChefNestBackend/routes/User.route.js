const {
  UserSignup,
  UserLogin,
  getAllUsers,
} = require("../controller/User.controller");

const router = require("express").Router();

router.post("/signup", UserSignup);
router.post("/login", UserLogin);
router.get("/get", getAllUsers);

module.exports = router;