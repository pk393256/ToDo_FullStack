const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

const userModel = mongoose.model('User',userShema)

module.exports = {
    userModel,
}
