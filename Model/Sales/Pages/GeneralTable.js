const mongoose =require("mongoose");

const PagesGeneralTable = new mongoose.Schema({  
    Pages_Id :
    {
        type: String,
        required : true
    },   
    Name :
    {
        type: String,
        required : true
    },
    Body :
    {
        type: String,
        required : true
    },
    Status :
    {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("PagesGeneral",PagesGeneralTable);