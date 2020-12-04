const mongoose =require("mongoose");

const TagGeneralTable = new mongoose.Schema({  
    Name :
    {
        type: String,
        required : true
    }, 
    Tag_Id :
    {
        type: String,
        required : true
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("TagGeneral",TagGeneralTable);