const Genre = require("../models/genreModel");

const genre = async (req, res) => {
  try {
    const genreList = await Genre.find();
    res.status(200).json(genreList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const addGenre = async (req, res) => {
  try {
    const isExist = await Genre.findOne({ title: req.body.title });
    if (!isExist) {
      const createGenre = await Genre.create(req.body);
      return res.status(200).json(createGenre);
    }
    return res.status(409).json({
      message: `${req.body.title} already created`,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
const updateGenre = async (req, res) => {
  try {
    const genreId = req.params.id;
    const { title } = req.body;

    // Check if the genre exists
    const existingGenre = await Genre.findById(genreId);

    if (!existingGenre) {
      return res.status(404).json({
        message: "Genre not found",
      });
    }

    // Check if the new title already exists
    const isExist = await Genre.findOne({ title });

    if (isExist) {
      return res.status(409).json({
        message: "Genre with the provided title already exists",
      });
    }

    // Update the genre
    const updatedGenre = await Genre.findByIdAndUpdate(
      genreId,
      { title },
      {
        new: true,
      }
    );

    res.status(200).json(updatedGenre);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteGenre = async (req, res) => {
  try {
    const { _id } = req.body;
    const deleteGenre = await Genre.findByIdAndDelete(_id);
    if (deleteGenre) {
      res.status(200).json(deleteGenre);
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  genre,
  deleteGenre,
  addGenre,
  updateGenre,
};
