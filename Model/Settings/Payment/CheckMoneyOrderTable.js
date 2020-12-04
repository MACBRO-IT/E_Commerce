const mongoose =require("mongoose");

const CheckMoneyOrderTable = new mongoose.Schema({     
    Money_Id :
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
module.exports = mongoose.model ("CheckMoneyOrder",CheckMoneyOrderTable);