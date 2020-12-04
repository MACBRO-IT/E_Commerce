const mongoose =require("mongoose");

const SettingGeneralTable = new mongoose.Schema({     
    SupportedCountries :
    {
        type: String,
        required : true
    },
    DefaultCountry :
    {
        type: String,
        required : true
    },
    SupportedLocales :
    {
        type : String,
        required :true
    },
    DefaultLocale :
    {
        type : String,
        required :true
    },
    DefaultTimezone : {
        type : String,
        required :true
    },
    CustomerRole :
    {
        type : String,
        required :true
    },
    ReviewsRatings :
    {
        type : String,
        required :true
    },
    AutoApproveReviews : {
        type : String,
        required :true
    },
    WelcomeEmail :
    {
        type : String,
        required :true
    },
    AdminOrderEmail :
    {
        type : String,
        required :true
    },
    OrderStatusEmail : {
        type : String,
        required :true
    },  
    InvoiceEmail :
    {
        type : String,
        required :true
    },
    CookieBar : {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("SettingGeneral",SettingGeneralTable);