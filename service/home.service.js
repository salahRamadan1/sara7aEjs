exports.Home = (req,res)=>{

res.render('index.ejs' , {isLoggedIn:req.session.isLoggedIn})

}