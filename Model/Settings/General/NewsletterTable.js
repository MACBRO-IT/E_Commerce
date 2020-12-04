const mongoose =require("mongoose");

const SettingNewsletterTable = new mongoose.Schema({  
    Newsletter_Id :
    {
        type: String,
        required : true
    },   
    Newsletter :
    {
        type: String,
        required : true
    },
    MailchimpAPIKey :
    {
        type: String,
        required : true
    },
    MailchimpListID :
    {
        type : String,
        required :true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SettingNewsletter",SettingNewsletterTable);