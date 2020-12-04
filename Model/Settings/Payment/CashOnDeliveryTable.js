const mongoose =require("mongoose");

const CashOnDeliveryTable = new mongoose.Schema({     
    Cash_Id :
    {
        type: String,
        required : true
    },
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
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CashOnDelivery",CashOnDeliveryTable);