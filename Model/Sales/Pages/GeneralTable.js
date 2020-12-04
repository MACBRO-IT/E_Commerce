const mongoose =require("mongoose");

const PagesGeneralTable = new mongoose.Schema({     
    Name :
    {
        type: String,
        required : true
    },
    Body :
    {
        type: Date,
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