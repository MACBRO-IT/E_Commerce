const mongoose =require("mongoose");

const StoreFrontNewsletterTable = new mongoose.Schema({     
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