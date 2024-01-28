const upload = require("../middleware/multer");
const cloudinaryImg = require("../config/cloudinery");
const Movies = require("../models/movieModel");
const Genres = require("../models/genreModel");
const util = require("util");

const movie = async (req, res) => {
  try {
    const movieList = await Movies.find().select("title ratings genre image");
    res.status(200).json(movieList);
  } catch (error) {
    res.status(500).json({
      message: `Error fetching movies: ${error.message}`,
    });
  }
};

const movieGenre = async (req, res) => {
  try {
    const movieList = await Movies.find()
      .select("title ratings genre image")
      .populate("genre");

    res.status(200).json(movieList);
  } catch (error) {
    res.status(500).json({
      message: `Error fetching movies by genre: ${error.message}`,
    });
  }
};

const addMovie = async (req, res) => {
  try {
    const uploadAsync = util.promisify(upload.single("image"));
    await uploadAsync(req, res);

    const cloudinaryResult = await cloudinaryImg.uploader.upload(req.file.path);
    const { secure_url: image } = cloudinaryResult;

    const { title, ratings, genre } = req.body;

    const isExistMovie = await Movies.findOne({ title });

    if (isExistMovie) {
      return res.status(400).json({
        message: `${title} already created`,
      });
    }

    const newMovie = await Movies.create({
      title,
      ratings,
      image,
      genre: JSON.parse(genre),
    });

    return res.status(200).json(newMovie);
  } catch (error) {
    console.error("Error adding movie:", error);
    res.status(500).json({
      message: `Error adding movie: ${error.message || "Unknown error"}`,
    });
  }
};
const updateMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const { title, ratings, genre } = req.body;

    const existingMovie = await Movies.findById(movieId);

    if (!existingMovie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    upload.single("image")(req, res, async function (error) {
      try {
        if (error) {
          throw new Error(`Error uploading file: ${error.message}`);
        }

        const cloudinaryResult = await cloudinaryImg.uploader.upload(
          req.file.path
        );
        const { secure_url: image } = cloudinaryResult;

        const updatedMovie = await Movies.findByIdAndUpdate(
          movieId,
          { title, ratings, image, genre: JSON.parse(genre) },
          {
            new: true,
            upsert: true,
          }
        );

        res.status(200).json(updatedMovie);
      } catch (error) {
        res.status(500).json({
          message: `Error updating movie: ${error.message}`,
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res.status(400).json({
        message: "Missing movie ID",
      });
    }

    const deleteMovie = await Movies.findByIdAndDelete(_id);

    if (deleteMovie) {
      res.status(200).json(deleteMovie);
    } else {
      res.status(404).json({
        message: "Movie not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error deleting movie: ${error.message}`,
    });
  }
};

module.exports = {
  movie,
  movieGenre,
  addMovie,
  updateMovie,
  deleteMovie,
};
