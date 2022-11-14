const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
exports.login = (req, res) => {
  res.render("login.ejs" ,{isLoggedIn:req.session.isLoggedIn});
};
 

exports.handleLogin = async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      var hour = 3600000;
      req.session.cookie.expires = new Date(Date.now() + hour);
      req.session.cookie.maxAge = hour;
      req.session.userId = user._id;
      req.session.name = user.name;
      req.session.isLoggedIn = true;
      res.redirect("/message");
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
};
