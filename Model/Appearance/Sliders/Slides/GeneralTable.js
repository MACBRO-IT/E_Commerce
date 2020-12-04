const mongoose =require("mongoose");

const SlidesGeneralTable = new mongoose.Schema({     
    Image :
    {
        type: String,
        required : true
    },
    Caption1 :
    {
        type: String,
        required : true
    },
    Caption2 :
    {
        type : String,
        required :true
    },
    Direction :
    {
        type : String,
        required :true
    },
    CalltoActionText :
    {
        type: String,
        required : true
    },
    CalltoActionURL :
    {
        type: String,
        required : true
    },
    window :
    {
        type : String,
        required :true
    },   
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SlidesGeneral",SlidesGeneralTable);