const mongoose = require('mongoose')

module.exports.dbConnection = ()=>{




    mongoose.connect('mongodb://localhost:27017/sara7aEjs').then(()=>{
        console.log('db connection')
    }).catch((err)=>{
        console.log('error' , err);
    })
}