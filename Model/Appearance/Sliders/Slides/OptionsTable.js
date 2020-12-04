const mongoose =require("mongoose");

const SlidesOptionsTable = new mongoose.Schema({    
    Options_Id :
    {
        type: String,
        required : true
    }, 
    Delay :
    {
        type: String,
        required : true
    },
    Effect :
    {
        type: String,
        required : true
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SlidesOptions",SlidesOptionsTable);