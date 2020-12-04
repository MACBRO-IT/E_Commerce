const mongoose =require("mongoose");

const OptionsGeneralTable = new mongoose.Schema({     
    Options_Id :
    {
        type: String,
        required : true
    },
    Name :
    {
        type: String,
        required : true
    },
    Type : 
    {
        type: String,
        required : true
    },
    Required : 
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("OptionsGeneral",OptionsGeneralTable);