const router = require("express").Router();
const multer = require("multer");
const {
  movie,
  deleteMovie,
  movieGenre,
  updateMovie,
  addMovie,
  movies,
} = require("../controller/movieController");

const upload = multer({ dest: "uploads/" });

router.get("/", movie);

//get all movies with genre *(dashboard)
router.get("/genre", movieGenre);

// get movie in client
router.get("/all", movies);

// movie create (dashboard)
router.post("/upload", addMovie);

// movie create (dashboard)
router.put("/updateMovie/:movieId", updateMovie);

//Update Movie with Genre (dashboard)
// router.put("/updateMovie&genre/:movieId", updateMovie);

router.delete("/", deleteMovie);

module.exports = router;
