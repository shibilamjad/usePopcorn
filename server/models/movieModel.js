const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    maxLength: 255,
    minLength: 2,
    lowercase: true,
    required: true,
  },
  ratings: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  genre: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genres",
    },
  ],
});

module.exports = mongoose.model("Movies", movieSchema);
