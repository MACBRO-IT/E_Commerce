const mongoose =require("mongoose");

const RazorpayTable = new mongoose.Schema({     
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
    KeyId :
    {
        type : String,
        required :true
    },
    KeySecret : {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("Razorpay",RazorpayTable);