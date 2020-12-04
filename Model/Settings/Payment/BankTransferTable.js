const mongoose =require("mongoose");

const BankTransferTable = new mongoose.Schema({     
    Bank_Id :
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
    Instructions : 
    {
        type : String,
        required :true
    },
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("BankTransfer",BankTransferTable);