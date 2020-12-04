const mongoose =require("mongoose");

const PagesSEOTable = new mongoose.Schema({     
    MetaTitle :
    {
        type: String,
        required : true
    },
    MetaDescription :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("PagesSEO",PagesSEOTable);