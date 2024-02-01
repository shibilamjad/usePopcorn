const express = require("express");
const router = express.Router();
const {
  userList,
  userWatchList,
  register,
  addUserWatchList,
} = require("../controller/userController");

// User create
router.post("/", register);

// users list
router.get("/", userList);

// user add watchleater movies (client)
router.put("/addWatchLater/:userId", addUserWatchList);

// fetch user watchList movies
router.get("/watchLater/:userId", userWatchList);

module.exports = router;
