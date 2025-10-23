const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("Check ABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log(">>> req.body: ", req.body);
  res.send("Create a new user");
};

module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
};
