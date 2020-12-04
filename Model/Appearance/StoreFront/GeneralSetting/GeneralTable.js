const mongoose =require("mongoose");

const StoreFrontGeneralTable = new mongoose.Schema({     
    General_Id :
    {
        type: String,
        required : true
    },
    WelcomeText :
    {
        type: String,
        required : true
    },
    ThemeColor :
    {
        type: String,
        required : true
    },
    MailThemeColor :
    {
        type : String,
        required :true
    },
    Slider :
    {
        type : String,
        required :true
    },
    TermsConditionsPage :
    {
        type: String,
        required : true
    },
    PrivacyPolicyPage :
    {
        type: String,
        required : true
    },
    Address :
    {
        type : String,
        required :true
    },   
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("StoreFrontGeneral",StoreFrontGeneralTable);