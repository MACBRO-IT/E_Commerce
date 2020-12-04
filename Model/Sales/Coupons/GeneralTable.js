const mongoose =require("mongoose");

const CouponsGeneralTable = new mongoose.Schema({     
    Name :
    {
        type: String,
        required : true
    },
    Code :
    {
        type: Date,
        required : true
    },
    DiscountType :
    {
        type : String,
        required :true
    },
    Value :
    {
        type : String,
        required :true
    }, 
    FreeShipping :
    {
        type : String,
        required :true
    }, 
    Startdate :
    {
        type : Date,
        required :true
    }, 
    Enddate :
    {
        type : Date,
        required :true
    }, 
    Status :
    {
        type : String,
        required :true
    }, 
    createdTime : {
        type : Date,
        default : Date.now
    }    
})
module.exports = mongoose.model ("CouponsGeneral",CouponsGeneralTable);