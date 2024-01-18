const express = require("express");
const router = express.Router();

const Users = require("../models/userModel");

router.get("/", async (req, res) => {
  try {
    const usersList = await Users.find().select("name age gender movie");
    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
// fetch watchList movies

router.get("/watchLater/:userId", async (req, res) => {
  try {
    const watchLater = await Users.findById(req.params.userId)
      .select("movie")
      .populate("movie");
    res.status(200).json(watchLater);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// User create
router.post("/", async (req, res) => {
  try {
    const isExist = await Users.findOne({ name: req.body.name });
    if (!isExist) {
      const createUser = await Users.create(req.body);
      return res.status(200).json(createUser);
    }
    return res.status(400).json({
      message: "User already exist",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// user add watchleater movies (client)
router.put("/addWatchLater/:userId", async (req, res) => {
  try {
    const userId = req.params.userId; //pass with params
    const movieId = req.body.movieId; // pass with body

    const usersList = await Users.findByIdAndUpdate(
      userId,
      {
        $push: {
          movie: movieId,
        },
      },
      { new: true }
    );
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
