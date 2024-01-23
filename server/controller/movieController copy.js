const Genre = require("../models/genreModel");

const Movies = require("../models/movieModel");

const movie = async (req, res) => {
  try {
    const movieList = await Movies.find().select("title ratings genre");
    res.status(200).json(movieList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const movieGenre = async (req, res) => {
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
};

const addMovie = async (req, res) => {
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
};

const updateMovie = async (req, res) => {
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
};

const updateMovieTitle = async (req, res) => {
  try {
    const movieId = req.params.movieId; // Get movieId from request parameters
    const { title, ratings } = req.body;

    const moviesDetails = {
      title,
      ratings,
    };

    // Check if the movie exists
    const existingMovie = await Movies.findById(movieId);

    if (!existingMovie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    // Check if the new title already exists
    const isExist = await Movies.findOne({ title });

    if (isExist && isExist._id.toString() !== movieId) {
      return res.status(409).json({
        message: "Movie with the provided title already exists",
      });
    }

    // Update the movie
    const updatedMovie = await Movies.findByIdAndUpdate(
      movieId,
      moviesDetails,
      {
        new: true,
      }
    );

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { _id } = req.body;
    const deleteMovie = await Movies.findByIdAndDelete(_id);
    if (deleteMovie) {
      res.status(200).json(deleteMovie);
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  movie,
  addMovie,
  updateMovie,
  deleteMovie,
  movieGenre,
  updateMovieTitle,
  updateMovieTitle,
};
