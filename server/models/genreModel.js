const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    maxLength: 255,
    minLength: 2,
    required: true,
    unique: [true, "No duplicate values allowed"],
  },
});

module.exports = mongoose.model("Genres", genreSchema);
