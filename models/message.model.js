const { model , Schema , Types}= require('mongoose')

const schema = Schema({
    message:String,
    userId:{
 type:Types.ObjectId,
 ref:"user"
    }
    
})

module.exports = model('message' , schema)