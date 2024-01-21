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

//update genre
router.put("/", async (req, res) => {
  try {
    const { _id, title } = req.body;
    const updateGenre = await Genre.findByIdAndUpdate(
      _id,
      { title },
      {
        new: true,
      }
    );
    if (updateGenre) {
      res.status(200).json(updateGenre);
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//delete genre
router.delete("/", async (req, res) => {
  try {
    const { _id, title } = req.body;
    const deleteGenre = await Genre.findByIdAndDelete(
      _id,
      { title },
      {
        new: true,
      }
    );
    if (deleteGenre) {
      res.status(200).json(deleteGenre);
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
