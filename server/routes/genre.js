const express = require("express");
const router = express.Router();

const Genre = require("../models/genreModel");

// genre list
router.get("/", async (req, res) => {
  try {
    const genreList = await Genre.find();
    res.status(200).json(genreList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// genre create
router.post("/", async (req, res) => {
  try {
    const isExist = await Genre.findOne({ title: req.body.title });
    if (!isExist) {
      const createGenre = await Genre.create(req.body);
      return res.status(200).json(createGenre);
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

module.exports = router;
