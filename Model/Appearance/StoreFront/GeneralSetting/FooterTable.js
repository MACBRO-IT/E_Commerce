const mongoose =require("mongoose");

const StoreFrontFooterTable = new mongoose.Schema({   
    Footer_Id :
    {
        type: String,
        required : true
    },  
    FooterTags :
    {
        type: String,
        required : true
    },
    FooterCopyrightText :
    {
        type: String,
        required : true
    },
    PaymentMethodsImage :
    {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("StoreFrontFooter",StoreFrontFooterTable);