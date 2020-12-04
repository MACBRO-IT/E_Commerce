const mongoose =require("mongoose");

const MediaTable = new mongoose.Schema({     
    Media :
    {
        type: String,
        required : true
    },
     
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("Media",MediaTable);