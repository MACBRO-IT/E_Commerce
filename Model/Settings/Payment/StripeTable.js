const mongoose =require("mongoose");

const StripeTable = new mongoose.Schema({     
    Status :
    {
        type: String,
        required : true
    },
    Label :
    {
        type: String,
        required : true
    },
    Description :
    {
        type : String,
        required :true
    },
    PublishKey :
    {
        type : String,
        required :true
    },
    SecretKey : {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("Stripe",StripeTable);