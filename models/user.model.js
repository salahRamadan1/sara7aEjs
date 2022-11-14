const { model , Schema}= require('mongoose')

const schema = Schema({
    name:String,
    email:String,
    password:String
})

module.exports = model('user' , schema)