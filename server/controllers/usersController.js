const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");

const signup = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error)
    return res.json({
      status: 400,
      message: error.details[0].message,
    });

  // Checking if the user is alreadly in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.json({
      status: 400,
      message: "このメールアドレスは使用されています",
    });

  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const newUser = await user.save();
    const payload = {
      _id: newUser._id,
    };
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
    res.cookie("token", token, { httpOnly: true });
    res.json({
      status: 201,
      user: { id: newUser._id, name: newUser.name },
    });
  } catch (err) {
    res.json({
      status: 400,
      message: err.message,
    });
  }
};

const signin = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error)
    res.json({
      status: 400,
      message: error.details[0].message,
    });

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.json({
      status: 400,
      message: "メールアドレスが見つかりません",
    });

  // PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    res.json({
      status: 400,
      message: "パスワードが違います",
    });

  // Create and assign a token
  const payload = {
    _id: user._id,
  };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
  res.cookie("token", token, { httpOnly: true });
  res.json({
    status: 200,
    user: { id: user._id, name: user.name },
  });
};

const getInfo = async (req, res) => {
  const id = req.user._id;
  const user = await User.findById(id);
  res.json({
    status: 200,
    user: {
      id: id,
      name: user.name,
      email: user.email,
    },
  });
};

// アクセストークン生成
const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expires: "30s" });
};

module.exports = {
  signup,
  signin,
  getInfo,
};
