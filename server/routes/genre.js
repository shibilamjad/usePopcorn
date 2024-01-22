const router = require("express").Router();

const Genre = require("../models/genreModel");
const {
  genre,
  addGenre,
  updateGenre,
  deleteGenre,
} = require("../controller/genreController");

// genre list
router.get("/", genre);

// genre create
router.post("/", addGenre);
// Update genre
router.put("/:id", updateGenre);

//delete genre
router.delete("/", deleteGenre);

module.exports = router;
