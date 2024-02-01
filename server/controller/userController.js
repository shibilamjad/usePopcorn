const Users = require("../models/userModel");
const {
  generatePasswordHash,
  checkePasswordHash,
} = require("../utils/bcrypt ");

const userList = async (req, res) => {
  try {
    const usersList = await Users.find().select("name age gender movie");
    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const { userName, password, email } = req.body;

    const isExist = await Users.findOne({ email });
    // create user
    if (!isExist) {
      const passwordHashed = await generatePasswordHash(password, 10);
      const createUser = await Users.create({
        userName,
        email,
        password: passwordHashed,
      });
      if (createUser) {
        return res.json({
          message: "Account has been created",
        });
      }
    }
    // user isExist
    return res.status(404).json({
      message: "Email already exist",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User is not valid",
      });
      const passwordCheck = await checkePasswordHash(password, user.password);
      if (!passwordCheck) {
        return res.status(404).json({
          message: "Username/Password is not valid",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const addUserWatchList = async (req, res) => {
  try {
    const userId = req.params.userId; //pass with params
    const movieId = req.body.movieId; // pass with body

    const usersList = await Users.findByIdAndUpdate(
      userId,
      {
        $push: {
          movie: movieId,
        },
      },
      { new: true }
    );
    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const userWatchList = async (req, res) => {
  try {
    const watchLater = await Users.findById(req.params.userId)
      .select("movie")
      .populate("movie");
    res.status(200).json(watchLater);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { userList, userWatchList, register, addUserWatchList };
