const express = require('express')
const { dbConnection } = require('./dbConnection/dbConnection')
const app = express()

const port = 3000
var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/sara7aEjs',
    collection: 'mySessions'
  });
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
  }))
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(require('./routes/home.route'))
app.use(require('./routes/login.route'))
app.use(require('./routes/message.route'))
app.use(require('./routes/register.route'))
app.use(require('./routes/user.route'))
app.get('/logout' , (req,res)=>{
  req.session.destroy(() =>{
   res.redirect('/login')
  })
})
dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))