const mongoose = require('mongoose');

let schema=new mongoose.Schema({
    firstNmae:{
        type:String,
        required:[true,`firstName is mandatory`],
    },
    lastName:{
        type:String,
        required:[true,`lastName is mandatory`],
    },

    phoneNumber:{
        type:Number,
        required:[true,`lphoneNumber is mandatory`],
        unique:true,

    },
    email:{
        type:String,
        required:[true,`email is mandatory`],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is mandatory'],
        minlength:[8,'Password should be at least 8 characters']
    }
})

module.exports=mongoose.model(`userdetail`,schema)