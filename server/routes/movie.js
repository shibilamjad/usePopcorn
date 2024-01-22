const router = require("express").Router();

const {
  movie,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controller/movieController");
const Movies = require("../models/movieModel");

router.get("/", movie);

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

router.post("/", addMovie);

//Update Movie with Genre (dashboard)
router.put("/updateMovie&genre/:movieId", updateMovie);

router.delete("/", deleteMovie);

module.exports = router;
