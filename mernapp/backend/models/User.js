const mongoose = require('mongoose')

const { Schema } = mongoose;

const UserSchema = new Schema({                 //Things needed to sign for user
    name:{
        type: String,
        required:true
    },
    location:{
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
    },
    date:{
        type:Date,
        dafault:Date.now
    }
});

module.exports = mongoose.model('user',UserSchema)