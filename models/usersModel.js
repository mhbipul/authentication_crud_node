const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    email:{
        type : String,
        required : [true, "Please provide an email"],
        trim: true ,
        unique : [true, "Email must be Unique"],
        lowercase : true,
    },
    password : {
        type : String,
        required : [true, "Must provide a password"],
        select : false,
        trim : true,
    },
    verified : {
        type : Boolean,
        default: false
    },
    verificationCode : {
        type:String,
        select: false
    },
    verificationCodeValidation : {
        type:Number,
        select: false
    },
    passwordCode : {
        type:String,
        select: false
    },
    passwordCodeValidation : {
        type:Number,
        select: false
    }
},{
    timestamps : true
}

)
module.exports = mongoose.model("User",userSchema)