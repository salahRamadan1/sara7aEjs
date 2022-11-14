
const messageModel = require('../models/message.model')
exports.Message =async (req, res) => {
//   console.log(res.session.name);
let messages = await messageModel.find({userId :req.session.userId})
var fullUrl = req.protocol + '://' + req.get('host')  

  if (req.session.isLoggedIn) {
    res.render("message.ejs", {
      name: req.session.name,
      isLoggedIn: req.session.isLoggedIn,
      userId:req.session.userId,
      messages,
      fullUrl
    });
  } else {
    res.redirect("/login");
  }
};
exports.handelMessage =async (req,res)=>{
 let message =await messageModel({message:req.body.message , userId:req.params.id})
 message.save()

 res.redirect('/user/' + req.params.id)
}
