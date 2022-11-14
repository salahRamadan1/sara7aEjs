exports.User = (req, res) => {
  res.render("user.ejs",{isLoggedIn:req.session.isLoggedIn , userId:req.params.id});
};

