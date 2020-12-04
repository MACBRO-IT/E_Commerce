const mongoose =require("mongoose");

const StoreFrontNewsletterTable = new mongoose.Schema({     
    NewsLetter_Id :
    {
        type: String,
        required : true
    },
    BackgroundImage :
    {
        type: String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("StoreFrontNewsletter",StoreFrontNewsletterTable);