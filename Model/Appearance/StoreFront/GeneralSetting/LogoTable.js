const mongoose =require("mongoose");

const StoreFrontLogoTable = new mongoose.Schema({     
    Favicon :
    {
        type: String,
        required : true
    },
    HeaderLogo :
    {
        type: String,
        required : true
    },
    MailLogo :
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
module.exports = mongoose.model ("StoreFrontLogo",StoreFrontLogoTable);