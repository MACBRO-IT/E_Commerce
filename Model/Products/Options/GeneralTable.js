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
       
    },
    Required : 
    {
        type: String,
       
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("OptionsGeneral",OptionsGeneralTable);