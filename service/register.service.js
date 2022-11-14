const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.Register = (req, res) => {
  res.render("register.ejs",{isLoggedIn:req.session.isLoggedIn});
};
module.exports.handleRegister = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    res.redirect("/register");
  } else {
    bcrypt.hash(password, 5, async function (err, hash) {
      let isUser = new userModel({ name, email, password: hash });
      isUser.save();
    });

    res.redirect("/login");
  }
};
