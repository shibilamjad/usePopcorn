const express = require("express");
const router = express.Router();
const {
  userList,
  userWatchList,
  register,
  addUserWatchList,
  login,
  deleateWatchLater,
  logout,
  refreshToken,
  adminRegister,
  adminLogin,
} = require("../controller/userController");

const { checkAuth } = require("../middleware/checkAuth ");

// users list
router.get("/", userList);

// User create
router.post("/signup", register);

// user login
router.post("/login", login);

// User create
router.post("/adminSignup", adminRegister);

// user admin login
router.post("/adminLogin", adminLogin);

// user logout
router.post("/logout", logout);

// user refreshToken
router.get("/refreshToken", refreshToken);

// fetch user watchList movies
router.get("/watchLater", checkAuth, userWatchList);

// user add watchleater movies (client)
router.put("/addWatchLater", checkAuth, addUserWatchList);

// user delete watchleater movies (client)
router.delete("/deleteWatchLater", checkAuth, deleateWatchLater);

module.exports = router;
