const Users = require("../models/userModel");
const Movies = require("../models/movieModel");
const Admin = require("../models/adminModel");
const {
  generatePasswordHash,
  checkePasswordHash,
} = require("../utils/bcrypt ");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../utils/jwt");
const { use } = require("../routes/user");

const userList = async (req, res) => {
  try {
    const usersList = await Users.find().select(
      "userName email watchLater accessToken"
    );

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

    const isExistEmail = await Users.findOne({ email });
    const isExistUserName = await Users.findOne({ userName });

    // Check if email already exists
    if (isExistEmail) {
      return res.status(409).json({
        message: `${email} already created`,
      });
    }

    // Check if username already exists
    if (isExistUserName) {
      return res.status(400).json({
        message: `${userName} already created`,
      });
    }

    // create user
    const passwordHashed = await generatePasswordHash(password);
    const createUser = await Users.create({
      userName,
      email,
      password: passwordHashed,
    });

    // Generate tokens for the newly registered user
    const accessToken = generateAccessToken(createUser._id);
    const refreshToken = generateRefreshToken(createUser._id);

    // Set refreshToken as an HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    if (createUser) {
      return res.json({
        _id: createUser._id,
        email: createUser.email,
        userName: createUser.userName,
        accessToken,
      });
    }
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
      return res.status(401).json({
        message: "User is not valid",
      });
    }
    const validPassword = await checkePasswordHash(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Username/Password is not valid",
      });
    }
    // generates access token
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    res.json({
      _id: user._id,
      email: user.email,
      userName: user.userName,
      accessToken,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const refreshToken = async (req, res) => {
  const userId = verifyRefreshToken(req.cookies.refreshToken);

  if (!userId) {
    return res.status(401).json({
      message: "Refresh token is expired",
    });
  }
  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken(userId);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
  });
  res.json({ accessToken });
};

const logout = async (req, res) => {
  try {
    res.clearCookie("refreshToken");
    res.json({
      message: "Logged out  ",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const userWatchList = async (req, res) => {
  const { userId } = req.body;
  try {
    const watchLater = await Users.findById(userId)
      .select("watchLater")
      .populate({
        path: "watchLater",
        populate: { path: "genre", select: "title" },
      });

    res.status(200).json(watchLater);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const addUserWatchList = async (req, res) => {
  try {
    const { movieId, userId } = req.body;

    const user = await Users.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isExistMovieId = user.watchLater.includes(movieId);
    if (isExistMovieId) {
      return res.status(400).json({
        success: false,
        message: "Movie already selected",
      });
    }

    const updatedUser = await Users.findByIdAndUpdate(
      { _id: userId },
      { $push: { watchLater: movieId } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: `${movieId} successfully added`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleateWatchLater = async (req, res) => {
  try {
    const { movieId, userId } = req.body;

    // Find the user and update the watchLater array using $pull
    const user = await Users.findByIdAndUpdate(
      userId,
      { $pull: { watchLater: movieId } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: `${movieId} removed from watchLater`,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// admin login

const adminRegister = async (req, res) => {
  try {
    const { userName, password, email } = req.body;

    const isExistEmail = await Admin.findOne({ email });
    const isExistUserName = await Admin.findOne({ userName });

    // Check if email already exists
    if (isExistEmail) {
      return res.status(409).json({
        message: `${email} already created`,
      });
    }

    // Check if username already exists
    if (isExistUserName) {
      return res.status(400).json({
        message: `${userName} already created`,
      });
    }

    // create user
    const passwordHashed = await generatePasswordHash(password);
    const createUser = await Admin.create({
      userName,
      email,
      password: passwordHashed,
    });

    // Generate tokens for the newly registered user
    const accessToken = generateAccessToken(createUser._id);
    const refreshToken = generateRefreshToken(createUser._id);

    // Set refreshToken as an HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    if (createUser) {
      return res.json({
        _id: createUser._id,
        email: createUser.email,
        userName: createUser.userName,
        accessToken,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User is not valid",
      });
    }
    const validPassword = await checkePasswordHash(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Username/Password is not valid",
      });
    }
    // generates access token
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    res.json({
      _id: user._id,
      email: user.email,
      userName: user.userName,
      accessToken,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  userList,
  userWatchList,
  register,
  addUserWatchList,
  login,
  deleateWatchLater,
  logout,
  refreshToken,
  adminRegister,
  adminLogin,
};
