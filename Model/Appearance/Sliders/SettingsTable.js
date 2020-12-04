const mongoose =require("mongoose");

const SlidersSettingsTable = new mongoose.Schema({     
    Name :
    {
        type: String,
        required : true
    },
    Speed :
    {
        type: String,
        required : true
    },
    Fade :
    {
        type : String,
        required :true
    },
    Autoplay :
    {
        type : String,
        required :true
    },
    AutoplaySpeed :
    {
        type: String,
        required : true
    },
    Dots :
    {
        type: String,
        required : true
    },
    Arrows :
    {
        type : String,
        required :true
    },   
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SlidersSettings",SlidersSettingsTable);