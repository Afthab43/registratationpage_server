const mongoose = require('mongoose');

let connectDB=(url)=>{
    mongoose.connect(url)
}

module.exports=connectDB