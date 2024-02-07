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

const movies = async (req, res) => {
  const { page = 1, limit = 8, ratings, genre } = req.query;
  // const { ratings, genre } = req.body;

  try {
    let skip = 0;
    if (page > 1) {
      skip = +limit * (page - 1);
    }

    const query = {};
    if (genre && genre !== "all") {
      const genreIds = await Genres.find({ title: { $in: genre } }).select(
        "_id"
      );
      query.genre = { $in: genreIds };
    }
    if (ratings) {
      query.ratings = { $lte: ratings };
    }

    const movieList = await Movies.find(query)
      .select("title ratings genre image")
      .populate({ path: "genre", select: ["title"] })
      .sort()
      .skip(skip)
      .limit(+limit);

    const moviesCount = await Movies.countDocuments(query);
    const pageCount = Math.ceil(moviesCount / +limit) || 1;

    return res.status(200).json({ movieList, pageCount, page, genre, ratings });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// filter
const getfilterMovie = async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  const { ratings, genre } = req.body;

  try {
    let skip = (page - 1) * limit;

    const query = {};
    if (genre && genre !== "all") {
      const genreIds = await Genres.find({ title: { $in: genre } }).select(
        "_id"
      );
      query.genre = { $in: genreIds };
    }
    if (ratings) {
      query.ratings = { $lte: ratings };
    }

    const movieList = await Movies.find(query)
      .populate({ path: "genre", select: ["title"] })
      .sort(query.ratings ? { ratings: "desc" } : null)
      .skip(skip)
      .limit(limit);

    const moviesCount = await Movies.countDocuments(query);
    const pageCount = Math.ceil(moviesCount / limit) || 1;

    res.json({ movieList, pageCount, page, genre, ratings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const filterMovie = async (req, res) => {
  // const { genre } = req.body.genre.split(",");
  const { ratings, genre } = req.body;
  try {
    // Pagination
    const { page, limit } = req.query;
    let skip = 0;
    if (page > 1) {
      skip = +limit * (page - 1);
    }

    const query = {};
    if (genre && genre != "all") {
      const getGeneresId = await Genres.find({
        title: { $in: [...genre] },
      });
      const listOfIds = getGeneresId?.map((item) => {
        return item._id;
      });
      query.genre = { $in: [...listOfIds] };
    }
    if (ratings) {
      query.ratings = { $lte: ratings };
    }

    const movieList = await Movies.find(query)
      .populate({ path: "genre", select: ["title"] })
      .sort(query.rating ? { rating: "desc" } : null)
      .skip(skip)
      .limit(limit)
      .exec();

    const moviesCount = await Movies.find(query).countDocuments({});
    const pageCount = Math.ceil(moviesCount / +limit) || 1;

    res.status(200).json({ movieList, pageCount, page });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error fetching movies: ${error.message}` });
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
    const uploadAsync = util.promisify(upload.single("image"));
    await uploadAsync(req, res);

    let image;

    if (req.file) {
      const cloudinaryResult = await cloudinaryImg.uploader.upload(
        req.file.path
      );
      // const { secure_url: image } = cloudinaryResult;
      image = cloudinaryResult.secure_url;
    }

    const { title, ratings, genre } = req.body;

    let updateObject = { title, ratings, genre: JSON.parse(genre) };

    if (image) {
      updateObject.image = image;
    }

    const updatedMovie = await Movies.findByIdAndUpdate(movieId, updateObject, {
      new: true,
    });

    if (!updatedMovie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    return res.status(200).json(updatedMovie);
  } catch (error) {
    console.error("Error updating movie:", error);
    // Log the error using a logging library in a production environment
    res.status(500).json({
      message: `Error updating movie: ${error.message || "Unknown error"}`,
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
  movies,
  filterMovie,
  getfilterMovie,
  getfilterMovie,
};
