const express = require("express");
const router = express.Router();

const Movies = require("../models/movieModel");

router.get("/", async (req, res) => {
  try {
    const movieList = await Movies.find().select("title ratings genre");
    res.status(200).json(movieList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//get all movies with genre *(dashboard)

router.get("/genre", async (req, res) => {
  try {
    const movieList = await Movies.find()
      .select("title ratings genre")
      .populate("genre");

    res.status(200).json(movieList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// movie create (dashboard)

router.post("/", async (req, res) => {
  try {
    const isExist = await Movies.findOne({ title: req.body.title });
    if (!isExist) {
      const createMovie = await Movies.create(req.body);
      return res.status(200).json(createMovie);
    }
    return res.status(400).json({
      message: `${req.body.title} already created`,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//Update Movie with Genre (dashboard)
router.put("/updateMovie&genre/:movieId", async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const genreID = req.body.genreID;

    const movie = await Movies.findByIdAndUpdate(
      movieId,
      {
        $push: { genre: genreID },
      },
      { new: true }
    );
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
