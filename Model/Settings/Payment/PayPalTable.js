const mongoose =require("mongoose");

const PayPalTable = new mongoose.Schema({     
    PayPal_Id :
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
    Sandbox :
    {
        type : String,
        required :true
    },
    ClientID : {
        type : String,
        required :true
    },  
    Secret : {
        type : String,
        required :true
    },  
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("PayPal",PayPalTable);